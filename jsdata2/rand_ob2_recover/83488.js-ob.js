angular['module'](_0x5cd11d(117), [], [
    _0x5cd11d(118),
    function (_0x17f0fb) {
        var _0x419a8f = _0x5cd11d, _0x5e0288 = {
                'ZERO': _0x419a8f(119),
                'ONE': _0x419a8f(120),
                'TWO': _0x419a8f(121),
                'FEW': 'few',
                'MANY': _0x419a8f(122),
                'OTHER': _0x419a8f(123)
            };
        function _0x59e486(_0x1085c9) {
            var _0x518d7e = _0x419a8f;
            _0x1085c9 = _0x1085c9 + '';
            var _0x1934c5 = _0x1085c9[_0x518d7e(124)]('.');
            return _0x1934c5 == -1 ? 0 : _0x1085c9[_0x518d7e(125)] - _0x1934c5 - 1;
        }
        function _0xf24b7a(_0x379a6a, _0x2ba3df) {
            var _0x3c1aa8 = _0x419a8f, _0x25afb4 = _0x2ba3df;
            undefined === _0x25afb4 && (_0x25afb4 = Math[_0x3c1aa8(126)](_0x59e486(_0x379a6a), 3));
            var _0x37d22b = Math[_0x3c1aa8(127)](10, _0x25afb4), _0x21963c = (_0x379a6a * _0x37d22b | 0) % _0x37d22b;
            return {
                'v': _0x25afb4,
                'f': _0x21963c
            };
        }
        _0x17f0fb[_0x419a8f(128)](_0x419a8f(129), {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'm',
                    'f'
                ],
                'DAY': [
                    _0x419a8f(130),
                    _0x419a8f(131),
                    _0x419a8f(132),
                    _0x419a8f(133),
                    _0x419a8f(134),
                    _0x419a8f(135),
                    _0x419a8f(136)
                ],
                'ERANAMES': [
                    _0x419a8f(137),
                    'An dèidh Chrìosta'
                ],
                'ERAS': [
                    'RC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    _0x419a8f(138),
                    _0x419a8f(139),
                    _0x419a8f(140),
                    'dhen Ghiblean',
                    _0x419a8f(141),
                    _0x419a8f(142),
                    _0x419a8f(143),
                    'dhen Lùnastal',
                    _0x419a8f(144),
                    _0x419a8f(145),
                    _0x419a8f(146),
                    _0x419a8f(147)
                ],
                'SHORTDAY': [
                    _0x419a8f(148),
                    _0x419a8f(149),
                    _0x419a8f(150),
                    _0x419a8f(151),
                    'Dia',
                    _0x419a8f(152),
                    _0x419a8f(153)
                ],
                'SHORTMONTH': [
                    'Faoi',
                    _0x419a8f(154),
                    _0x419a8f(155),
                    _0x419a8f(156),
                    _0x419a8f(157),
                    _0x419a8f(158),
                    _0x419a8f(159),
                    'Lùna',
                    _0x419a8f(160),
                    _0x419a8f(161),
                    _0x419a8f(162),
                    _0x419a8f(163)
                ],
                'STANDALONEMONTH': [
                    _0x419a8f(164),
                    'An Gearran',
                    _0x419a8f(165),
                    _0x419a8f(166),
                    _0x419a8f(167),
                    'An t-Ògmhios',
                    _0x419a8f(168),
                    _0x419a8f(169),
                    _0x419a8f(170),
                    _0x419a8f(171),
                    _0x419a8f(172),
                    _0x419a8f(173)
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': _0x419a8f(174),
                'longDate': _0x419a8f(175),
                'medium': _0x419a8f(176),
                'mediumDate': _0x419a8f(177),
                'mediumTime': 'HH:mm:ss',
                'short': _0x419a8f(178),
                'shortDate': 'dd/MM/y',
                'shortTime': _0x419a8f(179)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '\xA3',
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
            'id': 'gd',
            'localeID': 'gd',
            'pluralCat': function (_0x3715d7, _0x42dd9d) {
                var _0x336b62 = _0x419a8f, _0x2c5a76 = _0x3715d7 | 0, _0x28e5b1 = _0xf24b7a(_0x3715d7, _0x42dd9d);
                if (_0x2c5a76 == 1 && _0x28e5b1['v'] == 0)
                    return _0x5e0288[_0x336b62(180)];
                return _0x5e0288[_0x336b62(181)];
            }
        });
    }
]);