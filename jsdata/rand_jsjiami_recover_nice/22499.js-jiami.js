'use strict';
var _x = babelHelpers["classPrivateFieldLooseKey"]("x");
var C = function cellProps() {
  babelHelpers["classCallCheck"](this, cellProps);
  this["y"] = babelHelpers["classPrivateFieldLooseBase"](this, _x)[_x];
  Object["defineProperty"](this, _x, {
    "writable" : !![],
    "value" : void 0
  });
};
expect(() => {
  new C;
})["toThrow"]();

