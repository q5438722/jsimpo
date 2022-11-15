/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x3007 = [
    '1811nhOAkg',
    '7XIeBms',
    '325171xHjAZz',
    '281axBiET',
    '1511xmZyoZ',
    '39294kLUXDE',
    '221288ammrHI',
    '1YZZXBw',
    '169409vVlYuC',
    '1UBVoxL',
    '623231CvysYN',
    './SafeRange',
    'length',
    'push',
    'exports'
];
var _0x549f46 = _0x13ad;
(function (_0x51ebfb, _0x5e5486) {
    var _0x509c63 = _0x13ad;
    while (!![]) {
        try {
            var _0x4ddd15 = -parseInt(_0x509c63(0x90)) * -parseInt(_0x509c63(0x91)) + -parseInt(_0x509c63(0x92)) + -parseInt(_0x509c63(0x93)) * parseInt(_0x509c63(0x94)) + -parseInt(_0x509c63(0x95)) + parseInt(_0x509c63(0x96)) * parseInt(_0x509c63(0x97)) + -parseInt(_0x509c63(0x98)) * -parseInt(_0x509c63(0x99)) + parseInt(_0x509c63(0x9a));
            if (_0x4ddd15 === _0x5e5486)
                break;
            else
                _0x51ebfb['push'](_0x51ebfb['shift']());
        } catch (_0xf399f1) {
            _0x51ebfb['push'](_0x51ebfb['shift']());
        }
    }
}(_0x3007, 0x39fed));
var SafeRange = require(_0x549f46(0x9b)), EachInRange = function (_0x356431, _0x4597c9, _0x3736ca, _0x1b8c34, _0x45c8c5) {
        var _0x43124c = _0x549f46;
        _0x1b8c34 === undefined && (_0x1b8c34 = 0x0);
        _0x45c8c5 === undefined && (_0x45c8c5 = _0x356431[_0x43124c(0x9c)]);
        if (SafeRange(_0x356431, _0x1b8c34, _0x45c8c5)) {
            var _0x3ca856, _0xcdeb5d = [null];
            for (_0x3ca856 = 0x5; _0x3ca856 < arguments['length']; _0x3ca856++) {
                _0xcdeb5d[_0x43124c(0x9d)](arguments[_0x3ca856]);
            }
            for (_0x3ca856 = _0x1b8c34; _0x3ca856 < _0x45c8c5; _0x3ca856++) {
                _0xcdeb5d[0x0] = _0x356431[_0x3ca856], _0x4597c9['apply'](_0x3736ca, _0xcdeb5d);
            }
        }
        return _0x356431;
    };
function _0x13ad(_0x533975, _0x41ea58) {
    return _0x13ad = function (_0x3007de, _0x13adcf) {
        _0x3007de = _0x3007de - 0x90;
        var _0x591cd4 = _0x3007[_0x3007de];
        return _0x591cd4;
    }, _0x13ad(_0x533975, _0x41ea58);
}
module[_0x549f46(0x9e)] = EachInRange;
