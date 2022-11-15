function _0x1fa7(_0x3b6c47, _0x5bbf47) {
    return _0x1fa7 = function (_0x37e75f, _0x1fa7a1) {
        _0x37e75f = _0x37e75f - 475;
        var _0x4ae417 = _0x37e7[_0x37e75f];
        return _0x4ae417;
    }, _0x1fa7(_0x3b6c47, _0x5bbf47);
}
angular['module'](_0x37e971(485), [], [
    _0x37e971(486),
    function (_0x27b0eb) {
        var _0x25835e = _0x37e971, _0x21000d = {
                'ZERO': _0x25835e(487),
                'ONE': 'one',
                'TWO': 'two',
                'FEW': _0x25835e(488),
                'MANY': _0x25835e(489),
                'OTHER': _0x25835e(490)
            };
        function _0x4062ff(_0x4be593) {
            var _0x1263a0 = _0x25835e;
            _0x4be593 = _0x4be593 + '';
            var _0x49bc15 = _0x4be593[_0x1263a0(491)]('.');
            return _0x49bc15 == -1 ? 0 : _0x4be593[_0x1263a0(492)] - _0x49bc15 - 1;
        }
        function _0x4dcb17(_0x5ad374, _0x27ed64) {
            var _0x56eb9a = _0x25835e, _0x4f8283 = _0x27ed64;
            undefined === _0x4f8283 && (_0x4f8283 = Math[_0x56eb9a(493)](_0x4062ff(_0x5ad374), 3));
            var _0x324da5 = Math[_0x56eb9a(494)](10, _0x4f8283), _0x4c6773 = (_0x5ad374 * _0x324da5 | 0) % _0x324da5;
            return {
                'v': _0x4f8283,
                'f': _0x4c6773
            };
        }
        _0x27b0eb[_0x25835e(495)]('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    'Alahady',
                    'Alatsinainy',
                    _0x25835e(496),
                    'Alarobia',
                    _0x25835e(497),
                    'Zoma',
                    _0x25835e(498)
                ],
                'ERANAMES': [
                    _0x25835e(499),
                    _0x25835e(500)
                ],
                'ERAS': [
                    'BC',
                    'AD'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    _0x25835e(501),
                    _0x25835e(502),
                    _0x25835e(503),
                    _0x25835e(504),
                    _0x25835e(505),
                    _0x25835e(506),
                    _0x25835e(507),
                    _0x25835e(508),
                    _0x25835e(509),
                    _0x25835e(510),
                    'Novambra',
                    _0x25835e(511)
                ],
                'SHORTDAY': [
                    _0x25835e(512),
                    _0x25835e(513),
                    _0x25835e(514),
                    _0x25835e(515),
                    _0x25835e(516),
                    'Zom',
                    _0x25835e(517)
                ],
                'SHORTMONTH': [
                    _0x25835e(518),
                    _0x25835e(519),
                    _0x25835e(520),
                    _0x25835e(521),
                    _0x25835e(505),
                    _0x25835e(522),
                    'Jol',
                    _0x25835e(523),
                    'Sep',
                    _0x25835e(524),
                    'Nov',
                    _0x25835e(525)
                ],
                'STANDALONEMONTH': [
                    'Janoary',
                    _0x25835e(502),
                    _0x25835e(503),
                    _0x25835e(504),
                    'Mey',
                    _0x25835e(506),
                    _0x25835e(507),
                    'Aogositra',
                    _0x25835e(509),
                    _0x25835e(510),
                    'Novambra',
                    _0x25835e(511)
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': _0x25835e(526),
                'longDate': _0x25835e(527),
                'medium': _0x25835e(528),
                'mediumDate': _0x25835e(529),
                'mediumTime': 'HH:mm:ss',
                'short': 'y-MM-dd HH:mm',
                'shortDate': 'y-MM-dd',
                'shortTime': _0x25835e(530)
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
                        'negPre': _0x25835e(531),
                        'negSuf': '',
                        'posPre': '\xA4\xA0',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'mg',
            'localeID': 'mg',
            'pluralCat': function (_0xd6e153, _0xc0711e) {
                var _0x31cf29 = _0x25835e, _0x14e64b = _0xd6e153 | 0, _0x3fba74 = _0x4dcb17(_0xd6e153, _0xc0711e);
                if (_0x14e64b == 1 && _0x3fba74['v'] == 0)
                    return _0x21000d[_0x31cf29(532)];
                return _0x21000d[_0x31cf29(533)];
            }
        });
    }
]);