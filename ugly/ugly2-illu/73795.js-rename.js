import assert from "assert";import lodashStable from "lodash";import { symbol, noop, mapCaches, LARGE_ARRAY_SIZE } from "./utils.js";describe("map caches", function () {
  const r = [null, undefined, false, true, 1, -Infinity, NaN, {}, "a", symbol || noop];
  const n = lodashStable.map(r, function (a, t) {
    const e = r.length - 1;
    return [a, r[e - t]];
  });
  function a(a) {
    const t = new mapCaches.Stack(a);
    const e = a ? a.length : 0;
    lodashStable.times(LARGE_ARRAY_SIZE - e, function () {
      t.set({}, {});
    });return { hashes: new mapCaches.Hash(a), "list caches": new mapCaches.ListCache(a), "map caches": new mapCaches.MapCache(a), "stack caches": new mapCaches.Stack(a), "large stacks": t };
  }lodashStable.forOwn(a(n), function (s, a) {
    const t = /^large/.test(a);
    it("should implement a `Map` interface for " + a, function () {
      lodashStable.each(r, function (a, t) {
        const e = n[t][1];
        assert.deepStrictEqual(s.get(a), e);assert.strictEqual(s.has(a), true);assert.strictEqual(s.delete(a), true);assert.strictEqual(s.has(a), false);assert.strictEqual(s.get(a), undefined);assert.strictEqual(s.delete(a), false);assert.strictEqual(s.set(a, e), s);assert.strictEqual(s.has(a), true);
      });assert.strictEqual(s.size, t ? LARGE_ARRAY_SIZE : r.length);assert.strictEqual(s.clear(), undefined);assert.ok(lodashStable.every(r, function (a) {
        return !s.has(a);
      }));
    });
  });lodashStable.forOwn(a(), function (t, a) {
    it("should support changing values of " + a, function () {
      lodashStable.each(r, function (a) {
        t.set(a, 1).set(a, 2);assert.strictEqual(t.get(a), 2);
      });
    });
  });
});