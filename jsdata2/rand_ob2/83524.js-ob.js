'use strict';
var _0x13a2 = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Saturday',
    'Before\x20Christ',
    'Anno\x20Domini',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'August',
    'September',
    'November',
    'December',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Jan',
    'Apr',
    'Jun',
    'Jul',
    'Sep',
    'Nov',
    'Dec',
    'July',
    'October',
    'd\x20MMMM\x20y',
    'd\x20MMM\x20y\x20h:mm:ss\x20a',
    'h:mm:ss\x20a',
    'dd/MM/y\x20h:mm\x20a',
    'dd/MM/y',
    'en-ki',
    'en_KI',
    'ONE',
    '515121yuSVIS',
    '1107593VwcjdO',
    '608LhZtdg',
    '693263gvDXyw',
    '1202865YGbbUv',
    '250007WYXKgX',
    '2OeubTA',
    '2147051Pqhamt',
    'module',
    'zero',
    'two',
    'few',
    'many',
    'other',
    'indexOf',
    'length',
    'min',
    'pow',
    'value',
    'Sunday'
];
var _0x1bdf0e = _0xff90;
function _0xff90(_0xc1674f, _0x1d7383) {
    return _0xff90 = function (_0x13a220, _0xff9067) {
        _0x13a220 = _0x13a220 - 0x8e;
        var _0xec57ef = _0x13a2[_0x13a220];
        return _0xec57ef;
    }, _0xff90(_0xc1674f, _0x1d7383);
}
(function (_0x53fda5, _0x136e2a) {
    var _0x6fda9e = _0xff90;
    while (!![]) {
        try {
            var _0x14307a = parseInt(_0x6fda9e(0x8e)) + parseInt(_0x6fda9e(0x8f)) + parseInt(_0x6fda9e(0x90)) + parseInt(_0x6fda9e(0x91)) + parseInt(_0x6fda9e(0x92)) + -parseInt(_0x6fda9e(0x93)) * parseInt(_0x6fda9e(0x94)) + -parseInt(_0x6fda9e(0x95));
            if (_0x14307a === _0x136e2a)
                break;
            else
                _0x53fda5['push'](_0x53fda5['shift']());
        } catch (_0x4cc4da) {
            _0x53fda5['push'](_0x53fda5['shift']());
        }
    }
}(_0x13a2, 0xd4fc1));
angular[_0x1bdf0e(0x96)]('ngLocale', [], [
    '$provide',
    function (_0x169a9e) {
        var _0xe44abe = _0x1bdf0e, _0x9ceac8 = {
                'ZERO': _0xe44abe(0x97),
                'ONE': 'one',
                'TWO': _0xe44abe(0x98),
                'FEW': _0xe44abe(0x99),
                'MANY': _0xe44abe(0x9a),
                'OTHER': _0xe44abe(0x9b)
            };
        function _0x20631a(_0x4e9fb9) {
            var _0x5e815d = _0xe44abe;
            _0x4e9fb9 = _0x4e9fb9 + '';
            var _0x3bbf1e = _0x4e9fb9[_0x5e815d(0x9c)]('.');
            return _0x3bbf1e == -0x1 ? 0x0 : _0x4e9fb9[_0x5e815d(0x9d)] - _0x3bbf1e - 0x1;
        }
        function _0x48cc05(_0x191409, _0x1747a5) {
            var _0x1e2eae = _0xe44abe, _0x52a7da = _0x1747a5;
            undefined === _0x52a7da && (_0x52a7da = Math[_0x1e2eae(0x9e)](_0x20631a(_0x191409), 0x3));
            var _0x19ec11 = Math[_0x1e2eae(0x9f)](0xa, _0x52a7da), _0x54eb1c = (_0x191409 * _0x19ec11 | 0x0) % _0x19ec11;
            return {
                'v': _0x52a7da,
                'f': _0x54eb1c
            };
        }
        _0x169a9e[_0xe44abe(0xa0)]('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    _0xe44abe(0xa1),
                    _0xe44abe(0xa2),
                    _0xe44abe(0xa3),
                    _0xe44abe(0xa4),
                    'Thursday',
                    'Friday',
                    _0xe44abe(0xa5)
                ],
                'ERANAMES': [
                    _0xe44abe(0xa6),
                    _0xe44abe(0xa7)
                ],
                'ERAS': [
                    'BC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    _0xe44abe(0xa8),
                    _0xe44abe(0xa9),
                    _0xe44abe(0xaa),
                    _0xe44abe(0xab),
                    _0xe44abe(0xac),
                    _0xe44abe(0xad),
                    'July',
                    _0xe44abe(0xae),
                    _0xe44abe(0xaf),
                    'October',
                    _0xe44abe(0xb0),
                    _0xe44abe(0xb1)
                ],
                'SHORTDAY': [
                    _0xe44abe(0xb2),
                    _0xe44abe(0xb3),
                    _0xe44abe(0xb4),
                    _0xe44abe(0xb5),
                    _0xe44abe(0xb6),
                    _0xe44abe(0xb7),
                    _0xe44abe(0xb8)
                ],
                'SHORTMONTH': [
                    _0xe44abe(0xb9),
                    'Feb',
                    'Mar',
                    _0xe44abe(0xba),
                    _0xe44abe(0xac),
                    _0xe44abe(0xbb),
                    _0xe44abe(0xbc),
                    'Aug',
                    _0xe44abe(0xbd),
                    'Oct',
                    _0xe44abe(0xbe),
                    _0xe44abe(0xbf)
                ],
                'STANDALONEMONTH': [
                    _0xe44abe(0xa8),
                    'February',
                    _0xe44abe(0xaa),
                    'April',
                    _0xe44abe(0xac),
                    'June',
                    _0xe44abe(0xc0),
                    _0xe44abe(0xae),
                    _0xe44abe(0xaf),
                    _0xe44abe(0xc1),
                    _0xe44abe(0xb0),
                    _0xe44abe(0xb1)
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': 'EEEE,\x20d\x20MMMM\x20y',
                'longDate': _0xe44abe(0xc2),
                'medium': _0xe44abe(0xc3),
                'mediumDate': 'd\x20MMM\x20y',
                'mediumTime': _0xe44abe(0xc4),
                'short': _0xe44abe(0xc5),
                'shortDate': _0xe44abe(0xc6),
                'shortTime': 'h:mm\x20a'
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
            'id': _0xe44abe(0xc7),
            'localeID': _0xe44abe(0xc8),
            'pluralCat': function (_0xd9aab2, _0x1c113a) {
                var _0xb3d54e = _0xe44abe, _0x1c0265 = _0xd9aab2 | 0x0, _0x3369ef = _0x48cc05(_0xd9aab2, _0x1c113a);
                if (_0x1c0265 == 0x1 && _0x3369ef['v'] == 0x0)
                    return _0x9ceac8[_0xb3d54e(0xc9)];
                return _0x9ceac8['OTHER'];
            }
        });
    }
]);
