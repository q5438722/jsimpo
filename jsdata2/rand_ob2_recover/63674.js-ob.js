function assertSize(_0x10c7cc, _0x55dea9) {
    (_0x55dea9 instanceof Map || _0x55dea9 instanceof Set) && assertEquals(_0x10c7cc, _0x55dea9['size']);
}
function TestValidSetCalls(_0x2a7b77) {
    assertDoesNotThrow(function () {
        var _0x272b83 = _0x1926;
        _0x2a7b77[_0x272b83(157)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x44aff4 = _0x1926;
        _0x2a7b77[_0x44aff4(158)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x3e07ec = _0x1926;
        _0x2a7b77[_0x3e07ec(159)](new Object());
    });
}
TestValidSetCalls(new Set()), TestValidSetCalls(new WeakSet());
function TestValidMapCalls(_0x54824e) {
    assertDoesNotThrow(function () {
        var _0x150f49 = _0x1926;
        _0x54824e[_0x150f49(160)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x4fd27b = _0x1926;
        _0x54824e[_0x4fd27b(161)](new Object());
    }), assertDoesNotThrow(function () {
        _0x54824e['has'](new Object());
    }), assertDoesNotThrow(function () {
        _0x54824e['delete'](new Object());
    }), assertDoesNotThrow(function () {
        var _0x373fb2 = _0x1926;
        _0x54824e[_0x373fb2(160)](undefined);
    }), assertDoesNotThrow(function () {
        var _0x5a2992 = _0x1926;
        _0x54824e[_0x5a2992(160)](null);
    }), assertDoesNotThrow(function () {
        var _0x1a6691 = _0x1926;
        _0x54824e[_0x1a6691(160)](0);
    }), assertDoesNotThrow(function () {
        var _0x42063e = _0x1926;
        _0x54824e[_0x42063e(160)]('a-key');
    }), assertDoesNotThrow(function () {
        var _0x3f3c21 = _0x1926;
        _0x54824e[_0x3f3c21(160)](Symbol());
    }), assertDoesNotThrow(function () {
        var _0x5a9ba4 = _0x1926;
        _0x54824e[_0x5a9ba4(158)](undefined);
    }), assertDoesNotThrow(function () {
        var _0x5bdc46 = _0x1926;
        _0x54824e[_0x5bdc46(158)](null);
    }), assertDoesNotThrow(function () {
        var _0x11d161 = _0x1926;
        _0x54824e[_0x11d161(158)](0);
    }), assertDoesNotThrow(function () {
        var _0x540d74 = _0x1926;
        _0x54824e[_0x540d74(158)](_0x540d74(162));
    }), assertDoesNotThrow(function () {
        var _0x20d3dc = _0x1926;
        _0x54824e[_0x20d3dc(158)](Symbol());
    }), assertDoesNotThrow(function () {
        var _0x589655 = _0x1926;
        _0x54824e[_0x589655(159)](undefined);
    }), assertDoesNotThrow(function () {
        _0x54824e['delete'](null);
    }), assertDoesNotThrow(function () {
        var _0x2a10f4 = _0x1926;
        _0x54824e[_0x2a10f4(159)](0);
    }), assertDoesNotThrow(function () {
        var _0xbe22a5 = _0x1926;
        _0x54824e[_0xbe22a5(159)](_0xbe22a5(162));
    }), assertDoesNotThrow(function () {
        var _0x35db10 = _0x1926;
        _0x54824e[_0x35db10(159)](Symbol());
    });
}
TestValidMapCalls(new Map()), TestValidMapCalls(new WeakMap());
function TestInvalidCalls(_0x5bdad5) {
    assertThrows(function () {
        var _0x9f19f8 = _0x1926;
        _0x5bdad5[_0x9f19f8(161)](undefined, 0);
    }, TypeError), assertThrows(function () {
        var _0x491d7f = _0x1926;
        _0x5bdad5[_0x491d7f(161)](null, 0);
    }, TypeError), assertThrows(function () {
        var _0x37fc6e = _0x1926;
        _0x5bdad5[_0x37fc6e(161)](0, 0);
    }, TypeError), assertThrows(function () {
        var _0x52d3b9 = _0x1926;
        _0x5bdad5[_0x52d3b9(161)](_0x52d3b9(162), 0);
    }, TypeError), assertThrows(function () {
        _0x5bdad5['set'](Symbol(), 0);
    }, TypeError);
}
TestInvalidCalls(new WeakMap());
function TestSet(_0x417c10, _0x4e2d2b) {
    var _0x43730a = _0x1926;
    assertFalse(_0x417c10['has'](_0x4e2d2b)), assertFalse(_0x417c10[_0x43730a(159)](_0x4e2d2b)), typeof _0x4e2d2b === _0x43730a(163) && !(_0x417c10 instanceof WeakSet) && (assertSame(_0x417c10, _0x417c10[_0x43730a(157)](_0x4e2d2b)), assertTrue(_0x417c10['has'](_0x4e2d2b)), assertTrue(_0x417c10[_0x43730a(159)](_0x4e2d2b))), assertFalse(_0x417c10[_0x43730a(158)](_0x4e2d2b)), assertFalse(_0x417c10['delete'](_0x4e2d2b)), assertFalse(_0x417c10['has'](_0x4e2d2b));
}
function TestSetBehavior(_0x1e85ce) {
    var _0x1c598b = _0x1926;
    for (var _0x2ec106 = 0; _0x2ec106 < 20; _0x2ec106++) {
        TestSet(_0x1e85ce, new Object()), TestSet(_0x1e85ce, _0x2ec106), TestSet(_0x1e85ce, _0x2ec106 / 100), TestSet(_0x1e85ce, _0x1c598b(164) + _0x2ec106), TestSet(_0x1e85ce, Symbol(_0x2ec106));
    }
    var _0x1bd61b = [
        -0,
        +0,
        1,
        1 / 3,
        10,
        +Infinity,
        -Infinity,
        NaN,
        !![],
        ![],
        null,
        undefined,
        'x',
        Symbol(),
        {},
        function () {
        }
    ];
    for (var _0x2ec106 = 0; _0x2ec106 < _0x1bd61b[_0x1c598b(165)]; _0x2ec106++) {
        TestSet(_0x1e85ce, _0x1bd61b[_0x2ec106]);
    }
}
TestSetBehavior(new Set()), TestSetBehavior(new WeakSet());
function TestMapping(_0x5e457c, _0x58b942, _0x4e10bb) {
    var _0x120e13 = _0x1926;
    assertFalse(_0x5e457c[_0x120e13(158)](_0x58b942)), assertSame(undefined, _0x5e457c[_0x120e13(160)](_0x58b942)), assertFalse(_0x5e457c[_0x120e13(159)](_0x58b942)), typeof _0x58b942 === _0x120e13(163) && !(_0x5e457c instanceof WeakMap) && (assertSame(_0x5e457c, _0x5e457c[_0x120e13(161)](_0x58b942, _0x4e10bb)), assertSame(_0x4e10bb, _0x5e457c['get'](_0x58b942)), assertTrue(_0x5e457c[_0x120e13(158)](_0x58b942)), assertTrue(_0x5e457c['delete'](_0x58b942))), assertFalse(_0x5e457c[_0x120e13(158)](_0x58b942)), assertSame(undefined, _0x5e457c[_0x120e13(160)](_0x58b942)), assertFalse(_0x5e457c[_0x120e13(159)](_0x58b942)), assertFalse(_0x5e457c['has'](_0x58b942)), assertSame(undefined, _0x5e457c[_0x120e13(160)](_0x58b942));
}
function TestMapBehavior(_0x29bfda) {
    var _0x583f01 = _0x1926;
    TestMapping(_0x29bfda, new Object(), 23), TestMapping(_0x29bfda, new Object(), _0x583f01(166)), TestMapping(_0x29bfda, new Object(), new Object());
    for (var _0x4f47ef = 0; _0x4f47ef < 20; _0x4f47ef++) {
        TestMapping(_0x29bfda, _0x4f47ef, new Object()), TestMapping(_0x29bfda, _0x4f47ef / 10, new Object()), TestMapping(_0x29bfda, _0x583f01(164) + _0x4f47ef, new Object()), TestMapping(_0x29bfda, Symbol(_0x4f47ef), new Object());
    }
    var _0x22ff09 = [
        -0,
        +0,
        1,
        1 / 3,
        10,
        +Infinity,
        -Infinity,
        NaN,
        !![],
        ![],
        null,
        undefined,
        'x',
        Symbol(),
        {},
        function () {
        }
    ];
    for (var _0x4f47ef = 0; _0x4f47ef < _0x22ff09[_0x583f01(165)]; _0x4f47ef++) {
        TestMapping(_0x29bfda, _0x22ff09[_0x4f47ef], 23), TestMapping(_0x29bfda, _0x22ff09[_0x4f47ef], _0x583f01(166)), TestMapping(_0x29bfda, _0x22ff09[_0x4f47ef], new Object());
    }
}
TestMapBehavior(new Map()), TestMapBehavior(new WeakMap());
function TestQuery(_0x36a46f) {
    var _0x4415a2 = new Object(), _0x38afa4 = [
            'x',
            0,
            +Infinity,
            -Infinity,
            !![],
            ![],
            null,
            undefined
        ];
    for (var _0x280c11 = 0; _0x280c11 < _0x38afa4['length']; _0x280c11++) {
        TestMapping(_0x36a46f, _0x4415a2, _0x38afa4[_0x280c11]);
    }
}
TestQuery(new Map()), TestQuery(new WeakMap());
function TestDelete(_0xcd8346) {
    var _0x3ed958 = _0x1926, _0x32fe05 = new Object();
    TestMapping(_0xcd8346, _0x32fe05, 'to-be-deleted'), assertFalse(_0xcd8346['delete'](_0x32fe05)), assertFalse(_0xcd8346[_0x3ed958(159)](new Object())), assertSame(_0xcd8346[_0x3ed958(160)](_0x32fe05), undefined);
}
TestDelete(new Map()), TestDelete(new WeakMap());
function TestGC1(_0xc97873) {
    var _0x5d162f = _0x1926, _0x2f728b = new Object();
    _0xc97873[_0x5d162f(161)](_0x2f728b, _0x5d162f(167)), gc(), assertSame(_0x5d162f(167), _0xc97873[_0x5d162f(160)](_0x2f728b));
}
TestGC1(new Map()), TestGC1(new WeakMap());
function TestGC2(_0x56c047) {
    var _0x1b94fd = _0x1926, _0x35a396 = new Object();
    for (key = _0x35a396, i = 0; i < 10; i++, key = _0x56c047['get'](key)) {
        _0x56c047[_0x1b94fd(161)](key, new Object());
    }
    gc();
    var _0x184e33 = 0;
    for (key = _0x35a396; key != undefined; key = _0x56c047[_0x1b94fd(160)](key)) {
        _0x184e33++;
    }
    assertEquals(11, _0x184e33);
}
TestGC2(new Map()), TestGC2(new WeakMap());
function TestEnumerable(_0x3f7cf3) {
    var _0x17b4a9 = _0x1926;
    function _0x14c759(_0x4a4e56) {
        var _0x5a7ed5 = _0x1926, _0x17d5a7 = [];
        for (var _0x332f8c in _0x4a4e56)
            _0x17d5a7['push'](_0x332f8c);
        return _0x17d5a7[_0x5a7ed5(168)]();
    }
    assertArrayEquals([], _0x14c759(_0x3f7cf3)), assertArrayEquals([], _0x14c759(_0x3f7cf3[_0x17b4a9(169)])), assertArrayEquals([], _0x14c759(new _0x3f7cf3()));
}
TestEnumerable(Set), TestEnumerable(Map), TestEnumerable(WeakMap), TestEnumerable(WeakSet);
function TestArbitrary(_0x2244dd) {
    var _0x51ed41 = _0x1926;
    function _0x239a7b(_0xc5d32d, _0x2b2b0e, _0x207cb4) {
        _0xc5d32d[_0x2b2b0e] = _0x207cb4, assertEquals(_0x207cb4, _0xc5d32d[_0x2b2b0e]);
    }
    for (var _0x539d0d = 0; _0x539d0d < 20; _0x539d0d++) {
        _0x239a7b(_0x2244dd, _0x539d0d, 'val' + _0x539d0d), _0x239a7b(_0x2244dd, _0x51ed41(170) + _0x539d0d, 'bar' + _0x539d0d);
    }
    TestMapping(_0x2244dd, new Object(), _0x51ed41(171));
}
TestArbitrary(new Map()), TestArbitrary(new WeakMap()), assertThrows(function () {
    Set();
}, TypeError), assertThrows(function () {
    Map();
}, TypeError), assertThrows(function () {
    WeakMap();
}, TypeError), assertThrows(function () {
    WeakSet();
}, TypeError);
var s = new Set();
assertFalse(s['has'](NaN)), assertFalse(s[_0x313fdc(158)](NaN + 1)), assertFalse(s[_0x313fdc(158)](23)), s[_0x313fdc(157)](NaN), assertTrue(s[_0x313fdc(158)](NaN)), assertTrue(s[_0x313fdc(158)](NaN + 1)), assertFalse(s[_0x313fdc(158)](23));
var m = new Map();
assertFalse(m['has'](NaN)), assertFalse(m[_0x313fdc(158)](NaN + 1)), assertFalse(m[_0x313fdc(158)](23)), m[_0x313fdc(161)](NaN, _0x313fdc(172)), assertTrue(m[_0x313fdc(158)](NaN)), assertTrue(m[_0x313fdc(158)](NaN + 1)), assertFalse(m['has'](23));
var s = new Set();
assertTrue(s instanceof Set), assertTrue(Set[_0x313fdc(169)][_0x313fdc(157)] instanceof Function), assertTrue(Set['prototype'][_0x313fdc(158)] instanceof Function), assertTrue(Set['prototype'][_0x313fdc(159)] instanceof Function), assertTrue(Set[_0x313fdc(169)][_0x313fdc(173)] instanceof Function);
var m = new Map();
assertTrue(m instanceof Map), assertTrue(Map[_0x313fdc(169)][_0x313fdc(161)] instanceof Function), assertTrue(Map['prototype'][_0x313fdc(160)] instanceof Function), assertTrue(Map[_0x313fdc(169)]['has'] instanceof Function), assertTrue(Map['prototype'][_0x313fdc(159)] instanceof Function), assertTrue(Map[_0x313fdc(169)]['clear'] instanceof Function);
var m = new WeakMap();
assertTrue(m instanceof WeakMap), assertTrue(WeakMap[_0x313fdc(169)][_0x313fdc(161)] instanceof Function), assertTrue(WeakMap[_0x313fdc(169)][_0x313fdc(160)] instanceof Function), assertTrue(WeakMap['prototype'][_0x313fdc(158)] instanceof Function), assertTrue(WeakMap['prototype'][_0x313fdc(159)] instanceof Function);
var s = new WeakSet();
assertTrue(s instanceof WeakSet), assertTrue(WeakSet['prototype'][_0x313fdc(157)] instanceof Function), assertTrue(WeakSet['prototype'][_0x313fdc(158)] instanceof Function), assertTrue(WeakSet[_0x313fdc(169)]['delete'] instanceof Function), assertEquals(_0x313fdc(174), Set[_0x313fdc(175)]), assertEquals(_0x313fdc(176), Map[_0x313fdc(175)]), assertEquals(_0x313fdc(177), WeakMap[_0x313fdc(175)]), assertEquals(_0x313fdc(178), WeakSet[_0x313fdc(175)]);
function TestPrototype(_0x4c6cf9) {
    var _0x4dcc56 = _0x313fdc;
    assertTrue(_0x4c6cf9[_0x4dcc56(169)] instanceof Object), assertEquals({
        'value': _0x4c6cf9['prototype'],
        'writable': ![],
        'enumerable': ![],
        'configurable': ![]
    }, Object['getOwnPropertyDescriptor'](_0x4c6cf9, 'prototype'));
}
TestPrototype(Set), TestPrototype(Map), TestPrototype(WeakMap), TestPrototype(WeakSet);
function TestConstructor(_0x45579d) {
    var _0x3da138 = _0x313fdc;
    assertFalse(_0x45579d === Object['prototype']['constructor']), assertSame(_0x45579d, _0x45579d[_0x3da138(169)]['constructor']), assertSame(_0x45579d, new _0x45579d()['__proto__'][_0x3da138(179)]), assertEquals(0, _0x45579d[_0x3da138(165)]);
}
TestConstructor(Set), TestConstructor(Map), TestConstructor(WeakMap), TestConstructor(WeakSet);
function TestDescriptor(_0x37b179, _0x488a27) {
    var _0xd70822 = _0x313fdc;
    assertEquals({
        'value': _0x488a27,
        'writable': !![],
        'enumerable': ![],
        'configurable': !![]
    }, Object[_0xd70822(180)](_0x37b179, _0x488a27[_0xd70822(175)]));
}
TestDescriptor(this, Set), TestDescriptor(this, Map), TestDescriptor(this, WeakMap), TestDescriptor(this, WeakSet), assertTrue(WeakMap[_0x313fdc(169)][_0x313fdc(179)] === WeakMap), assertTrue(Object['getPrototypeOf'](WeakMap['prototype']) === Object['prototype']), assertFalse(WeakMap['prototype'] === Object[_0x313fdc(169)]);
var o = Object[_0x313fdc(181)]({});
assertFalse(_0x313fdc(160) in o), assertFalse(_0x313fdc(161) in o), assertEquals(undefined, o['get']), assertEquals(undefined, o['set']);
var o = Object[_0x313fdc(181)]({}, {
    'myValue': {
        'value': 10,
        'enumerable': ![],
        'configurable': !![],
        'writable': !![]
    }
});
assertEquals(10, o[_0x313fdc(182)]);
var alwaysBogus = [
        undefined,
        null,
        !![],
        'x',
        23,
        {}
    ], bogusReceiversTestSet = [
        {
            'proto': Set['prototype'],
            'funcs': [
                _0x313fdc(157),
                _0x313fdc(158),
                _0x313fdc(159)
            ],
            'receivers': alwaysBogus[_0x313fdc(183)]([
                new Map(),
                new WeakMap(),
                new WeakSet()
            ])
        },
        {
            'proto': Map['prototype'],
            'funcs': [
                _0x313fdc(160),
                'set',
                _0x313fdc(158),
                _0x313fdc(159)
            ],
            'receivers': alwaysBogus['concat']([
                new Set(),
                new WeakMap(),
                new WeakSet()
            ])
        },
        {
            'proto': WeakMap[_0x313fdc(169)],
            'funcs': [
                'get',
                _0x313fdc(161),
                'has',
                _0x313fdc(159)
            ],
            'receivers': alwaysBogus['concat']([
                new Set(),
                new Map(),
                new WeakSet()
            ])
        },
        {
            'proto': WeakSet[_0x313fdc(169)],
            'funcs': [
                _0x313fdc(157),
                _0x313fdc(158),
                _0x313fdc(159)
            ],
            'receivers': alwaysBogus[_0x313fdc(183)]([
                new Set(),
                new Map(),
                new WeakMap()
            ])
        }
    ];
function TestBogusReceivers(_0x40b56e) {
    var _0x2fef82 = _0x313fdc;
    for (var _0x5bcd2e = 0; _0x5bcd2e < _0x40b56e[_0x2fef82(165)]; _0x5bcd2e++) {
        var _0xbda7b6 = _0x40b56e[_0x5bcd2e][_0x2fef82(184)], _0xf3e534 = _0x40b56e[_0x5bcd2e][_0x2fef82(185)], _0x16489d = _0x40b56e[_0x5bcd2e][_0x2fef82(186)];
        for (var _0x54ce85 = 0; _0x54ce85 < _0xf3e534[_0x2fef82(165)]; _0x54ce85++) {
            var _0x429eb8 = _0xbda7b6[_0xf3e534[_0x54ce85]];
            for (var _0x236815 = 0; _0x236815 < _0x16489d[_0x2fef82(165)]; _0x236815++) {
                assertThrows(function () {
                    var _0x5a8528 = _0x2fef82;
                    _0x429eb8[_0x5a8528(187)](_0x16489d[_0x236815], {});
                }, TypeError);
            }
        }
    }
}
TestBogusReceivers(bogusReceiversTestSet);
var setSizeDescriptor = Object[_0x313fdc(180)](Set[_0x313fdc(169)], _0x313fdc(188));
assertEquals(undefined, setSizeDescriptor[_0x313fdc(189)]), assertEquals(undefined, setSizeDescriptor[_0x313fdc(161)]), assertTrue(setSizeDescriptor['get'] instanceof Function), assertEquals(undefined, setSizeDescriptor[_0x313fdc(160)]['prototype']), assertFalse(setSizeDescriptor['enumerable']), assertTrue(setSizeDescriptor[_0x313fdc(190)]), assertEquals(_0x313fdc(191), setSizeDescriptor['get'][_0x313fdc(175)]);
var s = new Set();
assertFalse(s[_0x313fdc(192)](_0x313fdc(188)));
for (var i = 0; i < 10; i++) {
    assertEquals(i, s[_0x313fdc(188)]), s[_0x313fdc(157)](i);
}
for (var i = 9; i >= 0; i--) {
    s[_0x313fdc(159)](i), assertEquals(i, s[_0x313fdc(188)]);
}
var mapSizeDescriptor = Object[_0x313fdc(180)](Map[_0x313fdc(169)], 'size');
assertEquals(undefined, mapSizeDescriptor['value']), assertEquals(undefined, mapSizeDescriptor[_0x313fdc(161)]), assertTrue(mapSizeDescriptor[_0x313fdc(160)] instanceof Function), assertEquals(undefined, mapSizeDescriptor[_0x313fdc(160)][_0x313fdc(169)]), assertFalse(mapSizeDescriptor[_0x313fdc(193)]), assertTrue(mapSizeDescriptor[_0x313fdc(190)]), assertEquals('get size', mapSizeDescriptor['get'][_0x313fdc(175)]);
var m = new Map();
assertFalse(m[_0x313fdc(192)](_0x313fdc(188)));
for (var i = 0; i < 10; i++) {
    assertEquals(i, m[_0x313fdc(188)]), m['set'](i, i);
}
for (var i = 9; i >= 0; i--) {
    m[_0x313fdc(159)](i), assertEquals(i, m[_0x313fdc(188)]);
}
(function () {
    var _0x4651ca = _0x313fdc, _0x16f2e0 = new Set();
    _0x16f2e0[_0x4651ca(157)](42), assertTrue(_0x16f2e0[_0x4651ca(158)](42)), assertEquals(1, _0x16f2e0[_0x4651ca(188)]), _0x16f2e0[_0x4651ca(173)](), assertFalse(_0x16f2e0['has'](42)), assertEquals(0, _0x16f2e0[_0x4651ca(188)]);
}(), function () {
    var _0x493a59 = _0x313fdc, _0x5b308b = new Map();
    _0x5b308b['set'](42, !![]), assertTrue(_0x5b308b[_0x493a59(158)](42)), assertEquals(1, _0x5b308b['size']), _0x5b308b['clear'](), assertFalse(_0x5b308b[_0x493a59(158)](42)), assertEquals(0, _0x5b308b[_0x493a59(188)]);
}(), function TestMinusZeroSet() {
    var _0x580bbe = _0x313fdc, _0x3a64ab = new Set();
    _0x3a64ab[_0x580bbe(157)](-0), assertSame(0, _0x3a64ab[_0x580bbe(194)]()[_0x580bbe(195)]()[_0x580bbe(189)]), _0x3a64ab[_0x580bbe(157)](0), assertEquals(1, _0x3a64ab[_0x580bbe(188)]), assertTrue(_0x3a64ab[_0x580bbe(158)](0)), assertTrue(_0x3a64ab[_0x580bbe(158)](-0));
}(), function TestMinusZeroMap() {
    var _0x4f2739 = _0x313fdc, _0x2d25f7 = new Map();
    _0x2d25f7[_0x4f2739(161)](-0, _0x4f2739(196)), assertSame(0, _0x2d25f7[_0x4f2739(197)]()[_0x4f2739(195)]()[_0x4f2739(189)]), _0x2d25f7[_0x4f2739(161)](0, _0x4f2739(198)), assertEquals(1, _0x2d25f7[_0x4f2739(188)]), assertTrue(_0x2d25f7[_0x4f2739(158)](0)), assertTrue(_0x2d25f7['has'](-0)), assertEquals('plus', _0x2d25f7[_0x4f2739(160)](0)), assertEquals(_0x4f2739(198), _0x2d25f7['get'](-0));
}(), function TestSetForEachInvalidTypes() {
    assertThrows(function () {
        var _0x55b2fb = _0x1926;
        Set[_0x55b2fb(169)][_0x55b2fb(161)][_0x55b2fb(199)][_0x55b2fb(187)]({});
    }, TypeError);
    var _0x547df1 = new Set();
    assertThrows(function () {
        _0x547df1['forEach']({});
    }, TypeError);
}(), function TestSetForEach() {
    var _0x3830bf = _0x313fdc, _0x1d4ae5 = new Set();
    _0x1d4ae5['add']('a'), _0x1d4ae5[_0x3830bf(157)]('b'), _0x1d4ae5[_0x3830bf(157)]('c');
    var _0x7f677c = '', _0x411b9a = {};
    _0x1d4ae5['forEach'](function (_0x96a9b4, _0x3ca29b, _0x4764da) {
        var _0x43bc0a = _0x3830bf;
        assertSame(_0x96a9b4, _0x3ca29b), assertSame(_0x1d4ae5, _0x4764da), assertSame(this, _0x411b9a), _0x7f677c += _0x96a9b4;
        if (_0x96a9b4 === 'a')
            _0x1d4ae5[_0x43bc0a(159)]('b'), _0x1d4ae5[_0x43bc0a(157)]('d'), _0x1d4ae5[_0x43bc0a(157)]('e'), _0x1d4ae5[_0x43bc0a(157)]('f');
        else
            _0x96a9b4 === 'c' && (_0x1d4ae5[_0x43bc0a(157)]('b'), _0x1d4ae5[_0x43bc0a(159)]('e'));
    }, _0x411b9a), assertEquals('acdfb', _0x7f677c);
}(), function TestSetForEachAddAtEnd() {
    var _0x3cba42 = _0x313fdc, _0x5eb44a = new Set();
    _0x5eb44a[_0x3cba42(157)]('a'), _0x5eb44a[_0x3cba42(157)]('b');
    var _0x43ed99 = '';
    _0x5eb44a[_0x3cba42(199)](function (_0x4ee038) {
        var _0x519172 = _0x3cba42;
        _0x43ed99 += _0x4ee038, _0x4ee038 === 'b' && _0x5eb44a[_0x519172(157)]('c');
    }), assertEquals(_0x3cba42(200), _0x43ed99);
}(), function TestSetForEachDeleteNext() {
    var _0x47b0f6 = _0x313fdc, _0x235412 = new Set();
    _0x235412[_0x47b0f6(157)]('a'), _0x235412[_0x47b0f6(157)]('b'), _0x235412[_0x47b0f6(157)]('c');
    var _0x5772a7 = '';
    _0x235412[_0x47b0f6(199)](function (_0x1e105c) {
        var _0x1a88e6 = _0x47b0f6;
        _0x5772a7 += _0x1e105c, _0x1e105c === 'b' && _0x235412[_0x1a88e6(159)]('c');
    }), assertEquals('ab', _0x5772a7);
}(), function TestSetForEachDeleteVisitedAndAddAgain() {
    var _0x3b819b = _0x313fdc, _0x1e4145 = new Set();
    _0x1e4145['add']('a'), _0x1e4145['add']('b'), _0x1e4145[_0x3b819b(157)]('c');
    var _0x243f2e = '';
    _0x1e4145[_0x3b819b(199)](function (_0x4c4d08) {
        _0x243f2e += _0x4c4d08;
        if (_0x4c4d08 === 'b')
            _0x1e4145['delete']('a');
        else
            _0x4c4d08 === 'c' && _0x1e4145['add']('a');
    }), assertEquals(_0x3b819b(201), _0x243f2e);
}(), function TestSetForEachClear() {
    var _0x251005 = _0x313fdc, _0x4dd901 = new Set();
    _0x4dd901[_0x251005(157)]('a'), _0x4dd901['add']('b'), _0x4dd901[_0x251005(157)]('c');
    var _0x39253c = '';
    _0x4dd901[_0x251005(199)](function (_0x3e55e7) {
        var _0x3a2ee8 = _0x251005;
        _0x39253c += _0x3e55e7, _0x3e55e7 === 'a' && (_0x4dd901['clear'](), _0x4dd901[_0x3a2ee8(157)]('d'), _0x4dd901['add']('e'));
    }), assertEquals(_0x251005(202), _0x39253c);
}(), function TestSetForEachNested() {
    var _0x45a7e0 = _0x313fdc, _0x58de55 = new Set();
    _0x58de55[_0x45a7e0(157)]('a'), _0x58de55[_0x45a7e0(157)]('b'), _0x58de55[_0x45a7e0(157)]('c');
    var _0x780186 = '';
    _0x58de55[_0x45a7e0(199)](function (_0x259445) {
        _0x780186 += _0x259445, _0x58de55['forEach'](function (_0x53ed38) {
            var _0x1861bc = _0x1926;
            _0x780186 += _0x53ed38, _0x53ed38 === 'a' && _0x58de55[_0x1861bc(159)]('b');
        });
    }), assertEquals(_0x45a7e0(203), _0x780186);
}(), function TestSetForEachEarlyExit() {
    var _0x43cd91 = _0x313fdc, _0x1902c0 = new Set();
    _0x1902c0[_0x43cd91(157)]('a'), _0x1902c0[_0x43cd91(157)]('b'), _0x1902c0['add']('c');
    var _0x16499e = '', _0x22bfae = {};
    try {
        _0x1902c0[_0x43cd91(199)](function (_0x723f20) {
            _0x16499e += _0x723f20;
            throw _0x22bfae;
        });
    } catch (_0x2304fb) {
        assertEquals(_0x22bfae, _0x2304fb);
    }
    assertEquals('a', _0x16499e);
}(), function TestSetForEachGC() {
    var _0x5cba10 = _0x313fdc, _0x411a5f = new Set();
    for (var _0x2a342f = 0; _0x2a342f < 100; _0x2a342f++) {
        _0x411a5f[_0x5cba10(157)](_0x2a342f);
    }
    var _0xd12b82 = 0;
    _0x411a5f[_0x5cba10(199)](function (_0x43e512) {
        _0xd12b82 += _0x43e512, _0x43e512 % 10 === 0 && gc();
    }), assertEquals(4950, _0xd12b82);
}(), function TestSetForEachReceiverAsObject() {
    var _0x47ae8d = _0x313fdc, _0x5ccc0c = new Set([
            '1',
            '2'
        ]), _0x53f08c = [];
    _0x5ccc0c[_0x47ae8d(199)](function () {
        var _0x3b29e3 = _0x47ae8d;
        _0x53f08c[_0x3b29e3(204)](this);
    }, ''), assertTrue(_0x53f08c[0] !== _0x53f08c[1]), _0x53f08c = [], _0x5ccc0c[_0x47ae8d(199)](function () {
        var _0x3380f2 = _0x47ae8d;
        _0x53f08c[_0x3380f2(204)](this);
    }, {}), assertEquals(_0x53f08c[0], _0x53f08c[1]);
}(), function TestSetForEachReceiverAsObjectInStrictMode() {
    var _0x425338 = new Set([
            '1',
            '2'
        ]), _0x1c8047 = [];
    _0x425338['forEach'](function () {
        'use strict';
        _0x1c8047['push'](this);
    }, ''), assertTrue(_0x1c8047[0] === '' && _0x1c8047[0] === _0x1c8047[1]);
}(), function TestMapForEachInvalidTypes() {
    assertThrows(function () {
        var _0x57cfdd = _0x1926;
        Map['prototype'][_0x57cfdd(205)][_0x57cfdd(199)][_0x57cfdd(187)]({});
    }, TypeError);
    var _0x57c217 = new Map();
    assertThrows(function () {
        var _0x11eadc = _0x1926;
        _0x57c217[_0x11eadc(199)]({});
    }, TypeError);
}(), function TestMapForEach() {
    var _0xd3b397 = _0x313fdc, _0x582c9c = new Map();
    _0x582c9c[_0xd3b397(161)](0, 'a'), _0x582c9c['set'](1, 'b'), _0x582c9c[_0xd3b397(161)](2, 'c');
    var _0x2f5464 = [], _0x56b41b = {};
    _0x582c9c[_0xd3b397(199)](function (_0x4d7649, _0x6a371, _0xba180a) {
        var _0x4677b4 = _0xd3b397;
        assertEquals(_0x582c9c, _0xba180a), assertEquals(this, _0x56b41b), _0x2f5464[_0x4677b4(204)](_0x6a371, _0x4d7649);
        if (_0x6a371 === 0)
            _0x582c9c['delete'](1), _0x582c9c[_0x4677b4(161)](3, 'd'), _0x582c9c[_0x4677b4(161)](4, 'e'), _0x582c9c[_0x4677b4(161)](5, 'f');
        else
            _0x6a371 === 2 && (_0x582c9c['set'](1, 'B'), _0x582c9c[_0x4677b4(159)](4));
    }, _0x56b41b), assertArrayEquals([
        0,
        'a',
        2,
        'c',
        3,
        'd',
        5,
        'f',
        1,
        'B'
    ], _0x2f5464);
}(), function TestMapForEachAddAtEnd() {
    var _0x1ba653 = _0x313fdc, _0x2b7455 = new Map();
    _0x2b7455[_0x1ba653(161)](0, 'a'), _0x2b7455[_0x1ba653(161)](1, 'b');
    var _0x2bd9df = [];
    _0x2b7455[_0x1ba653(199)](function (_0xaa6ca, _0x4aa1c9) {
        var _0x1aaaf0 = _0x1ba653;
        _0x2bd9df[_0x1aaaf0(204)](_0x4aa1c9, _0xaa6ca), _0x4aa1c9 === 1 && _0x2b7455[_0x1aaaf0(161)](2, 'c');
    }), assertArrayEquals([
        0,
        'a',
        1,
        'b',
        2,
        'c'
    ], _0x2bd9df);
}(), function TestMapForEachDeleteNext() {
    var _0x4ec732 = _0x313fdc, _0x12f1ca = new Map();
    _0x12f1ca[_0x4ec732(161)](0, 'a'), _0x12f1ca[_0x4ec732(161)](1, 'b'), _0x12f1ca['set'](2, 'c');
    var _0x52289e = [];
    _0x12f1ca[_0x4ec732(199)](function (_0x364436, _0x256ac0) {
        var _0x4ab1fc = _0x4ec732;
        _0x52289e[_0x4ab1fc(204)](_0x256ac0, _0x364436), _0x256ac0 === 1 && _0x12f1ca[_0x4ab1fc(159)](2);
    }), assertArrayEquals([
        0,
        'a',
        1,
        'b'
    ], _0x52289e);
}(), function TestSetForEachDeleteVisitedAndAddAgain() {
    var _0x27db25 = _0x313fdc, _0x244ec8 = new Map();
    _0x244ec8['set'](0, 'a'), _0x244ec8[_0x27db25(161)](1, 'b'), _0x244ec8[_0x27db25(161)](2, 'c');
    var _0xb87fd1 = [];
    _0x244ec8[_0x27db25(199)](function (_0x4128ed, _0x4032c0) {
        var _0x5e6697 = _0x27db25;
        _0xb87fd1['push'](_0x4032c0, _0x4128ed);
        if (_0x4032c0 === 1)
            _0x244ec8['delete'](0);
        else
            _0x4032c0 === 2 && _0x244ec8[_0x5e6697(161)](0, 'a');
    }), assertArrayEquals([
        0,
        'a',
        1,
        'b',
        2,
        'c',
        0,
        'a'
    ], _0xb87fd1);
}(), function TestMapForEachClear() {
    var _0x14b5a6 = _0x313fdc, _0x826755 = new Map();
    _0x826755[_0x14b5a6(161)](0, 'a'), _0x826755[_0x14b5a6(161)](1, 'b'), _0x826755[_0x14b5a6(161)](2, 'c');
    var _0x365346 = [];
    _0x826755[_0x14b5a6(199)](function (_0x2da8bb, _0x2bd60e) {
        var _0x228a8d = _0x14b5a6;
        _0x365346[_0x228a8d(204)](_0x2bd60e, _0x2da8bb), _0x2bd60e === 0 && (_0x826755[_0x228a8d(173)](), _0x826755['set'](3, 'd'), _0x826755[_0x228a8d(161)](4, 'e'));
    }), assertArrayEquals([
        0,
        'a',
        3,
        'd',
        4,
        'e'
    ], _0x365346);
}(), function TestMapForEachNested() {
    var _0x4da1df = _0x313fdc, _0x5822fb = new Map();
    _0x5822fb[_0x4da1df(161)](0, 'a'), _0x5822fb[_0x4da1df(161)](1, 'b'), _0x5822fb[_0x4da1df(161)](2, 'c');
    var _0x19e262 = [];
    _0x5822fb[_0x4da1df(199)](function (_0x743914, _0x32b404) {
        var _0x27397c = _0x4da1df;
        _0x19e262['push'](_0x32b404, _0x743914), _0x5822fb[_0x27397c(199)](function (_0x37c54b, _0x46fbc7) {
            var _0x8ec93a = _0x27397c;
            _0x19e262['push'](_0x46fbc7, _0x37c54b), _0x46fbc7 === 0 && _0x5822fb[_0x8ec93a(159)](1);
        });
    }), assertArrayEquals([
        0,
        'a',
        0,
        'a',
        2,
        'c',
        2,
        'c',
        0,
        'a',
        2,
        'c'
    ], _0x19e262);
}(), function TestMapForEachEarlyExit() {
    var _0xa761cc = _0x313fdc, _0x506861 = new Map();
    _0x506861['set'](0, 'a'), _0x506861[_0xa761cc(161)](1, 'b'), _0x506861[_0xa761cc(161)](2, 'c');
    var _0x22e20c = [], _0x427c10 = {};
    try {
        _0x506861[_0xa761cc(199)](function (_0x1376fc, _0x2a2235) {
            var _0x3c62f2 = _0xa761cc;
            _0x22e20c[_0x3c62f2(204)](_0x2a2235, _0x1376fc);
            throw _0x427c10;
        });
    } catch (_0x4a8e8e) {
        assertEquals(_0x427c10, _0x4a8e8e);
    }
    assertArrayEquals([
        0,
        'a'
    ], _0x22e20c);
}(), function TestMapForEachGC() {
    var _0x53e1a0 = _0x313fdc, _0x1b1d93 = new Map();
    for (var _0x3a6259 = 0; _0x3a6259 < 100; _0x3a6259++) {
        _0x1b1d93[_0x53e1a0(161)](_0x3a6259, _0x3a6259);
    }
    var _0x18757c = 0;
    _0x1b1d93['forEach'](function (_0xab94e5) {
        _0x18757c += _0xab94e5, _0xab94e5 % 10 === 0 && gc();
    }), assertEquals(4950, _0x18757c);
}(), function TestMapForEachAllRemovedTransition() {
    var _0x687bd2 = _0x313fdc, _0x4b1319 = new Map();
    _0x4b1319[_0x687bd2(161)](0, 0);
    var _0xfe05ee = [];
    _0x4b1319[_0x687bd2(199)](function (_0x48eaea) {
        var _0x3b4bf5 = _0x687bd2;
        _0xfe05ee['push'](_0x48eaea);
        if (_0x48eaea === 0)
            for (var _0x343ae0 = 1; _0x343ae0 < 4; _0x343ae0++) {
                _0x4b1319[_0x3b4bf5(161)](_0x343ae0, _0x343ae0);
            }
        if (_0x48eaea === 3) {
            for (var _0x343ae0 = 0; _0x343ae0 < 4; _0x343ae0++) {
                _0x4b1319[_0x3b4bf5(159)](_0x343ae0);
            }
            for (var _0x343ae0 = 4; _0x343ae0 < 8; _0x343ae0++) {
                _0x4b1319[_0x3b4bf5(161)](_0x343ae0, _0x343ae0);
            }
        }
    }), assertArrayEquals([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ], _0xfe05ee);
}(), function TestMapForEachClearTransition() {
    var _0x5f2c8b = _0x313fdc, _0x271f85 = new Map();
    _0x271f85['set'](0, 0);
    var _0x5f5ad2 = 0, _0x639c25 = [];
    _0x271f85[_0x5f2c8b(199)](function (_0x155776) {
        var _0xf31393 = _0x5f2c8b;
        _0x639c25[_0xf31393(204)](_0x155776);
        if (++_0x5f5ad2 < 5)
            for (var _0x5d876c = 0; _0x5d876c < 5; _0x5d876c++) {
                _0x271f85[_0xf31393(173)](), _0x271f85[_0xf31393(161)](_0x5f5ad2, _0x5f5ad2);
            }
    }), assertArrayEquals([
        0,
        1,
        2,
        3,
        4
    ], _0x639c25);
}(), function TestMapForEachNestedNonTrivialTransition() {
    var _0xaadbe8 = _0x313fdc, _0x5e4e58 = new Map();
    _0x5e4e58[_0xaadbe8(161)](0, 0), _0x5e4e58[_0xaadbe8(161)](1, 1), _0x5e4e58[_0xaadbe8(161)](2, 2), _0x5e4e58[_0xaadbe8(161)](3, 3), _0x5e4e58[_0xaadbe8(159)](0);
    var _0x5dc2d4 = 0, _0x1cefbc = [];
    _0x5e4e58[_0xaadbe8(199)](function (_0x58569b) {
        var _0x380ce3 = _0xaadbe8;
        if (++_0x5dc2d4 > 10)
            return;
        _0x1cefbc['push'](_0x58569b);
        if (_0x58569b == 3) {
            _0x5e4e58[_0x380ce3(159)](1);
            for (var _0x1ba1ec = 4; _0x1ba1ec < 10; _0x1ba1ec++) {
                _0x5e4e58[_0x380ce3(161)](_0x1ba1ec, _0x1ba1ec);
            }
            for (var _0x1ba1ec = 4; _0x1ba1ec < 10; _0x1ba1ec += 2) {
                _0x5e4e58[_0x380ce3(159)](_0x1ba1ec);
            }
            _0x5e4e58[_0x380ce3(159)](2);
            for (var _0x1ba1ec = 10; _0x1ba1ec < 20; _0x1ba1ec++) {
                _0x5e4e58[_0x380ce3(161)](_0x1ba1ec, _0x1ba1ec);
            }
            for (var _0x1ba1ec = 10; _0x1ba1ec < 20; _0x1ba1ec += 2) {
                _0x5e4e58[_0x380ce3(159)](_0x1ba1ec);
            }
            _0x5e4e58[_0x380ce3(159)](3);
        }
    }), assertArrayEquals([
        1,
        2,
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17
    ], _0x1cefbc);
}(), function TestMapForEachAllRemovedTransitionNoClear() {
    var _0x472fba = _0x313fdc, _0x3a0fd8 = new Map();
    _0x3a0fd8[_0x472fba(161)](0, 0);
    var _0x2bda88 = [];
    _0x3a0fd8[_0x472fba(199)](function (_0x7ff6a9) {
        var _0x21e1fb = _0x472fba;
        _0x2bda88['push'](_0x7ff6a9);
        if (_0x7ff6a9 === 0)
            for (var _0x509786 = 1; _0x509786 < 8; _0x509786++) {
                _0x3a0fd8[_0x21e1fb(161)](_0x509786, _0x509786);
            }
        if (_0x7ff6a9 === 4)
            for (var _0x509786 = 0; _0x509786 < 8; _0x509786++) {
                _0x3a0fd8['delete'](_0x509786);
            }
    }), assertArrayEquals([
        0,
        1,
        2,
        3,
        4
    ], _0x2bda88);
}(), function TestMapForEachNoMoreElementsAfterTransition() {
    var _0x535650 = _0x313fdc, _0x4046c9 = new Map();
    _0x4046c9[_0x535650(161)](0, 0);
    var _0x14c965 = [];
    _0x4046c9[_0x535650(199)](function (_0x5b92ef) {
        var _0x2b88aa = _0x535650;
        _0x14c965[_0x2b88aa(204)](_0x5b92ef);
        if (_0x5b92ef === 0)
            for (var _0x6f6545 = 1; _0x6f6545 < 16; _0x6f6545++) {
                _0x4046c9[_0x2b88aa(161)](_0x6f6545, _0x6f6545);
            }
        if (_0x5b92ef === 4)
            for (var _0x6f6545 = 5; _0x6f6545 < 16; _0x6f6545++) {
                _0x4046c9[_0x2b88aa(159)](_0x6f6545);
            }
    }), assertArrayEquals([
        0,
        1,
        2,
        3,
        4
    ], _0x14c965);
}(), function TestMapForEachReceiverAsObject() {
    var _0x5a30d4 = _0x313fdc, _0x44e6f4 = new Map();
    _0x44e6f4[_0x5a30d4(161)](_0x5a30d4(206), 'value1'), _0x44e6f4['set'](_0x5a30d4(207), _0x5a30d4(208));
    var _0x19761d = [];
    _0x44e6f4[_0x5a30d4(199)](function () {
        var _0xfb6718 = _0x5a30d4;
        _0x19761d[_0xfb6718(204)](this);
    }, ''), assertTrue(_0x19761d[0] !== _0x19761d[1]), _0x19761d = [], _0x44e6f4['forEach'](function () {
        _0x19761d['push'](this);
    }, {}), assertEquals(_0x19761d[0], _0x19761d[1]);
}(), function TestMapForEachReceiverAsObjectInStrictMode() {
    var _0x5102c6 = _0x313fdc, _0x143bd5 = new Map();
    _0x143bd5['set'](_0x5102c6(206), _0x5102c6(209)), _0x143bd5[_0x5102c6(161)](_0x5102c6(207), _0x5102c6(208));
    var _0x37ab28 = [];
    _0x143bd5[_0x5102c6(199)](function () {
        'use strict';
        var _0x3b0daa = _0x5102c6;
        _0x37ab28[_0x3b0daa(204)](this);
    }, ''), assertTrue(_0x37ab28[0] === '' && _0x37ab28[0] === _0x37ab28[1]);
}());
var oneAndTwo = new Map(), k0 = { 'key': 0 }, k1 = { 'key': 1 }, k2 = { 'key': 2 };
oneAndTwo[_0x313fdc(161)](k1, 1), oneAndTwo[_0x313fdc(161)](k2, 2);
function TestSetConstructor(_0x3ad91d) {
    var _0x1f8303 = _0x313fdc, _0x4261f0 = new _0x3ad91d(null);
    assertSize(0, _0x4261f0), _0x4261f0 = new _0x3ad91d(undefined), assertSize(0, _0x4261f0), assertThrows(function () {
        new _0x3ad91d({});
    }, TypeError), assertThrows(function () {
        new _0x3ad91d(!![]);
    }, TypeError), assertThrows(function () {
        var _0x173a23 = _0x1926, _0x3eded5 = {};
        _0x3eded5[Symbol[_0x173a23(210)]] = 42, new _0x3ad91d(_0x3eded5);
    }, TypeError), assertThrows(function () {
        var _0x1decb9 = _0x1926, _0x29d90e = {};
        _0x29d90e[Symbol[_0x1decb9(210)]] = function () {
            return 42;
        }, new _0x3ad91d(_0x29d90e);
    }, TypeError);
    var _0xf2fe61 = new Set();
    _0xf2fe61[_0x1f8303(157)](k0), _0xf2fe61[_0x1f8303(157)](k1), _0xf2fe61[_0x1f8303(157)](k2), _0x4261f0 = new _0x3ad91d(_0xf2fe61['values']()), assertSize(3, _0x4261f0), assertTrue(_0x4261f0[_0x1f8303(158)](k0)), assertTrue(_0x4261f0[_0x1f8303(158)](k1)), assertTrue(_0x4261f0[_0x1f8303(158)](k2));
}
TestSetConstructor(Set), TestSetConstructor(WeakSet);
function TestSetConstructorAddNotCallable(_0x28ce8a) {
    var _0x23bb8f = _0x313fdc, _0x5bffba = _0x28ce8a[_0x23bb8f(169)][_0x23bb8f(157)];
    assertThrows(function () {
        var _0x571a96 = _0x23bb8f;
        _0x28ce8a[_0x571a96(169)][_0x571a96(157)] = 42, new _0x28ce8a(oneAndTwo[_0x571a96(194)]());
    }, TypeError), _0x28ce8a[_0x23bb8f(169)][_0x23bb8f(157)] = _0x5bffba;
}
TestSetConstructorAddNotCallable(Set), TestSetConstructorAddNotCallable(WeakSet);
function TestSetConstructorGetAddOnce(_0x304be4) {
    var _0x18feb2 = _0x313fdc, _0x4703a9 = _0x304be4[_0x18feb2(169)]['add'], _0x39f472 = 0;
    Object[_0x18feb2(211)](_0x304be4[_0x18feb2(169)], _0x18feb2(157), {
        'get': function () {
            return _0x39f472++, function () {
            };
        }
    });
    var _0xc7f204 = new _0x304be4(oneAndTwo[_0x18feb2(194)]());
    assertEquals(1, _0x39f472), assertSize(0, _0xc7f204), Object[_0x18feb2(211)](_0x304be4[_0x18feb2(169)], _0x18feb2(157), {
        'value': _0x4703a9,
        'writable': !![]
    });
}
TestSetConstructorGetAddOnce(Set), TestSetConstructorGetAddOnce(WeakSet);
function TestSetConstructorAddReplaced(_0x42a1f0) {
    var _0x3ff1ee = _0x313fdc, _0x419152 = _0x42a1f0['prototype'][_0x3ff1ee(157)], _0x1cc8e7 = 0;
    _0x42a1f0[_0x3ff1ee(169)]['add'] = function (_0x4675a2) {
        var _0x2c90c9 = _0x3ff1ee;
        _0x1cc8e7++, _0x419152[_0x2c90c9(187)](this, _0x4675a2), _0x42a1f0['prototype'][_0x2c90c9(157)] = null;
    };
    var _0x48fe96 = new _0x42a1f0(oneAndTwo['keys']());
    assertEquals(2, _0x1cc8e7), assertSize(2, _0x48fe96), _0x42a1f0[_0x3ff1ee(169)]['add'] = _0x419152;
}
TestSetConstructorAddReplaced(Set), TestSetConstructorAddReplaced(WeakSet);
function TestSetConstructorOrderOfDoneValue(_0x50dc86) {
    var _0x52a2f5 = _0x313fdc, _0x19801b = 0, _0x444d27 = 0, _0x26a485 = {
            'next': function () {
                return {
                    get 'value'() {
                        _0x19801b++;
                    },
                    get 'done'() {
                        _0x444d27++;
                        throw new Error();
                    }
                };
            }
        };
    _0x26a485[Symbol[_0x52a2f5(210)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x50dc86(_0x26a485);
    }), assertEquals(1, _0x444d27), assertEquals(0, _0x19801b);
}
TestSetConstructorOrderOfDoneValue(Set), TestSetConstructorOrderOfDoneValue(WeakSet);
function TestSetConstructorNextNotAnObject(_0x34c885) {
    var _0xae94d7 = _0x313fdc, _0x241cc7 = {
            'next': function () {
                var _0x2056d6 = _0x1926;
                return _0x2056d6(200);
            }
        };
    _0x241cc7[Symbol[_0xae94d7(210)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x34c885(_0x241cc7);
    }, TypeError);
}
TestSetConstructorNextNotAnObject(Set), TestSetConstructorNextNotAnObject(WeakSet), function TestWeakSetConstructorNonObjectKeys() {
    assertThrows(function () {
        new WeakSet([1]);
    }, TypeError);
}();
function TestSetConstructorIterableValue(_0x52e371) {
    'use strict';
    var _0x370533 = _0x313fdc;
    Object['defineProperty'](Number[_0x370533(169)], Symbol[_0x370533(210)], {
        'get': function () {
            return assertEquals('number', typeof this), function () {
                var _0x389e48 = _0x1926;
                return assertEquals(_0x389e48(212), typeof this), oneAndTwo['keys']();
            };
        },
        'configurable': !![]
    });
    var _0x4ce5b0 = new _0x52e371(42);
    assertSize(2, _0x4ce5b0), assertTrue(_0x4ce5b0[_0x370533(158)](k1)), assertTrue(_0x4ce5b0[_0x370533(158)](k2)), delete Number[_0x370533(169)][Symbol[_0x370533(210)]];
}
TestSetConstructorIterableValue(Set), TestSetConstructorIterableValue(WeakSet), function TestSetConstructorStringValue() {
    var _0x67094a = _0x313fdc, _0x22b7df = new Set(_0x67094a(200));
    assertSize(3, _0x22b7df), assertTrue(_0x22b7df[_0x67094a(158)]('a')), assertTrue(_0x22b7df[_0x67094a(158)]('b')), assertTrue(_0x22b7df[_0x67094a(158)]('c'));
}();
function TestMapConstructor(_0x46424b) {
    var _0x56d109 = _0x313fdc, _0xc21ac7 = new _0x46424b(null);
    assertSize(0, _0xc21ac7), _0xc21ac7 = new _0x46424b(undefined), assertSize(0, _0xc21ac7), assertThrows(function () {
        new _0x46424b({});
    }, TypeError), assertThrows(function () {
        new _0x46424b(!![]);
    }, TypeError), assertThrows(function () {
        var _0x59d12e = {};
        _0x59d12e[Symbol['iterator']] = 42, new _0x46424b(_0x59d12e);
    }, TypeError), assertThrows(function () {
        var _0x2e6e56 = {};
        _0x2e6e56[Symbol['iterator']] = function () {
            return 42;
        }, new _0x46424b(_0x2e6e56);
    }, TypeError);
    var _0xedcae5 = new Map();
    _0xedcae5[_0x56d109(161)](k0, 'a'), _0xedcae5[_0x56d109(161)](k1, 'b'), _0xedcae5[_0x56d109(161)](k2, 'c'), _0xc21ac7 = new _0x46424b(_0xedcae5[_0x56d109(213)]()), assertSize(3, _0xc21ac7), assertEquals('a', _0xc21ac7[_0x56d109(160)](k0)), assertEquals('b', _0xc21ac7[_0x56d109(160)](k1)), assertEquals('c', _0xc21ac7[_0x56d109(160)](k2));
}
TestMapConstructor(Map), TestMapConstructor(WeakMap);
function TestMapConstructorSetNotCallable(_0x4a1efa) {
    var _0x430a2b = _0x313fdc, _0x344dde = _0x4a1efa[_0x430a2b(169)][_0x430a2b(161)];
    assertThrows(function () {
        var _0x417ff8 = _0x430a2b;
        _0x4a1efa['prototype'][_0x417ff8(161)] = 42, new _0x4a1efa(oneAndTwo[_0x417ff8(213)]());
    }, TypeError), _0x4a1efa['prototype']['set'] = _0x344dde;
}
TestMapConstructorSetNotCallable(Map), TestMapConstructorSetNotCallable(WeakMap);
function TestMapConstructorGetAddOnce(_0x560a8d) {
    var _0x1708bc = _0x313fdc, _0x5a8216 = _0x560a8d[_0x1708bc(169)][_0x1708bc(161)], _0xfc4178 = 0;
    Object['defineProperty'](_0x560a8d[_0x1708bc(169)], _0x1708bc(161), {
        'get': function () {
            return _0xfc4178++, function () {
            };
        }
    });
    var _0x3fc1f7 = new _0x560a8d(oneAndTwo[_0x1708bc(213)]());
    assertEquals(1, _0xfc4178), assertSize(0, _0x3fc1f7), Object[_0x1708bc(211)](_0x560a8d[_0x1708bc(169)], _0x1708bc(161), {
        'value': _0x5a8216,
        'writable': !![]
    });
}
TestMapConstructorGetAddOnce(Map), TestMapConstructorGetAddOnce(WeakMap);
function TestMapConstructorSetReplaced(_0x7f0cb1) {
    var _0x2f1f33 = _0x313fdc, _0x28b78a = _0x7f0cb1[_0x2f1f33(169)][_0x2f1f33(161)], _0x405549 = 0;
    _0x7f0cb1[_0x2f1f33(169)]['set'] = function (_0x3bb39d, _0x175424) {
        var _0x367f09 = _0x2f1f33;
        _0x405549++, _0x28b78a[_0x367f09(187)](this, _0x3bb39d, _0x175424), _0x7f0cb1['prototype'][_0x367f09(161)] = null;
    };
    var _0x4c8e81 = new _0x7f0cb1(oneAndTwo[_0x2f1f33(213)]());
    assertEquals(2, _0x405549), assertSize(2, _0x4c8e81), _0x7f0cb1['prototype'][_0x2f1f33(161)] = _0x28b78a;
}
TestMapConstructorSetReplaced(Map), TestMapConstructorSetReplaced(WeakMap);
function TestMapConstructorOrderOfDoneValue(_0x11dc08) {
    var _0x2db02a = _0x313fdc, _0xb6bb5a = 0, _0x54d94b = 0;
    function _0x41da0d() {
    }
    var _0x154643 = {
        'next': function () {
            return {
                get 'value'() {
                    _0xb6bb5a++;
                },
                get 'done'() {
                    _0x54d94b++;
                    throw new _0x41da0d();
                }
            };
        }
    };
    _0x154643[Symbol[_0x2db02a(210)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x11dc08(_0x154643);
    }, _0x41da0d), assertEquals(1, _0x54d94b), assertEquals(0, _0xb6bb5a);
}
TestMapConstructorOrderOfDoneValue(Map), TestMapConstructorOrderOfDoneValue(WeakMap);
function TestMapConstructorNextNotAnObject(_0x1b47e8) {
    var _0x1f2f64 = {
        'next': function () {
            var _0x23a54c = _0x1926;
            return _0x23a54c(200);
        }
    };
    _0x1f2f64[Symbol['iterator']] = function () {
        return this;
    }, assertThrows(function () {
        new _0x1b47e8(_0x1f2f64);
    }, TypeError);
}
TestMapConstructorNextNotAnObject(Map), TestMapConstructorNextNotAnObject(WeakMap);
function TestMapConstructorIteratorNotObjectValues(_0x2bb08a) {
    assertThrows(function () {
        var _0x4ea1c9 = _0x1926;
        new _0x2bb08a(oneAndTwo[_0x4ea1c9(194)]());
    }, TypeError);
}
TestMapConstructorIteratorNotObjectValues(Map), TestMapConstructorIteratorNotObjectValues(WeakMap), function TestWeakMapConstructorNonObjectKeys() {
    assertThrows(function () {
        new WeakMap([[
                1,
                2
            ]]);
    }, TypeError);
}();
function TestMapConstructorIterableValue(_0x30d0cb) {
    'use strict';
    var _0xd51596 = _0x313fdc;
    Object['defineProperty'](Number[_0xd51596(169)], Symbol['iterator'], {
        'get': function () {
            var _0x36ccfb = _0xd51596;
            return assertEquals(_0x36ccfb(212), typeof this), function () {
                var _0x4a0613 = _0x36ccfb;
                return assertEquals(_0x4a0613(212), typeof this), oneAndTwo['entries']();
            };
        },
        'configurable': !![]
    });
    var _0x4442b5 = new _0x30d0cb(42);
    assertSize(2, _0x4442b5), assertEquals(1, _0x4442b5[_0xd51596(160)](k1)), assertEquals(2, _0x4442b5[_0xd51596(160)](k2)), delete Number['prototype'][Symbol[_0xd51596(210)]];
}
TestMapConstructorIterableValue(Map), TestMapConstructorIterableValue(WeakMap);
function TestCollectionToString(_0x2a2489) {
    var _0x4406f4 = _0x313fdc;
    assertEquals(_0x4406f4(214) + _0x2a2489[_0x4406f4(175)] + ']', Object['prototype'][_0x4406f4(215)][_0x4406f4(187)](new _0x2a2489()));
}
TestCollectionToString(Map), TestCollectionToString(Set), TestCollectionToString(WeakMap), TestCollectionToString(WeakSet);
function TestConstructorOrderOfAdderIterator(_0x183dfc, _0x15e4fc) {
    var _0x3e59cb = _0x313fdc, _0x5db711 = new Map();
    _0x5db711[_0x3e59cb(161)]({}, {}), _0x5db711['set']({}, {});
    var _0x968d74 = _0x5db711[Symbol[_0x3e59cb(210)]];
    Object[_0x3e59cb(211)](_0x5db711, Symbol['iterator'], {
        'get': function () {
            var _0x380f2b = _0x3e59cb;
            return _0x40e41a += _0x380f2b(210), _0x968d74;
        }
    });
    var _0x40e41a = '', _0x19a1e1 = _0x183dfc[_0x3e59cb(169)][_0x15e4fc];
    Object[_0x3e59cb(211)](_0x183dfc['prototype'], _0x15e4fc, {
        'get': function () {
            return _0x40e41a += _0x15e4fc, _0x19a1e1;
        }
    }), new _0x183dfc(_0x5db711), assertEquals(_0x15e4fc + _0x3e59cb(210), _0x40e41a), Object[_0x3e59cb(211)](_0x183dfc[_0x3e59cb(169)], _0x15e4fc, { 'value': _0x19a1e1 });
}
TestConstructorOrderOfAdderIterator(Map, _0x313fdc(161)), TestConstructorOrderOfAdderIterator(Set, _0x313fdc(157)), TestConstructorOrderOfAdderIterator(WeakMap, _0x313fdc(161)), TestConstructorOrderOfAdderIterator(WeakSet, _0x313fdc(157));