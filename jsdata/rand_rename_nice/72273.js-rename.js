'use strict';
const {
  basename : basename,
  extname : extname
} = require("path");
const util = require("util");
const Chunk = require("./Chunk");
const Module = require("./Module");
const {
  parseResource : parseResource
} = require("./util/identifier");
const REGEXP = /\[\\*([\w:]+)\\*\]/gi;
const prepareId = (value) => {
  if (typeof value !== "string") {
    return value;
  }
  if (/^"\s\+*.*\+\s*"$/.test(value)) {
    const t = /^"\s\+*\s*(.*)\s*\+\s*"$/.exec(value);
    return `" + (${t[1]} + "").replace(/(^[.-]|[^a-zA-Z0-9_-])+/g, "_") + "`;
  }
  return value.replace(/(^[.-]|[^a-zA-Z0-9_-])+/g, "_");
};
const hashLength = (h, p, params, i) => {
  const update = (n, value, other) => {
    let v;
    const r = value && parseInt(value, 10);
    if (r && p) {
      v = p(r);
    } else {
      const str = h(n, value, other);
      v = r ? str.slice(0, r) : str;
    }
    if (params) {
      params.immutable = true;
      if (Array.isArray(params[i])) {
        params[i] = [...params[i], v];
      } else {
        if (params[i]) {
          params[i] = [params[i], v];
        } else {
          params[i] = v;
        }
      }
    }
    return v;
  };
  return update;
};
const replacer = (element, fullMatch) => {
  const replace = (p2, t, by) => {
    if (typeof element === "function") {
      element = element();
    }
    if (element === null || element === undefined) {
      if (!fullMatch) {
        throw new Error(`Path variable ${p2} not implemented in this context: ${by}`);
      }
      return "";
    } else {
      return `${element}`;
    }
  };
  return replace;
};
const deprecationCache = new Map;
const deprecatedFunction = (() => {
  return () => {
  };
})();
const deprecated = (fn, params, msg) => {
  let text = deprecationCache.get(params);
  if (text === undefined) {
    text = util.deprecate(deprecatedFunction, params, msg);
    deprecationCache.set(params, text);
  }
  return (...args) => {
    text();
    return fn(...args);
  };
};
const replacePathVariables = (format, options, path) => {
  const system = options.chunkGraph;
  const t = new Map;
  if (typeof options.filename === "string") {
    const {
      path : path,
      query : value,
      fragment : key
    } = parseResource(options.filename);
    const name = extname(path);
    const url = basename(path);
    const result = url.slice(0, url.length - name.length);
    const index = path.slice(0, path.length - url.length);
    t.set("file", replacer(path));
    t.set("query", replacer(value, true));
    t.set("fragment", replacer(key, true));
    t.set("path", replacer(index, true));
    t.set("base", replacer(url));
    t.set("name", replacer(result));
    t.set("ext", replacer(name, true));
    t.set("filebase", deprecated(replacer(url), "[filebase] is now [base]", "DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_FILENAME"));
  }
  if (options.hash) {
    const source = hashLength(replacer(options.hash), options.hashWithLength, path, "fullhash");
    t.set("fullhash", source);
    t.set("hash", deprecated(source, "[hash] is now [fullhash] (also consider using [chunkhash] or [contenthash], see documentation for details)", "DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH"));
  }
  if (options.chunk) {
    const data = options.chunk;
    const state = options.contentHashType;
    const f = replacer(data.id);
    const g = replacer(data.name || data.id);
    const expRules = hashLength(replacer(data instanceof Chunk ? data.renderedHash : data.hash), "hashWithLength" in data ? data.hashWithLength : undefined, path, "chunkhash");
    const m = hashLength(replacer(options.contentHash || state && data.contentHash && data.contentHash[state]), options.contentHashWithLength || ("contentHashWithLength" in data && data.contentHashWithLength ? data.contentHashWithLength[state] : undefined), path, "contenthash");
    t.set("id", f);
    t.set("name", g);
    t.set("chunkhash", expRules);
    t.set("contenthash", m);
  }
  if (options.module) {
    const data = options.module;
    const source = replacer(() => {
      return prepareId(data instanceof Module ? system.getModuleId(data) : data.id);
    });
    const i = hashLength(replacer(() => {
      return data instanceof Module ? system.getRenderedModuleHash(data, options.runtime) : data.hash;
    }), "hashWithLength" in data ? data.hashWithLength : undefined, path, "modulehash");
    const value = hashLength(replacer(options.contentHash), undefined, path, "contenthash");
    t.set("id", source);
    t.set("modulehash", i);
    t.set("contenthash", value);
    t.set("hash", options.contentHash ? value : i);
    t.set("moduleid", deprecated(source, "[moduleid] is now [id]", "DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID"));
  }
  if (options.url) {
    t.set("url", replacer(options.url));
  }
  if (typeof options.runtime === "string") {
    t.set("runtime", replacer(() => {
      return prepareId(options.runtime);
    }));
  } else {
    t.set("runtime", replacer("_"));
  }
  if (typeof format === "function") {
    format = format(options, path);
  }
  format = format.replace(REGEXP, (mode, CardNo) => {
    if (CardNo.length + 2 === mode.length) {
      const collection = /^(\w+)(?::(\w+))?$/.exec(CardNo);
      if (!collection) {
        return mode;
      }
      const [, modelFoobar, modelFoovar] = collection;
      const render = t.get(modelFoobar);
      if (render !== undefined) {
        return render(mode, modelFoovar, format);
      }
    } else {
      if (mode.startsWith("[\\") && mode.endsWith("\\]")) {
        return `[${mode.slice(2, -2)}]`;
      }
    }
    return mode;
  });
  return format;
};
const plugin = "TemplatedPathPlugin";
class TemplatedPathPlugin {
  apply(self) {
    self.hooks.compilation.tap(plugin, (options) => {
      options.hooks.assetPath.tap(plugin, replacePathVariables);
    });
  }
}
module.exports = TemplatedPathPlugin;

