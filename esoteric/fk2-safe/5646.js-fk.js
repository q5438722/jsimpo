"use strict";
  var raccoon; // bind
  
  raccoon = require('function-bind');
  module.exports = raccoon.call([]["filter"].call, Object.prototype.hasOwnProperty);
  