const _0x20f2 = [
    '353oUclvC',
    'unregister',
    'this\x20is\x20the\x20key',
    'register',
    'holdings',
    '1oHudCw',
    '401871BDWoiI',
    '17eqKoZk',
    '19619JNtjAz',
    '489133ksBQty',
    '136702xBWQgz',
    '82609CXzKpp',
    '555886IOtYtn',
    '953KHjOiK'
];
const _0x200654 = _0x3a8d;
(function (_0x498355, _0x5282d7) {
    const _0x440d84 = _0x3a8d;
    while (!![]) {
        try {
            const _0x477b3b = -parseInt(_0x440d84(0x141)) * -parseInt(_0x440d84(0x142)) + parseInt(_0x440d84(0x143)) * parseInt(_0x440d84(0x144)) + parseInt(_0x440d84(0x145)) + -parseInt(_0x440d84(0x146)) + parseInt(_0x440d84(0x147)) + -parseInt(_0x440d84(0x148)) + parseInt(_0x440d84(0x149)) * -parseInt(_0x440d84(0x14a));
            if (_0x477b3b === _0x5282d7)
                break;
            else
                _0x498355['push'](_0x498355['shift']());
        } catch (_0x469836) {
            _0x498355['push'](_0x498355['shift']());
        }
    }
}(_0x20f2, 0x43e7b));
let cleanup_call_count = 0x0, cleanup_holdings_count = 0x0, cleanup = function (_0x2ef30f) {
        const _0x25ade5 = _0x3a8d;
        assertEquals(_0x2ef30f, 'holdings');
        let _0xeea725 = fg[_0x25ade5(0x14b)](key);
        assertTrue(_0xeea725), ++cleanup_holdings_count, ++cleanup_call_count;
    }, fg = new FinalizationRegistry(cleanup), key = { 'k': _0x200654(0x14c) };
(function () {
    const _0x3011ee = _0x200654;
    let _0x55a7d5 = {}, _0x2a8768 = {};
    fg[_0x3011ee(0x14d)](_0x55a7d5, _0x3011ee(0x14e), key), fg[_0x3011ee(0x14d)](_0x2a8768, _0x3011ee(0x14e), key);
}(), gc(), assertEquals(0x0, cleanup_call_count));
function _0x3a8d(_0x198afd, _0x58f695) {
    return _0x3a8d = function (_0x20f29f, _0x3a8db4) {
        _0x20f29f = _0x20f29f - 0x141;
        let _0x2a69e2 = _0x20f2[_0x20f29f];
        return _0x2a69e2;
    }, _0x3a8d(_0x198afd, _0x58f695);
}
let timeout_func = function () {
    assertEquals(0x1, cleanup_call_count), assertEquals(0x1, cleanup_holdings_count);
};
setTimeout(timeout_func, 0x0);
