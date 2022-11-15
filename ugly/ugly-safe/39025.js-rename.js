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
    d : "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12zm-4.5-7V9.12c0-.53-.71-.7-.95-.22l-1.69 3.38c-.16.33.08.72.45.72h1.19v1.88c0 .53.71.7.95.22l1.69-3.38c.16-.33-.08-.72-.45-.72H12.5z"
  }), 
  "ChargingStationRounded");
  exports.default = ibex;
  