function testStringify(_0x339485, _0x3d7f69) {
    var _0x419d43 = _0x3ced;
    assertEquals(_0x339485, JSON[_0x419d43(442)](_0x3d7f69)), assertEquals(_0x339485, JSON[_0x419d43(442)](_0x3d7f69, (_0x16523a, _0x54832c) => _0x54832c)), assertEquals(JSON['stringify'](_0x3d7f69, null, '='), JSON['stringify'](_0x3d7f69, (_0x49a317, _0xc0772) => _0xc0772, '='));
}
var handler1 = {
        'get': function (_0x28547c, _0x25bafd) {
            var _0x2bdc21 = _0x3ced;
            return _0x25bafd[_0x2bdc21(443)]();
        },
        'ownKeys': function () {
            return [
                'a',
                'b',
                'c'
            ];
        },
        'getOwnPropertyDescriptor': function () {
            return {
                'enumerable': !![],
                'configurable': !![]
            };
        }
    }, proxy1 = new Proxy({}, handler1);
testStringify(_0x157eaf(444), proxy1);
var proxy_fun = new Proxy(() => {
}, handler1);
assertTrue(typeof proxy_fun === 'function'), testStringify(undefined, proxy_fun), testStringify(_0x157eaf(445), [
    1,
    proxy_fun
]), handler1[_0x157eaf(446)] = function () {
    return 666;
}, testStringify(undefined, proxy_fun), testStringify(_0x157eaf(445), [
    1,
    proxy_fun
]);
var parent1a = { 'b': proxy1 };
testStringify(_0x157eaf(447), parent1a), testStringify(_0x157eaf(447), parent1a);
var parent1b = {
    'a': 123,
    'b': proxy1,
    'c': !![]
};
testStringify(_0x157eaf(448), parent1b);
function _0x3ced(_0x436f90, _0x21b948) {
    return _0x3ced = function (_0x4974d7, _0x3ced5f) {
        _0x4974d7 = _0x4974d7 - 432;
        var _0x17a474 = _0x4974[_0x4974d7];
        return _0x17a474;
    }, _0x3ced(_0x436f90, _0x21b948);
}
var parent1c = [
    123,
    proxy1,
    !![]
];
testStringify('[123,{"a":"A","b":"B","c":"C"},true]', parent1c);
var handler2 = {
        'get': function (_0x1d7c67, _0x3e08bb) {
            var _0x4d02f9 = _0x157eaf;
            return delete parent2['c'], _0x3e08bb[_0x4d02f9(443)]();
        },
        'ownKeys': function () {
            return [
                'a',
                'b',
                'c'
            ];
        },
        'getOwnPropertyDescriptor': function () {
            return {
                'enumerable': !![],
                'configurable': !![]
            };
        }
    }, proxy2 = new Proxy({}, handler2), parent2 = {
        'a': 'delete',
        'b': proxy2,
        'c': 'remove'
    }, expected2 = _0x157eaf(449);
assertEquals(expected2, JSON[_0x157eaf(442)](parent2)), parent2['c'] = _0x157eaf(450), assertEquals(expected2, JSON[_0x157eaf(442)](parent2, undefined, 0));
var handler3 = {
        'get': function (_0x401170, _0xde89d1, _0x3c34c8) {
            var _0x1a0eca = _0x157eaf;
            if (_0xde89d1 == _0x1a0eca(451) || _0xde89d1 === Symbol[_0x1a0eca(452)])
                return function () {
                    var _0x960b0d = _0x1a0eca;
                    return _0x960b0d(453);
                };
            ;
            if (typeof _0xde89d1 !== _0x1a0eca(454))
                return _0xde89d1 + '(' + _0x3c34c8 + ')';
        },
        'ownKeys': function () {
            return [
                'a',
                'b',
                'c'
            ];
        },
        'getOwnPropertyDescriptor': function () {
            return {
                'enumerable': !![],
                'configurable': !![]
            };
        }
    }, proxy3 = new Proxy({}, handler3), parent3 = {
        'x': 123,
        'y': proxy3
    };
testStringify(_0x157eaf(455), parent3);
var handler4 = {
        'get': function (_0x5a59cb, _0x5d059e) {
            return 0;
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0x3f4184, _0x1b8922) {
            return { 'enumerable': ![] };
        }
    }, proxy4 = new Proxy({}, handler4);
testStringify('{}', proxy4), testStringify(_0x157eaf(456), { 'a': proxy4 });
var handler5 = {
        'get': function (_0x496dc1, _0x4a3b36) {
            if (_0x4a3b36 == 'z')
                return 97000;
            return function (_0x3f58b7) {
                var _0x31bec9 = _0x3ced;
                return _0x3f58b7[_0x31bec9(457)](0) + this['z'];
            };
        },
        'ownKeys': function (_0x4be590) {
            return [
                'toJSON',
                'z'
            ];
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0x294425, _0x28f92a) {
            return { 'enumerable': !![] };
        }
    }, proxy5 = new Proxy({}, handler5);
testStringify(_0x157eaf(458), { 'a': proxy5 });
var handler6 = {
        'get': function (_0x330f95, _0x422eb0) {
            return function (_0x182038) {
                return undefined;
            };
        },
        'ownKeys': function (_0x1535e0) {
            var _0x1c90d9 = _0x157eaf;
            return [_0x1c90d9(459)];
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0x46a09e, _0x3bf1ff) {
            return { 'enumerable': !![] };
        }
    }, proxy6 = new Proxy({}, handler6);
testStringify('[1,null,true]', [
    1,
    proxy6,
    !![]
]), testStringify(_0x157eaf(460), {
    'a': 1,
    'b': proxy6,
    'c': !![]
});
var handler7 = {
        'get': function (_0x5a8dca, _0x5d8633) {
            var _0x33dfea = _0x157eaf;
            return delete parent7['a'], delete parent7['c'], parent7['e'] = '5', _0x5d8633[_0x33dfea(443)]();
        },
        'ownKeys': function () {
            return [
                'a',
                'b',
                'c'
            ];
        },
        'getOwnPropertyDescriptor': function () {
            return {
                'enumerable': !![],
                'configurable': !![]
            };
        }
    }, proxy7 = new Proxy({}, handler7), parent7 = {
        'a': '1',
        'b': proxy7,
        'c': '3',
        'd': '4'
    };
assertEquals(_0x157eaf(461), JSON[_0x157eaf(442)](parent7)), assertEquals(_0x157eaf(462), JSON[_0x157eaf(442)](parent7));
var log = [], logger = {}, handler = new Proxy({}, logger);
logger[_0x157eaf(463)] = function (_0x1f8b09, _0x42f20f, _0x2a4d8d) {
    return function () {
        var _0x41893c = _0x3ced;
        return log[_0x41893c(464)]([
            _0x42f20f,
            ...arguments
        ]), Reflect[_0x42f20f](...arguments);
    };
}, log[_0x157eaf(465)] = 0;
var target = () => 42, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x157eaf(466)), assertEquals(undefined, JSON[_0x157eaf(442)](proxy)), assertEquals(1, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    _0x157eaf(463),
    target,
    'toJSON',
    proxy
], log[0]), log[_0x157eaf(465)] = 0;
var target = { 'foo': 42 }, proxy = new Proxy(target, handler);
assertFalse(Array[_0x157eaf(467)](proxy)), assertEquals(_0x157eaf(468), JSON[_0x157eaf(442)](proxy)), assertEquals(4, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    _0x157eaf(463),
    target,
    _0x157eaf(459),
    proxy
], log[0]), assertEquals([
    _0x157eaf(469),
    target
], log[1]), assertEquals([
    _0x157eaf(470),
    target,
    _0x157eaf(471)
], log[2]), assertEquals([
    _0x157eaf(463),
    target,
    _0x157eaf(471),
    proxy
], log[3]), log['length'] = 0;
var target = [42], proxy = new Proxy(target, handler);
assertTrue(Array[_0x157eaf(467)](proxy)), assertEquals(_0x157eaf(472), JSON[_0x157eaf(442)](proxy)), assertEquals(3, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    _0x157eaf(463),
    target,
    'toJSON',
    proxy
], log[0]), assertEquals([
    'get',
    target,
    _0x157eaf(465),
    proxy
], log[1]), assertEquals([
    _0x157eaf(463),
    target,
    '0',
    proxy
], log[2]), log[_0x157eaf(465)] = 0;
var object = {
        0: 'foo',
        1: 666
    }, target = (_0x26e987, _0x5877e5) => _0x26e987 == '1' ? _0x5877e5 + 42 : _0x5877e5, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x157eaf(466)), assertEquals('{"0":"foo","1":708}', JSON[_0x157eaf(442)](object, proxy)), assertEquals(3, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals(4, log[0][_0x157eaf(465)]), assertEquals(_0x157eaf(446), log[0][0]), assertEquals('', log[0][3][0]), assertEquals({
    0: _0x157eaf(471),
    1: 666
}, log[0][3][1]), assertEquals(4, log[1][_0x157eaf(465)]), assertEquals(_0x157eaf(446), log[1][0]), assertEquals([
    '0',
    'foo'
], log[1][3]), assertEquals(4, log[2]['length']), assertEquals(_0x157eaf(446), log[2][0]), assertEquals([
    '1',
    666
], log[2][3]), log[_0x157eaf(465)] = 0;
var object = {
        0: _0x157eaf(471),
        1: 666
    }, target = [0], proxy = new Proxy(target, handler);
assertTrue(Array[_0x157eaf(467)](proxy)), assertEquals(_0x157eaf(473), JSON['stringify'](object, proxy)), assertEquals(2, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'get',
    target,
    _0x157eaf(465),
    proxy
], log[0]), assertEquals([
    _0x157eaf(463),
    target,
    '0',
    proxy
], log[1]), log[_0x157eaf(465)] = 0;
var object = [
        _0x157eaf(471),
        42
    ], target = [0], proxy = new Proxy(target, handler);
assertTrue(Array['isArray'](proxy)), assertEquals(_0x157eaf(474), JSON[_0x157eaf(442)](object, proxy)), assertEquals(2, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    _0x157eaf(463),
    target,
    _0x157eaf(465),
    proxy
], log[0]), assertEquals([
    _0x157eaf(463),
    target,
    '0',
    proxy
], log[1]);
var getTrap = function (_0x392a4f, _0x1e34f6) {
        var _0x1d80f9 = _0x157eaf;
        if (_0x1e34f6 === _0x1d80f9(465))
            return {
                [Symbol[_0x1d80f9(452)]]() {
                    return 42;
                }
            };
        if (_0x1e34f6 === '41')
            return _0x1d80f9(471);
        if (_0x1e34f6 === '42')
            return _0x1d80f9(475);
    }, target = [], proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array[_0x157eaf(467)](proxy));
var object = {
    'foo': !![],
    'bar': 666
};
assertEquals(_0x157eaf(476), JSON[_0x157eaf(442)](object, proxy));
var getTrap = function (_0x1ab767, _0x57b6ae) {
        var _0x1d5a07 = _0x157eaf;
        if (_0x57b6ae === 'length')
            return Symbol();
        if (_0x57b6ae === '41')
            return _0x1d5a07(471);
        if (_0x57b6ae === '42')
            return _0x1d5a07(475);
    }, target = [], proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array[_0x157eaf(467)](proxy));
var object = {
    'foo': !![],
    'bar': 666
};
assertThrows(() => JSON['stringify'](object, proxy), TypeError), log[_0x157eaf(465)] = 0;
var object = [
        _0x157eaf(471),
        42
    ], target = { 'baz': 5 }, proxy = new Proxy(target, handler), replacer = (_0x18352c, _0x102b94) => _0x18352c === '1' ? proxy : _0x102b94;
assertEquals(_0x157eaf(477), JSON[_0x157eaf(442)](object, replacer)), assertEquals(3, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    _0x157eaf(469),
    target
], log[0]), assertEquals([
    'getOwnPropertyDescriptor',
    target,
    _0x157eaf(478)
], log[1]), log[_0x157eaf(465)] = 0;
var object = [
        'foo',
        42
    ], target = [_0x157eaf(475)], proxy = new Proxy(target, handler), replacer = (_0x4f2baf, _0x22a12c) => _0x4f2baf === '1' ? proxy : _0x22a12c;
assertEquals(_0x157eaf(479), JSON[_0x157eaf(442)](object, replacer)), assertEquals(2, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    _0x157eaf(463),
    target,
    'length',
    proxy
], log[0]), assertEquals([
    'get',
    target,
    '0',
    proxy
], log[1]);
var getTrap = function (_0x20f7e6, _0x18f87e) {
        var _0xb09c74 = _0x157eaf;
        if (_0x18f87e === _0xb09c74(465))
            return {
                [Symbol['toPrimitive']]() {
                    return 3;
                }
            };
        if (_0x18f87e === '2')
            return _0xb09c74(478);
        if (_0x18f87e === '3')
            return _0xb09c74(475);
    }, target = [], proxy = new Proxy(target, { 'get': getTrap }), replacer = (_0x590fc5, _0x391d0b) => _0x590fc5 === _0x157eaf(480) ? proxy : _0x391d0b, object = {
        'foo': !![],
        'goo': ![]
    };
assertEquals(_0x157eaf(481), JSON[_0x157eaf(442)](object, replacer));
var getTrap = function (_0xd65b5b, _0x18d506) {
        var _0x1a878f = _0x157eaf;
        if (_0x18d506 === _0x1a878f(465))
            return Symbol();
        if (_0x18d506 === '2')
            return _0x1a878f(478);
        if (_0x18d506 === '3')
            return _0x1a878f(475);
    }, target = [], proxy = new Proxy(target, { 'get': getTrap }), replacer = (_0x24e1e2, _0xdd5d95) => _0x24e1e2 === _0x157eaf(480) ? proxy : _0xdd5d95, object = {
        'foo': !![],
        'goo': ![]
    };
assertThrows(() => JSON[_0x157eaf(442)](object, replacer), TypeError), log[_0x157eaf(465)] = 0;
var target = () => 666, proxy = new Proxy(target, handler), replacer = (_0x5a1603, _0x573d76) => _0x5a1603 === '1' ? proxy : _0x573d76;
assertEquals(_0x157eaf(482), JSON[_0x157eaf(442)]([
    _0x157eaf(471),
    42
], replacer)), assertEquals(0, log['length']), assertEquals(_0x157eaf(473), JSON[_0x157eaf(442)]({
    0: _0x157eaf(471),
    1: 42
}, replacer)), assertEquals(0, log[_0x157eaf(465)]), log[_0x157eaf(465)] = 0;
var target = () => 42, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x157eaf(466)), assertEquals(42, JSON['parse'](_0x157eaf(483), proxy)), assertEquals(3, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals(4, log[0][_0x157eaf(465)]), assertEquals('apply', log[0][0]), assertEquals([
    '0',
    !![]
], log[0][3]), assertEquals(4, log[1][_0x157eaf(465)]), assertEquals('apply', log[1][0]), assertEquals([
    '1',
    ![]
], log[1][3]), assertEquals(4, log[2][_0x157eaf(465)]), assertEquals(_0x157eaf(446), log[2][0]), assertEquals([
    '',
    [
        42,
        42
    ]
], log[2][3]), log['length'] = 0;
var target = { 'baz': 42 }, proxy = new Proxy(target, handler), reviver = function (_0xad3e85, _0x182495) {
        var _0x527013 = _0x157eaf;
        if (_0xad3e85 === _0x527013(478))
            return 5;
        if (_0xad3e85 === _0x527013(471))
            this['bar'] = proxy;
        return _0x182495;
    };
assertEquals({
    'foo': 0,
    'bar': proxy
}, JSON['parse'](_0x157eaf(484), reviver)), assertEquals(4, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'ownKeys',
    target
], log[0]), assertEquals([
    _0x157eaf(470),
    target,
    'baz'
], log[1]), assertEquals([
    _0x157eaf(463),
    target,
    _0x157eaf(478),
    proxy
], log[2]), assertEquals([
    _0x157eaf(485),
    target,
    'baz',
    {
        'value': 5,
        'configurable': !![],
        'writable': !![],
        'enumerable': !![]
    }
], log[3]), log[_0x157eaf(465)] = 0;
var target = [42], proxy = new Proxy(target, handler);
assertTrue(Array['isArray'](proxy));
var reviver = function (_0x2be076, _0x1dfaae) {
        var _0x39e357 = _0x157eaf;
        if (_0x2be076 === '0')
            return undefined;
        if (_0x2be076 === _0x39e357(471))
            this['bar'] = proxy;
        return _0x1dfaae;
    }, result = JSON[_0x157eaf(486)]('{"foo":0,"bar":1}', reviver);
assertEquals({
    'foo': 0,
    'bar': proxy
}, result), assertSame(result[_0x157eaf(475)], proxy), assertEquals(3, log[_0x157eaf(465)]);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'get',
    target,
    _0x157eaf(465),
    proxy
], log[0]), assertEquals([
    _0x157eaf(463),
    target,
    '0',
    proxy
], log[1]), assertEquals([
    'deleteProperty',
    target,
    '0'
], log[2]), proxy = new Proxy([], {
    'get': function (_0x509caf, _0x53506f) {
        var _0x2671e4 = _0x157eaf;
        if (_0x53506f == _0x2671e4(465))
            return 7;
        return 0;
    }
}), assertEquals(_0x157eaf(487), JSON[_0x157eaf(442)]([proxy])), proxy = new Proxy([], {
    'get': function (_0x2ec6e6, _0x406168) {
        var _0x21353c = _0x157eaf;
        if (_0x406168 == _0x21353c(465))
            return 1e+40;
        return 0;
    }
}), assertThrows(() => JSON[_0x157eaf(442)]([proxy]), RangeError), log = [], proxy = new Proxy({}, {
    'ownKeys': function () {
        var _0x4a8ccf = _0x157eaf;
        return log[_0x4a8ccf(464)]('ownKeys'), [
            '0',
            'a',
            'b'
        ];
    },
    'get': function (_0x19316c, _0xf87881) {
        var _0x486afa = _0x157eaf;
        return log[_0x486afa(464)]('get ' + _0xf87881), _0xf87881['toUpperCase']();
    },
    'getOwnPropertyDescriptor': function (_0x578715, _0x11c0b3) {
        var _0x3778eb = _0x157eaf;
        return log['push'](_0x3778eb(488) + _0x11c0b3), {
            'enumerable': !![],
            'configurable': !![]
        };
    },
    'isExtensible': assertUnreachable,
    'has': assertUnreachable,
    'getPrototypeOf': assertUnreachable,
    'setPrototypeOf': assertUnreachable,
    'preventExtensions': assertUnreachable,
    'setPrototypeOf': assertUnreachable,
    'defineProperty': assertUnreachable,
    'set': assertUnreachable,
    'deleteProperty': assertUnreachable,
    'apply': assertUnreachable,
    'construct': assertUnreachable
}), assertEquals(_0x157eaf(489), JSON['stringify']([proxy])), assertEquals([
    _0x157eaf(490),
    _0x157eaf(469),
    _0x157eaf(491),
    _0x157eaf(492),
    'descriptor b',
    _0x157eaf(493),
    'get a',
    _0x157eaf(494)
], log);