Package['describe']({
    'summary': 'Blaze\x20configuration\x20templates\x20for\x20Weibo\x20OAuth.',
    'version': '1.0.2'
}), Package['onUse'](_0x2450e2 => {
    _0x2450e2['use']('ecmascript', 'client'), _0x2450e2['use']('templating@1.4.0', 'client'), _0x2450e2['addFiles']('weibo_login_button.css', 'client'), _0x2450e2['addFiles']([
        'weibo_configure.html',
        'weibo_configure.js'
    ], 'client');
});
