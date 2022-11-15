function _0x3621(_0x5aaf09, _0x456e19) {
    return _0x3621 = function (_0x162390, _0x3621df) {
        _0x162390 = _0x162390 - 498;
        var _0x4383c2 = _0x1623[_0x162390];
        return _0x4383c2;
    }, _0x3621(_0x5aaf09, _0x456e19);
}
angular[_0xe2f01d(511)](_0xe2f01d(512), [], [
    '$provide',
    function (_0x36e6ea) {
        var _0x1c0842 = _0xe2f01d, _0x26dae1 = {
                'ZERO': _0x1c0842(513),
                'ONE': _0x1c0842(514),
                'TWO': 'two',
                'FEW': 'few',
                'MANY': _0x1c0842(515),
                'OTHER': _0x1c0842(516)
            };
        function _0x29e5b1(_0x54e9d9) {
            var _0x3b5891 = _0x1c0842;
            _0x54e9d9 = _0x54e9d9 + '';
            var _0x46a238 = _0x54e9d9[_0x3b5891(517)]('.');
            return _0x46a238 == -1 ? 0 : _0x54e9d9[_0x3b5891(518)] - _0x46a238 - 1;
        }
        function _0x215ee1(_0x223fc7, _0x687e4e) {
            var _0x27a91b = _0x1c0842, _0x10b93e = _0x687e4e;
            undefined === _0x10b93e && (_0x10b93e = Math[_0x27a91b(519)](_0x29e5b1(_0x223fc7), 3));
            var _0xe3c29b = Math[_0x27a91b(520)](10, _0x10b93e), _0x508f4f = (_0x223fc7 * _0xe3c29b | 0) % _0xe3c29b;
            return {
                'v': _0x10b93e,
                'f': _0x508f4f
            };
        }
        _0x36e6ea[_0x1c0842(521)](_0x1c0842(522), {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'm',
                    'f'
                ],
                'DAY': [
                    'DiDòmhnaich',
                    'DiLuain',
                    _0x1c0842(523),
                    _0x1c0842(524),
                    _0x1c0842(525),
                    _0x1c0842(526),
                    _0x1c0842(527)
                ],
                'ERANAMES': [
                    _0x1c0842(528),
                    _0x1c0842(529)
                ],
                'ERAS': [
                    'RC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'dhen Fhaoilleach',
                    _0x1c0842(530),
                    'dhen Mhàrt',
                    'dhen Ghiblean',
                    _0x1c0842(531),
                    _0x1c0842(532),
                    'dhen Iuchar',
                    'dhen Lùnastal',
                    'dhen t-Sultain',
                    _0x1c0842(533),
                    _0x1c0842(534),
                    _0x1c0842(535)
                ],
                'SHORTDAY': [
                    _0x1c0842(536),
                    _0x1c0842(537),
                    'DiM',
                    _0x1c0842(538),
                    _0x1c0842(539),
                    _0x1c0842(540),
                    _0x1c0842(541)
                ],
                'SHORTMONTH': [
                    'Faoi',
                    _0x1c0842(542),
                    _0x1c0842(543),
                    _0x1c0842(544),
                    _0x1c0842(545),
                    _0x1c0842(546),
                    _0x1c0842(547),
                    'Lùna',
                    'Sult',
                    _0x1c0842(548),
                    _0x1c0842(549),
                    _0x1c0842(550)
                ],
                'STANDALONEMONTH': [
                    _0x1c0842(551),
                    'An Gearran',
                    _0x1c0842(552),
                    _0x1c0842(553),
                    _0x1c0842(554),
                    _0x1c0842(555),
                    _0x1c0842(556),
                    'An Lùnastal',
                    'An t-Sultain',
                    _0x1c0842(557),
                    _0x1c0842(558),
                    'An Dùbhlachd'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': _0x1c0842(559),
                'longDate': _0x1c0842(560),
                'medium': 'd MMM y HH:mm:ss',
                'mediumDate': _0x1c0842(561),
                'mediumTime': _0x1c0842(562),
                'short': _0x1c0842(563),
                'shortDate': _0x1c0842(564),
                'shortTime': _0x1c0842(565)
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
            'pluralCat': function (_0x2da750, _0x4c4164) {
                var _0x21b202 = _0x1c0842, _0x2b7731 = _0x2da750 | 0, _0x4e6d3f = _0x215ee1(_0x2da750, _0x4c4164);
                if (_0x2b7731 == 1 && _0x4e6d3f['v'] == 0)
                    return _0x26dae1[_0x21b202(566)];
                return _0x26dae1[_0x21b202(567)];
            }
        });
    }
]);