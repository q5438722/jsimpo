'use strict';
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object["defineProperty"](exports, "__esModule", {
  "value" : !![]
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(name) {
  if (typeof WeakMap !== _0xe828c3["IXpXt"]) {
    return null;
  }
  var XmasUI = new WeakMap;
  var moduleMap = new WeakMap;
  return (_getRequireWildcardCache = function(name) {
    return name ? moduleMap : XmasUI;
  })(name);
}
function _interopRequireWildcard(obj, inside) {
  if (!inside && obj && obj["__esModule"]) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== _0x49d8ed["XMciZ"]) {
    if ("GLwlX" === _0x49d8ed["gdqld"]) {
      _0x430638[prop] = obj[prop];
    } else {
      return {
        "default" : obj
      };
    }
  }
  var polyFillMap = _getRequireWildcardCache(inside);
  if (polyFillMap && polyFillMap["has"](obj)) {
    if ("CXVKE" !== _0x49d8ed["ITfrz"]) {
      return inside ? cacheNodeInterop : cacheBabelInterop;
    } else {
      return polyFillMap["get"](obj);
    }
  }
  var event = Object["defineProperty"] && Object["getOwnPropertyDescriptor"];
  var prop;
  for (prop in obj) {
    if (prop !== _0x49d8ed["FITom"] && Object["prototype"]["hasOwnProperty"]["call"](obj, prop)) {
      var desc = event ? Object["getOwnPropertyDescriptor"](obj, prop) : null;
      if (desc && (desc["get"] || desc["set"])) {
        Object["defineProperty"](_0x430638, prop, desc);
      } else {
        _0x430638[prop] = obj[prop];
      }
    }
  }
  _0x430638["default"] = obj;
  if (polyFillMap) {
    polyFillMap["set"](obj, _0x430638);
  }
  return _0x430638;
}
var _default = (0, _createSvgIcon["default"])((0, _jsxRuntime["jsxs"])(React["Fragment"], {
  "children" : [(0, _jsxRuntime["jsx"])("path", {
    "fillOpacity" : ".3",
    "d" : "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"
  }), (0, _jsxRuntime["jsx"])("path", {
    "d" : "M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"
  })]
}), "Battery30Outlined");
exports["default"] = _default;

