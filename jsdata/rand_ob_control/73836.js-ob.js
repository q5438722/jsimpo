import _0x4ab03b from 'assert';
import _0x12ef24 from 'lodash';
import {
    noop,
    identity,
    isNpm,
    mapCaches
} from './utils.js';
import _0x36ed30 from '../mergeWith.js';
import _0x313cac from '../last.js';
describe('mergeWith', function () {
    var _0x505b7c = {
            'VXnvb': '0|5|6|1|3|2|4',
            'XNCkg': function (_0x4a333a, _0x55e701, _0x4aed37, _0x50880d) {
                return _0x4a333a(_0x55e701, _0x4aed37, _0x50880d);
            },
            'YMmiP': function (_0x444c40, _0x24a8bb, _0x584040, _0x3170a1, _0x252b86) {
                return _0x444c40(_0x24a8bb, _0x584040, _0x3170a1, _0x252b86);
            },
            'WlkZN': function (_0x2e9ea1, _0x43df97, _0x23c704, _0x4bbf86) {
                return _0x2e9ea1(_0x43df97, _0x23c704, _0x4bbf86);
            },
            'nhqmV': function (_0x27c04a, _0x449300) {
                return _0x27c04a(_0x449300);
            },
            'emcox': function (_0x195f9d, _0x366afe, _0x502f54, _0x2fedb0) {
                return _0x195f9d(_0x366afe, _0x502f54, _0x2fedb0);
            },
            'DGlwY': function (_0x5600c4, _0x13b103) {
                return _0x5600c4 == _0x13b103;
            },
            'fRGYw': 'Stack',
            'hcVPD': function (_0x4c360c, _0x22b88f) {
                return _0x4c360c instanceof _0x22b88f;
            },
            'nUKJW': function (_0x7ac81a, _0x3313f7, _0x47acf8, _0x3246df) {
                return _0x7ac81a(_0x3313f7, _0x47acf8, _0x3246df);
            },
            'FabKX': function (_0x511c86, _0x4487f1, _0x3f9c9c) {
                return _0x511c86(_0x4487f1, _0x3f9c9c);
            },
            'UQqEg': 'should\x20defer\x20to\x20`customizer`\x20for\x20non\x20`undefined`\x20results',
            'CVppU': function (_0x172893, _0xf26459, _0x488757) {
                return _0x172893(_0xf26459, _0x488757);
            },
            'hFhXj': 'should\x20overwrite\x20primitives\x20with\x20source\x20object\x20clones',
            'kHpZE': 'should\x20provide\x20`stack`\x20to\x20`customizer`',
            'rGKNR': function (_0x27ec54, _0x436d97, _0xb73ec5) {
                return _0x27ec54(_0x436d97, _0xb73ec5);
            },
            'wUOow': 'should\x20pop\x20the\x20stack\x20of\x20sources\x20for\x20each\x20sibling\x20property',
            'fAixY': function (_0x3d22a8, _0x1bd1d7, _0x218f7a) {
                return _0x3d22a8(_0x1bd1d7, _0x218f7a);
            },
            'OowDK': 'should\x20handle\x20merging\x20when\x20`customizer`\x20returns\x20`undefined`',
            'mOtvQ': 'should\x20clone\x20sources\x20when\x20`customizer`\x20returns\x20`undefined`'
        }, _0x5b41aa = _0x505b7c['VXnvb']['split']('|'), _0x567e83 = 0x0;
    while (!![]) {
        switch (_0x5b41aa[_0x567e83++]) {
        case '0':
            var _0x5a05e2 = {
                'xZRVs': function (_0x299629, _0x25d858, _0x82f165, _0x14aa43) {
                    return _0x505b7c['XNCkg'](_0x299629, _0x25d858, _0x82f165, _0x14aa43);
                },
                'jXYUL': function (_0x142cc4, _0x3ab571, _0x3a833c, _0x31a860, _0x5d9359) {
                    return _0x505b7c['YMmiP'](_0x142cc4, _0x3ab571, _0x3a833c, _0x31a860, _0x5d9359);
                },
                'NBdxo': function (_0x491492, _0x34ede2, _0xcd7798, _0x53d706) {
                    return _0x505b7c['WlkZN'](_0x491492, _0x34ede2, _0xcd7798, _0x53d706);
                },
                'tummn': function (_0x40ed77, _0x36cc6f) {
                    return _0x505b7c['nhqmV'](_0x40ed77, _0x36cc6f);
                },
                'ryQCX': function (_0x59118b, _0x17d940, _0x5ecc69, _0x46e014) {
                    return _0x505b7c['emcox'](_0x59118b, _0x17d940, _0x5ecc69, _0x46e014);
                },
                'XJHWm': function (_0x53cfd4, _0x3bbf51) {
                    return _0x505b7c['DGlwY'](_0x53cfd4, _0x3bbf51);
                },
                'XuveD': _0x505b7c['fRGYw'],
                'mMKQW': function (_0x110320, _0x5d1ed0) {
                    return _0x505b7c['hcVPD'](_0x110320, _0x5d1ed0);
                },
                'HlUTR': function (_0x4c81e6, _0x34b198, _0x1f8bfd, _0x190cde) {
                    return _0x505b7c['emcox'](_0x4c81e6, _0x34b198, _0x1f8bfd, _0x190cde);
                },
                'FhYzP': function (_0x45079a, _0x49fc67, _0xe46668, _0xeaeee1) {
                    return _0x505b7c['nUKJW'](_0x45079a, _0x49fc67, _0xe46668, _0xeaeee1);
                }
            };
            continue;
        case '1':
            _0x505b7c['FabKX'](it, _0x505b7c['UQqEg'], function () {
                var _0x31f85f = _0x5a05e2['NBdxo'](_0x36ed30, {
                    'a': {
                        'b': [
                            0x0,
                            0x1
                        ]
                    }
                }, { 'a': { 'b': [0x2] } }, function (_0x1b97fe, _0x33b940) {
                    return _0x12ef24['isArray'](_0x1b97fe) ? _0x1b97fe['concat'](_0x33b940) : undefined;
                });
                _0x4ab03b['deepStrictEqual'](_0x31f85f, {
                    'a': {
                        'b': [
                            0x0,
                            0x1,
                            0x2
                        ]
                    }
                });
            });
            continue;
        case '2':
            _0x505b7c['CVppU'](it, _0x505b7c['hFhXj'], function () {
                var _0x4fdc06 = _0x5a05e2['HlUTR'](_0x36ed30, { 'a': 0x0 }, { 'a': { 'b': ['c'] } }, function (_0x22b1e5, _0x347ed9) {
                    return _0x12ef24['isArray'](_0x22b1e5) ? _0x22b1e5['concat'](_0x347ed9) : undefined;
                });
                _0x4ab03b['deepStrictEqual'](_0x4fdc06, { 'a': { 'b': ['c'] } });
            });
            continue;
        case '3':
            _0x505b7c['CVppU'](it, _0x505b7c['kHpZE'], function () {
                var _0x96caf6;
                _0x5a05e2['ryQCX'](_0x36ed30, {}, { 'a': { 'b': 0x2 } }, function () {
                    _0x96caf6 = _0x5a05e2['tummn'](_0x313cac, arguments);
                }), _0x4ab03b['ok'](isNpm ? _0x5a05e2['XJHWm'](_0x96caf6['constructor']['name'], _0x5a05e2['XuveD']) : _0x5a05e2['mMKQW'](_0x96caf6, mapCaches['Stack']));
            });
            continue;
        case '4':
            _0x505b7c['rGKNR'](it, _0x505b7c['wUOow'], function () {
                var _0x412732 = [
                        'b',
                        'c'
                    ], _0x4b4d22 = { 'a': ['a'] }, _0x58a682 = {
                        'a': _0x412732,
                        'b': _0x412732
                    }, _0x124f66 = _0x5a05e2['FhYzP'](_0x36ed30, _0x4b4d22, _0x58a682, function (_0x255f24, _0x26be58) {
                        return _0x12ef24['isArray'](_0x255f24) ? _0x255f24['concat'](_0x26be58) : undefined;
                    });
                _0x4ab03b['deepStrictEqual'](_0x124f66, {
                    'a': [
                        'a',
                        'b',
                        'c'
                    ],
                    'b': [
                        'b',
                        'c'
                    ]
                });
            });
            continue;
        case '5':
            _0x505b7c['fAixY'](it, _0x505b7c['OowDK'], function () {
                var _0x4adbd6 = _0x5a05e2['xZRVs'](_0x36ed30, {
                    'a': {
                        'b': [
                            0x1,
                            0x1
                        ]
                    }
                }, { 'a': { 'b': [0x0] } }, noop);
                _0x4ab03b['deepStrictEqual'](_0x4adbd6, {
                    'a': {
                        'b': [
                            0x0,
                            0x1
                        ]
                    }
                }), _0x4adbd6 = _0x5a05e2['xZRVs'](_0x36ed30, [], [undefined], identity), _0x4ab03b['deepStrictEqual'](_0x4adbd6, [undefined]);
            });
            continue;
        case '6':
            _0x505b7c['fAixY'](it, _0x505b7c['mOtvQ'], function () {
                var _0x58525e = { 'a': { 'b': { 'c': 0x1 } } }, _0xeb03a5 = { 'a': { 'b': { 'd': 0x2 } } };
                _0x5a05e2['jXYUL'](_0x36ed30, {}, _0x58525e, _0xeb03a5, noop), _0x4ab03b['deepStrictEqual'](_0x58525e['a']['b'], { 'c': 0x1 });
            });
            continue;
        }
        break;
    }
});
