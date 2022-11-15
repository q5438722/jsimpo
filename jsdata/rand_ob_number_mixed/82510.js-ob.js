const should = require('should'), sinon = require('sinon'), urlService = require('../../../core/frontend/services/url'), helpers = require('../../../core/frontend/helpers'), models = require('../../../core/server/models'), testUtils = require('../../utils');
describe('{{authors}}\x20helper', function () {
    before(function () {
        models['init']();
    }), beforeEach(function () {
        sinon['stub'](urlService, 'getUrlByResourceId');
    }), afterEach(function () {
        sinon['restore']();
    }), it('can\x20return\x20string\x20with\x20authors', function () {
        const _0x44361d = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'Michael' }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'Thomas' })
            ], _0x355bed = helpers['authors']['call']({ 'authors': _0x44361d }, { 'hash': { 'autolink': 'false' } });
        should['exist'](_0x355bed), String(_0x355bed)['should']['equal']('Michael,\x20Thomas');
    }), it('can\x20return\x20string\x20with\x20authors\x20with\x20special\x20chars', function () {
        const _0x4feb78 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'John\x20O\x27Nolan' }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'AB=CD`EF' })
            ], _0x81561f = helpers['authors']['call']({ 'authors': _0x4feb78 }, { 'hash': { 'autolink': 'false' } });
        should['exist'](_0x81561f), String(_0x81561f)['should']['equal']('John\x20O&#x27;Nolan,\x20AB&#x3D;CD&#x60;EF');
    }), it('can\x20use\x20a\x20different\x20separator', function () {
        const _0x2141b9 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'haunted' }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'ghost' })
            ], _0x497ce7 = helpers['authors']['call']({ 'authors': _0x2141b9 }, {
                'hash': {
                    'separator': '|',
                    'autolink': 'false'
                }
            });
        should['exist'](_0x497ce7), String(_0x497ce7)['should']['equal']('haunted|ghost');
    }), it('can\x20add\x20a\x20single\x20prefix\x20to\x20multiple\x20authors', function () {
        const _0x513f55 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'haunted' }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'ghost' })
            ], _0x523f99 = helpers['authors']['call']({ 'authors': _0x513f55 }, {
                'hash': {
                    'prefix': 'on\x20',
                    'autolink': 'false'
                }
            });
        should['exist'](_0x523f99), String(_0x523f99)['should']['equal']('on\x20haunted,\x20ghost');
    }), it('can\x20add\x20a\x20single\x20suffix\x20to\x20multiple\x20authors', function () {
        const _0x598f75 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'haunted' }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'ghost' })
            ], _0xf73d45 = helpers['authors']['call']({ 'authors': _0x598f75 }, {
                'hash': {
                    'suffix': '\x20forever',
                    'autolink': 'false'
                }
            });
        should['exist'](_0xf73d45), String(_0xf73d45)['should']['equal']('haunted,\x20ghost\x20forever');
    }), it('can\x20add\x20a\x20prefix\x20and\x20suffix\x20to\x20multiple\x20authors', function () {
        const _0x565070 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'haunted' }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'ghost' })
            ], _0x4fa4e5 = helpers['authors']['call']({ 'authors': _0x565070 }, {
                'hash': {
                    'suffix': '\x20forever',
                    'prefix': 'on\x20',
                    'autolink': 'false'
                }
            });
        should['exist'](_0x4fa4e5), String(_0x4fa4e5)['should']['equal']('on\x20haunted,\x20ghost\x20forever');
    }), it('can\x20add\x20a\x20prefix\x20and\x20suffix\x20with\x20HTML', function () {
        const _0x191311 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'haunted' }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': 'ghost' })
            ], _0x9c43e6 = helpers['authors']['call']({ 'authors': _0x191311 }, {
                'hash': {
                    'suffix': '\x20&bull;',
                    'prefix': '&hellip;\x20',
                    'autolink': 'false'
                }
            });
        should['exist'](_0x9c43e6), String(_0x9c43e6)['should']['equal']('&hellip;\x20haunted,\x20ghost\x20&bull;');
    }), it('does\x20not\x20add\x20prefix\x20or\x20suffix\x20if\x20no\x20authors\x20exist', function () {
        const _0x5d5a68 = helpers['authors']['call']({}, {
            'hash': {
                'prefix': 'on\x20',
                'suffix': '\x20forever',
                'autolink': 'false'
            }
        });
        should['exist'](_0x5d5a68), String(_0x5d5a68)['should']['equal']('');
    }), it('can\x20autolink\x20authors\x20to\x20author\x20pages', function () {
        const _0x4cc9ad = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'foo',
                'slug': 'foo-bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'bar',
                'slug': 'bar'
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x4cc9ad[-0x1efc + 0x1 * 0x23b2 + -0x3 * 0x192]['id'])['returns']('author\x20url\x201'), urlService['getUrlByResourceId']['withArgs'](_0x4cc9ad[-0x858 + -0x2178 + 0x5 * 0x85d]['id'])['returns']('author\x20url\x202');
        const _0x14ebe6 = helpers['authors']['call']({ 'authors': _0x4cc9ad });
        should['exist'](_0x14ebe6), String(_0x14ebe6)['should']['equal']('<a\x20href=\x22author\x20url\x201\x22>foo</a>,\x20<a\x20href=\x22author\x20url\x202\x22>bar</a>');
    }), it('can\x20limit\x20no.\x20authors\x20output\x20to\x201', function () {
        const _0x3f29ca = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'foo',
                'slug': 'foo-bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'bar',
                'slug': 'bar'
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x3f29ca[-0x1392 + 0x1561 + -0x1 * 0x1cf]['id'])['returns']('author\x20url\x201');
        const _0xb9042 = helpers['authors']['call']({ 'authors': _0x3f29ca }, { 'hash': { 'limit': '1' } });
        should['exist'](_0xb9042), String(_0xb9042)['should']['equal']('<a\x20href=\x22author\x20url\x201\x22>foo</a>');
    }), it('can\x20list\x20authors\x20from\x20a\x20specified\x20no.', function () {
        const _0x2ea195 = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'foo',
                'slug': 'foo-bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'bar',
                'slug': 'bar'
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x2ea195[-0x2 * 0xd54 + 0xa25 + 0x1084]['id'])['returns']('author\x20url\x202');
        const _0x4b3b4f = helpers['authors']['call']({ 'authors': _0x2ea195 }, { 'hash': { 'from': '2' } });
        should['exist'](_0x4b3b4f), String(_0x4b3b4f)['should']['equal']('<a\x20href=\x22author\x20url\x202\x22>bar</a>');
    }), it('can\x20list\x20authors\x20to\x20a\x20specified\x20no.', function () {
        const _0xd39871 = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'foo',
                'slug': 'foo-bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'bar',
                'slug': 'bar'
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0xd39871[0x25e6 + -0x1691 + -0xf55]['id'])['returns']('author\x20url');
        const _0x1ad6a3 = helpers['authors']['call']({ 'authors': _0xd39871 }, { 'hash': { 'to': '1' } });
        should['exist'](_0x1ad6a3), String(_0x1ad6a3)['should']['equal']('<a\x20href=\x22author\x20url\x22>foo</a>');
    }), it('can\x20list\x20authors\x20in\x20a\x20range', function () {
        const _0x387f60 = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'foo',
                'slug': 'foo-bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'bar',
                'slug': 'bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'baz',
                'slug': 'baz'
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x387f60[0x1810 + 0x6d * 0x53 + 0x2 * -0x1db3]['id'])['returns']('author\x20url\x202'), urlService['getUrlByResourceId']['withArgs'](_0x387f60[-0xac2 + 0x25a4 + -0x1ae0]['id'])['returns']('author\x20url\x203');
        const _0x38271a = helpers['authors']['call']({ 'authors': _0x387f60 }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });
        should['exist'](_0x38271a), String(_0x38271a)['should']['equal']('<a\x20href=\x22author\x20url\x202\x22>bar</a>,\x20<a\x20href=\x22author\x20url\x203\x22>baz</a>');
    }), it('can\x20limit\x20no.\x20authors\x20and\x20output\x20from\x202', function () {
        const _0x1de63c = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'foo',
                'slug': 'foo-bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'bar',
                'slug': 'bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'baz',
                'slug': 'baz'
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x1de63c[0x1f1f + 0x1795 * -0x1 + -0x789]['id'])['returns']('author\x20url\x20x');
        const _0x4d3e78 = helpers['authors']['call']({ 'authors': _0x1de63c }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });
        should['exist'](_0x4d3e78), String(_0x4d3e78)['should']['equal']('<a\x20href=\x22author\x20url\x20x\x22>bar</a>');
    }), it('can\x20list\x20authors\x20in\x20a\x20range\x20(ignore\x20limit)', function () {
        const _0xb50f4d = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'foo',
                'slug': 'foo-bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'bar',
                'slug': 'bar'
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': 'baz',
                'slug': 'baz'
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0xb50f4d[0x2478 + -0x142f + 0xb * -0x17b]['id'])['returns']('author\x20url\x20a'), urlService['getUrlByResourceId']['withArgs'](_0xb50f4d[0x591 + 0x2317 + -0x28a7]['id'])['returns']('author\x20url\x20b'), urlService['getUrlByResourceId']['withArgs'](_0xb50f4d[-0x250f + -0x1 * -0x1eeb + 0x626]['id'])['returns']('author\x20url\x20c');
        const _0x1b46da = helpers['authors']['call']({ 'authors': _0xb50f4d }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });
        should['exist'](_0x1b46da), String(_0x1b46da)['should']['equal']('<a\x20href=\x22author\x20url\x20a\x22>foo</a>,\x20<a\x20href=\x22author\x20url\x20b\x22>bar</a>,\x20<a\x20href=\x22author\x20url\x20c\x22>baz</a>');
    });
});
