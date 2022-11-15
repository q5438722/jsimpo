define([
    './object',
    './string',
    './date',
    './array',
    './function',
    './json',
    './xhr'
], function (_0x186a49, _0x2d84f9, _0x173076) {
    var _0x17c495;
    _0x17c495 = /^define|^prevent|descriptor$/i;
    function _0x1c19b8(_0x3d6a0a) {
        return _0x17c495['test'](_0x3d6a0a);
    }
    return _0x186a49['failIfShimmed'](_0x1c19b8), _0x2d84f9['setWhitespaceChars']('\x5cs'), {
        'failIfShimmed': _0x186a49['failIfShimmed'],
        'setWhitespaceChars': _0x2d84f9['setWhitespaceChars'],
        'setIsoCompatTest': _0x173076['setIsoCompatTest']
    };
});
