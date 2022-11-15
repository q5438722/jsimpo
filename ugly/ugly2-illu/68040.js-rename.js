it("should not bundle context requires with asyncMode === 'weak'", function () {
  const e = require.context(".", false, /two/, "weak");

  expect(function () {
    e("./two");
  }).toThrowError(/not available/);
});it("should find module with asyncMode === 'weak' when required elsewhere", function () {
  const e = require.context(".", false, /.+/, "weak");

  expect(e("./three")).toBe(3);require("./three");
});it("should find module with asyncMode === 'weak' when required elsewhere (recursive)", function () {
  const e = require.context(".", true, /.+/, "weak");

  expect(e("./dir/four")).toBe(4);require("./dir/four");
});
