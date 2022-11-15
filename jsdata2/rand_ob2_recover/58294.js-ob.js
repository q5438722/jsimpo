description('This tests that a constant folding on a node that has obviously mispredicted type doesn\'t send the compiler into an infinite loop.');
function foo(_0x2b6a80) {
    var _0x250c74 = 1, _0x1720ad = 4000, _0x150e38 = _0x250c74 / _0x1720ad + _0x2b6a80, _0xa12fad = 0;
    for (var _0x24e8f0 = 0; _0x24e8f0 < 1000; ++_0x24e8f0)
        _0xa12fad++;
    return _0x150e38 + _0xa12fad;
}
function _0x53b4(_0x1d602b, _0xb0d518) {
    return _0x53b4 = function (_0x535d0e, _0x53b4e3) {
        _0x535d0e = _0x535d0e - 279;
        var _0x5c207f = _0x535d[_0x535d0e];
        return _0x5c207f;
    }, _0x53b4(_0x1d602b, _0xb0d518);
}
for (var i = 0; i < 5; ++i)
    shouldBe(_0x51a985(291), _0x51a985(292));