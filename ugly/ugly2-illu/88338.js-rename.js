Package.describe({ summary: "Tests for the boilerplate-generator package", version: "1.5.0", documentation: null });Npm.depends({ parse5: "3.0.2", "stream-to-string": "1.1.0" });Package.onTest(function (e) {
  e.use("ecmascript");e.use(["underscore", "tinytest", "boilerplate-generator"], "server");e.addFiles("web.browser-tests.js", "server");e.addFiles("web.cordova-tests.js", "server");
});
