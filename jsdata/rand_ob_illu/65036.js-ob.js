const _0x3b7b = ['109XdFCYp', '265eFjkke', '200772TojCsy', '1FNyher', '30396OcKLCZ', '210HuBzem', '464BMzuIU', '378386laUlSu', 'Debug', 'DebugEvent', 'Break', 'setListener', 'setBreakPoint', 'clearBreakPoint', '118381MeapJO', '1YZYXXM', '16085mlaUUo'];

function _0xa45a(_0x52bdc1, _0x43be37) {
    return _0xa45a = function (_0x2a7097, _0x3e3302) {
        _0x2a7097 = _0x2a7097 - 115;
        const _0x291f83 = _0x3b7b[_0x2a7097];

        return _0x291f83;
    }, _0xa45a(_0x52bdc1, _0x43be37);
}
const _0xdd8798 = _0xa45a;

(function (_0x355e23, _0x5a5873) {
    const _0x4f2da4 = _0xa45a;

    while (true) {
        try {
            const _0x526623 = -parseInt(_0x4f2da4(0x73)) * -parseInt(_0x4f2da4(0x74)) + parseInt(_0x4f2da4(0x75)) + -parseInt(_0x4f2da4(0x76)) * -parseInt(_0x4f2da4(0x77)) + parseInt(_0x4f2da4(0x78)) + -parseInt(_0x4f2da4(0x79)) * -parseInt(_0x4f2da4(0x7a)) + parseInt(_0x4f2da4(0x7b)) * parseInt(_0x4f2da4(0x7c)) + -parseInt(_0x4f2da4(0x7d));

            if (_0x526623 === _0x5a5873) break;else _0x355e23.push(_0x355e23.shift());
        } catch (_0x3c80dc) {
            _0x355e23.push(_0x355e23.shift());
        }
    }
})(_0x3b7b, 113573), Debug = debug[_0xdd8798(0x7e)];
var break_point_hit_count;

function listener(_0x922cf4, _0x1e00d9, _0x37202a, _0x2723ae) {
    const _0x593d4a = _0xdd8798;
    const _0x4f93a9 = {
        'hySkN': function (_0x2f8522, _0x4b3faa) {
            return _0x2f8522 == _0x4b3faa;
        }
    };

    _0x4f93a9.hySkN(_0x922cf4, Debug[_0x593d4a(0x7f)][_0x593d4a(0x80)]) && break_point_hit_count++;
}
;
Debug[_0xdd8798(0x81)](listener);
function f() {
    a = 1, b = 2;
}
;
function g() {
    const _0x1715b3 = {
        'SLuWw': function (_0x4d9e08) {
            return _0x4d9e08();
        }
    };

    _0x1715b3.SLuWw(f);
}
function h() {}
break_point_hit_count = 0, bp1 = Debug[_0xdd8798(0x82)](f), f(), assertEquals(1, break_point_hit_count), assertThrows(() => Debug[_0xdd8798(0x82)](f)), f(), assertEquals(2, break_point_hit_count), Debug[_0xdd8798(0x83)](bp1), f(), assertEquals(2, break_point_hit_count), break_point_hit_count = 0, bp1 = Debug[_0xdd8798(0x82)](g), g(), assertEquals(1, break_point_hit_count), assertThrows(() => Debug[_0xdd8798(0x82)](g)), g(), assertEquals(2, break_point_hit_count), Debug[_0xdd8798(0x83)](bp1), g(), assertEquals(2, break_point_hit_count), test_count = 10, break_point_hit_count = 0;
for (var i = 0; i < test_count; i++) {
    i == 0 ? Debug[_0xdd8798(0x82)](h) : assertThrows(() => Debug.setBreakPoint(h)), h();
}
assertEquals(test_count, break_point_hit_count);
