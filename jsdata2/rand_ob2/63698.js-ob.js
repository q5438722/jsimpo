var _0x466c = [
    'LN2',
    'pow',
    '169856AVVTLs',
    '387661hPIFrA',
    '1066113qiervh',
    '1249753QEONEC',
    '1iLIRTf',
    '7DcTrhW',
    '142951qfbhXu',
    '1346503QoaGYX',
    '9jvGwKu',
    '234618pGcHnx',
    'expm1',
    'abc',
    'exp'
];
var _0x4a02b3 = _0x55f3;
(function (_0x64914f, _0x28f663) {
    var _0x76bd1e = _0x55f3;
    while (!![]) {
        try {
            var _0x12f457 = parseInt(_0x76bd1e(0xf2)) + parseInt(_0x76bd1e(0xf3)) + -parseInt(_0x76bd1e(0xf4)) + parseInt(_0x76bd1e(0xf5)) * -parseInt(_0x76bd1e(0xf6)) + parseInt(_0x76bd1e(0xf7)) * -parseInt(_0x76bd1e(0xf8)) + parseInt(_0x76bd1e(0xf9)) + parseInt(_0x76bd1e(0xfa)) * parseInt(_0x76bd1e(0xfb));
            if (_0x12f457 === _0x28f663)
                break;
            else
                _0x64914f['push'](_0x64914f['shift']());
        } catch (_0x49307d) {
            _0x64914f['push'](_0x64914f['shift']());
        }
    }
}(_0x466c, 0xaaab3), assertTrue(isNaN(Math['expm1'](NaN))), assertTrue(isNaN(Math[_0x4a02b3(0xfc)](function () {
}))), assertTrue(isNaN(Math[_0x4a02b3(0xfc)]({
    'toString': function () {
        return NaN;
    }
}))), assertTrue(isNaN(Math[_0x4a02b3(0xfc)]({
    'valueOf': function () {
        var _0xef8642 = _0x4a02b3;
        return _0xef8642(0xfd);
    }
}))), assertEquals(Infinity, 0x1 / Math['expm1'](0x0)), assertEquals(-Infinity, 0x1 / Math[_0x4a02b3(0xfc)](-0x0)), assertEquals(Infinity, Math[_0x4a02b3(0xfc)](Infinity)), assertEquals(-0x1, Math[_0x4a02b3(0xfc)](-Infinity)));
for (var x = 0x1; x < 0x2bc; x += 0.25) {
    var expected = Math['exp'](x) - 0x1;
    assertEqualsDelta(expected, Math[_0x4a02b3(0xfc)](x), expected * 1e-15), expected = Math[_0x4a02b3(0xfe)](-x) - 0x1, assertEqualsDelta(expected, Math[_0x4a02b3(0xfc)](-x), -expected * 1e-15);
}
function expm1(_0x485437) {
    return _0x485437 * (0x1 + _0x485437 * (0x1 / 0x2 + _0x485437 * (0x1 / 0x6 + _0x485437 * (0x1 / 0x18 + _0x485437 * (0x1 / 0x78 + _0x485437 * (0x1 / 0x2d0 + _0x485437 * (0x1 / 0x13b0 + _0x485437 * (0x1 / 0x9d80 + _0x485437 * (0x1 / 0x58980 + _0x485437 * (0x1 / 0x375f00))))))))));
}
for (var x = 0.1; x > 1e-300; x *= 0.8) {
    var expected = expm1(x);
    assertEqualsDelta(expected, Math['expm1'](x), expected * 1e-15);
}
function _0x55f3(_0x3cd9ba, _0x4334c3) {
    return _0x55f3 = function (_0x466c54, _0x55f387) {
        _0x466c54 = _0x466c54 - 0xf2;
        var _0x45ddcb = _0x466c[_0x466c54];
        return _0x45ddcb;
    }, _0x55f3(_0x3cd9ba, _0x4334c3);
}
assertEquals(Infinity, Math[_0x4a02b3(0xfc)](709.8)), assertEquals(Infinity, Math[_0x4a02b3(0xfe)](0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)), assertEquals(-0x1, Math[_0x4a02b3(0xfc)](-0x38 * Math[_0x4a02b3(0xff)])), assertEquals(-0x1, Math[_0x4a02b3(0xfc)](-0x32)), assertEquals(-0x1, Math[_0x4a02b3(0xfc)](-0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)), assertEquals(Math['E'] - 0x1, Math[_0x4a02b3(0xfc)](0x1)), assertEquals(0x1 / Math['E'] - 0x1, Math[_0x4a02b3(0xfc)](-0x1)), assertEquals(6.38905609893065, Math['expm1'](0x2)), assertEquals(-0.8646647167633873, Math[_0x4a02b3(0xfc)](-0x2)), assertEquals(0x0, Math[_0x4a02b3(0xfc)](0x0)), assertEquals(Math[_0x4a02b3(0x100)](0x2, -0x37), Math['expm1'](Math[_0x4a02b3(0x100)](0x2, -0x37))), assertEquals(0.18920711500272105, Math[_0x4a02b3(0xfc)](0.25 * Math['LN2'])), assertEquals(-0.5, Math[_0x4a02b3(0xfc)](-Math[_0x4a02b3(0xff)])), assertEquals(0x1, Math['expm1'](Math[_0x4a02b3(0xff)])), assertEquals(0x1ffffffffffffd0, Math[_0x4a02b3(0xfc)](0x39 * Math[_0x4a02b3(0xff)])), assertEquals(524286.99999999994, Math[_0x4a02b3(0xfc)](0x13 * Math['LN2'])), assertEquals(0xfffff, Math['expm1'](0x14 * Math[_0x4a02b3(0xff)]));
