"use strict";
describe("toDebugString", function () {
  it("should convert its argument to a string", function () {
    expect(toDebugString("string")).toEqual("string");expect(toDebugString(123)).toEqual("123");expect(toDebugString({ a: { b: "c" } })).toEqual("{\"a\":{\"b\":\"c\"}}");expect(toDebugString(function t() {
      const e = 10;
    })).toEqual("function fn()");expect(toDebugString()).toEqual("undefined");const t = {};
    t.a = t;expect(toDebugString(t)).toEqual("{\"a\":\"...\"}");expect(toDebugString([{}, {}])).toEqual("[{\"a\":\"...\"},\"...\"]");
  });it("should convert its argument that are objects to string based on maxDepth", function () {
    const t = { b: { c: { d: 1 } } };
    expect(toDebugString(t, 1)).toEqual("{\"b\":\"...\"}");expect(toDebugString(t, 2)).toEqual("{\"b\":{\"c\":\"...\"}}");expect(toDebugString(t, 3)).toEqual("{\"b\":{\"c\":{\"d\":1}}}");
  });they("should convert its argument that object to string  and ignore max depth when maxDepth = $prop", [NaN, null, undefined, true, false, -1, 0], function (t) {
    const e = { b: { c: { d: 1 } } };
    expect(toDebugString(e, t)).toEqual("{\"b\":{\"c\":{\"d\":1}}}");
  });
});describe("serializeObject", function () {
  it("should convert its argument to a string", function () {
    expect(serializeObject({ a: { b: "c" } })).toEqual("{\"a\":{\"b\":\"c\"}}");const t = {};
    t.a = t;expect(serializeObject(t)).toEqual("{\"a\":\"...\"}");expect(serializeObject([{}, {}])).toEqual("[{\"a\":\"...\"},\"...\"]");
  });it("should convert its argument that are objects to string based on maxDepth", function () {
    const t = { b: { c: { d: 1 } } };
    expect(serializeObject(t, 1)).toEqual("{\"b\":\"...\"}");expect(serializeObject(t, 2)).toEqual("{\"b\":{\"c\":\"...\"}}");expect(serializeObject(t, 3)).toEqual("{\"b\":{\"c\":{\"d\":1}}}");
  });they("should convert its argument that object to string  and ignore max depth when maxDepth = $prop", [NaN, null, undefined, true, false, -1, 0], function (t) {
    const e = { b: { c: { d: 1 } } };
    expect(serializeObject(e, t)).toEqual("{\"b\":{\"c\":{\"d\":1}}}");
  });
});
