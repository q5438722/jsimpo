/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x4bc8 = [
    '118643wYiTqT',
    '1962252SpGGUX',
    '566861hWuQCe',
    '2CDgzGp',
    'exports',
    '1316559wOoIOL',
    '1UszcPt',
    '13yylucm',
    '34290SmPoNM',
    '1724780pJbRXn',
    '2749iZYZBn',
    '457fwkDPN',
    '1yEnTST'
];
var _0x3c37e6 = _0x3c4e;
(function (_0xd87d97, _0x319a50) {
    var _0x53d405 = _0x3c4e;
    while (!![]) {
        try {
            var _0xaa0b0f = -parseInt(_0x53d405(0xb6)) * parseInt(_0x53d405(0xb7)) + parseInt(_0x53d405(0xb8)) * -parseInt(_0x53d405(0xb9)) + -parseInt(_0x53d405(0xba)) + -parseInt(_0x53d405(0xbb)) * -parseInt(_0x53d405(0xbc)) + -parseInt(_0x53d405(0xbd)) * -parseInt(_0x53d405(0xbe)) + parseInt(_0x53d405(0xbf)) + parseInt(_0x53d405(0xc0)) * parseInt(_0x53d405(0xc1));
            if (_0xaa0b0f === _0x319a50)
                break;
            else
                _0xd87d97['push'](_0xd87d97['shift']());
        } catch (_0x549959) {
            _0xd87d97['push'](_0xd87d97['shift']());
        }
    }
}(_0x4bc8, 0xf02f9));
var Point = require('../point/Point'), GetNearestPoint = function (_0x81ed76, _0x439da4, _0x1bceca) {
        _0x1bceca === undefined && (_0x1bceca = new Point());
        var _0x21a8a6 = _0x81ed76['x1'], _0x334f2c = _0x81ed76['y1'], _0x316d22 = _0x81ed76['x2'], _0x16b538 = _0x81ed76['y2'], _0x5e14b2 = (_0x316d22 - _0x21a8a6) * (_0x316d22 - _0x21a8a6) + (_0x16b538 - _0x334f2c) * (_0x16b538 - _0x334f2c);
        if (_0x5e14b2 === 0x0)
            return _0x1bceca;
        var _0x14837a = ((_0x439da4['x'] - _0x21a8a6) * (_0x316d22 - _0x21a8a6) + (_0x439da4['y'] - _0x334f2c) * (_0x16b538 - _0x334f2c)) / _0x5e14b2;
        return _0x1bceca['x'] = _0x21a8a6 + _0x14837a * (_0x316d22 - _0x21a8a6), _0x1bceca['y'] = _0x334f2c + _0x14837a * (_0x16b538 - _0x334f2c), _0x1bceca;
    };
function _0x3c4e(_0x218abd, _0x1ed489) {
    return _0x3c4e = function (_0x4bc84c, _0x3c4efa) {
        _0x4bc84c = _0x4bc84c - 0xb6;
        var _0x3b1bf7 = _0x4bc8[_0x4bc84c];
        return _0x3b1bf7;
    }, _0x3c4e(_0x218abd, _0x1ed489);
}
module[_0x3c37e6(0xc2)] = GetNearestPoint;
