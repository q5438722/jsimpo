"use strict";
self.importScripts = function (t) {
  return function () {
    setTimeout(function () {}, 0);return t.apply(this, arguments);
  };
}(importScripts);importScripts("../node_modules/systemjs/dist/system.js");importScripts("../systemjs.config.js");SystemJS.import("pdfjs/core/worker.js").then(function () {});