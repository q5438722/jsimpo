'use strict';
const _0x55ca = [
    'mustNotCall',
    'reject\x20unauthorized',
    'BxHnk',
    'MmUXw',
    'WUDlB',
    'OqlgL',
    'FaiXl',
    'cVQWd',
    'dcJya',
    '...\x20authorized',
    'connect\x20authorized',
    'WikKo',
    'VMwWA',
    'eFnIj',
    'YunsO',
    'eKHDq',
    'close',
    '72414GhtWNy',
    '5QVuMgu',
    '297511DuTNRu',
    '1FxDKSx',
    '402621CPFTiN',
    '122653TZEtDL',
    '9CPCnQh',
    '8619RafWyO',
    '27HBJfNG',
    '182879NkEVKb',
    '1274193vwZtqR',
    '2UTXOIQ',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    '../common/fixtures',
    'readKey',
    'rsa_private.pem',
    'rsa_cert.crt',
    'createServer',
    'pipe',
    'end',
    'listen',
    'mustCall',
    'thYRm',
    'data',
    'connect\x20unauthorized',
    'session',
    'error',
    'log',
    'connect',
    'address',
    'port',
    'localhost',
    'ybHeE',
    'authorized',
    'AkuSd',
    'strictEqual',
    'toString',
    'tioIX',
    'data\x20failed\x20to\x20echo!',
    'CIomp',
    'once'
];
const _0x3b14cc = _0x3a07;
(function (_0x3ebd32, _0x38959b) {
    const _0x108095 = _0x3a07;
    while (!![]) {
        try {
            const _0x16eca2 = -parseInt(_0x108095(0xef)) + -parseInt(_0x108095(0xf0)) * -parseInt(_0x108095(0xf1)) + -parseInt(_0x108095(0xf2)) * -parseInt(_0x108095(0xf3)) + parseInt(_0x108095(0xf4)) * parseInt(_0x108095(0xf5)) + parseInt(_0x108095(0xf6)) * parseInt(_0x108095(0xf7)) + parseInt(_0x108095(0xf8)) + -parseInt(_0x108095(0xf9)) * parseInt(_0x108095(0xfa));
            if (_0x16eca2 === _0x38959b)
                break;
            else
                _0x3ebd32['push'](_0x3ebd32['shift']());
        } catch (_0x18234d) {
            _0x3ebd32['push'](_0x3ebd32['shift']());
        }
    }
}(_0x55ca, -0x13fbd * -0x4 + 0xccc5d + -0x5c1e4));
function _0x3a07(_0x11f51d, _0xfe123d) {
    return _0x3a07 = function (_0x33e674, _0x35bad2) {
        _0x33e674 = _0x33e674 - (-0x17cc * 0x1 + 0x2 * -0x665 + 0x2585);
        let _0x5e70c3 = _0x55ca[_0x33e674];
        return _0x5e70c3;
    }, _0x3a07(_0x11f51d, _0xfe123d);
}
const common = require(_0x3b14cc(0xfb));
if (!common[_0x3b14cc(0xfc)])
    common[_0x3b14cc(0xfd)](_0x3b14cc(0xfe));
const assert = require('assert'), tls = require('tls'), fixtures = require(_0x3b14cc(0xff)), options = {
        'key': fixtures[_0x3b14cc(0x100)](_0x3b14cc(0x101)),
        'cert': fixtures[_0x3b14cc(0x100)](_0x3b14cc(0x102))
    }, server = tls[_0x3b14cc(0x103)](options, function (_0x506dd0) {
        const _0xec3f6e = _0x3b14cc;
        _0x506dd0[_0xec3f6e(0x104)](_0x506dd0), _0x506dd0['on'](_0xec3f6e(0x105), () => _0x506dd0[_0xec3f6e(0x105)]());
    })[_0x3b14cc(0x106)](0x23eb * -0x1 + -0x2305 + 0x28 * 0x1c6, common[_0x3b14cc(0x107)](function () {
        const _0x348cdc = _0x3b14cc, _0xea4b58 = {
                'thYRm': function (_0x541dea) {
                    return _0x541dea();
                }
            };
        _0xea4b58[_0x348cdc(0x108)](unauthorized);
    }));
function unauthorized() {
    const _0x1e287f = _0x3b14cc, _0x228668 = {
            'iVwns': function (_0x558139, _0x424b10, _0x19c4bd) {
                return _0x558139(_0x424b10, _0x19c4bd);
            },
            'ybHeE': function (_0x253d7c, _0x39cbff) {
                return _0x253d7c(_0x39cbff);
            },
            'AkuSd': _0x1e287f(0x109),
            'CIomp': _0x1e287f(0x105),
            'HLlOr': _0x1e287f(0x10a),
            'LlDZE': _0x1e287f(0x10b),
            'SPRtL': _0x1e287f(0x10c)
        };
    console[_0x1e287f(0x10d)](_0x228668['HLlOr']);
    const _0xb51c2f = tls[_0x1e287f(0x10e)]({
        'port': server[_0x1e287f(0x10f)]()[_0x1e287f(0x110)],
        'servername': _0x1e287f(0x111),
        'rejectUnauthorized': ![]
    }, common[_0x1e287f(0x107)](function () {
        const _0x1afb42 = _0x1e287f, _0x143b8c = {
                'tioIX': function (_0x35f0ef, _0x244e7e, _0x17f459) {
                    return _0x228668['iVwns'](_0x35f0ef, _0x244e7e, _0x17f459);
                }
            };
        let _0x15c96a;
        _0x228668[_0x1afb42(0x112)](assert, !_0xb51c2f[_0x1afb42(0x113)]), _0xb51c2f['on'](_0x228668[_0x1afb42(0x114)], common[_0x1afb42(0x107)](_0x120626 => {
            const _0x112fd5 = _0x1afb42;
            assert[_0x112fd5(0x115)](_0x120626[_0x112fd5(0x116)](), 'ok'), _0x15c96a = _0x120626;
        })), _0xb51c2f['on'](_0x228668['CIomp'], common['mustCall'](() => {
            const _0x12ff01 = _0x1afb42;
            _0x143b8c[_0x12ff01(0x117)](assert, _0x15c96a, _0x12ff01(0x118));
        })), _0xb51c2f['on'](_0x228668[_0x1afb42(0x119)], () => rejectUnauthorized());
    }));
    _0xb51c2f[_0x1e287f(0x11a)](_0x228668['LlDZE'], common[_0x1e287f(0x107)](() => {
    })), _0xb51c2f['on'](_0x228668['SPRtL'], common[_0x1e287f(0x11b)]()), _0xb51c2f['end']('ok');
}
function rejectUnauthorized() {
    const _0x3f6359 = _0x3b14cc, _0x29d9f5 = {
            'WUDlB': function (_0x2037d5) {
                return _0x2037d5();
            },
            'BxHnk': 'localhost',
            'MmUXw': _0x3f6359(0x10c)
        };
    console[_0x3f6359(0x10d)](_0x3f6359(0x11c));
    const _0x229bea = tls['connect'](server['address']()[_0x3f6359(0x110)], { 'servername': _0x29d9f5[_0x3f6359(0x11d)] }, common[_0x3f6359(0x11b)]());
    _0x229bea['on'](_0x3f6359(0x109), common[_0x3f6359(0x11b)]()), _0x229bea['on'](_0x29d9f5[_0x3f6359(0x11e)], common[_0x3f6359(0x107)](function (_0xd4a1ed) {
        const _0x357517 = _0x3f6359;
        _0x29d9f5[_0x357517(0x11f)](rejectUnauthorizedUndefined);
    })), _0x229bea[_0x3f6359(0x105)]('ng');
}
function rejectUnauthorizedUndefined() {
    const _0x27cb04 = _0x3b14cc, _0x63b245 = {
            'RJcKs': function (_0x62e519) {
                return _0x62e519();
            },
            'OqlgL': 'reject\x20unauthorized\x20undefined',
            'FaiXl': _0x27cb04(0x111),
            'cVQWd': 'data',
            'dcJya': 'error'
        };
    console[_0x27cb04(0x10d)](_0x63b245[_0x27cb04(0x120)]);
    const _0x4f7e7c = tls[_0x27cb04(0x10e)](server[_0x27cb04(0x10f)]()[_0x27cb04(0x110)], {
        'servername': _0x63b245[_0x27cb04(0x121)],
        'rejectUnauthorized': undefined
    }, common[_0x27cb04(0x11b)]());
    _0x4f7e7c['on'](_0x63b245[_0x27cb04(0x122)], common['mustNotCall']()), _0x4f7e7c['on'](_0x63b245[_0x27cb04(0x123)], common[_0x27cb04(0x107)](function (_0x2410ad) {
        _0x63b245['RJcKs'](authorized);
    })), _0x4f7e7c[_0x27cb04(0x105)]('ng');
}
function authorized() {
    const _0x15ce4f = _0x3b14cc, _0x59484f = {
            'eFnIj': _0x15ce4f(0x124),
            'YunsO': function (_0x233996, _0xd1ae43) {
                return _0x233996(_0xd1ae43);
            },
            'eKHDq': _0x15ce4f(0x109),
            'syKeX': _0x15ce4f(0x105),
            'WikKo': _0x15ce4f(0x125),
            'VMwWA': _0x15ce4f(0x111),
            'QgCdA': _0x15ce4f(0x10c)
        };
    console['log'](_0x59484f[_0x15ce4f(0x126)]);
    const _0x2bbafa = tls[_0x15ce4f(0x10e)](server['address']()[_0x15ce4f(0x110)], {
        'ca': [fixtures[_0x15ce4f(0x100)](_0x15ce4f(0x102))],
        'servername': _0x59484f[_0x15ce4f(0x127)]
    }, common[_0x15ce4f(0x107)](function () {
        const _0x3872de = _0x15ce4f;
        console[_0x3872de(0x10d)](_0x59484f[_0x3872de(0x128)]), _0x59484f[_0x3872de(0x129)](assert, _0x2bbafa['authorized']), _0x2bbafa['on'](_0x59484f[_0x3872de(0x12a)], common[_0x3872de(0x107)](_0x5df678 => {
            const _0x1dac2d = _0x3872de;
            assert[_0x1dac2d(0x115)](_0x5df678['toString'](), 'ok');
        })), _0x2bbafa['on'](_0x59484f['syKeX'], () => server[_0x3872de(0x12b)]());
    }));
    _0x2bbafa['on'](_0x59484f['QgCdA'], common[_0x15ce4f(0x11b)]()), _0x2bbafa[_0x15ce4f(0x105)]('ok');
}
