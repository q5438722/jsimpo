'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x104b2f) {
        var _0x18a1c8 = {
            'ZERO': 'zero',
            'OTHER': 'other'
        };
        _0x104b2f['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'a.m.',
                    'p.m.'
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
                    'avant Jésus-Christ',
                    'après Jésus-Christ'
                ],
                'ERAS': [
                    'av. J.-C.',
                    'ap. J.-C.'
                ],
                'FIRSTDAYOFWEEK': 6,
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
                    'juill.',
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
                    5,
                    6
                ],
                'fullDate': 'EEEE d MMMM y',
                'longDate': 'd MMMM y',
                'medium': 'd MMM y HH:mm:ss',
                'mediumDate': 'd MMM y',
                'mediumTime': 'HH:mm:ss',
                'short': 'yy-MM-dd HH \'h\' mm',
                'shortDate': 'yy-MM-dd',
                'shortTime': 'HH \'h\' mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '$',
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
                        'maxFrac': 2,
                        'minFrac': 2,
                        'minInt': 1,
                        'negPre': '-',
                        'negSuf': '\xA0\xA4',
                        'posPre': '',
                        'posSuf': '\xA0\xA4'
                    }
                ]
            },
            'id': 'fr-ca',
            'localeID': 'fr_CA',
            'pluralCat': function (_0x3b6bc4, _0x11f219) {
                var _0x3ae00d = _0x3b6bc4 | 0;
                if (_0x3ae00d == 0 || _0x3ae00d == 1) {
                    return 'one';
                }
                return _0x18a1c8['OTHER'];
            }
        });
    }
]);