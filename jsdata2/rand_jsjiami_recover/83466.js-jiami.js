'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x367890) {
        var _0x3486ef = {
            'ZERO': 'zero',
            'TWO': 'two',
            'MANY': 'many',
            'OTHER': 'other'
        };
        _0x367890['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'e paradites',
                    'e pasdites'
                ],
                'DAY': [
                    'e diel',
                    'e hënë',
                    'e martë',
                    'e mërkurë',
                    'e enjte',
                    'e premte',
                    'e shtunë'
                ],
                'ERANAMES': [
                    'para Krishtit',
                    'mbas Krishtit'
                ],
                'ERAS': [
                    'p.K.',
                    'mb.K.'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'janar',
                    'shkurt',
                    'mars',
                    'prill',
                    'maj',
                    'qershor',
                    'korrik',
                    'gusht',
                    'shtator',
                    'tetor',
                    'nëntor',
                    'dhjetor'
                ],
                'SHORTDAY': [
                    'Die',
                    'Hën',
                    'Mar',
                    'Mër',
                    'Enj',
                    'Pre',
                    'Sht'
                ],
                'SHORTMONTH': [
                    'jan',
                    'shk',
                    'mar',
                    'pri',
                    'maj',
                    'qer',
                    'kor',
                    'gsh',
                    'sht',
                    'tet',
                    'nën',
                    'dhj'
                ],
                'STANDALONEMONTH': [
                    'Janar',
                    'Shkurt',
                    'Mars',
                    'Prill',
                    'Maj',
                    'Qershor',
                    'Korrik',
                    'Gusht',
                    'Shtator',
                    'Tetor',
                    'Nëntor',
                    'Dhjetor'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'EEEE, d MMMM y',
                'longDate': 'd MMMM y',
                'medium': 'd MMM y h:mm:ss a',
                'mediumDate': 'd MMM y',
                'mediumTime': 'h:mm:ss a',
                'short': 'd.M.yy h:mm a',
                'shortDate': 'd.M.yy',
                'shortTime': 'h:mm a'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Lek',
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
            'id': 'sq-al',
            'localeID': 'sq_AL',
            'pluralCat': function (_0x17bebe, _0x1f9d64) {
                if (_0x17bebe == 1) {
                    return 'one';
                }
                return _0x3486ef['OTHER'];
            }
        });
    }
]);