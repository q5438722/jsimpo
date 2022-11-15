'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x2accde) {
        var _0x2d5773 = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        _0x2accde['value']('$locale', {
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
                'FIRSTDAYOFWEEK': 0x6,
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
                    0x1483 * -0x1 + -0x17 * 0x139 + 0x30a7,
                    -0x1 * -0x446 + 0x440 + -0x880
                ],
                'fullDate': 'y年M月d日EEEE',
                'longDate': 'y年M月d日',
                'medium': 'y年M月d日\x20ah:mm:ss',
                'mediumDate': 'y年M月d日',
                'mediumTime': 'ah:mm:ss',
                'short': 'd/M/y\x20ah:mm',
                'shortDate': 'd/M/y',
                'shortTime': 'ah:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '$',
                'DECIMAL_SEP': '.',
                'GROUP_SEP': ',',
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
                        'maxFrac': 0x2,
                        'minFrac': 0x2,
                        'minInt': 0x1,
                        'negPre': '-¤',
                        'negSuf': '',
                        'posPre': '¤',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'zh-hant-hk',
            'localeID': 'zh_Hant_HK',
            'pluralCat': function (_0x223a68, _0x2aee93) {
                return _0x2d5773['OTHER'];
            }
        });
    }
]);
