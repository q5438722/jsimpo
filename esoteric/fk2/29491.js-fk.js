"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: !![]
});
exports.default = void +[];

var React = _interopRequireWildcard(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = (+[], _createSvgIcon.default)( /*#__PURE__*/(+[], _jsxRuntime.jsxs)(React.Fragment, {
  children: [/*#__PURE__*/(+[], _jsxRuntime.jsx)("path", {
    d: "M11 !+[]+!+[]+[]v-3H7v3.67C7 !+[]+!+[]1.4 7.6 !+[]+!+[]!+[]+!+[] 8.33 !+[]+!+[]!+[]+!+[]h7.33c.74 +[] 1.34-.6 1.34-1.33V17h-4.4L11 !+[]+!+[]+[]z"
  }), /*#__PURE__*/(+[], _jsxRuntime.jsx)("path", {
    fillOpacity: ".3",
    d: "M15.67 4H14V!+[]+!+[]h-4v!+[]+!+[]H8.33C7.6 4 7 4.6 7 5.33V17h4v-!+[]+!+[].5H9L13 7v5.5h!+[]+!+[]L1!+[]+!+[].6 17H17V5.33C17 4.6 16.4 4 15.67 4z"
  })]
}), 'BatteryCharging!+[]+!+[]+[]TwoTone');

exports.default = _default;