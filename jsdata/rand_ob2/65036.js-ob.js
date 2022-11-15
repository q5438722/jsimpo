var _0x3d4d = [
    '49AdgRYs',
    '857HzgZrd',
    'Debug',
    'DebugEvent',
    'setListener',
    'setBreakPoint',
    'clearBreakPoint',
    '104270jQKqyk',
    '233702rmPUBl',
    '283122scKFKJ',
    '108022tgHEIu',
    '2121nAMLLA',
    '57qFXNbs',
    '74cMJQJG',
    '771ReaKKm'
];
var _0x3ffddc = _0x19bb;
(function (_0x4c290e, _0x3ee874) {
    var _0x10e61c = _0x19bb;
    while (!![]) {
        try {
            var _0x168fc6 = -parseInt(_0x10e61c(0xbc)) + -parseInt(_0x10e61c(0xbd)) + parseInt(_0x10e61c(0xbe)) + parseInt(_0x10e61c(0xbf)) + -parseInt(_0x10e61c(0xc0)) * -parseInt(_0x10e61c(0xc1)) + parseInt(_0x10e61c(0xc2)) * -parseInt(_0x10e61c(0xc3)) + -parseInt(_0x10e61c(0xc4)) * -parseInt(_0x10e61c(0xc5));
            if (_0x168fc6 === _0x3ee874)
                break;
            else
                _0x4c290e['push'](_0x4c290e['shift']());
        } catch (_0x264010) {
            _0x4c290e['push'](_0x4c290e['shift']());
        }
    }
}(_0x3d4d, 0x26d20), Debug = debug[_0x3ffddc(0xc6)]);
var break_point_hit_count;
function listener(_0x50bf08, _0x141885, _0x1ddbaf, _0x1b23d0) {
    var _0x5adf92 = _0x3ffddc;
    _0x50bf08 == Debug[_0x5adf92(0xc7)]['Break'] && break_point_hit_count++;
}
;
function _0x19bb(_0x512dff, _0x4bcad8) {
    return _0x19bb = function (_0x3d4d6b, _0x19bb1c) {
        _0x3d4d6b = _0x3d4d6b - 0xbc;
        var _0x39fa88 = _0x3d4d[_0x3d4d6b];
        return _0x39fa88;
    }, _0x19bb(_0x512dff, _0x4bcad8);
}
Debug[_0x3ffddc(0xc8)](listener);
function f() {
    a = 0x1, b = 0x2;
}
;
function g() {
    f();
}
function h() {
}
break_point_hit_count = 0x0, bp1 = Debug[_0x3ffddc(0xc9)](f), f(), assertEquals(0x1, break_point_hit_count), assertThrows(() => Debug[_0x3ffddc(0xc9)](f)), f(), assertEquals(0x2, break_point_hit_count), Debug[_0x3ffddc(0xca)](bp1), f(), assertEquals(0x2, break_point_hit_count), break_point_hit_count = 0x0, bp1 = Debug['setBreakPoint'](g), g(), assertEquals(0x1, break_point_hit_count), assertThrows(() => Debug[_0x3ffddc(0xc9)](g)), g(), assertEquals(0x2, break_point_hit_count), Debug[_0x3ffddc(0xca)](bp1), g(), assertEquals(0x2, break_point_hit_count), test_count = 0xa, break_point_hit_count = 0x0;
for (var i = 0x0; i < test_count; i++) {
    i == 0x0 ? Debug['setBreakPoint'](h) : assertThrows(() => Debug[_0x3ffddc(0xc9)](h)), h();
}
assertEquals(test_count, break_point_hit_count);
