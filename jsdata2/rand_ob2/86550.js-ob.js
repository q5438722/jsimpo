/**
 * @author       Richard Davey
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x5413 = [
    '433889utwiuo',
    '4pWvDYz',
    '1GPRwyX',
    '1168698pOmUAo',
    '1299181ACergP',
    '1PMLTwk',
    '../../math/Vector4',
    '../line/Line',
    'cos',
    'sin',
    'setTo',
    'length',
    'points',
    'indexOf',
    'push',
    'sort',
    'exports',
    '3703viFjSm',
    '151QcWbgE',
    '301272oebFsF',
    '2rxkEgJ',
    '429355TRzTdt',
    '1631595bLQyIl'
];
var _0x29a0c8 = _0x484f;
(function (_0x562aba, _0x1b43b4) {
    var _0x1b47ca = _0x484f;
    while (!![]) {
        try {
            var _0x524ed3 = parseInt(_0x1b47ca(0x129)) * parseInt(_0x1b47ca(0x12a)) + -parseInt(_0x1b47ca(0x12b)) * -parseInt(_0x1b47ca(0x12c)) + -parseInt(_0x1b47ca(0x12d)) + -parseInt(_0x1b47ca(0x12e)) + -parseInt(_0x1b47ca(0x12f)) * -parseInt(_0x1b47ca(0x130)) + parseInt(_0x1b47ca(0x131)) * -parseInt(_0x1b47ca(0x132)) + -parseInt(_0x1b47ca(0x133)) * -parseInt(_0x1b47ca(0x134));
            if (_0x524ed3 === _0x1b43b4)
                break;
            else
                _0x562aba['push'](_0x562aba['shift']());
        } catch (_0x296923) {
            _0x562aba['push'](_0x562aba['shift']());
        }
    }
}(_0x5413, 0xec082));
var Vector4 = require(_0x29a0c8(0x135)), GetLineToPolygon = require('./GetLineToPolygon'), Line = require(_0x29a0c8(0x136)), segment = new Line();
function CheckIntersects(_0x5e33be, _0x2bf15f, _0x5904ee, _0x54deb5, _0x564fbd) {
    var _0x141cdd = _0x29a0c8, _0x4435e7 = Math[_0x141cdd(0x137)](_0x5e33be), _0x3e72a8 = Math[_0x141cdd(0x138)](_0x5e33be);
    segment[_0x141cdd(0x139)](_0x2bf15f, _0x5904ee, _0x2bf15f + _0x4435e7, _0x5904ee + _0x3e72a8);
    var _0x3beb1 = GetLineToPolygon(segment, _0x54deb5);
    _0x3beb1 && _0x564fbd['push'](new Vector4(_0x3beb1['x'], _0x3beb1['y'], _0x5e33be, _0x3beb1['w']));
}
function _0x484f(_0x372d19, _0x1b60d4) {
    return _0x484f = function (_0x5413a6, _0x484f18) {
        _0x5413a6 = _0x5413a6 - 0x129;
        var _0x25ebc4 = _0x5413[_0x5413a6];
        return _0x25ebc4;
    }, _0x484f(_0x372d19, _0x1b60d4);
}
function SortIntersects(_0x4a921f, _0x58b891) {
    return _0x4a921f['z'] - _0x58b891['z'];
}
var GetRaysFromPointToPolygon = function (_0x14bbdb, _0x23fa1a, _0x1a4ad0) {
    var _0x3c30a4 = _0x29a0c8;
    !Array['isArray'](_0x1a4ad0) && (_0x1a4ad0 = [_0x1a4ad0]);
    var _0x2612fb = [], _0x2f8d82 = [];
    for (var _0x565585 = 0x0; _0x565585 < _0x1a4ad0[_0x3c30a4(0x13a)]; _0x565585++) {
        var _0x47d422 = _0x1a4ad0[_0x565585][_0x3c30a4(0x13b)];
        for (var _0x1c9e62 = 0x0; _0x1c9e62 < _0x47d422[_0x3c30a4(0x13a)]; _0x1c9e62++) {
            var _0x49514c = Math['atan2'](_0x47d422[_0x1c9e62]['y'] - _0x23fa1a, _0x47d422[_0x1c9e62]['x'] - _0x14bbdb);
            _0x2f8d82[_0x3c30a4(0x13c)](_0x49514c) === -0x1 && (CheckIntersects(_0x49514c, _0x14bbdb, _0x23fa1a, _0x1a4ad0, _0x2612fb), CheckIntersects(_0x49514c - 0.00001, _0x14bbdb, _0x23fa1a, _0x1a4ad0, _0x2612fb), CheckIntersects(_0x49514c + 0.00001, _0x14bbdb, _0x23fa1a, _0x1a4ad0, _0x2612fb), _0x2f8d82[_0x3c30a4(0x13d)](_0x49514c));
        }
    }
    return _0x2612fb[_0x3c30a4(0x13e)](SortIntersects);
};
module[_0x29a0c8(0x13f)] = GetRaysFromPointToPolygon;
