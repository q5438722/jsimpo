"use strict";
require("../common");module.exports = function e(t, i) {
  function o() {
    if (--t === 0) {
      if (typeof i === "function") i();
    } else {
      setImmediate(o);
    }
  }setImmediate(o);
};
