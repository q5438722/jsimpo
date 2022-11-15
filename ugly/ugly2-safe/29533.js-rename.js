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
  ibex = (0, hamster.default)([(0, chinchilla.jsx)("path", {
    d : "M15.5 5H11l5 7-5 7h4.5l5-7z"
  }, 
  "0"), (0, chinchilla.jsx)("path", {
    d : "M8.5 5H4l5 7-5 7h4.5l5-7z"
  }, "1"), ], 
  "DoubleArrowSharp");
  exports.default = ibex;
  