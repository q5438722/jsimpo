'use strict';
var _0x18ab = [
    'maj',
    'avg',
    'sep',
    'okt',
    'nov',
    'dec',
    'januar',
    'jun',
    'EEEE,\x20dd.\x20MMMM\x20y.',
    'dd.\x20MMMM\x20y.',
    'dd.MM.y.',
    'HH:mm:ss',
    'd.M.yy.\x20HH:mm',
    'd.M.yy.',
    'HH:mm',
    'din',
    'sr-latn-rs',
    'sr_Latn_RS',
    'FEW',
    '29888yCfAup',
    '1ReZNrL',
    '200366CCfJnw',
    '15OgiIOr',
    '11801jDcpON',
    '2441DsdUXT',
    '3ApJXqS',
    '51279sCwaSc',
    '3wmIHwf',
    '279373ehHwMO',
    '1FdVjyu',
    '261347lfZbHR',
    'ngLocale',
    '$provide',
    'zero',
    'one',
    'two',
    'indexOf',
    'length',
    'min',
    'pow',
    'pre\x20podne',
    'po\x20podne',
    'nedelja',
    'ponedeljak',
    'utorak',
    'sreda',
    'petak',
    'subota',
    'pre\x20nove\x20ere',
    'nove\x20ere',
    'p.\x20n.\x20e.',
    'n.\x20e.',
    'februar',
    'mart',
    'april',
    'jul',
    'avgust',
    'septembar',
    'oktobar',
    'novembar',
    'decembar',
    'ned',
    'pon',
    'uto',
    'sre',
    'čet',
    'mar',
    'apr'
];
var _0x23f446 = _0x3732;
function _0x3732(_0x11ec48, _0x1dc8a2) {
    return _0x3732 = function (_0x18ab6a, _0x373293) {
        _0x18ab6a = _0x18ab6a - 0x1e4;
        var _0x37add8 = _0x18ab[_0x18ab6a];
        return _0x37add8;
    }, _0x3732(_0x11ec48, _0x1dc8a2);
}
(function (_0x55656d, _0x201352) {
    var _0x2f6e2f = _0x3732;
    while (!![]) {
        try {
            var _0x403cf3 = parseInt(_0x2f6e2f(0x1e4)) * -parseInt(_0x2f6e2f(0x1e5)) + parseInt(_0x2f6e2f(0x1e6)) + -parseInt(_0x2f6e2f(0x1e7)) * parseInt(_0x2f6e2f(0x1e8)) + parseInt(_0x2f6e2f(0x1e9)) * -parseInt(_0x2f6e2f(0x1ea)) + -parseInt(_0x2f6e2f(0x1eb)) * -parseInt(_0x2f6e2f(0x1ec)) + parseInt(_0x2f6e2f(0x1ed)) * parseInt(_0x2f6e2f(0x1ee)) + -parseInt(_0x2f6e2f(0x1ef));
            if (_0x403cf3 === _0x201352)
                break;
            else
                _0x55656d['push'](_0x55656d['shift']());
        } catch (_0x16c599) {
            _0x55656d['push'](_0x55656d['shift']());
        }
    }
}(_0x18ab, 0x26933));
angular['module'](_0x23f446(0x1f0), [], [
    _0x23f446(0x1f1),
    function (_0x4a1525) {
        var _0x19c303 = _0x23f446, _0x2f5f26 = {
                'ZERO': _0x19c303(0x1f2),
                'ONE': _0x19c303(0x1f3),
                'TWO': _0x19c303(0x1f4),
                'FEW': 'few',
                'MANY': 'many',
                'OTHER': 'other'
            };
        function _0x46e830(_0x4a0625) {
            var _0x24d574 = _0x19c303;
            _0x4a0625 = _0x4a0625 + '';
            var _0x54626d = _0x4a0625[_0x24d574(0x1f5)]('.');
            return _0x54626d == -0x1 ? 0x0 : _0x4a0625[_0x24d574(0x1f6)] - _0x54626d - 0x1;
        }
        function _0x1d0946(_0x4af21f, _0x1643fc) {
            var _0x4f70a5 = _0x19c303, _0x11fab8 = _0x1643fc;
            undefined === _0x11fab8 && (_0x11fab8 = Math[_0x4f70a5(0x1f7)](_0x46e830(_0x4af21f), 0x3));
            var _0x550845 = Math[_0x4f70a5(0x1f8)](0xa, _0x11fab8), _0x5e2f52 = (_0x4af21f * _0x550845 | 0x0) % _0x550845;
            return {
                'v': _0x11fab8,
                'f': _0x5e2f52
            };
        }
        _0x4a1525['value']('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    _0x19c303(0x1f9),
                    _0x19c303(0x1fa)
                ],
                'DAY': [
                    _0x19c303(0x1fb),
                    _0x19c303(0x1fc),
                    _0x19c303(0x1fd),
                    _0x19c303(0x1fe),
                    'četvrtak',
                    _0x19c303(0x1ff),
                    _0x19c303(0x200)
                ],
                'ERANAMES': [
                    _0x19c303(0x201),
                    _0x19c303(0x202)
                ],
                'ERAS': [
                    _0x19c303(0x203),
                    _0x19c303(0x204)
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    'januar',
                    _0x19c303(0x205),
                    _0x19c303(0x206),
                    _0x19c303(0x207),
                    'maj',
                    'jun',
                    _0x19c303(0x208),
                    _0x19c303(0x209),
                    _0x19c303(0x20a),
                    _0x19c303(0x20b),
                    _0x19c303(0x20c),
                    _0x19c303(0x20d)
                ],
                'SHORTDAY': [
                    _0x19c303(0x20e),
                    _0x19c303(0x20f),
                    _0x19c303(0x210),
                    _0x19c303(0x211),
                    _0x19c303(0x212),
                    'pet',
                    'sub'
                ],
                'SHORTMONTH': [
                    'jan',
                    'feb',
                    _0x19c303(0x213),
                    _0x19c303(0x214),
                    _0x19c303(0x215),
                    'jun',
                    _0x19c303(0x208),
                    _0x19c303(0x216),
                    _0x19c303(0x217),
                    _0x19c303(0x218),
                    _0x19c303(0x219),
                    _0x19c303(0x21a)
                ],
                'STANDALONEMONTH': [
                    _0x19c303(0x21b),
                    _0x19c303(0x205),
                    _0x19c303(0x206),
                    _0x19c303(0x207),
                    'maj',
                    _0x19c303(0x21c),
                    _0x19c303(0x208),
                    _0x19c303(0x209),
                    _0x19c303(0x20a),
                    _0x19c303(0x20b),
                    _0x19c303(0x20c),
                    'decembar'
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x19c303(0x21d),
                'longDate': _0x19c303(0x21e),
                'medium': 'dd.MM.y.\x20HH:mm:ss',
                'mediumDate': _0x19c303(0x21f),
                'mediumTime': _0x19c303(0x220),
                'short': _0x19c303(0x221),
                'shortDate': _0x19c303(0x222),
                'shortTime': _0x19c303(0x223)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': _0x19c303(0x224),
                'DECIMAL_SEP': ',',
                'GROUP_SEP': '.',
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
                        'maxFrac': 0x0,
                        'minFrac': 0x0,
                        'minInt': 0x1,
                        'negPre': '-',
                        'negSuf': '\u00a0¤',
                        'posPre': '',
                        'posSuf': '\u00a0¤'
                    }
                ]
            },
            'id': _0x19c303(0x225),
            'localeID': _0x19c303(0x226),
            'pluralCat': function (_0x121f5f, _0x587a28) {
                var _0x3dd27d = _0x19c303, _0x9953f1 = _0x121f5f | 0x0, _0x43a070 = _0x1d0946(_0x121f5f, _0x587a28);
                if (_0x43a070['v'] == 0x0 && _0x9953f1 % 0xa == 0x1 && _0x9953f1 % 0x64 != 0xb || _0x43a070['f'] % 0xa == 0x1 && _0x43a070['f'] % 0x64 != 0xb)
                    return _0x2f5f26['ONE'];
                if (_0x43a070['v'] == 0x0 && _0x9953f1 % 0xa >= 0x2 && _0x9953f1 % 0xa <= 0x4 && (_0x9953f1 % 0x64 < 0xc || _0x9953f1 % 0x64 > 0xe) || _0x43a070['f'] % 0xa >= 0x2 && _0x43a070['f'] % 0xa <= 0x4 && (_0x43a070['f'] % 0x64 < 0xc || _0x43a070['f'] % 0x64 > 0xe))
                    return _0x2f5f26[_0x3dd27d(0x227)];
                return _0x2f5f26['OTHER'];
            }
        });
    }
]);
