'use strict';
it("should not bundle context requires with asyncMode === 'weak'", function() {
  var result = require.context(".", false, /two/, "weak");
  expect(function() {
    result("./two");
  }).toThrowError(/not available/);
});
it("should find module with asyncMode === 'weak' when required elsewhere", function() {
  var result = require.context(".", false, /.+/, "weak");
  expect(result("./three")).toBe(3);
  require("./three");
});
it("should find module with asyncMode === 'weak' when required elsewhere (recursive)", function() {
  var result = require.context(".", true, /.+/, "weak");
  expect(result("./dir/four")).toBe(4);
  require("./dir/four");
});

