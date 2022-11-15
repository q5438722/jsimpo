const uuid = require(_0x454774(275)), {encode, decode} = require(_0x454774(276)), {MESSAGE, RESPONSE, PING, PONG} = require(_0x454774(277)), hasOwn = Object[_0x454774(278)][_0x454774(279)];
function _0x2839(_0x551ce6, _0x148c60) {
    return _0x2839 = function (_0x5385aa, _0x2e80ee) {
        _0x5385aa = _0x5385aa - (-12 * -728 + -4161 + -4309);
        let _0x3d9d1e = _0x47d0[_0x5385aa];
        return _0x3d9d1e;
    }, _0x2839(_0x551ce6, _0x148c60);
}
Object[_0x454774(280)](exports, {
    'enable'(_0x416ee5) {
        const _0x2ace36 = _0x454774, _0x53a095 = {
                'QtdXD': function (_0x45be7b, _0x1dba27) {
                    return _0x45be7b !== _0x1dba27;
                },
                'BLOuK': _0x2ace36(281),
                'BLzaj': function (_0x2a4b52, _0x3666a6) {
                    return _0x2a4b52 === _0x3666a6;
                },
                'WHDTF': 'function',
                'HFumo': function (_0xc3a915) {
                    return _0xc3a915();
                },
                'fwqNN': function (_0x53a329, _0x138ad2) {
                    return _0x53a329 > _0x138ad2;
                },
                'oPOAl': function (_0x3efbd4, _0x493159) {
                    return _0x3efbd4(_0x493159);
                },
                'eSWhM': _0x2ace36(282),
                'TzbcX': function (_0x54e48e, _0x2427be) {
                    return _0x54e48e(_0x2427be);
                },
                'OPyOS': function (_0x1caf41, _0x19ba21) {
                    return _0x1caf41(_0x19ba21);
                },
                'wiffQ': function (_0x116481, _0x16dd38, _0x45a429) {
                    return _0x116481(_0x16dd38, _0x45a429);
                },
                'BccvD': _0x2ace36(283),
                'rDjti': _0x2ace36(284)
            };
        if (_0x53a095[_0x2ace36(285)](typeof _0x416ee5['onMessage'], _0x53a095[_0x2ace36(286)]) && _0x53a095[_0x2ace36(285)](typeof _0x416ee5[_0x2ace36(287)], _0x53a095[_0x2ace36(286)]))
            return _0x416ee5;
        const _0x14d2f7 = new Map();
        _0x416ee5[_0x2ace36(288)] = function _0x4982d3(_0x333076, _0x36d234) {
            const _0x368532 = _0x2ace36;
            !_0x14d2f7[_0x368532(289)](_0x333076) && _0x14d2f7[_0x368532(290)](_0x333076, new Set()), _0x14d2f7[_0x368532(291)](_0x333076)['add'](_0x36d234);
        };
        const _0x5aed94 = new Map(), _0x9f0e48 = new Map(), _0x1c42c6 = new Map(), _0x30b2f0 = Object[_0x2ace36(292)](null);
        function _0x317289(_0x4c4191) {
            const _0x2e9b61 = _0x2ace36;
            _0x4c4191 && _0x53a095[_0x2e9b61(293)](_0x4c4191[_0x2e9b61(294)], 'EPIPE') && console[_0x2e9b61(295)](_0x53a095[_0x2e9b61(296)], _0x4c4191);
        }
        _0x30b2f0[PING] = function ({id: _0x5b9636}) {
            const _0x251f31 = _0x2ace36;
            _0x416ee5[_0x251f31(297)]({
                'type': PONG,
                'id': _0x5b9636
            }, _0x317289);
        }, _0x30b2f0[PONG] = function ({id: _0xd61c9f}) {
            const _0x59abe1 = _0x2ace36, _0x3cf4cc = _0x5aed94[_0x59abe1(291)](_0xd61c9f);
            _0x53a095[_0x59abe1(285)](typeof _0x3cf4cc, _0x53a095[_0x59abe1(286)]) && (_0x5aed94[_0x59abe1(298)](_0xd61c9f), _0x53a095[_0x59abe1(299)](_0x3cf4cc));
        }, _0x30b2f0[MESSAGE] = function ({
            responseId: _0x3a21a9,
            topic: _0x257b90,
            encodedPayload: _0x184399
        }) {
            const _0xefccb1 = _0x2ace36, _0xa64e35 = (_0x1c42c6[_0xefccb1(291)](_0x257b90) || Promise[_0xefccb1(300)]())[_0xefccb1(301)](() => {
                    const _0x3c23ee = _0xefccb1, _0x36db66 = [], _0x561817 = _0x14d2f7[_0x3c23ee(291)](_0x257b90);
                    if (_0x561817 && _0x53a095[_0x3c23ee(302)](_0x561817[_0x3c23ee(303)], -603 + 2 * -2387 + 283 * 19))
                        return _0x561817[_0x3c23ee(304)](_0x58edbb => _0x36db66[_0x3c23ee(305)](_0x58edbb(decode(_0x184399)))), Promise[_0x3c23ee(306)](_0x36db66);
                    return _0x36db66;
                })[_0xefccb1(301)](_0x214b71 => {
                    const _0x53d420 = _0xefccb1;
                    _0x3a21a9 && _0x416ee5[_0x53d420(297)]({
                        'type': RESPONSE,
                        'responseId': _0x3a21a9,
                        'encodedResults': encode(_0x214b71)
                    }, _0x317289);
                }, _0x38d36c => {
                    const _0x2e0d42 = _0xefccb1, _0x88196d = {};
                    Reflect[_0x2e0d42(307)](_0x38d36c)[_0x2e0d42(304)](_0x2209a6 => {
                        _0x88196d[_0x2209a6] = _0x38d36c[_0x2209a6];
                    }), _0x416ee5[_0x2e0d42(297)]({
                        'type': RESPONSE,
                        'responseId': _0x3a21a9,
                        'encodedError': _0x53a095[_0x2e0d42(308)](encode, _0x88196d)
                    }, _0x317289);
                });
            _0x1c42c6['set'](_0x257b90, _0xa64e35);
        }, _0x30b2f0[RESPONSE] = function (_0x337d89) {
            const _0x59ea4e = _0x2ace36, _0xaba3c3 = _0x9f0e48[_0x59ea4e(291)](_0x337d89[_0x59ea4e(309)]);
            _0xaba3c3 && (hasOwn[_0x59ea4e(310)](_0x337d89, _0x53a095[_0x59ea4e(311)]) ? _0xaba3c3[_0x59ea4e(312)](_0x53a095[_0x59ea4e(313)](decode, _0x337d89[_0x59ea4e(282)])) : _0xaba3c3[_0x59ea4e(300)](_0x53a095[_0x59ea4e(314)](decode, _0x337d89[_0x59ea4e(315)])));
        }, _0x416ee5['on'](_0x53a095[_0x2ace36(316)], _0x3440a1 => {
            const _0xc59dbf = _0x2ace36, _0x48396b = _0x30b2f0[_0x3440a1[_0xc59dbf(317)]];
            typeof _0x48396b === 'function' && _0x48396b(_0x3440a1);
        }), _0x416ee5['sendMessage'] = function _0x71740(_0x37df1d, _0xffc8d2) {
            const _0x4bec21 = _0x2ace36;
            return _0x416ee5[_0x4bec21(318)] = _0x416ee5['readyForMessages'] || _0x2b90f5(), _0x416ee5['readyForMessages']['then'](() => {
                const _0x5f24d3 = _0x4bec21, _0x5543a7 = {
                        'geFVF': function (_0x17d432, _0x48cbfc) {
                            return _0x17d432(_0x48cbfc);
                        }
                    }, _0x2c1861 = _0x53a095['HFumo'](uuid);
                return new Promise((_0x178eb2, _0x153c34) => {
                    const _0x15d61f = _0x2839;
                    _0x9f0e48[_0x15d61f(290)](_0x2c1861, {
                        'resolve': _0x178eb2,
                        'reject': _0x153c34
                    }), _0x416ee5[_0x15d61f(297)]({
                        'type': MESSAGE,
                        'responseId': _0x2c1861,
                        'topic': _0x37df1d,
                        'encodedPayload': encode(_0xffc8d2)
                    }, _0x35164c => {
                        const _0x1957a8 = _0x15d61f;
                        _0x35164c && _0x5543a7[_0x1957a8(319)](_0x153c34, _0x35164c);
                    });
                })[_0x5f24d3(301)](_0x1768fd => {
                    const _0x3c9223 = _0x5f24d3;
                    return _0x9f0e48[_0x3c9223(298)](_0x2c1861), _0x1768fd;
                }, _0x2c8813 => {
                    const _0x462c6f = _0x5f24d3;
                    _0x9f0e48[_0x462c6f(298)](_0x2c1861);
                    throw _0x2c8813;
                });
            });
        };
        function _0x2b90f5() {
            const _0x327674 = {
                'Gmgpy': function (_0x1e54e8, _0xfe17a7, _0x2880af) {
                    const _0xdd0f24 = _0x2839;
                    return _0x53a095[_0xdd0f24(320)](_0x1e54e8, _0xfe17a7, _0x2880af);
                },
                'UtYMu': function (_0x354a96) {
                    return _0x354a96();
                }
            };
            return new Promise((_0x794c77, _0x1c28d0) => {
                const _0x52ebdc = _0x2839, _0x4eb87c = {
                        'type': PING,
                        'id': uuid()
                    }, _0x28767d = 59 * 18 + 7597 + 2886 * -3 + 0.10000000000000009;
                let _0x388bf1 = -4477 + -8027 + 12554 * 1;
                _0x5aed94[_0x52ebdc(290)](_0x4eb87c['id'], _0x794c77);
                function _0x3a8c3f() {
                    const _0x2239dc = _0x52ebdc, _0x22004a = {
                            'Gdoth': function (_0x3d3dd1, _0x408525, _0x4099ed) {
                                const _0x427390 = _0x2839;
                                return _0x327674[_0x427390(321)](_0x3d3dd1, _0x408525, _0x4099ed);
                            }
                        };
                    _0x5aed94['has'](_0x4eb87c['id']) && _0x416ee5[_0x2239dc(297)](_0x4eb87c, _0x18f3ff => {
                        const _0x2f8768 = _0x2239dc;
                        _0x18f3ff ? _0x1c28d0(_0x18f3ff) : (_0x22004a[_0x2f8768(322)](setTimeout, _0x3a8c3f, _0x388bf1), _0x388bf1 *= _0x28767d);
                    });
                }
                _0x327674[_0x52ebdc(323)](_0x3a8c3f);
            });
        }
        return _0x416ee5['on'](_0x53a095[_0x2ace36(324)], (_0xc89c42, _0x105bf8) => {
            const _0x5c58cc = _0x2ace36, _0x4bcc21 = new Error(_0x5c58cc(325));
            Object['assign'](_0x4bcc21, {
                'code': _0xc89c42,
                'signal': _0x105bf8
            }), _0x9f0e48[_0x5c58cc(304)](_0x161792 => _0x161792[_0x5c58cc(312)](_0x4bcc21)), _0x416ee5[_0x5c58cc(318)] = Promise[_0x5c58cc(312)](_0x4bcc21), _0x416ee5[_0x5c58cc(318)][_0x5c58cc(326)](() => {
            });
        }), _0x416ee5;
    },
    'onMessage'(_0x15c8b7, _0x1b2a21) {
    }
});
typeof process[_0x454774(297)] === _0x454774(327) && (exports['enable'](process), exports[_0x454774(288)] = process[_0x454774(288)]);