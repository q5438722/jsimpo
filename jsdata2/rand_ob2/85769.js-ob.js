/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x3b5b = [
    '1474GvhFSe',
    '1093lQeaog',
    '3097LTBzTg',
    '371pEUVXZ',
    '313601ZsQiwp',
    '5phPbNJ',
    '1742275yMrFum',
    './SafeRange',
    'length',
    'apply',
    '25srREfE',
    '17778BmNbOL',
    '1DgwsRN',
    '2894ycAXlm',
    '1537350UaiuMG'
];
var _0x30e4e8 = _0x1624;
(function (_0x4a503e, _0x737d35) {
    var _0x249dc8 = _0x1624;
    while (!![]) {
        try {
            var _0x4b20e4 = -parseInt(_0x249dc8(0xe8)) * parseInt(_0x249dc8(0xe9)) + parseInt(_0x249dc8(0xea)) * parseInt(_0x249dc8(0xeb)) + parseInt(_0x249dc8(0xec)) + -parseInt(_0x249dc8(0xed)) * parseInt(_0x249dc8(0xee)) + parseInt(_0x249dc8(0xef)) * parseInt(_0x249dc8(0xf0)) + -parseInt(_0x249dc8(0xf1)) * parseInt(_0x249dc8(0xf2)) + parseInt(_0x249dc8(0xf3));
            if (_0x4b20e4 === _0x737d35)
                break;
            else
                _0x4a503e['push'](_0x4a503e['shift']());
        } catch (_0x1a4139) {
            _0x4a503e['push'](_0x4a503e['shift']());
        }
    }
}(_0x3b5b, 0xc5421));
function _0x1624(_0x1ccbb1, _0x48b7e9) {
    return _0x1624 = function (_0x3b5bff, _0x162453) {
        _0x3b5bff = _0x3b5bff - 0xe8;
        var _0x10af9c = _0x3b5b[_0x3b5bff];
        return _0x10af9c;
    }, _0x1624(_0x1ccbb1, _0x48b7e9);
}
var SafeRange = require(_0x30e4e8(0xf4)), EachInRange = function (_0x31dd88, _0x319c3f, _0x1c0df5, _0x2935cd, _0x36aa53) {
        var _0x575e8b = _0x30e4e8;
        _0x2935cd === undefined && (_0x2935cd = 0x0);
        _0x36aa53 === undefined && (_0x36aa53 = _0x31dd88[_0x575e8b(0xf5)]);
        if (SafeRange(_0x31dd88, _0x2935cd, _0x36aa53)) {
            var _0x491a96, _0x43da55 = [null];
            for (_0x491a96 = 0x5; _0x491a96 < arguments[_0x575e8b(0xf5)]; _0x491a96++) {
                _0x43da55['push'](arguments[_0x491a96]);
            }
            for (_0x491a96 = _0x2935cd; _0x491a96 < _0x36aa53; _0x491a96++) {
                _0x43da55[0x0] = _0x31dd88[_0x491a96], _0x319c3f[_0x575e8b(0xf6)](_0x1c0df5, _0x43da55);
            }
        }
        return _0x31dd88;
    };
module['exports'] = EachInRange;
