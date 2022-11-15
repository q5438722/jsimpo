import _0xf6034a from 'assert';
import _0x5af33d from 'lodash';
import {
    args,
    toArgs
} from './utils.js';
import _0x4045fd from '../pick.js';
describe('pick', function () {
    var _0x806ee = {
            'jXVlo': '7|6|8|9|3|0|4|2|1|5',
            'VOyjN': function (_0x47b311, _0x327fff, _0x538a20) {
                return _0x47b311(_0x327fff, _0x538a20);
            },
            'kPmUQ': 'should\x20pick\x20a\x20key\x20over\x20a\x20path',
            'jRgJT': function (_0x4fc8b0, _0x4b6582, _0x4cade8) {
                return _0x4fc8b0(_0x4b6582, _0x4cade8);
            },
            'vtbkb': 'should\x20work\x20with\x20a\x20primitive\x20`object`',
            'nsuwP': function (_0x573e93, _0xb996b1, _0x160f87) {
                return _0x573e93(_0xb996b1, _0x160f87);
            },
            'vXMlX': 'should\x20return\x20an\x20empty\x20object\x20when\x20`object`\x20is\x20nullish',
            'YIDdD': 'should\x20support\x20path\x20arrays',
            'npCGe': function (_0x34560a, _0x31bdc7, _0x373355) {
                return _0x34560a(_0x31bdc7, _0x373355);
            },
            'tbSpv': 'should\x20coerce\x20`paths`\x20to\x20strings',
            'HhcHW': 'should\x20work\x20with\x20`arguments`\x20object\x20`paths`',
            'zJlIV': function (_0x2722ec, _0x3e1854) {
                return _0x2722ec(_0x3e1854);
            },
            'yBpsx': function (_0x201d8c, _0x4024a1, _0x42cb3f, _0x50904e) {
                return _0x201d8c(_0x4024a1, _0x42cb3f, _0x50904e);
            },
            'XYwmK': function (_0x4304c6, _0x49067b, _0x13a42c, _0x47e77a) {
                return _0x4304c6(_0x49067b, _0x13a42c, _0x47e77a);
            },
            'mwDYg': 'b.c',
            'OdCiv': 'a.b',
            'CCUOW': 'valueOf',
            'Ucxaz': 'slice',
            'Lluet': function (_0x34f9af, _0xb5d31c, _0x16444b) {
                return _0x34f9af(_0xb5d31c, _0x16444b);
            },
            'mNwVA': 'should\x20flatten\x20`paths`',
            'snvNJ': function (_0x534a62, _0x5eac10, _0x1bef00) {
                return _0x534a62(_0x5eac10, _0x1bef00);
            },
            'qdNdN': 'should\x20support\x20deep\x20paths'
        }, _0x18c4c9 = _0x806ee['jXVlo']['split']('|'), _0x2f8334 = 0x0;
    while (!![]) {
        switch (_0x18c4c9[_0x2f8334++]) {
        case '0':
            _0x806ee['VOyjN'](it, _0x806ee['kPmUQ'], function () {
                var _0x3a6d1a = {
                    'a.b': 0x1,
                    'a': { 'b': 0x2 }
                };
                _0x5af33d['each']([
                    _0x597d17['sGsbx'],
                    [_0x597d17['sGsbx']]
                ], function (_0x305b17) {
                    _0xf6034a['deepStrictEqual'](_0x597d17['BBKRk'](_0x4045fd, _0x3a6d1a, _0x305b17), { 'a.b': 0x1 });
                });
            });
            continue;
        case '1':
            _0x806ee['jRgJT'](it, _0x806ee['vtbkb'], function () {
                _0xf6034a['deepStrictEqual'](_0x597d17['mPFgm'](_0x4045fd, '', _0x597d17['GOYIH']), { 'slice': ''['slice'] });
            });
            continue;
        case '2':
            _0x806ee['nsuwP'](it, _0x806ee['vXMlX'], function () {
                var _0x28916b = {
                    'jVAAB': function (_0x1dbe66, _0x5772bd, _0x5f22d3) {
                        return _0x597d17['mPFgm'](_0x1dbe66, _0x5772bd, _0x5f22d3);
                    },
                    'MTkrr': _0x597d17['Xhxrb']
                };
                _0x5af33d['each']([
                    null,
                    undefined
                ], function (_0xff8ad4) {
                    _0xf6034a['deepStrictEqual'](_0x28916b['jVAAB'](_0x4045fd, _0xff8ad4, _0x28916b['MTkrr']), {});
                });
            });
            continue;
        case '3':
            _0x806ee['nsuwP'](it, _0x806ee['YIDdD'], function () {
                var _0x40eef9 = {
                        'a.b': 0x1,
                        'a': { 'b': 0x2 }
                    }, _0x41868c = _0x597d17['BBKRk'](_0x4045fd, _0x40eef9, [[_0x597d17['sGsbx']]]);
                _0xf6034a['deepStrictEqual'](_0x41868c, { 'a.b': 0x1 });
            });
            continue;
        case '4':
            _0x806ee['npCGe'](it, _0x806ee['tbSpv'], function () {
                _0xf6034a['deepStrictEqual'](_0x597d17['mPFgm'](_0x4045fd, {
                    '0': 'a',
                    '1': 'b'
                }, 0x0), { '0': 'a' });
            });
            continue;
        case '5':
            _0x806ee['npCGe'](it, _0x806ee['HhcHW'], function () {
                _0xf6034a['deepStrictEqual'](_0x597d17['mPFgm'](_0x4045fd, _0x429d51, _0x245f35), {
                    'a': 0x1,
                    'c': 0x3
                });
            });
            continue;
        case '6':
            var _0x245f35 = _0x806ee['zJlIV'](toArgs, [
                    'a',
                    'c'
                ]), _0x429d51 = {
                    'a': 0x1,
                    'b': 0x2,
                    'c': 0x3,
                    'd': 0x4
                }, _0x41abb6 = {
                    'a': 0x1,
                    'b': {
                        'c': 0x2,
                        'd': 0x3
                    }
                };
            continue;
        case '7':
            var _0x597d17 = {
                'foxlD': function (_0x3a9de5, _0x5d363b, _0x1986a4, _0xfc0cee) {
                    return _0x806ee['yBpsx'](_0x3a9de5, _0x5d363b, _0x1986a4, _0xfc0cee);
                },
                'guIQo': function (_0x4dfc21, _0x2fefed, _0x32aa8f, _0x222067) {
                    return _0x806ee['XYwmK'](_0x4dfc21, _0x2fefed, _0x32aa8f, _0x222067);
                },
                'BBKRk': function (_0x51a3c1, _0x4f9fc5, _0x5859ea) {
                    return _0x806ee['npCGe'](_0x51a3c1, _0x4f9fc5, _0x5859ea);
                },
                'QLHMP': _0x806ee['mwDYg'],
                'sGsbx': _0x806ee['OdCiv'],
                'mPFgm': function (_0x3ab6a5, _0x923efd, _0x2cd65f) {
                    return _0x806ee['npCGe'](_0x3ab6a5, _0x923efd, _0x2cd65f);
                },
                'Xhxrb': _0x806ee['CCUOW'],
                'GOYIH': _0x806ee['Ucxaz']
            };
            continue;
        case '8':
            _0x806ee['Lluet'](it, _0x806ee['mNwVA'], function () {
                _0xf6034a['deepStrictEqual'](_0x597d17['foxlD'](_0x4045fd, _0x429d51, 'a', 'c'), {
                    'a': 0x1,
                    'c': 0x3
                }), _0xf6034a['deepStrictEqual'](_0x597d17['guIQo'](_0x4045fd, _0x429d51, [
                    'a',
                    'd'
                ], 'c'), {
                    'a': 0x1,
                    'c': 0x3,
                    'd': 0x4
                });
            });
            continue;
        case '9':
            _0x806ee['snvNJ'](it, _0x806ee['qdNdN'], function () {
                _0xf6034a['deepStrictEqual'](_0x597d17['BBKRk'](_0x4045fd, _0x41abb6, _0x597d17['QLHMP']), { 'b': { 'c': 0x2 } });
            });
            continue;
        }
        break;
    }
});
