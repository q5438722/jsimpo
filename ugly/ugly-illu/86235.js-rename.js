var renderWebGL = require("../../utils/NOOP");

const renderCanvas = require("../../utils/NOOP");

if (typeof WEBGL_RENDERER) {
  renderWebGL = require("./PointLightWebGLRenderer");
}module.exports = { renderWebGL: renderWebGL, renderCanvas: renderCanvas };
