description(_0x39da5b(437));
function destructiveAddForBoxedInteger(_0x55bfb2, _0x34d47a, _0x5a25e8) {
    var _0x446835 = _0x55bfb2['x'], _0x30f08f = _0x446835 + _0x34d47a;
    return _0x5a25e8 + _0x30f08f + _0x34d47a;
}
for (var i = 0; i < 100; ++i) {
    destructiveAddForBoxedInteger({ 'x': 1 }, 2, 3);
}
shouldBe(_0x39da5b(438), '9'), shouldBe(_0x39da5b(439), _0x39da5b(440)), shouldBe(_0x39da5b(441), '4294967300'), shouldBe(_0x39da5b(442), _0x39da5b(443)), shouldBe('destructiveAddForBoxedInteger({x:1}, 2, 2147483647)', '2147483652');