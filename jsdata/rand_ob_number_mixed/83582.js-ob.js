'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x43d772) {
        var _0x5ca395 = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        _0x43d772['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    'dimanche',
                    'lundi',
                    'mardi',
                    'mercredi',
                    'jeudi',
                    'vendredi',
                    'samedi'
                ],
                'ERANAMES': [
                    'avant\x20Jésus-Christ',
                    'après\x20Jésus-Christ'
                ],
                'ERAS': [
                    'av.\x20J.-C.',
                    'ap.\x20J.-C.'
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    'janvier',
                    'février',
                    'mars',
                    'avril',
                    'mai',
                    'juin',
                    'juillet',
                    'août',
                    'septembre',
                    'octobre',
                    'novembre',
                    'décembre'
                ],
                'SHORTDAY': [
                    'dim.',
                    'lun.',
                    'mar.',
                    'mer.',
                    'jeu.',
                    'ven.',
                    'sam.'
                ],
                'SHORTMONTH': [
                    'janv.',
                    'févr.',
                    'mars',
                    'avr.',
                    'mai',
                    'juin',
                    'juil.',
                    'août',
                    'sept.',
                    'oct.',
                    'nov.',
                    'déc.'
                ],
                'STANDALONEMONTH': [
                    'janvier',
                    'février',
                    'mars',
                    'avril',
                    'mai',
                    'juin',
                    'juillet',
                    'août',
                    'septembre',
                    'octobre',
                    'novembre',
                    'décembre'
                ],
                'WEEKENDRANGE': [
                    -0x140b + -0x1348 + 0x2 * 0x13ac,
                    0x5d * -0x37 + 0x8bf + 0xb42
                ],
                'fullDate': 'EEEE\x20d\x20MMMM\x20y',
                'longDate': 'd\x20MMMM\x20y',
                'medium': 'd\x20MMM\x20y\x20HH:mm:ss',
                'mediumDate': 'd\x20MMM\x20y',
                'mediumTime': 'HH:mm:ss',
                'short': 'dd/MM/y\x20HH:mm',
                'shortDate': 'dd/MM/y',
                'shortTime': 'HH:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'CFA',
                'DECIMAL_SEP': ',',
                'GROUP_SEP': '\u00a0',
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
                        'maxFrac': 0x0,
                        'minFrac': 0x0,
                        'minInt': 0x1,
                        'negPre': '-',
                        'negSuf': '\u00a0¤',
                        'posPre': '',
                        'posSuf': '\u00a0¤'
                    }
                ]
            },
            'id': 'fr-ci',
            'localeID': 'fr_CI',
            'pluralCat': function (_0x463f8d, _0x1e02a4) {
                var _0x1f4b70 = _0x463f8d | -0x1a1a * 0x1 + -0x191 * 0x1 + 0x1bab;
                if (_0x1f4b70 == -0xa * 0x251 + -0x1b4d + 0x3277 || _0x1f4b70 == 0x19 * 0xc8 + 0xea0 + 0x4e1 * -0x7)
                    return _0x5ca395['ONE'];
                return _0x5ca395['OTHER'];
            }
        });
    }
]);
