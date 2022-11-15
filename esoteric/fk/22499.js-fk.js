var _x = /*#__PURE__*/babelHelpers.classPrivateFieldLooseKey("x");

var C = function C() {
  "use strict";

  babelHelpers.classCallCheck(this, C);
  this.y = babelHelpers.classPrivateFieldLooseBase(this, _x)[_x];
  Object.defineProperty(this, _x, {
    writable: !![],
    value: void +[]
  });
};

expect(() => {
  new C();
}).toThrow();
