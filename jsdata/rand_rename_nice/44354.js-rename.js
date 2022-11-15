'use strict';
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value : true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(name) {
  if (typeof WeakMap !== "function") {
    return null;
  }
  var XmasUI = new WeakMap;
  var moduleMap = new WeakMap;
  return (_getRequireWildcardCache = function(name) {
    return name ? moduleMap : XmasUI;
  })(name);
}
function _interopRequireWildcard(obj, inside) {
  if (!inside && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default : obj
    };
  }
  var this_ = _getRequireWildcardCache(inside);
  if (this_ && this_.has(obj)) {
    return this_.get(obj);
  }
  var newObj = {};
  var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  var key;
  for (key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var descriptor = a ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (descriptor && (descriptor.get || descriptor.set)) {
        Object.defineProperty(newObj, key, descriptor);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (this_) {
    this_.set(obj, newObj);
  }
  return newObj;
}
var _default = (0, _createSvgIcon.default)((0, _jsxRuntime.jsxs)(React.Fragment, {
  children : [(0, _jsxRuntime.jsx)("path", {
    fillOpacity : ".3",
    d : "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"
  }), (0, _jsxRuntime.jsx)("path", {
    d : "M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"
  })]
}), "Battery30Outlined");
exports.default = _default;

