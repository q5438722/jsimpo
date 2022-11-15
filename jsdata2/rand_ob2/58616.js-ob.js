var _0x2a15 = [
    '2153gQSTgB',
    '277026QJQKmf',
    '813459fmECez',
    '1269863FwRPSM',
    'This\x20tests\x20that\x20speculation\x20recovery\x20of\x20destructive\x20additions\x20on\x20unboxed\x20integers\x20works.',
    'destructiveAddForBoxedInteger({x:1},\x202,\x204)',
    'destructiveAddForBoxedInteger({x:2147483647},\x202,\x204)',
    '2147483655',
    'destructiveAddForBoxedInteger({x:2},\x202147483647,\x204)',
    'destructiveAddForBoxedInteger({x:2147483647},\x202147483647,\x204)',
    '6442450945',
    '260745LzKjVb',
    '585467ZmVvxK',
    '294603obSJJb',
    '29dbBMGb'
];
function _0x91fc(_0x1d5083, _0x4a571d) {
    return _0x91fc = function (_0x2a150d, _0x91fc38) {
        _0x2a150d = _0x2a150d - 0x1ad;
        var _0x53893e = _0x2a15[_0x2a150d];
        return _0x53893e;
    }, _0x91fc(_0x1d5083, _0x4a571d);
}
var _0x39da5b = _0x91fc;
(function (_0x39a4a3, _0x4ace40) {
    var _0x4447d7 = _0x91fc;
    while (!![]) {
        try {
            var _0x6f2023 = parseInt(_0x4447d7(0x1ad)) + parseInt(_0x4447d7(0x1ae)) + -parseInt(_0x4447d7(0x1af)) + -parseInt(_0x4447d7(0x1b0)) * -parseInt(_0x4447d7(0x1b1)) + parseInt(_0x4447d7(0x1b2)) + parseInt(_0x4447d7(0x1b3)) + -parseInt(_0x4447d7(0x1b4));
            if (_0x6f2023 === _0x4ace40)
                break;
            else
                _0x39a4a3['push'](_0x39a4a3['shift']());
        } catch (_0x13d446) {
            _0x39a4a3['push'](_0x39a4a3['shift']());
        }
    }
}(_0x2a15, 0x6a1ec), description(_0x39da5b(0x1b5)));
function destructiveAddForBoxedInteger(_0x55bfb2, _0x34d47a, _0x5a25e8) {
    var _0x446835 = _0x55bfb2['x'], _0x30f08f = _0x446835 + _0x34d47a;
    return _0x5a25e8 + _0x30f08f + _0x34d47a;
}
for (var i = 0x0; i < 0x64; ++i) {
    destructiveAddForBoxedInteger({ 'x': 0x1 }, 0x2, 0x3);
}
shouldBe(_0x39da5b(0x1b6), '9'), shouldBe(_0x39da5b(0x1b7), _0x39da5b(0x1b8)), shouldBe(_0x39da5b(0x1b9), '4294967300'), shouldBe(_0x39da5b(0x1ba), _0x39da5b(0x1bb)), shouldBe('destructiveAddForBoxedInteger({x:1},\x202,\x202147483647)', '2147483652');
