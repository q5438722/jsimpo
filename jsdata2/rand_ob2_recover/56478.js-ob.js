const common = require(_0x41cff5(210)), assert = require(_0x41cff5(211)), test_number = require('./build/' + common[_0x41cff5(212)] + _0x41cff5(213));
function testNumber(_0x2628a1) {
    const _0x209f06 = _0x41cff5;
    assert[_0x209f06(214)](_0x2628a1, test_number[_0x209f06(215)](_0x2628a1));
}
testNumber(0), testNumber(-0), testNumber(1), testNumber(-1), testNumber(100), testNumber(2121), testNumber(-1233), testNumber(986583), testNumber(-976675), testNumber(9.87654322134568e+64), testNumber(-4.350987086545761e+63), testNumber(Number[_0x41cff5(216)]), testNumber(Number[_0x41cff5(217)]), testNumber(Number[_0x41cff5(217)] + 10), testNumber(Number['MIN_VALUE']), testNumber(Number[_0x41cff5(218)]), testNumber(Number[_0x41cff5(218)] + 10), testNumber(Number[_0x41cff5(219)]), testNumber(Number['NEGATIVE_INFINITY']), testNumber(Number['NaN']);
function testUint32(_0x739f73, _0x37d774 = _0x739f73) {
    const _0x3a0987 = _0x41cff5;
    assert[_0x3a0987(214)](_0x37d774, test_number['TestUint32Truncation'](_0x739f73));
}
testUint32(0, 0), testUint32(-0, 0), testUint32(4294967295), testUint32(4294967296, 0), testUint32(4294967297, 1), testUint32(17 * 4294967296 + 1, 1), testUint32(-1, 4294967295);
function testInt32(_0x48c424, _0x324c0e = _0x48c424) {
    const _0x5183d9 = _0x41cff5;
    assert['strictEqual'](_0x324c0e, test_number[_0x5183d9(220)](_0x48c424));
}
testInt32(0, 0), testInt32(-0, 0), testInt32(-Math[_0x41cff5(221)](2, 31)), testInt32(Math[_0x41cff5(221)](2, 31) - 1), testInt32(4294967297, 1), testInt32(4294967296, 0), testInt32(4294967295, -1), testInt32(4294967296 * 5 + 3, 3), testInt32(Number['MIN_SAFE_INTEGER'], 1), testInt32(Number[_0x41cff5(217)], -1), testInt32(-Math[_0x41cff5(221)](2, 63) + (Math[_0x41cff5(221)](2, 9) + 1), 1024), testInt32(Math[_0x41cff5(221)](2, 63) - (Math[_0x41cff5(221)](2, 9) + 1), -1024), testInt32(-Number[_0x41cff5(222)], 0), testInt32(Number['MIN_VALUE'], 0), testInt32(-Number[_0x41cff5(218)], 0), testInt32(Number['MAX_VALUE'], 0), testInt32(-Math[_0x41cff5(221)](2, 63) + Math[_0x41cff5(221)](2, 9), 0), testInt32(Math[_0x41cff5(221)](2, 63) - Math[_0x41cff5(221)](2, 9), 0), testInt32(Number[_0x41cff5(219)], 0), testInt32(Number[_0x41cff5(223)], 0), testInt32(Number[_0x41cff5(224)], 0);
function testInt64(_0x34a274, _0x821b3b = _0x34a274) {
    const _0x483fc0 = _0x41cff5;
    assert[_0x483fc0(214)](_0x821b3b, test_number[_0x483fc0(225)](_0x34a274));
}
const RANGEERROR_POSITIVE = Math[_0x41cff5(221)](2, 63), RANGEERROR_NEGATIVE = -Math[_0x41cff5(221)](2, 63);
testInt64(0, 0), testInt64(-0, 0), testInt64(Number[_0x41cff5(216)]), testInt64(Number['MAX_SAFE_INTEGER']), testInt64(-Math['pow'](2, 63) + (Math[_0x41cff5(221)](2, 9) + 1)), testInt64(Math[_0x41cff5(221)](2, 63) - (Math[_0x41cff5(221)](2, 9) + 1)), testInt64(-Number[_0x41cff5(222)], 0), testInt64(Number[_0x41cff5(222)], 0), testInt64(-Number[_0x41cff5(218)], RANGEERROR_NEGATIVE), testInt64(Number[_0x41cff5(218)], RANGEERROR_POSITIVE), testInt64(-Math[_0x41cff5(221)](2, 63) + Math[_0x41cff5(221)](2, 9), RANGEERROR_NEGATIVE), testInt64(Math[_0x41cff5(221)](2, 63) - Math[_0x41cff5(221)](2, 9), RANGEERROR_POSITIVE), testInt64(Number[_0x41cff5(219)], 0), testInt64(Number['NEGATIVE_INFINITY'], 0), testInt64(Number[_0x41cff5(224)], 0);