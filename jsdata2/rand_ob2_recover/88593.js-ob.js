function _0x1750(_0x53a9d7, _0x1406c6) {
    return _0x1750 = function (_0x5d3118, _0x175024) {
        _0x5d3118 = _0x5d3118 - 389;
        let _0x3be802 = _0x5d31[_0x5d3118];
        return _0x3be802;
    }, _0x1750(_0x53a9d7, _0x1406c6);
}
const uuid = require(_0x170d0f(400)), {encode, decode} = require(_0x170d0f(401)), {MESSAGE, RESPONSE, PING, PONG} = require(_0x170d0f(402)), hasOwn = Object[_0x170d0f(403)][_0x170d0f(404)];
Object[_0x170d0f(405)](exports, {
    'enable'(_0x1f8945) {
        const _0x55a480 = _0x170d0f;
        if (typeof _0x1f8945[_0x55a480(406)] === _0x55a480(407) && typeof _0x1f8945['sendMessage'] === _0x55a480(407))
            return _0x1f8945;
        const _0x44f62c = new Map();
        _0x1f8945[_0x55a480(406)] = function _0x1fd0df(_0x586410, _0x519971) {
            const _0x99750f = _0x55a480;
            !_0x44f62c[_0x99750f(408)](_0x586410) && _0x44f62c[_0x99750f(409)](_0x586410, new Set()), _0x44f62c[_0x99750f(410)](_0x586410)[_0x99750f(411)](_0x519971);
        };
        const _0x3df667 = new Map(), _0x3b4e85 = new Map(), _0x5ea117 = new Map(), _0x13ce7f = Object[_0x55a480(412)](null);
        function _0x1c2b0e(_0x2934d1) {
            const _0x461132 = _0x55a480;
            _0x2934d1 && _0x2934d1[_0x461132(413)] !== 'EPIPE' && console[_0x461132(414)](_0x461132(415), _0x2934d1);
        }
        _0x13ce7f[PING] = function ({id: _0x5b938e}) {
            const _0x510be5 = _0x55a480;
            _0x1f8945[_0x510be5(416)]({
                'type': PONG,
                'id': _0x5b938e
            }, _0x1c2b0e);
        }, _0x13ce7f[PONG] = function ({id: _0x556023}) {
            const _0x2ac19b = _0x55a480, _0x1974a4 = _0x3df667['get'](_0x556023);
            typeof _0x1974a4 === _0x2ac19b(407) && (_0x3df667['delete'](_0x556023), _0x1974a4());
        }, _0x13ce7f[MESSAGE] = function ({
            responseId: _0x27f04a,
            topic: _0x1d420c,
            encodedPayload: _0x23e398
        }) {
            const _0x3e8549 = _0x55a480, _0x41ef28 = (_0x5ea117['get'](_0x1d420c) || Promise[_0x3e8549(417)]())['then'](() => {
                    const _0x5458ff = _0x3e8549, _0x3d3e4b = [], _0x1b0be5 = _0x44f62c[_0x5458ff(410)](_0x1d420c);
                    if (_0x1b0be5 && _0x1b0be5[_0x5458ff(418)] > 0)
                        return _0x1b0be5[_0x5458ff(419)](_0x417ed9 => _0x3d3e4b[_0x5458ff(420)](_0x417ed9(decode(_0x23e398)))), Promise['all'](_0x3d3e4b);
                    return _0x3d3e4b;
                })['then'](_0x464beb => {
                    const _0x5af3a4 = _0x3e8549;
                    _0x27f04a && _0x1f8945[_0x5af3a4(416)]({
                        'type': RESPONSE,
                        'responseId': _0x27f04a,
                        'encodedResults': encode(_0x464beb)
                    }, _0x1c2b0e);
                }, _0x4198ca => {
                    const _0xa70c38 = _0x3e8549, _0x562df8 = {};
                    Reflect[_0xa70c38(421)](_0x4198ca)[_0xa70c38(419)](_0x4acb77 => {
                        _0x562df8[_0x4acb77] = _0x4198ca[_0x4acb77];
                    }), _0x1f8945['send']({
                        'type': RESPONSE,
                        'responseId': _0x27f04a,
                        'encodedError': encode(_0x562df8)
                    }, _0x1c2b0e);
                });
            _0x5ea117['set'](_0x1d420c, _0x41ef28);
        }, _0x13ce7f[RESPONSE] = function (_0x252d1c) {
            const _0x52afe6 = _0x55a480, _0x358868 = _0x3b4e85[_0x52afe6(410)](_0x252d1c[_0x52afe6(422)]);
            _0x358868 && (hasOwn[_0x52afe6(423)](_0x252d1c, _0x52afe6(424)) ? _0x358868[_0x52afe6(425)](decode(_0x252d1c['encodedError'])) : _0x358868[_0x52afe6(417)](decode(_0x252d1c[_0x52afe6(426)])));
        }, _0x1f8945['on']('message', _0x7a5f6c => {
            const _0x27f54f = _0x55a480, _0x446553 = _0x13ce7f[_0x7a5f6c['type']];
            typeof _0x446553 === _0x27f54f(407) && _0x446553(_0x7a5f6c);
        }), _0x1f8945['sendMessage'] = function _0x373b80(_0x2dc313, _0x5d47f1) {
            const _0xf5d13a = _0x55a480;
            return _0x1f8945[_0xf5d13a(427)] = _0x1f8945[_0xf5d13a(427)] || _0x544d2e(), _0x1f8945[_0xf5d13a(427)][_0xf5d13a(428)](() => {
                const _0x56d847 = _0xf5d13a, _0x25218b = uuid();
                return new Promise((_0x4bfe34, _0x393384) => {
                    const _0x24d20a = _0x1750;
                    _0x3b4e85['set'](_0x25218b, {
                        'resolve': _0x4bfe34,
                        'reject': _0x393384
                    }), _0x1f8945[_0x24d20a(416)]({
                        'type': MESSAGE,
                        'responseId': _0x25218b,
                        'topic': _0x2dc313,
                        'encodedPayload': encode(_0x5d47f1)
                    }, _0xb9afc8 => {
                        _0xb9afc8 && _0x393384(_0xb9afc8);
                    });
                })[_0x56d847(428)](_0x2658d8 => {
                    const _0x581bcc = _0x56d847;
                    return _0x3b4e85[_0x581bcc(429)](_0x25218b), _0x2658d8;
                }, _0x4220fd => {
                    _0x3b4e85['delete'](_0x25218b);
                    throw _0x4220fd;
                });
            });
        };
        function _0x544d2e() {
            return new Promise((_0x11265a, _0x5f342f) => {
                const _0x5e6bc8 = _0x1750, _0x369e45 = {
                        'type': PING,
                        'id': uuid()
                    }, _0x32d44d = 1.1;
                let _0x4c04c4 = 50;
                _0x3df667[_0x5e6bc8(409)](_0x369e45['id'], _0x11265a);
                function _0x10867b() {
                    const _0x49b673 = _0x5e6bc8;
                    _0x3df667[_0x49b673(408)](_0x369e45['id']) && _0x1f8945[_0x49b673(416)](_0x369e45, _0x59d9ed => {
                        _0x59d9ed ? _0x5f342f(_0x59d9ed) : (setTimeout(_0x10867b, _0x4c04c4), _0x4c04c4 *= _0x32d44d);
                    });
                }
                _0x10867b();
            });
        }
        return _0x1f8945['on']('exit', (_0x57138c, _0x4e1f4d) => {
            const _0x50c6b9 = _0x55a480, _0x4e1ae4 = new Error('process exited');
            Object[_0x50c6b9(405)](_0x4e1ae4, {
                'code': _0x57138c,
                'signal': _0x4e1f4d
            }), _0x3b4e85[_0x50c6b9(419)](_0x1bdd25 => _0x1bdd25['reject'](_0x4e1ae4)), _0x1f8945[_0x50c6b9(427)] = Promise[_0x50c6b9(425)](_0x4e1ae4), _0x1f8945['readyForMessages'][_0x50c6b9(430)](() => {
            });
        }), _0x1f8945;
    },
    'onMessage'(_0x44350b, _0x1080a0) {
    }
});
typeof process['send'] === _0x170d0f(407) && (exports[_0x170d0f(431)](process), exports[_0x170d0f(406)] = process[_0x170d0f(406)]);