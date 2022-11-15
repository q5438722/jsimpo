"use strict";
  var raccoon; // bind
  
  raccoon = require("function-bind");
  module.exports = raccoon.call(Function.call, Object.prototype.hasOwnProperty);
  