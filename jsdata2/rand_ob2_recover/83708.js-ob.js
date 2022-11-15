angular['module'](_0x23f446(496), [], [
    _0x23f446(497),
    function (_0x4a1525) {
        var _0x19c303 = _0x23f446, _0x2f5f26 = {
                'ZERO': _0x19c303(498),
                'ONE': _0x19c303(499),
                'TWO': _0x19c303(500),
                'FEW': 'few',
                'MANY': 'many',
                'OTHER': 'other'
            };
        function _0x46e830(_0x4a0625) {
            var _0x24d574 = _0x19c303;
            _0x4a0625 = _0x4a0625 + '';
            var _0x54626d = _0x4a0625[_0x24d574(501)]('.');
            return _0x54626d == -1 ? 0 : _0x4a0625[_0x24d574(502)] - _0x54626d - 1;
        }
        function _0x1d0946(_0x4af21f, _0x1643fc) {
            var _0x4f70a5 = _0x19c303, _0x11fab8 = _0x1643fc;
            undefined === _0x11fab8 && (_0x11fab8 = Math[_0x4f70a5(503)](_0x46e830(_0x4af21f), 3));
            var _0x550845 = Math[_0x4f70a5(504)](10, _0x11fab8), _0x5e2f52 = (_0x4af21f * _0x550845 | 0) % _0x550845;
            return {
                'v': _0x11fab8,
                'f': _0x5e2f52
            };
        }
        _0x4a1525['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    _0x19c303(505),
                    _0x19c303(506)
                ],
                'DAY': [
                    _0x19c303(507),
                    _0x19c303(508),
                    _0x19c303(509),
                    _0x19c303(510),
                    'četvrtak',
                    _0x19c303(511),
                    _0x19c303(512)
                ],
                'ERANAMES': [
                    _0x19c303(513),
                    _0x19c303(514)
                ],
                'ERAS': [
                    _0x19c303(515),
                    _0x19c303(516)
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    'januar',
                    _0x19c303(517),
                    _0x19c303(518),
                    _0x19c303(519),
                    'maj',
                    'jun',
                    _0x19c303(520),
                    _0x19c303(521),
                    _0x19c303(522),
                    _0x19c303(523),
                    _0x19c303(524),
                    _0x19c303(525)
                ],
                'SHORTDAY': [
                    _0x19c303(526),
                    _0x19c303(527),
                    _0x19c303(528),
                    _0x19c303(529),
                    _0x19c303(530),
                    'pet',
                    'sub'
                ],
                'SHORTMONTH': [
                    'jan',
                    'feb',
                    _0x19c303(531),
                    _0x19c303(532),
                    _0x19c303(533),
                    'jun',
                    _0x19c303(520),
                    _0x19c303(534),
                    _0x19c303(535),
                    _0x19c303(536),
                    _0x19c303(537),
                    _0x19c303(538)
                ],
                'STANDALONEMONTH': [
                    _0x19c303(539),
                    _0x19c303(517),
                    _0x19c303(518),
                    _0x19c303(519),
                    'maj',
                    _0x19c303(540),
                    _0x19c303(520),
                    _0x19c303(521),
                    _0x19c303(522),
                    _0x19c303(523),
                    _0x19c303(524),
                    'decembar'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': _0x19c303(541),
                'longDate': _0x19c303(542),
                'medium': 'dd.MM.y. HH:mm:ss',
                'mediumDate': _0x19c303(543),
                'mediumTime': _0x19c303(544),
                'short': _0x19c303(545),
                'shortDate': _0x19c303(546),
                'shortTime': _0x19c303(547)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': _0x19c303(548),
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
                        'maxFrac': 0,
                        'minFrac': 0,
                        'minInt': 1,
                        'negPre': '-',
                        'negSuf': '\xA0\xA4',
                        'posPre': '',
                        'posSuf': '\xA0\xA4'
                    }
                ]
            },
            'id': _0x19c303(549),
            'localeID': _0x19c303(550),
            'pluralCat': function (_0x121f5f, _0x587a28) {
                var _0x3dd27d = _0x19c303, _0x9953f1 = _0x121f5f | 0, _0x43a070 = _0x1d0946(_0x121f5f, _0x587a28);
                if (_0x43a070['v'] == 0 && _0x9953f1 % 10 == 1 && _0x9953f1 % 100 != 11 || _0x43a070['f'] % 10 == 1 && _0x43a070['f'] % 100 != 11)
                    return _0x2f5f26['ONE'];
                if (_0x43a070['v'] == 0 && _0x9953f1 % 10 >= 2 && _0x9953f1 % 10 <= 4 && (_0x9953f1 % 100 < 12 || _0x9953f1 % 100 > 14) || _0x43a070['f'] % 10 >= 2 && _0x43a070['f'] % 10 <= 4 && (_0x43a070['f'] % 100 < 12 || _0x43a070['f'] % 100 > 14))
                    return _0x2f5f26[_0x3dd27d(551)];
                return _0x2f5f26['OTHER'];
            }
        });
    }
]);