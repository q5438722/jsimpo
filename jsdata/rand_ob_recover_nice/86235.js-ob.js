'use strict';
var renderWebGL = require("../../utils/NOOP");
var renderCanvas = require(_0x3a6a20(478));
if (typeof WEBGL_RENDERER) {
  renderWebGL = require("./PointLightWebGLRenderer");
}
module["exports"] = {
  "renderWebGL" : renderWebGL,
  "renderCanvas" : renderCanvas
};

