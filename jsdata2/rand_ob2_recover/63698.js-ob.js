assertTrue(isNaN(Math['expm1'](NaN))), assertTrue(isNaN(Math[_0x4a02b3(252)](function () {
}))), assertTrue(isNaN(Math[_0x4a02b3(252)]({
    'toString': function () {
        return NaN;
    }
}))), assertTrue(isNaN(Math[_0x4a02b3(252)]({
    'valueOf': function () {
        var _0xef8642 = _0x4a02b3;
        return _0xef8642(253);
    }
}))), assertEquals(Infinity, 1 / Math['expm1'](0)), assertEquals(-Infinity, 1 / Math[_0x4a02b3(252)](-0)), assertEquals(Infinity, Math[_0x4a02b3(252)](Infinity)), assertEquals(-1, Math[_0x4a02b3(252)](-Infinity));
for (var x = 1; x < 700; x += 0.25) {
    var expected = Math['exp'](x) - 1;
    assertEqualsDelta(expected, Math[_0x4a02b3(252)](x), expected * 1e-15), expected = Math[_0x4a02b3(254)](-x) - 1, assertEqualsDelta(expected, Math[_0x4a02b3(252)](-x), -expected * 1e-15);
}
function expm1(_0x485437) {
    return _0x485437 * (1 + _0x485437 * (1 / 2 + _0x485437 * (1 / 6 + _0x485437 * (1 / 24 + _0x485437 * (1 / 120 + _0x485437 * (1 / 720 + _0x485437 * (1 / 5040 + _0x485437 * (1 / 40320 + _0x485437 * (1 / 362880 + _0x485437 * (1 / 3628800))))))))));
}
for (var x = 0.1; x > 1e-300; x *= 0.8) {
    var expected = expm1(x);
    assertEqualsDelta(expected, Math['expm1'](x), expected * 1e-15);
}
function _0x55f3(_0x3cd9ba, _0x4334c3) {
    return _0x55f3 = function (_0x466c54, _0x55f387) {
        _0x466c54 = _0x466c54 - 242;
        var _0x45ddcb = _0x466c[_0x466c54];
        return _0x45ddcb;
    }, _0x55f3(_0x3cd9ba, _0x4334c3);
}
assertEquals(Infinity, Math[_0x4a02b3(252)](709.8)), assertEquals(Infinity, Math[_0x4a02b3(254)](1.7976931348623157e+308)), assertEquals(-1, Math[_0x4a02b3(252)](-56 * Math[_0x4a02b3(255)])), assertEquals(-1, Math[_0x4a02b3(252)](-50)), assertEquals(-1, Math[_0x4a02b3(252)](-1.7976931348623157e+308)), assertEquals(Math['E'] - 1, Math[_0x4a02b3(252)](1)), assertEquals(1 / Math['E'] - 1, Math[_0x4a02b3(252)](-1)), assertEquals(6.38905609893065, Math['expm1'](2)), assertEquals(-0.8646647167633873, Math[_0x4a02b3(252)](-2)), assertEquals(0, Math[_0x4a02b3(252)](0)), assertEquals(Math[_0x4a02b3(256)](2, -55), Math['expm1'](Math[_0x4a02b3(256)](2, -55))), assertEquals(0.18920711500272105, Math[_0x4a02b3(252)](0.25 * Math['LN2'])), assertEquals(-0.5, Math[_0x4a02b3(252)](-Math[_0x4a02b3(255)])), assertEquals(1, Math['expm1'](Math[_0x4a02b3(255)])), assertEquals(144115188075855820, Math[_0x4a02b3(252)](57 * Math[_0x4a02b3(255)])), assertEquals(524286.99999999994, Math[_0x4a02b3(252)](19 * Math['LN2'])), assertEquals(1048575, Math['expm1'](20 * Math[_0x4a02b3(255)]));