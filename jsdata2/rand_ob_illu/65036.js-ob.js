const _0x5e17 = ['189365wcRyii', '161250eksnZQ', 'Debug', 'emokX', 'DebugEvent', 'Break', 'setListener', 'setBreakPoint', 'clearBreakPoint', '240122DTykYt', '129587eFLYjT', '342iyfXKa', '810syarUp', '2647pgqzas', '83WhTEqn', '20397EyeMPo', '7UBRvit'];
const _0x1fe00e = _0x2922;

(function (_0xc11062, _0x33f227) {
    const _0x3a2641 = _0x2922;

    while (true) {
        try {
            const _0x4a5657 = parseInt(_0x3a2641(0xd8)) + parseInt(_0x3a2641(0xd9)) + -parseInt(_0x3a2641(0xda)) * parseInt(_0x3a2641(0xdb)) + -parseInt(_0x3a2641(0xdc)) * -parseInt(_0x3a2641(0xdd)) + -parseInt(_0x3a2641(0xde)) * parseInt(_0x3a2641(0xdf)) + -parseInt(_0x3a2641(0xe0)) + parseInt(_0x3a2641(0xe1));

            if (_0x4a5657 === _0x33f227) break;else _0xc11062.push(_0xc11062.shift());
        } catch (_0x5252d2) {
            _0xc11062.push(_0xc11062.shift());
        }
    }
})(_0x5e17, 141496), Debug = debug[_0x1fe00e(0xe2)];
var break_point_hit_count;

function listener(_0x12a545, _0x2afd56, _0x3e7029, _0x54791a) {
    const _0xc155f1 = _0x1fe00e;
    const _0x552df4 = {
        'emokX': function (_0x5622cb, _0x29b1e3) {
            return _0x5622cb == _0x29b1e3;
        }
    };

    _0x552df4[_0xc155f1(0xe3)](_0x12a545, Debug[_0xc155f1(0xe4)][_0xc155f1(0xe5)]) && break_point_hit_count++;
}
function _0x2922(_0x335a08, _0x262282) {
    return _0x2922 = function (_0xe232e6, _0xb22f1b) {
        _0xe232e6 = _0xe232e6 - 216;
        const _0x1487b7 = _0x5e17[_0xe232e6];

        return _0x1487b7;
    }, _0x2922(_0x335a08, _0x262282);
}
;
Debug[_0x1fe00e(0xe6)](listener);
function f() {
    a = 1, b = 2;
}
;
function g() {
    a = 1, b = 2;
}
function h() {}
break_point_hit_count = 0, bp1 = Debug[_0x1fe00e(0xe7)](f), f(), assertEquals(1, break_point_hit_count), assertThrows(() => Debug[_0x1fe00e(0xe7)](f)), f(), assertEquals(2, break_point_hit_count), Debug[_0x1fe00e(0xe8)](bp1), f(), assertEquals(2, break_point_hit_count), break_point_hit_count = 0, bp1 = Debug.setBreakPoint(g), g(), assertEquals(1, break_point_hit_count), assertThrows(() => Debug.setBreakPoint(g)), g(), assertEquals(2, break_point_hit_count), Debug[_0x1fe00e(0xe8)](bp1), g(), assertEquals(2, break_point_hit_count), test_count = 10, break_point_hit_count = 0;
for (var i = 0; i < test_count; i++) {
    i == 0 ? Debug.setBreakPoint(h) : assertThrows(() => Debug[_0x1fe00e(0xe7)](h)), h();
}
assertEquals(test_count, break_point_hit_count);
