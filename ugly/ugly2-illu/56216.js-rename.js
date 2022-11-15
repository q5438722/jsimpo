"use strict";
require("../common");
const assert = require("assert");

function T(t) {
  const e = new Uint8Array(t);
  Object.setPrototypeOf(e, T.prototype);return e;
}Object.setPrototypeOf(T.prototype, Buffer.prototype);Object.setPrototypeOf(T, Buffer);T.prototype.sum = function t() {
  var e = 0;
  // Unevaluable loop test expression
  for (let t = 0; t < this.length; t++) e += this[t];return e;
};const vals = [new T(4), T(4)];
vals.forEach(function (e) {
  assert.strictEqual(e.constructor, T);assert.strictEqual(Object.getPrototypeOf(e), T.prototype);assert.strictEqual(Object.getPrototypeOf(Object.getPrototypeOf(e)), Buffer.prototype);e.fill(5);var r = 0;
  // Unevaluable loop test expression
  for (let t = 0; t < e.length; t++) r += e[t];assert.strictEqual(r, e.length * 5);e.toString();
});
