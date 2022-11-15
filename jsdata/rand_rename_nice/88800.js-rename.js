'use strict';
const fs = Plugin.fs;
const path = Plugin.path;
const createHash = Npm.require("crypto").createHash;
const assert = Npm.require("assert");
const LRU = Npm.require("lru-cache");
CachingCompilerBase = class CachingCompilerBase {
  constructor({
    compilerName : compilerName,
    defaultCacheSize : defaultCacheSize,
    maxParallelism : maxParallelism = 20
  }) {
    this._compilerName = compilerName;
    this._maxParallelism = maxParallelism;
    const i = compilerName.toUpperCase().replace("/-/g", "_").replace(/[^A-Z0-9_]/g, "");
    const envVarPrefix = "METEOR_" + i + "_CACHE_";
    const debugEnvVar = envVarPrefix + "DEBUG";
    this._cacheDebugEnabled = !!process.env[debugEnvVar];
    const cacheSizeEnvVar = envVarPrefix + "SIZE";
    this._cacheSize = +process.env[cacheSizeEnvVar] || defaultCacheSize;
    this._diskCache = null;
    this._callCount = 0;
    this._afterLinkCallbacks = [];
  }
  getCacheKey(inputFile) {
    throw Error("CachingCompiler subclass should implement getCacheKey!");
  }
  addCompileResult(err, result) {
    throw Error("CachingCompiler subclass should implement addCompileResult!");
  }
  compileResultSize(compileResult) {
    throw Error("CachingCompiler subclass should implement compileResultSize!");
  }
  stringifyCompileResult(compileResult) {
    return JSON.stringify(compileResult);
  }
  parseCompileResult(stringifiedCompileResult) {
    return this._parseJSONOrNull(stringifiedCompileResult);
  }
  _parseJSONOrNull(json) {
    try {
      return JSON.parse(json);
    } catch (e) {
      if (e instanceof SyntaxError) {
        return null;
      }
      throw e;
    }
  }
  _cacheDebug(message) {
    if (!this._cacheDebugEnabled) {
      return;
    }
    console.log(`CACHE(${this._compilerName}): ${message}`);
  }
  setDiskCacheDirectory(diskCache) {
    if (this._diskCache) {
      throw Error("setDiskCacheDirectory called twice?");
    }
    this._diskCache = diskCache;
  }
  sourceMapSize(sm) {
    if (!sm) {
      return 0;
    }
    return sm.mappings.length + (sm.sourcesContent || []).reduce(function(dirname, rest) {
      return dirname + (rest ? rest.length : 0);
    }, 0);
  }
  afterLink() {
    this._afterLinkCallbacks.splice(0).forEach((saveNotifs) => {
      saveNotifs();
    });
  }
  _deepHash(val) {
    const hash = createHash("sha1");
    let type = typeof val;
    if (val === null) {
      type = "null";
    }
    hash.update(type + "\x00");
    switch(type) {
      case "object":
        const bucketSortedColumns = Object.keys(val);
        if (!Array.isArray(val)) {
          bucketSortedColumns.sort();
        }
        bucketSortedColumns.forEach((key) => {
          if (typeof val[key] === "function") {
            return;
          }
          hash.update(key + "\x00").update(this._deepHash(val[key]));
        });
        break;
      case "function":
        assert.ok(false, "cannot hash function objects");
        break;
      default:
        hash.update("" + val);
        break;
    }
    return hash.digest("hex");
  }
  _writeFile(filename, json) {
    const cacheTmpPath = filename + ".tmp." + Random.id();
    try {
      fs.writeFileSync(cacheTmpPath, json);
      fs.renameSync(cacheTmpPath, filename);
    } catch (e) {
      this._cacheDebug(e);
    }
  }
  _readFileOrNull(filename) {
    try {
      return fs.readFileSync(filename, "utf8");
    } catch (err) {
      if (err && err.code === "ENOENT") {
        return null;
      }
      throw err;
    }
  }
};
CachingCompiler = class CachingCompiler extends CachingCompilerBase {
  constructor({
    compilerName : compilerName,
    defaultCacheSize : defaultCacheSize,
    maxParallelism : maxParallelism = 20
  }) {
    super({
      compilerName : compilerName,
      defaultCacheSize : defaultCacheSize,
      maxParallelism : maxParallelism
    });
    this._cache = new LRU({
      max : this._cacheSize,
      length : (value) => {
        return this.compileResultSize(value);
      }
    });
  }
  compileOneFile(inputFile) {
    throw Error("CachingCompiler subclass should implement compileOneFile!");
  }
  async processFilesForTarget(inputFiles) {
    const i = [];
    const coordinators = this._cacheDebugEnabled && Object.create(null);
    inputFiles.forEach((inputFile) => {
      if (coordinators) {
        coordinators[inputFile.getArch()] = 1;
      }
      const set = () => {
        const absoluteImportPath = this._deepHash(this.getCacheKey(inputFile));
        let cacheEntry = this._cache.get(absoluteImportPath);
        if (!cacheEntry) {
          cacheEntry = this._readCache(absoluteImportPath);
          if (cacheEntry) {
            this._cacheDebug(`Loaded ${inputFile.getDisplayPath()}`);
          }
        }
        if (!cacheEntry) {
          i.push(inputFile.getDisplayPath());
          cacheEntry = Promise.await(this.compileOneFile(inputFile));
          if (!cacheEntry) {
            return;
          }
          this._cache.set(absoluteImportPath, cacheEntry);
          this._writeCacheAsync(absoluteImportPath, cacheEntry);
        }
        return cacheEntry;
      };
      if (this.compileOneFileLater && inputFile.supportsLazyCompilation) {
        this.compileOneFileLater(inputFile, set);
      } else {
        const compileResult = set();
        if (compileResult) {
          this.addCompileResult(inputFile, compileResult);
        }
      }
    });
    if (this._cacheDebugEnabled) {
      this._afterLinkCallbacks.push(() => {
        i.sort();
        this._cacheDebug(`Ran (#${++this._callCount}) on: ${JSON.stringify(i)} ${JSON.stringify(Object.keys(coordinators).sort())}`);
      });
    }
  }
  _cacheFilename(cacheKey) {
    if (!/^[a-f0-9]+$/.test(cacheKey)) {
      throw Error("bad cacheKey: " + cacheKey);
    }
    return path.join(this._diskCache, cacheKey + ".cache");
  }
  _readCache(cacheKey) {
    if (!this._diskCache) {
      return null;
    }
    const cacheFilename = this._cacheFilename(cacheKey);
    const cacheEntry = this._readAndParseCompileResultOrNull(cacheFilename);
    if (!cacheEntry) {
      return null;
    }
    this._cache.set(cacheKey, cacheEntry);
    return cacheEntry;
  }
  _writeCacheAsync(cacheKey, compileResult) {
    if (!this._diskCache) {
      return;
    }
    const path = this._cacheFilename(cacheKey);
    const projXml = this.stringifyCompileResult(compileResult);
    this._writeFile(path, projXml);
  }
  _readAndParseCompileResultOrNull(filename) {
    const compileResultString = this._readFileOrNull(filename);
    return this.parseCompileResult(compileResultString);
  }
};

