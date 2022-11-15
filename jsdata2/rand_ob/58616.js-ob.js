var _0x4c4b = [
    '510709KTFlOC',
    '1EgntHt',
    '47780ShnTwl',
    '184369ZdobMb',
    '32146obMNoG',
    '85663IvgSdy',
    '239369SAxUdb',
    '313958CAlGOr',
    '2ZWRDBR',
    'This\x20tests\x20that\x20speculation\x20recovery\x20of\x20destructive\x20additions\x20on\x20unboxed\x20integers\x20works.',
    'bHpWn',
    'destructiveAddForBoxedInteger({x:2147483647},\x202,\x204)',
    'destructiveAddForBoxedInteger({x:2},\x202147483647,\x204)',
    'destructiveAddForBoxedInteger({x:2147483647},\x202147483647,\x204)',
    '2147483652'
];
var _0x316baf = _0x5ca5;
(function (_0x5ab5a7, _0x41f8c9) {
    var _0x5ab46f = _0x5ca5;
    while (!![]) {
        try {
            var _0x5b9156 = -parseInt(_0x5ab46f(0x112)) * parseInt(_0x5ab46f(0x113)) + -parseInt(_0x5ab46f(0x114)) + parseInt(_0x5ab46f(0x115)) + parseInt(_0x5ab46f(0x116)) + -parseInt(_0x5ab46f(0x117)) + parseInt(_0x5ab46f(0x118)) + -parseInt(_0x5ab46f(0x119)) * -parseInt(_0x5ab46f(0x11a));
            if (_0x5b9156 === _0x41f8c9)
                break;
            else
                _0x5ab5a7['push'](_0x5ab5a7['shift']());
        } catch (_0x1ed3a4) {
            _0x5ab5a7['push'](_0x5ab5a7['shift']());
        }
    }
}(_0x4c4b, -0x1d * -0x29cf + -0xddec * 0x2 + 0x3b4c5), description(_0x316baf(0x11b)));
function destructiveAddForBoxedInteger(_0x40456d, _0xe92581, _0x1fd0c5) {
    var _0x265dcb = _0x316baf, _0x2de61 = {
            'bHpWn': function (_0x4c5b9f, _0x521add) {
                return _0x4c5b9f + _0x521add;
            }
        }, _0xe0033a = _0x40456d['x'], _0x1cd293 = _0x2de61[_0x265dcb(0x11c)](_0xe0033a, _0xe92581);
    return _0x2de61['bHpWn'](_0x1fd0c5 + _0x1cd293, _0xe92581);
}
function _0x5ca5(_0x2ed8f9, _0x58258f) {
    return _0x5ca5 = function (_0x205d46, _0xc2b974) {
        _0x205d46 = _0x205d46 - (0xc61 * -0x1 + -0x3 * 0xda + 0x1001);
        var _0xb4fcab = _0x4c4b[_0x205d46];
        return _0xb4fcab;
    }, _0x5ca5(_0x2ed8f9, _0x58258f);
}
for (var i = 0x148e + -0xf * -0x15d + 0x2901 * -0x1; i < 0x1366 + -0x1cd + -0x1135; ++i) {
    destructiveAddForBoxedInteger({ 'x': 0x1 }, -0x1 * -0x506 + -0x1c2 + -0x1 * 0x342, -0x1a + 0x1 * 0x447 + 0x215 * -0x2);
}
shouldBe('destructiveAddForBoxedInteger({x:1},\x202,\x204)', '9'), shouldBe(_0x316baf(0x11d), '2147483655'), shouldBe(_0x316baf(0x11e), '4294967300'), shouldBe(_0x316baf(0x11f), '6442450945'), shouldBe('destructiveAddForBoxedInteger({x:1},\x202,\x202147483647)', _0x316baf(0x120));
