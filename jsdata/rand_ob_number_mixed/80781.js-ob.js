var express = require('../'), request = require('supertest'), cookie = require('cookie'), cookieParser = require('cookie-parser'), merge = require('utils-merge');
describe('res', function () {
    describe('.cookie(name,\x20object)', function () {
        it('should\x20generate\x20a\x20JSON\x20cookie', function (_0x5b243c) {
            var _0x75726b = express();
            _0x75726b['use'](function (_0x50375f, _0x1b02c5) {
                _0x1b02c5['cookie']('user', { 'name': 'tobi' })['end']();
            }), request(_0x75726b)['get']('/')['expect']('Set-Cookie', 'user=j%3A%7B%22name%22%3A%22tobi%22%7D;\x20Path=/')['expect'](0x1 * 0x61b + -0xa * -0x1a0 + -0x1593 * 0x1, _0x5b243c);
        });
    }), describe('.cookie(name,\x20string)', function () {
        it('should\x20set\x20a\x20cookie', function (_0x29cc59) {
            var _0xc97dc7 = express();
            _0xc97dc7['use'](function (_0x514626, _0x97ee72) {
                _0x97ee72['cookie']('name', 'tobi')['end']();
            }), request(_0xc97dc7)['get']('/')['expect']('Set-Cookie', 'name=tobi;\x20Path=/')['expect'](0x1f * 0x5b + 0x9c + 0x1 * -0xad9, _0x29cc59);
        }), it('should\x20allow\x20multiple\x20calls', function (_0x1136bc) {
            var _0x48f357 = express();
            _0x48f357['use'](function (_0x58a00a, _0x40d7da) {
                _0x40d7da['cookie']('name', 'tobi'), _0x40d7da['cookie']('age', -0x1187 + 0x7cd * -0x5 + 0x3889), _0x40d7da['cookie']('gender', '?'), _0x40d7da['end']();
            }), request(_0x48f357)['get']('/')['end'](function (_0x354160, _0x27674c) {
                var _0x11451b = [
                    'name=tobi;\x20Path=/',
                    'age=1;\x20Path=/',
                    'gender=%3F;\x20Path=/'
                ];
                _0x27674c['headers']['set-cookie']['should']['eql'](_0x11451b), _0x1136bc();
            });
        });
    }), describe('.cookie(name,\x20string,\x20options)', function () {
        it('should\x20set\x20params', function (_0xa4d462) {
            var _0x578eb5 = express();
            _0x578eb5['use'](function (_0x4cd5c0, _0x42485f) {
                _0x42485f['cookie']('name', 'tobi', {
                    'httpOnly': !![],
                    'secure': !![]
                }), _0x42485f['end']();
            }), request(_0x578eb5)['get']('/')['expect']('Set-Cookie', 'name=tobi;\x20Path=/;\x20HttpOnly;\x20Secure')['expect'](0x4f8 + -0x1 * 0x1b69 + 0x29 * 0x91, _0xa4d462);
        }), describe('maxAge', function () {
            it('should\x20set\x20relative\x20expires', function (_0x5826dc) {
                var _0x1ee661 = express();
                _0x1ee661['use'](function (_0x97e8e9, _0x5309e3) {
                    _0x5309e3['cookie']('name', 'tobi', { 'maxAge': 0x3e8 }), _0x5309e3['end']();
                }), request(_0x1ee661)['get']('/')['end'](function (_0x17ef24, _0x1eb585) {
                    _0x1eb585['headers']['set-cookie'][0x2231 + -0x25d9 * -0x1 + -0x2405 * 0x2]['should']['not']['containEql']('Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT'), _0x5826dc();
                });
            }), it('should\x20set\x20max-age', function (_0x1c3015) {
                var _0x9b69b6 = express();
                _0x9b69b6['use'](function (_0x38c812, _0x300e15) {
                    _0x300e15['cookie']('name', 'tobi', { 'maxAge': 0x3e8 }), _0x300e15['end']();
                }), request(_0x9b69b6)['get']('/')['expect']('Set-Cookie', /Max-Age=1/, _0x1c3015);
            }), it('should\x20not\x20mutate\x20the\x20options\x20object', function (_0x1a38a3) {
                var _0x415585 = express(), _0x369e7e = { 'maxAge': 0x3e8 }, _0x542b3a = merge({}, _0x369e7e);
                _0x415585['use'](function (_0x373e08, _0x289970) {
                    _0x289970['cookie']('name', 'tobi', _0x369e7e), _0x289970['json'](_0x369e7e);
                }), request(_0x415585)['get']('/')['expect'](-0x39a + -0x2048 + 0x24aa, _0x542b3a, _0x1a38a3);
            });
        }), describe('signed', function () {
            it('should\x20generate\x20a\x20signed\x20JSON\x20cookie', function (_0xe4764) {
                var _0xd9fe5 = express();
                _0xd9fe5['use'](cookieParser('foo\x20bar\x20baz')), _0xd9fe5['use'](function (_0x1e557b, _0x9c9ad) {
                    _0x9c9ad['cookie']('user', { 'name': 'tobi' }, { 'signed': !![] })['end']();
                }), request(_0xd9fe5)['get']('/')['end'](function (_0x33a0a9, _0x7223ad) {
                    var _0x2d5fbc = _0x7223ad['headers']['set-cookie'][0x97b + -0x256d + 0x1bf2];
                    _0x2d5fbc = cookie['parse'](_0x2d5fbc['split']('.')[-0x80b + -0x13fb + 0x1c06]), _0x2d5fbc['user']['should']['equal']('s:j:{\x22name\x22:\x22tobi\x22}'), _0xe4764();
                });
            });
        }), describe('signed\x20without\x20secret', function () {
            it('should\x20throw\x20an\x20error', function (_0x39786c) {
                var _0x465985 = express();
                _0x465985['use'](cookieParser()), _0x465985['use'](function (_0x36afbb, _0x79e87) {
                    _0x79e87['cookie']('name', 'tobi', { 'signed': !![] })['end']();
                }), request(_0x465985)['get']('/')['expect'](-0x1aa3 * 0x1 + 0xdff + -0x4 * -0x3a6, /secret\S+ required for signed cookies/, _0x39786c);
            });
        }), describe('.signedCookie(name,\x20string)', function () {
            it('should\x20set\x20a\x20signed\x20cookie', function (_0x120dfb) {
                var _0x192d5f = express();
                _0x192d5f['use'](cookieParser('foo\x20bar\x20baz')), _0x192d5f['use'](function (_0x457540, _0x22db57) {
                    _0x22db57['cookie']('name', 'tobi', { 'signed': !![] })['end']();
                }), request(_0x192d5f)['get']('/')['expect']('Set-Cookie', 'name=s%3Atobi.xJjV2iZ6EI7C8E5kzwbfA9PVLl1ZR07UTnuTgQQ4EnQ;\x20Path=/')['expect'](-0x69e + 0x4 * 0xe + 0x72e, _0x120dfb);
            });
        });
    });
});
