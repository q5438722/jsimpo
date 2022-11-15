const _x = babelHelpers.classPrivateFieldLooseKey("x");

const C = function e() {
  "use strict";
  babelHelpers.classCallCheck(this, e);this.y = babelHelpers.classPrivateFieldLooseBase(this, _x)[_x];Object.defineProperty(this, _x, { writable: true, value: void 0 });
};

expect(() => {
  new C();
}).toThrow();
