var defaults = require('../../lib/defaults'), utils = require('../../lib/utils');
describe('defaults', function () {
    var _0x3af3f9 = {
            'wtEMT': '9|16|8|4|5|13|3|0|11|1|6|10|7|2|14|12|15',
            'jstIQ': function (_0x47cfc3, _0x50fb2a, _0x2fb64a) {
                return _0x47cfc3(_0x50fb2a, _0x2fb64a);
            },
            'TBsBl': 'should\x20do\x20nothing\x20to\x20response\x20string',
            'NXUZR': 'should\x20use\x20modified\x20defaults\x20config',
            'zYHCH': function (_0x59f5f3, _0x135bb2, _0x59731e) {
                return _0x59f5f3(_0x135bb2, _0x59731e);
            },
            'KWVqT': 'should\x20use\x20POST\x20headers',
            'JGxeH': function (_0x488ab6, _0x5aa1e4, _0x2b7a10) {
                return _0x488ab6(_0x5aa1e4, _0x2b7a10);
            },
            'DSItH': 'should\x20transform\x20response\x20json',
            'RTUPN': function (_0x11e348, _0x527231) {
                return _0x11e348(_0x527231);
            },
            'vxqmB': function (_0x18f7fa, _0x20ccd9, _0x3898f2) {
                return _0x18f7fa(_0x20ccd9, _0x3898f2);
            },
            'cJQcA': 'should\x20transform\x20request\x20json',
            'PuQTD': function (_0x4f0cbd, _0x9d6ccb, _0x3c948b) {
                return _0x4f0cbd(_0x9d6ccb, _0x3c948b);
            },
            'rgBqk': 'should\x20use\x20request\x20config',
            'bSoij': function (_0x2ebe89, _0x4c9d4, _0x5d1100) {
                return _0x2ebe89(_0x4c9d4, _0x5d1100);
            },
            'opcgG': 'should\x20use\x20GET\x20headers',
            'EEqzT': function (_0x6f8622, _0x4abb7f) {
                return _0x6f8622(_0x4abb7f);
            },
            'UosVT': '1|3|2|4|0',
            'EeZAF': function (_0x2ce578, _0x5845da) {
                return _0x2ce578 + _0x5845da;
            },
            'eGGmi': '=;expires=',
            'okqcA': function (_0x3a5a82, _0x5dfa0e) {
                return _0x3a5a82 - _0x5dfa0e;
            },
            'VtqVE': 'X-CUSTOM-HEADER',
            'XoXOR': 'bar',
            'mrPwb': '{\x22foo\x22:\x22bar\x22}',
            'cIsuC': 'foo=bar',
            'fmLCo': 'object',
            'yjesb': '/foo',
            'ASlzS': function (_0xcd5c42) {
                return _0xcd5c42();
            },
            'JCkgJ': 'http://example.com/foo',
            'LSpbG': 'http://example.com/',
            'ROJeB': function (_0x36b8b9, _0x1128b9) {
                return _0x36b8b9(_0x1128b9);
            },
            'ZoslO': 'http://www.example.com/foo',
            'PYJoF': 'http://www.example.com',
            'jyEAO': 'foobarbaz',
            'lOuan': 'X-CUSTOM-XSRF-TOKEN',
            'okVaU': function (_0x1ee559, _0x4d7bfa) {
                return _0x1ee559 + _0x4d7bfa;
            },
            'oHRYR': '=foobarbaz',
            'YwEPw': 'foo',
            'YPJre': function (_0x2c86e0) {
                return _0x2c86e0();
            },
            'Stvdv': 'commonHeaderValue',
            'EfhUG': 'getHeaderValue',
            'fpXNa': 'fooHeaderValue',
            'HVqMv': 'barHeaderValue',
            'AfmcG': function (_0x4da102) {
                return _0x4da102();
            },
            'TVddn': 'postHeaderValue',
            'NXIwX': function (_0x3f41fb, _0x292327) {
                return _0x3f41fb(_0x292327);
            },
            'cNDNr': 'http://example.org/foo',
            'RjmtL': 'http://example.org/',
            'iLETz': function (_0x1164bb) {
                return _0x1164bb();
            },
            'BifWL': '4|0|1|2|3',
            'WFYKK': function (_0x4f7969) {
                return _0x4f7969();
            },
            'zDfGJ': function (_0x468a70, _0x285611, _0x5bc5b0) {
                return _0x468a70(_0x285611, _0x5bc5b0);
            },
            'uRpFc': 'should\x20use\x20default\x20config\x20for\x20custom\x20instance',
            'fvWeQ': 'should\x20use\x20global\x20defaults\x20config',
            'exRQo': function (_0x549d0a, _0x398c27, _0x23fd63) {
                return _0x549d0a(_0x398c27, _0x23fd63);
            },
            'WuZbC': 'should\x20be\x20used\x20by\x20custom\x20instance\x20if\x20set\x20before\x20instance\x20created',
            'xkVPy': 'should\x20do\x20nothing\x20to\x20request\x20string',
            'CnKtb': 'should\x20use\x20header\x20config',
            'fugev': 'should\x20not\x20be\x20used\x20by\x20custom\x20instance\x20if\x20set\x20after\x20instance\x20created',
            'QlGRK': 'CUSTOM-XSRF-TOKEN'
        }, _0x239384 = _0x3af3f9['wtEMT']['split']('|'), _0x1e8cb6 = 0x0;
    while (!![]) {
        switch (_0x239384[_0x1e8cb6++]) {
        case '0':
            _0x3af3f9['jstIQ'](it, _0x3af3f9['TBsBl'], function () {
                _0x17de92['YkJfp'](expect, defaults['transformResponse'][0x0](_0x17de92['oqixm']))['toEqual'](_0x17de92['oqixm']);
            });
            continue;
        case '1':
            _0x3af3f9['jstIQ'](it, _0x3af3f9['NXUZR'], function (_0x16ff95) {
                axios['defaults']['baseURL'] = _0x17de92['vwVlX'], _0x17de92['YkJfp'](axios, _0x17de92['sZtvL']), _0x17de92['zMTuC'](getAjaxRequest)['then'](function (_0x510588) {
                    _0x17de92['YkJfp'](expect, _0x510588['url'])['toBe'](_0x17de92['gdzrn']), _0x17de92['zMTuC'](_0x16ff95);
                });
            });
            continue;
        case '2':
            _0x3af3f9['zYHCH'](it, _0x3af3f9['KWVqT'], function (_0x23d08b) {
                axios['defaults']['headers']['post'][_0x17de92['sNUjk']] = _0x17de92['qQbmo'], axios['post'](_0x17de92['sZtvL'], {}), _0x17de92['NyPes'](getAjaxRequest)['then'](function (_0x1e6ba0) {
                    _0x17de92['kGEol'](expect, _0x1e6ba0['requestHeaders'][_0x17de92['sNUjk']])['toBe'](_0x17de92['qQbmo']), _0x17de92['UICDv'](_0x23d08b);
                });
            });
            continue;
        case '3':
            _0x3af3f9['JGxeH'](it, _0x3af3f9['DSItH'], function () {
                var _0x112aaf = defaults['transformResponse'][0x0]['call'](defaults, _0x17de92['jBwAE']);
                _0x17de92['dGBME'](expect, typeof _0x112aaf)['toEqual'](_0x17de92['fDzvr']), _0x17de92['yYwKo'](expect, _0x112aaf['foo'])['toEqual'](_0x17de92['YTbxl']);
            });
            continue;
        case '4':
            _0x3af3f9['RTUPN'](afterEach, function () {
                var _0x53b58f = _0x17de92['aftKK']['split']('|'), _0x187d48 = 0x0;
                while (!![]) {
                    switch (_0x53b58f[_0x187d48++]) {
                    case '0':
                        document['cookie'] = _0x17de92['ROgtG'](_0x17de92['ROgtG'](_0x330c7d, _0x17de92['bfufg']), new Date(_0x17de92['BUCyl'](Date['now'](), 0x5265c00))['toGMTString']());
                        continue;
                    case '1':
                        jasmine['Ajax']['uninstall']();
                        continue;
                    case '2':
                        delete axios['defaults']['headers']['get'][_0x17de92['sNUjk']];
                        continue;
                    case '3':
                        delete axios['defaults']['baseURL'];
                        continue;
                    case '4':
                        delete axios['defaults']['headers']['post'][_0x17de92['sNUjk']];
                        continue;
                    }
                    break;
                }
            });
            continue;
        case '5':
            _0x3af3f9['vxqmB'](it, _0x3af3f9['cJQcA'], function () {
                _0x17de92['YQcTd'](expect, defaults['transformRequest'][0x0]({ 'foo': _0x17de92['YTbxl'] }))['toEqual'](_0x17de92['jBwAE']);
            });
            continue;
        case '6':
            _0x3af3f9['PuQTD'](it, _0x3af3f9['rgBqk'], function (_0x47d7f0) {
                var _0x5d5333 = {
                    'CuZMt': function (_0x3e2402, _0x74c99) {
                        return _0x17de92['EARHO'](_0x3e2402, _0x74c99);
                    },
                    'xFeax': _0x17de92['UNqGB'],
                    'GJUSr': function (_0x2a6493) {
                        return _0x17de92['zMTuC'](_0x2a6493);
                    }
                };
                _0x17de92['lDiQa'](axios, _0x17de92['sZtvL'], { 'baseURL': _0x17de92['UxCKY'] }), _0x17de92['zMTuC'](getAjaxRequest)['then'](function (_0x26f72b) {
                    _0x5d5333['CuZMt'](expect, _0x26f72b['url'])['toBe'](_0x5d5333['xFeax']), _0x5d5333['GJUSr'](_0x47d7f0);
                });
            });
            continue;
        case '7':
            _0x3af3f9['bSoij'](it, _0x3af3f9['opcgG'], function (_0x30522d) {
                var _0x1b929d = {
                    'ecuRy': function (_0x59a9fc, _0x3eb384) {
                        return _0x17de92['kGEol'](_0x59a9fc, _0x3eb384);
                    },
                    'jxdeD': _0x17de92['sNUjk'],
                    'PBQbp': _0x17de92['qQbmo'],
                    'AosRk': function (_0x4d3cd6) {
                        return _0x17de92['zMTuC'](_0x4d3cd6);
                    }
                };
                axios['defaults']['headers']['get'][_0x17de92['sNUjk']] = _0x17de92['qQbmo'], axios['get'](_0x17de92['sZtvL']), _0x17de92['zMTuC'](getAjaxRequest)['then'](function (_0x275dcd) {
                    _0x1b929d['ecuRy'](expect, _0x275dcd['requestHeaders'][_0x1b929d['jxdeD']])['toBe'](_0x1b929d['PBQbp']), _0x1b929d['AosRk'](_0x30522d);
                });
            });
            continue;
        case '8':
            _0x3af3f9['EEqzT'](beforeEach, function () {
                jasmine['Ajax']['install']();
            });
            continue;
        case '9':
            var _0x17de92 = {
                'aftKK': _0x3af3f9['UosVT'],
                'ROgtG': function (_0x2581bc, _0x16b7b6) {
                    return _0x3af3f9['EeZAF'](_0x2581bc, _0x16b7b6);
                },
                'bfufg': _0x3af3f9['eGGmi'],
                'BUCyl': function (_0x2b6f4c, _0x4fc410) {
                    return _0x3af3f9['okqcA'](_0x2b6f4c, _0x4fc410);
                },
                'sNUjk': _0x3af3f9['VtqVE'],
                'YQcTd': function (_0x1c3614, _0x9a3438) {
                    return _0x3af3f9['EEqzT'](_0x1c3614, _0x9a3438);
                },
                'YTbxl': _0x3af3f9['XoXOR'],
                'jBwAE': _0x3af3f9['mrPwb'],
                'dGBME': function (_0x1353f2, _0x5a0868) {
                    return _0x3af3f9['EEqzT'](_0x1353f2, _0x5a0868);
                },
                'oqixm': _0x3af3f9['cIsuC'],
                'fDzvr': _0x3af3f9['fmLCo'],
                'yYwKo': function (_0x225872, _0x39a08d) {
                    return _0x3af3f9['EEqzT'](_0x225872, _0x39a08d);
                },
                'YkJfp': function (_0x4bc019, _0x3c36de) {
                    return _0x3af3f9['EEqzT'](_0x4bc019, _0x3c36de);
                },
                'sZtvL': _0x3af3f9['yjesb'],
                'zMTuC': function (_0x3903cd) {
                    return _0x3af3f9['ASlzS'](_0x3903cd);
                },
                'gdzrn': _0x3af3f9['JCkgJ'],
                'vwVlX': _0x3af3f9['LSpbG'],
                'EARHO': function (_0x3f403d, _0x3417c1) {
                    return _0x3af3f9['ROJeB'](_0x3f403d, _0x3417c1);
                },
                'UNqGB': _0x3af3f9['ZoslO'],
                'lDiQa': function (_0x4d50f4, _0x1e1b4c, _0x34d86d) {
                    return _0x3af3f9['bSoij'](_0x4d50f4, _0x1e1b4c, _0x34d86d);
                },
                'UxCKY': _0x3af3f9['PYJoF'],
                'nDAQv': function (_0x53e432, _0x37aaf7) {
                    return _0x3af3f9['ROJeB'](_0x53e432, _0x37aaf7);
                },
                'isrIm': _0x3af3f9['jyEAO'],
                'Vteqh': _0x3af3f9['lOuan'],
                'AwqKz': function (_0x2f6e49, _0x1a530e) {
                    return _0x3af3f9['okVaU'](_0x2f6e49, _0x1a530e);
                },
                'BNMCy': _0x3af3f9['oHRYR'],
                'kGEol': function (_0x4d92d0, _0xf791e9) {
                    return _0x3af3f9['ROJeB'](_0x4d92d0, _0xf791e9);
                },
                'qQbmo': _0x3af3f9['YwEPw'],
                'UICDv': function (_0x228068) {
                    return _0x3af3f9['ASlzS'](_0x228068);
                },
                'NyPes': function (_0x5c2d8f) {
                    return _0x3af3f9['YPJre'](_0x5c2d8f);
                },
                'QzNOM': _0x3af3f9['Stvdv'],
                'Kqxkb': _0x3af3f9['EfhUG'],
                'nheHj': _0x3af3f9['fpXNa'],
                'DEVwW': _0x3af3f9['HVqMv'],
                'ijcOL': function (_0x17e3aa) {
                    return _0x3af3f9['AfmcG'](_0x17e3aa);
                },
                'exqtV': _0x3af3f9['TVddn'],
                'LLdzE': function (_0x262eef) {
                    return _0x3af3f9['AfmcG'](_0x262eef);
                },
                'NxLtc': function (_0x59c3d9, _0x297d16) {
                    return _0x3af3f9['NXIwX'](_0x59c3d9, _0x297d16);
                },
                'Lerra': _0x3af3f9['cNDNr'],
                'tefRQ': _0x3af3f9['RjmtL'],
                'lHqMh': function (_0x1d555f) {
                    return _0x3af3f9['iLETz'](_0x1d555f);
                },
                'fGEYH': _0x3af3f9['BifWL'],
                'ozIgo': function (_0x256b88) {
                    return _0x3af3f9['WFYKK'](_0x256b88);
                },
                'KcFkM': function (_0x324815, _0x5d3c08) {
                    return _0x3af3f9['NXIwX'](_0x324815, _0x5d3c08);
                }
            };
            continue;
        case '10':
            _0x3af3f9['zDfGJ'](it, _0x3af3f9['uRpFc'], function (_0x50e529) {
                var _0x5197cb = axios['create']({
                    'xsrfCookieName': _0x330c7d,
                    'xsrfHeaderName': _0x17de92['Vteqh']
                });
                document['cookie'] = _0x17de92['AwqKz'](_0x5197cb['defaults']['xsrfCookieName'], _0x17de92['BNMCy']), _0x5197cb['get'](_0x17de92['sZtvL']), _0x17de92['zMTuC'](getAjaxRequest)['then'](function (_0x436d3d) {
                    _0x17de92['nDAQv'](expect, _0x436d3d['requestHeaders'][_0x5197cb['defaults']['xsrfHeaderName']])['toEqual'](_0x17de92['isrIm']), _0x17de92['zMTuC'](_0x50e529);
                });
            });
            continue;
        case '11':
            _0x3af3f9['zDfGJ'](it, _0x3af3f9['fvWeQ'], function (_0x59b5e7) {
                _0x17de92['YkJfp'](axios, _0x17de92['sZtvL']), _0x17de92['zMTuC'](getAjaxRequest)['then'](function (_0x58b149) {
                    _0x17de92['YkJfp'](expect, _0x58b149['url'])['toBe'](_0x17de92['sZtvL']), _0x17de92['zMTuC'](_0x59b5e7);
                });
            });
            continue;
        case '12':
            _0x3af3f9['exRQo'](it, _0x3af3f9['WuZbC'], function (_0x24c00e) {
                axios['defaults']['baseURL'] = _0x17de92['tefRQ'];
                var _0x4dbd92 = axios['create']();
                _0x4dbd92['get'](_0x17de92['sZtvL']), _0x17de92['lHqMh'](getAjaxRequest)['then'](function (_0x53c1d5) {
                    _0x17de92['NxLtc'](expect, _0x53c1d5['url'])['toBe'](_0x17de92['Lerra']), _0x17de92['LLdzE'](_0x24c00e);
                });
            });
            continue;
        case '13':
            _0x3af3f9['exRQo'](it, _0x3af3f9['xkVPy'], function () {
                _0x17de92['dGBME'](expect, defaults['transformRequest'][0x0](_0x17de92['oqixm']))['toEqual'](_0x17de92['oqixm']);
            });
            continue;
        case '14':
            _0x3af3f9['exRQo'](it, _0x3af3f9['CnKtb'], function (_0x359524) {
                var _0x200e6e = axios['create']({
                    'headers': {
                        'common': { 'X-COMMON-HEADER': _0x17de92['QzNOM'] },
                        'get': { 'X-GET-HEADER': _0x17de92['Kqxkb'] },
                        'post': { 'X-POST-HEADER': _0x17de92['exqtV'] }
                    }
                });
                _0x200e6e['get'](_0x17de92['sZtvL'], {
                    'headers': {
                        'X-FOO-HEADER': _0x17de92['nheHj'],
                        'X-BAR-HEADER': _0x17de92['DEVwW']
                    }
                }), _0x17de92['LLdzE'](getAjaxRequest)['then'](function (_0x4476dd) {
                    _0x17de92['kGEol'](expect, _0x4476dd['requestHeaders'])['toEqual'](utils['merge'](defaults['headers']['common'], defaults['headers']['get'], {
                        'X-COMMON-HEADER': _0x17de92['QzNOM'],
                        'X-GET-HEADER': _0x17de92['Kqxkb'],
                        'X-FOO-HEADER': _0x17de92['nheHj'],
                        'X-BAR-HEADER': _0x17de92['DEVwW']
                    })), _0x17de92['ijcOL'](_0x359524);
                });
            });
            continue;
        case '15':
            _0x3af3f9['exRQo'](it, _0x3af3f9['fugev'], function (_0x1c7d4f) {
                var _0x180020 = _0x17de92['fGEYH']['split']('|'), _0x1a59fb = 0x0;
                while (!![]) {
                    switch (_0x180020[_0x1a59fb++]) {
                    case '0':
                        var _0x8fb806 = axios['create']();
                        continue;
                    case '1':
                        axios['defaults']['baseURL'] = _0x17de92['tefRQ'];
                        continue;
                    case '2':
                        _0x8fb806['get'](_0x17de92['sZtvL']);
                        continue;
                    case '3':
                        _0x17de92['ozIgo'](getAjaxRequest)['then'](function (_0x5005c3) {
                            _0x12c285['LgEDJ'](expect, _0x5005c3['url'])['toBe'](_0x12c285['AVEZQ']), _0x12c285['kHAeH'](_0x1c7d4f);
                        });
                        continue;
                    case '4':
                        var _0x12c285 = {
                            'LgEDJ': function (_0x5b9918, _0x3fa6c0) {
                                return _0x17de92['KcFkM'](_0x5b9918, _0x3fa6c0);
                            },
                            'AVEZQ': _0x17de92['sZtvL'],
                            'kHAeH': function (_0x3edffa) {
                                return _0x17de92['ozIgo'](_0x3edffa);
                            }
                        };
                        continue;
                    }
                    break;
                }
            });
            continue;
        case '16':
            var _0x330c7d = _0x3af3f9['QlGRK'];
            continue;
        }
        break;
    }
});
