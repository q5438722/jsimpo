test(function () {
    var _0x55b91f = new URLSearchParams('a=b&c=d');
    _0x55b91f['set']('a', 'B'), assert_equals(_0x55b91f + '', 'a=B&c=d'), _0x55b91f = new URLSearchParams('a=b&c=d&a=e'), _0x55b91f['set']('a', 'B'), assert_equals(_0x55b91f + '', 'a=B&c=d'), _0x55b91f['set']('e', 'f'), assert_equals(_0x55b91f + '', 'a=B&c=d&e=f');
}, 'Set\x20basics'), test(function () {
    var _0x28ce2f = new URLSearchParams('a=1&a=2&a=3');
    assert_true(_0x28ce2f['has']('a'), 'Search\x20params\x20object\x20has\x20name\x20\x22a\x22'), assert_equals(_0x28ce2f['get']('a'), '1', 'Search\x20params\x20object\x20has\x20name\x20\x22a\x22\x20with\x20value\x20\x221\x22'), _0x28ce2f['set']('first', -0x1122 + 0x7c7 * -0x1 + 0x18ed), assert_true(_0x28ce2f['has']('a'), 'Search\x20params\x20object\x20has\x20name\x20\x22a\x22'), assert_equals(_0x28ce2f['get']('a'), '1', 'Search\x20params\x20object\x20has\x20name\x20\x22a\x22\x20with\x20value\x20\x221\x22'), _0x28ce2f['set']('a', -0x79f * -0x4 + 0x8 * 0x1b2 + -0x2 * 0x1604), assert_true(_0x28ce2f['has']('a'), 'Search\x20params\x20object\x20has\x20name\x20\x22a\x22'), assert_equals(_0x28ce2f['get']('a'), '4', 'Search\x20params\x20object\x20has\x20name\x20\x22a\x22\x20with\x20value\x20\x224\x22');
}, 'URLSearchParams.set');
