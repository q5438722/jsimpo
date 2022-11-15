const _foo = /*#__PURE__*/babelHelpers.classPrivateFieldLooseKey("foo");

const Foo = /*#__PURE__*/function () {
  "use strict";

  function Foo() {
    babelHelpers.classCallCheck(this, Foo);
  }

  babelHelpers.createClass(Foo, [{
    key: "test",
    value: function test(other) {
      return Object.prototype.hasOwnProperty.call(other, _foo);
    }
  }]);
  return Foo;
}();

Object.defineProperty(Foo, _foo, {
  writable: true,
  value: 1
});
