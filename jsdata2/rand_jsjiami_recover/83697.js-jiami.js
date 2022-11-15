'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x49be6d) {
        var _0x4c7789 = {
            'ONE': 'one',
            'FEW': 'few',
            'OTHER': 'other'
        };
        _0x49be6d['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'de.',
                    'du.'
                ],
                'DAY': [
                    'vasárnap',
                    'hétfő',
                    'kedd',
                    'szerda',
                    'csütörtök',
                    'péntek',
                    'szombat'
                ],
                'ERANAMES': [
                    'időszámításunk előtt',
                    'időszámításunk szerint'
                ],
                'ERAS': [
                    'i. e.',
                    'i. sz.'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'január',
                    'február',
                    'március',
                    'április',
                    'május',
                    'június',
                    'július',
                    'augusztus',
                    'szeptember',
                    'október',
                    'november',
                    'december'
                ],
                'SHORTDAY': [
                    'V',
                    'H',
                    'K',
                    'Sze',
                    'Cs',
                    'P',
                    'Szo'
                ],
                'SHORTMONTH': [
                    'jan.',
                    'febr.',
                    'márc.',
                    'ápr.',
                    'máj.',
                    'jún.',
                    'júl.',
                    'aug.',
                    'szept.',
                    'okt.',
                    'nov.',
                    'dec.'
                ],
                'STANDALONEMONTH': [
                    'január',
                    'február',
                    'március',
                    'április',
                    'május',
                    'június',
                    'július',
                    'augusztus',
                    'szeptember',
                    'október',
                    'november',
                    'december'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'y. MMMM d., EEEE',
                'longDate': 'y. MMMM d.',
                'medium': 'y. MMM d. H:mm:ss',
                'mediumDate': 'y. MMM d.',
                'mediumTime': 'H:mm:ss',
                'short': 'y. MM. dd. H:mm',
                'shortDate': 'y. MM. dd.',
                'shortTime': 'H:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Ft',
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
            'id': 'hu',
            'localeID': 'hu',
            'pluralCat': function (_0x5efe16, _0x29fdd4) {
                if (_0x5efe16 == 1) {
                    return _0x4c7789['ONE'];
                }
                return _0x4c7789['OTHER'];
            }
        });
    }
]);