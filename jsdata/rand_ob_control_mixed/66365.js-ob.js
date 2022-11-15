'use strict';
var expect = require('expect.js'), promiseRetry = require('../'), promiseDelay = require('sleep-promise');
describe('promise-retry', function () {
    var _0x363751 = {
            'oSrex': '12|4|5|6|11|0|9|2|10|1|8|13|7|3',
            'AcnVk': function (_0x463dbf, _0xa9b816, _0x14bd36) {
                return _0x463dbf(_0xa9b816, _0x14bd36);
            },
            'TXMbC': 'should\x20not\x20retry\x20on\x20rejection\x20if\x20nr\x20of\x20retries\x20is\x200',
            'akzTU': 'should\x20convert\x20direct\x20rejections\x20into\x20promises',
            'XaGov': function (_0x4d48db, _0x16bd61, _0x589268) {
                return _0x4d48db(_0x16bd61, _0x589268);
            },
            'rVUJW': 'should\x20pass\x20options\x20to\x20the\x20underlying\x20retry\x20module',
            'VMoki': function (_0x444938, _0x377582, _0x58faed) {
                return _0x444938(_0x377582, _0x58faed);
            },
            'TNhWR': 'should\x20allow\x20options\x20to\x20be\x20passed\x20first',
            'brfXA': 'should\x20call\x20fn\x20again\x20if\x20retry\x20was\x20called',
            'YNfxD': function (_0x1193f0, _0x3136cc, _0x439a2d) {
                return _0x1193f0(_0x3136cc, _0x439a2d);
            },
            'MLkFc': 'should\x20call\x20fn\x20with\x20the\x20attempt\x20number',
            'WILyP': 'should\x20not\x20retry\x20on\x20fulfillment\x20if\x20retry\x20was\x20not\x20called',
            'VkHXV': function (_0x24a5a8, _0x3c32a7, _0x412776) {
                return _0x24a5a8(_0x3c32a7, _0x412776);
            },
            'uzmdM': 'should\x20work\x20with\x20several\x20retries\x20in\x20the\x20same\x20chain',
            'diuAV': function (_0x5c7089, _0x29743c, _0x5a0c57) {
                return _0x5c7089(_0x29743c, _0x5a0c57);
            },
            'RvxpR': 'should\x20not\x20crash\x20on\x20undefined\x20rejections',
            'SRAxD': 'should\x20reject\x20the\x20promise\x20if\x20the\x20retries\x20were\x20exceeded',
            'rWNCS': function (_0x53e731, _0x491912, _0x31989f) {
                return _0x53e731(_0x491912, _0x31989f);
            },
            'OZbdV': 'should\x20convert\x20direct\x20fulfillments\x20into\x20promises',
            'nCoqO': function (_0x2b5cd0, _0x389c28, _0xd30903) {
                return _0x2b5cd0(_0x389c28, _0xd30903);
            },
            'JTyTk': 'should\x20not\x20retry\x20on\x20rejection\x20if\x20retry\x20was\x20not\x20called',
            'LPKiE': 'should\x20not\x20fail',
            'pUDDd': function (_0x3adbf1, _0x143474) {
                return _0x3adbf1 <= _0x143474;
            },
            'PXsrY': function (_0x32e0a1, _0x24764b) {
                return _0x32e0a1(_0x24764b);
            },
            'rsBFw': 'foo',
            'dWSvy': 'final',
            'xkYnT': function (_0x4f2a93, _0x4cfbd6, _0x3c4303) {
                return _0x4f2a93(_0x4cfbd6, _0x3c4303);
            },
            'DIslT': 'should\x20not\x20succeed',
            'XCORf': function (_0x49477f, _0x520269) {
                return _0x49477f(_0x520269);
            },
            'phUEd': function (_0x103507, _0x2f45c2) {
                return _0x103507(_0x2f45c2);
            },
            'orbmB': function (_0x2ab00a, _0xbe273e) {
                return _0x2ab00a(_0xbe273e);
            },
            'arWff': function (_0x258dd7, _0x3145bd) {
                return _0x258dd7(_0x3145bd);
            },
            'aiBcY': function (_0x45c7b4, _0x5e7fb2) {
                return _0x45c7b4 < _0x5e7fb2;
            },
            'paNcg': function (_0x546088, _0x5b4f69) {
                return _0x546088(_0x5b4f69);
            },
            'zweSz': function (_0x71205f, _0x3a8c8d) {
                return _0x71205f(_0x3a8c8d);
            },
            'ZKdxJ': function (_0x5afa5d) {
                return _0x5afa5d();
            },
            'fPhhh': function (_0x11decb, _0x3382ec) {
                return _0x11decb(_0x3382ec);
            },
            'aTQPs': function (_0x34d2b3) {
                return _0x34d2b3();
            },
            'aXmbV': function (_0xac29eb, _0x764d7d, _0xfda890) {
                return _0xac29eb(_0x764d7d, _0xfda890);
            },
            'eaHIi': function (_0xd0046a, _0x27aeb8, _0x528bed) {
                return _0xd0046a(_0x27aeb8, _0x528bed);
            },
            'ASNTn': function (_0x1351f2, _0x38208d, _0x56b0c2) {
                return _0x1351f2(_0x38208d, _0x56b0c2);
            },
            'cLvWQ': 'should\x20retry\x20if\x20retry()\x20was\x20called\x20with\x20undefined'
        }, _0x231da3 = _0x363751['oSrex']['split']('|'), _0x5d998d = 0x0;
    while (!![]) {
        switch (_0x231da3[_0x5d998d++]) {
        case '0':
            _0x363751['AcnVk'](it, _0x363751['TXMbC'], function () {
                var _0x22a032 = {
                        'sikES': _0x551a6c['ZoFkM'],
                        'bcxph': function (_0x2aef07, _0x56f488) {
                            return _0x551a6c['yxJKK'](_0x2aef07, _0x56f488);
                        },
                        'PorsE': function (_0x52c3b8, _0xa2a192) {
                            return _0x551a6c['yxJKK'](_0x52c3b8, _0xa2a192);
                        },
                        'JrYEW': function (_0x1cee33, _0x36159b) {
                            return _0x551a6c['yxJKK'](_0x1cee33, _0x36159b);
                        }
                    }, _0x51ed24 = 0x0;
                return _0x551a6c['xDWJp'](promiseRetry, function (_0x4144a3) {
                    var _0x43224e = { 'mOtce': _0x22a032['sikES'] };
                    return _0x51ed24 += 0x1, _0x22a032['bcxph'](promiseDelay, 0xa)['then'](function () {
                        throw new Error(_0x43224e['mOtce']);
                    })['catch'](_0x4144a3);
                }, { 'retries': 0x0 })['then'](function () {
                    throw new Error(_0x551a6c['CwFdP']);
                }, function (_0xb1e7b7) {
                    _0x22a032['PorsE'](expect, _0xb1e7b7['message'])['to']['be'](_0x22a032['sikES']), _0x22a032['JrYEW'](expect, _0x51ed24)['to']['be'](0x1);
                });
            });
            continue;
        case '1':
            _0x363751['AcnVk'](it, _0x363751['akzTU'], function () {
                var _0x32e005 = {
                    'HNBZu': function (_0x2e7239, _0x496799) {
                        return _0x551a6c['lQzCm'](_0x2e7239, _0x496799);
                    },
                    'sGhjd': _0x551a6c['ZoFkM']
                };
                _0x551a6c['tPQgx'](promiseRetry, function () {
                    throw new Error(_0x551a6c['ZoFkM']);
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })['then'](function () {
                    throw new Error(_0x551a6c['CwFdP']);
                }, function (_0x114b9c) {
                    _0x32e005['HNBZu'](expect, _0x114b9c['message'])['to']['be'](_0x32e005['sGhjd']);
                });
            });
            continue;
        case '2':
            _0x363751['XaGov'](it, _0x363751['rVUJW'], function () {
                var _0x1933a3 = {
                        'fnGQh': function (_0x188752, _0x5da5a5) {
                            return _0x551a6c['BvRAE'](_0x188752, _0x5da5a5);
                        },
                        'UwdIU': function (_0xc785af, _0x3ef8e0) {
                            return _0x551a6c['frQDX'](_0xc785af, _0x3ef8e0);
                        },
                        'GzRpd': _0x551a6c['ZoFkM'],
                        'jDlLf': _0x551a6c['diksh'],
                        'YzHlG': function (_0x524137, _0x4a37d5) {
                            return _0x551a6c['uvRWZ'](_0x524137, _0x4a37d5);
                        }
                    }, _0x17fbc2 = 0x0;
                return _0x551a6c['tPQgx'](promiseRetry, function (_0x536693) {
                    return _0x551a6c['sJtzu'](promiseDelay, 0xa)['then'](function () {
                        return _0x1933a3['fnGQh'](_0x17fbc2, 0x2) && (_0x17fbc2 += 0x1, _0x1933a3['UwdIU'](_0x536693, new Error(_0x1933a3['GzRpd']))), _0x1933a3['jDlLf'];
                    });
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })['then'](function () {
                    throw new Error(_0x551a6c['CwFdP']);
                }, function (_0xb65a2c) {
                    _0x1933a3['YzHlG'](expect, _0xb65a2c['message'])['to']['be'](_0x1933a3['GzRpd']);
                });
            });
            continue;
        case '3':
            _0x363751['VMoki'](it, _0x363751['TNhWR'], function () {
                var _0x3ba439 = {
                        'jEcqC': function (_0x470f8a, _0x24ee96) {
                            return _0x551a6c['MgBrh'](_0x470f8a, _0x24ee96);
                        },
                        'SnUWg': _0x551a6c['diksh'],
                        'rDjZD': function (_0xad3b0e, _0x52a886) {
                            return _0x551a6c['MgBrh'](_0xad3b0e, _0x52a886);
                        },
                        'sPrgt': _0x551a6c['VTbFI']
                    }, _0x12f347 = 0x0;
                return _0x551a6c['hQGZN'](promiseRetry, { 'factor': 0x1 }, function (_0x4f0b8a) {
                    var _0x4ea956 = {
                        'Cruwm': function (_0x26d747, _0x42568d) {
                            return _0x551a6c['izDvR'](_0x26d747, _0x42568d);
                        },
                        'KVnUI': function (_0x3186ab, _0x284800) {
                            return _0x551a6c['MgBrh'](_0x3186ab, _0x284800);
                        },
                        'ygrZD': _0x551a6c['ZoFkM'],
                        'yArsW': _0x551a6c['diksh']
                    };
                    return _0x12f347 += 0x1, _0x551a6c['MgBrh'](promiseDelay, 0xa)['then'](function () {
                        return _0x4ea956['Cruwm'](_0x12f347, 0x2) && _0x4ea956['KVnUI'](_0x4f0b8a, new Error(_0x4ea956['ygrZD'])), _0x4ea956['yArsW'];
                    });
                })['then'](function (_0x3c59a1) {
                    _0x3ba439['jEcqC'](expect, _0x3c59a1)['to']['be'](_0x3ba439['SnUWg']), _0x3ba439['rDjZD'](expect, _0x12f347)['to']['be'](0x3);
                }, function () {
                    throw new Error(_0x3ba439['sPrgt']);
                });
            });
            continue;
        case '4':
            _0x363751['VMoki'](it, _0x363751['brfXA'], function () {
                var _0x25c3ad = {
                        'ubRkP': function (_0x5b549a, _0x5cc5e7) {
                            return _0x551a6c['dZLzr'](_0x5b549a, _0x5cc5e7);
                        },
                        'AZPif': function (_0x318f29, _0x2c2c80) {
                            return _0x551a6c['KFLNr'](_0x318f29, _0x2c2c80);
                        },
                        'DJJIl': _0x551a6c['ZoFkM'],
                        'qbTnZ': _0x551a6c['diksh'],
                        'HkkYC': function (_0x112fb8, _0x3bf1b0) {
                            return _0x551a6c['egoHF'](_0x112fb8, _0x3bf1b0);
                        },
                        'WbDHS': function (_0x186c97, _0x638b10) {
                            return _0x551a6c['egoHF'](_0x186c97, _0x638b10);
                        }
                    }, _0x16b72c = 0x0;
                return _0x551a6c['xDWJp'](promiseRetry, function (_0x2bbe4e) {
                    var _0x5828ec = {
                        'uPCiW': function (_0x5cd48f, _0x21abd8) {
                            return _0x25c3ad['ubRkP'](_0x5cd48f, _0x21abd8);
                        },
                        'vvnSZ': function (_0x487241, _0xe5f80d) {
                            return _0x25c3ad['AZPif'](_0x487241, _0xe5f80d);
                        },
                        'QUUqs': _0x25c3ad['DJJIl'],
                        'redgl': _0x25c3ad['qbTnZ']
                    };
                    return _0x16b72c += 0x1, _0x25c3ad['HkkYC'](promiseDelay, 0xa)['then'](function () {
                        return _0x5828ec['uPCiW'](_0x16b72c, 0x2) && _0x5828ec['vvnSZ'](_0x2bbe4e, new Error(_0x5828ec['QUUqs'])), _0x5828ec['redgl'];
                    });
                }, { 'factor': 0x1 })['then'](function (_0x296d95) {
                    _0x25c3ad['WbDHS'](expect, _0x296d95)['to']['be'](_0x25c3ad['qbTnZ']), _0x25c3ad['WbDHS'](expect, _0x16b72c)['to']['be'](0x3);
                }, function () {
                    throw new Error(_0x551a6c['VTbFI']);
                });
            });
            continue;
        case '5':
            _0x363751['YNfxD'](it, _0x363751['MLkFc'], function () {
                var _0x561863 = {
                        'LeJof': function (_0x4149a6, _0x5d1a5e) {
                            return _0x551a6c['dZLzr'](_0x4149a6, _0x5d1a5e);
                        },
                        'HRqlo': function (_0x137fcf, _0x3983fd) {
                            return _0x551a6c['egoHF'](_0x137fcf, _0x3983fd);
                        },
                        'JrNeu': _0x551a6c['ZoFkM'],
                        'PrbIg': _0x551a6c['diksh'],
                        'mUfzj': function (_0x5c0395, _0xd5813f) {
                            return _0x551a6c['egoHF'](_0x5c0395, _0xd5813f);
                        },
                        'yvHzd': _0x551a6c['VTbFI']
                    }, _0x525214 = 0x0;
                return _0x551a6c['xDWJp'](promiseRetry, function (_0x56a964, _0x1f52cc) {
                    return _0x525214 += 0x1, _0x551a6c['egoHF'](expect, _0x525214)['to']['equal'](_0x1f52cc), _0x551a6c['egoHF'](promiseDelay, 0xa)['then'](function () {
                        return _0x561863['LeJof'](_0x525214, 0x2) && _0x561863['HRqlo'](_0x56a964, new Error(_0x561863['JrNeu'])), _0x561863['PrbIg'];
                    });
                }, { 'factor': 0x1 })['then'](function (_0x279cc0) {
                    _0x561863['HRqlo'](expect, _0x279cc0)['to']['be'](_0x561863['PrbIg']), _0x561863['mUfzj'](expect, _0x525214)['to']['be'](0x3);
                }, function () {
                    throw new Error(_0x561863['yvHzd']);
                });
            });
            continue;
        case '6':
            _0x363751['YNfxD'](it, _0x363751['WILyP'], function () {
                var _0xe74b76 = 0x0;
                return _0x551a6c['UlWtk'](promiseRetry, function () {
                    var _0x598afd = { 'eXYqe': _0x551a6c['diksh'] };
                    return _0xe74b76 += 0x1, _0x551a6c['UlWtk'](promiseDelay, 0xa)['then'](function () {
                        return _0x598afd['eXYqe'];
                    });
                })['then'](function (_0xecd163) {
                    _0x551a6c['UlWtk'](expect, _0xecd163)['to']['be'](_0x551a6c['diksh']), _0x551a6c['UlWtk'](expect, _0xe74b76)['to']['be'](0x1);
                }, function () {
                    throw new Error(_0x551a6c['VTbFI']);
                });
            });
            continue;
        case '7':
            _0x363751['VkHXV'](it, _0x363751['uzmdM'], function () {
                var _0x27f5c2 = {
                        'WbFkW': function (_0x45477c, _0xf96578) {
                            return _0x551a6c['MgBrh'](_0x45477c, _0xf96578);
                        }
                    }, _0x21acd0 = 0x0;
                return _0x551a6c['hQGZN'](promiseRetry, function (_0x24c89c) {
                    var _0x227b7a = {
                        'FhItm': function (_0x3cf066, _0x2286d7) {
                            return _0x551a6c['gkLNB'](_0x3cf066, _0x2286d7);
                        },
                        'xkkxM': _0x551a6c['ZoFkM']
                    };
                    return _0x21acd0 += 0x1, _0x551a6c['gkLNB'](promiseDelay, 0xa)['then'](function () {
                        _0x227b7a['FhItm'](_0x24c89c, new Error(_0x227b7a['xkkxM']));
                    })['catch'](function (_0x41c552) {
                        _0x27f5c2['WbFkW'](_0x24c89c, _0x41c552);
                    });
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })['then'](function () {
                    throw new Error(_0x551a6c['CwFdP']);
                }, function (_0x34970c) {
                    _0x551a6c['BYIPd'](expect, _0x34970c['message'])['to']['be'](_0x551a6c['ZoFkM']), _0x551a6c['MgBrh'](expect, _0x21acd0)['to']['be'](0x2);
                });
            });
            continue;
        case '8':
            _0x363751['diuAV'](it, _0x363751['RvxpR'], function () {
                var _0x4c1f86 = {
                    'THlIH': _0x551a6c['CwFdP'],
                    'DaQji': function (_0x3a6cd6) {
                        return _0x551a6c['tWcJt'](_0x3a6cd6);
                    }
                };
                return _0x551a6c['sgLFK'](promiseRetry, function () {
                    throw undefined;
                }, {
                    'retries': 0x1,
                    'factor': 0x1
                })['then'](function () {
                    throw new Error(_0x4c1f86['THlIH']);
                }, function (_0x3f3171) {
                    _0x551a6c['DPsjn'](expect, _0x3f3171)['to']['be'](undefined);
                })['then'](function () {
                    return _0x551a6c['HfhwL'](promiseRetry, function (_0x3b939e) {
                        _0x4c1f86['DaQji'](_0x3b939e);
                    }, {
                        'retries': 0x1,
                        'factor': 0x1
                    });
                })['then'](function () {
                    throw new Error(_0x551a6c['CwFdP']);
                }, function (_0x44c53d) {
                    _0x551a6c['krhkF'](expect, _0x44c53d)['to']['be'](undefined);
                });
            });
            continue;
        case '9':
            _0x363751['diuAV'](it, _0x363751['SRAxD'], function () {
                var _0x23dbbe = {
                        'ClnGE': _0x551a6c['ZoFkM'],
                        'vlIjf': _0x551a6c['CwFdP']
                    }, _0x2e2ad9 = 0x0;
                return _0x551a6c['xDWJp'](promiseRetry, function (_0x293aa9) {
                    return _0x2e2ad9 += 0x1, _0x551a6c['yxJKK'](promiseDelay, 0xa)['then'](function () {
                        throw new Error(_0x23dbbe['ClnGE']);
                    })['catch'](_0x293aa9);
                }, {
                    'retries': 0x2,
                    'factor': 0x1
                })['then'](function () {
                    throw new Error(_0x23dbbe['vlIjf']);
                }, function (_0x40a2a6) {
                    _0x551a6c['vuYoF'](expect, _0x40a2a6['message'])['to']['be'](_0x551a6c['ZoFkM']), _0x551a6c['EdRcX'](expect, _0x2e2ad9)['to']['be'](0x3);
                });
            });
            continue;
        case '10':
            _0x363751['rWNCS'](it, _0x363751['OZbdV'], function () {
                var _0x4cab80 = {
                    'OhnqP': function (_0x76ab13, _0x57e0f2) {
                        return _0x551a6c['lQzCm'](_0x76ab13, _0x57e0f2);
                    },
                    'UYXqZ': _0x551a6c['diksh'],
                    'NIjiA': _0x551a6c['VTbFI']
                };
                return _0x551a6c['tPQgx'](promiseRetry, function () {
                    return _0x551a6c['diksh'];
                }, { 'factor': 0x1 })['then'](function (_0x2f8e9a) {
                    _0x4cab80['OhnqP'](expect, _0x2f8e9a)['to']['be'](_0x4cab80['UYXqZ']);
                }, function () {
                    throw new Error(_0x4cab80['NIjiA']);
                });
            });
            continue;
        case '11':
            _0x363751['nCoqO'](it, _0x363751['JTyTk'], function () {
                var _0x32da1f = {
                        'yMwbm': _0x551a6c['ZoFkM'],
                        'WYGWT': function (_0x514d88, _0x96de95) {
                            return _0x551a6c['PUuVq'](_0x514d88, _0x96de95);
                        }
                    }, _0x5d024e = 0x0;
                return _0x551a6c['yxJKK'](promiseRetry, function () {
                    return _0x5d024e += 0x1, _0x32da1f['WYGWT'](promiseDelay, 0xa)['then'](function () {
                        throw new Error(_0x32da1f['yMwbm']);
                    });
                })['then'](function () {
                    throw new Error(_0x551a6c['CwFdP']);
                }, function (_0x38f18b) {
                    _0x551a6c['UlWtk'](expect, _0x38f18b['message'])['to']['be'](_0x551a6c['ZoFkM']), _0x551a6c['UlWtk'](expect, _0x5d024e)['to']['be'](0x1);
                });
            });
            continue;
        case '12':
            var _0x551a6c = {
                'VTbFI': _0x363751['LPKiE'],
                'dZLzr': function (_0x46ae93, _0x3e5f3b) {
                    return _0x363751['pUDDd'](_0x46ae93, _0x3e5f3b);
                },
                'KFLNr': function (_0x4eab07, _0x140012) {
                    return _0x363751['PXsrY'](_0x4eab07, _0x140012);
                },
                'ZoFkM': _0x363751['rsBFw'],
                'diksh': _0x363751['dWSvy'],
                'egoHF': function (_0x2e712a, _0x239127) {
                    return _0x363751['PXsrY'](_0x2e712a, _0x239127);
                },
                'xDWJp': function (_0x12cfd5, _0x1cbde4, _0xbf2789) {
                    return _0x363751['xkYnT'](_0x12cfd5, _0x1cbde4, _0xbf2789);
                },
                'UlWtk': function (_0x4d3a71, _0x221791) {
                    return _0x363751['PXsrY'](_0x4d3a71, _0x221791);
                },
                'CwFdP': _0x363751['DIslT'],
                'PUuVq': function (_0x25baaa, _0x35685c) {
                    return _0x363751['XCORf'](_0x25baaa, _0x35685c);
                },
                'yxJKK': function (_0x30a14c, _0x538fb2) {
                    return _0x363751['phUEd'](_0x30a14c, _0x538fb2);
                },
                'vuYoF': function (_0x3a4869, _0x385783) {
                    return _0x363751['orbmB'](_0x3a4869, _0x385783);
                },
                'EdRcX': function (_0x4eafc2, _0x317cb7) {
                    return _0x363751['arWff'](_0x4eafc2, _0x317cb7);
                },
                'sJtzu': function (_0x5cae9a, _0x4ff6e3) {
                    return _0x363751['arWff'](_0x5cae9a, _0x4ff6e3);
                },
                'BvRAE': function (_0x3cab6e, _0x1ed392) {
                    return _0x363751['aiBcY'](_0x3cab6e, _0x1ed392);
                },
                'frQDX': function (_0x1cc45d, _0x23c0a3) {
                    return _0x363751['paNcg'](_0x1cc45d, _0x23c0a3);
                },
                'uvRWZ': function (_0x573fcf, _0x18eef2) {
                    return _0x363751['zweSz'](_0x573fcf, _0x18eef2);
                },
                'tPQgx': function (_0x4dd0f6, _0x4621d7, _0x502008) {
                    return _0x363751['xkYnT'](_0x4dd0f6, _0x4621d7, _0x502008);
                },
                'lQzCm': function (_0x34c932, _0x33b916) {
                    return _0x363751['zweSz'](_0x34c932, _0x33b916);
                },
                'DPsjn': function (_0x3dba55, _0x1b4cdc) {
                    return _0x363751['zweSz'](_0x3dba55, _0x1b4cdc);
                },
                'HfhwL': function (_0x101209, _0x19aaad, _0x4985b4) {
                    return _0x363751['xkYnT'](_0x101209, _0x19aaad, _0x4985b4);
                },
                'krhkF': function (_0x3b247a, _0x1ce85f) {
                    return _0x363751['zweSz'](_0x3b247a, _0x1ce85f);
                },
                'tWcJt': function (_0x9c368a) {
                    return _0x363751['ZKdxJ'](_0x9c368a);
                },
                'sgLFK': function (_0x1c22ab, _0x5827ef, _0x879630) {
                    return _0x363751['xkYnT'](_0x1c22ab, _0x5827ef, _0x879630);
                },
                'TkqcC': function (_0x1b527f, _0x5913a2) {
                    return _0x363751['fPhhh'](_0x1b527f, _0x5913a2);
                },
                'eqLoh': function (_0x405760, _0x4e9631) {
                    return _0x363751['pUDDd'](_0x405760, _0x4e9631);
                },
                'hQibr': function (_0x1212fd) {
                    return _0x363751['aTQPs'](_0x1212fd);
                },
                'cTVmO': function (_0x48197a, _0x4fd101, _0x1da826) {
                    return _0x363751['aXmbV'](_0x48197a, _0x4fd101, _0x1da826);
                },
                'gkLNB': function (_0x2ad1fa, _0x3914db) {
                    return _0x363751['fPhhh'](_0x2ad1fa, _0x3914db);
                },
                'BYIPd': function (_0x553a59, _0x144701) {
                    return _0x363751['fPhhh'](_0x553a59, _0x144701);
                },
                'MgBrh': function (_0x44ccb6, _0x2ea50c) {
                    return _0x363751['fPhhh'](_0x44ccb6, _0x2ea50c);
                },
                'hQGZN': function (_0x3dfd4f, _0x2b3d9a, _0x402cf5) {
                    return _0x363751['eaHIi'](_0x3dfd4f, _0x2b3d9a, _0x402cf5);
                },
                'izDvR': function (_0x58c2a9, _0x15ee58) {
                    return _0x363751['pUDDd'](_0x58c2a9, _0x15ee58);
                }
            };
            continue;
        case '13':
            _0x363751['ASNTn'](it, _0x363751['cLvWQ'], function () {
                var _0x962e10 = {
                        'gePWI': function (_0x2f1ab7, _0x44bd8e) {
                            return _0x551a6c['eqLoh'](_0x2f1ab7, _0x44bd8e);
                        },
                        'jgCvx': function (_0x378286) {
                            return _0x551a6c['hQibr'](_0x378286);
                        },
                        'qAuzv': _0x551a6c['diksh'],
                        'OlcOP': function (_0x233bcf, _0x409a34) {
                            return _0x551a6c['TkqcC'](_0x233bcf, _0x409a34);
                        },
                        'VTZJm': _0x551a6c['VTbFI']
                    }, _0x3ae5f9 = 0x0;
                return _0x551a6c['cTVmO'](promiseRetry, function (_0x23a771) {
                    return _0x3ae5f9 += 0x1, _0x962e10['OlcOP'](promiseDelay, 0xa)['then'](function () {
                        return _0x962e10['gePWI'](_0x3ae5f9, 0x2) && _0x962e10['jgCvx'](_0x23a771), _0x962e10['qAuzv'];
                    });
                }, { 'factor': 0x1 })['then'](function (_0x5c86f6) {
                    _0x551a6c['krhkF'](expect, _0x5c86f6)['to']['be'](_0x551a6c['diksh']), _0x551a6c['TkqcC'](expect, _0x3ae5f9)['to']['be'](0x3);
                }, function () {
                    throw new Error(_0x962e10['VTZJm']);
                });
            });
            continue;
        }
        break;
    }
});
