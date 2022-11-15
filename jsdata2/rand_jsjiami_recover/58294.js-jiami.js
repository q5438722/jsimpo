description('This tests that a constant folding on a node that has obviously mispredicted type doesn\'t send the compiler into an infinite loop.');
function foo(_0x786989) {
    var _0x324e5b = 1;
    var _0xfcb947 = 4000;
    var _0x23f563 = _0x324e5b / _0xfcb947 + _0x786989;
    var _0x4635e7 = 0;
    for (var _0x4736f8 = 0; _0x4736f8 < 1000; ++_0x4736f8)
        _0x4635e7++;
    return _0x23f563 + _0x4635e7;
}
for (var i = 0; i < 5; ++i)
    shouldBe('foo(0.5)', '1000.50025');