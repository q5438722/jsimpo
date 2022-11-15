it("should load script with nonce 'nonce1234'", function (e) {
  __webpack_nonce__ = "nonce1234";require.ensure([], function (e) {
    e("./empty?a");
  }, "chunk-with-nonce");__webpack_nonce__ = undefined;if (typeof document !== "undefined") {
    const n = document.querySelector("script[src=\"js/chunk-with-nonce.web.js\"]");
    const c = n.nonce || n.getAttribute("nonce");
    expect(c).toBe("nonce1234");
  }__webpack_nonce__ = undefined;e();
});it("should load script without nonce", function (e) {
  require.ensure([], function (e) {
    e("./empty?b");
  }, "chunk-without-nonce");if (typeof document !== "undefined") {
    const n = document.querySelector("script[src=\"js/chunk-without-nonce.web.js\"]");
    expect(n.hasAttribute("nonce")).toBe(false);
  }__webpack_nonce__ = undefined;e();
});
