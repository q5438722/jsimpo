import _0x3e7cc3 from 'assert';
import _0x523857 from 'lodash';
import {
    set,
    falsey,
    stubFalse,
    args,
    slice,
    symbol,
    weakSet,
    realm
} from './utils.js';
import _0x3feef2 from '../isSet.js';
describe('isSet', function () {
    var _0x368548 = {
            'DAPkm': '3|4|1|0|2',
            'rvOIV': function (_0x2f0b25, _0x457665, _0x10a225) {
                return _0x2f0b25(_0x457665, _0x10a225);
            },
            'bZMPN': 'should\x20work\x20for\x20objects\x20with\x20a\x20non-function\x20`constructor`\x20(test\x20in\x20IE\x2011)',
            'GFSxN': function (_0x27dc0e, _0x19e326, _0x53550b) {
                return _0x27dc0e(_0x19e326, _0x53550b);
            },
            'XardL': 'should\x20return\x20`false`\x20for\x20non-sets',
            'MJqUZ': function (_0x5373ce, _0x50d503, _0x2da715) {
                return _0x5373ce(_0x50d503, _0x2da715);
            },
            'xScPS': 'should\x20work\x20with\x20weak\x20sets\x20from\x20another\x20realm',
            'NmmmM': function (_0x47aad6, _0x58d0b6) {
                return _0x47aad6(_0x58d0b6);
            },
            'NOTWq': '15|0|1|12|7|5|13|14|9|10|2|16|11|4|6|3|8',
            'GrXme': function (_0x133331, _0x4a9321) {
                return _0x133331(_0x4a9321);
            },
            'rBkhK': function (_0x2ef315, _0x468506) {
                return _0x2ef315(_0x468506);
            },
            'qsuxc': function (_0x1ad24a, _0x228218) {
                return _0x1ad24a(_0x228218);
            },
            'xCMXa': function (_0x31f039) {
                return _0x31f039();
            },
            'hvvZO': function (_0x4c177c, _0x433274) {
                return _0x4c177c(_0x433274);
            },
            'zXuoU': function (_0x5e80e0, _0x198376) {
                return _0x5e80e0(_0x198376);
            },
            'BgDSm': function (_0x1e4ea0, _0x15c0fa, _0x9531cd) {
                return _0x1e4ea0(_0x15c0fa, _0x9531cd);
            },
            'msHti': 'should\x20return\x20`true`\x20for\x20sets'
        }, _0x5449b6 = _0x368548['DAPkm']['split']('|'), _0x49c994 = 0x0;
    while (!![]) {
        switch (_0x5449b6[_0x49c994++]) {
        case '0':
            _0x368548['rvOIV'](it, _0x368548['bZMPN'], function () {
                var _0x58c3c1 = [
                        ![],
                        !![]
                    ], _0x1bfaaf = _0x523857['map'](_0x58c3c1, stubFalse), _0x4f191c = _0x523857['map'](_0x58c3c1, function (_0x41b591) {
                        return _0x3dfdd2['cEkPy'](_0x3feef2, { 'constructor': _0x41b591 });
                    });
                _0x3e7cc3['deepStrictEqual'](_0x4f191c, _0x1bfaaf);
            });
            continue;
        case '1':
            _0x368548['GFSxN'](it, _0x368548['XardL'], function () {
                var _0x6bfbb1 = _0x3dfdd2['foFUz']['split']('|'), _0x109015 = 0x0;
                while (!![]) {
                    switch (_0x6bfbb1[_0x109015++]) {
                    case '0':
                        var _0x48252e = _0x523857['map'](falsey, stubFalse);
                        continue;
                    case '1':
                        var _0x46ff03 = _0x523857['map'](falsey, function (_0x54c274, _0x350ace) {
                            return _0x350ace ? _0x35df87['eRRid'](_0x3feef2, _0x54c274) : _0x35df87['nvEMN'](_0x3feef2);
                        });
                        continue;
                    case '2':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['xPkZA'](_0x3feef2, slice), ![]);
                        continue;
                    case '3':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['xPkZA'](_0x3feef2, symbol), ![]);
                        continue;
                    case '4':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['xPkZA'](_0x3feef2, /x/), ![]);
                        continue;
                    case '5':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['xPkZA'](_0x3feef2, [
                            0x1,
                            0x2,
                            0x3
                        ]), ![]);
                        continue;
                    case '6':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['LvXsI'](_0x3feef2, 'a'), ![]);
                        continue;
                    case '7':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['DbFnJ'](_0x3feef2, args), ![]);
                        continue;
                    case '8':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['DbFnJ'](_0x3feef2, weakSet), ![]);
                        continue;
                    case '9':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['GcTpf'](_0x3feef2, new Error()), ![]);
                        continue;
                    case '10':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['GcTpf'](_0x3feef2, _), ![]);
                        continue;
                    case '11':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['HLnLt'](_0x3feef2, 0x1), ![]);
                        continue;
                    case '12':
                        _0x3e7cc3['deepStrictEqual'](_0x46ff03, _0x48252e);
                        continue;
                    case '13':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['XVzRZ'](_0x3feef2, !![]), ![]);
                        continue;
                    case '14':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['JuQxJ'](_0x3feef2, new Date()), ![]);
                        continue;
                    case '15':
                        var _0x35df87 = {
                            'eRRid': function (_0x43ef05, _0x329b41) {
                                return _0x3dfdd2['zVCRS'](_0x43ef05, _0x329b41);
                            },
                            'nvEMN': function (_0x341ea5) {
                                return _0x3dfdd2['tvOvO'](_0x341ea5);
                            }
                        };
                        continue;
                    case '16':
                        _0x3e7cc3['strictEqual'](_0x3dfdd2['VxGxL'](_0x3feef2, { 'a': 0x1 }), ![]);
                        continue;
                    }
                    break;
                }
            });
            continue;
        case '2':
            _0x368548['MJqUZ'](it, _0x368548['xScPS'], function () {
                realm['set'] && _0x3e7cc3['strictEqual'](_0x3dfdd2['jblLm'](_0x3feef2, realm['set']), !![]);
            });
            continue;
        case '3':
            var _0x3dfdd2 = {
                'xPkZA': function (_0x259eae, _0x4fbfec) {
                    return _0x368548['NmmmM'](_0x259eae, _0x4fbfec);
                },
                'foFUz': _0x368548['NOTWq'],
                'LvXsI': function (_0x5b0095, _0x17dfd1) {
                    return _0x368548['GrXme'](_0x5b0095, _0x17dfd1);
                },
                'DbFnJ': function (_0xfb726f, _0xb94baa) {
                    return _0x368548['GrXme'](_0xfb726f, _0xb94baa);
                },
                'GcTpf': function (_0x2d9c0a, _0x149168) {
                    return _0x368548['GrXme'](_0x2d9c0a, _0x149168);
                },
                'HLnLt': function (_0x51709f, _0x3693e4) {
                    return _0x368548['rBkhK'](_0x51709f, _0x3693e4);
                },
                'XVzRZ': function (_0x3983f7, _0x495945) {
                    return _0x368548['rBkhK'](_0x3983f7, _0x495945);
                },
                'JuQxJ': function (_0x2802f8, _0x2d710d) {
                    return _0x368548['qsuxc'](_0x2802f8, _0x2d710d);
                },
                'zVCRS': function (_0x3a244f, _0x56123e) {
                    return _0x368548['qsuxc'](_0x3a244f, _0x56123e);
                },
                'tvOvO': function (_0x437ff8) {
                    return _0x368548['xCMXa'](_0x437ff8);
                },
                'VxGxL': function (_0x4b5213, _0x47424c) {
                    return _0x368548['qsuxc'](_0x4b5213, _0x47424c);
                },
                'cEkPy': function (_0x32ff7e, _0x1cfe9b) {
                    return _0x368548['hvvZO'](_0x32ff7e, _0x1cfe9b);
                },
                'jblLm': function (_0x574fc7, _0x2c21f6) {
                    return _0x368548['zXuoU'](_0x574fc7, _0x2c21f6);
                }
            };
            continue;
        case '4':
            _0x368548['BgDSm'](it, _0x368548['msHti'], function () {
                Set && _0x3e7cc3['strictEqual'](_0x3dfdd2['xPkZA'](_0x3feef2, set), !![]);
            });
            continue;
        }
        break;
    }
});
