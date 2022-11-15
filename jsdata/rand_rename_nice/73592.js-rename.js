'use strict';
import assert from "assert";
import lodashStable from "lodash";
import{
  set as set,
  falsey as falsey,
  stubFalse as stubFalse,
  args as args,
  slice as slice,
  symbol as symbol,
  weakSet as weakSet,
  realm as realm
}from "./utils.js";
import isSet from "../isSet.js";
describe("isSet", function() {
  it("should return `true` for sets", function() {
    if (Set) {
      assert.strictEqual(isSet(set), true);
    }
  });
  it("should return `false` for non-sets", function() {
    var expected = lodashStable.map(falsey, stubFalse);
    var actual = lodashStable.map(falsey, function(array, length) {
      return length ? isSet(array) : isSet();
    });
    assert.deepStrictEqual(actual, expected);
    assert.strictEqual(isSet(args), false);
    assert.strictEqual(isSet([1, 2, 3]), false);
    assert.strictEqual(isSet(true), false);
    assert.strictEqual(isSet(new Date), false);
    assert.strictEqual(isSet(new Error), false);
    assert.strictEqual(isSet(_), false);
    assert.strictEqual(isSet(slice), false);
    assert.strictEqual(isSet({
      a : 1
    }), false);
    assert.strictEqual(isSet(1), false);
    assert.strictEqual(isSet(/x/), false);
    assert.strictEqual(isSet("a"), false);
    assert.strictEqual(isSet(symbol), false);
    assert.strictEqual(isSet(weakSet), false);
  });
  it("should work for objects with a non-function `constructor` (test in IE 11)", function() {
    var replaceVersionsInFile = [false, true];
    var recordWithMessage = lodashStable.map(replaceVersionsInFile, stubFalse);
    var fakeLoggingOptions_ = lodashStable.map(replaceVersionsInFile, function(AnnotationsManager) {
      return isSet({
        constructor : AnnotationsManager
      });
    });
    assert.deepStrictEqual(fakeLoggingOptions_, recordWithMessage);
  });
  it("should work with weak sets from another realm", function() {
    if (realm.set) {
      assert.strictEqual(isSet(realm.set), true);
    }
  });
});

