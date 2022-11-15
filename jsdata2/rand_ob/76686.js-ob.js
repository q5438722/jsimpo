const _0x4189 = [
    'byXuV',
    'MJSht',
    '?includeAgents=false',
    'Jakmg',
    'GeHQQ',
    'RrHSO',
    'qebAK',
    'wenlK',
    'xBFfm',
    'ANYDi',
    'MkOog',
    'wNCaw',
    'ZdCVR',
    '39712oGUWeX',
    '442180tzKGNg',
    '89719swHUKc',
    '23orHYqA',
    '4223EsUOQW',
    '62208dYGeEr',
    '21BaWDsW',
    '2394SyzjiA',
    '1JpDOFk',
    '20343IlVPQR',
    'LIVECHAT\x20-\x20departments',
    'count',
    'offset',
    'view-l-room',
    'success',
    'livechat/department',
    'Content-Type',
    'should\x20return\x20an\x20\x22unauthorized\x20error\x22\x20when\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission\x20[\x22view-livechat-departments\x22,\x20\x22view-l-room\x22]',
    'should\x20return\x20an\x20array\x20of\x20departments',
    'error-not-authorized',
    'view-livechat-departments',
    'agents',
    'should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20have\x20the\x20permission\x20but\x20request\x20to\x20no\x20include\x20the\x20agents',
    'livechat/department/id',
    'retries',
    'INjFG',
    'eXxPs',
    'then',
    'JrUPf',
    'catch',
    'log',
    'zBXsG',
    'wALEA',
    'JpNNH',
    'odRhy',
    'rtRol',
    'CetlN',
    'wpDzh',
    'oNYiP',
    'povpU',
    'XOVsb',
    'get',
    'set',
    'expect',
    'body',
    'WEkRA',
    'hkafD',
    'error',
    'equal',
    'RLzlL',
    'azWQN',
    'ZfDQy',
    'GYKbu',
    'aEuVi',
    'admin',
    'application/json',
    'split',
    'property',
    'total',
    'VEleu',
    'have',
    'cgOpE',
    'departments',
    'gsSeH',
    'DvbGb',
    'iWjWA',
    'CzPQO',
    'nYTut',
    'ZuLcm',
    'grNIb',
    'ULwuB',
    'UvoOI',
    'nYaqu',
    'kwbNM',
    'hFlva',
    'zyFui',
    'FfRbk',
    'MteRo',
    'livechat/department/',
    'Wcrmy',
    'Uivoz',
    'JLvqP',
    'SOpKP',
    'kvEYO',
    'cBflB',
    'MgGrc',
    'JYvsE',
    'KUbjm',
    'OqadJ',
    'iJNcE',
    'LkBPM',
    'not',
    'caeJG',
    'department',
    '_id',
    'end',
    'CNExA',
    'vfoGo',
    'JHCJM'
];
function _0x2e7a(_0x25c61d, _0x5b7338) {
    return _0x2e7a = function (_0x73e172, _0xbbf131) {
        _0x73e172 = _0x73e172 - (-0x1 * -0x24fb + -0x1 * -0x72e + -0x1 * 0x2a5d);
        let _0x2b8b4e = _0x4189[_0x73e172];
        return _0x2b8b4e;
    }, _0x2e7a(_0x25c61d, _0x5b7338);
}
const _0x25cd52 = _0x2e7a;
(function (_0x227fd5, _0x12953b) {
    const _0x5b75fe = _0x2e7a;
    while (!![]) {
        try {
            const _0x4160bb = -parseInt(_0x5b75fe(0x1cc)) + parseInt(_0x5b75fe(0x1cd)) + -parseInt(_0x5b75fe(0x1ce)) + -parseInt(_0x5b75fe(0x1cf)) * parseInt(_0x5b75fe(0x1d0)) + -parseInt(_0x5b75fe(0x1d1)) + parseInt(_0x5b75fe(0x1d2)) * parseInt(_0x5b75fe(0x1d3)) + parseInt(_0x5b75fe(0x1d4)) * parseInt(_0x5b75fe(0x1d5));
            if (_0x4160bb === _0x12953b)
                break;
            else
                _0x227fd5['push'](_0x227fd5['shift']());
        } catch (_0x1a69df) {
            _0x227fd5['push'](_0x227fd5['shift']());
        }
    }
}(_0x4189, 0x17b97 + 0x4b816 + -0x2c890));
import { expect } from 'chai';
import {
    getCredentials,
    api,
    request,
    credentials
} from '../../../data/api-data.js';
import {
    updatePermission,
    updateSetting
} from '../../../data/permissions.helper';
import { createDepartment } from '../../../data/livechat/department.js';
describe(_0x25cd52(0x1d6), function () {
    const _0x76afca = _0x25cd52, _0x590200 = {
            'eXxPs': function (_0x47c31a) {
                return _0x47c31a();
            },
            'JpNNH': function (_0x675dfd, _0x51df07, _0x5db1bb) {
                return _0x675dfd(_0x51df07, _0x5db1bb);
            },
            'qHBgM': 'Livechat_enabled',
            'CnrGb': function (_0x5ce0db, _0x1bda7b) {
                return _0x5ce0db(_0x1bda7b);
            },
            'azWQN': _0x76afca(0x1d7),
            'ZfDQy': 'array',
            'GYKbu': _0x76afca(0x1d8),
            'aEuVi': _0x76afca(0x1d9),
            'wALEA': _0x76afca(0x1da),
            'ZuLcm': 'application/json',
            'odRhy': function (_0x14330c, _0x380ecc) {
                return _0x14330c(_0x380ecc);
            },
            'zBXsG': _0x76afca(0x1db),
            'rtRol': _0x76afca(0x1dc),
            'CetlN': _0x76afca(0x1dd),
            'RLzlL': _0x76afca(0x1de),
            'FfRbk': function (_0x17b89d, _0xa937c7) {
                return _0x17b89d(_0xa937c7);
            },
            'MteRo': _0x76afca(0x1df),
            'wzRrg': function (_0xb98cbc, _0x133529, _0x5327c6) {
                return _0xb98cbc(_0x133529, _0x5327c6);
            },
            'vfoGo': function (_0x4c343c, _0x3140d1, _0x204898) {
                return _0x4c343c(_0x3140d1, _0x204898);
            },
            'JHCJM': _0x76afca(0x1e0),
            'grNIb': function (_0x2e0fe2, _0x5959bd) {
                return _0x2e0fe2(_0x5959bd);
            },
            'ULwuB': 'department',
            'UvoOI': _0x76afca(0x1e1),
            'nYaqu': function (_0xcf1b1a, _0x57c668) {
                return _0xcf1b1a(_0x57c668);
            },
            'kwbNM': function (_0x2549e1, _0x6f0886) {
                return _0x2549e1(_0x6f0886);
            },
            'hFlva': function (_0x59df84, _0x86cff3) {
                return _0x59df84(_0x86cff3);
            },
            'zyFui': function (_0x17b06f, _0x5a98ae, _0xdd699f) {
                return _0x17b06f(_0x5a98ae, _0xdd699f);
            },
            'YAMcc': function (_0x51f2eb, _0x4abfda, _0xf448c1) {
                return _0x51f2eb(_0x4abfda, _0xf448c1);
            },
            'cBflB': function (_0x517521, _0x4672aa, _0x12715d) {
                return _0x517521(_0x4672aa, _0x12715d);
            },
            'CNExA': function (_0x778e44, _0x8c8a4c, _0x2e672f) {
                return _0x778e44(_0x8c8a4c, _0x2e672f);
            },
            'UWwRv': _0x76afca(0x1e2),
            'awXFA': 'should\x20return\x20the\x20created\x20department',
            'INjFG': function (_0x2d2031, _0x3a3cdf) {
                return _0x2d2031(_0x3a3cdf);
            },
            'nYTut': _0x76afca(0x1e3)
        };
    this[_0x76afca(0x1e4)](0x4ec + 0x558 + 0x124 * -0x9);
    let _0x193367;
    _0x590200[_0x76afca(0x1e5)](before, _0x1df9b8 => getCredentials(_0x1df9b8)), before(_0x3e5348 => {
        const _0x11a4e3 = _0x76afca, _0x54cc5a = {
                'JrUPf': function (_0x167d82) {
                    const _0x42c9c7 = _0x2e7a;
                    return _0x590200[_0x42c9c7(0x1e6)](_0x167d82);
                }
            };
        _0x590200['JpNNH'](updateSetting, _0x590200['qHBgM'], !![])[_0x11a4e3(0x1e7)](() => createDepartment())['then'](_0x197785 => {
            const _0x1ad5e6 = _0x11a4e3;
            _0x193367 = _0x197785, _0x54cc5a[_0x1ad5e6(0x1e8)](_0x3e5348);
        })[_0x11a4e3(0x1e9)](console[_0x11a4e3(0x1ea)]);
    }), _0x590200['CNExA'](describe, _0x590200[_0x76afca(0x1eb)], () => {
        const _0x2d7347 = _0x76afca, _0x3034c8 = {
                'povpU': _0x590200[_0x2d7347(0x1ec)],
                'XOVsb': function (_0xd50903, _0x2e0b96) {
                    return _0xd50903(_0x2e0b96);
                },
                'lulRr': _0x590200['ZuLcm'],
                'wpDzh': function (_0x5d09f5, _0x1b1ce6, _0x512182) {
                    const _0x5abb63 = _0x2d7347;
                    return _0x590200[_0x5abb63(0x1ed)](_0x5d09f5, _0x1b1ce6, _0x512182);
                },
                'oNYiP': 'view-l-room',
                'PjWya': function (_0x59c386, _0x268e50) {
                    const _0x5459d7 = _0x2d7347;
                    return _0x590200[_0x5459d7(0x1ee)](_0x59c386, _0x268e50);
                },
                'KoRAy': _0x590200[_0x2d7347(0x1eb)],
                'jDGyL': _0x590200[_0x2d7347(0x1ef)]
            };
        _0x590200[_0x2d7347(0x1ed)](it, _0x590200[_0x2d7347(0x1f0)], _0x1a9fc1 => {
            const _0x499875 = _0x2d7347;
            _0x3034c8[_0x499875(0x1f1)](updatePermission, _0x3034c8[_0x499875(0x1f2)], [])[_0x499875(0x1e7)](() => updatePermission(_0x499875(0x1e0), []))[_0x499875(0x1e7)](() => {
                const _0x28ec7f = _0x499875, _0x1e3940 = {
                        'WEkRA': _0x3034c8[_0x28ec7f(0x1f3)],
                        'hkafD': function (_0x1cb9d4, _0xaa54bd) {
                            const _0x98ffba = _0x28ec7f;
                            return _0x3034c8[_0x98ffba(0x1f4)](_0x1cb9d4, _0xaa54bd);
                        }
                    };
                request[_0x28ec7f(0x1f5)](api(_0x28ec7f(0x1db)))[_0x28ec7f(0x1f6)](credentials)[_0x28ec7f(0x1f7)]('Content-Type', _0x3034c8['lulRr'])[_0x28ec7f(0x1f7)](-0x9 * 0x1bc + -0x2 * 0x2e7 + -0x11 * -0x15a)['expect'](_0x383d9b => {
                    const _0x2e2ffd = _0x28ec7f;
                    expect(_0x383d9b[_0x2e2ffd(0x1f8)])['to']['have']['property'](_0x1e3940[_0x2e2ffd(0x1f9)], ![]), _0x1e3940[_0x2e2ffd(0x1fa)](expect, _0x383d9b[_0x2e2ffd(0x1f8)][_0x2e2ffd(0x1fb)])['to']['be'][_0x2e2ffd(0x1fc)]('error-not-authorized');
                })['end'](_0x1a9fc1);
            });
        }), _0x590200['JpNNH'](it, _0x590200[_0x2d7347(0x1fd)], _0x341e26 => {
            const _0x13d64c = _0x2d7347, _0xab9a01 = {
                    'VEleu': function (_0x18b4f2, _0x316bbc) {
                        return _0x590200['CnrGb'](_0x18b4f2, _0x316bbc);
                    },
                    'cgOpE': _0x590200[_0x13d64c(0x1fe)],
                    'gsSeH': _0x590200[_0x13d64c(0x1ff)],
                    'DvbGb': function (_0x33ac73, _0x3945fd) {
                        return _0x33ac73(_0x3945fd);
                    },
                    'iWjWA': _0x590200[_0x13d64c(0x200)],
                    'CzPQO': _0x13d64c(0x1da)
                };
            updatePermission(_0x590200[_0x13d64c(0x201)], [_0x13d64c(0x202)])['then'](() => updatePermission(_0x13d64c(0x1e0), [_0x13d64c(0x202)]))[_0x13d64c(0x1e7)](() => {
                const _0x2aa669 = _0x13d64c;
                request[_0x2aa669(0x1f5)](_0x3034c8['PjWya'](api, _0x3034c8['KoRAy']))[_0x2aa669(0x1f6)](credentials)[_0x2aa669(0x1f7)](_0x3034c8['jDGyL'], _0x2aa669(0x203))[_0x2aa669(0x1f7)](0x766 * -0x4 + 0x1574 + 0x1 * 0x8ec)[_0x2aa669(0x1f7)](_0x2250ac => {
                    const _0x4b237c = _0x2aa669, _0x5442a2 = '4|2|3|0|1'[_0x4b237c(0x204)]('|');
                    let _0x5b2b70 = -0x80f * -0x3 + -0x252 + -0x15db;
                    while (!![]) {
                        switch (_0x5442a2[_0x5b2b70++]) {
                        case '0':
                            expect(_0x2250ac[_0x4b237c(0x1f8)])['to']['have'][_0x4b237c(0x205)](_0x4b237c(0x206));
                            continue;
                        case '1':
                            _0xab9a01[_0x4b237c(0x207)](expect, _0x2250ac[_0x4b237c(0x1f8)])['to'][_0x4b237c(0x208)][_0x4b237c(0x205)](_0xab9a01[_0x4b237c(0x209)]);
                            continue;
                        case '2':
                            expect(_0x2250ac[_0x4b237c(0x1f8)][_0x4b237c(0x20a)])['to']['be']['an'](_0xab9a01[_0x4b237c(0x20b)]);
                            continue;
                        case '3':
                            _0xab9a01[_0x4b237c(0x20c)](expect, _0x2250ac[_0x4b237c(0x1f8)])['to'][_0x4b237c(0x208)][_0x4b237c(0x205)](_0xab9a01[_0x4b237c(0x20d)]);
                            continue;
                        case '4':
                            _0xab9a01[_0x4b237c(0x20c)](expect, _0x2250ac['body'])['to'][_0x4b237c(0x208)][_0x4b237c(0x205)](_0xab9a01[_0x4b237c(0x20e)], !![]);
                            continue;
                        }
                        break;
                    }
                })['end'](_0x341e26);
            });
        });
    }), describe(_0x590200[_0x76afca(0x20f)], () => {
        const _0x1a038e = _0x76afca, _0x3daef0 = {
                'ANYDi': _0x590200[_0x1a038e(0x1ef)],
                'Wcrmy': _0x590200[_0x1a038e(0x210)],
                'iJNcE': function (_0x229c30, _0x52dfc0) {
                    return _0x229c30(_0x52dfc0);
                },
                'MgGrc': _0x1a038e(0x1da),
                'CPRaO': function (_0x4dfee3, _0x535c98) {
                    const _0x544673 = _0x1a038e;
                    return _0x590200[_0x544673(0x211)](_0x4dfee3, _0x535c98);
                },
                'JYvsE': _0x590200[_0x1a038e(0x212)],
                'KUbjm': _0x590200[_0x1a038e(0x213)],
                'OqadJ': _0x590200['aEuVi'],
                'byXuV': function (_0x34e813, _0x33605b) {
                    const _0x20fd68 = _0x1a038e;
                    return _0x590200[_0x20fd68(0x214)](_0x34e813, _0x33605b);
                },
                'MJSht': function (_0x5a3b06, _0x2a20d2) {
                    const _0x32322f = _0x1a038e;
                    return _0x590200[_0x32322f(0x215)](_0x5a3b06, _0x2a20d2);
                },
                'wenlK': function (_0x3ee060, _0x12aab3) {
                    const _0x252d7a = _0x1a038e;
                    return _0x590200[_0x252d7a(0x216)](_0x3ee060, _0x12aab3);
                },
                'xBFfm': function (_0x319a4e, _0x52508f, _0x51c6f9) {
                    const _0x2f0e45 = _0x1a038e;
                    return _0x590200[_0x2f0e45(0x217)](_0x319a4e, _0x52508f, _0x51c6f9);
                }
            };
        _0x590200['YAMcc'](it, 'should\x20return\x20an\x20\x22unauthorized\x20error\x22\x20when\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission\x20[\x22view-livechat-departments\x22,\x20\x22view-l-room\x22]', _0x51770e => {
            const _0x5ab2a6 = _0x1a038e, _0x4b8da5 = {
                    'Uivoz': function (_0x5aeab7, _0x43efaa) {
                        const _0x5cd44a = _0x2e7a;
                        return _0x590200[_0x5cd44a(0x1ee)](_0x5aeab7, _0x43efaa);
                    },
                    'JLvqP': _0x590200['wALEA'],
                    'SOpKP': function (_0x63f01a, _0x4e2ec1) {
                        const _0x540b61 = _0x2e7a;
                        return _0x590200[_0x540b61(0x218)](_0x63f01a, _0x4e2ec1);
                    },
                    'kvEYO': _0x590200[_0x5ab2a6(0x219)]
                };
            _0x590200['wzRrg'](updatePermission, _0x590200[_0x5ab2a6(0x201)], [])['then'](() => updatePermission(_0x5ab2a6(0x1e0), []))['then'](() => {
                const _0x261503 = _0x5ab2a6;
                request[_0x261503(0x1f5)](api(_0x261503(0x21a) + _0x193367['_id']))['set'](credentials)['expect'](_0x3daef0['ANYDi'], _0x3daef0[_0x261503(0x21b)])[_0x261503(0x1f7)](0x6 * 0x530 + 0x11ff * -0x1 + 0x8d * -0x15)[_0x261503(0x1f7)](_0x330cb0 => {
                    const _0x15b4d6 = _0x261503;
                    _0x4b8da5[_0x15b4d6(0x21c)](expect, _0x330cb0[_0x15b4d6(0x1f8)])['to'][_0x15b4d6(0x208)][_0x15b4d6(0x205)](_0x4b8da5[_0x15b4d6(0x21d)], ![]), _0x4b8da5[_0x15b4d6(0x21e)](expect, _0x330cb0[_0x15b4d6(0x1f8)][_0x15b4d6(0x1fb)])['to']['be'][_0x15b4d6(0x1fc)](_0x4b8da5[_0x15b4d6(0x21f)]);
                })['end'](_0x51770e);
            });
        }), _0x590200[_0x1a038e(0x220)](it, 'should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission', _0x10fd65 => {
            const _0x563d2a = _0x1a038e, _0x420bf9 = {
                    'fEvQd': _0x3daef0[_0x563d2a(0x221)],
                    'LkBPM': function (_0x55ad21, _0x11a4e4) {
                        return _0x3daef0['CPRaO'](_0x55ad21, _0x11a4e4);
                    },
                    'jQVPy': _0x3daef0[_0x563d2a(0x222)],
                    'caeJG': _0x3daef0[_0x563d2a(0x223)]
                };
            updatePermission(_0x3daef0[_0x563d2a(0x224)], [_0x563d2a(0x202)])['then'](() => updatePermission(_0x563d2a(0x1e0), []))[_0x563d2a(0x1e7)](() => {
                const _0x3bbbd2 = _0x563d2a;
                request[_0x3bbbd2(0x1f5)](_0x3daef0[_0x3bbbd2(0x225)](api, _0x3bbbd2(0x21a) + _0x193367['_id']))[_0x3bbbd2(0x1f6)](credentials)[_0x3bbbd2(0x1f7)](_0x3daef0['ANYDi'], _0x3daef0[_0x3bbbd2(0x21b)])[_0x3bbbd2(0x1f7)](-0x3d1 + -0x1052 * -0x1 + -0xbb9 * 0x1)[_0x3bbbd2(0x1f7)](_0x1276d1 => {
                    const _0x3a22e6 = _0x3bbbd2;
                    expect(_0x1276d1[_0x3a22e6(0x1f8)])['to'][_0x3a22e6(0x208)][_0x3a22e6(0x205)](_0x420bf9['fEvQd'], !![]), _0x420bf9[_0x3a22e6(0x226)](expect, _0x1276d1[_0x3a22e6(0x1f8)])['to'][_0x3a22e6(0x208)][_0x3a22e6(0x205)](_0x420bf9['jQVPy']), _0x420bf9[_0x3a22e6(0x226)](expect, _0x1276d1[_0x3a22e6(0x1f8)])['to'][_0x3a22e6(0x227)][_0x3a22e6(0x208)][_0x3a22e6(0x205)](_0x420bf9[_0x3a22e6(0x228)]), _0x420bf9['LkBPM'](expect, _0x1276d1[_0x3a22e6(0x1f8)][_0x3a22e6(0x229)]['_id'])['to']['be'][_0x3a22e6(0x1fc)](_0x193367[_0x3a22e6(0x22a)]);
                })[_0x3bbbd2(0x22b)](_0x10fd65);
            });
        }), _0x590200[_0x1a038e(0x22c)](it, _0x590200['UWwRv'], _0x33fae2 => {
            const _0xe4f54 = _0x1a038e;
            _0x590200[_0xe4f54(0x22d)](updatePermission, _0x590200[_0xe4f54(0x22e)], [_0xe4f54(0x202)])[_0xe4f54(0x1e7)](() => {
                const _0x329310 = _0xe4f54, _0x23fa5e = {
                        'zparX': function (_0x46747d, _0x46361e) {
                            const _0x138fff = _0x2e7a;
                            return _0x3daef0[_0x138fff(0x22f)](_0x46747d, _0x46361e);
                        },
                        'Jakmg': function (_0x40c843, _0x2b847f) {
                            return _0x3daef0['byXuV'](_0x40c843, _0x2b847f);
                        },
                        'GeHQQ': _0x329310(0x229),
                        'RrHSO': function (_0x9b29f8, _0x570583) {
                            const _0x6a9785 = _0x329310;
                            return _0x3daef0[_0x6a9785(0x230)](_0x9b29f8, _0x570583);
                        },
                        'qebAK': _0x3daef0[_0x329310(0x223)]
                    };
                request[_0x329310(0x1f5)](_0x3daef0['wenlK'](api, _0x329310(0x21a) + _0x193367['_id'] + _0x329310(0x231)))[_0x329310(0x1f6)](credentials)[_0x329310(0x1f7)](_0x3daef0['ANYDi'], _0x3daef0['Wcrmy'])['expect'](0xd3 * 0x16 + -0x27b * -0xb + -0x2ca3)[_0x329310(0x1f7)](_0x98f17b => {
                    const _0x4b8759 = _0x329310;
                    _0x23fa5e['zparX'](expect, _0x98f17b['body'])['to']['have']['property'](_0x4b8759(0x1da), !![]), _0x23fa5e[_0x4b8759(0x232)](expect, _0x98f17b['body'])['to'][_0x4b8759(0x208)][_0x4b8759(0x205)](_0x23fa5e[_0x4b8759(0x233)]), _0x23fa5e[_0x4b8759(0x234)](expect, _0x98f17b[_0x4b8759(0x1f8)])['to'][_0x4b8759(0x227)][_0x4b8759(0x208)][_0x4b8759(0x205)](_0x23fa5e[_0x4b8759(0x235)]), expect(_0x98f17b[_0x4b8759(0x1f8)][_0x4b8759(0x229)]['_id'])['to']['be'][_0x4b8759(0x1fc)](_0x193367[_0x4b8759(0x22a)]);
                })['end'](_0x33fae2);
            });
        }), _0x590200[_0x1a038e(0x22c)](it, _0x590200['awXFA'], _0x5d1b3d => {
            const _0x3af6b5 = _0x1a038e, _0x46ceb3 = {
                    'MkOog': function (_0x303b46, _0x4097de) {
                        return _0x303b46(_0x4097de);
                    },
                    'wNCaw': function (_0x50a469, _0x266e9a) {
                        const _0x3a8617 = _0x2e7a;
                        return _0x3daef0[_0x3a8617(0x236)](_0x50a469, _0x266e9a);
                    },
                    'ZdCVR': _0x3daef0[_0x3af6b5(0x223)]
                };
            _0x3daef0[_0x3af6b5(0x237)](updatePermission, _0x3daef0[_0x3af6b5(0x224)], ['admin'])[_0x3af6b5(0x1e7)](() => updatePermission('view-livechat-departments', ['admin']))[_0x3af6b5(0x1e7)](() => {
                const _0x55c05f = _0x3af6b5;
                request[_0x55c05f(0x1f5)](_0x3daef0['wenlK'](api, _0x55c05f(0x21a) + _0x193367[_0x55c05f(0x22a)]))[_0x55c05f(0x1f6)](credentials)[_0x55c05f(0x1f7)](_0x3daef0[_0x55c05f(0x238)], _0x3daef0[_0x55c05f(0x21b)])[_0x55c05f(0x1f7)](0xfd6 + 0xf * 0x135 + 0x2129 * -0x1)[_0x55c05f(0x1f7)](_0x3f7323 => {
                    const _0x356a83 = _0x55c05f;
                    _0x46ceb3[_0x356a83(0x239)](expect, _0x3f7323[_0x356a83(0x1f8)])['to'][_0x356a83(0x208)][_0x356a83(0x205)](_0x356a83(0x1da), !![]), _0x46ceb3[_0x356a83(0x23a)](expect, _0x3f7323[_0x356a83(0x1f8)])['to']['have'][_0x356a83(0x205)]('department'), _0x46ceb3[_0x356a83(0x23a)](expect, _0x3f7323[_0x356a83(0x1f8)])['to'][_0x356a83(0x208)][_0x356a83(0x205)](_0x46ceb3[_0x356a83(0x23b)]), _0x46ceb3[_0x356a83(0x23a)](expect, _0x3f7323['body'][_0x356a83(0x229)][_0x356a83(0x22a)])['to']['be'][_0x356a83(0x1fc)](_0x193367['_id']);
                })[_0x55c05f(0x22b)](_0x5d1b3d);
            });
        });
    });
});
