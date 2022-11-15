/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x5669 = [
    'PI2',
    'exports',
    '1450789rGlxhb',
    '173744DCDqhL',
    '2oUgMvV',
    '57088yPIBfD',
    '1195328XyYYmL',
    '1501431Supyrf',
    '1221317PeVYcD',
    '1QXkljl',
    '494105YugPWP',
    '../const',
    'TAU'
];
function _0x4461(_0x47d4d9, _0x17fd19) {
    return _0x4461 = function (_0x566955, _0x4461c5) {
        _0x566955 = _0x566955 - 0x12a;
        var _0x1a342d = _0x5669[_0x566955];
        return _0x1a342d;
    }, _0x4461(_0x47d4d9, _0x17fd19);
}
var _0x26ac72 = _0x4461;
(function (_0x547c2e, _0x3e8641) {
    var _0x2a5cdd = _0x4461;
    while (!![]) {
        try {
            var _0x5e022c = parseInt(_0x2a5cdd(0x12a)) + -parseInt(_0x2a5cdd(0x12b)) * -parseInt(_0x2a5cdd(0x12c)) + parseInt(_0x2a5cdd(0x12d)) + -parseInt(_0x2a5cdd(0x12e)) + -parseInt(_0x2a5cdd(0x12f)) + -parseInt(_0x2a5cdd(0x130)) * -parseInt(_0x2a5cdd(0x131)) + parseInt(_0x2a5cdd(0x132));
            if (_0x5e022c === _0x3e8641)
                break;
            else
                _0x547c2e['push'](_0x547c2e['shift']());
        } catch (_0x14c243) {
            _0x547c2e['push'](_0x547c2e['shift']());
        }
    }
}(_0x5669, 0xd562c));
var CONST = require(_0x26ac72(0x133)), CounterClockwise = function (_0x4ed549) {
        var _0x28670c = _0x26ac72;
        return _0x4ed549 > Math['PI'] && (_0x4ed549 -= CONST['PI2']), Math['abs'](((_0x4ed549 + CONST[_0x28670c(0x134)]) % CONST[_0x28670c(0x135)] - CONST['PI2']) % CONST[_0x28670c(0x135)]);
    };
module[_0x26ac72(0x136)] = CounterClockwise;
