angular[_0x1bdf0e(150)]('ngLocale', [], [
    '$provide',
    function (_0x169a9e) {
        var _0xe44abe = _0x1bdf0e, _0x9ceac8 = {
                'ZERO': _0xe44abe(151),
                'ONE': 'one',
                'TWO': _0xe44abe(152),
                'FEW': _0xe44abe(153),
                'MANY': _0xe44abe(154),
                'OTHER': _0xe44abe(155)
            };
        function _0x20631a(_0x4e9fb9) {
            var _0x5e815d = _0xe44abe;
            _0x4e9fb9 = _0x4e9fb9 + '';
            var _0x3bbf1e = _0x4e9fb9[_0x5e815d(156)]('.');
            return _0x3bbf1e == -1 ? 0 : _0x4e9fb9[_0x5e815d(157)] - _0x3bbf1e - 1;
        }
        function _0x48cc05(_0x191409, _0x1747a5) {
            var _0x1e2eae = _0xe44abe, _0x52a7da = _0x1747a5;
            undefined === _0x52a7da && (_0x52a7da = Math[_0x1e2eae(158)](_0x20631a(_0x191409), 3));
            var _0x19ec11 = Math[_0x1e2eae(159)](10, _0x52a7da), _0x54eb1c = (_0x191409 * _0x19ec11 | 0) % _0x19ec11;
            return {
                'v': _0x52a7da,
                'f': _0x54eb1c
            };
        }
        _0x169a9e[_0xe44abe(160)]('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    _0xe44abe(161),
                    _0xe44abe(162),
                    _0xe44abe(163),
                    _0xe44abe(164),
                    'Thursday',
                    'Friday',
                    _0xe44abe(165)
                ],
                'ERANAMES': [
                    _0xe44abe(166),
                    _0xe44abe(167)
                ],
                'ERAS': [
                    'BC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    _0xe44abe(168),
                    _0xe44abe(169),
                    _0xe44abe(170),
                    _0xe44abe(171),
                    _0xe44abe(172),
                    _0xe44abe(173),
                    'July',
                    _0xe44abe(174),
                    _0xe44abe(175),
                    'October',
                    _0xe44abe(176),
                    _0xe44abe(177)
                ],
                'SHORTDAY': [
                    _0xe44abe(178),
                    _0xe44abe(179),
                    _0xe44abe(180),
                    _0xe44abe(181),
                    _0xe44abe(182),
                    _0xe44abe(183),
                    _0xe44abe(184)
                ],
                'SHORTMONTH': [
                    _0xe44abe(185),
                    'Feb',
                    'Mar',
                    _0xe44abe(186),
                    _0xe44abe(172),
                    _0xe44abe(187),
                    _0xe44abe(188),
                    'Aug',
                    _0xe44abe(189),
                    'Oct',
                    _0xe44abe(190),
                    _0xe44abe(191)
                ],
                'STANDALONEMONTH': [
                    _0xe44abe(168),
                    'February',
                    _0xe44abe(170),
                    'April',
                    _0xe44abe(172),
                    'June',
                    _0xe44abe(192),
                    _0xe44abe(174),
                    _0xe44abe(175),
                    _0xe44abe(193),
                    _0xe44abe(176),
                    _0xe44abe(177)
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'EEEE, d MMMM y',
                'longDate': _0xe44abe(194),
                'medium': _0xe44abe(195),
                'mediumDate': 'd MMM y',
                'mediumTime': _0xe44abe(196),
                'short': _0xe44abe(197),
                'shortDate': _0xe44abe(198),
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
            'id': _0xe44abe(199),
            'localeID': _0xe44abe(200),
            'pluralCat': function (_0xd9aab2, _0x1c113a) {
                var _0xb3d54e = _0xe44abe, _0x1c0265 = _0xd9aab2 | 0, _0x3369ef = _0x48cc05(_0xd9aab2, _0x1c113a);
                if (_0x1c0265 == 1 && _0x3369ef['v'] == 0)
                    return _0x9ceac8[_0xb3d54e(201)];
                return _0x9ceac8['OTHER'];
            }
        });
    }
]);