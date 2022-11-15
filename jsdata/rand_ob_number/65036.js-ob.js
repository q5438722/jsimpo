Debug = debug['Debug'];
var break_point_hit_count;
function listener(_0x276864, _0x562848, _0x7abc95, _0x2b07c1) {
    _0x276864 == Debug['DebugEvent']['Break'] && break_point_hit_count++;
}
;
Debug['setListener'](listener);
function f() {
    a = -0xced + -0x209 * 0x7 + 0x1b2d, b = -0x1afe + 0x19af + 0x151;
}
;
function g() {
    f();
}
function h() {
}
break_point_hit_count = 0x359 * 0x2 + -0x19 * -0x52 + -0xeb4, bp1 = Debug['setBreakPoint'](f), f(), assertEquals(0x546 * -0x6 + 0x239 * -0xd + 0xe * 0x453, break_point_hit_count), assertThrows(() => Debug['setBreakPoint'](f)), f(), assertEquals(-0x2256 + -0x19be + 0x3c16, break_point_hit_count), Debug['clearBreakPoint'](bp1), f(), assertEquals(-0x111 + -0xb57 * -0x3 + -0x20f2, break_point_hit_count), break_point_hit_count = -0x228f + -0x7c * -0x17 + 0x176b, bp1 = Debug['setBreakPoint'](g), g(), assertEquals(0x20a * -0x5 + 0x2 * -0xb75 + 0x31 * 0xad, break_point_hit_count), assertThrows(() => Debug['setBreakPoint'](g)), g(), assertEquals(0x414 + -0xa7 * 0x11 + -0x1 * -0x705, break_point_hit_count), Debug['clearBreakPoint'](bp1), g(), assertEquals(-0x454 * 0x4 + 0x201f + -0xecd, break_point_hit_count), test_count = -0x198a + 0x286 + -0x170e * -0x1, break_point_hit_count = -0x41e + 0x1b59 + -0x173b * 0x1;
for (var i = -0x2342 * 0x1 + 0x9cc + 0xcbb * 0x2; i < test_count; i++) {
    i == -0x21a * -0xc + 0x69 * -0x5 + -0x7b9 * 0x3 ? Debug['setBreakPoint'](h) : assertThrows(() => Debug['setBreakPoint'](h)), h();
}
assertEquals(test_count, break_point_hit_count);
