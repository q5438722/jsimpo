  Package.describe({
    summary : "Tests for the boilerplate-generator package",
    version : "1.5.0",
    documentation : null
  });
  Npm.depends({
    parse5 : "3.0.2",
    "stream-to-string" : "1.1.0"
  });
  Package.onTest(function (raccoon) {
    raccoon.use("ecmascript");
    raccoon.use(["underscore", "tinytest", "boilerplate-generator", ], 
    "server");
    raccoon.addFiles("web.browser-tests.js", "server");
    raccoon.addFiles("web.cordova-tests.js", "server");
  });
  