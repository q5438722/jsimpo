Package['describe']({
    'summary': 'Tests\x20for\x20the\x20boilerplate-generator\x20package',
    'version': '1.5.0',
    'documentation': null
}), Npm['depends']({
    'parse5': '3.0.2',
    'stream-to-string': '1.1.0'
}), Package['onTest'](function (_0x3ad233) {
    _0x3ad233['use']('ecmascript'), _0x3ad233['use']([
        'underscore',
        'tinytest',
        'boilerplate-generator'
    ], 'server'), _0x3ad233['addFiles']('web.browser-tests.js', 'server'), _0x3ad233['addFiles']('web.cordova-tests.js', 'server');
});
