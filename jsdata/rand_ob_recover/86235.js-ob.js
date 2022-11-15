var renderWebGL = require('../../utils/NOOP'), renderCanvas = require(_0x3a6a20(478));
typeof WEBGL_RENDERER && (renderWebGL = require('./PointLightWebGLRenderer'));
module['exports'] = {
    'renderWebGL': renderWebGL,
    'renderCanvas': renderCanvas
};