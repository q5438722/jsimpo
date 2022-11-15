/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var CONST = require('./const'), Extend = require('../../utils/object/Extend'), Align = {
        'In': require('./in'),
        'To': require('./to')
    };
Align = Extend(![], Align, CONST), module['exports'] = Align;
