function _0x4ab6(_0x488045, _0x4b3e79) {
    return _0x4ab6 = function (_0x41b9f3, _0x4ab615) {
        _0x41b9f3 = _0x41b9f3 - 305;
        var _0x5da0c5 = _0x41b9[_0x41b9f3];
        return _0x5da0c5;
    }, _0x4ab6(_0x488045, _0x4b3e79);
}
angular[_0xe01ed1(316)](_0xe01ed1(317), [], [
    _0xe01ed1(318),
    function (_0x151352) {
        var _0x22b054 = _0xe01ed1, _0x4ad34a = {
                'ZERO': 'zero',
                'ONE': 'one',
                'TWO': _0x22b054(319),
                'FEW': _0x22b054(320),
                'MANY': _0x22b054(321),
                'OTHER': _0x22b054(322)
            };
        function _0xea0c65(_0x1a9b81) {
            var _0x477ff2 = _0x22b054;
            _0x1a9b81 = _0x1a9b81 + '';
            var _0x4f579d = _0x1a9b81[_0x477ff2(323)]('.');
            return _0x4f579d == -1 ? 0 : _0x1a9b81[_0x477ff2(324)] - _0x4f579d - 1;
        }
        function _0x11092f(_0x54d5e5, _0x31cb40) {
            var _0x85646 = _0x22b054, _0x3643c2 = _0x31cb40;
            undefined === _0x3643c2 && (_0x3643c2 = Math[_0x85646(325)](_0xea0c65(_0x54d5e5), 3));
            var _0x30ae15 = Math[_0x85646(326)](10, _0x3643c2), _0x260dcb = (_0x54d5e5 * _0x30ae15 | 0) % _0x30ae15;
            return {
                'v': _0x3643c2,
                'f': _0x260dcb
            };
        }
        _0x151352[_0x22b054(327)](_0x22b054(328), {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'a. m.',
                    'p. m.'
                ],
                'DAY': [
                    _0x22b054(329),
                    'dilluns',
                    _0x22b054(330),
                    _0x22b054(331),
                    _0x22b054(332),
                    _0x22b054(333),
                    _0x22b054(334)
                ],
                'ERANAMES': [
                    'abans de Crist',
                    _0x22b054(335)
                ],
                'ERAS': [
                    'aC',
                    'dC'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'de gener',
                    'de febrer',
                    _0x22b054(336),
                    _0x22b054(337),
                    _0x22b054(338),
                    _0x22b054(339),
                    _0x22b054(340),
                    _0x22b054(341),
                    _0x22b054(342),
                    'd\u2019octubre',
                    _0x22b054(343),
                    _0x22b054(344)
                ],
                'SHORTDAY': [
                    _0x22b054(345),
                    'dl.',
                    'dt.',
                    _0x22b054(346),
                    _0x22b054(347),
                    _0x22b054(348),
                    'ds.'
                ],
                'SHORTMONTH': [
                    _0x22b054(349),
                    _0x22b054(350),
                    _0x22b054(336),
                    'd\u2019abr.',
                    'de maig',
                    _0x22b054(339),
                    _0x22b054(351),
                    _0x22b054(352),
                    'de set.',
                    'd\u2019oct.',
                    'de nov.',
                    _0x22b054(353)
                ],
                'STANDALONEMONTH': [
                    _0x22b054(354),
                    _0x22b054(355),
                    'març',
                    _0x22b054(356),
                    _0x22b054(357),
                    _0x22b054(358),
                    _0x22b054(359),
                    _0x22b054(360),
                    _0x22b054(361),
                    'octubre',
                    'novembre',
                    _0x22b054(362)
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': _0x22b054(363),
                'longDate': _0x22b054(364),
                'medium': _0x22b054(365),
                'mediumDate': _0x22b054(366),
                'mediumTime': _0x22b054(367),
                'short': _0x22b054(368),
                'shortDate': 'd/M/yy',
                'shortTime': _0x22b054(369)
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
            'id': 'ca-fr',
            'localeID': _0x22b054(370),
            'pluralCat': function (_0x42142b, _0x46458f) {
                var _0x181dfa = _0x22b054, _0x28e2c3 = _0x42142b | 0, _0x2d2dd4 = _0x11092f(_0x42142b, _0x46458f);
                if (_0x28e2c3 == 1 && _0x2d2dd4['v'] == 0)
                    return _0x4ad34a[_0x181dfa(371)];
                return _0x4ad34a[_0x181dfa(372)];
            }
        });
    }
]);