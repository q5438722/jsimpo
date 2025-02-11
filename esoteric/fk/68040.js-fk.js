it("should not bundle context requires with asyncMode === 'weak'", function() {
	var contextRequire = require.context(".", ![], /two/, "weak");
	expect(function() {
		contextRequire("./two")
	}).toThrowError(/not available/);
});

it("should find module with asyncMode === 'weak' when required elsewhere", function() {
	var contextRequire = require.context(".", ![], /.+/, "weak");
	expect(contextRequire("./three")).toBe(3);
	require("./three"); // in a real app would be served as a separate chunk
});

it("should find module with asyncMode === 'weak' when required elsewhere (recursive)", function() {
	var contextRequire = require.context(".", !![], /.+/, "weak");
	expect(contextRequire("./dir/four")).toBe(4);
	require("./dir/four"); // in a real app would be served as a separate chunk
});
