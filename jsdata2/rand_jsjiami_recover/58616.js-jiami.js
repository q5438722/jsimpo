description('This tests that speculation recovery of destructive additions on unboxed integers works.');
function destructiveAddForBoxedInteger(_0x430076, _0x2559d1, _0x124c0b) {
    var _0x56dec4 = _0x430076['x'];
    var _0x506bda = _0x56dec4 + _0x2559d1;
    return _0x124c0b + _0x506bda + _0x2559d1;
}
for (var i = 0; i < 100; ++i) {
    destructiveAddForBoxedInteger({ 'x': 1 }, 2, 3);
}
shouldBe('destructiveAddForBoxedInteger({x:1}, 2, 4)', '9');
shouldBe('destructiveAddForBoxedInteger({x:2147483647}, 2, 4)', '2147483655');
shouldBe('destructiveAddForBoxedInteger({x:2}, 2147483647, 4)', '4294967300');
shouldBe('destructiveAddForBoxedInteger({x:2147483647}, 2147483647, 4)', '6442450945');
shouldBe('destructiveAddForBoxedInteger({x:1}, 2, 2147483647)', '2147483652');