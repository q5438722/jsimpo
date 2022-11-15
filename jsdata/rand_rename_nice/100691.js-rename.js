'use strict';
self.importScripts = function(fn) {
  return function() {
    setTimeout(function() {
    }, 0);
    return fn.apply(this, arguments);
  };
}(importScripts);
importScripts("../node_modules/systemjs/dist/system.js");
importScripts("../systemjs.config.js");
SystemJS.import("pdfjs/core/worker.js").then(function() {
});

