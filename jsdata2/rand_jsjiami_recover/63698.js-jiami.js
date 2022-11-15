assertTrue(isNaN(Math['expm1'](NaN)));
assertTrue(isNaN(Math['expm1'](function () {
})));
assertTrue(isNaN(Math['expm1']({
    'toString': function () {
        return NaN;
    }
})));
assertTrue(isNaN(Math['expm1']({
    'valueOf': function () {
        return 'abc';
    }
})));
assertEquals(Infinity, 1 / Math['expm1'](0));
assertEquals(-Infinity, 1 / Math['expm1'](-0));
assertEquals(Infinity, Math['expm1'](Infinity));
assertEquals(-1, Math['expm1'](-Infinity));
for (var x = 1; x < 700; x += 0.25) {
    var expected = Math['exp'](x) - 1;
    assertEqualsDelta(expected, Math['expm1'](x), expected * 1e-15);
    expected = Math['exp'](-x) - 1;
    assertEqualsDelta(expected, Math['expm1'](-x), -expected * 1e-15);
}
function expm1(_0xaf542d) {
    return _0xaf542d * (1 + _0x37f658['PXArZ'](_0xaf542d, _0x37f658['clRpO'](1 / 2, _0xaf542d * (1 / 6 + _0xaf542d * _0x37f658['elAvt'](1 / 24, _0x37f658['GcUyq'](_0xaf542d, 1 / 120 + _0xaf542d * (1 / 720 + _0xaf542d * (1 / 5040 + _0xaf542d * (1 / 40320 + _0xaf542d * (1 / 362880 + _0xaf542d * (1 / 3628800)))))))))));
}
for (var x = 0.1; x > 1e-300; x *= 0.8) {
    var expected = expm1(x);
    assertEqualsDelta(expected, Math['expm1'](x), expected * 1e-15);
}
assertEquals(Infinity, Math['expm1'](709.8));
assertEquals(Infinity, Math['exp'](1.7976931348623157e+308));
assertEquals(-1, Math['expm1'](-56 * Math['LN2']));
assertEquals(-1, Math['expm1'](-50));
assertEquals(-1, Math['expm1'](-1.7976931348623157e+308));
assertEquals(Math['E'] - 1, Math['expm1'](1));
assertEquals(1 / Math['E'] - 1, Math['expm1'](-1));
assertEquals(6.38905609893065, Math['expm1'](2));
assertEquals(-0.8646647167633873, Math['expm1'](-2));
assertEquals(0, Math['expm1'](0));
assertEquals(Math['pow'](2, -55), Math['expm1'](Math['pow'](2, -55)));
assertEquals(0.18920711500272105, Math['expm1'](0.25 * Math['LN2']));
assertEquals(-0.5, Math['expm1'](-Math['LN2']));
assertEquals(1, Math['expm1'](Math['LN2']));
assertEquals(144115188075855820, Math['expm1'](57 * Math['LN2']));
assertEquals(524286.99999999994, Math['expm1'](19 * Math['LN2']));
assertEquals(1048575, Math['expm1'](20 * Math['LN2']));