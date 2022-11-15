"use strict";
  var raccoon; // _interopRequireDefault
  var hamster; // _createSvgIcon
  var chinchilla; // _jsxRuntime
  var ibex; // _default
  
  raccoon = require("@babel/runtime/helpers/interopRequireDefault");
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  exports.default = void 0;
  hamster = raccoon(require("./utils/createSvgIcon"));
  chinchilla = require("react/jsx-runtime");
  ibex = (0, hamster.default)((0, chinchilla.jsx)("path", {
    d : "M23 3H1v18h22V3zm-2 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z"
  }), 
  "PresentToAllSharp");
  exports.default = ibex;
  