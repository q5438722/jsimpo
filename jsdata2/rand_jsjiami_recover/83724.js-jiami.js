'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x32788b) {
        var _0x5dc63f = {
            'ONE': 'one',
            'TWO': 'two',
            'MANY': 'many'
        };
        _0x32788b['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    'អាទិត្យ',
                    'ច័ន្ទ',
                    'អង្គារ',
                    'ពុធ',
                    'ព្រហស្បតិ៍',
                    'សុក្រ',
                    'សៅរ៍'
                ],
                'ERANAMES': [
                    'មុន\u200Bគ្រិស្តសករាជ',
                    'គ្រិស្តសករាជ'
                ],
                'ERAS': [
                    'មុន គ.ស.',
                    'គ.ស.'
                ],
                'FIRSTDAYOFWEEK': 6,
                'MONTH': [
                    'មករា',
                    'កុម្ភៈ',
                    'មីនា',
                    'មេសា',
                    'ឧសភា',
                    'មិថុនា',
                    'កក្កដា',
                    'សីហា',
                    'កញ្ញា',
                    'តុលា',
                    'វិច្ឆិកា',
                    'ធ្នូ'
                ],
                'SHORTDAY': [
                    'អាទិត្យ',
                    'ច័ន្ទ',
                    'អង្គារ',
                    'ពុធ',
                    'ព្រហស្បតិ៍',
                    'សុក្រ',
                    'សៅរ៍'
                ],
                'SHORTMONTH': [
                    'មករា',
                    'កុម្ភៈ',
                    'មីនា',
                    'មេសា',
                    'ឧសភា',
                    'មិថុនា',
                    'កក្កដា',
                    'សីហា',
                    'កញ្ញា',
                    'តុលា',
                    'វិច្ឆិកា',
                    'ធ្នូ'
                ],
                'STANDALONEMONTH': [
                    'មករា',
                    'កុម្ភៈ',
                    'មីនា',
                    'មេសា',
                    'ឧសភា',
                    'មិថុនា',
                    'កក្កដា',
                    'សីហា',
                    'កញ្ញា',
                    'តុលា',
                    'វិច្ឆិកា',
                    'ធ្នូ'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'EEEE d MMMM y',
                'longDate': 'd MMMM y',
                'medium': 'd MMM y h:mm:ss a',
                'mediumDate': 'd MMM y',
                'mediumTime': 'h:mm:ss a',
                'short': 'd/M/yy h:mm a',
                'shortDate': 'd/M/yy',
                'shortTime': 'h:mm a'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Riel',
                'DECIMAL_SEP': ',',
                'GROUP_SEP': '.',
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
                        'negSuf': '\xA4',
                        'posPre': '',
                        'posSuf': '\xA4'
                    }
                ]
            },
            'id': 'km',
            'localeID': 'km',
            'pluralCat': function (_0x4c0a2f, _0x22865e) {
                return 'other';
            }
        });
    }
]);