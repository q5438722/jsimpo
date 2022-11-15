'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x5cf659) {
        var _0x2e052a = {
            'ZERO': 'zero',
            'ONE': 'one',
            'TWO': 'two',
            'FEW': 'few',
            'MANY': 'many'
        };
        function _0x3dbbd4(_0x52b2ef) {
            if ('HjHqu' !== 'ghUtw') {
                _0x52b2ef = _0x52b2ef + '';
                var _0x3824d9 = _0x52b2ef['indexOf']('.');
                return _0x3824d9 == -1 ? 0 : _0x52b2ef['length'] - _0x3824d9 - 1;
            } else {
                v = Math['min'](_0x3dbbd4(_0x52b2ef), 3);
            }
        }
        function _0x47eff9(_0x2f2b9e, _0x378851) {
            if ('pAXTX' === 'pAXTX') {
                var _0x201b55 = '4|3|1|2|0'['split']('|'), _0x263e93 = 0;
                while (!![]) {
                    switch (_0x201b55[_0x263e93++]) {
                    case '0':
                        return {
                            'v': _0x4a637e,
                            'f': _0x3ce155
                        };
                    case '1':
                        var _0x18b910 = Math['pow'](10, _0x4a637e);
                        continue;
                    case '2':
                        var _0x3ce155 = (_0x2f2b9e * _0x18b910 | 0) % _0x18b910;
                        continue;
                    case '3':
                        if (undefined === _0x4a637e) {
                            _0x4a637e = Math['min'](_0x3dbbd4(_0x2f2b9e), 3);
                        }
                        continue;
                    case '4':
                        var _0x4a637e = _0x378851;
                        continue;
                    }
                    break;
                }
            } else {
                var _0x335f94 = '1|2|3|0|4'['split']('|'), _0x185a98 = 0;
                while (!![]) {
                    switch (_0x335f94[_0x185a98++]) {
                    case '0':
                        var _0x204a92 = (_0x2f2b9e * _0xf273dc | 0) % _0xf273dc;
                        continue;
                    case '1':
                        var _0x1bc7ec = _0x378851;
                        continue;
                    case '2':
                        if (undefined === _0x1bc7ec) {
                            _0x1bc7ec = Math['min'](_0x3dbbd4(_0x2f2b9e), 3);
                        }
                        continue;
                    case '3':
                        var _0xf273dc = Math['pow'](10, _0x1bc7ec);
                        continue;
                    case '4':
                        return {
                            'v': _0x1bc7ec,
                            'f': _0x204a92
                        };
                    }
                    break;
                }
            }
        }
        _0x5cf659['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ],
                'ERANAMES': [
                    'Before Christ',
                    'Anno Domini'
                ],
                'ERAS': [
                    'BC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                'SHORTDAY': [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ],
                'SHORTMONTH': [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                'STANDALONEMONTH': [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'EEEE, d MMMM y',
                'longDate': 'd MMMM y',
                'medium': 'd MMM y h:mm:ss a',
                'mediumDate': 'd MMM y',
                'mediumTime': 'h:mm:ss a',
                'short': 'dd/MM/y h:mm a',
                'shortDate': 'dd/MM/y',
                'shortTime': 'h:mm a'
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
            'id': 'en-ki',
            'localeID': 'en_KI',
            'pluralCat': function (_0x4ac902, _0x1d4b6f) {
                if ('ofUcM' !== 'ofUcM') {
                    return _0x2e052a['ONE'];
                } else {
                    var _0x282d0b = _0x4ac902 | 0;
                    var _0x1f7bb8 = _0x47eff9(_0x4ac902, _0x1d4b6f);
                    if (_0x282d0b == 1 && _0x1f7bb8['v'] == 0) {
                        return _0x2e052a['ONE'];
                    }
                    return 'other';
                }
            }
        });
    }
]);