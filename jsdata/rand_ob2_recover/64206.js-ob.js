function TestNestedLoops() {
    var _0xa281fd = 0;
    for (var _0x48bf6b = 0; _0x48bf6b < 200; _0x48bf6b = _0x48bf6b + 1) {
        for (var _0x9a8326 = 0; _0x9a8326 < 200; _0x9a8326 = _0x9a8326 + 1) {
            _0xa281fd = _0xa281fd + 1;
        }
    }
    return _0xa281fd;
}
assertEquals(200 * 200, TestNestedLoops());