const _0x5c5c = [
    'should',
    'init',
    'restore',
    'createSession',
    'sets\x20req.session.origin\x20from\x20the\x20Referer\x20header',
    'stub',
    'get',
    'withArgs',
    'user-agent',
    'origin',
    'referrer',
    'returns',
    'http://ghost.org/path',
    '127.0.0.1',
    'user',
    'User',
    'forge',
    'sendStatus',
    'callsFake',
    'equal',
    'sets\x20req.session.user_id,origin,user_agent,ip\x20and\x20calls\x20sendStatus\x20with\x20201\x20if\x20the\x20check\x20succeeds',
    'bububang',
    'user_id',
    'http://host.tld',
    'user_agent',
    'destroySession',
    'calls\x20req.session.destroy',
    'destroy',
    'callCount',
    'oops',
    'errorType',
    'calls\x20sendStatus\x20with\x20204\x20if\x20destroy\x20does\x20not\x20error',
    '3578TUuAsz',
    '42TQcnkl',
    '61498mRUwiL',
    '25934KKOwSl',
    '30UrSrku',
    '5rbDwoK',
    '5199gHYgog',
    '1eBioDK',
    '246899LoMVpO',
    '49529WkaVMG',
    '16JoGxhQ',
    '2564832iCtmvU',
    '../../../../../core/server/services/auth',
    'session',
    '../../../../../core/server/models',
    'sinon'
];
const _0x4ca749 = _0x3040;
function _0x3040(_0x52902c, _0x4aa5d3) {
    return _0x3040 = function (_0x5c5ccc, _0x30409b) {
        _0x5c5ccc = _0x5c5ccc - 0x95;
        let _0x22b26d = _0x5c5c[_0x5c5ccc];
        return _0x22b26d;
    }, _0x3040(_0x52902c, _0x4aa5d3);
}
(function (_0x5041ce, _0x303b41) {
    const _0x2724e9 = _0x3040;
    while (!![]) {
        try {
            const _0xce08a = -parseInt(_0x2724e9(0x95)) * parseInt(_0x2724e9(0x96)) + -parseInt(_0x2724e9(0x97)) + -parseInt(_0x2724e9(0x98)) * parseInt(_0x2724e9(0x99)) + parseInt(_0x2724e9(0x9a)) * parseInt(_0x2724e9(0x9b)) + -parseInt(_0x2724e9(0x9c)) * parseInt(_0x2724e9(0x9d)) + -parseInt(_0x2724e9(0x9e)) * parseInt(_0x2724e9(0x9f)) + parseInt(_0x2724e9(0xa0));
            if (_0xce08a === _0x303b41)
                break;
            else
                _0x5041ce['push'](_0x5041ce['shift']());
        } catch (_0x57d381) {
            _0x5041ce['push'](_0x5041ce['shift']());
        }
    }
}(_0x5c5c, 0x89206));
const sessionMiddleware = require(_0x4ca749(0xa1))[_0x4ca749(0xa2)], models = require(_0x4ca749(0xa3)), sinon = require(_0x4ca749(0xa4)), should = require(_0x4ca749(0xa5));
describe('Session\x20Service', function () {
    const _0x284cea = _0x4ca749;
    before(function () {
        const _0x43e794 = _0x3040;
        models[_0x43e794(0xa6)]();
    }), afterEach(function () {
        const _0x30a518 = _0x3040;
        sinon[_0x30a518(0xa7)]();
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
    describe(_0x284cea(0xa8), function () {
        const _0x16ec55 = _0x284cea;
        it(_0x16ec55(0xa9), function (_0x33dc5a) {
            const _0xd41ce6 = _0x16ec55, _0x43f381 = _0x4a4055(), _0x9d5106 = _0x159c6c();
            sinon[_0xd41ce6(0xaa)](_0x43f381, _0xd41ce6(0xab))[_0xd41ce6(0xac)](_0xd41ce6(0xad))['returns']('')[_0xd41ce6(0xac)](_0xd41ce6(0xae))['returns']('')[_0xd41ce6(0xac)](_0xd41ce6(0xaf))[_0xd41ce6(0xb0)](_0xd41ce6(0xb1)), _0x43f381['ip'] = _0xd41ce6(0xb2), _0x43f381[_0xd41ce6(0xb3)] = models[_0xd41ce6(0xb4)][_0xd41ce6(0xb5)]({ 'id': 0x17 }), sinon[_0xd41ce6(0xaa)](_0x9d5106, _0xd41ce6(0xb6))[_0xd41ce6(0xb7)](function () {
                const _0x4ad061 = _0xd41ce6;
                should[_0x4ad061(0xb8)](_0x43f381[_0x4ad061(0xa2)][_0x4ad061(0xae)], 'http://ghost.org'), _0x33dc5a();
            }), sessionMiddleware[_0xd41ce6(0xa8)](_0x43f381, _0x9d5106);
        }), it(_0x16ec55(0xb9), function (_0xc98e21) {
            const _0x90285f = _0x16ec55, _0x1b8834 = _0x4a4055(), _0x2b37b3 = _0x159c6c();
            sinon[_0x90285f(0xaa)](_0x1b8834, _0x90285f(0xab))['withArgs'](_0x90285f(0xae))[_0x90285f(0xb0)]('http://host.tld')[_0x90285f(0xac)](_0x90285f(0xad))[_0x90285f(0xb0)](_0x90285f(0xba)), _0x1b8834['ip'] = _0x90285f(0xb2), _0x1b8834['user'] = models[_0x90285f(0xb4)][_0x90285f(0xb5)]({ 'id': 0x17 }), sinon[_0x90285f(0xaa)](_0x2b37b3, _0x90285f(0xb6))['callsFake'](function (_0x3de076) {
                const _0x58aef3 = _0x90285f;
                should[_0x58aef3(0xb8)](_0x1b8834['session'][_0x58aef3(0xbb)], 0x17), should[_0x58aef3(0xb8)](_0x1b8834[_0x58aef3(0xa2)][_0x58aef3(0xae)], _0x58aef3(0xbc)), should[_0x58aef3(0xb8)](_0x1b8834[_0x58aef3(0xa2)][_0x58aef3(0xbd)], 'bububang'), should[_0x58aef3(0xb8)](_0x1b8834[_0x58aef3(0xa2)]['ip'], _0x58aef3(0xb2)), should[_0x58aef3(0xb8)](_0x3de076, 0xc9), _0xc98e21();
            }), sessionMiddleware[_0x90285f(0xa8)](_0x1b8834, _0x2b37b3);
        });
    }), describe(_0x284cea(0xbe), function () {
        const _0x2f6093 = _0x284cea;
        it(_0x2f6093(0xbf), function (_0x3ecb0d) {
            const _0x12ab0f = _0x2f6093, _0x3953db = _0x4a4055(), _0xc26dc5 = _0x159c6c(), _0x582390 = sinon[_0x12ab0f(0xaa)](_0x3953db[_0x12ab0f(0xa2)], _0x12ab0f(0xc0))['callsFake'](function (_0x341a0c) {
                    _0x341a0c();
                });
            sinon[_0x12ab0f(0xaa)](_0xc26dc5, _0x12ab0f(0xb6))[_0x12ab0f(0xb7)](function () {
                const _0x3da86b = _0x12ab0f;
                should[_0x3da86b(0xb8)](_0x582390[_0x3da86b(0xc1)], 0x1), _0x3ecb0d();
            }), sessionMiddleware[_0x12ab0f(0xbe)](_0x3953db, _0xc26dc5);
        }), it('calls\x20next\x20with\x20InternalServerError\x20if\x20destroy\x20errors', function (_0xb38848) {
            const _0x1575ae = _0x2f6093, _0x52bd67 = _0x4a4055(), _0x86ebc8 = _0x159c6c();
            sinon[_0x1575ae(0xaa)](_0x52bd67[_0x1575ae(0xa2)], _0x1575ae(0xc0))[_0x1575ae(0xb7)](function (_0xda5f80) {
                const _0x1e0233 = _0x1575ae;
                _0xda5f80(new Error(_0x1e0233(0xc2)));
            }), sessionMiddleware['destroySession'](_0x52bd67, _0x86ebc8, function _0x2373bd(_0x144508) {
                const _0x256496 = _0x1575ae;
                should[_0x256496(0xb8)](_0x144508[_0x256496(0xc3)], 'InternalServerError'), _0xb38848();
            });
        }), it(_0x2f6093(0xc4), function (_0x52bc5f) {
            const _0x565a56 = _0x2f6093, _0x57880c = _0x4a4055(), _0x372578 = _0x159c6c();
            sinon['stub'](_0x57880c[_0x565a56(0xa2)], 'destroy')[_0x565a56(0xb7)](function (_0x30caa6) {
                _0x30caa6();
            }), sinon[_0x565a56(0xaa)](_0x372578, 'sendStatus')[_0x565a56(0xb7)](function (_0x28c1cd) {
                const _0x56992f = _0x565a56;
                should[_0x56992f(0xb8)](_0x28c1cd, 0xcc), _0x52bc5f();
            }), sessionMiddleware[_0x565a56(0xbe)](_0x57880c, _0x372578);
        });
    });
});
