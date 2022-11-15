angular[_0x3a42eb(360)]('ngLocale', [], [
    '$provide',
    function (_0x407b42) {
        var _0x551625 = _0x3a42eb, _0x2edf63 = {
                'ZERO': _0x551625(361),
                'ONE': _0x551625(362),
                'TWO': _0x551625(363),
                'FEW': _0x551625(364),
                'MANY': _0x551625(365),
                'OTHER': _0x551625(366)
            };
        function _0x1844a7(_0x385d6f) {
            var _0x42dae9 = _0x551625;
            _0x385d6f = _0x385d6f + '';
            var _0x537011 = _0x385d6f['indexOf']('.');
            return _0x537011 == -1 ? 0 : _0x385d6f[_0x42dae9(367)] - _0x537011 - 1;
        }
        function _0xbf752f(_0x3fba21, _0x384ac5) {
            var _0xdcda44 = _0x551625, _0x412e21 = _0x384ac5;
            undefined === _0x412e21 && (_0x412e21 = Math['min'](_0x1844a7(_0x3fba21), 3));
            var _0x3a40ea = Math[_0xdcda44(368)](10, _0x412e21), _0x4a32d1 = (_0x3fba21 * _0x3a40ea | 0) % _0x3a40ea;
            return {
                'v': _0x412e21,
                'f': _0x4a32d1
            };
        }
        _0x407b42[_0x551625(369)](_0x551625(370), {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    _0x551625(371),
                    _0x551625(372),
                    _0x551625(373),
                    _0x551625(374),
                    'Alhamis',
                    _0x551625(375),
                    _0x551625(376)
                ],
                'ERANAMES': [
                    'Kafin haihuwar annab',
                    _0x551625(377)
                ],
                'ERAS': [
                    _0x551625(378),
                    _0x551625(379)
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    _0x551625(380),
                    _0x551625(381),
                    'Maris',
                    _0x551625(382),
                    _0x551625(383),
                    'Yuni',
                    'Yuli',
                    'Agusta',
                    _0x551625(384),
                    _0x551625(385),
                    _0x551625(386),
                    _0x551625(387)
                ],
                'SHORTDAY': [
                    _0x551625(388),
                    'Lit',
                    _0x551625(389),
                    'Lar',
                    _0x551625(390),
                    _0x551625(391),
                    _0x551625(392)
                ],
                'SHORTMONTH': [
                    _0x551625(393),
                    'Fab',
                    'Mar',
                    'Afi',
                    _0x551625(394),
                    'Yun',
                    _0x551625(395),
                    _0x551625(396),
                    _0x551625(397),
                    _0x551625(398),
                    _0x551625(399),
                    _0x551625(400)
                ],
                'STANDALONEMONTH': [
                    _0x551625(380),
                    _0x551625(381),
                    'Maris',
                    _0x551625(382),
                    _0x551625(383),
                    _0x551625(401),
                    _0x551625(402),
                    _0x551625(403),
                    'Satumba',
                    _0x551625(385),
                    _0x551625(386),
                    _0x551625(387)
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': _0x551625(404),
                'longDate': _0x551625(405),
                'medium': _0x551625(406),
                'mediumDate': 'd MMM, y',
                'mediumTime': _0x551625(407),
                'short': _0x551625(408),
                'shortDate': _0x551625(409),
                'shortTime': _0x551625(410)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '\u20A6',
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
                        'negPre': _0x551625(411),
                        'negSuf': '',
                        'posPre': '\xA4\xA0',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'ha',
            'localeID': 'ha',
            'pluralCat': function (_0x2d8cc5, _0x435a90) {
                var _0x4d84e5 = _0x551625, _0x339373 = _0x2d8cc5 | 0, _0x587669 = _0xbf752f(_0x2d8cc5, _0x435a90);
                if (_0x339373 == 1 && _0x587669['v'] == 0)
                    return _0x2edf63[_0x4d84e5(412)];
                return _0x2edf63[_0x4d84e5(413)];
            }
        });
    }
]);