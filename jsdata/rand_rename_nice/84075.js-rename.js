'use strict';
var isArray = Array.isArray;
var str = Object.prototype.toString;
module.exports = isArray || function(r) {
  return !!r && "[object Array]" == str.call(r);
};
