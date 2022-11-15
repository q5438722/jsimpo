'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x4d0922) {
        var _0x944772 = {
            'ONE': 'one',
            'TWO': 'two',
            'MANY': 'many'
        };
        _0x4d0922['value']('$locale', {
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
                    'avant Jésus-Christ',
                    'après Jésus-Christ'
                ],
                'ERAS': [
                    'av. J.-C.',
                    'ap. J.-C.'
                ],
                'FIRSTDAYOFWEEK': 0,
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
                    5,
                    6
                ],
                'fullDate': 'EEEE d MMMM y',
                'longDate': 'd MMMM y',
                'medium': 'd MMM y HH:mm:ss',
                'mediumDate': 'd MMM y',
                'mediumTime': 'HH:mm:ss',
                'short': 'dd/MM/y HH:mm',
                'shortDate': 'dd/MM/y',
                'shortTime': 'HH:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'CFA',
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
            'id': 'fr-ci',
            'localeID': 'fr_CI',
            'pluralCat': function (_0x554682, _0x505a02) {
                var _0x56bb34 = _0x554682 | 0;
                if (_0x56bb34 == 0 || _0x56bb34 == 1) {
                    return _0x944772['ONE'];
                }
                return 'other';
            }
        });
    }
]);