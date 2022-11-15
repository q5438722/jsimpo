'use strict';
exports["__esModule"] = !![];
var _node = require("./node");
var _node2 = _interopRequireDefault(_node);
var _types = require("./types");
function _interopRequireDefault(obj) {
  return obj && obj["__esModule"] ? obj : {
    "default" : obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  var _0x3e4715 = {};
  if (!self) {
    throw new ReferenceError(_0x3e4715["aOrmq"]);
  }
  return call && (typeof call === _0x3e4715["XHgvq"] || typeof call === _0x3e4715["tFNHl"]) ? call : self;
}
function _inherits(obj, proto) {
  if (typeof proto !== _0x29520a["ZOhiO"] && proto !== null) {
    if (_0x29520a["kHGWe"] !== _0x29520a["kHGWe"]) {
      throw new ReferenceError(_0x29520a["zFDYP"]);
    } else {
      throw new TypeError("Super expression must either be null or a function, not " + typeof proto);
    }
  }
  obj["prototype"] = Object["create"](proto && proto["prototype"], {
    "constructor" : {
      "value" : obj,
      "enumerable" : ![],
      "writable" : !![],
      "configurable" : !![]
    }
  });
  if (proto) {
    if (Object["setPrototypeOf"]) {
      Object["setPrototypeOf"](obj, proto);
    } else {
      obj["__proto__"] = proto;
    }
  }
}
var Comment = function(options) {
  function Header(data) {
    _classCallCheck(this, Header);
    var _this = _possibleConstructorReturn(this, options["call"](this, data));
    _this["type"] = _types["COMMENT"];
    return _this;
  }
  _inherits(Header, options);
  return Header;
}(_node2["default"]);
exports["default"] = Comment;
module["exports"] = exports["default"];

