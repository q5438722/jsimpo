var _0x5249 = [
    '215605WuzoZi',
    '1001840bBtueb',
    '611053emDrVm',
    '424ARTVMR',
    '2342XajFZB',
    '1247560FdihJh',
    '1220397KalgcD',
    '982sSixMk',
    '3108qGxbPM',
    'a=b&c=d&a=e',
    'set',
    'a=B&c=d',
    'a=B&c=d&e=f',
    'Set\x20basics',
    'has',
    'Search\x20params\x20object\x20has\x20name\x20\x22a\x22',
    'get',
    'Search\x20params\x20object\x20has\x20name\x20\x22a\x22\x20with\x20value\x20\x221\x22',
    'first',
    'Search\x20params\x20object\x20has\x20name\x20\x22a\x22\x20with\x20value\x20\x224\x22',
    'URLSearchParams.set'
];
function _0x2f89(_0x44f676, _0x9372e0) {
    return _0x2f89 = function (_0x5249a1, _0x2f89b8) {
        _0x5249a1 = _0x5249a1 - 0x1f2;
        var _0x432719 = _0x5249[_0x5249a1];
        return _0x432719;
    }, _0x2f89(_0x44f676, _0x9372e0);
}
var _0x5a178b = _0x2f89;
(function (_0x25d72f, _0x5d05a9) {
    var _0x196029 = _0x2f89;
    while (!![]) {
        try {
            var _0x794fd9 = -parseInt(_0x196029(0x1f2)) + -parseInt(_0x196029(0x1f3)) + parseInt(_0x196029(0x1f4)) + -parseInt(_0x196029(0x1f5)) * -parseInt(_0x196029(0x1f6)) + -parseInt(_0x196029(0x1f7)) + -parseInt(_0x196029(0x1f8)) + -parseInt(_0x196029(0x1f9)) * -parseInt(_0x196029(0x1fa));
            if (_0x794fd9 === _0x5d05a9)
                break;
            else
                _0x25d72f['push'](_0x25d72f['shift']());
        } catch (_0x4211c6) {
            _0x25d72f['push'](_0x25d72f['shift']());
        }
    }
}(_0x5249, 0xecfdb), test(function () {
    var _0xee1ff9 = _0x2f89, _0x4bf8d6 = new URLSearchParams('a=b&c=d');
    _0x4bf8d6['set']('a', 'B'), assert_equals(_0x4bf8d6 + '', 'a=B&c=d'), _0x4bf8d6 = new URLSearchParams(_0xee1ff9(0x1fb)), _0x4bf8d6[_0xee1ff9(0x1fc)]('a', 'B'), assert_equals(_0x4bf8d6 + '', _0xee1ff9(0x1fd)), _0x4bf8d6[_0xee1ff9(0x1fc)]('e', 'f'), assert_equals(_0x4bf8d6 + '', _0xee1ff9(0x1fe));
}, _0x5a178b(0x1ff)), test(function () {
    var _0x316488 = _0x5a178b, _0x1725b0 = new URLSearchParams('a=1&a=2&a=3');
    assert_true(_0x1725b0[_0x316488(0x200)]('a'), _0x316488(0x201)), assert_equals(_0x1725b0[_0x316488(0x202)]('a'), '1', _0x316488(0x203)), _0x1725b0[_0x316488(0x1fc)](_0x316488(0x204), 0x4), assert_true(_0x1725b0['has']('a'), _0x316488(0x201)), assert_equals(_0x1725b0[_0x316488(0x202)]('a'), '1', _0x316488(0x203)), _0x1725b0[_0x316488(0x1fc)]('a', 0x4), assert_true(_0x1725b0[_0x316488(0x200)]('a'), _0x316488(0x201)), assert_equals(_0x1725b0[_0x316488(0x202)]('a'), '4', _0x316488(0x205));
}, _0x5a178b(0x206)));
