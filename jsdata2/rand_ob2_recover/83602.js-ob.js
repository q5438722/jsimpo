angular[_0x517427(274)](_0x517427(275), [], [
    '$provide',
    function (_0x4ef31f) {
        var _0xe8f8d0 = _0x517427, _0x18a3ae = {
                'ZERO': _0xe8f8d0(276),
                'ONE': _0xe8f8d0(277),
                'TWO': 'two',
                'FEW': _0xe8f8d0(278),
                'MANY': _0xe8f8d0(279),
                'OTHER': _0xe8f8d0(280)
            };
        function _0x278103(_0x4ca610) {
            var _0x2948f6 = _0xe8f8d0;
            _0x4ca610 = _0x4ca610 + '';
            var _0x21c6fc = _0x4ca610['indexOf']('.');
            return _0x21c6fc == -1 ? 0 : _0x4ca610[_0x2948f6(281)] - _0x21c6fc - 1;
        }
        function _0x3153a2(_0x2adeb6, _0x5dac35) {
            var _0x3c944f = _0xe8f8d0, _0x24e438 = _0x5dac35;
            undefined === _0x24e438 && (_0x24e438 = Math[_0x3c944f(282)](_0x278103(_0x2adeb6), 3));
            var _0x3618f5 = Math[_0x3c944f(283)](10, _0x24e438), _0x1a42b7 = (_0x2adeb6 * _0x3618f5 | 0) % _0x3618f5;
            return {
                'v': _0x24e438,
                'f': _0x1a42b7
            };
        }
        _0x4ef31f[_0xe8f8d0(284)](_0xe8f8d0(285), {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    _0xe8f8d0(286),
                    _0xe8f8d0(287)
                ],
                'DAY': [
                    _0xe8f8d0(288),
                    'mɔ́ndi',
                    _0xe8f8d0(289),
                    _0xe8f8d0(290),
                    _0xe8f8d0(291),
                    'fúladé',
                    'séradé'
                ],
                'ERANAMES': [
                    _0xe8f8d0(292),
                    'ámvus Yésus Kirís'
                ],
                'ERAS': [
                    _0xe8f8d0(293),
                    'ayk'
                ],
                'FIRSTDAYOFWEEK': 0,
                'MONTH': [
                    _0xe8f8d0(294),
                    'ngɔn bɛ̌',
                    'ngɔn lála',
                    _0xe8f8d0(295),
                    _0xe8f8d0(296),
                    _0xe8f8d0(297),
                    _0xe8f8d0(298),
                    'ngɔn mwom',
                    _0xe8f8d0(299),
                    _0xe8f8d0(300),
                    _0xe8f8d0(301),
                    _0xe8f8d0(302)
                ],
                'SHORTDAY': [
                    _0xe8f8d0(303),
                    _0xe8f8d0(304),
                    'smb',
                    _0xe8f8d0(305),
                    'smn',
                    'fúl',
                    _0xe8f8d0(306)
                ],
                'SHORTMONTH': [
                    _0xe8f8d0(307),
                    _0xe8f8d0(308),
                    'ngl',
                    _0xe8f8d0(309),
                    _0xe8f8d0(310),
                    _0xe8f8d0(311),
                    _0xe8f8d0(312),
                    'ngm',
                    _0xe8f8d0(313),
                    _0xe8f8d0(314),
                    _0xe8f8d0(315),
                    _0xe8f8d0(316)
                ],
                'STANDALONEMONTH': [
                    _0xe8f8d0(294),
                    _0xe8f8d0(317),
                    _0xe8f8d0(318),
                    _0xe8f8d0(295),
                    _0xe8f8d0(296),
                    _0xe8f8d0(297),
                    _0xe8f8d0(298),
                    _0xe8f8d0(319),
                    'ngɔn ebulú',
                    'ngɔn awóm',
                    'ngɔn awóm ai dziá',
                    _0xe8f8d0(302)
                ],
                'WEEKENDRANGE': [
                    5,
                    6
                ],
                'fullDate': _0xe8f8d0(320),
                'longDate': _0xe8f8d0(321),
                'medium': _0xe8f8d0(322),
                'mediumDate': 'd MMM y',
                'mediumTime': _0xe8f8d0(323),
                'short': _0xe8f8d0(324),
                'shortDate': _0xe8f8d0(325),
                'shortTime': _0xe8f8d0(326)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': _0xe8f8d0(327),
                'DECIMAL_SEP': ',',
                'GROUP_SEP': '\xA0',
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
            'id': _0xe8f8d0(328),
            'localeID': _0xe8f8d0(329),
            'pluralCat': function (_0x51fcec, _0x3b2cb) {
                var _0x4663b3 = _0xe8f8d0, _0x475991 = _0x51fcec | 0, _0x4ff729 = _0x3153a2(_0x51fcec, _0x3b2cb);
                if (_0x475991 == 1 && _0x4ff729['v'] == 0)
                    return _0x18a3ae[_0x4663b3(330)];
                return _0x18a3ae[_0x4663b3(331)];
            }
        });
    }
]);