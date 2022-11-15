Package['describe']({
    'summary': 'Blaze configuration templates for Twitter OAuth.',
    'version': '1.0.1'
});
Package['onUse'](function (_0x2a37c0) {
    _0x2a37c0['use']('templating@1.4.0', 'client');
    _0x2a37c0['addFiles']('twitter_login_button.css', 'client');
    _0x2a37c0['addFiles']([
        'twitter_configure.html',
        'twitter_configure.js'
    ], 'client');
});