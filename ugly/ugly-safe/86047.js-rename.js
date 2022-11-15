  var raccoon; // renderWebGL
  var hamster; // renderCanvas
  
  raccoon = require("../../utils/NOOP");
  hamster = require("../../utils/NOOP");
  if (typeof WEBGL_RENDERER)
  {
    raccoon = require("./VideoWebGLRenderer");
  }
  if (typeof CANVAS_RENDERER)
  {
    hamster = require("./VideoCanvasRenderer");
  }
  module.exports = {
    renderWebGL : raccoon,
    renderCanvas : hamster
  };
  