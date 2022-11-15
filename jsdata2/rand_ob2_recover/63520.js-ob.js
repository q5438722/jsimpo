(function testStringRawArity() {
    assertEquals(1, String['raw']['length']);
}(), function testStringRawCallSiteToObject() {
    var _0xee7dac = _0x393e;
    assertThrows(_0xee7dac(115), TypeError);
}(), function testStringRawCallSiteRawToObject() {
    var _0x562bd4 = _0x393e;
    assertThrows(_0x562bd4(116), TypeError);
}(), function testStringRawUndefinedLength() {
    var _0x55f530 = _0x393e, _0x210a37 = [];
    _0x210a37[_0x55f530(117)] = {}, assertEquals('', String[_0x55f530(117)](_0x210a37)), _0x210a37['raw'] = { 'lengt': 0 }, assertEquals('', String['raw'](_0x210a37));
}(), function testStringRawZeroLength() {
    var _0x4155ad = _0x393e, _0x52f837 = [];
    _0x52f837[_0x4155ad(117)] = { 'length': 0 }, assertEquals('', String[_0x4155ad(117)](_0x52f837)), assertEquals('', String[_0x4155ad(117)](_0x52f837, 'a', 'b', 'c')), _0x52f837['raw'] = [], assertEquals('', String['raw'](_0x52f837)), assertEquals('', String[_0x4155ad(117)](_0x52f837, 'a', 'b', 'c'));
}(), function testStringRawNegativeLength() {
    var _0x487c8b = _0x393e, _0x2913c8 = [];
    _0x2913c8[_0x487c8b(117)] = { 'length': -85 }, assertEquals('', String[_0x487c8b(117)](_0x2913c8)), assertEquals('', String[_0x487c8b(117)](_0x2913c8, 'a', 'b', 'c')), _0x2913c8[_0x487c8b(117)] = [], assertEquals('', String[_0x487c8b(117)](_0x2913c8)), assertEquals('', String[_0x487c8b(117)](_0x2913c8, 'a', 'b', 'c'));
}(), function testStringRawNaNLength() {
    var _0x2ba769 = _0x393e, _0x1fb5e7 = [];
    _0x1fb5e7[_0x2ba769(117)] = { 'length': NaN }, assertEquals('', String[_0x2ba769(117)](_0x1fb5e7)), assertEquals('', String[_0x2ba769(117)](_0x1fb5e7, 'a', 'b', 'c')), _0x1fb5e7[_0x2ba769(117)] = [], assertEquals('', String['raw'](_0x1fb5e7)), assertEquals('', String[_0x2ba769(117)](_0x1fb5e7, 'a', 'b', 'c'));
}(), function testStringRawBasic() {
    var _0x18ad7b = _0x393e, _0x496e44 = [];
    _0x496e44[_0x18ad7b(117)] = ['a'], assertEquals('a', String[_0x18ad7b(117)](_0x496e44));
}(), function testStringRawNoSubst() {
    var _0xa06e29 = _0x393e, _0xb80c81 = [];
    _0xb80c81[_0xa06e29(117)] = [
        'a',
        'b'
    ], assertEquals('ab', String[_0xa06e29(117)](_0xb80c81));
}(), function testStringRawSubst() {
    var _0x505fad = _0x393e, _0x153506 = [];
    _0x153506[_0x505fad(117)] = [
        'a',
        'b'
    ], assertEquals(_0x505fad(118), String[_0x505fad(117)](_0x153506, '!')), _0x153506['raw'] = [
        'a',
        'b',
        'c'
    ], assertEquals(_0x505fad(119), String['raw'](_0x153506)), _0x153506['raw'] = [
        'a',
        'b',
        'c'
    ], assertEquals(_0x505fad(120), String[_0x505fad(117)](_0x153506, '!')), _0x153506[_0x505fad(117)] = [
        'a',
        'b',
        'c'
    ], assertEquals(_0x505fad(121), String[_0x505fad(117)](_0x153506, '!', '?')), _0x153506[_0x505fad(117)] = [
        '\n',
        '\r\n',
        '\r'
    ], assertEquals(_0x505fad(122), String['raw'](_0x153506, 'x', 'y')), _0x153506[_0x505fad(117)] = [
        '\n',
        '\r\n',
        '\r'
    ], assertEquals(_0x505fad(123), String['raw'](_0x153506, '\r\r', '\n'));
}(), function testStringRawArrayLikeSubst() {
    var _0x2fa76e = _0x393e, _0x34ff93 = [];
    _0x34ff93[_0x2fa76e(117)] = {
        'length': 2,
        '0': 'a',
        '1': 'b',
        '2': 'c'
    }, assertEquals('axb', String['raw'](_0x34ff93, 'x', 'y')), _0x34ff93['raw'] = {
        'length': 4,
        '0': 'a',
        '1': 'b',
        '2': 'c'
    }, assertEquals(_0x2fa76e(124), String[_0x2fa76e(117)](_0x34ff93, 'x', 'y'));
}(), function testStringRawAccessors() {
    var _0x9aa509 = _0x393e, _0x337df7 = {};
    _0x337df7[_0x9aa509(117)] = {}, Object[_0x9aa509(125)](_0x337df7, {
        'length': {
            'get': function () {
                assertUnreachable();
            },
            'set': function (_0x2933dc) {
                assertUnreachable();
            }
        },
        '0': {
            'get': function () {
                assertUnreachable();
            },
            'set': function (_0x200a51) {
                assertUnreachable();
            }
        },
        '1': {
            'get': function () {
                assertUnreachable();
            },
            'set': function (_0x23b50c) {
                assertUnreachable();
            }
        }
    }), Object[_0x9aa509(125)](_0x337df7[_0x9aa509(117)], {
        'length': {
            'get': function () {
                return 2;
            },
            'set': function (_0x50fbe0) {
                assertUnreachable();
            }
        },
        '0': {
            'get': function () {
                var _0x2ae443 = _0x9aa509;
                return _0x2ae443(126);
            },
            'set': function (_0x452917) {
                assertUnreachable();
            }
        },
        '1': {
            'get': function () {
                var _0x37e1de = _0x9aa509;
                return _0x37e1de(127);
            },
            'set': function (_0x57c248) {
                assertUnreachable();
            }
        }
    }), assertEquals('getter values are nice', String[_0x9aa509(117)](_0x337df7, ' '));
}(), function testStringRawHoleyArray() {
    var _0x190e3b = _0x393e, _0x31cd95 = [];
    _0x31cd95['raw'] = ['1.'], _0x31cd95['raw'][2] = '.2', assertEquals(_0x190e3b(128), String['raw'](_0x31cd95));
}(), function testStringRawAccessorThrows() {
    var _0x3d696f = _0x393e, _0x56a73b = [];
    _0x56a73b[_0x3d696f(117)] = [1];
    function _0x185ba9() {
    }
    Object['defineProperty'](_0x56a73b[_0x3d696f(117)], '0', {
        'get': function () {
            throw new _0x185ba9();
        }
    }), assertThrows(function () {
        String['raw'](_0x56a73b);
    }, _0x185ba9);
}(), function testStringRawToStringSafe() {
    var _0x3f5822 = _0x393e, _0x14a6c6 = [];
    _0x14a6c6[_0x3f5822(117)] = [
        null,
        undefined,
        1,
        _0x3f5822(129),
        !![],
        ![],
        NaN,
        Infinity,
        {}
    ], assertEquals(_0x3f5822(130), String[_0x3f5822(117)](_0x14a6c6)), _0x14a6c6[_0x3f5822(117)] = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ], assertEquals(_0x3f5822(131), String[_0x3f5822(117)](_0x14a6c6, null, void 0, 1, _0x3f5822(129), !![], ![], NaN, Infinity, {}));
}(), function testStringRawToStringSymbolThrows() {
    var _0x2a677b = _0x393e, _0x10d3b7 = [];
    _0x10d3b7[_0x2a677b(117)] = [Symbol(_0x2a677b(132))], assertThrows(function () {
        var _0x189554 = _0x2a677b;
        String[_0x189554(117)](_0x10d3b7);
    }, TypeError), _0x10d3b7['raw'] = [
        '1',
        '2'
    ], assertThrows(function () {
        var _0x7f84de = _0x2a677b;
        String['raw'](_0x10d3b7, Symbol(_0x7f84de(132)));
    }, TypeError);
}(), function testStringRawToStringThrows() {
    var _0xae1616 = _0x393e, _0x389d29 = [], _0x1d4b6d = {};
    function _0x13a6be() {
    }
    _0x1d4b6d['toString'] = function () {
        throw new _0x13a6be();
    }, _0x389d29[_0xae1616(117)] = [_0x1d4b6d], assertThrows(function () {
        var _0x2e8854 = _0xae1616;
        String[_0x2e8854(117)](_0x389d29);
    }, _0x13a6be), _0x389d29[_0xae1616(117)] = [
        '1',
        '2'
    ], assertThrows(function () {
        var _0x440d37 = _0xae1616;
        String[_0x440d37(117)](_0x389d29, _0x1d4b6d);
    }, _0x13a6be);
}(), function testStringRawToStringValueOfThrows() {
    var _0x5edf55 = _0x393e, _0x505a57 = [], _0x5c5210 = {};
    function _0x258f4d() {
    }
    _0x5c5210['toString'] = null, _0x5c5210[_0x5edf55(133)] = function () {
        throw new _0x258f4d();
    }, _0x505a57[_0x5edf55(117)] = [_0x5c5210], assertThrows(function () {
        String['raw'](_0x505a57);
    }, _0x258f4d), _0x505a57[_0x5edf55(117)] = [
        '1',
        '2'
    ], assertThrows(function () {
        var _0x5113ef = _0x5edf55;
        String[_0x5113ef(117)](_0x505a57, _0x5c5210);
    }, _0x258f4d);
}(), function testStringRawOrder() {
    var _0x2b07af = _0x393e, _0x5c53f1 = [], _0x51d579 = [];
    _0x51d579['raw'] = {};
    function _0x2a8af6(_0x33ce20) {
        var _0x1e33af = _0x393e, _0x143f33 = {};
        return _0x143f33['toString'] = null, _0x143f33[_0x1e33af(133)] = function () {
            var _0x33f0f9 = _0x1e33af;
            return _0x5c53f1[_0x33f0f9(134)]('arg' + _0x33ce20), _0x33ce20;
        }, _0x143f33;
    }
    Object[_0x2b07af(135)](_0x51d579[_0x2b07af(117)], _0x2b07af(136), {
        'get': function () {
            var _0x21b009 = _0x2b07af;
            return _0x5c53f1[_0x21b009(134)](_0x21b009(136)), 3;
        }
    }), [
        1,
        3,
        5
    ][_0x2b07af(137)](function (_0x4ae0bd, _0xdda66b) {
        var _0x126256 = _0x2b07af;
        Object[_0x126256(135)](_0x51d579[_0x126256(117)], _0xdda66b, {
            'get': function () {
                return _0x5c53f1['push']('raw' + _0x4ae0bd), _0x4ae0bd;
            }
        });
    }), assertEquals(_0x2b07af(138), String[_0x2b07af(117)](_0x51d579, _0x2a8af6(2), _0x2a8af6(4), _0x2a8af6(6))), assertEquals([
        _0x2b07af(136),
        _0x2b07af(139),
        'arg2',
        _0x2b07af(140),
        _0x2b07af(141),
        'raw5'
    ], _0x5c53f1);
}(), function testStringRawToStringSubstitutionsOrder() {
    var _0x34837d = _0x393e, _0x189596 = [], _0x42050e = [];
    function _0x4747e5(_0x4cb416) {
        var _0x2d78bf = '_' + _0x4cb416 + '_';
        return {
            'toString': function () {
                return _0x4cb416;
            },
            'valueOf': function () {
                return _0x2d78bf;
            }
        };
    }
    function _0x31dfea(_0x2af03b, _0x577da2) {
        return {
            'get': function () {
                var _0x44e918 = _0x393e;
                return _0x42050e[_0x44e918(134)](_0x44e918(142) + _0x2af03b), _0x577da2;
            },
            'set': function (_0x541ec4) {
                var _0x1dcf9c = _0x393e;
                _0x42050e[_0x1dcf9c(134)](_0x1dcf9c(143) + _0x2af03b);
            }
        };
    }
    Object[_0x34837d(125)](_0x189596, {
        0: _0x31dfea(0, _0x4747e5('a')),
        1: _0x31dfea(1, _0x4747e5('b')),
        2: _0x31dfea(2, _0x4747e5('c'))
    }), assertEquals(_0x34837d(144), String[_0x34837d(117)]`-${ _0x189596[0] }-${ _0x189596[1] }-${ _0x189596[2] }-`), assertArrayEquals([
        _0x34837d(145),
        _0x34837d(146),
        _0x34837d(147)
    ], _0x42050e), _0x42050e['length'] = 0, assertEquals('-a-', String[_0x34837d(117)]`-${ _0x189596[0] }-`), assertArrayEquals([_0x34837d(145)], _0x42050e);
}());