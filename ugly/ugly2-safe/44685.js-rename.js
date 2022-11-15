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
    d : "M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4z"
  }), 
  "ModeCommentRounded");
  exports.default = ibex;
  