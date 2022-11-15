const _0x3ed4 = [
    '23KhuPlp',
    '13463NRBlBn',
    '__DC_STAT_UUID',
    'rnnvE',
    'CssJv',
    'now',
    'floor',
    'random',
    'setStorage',
    'deviceId',
    'safeArea',
    'safeAreaInsets',
    'left',
    'windowWidth',
    'right',
    'FhPJK',
    'windowHeight',
    'bottom',
    'devtools',
    'ios',
    'hIJbk',
    'FvUsr',
    'indexOf',
    'platform',
    'RNmza',
    'mHFaf',
    '1MyWhFi',
    '302581JGfdRn',
    '217903NoUAgL',
    '1etIGnW',
    '1749626EpiKJr',
    '4CTDDkI',
    '220445fotQeQ',
    '1461562neMwat',
    '667462BPgjrs'
];
const _0x47bcef = _0x1b9f;
(function (_0x1a0ec4, _0x44974d) {
    const _0x10c990 = _0x1b9f;
    while (!![]) {
        try {
            const _0xf96d18 = parseInt(_0x10c990(0x108)) * parseInt(_0x10c990(0x109)) + parseInt(_0x10c990(0x10a)) + -parseInt(_0x10c990(0x10b)) * -parseInt(_0x10c990(0x10c)) + parseInt(_0x10c990(0x10d)) * -parseInt(_0x10c990(0x10e)) + -parseInt(_0x10c990(0x10f)) + parseInt(_0x10c990(0x110)) + -parseInt(_0x10c990(0x111)) * -parseInt(_0x10c990(0x112));
            if (_0xf96d18 === _0x44974d)
                break;
            else
                _0x1a0ec4['push'](_0x1a0ec4['shift']());
        } catch (_0x33fce0) {
            _0x1a0ec4['push'](_0x1a0ec4['shift']());
        }
    }
}(_0x3ed4, -0x1af14 + -0x1db * -0x72f + 0x225a6));
function _0x1b9f(_0x47bbea, _0x554b25) {
    return _0x1b9f = function (_0x193827, _0x3427c0) {
        _0x193827 = _0x193827 - (-0x20 * -0x35 + -0x1 * 0x72f + 0xb * 0x25);
        let _0xd0d27b = _0x3ed4[_0x193827];
        return _0xd0d27b;
    }, _0x1b9f(_0x47bbea, _0x554b25);
}
import { getStorageSync } from './storage';
const UUID_KEY = _0x47bcef(0x113);
let deviceId;
function addUuid(_0x59e5a5) {
    const _0x52d754 = _0x47bcef, _0x94b995 = {
            'rnnvE': function (_0x29631a, _0x10e36f) {
                return _0x29631a(_0x10e36f);
            },
            'CssJv': function (_0xf3a38a, _0x5583ac) {
                return _0xf3a38a + _0x5583ac;
            }
        };
    deviceId = deviceId || _0x94b995[_0x52d754(0x114)](getStorageSync, UUID_KEY), !deviceId && (deviceId = _0x94b995[_0x52d754(0x115)](Date[_0x52d754(0x116)](), '') + Math[_0x52d754(0x117)](Math[_0x52d754(0x118)]() * (-0x4d7e34 + -0x18e203 * 0xc + 0x108566c * 0x2)), __GLOBAL__[_0x52d754(0x119)]({
        'key': UUID_KEY,
        'data': deviceId
    })), _0x59e5a5[_0x52d754(0x11a)] = deviceId;
}
function addSafeAreaInsets(_0x333cba) {
    const _0x2c2ff6 = _0x47bcef, _0x379394 = {
            'FhPJK': function (_0x51d850, _0x19c06d) {
                return _0x51d850 - _0x19c06d;
            }
        };
    if (_0x333cba[_0x2c2ff6(0x11b)]) {
        const _0x12b578 = _0x333cba[_0x2c2ff6(0x11b)];
        _0x333cba[_0x2c2ff6(0x11c)] = {
            'top': _0x12b578['top'],
            'left': _0x12b578[_0x2c2ff6(0x11d)],
            'right': _0x379394['FhPJK'](_0x333cba[_0x2c2ff6(0x11e)], _0x12b578[_0x2c2ff6(0x11f)]),
            'bottom': _0x379394[_0x2c2ff6(0x120)](_0x333cba[_0x2c2ff6(0x121)], _0x12b578[_0x2c2ff6(0x122)])
        };
    }
}
function normalizePlatform(_0x11b7aa) {
    const _0x44f77f = _0x47bcef, _0x41b7cd = {
            'hIJbk': _0x44f77f(0x123),
            'aEnIg': 'android',
            'FvUsr': _0x44f77f(0x124)
        };
    let _0x439cf5 = _0x11b7aa['platform'] ? _0x11b7aa['platform']['toLowerCase']() : _0x41b7cd[_0x44f77f(0x125)];
    !~[
        _0x41b7cd['aEnIg'],
        _0x41b7cd[_0x44f77f(0x126)]
    ][_0x44f77f(0x127)](_0x439cf5) && (_0x439cf5 = _0x41b7cd['hIJbk']), _0x11b7aa[_0x44f77f(0x128)] = _0x439cf5;
}
export default {
    'returnValue': function (_0x3772e1) {
        const _0x433c66 = _0x47bcef, _0x40f7db = {
                'RNmza': function (_0x361168, _0x235484) {
                    return _0x361168(_0x235484);
                },
                'mHFaf': function (_0x2f0395, _0x66c245) {
                    return _0x2f0395(_0x66c245);
                }
            };
        _0x40f7db[_0x433c66(0x129)](addUuid, _0x3772e1), _0x40f7db[_0x433c66(0x12a)](addSafeAreaInsets, _0x3772e1), _0x40f7db[_0x433c66(0x12a)](normalizePlatform, _0x3772e1);
    }
};
