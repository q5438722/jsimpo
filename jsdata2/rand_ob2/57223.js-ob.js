'use strict';
const _0x89b9 = [
    'done\x20should\x20be\x20false\x20again',
    'read()\x20inside\x20of\x20size()\x20should\x20behave\x20as\x20expected',
    'value\x20should\x20be\x20a',
    'getReader()\x20inside\x20size()\x20should\x20work',
    'tee',
    'locked',
    'rs\x20should\x20be\x20locked',
    'all',
    'branch1\x20should\x20have\x20one\x20chunk',
    'branch2\x20should\x20have\x20one\x20chunk',
    '14826dyUBwR',
    '4JCgTzr',
    '7143lowBHO',
    '270407eeKDxU',
    '205895QCFtXw',
    '34729tJVlTu',
    '187831nvvnqn',
    '1hitNEx',
    '35448BiJeSr',
    'error1',
    'enqueue',
    'then',
    'array\x20should\x20contain\x20two\x20chunks',
    'enqueue()\x20inside\x20size()\x20should\x20work',
    'close',
    'close()\x20inside\x20size()\x20should\x20not\x20crash',
    'close\x20request\x20inside\x20size()\x20should\x20work',
    'error',
    'read',
    'read()\x20should\x20reject',
    'error()\x20inside\x20size()\x20should\x20work',
    'desiredSize',
    'desiredSize\x20inside\x20size()\x20should\x20work',
    'step_func',
    'cancel',
    'getReader',
    'closed',
    'cancel()\x20inside\x20size()\x20should\x20work',
    'pipeTo',
    'events',
    'write',
    'ws\x20should\x20contain\x20two\x20chunks',
    'target\x20should\x20have\x20been\x20closed',
    'pipeTo()\x20inside\x20size()\x20should\x20behave\x20as\x20expected',
    'size()\x20should\x20only\x20be\x20called\x20once',
    'done\x20should\x20be\x20false',
    'chunk\x20should\x20have\x20been\x20read',
    'calls\x20should\x20still\x20be\x201'
];
const _0x33c252 = _0x1045;
(function (_0x43bba7, _0x170c3c) {
    const _0x3b3110 = _0x1045;
    while (!![]) {
        try {
            const _0x15a3fc = -parseInt(_0x3b3110(0xbc)) + parseInt(_0x3b3110(0xbd)) * parseInt(_0x3b3110(0xbe)) + -parseInt(_0x3b3110(0xbf)) + parseInt(_0x3b3110(0xc0)) + -parseInt(_0x3b3110(0xc1)) + parseInt(_0x3b3110(0xc2)) + parseInt(_0x3b3110(0xc3)) * parseInt(_0x3b3110(0xc4));
            if (_0x15a3fc === _0x170c3c)
                break;
            else
                _0x43bba7['push'](_0x43bba7['shift']());
        } catch (_0x2e44b4) {
            _0x43bba7['push'](_0x43bba7['shift']());
        }
    }
}(_0x89b9, 0x21a38));
function _0x1045(_0xd10341, _0x270d84) {
    return _0x1045 = function (_0x89b9b5, _0x10454d) {
        _0x89b9b5 = _0x89b9b5 - 0xbc;
        let _0x7a06bb = _0x89b9[_0x89b9b5];
        return _0x7a06bb;
    }, _0x1045(_0xd10341, _0x270d84);
}
const error1 = new Error(_0x33c252(0xc5));
error1['name'] = _0x33c252(0xc5), promise_test(() => {
    const _0x2b0c3a = _0x33c252;
    let _0x17e664, _0x1cce8d = 0x0;
    const _0x592944 = new ReadableStream({
        'start'(_0x138391) {
            _0x17e664 = _0x138391;
        }
    }, {
        'size'() {
            const _0x1e5e6a = _0x1045;
            return ++_0x1cce8d, _0x1cce8d < 0x2 && _0x17e664[_0x1e5e6a(0xc6)]('b'), 0x1;
        }
    });
    return _0x17e664['enqueue']('a'), _0x17e664['close'](), readableStreamToArray(_0x592944)[_0x2b0c3a(0xc7)](_0x50a2a3 => assert_array_equals(_0x50a2a3, [
        'b',
        'a'
    ], _0x2b0c3a(0xc8)));
}, _0x33c252(0xc9)), promise_test(() => {
    const _0x457c53 = _0x33c252;
    let _0x32c82e;
    const _0x59a0e7 = new ReadableStream({
        'start'(_0x15e4c0) {
            _0x32c82e = _0x15e4c0;
        }
    }, {
        'size'() {
            const _0x251e62 = _0x1045;
            return _0x32c82e[_0x251e62(0xca)](), 0x1;
        }
    });
    return _0x32c82e['enqueue']('a'), readableStreamToArray(_0x59a0e7)[_0x457c53(0xc7)](_0x2222b2 => assert_array_equals(_0x2222b2, [], 'array\x20should\x20contain\x20no\x20chunks'));
}, _0x33c252(0xcb)), promise_test(() => {
    const _0x30b793 = _0x33c252;
    let _0xb18e31, _0x27306e = 0x0;
    const _0x4070d4 = new ReadableStream({
        'start'(_0x646eb1) {
            _0xb18e31 = _0x646eb1;
        }
    }, {
        'size'() {
            const _0x3eec89 = _0x1045;
            return ++_0x27306e, _0x27306e === 0x2 && _0xb18e31[_0x3eec89(0xca)](), 0x1;
        }
    });
    return _0xb18e31[_0x30b793(0xc6)]('a'), _0xb18e31[_0x30b793(0xc6)]('b'), readableStreamToArray(_0x4070d4)[_0x30b793(0xc7)](_0x14faf0 => assert_array_equals(_0x14faf0, [
        'a',
        'b'
    ], 'array\x20should\x20contain\x20two\x20chunks'));
}, _0x33c252(0xcc)), promise_test(_0x180afc => {
    const _0x4acf7b = _0x33c252;
    let _0x3f2028;
    const _0x27d1e1 = new ReadableStream({
        'start'(_0xf5e3fa) {
            _0x3f2028 = _0xf5e3fa;
        }
    }, {
        'size'() {
            const _0x5e6c34 = _0x1045;
            return _0x3f2028[_0x5e6c34(0xcd)](error1), 0x1;
        }
    });
    return _0x3f2028[_0x4acf7b(0xc6)]('a'), promise_rejects_exactly(_0x180afc, error1, _0x27d1e1['getReader']()[_0x4acf7b(0xce)](), _0x4acf7b(0xcf));
}, _0x33c252(0xd0)), promise_test(() => {
    const _0x35d866 = _0x33c252;
    let _0x3a300f;
    const _0x1ed13a = new ReadableStream({
        'start'(_0x448fd2) {
            _0x3a300f = _0x448fd2;
        }
    }, {
        'size'() {
            const _0x45bc23 = _0x1045;
            return assert_equals(_0x3a300f[_0x45bc23(0xd1)], 0x1, 'desiredSize\x20should\x20be\x201'), 0x1;
        },
        'highWaterMark': 0x1
    });
    return _0x3a300f[_0x35d866(0xc6)]('a'), _0x3a300f['close'](), readableStreamToArray(_0x1ed13a)[_0x35d866(0xc7)](_0x4d8557 => assert_array_equals(_0x4d8557, ['a'], 'array\x20should\x20contain\x20one\x20chunk'));
}, _0x33c252(0xd2)), promise_test(_0x1eb5ae => {
    const _0x2a557b = _0x33c252;
    let _0x5ba9ef, _0x299a47;
    const _0x5c7654 = new ReadableStream({
        'start'(_0x5c203c) {
            _0x299a47 = _0x5c203c;
        },
        'cancel': _0x1eb5ae[_0x2a557b(0xd3)](_0x585398 => {
            const _0x5ca685 = _0x2a557b;
            assert_equals(_0x585398, error1, 'reason\x20should\x20be\x20error1'), assert_throws_js(TypeError, () => _0x299a47[_0x5ca685(0xc6)](), 'enqueue()\x20should\x20throw');
        })
    }, {
        'size'() {
            const _0x2ccc99 = _0x2a557b;
            return _0x5ba9ef = _0x5c7654[_0x2ccc99(0xd4)](error1), 0x1;
        },
        'highWaterMark': Infinity
    });
    _0x299a47[_0x2a557b(0xc6)]('a');
    const _0x456328 = _0x5c7654[_0x2a557b(0xd5)]();
    return Promise['all']([
        _0x456328[_0x2a557b(0xd6)],
        _0x5ba9ef
    ]);
}, _0x33c252(0xd7)), promise_test(() => {
    const _0x2cbd3c = _0x33c252;
    let _0x319fc1, _0x222be5;
    const _0x5272f3 = recordingWritableStream(), _0x10998b = new ReadableStream({
            'start'(_0x453aeb) {
                _0x319fc1 = _0x453aeb;
            }
        }, {
            'size'() {
                const _0x52e80e = _0x1045;
                return !_0x222be5 && (_0x222be5 = _0x10998b[_0x52e80e(0xd8)](_0x5272f3)), 0x1;
            },
            'highWaterMark': 0x1
        });
    return _0x319fc1[_0x2cbd3c(0xc6)]('a'), assert_not_equals(_0x222be5, undefined), _0x319fc1[_0x2cbd3c(0xc6)]('a'), delay(0x0)[_0x2cbd3c(0xc7)](() => {
        const _0x33f3eb = _0x2cbd3c;
        return assert_array_equals(_0x5272f3[_0x33f3eb(0xd9)], [
            'write',
            'a',
            _0x33f3eb(0xda),
            'a'
        ], _0x33f3eb(0xdb)), _0x319fc1[_0x33f3eb(0xca)](), _0x222be5;
    })[_0x2cbd3c(0xc7)](() => {
        const _0x1dfcf6 = _0x2cbd3c;
        assert_array_equals(_0x5272f3['events'], [
            _0x1dfcf6(0xda),
            'a',
            _0x1dfcf6(0xda),
            'a',
            _0x1dfcf6(0xca)
        ], _0x1dfcf6(0xdc));
    });
}, _0x33c252(0xdd)), promise_test(() => {
    const _0x2f5554 = _0x33c252;
    let _0x23aa15, _0x568345, _0x1a363d = 0x0, _0x3e8772 = ![], _0x4fd17d;
    const _0x21a414 = new ReadableStream({
        'start'(_0x2923f4) {
            _0x23aa15 = _0x2923f4;
        }
    }, {
        'size'() {
            const _0x4eed76 = _0x1045;
            return _0x568345 = _0x4fd17d[_0x4eed76(0xce)](), ++_0x1a363d, 0x1;
        },
        'highWaterMark': 0x0
    });
    return _0x4fd17d = _0x21a414[_0x2f5554(0xd5)](), _0x23aa15['enqueue']('a'), _0x568345['then'](() => {
        _0x3e8772 = !![];
    }), flushAsyncEvents()[_0x2f5554(0xc7)](() => {
        return assert_false(_0x3e8772), _0x23aa15['enqueue']('b'), assert_equals(_0x1a363d, 0x1, 'size()\x20should\x20have\x20been\x20called\x20once'), delay(0x0);
    })['then'](() => {
        const _0xaa3b68 = _0x2f5554;
        return assert_true(_0x3e8772), assert_equals(_0x1a363d, 0x1, _0xaa3b68(0xde)), _0x568345;
    })[_0x2f5554(0xc7)](({
        value: _0x295139,
        done: _0x5b2c8f
    }) => {
        const _0x117929 = _0x2f5554;
        return assert_false(_0x5b2c8f, _0x117929(0xdf)), assert_equals(_0x295139, 'b', _0x117929(0xe0)), assert_equals(_0x1a363d, 0x1, _0x117929(0xe1)), _0x4fd17d[_0x117929(0xce)]();
    })[_0x2f5554(0xc7)](({
        value: _0x169116,
        done: _0x93e6cb
    }) => {
        const _0x39fa5 = _0x2f5554;
        assert_false(_0x93e6cb, _0x39fa5(0xe2)), assert_equals(_0x169116, 'a', 'chunk\x20a\x20should\x20come\x20after\x20b');
    });
}, _0x33c252(0xe3)), promise_test(() => {
    const _0x12b2b = _0x33c252;
    let _0x883c17, _0x2c7583;
    const _0x39c65a = new ReadableStream({
        'start'(_0x381fbd) {
            _0x883c17 = _0x381fbd;
        }
    }, {
        'size'() {
            const _0x1fc935 = _0x1045;
            return _0x2c7583 = _0x39c65a[_0x1fc935(0xd5)](), 0x1;
        }
    });
    return _0x883c17['enqueue']('a'), _0x2c7583[_0x12b2b(0xce)]()[_0x12b2b(0xc7)](({
        value: _0x4f68fb,
        done: _0x95ec01
    }) => {
        const _0x285f77 = _0x12b2b;
        assert_false(_0x95ec01, 'done\x20should\x20be\x20false'), assert_equals(_0x4f68fb, 'a', _0x285f77(0xe4));
    });
}, _0x33c252(0xe5)), promise_test(() => {
    const _0x55374b = _0x33c252;
    let _0x248dea, _0x2c78d7, _0x3ed573;
    const _0x4adc09 = new ReadableStream({
        'start'(_0x5769a5) {
            _0x248dea = _0x5769a5;
        }
    }, {
        'size'() {
            const _0x765d65 = _0x1045;
            return [_0x2c78d7, _0x3ed573] = _0x4adc09[_0x765d65(0xe6)](), 0x1;
        }
    });
    return _0x248dea[_0x55374b(0xc6)]('a'), assert_true(_0x4adc09[_0x55374b(0xe7)], _0x55374b(0xe8)), _0x248dea[_0x55374b(0xca)](), Promise[_0x55374b(0xe9)]([
        readableStreamToArray(_0x2c78d7)[_0x55374b(0xc7)](_0x188e4b => assert_array_equals(_0x188e4b, ['a'], _0x55374b(0xea))),
        readableStreamToArray(_0x3ed573)[_0x55374b(0xc7)](_0x296b31 => assert_array_equals(_0x296b31, ['a'], _0x55374b(0xeb)))
    ]);
}, 'tee()\x20inside\x20size()\x20should\x20work');
