"use strict";
exports.__esModule = true;
const _node = require("./node");

const _node2 = _interopRequireDefault(_node);

const _types = require("./types");

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}function _classCallCheck(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _possibleConstructorReturn(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return t && (typeof t === "object" || typeof t === "function") ? t : e;
}function _inherits(e, t) {
  if (typeof t !== "function" && t !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  }e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
}
const Comment = function (r) {
  if (typeof r !== "function" && r !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  }o.prototype = Object.create(r && r.prototype, { constructor: { value: o, enumerable: false, writable: true, configurable: true } });if (r) Object.setPrototypeOf ? Object.setPrototypeOf(o, r) : o.__proto__ = r;function o(e) {
    _classCallCheck(this, o);
    const t = _possibleConstructorReturn(this, r.call(this, e));

    t.type = _types.COMMENT;return t;
  }return o;
}(_node2.default);

exports.default = Comment;module.exports = exports.default;
