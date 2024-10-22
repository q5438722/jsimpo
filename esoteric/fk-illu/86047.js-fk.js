/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var renderWebGL = require('../../utils/NOOP');

var renderCanvas = require('../../utils/NOOP');

if (typeof WEBGL_RENDERER) {
    renderWebGL = require('./VideoWebGLRenderer');
}

if (typeof CANVAS_RENDERER) {
    renderCanvas = require('./VideoCanvasRenderer');
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas

};
