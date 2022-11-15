'use strict';
const _0x33b5 = [
    'then',
    'array\x20should\x20contain\x20two\x20chunks',
    'fhYBP',
    'close()\x20inside\x20size()\x20should\x20not\x20crash',
    'close\x20request\x20inside\x20size()\x20should\x20work',
    'error',
    'rgxhh',
    'getReader',
    'read',
    'KOVTL',
    'error()\x20inside\x20size()\x20should\x20work',
    'desiredSize\x20should\x20be\x201',
    'cgbAW',
    'qiRZk',
    'LSdau',
    'array\x20should\x20contain\x20one\x20chunk',
    'enqueue()\x20should\x20throw',
    'step_func',
    'akDGa',
    'reason\x20should\x20be\x20error1',
    'chyDF',
    'cancel',
    'closed',
    'cancel()\x20inside\x20size()\x20should\x20work',
    'write',
    'target\x20should\x20have\x20been\x20closed',
    'pipeTo',
    'ezVEX',
    'events',
    'xKDyi',
    'Scowl',
    'MQoCl',
    'YJCaU',
    'pipeTo()\x20inside\x20size()\x20should\x20behave\x20as\x20expected',
    'chunk\x20should\x20have\x20been\x20read',
    'calls\x20should\x20still\x20be\x201',
    'jlawJ',
    'size()\x20should\x20have\x20been\x20called\x20once',
    'CaWSX',
    'tIIne',
    'bgmzh',
    'SWfVX',
    'BUYav',
    'SzykF',
    'UKyFh',
    'chunk\x20a\x20should\x20come\x20after\x20b',
    'read()\x20inside\x20of\x20size()\x20should\x20behave\x20as\x20expected',
    'done\x20should\x20be\x20false',
    'value\x20should\x20be\x20a',
    'KWEkX',
    'idqyX',
    'dbDWp',
    'getReader()\x20inside\x20size()\x20should\x20work',
    'rs\x20should\x20be\x20locked',
    'tee',
    'nFMVz',
    'locked',
    'XxNbl',
    'all',
    'NrNpL',
    'branch2\x20should\x20have\x20one\x20chunk',
    'tee()\x20inside\x20size()\x20should\x20work',
    '361100zRTUQj',
    '13ymNZbx',
    '9781VmdSsP',
    '1rNuraV',
    '131078lnzAsf',
    '117545pkIztE',
    '488693RYoRCN',
    '1KRuNBV',
    '213781mxMXBA',
    '301710uWzAug',
    'error1',
    'name',
    'enqueue',
    'close',
    'jYiwV'
];
function _0x22af(_0x5eb666, _0x1225e9) {
    return _0x22af = function (_0xc3fe39, _0x955219) {
        _0xc3fe39 = _0xc3fe39 - (-0x7 * -0x513 + 0x2287 * 0x1 + 0x1 * -0x4521);
        let _0xb2c970 = _0x33b5[_0xc3fe39];
        return _0xb2c970;
    }, _0x22af(_0x5eb666, _0x1225e9);
}
const _0x33b7f9 = _0x22af;
(function (_0x532589, _0x4aba16) {
    const _0x9efada = _0x22af;
    while (!![]) {
        try {
            const _0x3fbbf4 = parseInt(_0x9efada(0xeb)) + parseInt(_0x9efada(0xec)) * parseInt(_0x9efada(0xed)) + -parseInt(_0x9efada(0xee)) * parseInt(_0x9efada(0xef)) + -parseInt(_0x9efada(0xf0)) + parseInt(_0x9efada(0xf1)) * -parseInt(_0x9efada(0xf2)) + parseInt(_0x9efada(0xf3)) + parseInt(_0x9efada(0xf4));
            if (_0x3fbbf4 === _0x4aba16)
                break;
            else
                _0x532589['push'](_0x532589['shift']());
        } catch (_0x12ea8c) {
            _0x532589['push'](_0x532589['shift']());
        }
    }
}(_0x33b5, 0x7 * 0xce7 + 0x1f9d6 + 0x1bc95));
const error1 = new Error(_0x33b7f9(0xf5));
error1[_0x33b7f9(0xf6)] = 'error1', promise_test(() => {
    const _0x1ea8b6 = _0x33b7f9, _0x18acdb = {
            'QFEWp': function (_0x3b071c, _0x13f03d) {
                return _0x3b071c < _0x13f03d;
            },
            'jYiwV': function (_0x1d366e, _0x113b4e) {
                return _0x1d366e(_0x113b4e);
            }
        };
    let _0x1ee391, _0x40a67b = 0x15f6 + -0x49 * -0x4d + -0x2beb * 0x1;
    const _0x548bfc = new ReadableStream({
        'start'(_0x277d8f) {
            _0x1ee391 = _0x277d8f;
        }
    }, {
        'size'() {
            const _0x465b9d = _0x22af;
            return ++_0x40a67b, _0x18acdb['QFEWp'](_0x40a67b, 0x3 * -0x26b + 0x3 * -0x5f7 + -0x46 * -0x5c) && _0x1ee391[_0x465b9d(0xf7)]('b'), -0x5 * 0x752 + 0x1e36 + 0x665;
        }
    });
    return _0x1ee391['enqueue']('a'), _0x1ee391[_0x1ea8b6(0xf8)](), _0x18acdb[_0x1ea8b6(0xf9)](readableStreamToArray, _0x548bfc)[_0x1ea8b6(0xfa)](_0x11c1b2 => assert_array_equals(_0x11c1b2, [
        'b',
        'a'
    ], _0x1ea8b6(0xfb)));
}, 'enqueue()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    const _0x44cc71 = _0x33b7f9, _0x857662 = {
            'fhYBP': function (_0x335642, _0x38dcba) {
                return _0x335642(_0x38dcba);
            }
        };
    let _0x2cf7b4;
    const _0x26d327 = new ReadableStream({
        'start'(_0x3ec259) {
            _0x2cf7b4 = _0x3ec259;
        }
    }, {
        'size'() {
            return _0x2cf7b4['close'](), 0x24a * 0xd + 0xf * -0x51 + -0xb * 0x246;
        }
    });
    return _0x2cf7b4[_0x44cc71(0xf7)]('a'), _0x857662[_0x44cc71(0xfc)](readableStreamToArray, _0x26d327)[_0x44cc71(0xfa)](_0x38cf1e => assert_array_equals(_0x38cf1e, [], 'array\x20should\x20contain\x20no\x20chunks'));
}, _0x33b7f9(0xfd)), promise_test(() => {
    const _0x3b2788 = _0x33b7f9, _0x5b6faf = {
            'WxMIw': function (_0x2d1c1c, _0x1fde72) {
                return _0x2d1c1c === _0x1fde72;
            },
            'BiIPZ': function (_0x38d501, _0xea50fd) {
                return _0x38d501(_0xea50fd);
            }
        };
    let _0x24f5e2, _0x5c454d = 0x1 * 0x4bd + -0x1f86 + 0x1ac9 * 0x1;
    const _0x2c5571 = new ReadableStream({
        'start'(_0x53ef20) {
            _0x24f5e2 = _0x53ef20;
        }
    }, {
        'size'() {
            const _0x92fca4 = _0x22af;
            return ++_0x5c454d, _0x5b6faf['WxMIw'](_0x5c454d, -0x13 * 0xcb + -0x23d5 + -0xb5 * -0x48) && _0x24f5e2[_0x92fca4(0xf8)](), -0x5 * -0x9b + -0x3a2 + 0x1a * 0x6;
        }
    });
    return _0x24f5e2[_0x3b2788(0xf7)]('a'), _0x24f5e2[_0x3b2788(0xf7)]('b'), _0x5b6faf['BiIPZ'](readableStreamToArray, _0x2c5571)['then'](_0x223a85 => assert_array_equals(_0x223a85, [
        'a',
        'b'
    ], 'array\x20should\x20contain\x20two\x20chunks'));
}, _0x33b7f9(0xfe)), promise_test(_0xe215c8 => {
    const _0x2e1169 = _0x33b7f9, _0x153528 = {
            'rgxhh': function (_0x422365, _0x45ca35, _0x3a3d37, _0x420d12, _0x3c8f77) {
                return _0x422365(_0x45ca35, _0x3a3d37, _0x420d12, _0x3c8f77);
            },
            'KOVTL': 'read()\x20should\x20reject'
        };
    let _0x5b8cc5;
    const _0x521349 = new ReadableStream({
        'start'(_0x1a7603) {
            _0x5b8cc5 = _0x1a7603;
        }
    }, {
        'size'() {
            const _0x2bcb0f = _0x22af;
            return _0x5b8cc5[_0x2bcb0f(0xff)](error1), 0x1 * -0xb18 + 0x16 * 0xc1 + -0x57d;
        }
    });
    return _0x5b8cc5[_0x2e1169(0xf7)]('a'), _0x153528[_0x2e1169(0x100)](promise_rejects_exactly, _0xe215c8, error1, _0x521349[_0x2e1169(0x101)]()[_0x2e1169(0x102)](), _0x153528[_0x2e1169(0x103)]);
}, _0x33b7f9(0x104)), promise_test(() => {
    const _0x297746 = _0x33b7f9, _0x3e1dbf = {
            'cgbAW': function (_0x4c72c1, _0x809983, _0x215f29, _0x3fa04d) {
                return _0x4c72c1(_0x809983, _0x215f29, _0x3fa04d);
            },
            'qiRZk': _0x297746(0x105),
            'LSdau': function (_0x3e7181, _0x2c1f9b) {
                return _0x3e7181(_0x2c1f9b);
            }
        };
    let _0x31b34a;
    const _0x3cc4c2 = new ReadableStream({
        'start'(_0xbd303a) {
            _0x31b34a = _0xbd303a;
        }
    }, {
        'size'() {
            const _0x5a6ee6 = _0x297746;
            return _0x3e1dbf[_0x5a6ee6(0x106)](assert_equals, _0x31b34a['desiredSize'], 0xba9 + 0x26f1 + -0x3299, _0x3e1dbf[_0x5a6ee6(0x107)]), 0x1fe7 + -0x27 * 0x47 + -0x1515;
        },
        'highWaterMark': 0x1
    });
    return _0x31b34a[_0x297746(0xf7)]('a'), _0x31b34a[_0x297746(0xf8)](), _0x3e1dbf[_0x297746(0x108)](readableStreamToArray, _0x3cc4c2)[_0x297746(0xfa)](_0x15e102 => assert_array_equals(_0x15e102, ['a'], _0x297746(0x109)));
}, 'desiredSize\x20inside\x20size()\x20should\x20work'), promise_test(_0x30d13a => {
    const _0x43aae7 = _0x33b7f9, _0x2d3bb0 = {
            'akDGa': function (_0x2108cf, _0x3d6f63, _0x4eb73b, _0x42b80e) {
                return _0x2108cf(_0x3d6f63, _0x4eb73b, _0x42b80e);
            },
            'chyDF': _0x43aae7(0x10a)
        };
    let _0x243a2b, _0x51b4f2;
    const _0xdd9862 = new ReadableStream({
        'start'(_0x5665bf) {
            _0x51b4f2 = _0x5665bf;
        },
        'cancel': _0x30d13a[_0x43aae7(0x10b)](_0x3fc5ba => {
            const _0xcb8f1d = _0x43aae7;
            _0x2d3bb0[_0xcb8f1d(0x10c)](assert_equals, _0x3fc5ba, error1, _0xcb8f1d(0x10d)), _0x2d3bb0[_0xcb8f1d(0x10c)](assert_throws_js, TypeError, () => _0x51b4f2[_0xcb8f1d(0xf7)](), _0x2d3bb0[_0xcb8f1d(0x10e)]);
        })
    }, {
        'size'() {
            const _0x48ed16 = _0x43aae7;
            return _0x243a2b = _0xdd9862[_0x48ed16(0x10f)](error1), -0x21 * -0xf3 + -0x6 * 0x67 + -0x1ce8;
        },
        'highWaterMark': Infinity
    });
    _0x51b4f2[_0x43aae7(0xf7)]('a');
    const _0x2cbb36 = _0xdd9862['getReader']();
    return Promise['all']([
        _0x2cbb36[_0x43aae7(0x110)],
        _0x243a2b
    ]);
}, _0x33b7f9(0x111)), promise_test(() => {
    const _0x48b8b2 = _0x33b7f9, _0x44896f = {
            'ezVEX': function (_0x2563a5, _0x2cbd6a, _0x1f5952, _0x328657) {
                return _0x2563a5(_0x2cbd6a, _0x1f5952, _0x328657);
            },
            'xKDyi': _0x48b8b2(0x112),
            'Scowl': 'ws\x20should\x20contain\x20two\x20chunks',
            'MQoCl': 'close',
            'YJCaU': _0x48b8b2(0x113),
            'pOjXh': function (_0x23f1a8, _0x37c436, _0x5b95d0) {
                return _0x23f1a8(_0x37c436, _0x5b95d0);
            }
        };
    let _0x2271fd, _0x2911cb;
    const _0x12e3b4 = recordingWritableStream(), _0x566001 = new ReadableStream({
            'start'(_0x2905a0) {
                _0x2271fd = _0x2905a0;
            }
        }, {
            'size'() {
                const _0x2d83f8 = _0x48b8b2;
                return !_0x2911cb && (_0x2911cb = _0x566001[_0x2d83f8(0x114)](_0x12e3b4)), -0xbf1 + 0x45d * 0x7 + -0x9 * 0x211;
            },
            'highWaterMark': 0x1
        });
    return _0x2271fd['enqueue']('a'), _0x44896f['pOjXh'](assert_not_equals, _0x2911cb, undefined), _0x2271fd['enqueue']('a'), delay(0x9ef + -0x13d3 + 0x9e4)[_0x48b8b2(0xfa)](() => {
        const _0x2a128d = _0x48b8b2;
        return _0x44896f[_0x2a128d(0x115)](assert_array_equals, _0x12e3b4[_0x2a128d(0x116)], [
            _0x44896f[_0x2a128d(0x117)],
            'a',
            _0x44896f[_0x2a128d(0x117)],
            'a'
        ], _0x44896f[_0x2a128d(0x118)]), _0x2271fd[_0x2a128d(0xf8)](), _0x2911cb;
    })[_0x48b8b2(0xfa)](() => {
        const _0xc06a5c = _0x48b8b2;
        assert_array_equals(_0x12e3b4['events'], [
            _0xc06a5c(0x112),
            'a',
            'write',
            'a',
            _0x44896f[_0xc06a5c(0x119)]
        ], _0x44896f[_0xc06a5c(0x11a)]);
    });
}, _0x33b7f9(0x11b)), promise_test(() => {
    const _0x3b8f89 = _0x33b7f9, _0x215302 = {
            'xpUKI': function (_0x165b29, _0x499a89) {
                return _0x165b29(_0x499a89);
            },
            'jlawJ': function (_0x489f9e, _0x392f51, _0xa5cf31, _0x153182) {
                return _0x489f9e(_0x392f51, _0xa5cf31, _0x153182);
            },
            'CaWSX': function (_0x296737, _0x5296d8, _0x20d943, _0x24dccf) {
                return _0x296737(_0x5296d8, _0x20d943, _0x24dccf);
            },
            'tIIne': 'size()\x20should\x20only\x20be\x20called\x20once',
            'bgmzh': function (_0x39cbc0, _0x310d9a, _0x522e42) {
                return _0x39cbc0(_0x310d9a, _0x522e42);
            },
            'SWfVX': 'done\x20should\x20be\x20false',
            'BUYav': _0x3b8f89(0x11c),
            'SzykF': _0x3b8f89(0x11d),
            'UKyFh': function (_0x583af7, _0x23b86d, _0x57150b) {
                return _0x583af7(_0x23b86d, _0x57150b);
            },
            'yWzYj': 'done\x20should\x20be\x20false\x20again',
            'mbGhG': function (_0x2b6299) {
                return _0x2b6299();
            }
        };
    let _0x5b9a85, _0x223f3f, _0x86146b = 0xa9a + 0xa * -0x31 + 0x8 * -0x116, _0x4cbe2f = ![], _0x112f04;
    const _0x15365a = new ReadableStream({
        'start'(_0x5d4afc) {
            _0x5b9a85 = _0x5d4afc;
        }
    }, {
        'size'() {
            return _0x223f3f = _0x112f04['read'](), ++_0x86146b, -0x72c + 0x1 * -0x17ef + 0x2 * 0xf8e;
        },
        'highWaterMark': 0x0
    });
    return _0x112f04 = _0x15365a[_0x3b8f89(0x101)](), _0x5b9a85[_0x3b8f89(0xf7)]('a'), _0x223f3f[_0x3b8f89(0xfa)](() => {
        _0x4cbe2f = !![];
    }), _0x215302['mbGhG'](flushAsyncEvents)[_0x3b8f89(0xfa)](() => {
        const _0x30da85 = _0x3b8f89;
        return _0x215302['xpUKI'](assert_false, _0x4cbe2f), _0x5b9a85[_0x30da85(0xf7)]('b'), _0x215302[_0x30da85(0x11e)](assert_equals, _0x86146b, -0xd2d + -0x139b + 0x1 * 0x20c9, _0x30da85(0x11f)), _0x215302['xpUKI'](delay, 0x1fd * 0x11 + -0x243e * -0x1 + -0x460b);
    })[_0x3b8f89(0xfa)](() => {
        const _0x3c2389 = _0x3b8f89;
        return assert_true(_0x4cbe2f), _0x215302[_0x3c2389(0x120)](assert_equals, _0x86146b, -0x1c5e + -0x41f + 0x207e, _0x215302[_0x3c2389(0x121)]), _0x223f3f;
    })[_0x3b8f89(0xfa)](({
        value: _0x4ca002,
        done: _0x542c35
    }) => {
        const _0x29006e = _0x3b8f89;
        return _0x215302[_0x29006e(0x122)](assert_false, _0x542c35, _0x215302[_0x29006e(0x123)]), _0x215302[_0x29006e(0x120)](assert_equals, _0x4ca002, 'b', _0x215302[_0x29006e(0x124)]), assert_equals(_0x86146b, -0x1a09 + 0xb42 + 0xec8, _0x215302[_0x29006e(0x125)]), _0x112f04['read']();
    })['then'](({
        value: _0x40da8d,
        done: _0x40a10d
    }) => {
        const _0x2173a7 = _0x3b8f89;
        _0x215302[_0x2173a7(0x126)](assert_false, _0x40a10d, _0x215302['yWzYj']), assert_equals(_0x40da8d, 'a', _0x2173a7(0x127));
    });
}, _0x33b7f9(0x128)), promise_test(() => {
    const _0x16b172 = _0x33b7f9, _0x533d72 = {
            'KWEkX': function (_0x25be4f, _0x130dbe, _0x53adeb) {
                return _0x25be4f(_0x130dbe, _0x53adeb);
            },
            'idqyX': _0x16b172(0x129),
            'dbDWp': _0x16b172(0x12a)
        };
    let _0x112e61, _0x390871;
    const _0x412020 = new ReadableStream({
        'start'(_0x4d0fa2) {
            _0x112e61 = _0x4d0fa2;
        }
    }, {
        'size'() {
            const _0x29c3c3 = _0x16b172;
            return _0x390871 = _0x412020[_0x29c3c3(0x101)](), -0x772 + -0x1 * 0xb1a + 0x128d;
        }
    });
    return _0x112e61[_0x16b172(0xf7)]('a'), _0x390871[_0x16b172(0x102)]()[_0x16b172(0xfa)](({
        value: _0x245583,
        done: _0xbc49ec
    }) => {
        const _0x4878f3 = _0x16b172;
        _0x533d72[_0x4878f3(0x12b)](assert_false, _0xbc49ec, _0x533d72[_0x4878f3(0x12c)]), assert_equals(_0x245583, 'a', _0x533d72[_0x4878f3(0x12d)]);
    });
}, _0x33b7f9(0x12e)), promise_test(() => {
    const _0x15cb1d = _0x33b7f9, _0x5f23f2 = {
            'nFMVz': function (_0x202b10, _0x4dc1bf, _0x2323d1) {
                return _0x202b10(_0x4dc1bf, _0x2323d1);
            },
            'XxNbl': _0x15cb1d(0x12f),
            'shFxs': function (_0x44c050, _0x548dc3) {
                return _0x44c050(_0x548dc3);
            },
            'NrNpL': function (_0x3b4400, _0x321ff7) {
                return _0x3b4400(_0x321ff7);
            }
        };
    let _0x3f6845, _0x696bdf, _0x1b591f;
    const _0x41c6ae = new ReadableStream({
        'start'(_0x34595b) {
            _0x3f6845 = _0x34595b;
        }
    }, {
        'size'() {
            const _0x58dba1 = _0x15cb1d;
            return [_0x696bdf, _0x1b591f] = _0x41c6ae[_0x58dba1(0x130)](), 0x3ee + -0xdae + 0x9c1;
        }
    });
    return _0x3f6845[_0x15cb1d(0xf7)]('a'), _0x5f23f2[_0x15cb1d(0x131)](assert_true, _0x41c6ae[_0x15cb1d(0x132)], _0x5f23f2[_0x15cb1d(0x133)]), _0x3f6845[_0x15cb1d(0xf8)](), Promise[_0x15cb1d(0x134)]([
        _0x5f23f2['shFxs'](readableStreamToArray, _0x696bdf)['then'](_0x349679 => assert_array_equals(_0x349679, ['a'], 'branch1\x20should\x20have\x20one\x20chunk')),
        _0x5f23f2[_0x15cb1d(0x135)](readableStreamToArray, _0x1b591f)[_0x15cb1d(0xfa)](_0x2a18a1 => assert_array_equals(_0x2a18a1, ['a'], _0x15cb1d(0x136)))
    ]);
}, _0x33b7f9(0x137));
