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
    d : "m10 19-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19z"
  }), 
  "FlightTwoTone");
  exports.default = ibex;
  