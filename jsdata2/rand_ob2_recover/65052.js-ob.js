Debug = debug[_0x2a0bc8(436)];
var debug_step = 0, failure = null;
function listener(_0x19af1f, _0x3b924b, _0x116d2f, _0x467fae) {
    var _0x53c180 = _0x2a0bc8;
    if (_0x19af1f != Debug[_0x53c180(437)][_0x53c180(438)])
        return;
    try {
        debug_step == 0 ? (assertEquals(1, _0x3b924b[_0x53c180(439)](0)['evaluate']('a')[_0x53c180(440)]()), assertEquals(3, _0x3b924b[_0x53c180(439)](0)[_0x53c180(441)]('b')['value']()), _0x3b924b['frame'](0)[_0x53c180(441)]('a = 4')[_0x53c180(440)](), debug_step++) : (assertEquals(4, _0x3b924b[_0x53c180(439)](0)['evaluate']('a')[_0x53c180(440)]()), assertEquals(3, _0x3b924b[_0x53c180(439)](0)[_0x53c180(441)]('b')[_0x53c180(440)]()), _0x3b924b[_0x53c180(439)](0)[_0x53c180(441)](_0x53c180(442)), _0x3b924b[_0x53c180(439)](0)['evaluate'](_0x53c180(443))[_0x53c180(440)]());
    } catch (_0x43c313) {
        failure = _0x43c313;
    }
}
Debug[_0x2a0bc8(444)](listener);
function* generator(_0x1ef6a2, _0xcbd14) {
    function _0x4e8490() {
        _0x1ef6a2 = 5;
    }
    _0x4e8490;
    var _0xcbd14 = 3;
    debugger;
    yield _0x1ef6a2, yield _0xcbd14;
    debugger;
    return yield _0x1ef6a2, _0xcbd14;
}
var foo = generator(1, 2);
function _0x4d68(_0x25640c, _0x47dc15) {
    return _0x4d68 = function (_0x12a56f, _0x4d6801) {
        _0x12a56f = _0x12a56f - 425;
        var _0x485e4d = _0x12a5[_0x12a56f];
        return _0x485e4d;
    }, _0x4d68(_0x25640c, _0x47dc15);
}
assertEquals(4, foo['next']()[_0x2a0bc8(440)]), assertEquals(3, foo[_0x2a0bc8(445)]()[_0x2a0bc8(440)]), assertEquals(5, foo[_0x2a0bc8(445)]()[_0x2a0bc8(440)]), assertEquals(5, foo[_0x2a0bc8(445)]()[_0x2a0bc8(440)]), assertNull(failure), Debug[_0x2a0bc8(444)](null);