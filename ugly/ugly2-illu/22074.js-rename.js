const Foo = function (e) {
  "use strict";
  babelHelpers.inherits(l, e);const r = babelHelpers.createSuper(l);
  function l() {
    var e;
    babelHelpers.classCallCheck(this, l);if (condition) {
      e = r.call(this);babelHelpers.defineProperty(babelHelpers.assertThisInitialized(e), "bar", "foo");
    } else {
      e = r.call(this);babelHelpers.defineProperty(babelHelpers.assertThisInitialized(e), "bar", "foo");
    }return babelHelpers.possibleConstructorReturn(e);
  }return l;
}(Bar);
