function withContext(e) {
  var r;
  var t;
  return t = r = function (e) {
    "use strict";
    babelHelpers.inherits(t, e);const r = babelHelpers.createSuper(t);
    function t() {
      babelHelpers.classCallCheck(this, t);return r.apply(this, arguments);
    }return t;
  }(Component), babelHelpers.defineProperty(r, "propTypes", { context: PropTypes.shape({ addCss: PropTypes.func, setTitle: PropTypes.func, setMeta: PropTypes.func }) }), t;
}
