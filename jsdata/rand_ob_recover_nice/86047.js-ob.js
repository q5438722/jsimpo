'use strict';
var renderWebGL = require(_0x4e0061(299));
var renderCanvas = require(_0x4e0061(299));
if (typeof WEBGL_RENDERER) {
  renderWebGL = require("./VideoWebGLRenderer");
}
if (typeof CANVAS_RENDERER) {
  renderCanvas = require(_0x4e0061(300));
}
function _0xe5f4(isBgroundImg, stgs) {
  return _0xe5f4 = function(k, init_using_data) {
    k = k - (-301 * 14 + -6 * 1251 + 2 * 6003);
    var simpleStar = _0x553a[k];
    return simpleStar;
  }, _0xe5f4(isBgroundImg, stgs);
}
module[_0x4e0061(301)] = {
  "renderWebGL" : renderWebGL,
  "renderCanvas" : renderCanvas
};

