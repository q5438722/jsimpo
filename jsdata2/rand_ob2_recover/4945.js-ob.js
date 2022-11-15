var assert = require('assert'), vows = require(_0x4a3310(119)), director = require(_0x4a3310(120));
function _0x2755(_0x7f62e4, _0x560122) {
    return _0x2755 = function (_0x4c2c32, _0x2755ac) {
        _0x4c2c32 = _0x4c2c32 - 107;
        var _0x261913 = _0x4c2c[_0x4c2c32];
        return _0x261913;
    }, _0x2755(_0x7f62e4, _0x560122);
}
function assertRoute(_0x298fa5, _0x205c86, _0x3e1ba8) {
    var _0x228e63 = _0x4a3310;
    if (_0x205c86[_0x228e63(121)] === 1)
        return assert['strictEqual'](_0x3e1ba8[_0x205c86[_0x228e63(122)]()], _0x298fa5);
    _0x3e1ba8 = _0x3e1ba8[_0x205c86[_0x228e63(122)]()], assert[_0x228e63(123)](_0x3e1ba8), assertRoute(_0x298fa5, _0x205c86, _0x3e1ba8);
}
vows[_0x4a3310(124)](_0x4a3310(125))['addBatch']({
    'An instance of director.Router': {
        'with no preconfigured params': {
            'topic': new director[(_0x4a3310(126))](),
            'the mount() method': {
                'should sanitize the routes correctly': function (_0x3d78f2) {
                    var _0x40b351 = _0x4a3310;
                    function _0x1aefc9() {
                    }
                    function _0x2c9709() {
                    }
                    function _0x52ceb3() {
                    }
                    function _0x2139ae() {
                    }
                    function _0x52c4d3() {
                    }
                    var _0x7d8845 = [
                        _0x1aefc9,
                        _0x2c9709
                    ];
                    _0x3d78f2['mount']({
                        '/': {
                            'before': _0x52c4d3,
                            'on': _0x52c4d3,
                            'after': _0x52c4d3,
                            '/nesting': {
                                'on': _0x1aefc9,
                                '/deep': _0x2c9709
                            }
                        },
                        '/foo': {
                            '/bar': _0x1aefc9,
                            '/*': _0x2c9709,
                            '/jitsu/then': { 'before': _0x1aefc9 }
                        },
                        '/foo/bazz': { '/buzz': _0x52ceb3 },
                        '/foo/jitsu': { '/then': _0x7d8845 },
                        '/foo/jitsu/then/now': _0x2c9709,
                        '/foo/:dog': _0x2139ae
                    }), assertRoute(_0x52c4d3, ['on'], _0x3d78f2['routes']), assertRoute(_0x52c4d3, ['after'], _0x3d78f2[_0x40b351(127)]), assertRoute(_0x52c4d3, [_0x40b351(128)], _0x3d78f2[_0x40b351(127)]), assertRoute(_0x1aefc9, [
                        _0x40b351(129),
                        'on'
                    ], _0x3d78f2['routes']), assertRoute(_0x2c9709, [
                        _0x40b351(129),
                        _0x40b351(130),
                        'on'
                    ], _0x3d78f2[_0x40b351(127)]), assertRoute(_0x1aefc9, [
                        _0x40b351(131),
                        _0x40b351(132),
                        'on'
                    ], _0x3d78f2[_0x40b351(127)]), assertRoute(_0x2c9709, [
                        _0x40b351(131),
                        _0x40b351(133),
                        'on'
                    ], _0x3d78f2[_0x40b351(127)]), assertRoute(_0x7d8845, [
                        _0x40b351(131),
                        'jitsu',
                        _0x40b351(134),
                        'on'
                    ], _0x3d78f2['routes']), assertRoute(_0x1aefc9, [
                        _0x40b351(131),
                        'jitsu',
                        _0x40b351(134),
                        _0x40b351(128)
                    ], _0x3d78f2[_0x40b351(127)]), assertRoute(_0x52ceb3, [
                        _0x40b351(131),
                        _0x40b351(135),
                        _0x40b351(136),
                        'on'
                    ], _0x3d78f2[_0x40b351(127)]), assertRoute(_0x2c9709, [
                        _0x40b351(131),
                        _0x40b351(137),
                        _0x40b351(134),
                        _0x40b351(138),
                        'on'
                    ], _0x3d78f2[_0x40b351(127)]), assertRoute(_0x2139ae, [
                        _0x40b351(131),
                        _0x40b351(139),
                        'on'
                    ], _0x3d78f2['routes']);
                },
                'should accept string path': function (_0x46ef30) {
                    var _0x2a5d0e = _0x4a3310;
                    function _0x261f03() {
                    }
                    _0x46ef30[_0x2a5d0e(140)]({ '/dogs': { 'on': _0x261f03 } }, _0x2a5d0e(141)), assertRoute(_0x261f03, [
                        _0x2a5d0e(142),
                        _0x2a5d0e(143),
                        'on'
                    ], _0x46ef30[_0x2a5d0e(127)]);
                }
            }
        },
        'with preconfigured params': {
            'topic': function () {
                var _0x423a04 = _0x4a3310, _0x588a8d = new director[(_0x423a04(126))]();
                return _0x588a8d[_0x423a04(144)](_0x423a04(145), _0x423a04(146)), _0x588a8d[_0x423a04(144)](_0x423a04(147), /([A-Z][A-Za-z]+)/), _0x588a8d[_0x423a04(144)](_0x423a04(148), /([\d]{5})/), _0x588a8d;
            },
            'should sanitize the routes correctly': function (_0x5e9a5d) {
                var _0x4a7bca = _0x4a3310;
                function _0x1fee07() {
                }
                function _0x15d628() {
                }
                _0x5e9a5d[_0x4a7bca(140)]({
                    '/usa/:city/:zip': _0x1fee07,
                    '/world': { '/:country': { '/:city/:zip': _0x15d628 } }
                }), assertRoute(_0x1fee07, [
                    _0x4a7bca(149),
                    _0x4a7bca(146),
                    _0x4a7bca(150),
                    'on'
                ], _0x5e9a5d[_0x4a7bca(127)]), assertRoute(_0x15d628, [
                    _0x4a7bca(151),
                    _0x4a7bca(152),
                    '([\\w\\-]+)',
                    _0x4a7bca(150),
                    'on'
                ], _0x5e9a5d['routes']);
            }
        }
    }
})['export'](module);