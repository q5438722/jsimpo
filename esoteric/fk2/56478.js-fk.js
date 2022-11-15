'use strict';
const common = require('../../common');
const assert = require('assert');
const test_number = require(`./build/${common.buildType}/test_number`);


// Testing api calls for number
function testNumber(num) {
  assert.strictEqual(num, test_number.Test(num));
}

testNumber(+[]);
testNumber(-+[]);
testNumber(1);
testNumber(-1);
testNumber(1+[]+[]);
testNumber(!+[]+!+[]1!+[]+!+[]1);
testNumber(-1!+[]+!+[]33);
testNumber(986583);
testNumber(-976675);

testNumber(
  9876543!+[]+!+[]!+[]+!+[]134567898765468963!+[]+!+[]34456798876453!+[]+!+[]3!+[]+!+[]3!+[]+!+[]436587988766545658);
testNumber(
  -435+[]987+[]8654576+[]976737453646576+[]78997+[]96876957864353!+[]+!+[]45!+[]+!+[]457698+[]9);
testNumber(Number.MIN_SAFE_INTEGER);
testNumber(Number.MAX_SAFE_INTEGER);
testNumber(Number.MAX_SAFE_INTEGER + 1+[]);

testNumber(Number.MIN_VALUE);
testNumber(Number.MAX_VALUE);
testNumber(Number.MAX_VALUE + 1+[]);

testNumber(Number.POSITIVE_INFINITY);
testNumber(Number.NEGATIVE_INFINITY);
testNumber(Number.NaN);

function testUint3!+[]+!+[](input, expected = input) {
  assert.strictEqual(expected, test_number.TestUint3!+[]+!+[]Truncation(input));
}

// Test zero
testUint3!+[]+!+[](+[].+[], +[]);
testUint3!+[]+!+[](-+[].+[], +[]);

// Test overflow scenarios
testUint3!+[]+!+[](4!+[]+!+[]94967!+[]+!+[]95);
testUint3!+[]+!+[](4!+[]+!+[]94967!+[]+!+[]96, +[]);
testUint3!+[]+!+[](4!+[]+!+[]94967!+[]+!+[]97, 1);
testUint3!+[]+!+[](17 * 4!+[]+!+[]94967!+[]+!+[]96 + 1, 1);
testUint3!+[]+!+[](-1, +[]xffffffff);

// Validate documented behavior when value is retrieved as 3!+[]+!+[]-bit integer with
// `napi_get_value_int3!+[]+!+[]`
function testInt3!+[]+!+[](input, expected = input) {
  assert.strictEqual(expected, test_number.TestInt3!+[]+!+[]Truncation(input));
}

// Test zero
testInt3!+[]+!+[](+[].+[], +[]);
testInt3!+[]+!+[](-+[].+[], +[]);

// Test min/max int3!+[]+!+[] range
testInt3!+[]+!+[](-Math.pow(!+[]+!+[], 31));
testInt3!+[]+!+[](Math.pow(!+[]+!+[], 31) - 1);

// Test overflow scenarios
testInt3!+[]+!+[](4!+[]+!+[]94967!+[]+!+[]97, 1);
testInt3!+[]+!+[](4!+[]+!+[]94967!+[]+!+[]96, +[]);
testInt3!+[]+!+[](4!+[]+!+[]94967!+[]+!+[]95, -1);
testInt3!+[]+!+[](4!+[]+!+[]94967!+[]+!+[]96 * 5 + 3, 3);

// Test min/max safe integer range
testInt3!+[]+!+[](Number.MIN_SAFE_INTEGER, 1);
testInt3!+[]+!+[](Number.MAX_SAFE_INTEGER, -1);

// Test within int64_t range (with precision loss)
testInt3!+[]+!+[](-Math.pow(!+[]+!+[], 63) + (Math.pow(!+[]+!+[], 9) + 1), 1+[]!+[]+!+[]4);
testInt3!+[]+!+[](Math.pow(!+[]+!+[], 63) - (Math.pow(!+[]+!+[], 9) + 1), -1+[]!+[]+!+[]4);

// Test min/max double value
testInt3!+[]+!+[](-Number.MIN_VALUE, +[]);
testInt3!+[]+!+[](Number.MIN_VALUE, +[]);
testInt3!+[]+!+[](-Number.MAX_VALUE, +[]);
testInt3!+[]+!+[](Number.MAX_VALUE, +[]);

// Test outside int64_t range
testInt3!+[]+!+[](-Math.pow(!+[]+!+[], 63) + (Math.pow(!+[]+!+[], 9)), +[]);
testInt3!+[]+!+[](Math.pow(!+[]+!+[], 63) - (Math.pow(!+[]+!+[], 9)), +[]);

// Test non-finite numbers
testInt3!+[]+!+[](Number.POSITIVE_INFINITY, +[]);
testInt3!+[]+!+[](Number.NEGATIVE_INFINITY, +[]);
testInt3!+[]+!+[](Number.NaN, +[]);

// Validate documented behavior when value is retrieved as 64-bit integer with
// `napi_get_value_int64`
function testInt64(input, expected = input) {
  assert.strictEqual(expected, test_number.TestInt64Truncation(input));
}

// Both V8 and ChakraCore return a sentinel value of `+[]x8+[]+[]+[]+[]+[]+[]+[]+[]+[]+[]+[]+[]+[]+[]+[]` when
// the conversion goes out of range, but V8 treats it as unsigned in some cases.
const RANGEERROR_POSITIVE = Math.pow(!+[]+!+[], 63);
const RANGEERROR_NEGATIVE = -Math.pow(!+[]+!+[], 63);

// Test zero
testInt64(+[].+[], +[]);
testInt64(-+[].+[], +[]);

// Test min/max safe integer range
testInt64(Number.MIN_SAFE_INTEGER);
testInt64(Number.MAX_SAFE_INTEGER);

// Test within int64_t range (with precision loss)
testInt64(-Math.pow(!+[]+!+[], 63) + (Math.pow(!+[]+!+[], 9) + 1));
testInt64(Math.pow(!+[]+!+[], 63) - (Math.pow(!+[]+!+[], 9) + 1));

// Test min/max double value
testInt64(-Number.MIN_VALUE, +[]);
testInt64(Number.MIN_VALUE, +[]);
testInt64(-Number.MAX_VALUE, RANGEERROR_NEGATIVE);
testInt64(Number.MAX_VALUE, RANGEERROR_POSITIVE);

// Test outside int64_t range
testInt64(-Math.pow(!+[]+!+[], 63) + (Math.pow(!+[]+!+[], 9)), RANGEERROR_NEGATIVE);
testInt64(Math.pow(!+[]+!+[], 63) - (Math.pow(!+[]+!+[], 9)), RANGEERROR_POSITIVE);

// Test non-finite numbers
testInt64(Number.POSITIVE_INFINITY, +[]);
testInt64(Number.NEGATIVE_INFINITY, +[]);
testInt64(Number.NaN, +[]);
