
var _0x27a411 = _0x24b4;
(function (_0x1d5852, _0x390cff) {
    var _0x21006b = _0x24b4;
    while (!![]) {
        try {
            var _0x1e5357 = -parseInt(_0x21006b(0xcf)) + parseInt(_0x21006b(0xd0)) + -parseInt(_0x21006b(0xd1)) * -parseInt(_0x21006b(0xd2)) + -parseInt(_0x21006b(0xd3)) * -parseInt(_0x21006b(0xd4)) + parseInt(_0x21006b(0xd5)) + parseInt(_0x21006b(0xd6)) + -parseInt(_0x21006b(0xd7));
            if (_0x1e5357 === _0x390cff)
                break;
            else
                _0x1d5852['push'](_0x1d5852['shift']());
        } catch (_0x4753f5) {
            _0x1d5852['push'](_0x1d5852['shift']());
        }
    }
}(_0x5be8, 0x6c0e * -0x8 + -0x75d56 + 0x1185a3 * 0x1));
function testStringify(_0x6d6c4d, _0x46f766) {
    var _0x348577 = _0x24b4, _0x128cfb = {
            'vfjlO': function (_0x3f46b7, _0x4eaf22, _0x4ad119) {
                return _0x3f46b7(_0x4eaf22, _0x4ad119);
            }
        };
    _0x128cfb[_0x348577(0xd8)](assertEquals, _0x6d6c4d, JSON[_0x348577(0xd9)](_0x46f766)), assertEquals(_0x6d6c4d, JSON[_0x348577(0xd9)](_0x46f766, (_0x13e593, _0x11fc92) => _0x11fc92)), assertEquals(JSON[_0x348577(0xd9)](_0x46f766, null, '='), JSON[_0x348577(0xd9)](_0x46f766, (_0xcfd74d, _0x508736) => _0x508736, '='));
}
var handler1 = {
        'get': function (_0x1a30da, _0x4a9359) {
            var _0x1ffe8d = _0x24b4;
            return _0x4a9359[_0x1ffe8d(0xda)]();
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
testStringify(_0x27a411(0xdb), proxy1);
var proxy_fun = new Proxy(() => {
}, handler1);
assertTrue(typeof proxy_fun === _0x27a411(0xdc)), testStringify(undefined, proxy_fun), testStringify(_0x27a411(0xdd), [
    0x354 + -0x6a + 0x1 * -0x2e9,
    proxy_fun
]), handler1[_0x27a411(0xde)] = function () {
    return 0x1 * -0x283 + 0x1a7b * -0x1 + -0x4 * -0x7e6;
}, testStringify(undefined, proxy_fun), testStringify(_0x27a411(0xdd), [
    -0x1dab + -0x1 * 0xcf6 + 0x2aa2,
    proxy_fun
]);
var parent1a = { 'b': proxy1 };
testStringify('{\x22b\x22:{\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22,\x22c\x22:\x22C\x22}}', parent1a), testStringify(_0x27a411(0xdf), parent1a);
var parent1b = {
    'a': 0x7b,
    'b': proxy1,
    'c': !![]
};
testStringify('{\x22a\x22:123,\x22b\x22:{\x22a\x22:\x22A\x22,\x22b\x22:\x22B\x22,\x22c\x22:\x22C\x22},\x22c\x22:true}', parent1b);
var parent1c = [
    0xaf6 + 0x1dd9 + -0x74 * 0x59,
    proxy1,
    !![]
];
testStringify(_0x27a411(0xe0), parent1c);
var handler2 = {
        'get': function (_0x108900, _0x19ab4d) {
            return delete parent2['c'], _0x19ab4d['toUpperCase']();
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
        'a': _0x27a411(0xe1),
        'b': proxy2,
        'c': _0x27a411(0xe2)
    }, expected2 = _0x27a411(0xe3);
assertEquals(expected2, JSON[_0x27a411(0xd9)](parent2)), parent2['c'] = _0x27a411(0xe2), assertEquals(expected2, JSON['stringify'](parent2, undefined, 0xe3 * -0x19 + 0x1972 + -0x347));
var handler3 = {
        'get': function (_0x4b2795, _0x3b1718, _0x119023) {
            var _0x2fe044 = _0x27a411, _0x4ee8bf = {
                    'mhyRx': _0x2fe044(0xe4),
                    'FdFCb': function (_0x2b65ba, _0x592ffe) {
                        return _0x2b65ba == _0x592ffe;
                    },
                    'crpzK': _0x2fe044(0xe5),
                    'ihNuC': function (_0x199b13, _0x1dcd5a) {
                        return _0x199b13 === _0x1dcd5a;
                    },
                    'jRQpb': _0x2fe044(0xe6),
                    'uzIBM': function (_0x322ebc, _0x421c53) {
                        return _0x322ebc + _0x421c53;
                    },
                    'OVkRB': function (_0x1889a6, _0x3ccbba) {
                        return _0x1889a6 + _0x3ccbba;
                    }
                };
            if (_0x4ee8bf[_0x2fe044(0xe7)](_0x3b1718, _0x4ee8bf[_0x2fe044(0xe8)]) || _0x4ee8bf[_0x2fe044(0xe9)](_0x3b1718, Symbol[_0x2fe044(0xea)]))
                return function () {
                    var _0x1a7ba4 = _0x2fe044;
                    return _0x4ee8bf[_0x1a7ba4(0xeb)];
                };
            ;
            if (typeof _0x3b1718 !== _0x4ee8bf[_0x2fe044(0xec)])
                return _0x4ee8bf[_0x2fe044(0xed)](_0x4ee8bf['OVkRB'](_0x3b1718, '('), _0x119023) + ')';
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
testStringify('{\x22x\x22:123,\x22y\x22:{\x22a\x22:\x22a(proxy)\x22,\x22b\x22:\x22b(proxy)\x22,\x22c\x22:\x22c(proxy)\x22}}', parent3);
var handler4 = {
        'get': function (_0x3221df, _0x5eb263) {
            return 0x1b49 * -0x1 + -0x287 + 0x1dd0;
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0xd3b918, _0x3615cc) {
            return { 'enumerable': ![] };
        }
    }, proxy4 = new Proxy({}, handler4);
testStringify('{}', proxy4), testStringify(_0x27a411(0xee), { 'a': proxy4 });
var handler5 = {
        'get': function (_0x322b6a, _0x116db1) {
            var _0x366b5e = {
                'vDQtN': function (_0x94f17d, _0x503748) {
                    return _0x94f17d + _0x503748;
                }
            };
            if (_0x116db1 == 'z')
                return -0x2d223 + 0x202ab + -0x24a60 * -0x1;
            return function (_0xe93b2d) {
                var _0x41df62 = _0x24b4;
                return _0x366b5e[_0x41df62(0xef)](_0xe93b2d[_0x41df62(0xf0)](-0xf * -0x133 + -0x100f + 0x1 * -0x1ee), this['z']);
            };
        },
        'ownKeys': function (_0x3efd6d) {
            var _0x3584a3 = _0x27a411, _0x29d6bc = { 'LstoP': _0x3584a3(0xf1) };
            return [
                _0x29d6bc[_0x3584a3(0xf2)],
                'z'
            ];
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0x11c5ee, _0x516364) {
            return { 'enumerable': !![] };
        }
    }, proxy5 = new Proxy({}, handler5);
testStringify(_0x27a411(0xf3), { 'a': proxy5 });
var handler6 = {
        'get': function (_0x2e2422, _0x318026) {
            return function (_0x182973) {
                return undefined;
            };
        },
        'ownKeys': function (_0x4b106c) {
            var _0x6acca6 = _0x27a411, _0x15117c = { 'odlhE': _0x6acca6(0xf1) };
            return [_0x15117c[_0x6acca6(0xf4)]];
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0x2311ad, _0x32393c) {
            return { 'enumerable': !![] };
        }
    }, proxy6 = new Proxy({}, handler6);
testStringify(_0x27a411(0xf5), [
    -0x30 * 0x1d + -0x75a * -0x1 + 0x1 * -0x1e9,
    proxy6,
    !![]
]), testStringify(_0x27a411(0xf6), {
    'a': 0x1,
    'b': proxy6,
    'c': !![]
});
var handler7 = {
        'get': function (_0x27b027, _0x8d7193) {
            var _0x2bdd6e = _0x27a411;
            return delete parent7['a'], delete parent7['c'], parent7['e'] = '5', _0x8d7193[_0x2bdd6e(0xda)]();
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
assertEquals(_0x27a411(0xf7), JSON[_0x27a411(0xd9)](parent7)), assertEquals(_0x27a411(0xf8), JSON['stringify'](parent7));
var log = [], logger = {}, handler = new Proxy({}, logger);
logger[_0x27a411(0xf9)] = function (_0x28c271, _0xd6b907, _0x11657f) {
    return function () {
        var _0x44edd7 = _0x24b4;
        return log[_0x44edd7(0xfa)]([
            _0xd6b907,
            ...arguments
        ]), Reflect[_0xd6b907](...arguments);
    };
}, log[_0x27a411(0xfb)] = 0xc39 * 0x1 + 0x21d7 * 0x1 + -0x4 * 0xb84;
var target = () => 0x1830 + -0x15ad + -0x259, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x27a411(0xdc)), assertEquals(undefined, JSON[_0x27a411(0xd9)](proxy)), assertEquals(-0x305 * 0x1 + -0x19f7 + 0x1cfd, log['length']);
for (var i in log)
    assertSame(target, log[i][0x119 * 0x3 + 0x3f5 * -0x5 + 0x107f * 0x1]);
function _0x24b4(_0x13c15b, _0x327239) {
    return _0x24b4 = function (_0x19ffc6, _0x5748b9) {
        _0x19ffc6 = _0x19ffc6 - (-0x1 * -0x2131 + -0x1 * -0x1471 + -0x34d3);
        var _0x170f95 = _0x5be8[_0x19ffc6];
        return _0x170f95;
    }, _0x24b4(_0x13c15b, _0x327239);
}
assertEquals([
    'get',
    target,
    _0x27a411(0xf1),
    proxy
], log[0x1428 + 0x1b43 + -0x2f6b * 0x1]), log[_0x27a411(0xfb)] = -0x1 * 0xd4b + -0xb71 + 0x18bc;
var target = { 'foo': 0x2a }, proxy = new Proxy(target, handler);
assertFalse(Array[_0x27a411(0xfc)](proxy)), assertEquals(_0x27a411(0xfd), JSON[_0x27a411(0xd9)](proxy)), assertEquals(0x2287 + -0x5f8 * -0x6 + -0x3 * 0x1771, log[_0x27a411(0xfb)]);
for (var i in log)
    assertSame(target, log[i][0xb * 0x1 + -0x1 * -0xaab + -0xab5]);
assertEquals([
    _0x27a411(0xf9),
    target,
    _0x27a411(0xf1),
    proxy
], log[0x1f6 * 0x9 + -0x1975 + 0x7cf]), assertEquals([
    _0x27a411(0xfe),
    target
], log[0xc8e + 0x4a * 0x7f + -0x3143 * 0x1]), assertEquals([
    _0x27a411(0xff),
    target,
    _0x27a411(0x100)
], log[0xe2b + -0x716 + 0x1 * -0x713]), assertEquals([
    _0x27a411(0xf9),
    target,
    _0x27a411(0x100),
    proxy
], log[0x976 + 0x22cb + 0x2c3e * -0x1]), log[_0x27a411(0xfb)] = 0x120d + -0x1 * 0x11e6 + 0xd * -0x3;
var target = [-0x6a6 + 0x8db + -0x1 * 0x20b], proxy = new Proxy(target, handler);
assertTrue(Array[_0x27a411(0xfc)](proxy)), assertEquals(_0x27a411(0x101), JSON[_0x27a411(0xd9)](proxy)), assertEquals(-0x1f0a + 0x1e06 + -0x107 * -0x1, log[_0x27a411(0xfb)]);
for (var i in log)
    assertSame(target, log[i][-0x1b39 * -0x1 + -0x3d1 * 0x4 + -0xbf4]);
assertEquals([
    _0x27a411(0xf9),
    target,
    'toJSON',
    proxy
], log[0x26aa * 0x1 + 0x6 * -0x1a8 + -0xe5d * 0x2]), assertEquals([
    _0x27a411(0xf9),
    target,
    'length',
    proxy
], log[-0x1 * 0xaa9 + 0x67 * -0x53 + -0x2c0f * -0x1]), assertEquals([
    _0x27a411(0xf9),
    target,
    '0',
    proxy
], log[0xa94 + 0x753 + 0x11e5 * -0x1]), log['length'] = 0xbce + 0x1a17 * 0x1 + -0x6d * 0x59;
var object = {
        0x0: _0x27a411(0x100),
        0x1: 0x29a
    }, target = (_0x295fbc, _0x19770c) => _0x295fbc == '1' ? _0x19770c + (-0x16a5 * 0x1 + -0x1a54 + 0x3123) : _0x19770c, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === 'function'), assertEquals('{\x220\x22:\x22foo\x22,\x221\x22:708}', JSON[_0x27a411(0xd9)](object, proxy)), assertEquals(-0xb52 + -0x1517 + 0x206c, log['length']);
for (var i in log)
    assertSame(target, log[i][-0x20d4 + -0x19b1 + -0x2a9 * -0x16]);
assertEquals(0x20bf + 0x2b2 * -0x9 + -0x879, log[0x18a4 + -0x1e9 * 0x1 + -0x16bb * 0x1][_0x27a411(0xfb)]), assertEquals(_0x27a411(0xde), log[-0x220a + 0x11b5 + 0x25 * 0x71][0x9 * -0x40f + 0x1 * 0x1e4f + 0x2 * 0x31c]), assertEquals('', log[0x4 * -0x8bf + -0xf90 + 0x328c][0x7 * 0x4e3 + 0x2039 + -0x426b][-0x20b3 + -0x3 * -0x1d + 0x205c]), assertEquals({
    0x0: _0x27a411(0x100),
    0x1: 0x29a
}, log[0x14ae + 0x72e + -0x4 * 0x6f7][0x1 * -0x586 + -0x1 * -0xe8f + -0x4d * 0x1e][0x1064 + -0x17f3 + 0x790]), assertEquals(0x18 * 0x16c + -0x1 * -0x16e1 + -0x38fd, log[0x2540 + -0x12 * -0x205 + -0x4999]['length']), assertEquals('apply', log[-0x925 + 0x245f + 0x65 * -0x45][-0x1 * -0x1d14 + -0x8c0 + 0x2 * -0xa2a]), assertEquals([
    '0',
    _0x27a411(0x100)
], log[-0x5c * 0x63 + -0x1588 + 0x391d][-0x1880 + -0x2351 + 0x3bd4]), assertEquals(-0x1925 + 0x18d7 + 0x52, log[0x1a * 0x81 + 0x9fa + -0x2 * 0xb89][_0x27a411(0xfb)]), assertEquals(_0x27a411(0xde), log[0x7ea + 0x1 * 0x4d5 + 0x1 * -0xcbd][-0x1a28 + -0x19e1 + 0x3409]), assertEquals([
    '1',
    -0xbb * 0x6 + 0xc * -0x1b7 + 0x12 * 0x188
], log[0x30d + 0x950 + -0xc5b][0x23f1 + 0x25d7 + -0x49c5]), log['length'] = 0x1a4 + -0x25fb * -0x1 + 0x1b9 * -0x17;
var object = {
        0x0: _0x27a411(0x100),
        0x1: 0x29a
    }, target = [-0x1a1d + 0x1245 + -0x7d8 * -0x1], proxy = new Proxy(target, handler);
assertTrue(Array[_0x27a411(0xfc)](proxy)), assertEquals('{\x220\x22:\x22foo\x22}', JSON['stringify'](object, proxy)), assertEquals(0x71a + 0x1d87 + -0x249f * 0x1, log['length']);
for (var i in log)
    assertSame(target, log[i][0x1 * 0xc89 + 0x18e9 + -0x2571]);
assertEquals([
    _0x27a411(0xf9),
    target,
    _0x27a411(0xfb),
    proxy
], log[-0x1 * 0xded + 0x1245 * -0x1 + 0x2032]), assertEquals([
    _0x27a411(0xf9),
    target,
    '0',
    proxy
], log[0x25dc + 0x2615 * -0x1 + 0x3a]), log['length'] = -0x35 * 0x89 + -0x3 * 0x162 + -0x29 * -0xcb;
var object = [
        _0x27a411(0x100),
        0xcb8 + -0x107 * 0x25 + 0x1975
    ], target = [-0x10 * -0x20 + 0x1919 + -0x7 * 0x3df], proxy = new Proxy(target, handler);
assertTrue(Array[_0x27a411(0xfc)](proxy)), assertEquals('[\x22foo\x22,42]', JSON[_0x27a411(0xd9)](object, proxy)), assertEquals(0x1b0d + -0xa84 + 0x1 * -0x1087, log[_0x27a411(0xfb)]);
for (var i in log)
    assertSame(target, log[i][0x3 * 0x565 + 0x5bd * -0x3 + 0x109]);
assertEquals([
    _0x27a411(0xf9),
    target,
    'length',
    proxy
], log[0x1900 + -0x15 * -0x2f + -0x53 * 0x59]), assertEquals([
    _0x27a411(0xf9),
    target,
    '0',
    proxy
], log[0x3 * 0x3a1 + 0xd0f + -0x17f1]);
var getTrap = function (_0x3d64ff, _0x186415) {
        var _0x2ff6e1 = _0x27a411, _0x4a6029 = {
                'QaSvy': function (_0x2aca4f, _0x318829) {
                    return _0x2aca4f === _0x318829;
                },
                'lbbCa': _0x2ff6e1(0xfb),
                'LOIVm': 'foo'
            };
        if (_0x4a6029[_0x2ff6e1(0x102)](_0x186415, _0x4a6029['lbbCa']))
            return {
                [Symbol[_0x2ff6e1(0xea)]]() {
                    return -0x207 * -0xa + 0x214a + -0x3566;
                }
            };
        if (_0x4a6029[_0x2ff6e1(0x102)](_0x186415, '41'))
            return _0x4a6029['LOIVm'];
        if (_0x4a6029[_0x2ff6e1(0x102)](_0x186415, '42'))
            return 'bar';
    }, target = [], proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array[_0x27a411(0xfc)](proxy));
var object = {
    'foo': !![],
    'bar': 0x29a
};
assertEquals('{\x22foo\x22:true}', JSON[_0x27a411(0xd9)](object, proxy));
var getTrap = function (_0xd989c, _0xfbc7b2) {
        var _0x1f77e = _0x27a411, _0x219227 = {
                'NYvLg': function (_0x38e7c6, _0x22715b) {
                    return _0x38e7c6 === _0x22715b;
                },
                'BCzES': _0x1f77e(0xfb),
                'rIzDO': _0x1f77e(0x103)
            };
        if (_0x219227[_0x1f77e(0x104)](_0xfbc7b2, _0x219227['BCzES']))
            return Symbol();
        if (_0xfbc7b2 === '41')
            return _0x1f77e(0x100);
        if (_0xfbc7b2 === '42')
            return _0x219227[_0x1f77e(0x105)];
    }, target = [], proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array[_0x27a411(0xfc)](proxy));
var object = {
    'foo': !![],
    'bar': 0x29a
};
assertThrows(() => JSON[_0x27a411(0xd9)](object, proxy), TypeError), log['length'] = 0x12b1 + 0x23 * -0x115 + 0x132e;
var object = [
        'foo',
        0x1 * 0x23c5 + -0x4 * -0x4d6 + -0x36f3
    ], target = { 'baz': 0x5 }, proxy = new Proxy(target, handler), replacer = (_0xfdbc79, _0x277068) => _0xfdbc79 === '1' ? proxy : _0x277068;
assertEquals(_0x27a411(0x106), JSON[_0x27a411(0xd9)](object, replacer)), assertEquals(-0x1931 * 0x1 + -0xb36 * -0x1 + 0x18e * 0x9, log[_0x27a411(0xfb)]);
for (var i in log)
    assertSame(target, log[i][0x1fd3 * 0x1 + 0x1d71 + 0x1 * -0x3d43]);
assertEquals([
    _0x27a411(0xfe),
    target
], log[-0x74a + -0x2101 + -0x284b * -0x1]), assertEquals([
    _0x27a411(0xff),
    target,
    _0x27a411(0x107)
], log[0x129c + -0x104 * 0x18 + 0x5c5]), log['length'] = 0x294 + 0x1 * 0x1f9d + 0x2231 * -0x1;
var object = [
        _0x27a411(0x100),
        0x11b5 + -0x13a9 * -0x1 + 0x1 * -0x2534
    ], target = [_0x27a411(0x103)], proxy = new Proxy(target, handler), replacer = (_0x1dd03b, _0x29e336) => _0x1dd03b === '1' ? proxy : _0x29e336;
assertEquals('[\x22foo\x22,[\x22bar\x22]]', JSON[_0x27a411(0xd9)](object, replacer)), assertEquals(0x1cd3 + 0x2571 + -0x2 * 0x2121, log[_0x27a411(0xfb)]);
for (var i in log)
    assertSame(target, log[i][-0x15be + 0x2 * 0xc97 + -0x3 * 0x125]);
assertEquals([
    _0x27a411(0xf9),
    target,
    _0x27a411(0xfb),
    proxy
], log[-0x888 * 0x3 + -0x212c + 0x3ac4]), assertEquals([
    _0x27a411(0xf9),
    target,
    '0',
    proxy
], log[-0xdaf * 0x1 + -0x129 * -0x7 + -0x11d * -0x5]);
var getTrap = function (_0x1e4e44, _0x4bde4b) {
        var _0x47696c = _0x27a411, _0x4fe440 = {
                'CotTN': function (_0x5d763a, _0x50021a) {
                    return _0x5d763a === _0x50021a;
                },
                'Ymcdb': _0x47696c(0xfb),
                'LbPni': _0x47696c(0x107),
                'AHJAR': _0x47696c(0x103)
            };
        if (_0x4fe440[_0x47696c(0x108)](_0x4bde4b, _0x4fe440[_0x47696c(0x109)]))
            return {
                [Symbol[_0x47696c(0xea)]]() {
                    return 0x1 * 0x2461 + -0x1d2a * -0x1 + -0x748 * 0x9;
                }
            };
        if (_0x4fe440[_0x47696c(0x108)](_0x4bde4b, '2'))
            return _0x4fe440[_0x47696c(0x10a)];
        if (_0x4bde4b === '3')
            return _0x4fe440['AHJAR'];
    }, target = [], proxy = new Proxy(target, { 'get': getTrap }), replacer = (_0x5ab97a, _0x4f86c2) => _0x5ab97a === 'goo' ? proxy : _0x4f86c2, object = {
        'foo': !![],
        'goo': ![]
    };
assertEquals('{\x22foo\x22:true,\x22goo\x22:[null,null,\x22baz\x22]}', JSON['stringify'](object, replacer));
var getTrap = function (_0x5b7e01, _0x15a837) {
        var _0x424b81 = _0x27a411, _0x39be0a = {
                'HsWbl': function (_0x598a4b, _0x5f0f09) {
                    return _0x598a4b === _0x5f0f09;
                },
                'zSsFr': function (_0x398c71) {
                    return _0x398c71();
                },
                'gyPGN': _0x424b81(0x107),
                'mVDos': _0x424b81(0x103)
            };
        if (_0x39be0a[_0x424b81(0x10b)](_0x15a837, _0x424b81(0xfb)))
            return _0x39be0a[_0x424b81(0x10c)](Symbol);
        if (_0x39be0a[_0x424b81(0x10b)](_0x15a837, '2'))
            return _0x39be0a[_0x424b81(0x10d)];
        if (_0x15a837 === '3')
            return _0x39be0a[_0x424b81(0x10e)];
    }, target = [], proxy = new Proxy(target, { 'get': getTrap }), replacer = (_0x21c5f1, _0x3ddb5c) => _0x21c5f1 === _0x27a411(0x10f) ? proxy : _0x3ddb5c, object = {
        'foo': !![],
        'goo': ![]
    };
assertThrows(() => JSON[_0x27a411(0xd9)](object, replacer), TypeError), log[_0x27a411(0xfb)] = -0x1b15 + 0x1 * -0x902 + 0x2417;
var target = () => -0x2e3 * 0x1 + 0x20 * -0xe2 + 0x21bd, proxy = new Proxy(target, handler), replacer = (_0x4c00d8, _0x30d92c) => _0x4c00d8 === '1' ? proxy : _0x30d92c;
assertEquals('[\x22foo\x22,null]', JSON['stringify']([
    _0x27a411(0x100),
    0xd4b + -0x6bc + -0x1 * 0x665
], replacer)), assertEquals(-0xb * 0x19c + -0x1 * 0x130e + -0x1 * -0x24c2, log[_0x27a411(0xfb)]), assertEquals(_0x27a411(0x110), JSON[_0x27a411(0xd9)]({
    0x0: _0x27a411(0x100),
    0x1: 0x2a
}, replacer)), assertEquals(-0x344 + -0x18c8 + 0x4 * 0x703, log['length']), log['length'] = -0x1862 + 0x26b9 * -0x1 + 0x3f1b;
var target = () => 0xd55 * 0x1 + -0x2124 + -0x13f9 * -0x1, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x27a411(0xdc)), assertEquals(0x22a3 * -0x1 + 0x1 * -0x826 + 0xf * 0x2dd, JSON[_0x27a411(0x111)](_0x27a411(0x112), proxy)), assertEquals(0x23ec + 0x2 * -0x109c + -0x2b1, log[_0x27a411(0xfb)]);
for (var i in log)
    assertSame(target, log[i][-0x117f + 0xa5a * 0x2 + -0x334]);
assertEquals(-0x1150 + -0x5d * 0x16 + 0x1952, log[0x421 * 0x3 + 0xa03 * -0x2 + 0x5 * 0x187][_0x27a411(0xfb)]), assertEquals(_0x27a411(0xde), log[0x203f * 0x1 + -0xebe * 0x1 + 0x1 * -0x1181][-0x2 * -0x822 + -0x144e + 0x16 * 0x2f]), assertEquals([
    '0',
    !![]
], log[0x8c5 + -0x19ff + -0x46 * -0x3f][-0x35 * 0x6c + 0x699 + -0x1 * -0xfc6]), assertEquals(0x114 * 0x1 + -0x17d9 + 0x16c9, log[0xb31 * -0x1 + -0x21ac + 0x2cde][_0x27a411(0xfb)]), assertEquals('apply', log[-0x1789 + -0xd70 + 0x24fa][-0x90c + 0x52 * 0x4c + 0x59 * -0x2c]), assertEquals([
    '1',
    ![]
], log[0x1f03 * 0x1 + -0x669 + 0x1899 * -0x1][0x41d * -0x7 + -0x8 * -0x2db + -0x2fb * -0x2]), assertEquals(-0x26 * -0xbf + 0x1 * 0x1796 + -0x33ec, log[0xa98 + -0xda2 + 0x30c][_0x27a411(0xfb)]), assertEquals(_0x27a411(0xde), log[0x1a31 + 0x16ff + -0x312e][-0x2347 + 0x2474 * 0x1 + 0x7 * -0x2b]), assertEquals([
    '',
    [
        0x24c6 + 0x118 + -0x25b4,
        -0x17e8 + 0x2370 + -0xb5e
    ]
], log[-0x26b3 * -0x1 + -0x2455 * -0x1 + 0x246 * -0x21][-0x48 * 0x59 + 0x1 * -0x246a + 0x3d75]), log[_0x27a411(0xfb)] = 0x11f + 0x68c + -0x1 * 0x7ab;
var target = { 'baz': 0x2a }, proxy = new Proxy(target, handler), reviver = function (_0x7178a5, _0x173d46) {
        var _0x34a7c2 = _0x27a411, _0xc4bb25 = {
                'JmxvL': function (_0x5aaca6, _0x3d4ce3) {
                    return _0x5aaca6 === _0x3d4ce3;
                },
                'VJylP': 'baz',
                'QqXcx': function (_0x5f18e6, _0x1ad592) {
                    return _0x5f18e6 === _0x1ad592;
                },
                'cGWGh': 'foo'
            };
        if (_0xc4bb25['JmxvL'](_0x7178a5, _0xc4bb25['VJylP']))
            return 0x7cb + -0x1d62 + -0x1 * -0x159c;
        if (_0xc4bb25['QqXcx'](_0x7178a5, _0xc4bb25[_0x34a7c2(0x113)]))
            this[_0x34a7c2(0x103)] = proxy;
        return _0x173d46;
    };
assertEquals({
    'foo': 0x0,
    'bar': proxy
}, JSON[_0x27a411(0x111)](_0x27a411(0x114), reviver)), assertEquals(0x6de + -0x1ace + -0x9fa * -0x2, log[_0x27a411(0xfb)]);
for (var i in log)
    assertSame(target, log[i][-0x73 * -0x28 + -0x490 * 0x5 + -0x4d9 * -0x1]);
assertEquals([
    _0x27a411(0xfe),
    target
], log[-0x132d + -0x238b + 0x36b8]), assertEquals([
    _0x27a411(0xff),
    target,
    _0x27a411(0x107)
], log[0x2 * -0x851 + -0x221 + -0x4b1 * -0x4]), assertEquals([
    'get',
    target,
    'baz',
    proxy
], log[-0x7a7 * 0x3 + 0x235c + 0x13 * -0xa7]), assertEquals([
    _0x27a411(0x115),
    target,
    'baz',
    {
        'value': 0x5,
        'configurable': !![],
        'writable': !![],
        'enumerable': !![]
    }
], log[-0x4c0 + 0xf4 * 0x10 + 0xa7d * -0x1]), log[_0x27a411(0xfb)] = 0x3 * 0x7d4 + 0x30 * -0x6a + -0x39c;
var target = [0x9 * 0x3e6 + 0x81 * -0x30 + -0xabc], proxy = new Proxy(target, handler);
assertTrue(Array[_0x27a411(0xfc)](proxy));
var reviver = function (_0x2ba106, _0x5af066) {
        var _0x3b1f71 = _0x27a411, _0x45c4d5 = {
                'PiHXK': function (_0x3cf6d0, _0x49c5d9) {
                    return _0x3cf6d0 === _0x49c5d9;
                },
                'UCWYa': _0x3b1f71(0x100)
            };
        if (_0x45c4d5[_0x3b1f71(0x116)](_0x2ba106, '0'))
            return undefined;
        if (_0x2ba106 === _0x45c4d5[_0x3b1f71(0x117)])
            this[_0x3b1f71(0x103)] = proxy;
        return _0x5af066;
    }, result = JSON[_0x27a411(0x111)](_0x27a411(0x114), reviver);
assertEquals({
    'foo': 0x0,
    'bar': proxy
}, result), assertSame(result['bar'], proxy), assertEquals(-0xe4d + -0x7 * 0x61 + 0x10f7 * 0x1, log[_0x27a411(0xfb)]);
for (var i in log)
    assertSame(target, log[i][-0x35 * 0x49 + 0x20a4 + -0x1 * 0x1186]);
assertEquals([
    _0x27a411(0xf9),
    target,
    'length',
    proxy
], log[0x232c + 0x1951 + 0x13 * -0x32f]), assertEquals([
    'get',
    target,
    '0',
    proxy
], log[0xaef + -0x2 * -0x653 + 0x3ee * -0x6]), assertEquals([
    _0x27a411(0x118),
    target,
    '0'
], log[0x25c3 + -0x1edc + 0x161 * -0x5]), proxy = new Proxy([], {
    'get': function (_0x13eb32, _0x22dfaf) {
        var _0x479ba3 = _0x27a411, _0x1b9475 = {
                'tyYgi': function (_0x29276d, _0x2e4daa) {
                    return _0x29276d == _0x2e4daa;
                },
                'baLBO': _0x479ba3(0xfb)
            };
        if (_0x1b9475['tyYgi'](_0x22dfaf, _0x1b9475[_0x479ba3(0x119)]))
            return 0x55 * 0xd + -0x2c5 * 0x3 + 0x405;
        return -0x829 * -0x1 + -0x1d9f * -0x1 + -0x25c8;
    }
}), assertEquals(_0x27a411(0x11a), JSON[_0x27a411(0xd9)]([proxy])), proxy = new Proxy([], {
    'get': function (_0x55199e, _0x1942c3) {
        var _0x5d7610 = _0x27a411, _0x1bb7cd = {
                'keFpe': function (_0x50744c, _0x50d833) {
                    return _0x50744c == _0x50d833;
                },
                'HNazB': _0x5d7610(0xfb)
            };
        if (_0x1bb7cd[_0x5d7610(0x11b)](_0x1942c3, _0x1bb7cd[_0x5d7610(0x11c)]))
            return 0x1d6329f1c35ca500000000000000000000;
        return -0xaf * -0x5 + -0x4e3 * -0x3 + -0x1214;
    }
}), assertThrows(() => JSON[_0x27a411(0xd9)]([proxy]), RangeError), log = [], proxy = new Proxy({}, {
    'ownKeys': function () {
        var _0x1e3e38 = _0x27a411, _0x2d0d06 = { 'wKjbA': _0x1e3e38(0xfe) };
        return log[_0x1e3e38(0xfa)](_0x2d0d06[_0x1e3e38(0x11d)]), [
            '0',
            'a',
            'b'
        ];
    },
    'get': function (_0x422e5c, _0x1af1ad) {
        var _0x9dedb2 = _0x27a411, _0x41cdf6 = { 'RABAU': _0x9dedb2(0x11e) };
        return log[_0x9dedb2(0xfa)](_0x41cdf6['RABAU'] + _0x1af1ad), _0x1af1ad[_0x9dedb2(0xda)]();
    },
    'getOwnPropertyDescriptor': function (_0x19bdea, _0xfae1f) {
        var _0x132bcf = _0x27a411, _0x4e4c0b = {
                'Hzlgj': function (_0x1bf586, _0x2a6055) {
                    return _0x1bf586 + _0x2a6055;
                },
                'iGhpv': 'descriptor\x20'
            };
        return log[_0x132bcf(0xfa)](_0x4e4c0b['Hzlgj'](_0x4e4c0b[_0x132bcf(0x11f)], _0xfae1f)), {
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
}), assertEquals(_0x27a411(0x120), JSON[_0x27a411(0xd9)]([proxy])), assertEquals([
    'get\x20toJSON',
    _0x27a411(0xfe),
    _0x27a411(0x121),
    'descriptor\x20a',
    _0x27a411(0x122),
    _0x27a411(0x123),
    _0x27a411(0x124),
    _0x27a411(0x125)
], log);
