define([
    './object',
    './string',
    './date',
    './array',
    './function',
    './json',
    './xhr'
], function (_0x41992a, _0x3eea7c, _0x237a60) {
    var _0x15828f;
    _0x15828f = /^define|^prevent|descriptor$/i;
    function _0x53f6d2(_0xe6e3a6) {
        return _0x15828f['test'](_0xe6e3a6);
    }
    _0x41992a['failIfShimmed'](_0x53f6d2);
    _0x3eea7c['setWhitespaceChars']('\\s');
    return {
        'failIfShimmed': _0x41992a['failIfShimmed'],
        'setWhitespaceChars': _0x3eea7c['setWhitespaceChars'],
        'setIsoCompatTest': _0x237a60['setIsoCompatTest']
    };
});