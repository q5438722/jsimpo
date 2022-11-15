'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x341b25) {
        var _0x58a0a9 = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        _0x341b25['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    '上午',
                    '下午'
                ],
                'DAY': [
                    '星期日',
                    '星期一',
                    '星期二',
                    '星期三',
                    '星期四',
                    '星期五',
                    '星期六'
                ],
                'ERANAMES': [
                    '公元前',
                    '公元'
                ],
                'ERAS': [
                    '公元前',
                    '公元'
                ],
                'FIRSTDAYOFWEEK': 6,
                'MONTH': [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    '12月'
                ],
                'SHORTDAY': [
                    '週日',
                    '週一',
                    '週二',
                    '週三',
                    '週四',
                    '週五',
                    '週六'
                ],
                'SHORTMONTH': [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    '12月'
                ],
                'STANDALONEMONTH': [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    '12月'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'y年M月d日EEEE',
                'longDate': 'y年M月d日',
                'medium': 'y年M月d日 ah:mm:ss',
                'mediumDate': 'y年M月d日',
                'mediumTime': 'ah:mm:ss',
                'short': 'd/M/y ah:mm',
                'shortDate': 'd/M/y',
                'shortTime': 'ah:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '$',
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
            'id': 'zh-hant-hk',
            'localeID': 'zh_Hant_HK',
            'pluralCat': function (_0x1f6e40, _0x11fef3) {
                return _0x58a0a9['OTHER'];
            }
        });
    }
]);