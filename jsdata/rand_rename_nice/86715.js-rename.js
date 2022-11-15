'use strict';
var PropertyValueSet = function(patches, path, content, n, v, t) {
  if (n === undefined) {
    n = 0;
  }
  if (v === undefined) {
    v = 0;
  }
  if (t === undefined) {
    t = 1;
  }
  var i;
  var health_gui_spacing = 0;
  var patchLen = patches.length;
  if (t === 1) {
    i = v;
    for (; i < patchLen; i++) {
      patches[i][path] = content + health_gui_spacing * n;
      health_gui_spacing++;
    }
  } else {
    i = v;
    for (; i >= 0; i--) {
      patches[i][path] = content + health_gui_spacing * n;
      health_gui_spacing++;
    }
  }
  return patches;
};
module.exports = PropertyValueSet;

