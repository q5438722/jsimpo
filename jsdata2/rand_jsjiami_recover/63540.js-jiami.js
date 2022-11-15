function testStringify(_0x3e2a3e, _0x1b7543) {
    assertEquals(_0x3e2a3e, JSON['stringify'](_0x1b7543));
    assertEquals(_0x3e2a3e, JSON['stringify'](_0x1b7543, (_0x38f8ac, _0x9acdc2) => _0x9acdc2));
    assertEquals(JSON['stringify'](_0x1b7543, null, '='), JSON['stringify'](_0x1b7543, (_0x1b0e3a, _0x3c63db) => _0x3c63db, '='));
}
var handler1 = {};
var proxy1 = new Proxy({}, handler1);
testStringify('{"a":"A","b":"B","c":"C"}', proxy1);
var proxy_fun = new Proxy(() => {
}, handler1);
assertTrue(typeof proxy_fun === 'function');
testStringify(undefined, proxy_fun);
testStringify('[1,null]', [
    1,
    proxy_fun
]);
handler1['apply'] = function () {
    return 666;
};
testStringify(undefined, proxy_fun);
testStringify('[1,null]', [
    1,
    proxy_fun
]);
var parent1a = { 'b': proxy1 };
testStringify('{"b":{"a":"A","b":"B","c":"C"}}', parent1a);
testStringify('{"b":{"a":"A","b":"B","c":"C"}}', parent1a);
var parent1b = {
    'b': proxy1,
    'c': !![]
};
testStringify('{"a":123,"b":{"a":"A","b":"B","c":"C"},"c":true}', parent1b);
var parent1c = [
    123,
    proxy1,
    !![]
];
testStringify('[123,{"a":"A","b":"B","c":"C"},true]', parent1c);
var handler2 = {
    'get': function (_0x2cded2, _0x373158) {
        delete parent2['c'];
        return _0x373158['toUpperCase']();
    }
};
var proxy2 = new Proxy({}, handler2);
var parent2 = { 'b': proxy2 };
var expected2 = '{"a":"delete","b":{"a":"A","b":"B","c":"C"}}';
assertEquals(expected2, JSON['stringify'](parent2));
parent2['c'] = 'remove';
assertEquals(expected2, JSON['stringify'](parent2, undefined, 0));
var handler3 = {
    'get': function (_0xf30fcd, _0xffd7e0, _0x675383) {
        if (_0xffd7e0 == 'valueOf' || _0xffd7e0 === Symbol['toPrimitive']) {
            return function () {
                if ('EpStK' === 'zHZDz') {
                    return 3;
                } else {
                    return 'proxy';
                }
            };
        }
        ;
        if (typeof _0xffd7e0 !== 'symbol')
            return _0x253897['UXsxn'](_0xffd7e0 + '(', _0x675383) + ')';
    }
};
var proxy3 = new Proxy({}, handler3);
var parent3 = { 'y': proxy3 };
testStringify('{"x":123,"y":{"a":"a(proxy)","b":"b(proxy)","c":"c(proxy)"}}', parent3);
var handler4 = {};
var proxy4 = new Proxy({}, handler4);
testStringify('{}', proxy4);
testStringify('{"a":{}}', { 'a': proxy4 });
var handler5 = {
    'get': function (_0x14063e, _0x54f89f) {
        if (_0x54f89f == 'z')
            return 97000;
        return function (_0x4baa9e) {
            return _0x4baa9e['charCodeAt'](0) + this['z'];
        };
    },
    'ownKeys': function (_0x4aeec1) {
        return [
            'toJSON',
            'z'
        ];
    }
};
var proxy5 = new Proxy({}, handler5);
testStringify('{"a":97097}', { 'a': proxy5 });
var handler6 = {
    'ownKeys': function (_0xca3104) {
        return ['toJSON'];
    }
};
var proxy6 = new Proxy({}, handler6);
testStringify('[1,null,true]', [
    1,
    proxy6,
    !![]
]);
testStringify('{"a":1,"c":true}', {
    'a': 1,
    'b': proxy6,
    'c': !![]
});
var handler7 = {
    'get': function (_0x448e06, _0x50d2bf) {
        delete parent7['a'];
        delete parent7['c'];
        parent7['e'] = '5';
        return _0x50d2bf['toUpperCase']();
    }
};
var proxy7 = new Proxy({}, handler7);
var parent7 = { 'b': proxy7 };
assertEquals('{"a":"1","b":{"a":"A","b":"B","c":"C"},"d":"4"}', JSON['stringify'](parent7));
assertEquals('{"b":{"a":"A","b":"B","c":"C"},"d":"4","e":"5"}', JSON['stringify'](parent7));
var log = [];
var logger = {};
var handler = new Proxy({}, logger);
logger['get'] = function (_0x686cf2, _0x38ef1e, _0x1a6af6) {
    return function () {
        log['push']([
            _0x38ef1e,
            ...arguments
        ]);
        return Reflect[_0x38ef1e](...arguments);
    };
};
log['length'] = 0;
var target = () => 42;
var proxy = new Proxy(target, handler);
assertTrue(typeof proxy === 'function');
assertEquals(undefined, JSON['stringify'](proxy));
assertEquals(1, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'get',
    target,
    'toJSON',
    proxy
], log[0]);
log['length'] = 0;
var target = {};
var proxy = new Proxy(target, handler);
assertFalse(Array['isArray'](proxy));
assertEquals('{"foo":42}', JSON['stringify'](proxy));
assertEquals(4, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'get',
    target,
    'toJSON',
    proxy
], log[0]);
assertEquals([
    'ownKeys',
    target
], log[1]);
assertEquals([
    'getOwnPropertyDescriptor',
    target,
    'foo'
], log[2]);
assertEquals([
    'get',
    target,
    'foo',
    proxy
], log[3]);
log['length'] = 0;
var target = [42];
var proxy = new Proxy(target, handler);
assertTrue(Array['isArray'](proxy));
assertEquals('[42]', JSON['stringify'](proxy));
assertEquals(3, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'get',
    target,
    'toJSON',
    proxy
], log[0]);
assertEquals([
    'get',
    target,
    'length',
    proxy
], log[1]);
assertEquals([
    'get',
    target,
    '0',
    proxy
], log[2]);
log['length'] = 0;
var object = {};
var target = (_0x421373, _0x22e99a) => _0x421373 == '1' ? _0x22e99a + 42 : _0x22e99a;
var proxy = new Proxy(target, handler);
assertTrue(typeof proxy === 'function');
assertEquals('{"0":"foo","1":708}', JSON['stringify'](object, proxy));
assertEquals(3, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals(4, log[0]['length']);
assertEquals('apply', log[0][0]);
assertEquals('', log[0][3][0]);
assertEquals({
    0: 'foo',
    1: 666
}, log[0][3][1]);
assertEquals(4, log[1]['length']);
assertEquals('apply', log[1][0]);
assertEquals([
    '0',
    'foo'
], log[1][3]);
assertEquals(4, log[2]['length']);
assertEquals('apply', log[2][0]);
assertEquals([
    '1',
    666
], log[2][3]);
log['length'] = 0;
var object = {};
var target = [0];
var proxy = new Proxy(target, handler);
assertTrue(Array['isArray'](proxy));
assertEquals('{"0":"foo"}', JSON['stringify'](object, proxy));
assertEquals(2, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'get',
    target,
    'length',
    proxy
], log[0]);
assertEquals([
    'get',
    target,
    '0',
    proxy
], log[1]);
log['length'] = 0;
var object = [
    'foo',
    42
];
var target = [0];
var proxy = new Proxy(target, handler);
assertTrue(Array['isArray'](proxy));
assertEquals('["foo",42]', JSON['stringify'](object, proxy));
assertEquals(2, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'get',
    target,
    'length',
    proxy
], log[0]);
assertEquals([
    'get',
    target,
    '0',
    proxy
], log[1]);
var getTrap = function (_0xb874f7, _0x335bba) {
    if (_0x335bba === 'length')
        return {
            [Symbol['toPrimitive']]() {
                return 42;
            }
        };
    if (_0x335bba === '41')
        return 'foo';
    if (_0x335bba === '42')
        return 'bar';
};
var target = [];
var proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array['isArray'](proxy));
var object = { 'foo': !![] };
assertEquals('{"foo":true}', JSON['stringify'](object, proxy));
var getTrap = function (_0x44ab0d, _0xa527cd) {
    if (_0xa527cd === 'length')
        return Symbol();
    if (_0xa527cd === '41')
        return 'foo';
    if (_0xa527cd === '42')
        return 'bar';
};
var target = [];
var proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array['isArray'](proxy));
var object = { 'foo': !![] };
assertThrows(() => JSON['stringify'](object, proxy), TypeError);
log['length'] = 0;
var object = [
    'foo',
    42
];
var target = {};
var proxy = new Proxy(target, handler);
var replacer = (_0x3f7e74, _0x26a8b4) => _0x3f7e74 === '1' ? proxy : _0x26a8b4;
assertEquals('["foo",{"baz":5}]', JSON['stringify'](object, replacer));
assertEquals(3, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'ownKeys',
    target
], log[0]);
assertEquals([
    'getOwnPropertyDescriptor',
    target,
    'baz'
], log[1]);
log['length'] = 0;
var object = [
    'foo',
    42
];
var target = ['bar'];
var proxy = new Proxy(target, handler);
var replacer = (_0x37c97b, _0x3b555f) => _0x37c97b === '1' ? proxy : _0x3b555f;
assertEquals('["foo",["bar"]]', JSON['stringify'](object, replacer));
assertEquals(2, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'get',
    target,
    'length',
    proxy
], log[0]);
assertEquals([
    'get',
    target,
    '0',
    proxy
], log[1]);
var getTrap = function (_0x477629, _0x1ab6aa) {
    if (_0x1ab6aa === 'length')
        return {
            [Symbol['toPrimitive']]() {
                return 3;
            }
        };
    if (_0x1ab6aa === '2')
        return 'baz';
    if (_0x1ab6aa === '3')
        return 'bar';
};
var target = [];
var proxy = new Proxy(target, { 'get': getTrap });
var replacer = (_0xcee17e, _0x5496ea) => _0xcee17e === 'goo' ? proxy : _0x5496ea;
var object = {
    'foo': !![],
    'goo': ![]
};
assertEquals('{"foo":true,"goo":[null,null,"baz"]}', JSON['stringify'](object, replacer));
var getTrap = function (_0x5545f1, _0x4c45c3) {
    if (_0x4c45c3 === 'length')
        return Symbol();
    if (_0x4c45c3 === '2')
        return 'baz';
    if (_0x4c45c3 === '3')
        return 'bar';
};
var target = [];
var proxy = new Proxy(target, { 'get': getTrap });
var replacer = (_0x5d63a7, _0x55f2c6) => _0x5d63a7 === 'goo' ? proxy : _0x55f2c6;
var object = {
    'foo': !![],
    'goo': ![]
};
assertThrows(() => JSON['stringify'](object, replacer), TypeError);
log['length'] = 0;
var target = () => 666;
var proxy = new Proxy(target, handler);
var replacer = (_0x19bbda, _0xf14717) => _0x19bbda === '1' ? proxy : _0xf14717;
assertEquals('["foo",null]', JSON['stringify']([
    'foo',
    42
], replacer));
assertEquals(0, log['length']);
assertEquals('{"0":"foo"}', JSON['stringify']({
    0: 'foo',
    1: 42
}, replacer));
assertEquals(0, log['length']);
log['length'] = 0;
var target = () => 42;
var proxy = new Proxy(target, handler);
assertTrue(typeof proxy === 'function');
assertEquals(42, JSON['parse']('[true, false]', proxy));
assertEquals(3, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals(4, log[0]['length']);
assertEquals('apply', log[0][0]);
assertEquals([
    '0',
    !![]
], log[0][3]);
assertEquals(4, log[1]['length']);
assertEquals('apply', log[1][0]);
assertEquals([
    '1',
    ![]
], log[1][3]);
assertEquals(4, log[2]['length']);
assertEquals('apply', log[2][0]);
assertEquals([
    '',
    [
        42,
        42
    ]
], log[2][3]);
log['length'] = 0;
var target = {};
var proxy = new Proxy(target, handler);
var reviver = function (_0x4952b7, _0x334d9a) {
    if (_0x4952b7 === 'baz')
        return 5;
    if (_0x4952b7 === 'foo')
        this['bar'] = proxy;
    return _0x334d9a;
};
assertEquals({
    'foo': 0,
    'bar': proxy
}, JSON['parse']('{"foo":0,"bar":1}', reviver));
assertEquals(4, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'ownKeys',
    target
], log[0]);
assertEquals([
    'getOwnPropertyDescriptor',
    target,
    'baz'
], log[1]);
assertEquals([
    'get',
    target,
    'baz',
    proxy
], log[2]);
assertEquals([
    'defineProperty',
    target,
    'baz',
    {
        'value': 5,
        'configurable': !![],
        'writable': !![],
        'enumerable': !![]
    }
], log[3]);
log['length'] = 0;
var target = [42];
var proxy = new Proxy(target, handler);
assertTrue(Array['isArray'](proxy));
var reviver = function (_0x2187c8, _0x1ef47a) {
    if (_0x2187c8 === '0')
        return undefined;
    if (_0x2187c8 === 'foo')
        this['bar'] = proxy;
    return _0x1ef47a;
};
var result = JSON['parse']('{"foo":0,"bar":1}', reviver);
assertEquals({
    'foo': 0,
    'bar': proxy
}, result);
assertSame(result['bar'], proxy);
assertEquals(3, log['length']);
for (var i in log)
    assertSame(target, log[i][1]);
assertEquals([
    'get',
    target,
    'length',
    proxy
], log[0]);
assertEquals([
    'get',
    target,
    '0',
    proxy
], log[1]);
assertEquals([
    'deleteProperty',
    target,
    '0'
], log[2]);
proxy = new Proxy([], {
    'get': function (_0x4a13c, _0x24b304) {
        if (_0x24b304 == 'length')
            return 7;
        return 0;
    }
});
assertEquals('[[0,0,0,0,0,0,0]]', JSON['stringify']([proxy]));
proxy = new Proxy([], {
    'get': function (_0x18b3a0, _0x481a6f) {
        if (_0x481a6f == 'length')
            return 1e+40;
        return 0;
    }
});
assertThrows(() => JSON['stringify']([proxy]), RangeError);
log = [];
proxy = new Proxy({}, {
    'ownKeys': function () {
        log['push']('ownKeys');
        return [
            '0',
            'a',
            'b'
        ];
    },
    'get': function (_0x154708, _0x18c29b) {
        log['push']('get ' + _0x18c29b);
        return _0x18c29b['toUpperCase']();
    },
    'getOwnPropertyDescriptor': function (_0x18bece, _0x4b8635) {
        log['push']('descriptor ' + _0x4b8635);
        return {
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
});
assertEquals('[{"0":"0","a":"A","b":"B"}]', JSON['stringify']([proxy]));
assertEquals([
    'get toJSON',
    'ownKeys',
    'descriptor 0',
    'descriptor a',
    'descriptor b',
    'get 0',
    'get a',
    'get b'
], log);