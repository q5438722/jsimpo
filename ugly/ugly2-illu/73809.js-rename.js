import assert from "assert";import { slice } from "./utils.js";import dropRightWhile from "../dropRightWhile.js";describe("dropRightWhile", function () {
  const r = [1, 2, 3, 4];
  const t = [{ a: 0, b: 0 }, { a: 1, b: 1 }, { a: 2, b: 2 }];
  it("should drop elements while `predicate` returns truthy", function () {
    const t = dropRightWhile(r, function (t) {
      return t > 2;
    });
    assert.deepStrictEqual(t, [1, 2]);
  });it("should provide correct `predicate` arguments", function () {
    var t;
    dropRightWhile(r, function () {
      t = slice.call(arguments);
    });assert.deepStrictEqual(t, [4, 3, [1, 2, 3, 4]]);
  });it("should work with `_.matches` shorthands", function () {
    assert.deepStrictEqual(dropRightWhile(t, { b: 2 }), t.slice(0, 2));
  });it("should work with `_.matchesProperty` shorthands", function () {
    assert.deepStrictEqual(dropRightWhile(t, ["b", 2]), t.slice(0, 2));
  });it("should work with `_.property` shorthands", function () {
    assert.deepStrictEqual(dropRightWhile(t, "b"), t.slice(0, 1));
  });it("should return a wrapped value when chaining", function () {
    const t = _(r).dropRightWhile(function (t) {
      return t > 2;
    });

    assert.ok(t instanceof _);assert.deepEqual(t.value(), [1, 2]);
  });
});
