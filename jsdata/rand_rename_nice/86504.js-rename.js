'use strict';
var Offset = function(v, mapWidth, mapHeight) {
  v.x += mapWidth;
  v.y += mapHeight;
  return v;
};
module.exports = Offset;

