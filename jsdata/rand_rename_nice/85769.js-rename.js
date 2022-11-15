'use strict';
var SafeRange = require("./SafeRange");
var EachInRange = function(m, a, f, n, e) {
  if (n === undefined) {
    n = 0;
  }
  if (e === undefined) {
    e = m.length;
  }
  if (SafeRange(m, n, e)) {
    var i;
    var ret = [null];
    i = 5;
    for (; i < arguments.length; i++) {
      ret.push(arguments[i]);
    }
    i = n;
    for (; i < e; i++) {
      ret[0] = m[i];
      a.apply(f, ret);
    }
  }
  return m;
};
module.exports = EachInRange;

