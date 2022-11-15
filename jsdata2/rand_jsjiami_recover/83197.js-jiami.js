'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x28e45a) {
        var _0x333a04 = {
            'ZERO': 'zero',
            'ONE': 'one',
            'OTHER': 'other'
        };
        function _0x403e70(_0x3b0215) {
            _0x3b0215 = _0x3b0215 + '';
            var _0x223f63 = _0x3b0215['indexOf']('.');
            return _0x223f63 == -1 ? 0 : _0x3b0215['length'] - _0x223f63 - 1;
        }
        function _0x292d78(_0x1713c1, _0x4da303) {
            if ('RCrcM' !== 'RCrcM') {
                var _0x331718 = _0x4da303;
                if (undefined === _0x331718) {
                    _0x331718 = Math['min'](_0x403e70(_0x1713c1), 3);
                }
                var _0x188f52 = Math['pow'](10, _0x331718);
                var _0x2d577a = (_0x1713c1 * _0x188f52 | 0) % _0x188f52;
                return {
                    'v': _0x331718,
                    'f': _0x2d577a
                };
            } else {
                var _0x357f8e = '4|2|0|1|3'['split']('|'), _0x3f8e7d = 0;
                while (!![]) {
                    switch (_0x357f8e[_0x3f8e7d++]) {
                    case '0':
                        var _0x2c2d5c = Math['pow'](10, _0x3b4a12);
                        continue;
                    case '1':
                        var _0x17a2bc = (_0x1713c1 * _0x2c2d5c | 0) % _0x2c2d5c;
                        continue;
                    case '2':
                        if (undefined === _0x3b4a12) {
                            _0x3b4a12 = Math['min'](_0x403e70(_0x1713c1), 3);
                        }
                        continue;
                    case '3':
                        return {
                            'v': _0x3b4a12,
                            'f': _0x17a2bc
                        };
                    case '4':
                        var _0x3b4a12 = _0x4da303;
                        continue;
                    }
                    break;
                }
            }
        }
        _0x28e45a['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    'اَتھوار',
                    'ژٔنٛدرٕروار',
                    'بوٚموار',
                    'بودوار',
                    'برٛٮ۪سوار',
                    'جُمہ',
                    'بٹوار'
                ],
                'ERANAMES': [
                    'قبٕل مسیٖح',
                    'عیٖسوی سنہٕ'
                ],
                'ERAS': [
                    'بی سی',
                    'اے ڈی'
                ],
                'FIRSTDAYOFWEEK': 6,
                'MONTH': [
                    'جنؤری',
                    'فرؤری',
                    'مارٕچ',
                    'اپریل',
                    'میٔ',
                    'جوٗن',
                    'جوٗلایی',
                    'اگست',
                    'ستمبر',
                    'اکتوٗبر',
                    'نومبر',
                    'دسمبر'
                ],
                'SHORTDAY': [
                    'آتھوار',
                    'ژٔنٛدٕروار',
                    'بوٚموار',
                    'بودوار',
                    'برٛٮ۪سوار',
                    'جُمہ',
                    'بٹوار'
                ],
                'SHORTMONTH': [
                    'جنؤری',
                    'فرؤری',
                    'مارٕچ',
                    'اپریل',
                    'میٔ',
                    'جوٗن',
                    'جوٗلایی',
                    'اگست',
                    'ستمبر',
                    'اکتوٗبر',
                    'نومبر',
                    'دسمبر'
                ],
                'STANDALONEMONTH': [
                    'جنؤری',
                    'فرؤری',
                    'مارٕچ',
                    'اپریل',
                    'میٔ',
                    'جوٗن',
                    'جوٗلایی',
                    'اگست',
                    'ستمبر',
                    'اکتوٗبر',
                    'نومبر',
                    'دسمبر'
                ],
                'WEEKENDRANGE': [
                    6,
                    6
                ],
                'fullDate': 'EEEE, MMMM d, y',
                'longDate': 'MMMM d, y',
                'medium': 'MMM d, y h:mm:ss a',
                'mediumDate': 'MMM d, y',
                'mediumTime': 'h:mm:ss a',
                'short': 'M/d/yy h:mm a',
                'shortDate': 'M/d/yy',
                'shortTime': 'h:mm a'
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '\u20B9',
                'DECIMAL_SEP': '\u066B',
                'GROUP_SEP': '\u066C',
                'PATTERNS': [
                    {
                        'gSize': 2,
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
                        'gSize': 2,
                        'lgSize': 3,
                        'maxFrac': 2,
                        'minFrac': 2,
                        'minInt': 1,
                        'negPre': '-\xA4\xA0',
                        'negSuf': '',
                        'posPre': '\xA4\xA0',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'ks',
            'localeID': 'ks',
            'pluralCat': function (_0x11db31, _0x3d7d58) {
                if ('PsejE' === 'CumeO') {
                    var _0x2218d2 = _0x11db31 | 0;
                    var _0x5ef5fb = _0x292d78(_0x11db31, _0x3d7d58);
                    if (_0x2218d2 == 1 && _0x5ef5fb['v'] == 0) {
                        return _0x333a04['ONE'];
                    }
                    return _0x333a04['OTHER'];
                } else {
                    var _0x2a6695 = _0x11db31 | 0;
                    var _0x433461 = _0x292d78(_0x11db31, _0x3d7d58);
                    if (_0x2a6695 == 1 && _0x433461['v'] == 0) {
                        return _0x333a04['ONE'];
                    }
                    return _0x333a04['OTHER'];
                }
            }
        });
    }
]);