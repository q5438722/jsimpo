
var _0x487055 = _0x5cf7;
(function (_0x111a3d, _0x29a789) {
    var _0xf2507b = _0x5cf7;
    while (!![]) {
        try {
            var _0x95069f = -parseInt(_0xf2507b(0x149)) * parseInt(_0xf2507b(0x14a)) + parseInt(_0xf2507b(0x14b)) * -parseInt(_0xf2507b(0x14c)) + parseInt(_0xf2507b(0x14d)) * -parseInt(_0xf2507b(0x14e)) + parseInt(_0xf2507b(0x14f)) * -parseInt(_0xf2507b(0x150)) + -parseInt(_0xf2507b(0x151)) + parseInt(_0xf2507b(0x152)) * -parseInt(_0xf2507b(0x153)) + parseInt(_0xf2507b(0x154)) * parseInt(_0xf2507b(0x155));
            if (_0x95069f === _0x29a789)
                break;
            else
                _0x111a3d['push'](_0x111a3d['shift']());
        } catch (_0xb1b638) {
            _0x111a3d['push'](_0x111a3d['shift']());
        }
    }
}(_0x507b, 0xf3540 + 0x12cf8b * 0x1 + -0x5a7b5 * 0x4));
var assert = require(_0x487055(0x156)), vows = require(_0x487055(0x157)), director = require(_0x487055(0x158));
function _0x5cf7(_0x36804a, _0xee46f9) {
    return _0x5cf7 = function (_0xc1f0db, _0x55c39e) {
        _0xc1f0db = _0xc1f0db - (0x2126 * 0x1 + -0x92 * 0x3d + -0x7 * -0x6b);
        var _0x1a3390 = _0x507b[_0xc1f0db];
        return _0x1a3390;
    }, _0x5cf7(_0x36804a, _0xee46f9);
}
function assertRoute(_0x12ca68, _0x37d913, _0x4cfe0b) {
    var _0x36e8be = _0x487055, _0x22fdbd = {
            'mXfuR': function (_0x2e3a84, _0x3cf8e6) {
                return _0x2e3a84 === _0x3cf8e6;
            }
        };
    if (_0x22fdbd[_0x36e8be(0x159)](_0x37d913[_0x36e8be(0x15a)], 0x1686 + 0x12d8 + -0x295d * 0x1))
        return assert[_0x36e8be(0x15b)](_0x4cfe0b[_0x37d913['shift']()], _0x12ca68);
    _0x4cfe0b = _0x4cfe0b[_0x37d913['shift']()], assert['isObject'](_0x4cfe0b), assertRoute(_0x12ca68, _0x37d913, _0x4cfe0b);
}
vows[_0x487055(0x15c)]('director/core/mount')[_0x487055(0x15d)]({
    'An\x20instance\x20of\x20director.Router': {
        'with\x20no\x20preconfigured\x20params': {
            'topic': new director['Router'](),
            'the\x20mount()\x20method': {
                'should\x20sanitize\x20the\x20routes\x20correctly': function (_0x49b9b6) {
                    var _0x457130 = _0x487055, _0x34d8d7 = {
                            'EYDBV': function (_0x3ac9c6, _0x16301b, _0x32a4ec, _0x2703f9) {
                                return _0x3ac9c6(_0x16301b, _0x32a4ec, _0x2703f9);
                            },
                            'cdjbX': _0x457130(0x15e),
                            'glYdd': function (_0xbc0e7f, _0x42ec50, _0x429c2a, _0x2d5663) {
                                return _0xbc0e7f(_0x42ec50, _0x429c2a, _0x2d5663);
                            },
                            'zHXYO': 'before',
                            'ehkkp': _0x457130(0x15f),
                            'rdlGR': _0x457130(0x160),
                            'zcYes': 'foo',
                            'xlagG': _0x457130(0x161),
                            'tMRxF': '([_.()!\x5c\x20%@&a-zA-Z0-9-]+)',
                            'OftxT': 'jitsu',
                            'frVaV': function (_0x4e0f71, _0x2233be, _0x10a90a, _0x23f8fd) {
                                return _0x4e0f71(_0x2233be, _0x10a90a, _0x23f8fd);
                            },
                            'XVHne': _0x457130(0x162),
                            'YSxLA': _0x457130(0x163),
                            'bGTpm': function (_0x56a57b, _0x226415, _0x1d1f7d, _0x226647) {
                                return _0x56a57b(_0x226415, _0x1d1f7d, _0x226647);
                            },
                            'lWfes': _0x457130(0x164),
                            'HxnTP': '([._a-zA-Z0-9-%()]+)'
                        };
                    function _0x8a34bc() {
                    }
                    function _0xab8a60() {
                    }
                    function _0x1b051a() {
                    }
                    function _0x5d5964() {
                    }
                    function _0x5b612c() {
                    }
                    var _0xbdc420 = [
                        _0x8a34bc,
                        _0xab8a60
                    ];
                    _0x49b9b6[_0x457130(0x165)]({
                        '/': {
                            'before': _0x5b612c,
                            'on': _0x5b612c,
                            'after': _0x5b612c,
                            '/nesting': {
                                'on': _0x8a34bc,
                                '/deep': _0xab8a60
                            }
                        },
                        '/foo': {
                            '/bar': _0x8a34bc,
                            '/*': _0xab8a60,
                            '/jitsu/then': { 'before': _0x8a34bc }
                        },
                        '/foo/bazz': { '/buzz': _0x1b051a },
                        '/foo/jitsu': { '/then': _0xbdc420 },
                        '/foo/jitsu/then/now': _0xab8a60,
                        '/foo/:dog': _0x5d5964
                    }), _0x34d8d7['EYDBV'](assertRoute, _0x5b612c, ['on'], _0x49b9b6['routes']), _0x34d8d7[_0x457130(0x166)](assertRoute, _0x5b612c, [_0x34d8d7[_0x457130(0x167)]], _0x49b9b6[_0x457130(0x168)]), _0x34d8d7[_0x457130(0x169)](assertRoute, _0x5b612c, [_0x34d8d7[_0x457130(0x16a)]], _0x49b9b6[_0x457130(0x168)]), _0x34d8d7[_0x457130(0x169)](assertRoute, _0x8a34bc, [
                        _0x34d8d7[_0x457130(0x16b)],
                        'on'
                    ], _0x49b9b6[_0x457130(0x168)]), assertRoute(_0xab8a60, [
                        _0x34d8d7[_0x457130(0x16b)],
                        _0x34d8d7[_0x457130(0x16c)],
                        'on'
                    ], _0x49b9b6[_0x457130(0x168)]), _0x34d8d7[_0x457130(0x169)](assertRoute, _0x8a34bc, [
                        _0x34d8d7['zcYes'],
                        _0x34d8d7[_0x457130(0x16d)],
                        'on'
                    ], _0x49b9b6[_0x457130(0x168)]), assertRoute(_0xab8a60, [
                        _0x34d8d7[_0x457130(0x16e)],
                        _0x34d8d7[_0x457130(0x16f)],
                        'on'
                    ], _0x49b9b6[_0x457130(0x168)]), _0x34d8d7[_0x457130(0x169)](assertRoute, _0xbdc420, [
                        _0x34d8d7[_0x457130(0x16e)],
                        _0x34d8d7['OftxT'],
                        _0x457130(0x162),
                        'on'
                    ], _0x49b9b6[_0x457130(0x168)]), _0x34d8d7['frVaV'](assertRoute, _0x8a34bc, [
                        _0x457130(0x170),
                        _0x34d8d7[_0x457130(0x171)],
                        _0x34d8d7[_0x457130(0x172)],
                        _0x34d8d7[_0x457130(0x16a)]
                    ], _0x49b9b6[_0x457130(0x168)]), assertRoute(_0x1b051a, [
                        _0x457130(0x170),
                        _0x457130(0x173),
                        _0x34d8d7['YSxLA'],
                        'on'
                    ], _0x49b9b6[_0x457130(0x168)]), _0x34d8d7['bGTpm'](assertRoute, _0xab8a60, [
                        _0x34d8d7[_0x457130(0x16e)],
                        _0x457130(0x174),
                        _0x457130(0x162),
                        _0x34d8d7[_0x457130(0x175)],
                        'on'
                    ], _0x49b9b6[_0x457130(0x168)]), assertRoute(_0x5d5964, [
                        _0x34d8d7[_0x457130(0x16e)],
                        _0x34d8d7['HxnTP'],
                        'on'
                    ], _0x49b9b6[_0x457130(0x168)]);
                },
                'should\x20accept\x20string\x20path': function (_0x489a35) {
                    var _0x34b34d = _0x487055, _0x1aad1c = { 'cvbne': _0x34b34d(0x176) };
                    function _0x41741c() {
                    }
                    _0x489a35[_0x34b34d(0x165)]({ '/dogs': { 'on': _0x41741c } }, _0x1aad1c[_0x34b34d(0x177)]), assertRoute(_0x41741c, [
                        _0x34b34d(0x178),
                        _0x34b34d(0x179),
                        'on'
                    ], _0x489a35['routes']);
                }
            }
        },
        'with\x20preconfigured\x20params': {
            'topic': function () {
                var _0x5814f4 = _0x487055, _0x3a557f = {
                        'vxIJA': _0x5814f4(0x17a),
                        'GhZJO': _0x5814f4(0x17b)
                    }, _0x2bc0f3 = _0x5814f4(0x17c)[_0x5814f4(0x17d)]('|'), _0x2ad290 = -0x939 * 0x1 + -0xcb3 * -0x1 + -0x37a;
                while (!![]) {
                    switch (_0x2bc0f3[_0x2ad290++]) {
                    case '0':
                        _0x5204fb[_0x5814f4(0x17e)](_0x3a557f[_0x5814f4(0x17f)], /([A-Z][A-Za-z]+)/);
                        continue;
                    case '1':
                        var _0x5204fb = new director[(_0x5814f4(0x180))]();
                        continue;
                    case '2':
                        return _0x5204fb;
                    case '3':
                        _0x5204fb[_0x5814f4(0x17e)]('city', _0x3a557f[_0x5814f4(0x181)]);
                        continue;
                    case '4':
                        _0x5204fb[_0x5814f4(0x17e)](_0x5814f4(0x182), /([\d]{5})/);
                        continue;
                    }
                    break;
                }
            },
            'should\x20sanitize\x20the\x20routes\x20correctly': function (_0x576cd2) {
                var _0xd12550 = _0x487055, _0x5400a5 = {
                        'uncTP': function (_0xc53d7c, _0x43b84b, _0x62bd7a, _0xce22e6) {
                            return _0xc53d7c(_0x43b84b, _0x62bd7a, _0xce22e6);
                        },
                        'YhJbC': _0xd12550(0x183),
                        'HMEWk': _0xd12550(0x17b),
                        'dldwe': _0xd12550(0x184),
                        'KuRJc': function (_0x20dfd4, _0x59556a, _0x442c0a, _0x37c31d) {
                            return _0x20dfd4(_0x59556a, _0x442c0a, _0x37c31d);
                        },
                        'cDVTq': _0xd12550(0x185)
                    };
                function _0x12ecad() {
                }
                function _0x501149() {
                }
                _0x576cd2[_0xd12550(0x165)]({
                    '/usa/:city/:zip': _0x12ecad,
                    '/world': { '/:country': { '/:city/:zip': _0x501149 } }
                }), _0x5400a5['uncTP'](assertRoute, _0x12ecad, [
                    _0x5400a5[_0xd12550(0x186)],
                    _0x5400a5[_0xd12550(0x187)],
                    _0x5400a5['dldwe'],
                    'on'
                ], _0x576cd2['routes']), _0x5400a5[_0xd12550(0x188)](assertRoute, _0x501149, [
                    _0xd12550(0x189),
                    _0x5400a5[_0xd12550(0x18a)],
                    '([\x5cw\x5c-]+)',
                    _0x5400a5['dldwe'],
                    'on'
                ], _0x576cd2[_0xd12550(0x168)]);
            }
        }
    }
})[_0x487055(0x18b)](module);
