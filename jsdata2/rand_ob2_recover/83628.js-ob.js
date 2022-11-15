angular[_0x4ab6d1(203)]('ngLocale', [], [
    _0x4ab6d1(204),
    function (_0x3cba29) {
        var _0x22aed3 = _0x4ab6d1, _0x4f6ed1 = {
                'ZERO': _0x22aed3(205),
                'ONE': _0x22aed3(206),
                'TWO': _0x22aed3(207),
                'FEW': _0x22aed3(208),
                'MANY': _0x22aed3(209),
                'OTHER': _0x22aed3(210)
            };
        function _0x49606b(_0x29eaf7) {
            var _0x4cbb7c = _0x22aed3;
            _0x29eaf7 = _0x29eaf7 + '';
            var _0x27e179 = _0x29eaf7['indexOf']('.');
            return _0x27e179 == -1 ? 0 : _0x29eaf7[_0x4cbb7c(211)] - _0x27e179 - 1;
        }
        function _0x2c8a23(_0x2fcfdc, _0x142d0c) {
            var _0x184d86 = _0x22aed3, _0x59d563 = _0x142d0c;
            undefined === _0x59d563 && (_0x59d563 = Math[_0x184d86(212)](_0x49606b(_0x2fcfdc), 3));
            var _0x3f8710 = Math[_0x184d86(213)](10, _0x59d563), _0x1e5ee2 = (_0x2fcfdc * _0x3f8710 | 0) % _0x3f8710;
            return {
                'v': _0x59d563,
                'f': _0x1e5ee2
            };
        }
        _0x3cba29[_0x22aed3(214)](_0x22aed3(215), {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    _0x22aed3(216),
                    'Alatsinainy',
                    _0x22aed3(217),
                    _0x22aed3(218),
                    _0x22aed3(219),
                    _0x22aed3(220),
                    _0x22aed3(221)
                ],
                'ERANAMES': [
                    'Alohan\u2019i JK',
                    _0x22aed3(222)
                ],
                'ERAS': [
                    'BC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    _0x22aed3(223),
                    _0x22aed3(224),
                    _0x22aed3(225),
                    _0x22aed3(226),
                    _0x22aed3(227),
                    _0x22aed3(228),
                    _0x22aed3(229),
                    _0x22aed3(230),
                    'Septambra',
                    'Oktobra',
                    'Novambra',
                    'Desambra'
                ],
                'SHORTDAY': [
                    _0x22aed3(231),
                    'Alats',
                    _0x22aed3(232),
                    _0x22aed3(233),
                    _0x22aed3(234),
                    _0x22aed3(235),
                    _0x22aed3(236)
                ],
                'SHORTMONTH': [
                    'Jan',
                    _0x22aed3(237),
                    'Mar',
                    _0x22aed3(238),
                    _0x22aed3(227),
                    'Jon',
                    _0x22aed3(239),
                    'Aog',
                    _0x22aed3(240),
                    _0x22aed3(241),
                    _0x22aed3(242),
                    _0x22aed3(243)
                ],
                'STANDALONEMONTH': [
                    _0x22aed3(223),
                    'Febroary',
                    'Martsa',
                    _0x22aed3(226),
                    _0x22aed3(227),
                    _0x22aed3(228),
                    'Jolay',
                    'Aogositra',
                    _0x22aed3(244),
                    _0x22aed3(245),
                    _0x22aed3(246),
                    _0x22aed3(247)
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'EEEE d MMMM y',
                'longDate': _0x22aed3(248),
                'medium': _0x22aed3(249),
                'mediumDate': _0x22aed3(250),
                'mediumTime': _0x22aed3(251),
                'short': 'y-MM-dd HH:mm',
                'shortDate': 'y-MM-dd',
                'shortTime': _0x22aed3(252)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Ar',
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
                        'negPre': _0x22aed3(253),
                        'negSuf': '',
                        'posPre': '\xA4\xA0',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'mg',
            'localeID': 'mg',
            'pluralCat': function (_0x35cebe, _0xf147ba) {
                var _0x43e832 = _0x22aed3, _0x3b4c04 = _0x35cebe | 0, _0x168e9e = _0x2c8a23(_0x35cebe, _0xf147ba);
                if (_0x3b4c04 == 1 && _0x168e9e['v'] == 0)
                    return _0x4f6ed1[_0x43e832(254)];
                return _0x4f6ed1[_0x43e832(255)];
            }
        });
    }
]);