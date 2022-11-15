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
  if (typeof WeakMap !== _0x48a329["TZvCO"]) {
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
  if (obj === null || typeof obj !== _0x3c8e07["OVEey"] && typeof obj !== _0x3c8e07["UKMBQ"]) {
    return {
      "default" : obj
    };
  }
  var polyFillMap = _getRequireWildcardCache(inside);
  if (polyFillMap && polyFillMap["has"](obj)) {
    return polyFillMap["get"](obj);
  }
  var instance = Object["defineProperty"] && Object["getOwnPropertyDescriptor"];
  var prop;
  for (prop in obj) {
    if (prop !== "default" && Object["prototype"]["hasOwnProperty"]["call"](obj, prop)) {
      if (_0x3c8e07["DCVrp"] !== _0x3c8e07["EMcsV"]) {
        var desc = instance ? Object["getOwnPropertyDescriptor"](obj, prop) : null;
        if (desc && (desc["get"] || desc["set"])) {
          if (_0x3c8e07["BdeCr"] !== _0x3c8e07["BdeCr"]) {
            if (prop !== _0x3c8e07["suYJa"] && Object["prototype"]["hasOwnProperty"]["call"](obj, prop)) {
              var desc = instance ? Object["getOwnPropertyDescriptor"](obj, prop) : null;
              if (desc && (desc["get"] || desc["set"])) {
                Object["defineProperty"](_0x4ed136, prop, desc);
              } else {
                _0x4ed136[prop] = obj[prop];
              }
            }
          } else {
            Object["defineProperty"](_0x4ed136, prop, desc);
          }
        } else {
          _0x4ed136[prop] = obj[prop];
        }
      } else {
        if (typeof WeakMap !== "function") {
          return null;
        }
        var XmasUI = new WeakMap;
        var moduleMap = new WeakMap;
        return (_getRequireWildcardCache = function(name) {
          return name ? moduleMap : XmasUI;
        })(inside);
      }
    }
  }
  _0x4ed136["default"] = obj;
  if (polyFillMap) {
    if (_0x3c8e07["fDjOp"] !== "kzMrH") {
      polyFillMap["set"](obj, _0x4ed136);
    } else {
      polyFillMap["set"](obj, _0x4ed136);
    }
  }
  return _0x4ed136;
}
var _default = (0, _createSvgIcon["default"])((0, _jsxRuntime["jsxs"])(React["Fragment"], {
  "children" : [(0, _jsxRuntime["jsx"])("path", {
    "fillOpacity" : ".3",
    "d" : "M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z"
  }), (0, _jsxRuntime["jsx"])("path", {
    "d" : "M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.19 1.35-3.99 3.27-4.68C17.29 8.98 14.94 8 12 8c-4.81 0-8.04 2.62-8.47 2.95L12 21.5l3.5-4.36V14.5z"
  })]
}), "SignalWifi3BarLockOutlined");
exports["default"] = _default;

