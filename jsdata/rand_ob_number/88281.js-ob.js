Package['describe']({
    'summary': 'Blaze\x20configuration\x20templates\x20for\x20Facebook\x20OAuth.',
    'version': '1.0.3'
}), Package['onUse'](_0x5adf6e => {
    _0x5adf6e['use']('ecmascript', 'client'), _0x5adf6e['use']('templating@1.4.0', 'client'), _0x5adf6e['addFiles']('facebook_login_button.css', 'client'), _0x5adf6e['addFiles']([
        'facebook_configure.html',
        'facebook_configure.js'
    ], 'client');
});
