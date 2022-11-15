'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x2f20c7) {
        var _0x3cbb42 = {
                'aFkuH': function (_0x3a01dc, _0x33468b) {
                    return _0x3a01dc + _0x33468b;
                },
                'PkiMp': function (_0x2b3a6d, _0x598b5b) {
                    return _0x2b3a6d == _0x598b5b;
                },
                'KyRcJ': function (_0xa396a8, _0x386a69) {
                    return _0xa396a8 - _0x386a69;
                },
                'lqGyx': function (_0x5c50e0, _0x222073) {
                    return _0x5c50e0 - _0x222073;
                },
                'KcuEN': '1|2|3|0|4',
                'idmaE': function (_0x5d2ed0, _0xe77db3) {
                    return _0x5d2ed0 % _0xe77db3;
                },
                'Iqyfg': function (_0xc8a920, _0x1884f0) {
                    return _0xc8a920 | _0x1884f0;
                },
                'bDoOE': function (_0x48133b, _0x47ff33) {
                    return _0x48133b * _0x47ff33;
                },
                'iHNYA': function (_0xbffd96, _0x190b49) {
                    return _0xbffd96 === _0x190b49;
                },
                'sdqNO': function (_0x55bf47, _0x4b95fe) {
                    return _0x55bf47(_0x4b95fe);
                },
                'EHiMa': function (_0x35b546, _0x3ee082) {
                    return _0x35b546 | _0x3ee082;
                },
                'zXBkH': function (_0xc6703a, _0x49f6d7, _0x4afa91) {
                    return _0xc6703a(_0x49f6d7, _0x4afa91);
                },
                'lSBdO': function (_0x1ff0a9, _0x385e94) {
                    return _0x1ff0a9 == _0x385e94;
                },
                'XWJEx': function (_0x1e555d, _0x3af8a9) {
                    return _0x1e555d == _0x3af8a9;
                },
                'ZfWYO': 'zero',
                'kOqgm': 'one',
                'DqhjO': 'two',
                'QtytI': 'few',
                'rXjYc': 'many',
                'UnOxI': 'other',
                'SxjIz': '$locale',
                'tfnRZ': 'Alahady',
                'QsJJo': 'Alatsinainy',
                'OBIJJ': 'Talata',
                'WNvIt': 'Alarobia',
                'mCDuZ': 'Alakamisy',
                'wRMED': 'Zoma',
                'tdbbN': 'Asabotsy',
                'GqsUR': 'Alohan’i\x20JK',
                'RncOB': 'Aorian’i\x20JK',
                'AFCAb': 'Janoary',
                'sJAgN': 'Febroary',
                'WOiWM': 'Martsa',
                'koVGH': 'Aprily',
                'fwjri': 'Mey',
                'RaryF': 'Jona',
                'BUKMp': 'Jolay',
                'mmpXi': 'Aogositra',
                'JdLMM': 'Septambra',
                'cUOPT': 'Oktobra',
                'pAIhl': 'Novambra',
                'eKoGx': 'Desambra',
                'GdfDl': 'Alah',
                'djddM': 'Alats',
                'tWXWO': 'Tal',
                'vPEDN': 'Alar',
                'SUkur': 'Alak',
                'aiCpI': 'Zom',
                'wgvvI': 'Asab',
                'qRFWc': 'Jan',
                'GBSQv': 'Feb',
                'Kxpze': 'Mar',
                'CaAHw': 'Apr',
                'oRcEc': 'Jon',
                'DUKil': 'Jol',
                'SdrnA': 'Aog',
                'qMXRV': 'Sep',
                'xNgke': 'Okt',
                'HTNNH': 'Nov',
                'aMBDA': 'Des',
                'Ljigx': 'EEEE\x20d\x20MMMM\x20y',
                'hIdtb': 'd\x20MMMM\x20y',
                'VRyFt': 'y\x20MMM\x20d\x20HH:mm:ss',
                'epZFB': 'y\x20MMM\x20d',
                'NSJgf': 'HH:mm:ss',
                'OugWF': 'y-MM-dd\x20HH:mm',
                'haKeX': 'y-MM-dd',
                'WAtqn': 'HH:mm',
                'tEDCU': '-¤\u00a0'
            }, _0x295f28 = {
                'ZERO': _0x3cbb42['ZfWYO'],
                'ONE': _0x3cbb42['kOqgm'],
                'TWO': _0x3cbb42['DqhjO'],
                'FEW': _0x3cbb42['QtytI'],
                'MANY': _0x3cbb42['rXjYc'],
                'OTHER': _0x3cbb42['UnOxI']
            };
        function _0x2c354d(_0x3959f7) {
            _0x3959f7 = _0x3cbb42['aFkuH'](_0x3959f7, '');
            var _0x48a24c = _0x3959f7['indexOf']('.');
            return _0x3cbb42['PkiMp'](_0x48a24c, -0x1) ? 0x0 : _0x3cbb42['KyRcJ'](_0x3cbb42['lqGyx'](_0x3959f7['length'], _0x48a24c), 0x1);
        }
        function _0x57e7a5(_0x230e12, _0x3ccd42) {
            var _0x552e97 = _0x3cbb42['KcuEN']['split']('|'), _0x1be94e = 0x0;
            while (!![]) {
                switch (_0x552e97[_0x1be94e++]) {
                case '0':
                    var _0x20291e = _0x3cbb42['idmaE'](_0x3cbb42['Iqyfg'](_0x3cbb42['bDoOE'](_0x230e12, _0x589899), 0x0), _0x589899);
                    continue;
                case '1':
                    var _0x2489b0 = _0x3ccd42;
                    continue;
                case '2':
                    _0x3cbb42['iHNYA'](undefined, _0x2489b0) && (_0x2489b0 = Math['min'](_0x3cbb42['sdqNO'](_0x2c354d, _0x230e12), 0x3));
                    continue;
                case '3':
                    var _0x589899 = Math['pow'](0xa, _0x2489b0);
                    continue;
                case '4':
                    return {
                        'v': _0x2489b0,
                        'f': _0x20291e
                    };
                }
                break;
            }
        }
        _0x2f20c7['value'](_0x3cbb42['SxjIz'], {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    _0x3cbb42['tfnRZ'],
                    _0x3cbb42['QsJJo'],
                    _0x3cbb42['OBIJJ'],
                    _0x3cbb42['WNvIt'],
                    _0x3cbb42['mCDuZ'],
                    _0x3cbb42['wRMED'],
                    _0x3cbb42['tdbbN']
                ],
                'ERANAMES': [
                    _0x3cbb42['GqsUR'],
                    _0x3cbb42['RncOB']
                ],
                'ERAS': [
                    'BC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    _0x3cbb42['AFCAb'],
                    _0x3cbb42['sJAgN'],
                    _0x3cbb42['WOiWM'],
                    _0x3cbb42['koVGH'],
                    _0x3cbb42['fwjri'],
                    _0x3cbb42['RaryF'],
                    _0x3cbb42['BUKMp'],
                    _0x3cbb42['mmpXi'],
                    _0x3cbb42['JdLMM'],
                    _0x3cbb42['cUOPT'],
                    _0x3cbb42['pAIhl'],
                    _0x3cbb42['eKoGx']
                ],
                'SHORTDAY': [
                    _0x3cbb42['GdfDl'],
                    _0x3cbb42['djddM'],
                    _0x3cbb42['tWXWO'],
                    _0x3cbb42['vPEDN'],
                    _0x3cbb42['SUkur'],
                    _0x3cbb42['aiCpI'],
                    _0x3cbb42['wgvvI']
                ],
                'SHORTMONTH': [
                    _0x3cbb42['qRFWc'],
                    _0x3cbb42['GBSQv'],
                    _0x3cbb42['Kxpze'],
                    _0x3cbb42['CaAHw'],
                    _0x3cbb42['fwjri'],
                    _0x3cbb42['oRcEc'],
                    _0x3cbb42['DUKil'],
                    _0x3cbb42['SdrnA'],
                    _0x3cbb42['qMXRV'],
                    _0x3cbb42['xNgke'],
                    _0x3cbb42['HTNNH'],
                    _0x3cbb42['aMBDA']
                ],
                'STANDALONEMONTH': [
                    _0x3cbb42['AFCAb'],
                    _0x3cbb42['sJAgN'],
                    _0x3cbb42['WOiWM'],
                    _0x3cbb42['koVGH'],
                    _0x3cbb42['fwjri'],
                    _0x3cbb42['RaryF'],
                    _0x3cbb42['BUKMp'],
                    _0x3cbb42['mmpXi'],
                    _0x3cbb42['JdLMM'],
                    _0x3cbb42['cUOPT'],
                    _0x3cbb42['pAIhl'],
                    _0x3cbb42['eKoGx']
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x3cbb42['Ljigx'],
                'longDate': _0x3cbb42['hIdtb'],
                'medium': _0x3cbb42['VRyFt'],
                'mediumDate': _0x3cbb42['epZFB'],
                'mediumTime': _0x3cbb42['NSJgf'],
                'short': _0x3cbb42['OugWF'],
                'shortDate': _0x3cbb42['haKeX'],
                'shortTime': _0x3cbb42['WAtqn']
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Ar',
                'DECIMAL_SEP': '.',
                'GROUP_SEP': ',',
                'PATTERNS': [
                    {
                        'gSize': 0x3,
                        'lgSize': 0x3,
                        'maxFrac': 0x3,
                        'minFrac': 0x0,
                        'minInt': 0x1,
                        'negPre': '-',
                        'negSuf': '',
                        'posPre': '',
                        'posSuf': ''
                    },
                    {
                        'gSize': 0x3,
                        'lgSize': 0x3,
                        'maxFrac': 0x2,
                        'minFrac': 0x2,
                        'minInt': 0x1,
                        'negPre': _0x3cbb42['tEDCU'],
                        'negSuf': '',
                        'posPre': '¤\u00a0',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'mg',
            'localeID': 'mg',
            'pluralCat': function (_0xdf66b4, _0x2d9dbd) {
                var _0x378459 = _0x3cbb42['EHiMa'](_0xdf66b4, 0x0), _0x2201aa = _0x3cbb42['zXBkH'](_0x57e7a5, _0xdf66b4, _0x2d9dbd);
                if (_0x3cbb42['lSBdO'](_0x378459, 0x1) && _0x3cbb42['XWJEx'](_0x2201aa['v'], 0x0))
                    return _0x295f28['ONE'];
                return _0x295f28['OTHER'];
            }
        });
    }
]);
