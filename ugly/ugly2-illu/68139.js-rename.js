it("should handle var injection in require.ensure with error callback", function (i) {
  require.ensure([], function (e) {
    e("./empty");const n = module.x;
    i();
  }, function (e) {}, "chunk-with-var-inject");
});
