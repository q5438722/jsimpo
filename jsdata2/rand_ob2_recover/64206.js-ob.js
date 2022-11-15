function TestNestedLoops() {
    var _0xf8b8b0 = 0;
    for (var _0x3c0aeb = 0; _0x3c0aeb < 200; _0x3c0aeb = _0x3c0aeb + 1) {
        for (var _0x50896e = 0; _0x50896e < 200; _0x50896e = _0x50896e + 1) {
            _0xf8b8b0 = _0xf8b8b0 + 1;
        }
    }
    return _0xf8b8b0;
}
assertEquals(200 * 200, TestNestedLoops());