const _0x3912 = [
    'DataGenerator',
    'John\x20O\x27Nolan',
    'AB=CD`EF',
    'call',
    'exist',
    'equal',
    'John\x20O&#x27;Nolan,\x20AB&#x3D;CD&#x60;EF',
    'can\x20use\x20a\x20different\x20separator',
    'haunted|ghost',
    'can\x20add\x20a\x20single\x20prefix\x20to\x20multiple\x20authors',
    'haunted',
    'ghost',
    'on\x20',
    'can\x20add\x20a\x20single\x20suffix\x20to\x20multiple\x20authors',
    'haunted,\x20ghost\x20forever',
    'can\x20add\x20a\x20prefix\x20and\x20suffix\x20to\x20multiple\x20authors',
    'can\x20add\x20a\x20prefix\x20and\x20suffix\x20with\x20HTML',
    '\x20&bull;',
    '&hellip;\x20haunted,\x20ghost\x20&bull;',
    '\x20forever',
    'can\x20autolink\x20authors\x20to\x20author\x20pages',
    'foo',
    'foo-bar',
    'bar',
    'getUrlByResourceId',
    'withArgs',
    'returns',
    'author\x20url\x201',
    '<a\x20href=\x22author\x20url\x201\x22>foo</a>,\x20<a\x20href=\x22author\x20url\x202\x22>bar</a>',
    'can\x20limit\x20no.\x20authors\x20output\x20to\x201',
    'can\x20list\x20authors\x20from\x20a\x20specified\x20no.',
    'author\x20url\x202',
    '<a\x20href=\x22author\x20url\x202\x22>bar</a>',
    'can\x20list\x20authors\x20to\x20a\x20specified\x20no.',
    'author\x20url',
    'can\x20list\x20authors\x20in\x20a\x20range',
    'baz',
    'can\x20limit\x20no.\x20authors\x20and\x20output\x20from\x202',
    'author\x20url\x20x',
    '<a\x20href=\x22author\x20url\x20x\x22>bar</a>',
    'can\x20list\x20authors\x20in\x20a\x20range\x20(ignore\x20limit)',
    'author\x20url\x20a',
    'author\x20url\x20b',
    'author\x20url\x20c',
    '<a\x20href=\x22author\x20url\x20a\x22>foo</a>,\x20<a\x20href=\x22author\x20url\x20b\x22>bar</a>,\x20<a\x20href=\x22author\x20url\x20c\x22>baz</a>',
    '32EOaVne',
    '281FyfNln',
    '47vjTeZq',
    '886oTRyWR',
    '141887oKTMPG',
    '5266PadsmE',
    '41OEPkWa',
    '282440zFFOXs',
    '215802gWiWEC',
    '423342KMMYqG',
    'should',
    '../../../core/frontend/services/url',
    '../../../core/frontend/helpers',
    '../../../core/server/models',
    '../../utils',
    '{{authors}}\x20helper',
    'init',
    'restore',
    'can\x20return\x20string\x20with\x20authors',
    'forKnex',
    'createUser',
    'Thomas',
    'authors',
    'false',
    'Michael,\x20Thomas',
    'can\x20return\x20string\x20with\x20authors\x20with\x20special\x20chars'
];
const _0x3b4052 = _0x3d62;
(function (_0x30d20c, _0x3e87d5) {
    const _0x5e72d2 = _0x3d62;
    while (!![]) {
        try {
            const _0x175495 = parseInt(_0x5e72d2(0x160)) * -parseInt(_0x5e72d2(0x161)) + -parseInt(_0x5e72d2(0x162)) * parseInt(_0x5e72d2(0x163)) + parseInt(_0x5e72d2(0x164)) + parseInt(_0x5e72d2(0x165)) * -parseInt(_0x5e72d2(0x166)) + -parseInt(_0x5e72d2(0x167)) + parseInt(_0x5e72d2(0x168)) + parseInt(_0x5e72d2(0x169));
            if (_0x175495 === _0x3e87d5)
                break;
            else
                _0x30d20c['push'](_0x30d20c['shift']());
        } catch (_0x1d1125) {
            _0x30d20c['push'](_0x30d20c['shift']());
        }
    }
}(_0x3912, 0x38a73));
const should = require(_0x3b4052(0x16a)), sinon = require('sinon'), urlService = require(_0x3b4052(0x16b)), helpers = require(_0x3b4052(0x16c)), models = require(_0x3b4052(0x16d)), testUtils = require(_0x3b4052(0x16e));
function _0x3d62(_0xef527b, _0x40bb20) {
    return _0x3d62 = function (_0x391257, _0x3d6247) {
        _0x391257 = _0x391257 - 0x160;
        let _0x900af3 = _0x3912[_0x391257];
        return _0x900af3;
    }, _0x3d62(_0xef527b, _0x40bb20);
}
describe(_0x3b4052(0x16f), function () {
    const _0x34efe7 = _0x3b4052;
    before(function () {
        const _0x3cded7 = _0x3d62;
        models[_0x3cded7(0x170)]();
    }), beforeEach(function () {
        sinon['stub'](urlService, 'getUrlByResourceId');
    }), afterEach(function () {
        const _0x1d9f5f = _0x3d62;
        sinon[_0x1d9f5f(0x171)]();
    }), it(_0x34efe7(0x172), function () {
        const _0x447381 = _0x34efe7, _0x3568e1 = [
                testUtils['DataGenerator'][_0x447381(0x173)][_0x447381(0x174)]({ 'name': 'Michael' }),
                testUtils['DataGenerator'][_0x447381(0x173)][_0x447381(0x174)]({ 'name': _0x447381(0x175) })
            ], _0xe12d6b = helpers[_0x447381(0x176)]['call']({ 'authors': _0x3568e1 }, { 'hash': { 'autolink': _0x447381(0x177) } });
        should['exist'](_0xe12d6b), String(_0xe12d6b)[_0x447381(0x16a)]['equal'](_0x447381(0x178));
    }), it(_0x34efe7(0x179), function () {
        const _0x492bca = _0x34efe7, _0x3a8168 = [
                testUtils[_0x492bca(0x17a)][_0x492bca(0x173)][_0x492bca(0x174)]({ 'name': _0x492bca(0x17b) }),
                testUtils[_0x492bca(0x17a)][_0x492bca(0x173)][_0x492bca(0x174)]({ 'name': _0x492bca(0x17c) })
            ], _0x1488e1 = helpers[_0x492bca(0x176)][_0x492bca(0x17d)]({ 'authors': _0x3a8168 }, { 'hash': { 'autolink': 'false' } });
        should[_0x492bca(0x17e)](_0x1488e1), String(_0x1488e1)[_0x492bca(0x16a)][_0x492bca(0x17f)](_0x492bca(0x180));
    }), it(_0x34efe7(0x181), function () {
        const _0x1ff1f2 = _0x34efe7, _0x10ef6f = [
                testUtils['DataGenerator']['forKnex'][_0x1ff1f2(0x174)]({ 'name': 'haunted' }),
                testUtils[_0x1ff1f2(0x17a)][_0x1ff1f2(0x173)][_0x1ff1f2(0x174)]({ 'name': 'ghost' })
            ], _0x1c6eef = helpers['authors'][_0x1ff1f2(0x17d)]({ 'authors': _0x10ef6f }, {
                'hash': {
                    'separator': '|',
                    'autolink': _0x1ff1f2(0x177)
                }
            });
        should['exist'](_0x1c6eef), String(_0x1c6eef)['should'][_0x1ff1f2(0x17f)](_0x1ff1f2(0x182));
    }), it(_0x34efe7(0x183), function () {
        const _0x121e69 = _0x34efe7, _0x346880 = [
                testUtils['DataGenerator'][_0x121e69(0x173)][_0x121e69(0x174)]({ 'name': _0x121e69(0x184) }),
                testUtils[_0x121e69(0x17a)][_0x121e69(0x173)][_0x121e69(0x174)]({ 'name': _0x121e69(0x185) })
            ], _0x1986e8 = helpers[_0x121e69(0x176)][_0x121e69(0x17d)]({ 'authors': _0x346880 }, {
                'hash': {
                    'prefix': _0x121e69(0x186),
                    'autolink': _0x121e69(0x177)
                }
            });
        should[_0x121e69(0x17e)](_0x1986e8), String(_0x1986e8)[_0x121e69(0x16a)][_0x121e69(0x17f)]('on\x20haunted,\x20ghost');
    }), it(_0x34efe7(0x187), function () {
        const _0x57a6ef = _0x34efe7, _0x5b8ede = [
                testUtils[_0x57a6ef(0x17a)][_0x57a6ef(0x173)]['createUser']({ 'name': _0x57a6ef(0x184) }),
                testUtils[_0x57a6ef(0x17a)][_0x57a6ef(0x173)][_0x57a6ef(0x174)]({ 'name': _0x57a6ef(0x185) })
            ], _0x468470 = helpers[_0x57a6ef(0x176)][_0x57a6ef(0x17d)]({ 'authors': _0x5b8ede }, {
                'hash': {
                    'suffix': '\x20forever',
                    'autolink': _0x57a6ef(0x177)
                }
            });
        should['exist'](_0x468470), String(_0x468470)[_0x57a6ef(0x16a)][_0x57a6ef(0x17f)](_0x57a6ef(0x188));
    }), it(_0x34efe7(0x189), function () {
        const _0x305ad6 = _0x34efe7, _0x14696b = [
                testUtils['DataGenerator'][_0x305ad6(0x173)][_0x305ad6(0x174)]({ 'name': _0x305ad6(0x184) }),
                testUtils[_0x305ad6(0x17a)]['forKnex']['createUser']({ 'name': _0x305ad6(0x185) })
            ], _0x43c047 = helpers['authors']['call']({ 'authors': _0x14696b }, {
                'hash': {
                    'suffix': '\x20forever',
                    'prefix': _0x305ad6(0x186),
                    'autolink': 'false'
                }
            });
        should[_0x305ad6(0x17e)](_0x43c047), String(_0x43c047)[_0x305ad6(0x16a)][_0x305ad6(0x17f)]('on\x20haunted,\x20ghost\x20forever');
    }), it(_0x34efe7(0x18a), function () {
        const _0x22290a = _0x34efe7, _0x18aae0 = [
                testUtils[_0x22290a(0x17a)][_0x22290a(0x173)][_0x22290a(0x174)]({ 'name': _0x22290a(0x184) }),
                testUtils[_0x22290a(0x17a)][_0x22290a(0x173)][_0x22290a(0x174)]({ 'name': 'ghost' })
            ], _0x5af35c = helpers[_0x22290a(0x176)]['call']({ 'authors': _0x18aae0 }, {
                'hash': {
                    'suffix': _0x22290a(0x18b),
                    'prefix': '&hellip;\x20',
                    'autolink': 'false'
                }
            });
        should[_0x22290a(0x17e)](_0x5af35c), String(_0x5af35c)[_0x22290a(0x16a)][_0x22290a(0x17f)](_0x22290a(0x18c));
    }), it('does\x20not\x20add\x20prefix\x20or\x20suffix\x20if\x20no\x20authors\x20exist', function () {
        const _0x10c94f = _0x34efe7, _0x254ac8 = helpers[_0x10c94f(0x176)][_0x10c94f(0x17d)]({}, {
                'hash': {
                    'prefix': _0x10c94f(0x186),
                    'suffix': _0x10c94f(0x18d),
                    'autolink': _0x10c94f(0x177)
                }
            });
        should['exist'](_0x254ac8), String(_0x254ac8)[_0x10c94f(0x16a)][_0x10c94f(0x17f)]('');
    }), it(_0x34efe7(0x18e), function () {
        const _0x59b7b0 = _0x34efe7, _0x5665a1 = [
                testUtils[_0x59b7b0(0x17a)][_0x59b7b0(0x173)][_0x59b7b0(0x174)]({
                    'name': _0x59b7b0(0x18f),
                    'slug': _0x59b7b0(0x190)
                }),
                testUtils[_0x59b7b0(0x17a)][_0x59b7b0(0x173)][_0x59b7b0(0x174)]({
                    'name': _0x59b7b0(0x191),
                    'slug': 'bar'
                })
            ];
        urlService[_0x59b7b0(0x192)][_0x59b7b0(0x193)](_0x5665a1[0x0]['id'])[_0x59b7b0(0x194)](_0x59b7b0(0x195)), urlService[_0x59b7b0(0x192)][_0x59b7b0(0x193)](_0x5665a1[0x1]['id'])['returns']('author\x20url\x202');
        const _0x32b7c3 = helpers[_0x59b7b0(0x176)][_0x59b7b0(0x17d)]({ 'authors': _0x5665a1 });
        should['exist'](_0x32b7c3), String(_0x32b7c3)['should'][_0x59b7b0(0x17f)](_0x59b7b0(0x196));
    }), it(_0x34efe7(0x197), function () {
        const _0x4689ea = _0x34efe7, _0x414333 = [
                testUtils['DataGenerator'][_0x4689ea(0x173)]['createUser']({
                    'name': _0x4689ea(0x18f),
                    'slug': _0x4689ea(0x190)
                }),
                testUtils[_0x4689ea(0x17a)][_0x4689ea(0x173)][_0x4689ea(0x174)]({
                    'name': 'bar',
                    'slug': _0x4689ea(0x191)
                })
            ];
        urlService[_0x4689ea(0x192)][_0x4689ea(0x193)](_0x414333[0x0]['id'])[_0x4689ea(0x194)](_0x4689ea(0x195));
        const _0x12c0b8 = helpers[_0x4689ea(0x176)][_0x4689ea(0x17d)]({ 'authors': _0x414333 }, { 'hash': { 'limit': '1' } });
        should[_0x4689ea(0x17e)](_0x12c0b8), String(_0x12c0b8)[_0x4689ea(0x16a)][_0x4689ea(0x17f)]('<a\x20href=\x22author\x20url\x201\x22>foo</a>');
    }), it(_0x34efe7(0x198), function () {
        const _0x29a672 = _0x34efe7, _0x126579 = [
                testUtils[_0x29a672(0x17a)][_0x29a672(0x173)][_0x29a672(0x174)]({
                    'name': 'foo',
                    'slug': _0x29a672(0x190)
                }),
                testUtils[_0x29a672(0x17a)]['forKnex'][_0x29a672(0x174)]({
                    'name': _0x29a672(0x191),
                    'slug': 'bar'
                })
            ];
        urlService['getUrlByResourceId'][_0x29a672(0x193)](_0x126579[0x1]['id'])[_0x29a672(0x194)](_0x29a672(0x199));
        const _0x2673c0 = helpers[_0x29a672(0x176)][_0x29a672(0x17d)]({ 'authors': _0x126579 }, { 'hash': { 'from': '2' } });
        should[_0x29a672(0x17e)](_0x2673c0), String(_0x2673c0)[_0x29a672(0x16a)][_0x29a672(0x17f)](_0x29a672(0x19a));
    }), it(_0x34efe7(0x19b), function () {
        const _0x20b53c = _0x34efe7, _0x2a18c4 = [
                testUtils[_0x20b53c(0x17a)][_0x20b53c(0x173)][_0x20b53c(0x174)]({
                    'name': 'foo',
                    'slug': _0x20b53c(0x190)
                }),
                testUtils[_0x20b53c(0x17a)][_0x20b53c(0x173)][_0x20b53c(0x174)]({
                    'name': _0x20b53c(0x191),
                    'slug': _0x20b53c(0x191)
                })
            ];
        urlService[_0x20b53c(0x192)][_0x20b53c(0x193)](_0x2a18c4[0x0]['id'])[_0x20b53c(0x194)](_0x20b53c(0x19c));
        const _0xaa6865 = helpers['authors']['call']({ 'authors': _0x2a18c4 }, { 'hash': { 'to': '1' } });
        should[_0x20b53c(0x17e)](_0xaa6865), String(_0xaa6865)[_0x20b53c(0x16a)]['equal']('<a\x20href=\x22author\x20url\x22>foo</a>');
    }), it(_0x34efe7(0x19d), function () {
        const _0x5a4367 = _0x34efe7, _0x576f8a = [
                testUtils['DataGenerator'][_0x5a4367(0x173)][_0x5a4367(0x174)]({
                    'name': 'foo',
                    'slug': _0x5a4367(0x190)
                }),
                testUtils['DataGenerator'][_0x5a4367(0x173)][_0x5a4367(0x174)]({
                    'name': _0x5a4367(0x191),
                    'slug': 'bar'
                }),
                testUtils[_0x5a4367(0x17a)][_0x5a4367(0x173)]['createUser']({
                    'name': 'baz',
                    'slug': _0x5a4367(0x19e)
                })
            ];
        urlService[_0x5a4367(0x192)][_0x5a4367(0x193)](_0x576f8a[0x1]['id'])[_0x5a4367(0x194)](_0x5a4367(0x199)), urlService['getUrlByResourceId']['withArgs'](_0x576f8a[0x2]['id'])['returns']('author\x20url\x203');
        const _0x148a97 = helpers[_0x5a4367(0x176)][_0x5a4367(0x17d)]({ 'authors': _0x576f8a }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });
        should['exist'](_0x148a97), String(_0x148a97)[_0x5a4367(0x16a)]['equal']('<a\x20href=\x22author\x20url\x202\x22>bar</a>,\x20<a\x20href=\x22author\x20url\x203\x22>baz</a>');
    }), it(_0x34efe7(0x19f), function () {
        const _0x3eaf10 = _0x34efe7, _0x1c5d24 = [
                testUtils[_0x3eaf10(0x17a)]['forKnex'][_0x3eaf10(0x174)]({
                    'name': 'foo',
                    'slug': _0x3eaf10(0x190)
                }),
                testUtils[_0x3eaf10(0x17a)][_0x3eaf10(0x173)]['createUser']({
                    'name': _0x3eaf10(0x191),
                    'slug': _0x3eaf10(0x191)
                }),
                testUtils['DataGenerator']['forKnex']['createUser']({
                    'name': _0x3eaf10(0x19e),
                    'slug': _0x3eaf10(0x19e)
                })
            ];
        urlService['getUrlByResourceId'][_0x3eaf10(0x193)](_0x1c5d24[0x1]['id'])[_0x3eaf10(0x194)](_0x3eaf10(0x1a0));
        const _0x1400dc = helpers[_0x3eaf10(0x176)][_0x3eaf10(0x17d)]({ 'authors': _0x1c5d24 }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });
        should[_0x3eaf10(0x17e)](_0x1400dc), String(_0x1400dc)['should'][_0x3eaf10(0x17f)](_0x3eaf10(0x1a1));
    }), it(_0x34efe7(0x1a2), function () {
        const _0x3cb962 = _0x34efe7, _0x4fccc7 = [
                testUtils[_0x3cb962(0x17a)]['forKnex'][_0x3cb962(0x174)]({
                    'name': 'foo',
                    'slug': 'foo-bar'
                }),
                testUtils[_0x3cb962(0x17a)][_0x3cb962(0x173)]['createUser']({
                    'name': _0x3cb962(0x191),
                    'slug': _0x3cb962(0x191)
                }),
                testUtils[_0x3cb962(0x17a)]['forKnex'][_0x3cb962(0x174)]({
                    'name': _0x3cb962(0x19e),
                    'slug': 'baz'
                })
            ];
        urlService[_0x3cb962(0x192)][_0x3cb962(0x193)](_0x4fccc7[0x0]['id'])[_0x3cb962(0x194)](_0x3cb962(0x1a3)), urlService[_0x3cb962(0x192)]['withArgs'](_0x4fccc7[0x1]['id'])['returns'](_0x3cb962(0x1a4)), urlService[_0x3cb962(0x192)][_0x3cb962(0x193)](_0x4fccc7[0x2]['id'])[_0x3cb962(0x194)](_0x3cb962(0x1a5));
        const _0x870400 = helpers[_0x3cb962(0x176)][_0x3cb962(0x17d)]({ 'authors': _0x4fccc7 }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });
        should[_0x3cb962(0x17e)](_0x870400), String(_0x870400)[_0x3cb962(0x16a)][_0x3cb962(0x17f)](_0x3cb962(0x1a6));
    });
});
