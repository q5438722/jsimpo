var _0x391e = [
    '8817EDLmas',
    '326693lyLZCD',
    '1EdOeEz',
    'isSealed',
    'getOwnPropertyDescriptor',
    'value',
    'configurable',
    'writable',
    'isFrozen',
    'preventExtensions',
    '57986xuuoHW',
    '234894NsZKXb',
    '96GQGcTU',
    '3412mQSOQM',
    '55JpFFvo',
    '6371FLAMZx',
    '1vLHChb',
    '109638CpRMmB',
    '29jFaNVO'
];
function _0x3d8b(_0xdd5296, _0x578956) {
    return _0x3d8b = function (_0x391ec4, _0x3d8ba4) {
        _0x391ec4 = _0x391ec4 - 0xf3;
        var _0x4d10bd = _0x391e[_0x391ec4];
        return _0x4d10bd;
    }, _0x3d8b(_0xdd5296, _0x578956);
}
(function (_0xa7a9b0, _0xdf1db8) {
    var _0x284c34 = _0x3d8b;
    while (!![]) {
        try {
            var _0x47a09c = -parseInt(_0x284c34(0xf3)) + parseInt(_0x284c34(0xf4)) + parseInt(_0x284c34(0xf5)) * -parseInt(_0x284c34(0xf6)) + parseInt(_0x284c34(0xf7)) * -parseInt(_0x284c34(0xf8)) + parseInt(_0x284c34(0xf9)) * parseInt(_0x284c34(0xfa)) + parseInt(_0x284c34(0xfb)) * parseInt(_0x284c34(0xfc)) + -parseInt(_0x284c34(0xfd)) * -parseInt(_0x284c34(0xfe));
            if (_0x47a09c === _0xdf1db8)
                break;
            else
                _0xa7a9b0['push'](_0xa7a9b0['shift']());
        } catch (_0x2d897f) {
            _0xa7a9b0['push'](_0xa7a9b0['shift']());
        }
    }
}(_0x391e, 0x2e9ff), function testSeal() {
    var _0x35e0cb = _0x3d8b, _0x12b959 = arguments, _0x2f95b5 = Symbol();
    _0x12b959[_0x2f95b5] = 0x7b, Object['seal'](_0x12b959), assertTrue(Object[_0x35e0cb(0xff)](_0x12b959));
    var _0x10b86f = Object[_0x35e0cb(0x100)](_0x12b959, _0x2f95b5);
    assertEquals(0x7b, _0x10b86f[_0x35e0cb(0x101)]), assertFalse(_0x10b86f[_0x35e0cb(0x102)]), assertTrue(_0x10b86f[_0x35e0cb(0x103)]);
}(), function testFreeze() {
    var _0x3dc682 = _0x3d8b, _0x329fd4 = arguments, _0x23c1ab = Symbol();
    _0x329fd4[_0x23c1ab] = 0x7b, Object['freeze'](_0x329fd4), assertTrue(Object[_0x3dc682(0x104)](_0x329fd4));
    var _0x39278e = Object[_0x3dc682(0x100)](_0x329fd4, _0x23c1ab);
    assertEquals(0x7b, _0x39278e['value']), assertFalse(_0x39278e[_0x3dc682(0x102)]), assertFalse(_0x39278e['writable']);
}(), function testIsFrozenAndIsSealed() {
    var _0x44814c = _0x3d8b, _0x4a197b = Symbol(), _0x1db540 = { [_0x4a197b]: 0x7b };
    Object[_0x44814c(0x105)](_0x1db540), assertFalse(Object['isFrozen'](_0x1db540)), assertFalse(Object[_0x44814c(0xff)](_0x1db540));
}());
