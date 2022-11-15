const sessionMiddleware = require(_0x4ca749(161))[_0x4ca749(162)], models = require(_0x4ca749(163)), sinon = require(_0x4ca749(164)), should = require(_0x4ca749(165));
describe('Session Service', function () {
    const _0x284cea = _0x4ca749;
    before(function () {
        const _0x43e794 = _0x3040;
        models[_0x43e794(166)]();
    }), afterEach(function () {
        const _0x30a518 = _0x3040;
        sinon[_0x30a518(167)]();
    });
    const _0x4a4055 = function _0x1dc2b9() {
            return {
                'session': {
                    'destroy'() {
                    }
                },
                'user': null,
                'body': {},
                'get'() {
                }
            };
        }, _0x159c6c = function _0x1052cb() {
            return {
                'sendStatus'() {
                }
            };
        };
    describe(_0x284cea(168), function () {
        const _0x16ec55 = _0x284cea;
        it(_0x16ec55(169), function (_0x33dc5a) {
            const _0xd41ce6 = _0x16ec55, _0x43f381 = _0x4a4055(), _0x9d5106 = _0x159c6c();
            sinon[_0xd41ce6(170)](_0x43f381, _0xd41ce6(171))[_0xd41ce6(172)](_0xd41ce6(173))['returns']('')[_0xd41ce6(172)](_0xd41ce6(174))['returns']('')[_0xd41ce6(172)](_0xd41ce6(175))[_0xd41ce6(176)](_0xd41ce6(177)), _0x43f381['ip'] = _0xd41ce6(178), _0x43f381[_0xd41ce6(179)] = models[_0xd41ce6(180)][_0xd41ce6(181)]({ 'id': 23 }), sinon[_0xd41ce6(170)](_0x9d5106, _0xd41ce6(182))[_0xd41ce6(183)](function () {
                const _0x4ad061 = _0xd41ce6;
                should[_0x4ad061(184)](_0x43f381[_0x4ad061(162)][_0x4ad061(174)], 'http://ghost.org'), _0x33dc5a();
            }), sessionMiddleware[_0xd41ce6(168)](_0x43f381, _0x9d5106);
        }), it(_0x16ec55(185), function (_0xc98e21) {
            const _0x90285f = _0x16ec55, _0x1b8834 = _0x4a4055(), _0x2b37b3 = _0x159c6c();
            sinon[_0x90285f(170)](_0x1b8834, _0x90285f(171))['withArgs'](_0x90285f(174))[_0x90285f(176)]('http://host.tld')[_0x90285f(172)](_0x90285f(173))[_0x90285f(176)](_0x90285f(186)), _0x1b8834['ip'] = _0x90285f(178), _0x1b8834['user'] = models[_0x90285f(180)][_0x90285f(181)]({ 'id': 23 }), sinon[_0x90285f(170)](_0x2b37b3, _0x90285f(182))['callsFake'](function (_0x3de076) {
                const _0x58aef3 = _0x90285f;
                should[_0x58aef3(184)](_0x1b8834['session'][_0x58aef3(187)], 23), should[_0x58aef3(184)](_0x1b8834[_0x58aef3(162)][_0x58aef3(174)], _0x58aef3(188)), should[_0x58aef3(184)](_0x1b8834[_0x58aef3(162)][_0x58aef3(189)], 'bububang'), should[_0x58aef3(184)](_0x1b8834[_0x58aef3(162)]['ip'], _0x58aef3(178)), should[_0x58aef3(184)](_0x3de076, 201), _0xc98e21();
            }), sessionMiddleware[_0x90285f(168)](_0x1b8834, _0x2b37b3);
        });
    }), describe(_0x284cea(190), function () {
        const _0x2f6093 = _0x284cea;
        it(_0x2f6093(191), function (_0x3ecb0d) {
            const _0x12ab0f = _0x2f6093, _0x3953db = _0x4a4055(), _0xc26dc5 = _0x159c6c(), _0x582390 = sinon[_0x12ab0f(170)](_0x3953db[_0x12ab0f(162)], _0x12ab0f(192))['callsFake'](function (_0x341a0c) {
                    _0x341a0c();
                });
            sinon[_0x12ab0f(170)](_0xc26dc5, _0x12ab0f(182))[_0x12ab0f(183)](function () {
                const _0x3da86b = _0x12ab0f;
                should[_0x3da86b(184)](_0x582390[_0x3da86b(193)], 1), _0x3ecb0d();
            }), sessionMiddleware[_0x12ab0f(190)](_0x3953db, _0xc26dc5);
        }), it('calls next with InternalServerError if destroy errors', function (_0xb38848) {
            const _0x1575ae = _0x2f6093, _0x52bd67 = _0x4a4055(), _0x86ebc8 = _0x159c6c();
            sinon[_0x1575ae(170)](_0x52bd67[_0x1575ae(162)], _0x1575ae(192))[_0x1575ae(183)](function (_0xda5f80) {
                const _0x1e0233 = _0x1575ae;
                _0xda5f80(new Error(_0x1e0233(194)));
            }), sessionMiddleware['destroySession'](_0x52bd67, _0x86ebc8, function _0x2373bd(_0x144508) {
                const _0x256496 = _0x1575ae;
                should[_0x256496(184)](_0x144508[_0x256496(195)], 'InternalServerError'), _0xb38848();
            });
        }), it(_0x2f6093(196), function (_0x52bc5f) {
            const _0x565a56 = _0x2f6093, _0x57880c = _0x4a4055(), _0x372578 = _0x159c6c();
            sinon['stub'](_0x57880c[_0x565a56(162)], 'destroy')[_0x565a56(183)](function (_0x30caa6) {
                _0x30caa6();
            }), sinon[_0x565a56(170)](_0x372578, 'sendStatus')[_0x565a56(183)](function (_0x28c1cd) {
                const _0x56992f = _0x565a56;
                should[_0x56992f(184)](_0x28c1cd, 204), _0x52bc5f();
            }), sessionMiddleware[_0x565a56(190)](_0x57880c, _0x372578);
        });
    });
});