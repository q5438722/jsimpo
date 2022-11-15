var _0x2e26 = [
    'new_local',
    'new_nonglobal',
    '222265ABaKtv',
    '1niABtD',
    '33057sXTpzn',
    '6VQnVIO',
    '1extJIo',
    '488603bebmrN',
    '520748DuUnfH',
    '2884mTULKa',
    '80IFVnSx',
    '63932fletLc',
    '514080TKzauG',
    'local',
    'global'
];
(function (_0x2e8947, _0x233903) {
    var _0x1e7a66 = _0x2dda;
    while (!![]) {
        try {
            var _0x2a4d29 = parseInt(_0x1e7a66(0x86)) * -parseInt(_0x1e7a66(0x87)) + parseInt(_0x1e7a66(0x88)) * parseInt(_0x1e7a66(0x89)) + -parseInt(_0x1e7a66(0x8a)) * -parseInt(_0x1e7a66(0x8b)) + parseInt(_0x1e7a66(0x8c)) + parseInt(_0x1e7a66(0x8d)) * -parseInt(_0x1e7a66(0x8e)) + parseInt(_0x1e7a66(0x8f)) + -parseInt(_0x1e7a66(0x90));
            if (_0x2a4d29 === _0x233903)
                break;
            else
                _0x2e8947['push'](_0x2e8947['shift']());
        } catch (_0x34200b) {
            _0x2e8947['push'](_0x2e8947['shift']());
        }
    }
}(_0x2e26, 0x4a5b0));
var x = 0x1;
function global_function() {
    return 'global';
}
function testNoShadowing() {
    var _0x4e137f = 0x2;
    function _0x179f67() {
        var _0x69437e = _0x2dda;
        return _0x69437e(0x91);
    }
    function _0x3b5de7() {
        var _0x13379e = _0x2dda;
        eval('1;'), assertEquals(0x1, x);
        try {
            typeof asdf;
        } catch (_0x4f7363) {
            assertUnreachable();
        }
        assertEquals(0x2, _0x4e137f), assertEquals('global', global_function()), assertEquals(_0x13379e(0x91), _0x179f67());
        function _0x17cd2a() {
            var _0x26b1cf = _0x13379e;
            assertEquals(0x1, x);
            try {
                typeof asdf;
            } catch (_0x5a07ca) {
                assertUnreachable();
            }
            assertEquals(0x2, _0x4e137f), assertEquals(_0x26b1cf(0x92), global_function()), assertEquals(_0x26b1cf(0x91), _0x179f67());
        }
        _0x17cd2a();
    }
    _0x3b5de7();
}
testNoShadowing();
function testNoShadowing2() {
    var _0x179374 = 0x2;
    function _0x3dbeeb() {
        return 'local';
    }
    eval('1;');
    function _0x3b3b62() {
        var _0x165922 = _0x2dda;
        eval('1;'), assertEquals(0x1, x), assertEquals(0x2, _0x179374), assertEquals(_0x165922(0x92), global_function()), assertEquals(_0x165922(0x91), _0x3dbeeb());
        function _0x2dd696() {
            var _0x3006b7 = _0x165922;
            assertEquals(0x1, x), assertEquals(0x2, _0x179374), assertEquals(_0x3006b7(0x92), global_function()), assertEquals(_0x3006b7(0x91), _0x3dbeeb());
        }
        _0x2dd696();
    }
    _0x3b3b62();
}
function _0x2dda(_0x2f44e7, _0x4e36e4) {
    return _0x2dda = function (_0x2e26db, _0x2dda40) {
        _0x2e26db = _0x2e26db - 0x86;
        var _0x358f14 = _0x2e26[_0x2e26db];
        return _0x358f14;
    }, _0x2dda(_0x2f44e7, _0x4e36e4);
}
testNoShadowing2();
function testShadowing() {
    var _0x5da6e2 = 0x2;
    function _0x276e7a() {
        var _0x53573a = _0x2dda;
        return _0x53573a(0x91);
    }
    function _0x3f89a1() {
        var _0x3d6ac0 = _0x2dda;
        eval('var _0x4a4db5 = 3, _0x27e162 = 4;'), assertEquals(0x3, x), assertEquals(0x4, _0x5da6e2), eval('function _0x4deca1() {\n    var _0xecf215 = _0x2dda;\n    return _0xecf215(147);\n}'), eval('function _0x2fb9d1() {\n    return \'new_nonglobal\';\n}'), assertEquals(_0x3d6ac0(0x94), global_function()), assertEquals('new_local', _0x276e7a());
        function _0x2e0fbe() {
            var _0x2b21d2 = _0x3d6ac0;
            assertEquals(0x3, x), assertEquals(0x4, _0x5da6e2), assertEquals(_0x2b21d2(0x94), global_function()), assertEquals('new_local', _0x276e7a());
        }
        _0x2e0fbe();
    }
    _0x3f89a1();
}
testShadowing();
