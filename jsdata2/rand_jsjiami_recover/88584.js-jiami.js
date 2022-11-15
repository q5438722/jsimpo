Package['describe']({
    'summary': 'Blaze configuration templates for Weibo OAuth.',
    'version': '1.0.2'
});
Package['onUse'](_0x5c9f1f => {
    _0x5c9f1f['use']('ecmascript', 'client');
    _0x5c9f1f['use']('templating@1.4.0', 'client');
    _0x5c9f1f['addFiles']('weibo_login_button.css', 'client');
    _0x5c9f1f['addFiles']([
        'weibo_configure.html',
        'weibo_configure.js'
    ], 'client');
});