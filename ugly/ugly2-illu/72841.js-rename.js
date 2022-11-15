"use strict";

var printWarning = function () {};

if (process.env.NODE_ENV !== "production") {
  printWarning = function (r, e) {
    var n = 0;
    const t = "Warning: " + (e.length > 0 ? r.replace(/%s/g, function () {
      return e[n++];
    }) : r);
    if (typeof console !== "undefined") {
      console.error(t);
    }try {
      throw new Error(t);
    } catch (r) {}
  };
}module.exports = function (r) {
  printWarning("Please use `require(\"react-router-dom\").%s` instead of `require(\"react-router-dom/%s\")`. Support for the latter will be removed in the next major release.", [r, r]);
};
