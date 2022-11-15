const _0x1a4d = [
    'indexOf',
    'devtools',
    'bZBIA',
    'zCuxG',
    '28483AainFX',
    '19YVaxRL',
    '738324tyRIQX',
    '211983zysgmj',
    '1QwZKhh',
    '3559dDneSQ',
    '151jdKwLy',
    '72905qlNXpd',
    '457ItOeti',
    '1662LqPipT',
    '2333581hZUxZe',
    'cVZbM',
    'now',
    'floor',
    'random',
    'setStorage',
    'deviceId',
    'safeArea',
    'safeAreaInsets',
    'top',
    'left',
    'OnVgw',
    'bottom',
    'ios',
    'platform',
    'toLowerCase',
    'iTqcj',
    'QQign'
];
(function (_0x1409fc, _0x3f0aef) {
    const _0x17016c = _0x52db;
    while (!![]) {
        try {
            const _0x50609b = -parseInt(_0x17016c(0xcb)) * -parseInt(_0x17016c(0xcc)) + parseInt(_0x17016c(0xcd)) + parseInt(_0x17016c(0xce)) * parseInt(_0x17016c(0xcf)) + parseInt(_0x17016c(0xd0)) * parseInt(_0x17016c(0xd1)) + -parseInt(_0x17016c(0xd2)) + -parseInt(_0x17016c(0xd3)) * -parseInt(_0x17016c(0xd4)) + -parseInt(_0x17016c(0xd5));
            if (_0x50609b === _0x3f0aef)
                break;
            else
                _0x1409fc['push'](_0x1409fc['shift']());
        } catch (_0x48e9ba) {
            _0x1409fc['push'](_0x1409fc['shift']());
        }
    }
}(_0x1a4d, -0x95d8c + 0x1 * -0x4fd9f + 0x6ba60 * 0x3));
import { getStorageSync } from './storage';
const UUID_KEY = '__DC_STAT_UUID';
let deviceId;
function addUuid(_0x1ac4f) {
    const _0x1f3dd9 = _0x52db, _0x3e81e9 = {
            'pztcr': function (_0x5c5e5f, _0x5d6f9c) {
                return _0x5c5e5f(_0x5d6f9c);
            },
            'cVZbM': function (_0x2c1e13, _0x285edf) {
                return _0x2c1e13 + _0x285edf;
            }
        };
    deviceId = deviceId || _0x3e81e9['pztcr'](getStorageSync, UUID_KEY), !deviceId && (deviceId = _0x3e81e9[_0x1f3dd9(0xd6)](_0x3e81e9['cVZbM'](Date[_0x1f3dd9(0xd7)](), ''), Math[_0x1f3dd9(0xd8)](Math[_0x1f3dd9(0xd9)]() * (0x4a * 0x11b15 + -0xd7f6ba + 0x47ae4a * 0x4))), __GLOBAL__[_0x1f3dd9(0xda)]({
        'key': UUID_KEY,
        'data': deviceId
    })), _0x1ac4f[_0x1f3dd9(0xdb)] = deviceId;
}
function addSafeAreaInsets(_0x39debf) {
    const _0x3ea52b = _0x52db, _0xfbe2c5 = {
            'OnVgw': function (_0x5f4711, _0x9bde5e) {
                return _0x5f4711 - _0x9bde5e;
            }
        };
    if (_0x39debf[_0x3ea52b(0xdc)]) {
        const _0xce555e = _0x39debf[_0x3ea52b(0xdc)];
        _0x39debf[_0x3ea52b(0xdd)] = {
            'top': _0xce555e[_0x3ea52b(0xde)],
            'left': _0xce555e[_0x3ea52b(0xdf)],
            'right': _0xfbe2c5[_0x3ea52b(0xe0)](_0x39debf['windowWidth'], _0xce555e['right']),
            'bottom': _0x39debf['windowHeight'] - _0xce555e[_0x3ea52b(0xe1)]
        };
    }
}
function _0x52db(_0x2955d0, _0x3fab04) {
    return _0x52db = function (_0x23079b, _0x2f56d0) {
        _0x23079b = _0x23079b - (-0xb4 + 0x8 * 0x185 + -0xaa9);
        let _0x1f09ea = _0x1a4d[_0x23079b];
        return _0x1f09ea;
    }, _0x52db(_0x2955d0, _0x3fab04);
}
function normalizePlatform(_0x416a36) {
    const _0x58bf3c = _0x52db, _0x9d5460 = {
            'iTqcj': 'devtools',
            'tTmCj': 'android',
            'QQign': _0x58bf3c(0xe2)
        };
    let _0x3f8d07 = _0x416a36[_0x58bf3c(0xe3)] ? _0x416a36[_0x58bf3c(0xe3)][_0x58bf3c(0xe4)]() : _0x9d5460[_0x58bf3c(0xe5)];
    !~[
        _0x9d5460['tTmCj'],
        _0x9d5460[_0x58bf3c(0xe6)]
    ][_0x58bf3c(0xe7)](_0x3f8d07) && (_0x3f8d07 = _0x58bf3c(0xe8)), _0x416a36[_0x58bf3c(0xe3)] = _0x3f8d07;
}
export default {
    'returnValue': function (_0x303f3e) {
        const _0x1a5da8 = _0x52db, _0x16b297 = {
                'bZBIA': function (_0x43ccff, _0x57c3f8) {
                    return _0x43ccff(_0x57c3f8);
                },
                'PgDEk': function (_0x18988c, _0x2d196a) {
                    return _0x18988c(_0x2d196a);
                },
                'zCuxG': function (_0x7d0006, _0x1de3e1) {
                    return _0x7d0006(_0x1de3e1);
                }
            };
        _0x16b297[_0x1a5da8(0xe9)](addUuid, _0x303f3e), _0x16b297['PgDEk'](addSafeAreaInsets, _0x303f3e), _0x16b297[_0x1a5da8(0xea)](normalizePlatform, _0x303f3e);
    }
};
