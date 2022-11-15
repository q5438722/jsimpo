const error1 = new Error('error1');
function _0x1638(_0x154e97, _0x2ca700) {
    return _0x1638 = function (_0x1837ae, _0x163839) {
        _0x1837ae = _0x1837ae - 341;
        let _0x417edf = _0x1837[_0x1837ae];
        return _0x417edf;
    }, _0x1638(_0x154e97, _0x2ca700);
}
error1[_0xbbcb76(354)] = 'error1', promise_test(() => {
    const _0x4f15f4 = _0xbbcb76;
    let _0x3d75df, _0x183f6f = 0;
    const _0x109b6d = new ReadableStream({
        'start'(_0x24f9d5) {
            _0x3d75df = _0x24f9d5;
        }
    }, {
        'size'() {
            const _0x285fbd = _0x1638;
            return ++_0x183f6f, _0x183f6f < 2 && _0x3d75df[_0x285fbd(355)]('b'), 1;
        }
    });
    return _0x3d75df['enqueue']('a'), _0x3d75df[_0x4f15f4(356)](), readableStreamToArray(_0x109b6d)[_0x4f15f4(357)](_0x5e3351 => assert_array_equals(_0x5e3351, [
        'b',
        'a'
    ], _0x4f15f4(358)));
}, 'enqueue() inside size() should work'), promise_test(() => {
    const _0x5f0840 = _0xbbcb76;
    let _0x29c07c;
    const _0x18f96d = new ReadableStream({
        'start'(_0x201286) {
            _0x29c07c = _0x201286;
        }
    }, {
        'size'() {
            const _0x5643fe = _0x1638;
            return _0x29c07c[_0x5643fe(356)](), 1;
        }
    });
    return _0x29c07c[_0x5f0840(355)]('a'), readableStreamToArray(_0x18f96d)[_0x5f0840(357)](_0x1864df => assert_array_equals(_0x1864df, [], _0x5f0840(359)));
}, _0xbbcb76(360)), promise_test(() => {
    const _0x179aa8 = _0xbbcb76;
    let _0x174e47, _0x3027d7 = 0;
    const _0x3bd225 = new ReadableStream({
        'start'(_0x10198f) {
            _0x174e47 = _0x10198f;
        }
    }, {
        'size'() {
            const _0x280cd6 = _0x1638;
            return ++_0x3027d7, _0x3027d7 === 2 && _0x174e47[_0x280cd6(356)](), 1;
        }
    });
    return _0x174e47['enqueue']('a'), _0x174e47[_0x179aa8(355)]('b'), readableStreamToArray(_0x3bd225)[_0x179aa8(357)](_0xaea9ff => assert_array_equals(_0xaea9ff, [
        'a',
        'b'
    ], 'array should contain two chunks'));
}, _0xbbcb76(361)), promise_test(_0x1f7f90 => {
    const _0x3cf9e4 = _0xbbcb76;
    let _0xb5cc05;
    const _0x485853 = new ReadableStream({
        'start'(_0xe93ee3) {
            _0xb5cc05 = _0xe93ee3;
        }
    }, {
        'size'() {
            const _0x2f5cd9 = _0x1638;
            return _0xb5cc05[_0x2f5cd9(362)](error1), 1;
        }
    });
    return _0xb5cc05[_0x3cf9e4(355)]('a'), promise_rejects_exactly(_0x1f7f90, error1, _0x485853['getReader']()[_0x3cf9e4(363)](), _0x3cf9e4(364));
}, _0xbbcb76(365)), promise_test(() => {
    const _0x30c2e9 = _0xbbcb76;
    let _0x4e70ac;
    const _0x5942f9 = new ReadableStream({
        'start'(_0x1cbeaa) {
            _0x4e70ac = _0x1cbeaa;
        }
    }, {
        'size'() {
            const _0x535d02 = _0x1638;
            return assert_equals(_0x4e70ac[_0x535d02(366)], 1, _0x535d02(367)), 1;
        },
        'highWaterMark': 1
    });
    return _0x4e70ac[_0x30c2e9(355)]('a'), _0x4e70ac['close'](), readableStreamToArray(_0x5942f9)[_0x30c2e9(357)](_0x413edb => assert_array_equals(_0x413edb, ['a'], _0x30c2e9(368)));
}, _0xbbcb76(369)), promise_test(_0x2de4b1 => {
    const _0x4d1b6e = _0xbbcb76;
    let _0x472e3f, _0x317469;
    const _0x1a617d = new ReadableStream({
        'start'(_0xc73ad) {
            _0x317469 = _0xc73ad;
        },
        'cancel': _0x2de4b1[_0x4d1b6e(370)](_0x3c98b7 => {
            const _0x4cab7a = _0x4d1b6e;
            assert_equals(_0x3c98b7, error1, _0x4cab7a(371)), assert_throws_js(TypeError, () => _0x317469['enqueue'](), _0x4cab7a(372));
        })
    }, {
        'size'() {
            const _0x14d149 = _0x4d1b6e;
            return _0x472e3f = _0x1a617d[_0x14d149(373)](error1), 1;
        },
        'highWaterMark': Infinity
    });
    _0x317469[_0x4d1b6e(355)]('a');
    const _0x18a260 = _0x1a617d[_0x4d1b6e(374)]();
    return Promise['all']([
        _0x18a260[_0x4d1b6e(375)],
        _0x472e3f
    ]);
}, _0xbbcb76(376)), promise_test(() => {
    const _0x578d7b = _0xbbcb76;
    let _0x526807, _0x128495;
    const _0x38d412 = recordingWritableStream(), _0x11aa58 = new ReadableStream({
            'start'(_0x4416b7) {
                _0x526807 = _0x4416b7;
            }
        }, {
            'size'() {
                const _0x3625b0 = _0x1638;
                return !_0x128495 && (_0x128495 = _0x11aa58[_0x3625b0(377)](_0x38d412)), 1;
            },
            'highWaterMark': 1
        });
    return _0x526807[_0x578d7b(355)]('a'), assert_not_equals(_0x128495, undefined), _0x526807['enqueue']('a'), delay(0)['then'](() => {
        const _0x3e7cf5 = _0x578d7b;
        return assert_array_equals(_0x38d412[_0x3e7cf5(378)], [
            _0x3e7cf5(379),
            'a',
            'write',
            'a'
        ], _0x3e7cf5(380)), _0x526807['close'](), _0x128495;
    })[_0x578d7b(357)](() => {
        const _0x3d6822 = _0x578d7b;
        assert_array_equals(_0x38d412[_0x3d6822(378)], [
            'write',
            'a',
            'write',
            'a',
            'close'
        ], _0x3d6822(381));
    });
}, 'pipeTo() inside size() should behave as expected'), promise_test(() => {
    const _0x35cd16 = _0xbbcb76;
    let _0x3f7711, _0x3d86e0, _0x1ceee6 = 0, _0x449ff8 = ![], _0x1e1e9d;
    const _0x4f0737 = new ReadableStream({
        'start'(_0x4f3442) {
            _0x3f7711 = _0x4f3442;
        }
    }, {
        'size'() {
            const _0x510470 = _0x1638;
            return _0x3d86e0 = _0x1e1e9d[_0x510470(363)](), ++_0x1ceee6, 1;
        },
        'highWaterMark': 0
    });
    return _0x1e1e9d = _0x4f0737['getReader'](), _0x3f7711[_0x35cd16(355)]('a'), _0x3d86e0[_0x35cd16(357)](() => {
        _0x449ff8 = !![];
    }), flushAsyncEvents()[_0x35cd16(357)](() => {
        const _0x4a062b = _0x35cd16;
        return assert_false(_0x449ff8), _0x3f7711[_0x4a062b(355)]('b'), assert_equals(_0x1ceee6, 1, _0x4a062b(382)), delay(0);
    })[_0x35cd16(357)](() => {
        const _0x702cb = _0x35cd16;
        return assert_true(_0x449ff8), assert_equals(_0x1ceee6, 1, _0x702cb(383)), _0x3d86e0;
    })['then'](({
        value: _0x25bba1,
        done: _0x1a5e0a
    }) => {
        const _0xa004f4 = _0x35cd16;
        return assert_false(_0x1a5e0a, 'done should be false'), assert_equals(_0x25bba1, 'b', _0xa004f4(384)), assert_equals(_0x1ceee6, 1, 'calls should still be 1'), _0x1e1e9d['read']();
    })[_0x35cd16(357)](({
        value: _0x4385e9,
        done: _0x332448
    }) => {
        const _0x2ea520 = _0x35cd16;
        assert_false(_0x332448, _0x2ea520(385)), assert_equals(_0x4385e9, 'a', _0x2ea520(386));
    });
}, 'read() inside of size() should behave as expected'), promise_test(() => {
    const _0x403314 = _0xbbcb76;
    let _0x17c46c, _0x7c5683;
    const _0x1f0caf = new ReadableStream({
        'start'(_0x4588c5) {
            _0x17c46c = _0x4588c5;
        }
    }, {
        'size'() {
            return _0x7c5683 = _0x1f0caf['getReader'](), 1;
        }
    });
    return _0x17c46c[_0x403314(355)]('a'), _0x7c5683['read']()[_0x403314(357)](({
        value: _0x415928,
        done: _0x3184ae
    }) => {
        const _0x3b9e04 = _0x403314;
        assert_false(_0x3184ae, _0x3b9e04(387)), assert_equals(_0x415928, 'a', _0x3b9e04(388));
    });
}, _0xbbcb76(389)), promise_test(() => {
    const _0x338392 = _0xbbcb76;
    let _0x25ff88, _0xfe0ed6, _0x1e8c1b;
    const _0x4240f0 = new ReadableStream({
        'start'(_0x46441e) {
            _0x25ff88 = _0x46441e;
        }
    }, {
        'size'() {
            return [_0xfe0ed6, _0x1e8c1b] = _0x4240f0['tee'](), 1;
        }
    });
    return _0x25ff88[_0x338392(355)]('a'), assert_true(_0x4240f0[_0x338392(390)], _0x338392(391)), _0x25ff88['close'](), Promise['all']([
        readableStreamToArray(_0xfe0ed6)['then'](_0x3ce053 => assert_array_equals(_0x3ce053, ['a'], _0x338392(392))),
        readableStreamToArray(_0x1e8c1b)[_0x338392(357)](_0x2bcbc7 => assert_array_equals(_0x2bcbc7, ['a'], _0x338392(393)))
    ]);
}, _0xbbcb76(394));