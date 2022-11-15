'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x4c3bd3) {
        var _0x2bdc20 = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        function _0x518827(_0x42c823) {
            _0x42c823 = _0x42c823 + '';
            var _0x4aea39 = _0x42c823['indexOf']('.');
            return _0x4aea39 == -(-0x5d2 + -0xe85 + 0x1458) ? -0x1c41 + 0xe5d + 0xde4 : _0x42c823['length'] - _0x4aea39 - (-0xa3 * 0x7 + 0x1d * 0x61 + -0x687);
        }
        function _0x4b2a12(_0x55046f, _0x446899) {
            var _0x3bbdab = _0x446899;
            undefined === _0x3bbdab && (_0x3bbdab = Math['min'](_0x518827(_0x55046f), -0x359 * -0x9 + -0x253d + -0x1 * -0x71f));
            var _0x548bb5 = Math['pow'](0x6 * -0x27a + 0x26 * -0x1f + 0x68 * 0x30, _0x3bbdab), _0xc5673c = (_0x55046f * _0x548bb5 | -0x14e3 + -0x2271 + 0x3754) % _0x548bb5;
            return {
                'v': _0x3bbdab,
                'f': _0xc5673c
            };
        }
        _0x4c3bd3['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    'domenica',
                    'lunedì',
                    'martedì',
                    'mercoledì',
                    'giovedì',
                    'venerdì',
                    'sabato'
                ],
                'ERANAMES': [
                    'avanti\x20Cristo',
                    'dopo\x20Cristo'
                ],
                'ERAS': [
                    'a.C.',
                    'd.C.'
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    'gennaio',
                    'febbraio',
                    'marzo',
                    'aprile',
                    'maggio',
                    'giugno',
                    'luglio',
                    'agosto',
                    'settembre',
                    'ottobre',
                    'novembre',
                    'dicembre'
                ],
                'SHORTDAY': [
                    'dom',
                    'lun',
                    'mar',
                    'mer',
                    'gio',
                    'ven',
                    'sab'
                ],
                'SHORTMONTH': [
                    'gen',
                    'feb',
                    'mar',
                    'apr',
                    'mag',
                    'giu',
                    'lug',
                    'ago',
                    'set',
                    'ott',
                    'nov',
                    'dic'
                ],
                'STANDALONEMONTH': [
                    'gennaio',
                    'febbraio',
                    'marzo',
                    'aprile',
                    'maggio',
                    'giugno',
                    'luglio',
                    'agosto',
                    'settembre',
                    'ottobre',
                    'novembre',
                    'dicembre'
                ],
                'WEEKENDRANGE': [
                    -0x1380 + 0x1f7b * -0x1 + 0x100 * 0x33,
                    -0x1 * -0x1359 + 0x28 * -0x14 + -0x1033
                ],
                'fullDate': 'EEEE\x20d\x20MMMM\x20y',
                'longDate': 'd\x20MMMM\x20y',
                'medium': 'dd\x20MMM\x20y\x20HH:mm:ss',
                'mediumDate': 'dd\x20MMM\x20y',
                'mediumTime': 'HH:mm:ss',
                'short': 'dd/MM/yy\x20HH:mm',
                'shortDate': 'dd/MM/yy',
                'shortTime': 'HH:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '€',
                'DECIMAL_SEP': ',',
                'GROUP_SEP': '.',
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
                        'negPre': '-',
                        'negSuf': '\u00a0¤',
                        'posPre': '',
                        'posSuf': '\u00a0¤'
                    }
                ]
            },
            'id': 'it-it',
            'localeID': 'it_IT',
            'pluralCat': function (_0x79bd40, _0x5109f1) {
                var _0x21b00e = _0x79bd40 | 0x1052 + -0x15f7 * 0x1 + -0x55 * -0x11, _0x55c3dc = _0x4b2a12(_0x79bd40, _0x5109f1);
                if (_0x21b00e == -0x10f1 + -0x2 * 0x6c + 0xfd * 0x12 && _0x55c3dc['v'] == 0x1 * 0x73f + 0x845 + 0x52c * -0x3)
                    return _0x2bdc20['ONE'];
                return _0x2bdc20['OTHER'];
            }
        });
    }
]);
