'use strict';
const semver = require("semver");
const url = require("url");
const path = require("path");
const log = require("npmlog");
const headersTarballRange = ">= 3.0.0 || ~0.12.10 || ~0.10.42";
const bitsre = /\/win-(x86|x64|arm64)\//;
const bitsreV3 = /\/win-(x86|ia32|x64)\//;
function processRelease(argv, gyp, defaultVersion, defaultRelease) {
  var version = semver.valid(argv[0]) && argv[0] || gyp.opts.target || defaultVersion;
  var versionSemver = semver.parse(version);
  var overrideDistUrl = gyp.opts["dist-url"] || gyp.opts.disturl;
  var isDefaultVersion;
  var isIojs;
  var name;
  var distBaseUrl;
  var baseUrl;
  var libUrl32;
  var libUrl64;
  var result;
  var tarballUrl;
  var canGetHeaders;
  if (!versionSemver) {
    return {
      version : version
    };
  }
  version = versionSemver.version;
  isDefaultVersion = version === semver.parse(defaultVersion).version;
  if (!isDefaultVersion) {
    defaultRelease = null;
  }
  if (defaultRelease) {
    name = defaultRelease.name.replace(/io\.js/, "iojs");
  } else {
    isIojs = versionSemver.major >= 1 && versionSemver.major < 4;
    name = isIojs ? "iojs" : "node";
  }
  if (!overrideDistUrl && process.env.NODEJS_ORG_MIRROR) {
    overrideDistUrl = process.env.NODEJS_ORG_MIRROR;
  }
  if (overrideDistUrl) {
    log.verbose("download", "using dist-url", overrideDistUrl);
  }
  if (overrideDistUrl) {
    distBaseUrl = overrideDistUrl.replace(/\/+$/, "");
  } else {
    distBaseUrl = "https://nodejs.org/dist";
  }
  distBaseUrl = distBaseUrl + ("/v" + version + "/");
  if (defaultRelease && defaultRelease.headersUrl && !overrideDistUrl) {
    baseUrl = url.resolve(defaultRelease.headersUrl, "./");
    libUrl32 = resolveLibUrl(name, defaultRelease.libUrl || baseUrl || distBaseUrl, "x86", versionSemver.major);
    libUrl64 = resolveLibUrl(name, defaultRelease.libUrl || baseUrl || distBaseUrl, "x64", versionSemver.major);
    result = resolveLibUrl(name, defaultRelease.libUrl || baseUrl || distBaseUrl, "arm64", versionSemver.major);
    tarballUrl = defaultRelease.headersUrl;
  } else {
    baseUrl = distBaseUrl;
    libUrl32 = resolveLibUrl(name, baseUrl, "x86", versionSemver.major);
    libUrl64 = resolveLibUrl(name, baseUrl, "x64", versionSemver.major);
    result = resolveLibUrl(name, baseUrl, "arm64", versionSemver.major);
    canGetHeaders = semver.satisfies(versionSemver, headersTarballRange);
    tarballUrl = url.resolve(baseUrl, name + "-v" + version + (canGetHeaders ? "-headers" : "") + ".tar.gz");
  }
  return {
    version : version,
    semver : versionSemver,
    name : name,
    baseUrl : baseUrl,
    tarballUrl : tarballUrl,
    shasumsUrl : url.resolve(baseUrl, "SHASUMS256.txt"),
    versionDir : (name !== "node" ? name + "-" : "") + version,
    ia32 : {
      libUrl : libUrl32,
      libPath : normalizePath(path.relative(url.parse(baseUrl).path, url.parse(libUrl32).path))
    },
    x64 : {
      libUrl : libUrl64,
      libPath : normalizePath(path.relative(url.parse(baseUrl).path, url.parse(libUrl64).path))
    },
    arm64 : {
      libUrl : result,
      libPath : normalizePath(path.relative(url.parse(baseUrl).path, url.parse(result).path))
    }
  };
}
function normalizePath(url) {
  return path.normalize(url).replace(/\\/g, "/");
}
function resolveLibUrl(name, defaultUrl, arch, versionMajor) {
  var base = url.resolve(defaultUrl, "./");
  var i = bitsre.test(defaultUrl) || versionMajor === 3 && bitsreV3.test(defaultUrl);
  if (!i) {
    if (versionMajor >= 1) {
      return url.resolve(base, "win-" + arch + "/" + name + ".lib");
    }
    return url.resolve(base, (arch === "x86" ? "" : arch + "/") + name + ".lib");
  }
  return defaultUrl.replace(versionMajor === 3 ? bitsreV3 : bitsre, "/win-" + arch + "/");
}
module.exports = processRelease;
