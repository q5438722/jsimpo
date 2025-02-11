const settle = require("../../../lib/core/settle");

describe("core::settle", function () {
  var s;
  var o;
  beforeEach(function () {
    s = jasmine.createSpy("resolve");o = jasmine.createSpy("reject");
  });it("should resolve promise if status is not set", function () {
    const e = { config: { validateStatus: function () {
          return true;
        } } };
    settle(s, o, e);expect(s).toHaveBeenCalledWith(e);expect(o).not.toHaveBeenCalled();
  });it("should resolve promise if validateStatus is not set", function () {
    const e = { status: 500, config: {} };
    settle(s, o, e);expect(s).toHaveBeenCalledWith(e);expect(o).not.toHaveBeenCalled();
  });it("should resolve promise if validateStatus returns true", function () {
    const e = { status: 500, config: { validateStatus: function () {
          return true;
        } } };
    settle(s, o, e);expect(s).toHaveBeenCalledWith(e);expect(o).not.toHaveBeenCalled();
  });it("should reject promise if validateStatus returns false", function () {
    const e = { path: "/foo" };
    const t = { status: 500, config: { validateStatus: function () {
          return false;
        } }, request: e };
    settle(s, o, t);expect(s).not.toHaveBeenCalled();expect(o).toHaveBeenCalled();const a = o.calls.first().args[0];
    expect(a instanceof Error).toBe(true);expect(a.message).toBe("Request failed with status code 500");expect(a.config).toBe(t.config);expect(a.request).toBe(e);expect(a.response).toBe(t);
  });it("should pass status to validateStatus", function () {
    const e = jasmine.createSpy("validateStatus");
    const t = { status: 500, config: { validateStatus: e } };
    settle(s, o, t);expect(e).toHaveBeenCalledWith(500);
  });
});
