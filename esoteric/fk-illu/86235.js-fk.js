/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var renderWebGL = require('../../utils/NOOP');

const renderCanvas = require('../../utils/NOOP');

if (typeof WEBGL_RENDERER) {
    renderWebGL = require('./PointLightWebGLRenderer');
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas

};
