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
    d : "M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"
  }), 
  "Monitor");
  exports.default = ibex;
  