var _0x1ea9 = [
    '23581YNCBgt',
    'supertest',
    'cookie-parser',
    'utils-merge',
    '.cookie(name,\x20object)',
    'should\x20generate\x20a\x20JSON\x20cookie',
    'cookie',
    'user',
    'tobi',
    'get',
    'expect',
    'user=j%3A%7B%22name%22%3A%22tobi%22%7D;\x20Path=/',
    '.cookie(name,\x20string)',
    'should\x20set\x20a\x20cookie',
    'use',
    'name',
    'end',
    'Set-Cookie',
    'should\x20allow\x20multiple\x20calls',
    'age',
    'gender',
    'name=tobi;\x20Path=/',
    'age=1;\x20Path=/',
    'gender=%3F;\x20Path=/',
    'headers',
    'set-cookie',
    'should',
    'eql',
    '.cookie(name,\x20string,\x20options)',
    'should\x20set\x20params',
    'maxAge',
    'should\x20set\x20relative\x20expires',
    'not',
    'should\x20set\x20max-age',
    'should\x20not\x20mutate\x20the\x20options\x20object',
    'json',
    'foo\x20bar\x20baz',
    'parse',
    'split',
    'equal',
    's:j:{\x22name\x22:\x22tobi\x22}',
    'signed\x20without\x20secret',
    '.signedCookie(name,\x20string)',
    'should\x20set\x20a\x20signed\x20cookie',
    'name=s%3Atobi.xJjV2iZ6EI7C8E5kzwbfA9PVLl1ZR07UTnuTgQQ4EnQ;\x20Path=/',
    '15173ptNYnI',
    '5mfJdyG',
    '46XfFTGs',
    '4391ErBqgc',
    '500676vLBoNR',
    '286834jMfcgO',
    '58642EaJlfu',
    '189263OPBbMl',
    '67UpsrYD'
];
function _0x2525(_0x7e89d6, _0x3576c6) {
    return _0x2525 = function (_0x1ea948, _0x2525fe) {
        _0x1ea948 = _0x1ea948 - 0x164;
        var _0xec1714 = _0x1ea9[_0x1ea948];
        return _0xec1714;
    }, _0x2525(_0x7e89d6, _0x3576c6);
}
var _0x2ed2ec = _0x2525;
(function (_0x2d6b8d, _0x2773e0) {
    var _0x5a43e9 = _0x2525;
    while (!![]) {
        try {
            var _0x14c56d = parseInt(_0x5a43e9(0x164)) * -parseInt(_0x5a43e9(0x165)) + parseInt(_0x5a43e9(0x166)) * -parseInt(_0x5a43e9(0x167)) + -parseInt(_0x5a43e9(0x168)) + -parseInt(_0x5a43e9(0x169)) + -parseInt(_0x5a43e9(0x16a)) + -parseInt(_0x5a43e9(0x16b)) + -parseInt(_0x5a43e9(0x16c)) * -parseInt(_0x5a43e9(0x16d));
            if (_0x14c56d === _0x2773e0)
                break;
            else
                _0x2d6b8d['push'](_0x2d6b8d['shift']());
        } catch (_0x34d4cf) {
            _0x2d6b8d['push'](_0x2d6b8d['shift']());
        }
    }
}(_0x1ea9, 0x411a5));
var express = require('../'), request = require(_0x2ed2ec(0x16e)), cookie = require('cookie'), cookieParser = require(_0x2ed2ec(0x16f)), merge = require(_0x2ed2ec(0x170));
describe('res', function () {
    var _0x1d7d7c = _0x2ed2ec;
    describe(_0x1d7d7c(0x171), function () {
        var _0x53a008 = _0x1d7d7c;
        it(_0x53a008(0x172), function (_0x2ba8b4) {
            var _0x5f1601 = _0x53a008, _0x2adf50 = express();
            _0x2adf50['use'](function (_0x4b7526, _0x4cdd35) {
                var _0x2874ac = _0x2525;
                _0x4cdd35[_0x2874ac(0x173)](_0x2874ac(0x174), { 'name': _0x2874ac(0x175) })['end']();
            }), request(_0x2adf50)[_0x5f1601(0x176)]('/')[_0x5f1601(0x177)]('Set-Cookie', _0x5f1601(0x178))[_0x5f1601(0x177)](0xc8, _0x2ba8b4);
        });
    }), describe(_0x1d7d7c(0x179), function () {
        var _0x3f8ef8 = _0x1d7d7c;
        it(_0x3f8ef8(0x17a), function (_0x3009de) {
            var _0x42cd51 = _0x3f8ef8, _0x53e711 = express();
            _0x53e711[_0x42cd51(0x17b)](function (_0x446bb6, _0x14ca93) {
                var _0x51f2fc = _0x42cd51;
                _0x14ca93[_0x51f2fc(0x173)](_0x51f2fc(0x17c), 'tobi')[_0x51f2fc(0x17d)]();
            }), request(_0x53e711)[_0x42cd51(0x176)]('/')['expect'](_0x42cd51(0x17e), 'name=tobi;\x20Path=/')['expect'](0xc8, _0x3009de);
        }), it(_0x3f8ef8(0x17f), function (_0x3a058e) {
            var _0x2979d9 = _0x3f8ef8, _0x37ef7e = express();
            _0x37ef7e[_0x2979d9(0x17b)](function (_0x122a19, _0x3687e3) {
                var _0x94d7b = _0x2979d9;
                _0x3687e3[_0x94d7b(0x173)](_0x94d7b(0x17c), _0x94d7b(0x175)), _0x3687e3[_0x94d7b(0x173)](_0x94d7b(0x180), 0x1), _0x3687e3[_0x94d7b(0x173)](_0x94d7b(0x181), '?'), _0x3687e3['end']();
            }), request(_0x37ef7e)[_0x2979d9(0x176)]('/')[_0x2979d9(0x17d)](function (_0x3f655a, _0x3b6a11) {
                var _0x5ca493 = _0x2979d9, _0x46725e = [
                        _0x5ca493(0x182),
                        _0x5ca493(0x183),
                        _0x5ca493(0x184)
                    ];
                _0x3b6a11[_0x5ca493(0x185)][_0x5ca493(0x186)][_0x5ca493(0x187)][_0x5ca493(0x188)](_0x46725e), _0x3a058e();
            });
        });
    }), describe(_0x1d7d7c(0x189), function () {
        var _0x2466a7 = _0x1d7d7c;
        it(_0x2466a7(0x18a), function (_0x45666a) {
            var _0x44cf86 = _0x2466a7, _0x475cc5 = express();
            _0x475cc5[_0x44cf86(0x17b)](function (_0x4c56a5, _0xf1d861) {
                var _0x330705 = _0x44cf86;
                _0xf1d861[_0x330705(0x173)](_0x330705(0x17c), 'tobi', {
                    'httpOnly': !![],
                    'secure': !![]
                }), _0xf1d861[_0x330705(0x17d)]();
            }), request(_0x475cc5)[_0x44cf86(0x176)]('/')[_0x44cf86(0x177)]('Set-Cookie', 'name=tobi;\x20Path=/;\x20HttpOnly;\x20Secure')[_0x44cf86(0x177)](0xc8, _0x45666a);
        }), describe(_0x2466a7(0x18b), function () {
            var _0x7ff09f = _0x2466a7;
            it(_0x7ff09f(0x18c), function (_0x585224) {
                var _0xa5394a = _0x7ff09f, _0x38ff7a = express();
                _0x38ff7a[_0xa5394a(0x17b)](function (_0x3ede54, _0x1d9311) {
                    var _0x5eb857 = _0xa5394a;
                    _0x1d9311[_0x5eb857(0x173)](_0x5eb857(0x17c), 'tobi', { 'maxAge': 0x3e8 }), _0x1d9311[_0x5eb857(0x17d)]();
                }), request(_0x38ff7a)[_0xa5394a(0x176)]('/')[_0xa5394a(0x17d)](function (_0x4128a8, _0x1adfa5) {
                    var _0xf9dd7f = _0xa5394a;
                    _0x1adfa5[_0xf9dd7f(0x185)][_0xf9dd7f(0x186)][0x0][_0xf9dd7f(0x187)][_0xf9dd7f(0x18d)]['containEql']('Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT'), _0x585224();
                });
            }), it(_0x7ff09f(0x18e), function (_0x318fc7) {
                var _0xeeeb10 = _0x7ff09f, _0xd294a2 = express();
                _0xd294a2[_0xeeeb10(0x17b)](function (_0x16d7f3, _0x5d3913) {
                    var _0x342984 = _0xeeeb10;
                    _0x5d3913[_0x342984(0x173)](_0x342984(0x17c), 'tobi', { 'maxAge': 0x3e8 }), _0x5d3913[_0x342984(0x17d)]();
                }), request(_0xd294a2)[_0xeeeb10(0x176)]('/')[_0xeeeb10(0x177)](_0xeeeb10(0x17e), /Max-Age=1/, _0x318fc7);
            }), it(_0x7ff09f(0x18f), function (_0x113a77) {
                var _0x4dfc95 = _0x7ff09f, _0x1c9540 = express(), _0x2c738e = { 'maxAge': 0x3e8 }, _0x12517e = merge({}, _0x2c738e);
                _0x1c9540['use'](function (_0x5f55a1, _0x489061) {
                    var _0x5c9443 = _0x2525;
                    _0x489061[_0x5c9443(0x173)](_0x5c9443(0x17c), _0x5c9443(0x175), _0x2c738e), _0x489061[_0x5c9443(0x190)](_0x2c738e);
                }), request(_0x1c9540)[_0x4dfc95(0x176)]('/')[_0x4dfc95(0x177)](0xc8, _0x12517e, _0x113a77);
            });
        }), describe('signed', function () {
            it('should\x20generate\x20a\x20signed\x20JSON\x20cookie', function (_0x3f96b0) {
                var _0x4e3efd = _0x2525, _0x451302 = express();
                _0x451302[_0x4e3efd(0x17b)](cookieParser(_0x4e3efd(0x191))), _0x451302[_0x4e3efd(0x17b)](function (_0x27f721, _0x149205) {
                    var _0x2c9cbb = _0x4e3efd;
                    _0x149205[_0x2c9cbb(0x173)](_0x2c9cbb(0x174), { 'name': _0x2c9cbb(0x175) }, { 'signed': !![] })[_0x2c9cbb(0x17d)]();
                }), request(_0x451302)[_0x4e3efd(0x176)]('/')[_0x4e3efd(0x17d)](function (_0x4096a1, _0x3cc20a) {
                    var _0x2768d3 = _0x4e3efd, _0x429b89 = _0x3cc20a[_0x2768d3(0x185)][_0x2768d3(0x186)][0x0];
                    _0x429b89 = cookie[_0x2768d3(0x192)](_0x429b89[_0x2768d3(0x193)]('.')[0x0]), _0x429b89['user'][_0x2768d3(0x187)][_0x2768d3(0x194)](_0x2768d3(0x195)), _0x3f96b0();
                });
            });
        }), describe(_0x2466a7(0x196), function () {
            it('should\x20throw\x20an\x20error', function (_0x4c72e8) {
                var _0x424d11 = _0x2525, _0x3358fa = express();
                _0x3358fa[_0x424d11(0x17b)](cookieParser()), _0x3358fa[_0x424d11(0x17b)](function (_0x55fc9f, _0x588229) {
                    var _0x5cc47b = _0x424d11;
                    _0x588229[_0x5cc47b(0x173)](_0x5cc47b(0x17c), _0x5cc47b(0x175), { 'signed': !![] })[_0x5cc47b(0x17d)]();
                }), request(_0x3358fa)[_0x424d11(0x176)]('/')[_0x424d11(0x177)](0x1f4, /secret\S+ required for signed cookies/, _0x4c72e8);
            });
        }), describe(_0x2466a7(0x197), function () {
            var _0x2ab5e5 = _0x2466a7;
            it(_0x2ab5e5(0x198), function (_0x488e29) {
                var _0x59db8b = _0x2ab5e5, _0x3a30b7 = express();
                _0x3a30b7[_0x59db8b(0x17b)](cookieParser(_0x59db8b(0x191))), _0x3a30b7[_0x59db8b(0x17b)](function (_0x309380, _0x47bad2) {
                    var _0x33d221 = _0x59db8b;
                    _0x47bad2[_0x33d221(0x173)](_0x33d221(0x17c), 'tobi', { 'signed': !![] })[_0x33d221(0x17d)]();
                }), request(_0x3a30b7)['get']('/')[_0x59db8b(0x177)](_0x59db8b(0x17e), _0x59db8b(0x199))[_0x59db8b(0x177)](0xc8, _0x488e29);
            });
        });
    });
});
