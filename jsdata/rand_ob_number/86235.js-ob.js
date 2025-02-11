/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var renderWebGL = require('../../utils/NOOP'), renderCanvas = require('../../utils/NOOP');
typeof WEBGL_RENDERER && (renderWebGL = require('./PointLightWebGLRenderer'));
module['exports'] = {
    'renderWebGL': renderWebGL,
    'renderCanvas': renderCanvas
};
