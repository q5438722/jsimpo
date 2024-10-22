'use strict';
exports.__esModule = true;
var _node = require("./node");
var _node2 = _interopRequireDefault(_node);
var _types = require("./types");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default : obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor : {
      value : subClass,
      enumerable : false,
      writable : true,
      configurable : true
    }
  });
  if (superClass) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(subClass, superClass);
    } else {
      subClass.__proto__ = superClass;
    }
  }
}
var Comment = function(_WebInspector$GeneralTreeElement) {
  function FlashRuntime(options) {
    _classCallCheck(this, FlashRuntime);
    var _this2 = _possibleConstructorReturn(this, _WebInspector$GeneralTreeElement.call(this, options));
    _this2.type = _types.COMMENT;
    return _this2;
  }
  _inherits(FlashRuntime, _WebInspector$GeneralTreeElement);
  return FlashRuntime;
}(_node2.default);
exports.default = Comment;
module.exports = exports["default"];

