'use strict';

const bind = require('function-bind');

module.exports = bind.call([].filter.call, Object.prototype.hasOwnProperty);
