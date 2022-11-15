'use strict';
const _0x1837 = [
    'close',
    'then',
    'array\x20should\x20contain\x20two\x20chunks',
    'array\x20should\x20contain\x20no\x20chunks',
    'close()\x20inside\x20size()\x20should\x20not\x20crash',
    'close\x20request\x20inside\x20size()\x20should\x20work',
    'error',
    'read',
    'read()\x20should\x20reject',
    'error()\x20inside\x20size()\x20should\x20work',
    'desiredSize',
    'desiredSize\x20should\x20be\x201',
    'array\x20should\x20contain\x20one\x20chunk',
    'desiredSize\x20inside\x20size()\x20should\x20work',
    'step_func',
    'reason\x20should\x20be\x20error1',
    'enqueue()\x20should\x20throw',
    'cancel',
    'getReader',
    'closed',
    'cancel()\x20inside\x20size()\x20should\x20work',
    'pipeTo',
    'events',
    'write',
    'ws\x20should\x20contain\x20two\x20chunks',
    'target\x20should\x20have\x20been\x20closed',
    'size()\x20should\x20have\x20been\x20called\x20once',
    'size()\x20should\x20only\x20be\x20called\x20once',
    'chunk\x20should\x20have\x20been\x20read',
    'done\x20should\x20be\x20false\x20again',
    'chunk\x20a\x20should\x20come\x20after\x20b',
    'done\x20should\x20be\x20false',
    'value\x20should\x20be\x20a',
    'getReader()\x20inside\x20size()\x20should\x20work',
    'locked',
    'rs\x20should\x20be\x20locked',
    'branch1\x20should\x20have\x20one\x20chunk',
    'branch2\x20should\x20have\x20one\x20chunk',
    'tee()\x20inside\x20size()\x20should\x20work',
    '1073327XHSTjF',
    '1iVyYCp',
    '2GKytUy',
    '267598hACNTK',
    '2HeMZwU',
    '155579sVUzgq',
    '1079XseiqP',
    '256XupBVc',
    '708827OLzUQH',
    '637062TpFfJw',
    '1ebbeBh',
    '1459jFpcBY',
    '2015RePDMN',
    'name',
    'enqueue'
];
const _0xbbcb76 = _0x1638;
(function (_0x18d554, _0x56a6f4) {
    const _0x200a6c = _0x1638;
    while (!![]) {
        try {
            const _0x17ed04 = parseInt(_0x200a6c(0x155)) * -parseInt(_0x200a6c(0x156)) + parseInt(_0x200a6c(0x157)) * -parseInt(_0x200a6c(0x158)) + -parseInt(_0x200a6c(0x159)) * -parseInt(_0x200a6c(0x15a)) + -parseInt(_0x200a6c(0x15b)) * -parseInt(_0x200a6c(0x15c)) + -parseInt(_0x200a6c(0x15d)) + -parseInt(_0x200a6c(0x15e)) * parseInt(_0x200a6c(0x15f)) + parseInt(_0x200a6c(0x160)) * parseInt(_0x200a6c(0x161));
            if (_0x17ed04 === _0x56a6f4)
                break;
            else
                _0x18d554['push'](_0x18d554['shift']());
        } catch (_0x119f6b) {
            _0x18d554['push'](_0x18d554['shift']());
        }
    }
}(_0x1837, 0x8bdb7));
const error1 = new Error('error1');
function _0x1638(_0x154e97, _0x2ca700) {
    return _0x1638 = function (_0x1837ae, _0x163839) {
        _0x1837ae = _0x1837ae - 0x155;
        let _0x417edf = _0x1837[_0x1837ae];
        return _0x417edf;
    }, _0x1638(_0x154e97, _0x2ca700);
}
error1[_0xbbcb76(0x162)] = 'error1', promise_test(() => {
    const _0x4f15f4 = _0xbbcb76;
    let _0x3d75df, _0x183f6f = 0x0;
    const _0x109b6d = new ReadableStream({
        'start'(_0x24f9d5) {
            _0x3d75df = _0x24f9d5;
        }
    }, {
        'size'() {
            const _0x285fbd = _0x1638;
            return ++_0x183f6f, _0x183f6f < 0x2 && _0x3d75df[_0x285fbd(0x163)]('b'), 0x1;
        }
    });
    return _0x3d75df['enqueue']('a'), _0x3d75df[_0x4f15f4(0x164)](), readableStreamToArray(_0x109b6d)[_0x4f15f4(0x165)](_0x5e3351 => assert_array_equals(_0x5e3351, [
        'b',
        'a'
    ], _0x4f15f4(0x166)));
}, 'enqueue()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    const _0x5f0840 = _0xbbcb76;
    let _0x29c07c;
    const _0x18f96d = new ReadableStream({
        'start'(_0x201286) {
            _0x29c07c = _0x201286;
        }
    }, {
        'size'() {
            const _0x5643fe = _0x1638;
            return _0x29c07c[_0x5643fe(0x164)](), 0x1;
        }
    });
    return _0x29c07c[_0x5f0840(0x163)]('a'), readableStreamToArray(_0x18f96d)[_0x5f0840(0x165)](_0x1864df => assert_array_equals(_0x1864df, [], _0x5f0840(0x167)));
}, _0xbbcb76(0x168)), promise_test(() => {
    const _0x179aa8 = _0xbbcb76;
    let _0x174e47, _0x3027d7 = 0x0;
    const _0x3bd225 = new ReadableStream({
        'start'(_0x10198f) {
            _0x174e47 = _0x10198f;
        }
    }, {
        'size'() {
            const _0x280cd6 = _0x1638;
            return ++_0x3027d7, _0x3027d7 === 0x2 && _0x174e47[_0x280cd6(0x164)](), 0x1;
        }
    });
    return _0x174e47['enqueue']('a'), _0x174e47[_0x179aa8(0x163)]('b'), readableStreamToArray(_0x3bd225)[_0x179aa8(0x165)](_0xaea9ff => assert_array_equals(_0xaea9ff, [
        'a',
        'b'
    ], 'array\x20should\x20contain\x20two\x20chunks'));
}, _0xbbcb76(0x169)), promise_test(_0x1f7f90 => {
    const _0x3cf9e4 = _0xbbcb76;
    let _0xb5cc05;
    const _0x485853 = new ReadableStream({
        'start'(_0xe93ee3) {
            _0xb5cc05 = _0xe93ee3;
        }
    }, {
        'size'() {
            const _0x2f5cd9 = _0x1638;
            return _0xb5cc05[_0x2f5cd9(0x16a)](error1), 0x1;
        }
    });
    return _0xb5cc05[_0x3cf9e4(0x163)]('a'), promise_rejects_exactly(_0x1f7f90, error1, _0x485853['getReader']()[_0x3cf9e4(0x16b)](), _0x3cf9e4(0x16c));
}, _0xbbcb76(0x16d)), promise_test(() => {
    const _0x30c2e9 = _0xbbcb76;
    let _0x4e70ac;
    const _0x5942f9 = new ReadableStream({
        'start'(_0x1cbeaa) {
            _0x4e70ac = _0x1cbeaa;
        }
    }, {
        'size'() {
            const _0x535d02 = _0x1638;
            return assert_equals(_0x4e70ac[_0x535d02(0x16e)], 0x1, _0x535d02(0x16f)), 0x1;
        },
        'highWaterMark': 0x1
    });
    return _0x4e70ac[_0x30c2e9(0x163)]('a'), _0x4e70ac['close'](), readableStreamToArray(_0x5942f9)[_0x30c2e9(0x165)](_0x413edb => assert_array_equals(_0x413edb, ['a'], _0x30c2e9(0x170)));
}, _0xbbcb76(0x171)), promise_test(_0x2de4b1 => {
    const _0x4d1b6e = _0xbbcb76;
    let _0x472e3f, _0x317469;
    const _0x1a617d = new ReadableStream({
        'start'(_0xc73ad) {
            _0x317469 = _0xc73ad;
        },
        'cancel': _0x2de4b1[_0x4d1b6e(0x172)](_0x3c98b7 => {
            const _0x4cab7a = _0x4d1b6e;
            assert_equals(_0x3c98b7, error1, _0x4cab7a(0x173)), assert_throws_js(TypeError, () => _0x317469['enqueue'](), _0x4cab7a(0x174));
        })
    }, {
        'size'() {
            const _0x14d149 = _0x4d1b6e;
            return _0x472e3f = _0x1a617d[_0x14d149(0x175)](error1), 0x1;
        },
        'highWaterMark': Infinity
    });
    _0x317469[_0x4d1b6e(0x163)]('a');
    const _0x18a260 = _0x1a617d[_0x4d1b6e(0x176)]();
    return Promise['all']([
        _0x18a260[_0x4d1b6e(0x177)],
        _0x472e3f
    ]);
}, _0xbbcb76(0x178)), promise_test(() => {
    const _0x578d7b = _0xbbcb76;
    let _0x526807, _0x128495;
    const _0x38d412 = recordingWritableStream(), _0x11aa58 = new ReadableStream({
            'start'(_0x4416b7) {
                _0x526807 = _0x4416b7;
            }
        }, {
            'size'() {
                const _0x3625b0 = _0x1638;
                return !_0x128495 && (_0x128495 = _0x11aa58[_0x3625b0(0x179)](_0x38d412)), 0x1;
            },
            'highWaterMark': 0x1
        });
    return _0x526807[_0x578d7b(0x163)]('a'), assert_not_equals(_0x128495, undefined), _0x526807['enqueue']('a'), delay(0x0)['then'](() => {
        const _0x3e7cf5 = _0x578d7b;
        return assert_array_equals(_0x38d412[_0x3e7cf5(0x17a)], [
            _0x3e7cf5(0x17b),
            'a',
            'write',
            'a'
        ], _0x3e7cf5(0x17c)), _0x526807['close'](), _0x128495;
    })[_0x578d7b(0x165)](() => {
        const _0x3d6822 = _0x578d7b;
        assert_array_equals(_0x38d412[_0x3d6822(0x17a)], [
            'write',
            'a',
            'write',
            'a',
            'close'
        ], _0x3d6822(0x17d));
    });
}, 'pipeTo()\x20inside\x20size()\x20should\x20behave\x20as\x20expected'), promise_test(() => {
    const _0x35cd16 = _0xbbcb76;
    let _0x3f7711, _0x3d86e0, _0x1ceee6 = 0x0, _0x449ff8 = ![], _0x1e1e9d;
    const _0x4f0737 = new ReadableStream({
        'start'(_0x4f3442) {
            _0x3f7711 = _0x4f3442;
        }
    }, {
        'size'() {
            const _0x510470 = _0x1638;
            return _0x3d86e0 = _0x1e1e9d[_0x510470(0x16b)](), ++_0x1ceee6, 0x1;
        },
        'highWaterMark': 0x0
    });
    return _0x1e1e9d = _0x4f0737['getReader'](), _0x3f7711[_0x35cd16(0x163)]('a'), _0x3d86e0[_0x35cd16(0x165)](() => {
        _0x449ff8 = !![];
    }), flushAsyncEvents()[_0x35cd16(0x165)](() => {
        const _0x4a062b = _0x35cd16;
        return assert_false(_0x449ff8), _0x3f7711[_0x4a062b(0x163)]('b'), assert_equals(_0x1ceee6, 0x1, _0x4a062b(0x17e)), delay(0x0);
    })[_0x35cd16(0x165)](() => {
        const _0x702cb = _0x35cd16;
        return assert_true(_0x449ff8), assert_equals(_0x1ceee6, 0x1, _0x702cb(0x17f)), _0x3d86e0;
    })['then'](({
        value: _0x25bba1,
        done: _0x1a5e0a
    }) => {
        const _0xa004f4 = _0x35cd16;
        return assert_false(_0x1a5e0a, 'done\x20should\x20be\x20false'), assert_equals(_0x25bba1, 'b', _0xa004f4(0x180)), assert_equals(_0x1ceee6, 0x1, 'calls\x20should\x20still\x20be\x201'), _0x1e1e9d['read']();
    })[_0x35cd16(0x165)](({
        value: _0x4385e9,
        done: _0x332448
    }) => {
        const _0x2ea520 = _0x35cd16;
        assert_false(_0x332448, _0x2ea520(0x181)), assert_equals(_0x4385e9, 'a', _0x2ea520(0x182));
    });
}, 'read()\x20inside\x20of\x20size()\x20should\x20behave\x20as\x20expected'), promise_test(() => {
    const _0x403314 = _0xbbcb76;
    let _0x17c46c, _0x7c5683;
    const _0x1f0caf = new ReadableStream({
        'start'(_0x4588c5) {
            _0x17c46c = _0x4588c5;
        }
    }, {
        'size'() {
            return _0x7c5683 = _0x1f0caf['getReader'](), 0x1;
        }
    });
    return _0x17c46c[_0x403314(0x163)]('a'), _0x7c5683['read']()[_0x403314(0x165)](({
        value: _0x415928,
        done: _0x3184ae
    }) => {
        const _0x3b9e04 = _0x403314;
        assert_false(_0x3184ae, _0x3b9e04(0x183)), assert_equals(_0x415928, 'a', _0x3b9e04(0x184));
    });
}, _0xbbcb76(0x185)), promise_test(() => {
    const _0x338392 = _0xbbcb76;
    let _0x25ff88, _0xfe0ed6, _0x1e8c1b;
    const _0x4240f0 = new ReadableStream({
        'start'(_0x46441e) {
            _0x25ff88 = _0x46441e;
        }
    }, {
        'size'() {
            return [_0xfe0ed6, _0x1e8c1b] = _0x4240f0['tee'](), 0x1;
        }
    });
    return _0x25ff88[_0x338392(0x163)]('a'), assert_true(_0x4240f0[_0x338392(0x186)], _0x338392(0x187)), _0x25ff88['close'](), Promise['all']([
        readableStreamToArray(_0xfe0ed6)['then'](_0x3ce053 => assert_array_equals(_0x3ce053, ['a'], _0x338392(0x188))),
        readableStreamToArray(_0x1e8c1b)[_0x338392(0x165)](_0x2bcbc7 => assert_array_equals(_0x2bcbc7, ['a'], _0x338392(0x189)))
    ]);
}, _0xbbcb76(0x18a));
