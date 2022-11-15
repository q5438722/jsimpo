'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x1d14ac) {
        var _0xa271fb = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'MANY': 'many'
        };
        function _0x266416(_0x24f12a) {
            if ('CMYfy' === 'gHnHr') {
                var _0x22ab12 = '3|4|2|1|0'['split']('|'), _0x3a4e5e = 0;
                while (!![]) {
                    switch (_0x22ab12[_0x3a4e5e++]) {
                    case '0':
                        return {
                            'v': _0x275943,
                            'f': _0x1606b7
                        };
                    case '1':
                        var _0x1606b7 = (_0x24f12a * _0x55918b | 0) % _0x55918b;
                        continue;
                    case '2':
                        var _0x55918b = Math['pow'](10, _0x275943);
                        continue;
                    case '3':
                        var _0x275943 = opt_precision;
                        continue;
                    case '4':
                        if (undefined === _0x275943) {
                            _0x275943 = Math['min'](_0x266416(_0x24f12a), 3);
                        }
                        continue;
                    }
                    break;
                }
            } else {
                _0x24f12a = _0x24f12a + '';
                var _0xe7e718 = _0x24f12a['indexOf']('.');
                return _0xe7e718 == -1 ? 0 : _0x24f12a['length'] - _0xe7e718 - 1;
            }
        }
        function _0x2be007(_0x564a16, _0x4242b5) {
            var _0x45880f = '4|1|0|3|2'['split']('|'), _0x5494ef = 0;
            while (!![]) {
                switch (_0x45880f[_0x5494ef++]) {
                case '0':
                    var _0x48187a = Math['pow'](10, _0x2dbd47);
                    continue;
                case '1':
                    if (undefined === _0x2dbd47) {
                        _0x2dbd47 = Math['min'](_0x266416(_0x564a16), 3);
                    }
                    continue;
                case '2':
                    return {
                        'v': _0x2dbd47,
                        'f': _0x528ba9
                    };
                case '3':
                    var _0x528ba9 = (_0x564a16 * _0x48187a | 0) % _0x48187a;
                    continue;
                case '4':
                    var _0x2dbd47 = _0x4242b5;
                    continue;
                }
                break;
            }
        }
        _0x1d14ac['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'kíkíríg',
                    'ngəgógəle'
                ],
                'DAY': [
                    'sɔ́ndɔ',
                    'mɔ́ndi',
                    'sɔ́ndɔ məlú mə́bɛ̌',
                    'sɔ́ndɔ məlú mə́lɛ́',
                    'sɔ́ndɔ məlú mə́nyi',
                    'fúladé',
                    'séradé'
                ],
                'ERANAMES': [
                    'osúsúa Yésus kiri',
                    'ámvus Yésus Kirís'
                ],
                'ERAS': [
                    'oyk',
                    'ayk'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'ngɔn osú',
                    'ngɔn bɛ̌',
                    'ngɔn lála',
                    'ngɔn nyina',
                    'ngɔn tána',
                    'ngɔn saməna',
                    'ngɔn zamgbála',
                    'ngɔn mwom',
                    'ngɔn ebulú',
                    'ngɔn awóm',
                    'ngɔn awóm ai dziá',
                    'ngɔn awóm ai bɛ̌'
                ],
                'SHORTDAY': [
                    'sɔ́n',
                    'mɔ́n',
                    'smb',
                    'sml',
                    'smn',
                    'fúl',
                    'sér'
                ],
                'SHORTMONTH': [
                    'ngo',
                    'ngb',
                    'ngl',
                    'ngn',
                    'ngt',
                    'ngs',
                    'ngz',
                    'ngm',
                    'nge',
                    'nga',
                    'ngad',
                    'ngab'
                ],
                'STANDALONEMONTH': [
                    'ngɔn osú',
                    'ngɔn bɛ̌',
                    'ngɔn lála',
                    'ngɔn nyina',
                    'ngɔn tána',
                    'ngɔn saməna',
                    'ngɔn zamgbála',
                    'ngɔn mwom',
                    'ngɔn ebulú',
                    'ngɔn awóm',
                    'ngɔn awóm ai dziá',
                    'ngɔn awóm ai bɛ̌'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'EEEE d MMMM y',
                'longDate': 'd MMMM y',
                'medium': 'd MMM y HH:mm:ss',
                'mediumDate': 'd MMM y',
                'mediumTime': 'HH:mm:ss',
                'short': 'd/M/y HH:mm',
                'shortDate': 'd/M/y',
                'shortTime': 'HH:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'FCFA',
                'DECIMAL_SEP': ',',
                'GROUP_SEP': '\xA0',
                'PATTERNS': [
                    {
                        'gSize': 3,
                        'lgSize': 3,
                        'maxFrac': 3,
                        'minFrac': 0,
                        'minInt': 1,
                        'negPre': '-',
                        'negSuf': '',
                        'posPre': '',
                        'posSuf': ''
                    },
                    {
                        'gSize': 3,
                        'lgSize': 3,
                        'maxFrac': 0,
                        'minFrac': 0,
                        'minInt': 1,
                        'negPre': '-',
                        'negSuf': '\xA0\xA4',
                        'posPre': '',
                        'posSuf': '\xA0\xA4'
                    }
                ]
            },
            'id': 'ewo-cm',
            'localeID': 'ewo_CM',
            'pluralCat': function (_0x1803e1, _0x33c3f7) {
                var _0x210388 = _0x1803e1 | 0;
                var _0x488d2e = _0x2be007(_0x1803e1, _0x33c3f7);
                if (_0x210388 == 1 && _0x488d2e['v'] == 0) {
                    if ('YImTD' === 'YImTD') {
                        return _0xa271fb['ONE'];
                    } else {
                        _0x1803e1 = _0x1803e1 + '';
                        var _0x15ee68 = _0x1803e1['indexOf']('.');
                        return _0x15ee68 == -1 ? 0 : _0x294526['CBNlr'](_0x1803e1['length'], _0x15ee68) - 1;
                    }
                }
                return 'other';
            }
        });
    }
]);