const _foo = babelHelpers.classPrivateFieldLooseKey("foo");

const Foo = function () {
  "use strict";
  function e() {
    babelHelpers.classCallCheck(this, e);
  }babelHelpers.createClass(e, [{ key: "test", value: function e(o) {
      return Object.prototype.hasOwnProperty.call(o, _foo);
    } }]);return e;
}();

Object.defineProperty(Foo, _foo, { writable: true, value: 1 });
