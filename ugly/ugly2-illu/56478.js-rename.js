"use strict";

const common = require("../../common");

const assert = require("assert");

const test_number = require(`./build/${common.buildType}/test_number`);

function testNumber(t) {
  assert.strictEqual(t, test_number.Test(t));
}assert.strictEqual(0, test_number.Test(0));assert.strictEqual(0, test_number.Test(0));assert.strictEqual(1, test_number.Test(1));assert.strictEqual(-1, test_number.Test(-1));assert.strictEqual(100, test_number.Test(100));assert.strictEqual(2121, test_number.Test(2121));assert.strictEqual(-1233, test_number.Test(-1233));assert.strictEqual(986583, test_number.Test(986583));assert.strictEqual(-976675, test_number.Test(-976675));assert.strictEqual(987654322134568e50, test_number.Test(987654322134568e50));assert.strictEqual(-4.350987086545761e+63, test_number.Test(-4.350987086545761e+63));assert.strictEqual(Number.MIN_SAFE_INTEGER, test_number.Test(Number.MIN_SAFE_INTEGER));assert.strictEqual(Number.MAX_SAFE_INTEGER, test_number.Test(Number.MAX_SAFE_INTEGER));assert.strictEqual(Number.MAX_SAFE_INTEGER + 10, test_number.Test(Number.MAX_SAFE_INTEGER + 10));assert.strictEqual(Number.MIN_VALUE, test_number.Test(Number.MIN_VALUE));assert.strictEqual(Number.MAX_VALUE, test_number.Test(Number.MAX_VALUE));assert.strictEqual(Number.MAX_VALUE + 10, test_number.Test(Number.MAX_VALUE + 10));assert.strictEqual(Number.POSITIVE_INFINITY, test_number.Test(Number.POSITIVE_INFINITY));assert.strictEqual(Number.NEGATIVE_INFINITY, test_number.Test(Number.NEGATIVE_INFINITY));assert.strictEqual(Number.NaN, test_number.Test(Number.NaN));function testUint32(t, e = t) {
  assert.strictEqual(e, test_number.TestUint32Truncation(t));
}assert.strictEqual(e, test_number.TestUint32Truncation(0));assert.strictEqual(e, test_number.TestUint32Truncation(0));assert.strictEqual(e, test_number.TestUint32Truncation(undefined));assert.strictEqual(e, test_number.TestUint32Truncation(0));assert.strictEqual(e, test_number.TestUint32Truncation(1));assert.strictEqual(e, test_number.TestUint32Truncation(1));assert.strictEqual(e, test_number.TestUint32Truncation(4294967295));function testInt32(t, e = t) {
  assert.strictEqual(e, test_number.TestInt32Truncation(t));
}assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(undefined));assert.strictEqual(e, test_number.TestInt32Truncation(undefined));assert.strictEqual(e, test_number.TestInt32Truncation(1));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(-1));assert.strictEqual(e, test_number.TestInt32Truncation(3));assert.strictEqual(e, test_number.TestInt32Truncation(1));assert.strictEqual(e, test_number.TestInt32Truncation(-1));assert.strictEqual(e, test_number.TestInt32Truncation(1024));assert.strictEqual(e, test_number.TestInt32Truncation(-1024));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(0));assert.strictEqual(e, test_number.TestInt32Truncation(0));function testInt64(t, e = t) {
  assert.strictEqual(e, test_number.TestInt64Truncation(t));
}const RANGEERROR_POSITIVE = Math.pow(2, 63);
const RANGEERROR_NEGATIVE = -Math.pow(2, 63);
assert.strictEqual(e, test_number.TestInt64Truncation(0));assert.strictEqual(e, test_number.TestInt64Truncation(0));assert.strictEqual(e, test_number.TestInt64Truncation(undefined));assert.strictEqual(e, test_number.TestInt64Truncation(undefined));assert.strictEqual(e, test_number.TestInt64Truncation(undefined));assert.strictEqual(e, test_number.TestInt64Truncation(undefined));assert.strictEqual(e, test_number.TestInt64Truncation(0));assert.strictEqual(e, test_number.TestInt64Truncation(0));assert.strictEqual(e, test_number.TestInt64Truncation(RANGEERROR_NEGATIVE));assert.strictEqual(e, test_number.TestInt64Truncation(RANGEERROR_POSITIVE));assert.strictEqual(e, test_number.TestInt64Truncation(RANGEERROR_NEGATIVE));assert.strictEqual(e, test_number.TestInt64Truncation(RANGEERROR_POSITIVE));assert.strictEqual(e, test_number.TestInt64Truncation(0));assert.strictEqual(e, test_number.TestInt64Truncation(0));assert.strictEqual(e, test_number.TestInt64Truncation(0));