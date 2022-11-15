function assertSize(_0x1cbf9e, _0x4687dc) {
    (_0x4687dc instanceof Map || _0x4687dc instanceof Set) && assertEquals(_0x1cbf9e, _0x4687dc['size']);
}
function TestValidSetCalls(_0x335311) {
    assertDoesNotThrow(function () {
        _0x335311['add'](new Object());
    }), assertDoesNotThrow(function () {
        _0x335311['has'](new Object());
    }), assertDoesNotThrow(function () {
        _0x335311['delete'](new Object());
    });
}
TestValidSetCalls(new Set()), TestValidSetCalls(new WeakSet());
function TestValidMapCalls(_0x7efb53) {
    assertDoesNotThrow(function () {
        _0x7efb53['get'](new Object());
    }), assertDoesNotThrow(function () {
        _0x7efb53['set'](new Object());
    }), assertDoesNotThrow(function () {
        _0x7efb53['has'](new Object());
    }), assertDoesNotThrow(function () {
        _0x7efb53['delete'](new Object());
    }), assertDoesNotThrow(function () {
        _0x7efb53['get'](undefined);
    }), assertDoesNotThrow(function () {
        _0x7efb53['get'](null);
    }), assertDoesNotThrow(function () {
        _0x7efb53['get'](-0x2 * -0x4ee + 0x65b * 0x6 + -0x2ffe);
    }), assertDoesNotThrow(function () {
        _0x7efb53['get']('a-key');
    }), assertDoesNotThrow(function () {
        _0x7efb53['get'](Symbol());
    }), assertDoesNotThrow(function () {
        _0x7efb53['has'](undefined);
    }), assertDoesNotThrow(function () {
        _0x7efb53['has'](null);
    }), assertDoesNotThrow(function () {
        _0x7efb53['has'](-0x8 * 0x406 + 0x13 * -0x1c4 + 0x41bc);
    }), assertDoesNotThrow(function () {
        _0x7efb53['has']('a-key');
    }), assertDoesNotThrow(function () {
        _0x7efb53['has'](Symbol());
    }), assertDoesNotThrow(function () {
        _0x7efb53['delete'](undefined);
    }), assertDoesNotThrow(function () {
        _0x7efb53['delete'](null);
    }), assertDoesNotThrow(function () {
        _0x7efb53['delete'](0x1 * 0x1763 + -0x1 * 0xfe7 + 0x3be * -0x2);
    }), assertDoesNotThrow(function () {
        _0x7efb53['delete']('a-key');
    }), assertDoesNotThrow(function () {
        _0x7efb53['delete'](Symbol());
    });
}
TestValidMapCalls(new Map()), TestValidMapCalls(new WeakMap());
function TestInvalidCalls(_0x1a30d2) {
    assertThrows(function () {
        _0x1a30d2['set'](undefined, 0x2367 + -0x2 * 0xfe + 0x1 * -0x216b);
    }, TypeError), assertThrows(function () {
        _0x1a30d2['set'](null, 0x10 * -0xca + -0xc7 * 0x9 + 0x1 * 0x139f);
    }, TypeError), assertThrows(function () {
        _0x1a30d2['set'](-0x26 * 0x3d + 0x6 * 0x15b + 0xec, 0xd93 + 0x1b76 + 0xbf * -0x37);
    }, TypeError), assertThrows(function () {
        _0x1a30d2['set']('a-key', -0x2 * -0x22d + -0x1269 + 0xe0f);
    }, TypeError), assertThrows(function () {
        _0x1a30d2['set'](Symbol(), 0x33f * 0x7 + 0x132f + -0x18 * 0x1bf);
    }, TypeError);
}
TestInvalidCalls(new WeakMap());
function TestSet(_0x5c6961, _0x1bc0b7) {
    assertFalse(_0x5c6961['has'](_0x1bc0b7)), assertFalse(_0x5c6961['delete'](_0x1bc0b7)), typeof _0x1bc0b7 === 'object' && !(_0x5c6961 instanceof WeakSet) && (assertSame(_0x5c6961, _0x5c6961['add'](_0x1bc0b7)), assertTrue(_0x5c6961['has'](_0x1bc0b7)), assertTrue(_0x5c6961['delete'](_0x1bc0b7))), assertFalse(_0x5c6961['has'](_0x1bc0b7)), assertFalse(_0x5c6961['delete'](_0x1bc0b7)), assertFalse(_0x5c6961['has'](_0x1bc0b7));
}
function TestSetBehavior(_0x348219) {
    for (var _0x1fa0d5 = -0x3c6 + 0x1259 + 0x29 * -0x5b; _0x1fa0d5 < -0x1759 + -0x1 * -0x324 + -0x9 * -0x241; _0x1fa0d5++) {
        TestSet(_0x348219, new Object()), TestSet(_0x348219, _0x1fa0d5), TestSet(_0x348219, _0x1fa0d5 / (0x5b * -0x13 + -0x445 + -0x3 * -0x3ce)), TestSet(_0x348219, 'key-' + _0x1fa0d5), TestSet(_0x348219, Symbol(_0x1fa0d5));
    }
    var _0xe49310 = [
        -(-0x1ad3 + -0x2 * -0x77c + -0x25f * -0x5),
        +(0x1110 * 0x2 + 0x1e9 * -0xb + -0xd1d),
        0x1 * -0x202 + -0xed1 + 0x4 * 0x435,
        (-0x87d + 0x4 * 0x5e0 + 0x11 * -0xe2) / (0x10 * 0x231 + 0x27 * 0x73 + -0x3492),
        -0x1 * -0x20b1 + -0x25a3 + 0x4fc,
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
    for (var _0x1fa0d5 = -0x20 * 0x2d + -0x14b + 0x6eb; _0x1fa0d5 < _0xe49310['length']; _0x1fa0d5++) {
        TestSet(_0x348219, _0xe49310[_0x1fa0d5]);
    }
}
TestSetBehavior(new Set()), TestSetBehavior(new WeakSet());
function TestMapping(_0x9f7b05, _0x59a4d5, _0x458c39) {
    assertFalse(_0x9f7b05['has'](_0x59a4d5)), assertSame(undefined, _0x9f7b05['get'](_0x59a4d5)), assertFalse(_0x9f7b05['delete'](_0x59a4d5)), typeof _0x59a4d5 === 'object' && !(_0x9f7b05 instanceof WeakMap) && (assertSame(_0x9f7b05, _0x9f7b05['set'](_0x59a4d5, _0x458c39)), assertSame(_0x458c39, _0x9f7b05['get'](_0x59a4d5)), assertTrue(_0x9f7b05['has'](_0x59a4d5)), assertTrue(_0x9f7b05['delete'](_0x59a4d5))), assertFalse(_0x9f7b05['has'](_0x59a4d5)), assertSame(undefined, _0x9f7b05['get'](_0x59a4d5)), assertFalse(_0x9f7b05['delete'](_0x59a4d5)), assertFalse(_0x9f7b05['has'](_0x59a4d5)), assertSame(undefined, _0x9f7b05['get'](_0x59a4d5));
}
function TestMapBehavior(_0x1c0be3) {
    TestMapping(_0x1c0be3, new Object(), 0x18a * 0x5 + -0x8 * -0x356 + -0x224b * 0x1), TestMapping(_0x1c0be3, new Object(), 'the-value'), TestMapping(_0x1c0be3, new Object(), new Object());
    for (var _0x1962a1 = 0xd2a + -0x1a87 * -0x1 + 0x3 * -0xd3b; _0x1962a1 < 0x1 * 0x565 + 0x251 * 0x2 + 0x9f3 * -0x1; _0x1962a1++) {
        TestMapping(_0x1c0be3, _0x1962a1, new Object()), TestMapping(_0x1c0be3, _0x1962a1 / (-0x10e1 + 0x1db9 * -0x1 + -0x4aa * -0xa), new Object()), TestMapping(_0x1c0be3, 'key-' + _0x1962a1, new Object()), TestMapping(_0x1c0be3, Symbol(_0x1962a1), new Object());
    }
    var _0x596e57 = [
        -(0x12 * 0xb2 + 0x123 * 0x7 + -0x1479),
        +(0x1d60 + 0x84d + -0x25ad),
        0xca * -0xf + 0x1d1 * -0x15 + 0x31fc,
        (0x1379 + 0xbf * -0x15 + -0x1 * 0x3cd) / (0xfc9 + 0x2 * 0xdb7 + 0x13c * -0x23),
        -0x9ad * 0x2 + -0x91 * 0x13 + -0x1 * -0x1e27,
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
    for (var _0x1962a1 = -0x257c + 0x147e + 0x10fe; _0x1962a1 < _0x596e57['length']; _0x1962a1++) {
        TestMapping(_0x1c0be3, _0x596e57[_0x1962a1], -0x11bc + -0x205 * -0x9 + 0x1e * -0x3), TestMapping(_0x1c0be3, _0x596e57[_0x1962a1], 'the-value'), TestMapping(_0x1c0be3, _0x596e57[_0x1962a1], new Object());
    }
}
TestMapBehavior(new Map()), TestMapBehavior(new WeakMap());
function TestQuery(_0xca38cc) {
    var _0x5af2bc = new Object(), _0x3de132 = [
            'x',
            0x1330 + -0x1 * -0xe17 + -0x2147,
            +Infinity,
            -Infinity,
            !![],
            ![],
            null,
            undefined
        ];
    for (var _0x33c22e = 0x2 * 0x83f + 0xcd4 + -0x1a1 * 0x12; _0x33c22e < _0x3de132['length']; _0x33c22e++) {
        TestMapping(_0xca38cc, _0x5af2bc, _0x3de132[_0x33c22e]);
    }
}
TestQuery(new Map()), TestQuery(new WeakMap());
function TestDelete(_0x3a4836) {
    var _0x42f795 = new Object();
    TestMapping(_0x3a4836, _0x42f795, 'to-be-deleted'), assertFalse(_0x3a4836['delete'](_0x42f795)), assertFalse(_0x3a4836['delete'](new Object())), assertSame(_0x3a4836['get'](_0x42f795), undefined);
}
TestDelete(new Map()), TestDelete(new WeakMap());
function TestGC1(_0x357651) {
    var _0x21cbaf = new Object();
    _0x357651['set'](_0x21cbaf, 'not-collected'), gc(), assertSame('not-collected', _0x357651['get'](_0x21cbaf));
}
TestGC1(new Map()), TestGC1(new WeakMap());
function TestGC2(_0x3cf965) {
    var _0x11f8b8 = new Object();
    for (key = _0x11f8b8, i = 0x1 * 0x93f + -0xb * -0x269 + -0x23c2; i < -0xb0f * 0x3 + -0x957 + -0x2 * -0x1547; i++, key = _0x3cf965['get'](key)) {
        _0x3cf965['set'](key, new Object());
    }
    gc();
    var _0x501eb0 = -0x109a * -0x1 + 0x4e4 * -0x5 + 0x7da;
    for (key = _0x11f8b8; key != undefined; key = _0x3cf965['get'](key)) {
        _0x501eb0++;
    }
    assertEquals(-0x1 * 0x9e6 + 0x1 * -0x1693 + -0x4 * -0x821, _0x501eb0);
}
TestGC2(new Map()), TestGC2(new WeakMap());
function TestEnumerable(_0x50f82a) {
    function _0x28bf17(_0xf324c6) {
        var _0x5e2e36 = [];
        for (var _0x387055 in _0xf324c6)
            _0x5e2e36['push'](_0x387055);
        return _0x5e2e36['sort']();
    }
    assertArrayEquals([], _0x28bf17(_0x50f82a)), assertArrayEquals([], _0x28bf17(_0x50f82a['prototype'])), assertArrayEquals([], _0x28bf17(new _0x50f82a()));
}
TestEnumerable(Set), TestEnumerable(Map), TestEnumerable(WeakMap), TestEnumerable(WeakSet);
function TestArbitrary(_0x4e9e79) {
    function _0x1c1b62(_0x109af5, _0x4e3844, _0x3d622) {
        _0x109af5[_0x4e3844] = _0x3d622, assertEquals(_0x3d622, _0x109af5[_0x4e3844]);
    }
    for (var _0x1476ba = -0x24db + -0x2028 + 0x4503; _0x1476ba < 0x1 * 0x17b3 + 0x39 * -0x2a + -0xe45; _0x1476ba++) {
        _0x1c1b62(_0x4e9e79, _0x1476ba, 'val' + _0x1476ba), _0x1c1b62(_0x4e9e79, 'foo' + _0x1476ba, 'bar' + _0x1476ba);
    }
    TestMapping(_0x4e9e79, new Object(), 'foobar');
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
assertFalse(s['has'](NaN)), assertFalse(s['has'](NaN + (0x39a * -0x2 + -0xa8c + 0x2d * 0x65))), assertFalse(s['has'](-0x16a3 + 0x1fdf + -0x925)), s['add'](NaN), assertTrue(s['has'](NaN)), assertTrue(s['has'](NaN + (0x60c + 0x795 + -0xda0))), assertFalse(s['has'](0x1b88 + -0x1548 + -0x1 * 0x629));
var m = new Map();
assertFalse(m['has'](NaN)), assertFalse(m['has'](NaN + (-0xc36 + 0x224 + 0xa13 * 0x1))), assertFalse(m['has'](0x1 * 0xeae + 0x19b * 0x1 + -0x1032 * 0x1)), m['set'](NaN, 'a-value'), assertTrue(m['has'](NaN)), assertTrue(m['has'](NaN + (-0x11a5 + 0xae5 * 0x2 + -0x424))), assertFalse(m['has'](-0x494 + 0xc0b * -0x1 + 0x10b6));
var s = new Set();
assertTrue(s instanceof Set), assertTrue(Set['prototype']['add'] instanceof Function), assertTrue(Set['prototype']['has'] instanceof Function), assertTrue(Set['prototype']['delete'] instanceof Function), assertTrue(Set['prototype']['clear'] instanceof Function);
var m = new Map();
assertTrue(m instanceof Map), assertTrue(Map['prototype']['set'] instanceof Function), assertTrue(Map['prototype']['get'] instanceof Function), assertTrue(Map['prototype']['has'] instanceof Function), assertTrue(Map['prototype']['delete'] instanceof Function), assertTrue(Map['prototype']['clear'] instanceof Function);
var m = new WeakMap();
assertTrue(m instanceof WeakMap), assertTrue(WeakMap['prototype']['set'] instanceof Function), assertTrue(WeakMap['prototype']['get'] instanceof Function), assertTrue(WeakMap['prototype']['has'] instanceof Function), assertTrue(WeakMap['prototype']['delete'] instanceof Function);
var s = new WeakSet();
assertTrue(s instanceof WeakSet), assertTrue(WeakSet['prototype']['add'] instanceof Function), assertTrue(WeakSet['prototype']['has'] instanceof Function), assertTrue(WeakSet['prototype']['delete'] instanceof Function), assertEquals('Set', Set['name']), assertEquals('Map', Map['name']), assertEquals('WeakMap', WeakMap['name']), assertEquals('WeakSet', WeakSet['name']);
function TestPrototype(_0x4566b1) {
    assertTrue(_0x4566b1['prototype'] instanceof Object), assertEquals({
        'value': _0x4566b1['prototype'],
        'writable': ![],
        'enumerable': ![],
        'configurable': ![]
    }, Object['getOwnPropertyDescriptor'](_0x4566b1, 'prototype'));
}
TestPrototype(Set), TestPrototype(Map), TestPrototype(WeakMap), TestPrototype(WeakSet);
function TestConstructor(_0x4f518c) {
    assertFalse(_0x4f518c === Object['prototype']['constructor']), assertSame(_0x4f518c, _0x4f518c['prototype']['constructor']), assertSame(_0x4f518c, new _0x4f518c()['__proto__']['constructor']), assertEquals(-0x61f + 0x13 * 0x179 + -0x15dc, _0x4f518c['length']);
}
TestConstructor(Set), TestConstructor(Map), TestConstructor(WeakMap), TestConstructor(WeakSet);
function TestDescriptor(_0x77053b, _0x407fb0) {
    assertEquals({
        'value': _0x407fb0,
        'writable': !![],
        'enumerable': ![],
        'configurable': !![]
    }, Object['getOwnPropertyDescriptor'](_0x77053b, _0x407fb0['name']));
}
TestDescriptor(this, Set), TestDescriptor(this, Map), TestDescriptor(this, WeakMap), TestDescriptor(this, WeakSet), assertTrue(WeakMap['prototype']['constructor'] === WeakMap), assertTrue(Object['getPrototypeOf'](WeakMap['prototype']) === Object['prototype']), assertFalse(WeakMap['prototype'] === Object['prototype']);
var o = Object['create']({});
assertFalse('get' in o), assertFalse('set' in o), assertEquals(undefined, o['get']), assertEquals(undefined, o['set']);
var o = Object['create']({}, {
    'myValue': {
        'value': 0xa,
        'enumerable': ![],
        'configurable': !![],
        'writable': !![]
    }
});
assertEquals(-0x2 * -0x12b + -0x35 * 0x43 + -0xb93 * -0x1, o['myValue']);
var alwaysBogus = [
        undefined,
        null,
        !![],
        'x',
        0x1 * 0x1d00 + 0x124f + -0x2f38 * 0x1,
        {}
    ], bogusReceiversTestSet = [
        {
            'proto': Set['prototype'],
            'funcs': [
                'add',
                'has',
                'delete'
            ],
            'receivers': alwaysBogus['concat']([
                new Map(),
                new WeakMap(),
                new WeakSet()
            ])
        },
        {
            'proto': Map['prototype'],
            'funcs': [
                'get',
                'set',
                'has',
                'delete'
            ],
            'receivers': alwaysBogus['concat']([
                new Set(),
                new WeakMap(),
                new WeakSet()
            ])
        },
        {
            'proto': WeakMap['prototype'],
            'funcs': [
                'get',
                'set',
                'has',
                'delete'
            ],
            'receivers': alwaysBogus['concat']([
                new Set(),
                new Map(),
                new WeakSet()
            ])
        },
        {
            'proto': WeakSet['prototype'],
            'funcs': [
                'add',
                'has',
                'delete'
            ],
            'receivers': alwaysBogus['concat']([
                new Set(),
                new Map(),
                new WeakMap()
            ])
        }
    ];
function TestBogusReceivers(_0x525afa) {
    for (var _0x1b36c8 = -0x8e8 + 0x5 * -0x12 + -0x2 * -0x4a1; _0x1b36c8 < _0x525afa['length']; _0x1b36c8++) {
        var _0x1a8f66 = _0x525afa[_0x1b36c8]['proto'], _0xef59d1 = _0x525afa[_0x1b36c8]['funcs'], _0x162691 = _0x525afa[_0x1b36c8]['receivers'];
        for (var _0x2e9c7b = -0x11ea + 0x1 * -0x425 + 0x160f * 0x1; _0x2e9c7b < _0xef59d1['length']; _0x2e9c7b++) {
            var _0x132caf = _0x1a8f66[_0xef59d1[_0x2e9c7b]];
            for (var _0x290b36 = 0x196e + -0x1992 + -0x24 * -0x1; _0x290b36 < _0x162691['length']; _0x290b36++) {
                assertThrows(function () {
                    _0x132caf['call'](_0x162691[_0x290b36], {});
                }, TypeError);
            }
        }
    }
}
TestBogusReceivers(bogusReceiversTestSet);
var setSizeDescriptor = Object['getOwnPropertyDescriptor'](Set['prototype'], 'size');
assertEquals(undefined, setSizeDescriptor['value']), assertEquals(undefined, setSizeDescriptor['set']), assertTrue(setSizeDescriptor['get'] instanceof Function), assertEquals(undefined, setSizeDescriptor['get']['prototype']), assertFalse(setSizeDescriptor['enumerable']), assertTrue(setSizeDescriptor['configurable']), assertEquals('get\x20size', setSizeDescriptor['get']['name']);
var s = new Set();
assertFalse(s['hasOwnProperty']('size'));
for (var i = 0x876 + -0xd5c + 0x4e6; i < 0x1 * 0xd32 + 0x6 * -0x29d + 0x286; i++) {
    assertEquals(i, s['size']), s['add'](i);
}
for (var i = 0x11e3 + 0x2293 + -0x346d * 0x1; i >= -0x597 * -0x4 + -0x1c72 + 0x616 * 0x1; i--) {
    s['delete'](i), assertEquals(i, s['size']);
}
var mapSizeDescriptor = Object['getOwnPropertyDescriptor'](Map['prototype'], 'size');
assertEquals(undefined, mapSizeDescriptor['value']), assertEquals(undefined, mapSizeDescriptor['set']), assertTrue(mapSizeDescriptor['get'] instanceof Function), assertEquals(undefined, mapSizeDescriptor['get']['prototype']), assertFalse(mapSizeDescriptor['enumerable']), assertTrue(mapSizeDescriptor['configurable']), assertEquals('get\x20size', mapSizeDescriptor['get']['name']);
var m = new Map();
assertFalse(m['hasOwnProperty']('size'));
for (var i = -0x12ca + 0x367 * -0x7 + 0x2a9b; i < -0x14 * 0x17b + -0x7 * -0x428 + 0x8e; i++) {
    assertEquals(i, m['size']), m['set'](i, i);
}
for (var i = -0x1ec9 + 0x941 + 0x1591; i >= 0x36 * -0x77 + -0x1700 + 0x301a; i--) {
    m['delete'](i), assertEquals(i, m['size']);
}
(function () {
    var _0x117e0f = new Set();
    _0x117e0f['add'](-0x76a + -0x1 * -0x1cfd + 0x57 * -0x3f), assertTrue(_0x117e0f['has'](0x3b7 + 0x53 + 0x10 * -0x3e)), assertEquals(-0x13e4 + -0x24fa + 0x38df, _0x117e0f['size']), _0x117e0f['clear'](), assertFalse(_0x117e0f['has'](0x1 * -0x195d + -0x19 * -0x9f + 0xa00)), assertEquals(0xc7d + -0xc * 0x123 + 0x127, _0x117e0f['size']);
}(), function () {
    var _0x15496e = new Map();
    _0x15496e['set'](0x26 * 0xe5 + -0x12c5 + -0xf0f, !![]), assertTrue(_0x15496e['has'](0x17 * 0x146 + 0x19cb + -0x36eb)), assertEquals(-0xd3c + -0xe06 + -0x7 * -0x3e5, _0x15496e['size']), _0x15496e['clear'](), assertFalse(_0x15496e['has'](0x1355 * 0x2 + 0x17cd + 0x185 * -0x29)), assertEquals(-0x2339 + 0xb86 + 0x1 * 0x17b3, _0x15496e['size']);
}(), function TestMinusZeroSet() {
    var _0x394729 = new Set();
    _0x394729['add'](-(-0x11 * -0x1aa + 0x20a9 + 0x3 * -0x1451)), assertSame(-0x98c + 0x747 * -0x3 + 0x1f61, _0x394729['values']()['next']()['value']), _0x394729['add'](-0x4f3 * -0x6 + -0x9 * -0x152 + 0x2 * -0x14ca), assertEquals(-0x2 * -0x458 + -0x2 * -0x184 + 0x1 * -0xbb7, _0x394729['size']), assertTrue(_0x394729['has'](0x78b * -0x3 + 0x2214 + -0xb73)), assertTrue(_0x394729['has'](-(0xd1 * -0x2f + -0x19c8 + -0xb * -0x5d5)));
}(), function TestMinusZeroMap() {
    var _0x4a780c = new Map();
    _0x4a780c['set'](-(-0x2683 + 0xe * -0x47 + 0x2a65), 'minus'), assertSame(0x6a1 * 0x2 + 0x1 * 0x89b + -0x15dd, _0x4a780c['keys']()['next']()['value']), _0x4a780c['set'](-0x193a + 0x10ec + 0x84e, 'plus'), assertEquals(-0x23 + -0x1723 + 0x1747, _0x4a780c['size']), assertTrue(_0x4a780c['has'](0x16 * -0x161 + -0x180c + -0x1 * -0x3662)), assertTrue(_0x4a780c['has'](-(0x423 + -0x70 * 0x1 + -0x3b3 * 0x1))), assertEquals('plus', _0x4a780c['get'](0x1626 + -0x1 * 0x230 + -0xe * 0x16d)), assertEquals('plus', _0x4a780c['get'](-(-0x13a2 + -0xeeb + 0x5 * 0x6e9)));
}(), function TestSetForEachInvalidTypes() {
    assertThrows(function () {
        Set['prototype']['set']['forEach']['call']({});
    }, TypeError);
    var _0x158224 = new Set();
    assertThrows(function () {
        _0x158224['forEach']({});
    }, TypeError);
}(), function TestSetForEach() {
    var _0x5e291a = new Set();
    _0x5e291a['add']('a'), _0x5e291a['add']('b'), _0x5e291a['add']('c');
    var _0x19e518 = '', _0x1890ab = {};
    _0x5e291a['forEach'](function (_0x1a58db, _0x59a13f, _0x2d58b8) {
        assertSame(_0x1a58db, _0x59a13f), assertSame(_0x5e291a, _0x2d58b8), assertSame(this, _0x1890ab), _0x19e518 += _0x1a58db;
        if (_0x1a58db === 'a')
            _0x5e291a['delete']('b'), _0x5e291a['add']('d'), _0x5e291a['add']('e'), _0x5e291a['add']('f');
        else
            _0x1a58db === 'c' && (_0x5e291a['add']('b'), _0x5e291a['delete']('e'));
    }, _0x1890ab), assertEquals('acdfb', _0x19e518);
}(), function TestSetForEachAddAtEnd() {
    var _0x40e7be = new Set();
    _0x40e7be['add']('a'), _0x40e7be['add']('b');
    var _0x5ad58d = '';
    _0x40e7be['forEach'](function (_0xe792b6) {
        _0x5ad58d += _0xe792b6, _0xe792b6 === 'b' && _0x40e7be['add']('c');
    }), assertEquals('abc', _0x5ad58d);
}(), function TestSetForEachDeleteNext() {
    var _0x1126ab = new Set();
    _0x1126ab['add']('a'), _0x1126ab['add']('b'), _0x1126ab['add']('c');
    var _0x2d9c52 = '';
    _0x1126ab['forEach'](function (_0x106559) {
        _0x2d9c52 += _0x106559, _0x106559 === 'b' && _0x1126ab['delete']('c');
    }), assertEquals('ab', _0x2d9c52);
}(), function TestSetForEachDeleteVisitedAndAddAgain() {
    var _0x358992 = new Set();
    _0x358992['add']('a'), _0x358992['add']('b'), _0x358992['add']('c');
    var _0x353226 = '';
    _0x358992['forEach'](function (_0x239e65) {
        _0x353226 += _0x239e65;
        if (_0x239e65 === 'b')
            _0x358992['delete']('a');
        else
            _0x239e65 === 'c' && _0x358992['add']('a');
    }), assertEquals('abca', _0x353226);
}(), function TestSetForEachClear() {
    var _0x9a20c8 = new Set();
    _0x9a20c8['add']('a'), _0x9a20c8['add']('b'), _0x9a20c8['add']('c');
    var _0x7802c9 = '';
    _0x9a20c8['forEach'](function (_0x593f1b) {
        _0x7802c9 += _0x593f1b, _0x593f1b === 'a' && (_0x9a20c8['clear'](), _0x9a20c8['add']('d'), _0x9a20c8['add']('e'));
    }), assertEquals('ade', _0x7802c9);
}(), function TestSetForEachNested() {
    var _0x2069a9 = new Set();
    _0x2069a9['add']('a'), _0x2069a9['add']('b'), _0x2069a9['add']('c');
    var _0x5ad8d3 = '';
    _0x2069a9['forEach'](function (_0x4ce809) {
        _0x5ad8d3 += _0x4ce809, _0x2069a9['forEach'](function (_0xe989c6) {
            _0x5ad8d3 += _0xe989c6, _0xe989c6 === 'a' && _0x2069a9['delete']('b');
        });
    }), assertEquals('aaccac', _0x5ad8d3);
}(), function TestSetForEachEarlyExit() {
    var _0x2e3df2 = new Set();
    _0x2e3df2['add']('a'), _0x2e3df2['add']('b'), _0x2e3df2['add']('c');
    var _0x2294b1 = '', _0x2c570e = {};
    try {
        _0x2e3df2['forEach'](function (_0x5c71e6) {
            _0x2294b1 += _0x5c71e6;
            throw _0x2c570e;
        });
    } catch (_0x335cbb) {
        assertEquals(_0x2c570e, _0x335cbb);
    }
    assertEquals('a', _0x2294b1);
}(), function TestSetForEachGC() {
    var _0x49e7a1 = new Set();
    for (var _0xce4034 = 0x951 + 0x1 * -0x13ac + -0x1 * -0xa5b; _0xce4034 < -0x1 * 0x16b8 + 0x7eb + 0xf31; _0xce4034++) {
        _0x49e7a1['add'](_0xce4034);
    }
    var _0x37a425 = 0x1 * -0x645 + 0x2554 * 0x1 + -0x1 * 0x1f0f;
    _0x49e7a1['forEach'](function (_0x25cea9) {
        _0x37a425 += _0x25cea9, _0x25cea9 % (0x13cd + -0xe01 * -0x1 + -0x1 * 0x21c4) === -0x12 + 0x1 * 0x7c2 + -0x7b0 && gc();
    }), assertEquals(0x1f * -0x139 + -0x3ab + 0x3ce8, _0x37a425);
}(), function TestSetForEachReceiverAsObject() {
    var _0x4766d0 = new Set([
            '1',
            '2'
        ]), _0x45663b = [];
    _0x4766d0['forEach'](function () {
        _0x45663b['push'](this);
    }, ''), assertTrue(_0x45663b[0x10 * -0xd9 + 0x1 * -0x2303 + 0x3093] !== _0x45663b[-0x58 * -0x47 + 0x13ae + -0x2c15]), _0x45663b = [], _0x4766d0['forEach'](function () {
        _0x45663b['push'](this);
    }, {}), assertEquals(_0x45663b[0x21a3 + 0xd * -0x2d4 + 0x9 * 0x59], _0x45663b[0x1 * -0x25bf + 0x6ad + 0x25 * 0xd7]);
}(), function TestSetForEachReceiverAsObjectInStrictMode() {
    var _0x4be761 = new Set([
            '1',
            '2'
        ]), _0x306b37 = [];
    _0x4be761['forEach'](function () {
        'use strict';
        _0x306b37['push'](this);
    }, ''), assertTrue(_0x306b37[0x3 * 0x949 + 0x45 * 0x65 + -0x3714] === '' && _0x306b37[-0x20d + 0x1c * -0x78 + -0x23 * -0x6f] === _0x306b37[0x24eb + -0x113e + -0x4 * 0x4eb]);
}(), function TestMapForEachInvalidTypes() {
    assertThrows(function () {
        Map['prototype']['map']['forEach']['call']({});
    }, TypeError);
    var _0x4d3d7c = new Map();
    assertThrows(function () {
        _0x4d3d7c['forEach']({});
    }, TypeError);
}(), function TestMapForEach() {
    var _0x4cde33 = new Map();
    _0x4cde33['set'](0x45d + 0xe * -0x127 + 0x1 * 0xbc5, 'a'), _0x4cde33['set'](0x1 * 0x26c + -0x6d3 + 0x468 * 0x1, 'b'), _0x4cde33['set'](0x1806 + -0x1334 + -0x4d0, 'c');
    var _0x171c5b = [], _0x31e3e6 = {};
    _0x4cde33['forEach'](function (_0x5603ca, _0x428520, _0x4d100a) {
        assertEquals(_0x4cde33, _0x4d100a), assertEquals(this, _0x31e3e6), _0x171c5b['push'](_0x428520, _0x5603ca);
        if (_0x428520 === 0xb7 + -0x1d * -0x75 + -0xdf8)
            _0x4cde33['delete'](0x1e94 + -0x33c + -0x1b57), _0x4cde33['set'](0x5d0 + 0x250b + -0x2ad8, 'd'), _0x4cde33['set'](0x1f * 0x25 + 0x120c + -0x1683, 'e'), _0x4cde33['set'](-0x12 * 0x1e2 + -0x1a3 * 0x1 + -0x1 * -0x238c, 'f');
        else
            _0x428520 === -0xbcd + -0x37e + 0xf4d && (_0x4cde33['set'](0xcf7 + 0x330 + -0x1026, 'B'), _0x4cde33['delete'](-0x8df + 0xf62 * 0x1 + -0x67f));
    }, _0x31e3e6), assertArrayEquals([
        -0x39e * -0x7 + -0xbf1 + -0xd61,
        'a',
        0xbae + 0x3 * -0xbd5 + -0x3 * -0x7f1,
        'c',
        -0x34 * -0x89 + -0x1 * 0x5cd + 0x1 * -0x1604,
        'd',
        -0x1cf2 + -0x1 * 0x1fb3 + 0x5 * 0xc22,
        'f',
        -0x6f7 * -0x2 + -0x29 * -0x35 + -0xb35 * 0x2,
        'B'
    ], _0x171c5b);
}(), function TestMapForEachAddAtEnd() {
    var _0x246d04 = new Map();
    _0x246d04['set'](0x4e5 + 0x1d86 + -0x226b, 'a'), _0x246d04['set'](0x5f3 + -0x1432 + 0x30 * 0x4c, 'b');
    var _0x4d5821 = [];
    _0x246d04['forEach'](function (_0xb781ff, _0x39a88f) {
        _0x4d5821['push'](_0x39a88f, _0xb781ff), _0x39a88f === -0x1 * -0xcc1 + 0x6 * 0x4f7 + -0x1ef * 0x16 && _0x246d04['set'](0x1 * 0x5b5 + -0x197f * 0x1 + -0x9e6 * -0x2, 'c');
    }), assertArrayEquals([
        0x2 * 0x135e + -0x6d * 0x5 + 0x249b * -0x1,
        'a',
        0x1 * 0xb51 + -0x13b3 + 0x13 * 0x71,
        'b',
        -0x81c * -0x2 + 0x20 * -0x91 + -0x1 * -0x1ea,
        'c'
    ], _0x4d5821);
}(), function TestMapForEachDeleteNext() {
    var _0x2627ac = new Map();
    _0x2627ac['set'](-0x2475 + -0x9d * 0x2 + 0x25af * 0x1, 'a'), _0x2627ac['set'](-0x1 * -0x124 + -0x259b * 0x1 + 0x2478, 'b'), _0x2627ac['set'](0x2 * -0xbee + 0x180e + -0x3 * 0x10, 'c');
    var _0x1b72fc = [];
    _0x2627ac['forEach'](function (_0x415e0e, _0x54a48a) {
        _0x1b72fc['push'](_0x54a48a, _0x415e0e), _0x54a48a === -0x114c + -0x1f33 * 0x1 + -0x184 * -0x20 && _0x2627ac['delete'](-0x156b + -0x54 * 0x36 + 0x2725 * 0x1);
    }), assertArrayEquals([
        -0x17e5 + 0x1 * -0x16eb + 0x2ed0,
        'a',
        -0x3c * 0x74 + 0x2125 + 0x2 * -0x2fa,
        'b'
    ], _0x1b72fc);
}(), function TestSetForEachDeleteVisitedAndAddAgain() {
    var _0x4ebd17 = new Map();
    _0x4ebd17['set'](-0x142c + -0x7 * -0x232 + -0x1 * -0x4ce, 'a'), _0x4ebd17['set'](0xdb9 + 0x1402 + -0x6 * 0x59f, 'b'), _0x4ebd17['set'](0x2414 + 0x19f2 + 0x52b * -0xc, 'c');
    var _0x11f829 = [];
    _0x4ebd17['forEach'](function (_0x4c71a5, _0x2cc697) {
        _0x11f829['push'](_0x2cc697, _0x4c71a5);
        if (_0x2cc697 === 0x1e71 * -0x1 + 0x1 * 0x2509 + -0x697)
            _0x4ebd17['delete'](0x613 + 0x23ba + -0x57 * 0x7b);
        else
            _0x2cc697 === 0x2 * -0xa25 + 0xd35 + 0x717 && _0x4ebd17['set'](-0xda3 * 0x1 + -0x557 * 0x7 + -0xa34 * -0x5, 'a');
    }), assertArrayEquals([
        0x2204 + 0x843 * -0x2 + -0x117e,
        'a',
        0x109e + 0x1ac7 + -0x4 * 0xad9,
        'b',
        -0x704 + -0xba3 + 0x12a9,
        'c',
        -0x1 * 0x2b9 + -0x1 * 0x1ba9 + 0x1e62,
        'a'
    ], _0x11f829);
}(), function TestMapForEachClear() {
    var _0x24f4f8 = new Map();
    _0x24f4f8['set'](0x39c * 0x6 + -0x5d * -0x25 + 0x2319 * -0x1, 'a'), _0x24f4f8['set'](-0x1 * 0x22c6 + 0x1de6 + -0x4e1 * -0x1, 'b'), _0x24f4f8['set'](0x5d1 * 0x6 + 0x637 * 0x4 + -0x3bc0, 'c');
    var _0x459f21 = [];
    _0x24f4f8['forEach'](function (_0x36652, _0x27c665) {
        _0x459f21['push'](_0x27c665, _0x36652), _0x27c665 === 0x13e6 + 0x2a9 * -0xd + 0xeaf && (_0x24f4f8['clear'](), _0x24f4f8['set'](-0x26e8 + -0x1 * -0x24e + 0x249d, 'd'), _0x24f4f8['set'](0x1468 + -0x1437 + -0x5 * 0x9, 'e'));
    }), assertArrayEquals([
        0xe5c + 0x1 * 0x221d + -0x3079,
        'a',
        0x1008 + 0x13a * 0x6 + -0x11d * 0x15,
        'd',
        0x5 * 0x6f4 + -0x649 + -0x1c77,
        'e'
    ], _0x459f21);
}(), function TestMapForEachNested() {
    var _0x3276a0 = new Map();
    _0x3276a0['set'](0x2d5 * 0x5 + -0xcd * 0x6 + -0x95b, 'a'), _0x3276a0['set'](-0x976 + 0xe14 + -0x49d, 'b'), _0x3276a0['set'](0x40d * 0x4 + -0x1199 + 0x167, 'c');
    var _0x4feea3 = [];
    _0x3276a0['forEach'](function (_0x26d821, _0x4f73a9) {
        _0x4feea3['push'](_0x4f73a9, _0x26d821), _0x3276a0['forEach'](function (_0x36f9fd, _0x534f70) {
            _0x4feea3['push'](_0x534f70, _0x36f9fd), _0x534f70 === -0x3 * 0x63a + -0x6b5 * -0x4 + -0x826 && _0x3276a0['delete'](-0x1 * -0x2609 + 0x1 * 0xa2b + 0x1 * -0x3033);
        });
    }), assertArrayEquals([
        -0x2d * -0x79 + -0x2 * 0xc0e + 0x1 * 0x2d7,
        'a',
        0x2332 + 0xe * 0xc + -0x23da,
        'a',
        -0x77f * -0x1 + -0xff7 + 0x87a,
        'c',
        0x2562 + -0x1b0f + 0x1 * -0xa51,
        'c',
        -0x15d + -0x1e06 + -0x1f63 * -0x1,
        'a',
        0xd17 + 0x1ae4 + -0xd53 * 0x3,
        'c'
    ], _0x4feea3);
}(), function TestMapForEachEarlyExit() {
    var _0x47b8b6 = new Map();
    _0x47b8b6['set'](-0x3 * 0x85f + -0x90a + -0x2227 * -0x1, 'a'), _0x47b8b6['set'](0x17c8 + 0x66e * -0x3 + -0x47d * 0x1, 'b'), _0x47b8b6['set'](-0x2 * 0x2ff + 0x2 * -0x28e + 0xb1c, 'c');
    var _0xef54b3 = [], _0x230042 = {};
    try {
        _0x47b8b6['forEach'](function (_0x28180c, _0x5e20ce) {
            _0xef54b3['push'](_0x5e20ce, _0x28180c);
            throw _0x230042;
        });
    } catch (_0x47659e) {
        assertEquals(_0x230042, _0x47659e);
    }
    assertArrayEquals([
        0x1b87 + -0x458 + 0x4a3 * -0x5,
        'a'
    ], _0xef54b3);
}(), function TestMapForEachGC() {
    var _0xc8de9c = new Map();
    for (var _0x344796 = 0x16f * -0x13 + -0x1d3b * -0x1 + 0x66 * -0x5; _0x344796 < -0x176 * 0x16 + 0x9a7 + 0x16e1; _0x344796++) {
        _0xc8de9c['set'](_0x344796, _0x344796);
    }
    var _0x294df5 = -0x2 * 0x4de + 0xbd1 + -0x1 * 0x215;
    _0xc8de9c['forEach'](function (_0x499ed0) {
        _0x294df5 += _0x499ed0, _0x499ed0 % (0x1d28 * 0x1 + 0x1647 + -0x3365) === -0x8e6 + -0x16c3 * -0x1 + 0x49f * -0x3 && gc();
    }), assertEquals(0xa19 * -0x1 + 0xe * -0x255 + 0x3e15, _0x294df5);
}(), function TestMapForEachAllRemovedTransition() {
    var _0x5ee072 = new Map();
    _0x5ee072['set'](0x10d5 + -0x250 * -0x3 + -0x17c5, 0x12f + 0x1231 + -0x1360);
    var _0x38ab30 = [];
    _0x5ee072['forEach'](function (_0x2d98d6) {
        _0x38ab30['push'](_0x2d98d6);
        if (_0x2d98d6 === -0x19cd * 0x1 + 0xe * -0x1f9 + -0x356b * -0x1)
            for (var _0x49507a = 0x5 * -0x2dc + -0x11cf * -0x1 + -0x1c1 * 0x2; _0x49507a < 0x1063 + 0x2f * -0x9c + 0xc45; _0x49507a++) {
                _0x5ee072['set'](_0x49507a, _0x49507a);
            }
        if (_0x2d98d6 === 0x91b + -0xdb9 * -0x1 + -0x21 * 0xb1) {
            for (var _0x49507a = 0xd * 0x29a + 0x7b6 + -0x2988; _0x49507a < 0x1898 + 0x237d + 0x3c11 * -0x1; _0x49507a++) {
                _0x5ee072['delete'](_0x49507a);
            }
            for (var _0x49507a = 0x13a0 + 0x120b + 0x7 * -0x561; _0x49507a < -0x8d * 0x19 + 0x1262 + 0x33 * -0x17; _0x49507a++) {
                _0x5ee072['set'](_0x49507a, _0x49507a);
            }
        }
    }), assertArrayEquals([
        0x2192 + -0x1249 + -0xf49,
        0x1 * -0x7c1 + 0xd6c + 0x1d * -0x32,
        -0x1 * -0x11b1 + 0x26e5 + -0x3894,
        -0x4 * -0x3a1 + 0x1 * 0x1c2d + -0x2aae,
        -0x6 * -0xc2 + -0x31b + 0x1 * -0x16d,
        0x25 * -0x4d + 0x4 * 0x66 + 0x98e,
        0x25a6 + 0x454 * -0x4 + -0x1450,
        -0x1721 * -0x1 + -0x2 * -0x545 + -0x4 * 0x869
    ], _0x38ab30);
}(), function TestMapForEachClearTransition() {
    var _0x24ca43 = new Map();
    _0x24ca43['set'](-0xb3f * -0x1 + -0xa17 + 0x25 * -0x8, 0x313 * -0x1 + 0x1 * -0x4ff + 0x812);
    var _0x3fbe1c = 0x1c4f * 0x1 + 0x1 * 0x1b05 + -0x3754, _0x104ede = [];
    _0x24ca43['forEach'](function (_0x4ae63a) {
        _0x104ede['push'](_0x4ae63a);
        if (++_0x3fbe1c < 0x246a * 0x1 + 0xb57 * 0x2 + -0x3b13)
            for (var _0x3624c7 = -0x1175 + 0x65e + 0xb17; _0x3624c7 < 0x738 + 0x29 * 0x32 + -0xe5 * 0x11; _0x3624c7++) {
                _0x24ca43['clear'](), _0x24ca43['set'](_0x3fbe1c, _0x3fbe1c);
            }
    }), assertArrayEquals([
        0x1115 * -0x2 + 0x99d * -0x1 + -0x2bc7 * -0x1,
        -0x510 + 0x1663 * -0x1 + 0x1b74,
        -0x203f + -0xc6b + -0x772 * -0x6,
        -0x1 * 0x2ed + 0x188b + -0x159b,
        -0x2b * 0x1 + -0x47 * 0x6a + 0x1d95 * 0x1
    ], _0x104ede);
}(), function TestMapForEachNestedNonTrivialTransition() {
    var _0x53d858 = new Map();
    _0x53d858['set'](-0x1324 + 0x6 * -0x621 + 0x37ea, 0x1fb6 + 0x188c * 0x1 + -0x3842 * 0x1), _0x53d858['set'](-0x724 * 0x1 + -0x24db + -0x2c00 * -0x1, -0x1de9 + -0x201d * 0x1 + -0x3 * -0x14ad), _0x53d858['set'](-0x3c5 * -0x1 + 0x1400 + -0x17c3, -0x82b + 0xc2 * 0x9 + 0x15b), _0x53d858['set'](-0x1e * -0x35 + 0x1a5 * -0xc + 0xd89, -0x1 * -0x1b55 + -0x374 * -0x8 + -0x2 * 0x1b79), _0x53d858['delete'](-0x2 * 0x47f + -0x1 * 0x34a + 0xc48);
    var _0x2cfc70 = 0x1ee3 + 0xec9 * -0x1 + -0x101a, _0x43333c = [];
    _0x53d858['forEach'](function (_0x2550ec) {
        if (++_0x2cfc70 > -0x1222 + 0x787 + -0x1 * -0xaa5)
            return;
        _0x43333c['push'](_0x2550ec);
        if (_0x2550ec == 0x167c * -0x1 + -0x102e + 0x26ad) {
            _0x53d858['delete'](-0x822 * 0x1 + -0x15ef + -0x3 * -0xa06);
            for (var _0x4db74d = -0x922 + 0x1794 + -0xe6e; _0x4db74d < -0x999 + 0xa21 + -0x3f * 0x2; _0x4db74d++) {
                _0x53d858['set'](_0x4db74d, _0x4db74d);
            }
            for (var _0x4db74d = -0x12 * 0x29 + -0x244 * 0x5 + 0xe3a * 0x1; _0x4db74d < 0x243d * -0x1 + 0x779 * 0x1 + 0x6 * 0x4cd; _0x4db74d += 0xa * -0xc7 + -0x8 * -0x2b7 + -0xdf0) {
                _0x53d858['delete'](_0x4db74d);
            }
            _0x53d858['delete'](0x1d3b + -0x2 * -0x751 + 0x2bdb * -0x1);
            for (var _0x4db74d = 0x175b + -0xdf1 + -0x960; _0x4db74d < 0x21bd + -0x2 * -0xc7 + 0x2337 * -0x1; _0x4db74d++) {
                _0x53d858['set'](_0x4db74d, _0x4db74d);
            }
            for (var _0x4db74d = -0x1 * -0x14c6 + 0xa * 0xed + -0x1dfe; _0x4db74d < 0x5 * -0x75a + 0xe8b + 0x164b; _0x4db74d += 0x4a8 + -0x1e * -0xa3 + 0x4c * -0x50) {
                _0x53d858['delete'](_0x4db74d);
            }
            _0x53d858['delete'](-0x77 * 0x53 + 0x161 * 0x3 + 0x2275);
        }
    }), assertArrayEquals([
        -0x1 * 0x2072 + 0x1 * -0x1b40 + -0x20f * -0x1d,
        0x73b * -0x5 + -0x1 * 0x16b2 + 0x3adb,
        -0x14a6 * 0x1 + 0x1 * 0x7c9 + -0x1 * -0xce0,
        -0x24ca + 0x1 * -0x25ad + -0x129f * -0x4,
        0xb * 0x346 + 0x2522 + -0x491d,
        -0x101d + -0x224f + 0x3275,
        -0x1829 + -0x1 * 0x1881 + -0x25 * -0x151,
        0x3b1 + -0x525 + -0x37 * -0x7,
        -0xc53 + -0x59f * -0x4 + -0xa1a * 0x1,
        -0x77c * -0x2 + 0x6 * 0x133 + -0x1619
    ], _0x43333c);
}(), function TestMapForEachAllRemovedTransitionNoClear() {
    var _0x359baf = new Map();
    _0x359baf['set'](-0x1ef9 + 0x1 * -0x68c + 0x235 * 0x11, -0x2 * 0x1261 + -0x38e + -0x204 * -0x14);
    var _0x47393 = [];
    _0x359baf['forEach'](function (_0x479928) {
        _0x47393['push'](_0x479928);
        if (_0x479928 === -0x12a * -0xc + 0x14e5 + -0x22dd)
            for (var _0x51b12a = -0x55e * 0x1 + -0xb * 0x107 + 0x10ac; _0x51b12a < 0x6fb * 0x2 + 0xad6 + 0x18c4 * -0x1; _0x51b12a++) {
                _0x359baf['set'](_0x51b12a, _0x51b12a);
            }
        if (_0x479928 === 0x2a1 + -0x2 * 0x2b7 + -0x1 * -0x2d1)
            for (var _0x51b12a = -0x11ce + -0x325 + 0x14f3; _0x51b12a < 0x50b + -0x3e * -0xa + 0x76f * -0x1; _0x51b12a++) {
                _0x359baf['delete'](_0x51b12a);
            }
    }), assertArrayEquals([
        0x1 * -0x1a1a + 0xb0 * -0x12 + 0x267a * 0x1,
        0x2 * 0xc91 + 0x13 * 0x155 + -0x3270,
        0x269e * 0x1 + 0xb17 * 0x1 + -0x31b3,
        -0x43 * 0x69 + 0x8 * -0x31c + 0x345e * 0x1,
        -0xf9 + -0x1 * 0x771 + 0x2 * 0x437
    ], _0x47393);
}(), function TestMapForEachNoMoreElementsAfterTransition() {
    var _0x4de52f = new Map();
    _0x4de52f['set'](-0x234b + -0x10a4 * -0x2 + 0x67 * 0x5, -0x1 * 0x106d + 0x1 * -0x2105 + 0x3172);
    var _0x296b51 = [];
    _0x4de52f['forEach'](function (_0x4c5c50) {
        _0x296b51['push'](_0x4c5c50);
        if (_0x4c5c50 === -0x2ea * -0x6 + 0xe42 + -0x1fbe)
            for (var _0x4769db = -0x29 * 0x18 + -0x1216 + -0x15ef * -0x1; _0x4769db < 0xe * 0x1f9 + -0x5 * -0x413 + 0x1 * -0x2fed; _0x4769db++) {
                _0x4de52f['set'](_0x4769db, _0x4769db);
            }
        if (_0x4c5c50 === -0x3 * 0x39a + 0x1b52 * 0x1 + -0x1080)
            for (var _0x4769db = 0x265d + 0x2467 + -0x2b * 0x1bd; _0x4769db < 0x22a2 + 0x3 * 0x34a + -0x2c70; _0x4769db++) {
                _0x4de52f['delete'](_0x4769db);
            }
    }), assertArrayEquals([
        0x41 * -0x8f + 0x158e + 0xec1,
        -0x1 * 0xf4 + 0x277 + -0x182,
        -0x334 * -0x4 + 0x49 * 0x51 + -0x23e7,
        -0x100b + 0xc21 + 0x3ed,
        -0x1b07 + -0xb4b * 0x1 + 0x2 * 0x132b
    ], _0x296b51);
}(), function TestMapForEachReceiverAsObject() {
    var _0xa077ae = new Map();
    _0xa077ae['set']('key1', 'value1'), _0xa077ae['set']('key2', 'value2');
    var _0xd976e1 = [];
    _0xa077ae['forEach'](function () {
        _0xd976e1['push'](this);
    }, ''), assertTrue(_0xd976e1[0x3 * 0x9f2 + -0x52 * -0x67 + -0x3ed4 * 0x1] !== _0xd976e1[0x168e + 0x9 * -0xac + -0x19 * 0xa9]), _0xd976e1 = [], _0xa077ae['forEach'](function () {
        _0xd976e1['push'](this);
    }, {}), assertEquals(_0xd976e1[-0xf82 * -0x1 + -0x1 * 0xa4f + -0x533], _0xd976e1[0x23 * -0xa9 + -0x2 * 0x579 + 0x220e * 0x1]);
}(), function TestMapForEachReceiverAsObjectInStrictMode() {
    var _0xe9083b = new Map();
    _0xe9083b['set']('key1', 'value1'), _0xe9083b['set']('key2', 'value2');
    var _0x7ed2fd = [];
    _0xe9083b['forEach'](function () {
        'use strict';
        _0x7ed2fd['push'](this);
    }, ''), assertTrue(_0x7ed2fd[-0x1cf9 + 0x3d * -0x37 + 0x2a14] === '' && _0x7ed2fd[-0x1 * -0x985 + 0x20df + -0x2 * 0x1532] === _0x7ed2fd[-0x7d2 + 0xf07 * -0x1 + 0x249 * 0xa]);
}());
var oneAndTwo = new Map(), k0 = { 'key': 0x0 }, k1 = { 'key': 0x1 }, k2 = { 'key': 0x2 };
oneAndTwo['set'](k1, -0x1973 + 0x52 * 0x29 + -0x26 * -0x53), oneAndTwo['set'](k2, -0xf2c + 0x1c2d * 0x1 + -0xcff);
function TestSetConstructor(_0x1c8b19) {
    var _0x44bf7e = new _0x1c8b19(null);
    assertSize(-0x16a + 0x9aa + -0x840, _0x44bf7e), _0x44bf7e = new _0x1c8b19(undefined), assertSize(-0x2 * 0xd2a + 0x865 * 0x4 + -0xe8 * 0x8, _0x44bf7e), assertThrows(function () {
        new _0x1c8b19({});
    }, TypeError), assertThrows(function () {
        new _0x1c8b19(!![]);
    }, TypeError), assertThrows(function () {
        var _0x5f554f = {};
        _0x5f554f[Symbol['iterator']] = 0x1 * -0x26ae + 0x50 * -0x50 + 0x3fd8, new _0x1c8b19(_0x5f554f);
    }, TypeError), assertThrows(function () {
        var _0x28e525 = {};
        _0x28e525[Symbol['iterator']] = function () {
            return 0x694 + 0xe21 * -0x1 + -0x4f * -0x19;
        }, new _0x1c8b19(_0x28e525);
    }, TypeError);
    var _0x4fa16d = new Set();
    _0x4fa16d['add'](k0), _0x4fa16d['add'](k1), _0x4fa16d['add'](k2), _0x44bf7e = new _0x1c8b19(_0x4fa16d['values']()), assertSize(0x49 * 0x74 + -0x1 * 0x45d + -0x1cb4, _0x44bf7e), assertTrue(_0x44bf7e['has'](k0)), assertTrue(_0x44bf7e['has'](k1)), assertTrue(_0x44bf7e['has'](k2));
}
TestSetConstructor(Set), TestSetConstructor(WeakSet);
function TestSetConstructorAddNotCallable(_0x56bcc2) {
    var _0x17afa6 = _0x56bcc2['prototype']['add'];
    assertThrows(function () {
        _0x56bcc2['prototype']['add'] = 0x240a * 0x1 + -0x1708 + -0x66c * 0x2, new _0x56bcc2(oneAndTwo['values']());
    }, TypeError), _0x56bcc2['prototype']['add'] = _0x17afa6;
}
TestSetConstructorAddNotCallable(Set), TestSetConstructorAddNotCallable(WeakSet);
function TestSetConstructorGetAddOnce(_0x3e96f0) {
    var _0x4bd740 = _0x3e96f0['prototype']['add'], _0x17db7e = -0x5 * -0x30a + -0x25dc + 0x16aa;
    Object['defineProperty'](_0x3e96f0['prototype'], 'add', {
        'get': function () {
            return _0x17db7e++, function () {
            };
        }
    });
    var _0x4ea185 = new _0x3e96f0(oneAndTwo['values']());
    assertEquals(-0x283 * 0x2 + 0x9 * -0x38b + -0xbd * -0x32, _0x17db7e), assertSize(0x8c + 0x3 * -0xbaf + -0x323 * -0xb, _0x4ea185), Object['defineProperty'](_0x3e96f0['prototype'], 'add', {
        'value': _0x4bd740,
        'writable': !![]
    });
}
TestSetConstructorGetAddOnce(Set), TestSetConstructorGetAddOnce(WeakSet);
function TestSetConstructorAddReplaced(_0x562767) {
    var _0x16998c = _0x562767['prototype']['add'], _0x2e47da = -0x1352 + -0x6cd * -0x5 + -0xeaf;
    _0x562767['prototype']['add'] = function (_0x3fdee6) {
        _0x2e47da++, _0x16998c['call'](this, _0x3fdee6), _0x562767['prototype']['add'] = null;
    };
    var _0x18efee = new _0x562767(oneAndTwo['keys']());
    assertEquals(0x21cf + -0x15ab + -0xc22, _0x2e47da), assertSize(-0x75c + 0x11e5 + 0x23 * -0x4d, _0x18efee), _0x562767['prototype']['add'] = _0x16998c;
}
TestSetConstructorAddReplaced(Set), TestSetConstructorAddReplaced(WeakSet);
function TestSetConstructorOrderOfDoneValue(_0x130dd4) {
    var _0x4e5218 = 0x145 + 0x1395 + -0x14da, _0x1293c8 = 0x1bca + 0x19cf + -0x3599, _0x436557 = {
            'next': function () {
                return {
                    get 'value'() {
                        _0x4e5218++;
                    },
                    get 'done'() {
                        _0x1293c8++;
                        throw new Error();
                    }
                };
            }
        };
    _0x436557[Symbol['iterator']] = function () {
        return this;
    }, assertThrows(function () {
        new _0x130dd4(_0x436557);
    }), assertEquals(0xeee + -0x2107 + 0x2 * 0x90d, _0x1293c8), assertEquals(0x1f9 * 0x7 + 0x26 * -0xbb + 0x1 * 0xdf3, _0x4e5218);
}
TestSetConstructorOrderOfDoneValue(Set), TestSetConstructorOrderOfDoneValue(WeakSet);
function TestSetConstructorNextNotAnObject(_0x5f4c52) {
    var _0x1e3df1 = {
        'next': function () {
            return 'abc';
        }
    };
    _0x1e3df1[Symbol['iterator']] = function () {
        return this;
    }, assertThrows(function () {
        new _0x5f4c52(_0x1e3df1);
    }, TypeError);
}
TestSetConstructorNextNotAnObject(Set), TestSetConstructorNextNotAnObject(WeakSet), function TestWeakSetConstructorNonObjectKeys() {
    assertThrows(function () {
        new WeakSet([0x5 * 0x27a + -0xe9 * -0x2a + -0x329b]);
    }, TypeError);
}();
function TestSetConstructorIterableValue(_0xe3edd2) {
    'use strict';
    Object['defineProperty'](Number['prototype'], Symbol['iterator'], {
        'get': function () {
            return assertEquals('number', typeof this), function () {
                return assertEquals('number', typeof this), oneAndTwo['keys']();
            };
        },
        'configurable': !![]
    });
    var _0x432ed8 = new _0xe3edd2(0x15fc + -0x36d * -0x1 + 0x193f * -0x1);
    assertSize(0x1 * -0x8df + 0x189f + -0xfbe, _0x432ed8), assertTrue(_0x432ed8['has'](k1)), assertTrue(_0x432ed8['has'](k2)), delete Number['prototype'][Symbol['iterator']];
}
TestSetConstructorIterableValue(Set), TestSetConstructorIterableValue(WeakSet), function TestSetConstructorStringValue() {
    var _0x23de52 = new Set('abc');
    assertSize(0x1 * -0x14bc + -0x46 + -0x1505 * -0x1, _0x23de52), assertTrue(_0x23de52['has']('a')), assertTrue(_0x23de52['has']('b')), assertTrue(_0x23de52['has']('c'));
}();
function TestMapConstructor(_0x267d2e) {
    var _0x1c5022 = new _0x267d2e(null);
    assertSize(-0x1ee9 * -0x1 + 0x1634 + -0x1 * 0x351d, _0x1c5022), _0x1c5022 = new _0x267d2e(undefined), assertSize(-0x2406 + -0x205c + 0x4462, _0x1c5022), assertThrows(function () {
        new _0x267d2e({});
    }, TypeError), assertThrows(function () {
        new _0x267d2e(!![]);
    }, TypeError), assertThrows(function () {
        var _0x20c4b2 = {};
        _0x20c4b2[Symbol['iterator']] = 0x8a7 * -0x2 + -0x110e + 0x2286, new _0x267d2e(_0x20c4b2);
    }, TypeError), assertThrows(function () {
        var _0x2573b3 = {};
        _0x2573b3[Symbol['iterator']] = function () {
            return -0xb89 * -0x1 + -0x67a + -0x4e5;
        }, new _0x267d2e(_0x2573b3);
    }, TypeError);
    var _0xd6d9f5 = new Map();
    _0xd6d9f5['set'](k0, 'a'), _0xd6d9f5['set'](k1, 'b'), _0xd6d9f5['set'](k2, 'c'), _0x1c5022 = new _0x267d2e(_0xd6d9f5['entries']()), assertSize(-0x1ac6 + 0x1 * 0xa85 + 0x4 * 0x411, _0x1c5022), assertEquals('a', _0x1c5022['get'](k0)), assertEquals('b', _0x1c5022['get'](k1)), assertEquals('c', _0x1c5022['get'](k2));
}
TestMapConstructor(Map), TestMapConstructor(WeakMap);
function TestMapConstructorSetNotCallable(_0x439a08) {
    var _0x502ce6 = _0x439a08['prototype']['set'];
    assertThrows(function () {
        _0x439a08['prototype']['set'] = 0x1af4 * 0x1 + -0x67 + -0x1a63, new _0x439a08(oneAndTwo['entries']());
    }, TypeError), _0x439a08['prototype']['set'] = _0x502ce6;
}
TestMapConstructorSetNotCallable(Map), TestMapConstructorSetNotCallable(WeakMap);
function TestMapConstructorGetAddOnce(_0x30e13f) {
    var _0x3c5544 = _0x30e13f['prototype']['set'], _0x5ede75 = 0xcb0 + -0x1d * -0xd3 + 0x1d * -0x143;
    Object['defineProperty'](_0x30e13f['prototype'], 'set', {
        'get': function () {
            return _0x5ede75++, function () {
            };
        }
    });
    var _0x16ca00 = new _0x30e13f(oneAndTwo['entries']());
    assertEquals(0x1 * 0x1331 + 0x137 * 0x2 + -0x159e, _0x5ede75), assertSize(-0x14fd + -0x3a5 + -0x18a2 * -0x1, _0x16ca00), Object['defineProperty'](_0x30e13f['prototype'], 'set', {
        'value': _0x3c5544,
        'writable': !![]
    });
}
TestMapConstructorGetAddOnce(Map), TestMapConstructorGetAddOnce(WeakMap);
function TestMapConstructorSetReplaced(_0x2a63a4) {
    var _0x3ba20b = _0x2a63a4['prototype']['set'], _0x2c0afb = -0x1 * -0x1e7 + 0x1bf8 + -0x1ddf;
    _0x2a63a4['prototype']['set'] = function (_0x435cfc, _0x4fc811) {
        _0x2c0afb++, _0x3ba20b['call'](this, _0x435cfc, _0x4fc811), _0x2a63a4['prototype']['set'] = null;
    };
    var _0x53bfbb = new _0x2a63a4(oneAndTwo['entries']());
    assertEquals(-0x1 * 0x1e3b + 0x1 * -0x15d7 + -0xd05 * -0x4, _0x2c0afb), assertSize(-0x14e * -0x1c + 0x65 * -0x4a + 0x7 * -0x10c, _0x53bfbb), _0x2a63a4['prototype']['set'] = _0x3ba20b;
}
TestMapConstructorSetReplaced(Map), TestMapConstructorSetReplaced(WeakMap);
function TestMapConstructorOrderOfDoneValue(_0x36d60c) {
    var _0x2b34f7 = -0x2 * -0x74c + -0x15e1 + 0x1 * 0x749, _0x36d1d5 = -0x1 * 0x1c93 + -0xc25 + 0x28b8;
    function _0x2b0e7f() {
    }
    var _0x56f798 = {
        'next': function () {
            return {
                get 'value'() {
                    _0x2b34f7++;
                },
                get 'done'() {
                    _0x36d1d5++;
                    throw new _0x2b0e7f();
                }
            };
        }
    };
    _0x56f798[Symbol['iterator']] = function () {
        return this;
    }, assertThrows(function () {
        new _0x36d60c(_0x56f798);
    }, _0x2b0e7f), assertEquals(-0x1a1a + 0x5e3 + 0x1438, _0x36d1d5), assertEquals(-0x1 * 0x2467 + 0x1580 + -0x221 * -0x7, _0x2b34f7);
}
TestMapConstructorOrderOfDoneValue(Map), TestMapConstructorOrderOfDoneValue(WeakMap);
function TestMapConstructorNextNotAnObject(_0x156556) {
    var _0x5e29ba = {
        'next': function () {
            return 'abc';
        }
    };
    _0x5e29ba[Symbol['iterator']] = function () {
        return this;
    }, assertThrows(function () {
        new _0x156556(_0x5e29ba);
    }, TypeError);
}
TestMapConstructorNextNotAnObject(Map), TestMapConstructorNextNotAnObject(WeakMap);
function TestMapConstructorIteratorNotObjectValues(_0x40e6a1) {
    assertThrows(function () {
        new _0x40e6a1(oneAndTwo['values']());
    }, TypeError);
}
TestMapConstructorIteratorNotObjectValues(Map), TestMapConstructorIteratorNotObjectValues(WeakMap), function TestWeakMapConstructorNonObjectKeys() {
    assertThrows(function () {
        new WeakMap([[
                0x3d * -0x75 + -0x11 * 0xa4 + -0x2 * -0x1363,
                -0x12fe + -0x1 * -0x2681 + -0x1381
            ]]);
    }, TypeError);
}();
function TestMapConstructorIterableValue(_0x25a06c) {
    'use strict';
    Object['defineProperty'](Number['prototype'], Symbol['iterator'], {
        'get': function () {
            return assertEquals('number', typeof this), function () {
                return assertEquals('number', typeof this), oneAndTwo['entries']();
            };
        },
        'configurable': !![]
    });
    var _0x4fce3c = new _0x25a06c(0x2 * -0x287 + 0x6f2 + 0x11 * -0x1a);
    assertSize(0x2024 + -0xa85 + -0x159d, _0x4fce3c), assertEquals(-0x17cc * 0x1 + -0x1e09 + 0x35d6, _0x4fce3c['get'](k1)), assertEquals(0xb * 0x1d0 + -0x1b * 0x13 + -0x11ed, _0x4fce3c['get'](k2)), delete Number['prototype'][Symbol['iterator']];
}
TestMapConstructorIterableValue(Map), TestMapConstructorIterableValue(WeakMap);
function TestCollectionToString(_0x18653d) {
    assertEquals('[object\x20' + _0x18653d['name'] + ']', Object['prototype']['toString']['call'](new _0x18653d()));
}
TestCollectionToString(Map), TestCollectionToString(Set), TestCollectionToString(WeakMap), TestCollectionToString(WeakSet);
function TestConstructorOrderOfAdderIterator(_0x4c540e, _0x1e4e2f) {
    var _0x3e8790 = new Map();
    _0x3e8790['set']({}, {}), _0x3e8790['set']({}, {});
    var _0x5605ea = _0x3e8790[Symbol['iterator']];
    Object['defineProperty'](_0x3e8790, Symbol['iterator'], {
        'get': function () {
            return _0x5226f8 += 'iterator', _0x5605ea;
        }
    });
    var _0x5226f8 = '', _0x29bea8 = _0x4c540e['prototype'][_0x1e4e2f];
    Object['defineProperty'](_0x4c540e['prototype'], _0x1e4e2f, {
        'get': function () {
            return _0x5226f8 += _0x1e4e2f, _0x29bea8;
        }
    }), new _0x4c540e(_0x3e8790), assertEquals(_0x1e4e2f + 'iterator', _0x5226f8), Object['defineProperty'](_0x4c540e['prototype'], _0x1e4e2f, { 'value': _0x29bea8 });
}
TestConstructorOrderOfAdderIterator(Map, 'set'), TestConstructorOrderOfAdderIterator(Set, 'add'), TestConstructorOrderOfAdderIterator(WeakMap, 'set'), TestConstructorOrderOfAdderIterator(WeakSet, 'add');
