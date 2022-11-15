'use strict';
var _0x19bc = [
    'EbEek',
    'uFhOB',
    'IYDlk',
    'NuJMj',
    'LGbbG',
    'should\x20not\x20retry\x20on\x20rejection\x20if\x20nr\x20of\x20retries\x20is\x200',
    'LJGQN',
    'ZYetf',
    'CeYXc',
    'Rgcbw',
    'tAszq',
    'NrwcV',
    'UvJMq',
    'DtHis',
    'Qhpmt',
    'should\x20pass\x20options\x20to\x20the\x20underlying\x20retry\x20module',
    'dxkmZ',
    'PFDWb',
    'ckjad',
    'JcNYV',
    'IPwvr',
    '28797XFmlkl',
    '707Zlussh',
    '313RDvIIS',
    '523459jlUMXg',
    '30035lGexLi',
    '1822ZNHiDY',
    '37NgCFVu',
    '54053jjicNH',
    '26329zfmmaf',
    'expect.js',
    'sleep-promise',
    'promise-retry',
    '10|12|8|9|6|11|2|13|4|5|7|3|0|1',
    'should\x20work\x20with\x20several\x20retries\x20in\x20the\x20same\x20chain',
    'should\x20allow\x20options\x20to\x20be\x20passed\x20first',
    'should\x20reject\x20the\x20promise\x20if\x20the\x20retries\x20were\x20exceeded',
    'should\x20retry\x20if\x20retry()\x20was\x20called\x20with\x20undefined',
    'should\x20convert\x20direct\x20rejections\x20into\x20promises',
    'should\x20not\x20retry\x20on\x20rejection\x20if\x20retry\x20was\x20not\x20called',
    'should\x20not\x20crash\x20on\x20undefined\x20rejections',
    'should\x20not\x20fail',
    'final',
    'foo',
    'should\x20not\x20succeed',
    'should\x20call\x20fn\x20again\x20if\x20retry\x20was\x20called',
    'rBqpl',
    'qHpfp',
    'WuVwP',
    'BRLqA',
    'ZDDcb',
    'then',
    'catch',
    'MiRwu',
    'message',
    'wdhaH',
    'VWnGV',
    'TsdAe',
    'xZoQt',
    'uWpjh',
    'VbBGe',
    'EBswL',
    'SAdIx',
    'QQnSR',
    'YwbYn',
    'zqeto',
    'MrlJG',
    'jBVkn',
    'OuCbW',
    'ubLnP',
    'FkovS',
    'hUOgz',
    'MyrVV',
    'WUvto',
    'XesxT',
    'YLDNP',
    'sTrTS',
    'XhPWK',
    'tarXS',
    'KaGkr',
    'nvGHj',
    'ACpxj',
    'EpWEN',
    'BoyMa',
    'ENGva',
    'ayqsJ',
    'caTfX',
    'YsWMK',
    'jJosD',
    'sTPiE',
    'TlQru',
    'JBqJT',
    'twqVx',
    'lgMgv',
    'kkkmK',
    'mxJqh',
    'EZzra',
    'hbRgp',
    'xGQcb',
    'equal',
    'idsCo',
    'yBYnA',
    'aAqSa',
    'should\x20not\x20retry\x20on\x20fulfillment\x20if\x20retry\x20was\x20not\x20called',
    'OInsx',
    'mAZpd',
    'YJyOd',
    'tDIBn',
    'QdLYm',
    'dTjYG',
    'BFBcO',
    'nZLZS'
];
var _0xbe43b = _0x4c94;
(function (_0x172f55, _0xae40e6) {
    var _0x54447f = _0x4c94;
    while (!![]) {
        try {
            var _0x47f683 = parseInt(_0x54447f(0xe3)) + parseInt(_0x54447f(0xe4)) * -parseInt(_0x54447f(0xe5)) + parseInt(_0x54447f(0xe6)) + -parseInt(_0x54447f(0xe7)) + parseInt(_0x54447f(0xe8)) * -parseInt(_0x54447f(0xe9)) + parseInt(_0x54447f(0xea)) + parseInt(_0x54447f(0xeb));
            if (_0x47f683 === _0xae40e6)
                break;
            else
                _0x172f55['push'](_0x172f55['shift']());
        } catch (_0x5731ce) {
            _0x172f55['push'](_0x172f55['shift']());
        }
    }
}(_0x19bc, -0x2 * -0x249ff + -0x719df + 0x7500b));
function _0x4c94(_0x339857, _0x97533f) {
    return _0x4c94 = function (_0x15a3aa, _0x2db803) {
        _0x15a3aa = _0x15a3aa - (0x1dad + 0x9e * 0x3 + -0x7a9 * 0x4);
        var _0x2484d6 = _0x19bc[_0x15a3aa];
        return _0x2484d6;
    }, _0x4c94(_0x339857, _0x97533f);
}
var expect = require(_0xbe43b(0xec)), promiseRetry = require('../'), promiseDelay = require(_0xbe43b(0xed));
describe(_0xbe43b(0xee), function () {
    var _0x1b7e0d = _0xbe43b, _0x4be075 = {
            'rBqpl': _0x1b7e0d(0xef),
            'qHpfp': _0x1b7e0d(0xf0),
            'OYICf': function (_0x5f59c8, _0x51e9c1, _0x286b80) {
                return _0x5f59c8(_0x51e9c1, _0x286b80);
            },
            'TsdAe': _0x1b7e0d(0xf1),
            'zqeto': _0x1b7e0d(0xf2),
            'hUOgz': function (_0x81dd08, _0x360419, _0x583d09) {
                return _0x81dd08(_0x360419, _0x583d09);
            },
            'mvpgA': _0x1b7e0d(0xf3),
            'nvGHj': 'should\x20convert\x20direct\x20fulfillments\x20into\x20promises',
            'EpWEN': _0x1b7e0d(0xf4),
            'ENGva': function (_0x268ec5, _0x175ef9, _0x61432) {
                return _0x268ec5(_0x175ef9, _0x61432);
            },
            'yAqGc': _0x1b7e0d(0xf5),
            'sTPiE': _0x1b7e0d(0xf6),
            'lgMgv': function (_0x4a7d92, _0x1c8f2d, _0x346483) {
                return _0x4a7d92(_0x1c8f2d, _0x346483);
            },
            'kkkmK': 'should\x20call\x20fn\x20with\x20the\x20attempt\x20number',
            'ERrYV': _0x1b7e0d(0xf7),
            'ZKhBf': function (_0x4b3407, _0xeda4c8, _0x8314ac) {
                return _0x4b3407(_0xeda4c8, _0x8314ac);
            },
            'tDIBn': function (_0xc2051d, _0x519018) {
                return _0xc2051d(_0x519018);
            },
            'QdLYm': _0x1b7e0d(0xf8),
            'dTjYG': _0x1b7e0d(0xf9),
            'BFBcO': _0x1b7e0d(0xfa),
            'nZLZS': function (_0x1bfaa2, _0x45530d) {
                return _0x1bfaa2(_0x45530d);
            },
            'EbEek': function (_0x329fa4, _0x46bc40) {
                return _0x329fa4(_0x46bc40);
            },
            'uFhOB': function (_0x41936a) {
                return _0x41936a();
            },
            'IYDlk': function (_0x2a97a4, _0x4a43c9) {
                return _0x2a97a4(_0x4a43c9);
            },
            'NuJMj': function (_0x143506, _0x54c3d3) {
                return _0x143506(_0x54c3d3);
            },
            'LGbbG': function (_0xadc48a, _0x5da1a4) {
                return _0xadc48a(_0x5da1a4);
            },
            'Qhpmt': function (_0x2e31f1, _0x15377e, _0x5da978) {
                return _0x2e31f1(_0x15377e, _0x5da978);
            },
            'tAszq': _0x1b7e0d(0xfb)
        }, _0x4dd9c9 = _0x4be075[_0x1b7e0d(0xfc)]['split']('|'), _0x19f610 = 0x176d + 0x3e * 0x51 + -0x3 * 0xe59;
    while (!![]) {
        switch (_0x4dd9c9[_0x19f610++]) {
        case '0':
            it(_0x4be075[_0x1b7e0d(0xfd)], function () {
                var _0x59b0e3 = _0x1b7e0d, _0x4eed60 = {
                        'OTEsB': _0x59b0e3(0xf9),
                        'ZDDcb': function (_0x38f529, _0x4a6709) {
                            var _0x3903dd = _0x59b0e3;
                            return _0x31d156[_0x3903dd(0xfe)](_0x38f529, _0x4a6709);
                        }
                    }, _0x7ba722 = -0x6fa + 0x25ed + -0x1ef3;
                return _0x31d156[_0x59b0e3(0xff)](promiseRetry, function (_0x408d9c) {
                    var _0x448e32 = _0x59b0e3, _0x539273 = {
                            'MiRwu': function (_0x3584a3, _0x45b965) {
                                return _0x3584a3(_0x45b965);
                            },
                            'gKpdn': _0x4eed60['OTEsB']
                        };
                    return _0x7ba722 += 0x6be * -0x1 + 0x1c * 0x11 + 0x4e3, _0x4eed60[_0x448e32(0x100)](promiseDelay, 0x2225 * 0x1 + -0x1154 + -0x35b * 0x5)[_0x448e32(0x101)](function () {
                        _0x539273['MiRwu'](_0x408d9c, new Error(_0x539273['gKpdn']));
                    })[_0x448e32(0x102)](function (_0x279dbf) {
                        var _0x469ed0 = _0x448e32;
                        _0x539273[_0x469ed0(0x103)](_0x408d9c, _0x279dbf);
                    });
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })['then'](function () {
                    var _0x3edd48 = _0x59b0e3;
                    throw new Error(_0x3edd48(0xfa));
                }, function (_0x47aeaf) {
                    var _0x1b1e6c = _0x59b0e3;
                    _0x31d156['hTToZ'](expect, _0x47aeaf[_0x1b1e6c(0x104)])['to']['be'](_0x31d156[_0x1b1e6c(0x105)]), _0x31d156[_0x1b1e6c(0x106)](expect, _0x7ba722)['to']['be'](0x1 * 0x1741 + -0x1 * -0x1d31 + 0x3470 * -0x1);
                });
            });
            continue;
        case '1':
            _0x4be075['OYICf'](it, _0x4be075[_0x1b7e0d(0x107)], function () {
                var _0x2ce046 = _0x1b7e0d, _0x1fb44f = {
                        'xZoQt': function (_0xa8cff9, _0x4d59e3) {
                            return _0x31d156['WuVwP'](_0xa8cff9, _0x4d59e3);
                        },
                        'uWpjh': 'foo',
                        'VbBGe': _0x2ce046(0xf8),
                        'EBswL': function (_0x577013, _0x4372f3) {
                            var _0x12030e = _0x2ce046;
                            return _0x31d156[_0x12030e(0xfe)](_0x577013, _0x4372f3);
                        }
                    }, _0x40e425 = 0x2 * -0x1054 + 0x45d * 0x1 + -0x1c4b * -0x1;
                return _0x31d156[_0x2ce046(0xff)](promiseRetry, { 'factor': 0x1 }, function (_0x3030ab) {
                    var _0x4f23b2 = _0x2ce046, _0x239613 = {
                            'SAdIx': function (_0x47d497, _0x129b9f) {
                                var _0x1dd80c = _0x4c94;
                                return _0x1fb44f[_0x1dd80c(0x108)](_0x47d497, _0x129b9f);
                            },
                            'QQnSR': _0x1fb44f[_0x4f23b2(0x109)],
                            'YwbYn': _0x1fb44f[_0x4f23b2(0x10a)]
                        };
                    return _0x40e425 += 0x395 + -0x2196 + -0x17 * -0x14e, _0x1fb44f[_0x4f23b2(0x10b)](promiseDelay, 0xdaf * -0x2 + 0x66c + 0x14fc)['then'](function () {
                        var _0x305cde = _0x4f23b2;
                        return _0x40e425 <= 0x33 * -0x16 + 0xe67 + -0xa03 && _0x239613[_0x305cde(0x10c)](_0x3030ab, new Error(_0x239613[_0x305cde(0x10d)])), _0x239613[_0x305cde(0x10e)];
                    });
                })[_0x2ce046(0x101)](function (_0x16c558) {
                    var _0x572e07 = _0x2ce046;
                    _0x1fb44f[_0x572e07(0x10b)](expect, _0x16c558)['to']['be']('final'), _0x1fb44f['EBswL'](expect, _0x40e425)['to']['be'](-0x6e3 * 0x1 + -0x1be2 * -0x1 + -0x14fc);
                }, function () {
                    var _0x5a0efd = _0x2ce046;
                    throw new Error(_0x5a0efd(0xf7));
                });
            });
            continue;
        case '2':
            _0x4be075['OYICf'](it, _0x4be075[_0x1b7e0d(0x10f)], function () {
                var _0x5707ea = _0x1b7e0d, _0x3a45db = {
                        'mzOJc': _0x31d156[_0x5707ea(0x105)],
                        'OuCbW': function (_0x236e46, _0x5afb7e) {
                            var _0xf91b4 = _0x5707ea;
                            return _0x31d156[_0xf91b4(0x110)](_0x236e46, _0x5afb7e);
                        },
                        'ubLnP': function (_0x5b37ba, _0x3a7fb1) {
                            return _0x31d156['rZqTK'](_0x5b37ba, _0x3a7fb1);
                        },
                        'FkovS': function (_0x800e89, _0x1a60a3) {
                            var _0x7b8e7f = _0x5707ea;
                            return _0x31d156[_0x7b8e7f(0x111)](_0x800e89, _0x1a60a3);
                        }
                    }, _0x32e95f = 0x8b * 0x1f + -0x7 * -0x27c + 0x2239 * -0x1;
                return promiseRetry(function (_0x16ec4f) {
                    var _0x3cc89f = _0x5707ea;
                    return _0x32e95f += -0x7f5 + 0x210 * -0x8 + 0x1 * 0x1876, _0x3a45db[_0x3cc89f(0x112)](promiseDelay, 0xf3f + 0x1 * -0x1704 + 0x7cf)['then'](function () {
                        throw new Error(_0x3a45db['mzOJc']);
                    })[_0x3cc89f(0x102)](_0x16ec4f);
                }, {
                    'retries': 0x2,
                    'factor': 0x1
                })[_0x5707ea(0x101)](function () {
                    throw new Error(_0x31d156['JBqJT']);
                }, function (_0x17c15f) {
                    var _0x54e3bc = _0x5707ea;
                    _0x3a45db[_0x54e3bc(0x113)](expect, _0x17c15f['message'])['to']['be'](_0x3a45db['mzOJc']), _0x3a45db[_0x54e3bc(0x114)](expect, _0x32e95f)['to']['be'](0x12a3 * 0x1 + -0x1d11 * -0x1 + -0x2fb1);
                });
            });
            continue;
        case '3':
            _0x4be075[_0x1b7e0d(0x115)](it, _0x4be075['mvpgA'], function () {
                var _0x349e48 = _0x1b7e0d, _0x8b6159 = {
                        'YLDNP': function (_0x56897, _0x1f7cda) {
                            var _0x485a64 = _0x4c94;
                            return _0x31d156[_0x485a64(0x116)](_0x56897, _0x1f7cda);
                        },
                        'sTrTS': function (_0x39f57e) {
                            return _0x31d156['TlQru'](_0x39f57e);
                        },
                        'XesxT': function (_0x21319d, _0x16e414) {
                            var _0x3bc153 = _0x4c94;
                            return _0x31d156[_0x3bc153(0x117)](_0x21319d, _0x16e414);
                        },
                        'KaGkr': _0x31d156['YJyOd']
                    }, _0xfb5347 = 0x1190 + -0x2538 + 0x13a8;
                return promiseRetry(function (_0x1cd329) {
                    var _0x149d90 = _0x4c94;
                    return _0xfb5347 += -0x69d * 0x5 + 0x1d * 0x2f + 0x1 * 0x1bbf, _0x8b6159[_0x149d90(0x118)](promiseDelay, -0x21a + -0x5 * -0x42d + -0x1 * 0x12bd)[_0x149d90(0x101)](function () {
                        var _0x2dd62b = _0x149d90;
                        return _0x8b6159[_0x2dd62b(0x119)](_0xfb5347, 0x2138 + -0x26a3 + -0x1cf * -0x3) && _0x8b6159[_0x2dd62b(0x11a)](_0x1cd329), _0x2dd62b(0xf8);
                    });
                }, { 'factor': 0x1 })[_0x349e48(0x101)](function (_0x33db6a) {
                    var _0x5c56ea = _0x349e48;
                    _0x31d156[_0x5c56ea(0x11b)](expect, _0x33db6a)['to']['be'](_0x31d156['mxJqh']), _0x31d156[_0x5c56ea(0x11c)](expect, _0xfb5347)['to']['be'](-0x1 * -0x109 + -0x9 * -0x139 + -0xc07);
                }, function () {
                    var _0x3157c1 = _0x349e48;
                    throw new Error(_0x8b6159[_0x3157c1(0x11d)]);
                });
            });
            continue;
        case '4':
            it(_0x4be075[_0x1b7e0d(0x11e)], function () {
                var _0x16a3d1 = _0x1b7e0d, _0x47857d = { 'ACpxj': _0x16a3d1(0xf8) };
                return _0x31d156['LJGQN'](promiseRetry, function () {
                    var _0x376ed1 = _0x16a3d1;
                    return _0x47857d[_0x376ed1(0x11f)];
                }, { 'factor': 0x1 })[_0x16a3d1(0x101)](function (_0x92c63a) {
                    var _0x135c6e = _0x16a3d1;
                    expect(_0x92c63a)['to']['be'](_0x135c6e(0xf8));
                }, function () {
                    var _0x172904 = _0x16a3d1;
                    throw new Error(_0x172904(0xf7));
                });
            });
            continue;
        case '5':
            it(_0x4be075[_0x1b7e0d(0x120)], function () {
                var _0x491605 = _0x1b7e0d, _0x4dfe37 = {
                        'QiYLE': _0x31d156[_0x491605(0x105)],
                        'SExyd': function (_0x4283d2, _0x577101) {
                            var _0x376970 = _0x491605;
                            return _0x31d156[_0x376970(0x121)](_0x4283d2, _0x577101);
                        }
                    };
                _0x31d156[_0x491605(0xff)](promiseRetry, function () {
                    throw new Error(_0x4dfe37['QiYLE']);
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })[_0x491605(0x101)](function () {
                    throw new Error(_0x31d156['JBqJT']);
                }, function (_0x492773) {
                    var _0x3ad89b = _0x491605;
                    _0x4dfe37['SExyd'](expect, _0x492773[_0x3ad89b(0x104)])['to']['be']('foo');
                });
            });
            continue;
        case '6':
            _0x4be075[_0x1b7e0d(0x122)](it, _0x4be075['yAqGc'], function () {
                var _0x59811f = _0x1b7e0d, _0x5486b9 = { 'icAEN': _0x59811f(0xfa) }, _0x2cf5cb = -0x21ce + 0x2fb * 0x6 + -0x1 * -0xfec;
                return _0x31d156[_0x59811f(0x123)](promiseRetry, function () {
                    var _0x12a973 = _0x59811f, _0x339c1d = { 'YsWMK': _0x31d156[_0x12a973(0x105)] };
                    return _0x2cf5cb += 0x1 * 0x16d2 + -0x23 * -0x16 + -0x19d3, _0x31d156[_0x12a973(0x124)](promiseDelay, 0xe52 + -0x11d1 * -0x1 + 0x1 * -0x2019)[_0x12a973(0x101)](function () {
                        var _0x432831 = _0x12a973;
                        throw new Error(_0x339c1d[_0x432831(0x125)]);
                    });
                })[_0x59811f(0x101)](function () {
                    throw new Error(_0x5486b9['icAEN']);
                }, function (_0x3034e4) {
                    var _0x4aaa50 = _0x59811f;
                    _0x31d156[_0x4aaa50(0x126)](expect, _0x3034e4[_0x4aaa50(0x104)])['to']['be'](_0x31d156[_0x4aaa50(0x105)]), _0x31d156[_0x4aaa50(0x126)](expect, _0x2cf5cb)['to']['be'](-0x8 * -0x26b + -0x39 + -0x2 * 0x98f);
                });
            });
            continue;
        case '7':
            _0x4be075[_0x1b7e0d(0x122)](it, _0x4be075[_0x1b7e0d(0x127)], function () {
                var _0x338ec9 = _0x1b7e0d, _0x442c11 = {
                        'twqVx': function (_0x84ef09, _0x742083) {
                            var _0x5271d6 = _0x4c94;
                            return _0x31d156[_0x5271d6(0x121)](_0x84ef09, _0x742083);
                        },
                        'XBdcW': function (_0x5f19ad) {
                            var _0x49d786 = _0x4c94;
                            return _0x31d156[_0x49d786(0x128)](_0x5f19ad);
                        }
                    };
                return promiseRetry(function () {
                    throw undefined;
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })['then'](function () {
                    var _0x4bd78d = _0x4c94;
                    throw new Error(_0x31d156[_0x4bd78d(0x129)]);
                }, function (_0x58816a) {
                    var _0xbe4590 = _0x4c94;
                    _0x442c11[_0xbe4590(0x12a)](expect, _0x58816a)['to']['be'](undefined);
                })['then'](function () {
                    return promiseRetry(function (_0x50f337) {
                        _0x442c11['XBdcW'](_0x50f337);
                    }, {
                        'retries': 0x1,
                        'factor': 0x1
                    });
                })[_0x338ec9(0x101)](function () {
                    throw new Error(_0x31d156['JBqJT']);
                }, function (_0x134aa2) {
                    _0x442c11['twqVx'](expect, _0x134aa2)['to']['be'](undefined);
                });
            });
            continue;
        case '8':
            _0x4be075[_0x1b7e0d(0x12b)](it, _0x4be075[_0x1b7e0d(0x12c)], function () {
                var _0x36d907 = _0x1b7e0d, _0x530f7c = {
                        'idsCo': function (_0x194e1e, _0x5b1e63) {
                            return _0x194e1e <= _0x5b1e63;
                        },
                        'yBYnA': _0x31d156[_0x36d907(0x12d)],
                        'xGQcb': function (_0x4d737a, _0x2d0aca) {
                            var _0x3fa1ea = _0x36d907;
                            return _0x31d156[_0x3fa1ea(0x12e)](_0x4d737a, _0x2d0aca);
                        }
                    }, _0x489552 = 0x2 * 0x898 + 0x649 + -0x1779;
                return _0x31d156[_0x36d907(0x12f)](promiseRetry, function (_0x3bd393, _0x14bb0f) {
                    var _0x415416 = _0x36d907;
                    return _0x489552 += 0x11ab + -0x884 + -0x926, _0x530f7c[_0x415416(0x130)](expect, _0x489552)['to'][_0x415416(0x131)](_0x14bb0f), _0x530f7c[_0x415416(0x130)](promiseDelay, -0x1c1 + -0x5 * 0x5ce + -0x1ed1 * -0x1)[_0x415416(0x101)](function () {
                        var _0x1f82f7 = _0x415416;
                        return _0x530f7c[_0x1f82f7(0x132)](_0x489552, 0x980 + -0x53f + 0x1 * -0x43f) && _0x3bd393(new Error(_0x1f82f7(0xf9))), _0x530f7c[_0x1f82f7(0x133)];
                    });
                }, { 'factor': 0x1 })[_0x36d907(0x101)](function (_0x28e376) {
                    var _0x3031bd = _0x36d907;
                    _0x31d156[_0x3031bd(0x134)](expect, _0x28e376)['to']['be'](_0x3031bd(0xf8)), _0x31d156[_0x3031bd(0x12e)](expect, _0x489552)['to']['be'](-0xf01 * -0x2 + 0x2a4 * -0x2 + -0x18b7);
                }, function () {
                    var _0x1f8b86 = _0x36d907;
                    throw new Error(_0x1f8b86(0xf7));
                });
            });
            continue;
        case '9':
            _0x4be075[_0x1b7e0d(0x12b)](it, _0x1b7e0d(0x135), function () {
                var _0x5daf09 = _0x1b7e0d, _0x27fab8 = {
                        'mAZpd': _0x31d156[_0x5daf09(0x12d)],
                        'OInsx': function (_0xd5b116, _0x32e415) {
                            var _0x16b747 = _0x5daf09;
                            return _0x31d156[_0x16b747(0x12e)](_0xd5b116, _0x32e415);
                        }
                    }, _0x3f8f92 = -0x10ce + 0xf19 * 0x2 + -0xd64 * 0x1;
                return _0x31d156['caTfX'](promiseRetry, function () {
                    var _0x3c6cd7 = _0x5daf09;
                    return _0x3f8f92 += -0x1f32 + -0x284 * 0xb + 0x3adf, _0x27fab8[_0x3c6cd7(0x136)](promiseDelay, -0x7c + -0x170b + -0x7db * -0x3)[_0x3c6cd7(0x101)](function () {
                        var _0x5e34d5 = _0x3c6cd7;
                        return _0x27fab8[_0x5e34d5(0x137)];
                    });
                })[_0x5daf09(0x101)](function (_0xb3d7db) {
                    expect(_0xb3d7db)['to']['be'](_0x31d156['mxJqh']), expect(_0x3f8f92)['to']['be'](0x23f0 + 0x1bff + -0x3fee);
                }, function () {
                    var _0x467b2a = _0x5daf09;
                    throw new Error(_0x31d156[_0x467b2a(0x138)]);
                });
            });
            continue;
        case '10':
            var _0x31d156 = {
                'aAqSa': function (_0x1cb0ab, _0x126c0a) {
                    return _0x1cb0ab(_0x126c0a);
                },
                'YJyOd': _0x4be075['ERrYV'],
                'MyrVV': function (_0x1d45ec, _0xbcf6f7) {
                    return _0x1d45ec <= _0xbcf6f7;
                },
                'NrwcV': function (_0x2431d2, _0x231abe, _0x5c82cc) {
                    return _0x4be075['ZKhBf'](_0x2431d2, _0x231abe, _0x5c82cc);
                },
                'EZzra': function (_0xc92940, _0xdf8062) {
                    var _0x4eb5fa = _0x1b7e0d;
                    return _0x4be075[_0x4eb5fa(0x139)](_0xc92940, _0xdf8062);
                },
                'mxJqh': _0x4be075[_0x1b7e0d(0x13a)],
                'hbRgp': function (_0x448c31, _0x4e6938, _0x2c7903) {
                    return _0x448c31(_0x4e6938, _0x2c7903);
                },
                'caTfX': function (_0x1be540, _0x16e6de) {
                    return _0x1be540(_0x16e6de);
                },
                'wdhaH': _0x4be075[_0x1b7e0d(0x13b)],
                'jJosD': function (_0x4fea79, _0x424df0) {
                    var _0x4109be = _0x1b7e0d;
                    return _0x4be075[_0x4109be(0x139)](_0x4fea79, _0x424df0);
                },
                'ayqsJ': function (_0xb2389, _0x5c13a5) {
                    var _0x1f8770 = _0x1b7e0d;
                    return _0x4be075[_0x1f8770(0x139)](_0xb2389, _0x5c13a5);
                },
                'Rgcbw': function (_0x30dcf9, _0x31b3bb) {
                    return _0x30dcf9(_0x31b3bb);
                },
                'JBqJT': _0x4be075[_0x1b7e0d(0x13c)],
                'LJGQN': function (_0x25cb5c, _0x44b838, _0x421394) {
                    return _0x25cb5c(_0x44b838, _0x421394);
                },
                'MrlJG': function (_0x4a1ca8, _0x8cad38) {
                    var _0x56f620 = _0x1b7e0d;
                    return _0x4be075[_0x56f620(0x13d)](_0x4a1ca8, _0x8cad38);
                },
                'rZqTK': function (_0x2ea903, _0x31fafc) {
                    var _0x40c89b = _0x1b7e0d;
                    return _0x4be075[_0x40c89b(0x13d)](_0x2ea903, _0x31fafc);
                },
                'jBVkn': function (_0x454e95, _0x587439) {
                    var _0x1fef4e = _0x1b7e0d;
                    return _0x4be075[_0x1fef4e(0x13e)](_0x454e95, _0x587439);
                },
                'BoyMa': function (_0x3a1345, _0x1dae02) {
                    return _0x3a1345(_0x1dae02);
                },
                'BRLqA': function (_0x442f53, _0x4bd997, _0x243d40) {
                    return _0x442f53(_0x4bd997, _0x243d40);
                },
                'TlQru': function (_0x3aa277) {
                    var _0x441245 = _0x1b7e0d;
                    return _0x4be075[_0x441245(0x13f)](_0x3aa277);
                },
                'XhPWK': function (_0x39ed0f, _0x15a03c) {
                    return _0x39ed0f(_0x15a03c);
                },
                'tarXS': function (_0x424196, _0x462716) {
                    var _0x4ce614 = _0x1b7e0d;
                    return _0x4be075[_0x4ce614(0x140)](_0x424196, _0x462716);
                },
                'WUvto': function (_0x4bd987, _0x5da867) {
                    return _0x4bd987(_0x5da867);
                },
                'hTToZ': function (_0x5f41c5, _0x4fc7e4) {
                    var _0x3567c1 = _0x1b7e0d;
                    return _0x4be075[_0x3567c1(0x141)](_0x5f41c5, _0x4fc7e4);
                },
                'VWnGV': function (_0x1857da, _0x244de4) {
                    return _0x4be075['NuJMj'](_0x1857da, _0x244de4);
                },
                'WuVwP': function (_0x10fac4, _0x5b2f97) {
                    var _0x650b04 = _0x1b7e0d;
                    return _0x4be075[_0x650b04(0x142)](_0x10fac4, _0x5b2f97);
                }
            };
            continue;
        case '11':
            _0x4be075['Qhpmt'](it, _0x1b7e0d(0x143), function () {
                var _0x2bb5e6 = _0x1b7e0d, _0x4a4f5d = {
                        'ZYetf': _0x31d156['wdhaH'],
                        'CeYXc': _0x31d156[_0x2bb5e6(0x129)]
                    }, _0x363311 = -0x4 * 0x585 + 0x1 * 0x12f5 + -0x31f * -0x1;
                return _0x31d156[_0x2bb5e6(0x144)](promiseRetry, function (_0x488606) {
                    var _0x4f47df = _0x2bb5e6;
                    return _0x363311 += -0x11 * -0x229 + -0x1 * 0x529 + -0x1f8f, promiseDelay(0x1cde + 0x13a9 + 0x1 * -0x307d)[_0x4f47df(0x101)](function () {
                        var _0x229388 = _0x4f47df;
                        throw new Error(_0x4a4f5d[_0x229388(0x145)]);
                    })[_0x4f47df(0x102)](_0x488606);
                }, { 'retries': 0x0 })[_0x2bb5e6(0x101)](function () {
                    var _0x58e5a3 = _0x2bb5e6;
                    throw new Error(_0x4a4f5d[_0x58e5a3(0x146)]);
                }, function (_0x1381b1) {
                    var _0x182de4 = _0x2bb5e6;
                    _0x31d156['Rgcbw'](expect, _0x1381b1[_0x182de4(0x104)])['to']['be'](_0x31d156[_0x182de4(0x105)]), _0x31d156[_0x182de4(0x147)](expect, _0x363311)['to']['be'](0x1c98 + 0x25 * -0x47 + -0x1254);
                });
            });
            continue;
        case '12':
            it(_0x4be075[_0x1b7e0d(0x148)], function () {
                var _0x2c28ff = _0x1b7e0d, _0x207b76 = {
                        'UvJMq': function (_0x4457fe, _0x2e501a) {
                            var _0x4d47e9 = _0x4c94;
                            return _0x31d156[_0x4d47e9(0x116)](_0x4457fe, _0x2e501a);
                        },
                        'DtHis': function (_0x25a52a, _0x226bf8) {
                            return _0x25a52a(_0x226bf8);
                        }
                    }, _0x21ab6e = 0x25 * -0x3b + 0x3de + -0x1 * -0x4a9;
                return _0x31d156[_0x2c28ff(0x149)](promiseRetry, function (_0x4d0d9d) {
                    var _0x537dd5 = _0x2c28ff;
                    return _0x21ab6e += -0x1562 * -0x1 + 0x2 * 0x4e7 + 0x1 * -0x1f2f, _0x31d156[_0x537dd5(0x134)](promiseDelay, 0xaba + 0x16c9 + -0x2179)[_0x537dd5(0x101)](function () {
                        var _0x3670b3 = _0x537dd5;
                        return _0x207b76[_0x3670b3(0x14a)](_0x21ab6e, 0x1910 + 0x31 * 0x95 + -0x3593) && _0x4d0d9d(new Error(_0x3670b3(0xf9))), 'final';
                    });
                }, { 'factor': 0x1 })[_0x2c28ff(0x101)](function (_0x5c31c4) {
                    var _0x32e183 = _0x2c28ff;
                    expect(_0x5c31c4)['to']['be'](_0x32e183(0xf8)), _0x207b76[_0x32e183(0x14b)](expect, _0x21ab6e)['to']['be'](0x54b + 0xb * 0x25 + -0x6df * 0x1);
                }, function () {
                    throw new Error(_0x31d156['YJyOd']);
                });
            });
            continue;
        case '13':
            _0x4be075[_0x1b7e0d(0x14c)](it, _0x1b7e0d(0x14d), function () {
                var _0x45dc28 = {
                        'dxkmZ': function (_0x44b13e, _0x372260) {
                            return _0x44b13e < _0x372260;
                        },
                        'PFDWb': _0x31d156['wdhaH'],
                        'IPwvr': function (_0x14b9fc, _0x6dca11) {
                            var _0x2ba125 = _0x4c94;
                            return _0x31d156[_0x2ba125(0x111)](_0x14b9fc, _0x6dca11);
                        }
                    }, _0x394764 = 0x18c0 + -0x204c + -0x45 * -0x1c;
                return promiseRetry(function (_0x4ef76f) {
                    var _0x5a8778 = _0x4c94, _0x12dd93 = {
                            'RrOTu': function (_0x14c9e1, _0x3887db) {
                                var _0x3cecdd = _0x4c94;
                                return _0x45dc28[_0x3cecdd(0x14e)](_0x14c9e1, _0x3887db);
                            },
                            'ckjad': function (_0x59f149, _0x6ca09e) {
                                return _0x59f149(_0x6ca09e);
                            },
                            'tacDC': _0x45dc28[_0x5a8778(0x14f)],
                            'JcNYV': _0x5a8778(0xf8)
                        };
                    return promiseDelay(0x1b9d * -0x1 + 0x12a7 + -0x6 * -0x180)[_0x5a8778(0x101)](function () {
                        var _0x30c920 = _0x5a8778;
                        return _0x12dd93['RrOTu'](_0x394764, -0x1226 + -0x293 + 0x1 * 0x14bb) && (_0x394764 += 0x1 * -0x1a8a + -0x2f6 * -0xb + -0x607, _0x12dd93[_0x30c920(0x150)](_0x4ef76f, new Error(_0x12dd93['tacDC']))), _0x12dd93[_0x30c920(0x151)];
                    });
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })['then'](function () {
                    var _0x295284 = _0x4c94;
                    throw new Error(_0x295284(0xfa));
                }, function (_0x5617cf) {
                    var _0x4f3746 = _0x4c94;
                    _0x45dc28[_0x4f3746(0x152)](expect, _0x5617cf[_0x4f3746(0x104)])['to']['be'](_0x45dc28[_0x4f3746(0x14f)]);
                });
            });
            continue;
        }
        break;
    }
});
