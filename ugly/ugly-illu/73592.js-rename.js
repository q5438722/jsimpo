import assert from "assert";import lodashStable from "lodash";import { set, falsey, stubFalse, args, slice, symbol, weakSet, realm } from "./utils.js";import isSet from "../isSet.js";describe("isSet", function () {
  it("should return `true` for sets", function () {
    if (Set) {
      assert.strictEqual(isSet(set), true);
    }
  });it("should return `false` for non-sets", function () {
    const s = lodashStable.map(falsey, stubFalse);
    const t = lodashStable.map(falsey, function (s, t) {
      return t ? isSet(s) : isSet();
    });
    assert.deepStrictEqual(t, s);assert.strictEqual(isSet(args), false);assert.strictEqual(isSet([1, 2, 3]), false);assert.strictEqual(isSet(true), false);assert.strictEqual(isSet(new Date()), false);assert.strictEqual(isSet(new Error()), false);assert.strictEqual(isSet(_), false);assert.strictEqual(isSet(slice), false);assert.strictEqual(isSet({ a: 1 }), false);assert.strictEqual(isSet(1), false);assert.strictEqual(isSet(/x/), false);assert.strictEqual(isSet("a"), false);assert.strictEqual(isSet(symbol), false);assert.strictEqual(isSet(weakSet), false);
  });it("should work for objects with a non-function `constructor` (test in IE 11)", function () {
    const s = [false, true];
    const t = lodashStable.map(s, stubFalse);
    const e = lodashStable.map(s, function (s) {
      return isSet({ constructor: s });
    });
    assert.deepStrictEqual(e, t);
  });it("should work with weak sets from another realm", function () {
    if (realm.set) {
      assert.strictEqual(isSet(realm.set), true);
    }
  });
});