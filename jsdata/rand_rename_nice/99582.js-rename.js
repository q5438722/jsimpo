'use strict';
const assert = require("assert");
const request = require("../../test-helpers/context").request;
describe("req.header", () => {
  it("should return the request header object", () => {
    const res = request();
    assert.deepStrictEqual(res.header, res.req.headers);
  });
  it("should set the request header object", () => {
    const res = request();
    res.header = {
      "X-Custom-Headerfield" : "Its one header, with headerfields"
    };
    assert.deepStrictEqual(res.header, res.req.headers);
  });
});

