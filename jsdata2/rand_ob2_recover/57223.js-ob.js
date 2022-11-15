function _0x1045(_0xd10341, _0x270d84) {
    return _0x1045 = function (_0x89b9b5, _0x10454d) {
        _0x89b9b5 = _0x89b9b5 - 188;
        let _0x7a06bb = _0x89b9[_0x89b9b5];
        return _0x7a06bb;
    }, _0x1045(_0xd10341, _0x270d84);
}
const error1 = new Error(_0x33c252(197));
error1['name'] = _0x33c252(197), promise_test(() => {
    const _0x2b0c3a = _0x33c252;
    let _0x17e664, _0x1cce8d = 0;
    const _0x592944 = new ReadableStream({
        'start'(_0x138391) {
            _0x17e664 = _0x138391;
        }
    }, {
        'size'() {
            const _0x1e5e6a = _0x1045;
            return ++_0x1cce8d, _0x1cce8d < 2 && _0x17e664[_0x1e5e6a(198)]('b'), 1;
        }
    });
    return _0x17e664['enqueue']('a'), _0x17e664['close'](), readableStreamToArray(_0x592944)[_0x2b0c3a(199)](_0x50a2a3 => assert_array_equals(_0x50a2a3, [
        'b',
        'a'
    ], _0x2b0c3a(200)));
}, _0x33c252(201)), promise_test(() => {
    const _0x457c53 = _0x33c252;
    let _0x32c82e;
    const _0x59a0e7 = new ReadableStream({
        'start'(_0x15e4c0) {
            _0x32c82e = _0x15e4c0;
        }
    }, {
        'size'() {
            const _0x251e62 = _0x1045;
            return _0x32c82e[_0x251e62(202)](), 1;
        }
    });
    return _0x32c82e['enqueue']('a'), readableStreamToArray(_0x59a0e7)[_0x457c53(199)](_0x2222b2 => assert_array_equals(_0x2222b2, [], 'array should contain no chunks'));
}, _0x33c252(203)), promise_test(() => {
    const _0x30b793 = _0x33c252;
    let _0xb18e31, _0x27306e = 0;
    const _0x4070d4 = new ReadableStream({
        'start'(_0x646eb1) {
            _0xb18e31 = _0x646eb1;
        }
    }, {
        'size'() {
            const _0x3eec89 = _0x1045;
            return ++_0x27306e, _0x27306e === 2 && _0xb18e31[_0x3eec89(202)](), 1;
        }
    });
    return _0xb18e31[_0x30b793(198)]('a'), _0xb18e31[_0x30b793(198)]('b'), readableStreamToArray(_0x4070d4)[_0x30b793(199)](_0x14faf0 => assert_array_equals(_0x14faf0, [
        'a',
        'b'
    ], 'array should contain two chunks'));
}, _0x33c252(204)), promise_test(_0x180afc => {
    const _0x4acf7b = _0x33c252;
    let _0x3f2028;
    const _0x27d1e1 = new ReadableStream({
        'start'(_0xf5e3fa) {
            _0x3f2028 = _0xf5e3fa;
        }
    }, {
        'size'() {
            const _0x5e6c34 = _0x1045;
            return _0x3f2028[_0x5e6c34(205)](error1), 1;
        }
    });
    return _0x3f2028[_0x4acf7b(198)]('a'), promise_rejects_exactly(_0x180afc, error1, _0x27d1e1['getReader']()[_0x4acf7b(206)](), _0x4acf7b(207));
}, _0x33c252(208)), promise_test(() => {
    const _0x35d866 = _0x33c252;
    let _0x3a300f;
    const _0x1ed13a = new ReadableStream({
        'start'(_0x448fd2) {
            _0x3a300f = _0x448fd2;
        }
    }, {
        'size'() {
            const _0x45bc23 = _0x1045;
            return assert_equals(_0x3a300f[_0x45bc23(209)], 1, 'desiredSize should be 1'), 1;
        },
        'highWaterMark': 1
    });
    return _0x3a300f[_0x35d866(198)]('a'), _0x3a300f['close'](), readableStreamToArray(_0x1ed13a)[_0x35d866(199)](_0x4d8557 => assert_array_equals(_0x4d8557, ['a'], 'array should contain one chunk'));
}, _0x33c252(210)), promise_test(_0x1eb5ae => {
    const _0x2a557b = _0x33c252;
    let _0x5ba9ef, _0x299a47;
    const _0x5c7654 = new ReadableStream({
        'start'(_0x5c203c) {
            _0x299a47 = _0x5c203c;
        },
        'cancel': _0x1eb5ae[_0x2a557b(211)](_0x585398 => {
            const _0x5ca685 = _0x2a557b;
            assert_equals(_0x585398, error1, 'reason should be error1'), assert_throws_js(TypeError, () => _0x299a47[_0x5ca685(198)](), 'enqueue() should throw');
        })
    }, {
        'size'() {
            const _0x2ccc99 = _0x2a557b;
            return _0x5ba9ef = _0x5c7654[_0x2ccc99(212)](error1), 1;
        },
        'highWaterMark': Infinity
    });
    _0x299a47[_0x2a557b(198)]('a');
    const _0x456328 = _0x5c7654[_0x2a557b(213)]();
    return Promise['all']([
        _0x456328[_0x2a557b(214)],
        _0x5ba9ef
    ]);
}, _0x33c252(215)), promise_test(() => {
    const _0x2cbd3c = _0x33c252;
    let _0x319fc1, _0x222be5;
    const _0x5272f3 = recordingWritableStream(), _0x10998b = new ReadableStream({
            'start'(_0x453aeb) {
                _0x319fc1 = _0x453aeb;
            }
        }, {
            'size'() {
                const _0x52e80e = _0x1045;
                return !_0x222be5 && (_0x222be5 = _0x10998b[_0x52e80e(216)](_0x5272f3)), 1;
            },
            'highWaterMark': 1
        });
    return _0x319fc1[_0x2cbd3c(198)]('a'), assert_not_equals(_0x222be5, undefined), _0x319fc1[_0x2cbd3c(198)]('a'), delay(0)[_0x2cbd3c(199)](() => {
        const _0x33f3eb = _0x2cbd3c;
        return assert_array_equals(_0x5272f3[_0x33f3eb(217)], [
            'write',
            'a',
            _0x33f3eb(218),
            'a'
        ], _0x33f3eb(219)), _0x319fc1[_0x33f3eb(202)](), _0x222be5;
    })[_0x2cbd3c(199)](() => {
        const _0x1dfcf6 = _0x2cbd3c;
        assert_array_equals(_0x5272f3['events'], [
            _0x1dfcf6(218),
            'a',
            _0x1dfcf6(218),
            'a',
            _0x1dfcf6(202)
        ], _0x1dfcf6(220));
    });
}, _0x33c252(221)), promise_test(() => {
    const _0x2f5554 = _0x33c252;
    let _0x23aa15, _0x568345, _0x1a363d = 0, _0x3e8772 = ![], _0x4fd17d;
    const _0x21a414 = new ReadableStream({
        'start'(_0x2923f4) {
            _0x23aa15 = _0x2923f4;
        }
    }, {
        'size'() {
            const _0x4eed76 = _0x1045;
            return _0x568345 = _0x4fd17d[_0x4eed76(206)](), ++_0x1a363d, 1;
        },
        'highWaterMark': 0
    });
    return _0x4fd17d = _0x21a414[_0x2f5554(213)](), _0x23aa15['enqueue']('a'), _0x568345['then'](() => {
        _0x3e8772 = !![];
    }), flushAsyncEvents()[_0x2f5554(199)](() => {
        return assert_false(_0x3e8772), _0x23aa15['enqueue']('b'), assert_equals(_0x1a363d, 1, 'size() should have been called once'), delay(0);
    })['then'](() => {
        const _0xaa3b68 = _0x2f5554;
        return assert_true(_0x3e8772), assert_equals(_0x1a363d, 1, _0xaa3b68(222)), _0x568345;
    })[_0x2f5554(199)](({
        value: _0x295139,
        done: _0x5b2c8f
    }) => {
        const _0x117929 = _0x2f5554;
        return assert_false(_0x5b2c8f, _0x117929(223)), assert_equals(_0x295139, 'b', _0x117929(224)), assert_equals(_0x1a363d, 1, _0x117929(225)), _0x4fd17d[_0x117929(206)]();
    })[_0x2f5554(199)](({
        value: _0x169116,
        done: _0x93e6cb
    }) => {
        const _0x39fa5 = _0x2f5554;
        assert_false(_0x93e6cb, _0x39fa5(226)), assert_equals(_0x169116, 'a', 'chunk a should come after b');
    });
}, _0x33c252(227)), promise_test(() => {
    const _0x12b2b = _0x33c252;
    let _0x883c17, _0x2c7583;
    const _0x39c65a = new ReadableStream({
        'start'(_0x381fbd) {
            _0x883c17 = _0x381fbd;
        }
    }, {
        'size'() {
            const _0x1fc935 = _0x1045;
            return _0x2c7583 = _0x39c65a[_0x1fc935(213)](), 1;
        }
    });
    return _0x883c17['enqueue']('a'), _0x2c7583[_0x12b2b(206)]()[_0x12b2b(199)](({
        value: _0x4f68fb,
        done: _0x95ec01
    }) => {
        const _0x285f77 = _0x12b2b;
        assert_false(_0x95ec01, 'done should be false'), assert_equals(_0x4f68fb, 'a', _0x285f77(228));
    });
}, _0x33c252(229)), promise_test(() => {
    const _0x55374b = _0x33c252;
    let _0x248dea, _0x2c78d7, _0x3ed573;
    const _0x4adc09 = new ReadableStream({
        'start'(_0x5769a5) {
            _0x248dea = _0x5769a5;
        }
    }, {
        'size'() {
            const _0x765d65 = _0x1045;
            return [_0x2c78d7, _0x3ed573] = _0x4adc09[_0x765d65(230)](), 1;
        }
    });
    return _0x248dea[_0x55374b(198)]('a'), assert_true(_0x4adc09[_0x55374b(231)], _0x55374b(232)), _0x248dea[_0x55374b(202)](), Promise[_0x55374b(233)]([
        readableStreamToArray(_0x2c78d7)[_0x55374b(199)](_0x188e4b => assert_array_equals(_0x188e4b, ['a'], _0x55374b(234))),
        readableStreamToArray(_0x3ed573)[_0x55374b(199)](_0x296b31 => assert_array_equals(_0x296b31, ['a'], _0x55374b(235)))
    ]);
}, 'tee() inside size() should work');