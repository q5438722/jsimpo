'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x2698c6) {
        var _0x50a550 = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        function _0x8e2ec1(_0x10f0cb) {
            _0x10f0cb = _0x10f0cb + '';
            var _0x4008d8 = _0x10f0cb['indexOf']('.');
            return _0x4008d8 == -(-0x2 * -0x74b + -0x1 * 0x1237 + 0x3a2) ? -0x1648 + 0x4 * -0x1d2 + -0x58 * -0x56 : _0x10f0cb['length'] - _0x4008d8 - (-0x53 * 0x67 + -0x352 * 0xa + 0x429a);
        }
        function _0xbed201(_0x4f80b7, _0x1ca2c5) {
            var _0x11b677 = _0x1ca2c5;
            undefined === _0x11b677 && (_0x11b677 = Math['min'](_0x8e2ec1(_0x4f80b7), 0x5e3 * 0x4 + 0x1 * -0x1fc1 + 0x838));
            var _0x47cfcf = Math['pow'](-0x2230 + -0x2628 + 0x4862, _0x11b677), _0x5f008b = (_0x4f80b7 * _0x47cfcf | -0xc69 * -0x2 + 0x7 * 0x1f6 + -0x268c) % _0x47cfcf;
            return {
                'v': _0x11b677,
                'f': _0x5f008b
            };
        }
        _0x2698c6['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'm',
                    'f'
                ],
                'DAY': [
                    'DiDòmhnaich',
                    'DiLuain',
                    'DiMàirt',
                    'DiCiadain',
                    'DiarDaoin',
                    'DihAoine',
                    'DiSathairne'
                ],
                'ERANAMES': [
                    'Ro\x20Chrìosta',
                    'An\x20dèidh\x20Chrìosta'
                ],
                'ERAS': [
                    'RC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    'dhen\x20Fhaoilleach',
                    'dhen\x20Ghearran',
                    'dhen\x20Mhàrt',
                    'dhen\x20Ghiblean',
                    'dhen\x20Chèitean',
                    'dhen\x20Ògmhios',
                    'dhen\x20Iuchar',
                    'dhen\x20Lùnastal',
                    'dhen\x20t-Sultain',
                    'dhen\x20Dàmhair',
                    'dhen\x20t-Samhain',
                    'dhen\x20Dùbhlachd'
                ],
                'SHORTDAY': [
                    'DiD',
                    'DiL',
                    'DiM',
                    'DiC',
                    'Dia',
                    'Dih',
                    'DiS'
                ],
                'SHORTMONTH': [
                    'Faoi',
                    'Gearr',
                    'Màrt',
                    'Gibl',
                    'Cèit',
                    'Ògmh',
                    'Iuch',
                    'Lùna',
                    'Sult',
                    'Dàmh',
                    'Samh',
                    'Dùbh'
                ],
                'STANDALONEMONTH': [
                    'Am\x20Faoilleach',
                    'An\x20Gearran',
                    'Am\x20Màrt',
                    'An\x20Giblean',
                    'An\x20Cèitean',
                    'An\x20t-Ògmhios',
                    'An\x20t-Iuchar',
                    'An\x20Lùnastal',
                    'An\x20t-Sultain',
                    'An\x20Dàmhair',
                    'An\x20t-Samhain',
                    'An\x20Dùbhlachd'
                ],
                'WEEKENDRANGE': [
                    -0x47 * -0xf + 0x1 * -0xb4e + -0x83 * -0xe,
                    0xfe6 + 0x16e0 + -0x26c0
                ],
                'fullDate': 'EEEE,\x20d\x27mh\x27\x20MMMM\x20y',
                'longDate': 'd\x27mh\x27\x20MMMM\x20y',
                'medium': 'd\x20MMM\x20y\x20HH:mm:ss',
                'mediumDate': 'd\x20MMM\x20y',
                'mediumTime': 'HH:mm:ss',
                'short': 'dd/MM/y\x20HH:mm',
                'shortDate': 'dd/MM/y',
                'shortTime': 'HH:mm'
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
            'pluralCat': function (_0x277dca, _0x2d47dc) {
                var _0x4eacdd = _0x277dca | 0x3 * -0x5 + 0x7 * -0x391 + 0x1906, _0x5e0b2d = _0xbed201(_0x277dca, _0x2d47dc);
                if (_0x4eacdd == -0x2227 + 0x3 * -0xaa5 + -0x4217 * -0x1 && _0x5e0b2d['v'] == 0x1a13 + -0x47f * -0x1 + 0x45e * -0x7)
                    return _0x50a550['ONE'];
                return _0x50a550['OTHER'];
            }
        });
    }
]);
