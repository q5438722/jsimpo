'use strict';
import{
  ensureOnlyValidVersions as ensureOnlyValidVersions
}from "../utils/utils.js";
import buildmessage from "../utils/buildmessage.js";
import NpmDiscards from "./npm-discards";
const ModuleFactory = require;
class BooksList {
  constructor() {
    this._discards = new NpmDiscards;
    this._dependencies = null;
  }
  depends(view) {
    if (this._dependencies) {
      buildmessage.error("Npm.depends may only be called once per package", {
        useMyCaller : true
      });
      return;
    }
    if (typeof view !== "object") {
      buildmessage.error("the argument to Npm.depends should be an " + "object, like this: {gcd: '0.0.0'}", {
        useMyCaller : true
      });
      return;
    }
    try {
      ensureOnlyValidVersions(view, {
        forCordova : false
      });
    } catch (e) {
      buildmessage.error(e.message, {
        useMyCaller : true,
        downcase : true
      });
      return;
    }
    this._dependencies = view;
  }
  strip(properties) {
    this._discards.merge(properties);
  }
  require(view) {
    try {
      return ModuleFactory(view);
    } catch (e) {
      buildmessage.error("can't find npm module '" + view + "'. In package.js, Npm.require can only find built-in modules.", {
        useMyCaller : true
      });
    }
  }
}
export{
  BooksList as PackageNpm
};

