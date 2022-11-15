'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x2e083a) {
        var _0x5353ae = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        function _0x2c1709(_0x5a80ec) {
            _0x5a80ec = _0x5a80ec + '';
            var _0x5948c7 = _0x5a80ec['indexOf']('.');
            return _0x5948c7 == -(0x1d * 0x8b + 0x23a2 * 0x1 + -0x3360) ? -0x2 * -0x286 + -0x2630 + 0x2124 : _0x5a80ec['length'] - _0x5948c7 - (-0x17c8 + -0x621 + -0xef5 * -0x2);
        }
        function _0x49dd15(_0xce0a8b, _0xe4dabe) {
            var _0x1db71a = _0xe4dabe;
            undefined === _0x1db71a && (_0x1db71a = Math['min'](_0x2c1709(_0xce0a8b), -0x17 * -0xa7 + 0xb * -0x367 + -0x166f * -0x1));
            var _0x38020d = Math['pow'](-0x8ce + -0xeb9 + 0x1791, _0x1db71a), _0x202eb0 = (_0xce0a8b * _0x38020d | 0x1c4b * -0x1 + -0x1ac2 + 0x370d * 0x1) % _0x38020d;
            return {
                'v': _0x1db71a,
                'f': _0x202eb0
            };
        }
        _0x2e083a['value']('$locale', {
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
                    'Alohan’i\x20JK',
                    'Aorian’i\x20JK'
                ],
                'ERAS': [
                    'BC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0x0,
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
                    -0x576 + 0x2034 + 0x1 * -0x1ab9,
                    0x1fcd + 0x20f4 + -0x40bb
                ],
                'fullDate': 'EEEE\x20d\x20MMMM\x20y',
                'longDate': 'd\x20MMMM\x20y',
                'medium': 'y\x20MMM\x20d\x20HH:mm:ss',
                'mediumDate': 'y\x20MMM\x20d',
                'mediumTime': 'HH:mm:ss',
                'short': 'y-MM-dd\x20HH:mm',
                'shortDate': 'y-MM-dd',
                'shortTime': 'HH:mm'
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
                        'negPre': '-¤\u00a0',
                        'negSuf': '',
                        'posPre': '¤\u00a0',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'mg',
            'localeID': 'mg',
            'pluralCat': function (_0x19a111, _0x5dab0d) {
                var _0x301e29 = _0x19a111 | -0x2bc * -0x4 + -0xc66 + 0x176, _0x59e107 = _0x49dd15(_0x19a111, _0x5dab0d);
                if (_0x301e29 == 0x1 * 0xffb + 0x1 * 0x2126 + 0x189 * -0x20 && _0x59e107['v'] == 0x1fa0 + 0x54d + -0x24ed)
                    return _0x5353ae['ONE'];
                return _0x5353ae['OTHER'];
            }
        });
    }
]);
