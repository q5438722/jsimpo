'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x37b2aa) {
        var _0x4fed3c = {
            'ZERO': 'zero',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many'
        };
        function _0x1a4404(_0x3ed81a) {
            _0x3ed81a = _0x3ed81a + '';
            var _0x10b50c = _0x3ed81a['indexOf']('.');
            return _0x10b50c == -1 ? 0 : _0x3ed81a['length'] - _0x10b50c - 1;
        }
        function _0x14c85f(_0x533a98, _0x17d764) {
            var _0x47ea41 = _0x17d764;
            if (undefined === _0x47ea41) {
                _0x47ea41 = Math['min'](_0x1a4404(_0x533a98), 3);
            }
            var _0x19ff03 = Math['pow'](10, _0x47ea41);
            var _0x2824f3 = (_0x533a98 * _0x19ff03 | 0) % _0x19ff03;
            return {
                'v': _0x47ea41,
                'f': _0x2824f3
            };
        }
        _0x37b2aa['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    'Alahady',
                    'Alatsinainy',
                    'Talata',
                    'Alarobia',
                    'Alakamisy',
                    'Zoma',
                    'Asabotsy'
                ],
                'ERANAMES': [
                    'Alohan\u2019i JK',
                    'Aorian\u2019i JK'
                ],
                'ERAS': [
                    'BC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'Janoary',
                    'Febroary',
                    'Martsa',
                    'Aprily',
                    'Mey',
                    'Jona',
                    'Jolay',
                    'Aogositra',
                    'Septambra',
                    'Oktobra',
                    'Novambra',
                    'Desambra'
                ],
                'SHORTDAY': [
                    'Alah',
                    'Alats',
                    'Tal',
                    'Alar',
                    'Alak',
                    'Zom',
                    'Asab'
                ],
                'SHORTMONTH': [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'Mey',
                    'Jon',
                    'Jol',
                    'Aog',
                    'Sep',
                    'Okt',
                    'Nov',
                    'Des'
                ],
                'STANDALONEMONTH': [
                    'Janoary',
                    'Febroary',
                    'Martsa',
                    'Aprily',
                    'Mey',
                    'Jona',
                    'Jolay',
                    'Aogositra',
                    'Septambra',
                    'Oktobra',
                    'Novambra',
                    'Desambra'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'EEEE d MMMM y',
                'longDate': 'd MMMM y',
                'medium': 'y MMM d HH:mm:ss',
                'mediumDate': 'y MMM d',
                'mediumTime': 'HH:mm:ss',
                'short': 'y-MM-dd HH:mm',
                'shortDate': 'y-MM-dd',
                'shortTime': 'HH:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Ar',
                'DECIMAL_SEP': '.',
                'GROUP_SEP': ',',
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
                        'maxFrac': 2,
                        'minFrac': 2,
                        'minInt': 1,
                        'negPre': '-\xA4\xA0',
                        'negSuf': '',
                        'posPre': '\xA4\xA0',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'mg',
            'localeID': 'mg',
            'pluralCat': function (_0x5364b4, _0x55b968) {
                var _0x1acf92 = _0x5364b4 | 0;
                var _0x3ee6a7 = _0x14c85f(_0x5364b4, _0x55b968);
                if (_0x1acf92 == 1 && _0x3ee6a7['v'] == 0) {
                    return 'one';
                }
                return 'other';
            }
        });
    }
]);