"use strict";
jest.setMock("../../BatchedBridge/NativeModules", { BlobModule: require("../__mocks__/BlobModule") });
const Blob = require("../Blob");

const File = require("../File");

describe("babel 7 smoke test", function () {
  it("should be able to extend a class with native name", function () {
    var e = false;
    class t {
      constructor() {
        e = true;return { foo: "PASS" };
      }
    }class o extends t {
      constructor() {
        super();
      }
    }expect(new o().foo).toBe("PASS");expect(e).toBe(true);
  });
});describe("Blob", function () {
  it("regression caused by circular dep && babel 7", function () {
    const e = new Blob([], { type: "image/jpeg" });
    expect(e).toBeInstanceOf(Blob);
  });
});describe("File", function () {
  it("should create empty file", () => {
    const e = new File([], "test.jpg");
    expect(e).toBeInstanceOf(File);expect(e.data.offset).toBe(0);expect(e.data.size).toBe(0);expect(e.size).toBe(0);expect(e.type).toBe("");expect(e.name).toBe("test.jpg");expect(e.lastModified).toEqual(expect.any(Number));
  });it("should create empty file with type", () => {
    const e = new File([], "test.jpg", { type: "image/jpeg" });
    expect(e.type).toBe("image/jpeg");
  });it("should create empty file with lastModified", () => {
    const e = new File([], "test.jpg", { lastModified: 1337 });
    expect(e.lastModified).toBe(1337);
  });it("should throw on invalid arguments", () => {
    expect(() => new File()).toThrow();expect(() => new File([])).toThrow();
  });
});
