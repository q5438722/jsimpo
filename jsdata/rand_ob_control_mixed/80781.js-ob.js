var express = require('../'), request = require('supertest'), cookie = require('cookie'), cookieParser = require('cookie-parser'), merge = require('utils-merge');
describe('res', function () {
    var _0x40b708 = {
        'WXVAJ': 'user',
        'RsxVS': 'tobi',
        'vjtpX': function (_0x3ba6a2) {
            return _0x3ba6a2();
        },
        'jmtmA': function (_0x2002c5, _0x40bd0b) {
            return _0x2002c5(_0x40bd0b);
        },
        'pAxVY': 'Set-Cookie',
        'LqhJY': 'user=j%3A%7B%22name%22%3A%22tobi%22%7D;\x20Path=/',
        'TaYgW': function (_0x492e1a, _0x469909, _0xb78425) {
            return _0x492e1a(_0x469909, _0xb78425);
        },
        'Pkjxd': 'should\x20generate\x20a\x20JSON\x20cookie',
        'qmrSm': 'name',
        'vMqRO': 'age',
        'SFrNe': 'gender',
        'rAaZW': 'name=tobi;\x20Path=/',
        'eiRbf': 'age=1;\x20Path=/',
        'vpyJW': 'gender=%3F;\x20Path=/',
        'uKoOr': 'set-cookie',
        'QEAmr': function (_0x491369) {
            return _0x491369();
        },
        'mxgYB': function (_0x137008) {
            return _0x137008();
        },
        'DMThq': function (_0x3ecc87) {
            return _0x3ecc87();
        },
        'baZvE': function (_0x5bc7ba, _0x4451c3, _0x46ce8b) {
            return _0x5bc7ba(_0x4451c3, _0x46ce8b);
        },
        'ueqNz': 'should\x20set\x20a\x20cookie',
        'mtQgi': 'should\x20allow\x20multiple\x20calls',
        'PvGWs': function (_0x10b62f, _0x314181, _0x5cde04) {
            return _0x10b62f(_0x314181, _0x5cde04);
        },
        'sbhth': 'should\x20generate\x20a\x20signed\x20JSON\x20cookie',
        'WsTBm': function (_0x5c68df) {
            return _0x5c68df();
        },
        'XesIj': function (_0x3c37e5) {
            return _0x3c37e5();
        },
        'DSkoK': function (_0x2bc938, _0x33bc94) {
            return _0x2bc938(_0x33bc94);
        },
        'xEKtg': function (_0xd81c4, _0xee9002, _0xe0eda) {
            return _0xd81c4(_0xee9002, _0xe0eda);
        },
        'LnhVx': 'should\x20throw\x20an\x20error',
        'hNxbL': '2|0|1|3|4|5',
        'RYVmD': function (_0x242a76, _0x479c3b, _0x30b4a8) {
            return _0x242a76(_0x479c3b, _0x30b4a8);
        },
        'sFQZZ': 'should\x20set\x20params',
        'yDJMc': 'maxAge',
        'zIOQP': 'name=tobi;\x20Path=/;\x20HttpOnly;\x20Secure',
        'lRJGp': 'Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT',
        'LsaUF': function (_0x8d6d12, _0x216a98) {
            return _0x8d6d12(_0x216a98);
        },
        'Qdllp': '2|0|4|1|3',
        'zSnES': 'should\x20set\x20relative\x20expires',
        'egCsf': 'should\x20set\x20max-age',
        'JQGot': 'should\x20not\x20mutate\x20the\x20options\x20object',
        'WpwOf': '1|4|0|2|3',
        'ZKWRC': 'foo\x20bar\x20baz',
        'pybsF': 's:j:{\x22name\x22:\x22tobi\x22}',
        'lsQUf': function (_0x4336b4) {
            return _0x4336b4();
        },
        'hApxI': function (_0x3c228a, _0xb9d6ef) {
            return _0x3c228a(_0xb9d6ef);
        },
        'AeRYG': 'name=s%3Atobi.xJjV2iZ6EI7C8E5kzwbfA9PVLl1ZR07UTnuTgQQ4EnQ;\x20Path=/',
        'cxNhw': 'should\x20set\x20a\x20signed\x20cookie',
        'oDCun': function (_0x4135fd, _0x3be5db, _0x1a6ffc) {
            return _0x4135fd(_0x3be5db, _0x1a6ffc);
        },
        'MwRrg': 'signed',
        'jMhcM': function (_0x42421c, _0x51451, _0x173492) {
            return _0x42421c(_0x51451, _0x173492);
        },
        'LSyQz': 'signed\x20without\x20secret',
        'AzaRL': function (_0x1bab27, _0x1dd77f, _0x4cff77) {
            return _0x1bab27(_0x1dd77f, _0x4cff77);
        },
        'lIFKY': '.signedCookie(name,\x20string)',
        'xsvWs': function (_0x4e36e9, _0x1bffb9, _0x52afeb) {
            return _0x4e36e9(_0x1bffb9, _0x52afeb);
        },
        'UoKUF': '.cookie(name,\x20object)',
        'kFmgs': function (_0x4a42bf, _0x23d41b, _0x15af03) {
            return _0x4a42bf(_0x23d41b, _0x15af03);
        },
        'AFizR': '.cookie(name,\x20string)',
        'tCMvn': '.cookie(name,\x20string,\x20options)'
    };
    _0x40b708['xsvWs'](describe, _0x40b708['UoKUF'], function () {
        var _0x180eac = {
            'WBRoW': _0x40b708['WXVAJ'],
            'qbCwK': _0x40b708['RsxVS'],
            'XlUtI': function (_0x4c47a9) {
                return _0x40b708['vjtpX'](_0x4c47a9);
            },
            'wSetU': function (_0x411602, _0x1d826b) {
                return _0x40b708['jmtmA'](_0x411602, _0x1d826b);
            },
            'omxse': _0x40b708['pAxVY'],
            'FqMiZ': _0x40b708['LqhJY']
        };
        _0x40b708['TaYgW'](it, _0x40b708['Pkjxd'], function (_0x221101) {
            var _0x25b6a8 = {
                    'bQIeZ': _0x180eac['WBRoW'],
                    'akEYZ': _0x180eac['qbCwK']
                }, _0xc4c546 = _0x180eac['XlUtI'](express);
            _0xc4c546['use'](function (_0x26ef43, _0xe457b7) {
                _0xe457b7['cookie'](_0x25b6a8['bQIeZ'], { 'name': _0x25b6a8['akEYZ'] })['end']();
            }), _0x180eac['wSetU'](request, _0xc4c546)['get']('/')['expect'](_0x180eac['omxse'], _0x180eac['FqMiZ'])['expect'](0xc8, _0x221101);
        });
    }), _0x40b708['kFmgs'](describe, _0x40b708['AFizR'], function () {
        var _0x13d0ae = {
            'kmoGS': _0x40b708['qmrSm'],
            'kNkVm': _0x40b708['RsxVS'],
            'kJjXV': function (_0x42822c) {
                return _0x40b708['DMThq'](_0x42822c);
            },
            'hgbbT': function (_0x139fe5, _0x24c852) {
                return _0x40b708['jmtmA'](_0x139fe5, _0x24c852);
            },
            'eLIOs': _0x40b708['pAxVY'],
            'AXZvf': _0x40b708['rAaZW']
        };
        _0x40b708['baZvE'](it, _0x40b708['ueqNz'], function (_0x5a80f8) {
            var _0x837607 = _0x13d0ae['kJjXV'](express);
            _0x837607['use'](function (_0x5e0eb2, _0x2bf586) {
                _0x2bf586['cookie'](_0x13d0ae['kmoGS'], _0x13d0ae['kNkVm'])['end']();
            }), _0x13d0ae['hgbbT'](request, _0x837607)['get']('/')['expect'](_0x13d0ae['eLIOs'], _0x13d0ae['AXZvf'])['expect'](0xc8, _0x5a80f8);
        }), _0x40b708['baZvE'](it, _0x40b708['mtQgi'], function (_0x2a0068) {
            var _0x219900 = {
                    'kvuKw': _0x40b708['qmrSm'],
                    'oleSh': _0x40b708['RsxVS'],
                    'VFMnV': _0x40b708['vMqRO'],
                    'nJPTy': _0x40b708['SFrNe'],
                    'kMLug': _0x40b708['rAaZW'],
                    'iWvnY': _0x40b708['eiRbf'],
                    'qfqjH': _0x40b708['vpyJW'],
                    'oHAtz': _0x40b708['uKoOr'],
                    'jMzkU': function (_0x445217) {
                        return _0x40b708['QEAmr'](_0x445217);
                    }
                }, _0x5b8c64 = _0x40b708['mxgYB'](express);
            _0x5b8c64['use'](function (_0x86feb1, _0x4e3127) {
                _0x4e3127['cookie'](_0x219900['kvuKw'], _0x219900['oleSh']), _0x4e3127['cookie'](_0x219900['VFMnV'], 0x1), _0x4e3127['cookie'](_0x219900['nJPTy'], '?'), _0x4e3127['end']();
            }), _0x40b708['jmtmA'](request, _0x5b8c64)['get']('/')['end'](function (_0x4f391a, _0xc55d17) {
                var _0x4ff33e = [
                    _0x219900['kMLug'],
                    _0x219900['iWvnY'],
                    _0x219900['qfqjH']
                ];
                _0xc55d17['headers'][_0x219900['oHAtz']]['should']['eql'](_0x4ff33e), _0x219900['jMzkU'](_0x2a0068);
            });
        });
    }), _0x40b708['kFmgs'](describe, _0x40b708['tCMvn'], function () {
        var _0x3f1cce = _0x40b708['hNxbL']['split']('|'), _0x2c1ba6 = 0x0;
        while (!![]) {
            switch (_0x3f1cce[_0x2c1ba6++]) {
            case '0':
                _0x40b708['RYVmD'](it, _0x40b708['sFQZZ'], function (_0x3c0524) {
                    var _0x87ef07 = _0x43d065['zKuLt'](express);
                    _0x87ef07['use'](function (_0x50d104, _0x52b1bd) {
                        _0x52b1bd['cookie'](_0x43d065['ePUgF'], _0x43d065['HGXTM'], {
                            'httpOnly': !![],
                            'secure': !![]
                        }), _0x52b1bd['end']();
                    }), _0x43d065['LINvJ'](request, _0x87ef07)['get']('/')['expect'](_0x43d065['KXLJK'], _0x43d065['AkmoO'])['expect'](0xc8, _0x3c0524);
                });
                continue;
            case '1':
                _0x40b708['RYVmD'](describe, _0x40b708['yDJMc'], function () {
                    var _0x41e636 = {
                        'ielwn': _0x43d065['ePUgF'],
                        'zcjhO': _0x43d065['HGXTM'],
                        'NuKxs': _0x43d065['mETIn'],
                        'vaKWq': _0x43d065['ccbLc'],
                        'wepfD': function (_0x456e78) {
                            return _0x43d065['ziOTz'](_0x456e78);
                        },
                        'hMvHY': function (_0x4e8762) {
                            return _0x43d065['ziOTz'](_0x4e8762);
                        },
                        'ecEDk': function (_0x1954e0, _0x314917) {
                            return _0x43d065['pKqXg'](_0x1954e0, _0x314917);
                        },
                        'qnNbG': _0x43d065['qyvnr'],
                        'ZHDZx': function (_0x41aaa7) {
                            return _0x43d065['ziOTz'](_0x41aaa7);
                        },
                        'scZhf': function (_0x5b6a95, _0x2d7564) {
                            return _0x43d065['pKqXg'](_0x5b6a95, _0x2d7564);
                        },
                        'TSPAb': function (_0x3afa7c, _0x36be91, _0x3bf1d5) {
                            return _0x43d065['jOYnh'](_0x3afa7c, _0x36be91, _0x3bf1d5);
                        }
                    };
                    _0x43d065['MDEQp'](it, _0x43d065['eFjSU'], function (_0x535910) {
                        var _0x57eb38 = _0x41e636['hMvHY'](express);
                        _0x57eb38['use'](function (_0x7e80bd, _0x48c75c) {
                            _0x48c75c['cookie'](_0x41e636['ielwn'], _0x41e636['zcjhO'], { 'maxAge': 0x3e8 }), _0x48c75c['end']();
                        }), _0x41e636['ecEDk'](request, _0x57eb38)['get']('/')['end'](function (_0x4371e3, _0xde045e) {
                            _0xde045e['headers'][_0x41e636['NuKxs']][0x0]['should']['not']['containEql'](_0x41e636['vaKWq']), _0x41e636['wepfD'](_0x535910);
                        });
                    }), _0x43d065['MDEQp'](it, _0x43d065['Gtgjg'], function (_0x3670ef) {
                        var _0x3ae161 = _0x43d065['ziOTz'](express);
                        _0x3ae161['use'](function (_0x5c9131, _0x2e7392) {
                            _0x2e7392['cookie'](_0x41e636['ielwn'], _0x41e636['zcjhO'], { 'maxAge': 0x3e8 }), _0x2e7392['end']();
                        }), _0x43d065['LINvJ'](request, _0x3ae161)['get']('/')['expect'](_0x43d065['KXLJK'], /Max-Age=1/, _0x3670ef);
                    }), _0x43d065['MDEQp'](it, _0x43d065['mTJGi'], function (_0x5ac0f3) {
                        var _0x4e4e58 = _0x41e636['qnNbG']['split']('|'), _0x38a0c8 = 0x0;
                        while (!![]) {
                            switch (_0x4e4e58[_0x38a0c8++]) {
                            case '0':
                                var _0x397534 = { 'maxAge': 0x3e8 };
                                continue;
                            case '1':
                                _0x1160be['use'](function (_0x120ad1, _0x587845) {
                                    _0x587845['cookie'](_0x41e636['ielwn'], _0x41e636['zcjhO'], _0x397534), _0x587845['json'](_0x397534);
                                });
                                continue;
                            case '2':
                                var _0x1160be = _0x41e636['ZHDZx'](express);
                                continue;
                            case '3':
                                _0x41e636['scZhf'](request, _0x1160be)['get']('/')['expect'](0xc8, _0x4785d5, _0x5ac0f3);
                                continue;
                            case '4':
                                var _0x4785d5 = _0x41e636['TSPAb'](merge, {}, _0x397534);
                                continue;
                            }
                            break;
                        }
                    });
                });
                continue;
            case '2':
                var _0x43d065 = {
                    'ePUgF': _0x40b708['qmrSm'],
                    'HGXTM': _0x40b708['RsxVS'],
                    'zKuLt': function (_0x385ad1) {
                        return _0x40b708['XesIj'](_0x385ad1);
                    },
                    'LINvJ': function (_0x3c8190, _0x3a64fb) {
                        return _0x40b708['DSkoK'](_0x3c8190, _0x3a64fb);
                    },
                    'KXLJK': _0x40b708['pAxVY'],
                    'AkmoO': _0x40b708['zIOQP'],
                    'ziOTz': function (_0x3ae4e0) {
                        return _0x40b708['XesIj'](_0x3ae4e0);
                    },
                    'mETIn': _0x40b708['uKoOr'],
                    'ccbLc': _0x40b708['lRJGp'],
                    'pKqXg': function (_0x278005, _0x3dcb5b) {
                        return _0x40b708['LsaUF'](_0x278005, _0x3dcb5b);
                    },
                    'qyvnr': _0x40b708['Qdllp'],
                    'jOYnh': function (_0x2073d6, _0x385ddf, _0x2e6c77) {
                        return _0x40b708['RYVmD'](_0x2073d6, _0x385ddf, _0x2e6c77);
                    },
                    'MDEQp': function (_0x2797c1, _0x170500, _0x1f3def) {
                        return _0x40b708['RYVmD'](_0x2797c1, _0x170500, _0x1f3def);
                    },
                    'eFjSU': _0x40b708['zSnES'],
                    'Gtgjg': _0x40b708['egCsf'],
                    'mTJGi': _0x40b708['JQGot'],
                    'bJPIu': _0x40b708['WpwOf'],
                    'eUywc': _0x40b708['ZKWRC'],
                    'XozAN': _0x40b708['pybsF'],
                    'YULHz': function (_0x25fe07) {
                        return _0x40b708['lsQUf'](_0x25fe07);
                    },
                    'kooPV': function (_0x560d13, _0x19b173) {
                        return _0x40b708['hApxI'](_0x560d13, _0x19b173);
                    },
                    'rwfKf': function (_0x4f10d8, _0x315989) {
                        return _0x40b708['hApxI'](_0x4f10d8, _0x315989);
                    },
                    'UAiyR': _0x40b708['AeRYG'],
                    'zqojf': _0x40b708['cxNhw']
                };
                continue;
            case '3':
                _0x40b708['oDCun'](describe, _0x40b708['MwRrg'], function () {
                    var _0x48d000 = {
                        'lLRnt': _0x40b708['WXVAJ'],
                        'VyxQo': _0x40b708['RsxVS']
                    };
                    _0x40b708['PvGWs'](it, _0x40b708['sbhth'], function (_0x18eccf) {
                        var _0x128b42 = _0x43d065['bJPIu']['split']('|'), _0x372a65 = 0x0;
                        while (!![]) {
                            switch (_0x128b42[_0x372a65++]) {
                            case '0':
                                _0x24d002['use'](_0x43d065['pKqXg'](cookieParser, _0x43d065['eUywc']));
                                continue;
                            case '1':
                                var _0x51bc03 = {
                                    'gDwHS': _0x43d065['mETIn'],
                                    'jzHyE': _0x43d065['XozAN'],
                                    'nVLvO': function (_0x6714c8) {
                                        return _0x43d065['YULHz'](_0x6714c8);
                                    }
                                };
                                continue;
                            case '2':
                                _0x24d002['use'](function (_0x3a6817, _0x12890b) {
                                    _0x12890b['cookie'](_0x48d000['lLRnt'], { 'name': _0x48d000['VyxQo'] }, { 'signed': !![] })['end']();
                                });
                                continue;
                            case '3':
                                _0x43d065['kooPV'](request, _0x24d002)['get']('/')['end'](function (_0x43d8b1, _0x48b7a8) {
                                    var _0x398b18 = _0x48b7a8['headers'][_0x51bc03['gDwHS']][0x0];
                                    _0x398b18 = cookie['parse'](_0x398b18['split']('.')[0x0]), _0x398b18['user']['should']['equal'](_0x51bc03['jzHyE']), _0x51bc03['nVLvO'](_0x18eccf);
                                });
                                continue;
                            case '4':
                                var _0x24d002 = _0x43d065['YULHz'](express);
                                continue;
                            }
                            break;
                        }
                    });
                });
                continue;
            case '4':
                _0x40b708['jMhcM'](describe, _0x40b708['LSyQz'], function () {
                    var _0x310c7b = {
                        'YDWVn': _0x40b708['qmrSm'],
                        'exbIG': _0x40b708['RsxVS'],
                        'FfETI': function (_0x1185c0) {
                            return _0x40b708['WsTBm'](_0x1185c0);
                        },
                        'BFFvm': function (_0x4658b4) {
                            return _0x40b708['XesIj'](_0x4658b4);
                        },
                        'mdQYw': function (_0x593111, _0x4d1336) {
                            return _0x40b708['DSkoK'](_0x593111, _0x4d1336);
                        }
                    };
                    _0x40b708['xEKtg'](it, _0x40b708['LnhVx'], function (_0x11e4b0) {
                        var _0x2cd11b = _0x310c7b['FfETI'](express);
                        _0x2cd11b['use'](_0x310c7b['BFFvm'](cookieParser)), _0x2cd11b['use'](function (_0x313a44, _0x2f9f74) {
                            _0x2f9f74['cookie'](_0x310c7b['YDWVn'], _0x310c7b['exbIG'], { 'signed': !![] })['end']();
                        }), _0x310c7b['mdQYw'](request, _0x2cd11b)['get']('/')['expect'](0x1f4, /secret\S+ required for signed cookies/, _0x11e4b0);
                    });
                });
                continue;
            case '5':
                _0x40b708['AzaRL'](describe, _0x40b708['lIFKY'], function () {
                    var _0x3f61a3 = {
                        'DmTsE': _0x43d065['ePUgF'],
                        'HPxWC': _0x43d065['HGXTM']
                    };
                    _0x43d065['MDEQp'](it, _0x43d065['zqojf'], function (_0x1df99b) {
                        var _0x49660e = _0x43d065['YULHz'](express);
                        _0x49660e['use'](_0x43d065['rwfKf'](cookieParser, _0x43d065['eUywc'])), _0x49660e['use'](function (_0x18abe1, _0x40bd10) {
                            _0x40bd10['cookie'](_0x3f61a3['DmTsE'], _0x3f61a3['HPxWC'], { 'signed': !![] })['end']();
                        }), _0x43d065['rwfKf'](request, _0x49660e)['get']('/')['expect'](_0x43d065['KXLJK'], _0x43d065['UAiyR'])['expect'](0xc8, _0x1df99b);
                    });
                });
                continue;
            }
            break;
        }
    });
});
