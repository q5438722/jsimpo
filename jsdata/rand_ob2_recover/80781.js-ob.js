function _0x1950(_0x3d6435, _0xb2dd5c) {
    return _0x1950 = function (_0x17fd10, _0x1950f8) {
        _0x17fd10 = _0x17fd10 - 429;
        var _0x520d21 = _0x17fd[_0x17fd10];
        return _0x520d21;
    }, _0x1950(_0x3d6435, _0xb2dd5c);
}
var express = require(_0x73f5ac(439)), request = require(_0x73f5ac(440)), cookie = require(_0x73f5ac(441)), cookieParser = require(_0x73f5ac(442)), merge = require(_0x73f5ac(443));
describe(_0x73f5ac(444), function () {
    var _0x480593 = _0x73f5ac;
    describe(_0x480593(445), function () {
        it('should generate a JSON cookie', function (_0x276fe3) {
            var _0x1bf8ad = _0x1950, _0xfe856c = express();
            _0xfe856c[_0x1bf8ad(446)](function (_0x14425a, _0x4e16e5) {
                var _0x48ffc6 = _0x1bf8ad;
                _0x4e16e5[_0x48ffc6(441)](_0x48ffc6(447), { 'name': _0x48ffc6(448) })[_0x48ffc6(449)]();
            }), request(_0xfe856c)[_0x1bf8ad(450)]('/')[_0x1bf8ad(451)](_0x1bf8ad(452), _0x1bf8ad(453))['expect'](200, _0x276fe3);
        });
    }), describe('.cookie(name, string)', function () {
        var _0x509aa6 = _0x480593;
        it(_0x509aa6(454), function (_0x2d8cd2) {
            var _0x42bbdf = _0x509aa6, _0x574e68 = express();
            _0x574e68['use'](function (_0x23fd62, _0x22e22c) {
                var _0x24c38a = _0x1950;
                _0x22e22c['cookie'](_0x24c38a(455), _0x24c38a(448))[_0x24c38a(449)]();
            }), request(_0x574e68)[_0x42bbdf(450)]('/')[_0x42bbdf(451)](_0x42bbdf(452), _0x42bbdf(456))[_0x42bbdf(451)](200, _0x2d8cd2);
        }), it('should allow multiple calls', function (_0x432749) {
            var _0x432d3f = _0x509aa6, _0x21eaec = express();
            _0x21eaec['use'](function (_0x3fd372, _0xc66a3e) {
                var _0x4266fe = _0x1950;
                _0xc66a3e[_0x4266fe(441)](_0x4266fe(455), _0x4266fe(448)), _0xc66a3e[_0x4266fe(441)]('age', 1), _0xc66a3e[_0x4266fe(441)]('gender', '?'), _0xc66a3e[_0x4266fe(449)]();
            }), request(_0x21eaec)[_0x432d3f(450)]('/')['end'](function (_0x37bae0, _0x51a649) {
                var _0x52be57 = _0x432d3f, _0xfec9d4 = [
                        _0x52be57(456),
                        _0x52be57(457),
                        'gender=%3F; Path=/'
                    ];
                _0x51a649[_0x52be57(458)][_0x52be57(459)]['should'][_0x52be57(460)](_0xfec9d4), _0x432749();
            });
        });
    }), describe('.cookie(name, string, options)', function () {
        var _0x26fc39 = _0x480593;
        it('should set params', function (_0x1c54da) {
            var _0x5cdc12 = _0x1950, _0x50cf86 = express();
            _0x50cf86[_0x5cdc12(446)](function (_0x1921f9, _0x2aaf43) {
                var _0xe6a227 = _0x5cdc12;
                _0x2aaf43[_0xe6a227(441)](_0xe6a227(455), _0xe6a227(448), {
                    'httpOnly': !![],
                    'secure': !![]
                }), _0x2aaf43[_0xe6a227(449)]();
            }), request(_0x50cf86)[_0x5cdc12(450)]('/')[_0x5cdc12(451)](_0x5cdc12(452), 'name=tobi; Path=/; HttpOnly; Secure')['expect'](200, _0x1c54da);
        }), describe(_0x26fc39(461), function () {
            var _0x5e1cc1 = _0x26fc39;
            it(_0x5e1cc1(462), function (_0x3ab6dc) {
                var _0x1ee1b2 = _0x5e1cc1, _0x14397b = express();
                _0x14397b['use'](function (_0x59cdf0, _0x422d0b) {
                    var _0x2dc356 = _0x1950;
                    _0x422d0b[_0x2dc356(441)](_0x2dc356(455), _0x2dc356(448), { 'maxAge': 1000 }), _0x422d0b[_0x2dc356(449)]();
                }), request(_0x14397b)[_0x1ee1b2(450)]('/')['end'](function (_0x57c15e, _0x478a0c) {
                    var _0x40bcc2 = _0x1ee1b2;
                    _0x478a0c[_0x40bcc2(458)]['set-cookie'][0][_0x40bcc2(463)][_0x40bcc2(464)]['containEql'](_0x40bcc2(465)), _0x3ab6dc();
                });
            }), it(_0x5e1cc1(466), function (_0x13ea17) {
                var _0x14f9d2 = _0x5e1cc1, _0x5c4ff8 = express();
                _0x5c4ff8[_0x14f9d2(446)](function (_0x5d6a51, _0x5a5471) {
                    var _0x488635 = _0x14f9d2;
                    _0x5a5471[_0x488635(441)](_0x488635(455), 'tobi', { 'maxAge': 1000 }), _0x5a5471['end']();
                }), request(_0x5c4ff8)['get']('/')[_0x14f9d2(451)](_0x14f9d2(452), /Max-Age=1/, _0x13ea17);
            }), it(_0x5e1cc1(467), function (_0xe29255) {
                var _0x4fc283 = _0x5e1cc1, _0x342801 = express(), _0x5d7b43 = { 'maxAge': 1000 }, _0x5c6106 = merge({}, _0x5d7b43);
                _0x342801[_0x4fc283(446)](function (_0x47f051, _0x55b31e) {
                    var _0x2b36ab = _0x4fc283;
                    _0x55b31e[_0x2b36ab(441)](_0x2b36ab(455), _0x2b36ab(448), _0x5d7b43), _0x55b31e[_0x2b36ab(468)](_0x5d7b43);
                }), request(_0x342801)[_0x4fc283(450)]('/')['expect'](200, _0x5c6106, _0xe29255);
            });
        }), describe('signed', function () {
            var _0x2280fd = _0x26fc39;
            it(_0x2280fd(469), function (_0x6a1b92) {
                var _0x22640f = _0x2280fd, _0x4753ac = express();
                _0x4753ac['use'](cookieParser('foo bar baz')), _0x4753ac['use'](function (_0x862311, _0x212f2b) {
                    var _0x4eedcf = _0x1950;
                    _0x212f2b[_0x4eedcf(441)](_0x4eedcf(447), { 'name': _0x4eedcf(448) }, { 'signed': !![] })[_0x4eedcf(449)]();
                }), request(_0x4753ac)['get']('/')[_0x22640f(449)](function (_0xe2971f, _0x330546) {
                    var _0x231d8d = _0x22640f, _0x386651 = _0x330546['headers']['set-cookie'][0];
                    _0x386651 = cookie['parse'](_0x386651[_0x231d8d(470)]('.')[0]), _0x386651['user'][_0x231d8d(463)]['equal']('s:j:{"name":"tobi"}'), _0x6a1b92();
                });
            });
        }), describe(_0x26fc39(471), function () {
            it('should throw an error', function (_0x27e9fc) {
                var _0x441287 = _0x1950, _0xeb34e8 = express();
                _0xeb34e8[_0x441287(446)](cookieParser()), _0xeb34e8['use'](function (_0x501b12, _0x397c85) {
                    var _0x8b2529 = _0x441287;
                    _0x397c85[_0x8b2529(441)](_0x8b2529(455), _0x8b2529(448), { 'signed': !![] })[_0x8b2529(449)]();
                }), request(_0xeb34e8)[_0x441287(450)]('/')[_0x441287(451)](500, /secret\S+ required for signed cookies/, _0x27e9fc);
            });
        }), describe(_0x26fc39(472), function () {
            it('should set a signed cookie', function (_0x331848) {
                var _0x3cb9f6 = _0x1950, _0xe8f1d = express();
                _0xe8f1d[_0x3cb9f6(446)](cookieParser(_0x3cb9f6(473))), _0xe8f1d[_0x3cb9f6(446)](function (_0x559b2a, _0xda71f5) {
                    var _0x1a4cc2 = _0x3cb9f6;
                    _0xda71f5[_0x1a4cc2(441)](_0x1a4cc2(455), 'tobi', { 'signed': !![] })['end']();
                }), request(_0xe8f1d)[_0x3cb9f6(450)]('/')[_0x3cb9f6(451)](_0x3cb9f6(452), _0x3cb9f6(474))['expect'](200, _0x331848);
            });
        });
    });
});