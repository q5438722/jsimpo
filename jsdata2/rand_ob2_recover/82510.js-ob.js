function _0x36a8(_0x320013, _0x3f79cd) {
    return _0x36a8 = function (_0x42beb7, _0x36a8dd) {
        _0x42beb7 = _0x42beb7 - 488;
        let _0x998fbf = _0x42be[_0x42beb7];
        return _0x998fbf;
    }, _0x36a8(_0x320013, _0x3f79cd);
}
const should = require(_0x20a3ee(497)), sinon = require(_0x20a3ee(498)), urlService = require(_0x20a3ee(499)), helpers = require('../../../core/frontend/helpers'), models = require(_0x20a3ee(500)), testUtils = require(_0x20a3ee(501));
describe(_0x20a3ee(502), function () {
    const _0x2ffbdc = _0x20a3ee;
    before(function () {
        const _0x4bd26a = _0x36a8;
        models[_0x4bd26a(503)]();
    }), beforeEach(function () {
        const _0x5966cb = _0x36a8;
        sinon[_0x5966cb(504)](urlService, _0x5966cb(505));
    }), afterEach(function () {
        const _0x3e03fa = _0x36a8;
        sinon[_0x3e03fa(506)]();
    }), it('can return string with authors', function () {
        const _0xc6bf22 = _0x36a8, _0x10027b = [
                testUtils[_0xc6bf22(507)]['forKnex']['createUser']({ 'name': _0xc6bf22(508) }),
                testUtils[_0xc6bf22(507)][_0xc6bf22(509)][_0xc6bf22(510)]({ 'name': 'Thomas' })
            ], _0x38611a = helpers[_0xc6bf22(511)][_0xc6bf22(512)]({ 'authors': _0x10027b }, { 'hash': { 'autolink': _0xc6bf22(513) } });
        should['exist'](_0x38611a), String(_0x38611a)[_0xc6bf22(497)]['equal'](_0xc6bf22(514));
    }), it(_0x2ffbdc(515), function () {
        const _0x4bbbb2 = _0x2ffbdc, _0x476539 = [
                testUtils[_0x4bbbb2(507)][_0x4bbbb2(509)][_0x4bbbb2(510)]({ 'name': 'John O\'Nolan' }),
                testUtils[_0x4bbbb2(507)][_0x4bbbb2(509)][_0x4bbbb2(510)]({ 'name': _0x4bbbb2(516) })
            ], _0x4f3d31 = helpers[_0x4bbbb2(511)][_0x4bbbb2(512)]({ 'authors': _0x476539 }, { 'hash': { 'autolink': _0x4bbbb2(513) } });
        should['exist'](_0x4f3d31), String(_0x4f3d31)[_0x4bbbb2(497)][_0x4bbbb2(517)]('John O&#x27;Nolan, AB&#x3D;CD&#x60;EF');
    }), it(_0x2ffbdc(518), function () {
        const _0x29df0e = _0x2ffbdc, _0x1ccce7 = [
                testUtils[_0x29df0e(507)][_0x29df0e(509)][_0x29df0e(510)]({ 'name': 'haunted' }),
                testUtils['DataGenerator'][_0x29df0e(509)][_0x29df0e(510)]({ 'name': _0x29df0e(519) })
            ], _0x203f59 = helpers['authors'][_0x29df0e(512)]({ 'authors': _0x1ccce7 }, {
                'hash': {
                    'separator': '|',
                    'autolink': _0x29df0e(513)
                }
            });
        should['exist'](_0x203f59), String(_0x203f59)[_0x29df0e(497)][_0x29df0e(517)](_0x29df0e(520));
    }), it(_0x2ffbdc(521), function () {
        const _0x3f4323 = _0x2ffbdc, _0x2d0c48 = [
                testUtils['DataGenerator']['forKnex'][_0x3f4323(510)]({ 'name': _0x3f4323(522) }),
                testUtils[_0x3f4323(507)]['forKnex'][_0x3f4323(510)]({ 'name': _0x3f4323(519) })
            ], _0x4859e0 = helpers[_0x3f4323(511)][_0x3f4323(512)]({ 'authors': _0x2d0c48 }, {
                'hash': {
                    'prefix': _0x3f4323(523),
                    'autolink': _0x3f4323(513)
                }
            });
        should[_0x3f4323(524)](_0x4859e0), String(_0x4859e0)['should']['equal']('on haunted, ghost');
    }), it(_0x2ffbdc(525), function () {
        const _0x44faa9 = _0x2ffbdc, _0x4d10b4 = [
                testUtils[_0x44faa9(507)][_0x44faa9(509)]['createUser']({ 'name': 'haunted' }),
                testUtils[_0x44faa9(507)][_0x44faa9(509)]['createUser']({ 'name': _0x44faa9(519) })
            ], _0x40f8a9 = helpers[_0x44faa9(511)][_0x44faa9(512)]({ 'authors': _0x4d10b4 }, {
                'hash': {
                    'suffix': _0x44faa9(526),
                    'autolink': _0x44faa9(513)
                }
            });
        should['exist'](_0x40f8a9), String(_0x40f8a9)[_0x44faa9(497)][_0x44faa9(517)]('haunted, ghost forever');
    }), it(_0x2ffbdc(527), function () {
        const _0x4fec49 = _0x2ffbdc, _0x3adbc7 = [
                testUtils['DataGenerator'][_0x4fec49(509)]['createUser']({ 'name': 'haunted' }),
                testUtils[_0x4fec49(507)][_0x4fec49(509)][_0x4fec49(510)]({ 'name': _0x4fec49(519) })
            ], _0x3908ab = helpers[_0x4fec49(511)]['call']({ 'authors': _0x3adbc7 }, {
                'hash': {
                    'suffix': _0x4fec49(526),
                    'prefix': _0x4fec49(523),
                    'autolink': 'false'
                }
            });
        should['exist'](_0x3908ab), String(_0x3908ab)[_0x4fec49(497)][_0x4fec49(517)](_0x4fec49(528));
    }), it(_0x2ffbdc(529), function () {
        const _0x12b971 = _0x2ffbdc, _0x4bf4c1 = [
                testUtils[_0x12b971(507)][_0x12b971(509)][_0x12b971(510)]({ 'name': _0x12b971(522) }),
                testUtils[_0x12b971(507)][_0x12b971(509)][_0x12b971(510)]({ 'name': _0x12b971(519) })
            ], _0x5e6862 = helpers[_0x12b971(511)][_0x12b971(512)]({ 'authors': _0x4bf4c1 }, {
                'hash': {
                    'suffix': _0x12b971(530),
                    'prefix': _0x12b971(531),
                    'autolink': _0x12b971(513)
                }
            });
        should[_0x12b971(524)](_0x5e6862), String(_0x5e6862)[_0x12b971(497)][_0x12b971(517)](_0x12b971(532));
    }), it(_0x2ffbdc(533), function () {
        const _0x4fcbfc = _0x2ffbdc, _0x7ebb9c = helpers[_0x4fcbfc(511)][_0x4fcbfc(512)]({}, {
                'hash': {
                    'prefix': _0x4fcbfc(523),
                    'suffix': _0x4fcbfc(526),
                    'autolink': _0x4fcbfc(513)
                }
            });
        should[_0x4fcbfc(524)](_0x7ebb9c), String(_0x7ebb9c)[_0x4fcbfc(497)][_0x4fcbfc(517)]('');
    }), it(_0x2ffbdc(534), function () {
        const _0x487b3e = _0x2ffbdc, _0x5b388b = [
                testUtils[_0x487b3e(507)][_0x487b3e(509)]['createUser']({
                    'name': _0x487b3e(535),
                    'slug': _0x487b3e(536)
                }),
                testUtils[_0x487b3e(507)][_0x487b3e(509)]['createUser']({
                    'name': _0x487b3e(537),
                    'slug': _0x487b3e(537)
                })
            ];
        urlService[_0x487b3e(505)][_0x487b3e(538)](_0x5b388b[0]['id'])[_0x487b3e(539)]('author url 1'), urlService['getUrlByResourceId']['withArgs'](_0x5b388b[1]['id'])['returns'](_0x487b3e(540));
        const _0x545ab7 = helpers[_0x487b3e(511)][_0x487b3e(512)]({ 'authors': _0x5b388b });
        should['exist'](_0x545ab7), String(_0x545ab7)[_0x487b3e(497)][_0x487b3e(517)](_0x487b3e(541));
    }), it(_0x2ffbdc(542), function () {
        const _0xc028f2 = _0x2ffbdc, _0x40894c = [
                testUtils[_0xc028f2(507)]['forKnex'][_0xc028f2(510)]({
                    'name': _0xc028f2(535),
                    'slug': _0xc028f2(536)
                }),
                testUtils['DataGenerator'][_0xc028f2(509)]['createUser']({
                    'name': 'bar',
                    'slug': _0xc028f2(537)
                })
            ];
        urlService[_0xc028f2(505)][_0xc028f2(538)](_0x40894c[0]['id'])[_0xc028f2(539)](_0xc028f2(543));
        const _0x21ee1e = helpers['authors'][_0xc028f2(512)]({ 'authors': _0x40894c }, { 'hash': { 'limit': '1' } });
        should[_0xc028f2(524)](_0x21ee1e), String(_0x21ee1e)['should']['equal']('<a href="author url 1">foo</a>');
    }), it(_0x2ffbdc(544), function () {
        const _0x2fda67 = _0x2ffbdc, _0x1982c6 = [
                testUtils['DataGenerator']['forKnex'][_0x2fda67(510)]({
                    'name': _0x2fda67(535),
                    'slug': _0x2fda67(536)
                }),
                testUtils[_0x2fda67(507)][_0x2fda67(509)][_0x2fda67(510)]({
                    'name': 'bar',
                    'slug': _0x2fda67(537)
                })
            ];
        urlService[_0x2fda67(505)]['withArgs'](_0x1982c6[1]['id'])[_0x2fda67(539)](_0x2fda67(540));
        const _0x5f45f1 = helpers[_0x2fda67(511)][_0x2fda67(512)]({ 'authors': _0x1982c6 }, { 'hash': { 'from': '2' } });
        should[_0x2fda67(524)](_0x5f45f1), String(_0x5f45f1)['should'][_0x2fda67(517)](_0x2fda67(545));
    }), it('can list authors to a specified no.', function () {
        const _0x276793 = _0x2ffbdc, _0x32f31a = [
                testUtils[_0x276793(507)][_0x276793(509)][_0x276793(510)]({
                    'name': _0x276793(535),
                    'slug': _0x276793(536)
                }),
                testUtils[_0x276793(507)]['forKnex']['createUser']({
                    'name': _0x276793(537),
                    'slug': _0x276793(537)
                })
            ];
        urlService[_0x276793(505)][_0x276793(538)](_0x32f31a[0]['id'])['returns'](_0x276793(546));
        const _0x1f588c = helpers[_0x276793(511)][_0x276793(512)]({ 'authors': _0x32f31a }, { 'hash': { 'to': '1' } });
        should['exist'](_0x1f588c), String(_0x1f588c)[_0x276793(497)][_0x276793(517)](_0x276793(547));
    }), it(_0x2ffbdc(548), function () {
        const _0x38ba08 = _0x2ffbdc, _0x3d35da = [
                testUtils['DataGenerator'][_0x38ba08(509)][_0x38ba08(510)]({
                    'name': _0x38ba08(535),
                    'slug': _0x38ba08(536)
                }),
                testUtils[_0x38ba08(507)][_0x38ba08(509)][_0x38ba08(510)]({
                    'name': _0x38ba08(537),
                    'slug': 'bar'
                }),
                testUtils[_0x38ba08(507)]['forKnex'][_0x38ba08(510)]({
                    'name': _0x38ba08(549),
                    'slug': _0x38ba08(549)
                })
            ];
        urlService[_0x38ba08(505)][_0x38ba08(538)](_0x3d35da[1]['id'])[_0x38ba08(539)](_0x38ba08(540)), urlService['getUrlByResourceId']['withArgs'](_0x3d35da[2]['id'])[_0x38ba08(539)](_0x38ba08(550));
        const _0x563537 = helpers['authors']['call']({ 'authors': _0x3d35da }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });
        should['exist'](_0x563537), String(_0x563537)[_0x38ba08(497)][_0x38ba08(517)]('<a href="author url 2">bar</a>, <a href="author url 3">baz</a>');
    }), it(_0x2ffbdc(551), function () {
        const _0x3c041c = _0x2ffbdc, _0x42cb52 = [
                testUtils[_0x3c041c(507)][_0x3c041c(509)]['createUser']({
                    'name': 'foo',
                    'slug': _0x3c041c(536)
                }),
                testUtils['DataGenerator'][_0x3c041c(509)][_0x3c041c(510)]({
                    'name': _0x3c041c(537),
                    'slug': _0x3c041c(537)
                }),
                testUtils[_0x3c041c(507)][_0x3c041c(509)][_0x3c041c(510)]({
                    'name': _0x3c041c(549),
                    'slug': 'baz'
                })
            ];
        urlService[_0x3c041c(505)]['withArgs'](_0x42cb52[1]['id'])['returns'](_0x3c041c(552));
        const _0x486ffc = helpers[_0x3c041c(511)]['call']({ 'authors': _0x42cb52 }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });
        should['exist'](_0x486ffc), String(_0x486ffc)[_0x3c041c(497)][_0x3c041c(517)](_0x3c041c(553));
    }), it(_0x2ffbdc(554), function () {
        const _0x4ba3a9 = _0x2ffbdc, _0x279d04 = [
                testUtils[_0x4ba3a9(507)][_0x4ba3a9(509)][_0x4ba3a9(510)]({
                    'name': _0x4ba3a9(535),
                    'slug': 'foo-bar'
                }),
                testUtils['DataGenerator']['forKnex']['createUser']({
                    'name': _0x4ba3a9(537),
                    'slug': _0x4ba3a9(537)
                }),
                testUtils[_0x4ba3a9(507)][_0x4ba3a9(509)][_0x4ba3a9(510)]({
                    'name': 'baz',
                    'slug': _0x4ba3a9(549)
                })
            ];
        urlService['getUrlByResourceId']['withArgs'](_0x279d04[0]['id'])[_0x4ba3a9(539)](_0x4ba3a9(555)), urlService[_0x4ba3a9(505)][_0x4ba3a9(538)](_0x279d04[1]['id'])[_0x4ba3a9(539)](_0x4ba3a9(556)), urlService[_0x4ba3a9(505)][_0x4ba3a9(538)](_0x279d04[2]['id'])[_0x4ba3a9(539)](_0x4ba3a9(557));
        const _0x20bcce = helpers['authors'][_0x4ba3a9(512)]({ 'authors': _0x279d04 }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });
        should['exist'](_0x20bcce), String(_0x20bcce)[_0x4ba3a9(497)][_0x4ba3a9(517)](_0x4ba3a9(558));
    });
});