import assert from "assert";import lodashStable from "lodash";import { args, toArgs } from "./utils.js";import pick from "../pick.js";describe("pick", function () {
  const t = toArgs(["a", "c"]);
  const a = { a: 1, b: 2, c: 3, d: 4 };
  const i = { a: 1, b: { c: 2, d: 3 } };
  it("should flatten `paths`", function () {
    assert.deepStrictEqual(pick(a, "a", "c"), { a: 1, c: 3 });assert.deepStrictEqual(pick(a, ["a", "d"], "c"), { a: 1, c: 3, d: 4 });
  });it("should support deep paths", function () {
    assert.deepStrictEqual(pick(i, "b.c"), { b: { c: 2 } });
  });it("should support path arrays", function () {
    const t = { "a.b": 1, a: { b: 2 } };
    const a = pick(t, [["a.b"]]);
    assert.deepStrictEqual(a, { "a.b": 1 });
  });it("should pick a key over a path", function () {
    const a = { "a.b": 1, a: { b: 2 } };
    lodashStable.each(["a.b", ["a.b"]], function (t) {
      assert.deepStrictEqual(pick(a, t), { "a.b": 1 });
    });
  });it("should coerce `paths` to strings", function () {
    assert.deepStrictEqual(pick({ 0: "a", 1: "b" }, 0), { 0: "a" });
  });it("should return an empty object when `object` is nullish", function () {
    lodashStable.each([null, undefined], function (t) {
      assert.deepStrictEqual(pick(t, "valueOf"), {});
    });
  });it("should work with a primitive `object`", function () {
    assert.deepStrictEqual(pick("", "slice"), { slice: "".slice });
  });it("should work with `arguments` object `paths`", function () {
    assert.deepStrictEqual(pick(a, t), { a: 1, c: 3 });
  });
});
