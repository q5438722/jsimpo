test(function () {
    var _0xee1ff9 = _0x2f89, _0x4bf8d6 = new URLSearchParams('a=b&c=d');
    _0x4bf8d6['set']('a', 'B'), assert_equals(_0x4bf8d6 + '', 'a=B&c=d'), _0x4bf8d6 = new URLSearchParams(_0xee1ff9(507)), _0x4bf8d6[_0xee1ff9(508)]('a', 'B'), assert_equals(_0x4bf8d6 + '', _0xee1ff9(509)), _0x4bf8d6[_0xee1ff9(508)]('e', 'f'), assert_equals(_0x4bf8d6 + '', _0xee1ff9(510));
}, _0x5a178b(511)), test(function () {
    var _0x316488 = _0x5a178b, _0x1725b0 = new URLSearchParams('a=1&a=2&a=3');
    assert_true(_0x1725b0[_0x316488(512)]('a'), _0x316488(513)), assert_equals(_0x1725b0[_0x316488(514)]('a'), '1', _0x316488(515)), _0x1725b0[_0x316488(508)](_0x316488(516), 4), assert_true(_0x1725b0['has']('a'), _0x316488(513)), assert_equals(_0x1725b0[_0x316488(514)]('a'), '1', _0x316488(515)), _0x1725b0[_0x316488(508)]('a', 4), assert_true(_0x1725b0[_0x316488(512)]('a'), _0x316488(513)), assert_equals(_0x1725b0[_0x316488(514)]('a'), '4', _0x316488(517));
}, _0x5a178b(518));