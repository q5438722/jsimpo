import { ensureOnlyValidVersions } from "../utils/utils.js";import buildmessage from "../utils/buildmessage.js";import NpmDiscards from "./npm-discards";const nodeRequire = require;
export class PackageNpm {
  constructor() {
    this._discards = new NpmDiscards();this._dependencies = null;
  }depends(e) {
    if (this._dependencies) {
      buildmessage.error("Npm.depends may only be called once per package", { useMyCaller: true });return;
    }if (typeof e !== "object") {
      buildmessage.error("the argument to Npm.depends should be an object, like this: {gcd: '0.0.0'}", { useMyCaller: true });return;
    }try {
      ensureOnlyValidVersions(e, { forCordova: false });
    } catch (e) {
      buildmessage.error(e.message, { useMyCaller: true, downcase: true });return;
    }this._dependencies = e;
  }strip(e) {
    this._discards.merge(e);
  }require(r) {
    try {
      return nodeRequire(r);
    } catch (e) {
      buildmessage.error("can't find npm module '" + r + "'. In package.js, Npm.require can only find built-in modules.", { useMyCaller: true });
    }
  }
}
