'use strict';
const _0xa035 = [
    'reason\x20should\x20be\x20error1',
    'all',
    'cancel()\x20inside\x20size()\x20should\x20work',
    'write',
    'ws\x20should\x20contain\x20two\x20chunks',
    'target\x20should\x20have\x20been\x20closed',
    'gOKBb',
    'wdTqq',
    'events',
    'IHhkf',
    'Nisqp',
    'GmxHx',
    'pipeTo()\x20inside\x20size()\x20should\x20behave\x20as\x20expected',
    'size()\x20should\x20only\x20be\x20called\x20once',
    'chunk\x20should\x20have\x20been\x20read',
    'calls\x20should\x20still\x20be\x201',
    'done\x20should\x20be\x20false\x20again',
    'chunk\x20a\x20should\x20come\x20after\x20b',
    'efQfy',
    'WIxJF',
    'QejFm',
    'vOXCX',
    'tfjqa',
    'WilaA',
    'dpYUZ',
    'MuAsO',
    'ROTAW',
    'KYFjp',
    'read()\x20inside\x20of\x20size()\x20should\x20behave\x20as\x20expected',
    'done\x20should\x20be\x20false',
    'value\x20should\x20be\x20a',
    'LAYqD',
    'YrXec',
    'getReader()\x20inside\x20size()\x20should\x20work',
    'rs\x20should\x20be\x20locked',
    'tee',
    'LSepy',
    'locked',
    'gdQgg',
    'branch1\x20should\x20have\x20one\x20chunk',
    'branch2\x20should\x20have\x20one\x20chunk',
    'tee()\x20inside\x20size()\x20should\x20work',
    '115850JYbefn',
    '2ZJclVF',
    '428888ldiXSe',
    '1QkMfhU',
    '42373tZejFD',
    '22AGgtZx',
    '2oUVhEA',
    '81443sXGSMc',
    '1077089zvqrQs',
    '744504WfFbnA',
    '563OJHsDu',
    '605labXKB',
    'error1',
    'enqueue',
    'close',
    'then',
    'array\x20should\x20contain\x20two\x20chunks',
    'enqueue()\x20inside\x20size()\x20should\x20work',
    'QqLUe',
    'array\x20should\x20contain\x20no\x20chunks',
    'close()\x20inside\x20size()\x20should\x20not\x20crash',
    'SVbFs',
    'read()\x20should\x20reject',
    'error',
    'getReader',
    'read',
    'ZRrzh',
    'error()\x20inside\x20size()\x20should\x20work',
    'sLcMT',
    'desiredSize',
    'Zvoum',
    'desiredSize\x20inside\x20size()\x20should\x20work',
    'enqueue()\x20should\x20throw',
    'step_func',
    'yeceC'
];
const _0x2bd438 = _0x3f8c;
(function (_0x432b16, _0x1968f0) {
    const _0x34ddee = _0x3f8c;
    while (!![]) {
        try {
            const _0x2ae245 = parseInt(_0x34ddee(0x1a6)) * parseInt(_0x34ddee(0x1a7)) + -parseInt(_0x34ddee(0x1a8)) * parseInt(_0x34ddee(0x1a9)) + -parseInt(_0x34ddee(0x1aa)) * -parseInt(_0x34ddee(0x1ab)) + -parseInt(_0x34ddee(0x1ac)) * parseInt(_0x34ddee(0x1ad)) + parseInt(_0x34ddee(0x1ae)) + -parseInt(_0x34ddee(0x1af)) + -parseInt(_0x34ddee(0x1b0)) * parseInt(_0x34ddee(0x1b1));
            if (_0x2ae245 === _0x1968f0)
                break;
            else
                _0x432b16['push'](_0x432b16['shift']());
        } catch (_0x8f5188) {
            _0x432b16['push'](_0x432b16['shift']());
        }
    }
}(_0xa035, 0x7c * 0xd49 + 0x22a0a + 0x220));
function _0x3f8c(_0x220248, _0x5dfb71) {
    return _0x3f8c = function (_0xf32fb2, _0x1eeb20) {
        _0xf32fb2 = _0xf32fb2 - (-0x22ee + 0x2f * -0x3a + 0x2f3a);
        let _0x2536e8 = _0xa035[_0xf32fb2];
        return _0x2536e8;
    }, _0x3f8c(_0x220248, _0x5dfb71);
}
const error1 = new Error('error1');
error1['name'] = _0x2bd438(0x1b2), promise_test(() => {
    const _0x14b48c = _0x2bd438, _0x43c002 = {
            'edEsU': function (_0x56b237, _0xe98274) {
                return _0x56b237 < _0xe98274;
            },
            'XHnSl': function (_0x3ccc16, _0x7b7a8d) {
                return _0x3ccc16(_0x7b7a8d);
            }
        };
    let _0x2d4f7f, _0x202894 = 0x1 * 0x535 + 0x229e + -0x1 * 0x27d3;
    const _0x519168 = new ReadableStream({
        'start'(_0x4faca3) {
            _0x2d4f7f = _0x4faca3;
        }
    }, {
        'size'() {
            const _0x328544 = _0x3f8c;
            return ++_0x202894, _0x43c002['edEsU'](_0x202894, -0x1 * -0x559 + -0x4 * -0x34d + -0x128b) && _0x2d4f7f[_0x328544(0x1b3)]('b'), 0x3 * -0x584 + 0x65c + -0x1 * -0xa31;
        }
    });
    return _0x2d4f7f[_0x14b48c(0x1b3)]('a'), _0x2d4f7f[_0x14b48c(0x1b4)](), _0x43c002['XHnSl'](readableStreamToArray, _0x519168)[_0x14b48c(0x1b5)](_0xae33c1 => assert_array_equals(_0xae33c1, [
        'b',
        'a'
    ], _0x14b48c(0x1b6)));
}, _0x2bd438(0x1b7)), promise_test(() => {
    const _0x115a26 = _0x2bd438, _0x47345f = {
            'QqLUe': function (_0x22eb97, _0x2dfdbc) {
                return _0x22eb97(_0x2dfdbc);
            }
        };
    let _0x283334;
    const _0x5977b3 = new ReadableStream({
        'start'(_0x5c1d3e) {
            _0x283334 = _0x5c1d3e;
        }
    }, {
        'size'() {
            const _0x37457f = _0x3f8c;
            return _0x283334[_0x37457f(0x1b4)](), -0x1cde + -0x60 + 0x1d3f;
        }
    });
    return _0x283334[_0x115a26(0x1b3)]('a'), _0x47345f[_0x115a26(0x1b8)](readableStreamToArray, _0x5977b3)[_0x115a26(0x1b5)](_0x379e3f => assert_array_equals(_0x379e3f, [], _0x115a26(0x1b9)));
}, _0x2bd438(0x1ba)), promise_test(() => {
    const _0x35717e = _0x2bd438, _0x80ab05 = {
            'SVbFs': function (_0x2c1436, _0x260113) {
                return _0x2c1436 === _0x260113;
            }
        };
    let _0x525ff2, _0x30108e = -0x24b1 + 0x1b6d + 0x1 * 0x944;
    const _0x362fc7 = new ReadableStream({
        'start'(_0x28fa72) {
            _0x525ff2 = _0x28fa72;
        }
    }, {
        'size'() {
            const _0x1facf6 = _0x3f8c;
            return ++_0x30108e, _0x80ab05[_0x1facf6(0x1bb)](_0x30108e, 0x1650 * -0x1 + 0x4ee + 0x1164) && _0x525ff2[_0x1facf6(0x1b4)](), 0xab5 + 0x9f7 + 0xb * -0x1e1;
        }
    });
    return _0x525ff2[_0x35717e(0x1b3)]('a'), _0x525ff2[_0x35717e(0x1b3)]('b'), readableStreamToArray(_0x362fc7)[_0x35717e(0x1b5)](_0x47a922 => assert_array_equals(_0x47a922, [
        'a',
        'b'
    ], _0x35717e(0x1b6)));
}, 'close\x20request\x20inside\x20size()\x20should\x20work'), promise_test(_0x121840 => {
    const _0x3d4710 = _0x2bd438, _0xe5c37 = { 'ZRrzh': _0x3d4710(0x1bc) };
    let _0x185857;
    const _0x38401a = new ReadableStream({
        'start'(_0x11966e) {
            _0x185857 = _0x11966e;
        }
    }, {
        'size'() {
            const _0x4cf1bd = _0x3d4710;
            return _0x185857[_0x4cf1bd(0x1bd)](error1), 0x1fdf + 0x94f * 0x1 + -0x292d;
        }
    });
    return _0x185857['enqueue']('a'), promise_rejects_exactly(_0x121840, error1, _0x38401a[_0x3d4710(0x1be)]()[_0x3d4710(0x1bf)](), _0xe5c37[_0x3d4710(0x1c0)]);
}, _0x2bd438(0x1c1)), promise_test(() => {
    const _0x28bf93 = _0x2bd438, _0x270956 = {
            'sLcMT': function (_0x4f3455, _0x3299c8, _0x4c0288, _0x30bcd2) {
                return _0x4f3455(_0x3299c8, _0x4c0288, _0x30bcd2);
            },
            'Zvoum': 'desiredSize\x20should\x20be\x201'
        };
    let _0x2057da;
    const _0x2e9459 = new ReadableStream({
        'start'(_0x298fba) {
            _0x2057da = _0x298fba;
        }
    }, {
        'size'() {
            const _0x3dfa13 = _0x3f8c;
            return _0x270956[_0x3dfa13(0x1c2)](assert_equals, _0x2057da[_0x3dfa13(0x1c3)], -0x2370 + -0x198b + -0x6 * -0xa2a, _0x270956[_0x3dfa13(0x1c4)]), -0x241f + -0x76 * -0xa + -0x4 * -0x7e1;
        },
        'highWaterMark': 0x1
    });
    return _0x2057da['enqueue']('a'), _0x2057da[_0x28bf93(0x1b4)](), readableStreamToArray(_0x2e9459)['then'](_0x3a6362 => assert_array_equals(_0x3a6362, ['a'], 'array\x20should\x20contain\x20one\x20chunk'));
}, _0x2bd438(0x1c5)), promise_test(_0x4cc915 => {
    const _0x21239b = _0x2bd438, _0x42f165 = {
            'yeceC': function (_0x46bb97, _0x3e7c7f, _0x34fb12, _0x1bcc1f) {
                return _0x46bb97(_0x3e7c7f, _0x34fb12, _0x1bcc1f);
            },
            'gmjcH': _0x21239b(0x1c6)
        };
    let _0x1d1683, _0x59f2f5;
    const _0x3de0f2 = new ReadableStream({
        'start'(_0x1f0563) {
            _0x59f2f5 = _0x1f0563;
        },
        'cancel': _0x4cc915[_0x21239b(0x1c7)](_0x2003ed => {
            const _0xf4b9df = _0x21239b;
            _0x42f165[_0xf4b9df(0x1c8)](assert_equals, _0x2003ed, error1, _0xf4b9df(0x1c9)), _0x42f165[_0xf4b9df(0x1c8)](assert_throws_js, TypeError, () => _0x59f2f5[_0xf4b9df(0x1b3)](), _0x42f165['gmjcH']);
        })
    }, {
        'size'() {
            return _0x1d1683 = _0x3de0f2['cancel'](error1), 0x1d60 + -0x1bfb + 0xb2 * -0x2;
        },
        'highWaterMark': Infinity
    });
    _0x59f2f5['enqueue']('a');
    const _0xe1c887 = _0x3de0f2['getReader']();
    return Promise[_0x21239b(0x1ca)]([
        _0xe1c887['closed'],
        _0x1d1683
    ]);
}, _0x2bd438(0x1cb)), promise_test(() => {
    const _0x52697d = _0x2bd438, _0x3247db = {
            'wdTqq': function (_0xcb71de, _0x4107f3, _0x1976b1, _0x1b560f) {
                return _0xcb71de(_0x4107f3, _0x1976b1, _0x1b560f);
            },
            'IHhkf': _0x52697d(0x1cc),
            'qvAHG': _0x52697d(0x1cd),
            'Nisqp': _0x52697d(0x1b4),
            'GmxHx': _0x52697d(0x1ce),
            'gOKBb': function (_0x4ca010) {
                return _0x4ca010();
            },
            'FSLQh': function (_0x5a3855, _0x27cf65, _0xaccae2) {
                return _0x5a3855(_0x27cf65, _0xaccae2);
            }
        };
    let _0x556746, _0x3a2522;
    const _0x5c3f25 = _0x3247db[_0x52697d(0x1cf)](recordingWritableStream), _0x37e631 = new ReadableStream({
            'start'(_0x57a7c8) {
                _0x556746 = _0x57a7c8;
            }
        }, {
            'size'() {
                return !_0x3a2522 && (_0x3a2522 = _0x37e631['pipeTo'](_0x5c3f25)), -0x1 * 0xc27 + 0x258d + -0x1965;
            },
            'highWaterMark': 0x1
        });
    return _0x556746[_0x52697d(0x1b3)]('a'), _0x3247db['FSLQh'](assert_not_equals, _0x3a2522, undefined), _0x556746[_0x52697d(0x1b3)]('a'), delay(0x3 * -0x2da + 0x34 * 0x7 + 0xb * 0xa6)[_0x52697d(0x1b5)](() => {
        const _0xac358a = _0x52697d;
        return _0x3247db[_0xac358a(0x1d0)](assert_array_equals, _0x5c3f25[_0xac358a(0x1d1)], [
            _0x3247db['IHhkf'],
            'a',
            _0x3247db[_0xac358a(0x1d2)],
            'a'
        ], _0x3247db['qvAHG']), _0x556746[_0xac358a(0x1b4)](), _0x3a2522;
    })[_0x52697d(0x1b5)](() => {
        const _0x34838b = _0x52697d;
        assert_array_equals(_0x5c3f25[_0x34838b(0x1d1)], [
            _0x3247db[_0x34838b(0x1d2)],
            'a',
            _0x34838b(0x1cc),
            'a',
            _0x3247db[_0x34838b(0x1d3)]
        ], _0x3247db[_0x34838b(0x1d4)]);
    });
}, _0x2bd438(0x1d5)), promise_test(() => {
    const _0x55c9d9 = _0x2bd438, _0x491f1e = {
            'efQfy': function (_0x133dd5, _0x29d737, _0x2b9500, _0x4351e5) {
                return _0x133dd5(_0x29d737, _0x2b9500, _0x4351e5);
            },
            'WIxJF': 'size()\x20should\x20have\x20been\x20called\x20once',
            'QejFm': function (_0x9f5f45, _0x2cfc79) {
                return _0x9f5f45(_0x2cfc79);
            },
            'vOXCX': function (_0x3aa209, _0x49b86f) {
                return _0x3aa209(_0x49b86f);
            },
            'tfjqa': function (_0xa03af9, _0x3b5859, _0xd0f4d5, _0x37b19c) {
                return _0xa03af9(_0x3b5859, _0xd0f4d5, _0x37b19c);
            },
            'WilaA': _0x55c9d9(0x1d6),
            'dpYUZ': function (_0x5bd792, _0x44397a, _0x15cc7a) {
                return _0x5bd792(_0x44397a, _0x15cc7a);
            },
            'MuAsO': _0x55c9d9(0x1d7),
            'PyUHD': function (_0x21763b, _0x587eac, _0x5afd7c, _0x24e96c) {
                return _0x21763b(_0x587eac, _0x5afd7c, _0x24e96c);
            },
            'ROTAW': _0x55c9d9(0x1d8),
            'cBkrY': _0x55c9d9(0x1d9),
            'KYFjp': function (_0x59decb, _0x3abc74, _0x214776, _0x5bf03c) {
                return _0x59decb(_0x3abc74, _0x214776, _0x5bf03c);
            },
            'rmHdY': _0x55c9d9(0x1da)
        };
    let _0x5902c9, _0x424968, _0x3b6383 = 0x10ff * -0x1 + -0x54b * -0x1 + -0xbb4 * -0x1, _0x390b9a = ![], _0x206b1b;
    const _0xf0ee60 = new ReadableStream({
        'start'(_0x3bc5fa) {
            _0x5902c9 = _0x3bc5fa;
        }
    }, {
        'size'() {
            const _0x557d0f = _0x55c9d9;
            return _0x424968 = _0x206b1b[_0x557d0f(0x1bf)](), ++_0x3b6383, -0xa96 + 0x111a + -0x683;
        },
        'highWaterMark': 0x0
    });
    return _0x206b1b = _0xf0ee60[_0x55c9d9(0x1be)](), _0x5902c9[_0x55c9d9(0x1b3)]('a'), _0x424968[_0x55c9d9(0x1b5)](() => {
        _0x390b9a = !![];
    }), flushAsyncEvents()['then'](() => {
        const _0x423c4b = _0x55c9d9;
        return assert_false(_0x390b9a), _0x5902c9[_0x423c4b(0x1b3)]('b'), _0x491f1e[_0x423c4b(0x1db)](assert_equals, _0x3b6383, 0x25bb + -0x17 * -0x68 + -0xa * 0x4b5, _0x491f1e[_0x423c4b(0x1dc)]), _0x491f1e[_0x423c4b(0x1dd)](delay, 0x17e9 * 0x1 + 0xf1c + -0x1 * 0x2705);
    })[_0x55c9d9(0x1b5)](() => {
        const _0x1d68c = _0x55c9d9;
        return _0x491f1e[_0x1d68c(0x1de)](assert_true, _0x390b9a), _0x491f1e[_0x1d68c(0x1df)](assert_equals, _0x3b6383, 0x1f24 * -0x1 + 0x1 * 0x1bd2 + 0x353, _0x491f1e[_0x1d68c(0x1e0)]), _0x424968;
    })[_0x55c9d9(0x1b5)](({
        value: _0x4c0568,
        done: _0x13adb2
    }) => {
        const _0x185d0e = _0x55c9d9;
        return _0x491f1e[_0x185d0e(0x1e1)](assert_false, _0x13adb2, 'done\x20should\x20be\x20false'), assert_equals(_0x4c0568, 'b', _0x491f1e[_0x185d0e(0x1e2)]), _0x491f1e['PyUHD'](assert_equals, _0x3b6383, -0x24b6 + 0x3f6 + 0x20c1, _0x491f1e[_0x185d0e(0x1e3)]), _0x206b1b[_0x185d0e(0x1bf)]();
    })[_0x55c9d9(0x1b5)](({
        value: _0x5a7cc0,
        done: _0x2db361
    }) => {
        const _0xcace03 = _0x55c9d9;
        _0x491f1e[_0xcace03(0x1e1)](assert_false, _0x2db361, _0x491f1e['cBkrY']), _0x491f1e[_0xcace03(0x1e4)](assert_equals, _0x5a7cc0, 'a', _0x491f1e['rmHdY']);
    });
}, _0x2bd438(0x1e5)), promise_test(() => {
    const _0x5d7e8a = _0x2bd438, _0x288f1a = {
            'LAYqD': _0x5d7e8a(0x1e6),
            'aSEou': function (_0x1d2532, _0x4a7c61, _0x3d13bd, _0x1413b5) {
                return _0x1d2532(_0x4a7c61, _0x3d13bd, _0x1413b5);
            },
            'YrXec': _0x5d7e8a(0x1e7)
        };
    let _0x1029df, _0x5a51a9;
    const _0x2e2f5a = new ReadableStream({
        'start'(_0x152f1e) {
            _0x1029df = _0x152f1e;
        }
    }, {
        'size'() {
            return _0x5a51a9 = _0x2e2f5a['getReader'](), 0x3e * 0x75 + 0xde6 + 0x13 * -0x239;
        }
    });
    return _0x1029df[_0x5d7e8a(0x1b3)]('a'), _0x5a51a9['read']()[_0x5d7e8a(0x1b5)](({
        value: _0x20a3fb,
        done: _0x8e2c05
    }) => {
        const _0x543e8f = _0x5d7e8a;
        assert_false(_0x8e2c05, _0x288f1a[_0x543e8f(0x1e8)]), _0x288f1a['aSEou'](assert_equals, _0x20a3fb, 'a', _0x288f1a[_0x543e8f(0x1e9)]);
    });
}, _0x2bd438(0x1ea)), promise_test(() => {
    const _0x59b3ec = _0x2bd438, _0x3a1c69 = {
            'LSepy': function (_0xc2b696, _0x1df336, _0x40b44d) {
                return _0xc2b696(_0x1df336, _0x40b44d);
            },
            'gdQgg': _0x59b3ec(0x1eb)
        };
    let _0x2e40d2, _0x4e1bf0, _0x16fec6;
    const _0x3f67e1 = new ReadableStream({
        'start'(_0x22c190) {
            _0x2e40d2 = _0x22c190;
        }
    }, {
        'size'() {
            const _0x3e1285 = _0x59b3ec;
            return [_0x4e1bf0, _0x16fec6] = _0x3f67e1[_0x3e1285(0x1ec)](), 0x182 * -0x8 + 0x1502 + -0x8f1;
        }
    });
    return _0x2e40d2[_0x59b3ec(0x1b3)]('a'), _0x3a1c69[_0x59b3ec(0x1ed)](assert_true, _0x3f67e1[_0x59b3ec(0x1ee)], _0x3a1c69[_0x59b3ec(0x1ef)]), _0x2e40d2[_0x59b3ec(0x1b4)](), Promise[_0x59b3ec(0x1ca)]([
        readableStreamToArray(_0x4e1bf0)['then'](_0x3dcaac => assert_array_equals(_0x3dcaac, ['a'], _0x59b3ec(0x1f0))),
        readableStreamToArray(_0x16fec6)['then'](_0x3c0f4f => assert_array_equals(_0x3c0f4f, ['a'], _0x59b3ec(0x1f1)))
    ]);
}, _0x2bd438(0x1f2));
