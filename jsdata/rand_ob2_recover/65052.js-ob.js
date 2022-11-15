Debug = debug[_0x150a5b(255)];
var debug_step = 0, failure = null;
function listener(_0x3e9fd7, _0x2207a0, _0x46942e, _0x4ba52e) {
    var _0x4fd6dd = _0x150a5b;
    if (_0x3e9fd7 != Debug[_0x4fd6dd(256)][_0x4fd6dd(257)])
        return;
    try {
        debug_step == 0 ? (assertEquals(1, _0x2207a0[_0x4fd6dd(258)](0)['evaluate']('a')['value']()), assertEquals(3, _0x2207a0[_0x4fd6dd(258)](0)[_0x4fd6dd(259)]('b')['value']()), _0x2207a0[_0x4fd6dd(258)](0)[_0x4fd6dd(259)](_0x4fd6dd(260))[_0x4fd6dd(261)](), debug_step++) : (assertEquals(4, _0x2207a0[_0x4fd6dd(258)](0)['evaluate']('a')[_0x4fd6dd(261)]()), assertEquals(3, _0x2207a0[_0x4fd6dd(258)](0)[_0x4fd6dd(259)]('b')[_0x4fd6dd(261)]()), _0x2207a0[_0x4fd6dd(258)](0)[_0x4fd6dd(259)](_0x4fd6dd(262)), _0x2207a0['frame'](0)[_0x4fd6dd(259)](_0x4fd6dd(263))['value']());
    } catch (_0x4d42c9) {
        failure = _0x4d42c9;
    }
}
Debug['setListener'](listener);
function* generator(_0x2af6f6, _0x3a6530) {
    function _0x508d86() {
        _0x2af6f6 = 5;
    }
    _0x508d86;
    var _0x3a6530 = 3;
    debugger;
    yield _0x2af6f6, yield _0x3a6530;
    debugger;
    return yield _0x2af6f6, _0x3a6530;
}
var foo = generator(1, 2);
assertEquals(4, foo['next']()[_0x150a5b(261)]), assertEquals(3, foo[_0x150a5b(264)]()[_0x150a5b(261)]), assertEquals(5, foo[_0x150a5b(264)]()[_0x150a5b(261)]), assertEquals(5, foo['next']()[_0x150a5b(261)]), assertNull(failure), Debug['setListener'](null);