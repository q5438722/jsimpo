'use strict';
it("should load script with nonce 'nonce1234'", function(saveNotifs) {
  __webpack_nonce__ = "nonce1234";
  require.ensure([], function(saveNotifs) {
    saveNotifs("./empty?a");
  }, "chunk-with-nonce");
  __webpack_nonce__ = undefined;
  if (typeof document !== "undefined") {
    var job = document.querySelector('script[src="js/chunk-with-nonce.web.js"]');
    var child_rendered_first = job.nonce || job.getAttribute("nonce");
    expect(child_rendered_first).toBe("nonce1234");
  }
  __webpack_nonce__ = undefined;
  saveNotifs();
});
it("should load script without nonce", function(saveNotifs) {
  require.ensure([], function(saveNotifs) {
    saveNotifs("./empty?b");
  }, "chunk-without-nonce");
  if (typeof document !== "undefined") {
    var head = document.querySelector('script[src="js/chunk-without-nonce.web.js"]');
    expect(head.hasAttribute("nonce")).toBe(false);
  }
  __webpack_nonce__ = undefined;
  saveNotifs();
});

