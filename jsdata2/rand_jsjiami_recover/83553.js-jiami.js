'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x2323bb) {
        var _0x209fae = {
            'ZERO': 'zero',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        _0x2323bb['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'a.m.',
                    'p.m.'
                ],
                'DAY': [
                    'Dé Domhnaigh',
                    'Dé Luain',
                    'Dé Máirt',
                    'Dé Céadaoin',
                    'Déardaoin',
                    'Dé hAoine',
                    'Dé Sathairn'
                ],
                'ERANAMES': [
                    'Roimh Chríost',
                    'Anno Domini'
                ],
                'ERAS': [
                    'RC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 6,
                'MONTH': [
                    'Eanáir',
                    'Feabhra',
                    'Márta',
                    'Aibreán',
                    'Bealtaine',
                    'Meitheamh',
                    'Iúil',
                    'Lúnasa',
                    'Meán Fómhair',
                    'Deireadh Fómhair',
                    'Samhain',
                    'Nollaig'
                ],
                'SHORTDAY': [
                    'Domh',
                    'Luan',
                    'Máirt',
                    'Céad',
                    'Déar',
                    'Aoine',
                    'Sath'
                ],
                'SHORTMONTH': [
                    'Ean',
                    'Feabh',
                    'Márta',
                    'Aib',
                    'Beal',
                    'Meith',
                    'Iúil',
                    'Lún',
                    'MFómh',
                    'DFómh',
                    'Samh',
                    'Noll'
                ],
                'STANDALONEMONTH': [
                    'Eanáir',
                    'Feabhra',
                    'Márta',
                    'Aibreán',
                    'Bealtaine',
                    'Meitheamh',
                    'Iúil',
                    'Lúnasa',
                    'Meán Fómhair',
                    'Deireadh Fómhair',
                    'Samhain',
                    'Nollaig'
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
                'CURRENCY_SYM': '\u20AC',
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
                        'negPre': '-\xA4',
                        'negSuf': '',
                        'posPre': '\xA4',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'ga-ie',
            'localeID': 'ga_IE',
            'pluralCat': function (_0x3ba747, _0x21a1eb) {
                if (_0x3ba747 == 1) {
                    return 'one';
                }
                if (_0x3ba747 == 2) {
                    return 'two';
                }
                if (_0x3ba747 >= 3 && _0x3ba747 <= 6) {
                    return _0x209fae['FEW'];
                }
                if (_0x3ba747 >= 7 && _0x3ba747 <= 10) {
                    return _0x209fae['MANY'];
                }
                return _0x209fae['OTHER'];
            }
        });
    }
]);