var _0x581f = [
    'keys',
    'plus',
    'forEach',
    'acdfb',
    'abc',
    'ade',
    'aaccac',
    'map',
    'key1',
    'value1',
    'key2',
    'value2',
    'iterator',
    'defineProperty',
    'number',
    'entries',
    '[object\x20',
    '538939mRurJa',
    '1372452klnJhK',
    '336696UrnyyI',
    '695023oMlRTM',
    '20113QChQxc',
    '24vxrzJL',
    '1jIQUTC',
    '6712OnKrPE',
    '468625ZrIdon',
    '9zDJQjr',
    'size',
    'add',
    'has',
    'delete',
    'set',
    'get',
    'a-key',
    'object',
    'key-',
    'length',
    'not-collected',
    'push',
    'sort',
    'prototype',
    'val',
    'bar',
    'clear',
    'Set',
    'Map',
    'name',
    'WeakSet',
    'getOwnPropertyDescriptor',
    'constructor',
    '__proto__',
    'getPrototypeOf',
    'create',
    'myValue',
    'concat',
    'proto',
    'receivers',
    'call',
    'value',
    'configurable',
    'get\x20size',
    'enumerable',
    'hasOwnProperty',
    'values',
    'next',
    'minus'
];
var _0xf94ac2 = _0x1a56;
(function (_0x9a4a1f, _0x42ad3a) {
    var _0x54d419 = _0x1a56;
    while (!![]) {
        try {
            var _0x157cff = -parseInt(_0x54d419(0x10d)) + -parseInt(_0x54d419(0x10e)) + -parseInt(_0x54d419(0x10f)) + -parseInt(_0x54d419(0x110)) + parseInt(_0x54d419(0x111)) * -parseInt(_0x54d419(0x112)) + parseInt(_0x54d419(0x113)) * -parseInt(_0x54d419(0x114)) + parseInt(_0x54d419(0x115)) * parseInt(_0x54d419(0x116));
            if (_0x157cff === _0x42ad3a)
                break;
            else
                _0x9a4a1f['push'](_0x9a4a1f['shift']());
        } catch (_0x3055ab) {
            _0x9a4a1f['push'](_0x9a4a1f['shift']());
        }
    }
}(_0x581f, 0xbfac3));
function assertSize(_0x2803de, _0x156420) {
    var _0x15258f = _0x1a56;
    (_0x156420 instanceof Map || _0x156420 instanceof Set) && assertEquals(_0x2803de, _0x156420[_0x15258f(0x117)]);
}
function TestValidSetCalls(_0x47e3df) {
    assertDoesNotThrow(function () {
        var _0x48d085 = _0x1a56;
        _0x47e3df[_0x48d085(0x118)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x1f055f = _0x1a56;
        _0x47e3df[_0x1f055f(0x119)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x3ea0c9 = _0x1a56;
        _0x47e3df[_0x3ea0c9(0x11a)](new Object());
    });
}
TestValidSetCalls(new Set()), TestValidSetCalls(new WeakSet());
function TestValidMapCalls(_0x506e9c) {
    assertDoesNotThrow(function () {
        _0x506e9c['get'](new Object());
    }), assertDoesNotThrow(function () {
        var _0x364203 = _0x1a56;
        _0x506e9c[_0x364203(0x11b)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x3cad5b = _0x1a56;
        _0x506e9c[_0x3cad5b(0x119)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x4c59a4 = _0x1a56;
        _0x506e9c[_0x4c59a4(0x11a)](new Object());
    }), assertDoesNotThrow(function () {
        var _0x3d1f28 = _0x1a56;
        _0x506e9c[_0x3d1f28(0x11c)](undefined);
    }), assertDoesNotThrow(function () {
        _0x506e9c['get'](null);
    }), assertDoesNotThrow(function () {
        _0x506e9c['get'](0x0);
    }), assertDoesNotThrow(function () {
        var _0x764503 = _0x1a56;
        _0x506e9c[_0x764503(0x11c)](_0x764503(0x11d));
    }), assertDoesNotThrow(function () {
        _0x506e9c['get'](Symbol());
    }), assertDoesNotThrow(function () {
        var _0x2a1354 = _0x1a56;
        _0x506e9c[_0x2a1354(0x119)](undefined);
    }), assertDoesNotThrow(function () {
        var _0x23b49a = _0x1a56;
        _0x506e9c[_0x23b49a(0x119)](null);
    }), assertDoesNotThrow(function () {
        var _0x47115a = _0x1a56;
        _0x506e9c[_0x47115a(0x119)](0x0);
    }), assertDoesNotThrow(function () {
        var _0x46a069 = _0x1a56;
        _0x506e9c[_0x46a069(0x119)]('a-key');
    }), assertDoesNotThrow(function () {
        var _0x3f8aa4 = _0x1a56;
        _0x506e9c[_0x3f8aa4(0x119)](Symbol());
    }), assertDoesNotThrow(function () {
        _0x506e9c['delete'](undefined);
    }), assertDoesNotThrow(function () {
        _0x506e9c['delete'](null);
    }), assertDoesNotThrow(function () {
        _0x506e9c['delete'](0x0);
    }), assertDoesNotThrow(function () {
        var _0x5a2ed6 = _0x1a56;
        _0x506e9c[_0x5a2ed6(0x11a)](_0x5a2ed6(0x11d));
    }), assertDoesNotThrow(function () {
        _0x506e9c['delete'](Symbol());
    });
}
TestValidMapCalls(new Map()), TestValidMapCalls(new WeakMap());
function TestInvalidCalls(_0x158690) {
    assertThrows(function () {
        var _0x47c317 = _0x1a56;
        _0x158690[_0x47c317(0x11b)](undefined, 0x0);
    }, TypeError), assertThrows(function () {
        var _0x40f621 = _0x1a56;
        _0x158690[_0x40f621(0x11b)](null, 0x0);
    }, TypeError), assertThrows(function () {
        _0x158690['set'](0x0, 0x0);
    }, TypeError), assertThrows(function () {
        var _0x2864f1 = _0x1a56;
        _0x158690['set'](_0x2864f1(0x11d), 0x0);
    }, TypeError), assertThrows(function () {
        _0x158690['set'](Symbol(), 0x0);
    }, TypeError);
}
TestInvalidCalls(new WeakMap());
function TestSet(_0x527073, _0x2d88d7) {
    var _0x5971c7 = _0x1a56;
    assertFalse(_0x527073[_0x5971c7(0x119)](_0x2d88d7)), assertFalse(_0x527073['delete'](_0x2d88d7)), typeof _0x2d88d7 === _0x5971c7(0x11e) && !(_0x527073 instanceof WeakSet) && (assertSame(_0x527073, _0x527073[_0x5971c7(0x118)](_0x2d88d7)), assertTrue(_0x527073[_0x5971c7(0x119)](_0x2d88d7)), assertTrue(_0x527073[_0x5971c7(0x11a)](_0x2d88d7))), assertFalse(_0x527073[_0x5971c7(0x119)](_0x2d88d7)), assertFalse(_0x527073['delete'](_0x2d88d7)), assertFalse(_0x527073[_0x5971c7(0x119)](_0x2d88d7));
}
function TestSetBehavior(_0x24a0b6) {
    var _0x1c4611 = _0x1a56;
    for (var _0x173b43 = 0x0; _0x173b43 < 0x14; _0x173b43++) {
        TestSet(_0x24a0b6, new Object()), TestSet(_0x24a0b6, _0x173b43), TestSet(_0x24a0b6, _0x173b43 / 0x64), TestSet(_0x24a0b6, _0x1c4611(0x11f) + _0x173b43), TestSet(_0x24a0b6, Symbol(_0x173b43));
    }
    var _0x4c0b28 = [
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
    for (var _0x173b43 = 0x0; _0x173b43 < _0x4c0b28[_0x1c4611(0x120)]; _0x173b43++) {
        TestSet(_0x24a0b6, _0x4c0b28[_0x173b43]);
    }
}
TestSetBehavior(new Set()), TestSetBehavior(new WeakSet());
function TestMapping(_0x7793d8, _0x1b2e04, _0x51c304) {
    var _0x2ef61b = _0x1a56;
    assertFalse(_0x7793d8[_0x2ef61b(0x119)](_0x1b2e04)), assertSame(undefined, _0x7793d8[_0x2ef61b(0x11c)](_0x1b2e04)), assertFalse(_0x7793d8[_0x2ef61b(0x11a)](_0x1b2e04)), typeof _0x1b2e04 === _0x2ef61b(0x11e) && !(_0x7793d8 instanceof WeakMap) && (assertSame(_0x7793d8, _0x7793d8['set'](_0x1b2e04, _0x51c304)), assertSame(_0x51c304, _0x7793d8['get'](_0x1b2e04)), assertTrue(_0x7793d8[_0x2ef61b(0x119)](_0x1b2e04)), assertTrue(_0x7793d8[_0x2ef61b(0x11a)](_0x1b2e04))), assertFalse(_0x7793d8['has'](_0x1b2e04)), assertSame(undefined, _0x7793d8[_0x2ef61b(0x11c)](_0x1b2e04)), assertFalse(_0x7793d8[_0x2ef61b(0x11a)](_0x1b2e04)), assertFalse(_0x7793d8[_0x2ef61b(0x119)](_0x1b2e04)), assertSame(undefined, _0x7793d8['get'](_0x1b2e04));
}
function TestMapBehavior(_0x21a517) {
    var _0x32ed40 = _0x1a56;
    TestMapping(_0x21a517, new Object(), 0x17), TestMapping(_0x21a517, new Object(), 'the-value'), TestMapping(_0x21a517, new Object(), new Object());
    for (var _0x2e5961 = 0x0; _0x2e5961 < 0x14; _0x2e5961++) {
        TestMapping(_0x21a517, _0x2e5961, new Object()), TestMapping(_0x21a517, _0x2e5961 / 0xa, new Object()), TestMapping(_0x21a517, _0x32ed40(0x11f) + _0x2e5961, new Object()), TestMapping(_0x21a517, Symbol(_0x2e5961), new Object());
    }
    var _0xbf3b3 = [
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
    for (var _0x2e5961 = 0x0; _0x2e5961 < _0xbf3b3[_0x32ed40(0x120)]; _0x2e5961++) {
        TestMapping(_0x21a517, _0xbf3b3[_0x2e5961], 0x17), TestMapping(_0x21a517, _0xbf3b3[_0x2e5961], 'the-value'), TestMapping(_0x21a517, _0xbf3b3[_0x2e5961], new Object());
    }
}
TestMapBehavior(new Map()), TestMapBehavior(new WeakMap());
function TestQuery(_0x16bd6e) {
    var _0x42dc3e = _0x1a56, _0x1c6742 = new Object(), _0x2295c2 = [
            'x',
            0x0,
            +Infinity,
            -Infinity,
            !![],
            ![],
            null,
            undefined
        ];
    for (var _0x1dd218 = 0x0; _0x1dd218 < _0x2295c2[_0x42dc3e(0x120)]; _0x1dd218++) {
        TestMapping(_0x16bd6e, _0x1c6742, _0x2295c2[_0x1dd218]);
    }
}
TestQuery(new Map()), TestQuery(new WeakMap());
function TestDelete(_0x5bfae4) {
    var _0x78d616 = _0x1a56, _0x2eb076 = new Object();
    TestMapping(_0x5bfae4, _0x2eb076, 'to-be-deleted'), assertFalse(_0x5bfae4[_0x78d616(0x11a)](_0x2eb076)), assertFalse(_0x5bfae4['delete'](new Object())), assertSame(_0x5bfae4['get'](_0x2eb076), undefined);
}
TestDelete(new Map()), TestDelete(new WeakMap());
function TestGC1(_0x56431b) {
    var _0x47e68b = _0x1a56, _0x71c343 = new Object();
    _0x56431b[_0x47e68b(0x11b)](_0x71c343, _0x47e68b(0x121)), gc(), assertSame(_0x47e68b(0x121), _0x56431b[_0x47e68b(0x11c)](_0x71c343));
}
TestGC1(new Map()), TestGC1(new WeakMap());
function TestGC2(_0x552924) {
    var _0x100f19 = new Object();
    for (key = _0x100f19, i = 0x0; i < 0xa; i++, key = _0x552924['get'](key)) {
        _0x552924['set'](key, new Object());
    }
    gc();
    var _0x599e3c = 0x0;
    for (key = _0x100f19; key != undefined; key = _0x552924['get'](key)) {
        _0x599e3c++;
    }
    assertEquals(0xb, _0x599e3c);
}
TestGC2(new Map()), TestGC2(new WeakMap());
function TestEnumerable(_0x46032a) {
    var _0x5484b7 = _0x1a56;
    function _0x3806e4(_0x503d46) {
        var _0x4c5abe = _0x1a56, _0x4aaf34 = [];
        for (var _0x46bff0 in _0x503d46)
            _0x4aaf34[_0x4c5abe(0x122)](_0x46bff0);
        return _0x4aaf34[_0x4c5abe(0x123)]();
    }
    assertArrayEquals([], _0x3806e4(_0x46032a)), assertArrayEquals([], _0x3806e4(_0x46032a[_0x5484b7(0x124)])), assertArrayEquals([], _0x3806e4(new _0x46032a()));
}
TestEnumerable(Set), TestEnumerable(Map), TestEnumerable(WeakMap), TestEnumerable(WeakSet);
function TestArbitrary(_0x41b18d) {
    var _0x3ca8c7 = _0x1a56;
    function _0x4d9596(_0x22968a, _0x3fecf6, _0x4a01b4) {
        _0x22968a[_0x3fecf6] = _0x4a01b4, assertEquals(_0x4a01b4, _0x22968a[_0x3fecf6]);
    }
    for (var _0x5441b5 = 0x0; _0x5441b5 < 0x14; _0x5441b5++) {
        _0x4d9596(_0x41b18d, _0x5441b5, _0x3ca8c7(0x125) + _0x5441b5), _0x4d9596(_0x41b18d, 'foo' + _0x5441b5, _0x3ca8c7(0x126) + _0x5441b5);
    }
    TestMapping(_0x41b18d, new Object(), 'foobar');
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
assertFalse(s[_0xf94ac2(0x119)](NaN)), assertFalse(s['has'](NaN + 0x1)), assertFalse(s[_0xf94ac2(0x119)](0x17)), s[_0xf94ac2(0x118)](NaN), assertTrue(s['has'](NaN)), assertTrue(s[_0xf94ac2(0x119)](NaN + 0x1)), assertFalse(s[_0xf94ac2(0x119)](0x17));
var m = new Map();
assertFalse(m[_0xf94ac2(0x119)](NaN)), assertFalse(m['has'](NaN + 0x1)), assertFalse(m['has'](0x17)), m[_0xf94ac2(0x11b)](NaN, 'a-value'), assertTrue(m[_0xf94ac2(0x119)](NaN)), assertTrue(m[_0xf94ac2(0x119)](NaN + 0x1)), assertFalse(m[_0xf94ac2(0x119)](0x17));
var s = new Set();
assertTrue(s instanceof Set), assertTrue(Set[_0xf94ac2(0x124)][_0xf94ac2(0x118)] instanceof Function), assertTrue(Set[_0xf94ac2(0x124)][_0xf94ac2(0x119)] instanceof Function), assertTrue(Set[_0xf94ac2(0x124)]['delete'] instanceof Function), assertTrue(Set[_0xf94ac2(0x124)][_0xf94ac2(0x127)] instanceof Function);
var m = new Map();
assertTrue(m instanceof Map), assertTrue(Map[_0xf94ac2(0x124)][_0xf94ac2(0x11b)] instanceof Function), assertTrue(Map[_0xf94ac2(0x124)][_0xf94ac2(0x11c)] instanceof Function), assertTrue(Map[_0xf94ac2(0x124)][_0xf94ac2(0x119)] instanceof Function), assertTrue(Map['prototype'][_0xf94ac2(0x11a)] instanceof Function), assertTrue(Map[_0xf94ac2(0x124)][_0xf94ac2(0x127)] instanceof Function);
var m = new WeakMap();
assertTrue(m instanceof WeakMap), assertTrue(WeakMap[_0xf94ac2(0x124)]['set'] instanceof Function), assertTrue(WeakMap['prototype']['get'] instanceof Function), assertTrue(WeakMap[_0xf94ac2(0x124)][_0xf94ac2(0x119)] instanceof Function), assertTrue(WeakMap[_0xf94ac2(0x124)]['delete'] instanceof Function);
var s = new WeakSet();
assertTrue(s instanceof WeakSet), assertTrue(WeakSet[_0xf94ac2(0x124)]['add'] instanceof Function), assertTrue(WeakSet['prototype']['has'] instanceof Function), assertTrue(WeakSet[_0xf94ac2(0x124)][_0xf94ac2(0x11a)] instanceof Function), assertEquals(_0xf94ac2(0x128), Set['name']), assertEquals(_0xf94ac2(0x129), Map[_0xf94ac2(0x12a)]), assertEquals('WeakMap', WeakMap[_0xf94ac2(0x12a)]), assertEquals(_0xf94ac2(0x12b), WeakSet[_0xf94ac2(0x12a)]);
function TestPrototype(_0x2fa0c8) {
    var _0x42b2fa = _0xf94ac2;
    assertTrue(_0x2fa0c8[_0x42b2fa(0x124)] instanceof Object), assertEquals({
        'value': _0x2fa0c8['prototype'],
        'writable': ![],
        'enumerable': ![],
        'configurable': ![]
    }, Object[_0x42b2fa(0x12c)](_0x2fa0c8, 'prototype'));
}
TestPrototype(Set), TestPrototype(Map), TestPrototype(WeakMap), TestPrototype(WeakSet);
function TestConstructor(_0x486cf8) {
    var _0x3c06dd = _0xf94ac2;
    assertFalse(_0x486cf8 === Object['prototype'][_0x3c06dd(0x12d)]), assertSame(_0x486cf8, _0x486cf8[_0x3c06dd(0x124)]['constructor']), assertSame(_0x486cf8, new _0x486cf8()[_0x3c06dd(0x12e)][_0x3c06dd(0x12d)]), assertEquals(0x0, _0x486cf8[_0x3c06dd(0x120)]);
}
TestConstructor(Set), TestConstructor(Map), TestConstructor(WeakMap), TestConstructor(WeakSet);
function TestDescriptor(_0x27e417, _0x5f39f1) {
    var _0x4f7678 = _0xf94ac2;
    assertEquals({
        'value': _0x5f39f1,
        'writable': !![],
        'enumerable': ![],
        'configurable': !![]
    }, Object[_0x4f7678(0x12c)](_0x27e417, _0x5f39f1['name']));
}
TestDescriptor(this, Set), TestDescriptor(this, Map), TestDescriptor(this, WeakMap), TestDescriptor(this, WeakSet), assertTrue(WeakMap[_0xf94ac2(0x124)]['constructor'] === WeakMap), assertTrue(Object[_0xf94ac2(0x12f)](WeakMap[_0xf94ac2(0x124)]) === Object['prototype']), assertFalse(WeakMap[_0xf94ac2(0x124)] === Object[_0xf94ac2(0x124)]);
var o = Object[_0xf94ac2(0x130)]({});
assertFalse(_0xf94ac2(0x11c) in o), assertFalse('set' in o), assertEquals(undefined, o[_0xf94ac2(0x11c)]), assertEquals(undefined, o['set']);
var o = Object[_0xf94ac2(0x130)]({}, {
    'myValue': {
        'value': 0xa,
        'enumerable': ![],
        'configurable': !![],
        'writable': !![]
    }
});
assertEquals(0xa, o[_0xf94ac2(0x131)]);
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
                _0xf94ac2(0x118),
                _0xf94ac2(0x119),
                _0xf94ac2(0x11a)
            ],
            'receivers': alwaysBogus[_0xf94ac2(0x132)]([
                new Map(),
                new WeakMap(),
                new WeakSet()
            ])
        },
        {
            'proto': Map[_0xf94ac2(0x124)],
            'funcs': [
                _0xf94ac2(0x11c),
                _0xf94ac2(0x11b),
                _0xf94ac2(0x119),
                _0xf94ac2(0x11a)
            ],
            'receivers': alwaysBogus[_0xf94ac2(0x132)]([
                new Set(),
                new WeakMap(),
                new WeakSet()
            ])
        },
        {
            'proto': WeakMap[_0xf94ac2(0x124)],
            'funcs': [
                _0xf94ac2(0x11c),
                _0xf94ac2(0x11b),
                _0xf94ac2(0x119),
                _0xf94ac2(0x11a)
            ],
            'receivers': alwaysBogus[_0xf94ac2(0x132)]([
                new Set(),
                new Map(),
                new WeakSet()
            ])
        },
        {
            'proto': WeakSet[_0xf94ac2(0x124)],
            'funcs': [
                _0xf94ac2(0x118),
                _0xf94ac2(0x119),
                _0xf94ac2(0x11a)
            ],
            'receivers': alwaysBogus['concat']([
                new Set(),
                new Map(),
                new WeakMap()
            ])
        }
    ];
function TestBogusReceivers(_0x467308) {
    var _0x1f8e94 = _0xf94ac2;
    for (var _0x3db1cf = 0x0; _0x3db1cf < _0x467308[_0x1f8e94(0x120)]; _0x3db1cf++) {
        var _0x3a61bb = _0x467308[_0x3db1cf][_0x1f8e94(0x133)], _0x272b9c = _0x467308[_0x3db1cf]['funcs'], _0x57d77f = _0x467308[_0x3db1cf][_0x1f8e94(0x134)];
        for (var _0x26ed51 = 0x0; _0x26ed51 < _0x272b9c[_0x1f8e94(0x120)]; _0x26ed51++) {
            var _0x2ce650 = _0x3a61bb[_0x272b9c[_0x26ed51]];
            for (var _0x497b24 = 0x0; _0x497b24 < _0x57d77f[_0x1f8e94(0x120)]; _0x497b24++) {
                assertThrows(function () {
                    var _0x3ce12e = _0x1f8e94;
                    _0x2ce650[_0x3ce12e(0x135)](_0x57d77f[_0x497b24], {});
                }, TypeError);
            }
        }
    }
}
TestBogusReceivers(bogusReceiversTestSet);
var setSizeDescriptor = Object[_0xf94ac2(0x12c)](Set[_0xf94ac2(0x124)], _0xf94ac2(0x117));
assertEquals(undefined, setSizeDescriptor[_0xf94ac2(0x136)]), assertEquals(undefined, setSizeDescriptor[_0xf94ac2(0x11b)]), assertTrue(setSizeDescriptor[_0xf94ac2(0x11c)] instanceof Function), assertEquals(undefined, setSizeDescriptor[_0xf94ac2(0x11c)][_0xf94ac2(0x124)]), assertFalse(setSizeDescriptor['enumerable']), assertTrue(setSizeDescriptor[_0xf94ac2(0x137)]), assertEquals(_0xf94ac2(0x138), setSizeDescriptor['get']['name']);
var s = new Set();
assertFalse(s['hasOwnProperty']('size'));
for (var i = 0x0; i < 0xa; i++) {
    assertEquals(i, s['size']), s[_0xf94ac2(0x118)](i);
}
for (var i = 0x9; i >= 0x0; i--) {
    s[_0xf94ac2(0x11a)](i), assertEquals(i, s[_0xf94ac2(0x117)]);
}
var mapSizeDescriptor = Object[_0xf94ac2(0x12c)](Map['prototype'], 'size');
assertEquals(undefined, mapSizeDescriptor[_0xf94ac2(0x136)]), assertEquals(undefined, mapSizeDescriptor['set']), assertTrue(mapSizeDescriptor[_0xf94ac2(0x11c)] instanceof Function), assertEquals(undefined, mapSizeDescriptor[_0xf94ac2(0x11c)][_0xf94ac2(0x124)]), assertFalse(mapSizeDescriptor[_0xf94ac2(0x139)]), assertTrue(mapSizeDescriptor[_0xf94ac2(0x137)]), assertEquals('get\x20size', mapSizeDescriptor[_0xf94ac2(0x11c)]['name']);
var m = new Map();
assertFalse(m[_0xf94ac2(0x13a)](_0xf94ac2(0x117)));
function _0x1a56(_0x234db4, _0x5ed79a) {
    return _0x1a56 = function (_0x581fe6, _0x1a5686) {
        _0x581fe6 = _0x581fe6 - 0x10d;
        var _0x451539 = _0x581f[_0x581fe6];
        return _0x451539;
    }, _0x1a56(_0x234db4, _0x5ed79a);
}
for (var i = 0x0; i < 0xa; i++) {
    assertEquals(i, m[_0xf94ac2(0x117)]), m[_0xf94ac2(0x11b)](i, i);
}
for (var i = 0x9; i >= 0x0; i--) {
    m[_0xf94ac2(0x11a)](i), assertEquals(i, m[_0xf94ac2(0x117)]);
}
(function () {
    var _0x555751 = _0xf94ac2, _0x270764 = new Set();
    _0x270764[_0x555751(0x118)](0x2a), assertTrue(_0x270764[_0x555751(0x119)](0x2a)), assertEquals(0x1, _0x270764[_0x555751(0x117)]), _0x270764['clear'](), assertFalse(_0x270764[_0x555751(0x119)](0x2a)), assertEquals(0x0, _0x270764[_0x555751(0x117)]);
}(), function () {
    var _0x23845a = _0xf94ac2, _0x2ef14b = new Map();
    _0x2ef14b[_0x23845a(0x11b)](0x2a, !![]), assertTrue(_0x2ef14b['has'](0x2a)), assertEquals(0x1, _0x2ef14b['size']), _0x2ef14b['clear'](), assertFalse(_0x2ef14b['has'](0x2a)), assertEquals(0x0, _0x2ef14b['size']);
}(), function TestMinusZeroSet() {
    var _0x5e7ab8 = _0xf94ac2, _0x2f7aab = new Set();
    _0x2f7aab[_0x5e7ab8(0x118)](-0x0), assertSame(0x0, _0x2f7aab[_0x5e7ab8(0x13b)]()[_0x5e7ab8(0x13c)]()['value']), _0x2f7aab[_0x5e7ab8(0x118)](0x0), assertEquals(0x1, _0x2f7aab[_0x5e7ab8(0x117)]), assertTrue(_0x2f7aab[_0x5e7ab8(0x119)](0x0)), assertTrue(_0x2f7aab['has'](-0x0));
}(), function TestMinusZeroMap() {
    var _0x36bee6 = _0xf94ac2, _0x2c2110 = new Map();
    _0x2c2110[_0x36bee6(0x11b)](-0x0, _0x36bee6(0x13d)), assertSame(0x0, _0x2c2110[_0x36bee6(0x13e)]()[_0x36bee6(0x13c)]()[_0x36bee6(0x136)]), _0x2c2110[_0x36bee6(0x11b)](0x0, _0x36bee6(0x13f)), assertEquals(0x1, _0x2c2110[_0x36bee6(0x117)]), assertTrue(_0x2c2110[_0x36bee6(0x119)](0x0)), assertTrue(_0x2c2110[_0x36bee6(0x119)](-0x0)), assertEquals(_0x36bee6(0x13f), _0x2c2110[_0x36bee6(0x11c)](0x0)), assertEquals(_0x36bee6(0x13f), _0x2c2110['get'](-0x0));
}(), function TestSetForEachInvalidTypes() {
    assertThrows(function () {
        var _0x25c3f9 = _0x1a56;
        Set[_0x25c3f9(0x124)][_0x25c3f9(0x11b)][_0x25c3f9(0x140)][_0x25c3f9(0x135)]({});
    }, TypeError);
    var _0x19949b = new Set();
    assertThrows(function () {
        _0x19949b['forEach']({});
    }, TypeError);
}(), function TestSetForEach() {
    var _0x1b4159 = _0xf94ac2, _0xb47c75 = new Set();
    _0xb47c75[_0x1b4159(0x118)]('a'), _0xb47c75['add']('b'), _0xb47c75[_0x1b4159(0x118)]('c');
    var _0x14874a = '', _0xafd9d9 = {};
    _0xb47c75[_0x1b4159(0x140)](function (_0x9ce727, _0x3afa48, _0x16994a) {
        var _0x270d6b = _0x1b4159;
        assertSame(_0x9ce727, _0x3afa48), assertSame(_0xb47c75, _0x16994a), assertSame(this, _0xafd9d9), _0x14874a += _0x9ce727;
        if (_0x9ce727 === 'a')
            _0xb47c75['delete']('b'), _0xb47c75[_0x270d6b(0x118)]('d'), _0xb47c75['add']('e'), _0xb47c75['add']('f');
        else
            _0x9ce727 === 'c' && (_0xb47c75[_0x270d6b(0x118)]('b'), _0xb47c75[_0x270d6b(0x11a)]('e'));
    }, _0xafd9d9), assertEquals(_0x1b4159(0x141), _0x14874a);
}(), function TestSetForEachAddAtEnd() {
    var _0x3ff8b2 = _0xf94ac2, _0x3eda4c = new Set();
    _0x3eda4c[_0x3ff8b2(0x118)]('a'), _0x3eda4c[_0x3ff8b2(0x118)]('b');
    var _0x11c96d = '';
    _0x3eda4c[_0x3ff8b2(0x140)](function (_0x204fc1) {
        var _0x4df91a = _0x3ff8b2;
        _0x11c96d += _0x204fc1, _0x204fc1 === 'b' && _0x3eda4c[_0x4df91a(0x118)]('c');
    }), assertEquals(_0x3ff8b2(0x142), _0x11c96d);
}(), function TestSetForEachDeleteNext() {
    var _0xa4be18 = _0xf94ac2, _0x3f87ed = new Set();
    _0x3f87ed[_0xa4be18(0x118)]('a'), _0x3f87ed['add']('b'), _0x3f87ed[_0xa4be18(0x118)]('c');
    var _0x35c2fd = '';
    _0x3f87ed[_0xa4be18(0x140)](function (_0xff4ef4) {
        var _0x509089 = _0xa4be18;
        _0x35c2fd += _0xff4ef4, _0xff4ef4 === 'b' && _0x3f87ed[_0x509089(0x11a)]('c');
    }), assertEquals('ab', _0x35c2fd);
}(), function TestSetForEachDeleteVisitedAndAddAgain() {
    var _0x28f77a = _0xf94ac2, _0x53bcdf = new Set();
    _0x53bcdf[_0x28f77a(0x118)]('a'), _0x53bcdf[_0x28f77a(0x118)]('b'), _0x53bcdf[_0x28f77a(0x118)]('c');
    var _0x3c4963 = '';
    _0x53bcdf[_0x28f77a(0x140)](function (_0x4dface) {
        var _0x27ce99 = _0x28f77a;
        _0x3c4963 += _0x4dface;
        if (_0x4dface === 'b')
            _0x53bcdf[_0x27ce99(0x11a)]('a');
        else
            _0x4dface === 'c' && _0x53bcdf['add']('a');
    }), assertEquals('abca', _0x3c4963);
}(), function TestSetForEachClear() {
    var _0x4996ba = _0xf94ac2, _0x375dfd = new Set();
    _0x375dfd[_0x4996ba(0x118)]('a'), _0x375dfd['add']('b'), _0x375dfd[_0x4996ba(0x118)]('c');
    var _0x3259a0 = '';
    _0x375dfd['forEach'](function (_0x1d6cb3) {
        var _0x108a58 = _0x4996ba;
        _0x3259a0 += _0x1d6cb3, _0x1d6cb3 === 'a' && (_0x375dfd[_0x108a58(0x127)](), _0x375dfd['add']('d'), _0x375dfd['add']('e'));
    }), assertEquals(_0x4996ba(0x143), _0x3259a0);
}(), function TestSetForEachNested() {
    var _0x4ad687 = _0xf94ac2, _0x40ac1e = new Set();
    _0x40ac1e[_0x4ad687(0x118)]('a'), _0x40ac1e[_0x4ad687(0x118)]('b'), _0x40ac1e['add']('c');
    var _0x1b0b1 = '';
    _0x40ac1e[_0x4ad687(0x140)](function (_0x2ce8f6) {
        var _0x46d716 = _0x4ad687;
        _0x1b0b1 += _0x2ce8f6, _0x40ac1e[_0x46d716(0x140)](function (_0x3718ac) {
            var _0x127333 = _0x46d716;
            _0x1b0b1 += _0x3718ac, _0x3718ac === 'a' && _0x40ac1e[_0x127333(0x11a)]('b');
        });
    }), assertEquals(_0x4ad687(0x144), _0x1b0b1);
}(), function TestSetForEachEarlyExit() {
    var _0x4a3d68 = _0xf94ac2, _0x466d24 = new Set();
    _0x466d24[_0x4a3d68(0x118)]('a'), _0x466d24[_0x4a3d68(0x118)]('b'), _0x466d24[_0x4a3d68(0x118)]('c');
    var _0x4d17bb = '', _0x12ed80 = {};
    try {
        _0x466d24['forEach'](function (_0x1f5450) {
            _0x4d17bb += _0x1f5450;
            throw _0x12ed80;
        });
    } catch (_0x408afb) {
        assertEquals(_0x12ed80, _0x408afb);
    }
    assertEquals('a', _0x4d17bb);
}(), function TestSetForEachGC() {
    var _0x2cd53f = _0xf94ac2, _0x44d6f8 = new Set();
    for (var _0x86aeb5 = 0x0; _0x86aeb5 < 0x64; _0x86aeb5++) {
        _0x44d6f8[_0x2cd53f(0x118)](_0x86aeb5);
    }
    var _0x50cbdb = 0x0;
    _0x44d6f8['forEach'](function (_0x16636c) {
        _0x50cbdb += _0x16636c, _0x16636c % 0xa === 0x0 && gc();
    }), assertEquals(0x1356, _0x50cbdb);
}(), function TestSetForEachReceiverAsObject() {
    var _0x517efa = _0xf94ac2, _0xdf5a36 = new Set([
            '1',
            '2'
        ]), _0x282fd8 = [];
    _0xdf5a36[_0x517efa(0x140)](function () {
        var _0x1c4281 = _0x517efa;
        _0x282fd8[_0x1c4281(0x122)](this);
    }, ''), assertTrue(_0x282fd8[0x0] !== _0x282fd8[0x1]), _0x282fd8 = [], _0xdf5a36['forEach'](function () {
        var _0x245594 = _0x517efa;
        _0x282fd8[_0x245594(0x122)](this);
    }, {}), assertEquals(_0x282fd8[0x0], _0x282fd8[0x1]);
}(), function TestSetForEachReceiverAsObjectInStrictMode() {
    var _0x2fe34e = new Set([
            '1',
            '2'
        ]), _0x6861dd = [];
    _0x2fe34e['forEach'](function () {
        'use strict';
        var _0x27298a = _0x1a56;
        _0x6861dd[_0x27298a(0x122)](this);
    }, ''), assertTrue(_0x6861dd[0x0] === '' && _0x6861dd[0x0] === _0x6861dd[0x1]);
}(), function TestMapForEachInvalidTypes() {
    assertThrows(function () {
        var _0x445625 = _0x1a56;
        Map[_0x445625(0x124)][_0x445625(0x145)][_0x445625(0x140)][_0x445625(0x135)]({});
    }, TypeError);
    var _0x53bbad = new Map();
    assertThrows(function () {
        _0x53bbad['forEach']({});
    }, TypeError);
}(), function TestMapForEach() {
    var _0x283fb1 = _0xf94ac2, _0xe87bb7 = new Map();
    _0xe87bb7['set'](0x0, 'a'), _0xe87bb7[_0x283fb1(0x11b)](0x1, 'b'), _0xe87bb7[_0x283fb1(0x11b)](0x2, 'c');
    var _0x31a947 = [], _0x2d18bb = {};
    _0xe87bb7[_0x283fb1(0x140)](function (_0x3c3616, _0x4dcd14, _0x4c4413) {
        var _0x494da3 = _0x283fb1;
        assertEquals(_0xe87bb7, _0x4c4413), assertEquals(this, _0x2d18bb), _0x31a947[_0x494da3(0x122)](_0x4dcd14, _0x3c3616);
        if (_0x4dcd14 === 0x0)
            _0xe87bb7[_0x494da3(0x11a)](0x1), _0xe87bb7[_0x494da3(0x11b)](0x3, 'd'), _0xe87bb7['set'](0x4, 'e'), _0xe87bb7[_0x494da3(0x11b)](0x5, 'f');
        else
            _0x4dcd14 === 0x2 && (_0xe87bb7['set'](0x1, 'B'), _0xe87bb7[_0x494da3(0x11a)](0x4));
    }, _0x2d18bb), assertArrayEquals([
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
    ], _0x31a947);
}(), function TestMapForEachAddAtEnd() {
    var _0x4b1ba8 = _0xf94ac2, _0x28647e = new Map();
    _0x28647e['set'](0x0, 'a'), _0x28647e[_0x4b1ba8(0x11b)](0x1, 'b');
    var _0x1a71bb = [];
    _0x28647e[_0x4b1ba8(0x140)](function (_0x2df5aa, _0x2a3c7f) {
        var _0x28c4c5 = _0x4b1ba8;
        _0x1a71bb[_0x28c4c5(0x122)](_0x2a3c7f, _0x2df5aa), _0x2a3c7f === 0x1 && _0x28647e['set'](0x2, 'c');
    }), assertArrayEquals([
        0x0,
        'a',
        0x1,
        'b',
        0x2,
        'c'
    ], _0x1a71bb);
}(), function TestMapForEachDeleteNext() {
    var _0x156ffa = _0xf94ac2, _0x4850c9 = new Map();
    _0x4850c9[_0x156ffa(0x11b)](0x0, 'a'), _0x4850c9[_0x156ffa(0x11b)](0x1, 'b'), _0x4850c9[_0x156ffa(0x11b)](0x2, 'c');
    var _0x1f28c1 = [];
    _0x4850c9[_0x156ffa(0x140)](function (_0x37a9ad, _0x4197aa) {
        var _0x5091e4 = _0x156ffa;
        _0x1f28c1[_0x5091e4(0x122)](_0x4197aa, _0x37a9ad), _0x4197aa === 0x1 && _0x4850c9[_0x5091e4(0x11a)](0x2);
    }), assertArrayEquals([
        0x0,
        'a',
        0x1,
        'b'
    ], _0x1f28c1);
}(), function TestSetForEachDeleteVisitedAndAddAgain() {
    var _0x43fd93 = _0xf94ac2, _0x4c4b29 = new Map();
    _0x4c4b29['set'](0x0, 'a'), _0x4c4b29['set'](0x1, 'b'), _0x4c4b29[_0x43fd93(0x11b)](0x2, 'c');
    var _0x59966f = [];
    _0x4c4b29[_0x43fd93(0x140)](function (_0x4b2cfa, _0x21eb57) {
        var _0x2d0282 = _0x43fd93;
        _0x59966f['push'](_0x21eb57, _0x4b2cfa);
        if (_0x21eb57 === 0x1)
            _0x4c4b29['delete'](0x0);
        else
            _0x21eb57 === 0x2 && _0x4c4b29[_0x2d0282(0x11b)](0x0, 'a');
    }), assertArrayEquals([
        0x0,
        'a',
        0x1,
        'b',
        0x2,
        'c',
        0x0,
        'a'
    ], _0x59966f);
}(), function TestMapForEachClear() {
    var _0x38d7c6 = _0xf94ac2, _0x5141b4 = new Map();
    _0x5141b4[_0x38d7c6(0x11b)](0x0, 'a'), _0x5141b4[_0x38d7c6(0x11b)](0x1, 'b'), _0x5141b4[_0x38d7c6(0x11b)](0x2, 'c');
    var _0x23e171 = [];
    _0x5141b4[_0x38d7c6(0x140)](function (_0x28b7c, _0x4b7b8d) {
        var _0xc23822 = _0x38d7c6;
        _0x23e171[_0xc23822(0x122)](_0x4b7b8d, _0x28b7c), _0x4b7b8d === 0x0 && (_0x5141b4['clear'](), _0x5141b4[_0xc23822(0x11b)](0x3, 'd'), _0x5141b4[_0xc23822(0x11b)](0x4, 'e'));
    }), assertArrayEquals([
        0x0,
        'a',
        0x3,
        'd',
        0x4,
        'e'
    ], _0x23e171);
}(), function TestMapForEachNested() {
    var _0x1b8513 = _0xf94ac2, _0x47a90e = new Map();
    _0x47a90e[_0x1b8513(0x11b)](0x0, 'a'), _0x47a90e[_0x1b8513(0x11b)](0x1, 'b'), _0x47a90e[_0x1b8513(0x11b)](0x2, 'c');
    var _0x537012 = [];
    _0x47a90e['forEach'](function (_0x1954fb, _0x44e764) {
        var _0x564596 = _0x1b8513;
        _0x537012[_0x564596(0x122)](_0x44e764, _0x1954fb), _0x47a90e['forEach'](function (_0x8670dc, _0x1aaa39) {
            var _0x32124e = _0x564596;
            _0x537012[_0x32124e(0x122)](_0x1aaa39, _0x8670dc), _0x1aaa39 === 0x0 && _0x47a90e['delete'](0x1);
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
    ], _0x537012);
}(), function TestMapForEachEarlyExit() {
    var _0x55b8fd = _0xf94ac2, _0x1de911 = new Map();
    _0x1de911[_0x55b8fd(0x11b)](0x0, 'a'), _0x1de911['set'](0x1, 'b'), _0x1de911[_0x55b8fd(0x11b)](0x2, 'c');
    var _0x274af7 = [], _0x4484fa = {};
    try {
        _0x1de911[_0x55b8fd(0x140)](function (_0x14f4c8, _0x44b65f) {
            var _0x113b38 = _0x55b8fd;
            _0x274af7[_0x113b38(0x122)](_0x44b65f, _0x14f4c8);
            throw _0x4484fa;
        });
    } catch (_0x5b9843) {
        assertEquals(_0x4484fa, _0x5b9843);
    }
    assertArrayEquals([
        0x0,
        'a'
    ], _0x274af7);
}(), function TestMapForEachGC() {
    var _0x571d8a = _0xf94ac2, _0x2e62f8 = new Map();
    for (var _0x4e1f17 = 0x0; _0x4e1f17 < 0x64; _0x4e1f17++) {
        _0x2e62f8[_0x571d8a(0x11b)](_0x4e1f17, _0x4e1f17);
    }
    var _0x33235a = 0x0;
    _0x2e62f8[_0x571d8a(0x140)](function (_0x4db62d) {
        _0x33235a += _0x4db62d, _0x4db62d % 0xa === 0x0 && gc();
    }), assertEquals(0x1356, _0x33235a);
}(), function TestMapForEachAllRemovedTransition() {
    var _0x272e86 = _0xf94ac2, _0x4933dd = new Map();
    _0x4933dd[_0x272e86(0x11b)](0x0, 0x0);
    var _0xcc917 = [];
    _0x4933dd[_0x272e86(0x140)](function (_0x375232) {
        var _0x5dd6e3 = _0x272e86;
        _0xcc917[_0x5dd6e3(0x122)](_0x375232);
        if (_0x375232 === 0x0)
            for (var _0x3d1cad = 0x1; _0x3d1cad < 0x4; _0x3d1cad++) {
                _0x4933dd[_0x5dd6e3(0x11b)](_0x3d1cad, _0x3d1cad);
            }
        if (_0x375232 === 0x3) {
            for (var _0x3d1cad = 0x0; _0x3d1cad < 0x4; _0x3d1cad++) {
                _0x4933dd[_0x5dd6e3(0x11a)](_0x3d1cad);
            }
            for (var _0x3d1cad = 0x4; _0x3d1cad < 0x8; _0x3d1cad++) {
                _0x4933dd[_0x5dd6e3(0x11b)](_0x3d1cad, _0x3d1cad);
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
    ], _0xcc917);
}(), function TestMapForEachClearTransition() {
    var _0x4fabc4 = _0xf94ac2, _0x17b84f = new Map();
    _0x17b84f[_0x4fabc4(0x11b)](0x0, 0x0);
    var _0x44ff6b = 0x0, _0x47a1aa = [];
    _0x17b84f[_0x4fabc4(0x140)](function (_0x453236) {
        var _0x3edeec = _0x4fabc4;
        _0x47a1aa[_0x3edeec(0x122)](_0x453236);
        if (++_0x44ff6b < 0x5)
            for (var _0x37a0a5 = 0x0; _0x37a0a5 < 0x5; _0x37a0a5++) {
                _0x17b84f[_0x3edeec(0x127)](), _0x17b84f[_0x3edeec(0x11b)](_0x44ff6b, _0x44ff6b);
            }
    }), assertArrayEquals([
        0x0,
        0x1,
        0x2,
        0x3,
        0x4
    ], _0x47a1aa);
}(), function TestMapForEachNestedNonTrivialTransition() {
    var _0x1587f0 = _0xf94ac2, _0x2d7805 = new Map();
    _0x2d7805[_0x1587f0(0x11b)](0x0, 0x0), _0x2d7805[_0x1587f0(0x11b)](0x1, 0x1), _0x2d7805['set'](0x2, 0x2), _0x2d7805['set'](0x3, 0x3), _0x2d7805[_0x1587f0(0x11a)](0x0);
    var _0x5cd7c0 = 0x0, _0x4a5065 = [];
    _0x2d7805[_0x1587f0(0x140)](function (_0x1e613e) {
        var _0x16469f = _0x1587f0;
        if (++_0x5cd7c0 > 0xa)
            return;
        _0x4a5065['push'](_0x1e613e);
        if (_0x1e613e == 0x3) {
            _0x2d7805[_0x16469f(0x11a)](0x1);
            for (var _0x34029f = 0x4; _0x34029f < 0xa; _0x34029f++) {
                _0x2d7805[_0x16469f(0x11b)](_0x34029f, _0x34029f);
            }
            for (var _0x34029f = 0x4; _0x34029f < 0xa; _0x34029f += 0x2) {
                _0x2d7805['delete'](_0x34029f);
            }
            _0x2d7805[_0x16469f(0x11a)](0x2);
            for (var _0x34029f = 0xa; _0x34029f < 0x14; _0x34029f++) {
                _0x2d7805['set'](_0x34029f, _0x34029f);
            }
            for (var _0x34029f = 0xa; _0x34029f < 0x14; _0x34029f += 0x2) {
                _0x2d7805['delete'](_0x34029f);
            }
            _0x2d7805[_0x16469f(0x11a)](0x3);
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
    ], _0x4a5065);
}(), function TestMapForEachAllRemovedTransitionNoClear() {
    var _0x3cf363 = _0xf94ac2, _0x1dcace = new Map();
    _0x1dcace[_0x3cf363(0x11b)](0x0, 0x0);
    var _0x5e51fd = [];
    _0x1dcace[_0x3cf363(0x140)](function (_0xa8e5b1) {
        var _0xa981ac = _0x3cf363;
        _0x5e51fd[_0xa981ac(0x122)](_0xa8e5b1);
        if (_0xa8e5b1 === 0x0)
            for (var _0x112fa1 = 0x1; _0x112fa1 < 0x8; _0x112fa1++) {
                _0x1dcace[_0xa981ac(0x11b)](_0x112fa1, _0x112fa1);
            }
        if (_0xa8e5b1 === 0x4)
            for (var _0x112fa1 = 0x0; _0x112fa1 < 0x8; _0x112fa1++) {
                _0x1dcace[_0xa981ac(0x11a)](_0x112fa1);
            }
    }), assertArrayEquals([
        0x0,
        0x1,
        0x2,
        0x3,
        0x4
    ], _0x5e51fd);
}(), function TestMapForEachNoMoreElementsAfterTransition() {
    var _0x560256 = _0xf94ac2, _0x1df611 = new Map();
    _0x1df611[_0x560256(0x11b)](0x0, 0x0);
    var _0x5ae6a6 = [];
    _0x1df611[_0x560256(0x140)](function (_0x3959bf) {
        var _0x4706b0 = _0x560256;
        _0x5ae6a6[_0x4706b0(0x122)](_0x3959bf);
        if (_0x3959bf === 0x0)
            for (var _0x3f66a6 = 0x1; _0x3f66a6 < 0x10; _0x3f66a6++) {
                _0x1df611[_0x4706b0(0x11b)](_0x3f66a6, _0x3f66a6);
            }
        if (_0x3959bf === 0x4)
            for (var _0x3f66a6 = 0x5; _0x3f66a6 < 0x10; _0x3f66a6++) {
                _0x1df611[_0x4706b0(0x11a)](_0x3f66a6);
            }
    }), assertArrayEquals([
        0x0,
        0x1,
        0x2,
        0x3,
        0x4
    ], _0x5ae6a6);
}(), function TestMapForEachReceiverAsObject() {
    var _0x406902 = _0xf94ac2, _0x3b17ef = new Map();
    _0x3b17ef[_0x406902(0x11b)](_0x406902(0x146), _0x406902(0x147)), _0x3b17ef[_0x406902(0x11b)](_0x406902(0x148), _0x406902(0x149));
    var _0x955bab = [];
    _0x3b17ef['forEach'](function () {
        var _0xba2868 = _0x406902;
        _0x955bab[_0xba2868(0x122)](this);
    }, ''), assertTrue(_0x955bab[0x0] !== _0x955bab[0x1]), _0x955bab = [], _0x3b17ef['forEach'](function () {
        var _0x1a7c79 = _0x406902;
        _0x955bab[_0x1a7c79(0x122)](this);
    }, {}), assertEquals(_0x955bab[0x0], _0x955bab[0x1]);
}(), function TestMapForEachReceiverAsObjectInStrictMode() {
    var _0x33a98b = _0xf94ac2, _0x48720a = new Map();
    _0x48720a[_0x33a98b(0x11b)](_0x33a98b(0x146), _0x33a98b(0x147)), _0x48720a[_0x33a98b(0x11b)]('key2', _0x33a98b(0x149));
    var _0xa19f24 = [];
    _0x48720a[_0x33a98b(0x140)](function () {
        'use strict';
        var _0x40320a = _0x33a98b;
        _0xa19f24[_0x40320a(0x122)](this);
    }, ''), assertTrue(_0xa19f24[0x0] === '' && _0xa19f24[0x0] === _0xa19f24[0x1]);
}());
var oneAndTwo = new Map(), k0 = { 'key': 0x0 }, k1 = { 'key': 0x1 }, k2 = { 'key': 0x2 };
oneAndTwo[_0xf94ac2(0x11b)](k1, 0x1), oneAndTwo['set'](k2, 0x2);
function TestSetConstructor(_0x30cf49) {
    var _0x5870dd = _0xf94ac2, _0x55c605 = new _0x30cf49(null);
    assertSize(0x0, _0x55c605), _0x55c605 = new _0x30cf49(undefined), assertSize(0x0, _0x55c605), assertThrows(function () {
        new _0x30cf49({});
    }, TypeError), assertThrows(function () {
        new _0x30cf49(!![]);
    }, TypeError), assertThrows(function () {
        var _0x608fa0 = _0x1a56, _0x3a50cd = {};
        _0x3a50cd[Symbol[_0x608fa0(0x14a)]] = 0x2a, new _0x30cf49(_0x3a50cd);
    }, TypeError), assertThrows(function () {
        var _0x5bf545 = _0x1a56, _0x4a5c05 = {};
        _0x4a5c05[Symbol[_0x5bf545(0x14a)]] = function () {
            return 0x2a;
        }, new _0x30cf49(_0x4a5c05);
    }, TypeError);
    var _0x189cf1 = new Set();
    _0x189cf1[_0x5870dd(0x118)](k0), _0x189cf1['add'](k1), _0x189cf1[_0x5870dd(0x118)](k2), _0x55c605 = new _0x30cf49(_0x189cf1['values']()), assertSize(0x3, _0x55c605), assertTrue(_0x55c605[_0x5870dd(0x119)](k0)), assertTrue(_0x55c605[_0x5870dd(0x119)](k1)), assertTrue(_0x55c605[_0x5870dd(0x119)](k2));
}
TestSetConstructor(Set), TestSetConstructor(WeakSet);
function TestSetConstructorAddNotCallable(_0x40eab6) {
    var _0x5740ef = _0xf94ac2, _0x3eb935 = _0x40eab6['prototype']['add'];
    assertThrows(function () {
        var _0x53a4e1 = _0x1a56;
        _0x40eab6[_0x53a4e1(0x124)][_0x53a4e1(0x118)] = 0x2a, new _0x40eab6(oneAndTwo[_0x53a4e1(0x13b)]());
    }, TypeError), _0x40eab6[_0x5740ef(0x124)][_0x5740ef(0x118)] = _0x3eb935;
}
TestSetConstructorAddNotCallable(Set), TestSetConstructorAddNotCallable(WeakSet);
function TestSetConstructorGetAddOnce(_0x59699c) {
    var _0x5237ba = _0xf94ac2, _0x50184f = _0x59699c[_0x5237ba(0x124)][_0x5237ba(0x118)], _0x14e83c = 0x0;
    Object[_0x5237ba(0x14b)](_0x59699c['prototype'], _0x5237ba(0x118), {
        'get': function () {
            return _0x14e83c++, function () {
            };
        }
    });
    var _0x44a3b8 = new _0x59699c(oneAndTwo[_0x5237ba(0x13b)]());
    assertEquals(0x1, _0x14e83c), assertSize(0x0, _0x44a3b8), Object['defineProperty'](_0x59699c[_0x5237ba(0x124)], _0x5237ba(0x118), {
        'value': _0x50184f,
        'writable': !![]
    });
}
TestSetConstructorGetAddOnce(Set), TestSetConstructorGetAddOnce(WeakSet);
function TestSetConstructorAddReplaced(_0x33a89d) {
    var _0xb86cb6 = _0xf94ac2, _0x415cc6 = _0x33a89d[_0xb86cb6(0x124)]['add'], _0x2fbfc2 = 0x0;
    _0x33a89d[_0xb86cb6(0x124)][_0xb86cb6(0x118)] = function (_0xad1c9b) {
        var _0x5a94b8 = _0xb86cb6;
        _0x2fbfc2++, _0x415cc6[_0x5a94b8(0x135)](this, _0xad1c9b), _0x33a89d[_0x5a94b8(0x124)][_0x5a94b8(0x118)] = null;
    };
    var _0x3f58ae = new _0x33a89d(oneAndTwo[_0xb86cb6(0x13e)]());
    assertEquals(0x2, _0x2fbfc2), assertSize(0x2, _0x3f58ae), _0x33a89d[_0xb86cb6(0x124)]['add'] = _0x415cc6;
}
TestSetConstructorAddReplaced(Set), TestSetConstructorAddReplaced(WeakSet);
function TestSetConstructorOrderOfDoneValue(_0x2bc054) {
    var _0x2fd2e7 = _0xf94ac2, _0x4ade48 = 0x0, _0x27a975 = 0x0, _0x46f928 = {
            'next': function () {
                return {
                    get 'value'() {
                        _0x4ade48++;
                    },
                    get 'done'() {
                        _0x27a975++;
                        throw new Error();
                    }
                };
            }
        };
    _0x46f928[Symbol[_0x2fd2e7(0x14a)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x2bc054(_0x46f928);
    }), assertEquals(0x1, _0x27a975), assertEquals(0x0, _0x4ade48);
}
TestSetConstructorOrderOfDoneValue(Set), TestSetConstructorOrderOfDoneValue(WeakSet);
function TestSetConstructorNextNotAnObject(_0x14d287) {
    var _0x4e87e6 = _0xf94ac2, _0xe89f33 = {
            'next': function () {
                var _0x5d81c7 = _0x1a56;
                return _0x5d81c7(0x142);
            }
        };
    _0xe89f33[Symbol[_0x4e87e6(0x14a)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x14d287(_0xe89f33);
    }, TypeError);
}
TestSetConstructorNextNotAnObject(Set), TestSetConstructorNextNotAnObject(WeakSet), function TestWeakSetConstructorNonObjectKeys() {
    assertThrows(function () {
        new WeakSet([0x1]);
    }, TypeError);
}();
function TestSetConstructorIterableValue(_0x2a22f1) {
    'use strict';
    var _0x3cb888 = _0xf94ac2;
    Object[_0x3cb888(0x14b)](Number[_0x3cb888(0x124)], Symbol['iterator'], {
        'get': function () {
            var _0x53e4ee = _0x3cb888;
            return assertEquals(_0x53e4ee(0x14c), typeof this), function () {
                var _0x390556 = _0x53e4ee;
                return assertEquals('number', typeof this), oneAndTwo[_0x390556(0x13e)]();
            };
        },
        'configurable': !![]
    });
    var _0x72390b = new _0x2a22f1(0x2a);
    assertSize(0x2, _0x72390b), assertTrue(_0x72390b[_0x3cb888(0x119)](k1)), assertTrue(_0x72390b[_0x3cb888(0x119)](k2)), delete Number[_0x3cb888(0x124)][Symbol['iterator']];
}
TestSetConstructorIterableValue(Set), TestSetConstructorIterableValue(WeakSet), function TestSetConstructorStringValue() {
    var _0x553ddc = _0xf94ac2, _0x46794c = new Set(_0x553ddc(0x142));
    assertSize(0x3, _0x46794c), assertTrue(_0x46794c[_0x553ddc(0x119)]('a')), assertTrue(_0x46794c[_0x553ddc(0x119)]('b')), assertTrue(_0x46794c[_0x553ddc(0x119)]('c'));
}();
function TestMapConstructor(_0x37c40d) {
    var _0x2f46dc = _0xf94ac2, _0x23d5d7 = new _0x37c40d(null);
    assertSize(0x0, _0x23d5d7), _0x23d5d7 = new _0x37c40d(undefined), assertSize(0x0, _0x23d5d7), assertThrows(function () {
        new _0x37c40d({});
    }, TypeError), assertThrows(function () {
        new _0x37c40d(!![]);
    }, TypeError), assertThrows(function () {
        var _0x786929 = _0x1a56, _0x1ffe81 = {};
        _0x1ffe81[Symbol[_0x786929(0x14a)]] = 0x2a, new _0x37c40d(_0x1ffe81);
    }, TypeError), assertThrows(function () {
        var _0x1128b8 = {};
        _0x1128b8[Symbol['iterator']] = function () {
            return 0x2a;
        }, new _0x37c40d(_0x1128b8);
    }, TypeError);
    var _0x5b8254 = new Map();
    _0x5b8254[_0x2f46dc(0x11b)](k0, 'a'), _0x5b8254['set'](k1, 'b'), _0x5b8254[_0x2f46dc(0x11b)](k2, 'c'), _0x23d5d7 = new _0x37c40d(_0x5b8254[_0x2f46dc(0x14d)]()), assertSize(0x3, _0x23d5d7), assertEquals('a', _0x23d5d7[_0x2f46dc(0x11c)](k0)), assertEquals('b', _0x23d5d7['get'](k1)), assertEquals('c', _0x23d5d7['get'](k2));
}
TestMapConstructor(Map), TestMapConstructor(WeakMap);
function TestMapConstructorSetNotCallable(_0xe1b540) {
    var _0x28df1e = _0xf94ac2, _0x382761 = _0xe1b540['prototype'][_0x28df1e(0x11b)];
    assertThrows(function () {
        var _0x30121c = _0x28df1e;
        _0xe1b540['prototype'][_0x30121c(0x11b)] = 0x2a, new _0xe1b540(oneAndTwo['entries']());
    }, TypeError), _0xe1b540['prototype'][_0x28df1e(0x11b)] = _0x382761;
}
TestMapConstructorSetNotCallable(Map), TestMapConstructorSetNotCallable(WeakMap);
function TestMapConstructorGetAddOnce(_0x505033) {
    var _0x666c2b = _0xf94ac2, _0x34ee0d = _0x505033['prototype'][_0x666c2b(0x11b)], _0x3f1016 = 0x0;
    Object[_0x666c2b(0x14b)](_0x505033[_0x666c2b(0x124)], _0x666c2b(0x11b), {
        'get': function () {
            return _0x3f1016++, function () {
            };
        }
    });
    var _0x5e5d3c = new _0x505033(oneAndTwo[_0x666c2b(0x14d)]());
    assertEquals(0x1, _0x3f1016), assertSize(0x0, _0x5e5d3c), Object[_0x666c2b(0x14b)](_0x505033['prototype'], _0x666c2b(0x11b), {
        'value': _0x34ee0d,
        'writable': !![]
    });
}
TestMapConstructorGetAddOnce(Map), TestMapConstructorGetAddOnce(WeakMap);
function TestMapConstructorSetReplaced(_0x5337d9) {
    var _0x568d35 = _0xf94ac2, _0x69e9c0 = _0x5337d9[_0x568d35(0x124)][_0x568d35(0x11b)], _0x97dd6f = 0x0;
    _0x5337d9[_0x568d35(0x124)][_0x568d35(0x11b)] = function (_0x2c89ec, _0x7722e0) {
        var _0x465b31 = _0x568d35;
        _0x97dd6f++, _0x69e9c0[_0x465b31(0x135)](this, _0x2c89ec, _0x7722e0), _0x5337d9[_0x465b31(0x124)][_0x465b31(0x11b)] = null;
    };
    var _0x36e132 = new _0x5337d9(oneAndTwo['entries']());
    assertEquals(0x2, _0x97dd6f), assertSize(0x2, _0x36e132), _0x5337d9[_0x568d35(0x124)][_0x568d35(0x11b)] = _0x69e9c0;
}
TestMapConstructorSetReplaced(Map), TestMapConstructorSetReplaced(WeakMap);
function TestMapConstructorOrderOfDoneValue(_0x43457a) {
    var _0x2b3220 = _0xf94ac2, _0x296ec0 = 0x0, _0x5cfd73 = 0x0;
    function _0x1ae0db() {
    }
    var _0x54d5af = {
        'next': function () {
            return {
                get 'value'() {
                    _0x296ec0++;
                },
                get 'done'() {
                    _0x5cfd73++;
                    throw new _0x1ae0db();
                }
            };
        }
    };
    _0x54d5af[Symbol[_0x2b3220(0x14a)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x43457a(_0x54d5af);
    }, _0x1ae0db), assertEquals(0x1, _0x5cfd73), assertEquals(0x0, _0x296ec0);
}
TestMapConstructorOrderOfDoneValue(Map), TestMapConstructorOrderOfDoneValue(WeakMap);
function TestMapConstructorNextNotAnObject(_0x17799b) {
    var _0x30ca4b = _0xf94ac2, _0x265ebb = {
            'next': function () {
                var _0x144333 = _0x1a56;
                return _0x144333(0x142);
            }
        };
    _0x265ebb[Symbol[_0x30ca4b(0x14a)]] = function () {
        return this;
    }, assertThrows(function () {
        new _0x17799b(_0x265ebb);
    }, TypeError);
}
TestMapConstructorNextNotAnObject(Map), TestMapConstructorNextNotAnObject(WeakMap);
function TestMapConstructorIteratorNotObjectValues(_0x587b80) {
    assertThrows(function () {
        var _0x21089c = _0x1a56;
        new _0x587b80(oneAndTwo[_0x21089c(0x13b)]());
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
function TestMapConstructorIterableValue(_0x37d853) {
    'use strict';
    var _0x547349 = _0xf94ac2;
    Object['defineProperty'](Number['prototype'], Symbol[_0x547349(0x14a)], {
        'get': function () {
            var _0x447cf3 = _0x547349;
            return assertEquals(_0x447cf3(0x14c), typeof this), function () {
                var _0x338837 = _0x447cf3;
                return assertEquals('number', typeof this), oneAndTwo[_0x338837(0x14d)]();
            };
        },
        'configurable': !![]
    });
    var _0x3b10a7 = new _0x37d853(0x2a);
    assertSize(0x2, _0x3b10a7), assertEquals(0x1, _0x3b10a7[_0x547349(0x11c)](k1)), assertEquals(0x2, _0x3b10a7[_0x547349(0x11c)](k2)), delete Number[_0x547349(0x124)][Symbol[_0x547349(0x14a)]];
}
TestMapConstructorIterableValue(Map), TestMapConstructorIterableValue(WeakMap);
function TestCollectionToString(_0x483454) {
    var _0x1ff483 = _0xf94ac2;
    assertEquals(_0x1ff483(0x14e) + _0x483454['name'] + ']', Object[_0x1ff483(0x124)]['toString'][_0x1ff483(0x135)](new _0x483454()));
}
TestCollectionToString(Map), TestCollectionToString(Set), TestCollectionToString(WeakMap), TestCollectionToString(WeakSet);
function TestConstructorOrderOfAdderIterator(_0x89d842, _0x506b7d) {
    var _0xfd683 = _0xf94ac2, _0x18004c = new Map();
    _0x18004c[_0xfd683(0x11b)]({}, {}), _0x18004c[_0xfd683(0x11b)]({}, {});
    var _0x10fe68 = _0x18004c[Symbol[_0xfd683(0x14a)]];
    Object[_0xfd683(0x14b)](_0x18004c, Symbol[_0xfd683(0x14a)], {
        'get': function () {
            return _0x34404b += 'iterator', _0x10fe68;
        }
    });
    var _0x34404b = '', _0x2fc43e = _0x89d842[_0xfd683(0x124)][_0x506b7d];
    Object[_0xfd683(0x14b)](_0x89d842[_0xfd683(0x124)], _0x506b7d, {
        'get': function () {
            return _0x34404b += _0x506b7d, _0x2fc43e;
        }
    }), new _0x89d842(_0x18004c), assertEquals(_0x506b7d + _0xfd683(0x14a), _0x34404b), Object[_0xfd683(0x14b)](_0x89d842['prototype'], _0x506b7d, { 'value': _0x2fc43e });
}
TestConstructorOrderOfAdderIterator(Map, 'set'), TestConstructorOrderOfAdderIterator(Set, _0xf94ac2(0x118)), TestConstructorOrderOfAdderIterator(WeakMap, 'set'), TestConstructorOrderOfAdderIterator(WeakSet, _0xf94ac2(0x118));
