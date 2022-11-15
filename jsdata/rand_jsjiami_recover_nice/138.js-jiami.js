'use strict';
const {
  extname : extname
} = require("path");
const Promise = require("bluebird");
const getExtname = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  const buffer = extname(str) || str;
  return buffer["startsWith"](".") ? buffer["slice"](1) : buffer;
};
class Renderer {
  constructor() {
    this["store"] = {};
    this["storeSync"] = {};
  }
  ["list"](canCreateDiscussions) {
    return canCreateDiscussions ? this["storeSync"] : this["store"];
  }
  ["get"](name, sync) {
    const store = this[sync ? "storeSync" : _0x4e154a["zSKGa"]];
    return store[getExtname(name)] || store[name];
  }
  ["isRenderable"](env__3090) {
    return Boolean(this["get"](env__3090));
  }
  ["isRenderableSync"](env__3090) {
    return Boolean(this["get"](env__3090, !![]));
  }
  ["getOutput"](env__3090) {
    const net = this["get"](env__3090);
    return net ? net["output"] : "";
  }
  ["register"](name, output, args, canCreateDiscussions) {
    if (!name) {
      throw new TypeError(_0x4efb9b["KrOsC"]);
    }
    if (!output) {
      throw new TypeError("output is required");
    }
    if (typeof args !== _0x4efb9b["hNclG"]) {
      throw new TypeError(_0x4efb9b["YAwCH"]);
    }
    name = getExtname(name);
    output = getExtname(output);
    if (canCreateDiscussions) {
      if (_0x4efb9b["dzcSt"] !== _0x4efb9b["dzcSt"]) {
        if (args["length"] > 2) {
          args = Promise["promisify"](args);
        }
        this["store"][name] = args;
      } else {
        this["storeSync"][name] = args;
        this["storeSync"][name]["output"] = output;
        this["store"][name] = Promise["method"](args);
      }
    } else {
      if (args["length"] > 2) {
        args = Promise["promisify"](args);
      }
      this["store"][name] = args;
    }
    this["store"][name]["output"] = output;
    this["store"][name]["compile"] = args["compile"];
  }
}
module["exports"] = Renderer;

