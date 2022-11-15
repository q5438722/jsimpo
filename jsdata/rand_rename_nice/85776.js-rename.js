'use strict';
var SafeRange = require("./SafeRange");
var CountAllMatching = function(shapes, p, a, indent, count) {
  if (indent === undefined) {
    indent = 0;
  }
  if (count === undefined) {
    count = shapes.length;
  }
  var i = 0;
  if (SafeRange(shapes, indent, count)) {
    var i = indent;
    for (; i < count; i++) {
      var b = shapes[i];
      if (b[p] === a) {
        i++;
      }
    }
  }
  return i;
};
module.exports = CountAllMatching;

