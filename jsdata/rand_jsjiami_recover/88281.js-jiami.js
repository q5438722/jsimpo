Package['describe']({
    'summary': 'Blaze configuration templates for Facebook OAuth.',
    'version': '1.0.3'
});
Package['onUse'](_0x4accf4 => {
    _0x4accf4['use']('ecmascript', 'client');
    _0x4accf4['use']('templating@1.4.0', 'client');
    _0x4accf4['addFiles']('facebook_login_button.css', 'client');
    _0x4accf4['addFiles']([
        'facebook_configure.html',
        'facebook_configure.js'
    ], 'client');
});