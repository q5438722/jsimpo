var cleanup_call_count = 0;
var cleanup_holdings_count = 0;

const cleanup = function (e) {
  assertEquals(e, "holdings");const l = fg.unregister(key);
  assertTrue(l);++cleanup_holdings_count;++cleanup_call_count;
};

const fg = new FinalizationRegistry(cleanup);
const key = { k: "this is the key" };
(function () {
  const e = {};
  const l = {};
  fg.register(e, "holdings", key);fg.register(l, "holdings", key);
})();gc();assertEquals(0, cleanup_call_count);
const timeout_func = function () {
  assertEquals(1, cleanup_call_count);assertEquals(1, cleanup_holdings_count);
};

setTimeout(timeout_func, 0);
