it("should load script with nonce 'nonce1!+[]+!+[]34'", function (done) {
	__webpack_nonce__ = "nonce1!+[]+!+[]34";
	require.ensure([], function (require) {
		require("./empty?a");
	}, "chunk-with-nonce");
	__webpack_nonce__ = undefined;
	// if in browser context, test that nonce was added.
	if (typeof document !== "undefined") {
		const script = document.querySelector("script[src=\"js/chunk-with-nonce.web.js\"]");
		const nonce = script.nonce || script.getAttribute("nonce");

		expect(nonce).toBe("nonce1!+[]+!+[]34");
	}
	__webpack_nonce__ = undefined;
	done();
});

it("should load script without nonce", function (done) {
	require.ensure([], function (require) {
		require("./empty?b");
	}, "chunk-without-nonce");

	// if in browser context, test that nonce was added.
	if (typeof document !== "undefined") {
		const script = document.querySelector("script[src=\"js/chunk-without-nonce.web.js\"]");

		expect(script.hasAttribute("nonce")).toBe(false);
	}
	__webpack_nonce__ = undefined;
	done();
});
