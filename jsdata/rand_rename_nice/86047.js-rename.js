'use strict';
var renderWebGL = require("../../utils/NOOP");
var renderCanvas = require("../../utils/NOOP");
if (typeof WEBGL_RENDERER) {
  renderWebGL = require("./VideoWebGLRenderer");
}
if (typeof CANVAS_RENDERER) {
  renderCanvas = require("./VideoCanvasRenderer");
}
module.exports = {
  renderWebGL : renderWebGL,
  renderCanvas : renderCanvas
};

