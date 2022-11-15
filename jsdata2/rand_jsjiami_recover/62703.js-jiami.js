let cleanup_call_count = 0;
let cleanup_holdings_count = 0;
let cleanup = function (_0x82d728) {
    assertEquals(_0x82d728, 'holdings');
    let _0x3b2f53 = fg['unregister'](key);
    assertTrue(_0x3b2f53);
    ++cleanup_holdings_count;
    ++cleanup_call_count;
};
let fg = new FinalizationRegistry(cleanup);
let key = {};
(function () {
    fg['register'](_0x113bbd, 'holdings', key);
    fg['register'](_0x4806e7, 'holdings', key);
}());
gc();
assertEquals(0, cleanup_call_count);
let timeout_func = function () {
    assertEquals(1, cleanup_call_count);
    assertEquals(1, cleanup_holdings_count);
};
setTimeout(timeout_func, 0);