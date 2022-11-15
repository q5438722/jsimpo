import assert from "assert";import lodashStable from "lodash";import { stubZero, falsey } from "./utils.js";import indexOf from "../indexOf.js";describe("indexOf", function () {
  const n = [1, 2, 3, 1, 2, 3];
  it("`_.indexOf` should return the index of the first matched value", function () {
    assert.strictEqual(indexOf(n, 3), 2);
  });it("`_.indexOf` should work with a positive `fromIndex`", function () {
    assert.strictEqual(indexOf(n, 1, 2), 3);
  });it("`_.indexOf` should work with a `fromIndex` >= `length`", function () {
    const t = [6, 8, Math.pow(2, 32), Infinity];
    const e = lodashStable.map(t, lodashStable.constant([-1, -1, -1]));
    const i = lodashStable.map(t, function (t) {
      return [indexOf(n, undefined, t), indexOf(n, 1, t), indexOf(n, "", t)];
    });
    assert.deepStrictEqual(i, e);
  });it("`_.indexOf` should work with a negative `fromIndex`", function () {
    assert.strictEqual(indexOf(n, 2, -3), 4);
  });it("`_.indexOf` should work with a negative `fromIndex` <= `-length`", function () {
    const t = [-6, -8, -Infinity];
    const e = lodashStable.map(t, stubZero);
    const i = lodashStable.map(t, function (t) {
      return indexOf(n, 1, t);
    });
    assert.deepStrictEqual(i, e);
  });it("`_.indexOf` should treat falsey `fromIndex` values as `0`", function () {
    const t = lodashStable.map(falsey, stubZero);
    const e = lodashStable.map(falsey, function (t) {
      return indexOf(n, 1, t);
    });
    assert.deepStrictEqual(e, t);
  });it("`_.indexOf` should coerce `fromIndex` to an integer", function () {
    assert.strictEqual(indexOf(n, 2, 1.2), 1);
  });
});
