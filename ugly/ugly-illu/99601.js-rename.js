"use strict";

const request = require("../../test-helpers/context").request;

const assert = require("assert");

describe("req.charset", () => {
  describe("with no content-type present", () => {
    it("should return \"\"", () => {
      const t = request();
      assert(t.charset === "");
    });
  });describe("with charset present", () => {
    it("should return \"\"", () => {
      const t = request();
      t.header["content-type"] = "text/plain";assert(t.charset === "");
    });
  });describe("with a charset", () => {
    it("should return the charset", () => {
      const t = request();
      t.header["content-type"] = "text/plain; charset=utf-8";assert.strictEqual(t.charset, "utf-8");
    });it("should return \"\" if content-type is invalid", () => {
      const t = request();
      t.header["content-type"] = "application/json; application/text; charset=utf-8";assert.strictEqual(t.charset, "");
    });
  });
});
