'use strict';
var _0x4b7c = [
    'convert-source-map',
    'foo.js',
    'foo.coffee',
    ';AAAA;CAAA;CAAA,CAAA,CAAA,IAAO,GAAK;CAAZ',
    'console.log(require\x20\x27./bar.js\x27)\x0a',
    'bar.js',
    'bar.coffee',
    'fromObject',
    'toComment',
    '(function()\x20{\x0a\x0a\x20\x20console.log(require(\x27./bar.js\x27));\x0a\x0a}).call(this);\x0a',
    '(function()\x20{\x0a\x0a\x20\x20console.log(alert(\x27alerts\x20suck\x27));\x0a\x0a}).call(this);\x0a',
    'create',
    'addFile',
    'line',
    'base64',
    'toObject',
    'Combined\x20source\x20maps:\x0a',
    'log',
    '\x0aMappings:\x0a',
    'mappings',
    '1llljUv',
    '159571vEheVh',
    '1euDKEt',
    '245155dUauYe',
    '1xlLyFZ',
    '331631JmfLwK',
    '4nQdqdC',
    '70235NOTwGI',
    '4pHANGi',
    '112842mrdMMl',
    '357103zhMuHE',
    '716856fjLNcc'
];
var _0x509c4e = _0x22a9;
(function (_0x1e9452, _0x221cb6) {
    var _0x4785cb = _0x22a9;
    while (!![]) {
        try {
            var _0x53e37d = -parseInt(_0x4785cb(0x1d1)) * parseInt(_0x4785cb(0x1d2)) + -parseInt(_0x4785cb(0x1d3)) * -parseInt(_0x4785cb(0x1d4)) + -parseInt(_0x4785cb(0x1d5)) * -parseInt(_0x4785cb(0x1d6)) + parseInt(_0x4785cb(0x1d7)) * -parseInt(_0x4785cb(0x1d8)) + -parseInt(_0x4785cb(0x1d9)) * -parseInt(_0x4785cb(0x1da)) + parseInt(_0x4785cb(0x1db)) + -parseInt(_0x4785cb(0x1dc));
            if (_0x53e37d === _0x221cb6)
                break;
            else
                _0x1e9452['push'](_0x1e9452['shift']());
        } catch (_0x292745) {
            _0x1e9452['push'](_0x1e9452['shift']());
        }
    }
}(_0x4b7c, 0x21ab3 + 0xd9 * 0x202 + -0x5433));
var convert = require(_0x509c4e(0x1dd)), combine = require('..'), foo = {
        'version': 0x3,
        'file': _0x509c4e(0x1de),
        'sourceRoot': '',
        'sources': [_0x509c4e(0x1df)],
        'names': [],
        'mappings': _0x509c4e(0x1e0),
        'sourcesContent': [_0x509c4e(0x1e1)]
    }, bar = {
        'version': 0x3,
        'file': _0x509c4e(0x1e2),
        'sourceRoot': '',
        'sources': [_0x509c4e(0x1e3)],
        'names': [],
        'mappings': ';AAAA;CAAA;CAAA,CAAA,CAAA,IAAO,GAAK;CAAZ',
        'sourcesContent': ['console.log(alert\x20\x27alerts\x20suck\x27)\x0a']
    }, fooComment = convert[_0x509c4e(0x1e4)](foo)[_0x509c4e(0x1e5)](), barComment = convert['fromObject'](bar)['toComment'](), fooFile = {
        'source': _0x509c4e(0x1e6) + '\x0a' + fooComment,
        'sourceFile': _0x509c4e(0x1de)
    }, barFile = {
        'source': _0x509c4e(0x1e7) + '\x0a' + barComment,
        'sourceFile': _0x509c4e(0x1e2)
    }, offset = { 'line': 0x2 }, base64 = combine[_0x509c4e(0x1e8)]('bundle.js')['addFile'](fooFile, offset)[_0x509c4e(0x1e9)](barFile, { 'line': offset[_0x509c4e(0x1ea)] + (0x3f8 + -0x2 * -0x2f5 + -0x9da) })[_0x509c4e(0x1eb)](), sm = convert['fromBase64'](base64)[_0x509c4e(0x1ec)]();
function _0x22a9(_0x3034c3, _0x42cb0f) {
    return _0x22a9 = function (_0x2c6964, _0x3487ba) {
        _0x2c6964 = _0x2c6964 - (-0x1 * -0x49 + -0x1814 + 0x667 * 0x4);
        var _0x36e853 = _0x4b7c[_0x2c6964];
        return _0x36e853;
    }, _0x22a9(_0x3034c3, _0x42cb0f);
}
console['log'](_0x509c4e(0x1ed), sm), console[_0x509c4e(0x1ee)](_0x509c4e(0x1ef), sm[_0x509c4e(0x1f0)]);
