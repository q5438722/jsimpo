import assert from "assert";import lodashStable from "lodash";import { noop, identity, isNpm, mapCaches } from "./utils.js";import mergeWith from "../mergeWith.js";import last from "../last.js";describe("mergeWith", function () {
  it("should handle merging when `customizer` returns `undefined`", function () {
    var e = mergeWith({ a: { b: [1, 1] } }, { a: { b: [0] } }, noop);
    assert.deepStrictEqual(e, { a: { b: [0, 1] } });e = mergeWith([], [undefined], identity);assert.deepStrictEqual(e, [undefined]);
  });it("should clone sources when `customizer` returns `undefined`", function () {
    const e = { a: { b: { c: 1 } } };
    const t = { a: { b: { d: 2 } } };
    mergeWith({}, e, t, noop);assert.deepStrictEqual(e.a.b, { c: 1 });
  });it("should defer to `customizer` for non `undefined` results", function () {
    const e = mergeWith({ a: { b: [0, 1] } }, { a: { b: [2] } }, function (e, t) {
      return lodashStable.isArray(e) ? e.concat(t) : undefined;
    });
    assert.deepStrictEqual(e, { a: { b: [0, 1, 2] } });
  });it("should provide `stack` to `customizer`", function () {
    var e;
    mergeWith({}, { a: { b: 2 } }, function () {
      e = last(arguments);
    });assert.ok(isNpm ? e.constructor.name == "Stack" : e instanceof mapCaches.Stack);
  });it("should overwrite primitives with source object clones", function () {
    const e = mergeWith({ a: 0 }, { a: { b: ["c"] } }, function (e, t) {
      return lodashStable.isArray(e) ? e.concat(t) : undefined;
    });
    assert.deepStrictEqual(e, { a: { b: ["c"] } });
  });it("should pop the stack of sources for each sibling property", function () {
    const e = ["b", "c"];
    const t = { a: ["a"] };
    const r = { a: e, b: e };
    const i = mergeWith(t, r, function (e, t) {
      return lodashStable.isArray(e) ? e.concat(t) : undefined;
    });
    assert.deepStrictEqual(i, { a: ["a", "b", "c"], b: ["b", "c"] });
  });
});
