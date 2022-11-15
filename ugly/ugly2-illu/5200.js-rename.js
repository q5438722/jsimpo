const assert = require("assert");

const util = require("../../");

suite("inspect");test("util.inspect - test for sparse array", function () {
  const e = ["foo", "bar", "baz"];
  assert.equal(util.inspect(e), "[ 'foo', 'bar', 'baz' ]");delete "bar";assert.equal(util.inspect(e), "[ 'foo', , 'baz' ]");assert.equal(util.inspect(e, true), "[ 'foo', , 'baz', [length]: 3 ]");assert.equal(util.inspect(new Array(5)), "[ , , , ,  ]");
});test("util.inspect -  exceptions should print the error message, not '{}'", function () {
  assert.equal(util.inspect(new Error()), "[Error]");assert.equal(util.inspect(new Error("FAIL")), "[Error: FAIL]");assert.equal(util.inspect(new TypeError("FAIL")), "[TypeError: FAIL]");assert.equal(util.inspect(new SyntaxError("FAIL")), "[SyntaxError: FAIL]");
});
