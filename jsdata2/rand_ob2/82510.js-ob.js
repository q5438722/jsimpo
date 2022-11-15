const _0x42be = [
    '215452onoqYH',
    '3ljEeeG',
    '135749EveMZc',
    '4168926FTyAMS',
    'should',
    'sinon',
    '../../../core/frontend/services/url',
    '../../../core/server/models',
    '../../utils',
    '{{authors}}\x20helper',
    'init',
    'stub',
    'getUrlByResourceId',
    'restore',
    'DataGenerator',
    'Michael',
    'forKnex',
    'createUser',
    'authors',
    'call',
    'false',
    'Michael,\x20Thomas',
    'can\x20return\x20string\x20with\x20authors\x20with\x20special\x20chars',
    'AB=CD`EF',
    'equal',
    'can\x20use\x20a\x20different\x20separator',
    'ghost',
    'haunted|ghost',
    'can\x20add\x20a\x20single\x20prefix\x20to\x20multiple\x20authors',
    'haunted',
    'on\x20',
    'exist',
    'can\x20add\x20a\x20single\x20suffix\x20to\x20multiple\x20authors',
    '\x20forever',
    'can\x20add\x20a\x20prefix\x20and\x20suffix\x20to\x20multiple\x20authors',
    'on\x20haunted,\x20ghost\x20forever',
    'can\x20add\x20a\x20prefix\x20and\x20suffix\x20with\x20HTML',
    '\x20&bull;',
    '&hellip;\x20',
    '&hellip;\x20haunted,\x20ghost\x20&bull;',
    'does\x20not\x20add\x20prefix\x20or\x20suffix\x20if\x20no\x20authors\x20exist',
    'can\x20autolink\x20authors\x20to\x20author\x20pages',
    'foo',
    'foo-bar',
    'bar',
    'withArgs',
    'returns',
    'author\x20url\x202',
    '<a\x20href=\x22author\x20url\x201\x22>foo</a>,\x20<a\x20href=\x22author\x20url\x202\x22>bar</a>',
    'can\x20limit\x20no.\x20authors\x20output\x20to\x201',
    'author\x20url\x201',
    'can\x20list\x20authors\x20from\x20a\x20specified\x20no.',
    '<a\x20href=\x22author\x20url\x202\x22>bar</a>',
    'author\x20url',
    '<a\x20href=\x22author\x20url\x22>foo</a>',
    'can\x20list\x20authors\x20in\x20a\x20range',
    'baz',
    'author\x20url\x203',
    'can\x20limit\x20no.\x20authors\x20and\x20output\x20from\x202',
    'author\x20url\x20x',
    '<a\x20href=\x22author\x20url\x20x\x22>bar</a>',
    'can\x20list\x20authors\x20in\x20a\x20range\x20(ignore\x20limit)',
    'author\x20url\x20a',
    'author\x20url\x20b',
    'author\x20url\x20c',
    '<a\x20href=\x22author\x20url\x20a\x22>foo</a>,\x20<a\x20href=\x22author\x20url\x20b\x22>bar</a>,\x20<a\x20href=\x22author\x20url\x20c\x22>baz</a>',
    '5039yzVypE',
    '208Mlmddq',
    '1001078dKurIp',
    '47216SwkXQI',
    '1491493VHqzrL'
];
const _0x20a3ee = _0x36a8;
(function (_0x2d7be0, _0x1e3767) {
    const _0x137504 = _0x36a8;
    while (!![]) {
        try {
            const _0x2eae60 = -parseInt(_0x137504(0x1e8)) * parseInt(_0x137504(0x1e9)) + -parseInt(_0x137504(0x1ea)) + -parseInt(_0x137504(0x1eb)) + -parseInt(_0x137504(0x1ec)) + -parseInt(_0x137504(0x1ed)) + -parseInt(_0x137504(0x1ee)) * -parseInt(_0x137504(0x1ef)) + parseInt(_0x137504(0x1f0));
            if (_0x2eae60 === _0x1e3767)
                break;
            else
                _0x2d7be0['push'](_0x2d7be0['shift']());
        } catch (_0x163eb3) {
            _0x2d7be0['push'](_0x2d7be0['shift']());
        }
    }
}(_0x42be, 0xbcad6));
function _0x36a8(_0x320013, _0x3f79cd) {
    return _0x36a8 = function (_0x42beb7, _0x36a8dd) {
        _0x42beb7 = _0x42beb7 - 0x1e8;
        let _0x998fbf = _0x42be[_0x42beb7];
        return _0x998fbf;
    }, _0x36a8(_0x320013, _0x3f79cd);
}
const should = require(_0x20a3ee(0x1f1)), sinon = require(_0x20a3ee(0x1f2)), urlService = require(_0x20a3ee(0x1f3)), helpers = require('../../../core/frontend/helpers'), models = require(_0x20a3ee(0x1f4)), testUtils = require(_0x20a3ee(0x1f5));
describe(_0x20a3ee(0x1f6), function () {
    const _0x2ffbdc = _0x20a3ee;
    before(function () {
        const _0x4bd26a = _0x36a8;
        models[_0x4bd26a(0x1f7)]();
    }), beforeEach(function () {
        const _0x5966cb = _0x36a8;
        sinon[_0x5966cb(0x1f8)](urlService, _0x5966cb(0x1f9));
    }), afterEach(function () {
        const _0x3e03fa = _0x36a8;
        sinon[_0x3e03fa(0x1fa)]();
    }), it('can\x20return\x20string\x20with\x20authors', function () {
        const _0xc6bf22 = _0x36a8, _0x10027b = [
                testUtils[_0xc6bf22(0x1fb)]['forKnex']['createUser']({ 'name': _0xc6bf22(0x1fc) }),
                testUtils[_0xc6bf22(0x1fb)][_0xc6bf22(0x1fd)][_0xc6bf22(0x1fe)]({ 'name': 'Thomas' })
            ], _0x38611a = helpers[_0xc6bf22(0x1ff)][_0xc6bf22(0x200)]({ 'authors': _0x10027b }, { 'hash': { 'autolink': _0xc6bf22(0x201) } });
        should['exist'](_0x38611a), String(_0x38611a)[_0xc6bf22(0x1f1)]['equal'](_0xc6bf22(0x202));
    }), it(_0x2ffbdc(0x203), function () {
        const _0x4bbbb2 = _0x2ffbdc, _0x476539 = [
                testUtils[_0x4bbbb2(0x1fb)][_0x4bbbb2(0x1fd)][_0x4bbbb2(0x1fe)]({ 'name': 'John\x20O\x27Nolan' }),
                testUtils[_0x4bbbb2(0x1fb)][_0x4bbbb2(0x1fd)][_0x4bbbb2(0x1fe)]({ 'name': _0x4bbbb2(0x204) })
            ], _0x4f3d31 = helpers[_0x4bbbb2(0x1ff)][_0x4bbbb2(0x200)]({ 'authors': _0x476539 }, { 'hash': { 'autolink': _0x4bbbb2(0x201) } });
        should['exist'](_0x4f3d31), String(_0x4f3d31)[_0x4bbbb2(0x1f1)][_0x4bbbb2(0x205)]('John\x20O&#x27;Nolan,\x20AB&#x3D;CD&#x60;EF');
    }), it(_0x2ffbdc(0x206), function () {
        const _0x29df0e = _0x2ffbdc, _0x1ccce7 = [
                testUtils[_0x29df0e(0x1fb)][_0x29df0e(0x1fd)][_0x29df0e(0x1fe)]({ 'name': 'haunted' }),
                testUtils['DataGenerator'][_0x29df0e(0x1fd)][_0x29df0e(0x1fe)]({ 'name': _0x29df0e(0x207) })
            ], _0x203f59 = helpers['authors'][_0x29df0e(0x200)]({ 'authors': _0x1ccce7 }, {
                'hash': {
                    'separator': '|',
                    'autolink': _0x29df0e(0x201)
                }
            });
        should['exist'](_0x203f59), String(_0x203f59)[_0x29df0e(0x1f1)][_0x29df0e(0x205)](_0x29df0e(0x208));
    }), it(_0x2ffbdc(0x209), function () {
        const _0x3f4323 = _0x2ffbdc, _0x2d0c48 = [
                testUtils['DataGenerator']['forKnex'][_0x3f4323(0x1fe)]({ 'name': _0x3f4323(0x20a) }),
                testUtils[_0x3f4323(0x1fb)]['forKnex'][_0x3f4323(0x1fe)]({ 'name': _0x3f4323(0x207) })
            ], _0x4859e0 = helpers[_0x3f4323(0x1ff)][_0x3f4323(0x200)]({ 'authors': _0x2d0c48 }, {
                'hash': {
                    'prefix': _0x3f4323(0x20b),
                    'autolink': _0x3f4323(0x201)
                }
            });
        should[_0x3f4323(0x20c)](_0x4859e0), String(_0x4859e0)['should']['equal']('on\x20haunted,\x20ghost');
    }), it(_0x2ffbdc(0x20d), function () {
        const _0x44faa9 = _0x2ffbdc, _0x4d10b4 = [
                testUtils[_0x44faa9(0x1fb)][_0x44faa9(0x1fd)]['createUser']({ 'name': 'haunted' }),
                testUtils[_0x44faa9(0x1fb)][_0x44faa9(0x1fd)]['createUser']({ 'name': _0x44faa9(0x207) })
            ], _0x40f8a9 = helpers[_0x44faa9(0x1ff)][_0x44faa9(0x200)]({ 'authors': _0x4d10b4 }, {
                'hash': {
                    'suffix': _0x44faa9(0x20e),
                    'autolink': _0x44faa9(0x201)
                }
            });
        should['exist'](_0x40f8a9), String(_0x40f8a9)[_0x44faa9(0x1f1)][_0x44faa9(0x205)]('haunted,\x20ghost\x20forever');
    }), it(_0x2ffbdc(0x20f), function () {
        const _0x4fec49 = _0x2ffbdc, _0x3adbc7 = [
                testUtils['DataGenerator'][_0x4fec49(0x1fd)]['createUser']({ 'name': 'haunted' }),
                testUtils[_0x4fec49(0x1fb)][_0x4fec49(0x1fd)][_0x4fec49(0x1fe)]({ 'name': _0x4fec49(0x207) })
            ], _0x3908ab = helpers[_0x4fec49(0x1ff)]['call']({ 'authors': _0x3adbc7 }, {
                'hash': {
                    'suffix': _0x4fec49(0x20e),
                    'prefix': _0x4fec49(0x20b),
                    'autolink': 'false'
                }
            });
        should['exist'](_0x3908ab), String(_0x3908ab)[_0x4fec49(0x1f1)][_0x4fec49(0x205)](_0x4fec49(0x210));
    }), it(_0x2ffbdc(0x211), function () {
        const _0x12b971 = _0x2ffbdc, _0x4bf4c1 = [
                testUtils[_0x12b971(0x1fb)][_0x12b971(0x1fd)][_0x12b971(0x1fe)]({ 'name': _0x12b971(0x20a) }),
                testUtils[_0x12b971(0x1fb)][_0x12b971(0x1fd)][_0x12b971(0x1fe)]({ 'name': _0x12b971(0x207) })
            ], _0x5e6862 = helpers[_0x12b971(0x1ff)][_0x12b971(0x200)]({ 'authors': _0x4bf4c1 }, {
                'hash': {
                    'suffix': _0x12b971(0x212),
                    'prefix': _0x12b971(0x213),
                    'autolink': _0x12b971(0x201)
                }
            });
        should[_0x12b971(0x20c)](_0x5e6862), String(_0x5e6862)[_0x12b971(0x1f1)][_0x12b971(0x205)](_0x12b971(0x214));
    }), it(_0x2ffbdc(0x215), function () {
        const _0x4fcbfc = _0x2ffbdc, _0x7ebb9c = helpers[_0x4fcbfc(0x1ff)][_0x4fcbfc(0x200)]({}, {
                'hash': {
                    'prefix': _0x4fcbfc(0x20b),
                    'suffix': _0x4fcbfc(0x20e),
                    'autolink': _0x4fcbfc(0x201)
                }
            });
        should[_0x4fcbfc(0x20c)](_0x7ebb9c), String(_0x7ebb9c)[_0x4fcbfc(0x1f1)][_0x4fcbfc(0x205)]('');
    }), it(_0x2ffbdc(0x216), function () {
        const _0x487b3e = _0x2ffbdc, _0x5b388b = [
                testUtils[_0x487b3e(0x1fb)][_0x487b3e(0x1fd)]['createUser']({
                    'name': _0x487b3e(0x217),
                    'slug': _0x487b3e(0x218)
                }),
                testUtils[_0x487b3e(0x1fb)][_0x487b3e(0x1fd)]['createUser']({
                    'name': _0x487b3e(0x219),
                    'slug': _0x487b3e(0x219)
                })
            ];
        urlService[_0x487b3e(0x1f9)][_0x487b3e(0x21a)](_0x5b388b[0x0]['id'])[_0x487b3e(0x21b)]('author\x20url\x201'), urlService['getUrlByResourceId']['withArgs'](_0x5b388b[0x1]['id'])['returns'](_0x487b3e(0x21c));
        const _0x545ab7 = helpers[_0x487b3e(0x1ff)][_0x487b3e(0x200)]({ 'authors': _0x5b388b });
        should['exist'](_0x545ab7), String(_0x545ab7)[_0x487b3e(0x1f1)][_0x487b3e(0x205)](_0x487b3e(0x21d));
    }), it(_0x2ffbdc(0x21e), function () {
        const _0xc028f2 = _0x2ffbdc, _0x40894c = [
                testUtils[_0xc028f2(0x1fb)]['forKnex'][_0xc028f2(0x1fe)]({
                    'name': _0xc028f2(0x217),
                    'slug': _0xc028f2(0x218)
                }),
                testUtils['DataGenerator'][_0xc028f2(0x1fd)]['createUser']({
                    'name': 'bar',
                    'slug': _0xc028f2(0x219)
                })
            ];
        urlService[_0xc028f2(0x1f9)][_0xc028f2(0x21a)](_0x40894c[0x0]['id'])[_0xc028f2(0x21b)](_0xc028f2(0x21f));
        const _0x21ee1e = helpers['authors'][_0xc028f2(0x200)]({ 'authors': _0x40894c }, { 'hash': { 'limit': '1' } });
        should[_0xc028f2(0x20c)](_0x21ee1e), String(_0x21ee1e)['should']['equal']('<a\x20href=\x22author\x20url\x201\x22>foo</a>');
    }), it(_0x2ffbdc(0x220), function () {
        const _0x2fda67 = _0x2ffbdc, _0x1982c6 = [
                testUtils['DataGenerator']['forKnex'][_0x2fda67(0x1fe)]({
                    'name': _0x2fda67(0x217),
                    'slug': _0x2fda67(0x218)
                }),
                testUtils[_0x2fda67(0x1fb)][_0x2fda67(0x1fd)][_0x2fda67(0x1fe)]({
                    'name': 'bar',
                    'slug': _0x2fda67(0x219)
                })
            ];
        urlService[_0x2fda67(0x1f9)]['withArgs'](_0x1982c6[0x1]['id'])[_0x2fda67(0x21b)](_0x2fda67(0x21c));
        const _0x5f45f1 = helpers[_0x2fda67(0x1ff)][_0x2fda67(0x200)]({ 'authors': _0x1982c6 }, { 'hash': { 'from': '2' } });
        should[_0x2fda67(0x20c)](_0x5f45f1), String(_0x5f45f1)['should'][_0x2fda67(0x205)](_0x2fda67(0x221));
    }), it('can\x20list\x20authors\x20to\x20a\x20specified\x20no.', function () {
        const _0x276793 = _0x2ffbdc, _0x32f31a = [
                testUtils[_0x276793(0x1fb)][_0x276793(0x1fd)][_0x276793(0x1fe)]({
                    'name': _0x276793(0x217),
                    'slug': _0x276793(0x218)
                }),
                testUtils[_0x276793(0x1fb)]['forKnex']['createUser']({
                    'name': _0x276793(0x219),
                    'slug': _0x276793(0x219)
                })
            ];
        urlService[_0x276793(0x1f9)][_0x276793(0x21a)](_0x32f31a[0x0]['id'])['returns'](_0x276793(0x222));
        const _0x1f588c = helpers[_0x276793(0x1ff)][_0x276793(0x200)]({ 'authors': _0x32f31a }, { 'hash': { 'to': '1' } });
        should['exist'](_0x1f588c), String(_0x1f588c)[_0x276793(0x1f1)][_0x276793(0x205)](_0x276793(0x223));
    }), it(_0x2ffbdc(0x224), function () {
        const _0x38ba08 = _0x2ffbdc, _0x3d35da = [
                testUtils['DataGenerator'][_0x38ba08(0x1fd)][_0x38ba08(0x1fe)]({
                    'name': _0x38ba08(0x217),
                    'slug': _0x38ba08(0x218)
                }),
                testUtils[_0x38ba08(0x1fb)][_0x38ba08(0x1fd)][_0x38ba08(0x1fe)]({
                    'name': _0x38ba08(0x219),
                    'slug': 'bar'
                }),
                testUtils[_0x38ba08(0x1fb)]['forKnex'][_0x38ba08(0x1fe)]({
                    'name': _0x38ba08(0x225),
                    'slug': _0x38ba08(0x225)
                })
            ];
        urlService[_0x38ba08(0x1f9)][_0x38ba08(0x21a)](_0x3d35da[0x1]['id'])[_0x38ba08(0x21b)](_0x38ba08(0x21c)), urlService['getUrlByResourceId']['withArgs'](_0x3d35da[0x2]['id'])[_0x38ba08(0x21b)](_0x38ba08(0x226));
        const _0x563537 = helpers['authors']['call']({ 'authors': _0x3d35da }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });
        should['exist'](_0x563537), String(_0x563537)[_0x38ba08(0x1f1)][_0x38ba08(0x205)]('<a\x20href=\x22author\x20url\x202\x22>bar</a>,\x20<a\x20href=\x22author\x20url\x203\x22>baz</a>');
    }), it(_0x2ffbdc(0x227), function () {
        const _0x3c041c = _0x2ffbdc, _0x42cb52 = [
                testUtils[_0x3c041c(0x1fb)][_0x3c041c(0x1fd)]['createUser']({
                    'name': 'foo',
                    'slug': _0x3c041c(0x218)
                }),
                testUtils['DataGenerator'][_0x3c041c(0x1fd)][_0x3c041c(0x1fe)]({
                    'name': _0x3c041c(0x219),
                    'slug': _0x3c041c(0x219)
                }),
                testUtils[_0x3c041c(0x1fb)][_0x3c041c(0x1fd)][_0x3c041c(0x1fe)]({
                    'name': _0x3c041c(0x225),
                    'slug': 'baz'
                })
            ];
        urlService[_0x3c041c(0x1f9)]['withArgs'](_0x42cb52[0x1]['id'])['returns'](_0x3c041c(0x228));
        const _0x486ffc = helpers[_0x3c041c(0x1ff)]['call']({ 'authors': _0x42cb52 }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });
        should['exist'](_0x486ffc), String(_0x486ffc)[_0x3c041c(0x1f1)][_0x3c041c(0x205)](_0x3c041c(0x229));
    }), it(_0x2ffbdc(0x22a), function () {
        const _0x4ba3a9 = _0x2ffbdc, _0x279d04 = [
                testUtils[_0x4ba3a9(0x1fb)][_0x4ba3a9(0x1fd)][_0x4ba3a9(0x1fe)]({
                    'name': _0x4ba3a9(0x217),
                    'slug': 'foo-bar'
                }),
                testUtils['DataGenerator']['forKnex']['createUser']({
                    'name': _0x4ba3a9(0x219),
                    'slug': _0x4ba3a9(0x219)
                }),
                testUtils[_0x4ba3a9(0x1fb)][_0x4ba3a9(0x1fd)][_0x4ba3a9(0x1fe)]({
                    'name': 'baz',
                    'slug': _0x4ba3a9(0x225)
                })
            ];
        urlService['getUrlByResourceId']['withArgs'](_0x279d04[0x0]['id'])[_0x4ba3a9(0x21b)](_0x4ba3a9(0x22b)), urlService[_0x4ba3a9(0x1f9)][_0x4ba3a9(0x21a)](_0x279d04[0x1]['id'])[_0x4ba3a9(0x21b)](_0x4ba3a9(0x22c)), urlService[_0x4ba3a9(0x1f9)][_0x4ba3a9(0x21a)](_0x279d04[0x2]['id'])[_0x4ba3a9(0x21b)](_0x4ba3a9(0x22d));
        const _0x20bcce = helpers['authors'][_0x4ba3a9(0x200)]({ 'authors': _0x279d04 }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });
        should['exist'](_0x20bcce), String(_0x20bcce)[_0x4ba3a9(0x1f1)][_0x4ba3a9(0x205)](_0x4ba3a9(0x22e));
    });
});
