var _0x17fd = [
    'cookie-parser',
    'utils-merge',
    'res',
    '.cookie(name,\x20object)',
    'use',
    'user',
    'tobi',
    'end',
    'get',
    'expect',
    'Set-Cookie',
    'user=j%3A%7B%22name%22%3A%22tobi%22%7D;\x20Path=/',
    'should\x20set\x20a\x20cookie',
    'name',
    'name=tobi;\x20Path=/',
    'age=1;\x20Path=/',
    'headers',
    'set-cookie',
    'eql',
    'maxAge',
    'should\x20set\x20relative\x20expires',
    'should',
    'not',
    'Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT',
    'should\x20set\x20max-age',
    'should\x20not\x20mutate\x20the\x20options\x20object',
    'json',
    'should\x20generate\x20a\x20signed\x20JSON\x20cookie',
    'split',
    'signed\x20without\x20secret',
    '.signedCookie(name,\x20string)',
    'foo\x20bar\x20baz',
    'name=s%3Atobi.xJjV2iZ6EI7C8E5kzwbfA9PVLl1ZR07UTnuTgQQ4EnQ;\x20Path=/',
    '307KctabO',
    '925AdyZah',
    '225949SMKpnd',
    '137BHrPou',
    '1808lNFFCY',
    '822WIJPhC',
    '46wTadvZ',
    '287681XgoocO',
    '15200PvdPPb',
    '191256xTWwsF',
    '../',
    'supertest',
    'cookie'
];
var _0x73f5ac = _0x1950;
(function (_0x5736b8, _0x33c6f6) {
    var _0xd1648a = _0x1950;
    while (!![]) {
        try {
            var _0x3555fa = parseInt(_0xd1648a(0x1ad)) * parseInt(_0xd1648a(0x1ae)) + -parseInt(_0xd1648a(0x1af)) + -parseInt(_0xd1648a(0x1b0)) * -parseInt(_0xd1648a(0x1b1)) + parseInt(_0xd1648a(0x1b2)) * -parseInt(_0xd1648a(0x1b3)) + -parseInt(_0xd1648a(0x1b4)) + -parseInt(_0xd1648a(0x1b5)) + parseInt(_0xd1648a(0x1b6));
            if (_0x3555fa === _0x33c6f6)
                break;
            else
                _0x5736b8['push'](_0x5736b8['shift']());
        } catch (_0x136248) {
            _0x5736b8['push'](_0x5736b8['shift']());
        }
    }
}(_0x17fd, 0x2627d));
function _0x1950(_0x3d6435, _0xb2dd5c) {
    return _0x1950 = function (_0x17fd10, _0x1950f8) {
        _0x17fd10 = _0x17fd10 - 0x1ad;
        var _0x520d21 = _0x17fd[_0x17fd10];
        return _0x520d21;
    }, _0x1950(_0x3d6435, _0xb2dd5c);
}
var express = require(_0x73f5ac(0x1b7)), request = require(_0x73f5ac(0x1b8)), cookie = require(_0x73f5ac(0x1b9)), cookieParser = require(_0x73f5ac(0x1ba)), merge = require(_0x73f5ac(0x1bb));
describe(_0x73f5ac(0x1bc), function () {
    var _0x480593 = _0x73f5ac;
    describe(_0x480593(0x1bd), function () {
        it('should\x20generate\x20a\x20JSON\x20cookie', function (_0x276fe3) {
            var _0x1bf8ad = _0x1950, _0xfe856c = express();
            _0xfe856c[_0x1bf8ad(0x1be)](function (_0x14425a, _0x4e16e5) {
                var _0x48ffc6 = _0x1bf8ad;
                _0x4e16e5[_0x48ffc6(0x1b9)](_0x48ffc6(0x1bf), { 'name': _0x48ffc6(0x1c0) })[_0x48ffc6(0x1c1)]();
            }), request(_0xfe856c)[_0x1bf8ad(0x1c2)]('/')[_0x1bf8ad(0x1c3)](_0x1bf8ad(0x1c4), _0x1bf8ad(0x1c5))['expect'](0xc8, _0x276fe3);
        });
    }), describe('.cookie(name,\x20string)', function () {
        var _0x509aa6 = _0x480593;
        it(_0x509aa6(0x1c6), function (_0x2d8cd2) {
            var _0x42bbdf = _0x509aa6, _0x574e68 = express();
            _0x574e68['use'](function (_0x23fd62, _0x22e22c) {
                var _0x24c38a = _0x1950;
                _0x22e22c['cookie'](_0x24c38a(0x1c7), _0x24c38a(0x1c0))[_0x24c38a(0x1c1)]();
            }), request(_0x574e68)[_0x42bbdf(0x1c2)]('/')[_0x42bbdf(0x1c3)](_0x42bbdf(0x1c4), _0x42bbdf(0x1c8))[_0x42bbdf(0x1c3)](0xc8, _0x2d8cd2);
        }), it('should\x20allow\x20multiple\x20calls', function (_0x432749) {
            var _0x432d3f = _0x509aa6, _0x21eaec = express();
            _0x21eaec['use'](function (_0x3fd372, _0xc66a3e) {
                var _0x4266fe = _0x1950;
                _0xc66a3e[_0x4266fe(0x1b9)](_0x4266fe(0x1c7), _0x4266fe(0x1c0)), _0xc66a3e[_0x4266fe(0x1b9)]('age', 0x1), _0xc66a3e[_0x4266fe(0x1b9)]('gender', '?'), _0xc66a3e[_0x4266fe(0x1c1)]();
            }), request(_0x21eaec)[_0x432d3f(0x1c2)]('/')['end'](function (_0x37bae0, _0x51a649) {
                var _0x52be57 = _0x432d3f, _0xfec9d4 = [
                        _0x52be57(0x1c8),
                        _0x52be57(0x1c9),
                        'gender=%3F;\x20Path=/'
                    ];
                _0x51a649[_0x52be57(0x1ca)][_0x52be57(0x1cb)]['should'][_0x52be57(0x1cc)](_0xfec9d4), _0x432749();
            });
        });
    }), describe('.cookie(name,\x20string,\x20options)', function () {
        var _0x26fc39 = _0x480593;
        it('should\x20set\x20params', function (_0x1c54da) {
            var _0x5cdc12 = _0x1950, _0x50cf86 = express();
            _0x50cf86[_0x5cdc12(0x1be)](function (_0x1921f9, _0x2aaf43) {
                var _0xe6a227 = _0x5cdc12;
                _0x2aaf43[_0xe6a227(0x1b9)](_0xe6a227(0x1c7), _0xe6a227(0x1c0), {
                    'httpOnly': !![],
                    'secure': !![]
                }), _0x2aaf43[_0xe6a227(0x1c1)]();
            }), request(_0x50cf86)[_0x5cdc12(0x1c2)]('/')[_0x5cdc12(0x1c3)](_0x5cdc12(0x1c4), 'name=tobi;\x20Path=/;\x20HttpOnly;\x20Secure')['expect'](0xc8, _0x1c54da);
        }), describe(_0x26fc39(0x1cd), function () {
            var _0x5e1cc1 = _0x26fc39;
            it(_0x5e1cc1(0x1ce), function (_0x3ab6dc) {
                var _0x1ee1b2 = _0x5e1cc1, _0x14397b = express();
                _0x14397b['use'](function (_0x59cdf0, _0x422d0b) {
                    var _0x2dc356 = _0x1950;
                    _0x422d0b[_0x2dc356(0x1b9)](_0x2dc356(0x1c7), _0x2dc356(0x1c0), { 'maxAge': 0x3e8 }), _0x422d0b[_0x2dc356(0x1c1)]();
                }), request(_0x14397b)[_0x1ee1b2(0x1c2)]('/')['end'](function (_0x57c15e, _0x478a0c) {
                    var _0x40bcc2 = _0x1ee1b2;
                    _0x478a0c[_0x40bcc2(0x1ca)]['set-cookie'][0x0][_0x40bcc2(0x1cf)][_0x40bcc2(0x1d0)]['containEql'](_0x40bcc2(0x1d1)), _0x3ab6dc();
                });
            }), it(_0x5e1cc1(0x1d2), function (_0x13ea17) {
                var _0x14f9d2 = _0x5e1cc1, _0x5c4ff8 = express();
                _0x5c4ff8[_0x14f9d2(0x1be)](function (_0x5d6a51, _0x5a5471) {
                    var _0x488635 = _0x14f9d2;
                    _0x5a5471[_0x488635(0x1b9)](_0x488635(0x1c7), 'tobi', { 'maxAge': 0x3e8 }), _0x5a5471['end']();
                }), request(_0x5c4ff8)['get']('/')[_0x14f9d2(0x1c3)](_0x14f9d2(0x1c4), /Max-Age=1/, _0x13ea17);
            }), it(_0x5e1cc1(0x1d3), function (_0xe29255) {
                var _0x4fc283 = _0x5e1cc1, _0x342801 = express(), _0x5d7b43 = { 'maxAge': 0x3e8 }, _0x5c6106 = merge({}, _0x5d7b43);
                _0x342801[_0x4fc283(0x1be)](function (_0x47f051, _0x55b31e) {
                    var _0x2b36ab = _0x4fc283;
                    _0x55b31e[_0x2b36ab(0x1b9)](_0x2b36ab(0x1c7), _0x2b36ab(0x1c0), _0x5d7b43), _0x55b31e[_0x2b36ab(0x1d4)](_0x5d7b43);
                }), request(_0x342801)[_0x4fc283(0x1c2)]('/')['expect'](0xc8, _0x5c6106, _0xe29255);
            });
        }), describe('signed', function () {
            var _0x2280fd = _0x26fc39;
            it(_0x2280fd(0x1d5), function (_0x6a1b92) {
                var _0x22640f = _0x2280fd, _0x4753ac = express();
                _0x4753ac['use'](cookieParser('foo\x20bar\x20baz')), _0x4753ac['use'](function (_0x862311, _0x212f2b) {
                    var _0x4eedcf = _0x1950;
                    _0x212f2b[_0x4eedcf(0x1b9)](_0x4eedcf(0x1bf), { 'name': _0x4eedcf(0x1c0) }, { 'signed': !![] })[_0x4eedcf(0x1c1)]();
                }), request(_0x4753ac)['get']('/')[_0x22640f(0x1c1)](function (_0xe2971f, _0x330546) {
                    var _0x231d8d = _0x22640f, _0x386651 = _0x330546['headers']['set-cookie'][0x0];
                    _0x386651 = cookie['parse'](_0x386651[_0x231d8d(0x1d6)]('.')[0x0]), _0x386651['user'][_0x231d8d(0x1cf)]['equal']('s:j:{\x22name\x22:\x22tobi\x22}'), _0x6a1b92();
                });
            });
        }), describe(_0x26fc39(0x1d7), function () {
            it('should\x20throw\x20an\x20error', function (_0x27e9fc) {
                var _0x441287 = _0x1950, _0xeb34e8 = express();
                _0xeb34e8[_0x441287(0x1be)](cookieParser()), _0xeb34e8['use'](function (_0x501b12, _0x397c85) {
                    var _0x8b2529 = _0x441287;
                    _0x397c85[_0x8b2529(0x1b9)](_0x8b2529(0x1c7), _0x8b2529(0x1c0), { 'signed': !![] })[_0x8b2529(0x1c1)]();
                }), request(_0xeb34e8)[_0x441287(0x1c2)]('/')[_0x441287(0x1c3)](0x1f4, /secret\S+ required for signed cookies/, _0x27e9fc);
            });
        }), describe(_0x26fc39(0x1d8), function () {
            it('should\x20set\x20a\x20signed\x20cookie', function (_0x331848) {
                var _0x3cb9f6 = _0x1950, _0xe8f1d = express();
                _0xe8f1d[_0x3cb9f6(0x1be)](cookieParser(_0x3cb9f6(0x1d9))), _0xe8f1d[_0x3cb9f6(0x1be)](function (_0x559b2a, _0xda71f5) {
                    var _0x1a4cc2 = _0x3cb9f6;
                    _0xda71f5[_0x1a4cc2(0x1b9)](_0x1a4cc2(0x1c7), 'tobi', { 'signed': !![] })['end']();
                }), request(_0xe8f1d)[_0x3cb9f6(0x1c2)]('/')[_0x3cb9f6(0x1c3)](_0x3cb9f6(0x1c4), _0x3cb9f6(0x1da))['expect'](0xc8, _0x331848);
            });
        });
    });
});
