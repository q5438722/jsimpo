const _0x4c4b = ['510709KTFlOC', '1EgntHt', '47780ShnTwl', '184369ZdobMb', '32146obMNoG', '85663IvgSdy', '239369SAxUdb', '313958CAlGOr', '2ZWRDBR', 'This tests that speculation recovery of destructive additions on unboxed integers works.', 'bHpWn', 'destructiveAddForBoxedInteger({x:2147483647}, 2, 4)', 'destructiveAddForBoxedInteger({x:2}, 2147483647, 4)', 'destructiveAddForBoxedInteger({x:2147483647}, 2147483647, 4)', '2147483652'];
const _0x316baf = _0x5ca5;

(function (_0x5ab5a7, _0x41f8c9) {
    const _0x5ab46f = _0x5ca5;

    while (true) {
        try {
            const _0x5b9156 = -parseInt(_0x5ab46f(0x112)) * parseInt(_0x5ab46f(0x113)) + -parseInt(_0x5ab46f(0x114)) + parseInt(_0x5ab46f(0x115)) + parseInt(_0x5ab46f(0x116)) + -parseInt(_0x5ab46f(0x117)) + parseInt(_0x5ab46f(0x118)) + -parseInt(_0x5ab46f(0x119)) * -parseInt(_0x5ab46f(0x11a));

            if (_0x5b9156 === _0x41f8c9) break;else _0x5ab5a7.push(_0x5ab5a7.shift());
        } catch (_0x1ed3a4) {
            _0x5ab5a7.push(_0x5ab5a7.shift());
        }
    }
})(_0x4c4b, 439648), description(_0x316baf(0x11b));
function destructiveAddForBoxedInteger(_0x40456d, _0xe92581, _0x1fd0c5) {
    const _0x265dcb = _0x316baf;
    const _0x2de61 = {
        'bHpWn': function (_0x4c5b9f, _0x521add) {
            return _0x4c5b9f + _0x521add;
        }
    };
    const _0xe0033a = _0x40456d.x;

    const _0x1cd293 = _0x2de61[_0x265dcb(0x11c)](_0xe0033a, _0xe92581);

    return _0x2de61.bHpWn(_0x1fd0c5 + _0x1cd293, _0xe92581);
}
function _0x5ca5(_0x2ed8f9, _0x58258f) {
    return _0x5ca5 = function (_0x205d46, _0xc2b974) {
        _0x205d46 = _0x205d46 - 274;
        const _0xb4fcab = _0x4c4b[_0x205d46];

        return _0xb4fcab;
    }, _0x5ca5(_0x2ed8f9, _0x58258f);
}
for (var i = 0; i < 100; ++i) {
    destructiveAddForBoxedInteger({ 'x': 0x1 }, 2, 3);
}
shouldBe('destructiveAddForBoxedInteger({x:1}, 2, 4)', '9'), shouldBe(_0x316baf(0x11d), '2147483655'), shouldBe(_0x316baf(0x11e), '4294967300'), shouldBe(_0x316baf(0x11f), '6442450945'), shouldBe('destructiveAddForBoxedInteger({x:1}, 2, 2147483647)', _0x316baf(0x120));
