const _0x5d31 = [
    'get',
    'add',
    'create',
    'code',
    'error',
    'Error\x20sending\x20message:',
    'send',
    'resolve',
    'size',
    'forEach',
    'push',
    'ownKeys',
    'responseId',
    'call',
    'encodedError',
    'reject',
    'encodedResults',
    'readyForMessages',
    'then',
    'delete',
    'catch',
    'enable',
    '104767ArKUwi',
    '465614bJRkUF',
    '518147OXlkqj',
    '1mZAyIO',
    '169462jmYIil',
    '6lPgEJL',
    '32367LtHtLp',
    '251gBVrLo',
    '1093GzOKql',
    '2QzCSQq',
    '157061csqEQL',
    'uuid',
    'arson',
    './types.js',
    'prototype',
    'hasOwnProperty',
    'assign',
    'onMessage',
    'function',
    'has',
    'set'
];
const _0x170d0f = _0x1750;
(function (_0x3c5f3d, _0x45d3ba) {
    const _0x1e0026 = _0x1750;
    while (!![]) {
        try {
            const _0x485964 = -parseInt(_0x1e0026(0x185)) + parseInt(_0x1e0026(0x186)) + parseInt(_0x1e0026(0x187)) * -parseInt(_0x1e0026(0x188)) + -parseInt(_0x1e0026(0x189)) + -parseInt(_0x1e0026(0x18a)) * -parseInt(_0x1e0026(0x18b)) + parseInt(_0x1e0026(0x18c)) * parseInt(_0x1e0026(0x18d)) + -parseInt(_0x1e0026(0x18e)) * -parseInt(_0x1e0026(0x18f));
            if (_0x485964 === _0x45d3ba)
                break;
            else
                _0x3c5f3d['push'](_0x3c5f3d['shift']());
        } catch (_0xaae78d) {
            _0x3c5f3d['push'](_0x3c5f3d['shift']());
        }
    }
}(_0x5d31, 0x6f4e1));
function _0x1750(_0x53a9d7, _0x1406c6) {
    return _0x1750 = function (_0x5d3118, _0x175024) {
        _0x5d3118 = _0x5d3118 - 0x185;
        let _0x3be802 = _0x5d31[_0x5d3118];
        return _0x3be802;
    }, _0x1750(_0x53a9d7, _0x1406c6);
}
const uuid = require(_0x170d0f(0x190)), {encode, decode} = require(_0x170d0f(0x191)), {MESSAGE, RESPONSE, PING, PONG} = require(_0x170d0f(0x192)), hasOwn = Object[_0x170d0f(0x193)][_0x170d0f(0x194)];
Object[_0x170d0f(0x195)](exports, {
    'enable'(_0x1f8945) {
        const _0x55a480 = _0x170d0f;
        if (typeof _0x1f8945[_0x55a480(0x196)] === _0x55a480(0x197) && typeof _0x1f8945['sendMessage'] === _0x55a480(0x197))
            return _0x1f8945;
        const _0x44f62c = new Map();
        _0x1f8945[_0x55a480(0x196)] = function _0x1fd0df(_0x586410, _0x519971) {
            const _0x99750f = _0x55a480;
            !_0x44f62c[_0x99750f(0x198)](_0x586410) && _0x44f62c[_0x99750f(0x199)](_0x586410, new Set()), _0x44f62c[_0x99750f(0x19a)](_0x586410)[_0x99750f(0x19b)](_0x519971);
        };
        const _0x3df667 = new Map(), _0x3b4e85 = new Map(), _0x5ea117 = new Map(), _0x13ce7f = Object[_0x55a480(0x19c)](null);
        function _0x1c2b0e(_0x2934d1) {
            const _0x461132 = _0x55a480;
            _0x2934d1 && _0x2934d1[_0x461132(0x19d)] !== 'EPIPE' && console[_0x461132(0x19e)](_0x461132(0x19f), _0x2934d1);
        }
        _0x13ce7f[PING] = function ({id: _0x5b938e}) {
            const _0x510be5 = _0x55a480;
            _0x1f8945[_0x510be5(0x1a0)]({
                'type': PONG,
                'id': _0x5b938e
            }, _0x1c2b0e);
        }, _0x13ce7f[PONG] = function ({id: _0x556023}) {
            const _0x2ac19b = _0x55a480, _0x1974a4 = _0x3df667['get'](_0x556023);
            typeof _0x1974a4 === _0x2ac19b(0x197) && (_0x3df667['delete'](_0x556023), _0x1974a4());
        }, _0x13ce7f[MESSAGE] = function ({
            responseId: _0x27f04a,
            topic: _0x1d420c,
            encodedPayload: _0x23e398
        }) {
            const _0x3e8549 = _0x55a480, _0x41ef28 = (_0x5ea117['get'](_0x1d420c) || Promise[_0x3e8549(0x1a1)]())['then'](() => {
                    const _0x5458ff = _0x3e8549, _0x3d3e4b = [], _0x1b0be5 = _0x44f62c[_0x5458ff(0x19a)](_0x1d420c);
                    if (_0x1b0be5 && _0x1b0be5[_0x5458ff(0x1a2)] > 0x0)
                        return _0x1b0be5[_0x5458ff(0x1a3)](_0x417ed9 => _0x3d3e4b[_0x5458ff(0x1a4)](_0x417ed9(decode(_0x23e398)))), Promise['all'](_0x3d3e4b);
                    return _0x3d3e4b;
                })['then'](_0x464beb => {
                    const _0x5af3a4 = _0x3e8549;
                    _0x27f04a && _0x1f8945[_0x5af3a4(0x1a0)]({
                        'type': RESPONSE,
                        'responseId': _0x27f04a,
                        'encodedResults': encode(_0x464beb)
                    }, _0x1c2b0e);
                }, _0x4198ca => {
                    const _0xa70c38 = _0x3e8549, _0x562df8 = {};
                    Reflect[_0xa70c38(0x1a5)](_0x4198ca)[_0xa70c38(0x1a3)](_0x4acb77 => {
                        _0x562df8[_0x4acb77] = _0x4198ca[_0x4acb77];
                    }), _0x1f8945['send']({
                        'type': RESPONSE,
                        'responseId': _0x27f04a,
                        'encodedError': encode(_0x562df8)
                    }, _0x1c2b0e);
                });
            _0x5ea117['set'](_0x1d420c, _0x41ef28);
        }, _0x13ce7f[RESPONSE] = function (_0x252d1c) {
            const _0x52afe6 = _0x55a480, _0x358868 = _0x3b4e85[_0x52afe6(0x19a)](_0x252d1c[_0x52afe6(0x1a6)]);
            _0x358868 && (hasOwn[_0x52afe6(0x1a7)](_0x252d1c, _0x52afe6(0x1a8)) ? _0x358868[_0x52afe6(0x1a9)](decode(_0x252d1c['encodedError'])) : _0x358868[_0x52afe6(0x1a1)](decode(_0x252d1c[_0x52afe6(0x1aa)])));
        }, _0x1f8945['on']('message', _0x7a5f6c => {
            const _0x27f54f = _0x55a480, _0x446553 = _0x13ce7f[_0x7a5f6c['type']];
            typeof _0x446553 === _0x27f54f(0x197) && _0x446553(_0x7a5f6c);
        }), _0x1f8945['sendMessage'] = function _0x373b80(_0x2dc313, _0x5d47f1) {
            const _0xf5d13a = _0x55a480;
            return _0x1f8945[_0xf5d13a(0x1ab)] = _0x1f8945[_0xf5d13a(0x1ab)] || _0x544d2e(), _0x1f8945[_0xf5d13a(0x1ab)][_0xf5d13a(0x1ac)](() => {
                const _0x56d847 = _0xf5d13a, _0x25218b = uuid();
                return new Promise((_0x4bfe34, _0x393384) => {
                    const _0x24d20a = _0x1750;
                    _0x3b4e85['set'](_0x25218b, {
                        'resolve': _0x4bfe34,
                        'reject': _0x393384
                    }), _0x1f8945[_0x24d20a(0x1a0)]({
                        'type': MESSAGE,
                        'responseId': _0x25218b,
                        'topic': _0x2dc313,
                        'encodedPayload': encode(_0x5d47f1)
                    }, _0xb9afc8 => {
                        _0xb9afc8 && _0x393384(_0xb9afc8);
                    });
                })[_0x56d847(0x1ac)](_0x2658d8 => {
                    const _0x581bcc = _0x56d847;
                    return _0x3b4e85[_0x581bcc(0x1ad)](_0x25218b), _0x2658d8;
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
                let _0x4c04c4 = 0x32;
                _0x3df667[_0x5e6bc8(0x199)](_0x369e45['id'], _0x11265a);
                function _0x10867b() {
                    const _0x49b673 = _0x5e6bc8;
                    _0x3df667[_0x49b673(0x198)](_0x369e45['id']) && _0x1f8945[_0x49b673(0x1a0)](_0x369e45, _0x59d9ed => {
                        _0x59d9ed ? _0x5f342f(_0x59d9ed) : (setTimeout(_0x10867b, _0x4c04c4), _0x4c04c4 *= _0x32d44d);
                    });
                }
                _0x10867b();
            });
        }
        return _0x1f8945['on']('exit', (_0x57138c, _0x4e1f4d) => {
            const _0x50c6b9 = _0x55a480, _0x4e1ae4 = new Error('process\x20exited');
            Object[_0x50c6b9(0x195)](_0x4e1ae4, {
                'code': _0x57138c,
                'signal': _0x4e1f4d
            }), _0x3b4e85[_0x50c6b9(0x1a3)](_0x1bdd25 => _0x1bdd25['reject'](_0x4e1ae4)), _0x1f8945[_0x50c6b9(0x1ab)] = Promise[_0x50c6b9(0x1a9)](_0x4e1ae4), _0x1f8945['readyForMessages'][_0x50c6b9(0x1ae)](() => {
            });
        }), _0x1f8945;
    },
    'onMessage'(_0x44350b, _0x1080a0) {
    }
});
typeof process['send'] === _0x170d0f(0x197) && (exports[_0x170d0f(0x1af)](process), exports[_0x170d0f(0x196)] = process[_0x170d0f(0x196)]);
