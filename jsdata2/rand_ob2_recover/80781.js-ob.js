var express = require('../'), request = require(_0x2ed2ec(366)), cookie = require('cookie'), cookieParser = require(_0x2ed2ec(367)), merge = require(_0x2ed2ec(368));
describe('res', function () {
    var _0x1d7d7c = _0x2ed2ec;
    describe(_0x1d7d7c(369), function () {
        var _0x53a008 = _0x1d7d7c;
        it(_0x53a008(370), function (_0x2ba8b4) {
            var _0x5f1601 = _0x53a008, _0x2adf50 = express();
            _0x2adf50['use'](function (_0x4b7526, _0x4cdd35) {
                var _0x2874ac = _0x2525;
                _0x4cdd35[_0x2874ac(371)](_0x2874ac(372), { 'name': _0x2874ac(373) })['end']();
            }), request(_0x2adf50)[_0x5f1601(374)]('/')[_0x5f1601(375)]('Set-Cookie', _0x5f1601(376))[_0x5f1601(375)](200, _0x2ba8b4);
        });
    }), describe(_0x1d7d7c(377), function () {
        var _0x3f8ef8 = _0x1d7d7c;
        it(_0x3f8ef8(378), function (_0x3009de) {
            var _0x42cd51 = _0x3f8ef8, _0x53e711 = express();
            _0x53e711[_0x42cd51(379)](function (_0x446bb6, _0x14ca93) {
                var _0x51f2fc = _0x42cd51;
                _0x14ca93[_0x51f2fc(371)](_0x51f2fc(380), 'tobi')[_0x51f2fc(381)]();
            }), request(_0x53e711)[_0x42cd51(374)]('/')['expect'](_0x42cd51(382), 'name=tobi; Path=/')['expect'](200, _0x3009de);
        }), it(_0x3f8ef8(383), function (_0x3a058e) {
            var _0x2979d9 = _0x3f8ef8, _0x37ef7e = express();
            _0x37ef7e[_0x2979d9(379)](function (_0x122a19, _0x3687e3) {
                var _0x94d7b = _0x2979d9;
                _0x3687e3[_0x94d7b(371)](_0x94d7b(380), _0x94d7b(373)), _0x3687e3[_0x94d7b(371)](_0x94d7b(384), 1), _0x3687e3[_0x94d7b(371)](_0x94d7b(385), '?'), _0x3687e3['end']();
            }), request(_0x37ef7e)[_0x2979d9(374)]('/')[_0x2979d9(381)](function (_0x3f655a, _0x3b6a11) {
                var _0x5ca493 = _0x2979d9, _0x46725e = [
                        _0x5ca493(386),
                        _0x5ca493(387),
                        _0x5ca493(388)
                    ];
                _0x3b6a11[_0x5ca493(389)][_0x5ca493(390)][_0x5ca493(391)][_0x5ca493(392)](_0x46725e), _0x3a058e();
            });
        });
    }), describe(_0x1d7d7c(393), function () {
        var _0x2466a7 = _0x1d7d7c;
        it(_0x2466a7(394), function (_0x45666a) {
            var _0x44cf86 = _0x2466a7, _0x475cc5 = express();
            _0x475cc5[_0x44cf86(379)](function (_0x4c56a5, _0xf1d861) {
                var _0x330705 = _0x44cf86;
                _0xf1d861[_0x330705(371)](_0x330705(380), 'tobi', {
                    'httpOnly': !![],
                    'secure': !![]
                }), _0xf1d861[_0x330705(381)]();
            }), request(_0x475cc5)[_0x44cf86(374)]('/')[_0x44cf86(375)]('Set-Cookie', 'name=tobi; Path=/; HttpOnly; Secure')[_0x44cf86(375)](200, _0x45666a);
        }), describe(_0x2466a7(395), function () {
            var _0x7ff09f = _0x2466a7;
            it(_0x7ff09f(396), function (_0x585224) {
                var _0xa5394a = _0x7ff09f, _0x38ff7a = express();
                _0x38ff7a[_0xa5394a(379)](function (_0x3ede54, _0x1d9311) {
                    var _0x5eb857 = _0xa5394a;
                    _0x1d9311[_0x5eb857(371)](_0x5eb857(380), 'tobi', { 'maxAge': 1000 }), _0x1d9311[_0x5eb857(381)]();
                }), request(_0x38ff7a)[_0xa5394a(374)]('/')[_0xa5394a(381)](function (_0x4128a8, _0x1adfa5) {
                    var _0xf9dd7f = _0xa5394a;
                    _0x1adfa5[_0xf9dd7f(389)][_0xf9dd7f(390)][0][_0xf9dd7f(391)][_0xf9dd7f(397)]['containEql']('Thu, 01 Jan 1970 00:00:01 GMT'), _0x585224();
                });
            }), it(_0x7ff09f(398), function (_0x318fc7) {
                var _0xeeeb10 = _0x7ff09f, _0xd294a2 = express();
                _0xd294a2[_0xeeeb10(379)](function (_0x16d7f3, _0x5d3913) {
                    var _0x342984 = _0xeeeb10;
                    _0x5d3913[_0x342984(371)](_0x342984(380), 'tobi', { 'maxAge': 1000 }), _0x5d3913[_0x342984(381)]();
                }), request(_0xd294a2)[_0xeeeb10(374)]('/')[_0xeeeb10(375)](_0xeeeb10(382), /Max-Age=1/, _0x318fc7);
            }), it(_0x7ff09f(399), function (_0x113a77) {
                var _0x4dfc95 = _0x7ff09f, _0x1c9540 = express(), _0x2c738e = { 'maxAge': 1000 }, _0x12517e = merge({}, _0x2c738e);
                _0x1c9540['use'](function (_0x5f55a1, _0x489061) {
                    var _0x5c9443 = _0x2525;
                    _0x489061[_0x5c9443(371)](_0x5c9443(380), _0x5c9443(373), _0x2c738e), _0x489061[_0x5c9443(400)](_0x2c738e);
                }), request(_0x1c9540)[_0x4dfc95(374)]('/')[_0x4dfc95(375)](200, _0x12517e, _0x113a77);
            });
        }), describe('signed', function () {
            it('should generate a signed JSON cookie', function (_0x3f96b0) {
                var _0x4e3efd = _0x2525, _0x451302 = express();
                _0x451302[_0x4e3efd(379)](cookieParser(_0x4e3efd(401))), _0x451302[_0x4e3efd(379)](function (_0x27f721, _0x149205) {
                    var _0x2c9cbb = _0x4e3efd;
                    _0x149205[_0x2c9cbb(371)](_0x2c9cbb(372), { 'name': _0x2c9cbb(373) }, { 'signed': !![] })[_0x2c9cbb(381)]();
                }), request(_0x451302)[_0x4e3efd(374)]('/')[_0x4e3efd(381)](function (_0x4096a1, _0x3cc20a) {
                    var _0x2768d3 = _0x4e3efd, _0x429b89 = _0x3cc20a[_0x2768d3(389)][_0x2768d3(390)][0];
                    _0x429b89 = cookie[_0x2768d3(402)](_0x429b89[_0x2768d3(403)]('.')[0]), _0x429b89['user'][_0x2768d3(391)][_0x2768d3(404)](_0x2768d3(405)), _0x3f96b0();
                });
            });
        }), describe(_0x2466a7(406), function () {
            it('should throw an error', function (_0x4c72e8) {
                var _0x424d11 = _0x2525, _0x3358fa = express();
                _0x3358fa[_0x424d11(379)](cookieParser()), _0x3358fa[_0x424d11(379)](function (_0x55fc9f, _0x588229) {
                    var _0x5cc47b = _0x424d11;
                    _0x588229[_0x5cc47b(371)](_0x5cc47b(380), _0x5cc47b(373), { 'signed': !![] })[_0x5cc47b(381)]();
                }), request(_0x3358fa)[_0x424d11(374)]('/')[_0x424d11(375)](500, /secret\S+ required for signed cookies/, _0x4c72e8);
            });
        }), describe(_0x2466a7(407), function () {
            var _0x2ab5e5 = _0x2466a7;
            it(_0x2ab5e5(408), function (_0x488e29) {
                var _0x59db8b = _0x2ab5e5, _0x3a30b7 = express();
                _0x3a30b7[_0x59db8b(379)](cookieParser(_0x59db8b(401))), _0x3a30b7[_0x59db8b(379)](function (_0x309380, _0x47bad2) {
                    var _0x33d221 = _0x59db8b;
                    _0x47bad2[_0x33d221(371)](_0x33d221(380), 'tobi', { 'signed': !![] })[_0x33d221(381)]();
                }), request(_0x3a30b7)['get']('/')[_0x59db8b(375)](_0x59db8b(382), _0x59db8b(409))[_0x59db8b(375)](200, _0x488e29);
            });
        });
    });
});