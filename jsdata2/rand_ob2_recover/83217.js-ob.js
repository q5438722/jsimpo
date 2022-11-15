angular[_0x3238f6(406)]('ngLocale', [], [
    _0x3238f6(407),
    function (_0x2aa2a0) {
        var _0x1ab367 = _0x3238f6, _0x5edbed = {
                'ZERO': 'zero',
                'ONE': _0x1ab367(408),
                'TWO': _0x1ab367(409),
                'FEW': _0x1ab367(410),
                'MANY': _0x1ab367(411),
                'OTHER': _0x1ab367(412)
            };
        function _0x4d2f13(_0x39b206) {
            var _0x17813e = _0x1ab367;
            _0x39b206 = _0x39b206 + '';
            var _0x4947a0 = _0x39b206['indexOf']('.');
            return _0x4947a0 == -1 ? 0 : _0x39b206[_0x17813e(413)] - _0x4947a0 - 1;
        }
        function _0x186856(_0x3ab8f6, _0x3307ef) {
            var _0x228262 = _0x1ab367, _0x506450 = _0x3307ef;
            undefined === _0x506450 && (_0x506450 = Math[_0x228262(414)](_0x4d2f13(_0x3ab8f6), 3));
            var _0x343ec7 = Math['pow'](10, _0x506450), _0x20d374 = (_0x3ab8f6 * _0x343ec7 | 0) % _0x343ec7;
            return {
                'v': _0x506450,
                'f': _0x20d374
            };
        }
        _0x2aa2a0[_0x1ab367(415)]('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    _0x1ab367(416),
                    _0x1ab367(417)
                ],
                'DAY': [
                    _0x1ab367(418),
                    _0x1ab367(419),
                    _0x1ab367(420),
                    'Arbaco',
                    _0x1ab367(421),
                    _0x1ab367(422),
                    'Sabti'
                ],
                'ERANAMES': [
                    'CK',
                    'CD'
                ],
                'ERAS': [
                    'CK',
                    'CD'
                ],
                'FIRSTDAYOFWEEK': 6,
                'MONTH': [
                    'Bisha Koobaad',
                    _0x1ab367(423),
                    _0x1ab367(424),
                    'Bisha Afraad',
                    'Bisha Shanaad',
                    'Bisha Lixaad',
                    _0x1ab367(425),
                    _0x1ab367(426),
                    _0x1ab367(427),
                    'Bisha Tobnaad',
                    _0x1ab367(428),
                    _0x1ab367(429)
                ],
                'SHORTDAY': [
                    'Axd',
                    _0x1ab367(430),
                    'Tal',
                    _0x1ab367(431),
                    _0x1ab367(432),
                    _0x1ab367(433),
                    _0x1ab367(434)
                ],
                'SHORTMONTH': [
                    _0x1ab367(435),
                    'Lab',
                    _0x1ab367(436),
                    _0x1ab367(437),
                    'Sha',
                    _0x1ab367(438),
                    _0x1ab367(439),
                    _0x1ab367(440),
                    _0x1ab367(441),
                    _0x1ab367(442),
                    _0x1ab367(443),
                    'LIT'
                ],
                'STANDALONEMONTH': [
                    'Bisha Koobaad',
                    'Bisha Labaad',
                    _0x1ab367(424),
                    _0x1ab367(444),
                    _0x1ab367(445),
                    _0x1ab367(446),
                    'Bisha Todobaad',
                    _0x1ab367(426),
                    _0x1ab367(427),
                    'Bisha Tobnaad',
                    _0x1ab367(428),
                    'Bisha Laba iyo Tobnaad'
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': 'EEEE, MMMM dd, y',
                'longDate': _0x1ab367(447),
                'medium': _0x1ab367(448),
                'mediumDate': _0x1ab367(449),
                'mediumTime': _0x1ab367(450),
                'short': _0x1ab367(451),
                'shortDate': _0x1ab367(452),
                'shortTime': _0x1ab367(453)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Birr',
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
            'id': _0x1ab367(454),
            'localeID': _0x1ab367(455),
            'pluralCat': function (_0x31bbd7, _0x21548c) {
                var _0x59bb3b = _0x1ab367, _0x19e061 = _0x31bbd7 | 0, _0x10041d = _0x186856(_0x31bbd7, _0x21548c);
                if (_0x19e061 == 1 && _0x10041d['v'] == 0)
                    return _0x5edbed[_0x59bb3b(456)];
                return _0x5edbed[_0x59bb3b(457)];
            }
        });
    }
]);