'use strict';
var Equals = function(left, right) {
  return left.x === right.x && left.y === right.y && left.radius === right.radius;
};
module.exports = Equals;

