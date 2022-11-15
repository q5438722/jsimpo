function testNoShadowing2() {
    var _0x179374 = 2;
    function _0x3dbeeb() {
        return 'local';
    }
    eval('1;');
    function _0x3b3b62() {
        var _0x165922 = _0x2dda;
        eval('1;'), assertEquals(1, x), assertEquals(2, _0x179374), assertEquals(_0x165922(146), global_function()), assertEquals(_0x165922(145), _0x3dbeeb());
        function _0x2dd696() {
            var _0x3006b7 = _0x165922;
            assertEquals(1, x), assertEquals(2, _0x179374), assertEquals(_0x3006b7(146), global_function()), assertEquals(_0x3006b7(145), _0x3dbeeb());
        }
        _0x2dd696();
    }
    _0x3b3b62();
}
function _0x2dda(_0x2f44e7, _0x4e36e4) {
    return _0x2dda = function (_0x2e26db, _0x2dda40) {
        _0x2e26db = _0x2e26db - 134;
        var _0x358f14 = _0x2e26[_0x2e26db];
        return _0x358f14;
    }, _0x2dda(_0x2f44e7, _0x4e36e4);
}
testNoShadowing2();
function testShadowing() {
    var _0x5da6e2 = 2;
    function _0x276e7a() {
        var _0x53573a = _0x2dda;
        return _0x53573a(145);
    }
    function _0x3f89a1() {
        var _0x3d6ac0 = _0x2dda;
        eval('var _0x4a4db5 = 3, _0x27e162 = 4;'), assertEquals(3, x), assertEquals(4, _0x5da6e2), eval('function _0x4deca1() {\n    var _0xecf215 = _0x2dda;\n    return _0xecf215(147);\n}'), eval('function _0x2fb9d1() {\n    return \'new_nonglobal\';\n}'), assertEquals(_0x3d6ac0(148), global_function()), assertEquals('new_local', _0x276e7a());
        function _0x2e0fbe() {
            var _0x2b21d2 = _0x3d6ac0;
            assertEquals(3, x), assertEquals(4, _0x5da6e2), assertEquals(_0x2b21d2(148), global_function()), assertEquals('new_local', _0x276e7a());
        }
        _0x2e0fbe();
    }
    _0x3f89a1();
}
testShadowing();