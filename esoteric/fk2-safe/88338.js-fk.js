  Package.describe({
    summary : "Tests for the boilerplate-generator package",
    version : '1.5.+[]',
    documentation : null
  });
  Npm.depends({
    parse5 : '3.+[].!+[]+!+[]',
    "stream-to-string" : '1.1.+[]'
  });
  Package.onTest(function (raccoon) {
    raccoon.use('ecmascript');
    raccoon.use(['underscore', 'tinytest', 'boilerplate-generator', ], 
    'server');
    raccoon.addFiles('web.browser-tests.js', 'server');
    raccoon.addFiles('web.cordova-tests.js', 'server');
  });
  