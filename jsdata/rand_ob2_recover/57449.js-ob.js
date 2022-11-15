test(function () {
    var _0x2c87d6 = _0x4fe9, _0x40ee0e = new URLSearchParams('a=b&c=d');
    _0x40ee0e[_0x2c87d6(197)]('a', 'B'), assert_equals(_0x40ee0e + '', _0x2c87d6(198)), _0x40ee0e = new URLSearchParams(_0x2c87d6(199)), _0x40ee0e[_0x2c87d6(197)]('a', 'B'), assert_equals(_0x40ee0e + '', _0x2c87d6(198)), _0x40ee0e[_0x2c87d6(197)]('e', 'f'), assert_equals(_0x40ee0e + '', _0x2c87d6(200));
}, _0x559de7(201)), test(function () {
    var _0x2d3a55 = _0x559de7, _0x56e1d6 = new URLSearchParams(_0x2d3a55(202));
    assert_true(_0x56e1d6[_0x2d3a55(203)]('a'), 'Search params object has name "a"'), assert_equals(_0x56e1d6[_0x2d3a55(204)]('a'), '1', 'Search params object has name "a" with value "1"'), _0x56e1d6['set'](_0x2d3a55(205), 4), assert_true(_0x56e1d6[_0x2d3a55(203)]('a'), _0x2d3a55(206)), assert_equals(_0x56e1d6[_0x2d3a55(204)]('a'), '1', 'Search params object has name "a" with value "1"'), _0x56e1d6[_0x2d3a55(197)]('a', 4), assert_true(_0x56e1d6[_0x2d3a55(203)]('a'), _0x2d3a55(206)), assert_equals(_0x56e1d6[_0x2d3a55(204)]('a'), '4', 'Search params object has name "a" with value "4"');
}, _0x559de7(207));