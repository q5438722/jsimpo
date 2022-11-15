it('should\x20load\x20script\x20with\x20nonce\x20\x27nonce1234\x27', function (_0xbd8461) {
    __webpack_nonce__ = 'nonce1234', require['ensure']([], function (_0x2ab8af) {
        _0x2ab8af('./empty?a');
    }, 'chunk-with-nonce'), __webpack_nonce__ = undefined;
    if (typeof document !== 'undefined') {
        var _0x13689c = document['querySelector']('script[src=\x22js/chunk-with-nonce.web.js\x22]'), _0xe48294 = _0x13689c['nonce'] || _0x13689c['getAttribute']('nonce');
        expect(_0xe48294)['toBe']('nonce1234');
    }
    __webpack_nonce__ = undefined, _0xbd8461();
}), it('should\x20load\x20script\x20without\x20nonce', function (_0x1109cd) {
    require['ensure']([], function (_0x229077) {
        _0x229077('./empty?b');
    }, 'chunk-without-nonce');
    if (typeof document !== 'undefined') {
        var _0xb74273 = document['querySelector']('script[src=\x22js/chunk-without-nonce.web.js\x22]');
        expect(_0xb74273['hasAttribute']('nonce'))['toBe'](![]);
    }
    __webpack_nonce__ = undefined, _0x1109cd();
});
