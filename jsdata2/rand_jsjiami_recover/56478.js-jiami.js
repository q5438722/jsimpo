'use strict';
const common = require('../../common');
const assert = require('assert');
const test_number = require('./build/' + common['buildType'] + '/test_number');
function testNumber(_0x116653) {
    assert['strictEqual'](_0x116653, test_number['Test'](_0x116653));
}
testNumber(0);
testNumber(-0);
testNumber(1);
testNumber(-1);
testNumber(100);
testNumber(2121);
testNumber(-1233);
testNumber(986583);
testNumber(-976675);
testNumber(9.87654322134568e+64);
testNumber(-4.350987086545761e+63);
testNumber(Number['MIN_SAFE_INTEGER']);
testNumber(Number['MAX_SAFE_INTEGER']);
testNumber(Number['MAX_SAFE_INTEGER'] + 10);
testNumber(Number['MIN_VALUE']);
testNumber(Number['MAX_VALUE']);
testNumber(Number['MAX_VALUE'] + 10);
testNumber(Number['POSITIVE_INFINITY']);
testNumber(Number['NEGATIVE_INFINITY']);
testNumber(Number['NaN']);
function testUint32(_0x585d7f, _0x2a5f19 = _0x585d7f) {
    assert['strictEqual'](_0x2a5f19, test_number['TestUint32Truncation'](_0x585d7f));
}
testUint32(0, 0);
testUint32(-0, 0);
testUint32(4294967295);
testUint32(4294967296, 0);
testUint32(4294967297, 1);
testUint32(17 * 4294967296 + 1, 1);
testUint32(-1, 4294967295);
function testInt32(_0x200e0c, _0x254094 = _0x200e0c) {
    assert['strictEqual'](_0x254094, test_number['TestInt32Truncation'](_0x200e0c));
}
testInt32(0, 0);
testInt32(-0, 0);
testInt32(-Math['pow'](2, 31));
testInt32(Math['pow'](2, 31) - 1);
testInt32(4294967297, 1);
testInt32(4294967296, 0);
testInt32(4294967295, -1);
testInt32(4294967296 * 5 + 3, 3);
testInt32(Number['MIN_SAFE_INTEGER'], 1);
testInt32(Number['MAX_SAFE_INTEGER'], -1);
testInt32(-Math['pow'](2, 63) + (Math['pow'](2, 9) + 1), 1024);
testInt32(Math['pow'](2, 63) - (Math['pow'](2, 9) + 1), -1024);
testInt32(-Number['MIN_VALUE'], 0);
testInt32(Number['MIN_VALUE'], 0);
testInt32(-Number['MAX_VALUE'], 0);
testInt32(Number['MAX_VALUE'], 0);
testInt32(-Math['pow'](2, 63) + Math['pow'](2, 9), 0);
testInt32(Math['pow'](2, 63) - Math['pow'](2, 9), 0);
testInt32(Number['POSITIVE_INFINITY'], 0);
testInt32(Number['NEGATIVE_INFINITY'], 0);
testInt32(Number['NaN'], 0);
function testInt64(_0x140886, _0x4f0084 = _0x140886) {
    assert['strictEqual'](_0x4f0084, test_number['TestInt64Truncation'](_0x140886));
}
const RANGEERROR_POSITIVE = Math['pow'](2, 63);
const RANGEERROR_NEGATIVE = -Math['pow'](2, 63);
testInt64(0, 0);
testInt64(-0, 0);
testInt64(Number['MIN_SAFE_INTEGER']);
testInt64(Number['MAX_SAFE_INTEGER']);
testInt64(-Math['pow'](2, 63) + (Math['pow'](2, 9) + 1));
testInt64(Math['pow'](2, 63) - (Math['pow'](2, 9) + 1));
testInt64(-Number['MIN_VALUE'], 0);
testInt64(Number['MIN_VALUE'], 0);
testInt64(-Number['MAX_VALUE'], RANGEERROR_NEGATIVE);
testInt64(Number['MAX_VALUE'], RANGEERROR_POSITIVE);
testInt64(-Math['pow'](2, 63) + Math['pow'](2, 9), RANGEERROR_NEGATIVE);
testInt64(Math['pow'](2, 63) - Math['pow'](2, 9), RANGEERROR_POSITIVE);
testInt64(Number['POSITIVE_INFINITY'], 0);
testInt64(Number['NEGATIVE_INFINITY'], 0);
testInt64(Number['NaN'], 0);