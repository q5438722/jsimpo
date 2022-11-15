'use strict';
var _0x5747 = [
    'bundle.js',
    'addFile',
    'line',
    'base64',
    'fromBase64',
    'log',
    '\x0aMappings:\x0a',
    'mappings',
    '5PGVzVU',
    '3236lcmSUY',
    '19063ZPwQXh',
    '34uYKHBw',
    '152132DnigAI',
    '3yOwVfV',
    '28166FQjAkR',
    '3ZdZdOx',
    '263236CqweHj',
    '70JyYFGT',
    '2792eVMAky',
    '1784902NdXRFz',
    'convert-source-map',
    'foo.js',
    'foo.coffee',
    ';AAAA;CAAA;CAAA,CAAA,CAAA,IAAO,GAAK;CAAZ',
    'console.log(require\x20\x27./bar.js\x27)\x0a',
    'bar.coffee',
    'console.log(alert\x20\x27alerts\x20suck\x27)\x0a',
    'fromObject',
    'toComment',
    '(function()\x20{\x0a\x0a\x20\x20console.log(require(\x27./bar.js\x27));\x0a\x0a}).call(this);\x0a',
    'create'
];
function _0x7bc4(_0x3c27cc, _0x22262c) {
    return _0x7bc4 = function (_0x574754, _0x7bc41b) {
        _0x574754 = _0x574754 - 0x170;
        var _0x381396 = _0x5747[_0x574754];
        return _0x381396;
    }, _0x7bc4(_0x3c27cc, _0x22262c);
}
var _0x3aa3df = _0x7bc4;
(function (_0x876420, _0x29a231) {
    var _0x293e45 = _0x7bc4;
    while (!![]) {
        try {
            var _0x4d8175 = parseInt(_0x293e45(0x170)) * -parseInt(_0x293e45(0x171)) + -parseInt(_0x293e45(0x172)) * parseInt(_0x293e45(0x173)) + -parseInt(_0x293e45(0x174)) + parseInt(_0x293e45(0x175)) * parseInt(_0x293e45(0x176)) + -parseInt(_0x293e45(0x177)) * parseInt(_0x293e45(0x178)) + -parseInt(_0x293e45(0x179)) * -parseInt(_0x293e45(0x17a)) + parseInt(_0x293e45(0x17b));
            if (_0x4d8175 === _0x29a231)
                break;
            else
                _0x876420['push'](_0x876420['shift']());
        } catch (_0xaf36cc) {
            _0x876420['push'](_0x876420['shift']());
        }
    }
}(_0x5747, 0x6ffb6));
var convert = require(_0x3aa3df(0x17c)), combine = require('..'), foo = {
        'version': 0x3,
        'file': _0x3aa3df(0x17d),
        'sourceRoot': '',
        'sources': [_0x3aa3df(0x17e)],
        'names': [],
        'mappings': _0x3aa3df(0x17f),
        'sourcesContent': [_0x3aa3df(0x180)]
    }, bar = {
        'version': 0x3,
        'file': 'bar.js',
        'sourceRoot': '',
        'sources': [_0x3aa3df(0x181)],
        'names': [],
        'mappings': _0x3aa3df(0x17f),
        'sourcesContent': [_0x3aa3df(0x182)]
    }, fooComment = convert[_0x3aa3df(0x183)](foo)[_0x3aa3df(0x184)](), barComment = convert[_0x3aa3df(0x183)](bar)[_0x3aa3df(0x184)](), fooFile = {
        'source': _0x3aa3df(0x185) + '\x0a' + fooComment,
        'sourceFile': _0x3aa3df(0x17d)
    }, barFile = {
        'source': '(function()\x20{\x0a\x0a\x20\x20console.log(alert(\x27alerts\x20suck\x27));\x0a\x0a}).call(this);\x0a' + '\x0a' + barComment,
        'sourceFile': 'bar.js'
    }, offset = { 'line': 0x2 }, base64 = combine[_0x3aa3df(0x186)](_0x3aa3df(0x187))['addFile'](fooFile, offset)[_0x3aa3df(0x188)](barFile, { 'line': offset[_0x3aa3df(0x189)] + 0x8 })[_0x3aa3df(0x18a)](), sm = convert[_0x3aa3df(0x18b)](base64)['toObject']();
console[_0x3aa3df(0x18c)]('Combined\x20source\x20maps:\x0a', sm), console[_0x3aa3df(0x18c)](_0x3aa3df(0x18d), sm[_0x3aa3df(0x18e)]);
