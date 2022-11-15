var assert = require('assert'), vows = require('vows'), director = require('../../../lib/director');
function assertRoute(_0x3e3394, _0x8f7f2c, _0x5b3953) {
    if (_0x8f7f2c['length'] === 1) {
        return assert['strictEqual'](_0x5b3953[_0x8f7f2c['shift']()], _0x3e3394);
    }
    _0x5b3953 = _0x5b3953[_0x8f7f2c['shift']()];
    assert['isObject'](_0x5b3953);
    assertRoute(_0x3e3394, _0x8f7f2c, _0x5b3953);
}
vows['describe']('director/core/mount')['addBatch']({
    'An instance of director.Router': {
        'with no preconfigured params': {
            'topic': new director['Router'](),
            'the mount() method': {
                'should sanitize the routes correctly': function (_0x348874) {
                    function _0x1cc9af() {
                    }
                    function _0x581341() {
                    }
                    function _0x4c4905() {
                    }
                    function _0x339ba5() {
                    }
                    function _0x126f48() {
                    }
                    var _0x4c4843 = [
                        _0x1cc9af,
                        _0x581341
                    ];
                    _0x348874['mount']({
                        '/': {
                            'before': _0x126f48,
                            'on': _0x126f48,
                            'after': _0x126f48,
                            '/nesting': {
                                'on': _0x1cc9af,
                                '/deep': _0x581341
                            }
                        },
                        '/foo': {
                            '/bar': _0x1cc9af,
                            '/*': _0x581341,
                            '/jitsu/then': { 'before': _0x1cc9af }
                        },
                        '/foo/bazz': { '/buzz': _0x4c4905 },
                        '/foo/jitsu': { '/then': _0x4c4843 },
                        '/foo/jitsu/then/now': _0x581341,
                        '/foo/:dog': _0x339ba5
                    });
                    assertRoute(_0x126f48, ['on'], _0x348874['routes']);
                    assertRoute(_0x126f48, ['after'], _0x348874['routes']);
                    assertRoute(_0x126f48, ['before'], _0x348874['routes']);
                    assertRoute(_0x1cc9af, [
                        'nesting',
                        'on'
                    ], _0x348874['routes']);
                    assertRoute(_0x581341, [
                        'nesting',
                        'deep',
                        'on'
                    ], _0x348874['routes']);
                    assertRoute(_0x1cc9af, [
                        'foo',
                        'bar',
                        'on'
                    ], _0x348874['routes']);
                    assertRoute(_0x581341, [
                        'foo',
                        '([_.()!\\ %@&a-zA-Z0-9-]+)',
                        'on'
                    ], _0x348874['routes']);
                    assertRoute(_0x4c4843, [
                        'foo',
                        'jitsu',
                        'then',
                        'on'
                    ], _0x348874['routes']);
                    assertRoute(_0x1cc9af, [
                        'foo',
                        'jitsu',
                        'then',
                        'before'
                    ], _0x348874['routes']);
                    assertRoute(_0x4c4905, [
                        'foo',
                        'bazz',
                        'buzz',
                        'on'
                    ], _0x348874['routes']);
                    assertRoute(_0x581341, [
                        'foo',
                        'jitsu',
                        'then',
                        'now',
                        'on'
                    ], _0x348874['routes']);
                    assertRoute(_0x339ba5, [
                        'foo',
                        '([._a-zA-Z0-9-%()]+)',
                        'on'
                    ], _0x348874['routes']);
                },
                'should accept string path': function (_0x1c9029) {
                    function _0x2f28c4() {
                    }
                    _0x1c9029['mount']({ '/dogs': { 'on': _0x2f28c4 } }, '/api');
                    assertRoute(_0x2f28c4, [
                        'api',
                        'dogs',
                        'on'
                    ], _0x1c9029['routes']);
                }
            }
        },
        'with preconfigured params': {
            'topic': function () {
                var _0x37ec30 = '1|2|3|0|4'['split']('|'), _0x25c0bb = 0;
                while (!![]) {
                    switch (_0x37ec30[_0x25c0bb++]) {
                    case '0':
                        _0x5c6c5b['param'](':zip', /([\d]{5})/);
                        continue;
                    case '1':
                        var _0x5c6c5b = new director['Router']();
                        continue;
                    case '2':
                        _0x5c6c5b['param']('city', '([\\w\\-]+)');
                        continue;
                    case '3':
                        _0x5c6c5b['param'](':country', /([A-Z][A-Za-z]+)/);
                        continue;
                    case '4':
                        return _0x5c6c5b;
                    }
                    break;
                }
            },
            'should sanitize the routes correctly': function (_0x293ba8) {
                function _0x79dcc3() {
                }
                function _0x53c3e4() {
                }
                _0x293ba8['mount']({
                    '/usa/:city/:zip': _0x79dcc3,
                    '/world': { '/:country': { '/:city/:zip': _0x53c3e4 } }
                });
                assertRoute(_0x79dcc3, [
                    'usa',
                    '([\\w\\-]+)',
                    '([\\d]{5})',
                    'on'
                ], _0x293ba8['routes']);
                assertRoute(_0x53c3e4, [
                    'world',
                    '([A-Z][A-Za-z]+)',
                    '([\\w\\-]+)',
                    '([\\d]{5})',
                    'on'
                ], _0x293ba8['routes']);
            }
        }
    }
})['export'](module);