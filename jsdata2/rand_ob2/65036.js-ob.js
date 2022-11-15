var _0x382a = [
    '2alHmbQ',
    '261664IkaGoB',
    '73804WuyGfq',
    '4UbadjY',
    '535808bCnLAq',
    '718810eymOjR',
    '225542GGfOQF',
    '1ItVzGt',
    '8FMyVBX',
    '52181DCpyOm',
    'DebugEvent',
    'Break',
    'setListener',
    'setBreakPoint',
    'clearBreakPoint',
    '39849udZyMv',
    '11kVxvEf'
];
var _0x4e6125 = _0x21a3;
(function (_0x5c0f38, _0x5db6d4) {
    var _0x53ee75 = _0x21a3;
    while (!![]) {
        try {
            var _0x392605 = -parseInt(_0x53ee75(0x65)) * parseInt(_0x53ee75(0x66)) + -parseInt(_0x53ee75(0x67)) * -parseInt(_0x53ee75(0x68)) + parseInt(_0x53ee75(0x69)) * parseInt(_0x53ee75(0x6a)) + -parseInt(_0x53ee75(0x6b)) + parseInt(_0x53ee75(0x6c)) + parseInt(_0x53ee75(0x6d)) * parseInt(_0x53ee75(0x6e)) + parseInt(_0x53ee75(0x6f)) * -parseInt(_0x53ee75(0x70));
            if (_0x392605 === _0x5db6d4)
                break;
            else
                _0x5c0f38['push'](_0x5c0f38['shift']());
        } catch (_0x460c82) {
            _0x5c0f38['push'](_0x5c0f38['shift']());
        }
    }
}(_0x382a, 0x5aa65), Debug = debug['Debug']);
function _0x21a3(_0x7ba333, _0x844219) {
    return _0x21a3 = function (_0x382a48, _0x21a39f) {
        _0x382a48 = _0x382a48 - 0x65;
        var _0x58c486 = _0x382a[_0x382a48];
        return _0x58c486;
    }, _0x21a3(_0x7ba333, _0x844219);
}
var break_point_hit_count;
function listener(_0x343e46, _0x450164, _0x3021b4, _0x169417) {
    var _0x297459 = _0x21a3;
    _0x343e46 == Debug[_0x297459(0x71)][_0x297459(0x72)] && break_point_hit_count++;
}
;
Debug[_0x4e6125(0x73)](listener);
function f() {
    a = 0x1, b = 0x2;
}
;
function g() {
    f();
}
function h() {
}
break_point_hit_count = 0x0, bp1 = Debug[_0x4e6125(0x74)](f), f(), assertEquals(0x1, break_point_hit_count), assertThrows(() => Debug['setBreakPoint'](f)), f(), assertEquals(0x2, break_point_hit_count), Debug[_0x4e6125(0x75)](bp1), f(), assertEquals(0x2, break_point_hit_count), break_point_hit_count = 0x0, bp1 = Debug[_0x4e6125(0x74)](g), g(), assertEquals(0x1, break_point_hit_count), assertThrows(() => Debug[_0x4e6125(0x74)](g)), g(), assertEquals(0x2, break_point_hit_count), Debug['clearBreakPoint'](bp1), g(), assertEquals(0x2, break_point_hit_count), test_count = 0xa, break_point_hit_count = 0x0;
for (var i = 0x0; i < test_count; i++) {
    i == 0x0 ? Debug[_0x4e6125(0x74)](h) : assertThrows(() => Debug[_0x4e6125(0x74)](h)), h();
}
assertEquals(test_count, break_point_hit_count);
