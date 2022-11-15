var _0x7ec4 = [
    'sort',
    'prototype',
    'foo',
    'foobar',
    'a-value',
    'clear',
    'Set',
    'name',
    'Map',
    'WeakMap',
    'WeakSet',
    'constructor',
    'getOwnPropertyDescriptor',
    'create',
    'myValue',
    'concat',
    'proto',
    'funcs',
    'receivers',
    'call',
    'size',
    'value',
    'configurable',
    'get\x20size',
    'hasOwnProperty',
    'enumerable',
    'values',
    'next',
    'minus',
    'keys',
    'plus',
    'forEach',
    'abc',
    'abca',
    'ade',
    'aaccac',
    'push',
    'map',
    'key1',
    'key2',
    'value2',
    'value1',
    'iterator',
    'defineProperty',
    'number',
    'entries',
    '[object\x20',
    'toString',
    '355941CmPDmy',
    '5zARCFz',
    '56517VijkSg',
    '1ShPnaP',
    '228314djEGzk',
    '368271weiweY',
    '295735wCSNlB',
    '2lZrtND',
    '86239qBJPbF',
    '1441990itwVyd',
    'add',
    'has',
    'delete',
    'get',
    'set',
    'a-key',
    'object',
    'key-',
    'length',
    'the-value',
    'not-collected'
];
function _0x1926(_0x478ed4, _0x15d778) {
    return _0x1926 = function (_0x7ec447, _0x19265f) {
        _0x7ec447 = _0x7ec447 - 0x93;
        var _0x24bd43 = _0x7ec4[_0x7ec447];
        return _0x24bd43;
    }, _0x1926(_0x478ed4, _0x15d778);
}
var _0x313fdc = _0x1926;
(function (_0x37bace, _0x21a106) {
    var _0xf434aa = _0x1926;
    while (!![]) {
        try {
            var _0x33b5e9 = -parseInt(_0xf434aa(0x93)) + -parseInt(_0xf434aa(0x94)) * -parseInt(_0xf434aa(0x95)) + -parseInt(_0xf434aa(0x96)) * parseInt(_0xf434aa(0x97)) + -parseInt(_0xf434aa(0x98)) + -parseInt(_0xf434aa(0x99)) + parseInt(_0xf434aa(0x9a)) * -parseInt(_0xf434aa(0x9b)) + parseInt(_0xf434aa(0x9c));
            if (_0x33b5e9 === _0x21a106)
                break;
            else
                _0x37bace['push'](_0x37bace['shift']());
        } catch (_0x4cc6fa) {
            _0x37bace['push'](_0x37bace['shift']());
        }
    }
}(_0x7ec4, 0x4a2dc));
function assertSize(_0x10c7cc, _0x55dea9) {
    (_0x55dea9 instanceof Map || _0x55dea9 instanceof Set) && assertEquals(_0x10c7cc, _0x55dea9['size']);
}
function TestValidSetCalls(_0x2a7b77) {
    assertDoesNotThrow(function () {
        var _0x272b83 = _0x1926;
        _0x2a7b77[_0x272b83(0x9d)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x44aff4 = _0x1926;
        _0x2a7b77[_0x44aff4(0x9e)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x3e07ec = _0x1926;
        _0x2a7b77[_0x3e07ec(0x9f)](new Object());
    });
}
TestValidSetCalls(new Set()), TestValidSetCalls(new WeakSet());
function TestValidMapCalls(_0x54824e) {
    assertDoesNotThrow(function () {
        var _0x150f49 = _0x1926;
        _0x54824e[_0x150f49(0xa0)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x4fd27b = _0x1926;
        _0x54824e[_0x4fd27b(0xa1)](new Object());
    }), assertDoesNotThrow(function () {
        _0x54824e['has'](new Object());
    }), assertDoesNotThrow(function () {
        _0x54824e['delete'](new Object());
    }), assertDoesNotThrow(function () {
        var _0x373fb2 = _0x1926;
        _0x54824e[_0x373fb2(0xa0)](undefined);
    }), assertDoesNotThrow(function () {
        var _0x5a2992 = _0x1926;
        _0x54824e[_0x5a2992(0xa0)](null);
    }), assertDoesNotThrow(function () {
        var _0x1a6691 = _0x1926;
        _0x54824e[_0x1a6691(0xa0)](0x0);
    }), assertDoesNotThrow(function () {
        var _0x42063e = _0x1926;
        _0x54824e[_0x42063e(0xa0)]('a-key');
    }), assertDoesNotThrow(function () {
        var _0x3f3c21 = _0x1926;
        _0x54824e[_0x3f3c21(0xa0)](Symbol());
    }), assertDoesNotThrow(function () {
        var _0x5a9ba4 = _0x1926;
        _0x54824e[_0x5a9ba4(0x9e)](undefined);
    }), assertDoesNotThrow(function () {
        var _0x5bdc46 = _0x1926;
        _0x54824e[_0x5bdc46(0x9e)](null);
    }), assertDoesNotThrow(function () {
        var _0x11d161 = _0x1926;
        _0x54824e[_0x11d161(0x9e)](0x0);
    }), assertDoesNotThrow(function () {
        var _0x540d74 = _0x1926;
        _0x54824e[_0x540d74(0x9e)](_0x540d74(0xa2));
    }), assertDoesNotThrow(function () {
        var _0x20d3dc = _0x1926;
        _0x54824e[_0x20d3dc(0x9e)](Symbol());
    }), assertDoesNotThrow(function () {
        var _0x589655 = _0x1926;
        _0x54824e[_0x589655(0x9f)](undefined);
    }), assertDoesNotThrow(function () {
        _0x54824e['delete'](null);
    }), assertDoesNotThrow(function () {
        var _0x2a10f4 = _0x1926;
        _0x54824e[_0x2a10f4(0x9f)](0x0);
    }), assertDoesNotThrow(function () {
        var _0xbe22a5 = _0x1926;
        _0x54824e[_0xbe22a5(0x9f)](_0xbe22a5(0xa2));
    }), assertDoesNotThrow(function () {
        var _0x35db10 = _0x1926;
        _0x54824e[_0x35db10(0x9f)](Symbol());
    });
}
TestValidMapCalls(new Map()), TestValidMapCalls(new WeakMap());
function TestInvalidCalls(_0x5bdad5) {
    assertThrows(function () {
        var _0x9f19f8 = _0x1926;
        _0x5bdad5[_0x9f19f8(0xa1)](undefined, 0x0);
    }, TypeError), assertThrows(function () {
        var _0x491d7f = _0x1926;
        _0x5bdad5[_0x491d7f(0xa1)](null, 0x0);
    }, TypeError), assertThrows(function () {
        var _0x37fc6e = _0x1926;
        _0x5bdad5[_0x37fc6e(0xa1)](0x0, 0x0);
    }, TypeError), assertThrows(function () {
        var _0x52d3b9 = _0x1926;
        _0x5bdad5[_0x52d3b9(0xa1)](_0x52d3b9(0xa2), 0x0);
    }, TypeError), assertThrows(function () {
        _0x5bdad5['set'](Symbol(), 0x0);
    }, TypeError);
}
TestInvalidCalls(new WeakMap());
function TestSet(_0x417c10, _0x4e2d2b) {
    var _0x43730a = _0x1926;
    assertFalse(_0x417c10['has'](_0x4e2d2b)), assertFalse(_0x417c10[_0x43730a(0x9f)](_0x4e2d2b)), typeof _0x4e2d2b === _0x43730a(0xa3) && !(_0x417c10 instanceof WeakSet) && (assertSame(_0x417c10, _0x417c10[_0x43730a(0x9d)](_0x4e2d2b)), assertTrue(_0x417c10['has'](_0x4e2d2b)), assertTrue(_0x417c10[_0x43730a(0x9f)](_0x4e2d2b))), assertFalse(_0x417c10[_0x43730a(0x9e)](_0x4e2d2b)), assertFalse(_0x417c10['delete'](_0x4e2d2b)), assertFalse(_0x417c10['has'](_0x4e2d2b));
}
function TestSetBehavior(_0x1e85ce) {
    var _0x1c598b = _0x1926;
    for (var _0x2ec106 = 0x0; _0x2ec106 < 0x14; _0x2ec106++) {
        TestSet(_0x1e85ce, new Object()), TestSet(_0x1e85ce, _0x2ec106), TestSet(_0x1e85ce, _0x2ec106 / 0x64), TestSet(_0x1e85ce, _0x1c598b(0xa4) + _0x2ec106), TestSet(_0x1e85ce, Symbol(_0x2ec106));
    }
    var _0x1bd61b = [
        -0x0,
        +0x0,
        0x1,
        0x1 / 0x3,
        0xa,
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
    for (var _0x2ec106 = 0x0; _0x2ec106 < _0x1bd61b[_0x1c598b(0xa5)]; _0x2ec106++) {
        TestSet(_0x1e85ce, _0x1bd61b[_0x2ec106]);
    }
}
TestSetBehavior(new Set()), TestSetBehavior(new WeakSet());
function TestMapping(_0x5e457c, _0x58b942, _0x4e10bb) {
    var _0x120e13 = _0x1926;
    assertFalse(_0x5e457c[_0x120e13(0x9e)](_0x58b942)), assertSame(undefined, _0x5e457c[_0x120e13(0xa0)](_0x58b942)), assertFalse(_0x5e457c[_0x120e13(0x9f)](_0x58b942)), typeof _0x58b942 === _0x120e13(0xa3) && !(_0x5e457c instanceof WeakMap) && (assertSame(_0x5e457c, _0x5e457c[_0x120e13(0xa1)](_0x58b942, _0x4e10bb)), assertSame(_0x4e10bb, _0x5e457c['get'](_0x58b942)), assertTrue(_0x5e457c[_0x120e13(0x9e)](_0x58b942)), assertTrue(_0x5e457c['delete'](_0x58b942))), assertFalse(_0x5e457c[_0x120e13(0x9e)](_0x58b942)), assertSame(undefined, _0x5e457c[_0x120e13(0xa0)](_0x58b942)), assertFalse(_0x5e457c[_0x120e13(0x9f)](_0x58b942)), assertFalse(_0x5e457c['has'](_0x58b942)), assertSame(undefined, _0x5e457c[_0x120e13(0xa0)](_0x58b942));
}
function TestMapBehavior(_0x29bfda) {
    var _0x583f01 = _0x1926;
    TestMapping(_0x29bfda, new Object(), 0x17), TestMapping(_0x29bfda, new Object(), _0x583f01(0xa6)), TestMapping(_0x29bfda, new Object(), new Object());
    for (var _0x4f47ef = 0x0; _0x4f47ef < 0x14; _0x4f47ef++) {
        TestMapping(_0x29bfda, _0x4f47ef, new Object()), TestMapping(_0x29bfda, _0x4f47ef / 0xa, new Object()), TestMapping(_0x29bfda, _0x583f01(0xa4) + _0x4f47ef, new Object()), TestMapping(_0x29bfda, Symbol(_0x4f47ef), new Object());
    }
    var _0x22ff09 = [
        -0x0,
        +0x0,
        0x1,
        0x1 / 0x3,
        0xa,
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
    for (var _0x4f47ef = 0x0; _0x4f47ef < _0x22ff09[_0x583f01(0xa5)]; _0x4f47ef++) {
        TestMapping(_0x29bfda, _0x22ff09[_0x4f47ef], 0x17), TestMapping(_0x29bfda, _0x22ff09[_0x4f47ef], _0x583f01(0xa6)), TestMapping(_0x29bfda, _0x22ff09[_0x4f47ef], new Object());
    }
}
TestMapBehavior(new Map()), TestMapBehavior(new WeakMap());
function TestQuery(_0x36a46f) {
    var _0x4415a2 = new Object(), _0x38afa4 = [
            'x',
            0x0,
            +Infinity,
            -Infinity,
            !![],
            ![],
            null,
            undefined
        ];
    for (var _0x280c11 = 0x0; _0x280c11 < _0x38afa4['length']; _0x280c11++) {
        TestMapping(_0x36a46f, _0x4415a2, _0x38afa4[_0x280c11]);
    }
}
TestQuery(new Map()), TestQuery(new WeakMap());
function TestDelete(_0xcd8346) {
    var _0x3ed958 = _0x1926, _0x32fe05 = new Object();
    TestMapping(_0xcd8346, _0x32fe05, 'to-be-deleted'), assertFalse(_0xcd8346['delete'](_0x32fe05)), assertFalse(_0xcd8346[_0x3ed958(0x9f)](new Object())), assertSame(_0xcd8346[_0x3ed958(0xa0)](_0x32fe05), undefined);
}
TestDelete(new Map()), TestDelete(new WeakMap());
function TestGC1(_0xc97873) {
    var _0x5d162f = _0x1926, _0x2f728b = new Object();
    _0xc97873[_0x5d162f(0xa1)](_0x2f728b, _0x5d162f(0xa7)), gc(), assertSame(_0x5d162f(0xa7), _0xc97873[_0x5d162f(0xa0)](_0x2f728b));
}
TestGC1(new Map()), TestGC1(new WeakMap());
function TestGC2(_0x56c047) {
    var _0x1b94fd = _0x1926, _0x35a396 = new Object();
    for (key = _0x35a396, i = 0x0; i < 0xa; i++, key = _0x56c047['get'](key)) {
        _0x56c047[_0x1b94fd(0xa1)](key, new Object());
    }
    gc();
    var _0x184e33 = 0x0;
    for (key = _0x35a396; key != undefined; key = _0x56c047[_0x1b94fd(0xa0)](key)) {
        _0x184e33++;
    }
    assertEquals(0xb, _0x184e33);
}
TestGC2(new Map()), TestGC2(new WeakMap());
function TestEnumerable(_0x3f7cf3) {
    var _0x17b4a9 = _0x1926;
    function _0x14c759(_0x4a4e56) {
        var _0x5a7ed5 = _0x1926, _0x17d5a7 = [];
        for (var _0x332f8c in _0x4a4e56)
            _0x17d5a7['push'](_0x332f8c);
        return _0x17d5a7[_0x5a7ed5(0xa8)]();
    }
    assertArrayEquals([], _0x14c759(_0x3f7cf3)), assertArrayEquals([], _0x14c759(_0x3f7cf3[_0x17b4a9(0xa9)])), assertArrayEquals([], _0x14c759(new _0x3f7cf3()));
}
TestEnumerable(Set), TestEnumerable(Map), TestEnumerable(WeakMap), TestEnumerable(WeakSet);
function TestArbitrary(_0x2244dd) {
    var _0x51ed41 = _0x1926;
    function _0x239a7b(_0xc5d32d, _0x2b2b0e, _0x207cb4) {
        _0xc5d32d[_0x2b2b0e] = _0x207cb4, assertEquals(_0x207cb4, _0xc5d32d[_0x2b2b0e]);
    }
    for (var _0x539d0d = 0x0; _0x539d0d < 0x14; _0x539d0d++) {
        _0x239a7b(_0x2244dd, _0x539d0d, 'val' + _0x539d0d), _0x239a7b(_0x2244dd, _0x51ed41(0xaa) + _0x539d0d, 'bar' + _0x539d0d);
    }
    TestMapping(_0x2244dd, new Object(), _0x51ed41(0xab));
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
assertFalse(s['has'](NaN)), assertFalse(s[_0x313fdc(0x9e)](NaN + 0x1)), assertFalse(s[_0x313fdc(0x9e)](0x17)), s[_0x313fdc(0x9d)](NaN), assertTrue(s[_0x313fdc(0x9e)](NaN)), assertTrue(s[_0x313fdc(0x9e)](NaN + 0x1)), assertFalse(s[_0x313fdc(0x9e)](0x17));
var m = new Map();
assertFalse(m['has'](NaN)), assertFalse(m[_0x313fdc(0x9e)](NaN + 0x1)), assertFalse(m[_0x313fdc(0x9e)](0x17)), m[_0x313fdc(0xa1)](NaN, _0x313fdc(0xac)), assertTrue(m[_0x313fdc(0x9e)](NaN)), assertTrue(m[_0x313fdc(0x9e)](NaN + 0x1)), assertFalse(m['has'](0x17));
var s = new Set();
assertTrue(s instanceof Set), assertTrue(Set[_0x313fdc(0xa9)][_0x313fdc(0x9d)] instanceof Function), assertTrue(Set['prototype'][_0x313fdc(0x9e)] instanceof Function), assertTrue(Set['prototype'][_0x313fdc(0x9f)] instanceof Function), assertTrue(Set[_0x313fdc(0xa9)][_0x313fdc(0xad)] instanceof Function);
var m = new Map();
assertTrue(m instanceof Map), assertTrue(Map[_0x313fdc(0xa9)][_0x313fdc(0xa1)] instanceof Function), assertTrue(Map['prototype'][_0x313fdc(0xa0)] instanceof Function), assertTrue(Map[_0x313fdc(0xa9)]['has'] instanceof Function), assertTrue(Map['prototype'][_0x313fdc(0x9f)] instanceof Function), assertTrue(Map[_0x313fdc(0xa9)]['clear'] instanceof Function);
var m = new WeakMap();
assertTrue(m instanceof WeakMap), assertTrue(WeakMap[_0x313fdc(0xa9)][_0x313fdc(0xa1)] instanceof Function), assertTrue(WeakMap[_0x313fdc(0xa9)][_0x313fdc(0xa0)] instanceof Function), assertTrue(WeakMap['prototype'][_0x313fdc(0x9e)] instanceof Function), assertTrue(WeakMap['prototype'][_0x313fdc(0x9f)] instanceof Function);
var s = new WeakSet();
assertTrue(s instanceof WeakSet), assertTrue(WeakSet['prototype'][_0x313fdc(0x9d)] instanceof Function), assertTrue(WeakSet['prototype'][_0x313fdc(0x9e)] instanceof Function), assertTrue(WeakSet[_0x313fdc(0xa9)]['delete'] instanceof Function), assertEquals(_0x313fdc(0xae), Set[_0x313fdc(0xaf)]), assertEquals(_0x313fdc(0xb0), Map[_0x313fdc(0xaf)]), assertEquals(_0x313fdc(0xb1), WeakMap[_0x313fdc(0xaf)]), assertEquals(_0x313fdc(0xb2), WeakSet[_0x313fdc(0xaf)]);
function TestPrototype(_0x4c6cf9) {
    var _0x4dcc56 = _0x313fdc;
    assertTrue(_0x4c6cf9[_0x4dcc56(0xa9)] instanceof Object), assertEquals({
        'value': _0x4c6cf9['prototype'],
        'writable': ![],
        'enumerable': ![],
        'configurable': ![]
    }, Object['getOwnPropertyDescriptor'](_0x4c6cf9, 'prototype'));
}
TestPrototype(Set), TestPrototype(Map), TestPrototype(WeakMap), TestPrototype(WeakSet);
function TestConstructor(_0x45579d) {
    var _0x3da138 = _0x313fdc;
    assertFalse(_0x45579d === Object['prototype']['constructor']), assertSame(_0x45579d, _0x45579d[_0x3da138(0xa9)]['constructor']), assertSame(_0x45579d, new _0x45579d()['__proto__'][_0x3da138(0xb3)]), assertEquals(0x0, _0x45579d[_0x3da138(0xa5)]);
}
TestConstructor(Set), TestConstructor(Map), TestConstructor(WeakMap), TestConstructor(WeakSet);
function TestDescriptor(_0x37b179, _0x488a27) {
    var _0xd70822 = _0x313fdc;
    assertEquals({
        'value': _0x488a27,
        'writable': !![],
        'enumerable': ![],
        'configurable': !![]
    }, Object[_0xd70822(0xb4)](_0x37b179, _0x488a27[_0xd70822(0xaf)]));
}
TestDescriptor(this, Set), TestDescriptor(this, Map), TestDescriptor(this, WeakMap), TestDescriptor(this, WeakSet), assertTrue(WeakMap[_0x313fdc(0xa9)][_0x313fdc(0xb3)] === WeakMap), assertTrue(Object['getPrototypeOf'](WeakMap['prototype']) === Object['prototype']), assertFalse(WeakMap['prototype'] === Object[_0x313fdc(0xa9)]);
var o = Object[_0x313fdc(0xb5)]({});
assertFalse(_0x313fdc(0xa0) in o), assertFalse(_0x313fdc(0xa1) in o), assertEquals(undefined, o['get']), assertEquals(undefined, o['set']);
var o = Object[_0x313fdc(0xb5)]({}, {
    'myValue': {
        'value': 0xa,
        'enumerable': ![],
        'configurable': !![],
        'writable': !![]
    }
});
assertEquals(0xa, o[_0x313fdc(0xb6)]);
var alwaysBogus = [
        undefined,
        null,
        !![],
        'x',
        0x17,
        {}
    ], bogusReceiversTestSet = [
        {
            'proto': Set['prototype'],
            'funcs': [
                _0x313fdc(0x9d),
                _0x313fdc(0x9e),
                _0x313fdc(0x9f)
            ],
            'receivers': alwaysBogus[_0x313fdc(0xb7)]([
                new Map(),
                new WeakMap(),
                new WeakSet()
            ])
        },
        {
            'proto': Map['prototype'],
            'funcs': [
                _0x313fdc(0xa0),
                'set',
                _0x313fdc(0x9e),
                _0x313fdc(0x9f)
            ],
            'receivers': alwaysBogus['concat']([
                new Set(),
                new WeakMap(),
                new WeakSet()
            ])
        },
        {
            'proto': WeakMap[_0x313fdc(0xa9)],
            'funcs': [
                'get',
                _0x313fdc(0xa1),
                'has',
                _0x313fdc(0x9f)
            ],
            'receivers': alwaysBogus['concat']([
                new Set(),
                new Map(),
                new WeakSet()
            ])
        },
        {
            'proto': WeakSet[_0x313fdc(0xa9)],
            'funcs': [
                _0x313fdc(0x9d),
                _0x313fdc(0x9e),
                _0x313fdc(0x9f)
            ],
            'receivers': alwaysBogus[_0x313fdc(0xb7)]([
                new Set(),
                new Map(),
                new WeakMap()
            ])
        }
    ];
function TestBogusReceivers(_0x40b56e) {
    var _0x2fef82 = _0x313fdc;
    for (var _0x5bcd2e = 0x0; _0x5bcd2e < _0x40b56e[_0x2fef82(0xa5)]; _0x5bcd2e++) {
        var _0xbda7b6 = _0x40b56e[_0x5bcd2e][_0x2fef82(0xb8)], _0xf3e534 = _0x40b56e[_0x5bcd2e][_0x2fef82(0xb9)], _0x16489d = _0x40b56e[_0x5bcd2e][_0x2fef82(0xba)];
        for (var _0x54ce85 = 0x0; _0x54ce85 < _0xf3e534[_0x2fef82(0xa5)]; _0x54ce85++) {
            var _0x429eb8 = _0xbda7b6[_0xf3e534[_0x54ce85]];
            for (var _0x236815 = 0x0; _0x236815 < _0x16489d[_0x2fef82(0xa5)]; _0x236815++) {
                assertThrows(function () {
                    var _0x5a8528 = _0x2fef82;
                    _0x429eb8[_0x5a8528(0xbb)](_0x16489d[_0x236815], {});
                }, TypeError);
            }
        }
    }
}
TestBogusReceivers(bogusReceiversTestSet);
var setSizeDescriptor = Object[_0x313fdc(0xb4)](Set[_0x313fdc(0xa9)], _0x313fdc(0xbc));
assertEquals(undefined, setSizeDescriptor[_0x313fdc(0xbd)]), assertEquals(undefined, setSizeDescriptor[_0x313fdc(0xa1)]), assertTrue(setSizeDescriptor['get'] instanceof Function), assertEquals(undefined, setSizeDescriptor[_0x313fdc(0xa0)]['prototype']), assertFalse(setSizeDescriptor['enumerable']), assertTrue(setSizeDescriptor[_0x313fdc(0xbe)]), assertEquals(_0x313fdc(0xbf), setSizeDescriptor['get'][_0x313fdc(0xaf)]);
var s = new Set();
assertFalse(s[_0x313fdc(0xc0)](_0x313fdc(0xbc)));
for (var i = 0x0; i < 0xa; i++) {
    assertEquals(i, s[_0x313fdc(0xbc)]), s[_0x313fdc(0x9d)](i);
}
for (var i = 0x9; i >= 0x0; i--) {
    s[_0x313fdc(0x9f)](i), assertEquals(i, s[_0x313fdc(0xbc)]);
}
var mapSizeDescriptor = Object[_0x313fdc(0xb4)](Map[_0x313fdc(0xa9)], 'size');
assertEquals(undefined, mapSizeDescriptor['value']), assertEquals(undefined, mapSizeDescriptor[_0x313fdc(0xa1)]), assertTrue(mapSizeDescriptor[_0x313fdc(0xa0)] instanceof Function), assertEquals(undefined, mapSizeDescriptor[_0x313fdc(0xa0)][_0x313fdc(0xa9)]), assertFalse(mapSizeDescriptor[_0x313fdc(0xc1)]), assertTrue(mapSizeDescriptor[_0x313fdc(0xbe)]), assertEquals('get\x20size', mapSizeDescriptor['get'][_0x313fdc(0xaf)]);
var m = new Map();
assertFalse(m[_0x313fdc(0xc0)](_0x313fdc(0xbc)));
for (var i = 0x0; i < 0xa; i++) {
    assertEquals(i, m[_0x313fdc(0xbc)]), m['set'](i, i);
}
for (var i = 0x9; i >= 0x0; i--) {
    m[_0x313fdc(0x9f)](i), assertEquals(i, m[_0x313fdc(0xbc)]);
}
(function () {
    var _0x4651ca = _0x313fdc, _0x16f2e0 = new Set();
    _0x16f2e0[_0x4651ca(0x9d)](0x2a), assertTrue(_0x16f2e0[_0x4651ca(0x9e)](0x2a)), assertEquals(0x1, _0x16f2e0[_0x4651ca(0xbc)]), _0x16f2e0[_0x4651ca(0xad)](), assertFalse(_0x16f2e0['has'](0x2a)), assertEquals(0x0, _0x16f2e0[_0x4651ca(0xbc)]);
}(), function () {
    var _0x493a59 = _0x313fdc, _0x5b308b = new Map();
    _0x5b308b['set'](0x2a, !![]), assertTrue(_0x5b308b[_0x493a59(0x9e)](0x2a)), assertEquals(0x1, _0x5b308b['size']), _0x5b308b['clear'](), assertFalse(_0x5b308b[_0x493a59(0x9e)](0x2a)), assertEquals(0x0, _0x5b308b[_0x493a59(0xbc)]);
}(), function TestMinusZeroSet() {
    var _0x580bbe = _0x313fdc, _0x3a64ab = new Set();
    _0x3a64ab[_0x580bbe(0x9d)](-0x0), assertSame(0x0, _0x3a64ab[_0x580bbe(0xc2)]()[_0x580bbe(0xc3)]()[_0x580bbe(0xbd)]), _0x3a64ab[_0x580bbe(0x9d)](0x0), assertEquals(0x1, _0x3a64ab[_0x580bbe(0xbc)]), assertTrue(_0x3a64ab[_0x580bbe(0x9e)](0x0)), assertTrue(_0x3a64ab[_0x580bbe(0x9e)](-0x0));
}(), function TestMinusZeroMap() {
    var _0x4f2739 = _0x313fdc, _0x2d25f7 = new Map();
    _0x2d25f7[_0x4f2739(0xa1)](-0x0, _0x4f2739(0xc4)), assertSame(0x0, _0x2d25f7[_0x4f2739(0xc5)]()[_0x4f2739(0xc3)]()[_0x4f2739(0xbd)]), _0x2d25f7[_0x4f2739(0xa1)](0x0, _0x4f2739(0xc6)), assertEquals(0x1, _0x2d25f7[_0x4f2739(0xbc)]), assertTrue(_0x2d25f7[_0x4f2739(0x9e)](0x0)), assertTrue(_0x2d25f7['has'](-0x0)), assertEquals('plus', _0x2d25f7[_0x4f2739(0xa0)](0x0)), assertEquals(_0x4f2739(0xc6), _0x2d25f7['get'](-0x0));
}(), function TestSetForEachInvalidTypes() {
    assertThrows(function () {
        var _0x55b2fb = _0x1926;
        Set[_0x55b2fb(0xa9)][_0x55b2fb(0xa1)][_0x55b2fb(0xc7)][_0x55b2fb(0xbb)]({});
    }, TypeError);
    var _0x547df1 = new Set();
    assertThrows(function () {
        _0x547df1['forEach']({});
    }, TypeError);
}(), function TestSetForEach() {
    var _0x3830bf = _0x313fdc, _0x1d4ae5 = new Set();
    _0x1d4ae5['add']('a'), _0x1d4ae5[_0x3830bf(0x9d)]('b'), _0x1d4ae5[_0x3830bf(0x9d)]('c');
    var _0x7f677c = '', _0x411b9a = {};
    _0x1d4ae5['forEach'](function (_0x96a9b4, _0x3ca29b, _0x4764da) {
        var _0x43bc0a = _0x3830bf;
        assertSame(_0x96a9b4, _0x3ca29b), assertSame(_0x1d4ae5, _0x4764da), assertSame(this, _0x411b9a), _0x7f677c += _0x96a9b4;
        if (_0x96a9b4 === 'a')
            _0x1d4ae5[_0x43bc0a(0x9f)]('b'), _0x1d4ae5[_0x43bc0a(0x9d)]('d'), _0x1d4ae5[_0x43bc0a(0x9d)]('e'), _0x1d4ae5[_0x43bc0a(0x9d)]('f');
        else
            _0x96a9b4 === 'c' && (_0x1d4ae5[_0x43bc0a(0x9d)]('b'), _0x1d4ae5[_0x43bc0a(0x9f)]('e'));
    }, _0x411b9a), assertEquals('acdfb', _0x7f677c);
}(), function TestSetForEachAddAtEnd() {
    var _0x3cba42 = _0x313fdc, _0x5eb44a = new Set();
    _0x5eb44a[_0x3cba42(0x9d)]('a'), _0x5eb44a[_0x3cba42(0x9d)]('b');
    var _0x43ed99 = '';
    _0x5eb44a[_0x3cba42(0xc7)](function (_0x4ee038) {
        var _0x519172 = _0x3cba42;
        _0x43ed99 += _0x4ee038, _0x4ee038 === 'b' && _0x5eb44a[_0x519172(0x9d)]('c');
    }), assertEquals(_0x3cba42(0xc8), _0x43ed99);
}(), function TestSetForEachDeleteNext() {
    var _0x47b0f6 = _0x313fdc, _0x235412 = new Set();
    _0x235412[_0x47b0f6(0x9d)]('a'), _0x235412[_0x47b0f6(0x9d)]('b'), _0x235412[_0x47b0f6(0x9d)]('c');
    var _0x5772a7 = '';
    _0x235412[_0x47b0f6(0xc7)](function (_0x1e105c) {
        var _0x1a88e6 = _0x47b0f6;
        _0x5772a7 += _0x1e105c, _0x1e105c === 'b' && _0x235412[_0x1a88e6(0x9f)]('c');
    }), assertEquals('ab', _0x5772a7);
}(), function TestSetForEachDeleteVisitedAndAddAgain() {
    var _0x3b819b = _0x313fdc, _0x1e4145 = new Set();
    _0x1e4145['add']('a'), _0x1e4145['add']('b'), _0x1e4145[_0x3b819b(0x9d)]('c');
    var _0x243f2e = '';
    _0x1e4145[_0x3b819b(0xc7)](function (_0x4c4d08) {
        _0x243f2e += _0x4c4d08;
        if (_0x4c4d08 === 'b')
            _0x1e4145['delete']('a');
        else
            _0x4c4d08 === 'c' && _0x1e4145['add']('a');
    }), assertEquals(_0x3b819b(0xc9), _0x243f2e);
}(), function TestSetForEachClear() {
    var _0x251005 = _0x313fdc, _0x4dd901 = new Set();
    _0x4dd901[_0x251005(0x9d)]('a'), _0x4dd901['add']('b'), _0x4dd901[_0x251005(0x9d)]('c');
    var _0x39253c = '';
    _0x4dd901[_0x251005(0xc7)](function (_0x3e55e7) {
        var _0x3a2ee8 = _0x251005;
        _0x39253c += _0x3e55e7, _0x3e55e7 === 'a' && (_0x4dd901['clear'](), _0x4dd901[_0x3a2ee8(0x9d)]('d'), _0x4dd901['add']('e'));
    }), assertEquals(_0x251005(0xca), _0x39253c);
}(), function TestSetForEachNested() {
    var _0x45a7e0 = _0x313fdc, _0x58de55 = new Set();
    _0x58de55[_0x45a7e0(0x9d)]('a'), _0x58de55[_0x45a7e0(0x9d)]('b'), _0x58de55[_0x45a7e0(0x9d)]('c');
    var _0x780186 = '';
    _0x58de55[_0x45a7e0(0xc7)](function (_0x259445) {
        _0x780186 += _0x259445, _0x58de55['forEach'](function (_0x53ed38) {
            var _0x1861bc = _0x1926;
            _0x780186 += _0x53ed38, _0x53ed38 === 'a' && _0x58de55[_0x1861bc(0x9f)]('b');
        });
    }), assertEquals(_0x45a7e0(0xcb), _0x780186);
}(), function TestSetForEachEarlyExit() {
    var _0x43cd91 = _0x313fdc, _0x1902c0 = new Set();
    _0x1902c0[_0x43cd91(0x9d)]('a'), _0x1902c0[_0x43cd91(0x9d)]('b'), _0x1902c0['add']('c');
    var _0x16499e = '', _0x22bfae = {};
    try {
        _0x1902c0[_0x43cd91(0xc7)](function (_0x723f20) {
            _0x16499e += _0x723f20;
            throw _0x22bfae;
        });
    } catch (_0x2304fb) {
        assertEquals(_0x22bfae, _0x2304fb);
    }
    assertEquals('a', _0x16499e);
}(), function TestSetForEachGC() {
    var _0x5cba10 = _0x313fdc, _0x411a5f = new Set();
    for (var _0x2a342f = 0x0; _0x2a342f < 0x64; _0x2a342f++) {
        _0x411a5f[_0x5cba10(0x9d)](_0x2a342f);
    }
    var _0xd12b82 = 0x0;
    _0x411a5f[_0x5cba10(0xc7)](function (_0x43e512) {
        _0xd12b82 += _0x43e512, _0x43e512 % 0xa === 0x0 && gc();
    }), assertEquals(0x1356, _0xd12b82);
}(), function TestSetForEachReceiverAsObject() {
    var _0x47ae8d = _0x313fdc, _0x5ccc0c = new Set([
            '1',
            '2'
        ]), _0x53f08c = [];
    _0x5ccc0c[_0x47ae8d(0xc7)](function () {
        var _0x3b29e3 = _0x47ae8d;
        _0x53f08c[_0x3b29e3(0xcc)](this);
    }, ''), assertTrue(_0x53f08c[0x0] !== _0x53f08c[0x1]), _0x53f08c = [], _0x5ccc0c[_0x47ae8d(0xc7)](function () {
        var _0x3380f2 = _0x47ae8d;
        _0x53f08c[_0x3380f2(0xcc)](this);
    }, {}), assertEquals(_0x53f08c[0x0], _0x53f08c[0x1]);
}(), function TestSetForEachReceiverAsObjectInStrictMode() {
    var _0x425338 = new Set([
            '1',
            '2'
        ]), _0x1c8047 = [];
    _0x425338['forEach'](function () {
        'use strict';
        _0x1c8047['push'](this);
    }, ''), assertTrue(_0x1c8047[0x0] === '' && _0x1c8047[0x0] === _0x1c8047[0x1]);
}(), function TestMapForEachInvalidTypes() {
    assertThrows(function () {
        var _0x57cfdd = _0x1926;
        Map['prototype'][_0x57cfdd(0xcd)][_0x57cfdd(0xc7)][_0x57cfdd(0xbb)]({});
    }, TypeError);
    var _0x57c217 = new Map();
    assertThrows(function () {
        var _0x11eadc = _0x1926;
        _0x57c217[_0x11eadc(0xc7)]({});
    }, TypeError);
}(), function TestMapForEach() {
    var _0xd3b397 = _0x313fdc, _0x582c9c = new Map();
    _0x582c9c[_0xd3b397(0xa1)](0x0, 'a'), _0x582c9c['set'](0x1, 'b'), _0x582c9c[_0xd3b397(0xa1)](0x2, 'c');
    var _0x2f5464 = [], _0x56b41b = {};
    _0x582c9c[_0xd3b397(0xc7)](function (_0x4d7649, _0x6a371, _0xba180a) {
        var _0x4677b4 = _0xd3b397;
        assertEquals(_0x582c9c, _0xba180a), assertEquals(this, _0x56b41b), _0x2f5464[_0x4677b4(0xcc)](_0x6a371, _0x4d7649);
        if (_0x6a371 === 0x0)
            _0x582c9c['delete'](0x1), _0x582c9c[_0x4677b4(0xa1)](0x3, 'd'), _0x582c9c[_0x4677b4(0xa1)](0x4, 'e'), _0x582c9c[_0x4677b4(0xa1)](0x5, 'f');
        else
            _0x6a371 === 0x2 && (_0x582c9c['set'](0x1, 'B'), _0x582c9c[_0x4677b4(0x9f)](0x4));
    }, _0x56b41b), assertArrayEquals([
        0x0,
        'a',
        0x2,
        'c',
        0x3,
        'd',
        0x5,
        'f',
        0x1,
        'B'
    ], _0x2f5464);
}(), function TestMapForEachAddAtEnd() {
    var _0x1ba653 = _0x313fdc, _0x2b7455 = new Map();
    _0x2b7455[_0x1ba653(0xa1)](0x0, 'a'), _0x2b7455[_0x1ba653(0xa1)](0x1, 'b');
    var _0x2bd9df = [];
    _0x2b7455[_0x1ba653(0xc7)](function (_0xaa6ca, _0x4aa1c9) {
        var _0x1aaaf0 = _0x1ba653;
        _0x2bd9df[_0x1aaaf0(0xcc)](_0x4aa1c9, _0xaa6ca), _0x4aa1c9 === 0x1 && _0x2b7455[_0x1aaaf0(0xa1)](0x2, 'c');
    }), assertArrayEquals([
        0x0,
        'a',
        0x1,
        'b',
        0x2,
        'c'
    ], _0x2bd9df);
}(), function TestMapForEachDeleteNext() {
    var _0x4ec732 = _0x313fdc, _0x12f1ca = new Map();
    _0x12f1ca[_0x4ec732(0xa1)](0x0, 'a'), _0x12f1ca[_0x4ec732(0xa1)](0x1, 'b'), _0x12f1ca['set'](0x2, 'c');
    var _0x52289e = [];
    _0x12f1ca[_0x4ec732(0xc7)](function (_0x364436, _0x256ac0) {
        var _0x4ab1fc = _0x4ec732;
        _0x52289e[_0x4ab1fc(0xcc)](_0x256ac0, _0x364436), _0x256ac0 === 0x1 && _0x12f1ca[_0x4ab1fc(0x9f)](0x2);
    }), assertArrayEquals([
        0x0,
        'a',
        0x1,
        'b'
    ], _0x52289e);
}(), function TestSetForEachDeleteVisitedAndAddAgain() {
    var _0x27db25 = _0x313fdc, _0x244ec8 = new Map();
    _0x244ec8['set'](0x0, 'a'), _0x244ec8[_0x27db25(0xa1)](0x1, 'b'), _0x244ec8[_0x27db25(0xa1)](0x2, 'c');
    var _0xb87fd1 = [];
    _0x244ec8[_0x27db25(0xc7)](function (_0x4128ed, _0x4032c0) {
        var _0x5e6697 = _0x27db25;
        _0xb87fd1['push'](_0x4032c0, _0x4128ed);
        if (_0x4032c0 === 0x1)
            _0x244ec8['delete'](0x0);
        else
            _0x4032c0 === 0x2 && _0x244ec8[_0x5e6697(0xa1)](0x0, 'a');
    }), assertArrayEquals([
        0x0,
        'a',
        0x1,
        'b',
        0x2,
        'c',
        0x0,
        'a'
    ], _0xb87fd1);
}(), function TestMapForEachClear() {
    var _0x14b5a6 = _0x313fdc, _0x826755 = new Map();
    _0x826755[_0x14b5a6(0xa1)](0x0, 'a'), _0x826755[_0x14b5a6(0xa1)](0x1, 'b'), _0x826755[_0x14b5a6(0xa1)](0x2, 'c');
    var _0x365346 = [];
    _0x826755[_0x14b5a6(0xc7)](function (_0x2da8bb, _0x2bd60e) {
        var _0x228a8d = _0x14b5a6;
        _0x365346[_0x228a8d(0xcc)](_0x2bd60e, _0x2da8bb), _0x2bd60e === 0x0 && (_0x826755[_0x228a8d(0xad)](), _0x826755['set'](0x3, 'd'), _0x826755[_0x228a8d(0xa1)](0x4, 'e'));
    }), assertArrayEquals([
        0x0,
        'a',
        0x3,
        'd',
        0x4,
        'e'
    ], _0x365346);
}(), function TestMapForEachNested() {
    var _0x4da1df = _0x313fdc, _0x5822fb = new Map();
    _0x5822fb[_0x4da1df(0xa1)](0x0, 'a'), _0x5822fb[_0x4da1df(0xa1)](0x1, 'b'), _0x5822fb[_0x4da1df(0xa1)](0x2, 'c');
    var _0x19e262 = [];
    _0x5822fb[_0x4da1df(0xc7)](function (_0x743914, _0x32b404) {
        var _0x27397c = _0x4da1df;
        _0x19e262['push'](_0x32b404, _0x743914), _0x5822fb[_0x27397c(0xc7)](function (_0x37c54b, _0x46fbc7) {
            var _0x8ec93a = _0x27397c;
            _0x19e262['push'](_0x46fbc7, _0x37c54b), _0x46fbc7 === 0x0 && _0x5822fb[_0x8ec93a(0x9f)](0x1);
        });
    }), assertArrayEquals([
        0x0,
        'a',
        0x0,
        'a',
        0x2,
        'c',
        0x2,
        'c',
        0x0,
        'a',
        0x2,
        'c'
    ], _0x19e262);
}(), function TestMapForEachEarlyExit() {
    var _0xa761cc = _0x313fdc, _0x506861 = new Map();
    _0x506861['set'](0x0, 'a'), _0x506861[_0xa761cc(0xa1)](0x1, 'b'), _0x506861[_0xa761cc(0xa1)](0x2, 'c');
    var _0x22e20c = [], _0x427c10 = {};
    try {
        _0x506861[_0xa761cc(0xc7)](function (_0x1376fc, _0x2a2235) {
            var _0x3c62f2 = _0xa761cc;
            _0x22e20c[_0x3c62f2(0xcc)](_0x2a2235, _0x1376fc);
            throw _0x427c10;
        });
    } catch (_0x4a8e8e) {
        assertEquals(_0x427c10, _0x4a8e8e);
    }
    assertArrayEquals([
        0x0,
        'a'
    ], _0x22e20c);
}(), function TestMapForEachGC() {
    var _0x53e1a0 = _0x313fdc, _0x1b1d93 = new Map();
    for (var _0x3a6259 = 0x0; _0x3a6259 < 0x64; _0x3a6259++) {
        _0x1b1d93[_0x53e1a0(0xa1)](_0x3a6259, _0x3a6259);
    }
    var _0x18757c = 0x0;
    _0x1b1d93['forEach'](function (_0xab94e5) {
        _0x18757c += _0xab94e5, _0xab94e5 % 0xa === 0x0 && gc();
    }), assertEquals(0x1356, _0x18757c);
}(), function TestMapForEachAllRemovedTransition() {
    var _0x687bd2 = _0x313fdc, _0x4b1319 = new Map();
    _0x4b1319[_0x687bd2(0xa1)](0x0, 0x0);
    var _0xfe05ee = [];
    _0x4b1319[_0x687bd2(0xc7)](function (_0x48eaea) {
        var _0x3b4bf5 = _0x687bd2;
        _0xfe05ee['push'](_0x48eaea);
        if (_0x48eaea === 0x0)
            for (var _0x343ae0 = 0x1; _0x343ae0 < 0x4; _0x343ae0++) {
                _0x4b1319[_0x3b4bf5(0xa1)](_0x343ae0, _0x343ae0);
            }
        if (_0x48eaea === 0x3) {
            for (var _0x343ae0 = 0x0; _0x343ae0 < 0x4; _0x343ae0++) {
                _0x4b1319[_0x3b4bf5(0x9f)](_0x343ae0);
            }
            for (var _0x343ae0 = 0x4; _0x343ae0 < 0x8; _0x343ae0++) {
                _0x4b1319[_0x3b4bf5(0xa1)](_0x343ae0, _0x343ae0);
            }
        }
    }), assertArrayEquals([
        0x0,
        0x1,
        0x2,
        0x3,
        0x4,
        0x5,
        0x6,
        0x7
    ], _0xfe05ee);
}(), function TestMapForEachClearTransition() {
    var _0x5f2c8b = _0x313fdc, _0x271f85 = new Map();
    _0x271f85['set'](0x0, 0x0);
    var _0x5f5ad2 = 0x0, _0x639c25 = [];
    _0x271f85[_0x5f2c8b(0xc7)](function (_0x155776) {
        var _0xf31393 = _0x5f2c8b;
        _0x639c25[_0xf31393(0xcc)](_0x155776);
        if (++_0x5f5ad2 < 0x5)
            for (var _0x5d876c = 0x0; _0x5d876c < 0x5; _0x5d876c++) {
                _0x271f85[_0xf31393(0xad)](), _0x271f85[_0xf31393(0xa1)](_0x5f5ad2, _0x5f5ad2);
            }
    }), assertArrayEquals([
        0x0,
        0x1,
        0x2,
        0x3,
        0x4
    ], _0x639c25);
}(), function TestMapForEachNestedNonTrivialTransition() {
    var _0xaadbe8 = _0x313fdc, _0x5e4e58 = new Map();
    _0x5e4e58[_0xaadbe8(0xa1)](0x0, 0x0), _0x5e4e58[_0xaadbe8(0xa1)](0x1, 0x1), _0x5e4e58[_0xaadbe8(0xa1)](0x2, 0x2), _0x5e4e58[_0xaadbe8(0xa1)](0x3, 0x3), _0x5e4e58[_0xaadbe8(0x9f)](0x0);
    var _0x5dc2d4 = 0x0, _0x1cefbc = [];
    _0x5e4e58[_0xaadbe8(0xc7)](function (_0x58569b) {
        var _0x380ce3 = _0xaadbe8;
        if (++_0x5dc2d4 > 0xa)
            return;
        _0x1cefbc['push'](_0x58569b);
        if (_0x58569b == 0x3) {
            _0x5e4e58[_0x380ce3(0x9f)](0x1);
            for (var _0x1ba1ec = 0x4; _0x1ba1ec < 0xa; _0x1ba1ec++) {
                _0x5e4e58[_0x380ce3(0xa1)](_0x1ba1ec, _0x1ba1ec);
            }
            for (var _0x1ba1ec = 0x4; _0x1ba1ec < 0xa; _0x1ba1ec += 0x2) {
                _0x5e4e58[_0x380ce3(0x9f)](_0x1ba1ec);
            }
            _0x5e4e58[_0x380ce3(0x9f)](0x2);
            for (var _0x1ba1ec = 0xa; _0x1ba1ec < 0x14; _0x1ba1ec++) {
                _0x5e4e58[_0x380ce3(0xa1)](_0x1ba1ec, _0x1ba1ec);
            }
            for (var _0x1ba1ec = 0xa; _0x1ba1ec < 0x14; _0x1ba1ec += 0x2) {
                _0x5e4e58[_0x380ce3(0x9f)](_0x1ba1ec);
            }
            _0x5e4e58[_0x380ce3(0x9f)](0x3);
        }
    }), assertArrayEquals([
        0x1,
        0x2,
        0x3,
        0x5,
        0x7,
        0x9,
        0xb,
        0xd,
        0xf,
        0x11
    ], _0x1cefbc);
}(), function TestMapForEachAllRemovedTransitionNoClear() {
    var _0x472fba = _0x313fdc, _0x3a0fd8 = new Map();
    _0x3a0fd8[_0x472fba(0xa1)](0x0, 0x0);
    var _0x2bda88 = [];
    _0x3a0fd8[_0x472fba(0xc7)](function (_0x7ff6a9) {
        var _0x21e1fb = _0x472fba;
        _0x2bda88['push'](_0x7ff6a9);
        if (_0x7ff6a9 === 0x0)
            for (var _0x509786 = 0x1; _0x509786 < 0x8; _0x509786++) {
                _0x3a0fd8[_0x21e1fb(0xa1)](_0x509786, _0x509786);
            }
        if (_0x7ff6a9 === 0x4)
            for (var _0x509786 = 0x0; _0x509786 < 0x8; _0x509786++) {
                _0x3a0fd8['delete'](_0x509786);
            }
    }), assertArrayEquals([
        0x0,
        0x1,
        0x2,
        0x3,
        0x4
    ], _0x2bda88);
}(), function TestMapForEachNoMoreElementsAfterTransition() {
    var _0x535650 = _0x313fdc, _0x4046c9 = new Map();
    _0x4046c9[_0x535650(0xa1)](0x0, 0x0);
    var _0x14c965 = [];
    _0x4046c9[_0x535650(0xc7)](function (_0x5b92ef) {
        var _0x2b88aa = _0x535650;
        _0x14c965[_0x2b88aa(0xcc)](_0x5b92ef);
        if (_0x5b92ef === 0x0)
            for (var _0x6f6545 = 0x1; _0x6f6545 < 0x10; _0x6f6545++) {
                _0x4046c9[_0x2b88aa(0xa1)](_0x6f6545, _0x6f6545);
            }
        if (_0x5b92ef === 0x4)
            for (var _0x6f6545 = 0x5; _0x6f6545 < 0x10; _0x6f6545++) {
                _0x4046c9[_0x2b88aa(0x9f)](_0x6f6545);
            }
    }), assertArrayEquals([
        0x0,
        0x1,
        0x2,
        0x3,
        0x4
    ], _0x14c965);
}(), function TestMapForEachReceiverAsObject() {
    var _0x5a30d4 = _0x313fdc, _0x44e6f4 = new Map();
    _0x44e6f4[_0x5a30d4(0xa1)](_0x5a30d4(0xce), 'value1'), _0x44e6f4['set'](_0x5a30d4(0xcf), _0x5a30d4(0xd0));
    var _0x19761d = [];
    _0x44e6f4[_0x5a30d4(0xc7)](function () {
        var _0xfb6718 = _0x5a30d4;
        _0x19761d[_0xfb6718(0xcc)](this);
    }, ''), assertTrue(_0x19761d[0x0] !== _0x19761d[0x1]), _0x19761d = [], _0x44e6f4['forEach'](function () {
        _0x19761d['push'](this);
    }, {}), assertEquals(_0x19761d[0x0], _0x19761d[0x1]);
}(), function TestMapForEachReceiverAsObjectInStrictMode() {
    var _0x5102c6 = _0x313fdc, _0x143bd5 = new Map();
    _0x143bd5['set'](_0x5102c6(0xce), _0x5102c6(0xd1)), _0x143bd5[_0x5102c6(0xa1)](_0x5102c6(0xcf), _0x5102c6(0xd0));
    var _0x37ab28 = [];
    _0x143bd5[_0x5102c6(0xc7)](function () {
        'use strict';
        var _0x3b0daa = _0x5102c6;
        _0x37ab28[_0x3b0daa(0xcc)](this);
    }, ''), assertTrue(_0x37ab28[0x0] === '' && _0x37ab28[0x0] === _0x37ab28[0x1]);
}());
var oneAndTwo = new Map(), k0 = { 'key': 0x0 }, k1 = { 'key': 0x1 }, k2 = { 'key': 0x2 };
oneAndTwo[_0x313fdc(0xa1)](k1, 0x1), oneAndTwo[_0x313fdc(0xa1)](k2, 0x2);
function TestSetConstructor(_0x3ad91d) {
    var _0x1f8303 = _0x313fdc, _0x4261f0 = new _0x3ad91d(null);
    assertSize(0x0, _0x4261f0), _0x4261f0 = new _0x3ad91d(undefined), assertSize(0x0, _0x4261f0), assertThrows(function () {
        new _0x3ad91d({});
    }, TypeError), assertThrows(function () {
        new _0x3ad91d(!![]);
    }, TypeError), assertThrows(function () {
        var _0x173a23 = _0x1926, _0x3eded5 = {};
        _0x3eded5[Symbol[_0x173a23(0xd2)]] = 0x2a, new _0x3ad91d(_0x3eded5);
    }, TypeError), assertThrows(function () {
        var _0x1decb9 = _0x1926, _0x29d90e = {};
        _0x29d90e[Symbol[_0x1decb9(0xd2)]] = function () {
            return 0x2a;
        }, new _0x3ad91d(_0x29d90e);
    }, TypeError);
    var _0xf2fe61 = new Set();
    _0xf2fe61[_0x1f8303(0x9d)](k0), _0xf2fe61[_0x1f8303(0x9d)](k1), _0xf2fe61[_0x1f8303(0x9d)](k2), _0x4261f0 = new _0x3ad91d(_0xf2fe61['values']()), assertSize(0x3, _0x4261f0), assertTrue(_0x4261f0[_0x1f8303(0x9e)](k0)), assertTrue(_0x4261f0[_0x1f8303(0x9e)](k1)), assertTrue(_0x4261f0[_0x1f8303(0x9e)](k2));
}
TestSetConstructor(Set), TestSetConstructor(WeakSet);
function TestSetConstructorAddNotCallable(_0x28ce8a) {
    var _0x23bb8f = _0x313fdc, _0x5bffba = _0x28ce8a[_0x23bb8f(0xa9)][_0x23bb8f(0x9d)];
    assertThrows(function () {
        var _0x571a96 = _0x23bb8f;
        _0x28ce8a[_0x571a96(0xa9)][_0x571a96(0x9d)] = 0x2a, new _0x28ce8a(oneAndTwo[_0x571a96(0xc2)]());
    }, TypeError), _0x28ce8a[_0x23bb8f(0xa9)][_0x23bb8f(0x9d)] = _0x5bffba;
}
TestSetConstructorAddNotCallable(Set), TestSetConstructorAddNotCallable(WeakSet);
function TestSetConstructorGetAddOnce(_0x304be4) {
    var _0x18feb2 = _0x313fdc, _0x4703a9 = _0x304be4[_0x18feb2(0xa9)]['add'], _0x39f472 = 0x0;
    Object[_0x18feb2(0xd3)](_0x304be4[_0x18feb2(0xa9)], _0x18feb2(0x9d), {
        'get': function () {
            return _0x39f472++, function () {
            };
        }
    });
    var _0xc7f204 = new _0x304be4(oneAndTwo[_0x18feb2(0xc2)]());
    assertEquals(0x1, _0x39f472), assertSize(0x0, _0xc7f204), Object[_0x18feb2(0xd3)](_0x304be4[_0x18feb2(0xa9)], _0x18feb2(0x9d), {
        'value': _0x4703a9,
        'writable': !![]
    });
}
TestSetConstructorGetAddOnce(Set), TestSetConstructorGetAddOnce(WeakSet);
function TestSetConstructorAddReplaced(_0x42a1f0) {
    var _0x3ff1ee = _0x313fdc, _0x419152 = _0x42a1f0['prototype'][_0x3ff1ee(0x9d)], _0x1cc8e7 = 0x0;
    _0x42a1f0[_0x3ff1ee(0xa9)]['add'] = function (_0x4675a2) {
        var _0x2c90c9 = _0x3ff1ee;
        _0x1cc8e7++, _0x419152[_0x2c90c9(0xbb)](this, _0x4675a2), _0x42a1f0['prototype'][_0x2c90c9(0x9d)] = null;
    };
    var _0x48fe96 = new _0x42a1f0(oneAndTwo['keys']());
    assertEquals(0x2, _0x1cc8e7), assertSize(0x2, _0x48fe96), _0x42a1f0[_0x3ff1ee(0xa9)]['add'] = _0x419152;
}
TestSetConstructorAddReplaced(Set), TestSetConstructorAddReplaced(WeakSet);
function TestSetConstructorOrderOfDoneValue(_0x50dc86) {
    var _0x52a2f5 = _0x313fdc, _0x19801b = 0x0, _0x444d27 = 0x0, _0x26a485 = {
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
    _0x26a485[Symbol[_0x52a2f5(0xd2)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x50dc86(_0x26a485);
    }), assertEquals(0x1, _0x444d27), assertEquals(0x0, _0x19801b);
}
TestSetConstructorOrderOfDoneValue(Set), TestSetConstructorOrderOfDoneValue(WeakSet);
function TestSetConstructorNextNotAnObject(_0x34c885) {
    var _0xae94d7 = _0x313fdc, _0x241cc7 = {
            'next': function () {
                var _0x2056d6 = _0x1926;
                return _0x2056d6(0xc8);
            }
        };
    _0x241cc7[Symbol[_0xae94d7(0xd2)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x34c885(_0x241cc7);
    }, TypeError);
}
TestSetConstructorNextNotAnObject(Set), TestSetConstructorNextNotAnObject(WeakSet), function TestWeakSetConstructorNonObjectKeys() {
    assertThrows(function () {
        new WeakSet([0x1]);
    }, TypeError);
}();
function TestSetConstructorIterableValue(_0x52e371) {
    'use strict';
    var _0x370533 = _0x313fdc;
    Object['defineProperty'](Number[_0x370533(0xa9)], Symbol[_0x370533(0xd2)], {
        'get': function () {
            return assertEquals('number', typeof this), function () {
                var _0x389e48 = _0x1926;
                return assertEquals(_0x389e48(0xd4), typeof this), oneAndTwo['keys']();
            };
        },
        'configurable': !![]
    });
    var _0x4ce5b0 = new _0x52e371(0x2a);
    assertSize(0x2, _0x4ce5b0), assertTrue(_0x4ce5b0[_0x370533(0x9e)](k1)), assertTrue(_0x4ce5b0[_0x370533(0x9e)](k2)), delete Number[_0x370533(0xa9)][Symbol[_0x370533(0xd2)]];
}
TestSetConstructorIterableValue(Set), TestSetConstructorIterableValue(WeakSet), function TestSetConstructorStringValue() {
    var _0x67094a = _0x313fdc, _0x22b7df = new Set(_0x67094a(0xc8));
    assertSize(0x3, _0x22b7df), assertTrue(_0x22b7df[_0x67094a(0x9e)]('a')), assertTrue(_0x22b7df[_0x67094a(0x9e)]('b')), assertTrue(_0x22b7df[_0x67094a(0x9e)]('c'));
}();
function TestMapConstructor(_0x46424b) {
    var _0x56d109 = _0x313fdc, _0xc21ac7 = new _0x46424b(null);
    assertSize(0x0, _0xc21ac7), _0xc21ac7 = new _0x46424b(undefined), assertSize(0x0, _0xc21ac7), assertThrows(function () {
        new _0x46424b({});
    }, TypeError), assertThrows(function () {
        new _0x46424b(!![]);
    }, TypeError), assertThrows(function () {
        var _0x59d12e = {};
        _0x59d12e[Symbol['iterator']] = 0x2a, new _0x46424b(_0x59d12e);
    }, TypeError), assertThrows(function () {
        var _0x2e6e56 = {};
        _0x2e6e56[Symbol['iterator']] = function () {
            return 0x2a;
        }, new _0x46424b(_0x2e6e56);
    }, TypeError);
    var _0xedcae5 = new Map();
    _0xedcae5[_0x56d109(0xa1)](k0, 'a'), _0xedcae5[_0x56d109(0xa1)](k1, 'b'), _0xedcae5[_0x56d109(0xa1)](k2, 'c'), _0xc21ac7 = new _0x46424b(_0xedcae5[_0x56d109(0xd5)]()), assertSize(0x3, _0xc21ac7), assertEquals('a', _0xc21ac7[_0x56d109(0xa0)](k0)), assertEquals('b', _0xc21ac7[_0x56d109(0xa0)](k1)), assertEquals('c', _0xc21ac7[_0x56d109(0xa0)](k2));
}
TestMapConstructor(Map), TestMapConstructor(WeakMap);
function TestMapConstructorSetNotCallable(_0x4a1efa) {
    var _0x430a2b = _0x313fdc, _0x344dde = _0x4a1efa[_0x430a2b(0xa9)][_0x430a2b(0xa1)];
    assertThrows(function () {
        var _0x417ff8 = _0x430a2b;
        _0x4a1efa['prototype'][_0x417ff8(0xa1)] = 0x2a, new _0x4a1efa(oneAndTwo[_0x417ff8(0xd5)]());
    }, TypeError), _0x4a1efa['prototype']['set'] = _0x344dde;
}
TestMapConstructorSetNotCallable(Map), TestMapConstructorSetNotCallable(WeakMap);
function TestMapConstructorGetAddOnce(_0x560a8d) {
    var _0x1708bc = _0x313fdc, _0x5a8216 = _0x560a8d[_0x1708bc(0xa9)][_0x1708bc(0xa1)], _0xfc4178 = 0x0;
    Object['defineProperty'](_0x560a8d[_0x1708bc(0xa9)], _0x1708bc(0xa1), {
        'get': function () {
            return _0xfc4178++, function () {
            };
        }
    });
    var _0x3fc1f7 = new _0x560a8d(oneAndTwo[_0x1708bc(0xd5)]());
    assertEquals(0x1, _0xfc4178), assertSize(0x0, _0x3fc1f7), Object[_0x1708bc(0xd3)](_0x560a8d[_0x1708bc(0xa9)], _0x1708bc(0xa1), {
        'value': _0x5a8216,
        'writable': !![]
    });
}
TestMapConstructorGetAddOnce(Map), TestMapConstructorGetAddOnce(WeakMap);
function TestMapConstructorSetReplaced(_0x7f0cb1) {
    var _0x2f1f33 = _0x313fdc, _0x28b78a = _0x7f0cb1[_0x2f1f33(0xa9)][_0x2f1f33(0xa1)], _0x405549 = 0x0;
    _0x7f0cb1[_0x2f1f33(0xa9)]['set'] = function (_0x3bb39d, _0x175424) {
        var _0x367f09 = _0x2f1f33;
        _0x405549++, _0x28b78a[_0x367f09(0xbb)](this, _0x3bb39d, _0x175424), _0x7f0cb1['prototype'][_0x367f09(0xa1)] = null;
    };
    var _0x4c8e81 = new _0x7f0cb1(oneAndTwo[_0x2f1f33(0xd5)]());
    assertEquals(0x2, _0x405549), assertSize(0x2, _0x4c8e81), _0x7f0cb1['prototype'][_0x2f1f33(0xa1)] = _0x28b78a;
}
TestMapConstructorSetReplaced(Map), TestMapConstructorSetReplaced(WeakMap);
function TestMapConstructorOrderOfDoneValue(_0x11dc08) {
    var _0x2db02a = _0x313fdc, _0xb6bb5a = 0x0, _0x54d94b = 0x0;
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
    _0x154643[Symbol[_0x2db02a(0xd2)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x11dc08(_0x154643);
    }, _0x41da0d), assertEquals(0x1, _0x54d94b), assertEquals(0x0, _0xb6bb5a);
}
TestMapConstructorOrderOfDoneValue(Map), TestMapConstructorOrderOfDoneValue(WeakMap);
function TestMapConstructorNextNotAnObject(_0x1b47e8) {
    var _0x1f2f64 = {
        'next': function () {
            var _0x23a54c = _0x1926;
            return _0x23a54c(0xc8);
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
        new _0x2bb08a(oneAndTwo[_0x4ea1c9(0xc2)]());
    }, TypeError);
}
TestMapConstructorIteratorNotObjectValues(Map), TestMapConstructorIteratorNotObjectValues(WeakMap), function TestWeakMapConstructorNonObjectKeys() {
    assertThrows(function () {
        new WeakMap([[
                0x1,
                0x2
            ]]);
    }, TypeError);
}();
function TestMapConstructorIterableValue(_0x30d0cb) {
    'use strict';
    var _0xd51596 = _0x313fdc;
    Object['defineProperty'](Number[_0xd51596(0xa9)], Symbol['iterator'], {
        'get': function () {
            var _0x36ccfb = _0xd51596;
            return assertEquals(_0x36ccfb(0xd4), typeof this), function () {
                var _0x4a0613 = _0x36ccfb;
                return assertEquals(_0x4a0613(0xd4), typeof this), oneAndTwo['entries']();
            };
        },
        'configurable': !![]
    });
    var _0x4442b5 = new _0x30d0cb(0x2a);
    assertSize(0x2, _0x4442b5), assertEquals(0x1, _0x4442b5[_0xd51596(0xa0)](k1)), assertEquals(0x2, _0x4442b5[_0xd51596(0xa0)](k2)), delete Number['prototype'][Symbol[_0xd51596(0xd2)]];
}
TestMapConstructorIterableValue(Map), TestMapConstructorIterableValue(WeakMap);
function TestCollectionToString(_0x2a2489) {
    var _0x4406f4 = _0x313fdc;
    assertEquals(_0x4406f4(0xd6) + _0x2a2489[_0x4406f4(0xaf)] + ']', Object['prototype'][_0x4406f4(0xd7)][_0x4406f4(0xbb)](new _0x2a2489()));
}
TestCollectionToString(Map), TestCollectionToString(Set), TestCollectionToString(WeakMap), TestCollectionToString(WeakSet);
function TestConstructorOrderOfAdderIterator(_0x183dfc, _0x15e4fc) {
    var _0x3e59cb = _0x313fdc, _0x5db711 = new Map();
    _0x5db711[_0x3e59cb(0xa1)]({}, {}), _0x5db711['set']({}, {});
    var _0x968d74 = _0x5db711[Symbol[_0x3e59cb(0xd2)]];
    Object[_0x3e59cb(0xd3)](_0x5db711, Symbol['iterator'], {
        'get': function () {
            var _0x380f2b = _0x3e59cb;
            return _0x40e41a += _0x380f2b(0xd2), _0x968d74;
        }
    });
    var _0x40e41a = '', _0x19a1e1 = _0x183dfc[_0x3e59cb(0xa9)][_0x15e4fc];
    Object[_0x3e59cb(0xd3)](_0x183dfc['prototype'], _0x15e4fc, {
        'get': function () {
            return _0x40e41a += _0x15e4fc, _0x19a1e1;
        }
    }), new _0x183dfc(_0x5db711), assertEquals(_0x15e4fc + _0x3e59cb(0xd2), _0x40e41a), Object[_0x3e59cb(0xd3)](_0x183dfc[_0x3e59cb(0xa9)], _0x15e4fc, { 'value': _0x19a1e1 });
}
TestConstructorOrderOfAdderIterator(Map, _0x313fdc(0xa1)), TestConstructorOrderOfAdderIterator(Set, _0x313fdc(0x9d)), TestConstructorOrderOfAdderIterator(WeakMap, _0x313fdc(0xa1)), TestConstructorOrderOfAdderIterator(WeakSet, _0x313fdc(0x9d));
