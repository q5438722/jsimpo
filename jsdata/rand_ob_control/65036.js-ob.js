Debug = debug['Debug'];
var break_point_hit_count;
function listener(_0x54da2b, _0x409b4b, _0x1483c5, _0x177ea5) {
    var _0x44607e = {
        'goUIR': function (_0x13c71d, _0x1115de) {
            return _0x13c71d == _0x1115de;
        }
    };
    _0x44607e['goUIR'](_0x54da2b, Debug['DebugEvent']['Break']) && break_point_hit_count++;
}
;
Debug['setListener'](listener);
function f() {
    a = 0x1, b = 0x2;
}
;
function g() {
    var _0x3890c4 = {
        'GWSwa': function (_0x46684b) {
            return _0x46684b();
        }
    };
    _0x3890c4['GWSwa'](f);
}
function h() {
}
break_point_hit_count = 0x0, bp1 = Debug['setBreakPoint'](f), f(), assertEquals(0x1, break_point_hit_count), assertThrows(() => Debug['setBreakPoint'](f)), f(), assertEquals(0x2, break_point_hit_count), Debug['clearBreakPoint'](bp1), f(), assertEquals(0x2, break_point_hit_count), break_point_hit_count = 0x0, bp1 = Debug['setBreakPoint'](g), g(), assertEquals(0x1, break_point_hit_count), assertThrows(() => Debug['setBreakPoint'](g)), g(), assertEquals(0x2, break_point_hit_count), Debug['clearBreakPoint'](bp1), g(), assertEquals(0x2, break_point_hit_count), test_count = 0xa, break_point_hit_count = 0x0;
for (var i = 0x0; i < test_count; i++) {
    i == 0x0 ? Debug['setBreakPoint'](h) : assertThrows(() => Debug['setBreakPoint'](h)), h();
}
assertEquals(test_count, break_point_hit_count);
