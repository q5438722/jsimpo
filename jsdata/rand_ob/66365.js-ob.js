'use strict';
var _0x3388 = [
    'qZKSc',
    'SqdYX',
    '34860GXoiTV',
    '225803YUXIyl',
    '163733FMQUgU',
    '841571ViEjqf',
    '1OiVcOc',
    '438554FXZkTM',
    '1obCgrx',
    '43812KxleBA',
    '882343nUldXz',
    '../',
    'sleep-promise',
    'promise-retry',
    '10|4|11|1|3|12|5|13|7|9|8|0|6|2',
    'should\x20retry\x20if\x20retry()\x20was\x20called\x20with\x20undefined',
    'should\x20not\x20retry\x20on\x20fulfillment\x20if\x20retry\x20was\x20not\x20called',
    'should\x20allow\x20options\x20to\x20be\x20passed\x20first',
    'should\x20not\x20retry\x20on\x20rejection\x20if\x20retry\x20was\x20not\x20called',
    'should\x20call\x20fn\x20again\x20if\x20retry\x20was\x20called',
    'should\x20reject\x20the\x20promise\x20if\x20the\x20retries\x20were\x20exceeded',
    'should\x20convert\x20direct\x20rejections\x20into\x20promises',
    'should\x20not\x20succeed',
    'should\x20call\x20fn\x20with\x20the\x20attempt\x20number',
    'GCHnm',
    'split',
    'MlViA',
    'final',
    'mVTQh',
    'Xscpw',
    'then',
    'gFQgk',
    'ryzrd',
    'OzuDT',
    'cSCvU',
    'NRhyO',
    'ZGHEP',
    'adyaL',
    'BRRYO',
    'rIYeG',
    'RarKg',
    'uyDPX',
    'BSGqk',
    'anvHV',
    'foo',
    'amjwj',
    'UXNvM',
    'hAgER',
    'lvFjS',
    'CjsQg',
    'message',
    'ibRSJ',
    'MrZko',
    'ypnis',
    'qEUdY',
    'GixJS',
    'DtHzZ',
    'dJMjE',
    'oGdBu',
    'cYcJm',
    'bacKD',
    'anGpT',
    'vdHWu',
    'LwsvE',
    'catch',
    'fUrJn',
    'should\x20work\x20with\x20several\x20retries\x20in\x20the\x20same\x20chain',
    'Qlfyt',
    'bFYqH',
    'muuKl',
    'JnQRD',
    'lixmY',
    'pADUg',
    'DYZlT',
    'IcSaQ',
    'should\x20convert\x20direct\x20fulfillments\x20into\x20promises',
    'UdfFV',
    'gants',
    'should\x20not\x20fail',
    'VomFl',
    'xnliK',
    'vEPxZ',
    'uwNFo',
    'ViZPv',
    'ICHZP',
    'kEZGp',
    'MCCsa',
    'uEKyC',
    'VMauP',
    'CrCnQ',
    'GBbyE',
    'uqxOc',
    'cWJwm',
    'BEdVk',
    'xrPhD',
    'KjkzY',
    'HnAKT',
    'suMny',
    'UjTcJ',
    'JraXG',
    'wIYiI',
    'tUPBw',
    'anPyK',
    'equal',
    'WPDSV',
    'YmPMS',
    'ySnWk',
    'XIbNW',
    'ILGcp',
    'should\x20not\x20retry\x20on\x20rejection\x20if\x20nr\x20of\x20retries\x20is\x200',
    'nCmNf',
    'PTUaa',
    'THFWf',
    'cAADE',
    'iaics',
    'RgIsW',
    'NHnlP',
    'wtptJ'
];
var _0x3507a5 = _0x4291;
function _0x4291(_0x57c20b, _0x5b7e11) {
    return _0x4291 = function (_0x1a5ea3, _0x3da4bd) {
        _0x1a5ea3 = _0x1a5ea3 - (0x43 * -0x52 + 0xc27 + 0x9e5);
        var _0x26ebde = _0x3388[_0x1a5ea3];
        return _0x26ebde;
    }, _0x4291(_0x57c20b, _0x5b7e11);
}
(function (_0x163a86, _0x2f84d7) {
    var _0x5bc1c0 = _0x4291;
    while (!![]) {
        try {
            var _0x156000 = -parseInt(_0x5bc1c0(0x96)) + parseInt(_0x5bc1c0(0x97)) + -parseInt(_0x5bc1c0(0x98)) + parseInt(_0x5bc1c0(0x99)) * parseInt(_0x5bc1c0(0x9a)) + -parseInt(_0x5bc1c0(0x9b)) * -parseInt(_0x5bc1c0(0x9c)) + parseInt(_0x5bc1c0(0x9d)) + -parseInt(_0x5bc1c0(0x9e));
            if (_0x156000 === _0x2f84d7)
                break;
            else
                _0x163a86['push'](_0x163a86['shift']());
        } catch (_0x45ead4) {
            _0x163a86['push'](_0x163a86['shift']());
        }
    }
}(_0x3388, 0xc589 * -0xd + 0x87dfc + -0x8b13d * -0x1));
var expect = require('expect.js'), promiseRetry = require(_0x3507a5(0x9f)), promiseDelay = require(_0x3507a5(0xa0));
describe(_0x3507a5(0xa1), function () {
    var _0x27ae56 = _0x3507a5, _0x8a908b = {
            'GCHnm': _0x27ae56(0xa2),
            'rZeyS': _0x27ae56(0xa3),
            'cSCvU': _0x27ae56(0xa4),
            'hAgER': function (_0x4ba5e9, _0xc17b27, _0x2caaf6) {
                return _0x4ba5e9(_0xc17b27, _0x2caaf6);
            },
            'rIYeG': _0x27ae56(0xa5),
            'UgIbx': _0x27ae56(0xa6),
            'ypnis': function (_0x53ed03, _0x4f43c3, _0x3aabad) {
                return _0x53ed03(_0x4f43c3, _0x3aabad);
            },
            'GNbun': _0x27ae56(0xa7),
            'cYcJm': function (_0x5a930c, _0x2b092e, _0x43b992) {
                return _0x5a930c(_0x2b092e, _0x43b992);
            },
            'bacKD': _0x27ae56(0xa8),
            'IcSaQ': function (_0x598b43, _0x1e9a05, _0x5a9a5b) {
                return _0x598b43(_0x1e9a05, _0x5a9a5b);
            },
            'VomFl': function (_0x41d160, _0x3b75f4, _0x3eb12d) {
                return _0x41d160(_0x3b75f4, _0x3eb12d);
            },
            'xnliK': 'should\x20not\x20crash\x20on\x20undefined\x20rejections',
            'CTehv': _0x27ae56(0xa9),
            'CrCnQ': 'final',
            'GBbyE': function (_0x2e3dfe, _0x338402) {
                return _0x2e3dfe <= _0x338402;
            },
            'uqxOc': 'foo',
            'cWJwm': function (_0x3f1ae6, _0x4f2438, _0x2c8890) {
                return _0x3f1ae6(_0x4f2438, _0x2c8890);
            },
            'BEdVk': function (_0x1befb4, _0x395091) {
                return _0x1befb4(_0x395091);
            },
            'xrPhD': function (_0x359694, _0x2902fd) {
                return _0x359694(_0x2902fd);
            },
            'jOfkg': function (_0x2dc3a5, _0x39ccbd) {
                return _0x2dc3a5(_0x39ccbd);
            },
            'ETCwV': function (_0x17b289, _0x10d354) {
                return _0x17b289(_0x10d354);
            },
            'KjkzY': function (_0x289b84, _0x30d1f1) {
                return _0x289b84(_0x30d1f1);
            },
            'HnAKT': _0x27ae56(0xaa),
            'suMny': function (_0x54e2a6, _0x57b4d0, _0x152174) {
                return _0x54e2a6(_0x57b4d0, _0x152174);
            },
            'UjTcJ': function (_0xccae64, _0x5936d3, _0xfe48ba) {
                return _0xccae64(_0x5936d3, _0xfe48ba);
            },
            'JraXG': function (_0xc572f6, _0x21e8f8, _0x2dfc22) {
                return _0xc572f6(_0x21e8f8, _0x2dfc22);
            },
            'wIYiI': function (_0x319617, _0x3bf7d6) {
                return _0x319617(_0x3bf7d6);
            },
            'tUPBw': _0x27ae56(0xab),
            'iaics': function (_0x5e1ac5, _0x50c268, _0x1df939) {
                return _0x5e1ac5(_0x50c268, _0x1df939);
            },
            'NOyCP': 'should\x20pass\x20options\x20to\x20the\x20underlying\x20retry\x20module'
        }, _0x4d34dd = _0x8a908b[_0x27ae56(0xac)][_0x27ae56(0xad)]('|'), _0x2d3cc0 = -0x134 * -0x2 + 0x1047 + -0x12af;
    while (!![]) {
        switch (_0x4d34dd[_0x2d3cc0++]) {
        case '0':
            it(_0x8a908b['rZeyS'], function () {
                var _0x13dc53 = _0x27ae56, _0x13f6fc = {
                        'Xscpw': function (_0x137c12) {
                            return _0x5555f1['vEPxZ'](_0x137c12);
                        },
                        'ryzrd': function (_0x27cdeb, _0x519e52) {
                            var _0x4b1240 = _0x4291;
                            return _0x5555f1[_0x4b1240(0xae)](_0x27cdeb, _0x519e52);
                        },
                        'OzuDT': _0x13dc53(0xaf)
                    }, _0x1ef0f6 = 0x7b1 + -0x21 * -0x61 + 0x16 * -0xeb;
                return _0x5555f1[_0x13dc53(0xb0)](promiseRetry, function (_0xc96a53) {
                    var _0x144df8 = _0x13dc53, _0x53205e = {
                            'gFQgk': function (_0x5df388) {
                                var _0xe32b7d = _0x4291;
                                return _0x13f6fc[_0xe32b7d(0xb1)](_0x5df388);
                            }
                        };
                    return _0x1ef0f6 += 0x1ea1 * -0x1 + -0x1406 + -0x32a8 * -0x1, promiseDelay(0x10bb * 0x1 + 0x23cd + -0x347e * 0x1)[_0x144df8(0xb2)](function () {
                        var _0xa764f9 = _0x144df8;
                        return _0x1ef0f6 <= 0x1 * 0x1afd + -0x14a7 + -0x654 && _0x53205e[_0xa764f9(0xb3)](_0xc96a53), 'final';
                    });
                }, { 'factor': 0x1 })[_0x13dc53(0xb2)](function (_0x3c98ab) {
                    var _0x360a13 = _0x13dc53;
                    _0x13f6fc[_0x360a13(0xb4)](expect, _0x3c98ab)['to']['be'](_0x13f6fc[_0x360a13(0xb5)]), _0x13f6fc[_0x360a13(0xb4)](expect, _0x1ef0f6)['to']['be'](-0x1 * -0xa84 + 0x1 * 0x21f9 + -0x2c7a);
                }, function () {
                    throw new Error('should\x20not\x20fail');
                });
            });
            continue;
        case '1':
            it(_0x8a908b[_0x27ae56(0xb6)], function () {
                var _0x39b52e = _0x27ae56, _0x506d61 = { 'BRRYO': _0x5555f1[_0x39b52e(0xb7)] }, _0x5915bf = 0x5b * 0x53 + -0x5b * -0x25 + 0x1c * -0x186;
                return promiseRetry(function () {
                    var _0x30f73b = _0x39b52e, _0x261234 = { 'adyaL': _0x30f73b(0xaf) };
                    return _0x5915bf += -0x2ab + 0x24c * -0xa + 0x19a4, _0x5555f1[_0x30f73b(0xb8)](promiseDelay, -0x20f1 + 0x2003 * 0x1 + 0x7c * 0x2)[_0x30f73b(0xb2)](function () {
                        var _0x16ba8f = _0x30f73b;
                        return _0x261234[_0x16ba8f(0xb9)];
                    });
                })['then'](function (_0x579029) {
                    var _0x209f74 = _0x39b52e;
                    expect(_0x579029)['to']['be'](_0x5555f1['RarKg']), _0x5555f1[_0x209f74(0xb8)](expect, _0x5915bf)['to']['be'](0x361 * 0x5 + -0x1 * 0x1eb2 + 0xdce);
                }, function () {
                    var _0x4b2ea3 = _0x39b52e;
                    throw new Error(_0x506d61[_0x4b2ea3(0xba)]);
                });
            });
            continue;
        case '2':
            _0x8a908b['hAgER'](it, _0x8a908b[_0x27ae56(0xbb)], function () {
                var _0x4cb863 = _0x27ae56, _0x207763 = {
                        'ThMht': _0x5555f1[_0x4cb863(0xbc)],
                        'BSGqk': function (_0x1730a2, _0x1068f0) {
                            return _0x1730a2(_0x1068f0);
                        },
                        'UXNvM': function (_0x27f21c, _0x4cb093) {
                            var _0x1bb98b = _0x4cb863;
                            return _0x5555f1[_0x1bb98b(0xbd)](_0x27f21c, _0x4cb093);
                        }
                    }, _0x1e606b = -0x22a0 + 0x1fd * -0xb + 0x3 * 0x12d5;
                return _0x5555f1['mVTQh'](promiseRetry, { 'factor': 0x1 }, function (_0x5942f0) {
                    var _0x36a4ed = _0x4cb863, _0x72ce0c = {
                            'anvHV': function (_0x1eb4f1, _0x1f07d6) {
                                return _0x1eb4f1 <= _0x1f07d6;
                            },
                            'amjwj': _0x207763['ThMht']
                        };
                    return _0x1e606b += 0x1d3e + 0x1afe + -0x1 * 0x383b, _0x207763[_0x36a4ed(0xbe)](promiseDelay, 0x917 + -0x2fb * 0xc + 0x1ab7)[_0x36a4ed(0xb2)](function () {
                        var _0x2b6c9d = _0x36a4ed;
                        return _0x72ce0c[_0x2b6c9d(0xbf)](_0x1e606b, -0xc2d * -0x1 + -0xad * 0x23 + 0xb7c) && _0x5942f0(new Error(_0x2b6c9d(0xc0))), _0x72ce0c[_0x2b6c9d(0xc1)];
                    });
                })[_0x4cb863(0xb2)](function (_0xaa7f4b) {
                    var _0x2c7bff = _0x4cb863;
                    _0x207763[_0x2c7bff(0xc2)](expect, _0xaa7f4b)['to']['be'](_0x207763['ThMht']), _0x207763[_0x2c7bff(0xc2)](expect, _0x1e606b)['to']['be'](-0x4a7 + -0x2131 * -0x1 + 0x6d * -0x43);
                }, function () {
                    var _0x500419 = _0x4cb863;
                    throw new Error(_0x5555f1[_0x500419(0xb7)]);
                });
            });
            continue;
        case '3':
            _0x8a908b[_0x27ae56(0xc3)](it, _0x8a908b['UgIbx'], function () {
                var _0x1d222d = _0x27ae56, _0x53f846 = { 'lvFjS': _0x1d222d(0xaa) }, _0x2ab8ee = -0x76f * -0x3 + 0x17a8 * -0x1 + 0x1 * 0x15b;
                return _0x5555f1['HydZJ'](promiseRetry, function () {
                    var _0x33cbcc = _0x1d222d;
                    return _0x2ab8ee += -0x219 + 0xd97 * -0x2 + 0x1d48, promiseDelay(0x1 * 0x505 + 0x650 * 0x2 + -0x1 * 0x119b)[_0x33cbcc(0xb2)](function () {
                        throw new Error('foo');
                    });
                })[_0x1d222d(0xb2)](function () {
                    var _0x2e69c3 = _0x1d222d;
                    throw new Error(_0x53f846[_0x2e69c3(0xc4)]);
                }, function (_0x223627) {
                    var _0x305123 = _0x1d222d;
                    _0x5555f1[_0x305123(0xc5)](expect, _0x223627[_0x305123(0xc6)])['to']['be'](_0x5555f1[_0x305123(0xc7)]), _0x5555f1[_0x305123(0xc8)](expect, _0x2ab8ee)['to']['be'](-0x3ed * -0x9 + 0x56d * 0x5 + -0x3e75);
                });
            });
            continue;
        case '4':
            _0x8a908b[_0x27ae56(0xc9)](it, _0x8a908b['GNbun'], function () {
                var _0x76fcbf = _0x27ae56, _0x20d260 = {
                        'DsDVw': function (_0xbcde60, _0x527651) {
                            var _0x130e44 = _0x4291;
                            return _0x5555f1[_0x130e44(0xca)](_0xbcde60, _0x527651);
                        },
                        'DtHzZ': function (_0x37af7b, _0x4f3bdf) {
                            return _0x37af7b(_0x4f3bdf);
                        },
                        'dJMjE': _0x5555f1[_0x76fcbf(0xc7)],
                        'oGdBu': _0x5555f1[_0x76fcbf(0xbc)]
                    }, _0x4cbd1f = 0x2704 + 0x937 + 0x303b * -0x1;
                return _0x5555f1[_0x76fcbf(0xcb)](promiseRetry, function (_0x45a2d8) {
                    var _0x531af6 = _0x76fcbf;
                    return _0x4cbd1f += -0x83 * -0x8 + 0x2 * 0x96c + 0x13 * -0x135, _0x20d260[_0x531af6(0xcc)](promiseDelay, 0x2280 + -0x2445 + -0x1 * -0x1cf)['then'](function () {
                        var _0x52e554 = _0x531af6;
                        return _0x20d260['DsDVw'](_0x4cbd1f, 0x1f34 + -0x3e3 * 0x1 + -0x1b4f * 0x1) && _0x20d260[_0x52e554(0xcc)](_0x45a2d8, new Error(_0x20d260[_0x52e554(0xcd)])), _0x20d260[_0x52e554(0xce)];
                    });
                }, { 'factor': 0x1 })['then'](function (_0x38bdcc) {
                    expect(_0x38bdcc)['to']['be'](_0x5555f1['RarKg']), expect(_0x4cbd1f)['to']['be'](-0x1f12 + -0x785 + -0x134d * -0x2);
                }, function () {
                    var _0x59d901 = _0x76fcbf;
                    throw new Error(_0x5555f1[_0x59d901(0xb7)]);
                });
            });
            continue;
        case '5':
            _0x8a908b[_0x27ae56(0xcf)](it, _0x8a908b[_0x27ae56(0xd0)], function () {
                var _0x5eb407 = _0x27ae56, _0x16bb03 = {
                        'LwsvE': _0x5555f1[_0x5eb407(0xc7)],
                        'fUrJn': _0x5555f1[_0x5eb407(0xd1)],
                        'JVgef': function (_0x3cccd1, _0x3aba5d) {
                            return _0x5555f1['nCmNf'](_0x3cccd1, _0x3aba5d);
                        }
                    }, _0x22021c = -0x1a70 * -0x1 + -0x17fb + 0x25 * -0x11;
                return _0x5555f1[_0x5eb407(0xd2)](promiseRetry, function (_0x2ed9cf) {
                    var _0x5dac2c = _0x5eb407;
                    return _0x22021c += 0x509 * -0x3 + -0x1b08 + 0x2a24, promiseDelay(0x16d * 0x1 + 0x1 * 0x108f + 0x1 * -0x11f2)[_0x5dac2c(0xb2)](function () {
                        var _0x49c802 = _0x5dac2c;
                        throw new Error(_0x16bb03[_0x49c802(0xd3)]);
                    })[_0x5dac2c(0xd4)](_0x2ed9cf);
                }, {
                    'retries': 0x2,
                    'factor': 0x1
                })[_0x5eb407(0xb2)](function () {
                    var _0x192ab1 = _0x5eb407;
                    throw new Error(_0x16bb03[_0x192ab1(0xd5)]);
                }, function (_0x35e739) {
                    var _0x23cee3 = _0x5eb407;
                    _0x16bb03['JVgef'](expect, _0x35e739['message'])['to']['be'](_0x16bb03[_0x23cee3(0xd3)]), expect(_0x22021c)['to']['be'](-0x1eff + -0x1d * 0xe9 + -0xb7b * -0x5);
                });
            });
            continue;
        case '6':
            _0x8a908b[_0x27ae56(0xcf)](it, _0x27ae56(0xd6), function () {
                var _0x249cd2 = _0x27ae56, _0xa38b10 = {
                        'bFYqH': function (_0x59b52b, _0x557836) {
                            return _0x59b52b(_0x557836);
                        },
                        'muuKl': _0x5555f1[_0x249cd2(0xc7)],
                        'JnQRD': function (_0x4ae745, _0x281504) {
                            var _0x1a9c4a = _0x249cd2;
                            return _0x5555f1[_0x1a9c4a(0xd7)](_0x4ae745, _0x281504);
                        },
                        'DYZlT': _0x5555f1[_0x249cd2(0xd1)]
                    }, _0x5b73d2 = 0x2349 + 0x1d * -0x119 + -0x374;
                return _0x5555f1['mVTQh'](promiseRetry, function (_0xfb3f2e) {
                    var _0x12b8e4 = _0x249cd2, _0x2c2c33 = {
                            'lixmY': function (_0x51b115, _0x5651e5) {
                                var _0x14a149 = _0x4291;
                                return _0xa38b10[_0x14a149(0xd8)](_0x51b115, _0x5651e5);
                            },
                            'pADUg': _0xa38b10[_0x12b8e4(0xd9)]
                        };
                    return _0x5b73d2 += -0xc46 + 0x977 * -0x4 + 0x3223, _0xa38b10[_0x12b8e4(0xda)](promiseDelay, 0x1e2c + -0xfe * -0xf + -0x2d04)[_0x12b8e4(0xb2)](function () {
                        var _0x381167 = _0x12b8e4;
                        _0x2c2c33[_0x381167(0xdb)](_0xfb3f2e, new Error(_0x2c2c33[_0x381167(0xdc)]));
                    })['catch'](function (_0x1e5a97) {
                        var _0x3320fe = _0x12b8e4;
                        _0xa38b10[_0x3320fe(0xd8)](_0xfb3f2e, _0x1e5a97);
                    });
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })[_0x249cd2(0xb2)](function () {
                    var _0x2f63f4 = _0x249cd2;
                    throw new Error(_0xa38b10[_0x2f63f4(0xdd)]);
                }, function (_0x359eca) {
                    var _0x5db241 = _0x249cd2;
                    expect(_0x359eca[_0x5db241(0xc6)])['to']['be'](_0xa38b10['muuKl']), _0xa38b10[_0x5db241(0xda)](expect, _0x5b73d2)['to']['be'](0x18f1 + -0x1ab1 + 0x1c2);
                });
            });
            continue;
        case '7':
            _0x8a908b[_0x27ae56(0xde)](it, _0x27ae56(0xdf), function () {
                var _0x4505af = _0x27ae56, _0x4cb25b = {
                        'jzeGe': function (_0x1c4341, _0x47d605) {
                            return _0x1c4341(_0x47d605);
                        },
                        'gants': _0x5555f1[_0x4505af(0xbc)]
                    };
                return _0x5555f1[_0x4505af(0xe0)](promiseRetry, function () {
                    return _0x5555f1['RarKg'];
                }, { 'factor': 0x1 })['then'](function (_0x2715b1) {
                    var _0x152d02 = _0x4505af;
                    _0x4cb25b['jzeGe'](expect, _0x2715b1)['to']['be'](_0x4cb25b[_0x152d02(0xe1)]);
                }, function () {
                    var _0x418ffd = _0x4505af;
                    throw new Error(_0x418ffd(0xe2));
                });
            });
            continue;
        case '8':
            _0x8a908b[_0x27ae56(0xe3)](it, _0x8a908b[_0x27ae56(0xe4)], function () {
                var _0x297df0 = _0x27ae56, _0x1f9c1f = {
                        'ViZPv': function (_0x4a7809, _0x481f4e) {
                            var _0x4c91cd = _0x4291;
                            return _0x5555f1[_0x4c91cd(0xae)](_0x4a7809, _0x481f4e);
                        },
                        'ICHZP': function (_0x65ffec) {
                            var _0x3e6079 = _0x4291;
                            return _0x5555f1[_0x3e6079(0xe5)](_0x65ffec);
                        },
                        'kEZGp': function (_0x1b8327, _0x4e2b14, _0x46fdf9) {
                            var _0x19cd6f = _0x4291;
                            return _0x5555f1[_0x19cd6f(0xe6)](_0x1b8327, _0x4e2b14, _0x46fdf9);
                        },
                        'jrtPG': _0x5555f1['anGpT']
                    };
                return promiseRetry(function () {
                    throw undefined;
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })[_0x297df0(0xb2)](function () {
                    throw new Error(_0x5555f1['anGpT']);
                }, function (_0x2d272f) {
                    var _0x235aaf = _0x297df0;
                    _0x1f9c1f[_0x235aaf(0xe7)](expect, _0x2d272f)['to']['be'](undefined);
                })[_0x297df0(0xb2)](function () {
                    var _0x5c23d8 = _0x297df0, _0x44b3cf = {
                            'MCCsa': function (_0x5284c0) {
                                var _0x54dbe5 = _0x4291;
                                return _0x1f9c1f[_0x54dbe5(0xe8)](_0x5284c0);
                            }
                        };
                    return _0x1f9c1f[_0x5c23d8(0xe9)](promiseRetry, function (_0x4efaa3) {
                        var _0x145317 = _0x5c23d8;
                        _0x44b3cf[_0x145317(0xea)](_0x4efaa3);
                    }, {
                        'retries': 0x1,
                        'factor': 0x1
                    });
                })[_0x297df0(0xb2)](function () {
                    throw new Error(_0x1f9c1f['jrtPG']);
                }, function (_0x34f0a2) {
                    _0x1f9c1f['ViZPv'](expect, _0x34f0a2)['to']['be'](undefined);
                });
            });
            continue;
        case '9':
            _0x8a908b[_0x27ae56(0xe3)](it, _0x8a908b['CTehv'], function () {
                var _0x4c0f5f = _0x27ae56, _0x39d8f7 = {
                        'VMauP': function (_0x16b581, _0x4adf4b) {
                            var _0x4904b4 = _0x4291;
                            return _0x5555f1[_0x4904b4(0xeb)](_0x16b581, _0x4adf4b);
                        },
                        'VldPb': _0x4c0f5f(0xc0)
                    };
                _0x5555f1[_0x4c0f5f(0xe6)](promiseRetry, function () {
                    var _0x74da0f = _0x4c0f5f;
                    throw new Error(_0x5555f1[_0x74da0f(0xc7)]);
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })[_0x4c0f5f(0xb2)](function () {
                    var _0x1d0b4a = _0x4c0f5f;
                    throw new Error(_0x5555f1[_0x1d0b4a(0xd1)]);
                }, function (_0x89e9b0) {
                    var _0x152ef5 = _0x4c0f5f;
                    _0x39d8f7[_0x152ef5(0xec)](expect, _0x89e9b0['message'])['to']['be'](_0x39d8f7['VldPb']);
                });
            });
            continue;
        case '10':
            var _0x5555f1 = {
                'RarKg': _0x8a908b[_0x27ae56(0xed)],
                'NRhyO': _0x27ae56(0xe2),
                'qEUdY': function (_0x504430, _0x727f50) {
                    var _0x124a7b = _0x27ae56;
                    return _0x8a908b[_0x124a7b(0xee)](_0x504430, _0x727f50);
                },
                'ibRSJ': _0x8a908b[_0x27ae56(0xef)],
                'GixJS': function (_0x156959, _0x2bed40, _0x3f5a2b) {
                    var _0x382ffa = _0x27ae56;
                    return _0x8a908b[_0x382ffa(0xf0)](_0x156959, _0x2bed40, _0x3f5a2b);
                },
                'vtBwE': function (_0x138ca5, _0xc100d4) {
                    return _0x138ca5(_0xc100d4);
                },
                'anPyK': function (_0x4ac3b5, _0x41960b) {
                    var _0x117e2b = _0x27ae56;
                    return _0x8a908b[_0x117e2b(0xf1)](_0x4ac3b5, _0x41960b);
                },
                'ZGHEP': function (_0x5d0ab6, _0x3750c4) {
                    var _0x403cc4 = _0x27ae56;
                    return _0x8a908b[_0x403cc4(0xf2)](_0x5d0ab6, _0x3750c4);
                },
                'CjsQg': function (_0x1a8ebc, _0x57ee97) {
                    return _0x8a908b['jOfkg'](_0x1a8ebc, _0x57ee97);
                },
                'MrZko': function (_0x1daab1, _0x1dcbcc) {
                    return _0x8a908b['ETCwV'](_0x1daab1, _0x1dcbcc);
                },
                'HydZJ': function (_0x3371a5, _0x4da0c4) {
                    var _0xe553bd = _0x27ae56;
                    return _0x8a908b[_0xe553bd(0xf3)](_0x3371a5, _0x4da0c4);
                },
                'anGpT': _0x8a908b[_0x27ae56(0xf4)],
                'nCmNf': function (_0x38f6bd, _0x296d98) {
                    var _0x3e7792 = _0x27ae56;
                    return _0x8a908b[_0x3e7792(0xf3)](_0x38f6bd, _0x296d98);
                },
                'PTUaa': function (_0x447a64, _0x3bafbd, _0x4b6aa1) {
                    var _0x459b09 = _0x27ae56;
                    return _0x8a908b[_0x459b09(0xf5)](_0x447a64, _0x3bafbd, _0x4b6aa1);
                },
                'vdHWu': function (_0x1f48f5, _0x50fe43, _0x5c035d) {
                    var _0x2a0008 = _0x27ae56;
                    return _0x8a908b[_0x2a0008(0xf6)](_0x1f48f5, _0x50fe43, _0x5c035d);
                },
                'RgIsW': function (_0x169876, _0x2003c4) {
                    var _0x3ec599 = _0x27ae56;
                    return _0x8a908b[_0x3ec599(0xf3)](_0x169876, _0x2003c4);
                },
                'kGqAU': function (_0x238987, _0x323bc9, _0x72396e) {
                    return _0x238987(_0x323bc9, _0x72396e);
                },
                'UdfFV': function (_0x293d47, _0x2b5b3c, _0x42ea12) {
                    var _0x820d12 = _0x27ae56;
                    return _0x8a908b[_0x820d12(0xf6)](_0x293d47, _0x2b5b3c, _0x42ea12);
                },
                'uEKyC': function (_0x5d1c4c, _0x1c66c2) {
                    var _0x5961f3 = _0x27ae56;
                    return _0x8a908b[_0x5961f3(0xf3)](_0x5d1c4c, _0x1c66c2);
                },
                'uwNFo': function (_0x2edd6f, _0x62430d, _0x420a63) {
                    var _0x51b076 = _0x27ae56;
                    return _0x8a908b[_0x51b076(0xf7)](_0x2edd6f, _0x62430d, _0x420a63);
                },
                'MlViA': function (_0x50b6ba, _0x49436a) {
                    var _0x4b2436 = _0x27ae56;
                    return _0x8a908b[_0x4b2436(0xf8)](_0x50b6ba, _0x49436a);
                },
                'vEPxZ': function (_0x399fc3) {
                    return _0x399fc3();
                },
                'mVTQh': function (_0x37b5a8, _0xfba2e9, _0x1df794) {
                    var _0x37048b = _0x27ae56;
                    return _0x8a908b[_0x37048b(0xf7)](_0x37b5a8, _0xfba2e9, _0x1df794);
                },
                'Qlfyt': function (_0x510a5d, _0x52d8c7) {
                    var _0x4d4604 = _0x27ae56;
                    return _0x8a908b[_0x4d4604(0xf8)](_0x510a5d, _0x52d8c7);
                },
                'uyDPX': function (_0x383f92, _0x1364f3) {
                    var _0x3818cf = _0x27ae56;
                    return _0x8a908b[_0x3818cf(0xf8)](_0x383f92, _0x1364f3);
                }
            };
            continue;
        case '11':
            _0x8a908b['JraXG'](it, _0x8a908b[_0x27ae56(0xf9)], function () {
                var _0xf1382 = _0x27ae56, _0x2040cb = {
                        'YmPMS': function (_0x56a7d8, _0x456d42) {
                            return _0x56a7d8 <= _0x456d42;
                        },
                        'ySnWk': function (_0x76e621, _0x16db42) {
                            return _0x5555f1['vtBwE'](_0x76e621, _0x16db42);
                        },
                        'WPDSV': function (_0x455bea, _0x2c4a8c) {
                            var _0x94154b = _0x4291;
                            return _0x5555f1[_0x94154b(0xfa)](_0x455bea, _0x2c4a8c);
                        },
                        'XIbNW': _0x5555f1[_0xf1382(0xbc)],
                        'ILGcp': function (_0x2a0074, _0x5a9edd) {
                            return _0x2a0074(_0x5a9edd);
                        }
                    }, _0x59cc3c = 0xb9b + -0x42e * 0x1 + -0x76d;
                return _0x5555f1['GixJS'](promiseRetry, function (_0x269d64, _0x53c424) {
                    var _0x7e3d01 = _0xf1382;
                    return _0x59cc3c += 0x1a1 * 0x9 + -0x17 * 0x8b + -0x22b, _0x2040cb['ySnWk'](expect, _0x59cc3c)['to'][_0x7e3d01(0xfb)](_0x53c424), _0x2040cb[_0x7e3d01(0xfc)](promiseDelay, -0x721 * -0x2 + -0x17 + -0xe21 * 0x1)[_0x7e3d01(0xb2)](function () {
                        var _0x237ea4 = _0x7e3d01;
                        return _0x2040cb[_0x237ea4(0xfd)](_0x59cc3c, -0x5 * 0x581 + 0xe9e * 0x1 + 0xce9) && _0x2040cb[_0x237ea4(0xfe)](_0x269d64, new Error(_0x237ea4(0xc0))), _0x237ea4(0xaf);
                    });
                }, { 'factor': 0x1 })[_0xf1382(0xb2)](function (_0x536d14) {
                    var _0x1be07d = _0xf1382;
                    expect(_0x536d14)['to']['be'](_0x2040cb[_0x1be07d(0xff)]), _0x2040cb[_0x1be07d(0x100)](expect, _0x59cc3c)['to']['be'](-0xb * 0xf9 + 0xc * 0x167 + -0x61e);
                }, function () {
                    var _0x304d6c = _0xf1382;
                    throw new Error(_0x5555f1[_0x304d6c(0xb7)]);
                });
            });
            continue;
        case '12':
            _0x8a908b[_0x27ae56(0xf7)](it, _0x27ae56(0x101), function () {
                var _0x27d063 = _0x27ae56, _0x3c2cba = {
                        'THFWf': _0x5555f1[_0x27d063(0xc7)],
                        'kkKWX': function (_0x3b3c23, _0x58d372) {
                            var _0x3736f8 = _0x27d063;
                            return _0x5555f1[_0x3736f8(0x102)](_0x3b3c23, _0x58d372);
                        },
                        'cAADE': function (_0x1a1456, _0x15aed9) {
                            var _0x576cb6 = _0x27d063;
                            return _0x5555f1[_0x576cb6(0x102)](_0x1a1456, _0x15aed9);
                        }
                    }, _0x472874 = 0x248d + 0x4 * 0x3fd + -0x3481;
                return _0x5555f1[_0x27d063(0x103)](promiseRetry, function (_0x2c0256) {
                    var _0x42e788 = _0x27d063;
                    return _0x472874 += -0x22c1 + 0x236 * -0x3 + -0xdcc * -0x3, _0x3c2cba['kkKWX'](promiseDelay, -0x2e * 0xb3 + -0xf1 + -0x6a1 * -0x5)[_0x42e788(0xb2)](function () {
                        var _0x1367f2 = _0x42e788;
                        throw new Error(_0x3c2cba[_0x1367f2(0x104)]);
                    })[_0x42e788(0xd4)](_0x2c0256);
                }, { 'retries': 0x0 })['then'](function () {
                    var _0xd3a106 = _0x27d063;
                    throw new Error(_0x5555f1[_0xd3a106(0xd1)]);
                }, function (_0x5c541c) {
                    var _0x365a06 = _0x27d063;
                    expect(_0x5c541c['message'])['to']['be'](_0x3c2cba['THFWf']), _0x3c2cba[_0x365a06(0x105)](expect, _0x472874)['to']['be'](0x1d8 + -0x215f + 0x1f88);
                });
            });
            continue;
        case '13':
            _0x8a908b[_0x27ae56(0x106)](it, _0x8a908b['NOyCP'], function () {
                var _0x2ad380 = {
                        'SqdYX': function (_0x3fe645, _0x599f0e) {
                            var _0x4bd267 = _0x4291;
                            return _0x5555f1[_0x4bd267(0x107)](_0x3fe645, _0x599f0e);
                        },
                        'vWaQu': 'foo'
                    }, _0x2cc78b = 0x1 * 0x151b + -0x238 + -0x1 * 0x12e3;
                return _0x5555f1['kGqAU'](promiseRetry, function (_0x30336e) {
                    var _0x58e560 = _0x4291, _0x2e2990 = {
                            'NHnlP': function (_0x3e622c, _0x5e0b81) {
                                return _0x3e622c < _0x5e0b81;
                            },
                            'wtptJ': _0x5555f1[_0x58e560(0xc7)],
                            'qZKSc': _0x5555f1[_0x58e560(0xbc)]
                        };
                    return _0x5555f1[_0x58e560(0x107)](promiseDelay, -0x59 * 0x4f + 0x12 * 0xd1 + 0xccf * 0x1)[_0x58e560(0xb2)](function () {
                        var _0x4ae890 = _0x58e560;
                        return _0x2e2990[_0x4ae890(0x108)](_0x2cc78b, 0xfeb + -0x1fd2 + 0xfe9) && (_0x2cc78b += -0x79 * -0x1e + 0x4ab + -0x12d8, _0x30336e(new Error(_0x2e2990[_0x4ae890(0x109)]))), _0x2e2990[_0x4ae890(0x10a)];
                    });
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })['then'](function () {
                    var _0x16533f = _0x4291;
                    throw new Error(_0x16533f(0xaa));
                }, function (_0x10cabc) {
                    var _0xaab60e = _0x4291;
                    _0x2ad380[_0xaab60e(0x10b)](expect, _0x10cabc['message'])['to']['be'](_0x2ad380['vWaQu']);
                });
            });
            continue;
        }
        break;
    }
});
