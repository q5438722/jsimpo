Package['describe']({
    'summary': 'contains\x20a\x20cordova\x20plugin',
    'version': '1.1.0'
}), Package['onUse'](function (_0x47ca98) {
    Cordova['depends']({
        'cordova-plugin-camera': '1.2.0',
        'com.phonegap.plugins.facebookconnect': 'https://github.com/Wizcorp/phonegap-facebook-plugin/tarball/3d52b1eb8a55ebcf8ad10c75d99deedeca0c0fdd'
    });
});