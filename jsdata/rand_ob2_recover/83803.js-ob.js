angular[_0x294948(146)]('ngLocale', [], [
    '$provide',
    function (_0x3a9bcb) {
        var _0xf0f7d6 = _0x294948, _0x39e943 = {
                'ZERO': _0xf0f7d6(147),
                'ONE': _0xf0f7d6(148),
                'TWO': _0xf0f7d6(149),
                'FEW': _0xf0f7d6(150),
                'MANY': _0xf0f7d6(151),
                'OTHER': _0xf0f7d6(152)
            };
        function _0x2725e0(_0x122e40) {
            var _0x4fa7ee = _0xf0f7d6;
            _0x122e40 = _0x122e40 + '';
            var _0x42c75b = _0x122e40[_0x4fa7ee(153)]('.');
            return _0x42c75b == -1 ? 0 : _0x122e40['length'] - _0x42c75b - 1;
        }
        function _0x12849f(_0x64516a, _0x2000f6) {
            var _0x16158b = _0xf0f7d6, _0x4860d7 = _0x2000f6;
            undefined === _0x4860d7 && (_0x4860d7 = Math['min'](_0x2725e0(_0x64516a), 3));
            var _0x5df9b9 = Math[_0x16158b(154)](10, _0x4860d7), _0x1ad2f8 = (_0x64516a * _0x5df9b9 | 0) % _0x5df9b9;
            return {
                'v': _0x4860d7,
                'f': _0x1ad2f8
            };
        }
        _0x3a9bcb[_0xf0f7d6(155)]('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    _0xf0f7d6(156),
                    _0xf0f7d6(157),
                    _0xf0f7d6(158),
                    'mercoledì',
                    'giovedì',
                    'venerdì',
                    _0xf0f7d6(159)
                ],
                'ERANAMES': [
                    _0xf0f7d6(160),
                    _0xf0f7d6(161)
                ],
                'ERAS': [
                    _0xf0f7d6(162),
                    _0xf0f7d6(163)
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'gennaio',
                    _0xf0f7d6(164),
                    _0xf0f7d6(165),
                    'aprile',
                    _0xf0f7d6(166),
                    _0xf0f7d6(167),
                    _0xf0f7d6(168),
                    _0xf0f7d6(169),
                    _0xf0f7d6(170),
                    'ottobre',
                    _0xf0f7d6(171),
                    _0xf0f7d6(172)
                ],
                'SHORTDAY': [
                    _0xf0f7d6(173),
                    _0xf0f7d6(174),
                    'mar',
                    _0xf0f7d6(175),
                    'gio',
                    'ven',
                    _0xf0f7d6(176)
                ],
                'SHORTMONTH': [
                    _0xf0f7d6(177),
                    _0xf0f7d6(178),
                    _0xf0f7d6(179),
                    _0xf0f7d6(180),
                    _0xf0f7d6(181),
                    _0xf0f7d6(182),
                    _0xf0f7d6(183),
                    _0xf0f7d6(184),
                    _0xf0f7d6(185),
                    _0xf0f7d6(186),
                    _0xf0f7d6(187),
                    _0xf0f7d6(188)
                ],
                'STANDALONEMONTH': [
                    'gennaio',
                    _0xf0f7d6(164),
                    _0xf0f7d6(165),
                    _0xf0f7d6(189),
                    _0xf0f7d6(166),
                    _0xf0f7d6(167),
                    _0xf0f7d6(168),
                    _0xf0f7d6(169),
                    _0xf0f7d6(170),
                    _0xf0f7d6(190),
                    _0xf0f7d6(171),
                    _0xf0f7d6(172)
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': _0xf0f7d6(191),
                'longDate': _0xf0f7d6(192),
                'medium': _0xf0f7d6(193),
                'mediumDate': 'dd MMM y',
                'mediumTime': _0xf0f7d6(194),
                'short': _0xf0f7d6(195),
                'shortDate': 'dd/MM/yy',
                'shortTime': _0xf0f7d6(196)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '\u20AC',
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
                        'negSuf': '\xA0\xA4',
                        'posPre': '',
                        'posSuf': '\xA0\xA4'
                    }
                ]
            },
            'id': _0xf0f7d6(197),
            'localeID': 'it_IT',
            'pluralCat': function (_0x4836cf, _0x59ffc8) {
                var _0x4f4af9 = _0xf0f7d6, _0x2011d5 = _0x4836cf | 0, _0x50ccb2 = _0x12849f(_0x4836cf, _0x59ffc8);
                if (_0x2011d5 == 1 && _0x50ccb2['v'] == 0)
                    return _0x39e943[_0x4f4af9(198)];
                return _0x39e943[_0x4f4af9(199)];
            }
        });
    }
]);