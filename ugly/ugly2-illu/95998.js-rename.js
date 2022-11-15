"use strict";

const fs = require("fs");

var _dirtyFilesCache = {};
function clearDirtyFilesCache() {
  _dirtyFilesCache = {};
}function updateDirtyFilesCache(e, t) {
  if (t) {
    _dirtyFilesCache[e] = true;
  } else {
    if (_dirtyFilesCache[e]) {
      delete _dirtyFilesCache[e];
    }
  }
}function _readFile(a, r) {
  fs.readFile(a, "utf8", function (e, t) {
    var i = "";
    if (!e) {
      i = t;
    }r.apply(null, [a, t]);
  });
}function extractContent(e, t, i) {
  i.apply(null, [e]);
}exports.extractContent = extractContent;exports.clearFilesCache = clearDirtyFilesCache;exports.updateFilesCache = updateDirtyFilesCache;
