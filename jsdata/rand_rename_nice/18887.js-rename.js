'use strict';
(function(exports, keys) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], keys);
  } else {
    if (typeof exports !== "undefined") {
      keys(exports);
    } else {
      var context = {
        exports : {}
      };
      keys(context.exports);
      exports.input = context.exports;
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(obj) {
  Object.defineProperty(obj, "__esModule", {
    value : true
  });
  obj.bar = void 0;
  var foo;
  obj.bar = foo;
});

