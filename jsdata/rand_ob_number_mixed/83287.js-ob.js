'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x24c34e) {
        var _0x5e713d = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        _0x24c34e['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'ก่อนเที่ยง',
                    'หลังเที่ยง'
                ],
                'DAY': [
                    'วันอาทิตย์',
                    'วันจันทร์',
                    'วันอังคาร',
                    'วันพุธ',
                    'วันพฤหัสบดี',
                    'วันศุกร์',
                    'วันเสาร์'
                ],
                'ERANAMES': [
                    'ปีก่อนคริสต์ศักราช',
                    'คริสต์ศักราช'
                ],
                'ERAS': [
                    'ปีก่อน\x20ค.ศ.',
                    'ค.ศ.'
                ],
                'FIRSTDAYOFWEEK': 0x6,
                'MONTH': [
                    'มกราคม',
                    'กุมภาพันธ์',
                    'มีนาคม',
                    'เมษายน',
                    'พฤษภาคม',
                    'มิถุนายน',
                    'กรกฎาคม',
                    'สิงหาคม',
                    'กันยายน',
                    'ตุลาคม',
                    'พฤศจิกายน',
                    'ธันวาคม'
                ],
                'SHORTDAY': [
                    'อา.',
                    'จ.',
                    'อ.',
                    'พ.',
                    'พฤ.',
                    'ศ.',
                    'ส.'
                ],
                'SHORTMONTH': [
                    'ม.ค.',
                    'ก.พ.',
                    'มี.ค.',
                    'เม.ย.',
                    'พ.ค.',
                    'มิ.ย.',
                    'ก.ค.',
                    'ส.ค.',
                    'ก.ย.',
                    'ต.ค.',
                    'พ.ย.',
                    'ธ.ค.'
                ],
                'STANDALONEMONTH': [
                    'มกราคม',
                    'กุมภาพันธ์',
                    'มีนาคม',
                    'เมษายน',
                    'พฤษภาคม',
                    'มิถุนายน',
                    'กรกฎาคม',
                    'สิงหาคม',
                    'กันยายน',
                    'ตุลาคม',
                    'พฤศจิกายน',
                    'ธันวาคม'
                ],
                'WEEKENDRANGE': [
                    -0x158c + 0x1032 + 0x37 * 0x19,
                    0x1706 + 0x5d6 + -0x1 * 0x1cd6
                ],
                'fullDate': 'EEEEที่\x20d\x20MMMM\x20G\x20y',
                'longDate': 'd\x20MMMM\x20G\x20y',
                'medium': 'd\x20MMM\x20y\x20HH:mm:ss',
                'mediumDate': 'd\x20MMM\x20y',
                'mediumTime': 'HH:mm:ss',
                'short': 'd/M/yy\x20HH:mm',
                'shortDate': 'd/M/yy',
                'shortTime': 'HH:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '฿',
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
            'id': 'th',
            'localeID': 'th',
            'pluralCat': function (_0x1bcbdf, _0x2bdc1a) {
                return _0x5e713d['OTHER'];
            }
        });
    }
]);
