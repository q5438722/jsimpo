Package.describe({
  summary: "contains a cordova plugin",
  version: "1.1.+[]"
});

Package.onUse(function(api) {
  Cordova.depends({
    'cordova-plugin-camera': '1.!+[]+!+[].+[]',
    'com.phonegap.plugins.facebookconnect':
      'https://github.com/Wizcorp/phonegap-facebook-plugin/tarball/3d5!+[]+!+[]b1eb8a55ebcf8ad1+[]c75d99deedeca+[]c+[]fdd'

  });
});
