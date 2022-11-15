'use strict';
var _0x4c39 = [
    'length',
    'pow',
    'value',
    '$locale',
    'Lahadi',
    'Litinin',
    'Talata',
    'Laraba',
    'Jummaʼa',
    'Asabar',
    'Bayan\x20haihuwar\x20annab',
    'KHAI',
    'BHAI',
    'Janairu',
    'Faburairu',
    'Afirilu',
    'Mayu',
    'Satumba',
    'Oktoba',
    'Nuwamba',
    'Disamba',
    'Lah',
    'Tal',
    'Alh',
    'Jum',
    'Asa',
    'Jan',
    'May',
    'Yul',
    'Agu',
    'Sat',
    'Okt',
    'Nuw',
    'Dis',
    'Yuni',
    'Yuli',
    'Agusta',
    'EEEE,\x20d\x20MMMM,\x20y',
    'd\x20MMMM,\x20y',
    'd\x20MMM,\x20y\x20HH:mm:ss',
    'HH:mm:ss',
    'd/M/yy\x20HH:mm',
    'd/M/yy',
    'HH:mm',
    '-¤\u00a0',
    'ONE',
    'OTHER',
    '363238clLMZj',
    '1nkosuU',
    '1FlXDiU',
    '161478WFJibq',
    '407562xcEBdu',
    '324270KBUDPe',
    '1gTZCzL',
    '149047HsjfED',
    '435371vBqctJ',
    '95115PyWZgA',
    '6zYPrGV',
    'module',
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
var _0x3a42eb = _0x4211;
function _0x4211(_0x2c1b05, _0x28be71) {
    return _0x4211 = function (_0x4c3987, _0x4211aa) {
        _0x4c3987 = _0x4c3987 - 0x15d;
        var _0x28ed0f = _0x4c39[_0x4c3987];
        return _0x28ed0f;
    }, _0x4211(_0x2c1b05, _0x28be71);
}
(function (_0x1c206b, _0x55afa3) {
    var _0x4daf8e = _0x4211;
    while (!![]) {
        try {
            var _0x7befbf = -parseInt(_0x4daf8e(0x15d)) * parseInt(_0x4daf8e(0x15e)) + -parseInt(_0x4daf8e(0x15f)) * -parseInt(_0x4daf8e(0x160)) + -parseInt(_0x4daf8e(0x161)) + -parseInt(_0x4daf8e(0x162)) + parseInt(_0x4daf8e(0x163)) * parseInt(_0x4daf8e(0x164)) + parseInt(_0x4daf8e(0x165)) + parseInt(_0x4daf8e(0x166)) * parseInt(_0x4daf8e(0x167));
            if (_0x7befbf === _0x55afa3)
                break;
            else
                _0x1c206b['push'](_0x1c206b['shift']());
        } catch (_0x55db93) {
            _0x1c206b['push'](_0x1c206b['shift']());
        }
    }
}(_0x4c39, 0x3614c));
angular[_0x3a42eb(0x168)]('ngLocale', [], [
    '$provide',
    function (_0x407b42) {
        var _0x551625 = _0x3a42eb, _0x2edf63 = {
                'ZERO': _0x551625(0x169),
                'ONE': _0x551625(0x16a),
                'TWO': _0x551625(0x16b),
                'FEW': _0x551625(0x16c),
                'MANY': _0x551625(0x16d),
                'OTHER': _0x551625(0x16e)
            };
        function _0x1844a7(_0x385d6f) {
            var _0x42dae9 = _0x551625;
            _0x385d6f = _0x385d6f + '';
            var _0x537011 = _0x385d6f['indexOf']('.');
            return _0x537011 == -0x1 ? 0x0 : _0x385d6f[_0x42dae9(0x16f)] - _0x537011 - 0x1;
        }
        function _0xbf752f(_0x3fba21, _0x384ac5) {
            var _0xdcda44 = _0x551625, _0x412e21 = _0x384ac5;
            undefined === _0x412e21 && (_0x412e21 = Math['min'](_0x1844a7(_0x3fba21), 0x3));
            var _0x3a40ea = Math[_0xdcda44(0x170)](0xa, _0x412e21), _0x4a32d1 = (_0x3fba21 * _0x3a40ea | 0x0) % _0x3a40ea;
            return {
                'v': _0x412e21,
                'f': _0x4a32d1
            };
        }
        _0x407b42[_0x551625(0x171)](_0x551625(0x172), {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    _0x551625(0x173),
                    _0x551625(0x174),
                    _0x551625(0x175),
                    _0x551625(0x176),
                    'Alhamis',
                    _0x551625(0x177),
                    _0x551625(0x178)
                ],
                'ERANAMES': [
                    'Kafin\x20haihuwar\x20annab',
                    _0x551625(0x179)
                ],
                'ERAS': [
                    _0x551625(0x17a),
                    _0x551625(0x17b)
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    _0x551625(0x17c),
                    _0x551625(0x17d),
                    'Maris',
                    _0x551625(0x17e),
                    _0x551625(0x17f),
                    'Yuni',
                    'Yuli',
                    'Agusta',
                    _0x551625(0x180),
                    _0x551625(0x181),
                    _0x551625(0x182),
                    _0x551625(0x183)
                ],
                'SHORTDAY': [
                    _0x551625(0x184),
                    'Lit',
                    _0x551625(0x185),
                    'Lar',
                    _0x551625(0x186),
                    _0x551625(0x187),
                    _0x551625(0x188)
                ],
                'SHORTMONTH': [
                    _0x551625(0x189),
                    'Fab',
                    'Mar',
                    'Afi',
                    _0x551625(0x18a),
                    'Yun',
                    _0x551625(0x18b),
                    _0x551625(0x18c),
                    _0x551625(0x18d),
                    _0x551625(0x18e),
                    _0x551625(0x18f),
                    _0x551625(0x190)
                ],
                'STANDALONEMONTH': [
                    _0x551625(0x17c),
                    _0x551625(0x17d),
                    'Maris',
                    _0x551625(0x17e),
                    _0x551625(0x17f),
                    _0x551625(0x191),
                    _0x551625(0x192),
                    _0x551625(0x193),
                    'Satumba',
                    _0x551625(0x181),
                    _0x551625(0x182),
                    _0x551625(0x183)
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x551625(0x194),
                'longDate': _0x551625(0x195),
                'medium': _0x551625(0x196),
                'mediumDate': 'd\x20MMM,\x20y',
                'mediumTime': _0x551625(0x197),
                'short': _0x551625(0x198),
                'shortDate': _0x551625(0x199),
                'shortTime': _0x551625(0x19a)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '₦',
                'DECIMAL_SEP': '.',
                'GROUP_SEP': ',',
                'PATTERNS': [
                    {
                        'gSize': 0x3,
                        'lgSize': 0x3,
                        'maxFrac': 0x3,
                        'minFrac': 0x0,
                        'minInt': 0x1,
                        'negPre': '-',
                        'negSuf': '',
                        'posPre': '',
                        'posSuf': ''
                    },
                    {
                        'gSize': 0x3,
                        'lgSize': 0x3,
                        'maxFrac': 0x2,
                        'minFrac': 0x2,
                        'minInt': 0x1,
                        'negPre': _0x551625(0x19b),
                        'negSuf': '',
                        'posPre': '¤\u00a0',
                        'posSuf': ''
                    }
                ]
            },
            'id': 'ha',
            'localeID': 'ha',
            'pluralCat': function (_0x2d8cc5, _0x435a90) {
                var _0x4d84e5 = _0x551625, _0x339373 = _0x2d8cc5 | 0x0, _0x587669 = _0xbf752f(_0x2d8cc5, _0x435a90);
                if (_0x339373 == 0x1 && _0x587669['v'] == 0x0)
                    return _0x2edf63[_0x4d84e5(0x19c)];
                return _0x2edf63[_0x4d84e5(0x19d)];
            }
        });
    }
]);
