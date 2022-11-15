'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x3d5be3) {
        var _0x291448 = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        _0x3d5be3['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'da\x20manhã',
                    'da\x20tarde'
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
                    'antes\x20de\x20Cristo',
                    'depois\x20de\x20Cristo'
                ],
                'ERAS': [
                    'a.C.',
                    'd.C.'
                ],
                'FIRSTDAYOFWEEK': 0x0,
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
                    -0x78a + 0x7 * 0x387 + 0x1122 * -0x1,
                    0x1df + 0x1d * 0x1d + 0x291 * -0x2
                ],
                'fullDate': 'EEEE,\x20d\x20\x27de\x27\x20MMMM\x20\x27de\x27\x20y',
                'longDate': 'd\x20\x27de\x27\x20MMMM\x20\x27de\x27\x20y',
                'medium': 'dd/MM/y\x20HH:mm:ss',
                'mediumDate': 'dd/MM/y',
                'mediumTime': 'HH:mm:ss',
                'short': 'dd/MM/yy\x20HH:mm',
                'shortDate': 'dd/MM/yy',
                'shortTime': 'HH:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Db',
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
            'id': 'pt-st',
            'localeID': 'pt_ST',
            'pluralCat': function (_0x13ca19, _0x5756cf) {
                var _0x51902a = _0x13ca19 | -0x2 * -0xeae + -0x1c4d + 0x10f * -0x1;
                if (_0x51902a >= 0x112c + -0x11 * -0x1d5 + -0x3051 && _0x51902a <= 0xdeb + -0x1ee3 + 0x10f9)
                    return _0x291448['ONE'];
                return _0x291448['OTHER'];
            }
        });
    }
]);
