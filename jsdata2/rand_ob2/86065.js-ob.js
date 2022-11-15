/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x5c1b = [
    'restore',
    '2728omXYFL',
    '28oNpSEM',
    '150515yIkdir',
    '32501EGTKHl',
    '117119uLFyAQ',
    '1WzUeYl',
    '172661tmLbxa',
    '1AnHfmW',
    '34268BtfxHh',
    '1POPbTR',
    '303343TZRSaA',
    '../FillStyleCanvas',
    '../LineStyleCanvas',
    '../../../renderer/canvas/utils/SetTransform',
    '_displayOriginX',
    '_displayOriginY',
    'geom',
    'beginPath',
    'moveTo',
    'lineTo',
    'closePath',
    'isFilled'
];
var _0xb2b36c = _0x30dc;
(function (_0x29b45e, _0xa89ff3) {
    var _0x20f80f = _0x30dc;
    while (!![]) {
        try {
            var _0x2e2341 = -parseInt(_0x20f80f(0x1de)) * -parseInt(_0x20f80f(0x1df)) + -parseInt(_0x20f80f(0x1e0)) + -parseInt(_0x20f80f(0x1e1)) + parseInt(_0x20f80f(0x1e2)) * parseInt(_0x20f80f(0x1e3)) + -parseInt(_0x20f80f(0x1e4)) * parseInt(_0x20f80f(0x1e5)) + -parseInt(_0x20f80f(0x1e6)) + parseInt(_0x20f80f(0x1e7)) * parseInt(_0x20f80f(0x1e8));
            if (_0x2e2341 === _0xa89ff3)
                break;
            else
                _0x29b45e['push'](_0x29b45e['shift']());
        } catch (_0x524bde) {
            _0x29b45e['push'](_0x29b45e['shift']());
        }
    }
}(_0x5c1b, 0x1a195));
function _0x30dc(_0x4b3c86, _0xe6fe7b) {
    return _0x30dc = function (_0x5c1b65, _0x30dc98) {
        _0x5c1b65 = _0x5c1b65 - 0x1de;
        var _0x4e514a = _0x5c1b[_0x5c1b65];
        return _0x4e514a;
    }, _0x30dc(_0x4b3c86, _0xe6fe7b);
}
var FillStyleCanvas = require(_0xb2b36c(0x1e9)), LineStyleCanvas = require(_0xb2b36c(0x1ea)), SetTransform = require(_0xb2b36c(0x1eb)), TriangleCanvasRenderer = function (_0x9fe39b, _0x2c9dc2, _0x392b3a, _0x18ce8a) {
        var _0x18a1a9 = _0xb2b36c;
        _0x392b3a['addToRenderList'](_0x2c9dc2);
        var _0x4372aa = _0x9fe39b['currentContext'];
        if (SetTransform(_0x9fe39b, _0x4372aa, _0x2c9dc2, _0x392b3a, _0x18ce8a)) {
            var _0x22a817 = _0x2c9dc2[_0x18a1a9(0x1ec)], _0x2f1c32 = _0x2c9dc2[_0x18a1a9(0x1ed)], _0x2d76f1 = _0x2c9dc2[_0x18a1a9(0x1ee)]['x1'] - _0x22a817, _0x1303d0 = _0x2c9dc2[_0x18a1a9(0x1ee)]['y1'] - _0x2f1c32, _0x3f6980 = _0x2c9dc2[_0x18a1a9(0x1ee)]['x2'] - _0x22a817, _0x1aa4de = _0x2c9dc2[_0x18a1a9(0x1ee)]['y2'] - _0x2f1c32, _0x21d408 = _0x2c9dc2[_0x18a1a9(0x1ee)]['x3'] - _0x22a817, _0x6f41dd = _0x2c9dc2[_0x18a1a9(0x1ee)]['y3'] - _0x2f1c32;
            _0x4372aa[_0x18a1a9(0x1ef)](), _0x4372aa[_0x18a1a9(0x1f0)](_0x2d76f1, _0x1303d0), _0x4372aa[_0x18a1a9(0x1f1)](_0x3f6980, _0x1aa4de), _0x4372aa[_0x18a1a9(0x1f1)](_0x21d408, _0x6f41dd), _0x4372aa[_0x18a1a9(0x1f2)](), _0x2c9dc2[_0x18a1a9(0x1f3)] && (FillStyleCanvas(_0x4372aa, _0x2c9dc2), _0x4372aa['fill']()), _0x2c9dc2['isStroked'] && (LineStyleCanvas(_0x4372aa, _0x2c9dc2), _0x4372aa['stroke']()), _0x4372aa[_0x18a1a9(0x1f4)]();
        }
    };
module['exports'] = TriangleCanvasRenderer;
