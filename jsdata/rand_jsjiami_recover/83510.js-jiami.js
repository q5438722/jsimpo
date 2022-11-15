'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0xb33646) {
        var _0x48d99e = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        _0xb33646['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'da manhã',
                    'da tarde'
                ],
                'DAY': [
                    'domingo',
                    'segunda-feira',
                    'terça-feira',
                    'quarta-feira',
                    'quinta-feira',
                    'sexta-feira',
                    'sábado'
                ],
                'ERANAMES': [
                    'antes de Cristo',
                    'depois de Cristo'
                ],
                'ERAS': [
                    'a.C.',
                    'd.C.'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'janeiro',
                    'fevereiro',
                    'março',
                    'abril',
                    'maio',
                    'junho',
                    'julho',
                    'agosto',
                    'setembro',
                    'outubro',
                    'novembro',
                    'dezembro'
                ],
                'SHORTDAY': [
                    'domingo',
                    'segunda',
                    'terça',
                    'quarta',
                    'quinta',
                    'sexta',
                    'sábado'
                ],
                'SHORTMONTH': [
                    'jan',
                    'fev',
                    'mar',
                    'abr',
                    'mai',
                    'jun',
                    'jul',
                    'ago',
                    'set',
                    'out',
                    'nov',
                    'dez'
                ],
                'STANDALONEMONTH': [
                    'janeiro',
                    'fevereiro',
                    'março',
                    'abril',
                    'maio',
                    'junho',
                    'julho',
                    'agosto',
                    'setembro',
                    'outubro',
                    'novembro',
                    'dezembro'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'EEEE, d \'de\' MMMM \'de\' y',
                'longDate': 'd \'de\' MMMM \'de\' y',
                'medium': 'dd/MM/y HH:mm:ss',
                'mediumDate': 'dd/MM/y',
                'mediumTime': 'HH:mm:ss',
                'short': 'dd/MM/yy HH:mm',
                'shortDate': 'dd/MM/yy',
                'shortTime': 'HH:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Db',
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
            'id': 'pt-st',
            'localeID': 'pt_ST',
            'pluralCat': function (_0xa895b6, _0x15566d) {
                var _0x51a9c1 = _0xa895b6 | 0;
                if (_0x51a9c1 >= 0 && _0x51a9c1 <= 1) {
                    return _0x48d99e['ONE'];
                }
                return _0x48d99e['OTHER'];
            }
        });
    }
]);