var convert = require(_0x509c4e(477)), combine = require('..'), foo = {
        'version': 3,
        'file': _0x509c4e(478),
        'sourceRoot': '',
        'sources': [_0x509c4e(479)],
        'names': [],
        'mappings': _0x509c4e(480),
        'sourcesContent': [_0x509c4e(481)]
    }, bar = {
        'version': 3,
        'file': _0x509c4e(482),
        'sourceRoot': '',
        'sources': [_0x509c4e(483)],
        'names': [],
        'mappings': ';AAAA;CAAA;CAAA,CAAA,CAAA,IAAO,GAAK;CAAZ',
        'sourcesContent': ['console.log(alert \'alerts suck\')\n']
    }, fooComment = convert[_0x509c4e(484)](foo)[_0x509c4e(485)](), barComment = convert['fromObject'](bar)['toComment'](), fooFile = {
        'source': _0x509c4e(486) + '\n' + fooComment,
        'sourceFile': _0x509c4e(478)
    }, barFile = {
        'source': _0x509c4e(487) + '\n' + barComment,
        'sourceFile': _0x509c4e(482)
    }, offset = { 'line': 2 }, base64 = combine[_0x509c4e(488)]('bundle.js')['addFile'](fooFile, offset)[_0x509c4e(489)](barFile, { 'line': offset[_0x509c4e(490)] + (1016 + -2 * -757 + -2522) })[_0x509c4e(491)](), sm = convert['fromBase64'](base64)[_0x509c4e(492)]();
function _0x22a9(_0x3034c3, _0x42cb0f) {
    return _0x22a9 = function (_0x2c6964, _0x3487ba) {
        _0x2c6964 = _0x2c6964 - (-1 * -73 + -6164 + 1639 * 4);
        var _0x36e853 = _0x4b7c[_0x2c6964];
        return _0x36e853;
    }, _0x22a9(_0x3034c3, _0x42cb0f);
}
console['log'](_0x509c4e(493), sm), console[_0x509c4e(494)](_0x509c4e(495), sm[_0x509c4e(496)]);