Debug = debug[_0x3ffddc(198)];
var break_point_hit_count;
function listener(_0x50bf08, _0x141885, _0x1ddbaf, _0x1b23d0) {
    var _0x5adf92 = _0x3ffddc;
    _0x50bf08 == Debug[_0x5adf92(199)]['Break'] && break_point_hit_count++;
}
;
function _0x19bb(_0x512dff, _0x4bcad8) {
    return _0x19bb = function (_0x3d4d6b, _0x19bb1c) {
        _0x3d4d6b = _0x3d4d6b - 188;
        var _0x39fa88 = _0x3d4d[_0x3d4d6b];
        return _0x39fa88;
    }, _0x19bb(_0x512dff, _0x4bcad8);
}
Debug[_0x3ffddc(200)](listener);
function f() {
    a = 1, b = 2;
}
;
function g() {
    f();
}
function h() {
}
break_point_hit_count = 0, bp1 = Debug[_0x3ffddc(201)](f), f(), assertEquals(1, break_point_hit_count), assertThrows(() => Debug[_0x3ffddc(201)](f)), f(), assertEquals(2, break_point_hit_count), Debug[_0x3ffddc(202)](bp1), f(), assertEquals(2, break_point_hit_count), break_point_hit_count = 0, bp1 = Debug['setBreakPoint'](g), g(), assertEquals(1, break_point_hit_count), assertThrows(() => Debug[_0x3ffddc(201)](g)), g(), assertEquals(2, break_point_hit_count), Debug[_0x3ffddc(202)](bp1), g(), assertEquals(2, break_point_hit_count), test_count = 10, break_point_hit_count = 0;
for (var i = 0; i < test_count; i++) {
    i == 0 ? Debug['setBreakPoint'](h) : assertThrows(() => Debug[_0x3ffddc(201)](h)), h();
}
assertEquals(test_count, break_point_hit_count);