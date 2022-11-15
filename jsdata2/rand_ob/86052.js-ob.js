/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x2d85 = [
    '1212237tOhkgX',
    '188864cchDoT',
    '600288gLfmXn',
    '7pujXte',
    '55121YwghRi',
    '1017642ikCFVI',
    '1915989TmGkZQ',
    '../../renderer/webgl/Utils',
    '11|13|9|2|5|0|10|6|1|3|4|12|8|7',
    'FuVqw',
    'split',
    'lineWidth',
    'ohuof',
    'length',
    'ayQXD',
    'batchLine',
    'closePath',
    'pathData',
    'strokeTint',
    'getTintAppendFloatAlpha',
    'strokeColor',
    'Vxuyv',
    'strokeAlpha',
    'exports',
    '2438AdRWid',
    '26ErqkOF'
];
var _0x731eea = _0x1774;
function _0x1774(_0x499e46, _0xc18774) {
    return _0x1774 = function (_0x19d9c9, _0x34725d) {
        _0x19d9c9 = _0x19d9c9 - (-0x5c9 + -0xdf1 + 0x1568);
        var _0x4b8c69 = _0x2d85[_0x19d9c9];
        return _0x4b8c69;
    }, _0x1774(_0x499e46, _0xc18774);
}
(function (_0xef4bf7, _0xc37a28) {
    var _0x526460 = _0x1774;
    while (!![]) {
        try {
            var _0x308738 = parseInt(_0x526460(0x1ae)) * parseInt(_0x526460(0x1af)) + -parseInt(_0x526460(0x1b0)) + -parseInt(_0x526460(0x1b1)) + -parseInt(_0x526460(0x1b2)) + parseInt(_0x526460(0x1b3)) * -parseInt(_0x526460(0x1b4)) + parseInt(_0x526460(0x1b5)) + parseInt(_0x526460(0x1b6));
            if (_0x308738 === _0xc37a28)
                break;
            else
                _0xef4bf7['push'](_0xef4bf7['shift']());
        } catch (_0x106dc) {
            _0xef4bf7['push'](_0xef4bf7['shift']());
        }
    }
}(_0x2d85, 0x10ea00 + -0x3 * -0x10f37 + -0x1d12 * 0x5f));
var Utils = require(_0x731eea(0x1b7)), StrokePathWebGL = function (_0x29c5ca, _0xf665a1, _0x43fa06, _0x213179, _0x223c52) {
        var _0x1c999a = _0x731eea, _0x13be54 = {
                'FuVqw': _0x1c999a(0x1b8),
                'ohuof': function (_0x16ac3d, _0x7b59d0) {
                    return _0x16ac3d - _0x7b59d0;
                },
                'ayQXD': function (_0x2d41e1, _0x200ca8) {
                    return _0x2d41e1 < _0x200ca8;
                },
                'PMSXT': function (_0x2f9438, _0x306973) {
                    return _0x2f9438 === _0x306973;
                },
                'Vxuyv': function (_0x20b611, _0x37d06e) {
                    return _0x20b611 * _0x37d06e;
                }
            }, _0x434b73 = _0x13be54[_0x1c999a(0x1b9)][_0x1c999a(0x1ba)]('|'), _0x2651b6 = 0x130b + -0x16 * -0x1a1 + 0xdf * -0x3f;
        while (!![]) {
            switch (_0x434b73[_0x2651b6++]) {
            case '0':
                _0x347f01['BR'] = _0x107a06;
                continue;
            case '1':
                var _0x3a2a39 = _0xf665a1[_0x1c999a(0x1bb)];
                continue;
            case '2':
                _0x347f01['TR'] = _0x107a06;
                continue;
            case '3':
                var _0x1528d3 = _0x3a2a39 / (-0x1b8e + -0x12d4 + -0x2 * -0x1732);
                continue;
            case '4':
                var _0x1c2ec4 = _0x13be54[_0x1c999a(0x1bc)](_0x486b7d[-0x1f1b + -0x99d + 0xa2e * 0x4], _0x213179);
                continue;
            case '5':
                _0x347f01['BL'] = _0x107a06;
                continue;
            case '6':
                var _0x11c950 = _0x486b7d[_0x1c999a(0x1bd)] - (0xc2 * -0x17 + -0x1 * -0x1f2d + 0x6df * -0x2);
                continue;
            case '7':
                for (var _0x8f97a7 = -0x1 * -0xc2e + -0x216b + 0x6f * 0x31; _0x13be54[_0x1c999a(0x1be)](_0x8f97a7, _0x11c950); _0x8f97a7 += -0x7b8 + 0xb * -0x26f + 0x1 * 0x227f) {
                    var _0x4839a8 = _0x13be54[_0x1c999a(0x1bc)](_0x486b7d[_0x8f97a7], _0x213179), _0xd0efbc = _0x13be54[_0x1c999a(0x1bc)](_0x486b7d[_0x8f97a7 + (0x2616 + 0xc72 + -0x3287)], _0x223c52);
                    _0x29c5ca[_0x1c999a(0x1bf)](_0x1c2ec4, _0x4b4891, _0x4839a8, _0xd0efbc, _0x1528d3, _0x1528d3, _0x3a2a39, _0x13be54[_0x1c999a(0x1bc)](_0x8f97a7, 0xe0b + 0x1f7 * 0xb + 0x75 * -0x4e), _0xf665a1['closePath'] ? _0x13be54['PMSXT'](_0x8f97a7, _0x11c950 - (-0xcb6 + 0x12fd * -0x1 + 0x1fb4)) : ![]), _0x1c2ec4 = _0x4839a8, _0x4b4891 = _0xd0efbc;
                }
                continue;
            case '8':
                !_0xf665a1[_0x1c999a(0x1c0)] && (_0x11c950 -= 0x111e * -0x2 + 0x1157 + 0x10e7);
                continue;
            case '9':
                _0x347f01['TL'] = _0x107a06;
                continue;
            case '10':
                var _0x486b7d = _0xf665a1[_0x1c999a(0x1c1)];
                continue;
            case '11':
                var _0x347f01 = _0x29c5ca[_0x1c999a(0x1c2)];
                continue;
            case '12':
                var _0x4b4891 = _0x13be54[_0x1c999a(0x1bc)](_0x486b7d[0x617 + 0x20bc + -0x1 * 0x26d2], _0x223c52);
                continue;
            case '13':
                var _0x107a06 = Utils[_0x1c999a(0x1c3)](_0xf665a1[_0x1c999a(0x1c4)], _0x13be54[_0x1c999a(0x1c5)](_0xf665a1[_0x1c999a(0x1c6)], _0x43fa06));
                continue;
            }
            break;
        }
    };
module[_0x731eea(0x1c7)] = StrokePathWebGL;
