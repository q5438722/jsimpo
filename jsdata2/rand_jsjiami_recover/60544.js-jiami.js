(function testSeal() {
    var _0x4961ac = '2|5|6|8|0|4|1|7|3'['split']('|'), _0x1780dc = 0;
    while (!![]) {
        switch (_0x4961ac[_0x1780dc++]) {
        case '0':
            assertTrue(Object['isSealed'](_0x78a7ee));
            continue;
        case '1':
            assertEquals(123, _0x195b3d['value']);
            continue;
        case '2':
            var _0x78a7ee = arguments;
            continue;
        case '3':
            assertTrue(_0x195b3d['writable']);
            continue;
        case '4':
            var _0x195b3d = Object['getOwnPropertyDescriptor'](_0x78a7ee, _0x1a947c);
            continue;
        case '5':
            var _0x1a947c = Symbol();
            continue;
        case '6':
            _0x78a7ee[_0x1a947c] = 123;
            continue;
        case '7':
            assertFalse(_0x195b3d['configurable']);
            continue;
        case '8':
            Object['seal'](_0x78a7ee);
            continue;
        }
        break;
    }
}());
(function testFreeze() {
    var _0x11076e = arguments;
    var _0x47b23e = Symbol();
    _0x11076e[_0x47b23e] = 123;
    Object['freeze'](_0x11076e);
    assertTrue(Object['isFrozen'](_0x11076e));
    var _0x133262 = Object['getOwnPropertyDescriptor'](_0x11076e, _0x47b23e);
    assertEquals(123, _0x133262['value']);
    assertFalse(_0x133262['configurable']);
    assertFalse(_0x133262['writable']);
}());
(function testIsFrozenAndIsSealed() {
    var _0x3292e2 = '0|2|1|4|3'['split']('|'), _0x14985c = 0;
    while (!![]) {
        switch (_0x3292e2[_0x14985c++]) {
        case '0':
            var _0x1ae904 = Symbol();
            continue;
        case '1':
            Object['preventExtensions'](_0x515b46);
            continue;
        case '2':
            var _0x515b46 = { [_0x1ae904]: 123 };
            continue;
        case '3':
            assertFalse(Object['isSealed'](_0x515b46));
            continue;
        case '4':
            assertFalse(Object['isFrozen'](_0x515b46));
            continue;
        }
        break;
    }
}());