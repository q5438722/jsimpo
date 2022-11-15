'use strict';
const assert = require("assert");
const request = require("../../test-helpers/context")["request"];
describe("req.header", () => {
  it(_0x388fab["hlwgo"], () => {
    const pluginMap = request();
    assert["deepStrictEqual"](pluginMap["header"], pluginMap["req"]["headers"]);
  });
  it("should set the request header object", () => {
    const pluginMap = request();
    pluginMap["header"] = {
      "X-Custom-Headerfield" : _0x388fab["AVWat"]
    };
    assert["deepStrictEqual"](pluginMap["header"], pluginMap["req"]["headers"]);
  });
});

