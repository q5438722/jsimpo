import assert from "assert";import lodashStable from "lodash";import { falsey, stubA, stubB, noop } from "./utils.js";import nth from "../nth.js";describe("nth", function () {
  const n = ["a", "b", "c", "d"];
  it("should get the nth element of `array`", function () {
    const t = lodashStable.map(n, function (t, a) {
      return nth(n, a);
    });
    assert.deepStrictEqual(t, n);
  });it("should work with a negative `n`", function () {
    const t = lodashStable.map(lodashStable.range(1, 5), function (t) {
      return nth(n, -t);
    });
    assert.deepStrictEqual(t, ["d", "c", "b", "a"]);
  });it("should coerce `n` to an integer", function () {
    var t = falsey;
    var a = lodashStable.map(t, stubA);
    var e = lodashStable.map(t, function (t) {
      return t ? nth(n, t) : nth(n);
    });
    assert.deepStrictEqual(e, a);t = ["1", 1.6];a = lodashStable.map(t, stubB);e = lodashStable.map(t, function (t) {
      return nth(n, t);
    });assert.deepStrictEqual(e, a);
  });it("should return `undefined` for empty arrays", function () {
    const t = [null, undefined, []];
    const a = lodashStable.map(t, noop);
    const e = lodashStable.map(t, function (t) {
      return nth(t, 1);
    });
    assert.deepStrictEqual(e, a);
  });it("should return `undefined` for non-indexes", function () {
    const a = [1, 2];
    const t = [Infinity, 2];
    const e = lodashStable.map(t, noop);
    a[-1] = 3;const n = lodashStable.map(t, function (t) {
      return nth(a, t);
    });
    assert.deepStrictEqual(n, e);
  });
});
