function _0x17c4(_0x356ef9, _0x1ee428) {
    return _0x17c4 = function (_0x25819a, _0x17c4b3) {
        _0x25819a = _0x25819a - 284;
        var _0x4eaf5d = _0x2581[_0x25819a];
        return _0x4eaf5d;
    }, _0x17c4(_0x356ef9, _0x1ee428);
}
var crypto = require(_0x58fee8(294));
function sha1(_0x976b2e) {
    var _0xca6b82 = _0x58fee8;
    if (typeof Buffer[_0xca6b82(295)] === _0xca6b82(296)) {
        if (Array[_0xca6b82(297)](_0x976b2e))
            _0x976b2e = Buffer[_0xca6b82(295)](_0x976b2e);
        else
            typeof _0x976b2e === _0xca6b82(298) && (_0x976b2e = Buffer[_0xca6b82(295)](_0x976b2e, _0xca6b82(299)));
    } else {
        if (Array[_0xca6b82(297)](_0x976b2e))
            _0x976b2e = new Buffer(_0x976b2e);
        else
            typeof _0x976b2e === _0xca6b82(298) && (_0x976b2e = new Buffer(_0x976b2e, 'utf8'));
    }
    return crypto['createHash'](_0xca6b82(300))[_0xca6b82(301)](_0x976b2e)['digest']();
}
module[_0x58fee8(302)] = sha1;