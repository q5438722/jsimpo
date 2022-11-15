'use strict';
/**
 * @param {number} input
 * @param {number} name
 * @return {?}
 */
var f = function(input, name) {
  return input + name + alpha[0];
};
/**
 * @return {?}
 */
var g = function() {
  /** @type {number} */
  var a = 0;
  /** @type {number} */
  var _0x27b053 = 1;
  /** @type {number} */
  var _0x1cf1a6 = 2;
  for (; a < 10;) {
    f(a, a);
    console["log"](a);
    a++;
  }
  var d = f(1, 2);
  var r = f(d, d);
  return r;
};

