var renderWebGL = require('../../utils/NOOP');
var renderCanvas = require('../../utils/NOOP');
if (typeof WEBGL_RENDERER) {
    renderWebGL = require('./PointLightWebGLRenderer');
}
module['exports'] = {
    'renderWebGL': renderWebGL,
    'renderCanvas': renderCanvas
};