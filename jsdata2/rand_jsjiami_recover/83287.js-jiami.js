'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x5e04fd) {
        var _0x341d64 = {
            'ZERO': 'zero',
            'FEW': 'few',
            'MANY': 'many',
            'OTHER': 'other'
        };
        _0x5e04fd['value']('$locale', {
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
                    'ปีก่อน ค.ศ.',
                    'ค.ศ.'
                ],
                'FIRSTDAYOFWEEK': 6,
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
                    5,
                    6
                ],
                'fullDate': 'EEEEที่ d MMMM G y',
                'longDate': 'd MMMM G y',
                'medium': 'd MMM y HH:mm:ss',
                'mediumDate': 'd MMM y',
                'mediumTime': 'HH:mm:ss',
                'short': 'd/M/yy HH:mm',
                'shortDate': 'd/M/yy',
                'shortTime': 'HH:mm'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '\u0E3F',
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
            'id': 'th',
            'localeID': 'th',
            'pluralCat': function (_0x46bf0c, _0x3a26d8) {
                return _0x341d64['OTHER'];
            }
        });
    }
]);