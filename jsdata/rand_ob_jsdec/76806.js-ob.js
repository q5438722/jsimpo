
var _0x263275 = _0x1715;
function _0x1715(_0x4e528e, _0x301d49) {
    return _0x1715 = function (_0x31235d, _0x25ece6) {
        _0x31235d = _0x31235d - (-0x95 * 0x13 + 0x5 * -0x761 + 0x312d);
        var _0x400519 = _0x3f2d[_0x31235d];
        return _0x400519;
    }, _0x1715(_0x4e528e, _0x301d49);
}
(function (_0x13da30, _0x2f627c) {
    var _0x216f9e = _0x1715;
    while (!![]) {
        try {
            var _0x276b5f = parseInt(_0x216f9e(0x139)) * parseInt(_0x216f9e(0x13a)) + -parseInt(_0x216f9e(0x13b)) * parseInt(_0x216f9e(0x13c)) + parseInt(_0x216f9e(0x13d)) * parseInt(_0x216f9e(0x13e)) + -parseInt(_0x216f9e(0x13f)) + parseInt(_0x216f9e(0x140)) * -parseInt(_0x216f9e(0x141)) + parseInt(_0x216f9e(0x142)) * -parseInt(_0x216f9e(0x143)) + parseInt(_0x216f9e(0x144));
            if (_0x276b5f === _0x2f627c)
                break;
            else
                _0x13da30['push'](_0x13da30['shift']());
        } catch (_0xa0a28e) {
            _0x13da30['push'](_0x13da30['shift']());
        }
    }
}(_0x3f2d, 0x354b3 * 0x1 + 0x29b9d + -0x35d18));
import { Migrations } from '../../../app/migrations';
import { Settings } from '../../../app/models';
Migrations[_0x263275(0x145)]({
    'version': 0x3a,
    'up'() {
        var _0x4d9df8 = _0x263275, _0x577e2f = {
                'HMiQt': 'Push_gateway',
                'gueSr': _0x4d9df8(0x146),
                'TwRGM': 'https://gateway.rocket.chat'
            };
        Settings[_0x4d9df8(0x147)]({
            '_id': _0x577e2f[_0x4d9df8(0x148)],
            'value': _0x577e2f['gueSr']
        }, {
            '$set': {
                'value': _0x577e2f[_0x4d9df8(0x149)],
                'packageValue': _0x577e2f['TwRGM']
            }
        });
    }
});