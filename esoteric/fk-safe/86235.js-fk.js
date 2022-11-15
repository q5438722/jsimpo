  var raccoon; // renderWebGL
  var hamster; // renderCanvas
  
  raccoon = require('../../utils/NOOP');
  hamster = require('../../utils/NOOP');
  if (typeof WEBGL_RENDERER)
  {
    raccoon = require('./PointLightWebGLRenderer');
  }
  module.exports = {
    renderWebGL : raccoon,
    renderCanvas : hamster
  };
  