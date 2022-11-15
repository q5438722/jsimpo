const crypto = require(_0x3b2797(323)), {clipboard} = require(_0x3b2797(324));
function _0x1d75(_0x1ef9ff, _0x3f5dcd) {
    return _0x1d75 = function (_0xf50c69, _0x1d750f) {
        _0xf50c69 = _0xf50c69 - 312;
        let _0x133e91 = _0xf50c[_0xf50c69];
        return _0x133e91;
    }, _0x1d75(_0x1ef9ff, _0x3f5dcd);
}
module[_0x3b2797(325)] = class Clipboard {
    constructor() {
        const _0x8cbfa4 = _0x3b2797;
        this[_0x8cbfa4(326)]();
    }
    [_0x3b2797(326)]() {
        const _0x46298a = _0x3b2797;
        this[_0x46298a(327)] = null, this[_0x46298a(328)] = null;
    }
    [_0x3b2797(329)](_0xc836a8) {
        const _0x3c654b = _0x3b2797;
        return crypto['createHash'](_0x3c654b(329))['update'](_0xc836a8, _0x3c654b(330))[_0x3c654b(331)](_0x3c654b(332));
    }
    [_0x3b2797(333)](_0x43c829, _0x4c9731) {
        const _0x3c6b13 = _0x3b2797;
        this[_0x3c6b13(328)] = this[_0x3c6b13(329)](_0x43c829), this[_0x3c6b13(327)] = _0x4c9731, clipboard[_0x3c6b13(334)](_0x43c829);
    }
    [_0x3b2797(335)]() {
        return clipboard['readText']();
    }
    [_0x3b2797(336)](_0x35c4ec) {
        clipboard['writeFindText'](_0x35c4ec);
    }
    [_0x3b2797(337)]() {
        const _0x4bc74d = _0x3b2797;
        return clipboard[_0x4bc74d(337)]();
    }
    [_0x3b2797(338)]() {
        const _0x431322 = _0x3b2797, _0x13d361 = this[_0x431322(335)]();
        return this[_0x431322(328)] === this[_0x431322(329)](_0x13d361) ? {
            'text': _0x13d361,
            'metadata': this[_0x431322(327)]
        } : { 'text': _0x13d361 };
    }
};