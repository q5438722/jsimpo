assertTrue(isNaN(Math.expm1(NaN)));assertTrue(isNaN(Math.expm1(function () {})));assertTrue(isNaN(Math.expm1({ toString: function () {
    return NaN;
  } })));assertTrue(isNaN(Math.expm1({ valueOf: function () {
    return "abc";
  } })));assertEquals(Infinity, 1 / Math.expm1(0));assertEquals(-Infinity, 1 / Math.expm1(0));assertEquals(Infinity, Math.expm1(Infinity));assertEquals(-1, Math.expm1(-Infinity));for (var x = 1; x < 700; x += .25) {
  var expected = Math.exp(x) - 1;
  assertEqualsDelta(expected, Math.expm1(x), expected * 1e-15);expected = Math.exp(-x) - 1;assertEqualsDelta(expected, Math.expm1(-x), -expected * 1e-15);
}function expm1(a) {
  return a * (1 + a * (0.5 + a * (0.16666666666666666 + a * (0.041666666666666664 + a * (0.008333333333333333 + a * (0.001388888888888889 + a * (0.0001984126984126984 + a * (0.0000248015873015873 + a * (0.0000027557319223985893 + a * 2.755731922398589e-7)))))))));
}for (var x = .1; x > 1e-300; x *= .8) {
  var expected = expm1(x);
  assertEqualsDelta(expected, Math.expm1(x), expected * 1e-15);
}assertEquals(Infinity, Math.expm1(709.8));assertEquals(Infinity, Math.exp(17976931348623157e292));assertEquals(-1, Math.expm1(-56 * Math.LN2));assertEquals(-1, Math.expm1(-50));assertEquals(-1, Math.expm1(-1.7976931348623157e+308));assertEquals(Math.E - 1, Math.expm1(1));assertEquals(1 / Math.E - 1, Math.expm1(-1));assertEquals(6.38905609893065, Math.expm1(2));assertEquals(-0.8646647167633873, Math.expm1(-2));assertEquals(0, Math.expm1(0));assertEquals(Math.pow(2, -55), Math.expm1(Math.pow(2, -55)));assertEquals(.18920711500272105, Math.expm1(.25 * Math.LN2));assertEquals(-0.5, Math.expm1(-Math.LN2));assertEquals(1, Math.expm1(Math.LN2));assertEquals(0x1ffffffffffffd0, Math.expm1(57 * Math.LN2));assertEquals(524286.99999999994, Math.expm1(19 * Math.LN2));assertEquals(1048575, Math.expm1(20 * Math.LN2));
