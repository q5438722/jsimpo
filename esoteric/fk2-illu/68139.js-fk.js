it("should handle var injection in require.ensure with error callback", function (done) {
	require.ensure([], function (require) {
		require("./empty");
		const x = module.x;

		done();
	}, function (error) {}, "chunk-with-var-inject");
});
