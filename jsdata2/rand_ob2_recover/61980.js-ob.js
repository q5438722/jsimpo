x = 0;
function test1() {
    var _0x1a8396 = 1, _0x2dcc5c;
    with ({}) {
        _0x2dcc5c = delete _0x1a8396;
    }
    return _0x1a8396 + ':' + _0x2dcc5c;
}
assertEquals(_0x919d0d(204), test1(), 'test1'), assertEquals(0, x, _0x919d0d(205));
function test2() {
    function _0x5719e6() {
        with ({}) {
            return delete _0x2313fd;
        }
    }
    var _0x2313fd = 2, _0x12db84 = _0x5719e6();
    return _0x2313fd + ':' + _0x12db84;
}
assertEquals(_0x919d0d(206), test2(), 'test2'), assertEquals(0, x, _0x919d0d(207));
function test3(_0x32b049) {
    var _0x521ab5;
    with ({}) {
        _0x521ab5 = delete _0x32b049;
    }
    return _0x32b049 + ':' + _0x521ab5;
}
assertEquals(_0x919d0d(208), test3(3), _0x919d0d(209)), assertEquals(0, x, 'test3');
function test4(_0x27e328) {
    function _0x3cc63a() {
        with ({}) {
            return delete _0x27e328;
        }
    }
    var _0x148b88 = _0x3cc63a();
    return _0x27e328 + ':' + _0x148b88;
}
assertEquals('4:false', test4(4), _0x919d0d(210)), assertEquals(0, x, _0x919d0d(210));
function test5(_0x5cc6a4) {
    var _0x52f04e;
    with ({}) {
        _0x52f04e = delete _0x5cc6a4;
    }
    return arguments[0] + ':' + _0x52f04e;
}
assertEquals(_0x919d0d(211), test5(5), _0x919d0d(212)), assertEquals(0, x, _0x919d0d(212));
function test6(_0x16f1d2) {
    function _0x4dfb2e() {
        with ({}) {
            return delete _0x16f1d2;
        }
    }
    var _0x2e6488 = _0x4dfb2e();
    return arguments[0] + ':' + _0x2e6488;
}
assertEquals(_0x919d0d(213), test6(6), _0x919d0d(214)), assertEquals(0, x, _0x919d0d(214));
function test7(_0x1c0a24) {
    with (_0x1c0a24) {
        return delete value;
    }
}
var o = { 'value': 7 };
assertEquals(!![], test7(o), _0x919d0d(215)), assertEquals(void 0, o['value'], 'test7'), assertEquals(0, x, _0x919d0d(215));
function test8() {
    with ({}) {
        return delete x;
    }
}
assertEquals(!![], test8(), 'test8'), assertThrows('x');
function test9() {
    with ({}) {
        return delete x;
    }
}
function _0x39de(_0x437aca, _0x4529e7) {
    return _0x39de = function (_0x551a4d, _0x39de40) {
        _0x551a4d = _0x551a4d - 196;
        var _0x3691e6 = _0x551a[_0x551a4d];
        return _0x3691e6;
    }, _0x39de(_0x437aca, _0x4529e7);
}
assertThrows('x'), assertEquals(!![], test9(), _0x919d0d(216));
var y = 10;
function test10() {
    with ({}) {
        return delete y;
    }
}
assertEquals(![], test10(), _0x919d0d(217)), assertEquals(10, y, _0x919d0d(217));