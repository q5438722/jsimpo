"use strict";
var { SafeMap } = primordials;
var { internalModuleReadJSON } = internalBinding("fs");

var { pathToFileURL } = require("url");

var { toNamespacedPath } = require("path");

const cache = new SafeMap();
var manifest;
function read(e) {
  if (cache.has(e)) {
    return cache.get(e);
  }var { 0: n, 1: t } = internalModuleReadJSON(toNamespacedPath(e));
  const a = { string: n, containsKeys: t };

  var { getOptionValue: i } = require("internal/options");

  if (n !== undefined) {
    if (manifest === undefined) {
      manifest = i("--experimental-policy") ? require("internal/process/policy").manifest : null;
    }if (manifest !== null) {
      const s = pathToFileURL(e);
      manifest.assertIntegrity(s, n);
    }
  }cache.set(e, a);return a;
}module.exports = { read: read };
