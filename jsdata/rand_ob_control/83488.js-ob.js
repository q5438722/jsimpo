'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x4570f7) {
        var _0x18d53e = {
                'AYJDg': function (_0x415799, _0x3b9eb8) {
                    return _0x415799 + _0x3b9eb8;
                },
                'nAeAK': function (_0x53e43d, _0x1ebe79) {
                    return _0x53e43d == _0x1ebe79;
                },
                'ZtIAs': function (_0x2874b6, _0x35a467) {
                    return _0x2874b6 - _0x35a467;
                },
                'ovUpN': '4|0|2|3|1',
                'vSDJJ': function (_0x25b54f, _0x335fd0) {
                    return _0x25b54f === _0x335fd0;
                },
                'KfScQ': function (_0x3ebfdf, _0x5e1855) {
                    return _0x3ebfdf(_0x5e1855);
                },
                'CfVbk': function (_0x570f26, _0x3ac993) {
                    return _0x570f26 % _0x3ac993;
                },
                'IvVzM': function (_0xe60003, _0x39260d) {
                    return _0xe60003 | _0x39260d;
                },
                'prEgM': function (_0x5be8df, _0x2fdaa2) {
                    return _0x5be8df * _0x2fdaa2;
                },
                'WZCSl': function (_0x4d8700, _0x8e2a78, _0x19adfd) {
                    return _0x4d8700(_0x8e2a78, _0x19adfd);
                },
                'ivznA': 'zero',
                'UFaBS': 'one',
                'OBbRY': 'two',
                'BbrxJ': 'few',
                'glBOT': 'many',
                'pCUMO': 'other',
                'ExhAn': '$locale',
                'KOsEw': 'DiDòmhnaich',
                'EpmWu': 'DiLuain',
                'MXpxN': 'DiMàirt',
                'cIGVk': 'DiCiadain',
                'CXqDs': 'DiarDaoin',
                'TYdIT': 'DihAoine',
                'EmSAe': 'DiSathairne',
                'zwdQm': 'Ro\x20Chrìosta',
                'UUiHo': 'An\x20dèidh\x20Chrìosta',
                'FadVN': 'dhen\x20Fhaoilleach',
                'HCVGI': 'dhen\x20Ghearran',
                'sOJyv': 'dhen\x20Mhàrt',
                'orRsa': 'dhen\x20Ghiblean',
                'lEQKW': 'dhen\x20Chèitean',
                'DaIuX': 'dhen\x20Ògmhios',
                'Zgzjt': 'dhen\x20Iuchar',
                'KLncH': 'dhen\x20Lùnastal',
                'PisQr': 'dhen\x20t-Sultain',
                'uJhBZ': 'dhen\x20Dàmhair',
                'jVaAz': 'dhen\x20t-Samhain',
                'LPLqc': 'dhen\x20Dùbhlachd',
                'cbAxz': 'DiD',
                'lvwLw': 'DiL',
                'UYXXD': 'DiM',
                'OmweH': 'DiC',
                'rDGpx': 'Dia',
                'NOycN': 'Dih',
                'YtXCy': 'DiS',
                'GILQv': 'Faoi',
                'ZaPdv': 'Gearr',
                'AVceD': 'Màrt',
                'WAatH': 'Gibl',
                'OUSde': 'Cèit',
                'rNNRB': 'Ògmh',
                'zxVEJ': 'Iuch',
                'qJVED': 'Lùna',
                'FrraZ': 'Sult',
                'NNTUT': 'Dàmh',
                'aaVDV': 'Samh',
                'pUnWz': 'Dùbh',
                'bIDcV': 'Am\x20Faoilleach',
                'nqyHG': 'An\x20Gearran',
                'RLLpe': 'Am\x20Màrt',
                'MqxzM': 'An\x20Giblean',
                'EyHgg': 'An\x20Cèitean',
                'YzlTX': 'An\x20t-Ògmhios',
                'flbHr': 'An\x20t-Iuchar',
                'fYEZy': 'An\x20Lùnastal',
                'LxXCY': 'An\x20t-Sultain',
                'KWFIX': 'An\x20Dàmhair',
                'hiBEd': 'An\x20t-Samhain',
                'ifCGN': 'An\x20Dùbhlachd',
                'yZMoW': 'EEEE,\x20d\x27mh\x27\x20MMMM\x20y',
                'arNlL': 'd\x27mh\x27\x20MMMM\x20y',
                'dAODe': 'd\x20MMM\x20y\x20HH:mm:ss',
                'jWaCJ': 'd\x20MMM\x20y',
                'hpdxe': 'HH:mm:ss',
                'Ihdsu': 'dd/MM/y\x20HH:mm',
                'zNKbU': 'dd/MM/y',
                'GgUzf': 'HH:mm'
            }, _0x5a4c96 = {
                'ZERO': _0x18d53e['ivznA'],
                'ONE': _0x18d53e['UFaBS'],
                'TWO': _0x18d53e['OBbRY'],
                'FEW': _0x18d53e['BbrxJ'],
                'MANY': _0x18d53e['glBOT'],
                'OTHER': _0x18d53e['pCUMO']
            };
        function _0x8e2020(_0x49ffdb) {
            _0x49ffdb = _0x18d53e['AYJDg'](_0x49ffdb, '');
            var _0x26ab40 = _0x49ffdb['indexOf']('.');
            return _0x18d53e['nAeAK'](_0x26ab40, -0x1) ? 0x0 : _0x18d53e['ZtIAs'](_0x18d53e['ZtIAs'](_0x49ffdb['length'], _0x26ab40), 0x1);
        }
        function _0x51075c(_0x4e47dd, _0x24f034) {
            var _0x39c0fb = _0x18d53e['ovUpN']['split']('|'), _0x441437 = 0x0;
            while (!![]) {
                switch (_0x39c0fb[_0x441437++]) {
                case '0':
                    _0x18d53e['vSDJJ'](undefined, _0x48934b) && (_0x48934b = Math['min'](_0x18d53e['KfScQ'](_0x8e2020, _0x4e47dd), 0x3));
                    continue;
                case '1':
                    return {
                        'v': _0x48934b,
                        'f': _0x53fb86
                    };
                case '2':
                    var _0x43a735 = Math['pow'](0xa, _0x48934b);
                    continue;
                case '3':
                    var _0x53fb86 = _0x18d53e['CfVbk'](_0x18d53e['IvVzM'](_0x18d53e['prEgM'](_0x4e47dd, _0x43a735), 0x0), _0x43a735);
                    continue;
                case '4':
                    var _0x48934b = _0x24f034;
                    continue;
                }
                break;
            }
        }
        _0x4570f7['value'](_0x18d53e['ExhAn'], {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'm',
                    'f'
                ],
                'DAY': [
                    _0x18d53e['KOsEw'],
                    _0x18d53e['EpmWu'],
                    _0x18d53e['MXpxN'],
                    _0x18d53e['cIGVk'],
                    _0x18d53e['CXqDs'],
                    _0x18d53e['TYdIT'],
                    _0x18d53e['EmSAe']
                ],
                'ERANAMES': [
                    _0x18d53e['zwdQm'],
                    _0x18d53e['UUiHo']
                ],
                'ERAS': [
                    'RC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    _0x18d53e['FadVN'],
                    _0x18d53e['HCVGI'],
                    _0x18d53e['sOJyv'],
                    _0x18d53e['orRsa'],
                    _0x18d53e['lEQKW'],
                    _0x18d53e['DaIuX'],
                    _0x18d53e['Zgzjt'],
                    _0x18d53e['KLncH'],
                    _0x18d53e['PisQr'],
                    _0x18d53e['uJhBZ'],
                    _0x18d53e['jVaAz'],
                    _0x18d53e['LPLqc']
                ],
                'SHORTDAY': [
                    _0x18d53e['cbAxz'],
                    _0x18d53e['lvwLw'],
                    _0x18d53e['UYXXD'],
                    _0x18d53e['OmweH'],
                    _0x18d53e['rDGpx'],
                    _0x18d53e['NOycN'],
                    _0x18d53e['YtXCy']
                ],
                'SHORTMONTH': [
                    _0x18d53e['GILQv'],
                    _0x18d53e['ZaPdv'],
                    _0x18d53e['AVceD'],
                    _0x18d53e['WAatH'],
                    _0x18d53e['OUSde'],
                    _0x18d53e['rNNRB'],
                    _0x18d53e['zxVEJ'],
                    _0x18d53e['qJVED'],
                    _0x18d53e['FrraZ'],
                    _0x18d53e['NNTUT'],
                    _0x18d53e['aaVDV'],
                    _0x18d53e['pUnWz']
                ],
                'STANDALONEMONTH': [
                    _0x18d53e['bIDcV'],
                    _0x18d53e['nqyHG'],
                    _0x18d53e['RLLpe'],
                    _0x18d53e['MqxzM'],
                    _0x18d53e['EyHgg'],
                    _0x18d53e['YzlTX'],
                    _0x18d53e['flbHr'],
                    _0x18d53e['fYEZy'],
                    _0x18d53e['LxXCY'],
                    _0x18d53e['KWFIX'],
                    _0x18d53e['hiBEd'],
                    _0x18d53e['ifCGN']
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x18d53e['yZMoW'],
                'longDate': _0x18d53e['arNlL'],
                'medium': _0x18d53e['dAODe'],
                'mediumDate': _0x18d53e['jWaCJ'],
                'mediumTime': _0x18d53e['hpdxe'],
                'short': _0x18d53e['Ihdsu'],
                'shortDate': _0x18d53e['zNKbU'],
                'shortTime': _0x18d53e['GgUzf']
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '£',
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
                        'negPre': '-¤',
                        'negSuf': '',
                        'posPre': '¤',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'gd',
            'localeID': 'gd',
            'pluralCat': function (_0xd97a93, _0x3b9a14) {
                var _0x3d933f = _0x18d53e['IvVzM'](_0xd97a93, 0x0), _0x2d3bb8 = _0x18d53e['WZCSl'](_0x51075c, _0xd97a93, _0x3b9a14);
                if (_0x18d53e['nAeAK'](_0x3d933f, 0x1) && _0x18d53e['nAeAK'](_0x2d3bb8['v'], 0x0))
                    return _0x5a4c96['ONE'];
                return _0x5a4c96['OTHER'];
            }
        });
    }
]);
