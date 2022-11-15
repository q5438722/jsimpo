'use strict';
import assert from "assert";
import{
  slice as slice
}from "./utils.js";
import dropRightWhile from "../dropRightWhile.js";
describe("dropRightWhile", function() {
  var r = [1, 2, 3, 4];
  var sp = [{
    a : 0,
    b : 0
  }, {
    a : 1,
    b : 1
  }, {
    a : 2,
    b : 2
  }];
  it("should drop elements while `predicate` returns truthy", function() {
    var fakeLoggingOptions_ = dropRightWhile(r, function(canCreateDiscussions) {
      return canCreateDiscussions > 2;
    });
    assert.deepStrictEqual(fakeLoggingOptions_, [1, 2]);
  });
  it("should provide correct `predicate` arguments", function() {
    var fakeLoggingOptions_;
    dropRightWhile(r, function() {
      fakeLoggingOptions_ = slice.call(arguments);
    });
    assert.deepStrictEqual(fakeLoggingOptions_, [4, 3, r]);
  });
  it("should work with `_.matches` shorthands", function() {
    assert.deepStrictEqual(dropRightWhile(sp, {
      b : 2
    }), sp.slice(0, 2));
  });
  it("should work with `_.matchesProperty` shorthands", function() {
    assert.deepStrictEqual(dropRightWhile(sp, ["b", 2]), sp.slice(0, 2));
  });
  it("should work with `_.property` shorthands", function() {
    assert.deepStrictEqual(dropRightWhile(sp, "b"), sp.slice(0, 1));
  });
  it("should return a wrapped value when chaining", function() {
    var a = _(r).dropRightWhile(function(canCreateDiscussions) {
      return canCreateDiscussions > 2;
    });
    assert.ok(a instanceof _);
    assert.deepEqual(a.value(), [1, 2]);
  });
});

