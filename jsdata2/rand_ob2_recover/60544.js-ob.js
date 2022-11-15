(function testSeal() {
    var _0x35e0cb = _0x3d8b, _0x12b959 = arguments, _0x2f95b5 = Symbol();
    _0x12b959[_0x2f95b5] = 123, Object['seal'](_0x12b959), assertTrue(Object[_0x35e0cb(255)](_0x12b959));
    var _0x10b86f = Object[_0x35e0cb(256)](_0x12b959, _0x2f95b5);
    assertEquals(123, _0x10b86f[_0x35e0cb(257)]), assertFalse(_0x10b86f[_0x35e0cb(258)]), assertTrue(_0x10b86f[_0x35e0cb(259)]);
}(), function testFreeze() {
    var _0x3dc682 = _0x3d8b, _0x329fd4 = arguments, _0x23c1ab = Symbol();
    _0x329fd4[_0x23c1ab] = 123, Object['freeze'](_0x329fd4), assertTrue(Object[_0x3dc682(260)](_0x329fd4));
    var _0x39278e = Object[_0x3dc682(256)](_0x329fd4, _0x23c1ab);
    assertEquals(123, _0x39278e['value']), assertFalse(_0x39278e[_0x3dc682(258)]), assertFalse(_0x39278e['writable']);
}(), function testIsFrozenAndIsSealed() {
    var _0x44814c = _0x3d8b, _0x4a197b = Symbol(), _0x1db540 = { [_0x4a197b]: 123 };
    Object[_0x44814c(261)](_0x1db540), assertFalse(Object['isFrozen'](_0x1db540)), assertFalse(Object[_0x44814c(255)](_0x1db540));
}());