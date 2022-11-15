'use strict';
const error1 = new Error('error1');
error1['name'] = 'error1', promise_test(() => {
    let _0x59c4c2, _0x4fc96d = -0x1e97 * 0x1 + -0x17f4 + 0x368b;
    const _0x4f0740 = new ReadableStream({
        'start'(_0x8564bf) {
            _0x59c4c2 = _0x8564bf;
        }
    }, {
        'size'() {
            return ++_0x4fc96d, _0x4fc96d < 0x1 * -0x22a + 0x1306 + -0x10da && _0x59c4c2['enqueue']('b'), -0xee4 + -0x5c * 0x3f + -0x2589 * -0x1;
        }
    });
    return _0x59c4c2['enqueue']('a'), _0x59c4c2['close'](), readableStreamToArray(_0x4f0740)['then'](_0x3f6b61 => assert_array_equals(_0x3f6b61, [
        'b',
        'a'
    ], 'array\x20should\x20contain\x20two\x20chunks'));
}, 'enqueue()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    let _0x2e8693;
    const _0x4b5c10 = new ReadableStream({
        'start'(_0x2a364d) {
            _0x2e8693 = _0x2a364d;
        }
    }, {
        'size'() {
            return _0x2e8693['close'](), -0x13dc + -0x16f9 * -0x1 + 0xc7 * -0x4;
        }
    });
    return _0x2e8693['enqueue']('a'), readableStreamToArray(_0x4b5c10)['then'](_0x15b3db => assert_array_equals(_0x15b3db, [], 'array\x20should\x20contain\x20no\x20chunks'));
}, 'close()\x20inside\x20size()\x20should\x20not\x20crash'), promise_test(() => {
    let _0x2b6141, _0x1e9fe2 = 0x22a7 + 0x31 * 0x75 + -0x390c;
    const _0x752a13 = new ReadableStream({
        'start'(_0x4881af) {
            _0x2b6141 = _0x4881af;
        }
    }, {
        'size'() {
            return ++_0x1e9fe2, _0x1e9fe2 === -0xac1 * -0x3 + -0x10 * -0x1f2 + -0x3f61 && _0x2b6141['close'](), -0x1a60 + 0x4 * -0x700 + -0x3661 * -0x1;
        }
    });
    return _0x2b6141['enqueue']('a'), _0x2b6141['enqueue']('b'), readableStreamToArray(_0x752a13)['then'](_0x3c8693 => assert_array_equals(_0x3c8693, [
        'a',
        'b'
    ], 'array\x20should\x20contain\x20two\x20chunks'));
}, 'close\x20request\x20inside\x20size()\x20should\x20work'), promise_test(_0x2b920a => {
    let _0x5bd9c7;
    const _0x5bfd39 = new ReadableStream({
        'start'(_0x274fb5) {
            _0x5bd9c7 = _0x274fb5;
        }
    }, {
        'size'() {
            return _0x5bd9c7['error'](error1), 0x1d74 + -0xb8e + -0x11e5;
        }
    });
    return _0x5bd9c7['enqueue']('a'), promise_rejects_exactly(_0x2b920a, error1, _0x5bfd39['getReader']()['read'](), 'read()\x20should\x20reject');
}, 'error()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    let _0x446fb7;
    const _0x3a9dd6 = new ReadableStream({
        'start'(_0x46e1d2) {
            _0x446fb7 = _0x46e1d2;
        }
    }, {
        'size'() {
            return assert_equals(_0x446fb7['desiredSize'], -0x22e7 + 0x1 * -0x907 + 0x2bef, 'desiredSize\x20should\x20be\x201'), 0x83c * 0x2 + 0x13 * 0x63 + -0x17d0;
        },
        'highWaterMark': 0x1
    });
    return _0x446fb7['enqueue']('a'), _0x446fb7['close'](), readableStreamToArray(_0x3a9dd6)['then'](_0x404d13 => assert_array_equals(_0x404d13, ['a'], 'array\x20should\x20contain\x20one\x20chunk'));
}, 'desiredSize\x20inside\x20size()\x20should\x20work'), promise_test(_0x4e583f => {
    let _0x223f7b, _0x3dcd71;
    const _0x2121a3 = new ReadableStream({
        'start'(_0x2cec97) {
            _0x3dcd71 = _0x2cec97;
        },
        'cancel': _0x4e583f['step_func'](_0x36658e => {
            assert_equals(_0x36658e, error1, 'reason\x20should\x20be\x20error1'), assert_throws_js(TypeError, () => _0x3dcd71['enqueue'](), 'enqueue()\x20should\x20throw');
        })
    }, {
        'size'() {
            return _0x223f7b = _0x2121a3['cancel'](error1), 0x2d7 * -0x2 + 0x1 * 0x1b84 + 0x26d * -0x9;
        },
        'highWaterMark': Infinity
    });
    _0x3dcd71['enqueue']('a');
    const _0x204935 = _0x2121a3['getReader']();
    return Promise['all']([
        _0x204935['closed'],
        _0x223f7b
    ]);
}, 'cancel()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    let _0x3074f6, _0x5d3430;
    const _0x26bc71 = recordingWritableStream(), _0x5bc3e4 = new ReadableStream({
            'start'(_0x274363) {
                _0x3074f6 = _0x274363;
            }
        }, {
            'size'() {
                return !_0x5d3430 && (_0x5d3430 = _0x5bc3e4['pipeTo'](_0x26bc71)), -0x2448 + -0x136d + -0x1 * -0x37b6;
            },
            'highWaterMark': 0x1
        });
    return _0x3074f6['enqueue']('a'), assert_not_equals(_0x5d3430, undefined), _0x3074f6['enqueue']('a'), delay(-0xd67 + 0x885 + 0x4e2)['then'](() => {
        return assert_array_equals(_0x26bc71['events'], [
            'write',
            'a',
            'write',
            'a'
        ], 'ws\x20should\x20contain\x20two\x20chunks'), _0x3074f6['close'](), _0x5d3430;
    })['then'](() => {
        assert_array_equals(_0x26bc71['events'], [
            'write',
            'a',
            'write',
            'a',
            'close'
        ], 'target\x20should\x20have\x20been\x20closed');
    });
}, 'pipeTo()\x20inside\x20size()\x20should\x20behave\x20as\x20expected'), promise_test(() => {
    let _0x4ee1fe, _0x3d295c, _0x4b548f = 0x79 * 0x15 + 0x26e1 * 0x1 + -0x30ce, _0x169d71 = ![], _0x1d6fdc;
    const _0x3d68d2 = new ReadableStream({
        'start'(_0x35185b) {
            _0x4ee1fe = _0x35185b;
        }
    }, {
        'size'() {
            return _0x3d295c = _0x1d6fdc['read'](), ++_0x4b548f, 0x5bb + 0x17d + 0x1 * -0x737;
        },
        'highWaterMark': 0x0
    });
    return _0x1d6fdc = _0x3d68d2['getReader'](), _0x4ee1fe['enqueue']('a'), _0x3d295c['then'](() => {
        _0x169d71 = !![];
    }), flushAsyncEvents()['then'](() => {
        return assert_false(_0x169d71), _0x4ee1fe['enqueue']('b'), assert_equals(_0x4b548f, 0x2121 + 0x5 * -0x434 + -0xc1c, 'size()\x20should\x20have\x20been\x20called\x20once'), delay(0x20a0 + -0x17e + -0x1f22);
    })['then'](() => {
        return assert_true(_0x169d71), assert_equals(_0x4b548f, -0x16d1 + 0x1642 + 0x1 * 0x90, 'size()\x20should\x20only\x20be\x20called\x20once'), _0x3d295c;
    })['then'](({
        value: _0x48c761,
        done: _0x388050
    }) => {
        return assert_false(_0x388050, 'done\x20should\x20be\x20false'), assert_equals(_0x48c761, 'b', 'chunk\x20should\x20have\x20been\x20read'), assert_equals(_0x4b548f, 0x1 * -0x1177 + -0x1660 * -0x1 + -0x1 * 0x4e8, 'calls\x20should\x20still\x20be\x201'), _0x1d6fdc['read']();
    })['then'](({
        value: _0x4e98ea,
        done: _0x11ace3
    }) => {
        assert_false(_0x11ace3, 'done\x20should\x20be\x20false\x20again'), assert_equals(_0x4e98ea, 'a', 'chunk\x20a\x20should\x20come\x20after\x20b');
    });
}, 'read()\x20inside\x20of\x20size()\x20should\x20behave\x20as\x20expected'), promise_test(() => {
    let _0x230950, _0x15ad16;
    const _0x1486c7 = new ReadableStream({
        'start'(_0x4aa48f) {
            _0x230950 = _0x4aa48f;
        }
    }, {
        'size'() {
            return _0x15ad16 = _0x1486c7['getReader'](), 0x1 * 0x46 + 0x1f23 * -0x1 + 0x1ede;
        }
    });
    return _0x230950['enqueue']('a'), _0x15ad16['read']()['then'](({
        value: _0xdced40,
        done: _0x552a44
    }) => {
        assert_false(_0x552a44, 'done\x20should\x20be\x20false'), assert_equals(_0xdced40, 'a', 'value\x20should\x20be\x20a');
    });
}, 'getReader()\x20inside\x20size()\x20should\x20work'), promise_test(() => {
    let _0x45b6c1, _0x273291, _0x4141f1;
    const _0x4cc4a9 = new ReadableStream({
        'start'(_0x1a5df3) {
            _0x45b6c1 = _0x1a5df3;
        }
    }, {
        'size'() {
            return [_0x273291, _0x4141f1] = _0x4cc4a9['tee'](), -0x5da + 0x1f43 + -0x1968;
        }
    });
    return _0x45b6c1['enqueue']('a'), assert_true(_0x4cc4a9['locked'], 'rs\x20should\x20be\x20locked'), _0x45b6c1['close'](), Promise['all']([
        readableStreamToArray(_0x273291)['then'](_0x4c4a19 => assert_array_equals(_0x4c4a19, ['a'], 'branch1\x20should\x20have\x20one\x20chunk')),
        readableStreamToArray(_0x4141f1)['then'](_0x38db25 => assert_array_equals(_0x38db25, ['a'], 'branch2\x20should\x20have\x20one\x20chunk'))
    ]);
}, 'tee()\x20inside\x20size()\x20should\x20work');
