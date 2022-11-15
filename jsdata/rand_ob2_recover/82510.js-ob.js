const should = require(_0x3b4052(362)), sinon = require('sinon'), urlService = require(_0x3b4052(363)), helpers = require(_0x3b4052(364)), models = require(_0x3b4052(365)), testUtils = require(_0x3b4052(366));
function _0x3d62(_0xef527b, _0x40bb20) {
    return _0x3d62 = function (_0x391257, _0x3d6247) {
        _0x391257 = _0x391257 - 352;
        let _0x900af3 = _0x3912[_0x391257];
        return _0x900af3;
    }, _0x3d62(_0xef527b, _0x40bb20);
}
describe(_0x3b4052(367), function () {
    const _0x34efe7 = _0x3b4052;
    before(function () {
        const _0x3cded7 = _0x3d62;
        models[_0x3cded7(368)]();
    }), beforeEach(function () {
        sinon['stub'](urlService, 'getUrlByResourceId');
    }), afterEach(function () {
        const _0x1d9f5f = _0x3d62;
        sinon[_0x1d9f5f(369)]();
    }), it(_0x34efe7(370), function () {
        const _0x447381 = _0x34efe7, _0x3568e1 = [
                testUtils['DataGenerator'][_0x447381(371)][_0x447381(372)]({ 'name': 'Michael' }),
                testUtils['DataGenerator'][_0x447381(371)][_0x447381(372)]({ 'name': _0x447381(373) })
            ], _0xe12d6b = helpers[_0x447381(374)]['call']({ 'authors': _0x3568e1 }, { 'hash': { 'autolink': _0x447381(375) } });
        should['exist'](_0xe12d6b), String(_0xe12d6b)[_0x447381(362)]['equal'](_0x447381(376));
    }), it(_0x34efe7(377), function () {
        const _0x492bca = _0x34efe7, _0x3a8168 = [
                testUtils[_0x492bca(378)][_0x492bca(371)][_0x492bca(372)]({ 'name': _0x492bca(379) }),
                testUtils[_0x492bca(378)][_0x492bca(371)][_0x492bca(372)]({ 'name': _0x492bca(380) })
            ], _0x1488e1 = helpers[_0x492bca(374)][_0x492bca(381)]({ 'authors': _0x3a8168 }, { 'hash': { 'autolink': 'false' } });
        should[_0x492bca(382)](_0x1488e1), String(_0x1488e1)[_0x492bca(362)][_0x492bca(383)](_0x492bca(384));
    }), it(_0x34efe7(385), function () {
        const _0x1ff1f2 = _0x34efe7, _0x10ef6f = [
                testUtils['DataGenerator']['forKnex'][_0x1ff1f2(372)]({ 'name': 'haunted' }),
                testUtils[_0x1ff1f2(378)][_0x1ff1f2(371)][_0x1ff1f2(372)]({ 'name': 'ghost' })
            ], _0x1c6eef = helpers['authors'][_0x1ff1f2(381)]({ 'authors': _0x10ef6f }, {
                'hash': {
                    'separator': '|',
                    'autolink': _0x1ff1f2(375)
                }
            });
        should['exist'](_0x1c6eef), String(_0x1c6eef)['should'][_0x1ff1f2(383)](_0x1ff1f2(386));
    }), it(_0x34efe7(387), function () {
        const _0x121e69 = _0x34efe7, _0x346880 = [
                testUtils['DataGenerator'][_0x121e69(371)][_0x121e69(372)]({ 'name': _0x121e69(388) }),
                testUtils[_0x121e69(378)][_0x121e69(371)][_0x121e69(372)]({ 'name': _0x121e69(389) })
            ], _0x1986e8 = helpers[_0x121e69(374)][_0x121e69(381)]({ 'authors': _0x346880 }, {
                'hash': {
                    'prefix': _0x121e69(390),
                    'autolink': _0x121e69(375)
                }
            });
        should[_0x121e69(382)](_0x1986e8), String(_0x1986e8)[_0x121e69(362)][_0x121e69(383)]('on haunted, ghost');
    }), it(_0x34efe7(391), function () {
        const _0x57a6ef = _0x34efe7, _0x5b8ede = [
                testUtils[_0x57a6ef(378)][_0x57a6ef(371)]['createUser']({ 'name': _0x57a6ef(388) }),
                testUtils[_0x57a6ef(378)][_0x57a6ef(371)][_0x57a6ef(372)]({ 'name': _0x57a6ef(389) })
            ], _0x468470 = helpers[_0x57a6ef(374)][_0x57a6ef(381)]({ 'authors': _0x5b8ede }, {
                'hash': {
                    'suffix': ' forever',
                    'autolink': _0x57a6ef(375)
                }
            });
        should['exist'](_0x468470), String(_0x468470)[_0x57a6ef(362)][_0x57a6ef(383)](_0x57a6ef(392));
    }), it(_0x34efe7(393), function () {
        const _0x305ad6 = _0x34efe7, _0x14696b = [
                testUtils['DataGenerator'][_0x305ad6(371)][_0x305ad6(372)]({ 'name': _0x305ad6(388) }),
                testUtils[_0x305ad6(378)]['forKnex']['createUser']({ 'name': _0x305ad6(389) })
            ], _0x43c047 = helpers['authors']['call']({ 'authors': _0x14696b }, {
                'hash': {
                    'suffix': ' forever',
                    'prefix': _0x305ad6(390),
                    'autolink': 'false'
                }
            });
        should[_0x305ad6(382)](_0x43c047), String(_0x43c047)[_0x305ad6(362)][_0x305ad6(383)]('on haunted, ghost forever');
    }), it(_0x34efe7(394), function () {
        const _0x22290a = _0x34efe7, _0x18aae0 = [
                testUtils[_0x22290a(378)][_0x22290a(371)][_0x22290a(372)]({ 'name': _0x22290a(388) }),
                testUtils[_0x22290a(378)][_0x22290a(371)][_0x22290a(372)]({ 'name': 'ghost' })
            ], _0x5af35c = helpers[_0x22290a(374)]['call']({ 'authors': _0x18aae0 }, {
                'hash': {
                    'suffix': _0x22290a(395),
                    'prefix': '&hellip; ',
                    'autolink': 'false'
                }
            });
        should[_0x22290a(382)](_0x5af35c), String(_0x5af35c)[_0x22290a(362)][_0x22290a(383)](_0x22290a(396));
    }), it('does not add prefix or suffix if no authors exist', function () {
        const _0x10c94f = _0x34efe7, _0x254ac8 = helpers[_0x10c94f(374)][_0x10c94f(381)]({}, {
                'hash': {
                    'prefix': _0x10c94f(390),
                    'suffix': _0x10c94f(397),
                    'autolink': _0x10c94f(375)
                }
            });
        should['exist'](_0x254ac8), String(_0x254ac8)[_0x10c94f(362)][_0x10c94f(383)]('');
    }), it(_0x34efe7(398), function () {
        const _0x59b7b0 = _0x34efe7, _0x5665a1 = [
                testUtils[_0x59b7b0(378)][_0x59b7b0(371)][_0x59b7b0(372)]({
                    'name': _0x59b7b0(399),
                    'slug': _0x59b7b0(400)
                }),
                testUtils[_0x59b7b0(378)][_0x59b7b0(371)][_0x59b7b0(372)]({
                    'name': _0x59b7b0(401),
                    'slug': 'bar'
                })
            ];
        urlService[_0x59b7b0(402)][_0x59b7b0(403)](_0x5665a1[0]['id'])[_0x59b7b0(404)](_0x59b7b0(405)), urlService[_0x59b7b0(402)][_0x59b7b0(403)](_0x5665a1[1]['id'])['returns']('author url 2');
        const _0x32b7c3 = helpers[_0x59b7b0(374)][_0x59b7b0(381)]({ 'authors': _0x5665a1 });
        should['exist'](_0x32b7c3), String(_0x32b7c3)['should'][_0x59b7b0(383)](_0x59b7b0(406));
    }), it(_0x34efe7(407), function () {
        const _0x4689ea = _0x34efe7, _0x414333 = [
                testUtils['DataGenerator'][_0x4689ea(371)]['createUser']({
                    'name': _0x4689ea(399),
                    'slug': _0x4689ea(400)
                }),
                testUtils[_0x4689ea(378)][_0x4689ea(371)][_0x4689ea(372)]({
                    'name': 'bar',
                    'slug': _0x4689ea(401)
                })
            ];
        urlService[_0x4689ea(402)][_0x4689ea(403)](_0x414333[0]['id'])[_0x4689ea(404)](_0x4689ea(405));
        const _0x12c0b8 = helpers[_0x4689ea(374)][_0x4689ea(381)]({ 'authors': _0x414333 }, { 'hash': { 'limit': '1' } });
        should[_0x4689ea(382)](_0x12c0b8), String(_0x12c0b8)[_0x4689ea(362)][_0x4689ea(383)]('<a href="author url 1">foo</a>');
    }), it(_0x34efe7(408), function () {
        const _0x29a672 = _0x34efe7, _0x126579 = [
                testUtils[_0x29a672(378)][_0x29a672(371)][_0x29a672(372)]({
                    'name': 'foo',
                    'slug': _0x29a672(400)
                }),
                testUtils[_0x29a672(378)]['forKnex'][_0x29a672(372)]({
                    'name': _0x29a672(401),
                    'slug': 'bar'
                })
            ];
        urlService['getUrlByResourceId'][_0x29a672(403)](_0x126579[1]['id'])[_0x29a672(404)](_0x29a672(409));
        const _0x2673c0 = helpers[_0x29a672(374)][_0x29a672(381)]({ 'authors': _0x126579 }, { 'hash': { 'from': '2' } });
        should[_0x29a672(382)](_0x2673c0), String(_0x2673c0)[_0x29a672(362)][_0x29a672(383)](_0x29a672(410));
    }), it(_0x34efe7(411), function () {
        const _0x20b53c = _0x34efe7, _0x2a18c4 = [
                testUtils[_0x20b53c(378)][_0x20b53c(371)][_0x20b53c(372)]({
                    'name': 'foo',
                    'slug': _0x20b53c(400)
                }),
                testUtils[_0x20b53c(378)][_0x20b53c(371)][_0x20b53c(372)]({
                    'name': _0x20b53c(401),
                    'slug': _0x20b53c(401)
                })
            ];
        urlService[_0x20b53c(402)][_0x20b53c(403)](_0x2a18c4[0]['id'])[_0x20b53c(404)](_0x20b53c(412));
        const _0xaa6865 = helpers['authors']['call']({ 'authors': _0x2a18c4 }, { 'hash': { 'to': '1' } });
        should[_0x20b53c(382)](_0xaa6865), String(_0xaa6865)[_0x20b53c(362)]['equal']('<a href="author url">foo</a>');
    }), it(_0x34efe7(413), function () {
        const _0x5a4367 = _0x34efe7, _0x576f8a = [
                testUtils['DataGenerator'][_0x5a4367(371)][_0x5a4367(372)]({
                    'name': 'foo',
                    'slug': _0x5a4367(400)
                }),
                testUtils['DataGenerator'][_0x5a4367(371)][_0x5a4367(372)]({
                    'name': _0x5a4367(401),
                    'slug': 'bar'
                }),
                testUtils[_0x5a4367(378)][_0x5a4367(371)]['createUser']({
                    'name': 'baz',
                    'slug': _0x5a4367(414)
                })
            ];
        urlService[_0x5a4367(402)][_0x5a4367(403)](_0x576f8a[1]['id'])[_0x5a4367(404)](_0x5a4367(409)), urlService['getUrlByResourceId']['withArgs'](_0x576f8a[2]['id'])['returns']('author url 3');
        const _0x148a97 = helpers[_0x5a4367(374)][_0x5a4367(381)]({ 'authors': _0x576f8a }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });
        should['exist'](_0x148a97), String(_0x148a97)[_0x5a4367(362)]['equal']('<a href="author url 2">bar</a>, <a href="author url 3">baz</a>');
    }), it(_0x34efe7(415), function () {
        const _0x3eaf10 = _0x34efe7, _0x1c5d24 = [
                testUtils[_0x3eaf10(378)]['forKnex'][_0x3eaf10(372)]({
                    'name': 'foo',
                    'slug': _0x3eaf10(400)
                }),
                testUtils[_0x3eaf10(378)][_0x3eaf10(371)]['createUser']({
                    'name': _0x3eaf10(401),
                    'slug': _0x3eaf10(401)
                }),
                testUtils['DataGenerator']['forKnex']['createUser']({
                    'name': _0x3eaf10(414),
                    'slug': _0x3eaf10(414)
                })
            ];
        urlService['getUrlByResourceId'][_0x3eaf10(403)](_0x1c5d24[1]['id'])[_0x3eaf10(404)](_0x3eaf10(416));
        const _0x1400dc = helpers[_0x3eaf10(374)][_0x3eaf10(381)]({ 'authors': _0x1c5d24 }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });
        should[_0x3eaf10(382)](_0x1400dc), String(_0x1400dc)['should'][_0x3eaf10(383)](_0x3eaf10(417));
    }), it(_0x34efe7(418), function () {
        const _0x3cb962 = _0x34efe7, _0x4fccc7 = [
                testUtils[_0x3cb962(378)]['forKnex'][_0x3cb962(372)]({
                    'name': 'foo',
                    'slug': 'foo-bar'
                }),
                testUtils[_0x3cb962(378)][_0x3cb962(371)]['createUser']({
                    'name': _0x3cb962(401),
                    'slug': _0x3cb962(401)
                }),
                testUtils[_0x3cb962(378)]['forKnex'][_0x3cb962(372)]({
                    'name': _0x3cb962(414),
                    'slug': 'baz'
                })
            ];
        urlService[_0x3cb962(402)][_0x3cb962(403)](_0x4fccc7[0]['id'])[_0x3cb962(404)](_0x3cb962(419)), urlService[_0x3cb962(402)]['withArgs'](_0x4fccc7[1]['id'])['returns'](_0x3cb962(420)), urlService[_0x3cb962(402)][_0x3cb962(403)](_0x4fccc7[2]['id'])[_0x3cb962(404)](_0x3cb962(421));
        const _0x870400 = helpers[_0x3cb962(374)][_0x3cb962(381)]({ 'authors': _0x4fccc7 }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });
        should[_0x3cb962(382)](_0x870400), String(_0x870400)[_0x3cb962(362)][_0x3cb962(383)](_0x3cb962(422));
    });
});