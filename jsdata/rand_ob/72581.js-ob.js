'use strict';
const _0x4d2c = [
    'options',
    'apply',
    'include',
    'exclude',
    'LoaderOptionsPlugin',
    'compilation',
    'tap',
    'nepQz',
    'jVhtX',
    'uhxxW',
    'qPQCX',
    'FAwiu',
    'loader',
    'resource',
    'indexOf',
    'matchObject',
    'FQNdS',
    'substr',
    'keys',
    'ZXPxZ',
    'jiJdy',
    'exports',
    '1582409lLThEw',
    '1eEiOoH',
    '735897cKocCH',
    '1RpOCrQ',
    '1472693fZcuLG',
    '3udvByR',
    '284276ZRGfuB',
    '348001dpvPRi',
    '1VpPCqK',
    '75395aODRvQ',
    '11PsKoLr',
    '25FWCdkJ',
    '175246XyWaXi',
    './ModuleFilenameHelpers',
    './util/create-schema-validation',
    '../schemas/plugins/LoaderOptionsPlugin.check.js',
    '../schemas/plugins/LoaderOptionsPlugin.json',
    'Loader\x20Options\x20Plugin',
    'FeeCQ',
    'test'
];
const _0x4aadbd = _0x192d;
(function (_0x2d5176, _0x35e010) {
    const _0xc077e8 = _0x192d;
    while (!![]) {
        try {
            const _0x2f954d = -parseInt(_0xc077e8(0xba)) + parseInt(_0xc077e8(0xbb)) * -parseInt(_0xc077e8(0xbc)) + parseInt(_0xc077e8(0xbd)) * -parseInt(_0xc077e8(0xbe)) + parseInt(_0xc077e8(0xbf)) * parseInt(_0xc077e8(0xc0)) + parseInt(_0xc077e8(0xc1)) * parseInt(_0xc077e8(0xc2)) + parseInt(_0xc077e8(0xc3)) * -parseInt(_0xc077e8(0xc4)) + -parseInt(_0xc077e8(0xc5)) * -parseInt(_0xc077e8(0xc6));
            if (_0x2f954d === _0x35e010)
                break;
            else
                _0x2d5176['push'](_0x2d5176['shift']());
        } catch (_0x2b4d83) {
            _0x2d5176['push'](_0x2d5176['shift']());
        }
    }
}(_0x4d2c, -0x17abc2 + -0x1e495 * -0x2 + 0x228efb * 0x1));
const ModuleFilenameHelpers = require(_0x4aadbd(0xc7)), NormalModule = require('./NormalModule'), createSchemaValidation = require(_0x4aadbd(0xc8)), validate = createSchemaValidation(require(_0x4aadbd(0xc9)), () => require(_0x4aadbd(0xca)), {
        'name': _0x4aadbd(0xcb),
        'baseDataPath': 'options'
    });
class LoaderOptionsPlugin {
    constructor(_0x4d7f4f = {}) {
        const _0x112e60 = _0x4aadbd, _0x340faa = {
                'FeeCQ': function (_0x44a7e6, _0x105d7b) {
                    return _0x44a7e6(_0x105d7b);
                },
                'UwvsL': function (_0x2e3778, _0x4ae7c2) {
                    return _0x2e3778 !== _0x4ae7c2;
                }
            };
        _0x340faa[_0x112e60(0xcc)](validate, _0x4d7f4f);
        if (_0x340faa['UwvsL'](typeof _0x4d7f4f, 'object'))
            _0x4d7f4f = {};
        !_0x4d7f4f[_0x112e60(0xcd)] && (_0x4d7f4f['test'] = { 'test': () => !![] }), this[_0x112e60(0xce)] = _0x4d7f4f;
    }
    [_0x4aadbd(0xcf)](_0x368d24) {
        const _0x55e1c7 = _0x4aadbd, _0x816624 = {
                'jVhtX': function (_0x4b1eff, _0x1b0e54) {
                    return _0x4b1eff < _0x1b0e54;
                },
                'qGmLy': _0x55e1c7(0xd0),
                'uhxxW': function (_0x422ed6, _0x22a688) {
                    return _0x422ed6 === _0x22a688;
                },
                'qPQCX': _0x55e1c7(0xd1),
                'FAwiu': _0x55e1c7(0xcd),
                'nepQz': _0x55e1c7(0xd2)
            }, _0x525fde = this[_0x55e1c7(0xce)];
        _0x368d24['hooks'][_0x55e1c7(0xd3)][_0x55e1c7(0xd4)](_0x816624[_0x55e1c7(0xd5)], _0x23cd83 => {
            const _0x2ff075 = _0x55e1c7, _0x3db0e9 = {
                    'FQNdS': function (_0x33df18, _0x152ad2) {
                        const _0x56029d = _0x192d;
                        return _0x816624[_0x56029d(0xd6)](_0x33df18, _0x152ad2);
                    },
                    'ZXPxZ': function (_0x21d2b2, _0x150e82) {
                        return _0x21d2b2 === _0x150e82;
                    },
                    'eSYcX': _0x816624['qGmLy'],
                    'jiJdy': function (_0x420f56, _0x4db3e8) {
                        const _0x29b765 = _0x192d;
                        return _0x816624[_0x29b765(0xd7)](_0x420f56, _0x4db3e8);
                    },
                    'lidxJ': _0x816624[_0x2ff075(0xd8)],
                    'OudUH': _0x816624[_0x2ff075(0xd9)]
                };
            NormalModule['getCompilationHooks'](_0x23cd83)[_0x2ff075(0xda)]['tap'](_0x816624['nepQz'], (_0x575537, _0x17393d) => {
                const _0xcb6efc = _0x2ff075, _0x45424c = _0x17393d[_0xcb6efc(0xdb)];
                if (!_0x45424c)
                    return;
                const _0x4b7bd1 = _0x45424c[_0xcb6efc(0xdc)]('?');
                if (ModuleFilenameHelpers[_0xcb6efc(0xdd)](_0x525fde, _0x3db0e9[_0xcb6efc(0xde)](_0x4b7bd1, 0x587 * -0x7 + -0x1b84 + -0x1 * -0x4235) ? _0x45424c : _0x45424c[_0xcb6efc(0xdf)](-0x788 * -0x3 + 0x244e + -0x3ae6, _0x4b7bd1)))
                    for (const _0x402a82 of Object[_0xcb6efc(0xe0)](_0x525fde)) {
                        if (_0x3db0e9[_0xcb6efc(0xe1)](_0x402a82, _0x3db0e9['eSYcX']) || _0x3db0e9[_0xcb6efc(0xe2)](_0x402a82, _0x3db0e9['lidxJ']) || _0x402a82 === _0x3db0e9['OudUH'])
                            continue;
                        _0x575537[_0x402a82] = _0x525fde[_0x402a82];
                    }
            });
        });
    }
}
function _0x192d(_0x418ee4, _0x4c06ee) {
    return _0x192d = function (_0x4c32ed, _0x573915) {
        _0x4c32ed = _0x4c32ed - (0x77b + -0x2347 + -0xe43 * -0x2);
        let _0x3dbfcf = _0x4d2c[_0x4c32ed];
        return _0x3dbfcf;
    }, _0x192d(_0x418ee4, _0x4c06ee);
}
module[_0x4aadbd(0xe3)] = LoaderOptionsPlugin;
