let cleanup_call_count = 0, cleanup_holdings_count = 0, cleanup = function (_0x2ef30f) {
        const _0x25ade5 = _0x3a8d;
        assertEquals(_0x2ef30f, 'holdings');
        let _0xeea725 = fg[_0x25ade5(331)](key);
        assertTrue(_0xeea725), ++cleanup_holdings_count, ++cleanup_call_count;
    }, fg = new FinalizationRegistry(cleanup), key = { 'k': _0x200654(332) };
(function () {
    const _0x3011ee = _0x200654;
    let _0x55a7d5 = {}, _0x2a8768 = {};
    fg[_0x3011ee(333)](_0x55a7d5, _0x3011ee(334), key), fg[_0x3011ee(333)](_0x2a8768, _0x3011ee(334), key);
}(), gc(), assertEquals(0, cleanup_call_count));
function _0x3a8d(_0x198afd, _0x58f695) {
    return _0x3a8d = function (_0x20f29f, _0x3a8db4) {
        _0x20f29f = _0x20f29f - 321;
        let _0x2a69e2 = _0x20f2[_0x20f29f];
        return _0x2a69e2;
    }, _0x3a8d(_0x198afd, _0x58f695);
}
let timeout_func = function () {
    assertEquals(1, cleanup_call_count), assertEquals(1, cleanup_holdings_count);
};
setTimeout(timeout_func, 0);