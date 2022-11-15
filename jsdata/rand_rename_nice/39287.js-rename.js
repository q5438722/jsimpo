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
    d : "M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z"
  }), (0, _jsxRuntime.jsx)("path", {
    d : "M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.19 1.35-3.99 3.27-4.68C17.29 8.98 14.94 8 12 8c-4.81 0-8.04 2.62-8.47 2.95L12 21.5l3.5-4.36V14.5z"
  })]
}), "SignalWifi3BarLockOutlined");
exports.default = _default;

