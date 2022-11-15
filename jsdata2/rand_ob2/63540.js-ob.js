var _0x4974 = [
    'descriptor\x20a',
    'get\x200',
    'get\x20b',
    '977119OvlgfS',
    '1389189litOqK',
    '1091581lZtdLy',
    '1noFXTH',
    '1wGdJse',
    '1504606lroWgt',
    '1167924eMNrPe',
    '473407WsfzZt',
    '3EIFvuQ',
    '2890607hMKRnl',
    'stringify',
    'toUpperCase',
    '{\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22,\x22c\x22:\x22C\x22}',
    '[1,null]',
    'apply',
    '{\x22b\x22:{\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22,\x22c\x22:\x22C\x22}}',
    '{\x22a\x22:123,\x22b\x22:{\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22,\x22c\x22:\x22C\x22},\x22c\x22:true}',
    '{\x22a\x22:\x22delete\x22,\x22b\x22:{\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22,\x22c\x22:\x22C\x22}}',
    'remove',
    'valueOf',
    'toPrimitive',
    'proxy',
    'symbol',
    '{\x22x\x22:123,\x22y\x22:{\x22a\x22:\x22a(proxy)\x22,\x22b\x22:\x22b(proxy)\x22,\x22c\x22:\x22c(proxy)\x22}}',
    '{\x22a\x22:{}}',
    'charCodeAt',
    '{\x22a\x22:97097}',
    'toJSON',
    '{\x22a\x22:1,\x22c\x22:true}',
    '{\x22a\x22:\x221\x22,\x22b\x22:{\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22,\x22c\x22:\x22C\x22},\x22d\x22:\x224\x22}',
    '{\x22b\x22:{\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22,\x22c\x22:\x22C\x22},\x22d\x22:\x224\x22,\x22e\x22:\x225\x22}',
    'get',
    'push',
    'length',
    'function',
    'isArray',
    '{\x22foo\x22:42}',
    'ownKeys',
    'getOwnPropertyDescriptor',
    'foo',
    '[42]',
    '{\x220\x22:\x22foo\x22}',
    '[\x22foo\x22,42]',
    'bar',
    '{\x22foo\x22:true}',
    '[\x22foo\x22,{\x22baz\x22:5}]',
    'baz',
    '[\x22foo\x22,[\x22bar\x22]]',
    'goo',
    '{\x22foo\x22:true,\x22goo\x22:[null,null,\x22baz\x22]}',
    '[\x22foo\x22,null]',
    '[true,\x20false]',
    '{\x22foo\x22:0,\x22bar\x22:1}',
    'defineProperty',
    'parse',
    '[[0,0,0,0,0,0,0]]',
    'descriptor\x20',
    '[{\x220\x22:\x220\x22,\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22}]',
    'get\x20toJSON',
    'descriptor\x200'
];
var _0x157eaf = _0x3ced;
(function (_0x143a01, _0x236ccf) {
    var _0x2d0c2d = _0x3ced;
    while (!![]) {
        try {
            var _0x44ed9f = -parseInt(_0x2d0c2d(0x1b0)) + parseInt(_0x2d0c2d(0x1b1)) + -parseInt(_0x2d0c2d(0x1b2)) * parseInt(_0x2d0c2d(0x1b3)) + -parseInt(_0x2d0c2d(0x1b4)) * parseInt(_0x2d0c2d(0x1b5)) + -parseInt(_0x2d0c2d(0x1b6)) + -parseInt(_0x2d0c2d(0x1b7)) * -parseInt(_0x2d0c2d(0x1b8)) + parseInt(_0x2d0c2d(0x1b9));
            if (_0x44ed9f === _0x236ccf)
                break;
            else
                _0x143a01['push'](_0x143a01['shift']());
        } catch (_0x2b71bf) {
            _0x143a01['push'](_0x143a01['shift']());
        }
    }
}(_0x4974, 0xea143));
function testStringify(_0x339485, _0x3d7f69) {
    var _0x419d43 = _0x3ced;
    assertEquals(_0x339485, JSON[_0x419d43(0x1ba)](_0x3d7f69)), assertEquals(_0x339485, JSON[_0x419d43(0x1ba)](_0x3d7f69, (_0x16523a, _0x54832c) => _0x54832c)), assertEquals(JSON['stringify'](_0x3d7f69, null, '='), JSON['stringify'](_0x3d7f69, (_0x49a317, _0xc0772) => _0xc0772, '='));
}
var handler1 = {
        'get': function (_0x28547c, _0x25bafd) {
            var _0x2bdc21 = _0x3ced;
            return _0x25bafd[_0x2bdc21(0x1bb)]();
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
testStringify(_0x157eaf(0x1bc), proxy1);
var proxy_fun = new Proxy(() => {
}, handler1);
assertTrue(typeof proxy_fun === 'function'), testStringify(undefined, proxy_fun), testStringify(_0x157eaf(0x1bd), [
    0x1,
    proxy_fun
]), handler1[_0x157eaf(0x1be)] = function () {
    return 0x29a;
}, testStringify(undefined, proxy_fun), testStringify(_0x157eaf(0x1bd), [
    0x1,
    proxy_fun
]);
var parent1a = { 'b': proxy1 };
testStringify(_0x157eaf(0x1bf), parent1a), testStringify(_0x157eaf(0x1bf), parent1a);
var parent1b = {
    'a': 0x7b,
    'b': proxy1,
    'c': !![]
};
testStringify(_0x157eaf(0x1c0), parent1b);
function _0x3ced(_0x436f90, _0x21b948) {
    return _0x3ced = function (_0x4974d7, _0x3ced5f) {
        _0x4974d7 = _0x4974d7 - 0x1b0;
        var _0x17a474 = _0x4974[_0x4974d7];
        return _0x17a474;
    }, _0x3ced(_0x436f90, _0x21b948);
}
var parent1c = [
    0x7b,
    proxy1,
    !![]
];
testStringify('[123,{\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22,\x22c\x22:\x22C\x22},true]', parent1c);
var handler2 = {
        'get': function (_0x1d7c67, _0x3e08bb) {
            var _0x4d02f9 = _0x157eaf;
            return delete parent2['c'], _0x3e08bb[_0x4d02f9(0x1bb)]();
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
    }, expected2 = _0x157eaf(0x1c1);
assertEquals(expected2, JSON[_0x157eaf(0x1ba)](parent2)), parent2['c'] = _0x157eaf(0x1c2), assertEquals(expected2, JSON[_0x157eaf(0x1ba)](parent2, undefined, 0x0));
var handler3 = {
        'get': function (_0x401170, _0xde89d1, _0x3c34c8) {
            var _0x1a0eca = _0x157eaf;
            if (_0xde89d1 == _0x1a0eca(0x1c3) || _0xde89d1 === Symbol[_0x1a0eca(0x1c4)])
                return function () {
                    var _0x960b0d = _0x1a0eca;
                    return _0x960b0d(0x1c5);
                };
            ;
            if (typeof _0xde89d1 !== _0x1a0eca(0x1c6))
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
        'x': 0x7b,
        'y': proxy3
    };
testStringify(_0x157eaf(0x1c7), parent3);
var handler4 = {
        'get': function (_0x5a59cb, _0x5d059e) {
            return 0x0;
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0x3f4184, _0x1b8922) {
            return { 'enumerable': ![] };
        }
    }, proxy4 = new Proxy({}, handler4);
testStringify('{}', proxy4), testStringify(_0x157eaf(0x1c8), { 'a': proxy4 });
var handler5 = {
        'get': function (_0x496dc1, _0x4a3b36) {
            if (_0x4a3b36 == 'z')
                return 0x17ae8;
            return function (_0x3f58b7) {
                var _0x31bec9 = _0x3ced;
                return _0x3f58b7[_0x31bec9(0x1c9)](0x0) + this['z'];
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
testStringify(_0x157eaf(0x1ca), { 'a': proxy5 });
var handler6 = {
        'get': function (_0x330f95, _0x422eb0) {
            return function (_0x182038) {
                return undefined;
            };
        },
        'ownKeys': function (_0x1535e0) {
            var _0x1c90d9 = _0x157eaf;
            return [_0x1c90d9(0x1cb)];
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0x46a09e, _0x3bf1ff) {
            return { 'enumerable': !![] };
        }
    }, proxy6 = new Proxy({}, handler6);
testStringify('[1,null,true]', [
    0x1,
    proxy6,
    !![]
]), testStringify(_0x157eaf(0x1cc), {
    'a': 0x1,
    'b': proxy6,
    'c': !![]
});
var handler7 = {
        'get': function (_0x5a8dca, _0x5d8633) {
            var _0x33dfea = _0x157eaf;
            return delete parent7['a'], delete parent7['c'], parent7['e'] = '5', _0x5d8633[_0x33dfea(0x1bb)]();
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
assertEquals(_0x157eaf(0x1cd), JSON[_0x157eaf(0x1ba)](parent7)), assertEquals(_0x157eaf(0x1ce), JSON[_0x157eaf(0x1ba)](parent7));
var log = [], logger = {}, handler = new Proxy({}, logger);
logger[_0x157eaf(0x1cf)] = function (_0x1f8b09, _0x42f20f, _0x2a4d8d) {
    return function () {
        var _0x41893c = _0x3ced;
        return log[_0x41893c(0x1d0)]([
            _0x42f20f,
            ...arguments
        ]), Reflect[_0x42f20f](...arguments);
    };
}, log[_0x157eaf(0x1d1)] = 0x0;
var target = () => 0x2a, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x157eaf(0x1d2)), assertEquals(undefined, JSON[_0x157eaf(0x1ba)](proxy)), assertEquals(0x1, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals([
    _0x157eaf(0x1cf),
    target,
    'toJSON',
    proxy
], log[0x0]), log[_0x157eaf(0x1d1)] = 0x0;
var target = { 'foo': 0x2a }, proxy = new Proxy(target, handler);
assertFalse(Array[_0x157eaf(0x1d3)](proxy)), assertEquals(_0x157eaf(0x1d4), JSON[_0x157eaf(0x1ba)](proxy)), assertEquals(0x4, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals([
    _0x157eaf(0x1cf),
    target,
    _0x157eaf(0x1cb),
    proxy
], log[0x0]), assertEquals([
    _0x157eaf(0x1d5),
    target
], log[0x1]), assertEquals([
    _0x157eaf(0x1d6),
    target,
    _0x157eaf(0x1d7)
], log[0x2]), assertEquals([
    _0x157eaf(0x1cf),
    target,
    _0x157eaf(0x1d7),
    proxy
], log[0x3]), log['length'] = 0x0;
var target = [0x2a], proxy = new Proxy(target, handler);
assertTrue(Array[_0x157eaf(0x1d3)](proxy)), assertEquals(_0x157eaf(0x1d8), JSON[_0x157eaf(0x1ba)](proxy)), assertEquals(0x3, log['length']);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals([
    _0x157eaf(0x1cf),
    target,
    'toJSON',
    proxy
], log[0x0]), assertEquals([
    'get',
    target,
    _0x157eaf(0x1d1),
    proxy
], log[0x1]), assertEquals([
    _0x157eaf(0x1cf),
    target,
    '0',
    proxy
], log[0x2]), log[_0x157eaf(0x1d1)] = 0x0;
var object = {
        0x0: 'foo',
        0x1: 0x29a
    }, target = (_0x26e987, _0x5877e5) => _0x26e987 == '1' ? _0x5877e5 + 0x2a : _0x5877e5, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x157eaf(0x1d2)), assertEquals('{\x220\x22:\x22foo\x22,\x221\x22:708}', JSON[_0x157eaf(0x1ba)](object, proxy)), assertEquals(0x3, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals(0x4, log[0x0][_0x157eaf(0x1d1)]), assertEquals(_0x157eaf(0x1be), log[0x0][0x0]), assertEquals('', log[0x0][0x3][0x0]), assertEquals({
    0x0: _0x157eaf(0x1d7),
    0x1: 0x29a
}, log[0x0][0x3][0x1]), assertEquals(0x4, log[0x1][_0x157eaf(0x1d1)]), assertEquals(_0x157eaf(0x1be), log[0x1][0x0]), assertEquals([
    '0',
    'foo'
], log[0x1][0x3]), assertEquals(0x4, log[0x2]['length']), assertEquals(_0x157eaf(0x1be), log[0x2][0x0]), assertEquals([
    '1',
    0x29a
], log[0x2][0x3]), log[_0x157eaf(0x1d1)] = 0x0;
var object = {
        0x0: _0x157eaf(0x1d7),
        0x1: 0x29a
    }, target = [0x0], proxy = new Proxy(target, handler);
assertTrue(Array[_0x157eaf(0x1d3)](proxy)), assertEquals(_0x157eaf(0x1d9), JSON['stringify'](object, proxy)), assertEquals(0x2, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals([
    'get',
    target,
    _0x157eaf(0x1d1),
    proxy
], log[0x0]), assertEquals([
    _0x157eaf(0x1cf),
    target,
    '0',
    proxy
], log[0x1]), log[_0x157eaf(0x1d1)] = 0x0;
var object = [
        _0x157eaf(0x1d7),
        0x2a
    ], target = [0x0], proxy = new Proxy(target, handler);
assertTrue(Array['isArray'](proxy)), assertEquals(_0x157eaf(0x1da), JSON[_0x157eaf(0x1ba)](object, proxy)), assertEquals(0x2, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals([
    _0x157eaf(0x1cf),
    target,
    _0x157eaf(0x1d1),
    proxy
], log[0x0]), assertEquals([
    _0x157eaf(0x1cf),
    target,
    '0',
    proxy
], log[0x1]);
var getTrap = function (_0x392a4f, _0x1e34f6) {
        var _0x1d80f9 = _0x157eaf;
        if (_0x1e34f6 === _0x1d80f9(0x1d1))
            return {
                [Symbol[_0x1d80f9(0x1c4)]]() {
                    return 0x2a;
                }
            };
        if (_0x1e34f6 === '41')
            return _0x1d80f9(0x1d7);
        if (_0x1e34f6 === '42')
            return _0x1d80f9(0x1db);
    }, target = [], proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array[_0x157eaf(0x1d3)](proxy));
var object = {
    'foo': !![],
    'bar': 0x29a
};
assertEquals(_0x157eaf(0x1dc), JSON[_0x157eaf(0x1ba)](object, proxy));
var getTrap = function (_0x1ab767, _0x57b6ae) {
        var _0x1d5a07 = _0x157eaf;
        if (_0x57b6ae === 'length')
            return Symbol();
        if (_0x57b6ae === '41')
            return _0x1d5a07(0x1d7);
        if (_0x57b6ae === '42')
            return _0x1d5a07(0x1db);
    }, target = [], proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array[_0x157eaf(0x1d3)](proxy));
var object = {
    'foo': !![],
    'bar': 0x29a
};
assertThrows(() => JSON['stringify'](object, proxy), TypeError), log[_0x157eaf(0x1d1)] = 0x0;
var object = [
        _0x157eaf(0x1d7),
        0x2a
    ], target = { 'baz': 0x5 }, proxy = new Proxy(target, handler), replacer = (_0x18352c, _0x102b94) => _0x18352c === '1' ? proxy : _0x102b94;
assertEquals(_0x157eaf(0x1dd), JSON[_0x157eaf(0x1ba)](object, replacer)), assertEquals(0x3, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals([
    _0x157eaf(0x1d5),
    target
], log[0x0]), assertEquals([
    'getOwnPropertyDescriptor',
    target,
    _0x157eaf(0x1de)
], log[0x1]), log[_0x157eaf(0x1d1)] = 0x0;
var object = [
        'foo',
        0x2a
    ], target = [_0x157eaf(0x1db)], proxy = new Proxy(target, handler), replacer = (_0x4f2baf, _0x22a12c) => _0x4f2baf === '1' ? proxy : _0x22a12c;
assertEquals(_0x157eaf(0x1df), JSON[_0x157eaf(0x1ba)](object, replacer)), assertEquals(0x2, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals([
    _0x157eaf(0x1cf),
    target,
    'length',
    proxy
], log[0x0]), assertEquals([
    'get',
    target,
    '0',
    proxy
], log[0x1]);
var getTrap = function (_0x20f7e6, _0x18f87e) {
        var _0xb09c74 = _0x157eaf;
        if (_0x18f87e === _0xb09c74(0x1d1))
            return {
                [Symbol['toPrimitive']]() {
                    return 0x3;
                }
            };
        if (_0x18f87e === '2')
            return _0xb09c74(0x1de);
        if (_0x18f87e === '3')
            return _0xb09c74(0x1db);
    }, target = [], proxy = new Proxy(target, { 'get': getTrap }), replacer = (_0x590fc5, _0x391d0b) => _0x590fc5 === _0x157eaf(0x1e0) ? proxy : _0x391d0b, object = {
        'foo': !![],
        'goo': ![]
    };
assertEquals(_0x157eaf(0x1e1), JSON[_0x157eaf(0x1ba)](object, replacer));
var getTrap = function (_0xd65b5b, _0x18d506) {
        var _0x1a878f = _0x157eaf;
        if (_0x18d506 === _0x1a878f(0x1d1))
            return Symbol();
        if (_0x18d506 === '2')
            return _0x1a878f(0x1de);
        if (_0x18d506 === '3')
            return _0x1a878f(0x1db);
    }, target = [], proxy = new Proxy(target, { 'get': getTrap }), replacer = (_0x24e1e2, _0xdd5d95) => _0x24e1e2 === _0x157eaf(0x1e0) ? proxy : _0xdd5d95, object = {
        'foo': !![],
        'goo': ![]
    };
assertThrows(() => JSON[_0x157eaf(0x1ba)](object, replacer), TypeError), log[_0x157eaf(0x1d1)] = 0x0;
var target = () => 0x29a, proxy = new Proxy(target, handler), replacer = (_0x5a1603, _0x573d76) => _0x5a1603 === '1' ? proxy : _0x573d76;
assertEquals(_0x157eaf(0x1e2), JSON[_0x157eaf(0x1ba)]([
    _0x157eaf(0x1d7),
    0x2a
], replacer)), assertEquals(0x0, log['length']), assertEquals(_0x157eaf(0x1d9), JSON[_0x157eaf(0x1ba)]({
    0x0: _0x157eaf(0x1d7),
    0x1: 0x2a
}, replacer)), assertEquals(0x0, log[_0x157eaf(0x1d1)]), log[_0x157eaf(0x1d1)] = 0x0;
var target = () => 0x2a, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x157eaf(0x1d2)), assertEquals(0x2a, JSON['parse'](_0x157eaf(0x1e3), proxy)), assertEquals(0x3, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals(0x4, log[0x0][_0x157eaf(0x1d1)]), assertEquals('apply', log[0x0][0x0]), assertEquals([
    '0',
    !![]
], log[0x0][0x3]), assertEquals(0x4, log[0x1][_0x157eaf(0x1d1)]), assertEquals('apply', log[0x1][0x0]), assertEquals([
    '1',
    ![]
], log[0x1][0x3]), assertEquals(0x4, log[0x2][_0x157eaf(0x1d1)]), assertEquals(_0x157eaf(0x1be), log[0x2][0x0]), assertEquals([
    '',
    [
        0x2a,
        0x2a
    ]
], log[0x2][0x3]), log['length'] = 0x0;
var target = { 'baz': 0x2a }, proxy = new Proxy(target, handler), reviver = function (_0xad3e85, _0x182495) {
        var _0x527013 = _0x157eaf;
        if (_0xad3e85 === _0x527013(0x1de))
            return 0x5;
        if (_0xad3e85 === _0x527013(0x1d7))
            this['bar'] = proxy;
        return _0x182495;
    };
assertEquals({
    'foo': 0x0,
    'bar': proxy
}, JSON['parse'](_0x157eaf(0x1e4), reviver)), assertEquals(0x4, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals([
    'ownKeys',
    target
], log[0x0]), assertEquals([
    _0x157eaf(0x1d6),
    target,
    'baz'
], log[0x1]), assertEquals([
    _0x157eaf(0x1cf),
    target,
    _0x157eaf(0x1de),
    proxy
], log[0x2]), assertEquals([
    _0x157eaf(0x1e5),
    target,
    'baz',
    {
        'value': 0x5,
        'configurable': !![],
        'writable': !![],
        'enumerable': !![]
    }
], log[0x3]), log[_0x157eaf(0x1d1)] = 0x0;
var target = [0x2a], proxy = new Proxy(target, handler);
assertTrue(Array['isArray'](proxy));
var reviver = function (_0x2be076, _0x1dfaae) {
        var _0x39e357 = _0x157eaf;
        if (_0x2be076 === '0')
            return undefined;
        if (_0x2be076 === _0x39e357(0x1d7))
            this['bar'] = proxy;
        return _0x1dfaae;
    }, result = JSON[_0x157eaf(0x1e6)]('{\x22foo\x22:0,\x22bar\x22:1}', reviver);
assertEquals({
    'foo': 0x0,
    'bar': proxy
}, result), assertSame(result[_0x157eaf(0x1db)], proxy), assertEquals(0x3, log[_0x157eaf(0x1d1)]);
for (var i in log)
    assertSame(target, log[i][0x1]);
assertEquals([
    'get',
    target,
    _0x157eaf(0x1d1),
    proxy
], log[0x0]), assertEquals([
    _0x157eaf(0x1cf),
    target,
    '0',
    proxy
], log[0x1]), assertEquals([
    'deleteProperty',
    target,
    '0'
], log[0x2]), proxy = new Proxy([], {
    'get': function (_0x509caf, _0x53506f) {
        var _0x2671e4 = _0x157eaf;
        if (_0x53506f == _0x2671e4(0x1d1))
            return 0x7;
        return 0x0;
    }
}), assertEquals(_0x157eaf(0x1e7), JSON[_0x157eaf(0x1ba)]([proxy])), proxy = new Proxy([], {
    'get': function (_0x2ec6e6, _0x406168) {
        var _0x21353c = _0x157eaf;
        if (_0x406168 == _0x21353c(0x1d1))
            return 0x1d6329f1c35ca500000000000000000000;
        return 0x0;
    }
}), assertThrows(() => JSON[_0x157eaf(0x1ba)]([proxy]), RangeError), log = [], proxy = new Proxy({}, {
    'ownKeys': function () {
        var _0x4a8ccf = _0x157eaf;
        return log[_0x4a8ccf(0x1d0)]('ownKeys'), [
            '0',
            'a',
            'b'
        ];
    },
    'get': function (_0x19316c, _0xf87881) {
        var _0x486afa = _0x157eaf;
        return log[_0x486afa(0x1d0)]('get\x20' + _0xf87881), _0xf87881['toUpperCase']();
    },
    'getOwnPropertyDescriptor': function (_0x578715, _0x11c0b3) {
        var _0x3778eb = _0x157eaf;
        return log['push'](_0x3778eb(0x1e8) + _0x11c0b3), {
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
}), assertEquals(_0x157eaf(0x1e9), JSON['stringify']([proxy])), assertEquals([
    _0x157eaf(0x1ea),
    _0x157eaf(0x1d5),
    _0x157eaf(0x1eb),
    _0x157eaf(0x1ec),
    'descriptor\x20b',
    _0x157eaf(0x1ed),
    'get\x20a',
    _0x157eaf(0x1ee)
], log);
