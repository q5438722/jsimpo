/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var FillStyleCanvas = require('../FillStyleCanvas'), LineStyleCanvas = require('../LineStyleCanvas'), SetTransform = require('../../../renderer/canvas/utils/SetTransform'), TriangleCanvasRenderer = function (_0x3814b0, _0x5c9f40, _0x4f3bd9, _0x1aa757) {
        _0x4f3bd9['addToRenderList'](_0x5c9f40);
        var _0x27e274 = _0x3814b0['currentContext'];
        if (SetTransform(_0x3814b0, _0x27e274, _0x5c9f40, _0x4f3bd9, _0x1aa757)) {
            var _0x45c871 = _0x5c9f40['_displayOriginX'], _0x1c0742 = _0x5c9f40['_displayOriginY'], _0x32c7f7 = _0x5c9f40['geom']['x1'] - _0x45c871, _0x39c3d2 = _0x5c9f40['geom']['y1'] - _0x1c0742, _0x21a775 = _0x5c9f40['geom']['x2'] - _0x45c871, _0x2e6a7b = _0x5c9f40['geom']['y2'] - _0x1c0742, _0x40c80d = _0x5c9f40['geom']['x3'] - _0x45c871, _0x27dab7 = _0x5c9f40['geom']['y3'] - _0x1c0742;
            _0x27e274['beginPath'](), _0x27e274['moveTo'](_0x32c7f7, _0x39c3d2), _0x27e274['lineTo'](_0x21a775, _0x2e6a7b), _0x27e274['lineTo'](_0x40c80d, _0x27dab7), _0x27e274['closePath'](), _0x5c9f40['isFilled'] && (FillStyleCanvas(_0x27e274, _0x5c9f40), _0x27e274['fill']()), _0x5c9f40['isStroked'] && (LineStyleCanvas(_0x27e274, _0x5c9f40), _0x27e274['stroke']()), _0x27e274['restore']();
        }
    };
module['exports'] = TriangleCanvasRenderer;
