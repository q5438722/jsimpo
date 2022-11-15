x = 0;
function test1() {
    var _0x1733bd = 1;
    var _0x5b19bb;
    with ({}) {
        if ('vVwbt' === 'BUzUJ') {
            with ({}) {
                return delete _0x1733bd;
            }
        } else {
            _0x5b19bb = delete _0x1733bd;
        }
    }
    return _0x395025['wLCFX'](_0x1733bd, ':') + _0x5b19bb;
}
assertEquals('1:false', test1(), 'test1');
assertEquals(0, x, 'test1');
function test2() {
    function _0xcc4a12() {
        with ({}) {
            return delete _0x48fd37;
        }
    }
    var _0x48fd37 = 2;
    var _0x796d3 = _0xcc4a12();
    return _0x48fd37 + ':' + _0x796d3;
}
assertEquals('2:false', test2(), 'test2');
assertEquals(0, x, 'test2');
function test3(_0x3f9fc5) {
    var _0xb2b17b;
    with ({}) {
        if ('pksqu' === 'pksqu') {
            _0xb2b17b = delete _0x3f9fc5;
        } else {
            _0xb2b17b = delete _0x3f9fc5;
        }
    }
    return _0x3f9fc5 + ':' + _0xb2b17b;
}
assertEquals('3:false', test3(3), 'test3');
assertEquals(0, x, 'test3');
function test4(_0xb00e42) {
    function _0x2042d3() {
        if ('FlsbR' !== 'lYDec') {
            with ({}) {
                return delete _0xb00e42;
            }
        } else {
            with ({}) {
                return delete x;
            }
        }
    }
    var _0x36b7ea = _0x2042d3();
    return _0xb00e42 + ':' + _0x36b7ea;
}
assertEquals('4:false', test4(4), 'test4');
assertEquals(0, x, 'test4');
function test5(_0x301736) {
    var _0x3eafc6;
    with ({}) {
        if ('hSEkU' === 'qShsK') {
            return delete _0x301736;
        } else {
            _0x3eafc6 = delete _0x301736;
        }
    }
    return arguments[0] + ':' + _0x3eafc6;
}
assertEquals('5:false', test5(5), 'test5');
assertEquals(0, x, 'test5');
function test6(_0x5c446d) {
    function _0x3e9fcd() {
        with ({}) {
            return delete _0x5c446d;
        }
    }
    var _0x37337c = _0x3e9fcd();
    return arguments[0] + ':' + _0x37337c;
}
assertEquals('6:false', test6(6), 'test6');
assertEquals(0, x, 'test6');
function test7(_0xdf3da) {
    with (_0xdf3da) {
        return delete value;
    }
}
var o = {};
assertEquals(!![], test7(o), 'test7');
assertEquals(void 0, o['value'], 'test7');
assertEquals(0, x, 'test7');
function test8() {
    with ({}) {
        if ('QmOCw' === 'QmOCw') {
            return delete x;
        } else {
            return delete value;
        }
    }
}
assertEquals(!![], test8(), 'test8');
assertThrows('x');
function test9() {
    with ({}) {
        return delete x;
    }
}
assertThrows('x');
assertEquals(!![], test9(), 'test9');
var y = 10;
function test10() {
    with ({}) {
        if ('IILyx' !== 'IILyx') {
            return delete y;
        } else {
            return delete y;
        }
    }
}
assertEquals(![], test10(), 'test10');
assertEquals(10, y, 'test10');