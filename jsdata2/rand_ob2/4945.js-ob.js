var _0x4c2c = [
    '259956achImo',
    '14PWZFsR',
    '64455HyljDb',
    '4390GBPQcl',
    '130ksYCOV',
    '249420IveUao',
    '4GMYBVy',
    '1094263JWkdGZ',
    '1ZwsJGH',
    '1483291qpdfSS',
    'vows',
    '../../../lib/director',
    'length',
    'shift',
    'isObject',
    'describe',
    'director/core/mount',
    'Router',
    'routes',
    'before',
    'nesting',
    'deep',
    'foo',
    'bar',
    '([_.()!\x5c\x20%@&a-zA-Z0-9-]+)',
    'then',
    'bazz',
    'buzz',
    'jitsu',
    'now',
    '([._a-zA-Z0-9-%()]+)',
    'mount',
    '/api',
    'api',
    'dogs',
    'param',
    'city',
    '([\x5cw\x5c-]+)',
    ':country',
    ':zip',
    'usa',
    '([\x5cd]{5})',
    'world',
    '([A-Z][A-Za-z]+)',
    '28uDOfyJ',
    '1379NTEoYt'
];
var _0x4a3310 = _0x2755;
(function (_0x4b6104, _0x54b14d) {
    var _0x1e9b0e = _0x2755;
    while (!![]) {
        try {
            var _0x16906c = parseInt(_0x1e9b0e(0x6b)) * parseInt(_0x1e9b0e(0x6c)) + parseInt(_0x1e9b0e(0x6d)) + -parseInt(_0x1e9b0e(0x6e)) * parseInt(_0x1e9b0e(0x6f)) + parseInt(_0x1e9b0e(0x70)) * parseInt(_0x1e9b0e(0x71)) + parseInt(_0x1e9b0e(0x72)) * parseInt(_0x1e9b0e(0x73)) + parseInt(_0x1e9b0e(0x74)) + -parseInt(_0x1e9b0e(0x75)) * parseInt(_0x1e9b0e(0x76));
            if (_0x16906c === _0x54b14d)
                break;
            else
                _0x4b6104['push'](_0x4b6104['shift']());
        } catch (_0x469498) {
            _0x4b6104['push'](_0x4b6104['shift']());
        }
    }
}(_0x4c2c, 0x8c83e));
var assert = require('assert'), vows = require(_0x4a3310(0x77)), director = require(_0x4a3310(0x78));
function _0x2755(_0x7f62e4, _0x560122) {
    return _0x2755 = function (_0x4c2c32, _0x2755ac) {
        _0x4c2c32 = _0x4c2c32 - 0x6b;
        var _0x261913 = _0x4c2c[_0x4c2c32];
        return _0x261913;
    }, _0x2755(_0x7f62e4, _0x560122);
}
function assertRoute(_0x298fa5, _0x205c86, _0x3e1ba8) {
    var _0x228e63 = _0x4a3310;
    if (_0x205c86[_0x228e63(0x79)] === 0x1)
        return assert['strictEqual'](_0x3e1ba8[_0x205c86[_0x228e63(0x7a)]()], _0x298fa5);
    _0x3e1ba8 = _0x3e1ba8[_0x205c86[_0x228e63(0x7a)]()], assert[_0x228e63(0x7b)](_0x3e1ba8), assertRoute(_0x298fa5, _0x205c86, _0x3e1ba8);
}
vows[_0x4a3310(0x7c)](_0x4a3310(0x7d))['addBatch']({
    'An\x20instance\x20of\x20director.Router': {
        'with\x20no\x20preconfigured\x20params': {
            'topic': new director[(_0x4a3310(0x7e))](),
            'the\x20mount()\x20method': {
                'should\x20sanitize\x20the\x20routes\x20correctly': function (_0x3d78f2) {
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
                    }), assertRoute(_0x52c4d3, ['on'], _0x3d78f2['routes']), assertRoute(_0x52c4d3, ['after'], _0x3d78f2[_0x40b351(0x7f)]), assertRoute(_0x52c4d3, [_0x40b351(0x80)], _0x3d78f2[_0x40b351(0x7f)]), assertRoute(_0x1aefc9, [
                        _0x40b351(0x81),
                        'on'
                    ], _0x3d78f2['routes']), assertRoute(_0x2c9709, [
                        _0x40b351(0x81),
                        _0x40b351(0x82),
                        'on'
                    ], _0x3d78f2[_0x40b351(0x7f)]), assertRoute(_0x1aefc9, [
                        _0x40b351(0x83),
                        _0x40b351(0x84),
                        'on'
                    ], _0x3d78f2[_0x40b351(0x7f)]), assertRoute(_0x2c9709, [
                        _0x40b351(0x83),
                        _0x40b351(0x85),
                        'on'
                    ], _0x3d78f2[_0x40b351(0x7f)]), assertRoute(_0x7d8845, [
                        _0x40b351(0x83),
                        'jitsu',
                        _0x40b351(0x86),
                        'on'
                    ], _0x3d78f2['routes']), assertRoute(_0x1aefc9, [
                        _0x40b351(0x83),
                        'jitsu',
                        _0x40b351(0x86),
                        _0x40b351(0x80)
                    ], _0x3d78f2[_0x40b351(0x7f)]), assertRoute(_0x52ceb3, [
                        _0x40b351(0x83),
                        _0x40b351(0x87),
                        _0x40b351(0x88),
                        'on'
                    ], _0x3d78f2[_0x40b351(0x7f)]), assertRoute(_0x2c9709, [
                        _0x40b351(0x83),
                        _0x40b351(0x89),
                        _0x40b351(0x86),
                        _0x40b351(0x8a),
                        'on'
                    ], _0x3d78f2[_0x40b351(0x7f)]), assertRoute(_0x2139ae, [
                        _0x40b351(0x83),
                        _0x40b351(0x8b),
                        'on'
                    ], _0x3d78f2['routes']);
                },
                'should\x20accept\x20string\x20path': function (_0x46ef30) {
                    var _0x2a5d0e = _0x4a3310;
                    function _0x261f03() {
                    }
                    _0x46ef30[_0x2a5d0e(0x8c)]({ '/dogs': { 'on': _0x261f03 } }, _0x2a5d0e(0x8d)), assertRoute(_0x261f03, [
                        _0x2a5d0e(0x8e),
                        _0x2a5d0e(0x8f),
                        'on'
                    ], _0x46ef30[_0x2a5d0e(0x7f)]);
                }
            }
        },
        'with\x20preconfigured\x20params': {
            'topic': function () {
                var _0x423a04 = _0x4a3310, _0x588a8d = new director[(_0x423a04(0x7e))]();
                return _0x588a8d[_0x423a04(0x90)](_0x423a04(0x91), _0x423a04(0x92)), _0x588a8d[_0x423a04(0x90)](_0x423a04(0x93), /([A-Z][A-Za-z]+)/), _0x588a8d[_0x423a04(0x90)](_0x423a04(0x94), /([\d]{5})/), _0x588a8d;
            },
            'should\x20sanitize\x20the\x20routes\x20correctly': function (_0x5e9a5d) {
                var _0x4a7bca = _0x4a3310;
                function _0x1fee07() {
                }
                function _0x15d628() {
                }
                _0x5e9a5d[_0x4a7bca(0x8c)]({
                    '/usa/:city/:zip': _0x1fee07,
                    '/world': { '/:country': { '/:city/:zip': _0x15d628 } }
                }), assertRoute(_0x1fee07, [
                    _0x4a7bca(0x95),
                    _0x4a7bca(0x92),
                    _0x4a7bca(0x96),
                    'on'
                ], _0x5e9a5d[_0x4a7bca(0x7f)]), assertRoute(_0x15d628, [
                    _0x4a7bca(0x97),
                    _0x4a7bca(0x98),
                    '([\x5cw\x5c-]+)',
                    _0x4a7bca(0x96),
                    'on'
                ], _0x5e9a5d['routes']);
            }
        }
    }
})['export'](module);
