'use strict';
const {
  extname : extname
} = require("path");
const Promise = require("bluebird");
const getExtname = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  const e = extname(str) || str;
  return e.startsWith(".") ? e.slice(1) : e;
};
class Renderer {
  constructor() {
    this.store = {};
    this.storeSync = {};
  }
  list(sync) {
    return sync ? this.storeSync : this.store;
  }
  get(name, component) {
    const store = this[component ? "storeSync" : "store"];
    return store[getExtname(name)] || store[name];
  }
  isRenderable(type) {
    return Boolean(this.get(type));
  }
  isRenderableSync(path) {
    return Boolean(this.get(path, true));
  }
  getOutput(callback) {
    const renderer = this.get(callback);
    return renderer ? renderer.output : "";
  }
  register(name, output, fn, s) {
    if (!name) {
      throw new TypeError("name is required");
    }
    if (!output) {
      throw new TypeError("output is required");
    }
    if (typeof fn !== "function") {
      throw new TypeError("fn must be a function");
    }
    name = getExtname(name);
    output = getExtname(output);
    if (s) {
      this.storeSync[name] = fn;
      this.storeSync[name].output = output;
      this.store[name] = Promise.method(fn);
    } else {
      if (fn.length > 2) {
        fn = Promise.promisify(fn);
      }
      this.store[name] = fn;
    }
    this.store[name].output = output;
    this.store[name].compile = fn.compile;
  }
}
module.exports = Renderer;

