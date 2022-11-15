var assert = require(_0x487055(342)), vows = require(_0x487055(343)), director = require(_0x487055(344));
function _0x5cf7(_0x36804a, _0xee46f9) {
    return _0x5cf7 = function (_0xc1f0db, _0x55c39e) {
        _0xc1f0db = _0xc1f0db - (8486 * 1 + -146 * 61 + -7 * -107);
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
    if (_0x22fdbd[_0x36e8be(345)](_0x37d913[_0x36e8be(346)], 5766 + 4824 + -10589 * 1))
        return assert[_0x36e8be(347)](_0x4cfe0b[_0x37d913['shift']()], _0x12ca68);
    _0x4cfe0b = _0x4cfe0b[_0x37d913['shift']()], assert['isObject'](_0x4cfe0b), assertRoute(_0x12ca68, _0x37d913, _0x4cfe0b);
}
vows[_0x487055(348)]('director/core/mount')[_0x487055(349)]({
    'An instance of director.Router': {
        'with no preconfigured params': {
            'topic': new director['Router'](),
            'the mount() method': {
                'should sanitize the routes correctly': function (_0x49b9b6) {
                    var _0x457130 = _0x487055, _0x34d8d7 = {
                            'EYDBV': function (_0x3ac9c6, _0x16301b, _0x32a4ec, _0x2703f9) {
                                return _0x3ac9c6(_0x16301b, _0x32a4ec, _0x2703f9);
                            },
                            'cdjbX': _0x457130(350),
                            'glYdd': function (_0xbc0e7f, _0x42ec50, _0x429c2a, _0x2d5663) {
                                return _0xbc0e7f(_0x42ec50, _0x429c2a, _0x2d5663);
                            },
                            'zHXYO': 'before',
                            'ehkkp': _0x457130(351),
                            'rdlGR': _0x457130(352),
                            'zcYes': 'foo',
                            'xlagG': _0x457130(353),
                            'tMRxF': '([_.()!\\ %@&a-zA-Z0-9-]+)',
                            'OftxT': 'jitsu',
                            'frVaV': function (_0x4e0f71, _0x2233be, _0x10a90a, _0x23f8fd) {
                                return _0x4e0f71(_0x2233be, _0x10a90a, _0x23f8fd);
                            },
                            'XVHne': _0x457130(354),
                            'YSxLA': _0x457130(355),
                            'bGTpm': function (_0x56a57b, _0x226415, _0x1d1f7d, _0x226647) {
                                return _0x56a57b(_0x226415, _0x1d1f7d, _0x226647);
                            },
                            'lWfes': _0x457130(356),
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
                    _0x49b9b6[_0x457130(357)]({
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
                    }), _0x34d8d7['EYDBV'](assertRoute, _0x5b612c, ['on'], _0x49b9b6['routes']), _0x34d8d7[_0x457130(358)](assertRoute, _0x5b612c, [_0x34d8d7[_0x457130(359)]], _0x49b9b6[_0x457130(360)]), _0x34d8d7[_0x457130(361)](assertRoute, _0x5b612c, [_0x34d8d7[_0x457130(362)]], _0x49b9b6[_0x457130(360)]), _0x34d8d7[_0x457130(361)](assertRoute, _0x8a34bc, [
                        _0x34d8d7[_0x457130(363)],
                        'on'
                    ], _0x49b9b6[_0x457130(360)]), assertRoute(_0xab8a60, [
                        _0x34d8d7[_0x457130(363)],
                        _0x34d8d7[_0x457130(364)],
                        'on'
                    ], _0x49b9b6[_0x457130(360)]), _0x34d8d7[_0x457130(361)](assertRoute, _0x8a34bc, [
                        _0x34d8d7['zcYes'],
                        _0x34d8d7[_0x457130(365)],
                        'on'
                    ], _0x49b9b6[_0x457130(360)]), assertRoute(_0xab8a60, [
                        _0x34d8d7[_0x457130(366)],
                        _0x34d8d7[_0x457130(367)],
                        'on'
                    ], _0x49b9b6[_0x457130(360)]), _0x34d8d7[_0x457130(361)](assertRoute, _0xbdc420, [
                        _0x34d8d7[_0x457130(366)],
                        _0x34d8d7['OftxT'],
                        _0x457130(354),
                        'on'
                    ], _0x49b9b6[_0x457130(360)]), _0x34d8d7['frVaV'](assertRoute, _0x8a34bc, [
                        _0x457130(368),
                        _0x34d8d7[_0x457130(369)],
                        _0x34d8d7[_0x457130(370)],
                        _0x34d8d7[_0x457130(362)]
                    ], _0x49b9b6[_0x457130(360)]), assertRoute(_0x1b051a, [
                        _0x457130(368),
                        _0x457130(371),
                        _0x34d8d7['YSxLA'],
                        'on'
                    ], _0x49b9b6[_0x457130(360)]), _0x34d8d7['bGTpm'](assertRoute, _0xab8a60, [
                        _0x34d8d7[_0x457130(366)],
                        _0x457130(372),
                        _0x457130(354),
                        _0x34d8d7[_0x457130(373)],
                        'on'
                    ], _0x49b9b6[_0x457130(360)]), assertRoute(_0x5d5964, [
                        _0x34d8d7[_0x457130(366)],
                        _0x34d8d7['HxnTP'],
                        'on'
                    ], _0x49b9b6[_0x457130(360)]);
                },
                'should accept string path': function (_0x489a35) {
                    var _0x34b34d = _0x487055, _0x1aad1c = { 'cvbne': _0x34b34d(374) };
                    function _0x41741c() {
                    }
                    _0x489a35[_0x34b34d(357)]({ '/dogs': { 'on': _0x41741c } }, _0x1aad1c[_0x34b34d(375)]), assertRoute(_0x41741c, [
                        _0x34b34d(376),
                        _0x34b34d(377),
                        'on'
                    ], _0x489a35['routes']);
                }
            }
        },
        'with preconfigured params': {
            'topic': function () {
                var _0x5814f4 = _0x487055, _0x3a557f = {
                        'vxIJA': _0x5814f4(378),
                        'GhZJO': _0x5814f4(379)
                    }, _0x2bc0f3 = _0x5814f4(380)[_0x5814f4(381)]('|'), _0x2ad290 = -2361 * 1 + -3251 * -1 + -890;
                while (!![]) {
                    switch (_0x2bc0f3[_0x2ad290++]) {
                    case '0':
                        _0x5204fb[_0x5814f4(382)](_0x3a557f[_0x5814f4(383)], /([A-Z][A-Za-z]+)/);
                        continue;
                    case '1':
                        var _0x5204fb = new director[(_0x5814f4(384))]();
                        continue;
                    case '2':
                        return _0x5204fb;
                    case '3':
                        _0x5204fb[_0x5814f4(382)]('city', _0x3a557f[_0x5814f4(385)]);
                        continue;
                    case '4':
                        _0x5204fb[_0x5814f4(382)](_0x5814f4(386), /([\d]{5})/);
                        continue;
                    }
                    break;
                }
            },
            'should sanitize the routes correctly': function (_0x576cd2) {
                var _0xd12550 = _0x487055, _0x5400a5 = {
                        'uncTP': function (_0xc53d7c, _0x43b84b, _0x62bd7a, _0xce22e6) {
                            return _0xc53d7c(_0x43b84b, _0x62bd7a, _0xce22e6);
                        },
                        'YhJbC': _0xd12550(387),
                        'HMEWk': _0xd12550(379),
                        'dldwe': _0xd12550(388),
                        'KuRJc': function (_0x20dfd4, _0x59556a, _0x442c0a, _0x37c31d) {
                            return _0x20dfd4(_0x59556a, _0x442c0a, _0x37c31d);
                        },
                        'cDVTq': _0xd12550(389)
                    };
                function _0x12ecad() {
                }
                function _0x501149() {
                }
                _0x576cd2[_0xd12550(357)]({
                    '/usa/:city/:zip': _0x12ecad,
                    '/world': { '/:country': { '/:city/:zip': _0x501149 } }
                }), _0x5400a5['uncTP'](assertRoute, _0x12ecad, [
                    _0x5400a5[_0xd12550(390)],
                    _0x5400a5[_0xd12550(391)],
                    _0x5400a5['dldwe'],
                    'on'
                ], _0x576cd2['routes']), _0x5400a5[_0xd12550(392)](assertRoute, _0x501149, [
                    _0xd12550(393),
                    _0x5400a5[_0xd12550(394)],
                    '([\\w\\-]+)',
                    _0x5400a5['dldwe'],
                    'on'
                ], _0x576cd2[_0xd12550(360)]);
            }
        }
    }
})[_0x487055(395)](module);