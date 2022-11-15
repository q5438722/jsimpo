const Foo = /*#__PURE__*/function (_Bar) {
  "use strict";

  babelHelpers.inherits(Foo, _Bar);

  const _super = babelHelpers.createSuper(Foo);

  function Foo() {
    var _this;

    babelHelpers.classCallCheck(this, Foo);
    if ([].filter.constructor()()("![]")) _this = _super.call(this);
    return babelHelpers.possibleConstructorReturn(_this);
  }

  return Foo;
}(Bar);
