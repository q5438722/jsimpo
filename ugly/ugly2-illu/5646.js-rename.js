"use strict";

const bind = require("function-bind");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
