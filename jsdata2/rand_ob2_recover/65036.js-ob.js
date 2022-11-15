Debug = debug['Debug'];
function _0x21a3(_0x7ba333, _0x844219) {
    return _0x21a3 = function (_0x382a48, _0x21a39f) {
        _0x382a48 = _0x382a48 - 101;
        var _0x58c486 = _0x382a[_0x382a48];
        return _0x58c486;
    }, _0x21a3(_0x7ba333, _0x844219);
}
var break_point_hit_count;
function listener(_0x343e46, _0x450164, _0x3021b4, _0x169417) {
    var _0x297459 = _0x21a3;
    _0x343e46 == Debug[_0x297459(113)][_0x297459(114)] && break_point_hit_count++;
}
;
Debug[_0x4e6125(115)](listener);
function f() {
    a = 1, b = 2;
}
;
function g() {
    f();
}
function h() {
}
break_point_hit_count = 0, bp1 = Debug[_0x4e6125(116)](f), f(), assertEquals(1, break_point_hit_count), assertThrows(() => Debug['setBreakPoint'](f)), f(), assertEquals(2, break_point_hit_count), Debug[_0x4e6125(117)](bp1), f(), assertEquals(2, break_point_hit_count), break_point_hit_count = 0, bp1 = Debug[_0x4e6125(116)](g), g(), assertEquals(1, break_point_hit_count), assertThrows(() => Debug[_0x4e6125(116)](g)), g(), assertEquals(2, break_point_hit_count), Debug['clearBreakPoint'](bp1), g(), assertEquals(2, break_point_hit_count), test_count = 10, break_point_hit_count = 0;
for (var i = 0; i < test_count; i++) {
    i == 0 ? Debug[_0x4e6125(116)](h) : assertThrows(() => Debug[_0x4e6125(116)](h)), h();
}
assertEquals(test_count, break_point_hit_count);