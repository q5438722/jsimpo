function testStringify(_0x6d6c4d, _0x46f766) {
    var _0x348577 = _0x24b4, _0x128cfb = {
            'vfjlO': function (_0x3f46b7, _0x4eaf22, _0x4ad119) {
                return _0x3f46b7(_0x4eaf22, _0x4ad119);
            }
        };
    _0x128cfb[_0x348577(216)](assertEquals, _0x6d6c4d, JSON[_0x348577(217)](_0x46f766)), assertEquals(_0x6d6c4d, JSON[_0x348577(217)](_0x46f766, (_0x13e593, _0x11fc92) => _0x11fc92)), assertEquals(JSON[_0x348577(217)](_0x46f766, null, '='), JSON[_0x348577(217)](_0x46f766, (_0xcfd74d, _0x508736) => _0x508736, '='));
}
var handler1 = {
        'get': function (_0x1a30da, _0x4a9359) {
            var _0x1ffe8d = _0x24b4;
            return _0x4a9359[_0x1ffe8d(218)]();
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
testStringify(_0x27a411(219), proxy1);
var proxy_fun = new Proxy(() => {
}, handler1);
assertTrue(typeof proxy_fun === _0x27a411(220)), testStringify(undefined, proxy_fun), testStringify(_0x27a411(221), [
    852 + -106 + 1 * -745,
    proxy_fun
]), handler1[_0x27a411(222)] = function () {
    return 1 * -643 + 6779 * -1 + -4 * -2022;
}, testStringify(undefined, proxy_fun), testStringify(_0x27a411(221), [
    -7595 + -1 * 3318 + 10914,
    proxy_fun
]);
var parent1a = { 'b': proxy1 };
testStringify('{"b":{"a":"A","b":"B","c":"C"}}', parent1a), testStringify(_0x27a411(223), parent1a);
var parent1b = {
    'a': 123,
    'b': proxy1,
    'c': !![]
};
testStringify('{"a":123,"b":{"a":"A","b":"B","c":"C"},"c":true}', parent1b);
var parent1c = [
    2806 + 7641 + -116 * 89,
    proxy1,
    !![]
];
testStringify(_0x27a411(224), parent1c);
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
        'a': _0x27a411(225),
        'b': proxy2,
        'c': _0x27a411(226)
    }, expected2 = _0x27a411(227);
assertEquals(expected2, JSON[_0x27a411(217)](parent2)), parent2['c'] = _0x27a411(226), assertEquals(expected2, JSON['stringify'](parent2, undefined, 227 * -25 + 6514 + -839));
var handler3 = {
        'get': function (_0x4b2795, _0x3b1718, _0x119023) {
            var _0x2fe044 = _0x27a411, _0x4ee8bf = {
                    'mhyRx': _0x2fe044(228),
                    'FdFCb': function (_0x2b65ba, _0x592ffe) {
                        return _0x2b65ba == _0x592ffe;
                    },
                    'crpzK': _0x2fe044(229),
                    'ihNuC': function (_0x199b13, _0x1dcd5a) {
                        return _0x199b13 === _0x1dcd5a;
                    },
                    'jRQpb': _0x2fe044(230),
                    'uzIBM': function (_0x322ebc, _0x421c53) {
                        return _0x322ebc + _0x421c53;
                    },
                    'OVkRB': function (_0x1889a6, _0x3ccbba) {
                        return _0x1889a6 + _0x3ccbba;
                    }
                };
            if (_0x4ee8bf[_0x2fe044(231)](_0x3b1718, _0x4ee8bf[_0x2fe044(232)]) || _0x4ee8bf[_0x2fe044(233)](_0x3b1718, Symbol[_0x2fe044(234)]))
                return function () {
                    var _0x1a7ba4 = _0x2fe044;
                    return _0x4ee8bf[_0x1a7ba4(235)];
                };
            ;
            if (typeof _0x3b1718 !== _0x4ee8bf[_0x2fe044(236)])
                return _0x4ee8bf[_0x2fe044(237)](_0x4ee8bf['OVkRB'](_0x3b1718, '('), _0x119023) + ')';
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
testStringify('{"x":123,"y":{"a":"a(proxy)","b":"b(proxy)","c":"c(proxy)"}}', parent3);
var handler4 = {
        'get': function (_0x3221df, _0x5eb263) {
            return 6985 * -1 + -647 + 7632;
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0xd3b918, _0x3615cc) {
            return { 'enumerable': ![] };
        }
    }, proxy4 = new Proxy({}, handler4);
testStringify('{}', proxy4), testStringify(_0x27a411(238), { 'a': proxy4 });
var handler5 = {
        'get': function (_0x322b6a, _0x116db1) {
            var _0x366b5e = {
                'vDQtN': function (_0x94f17d, _0x503748) {
                    return _0x94f17d + _0x503748;
                }
            };
            if (_0x116db1 == 'z')
                return -184867 + 131755 + -150112 * -1;
            return function (_0xe93b2d) {
                var _0x41df62 = _0x24b4;
                return _0x366b5e[_0x41df62(239)](_0xe93b2d[_0x41df62(240)](-15 * -307 + -4111 + 1 * -494), this['z']);
            };
        },
        'ownKeys': function (_0x3efd6d) {
            var _0x3584a3 = _0x27a411, _0x29d6bc = { 'LstoP': _0x3584a3(241) };
            return [
                _0x29d6bc[_0x3584a3(242)],
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
testStringify(_0x27a411(243), { 'a': proxy5 });
var handler6 = {
        'get': function (_0x2e2422, _0x318026) {
            return function (_0x182973) {
                return undefined;
            };
        },
        'ownKeys': function (_0x4b106c) {
            var _0x6acca6 = _0x27a411, _0x15117c = { 'odlhE': _0x6acca6(241) };
            return [_0x15117c[_0x6acca6(244)]];
        },
        'has': function () {
            return !![];
        },
        'getOwnPropertyDescriptor': function (_0x2311ad, _0x32393c) {
            return { 'enumerable': !![] };
        }
    }, proxy6 = new Proxy({}, handler6);
testStringify(_0x27a411(245), [
    -48 * 29 + -1882 * -1 + 1 * -489,
    proxy6,
    !![]
]), testStringify(_0x27a411(246), {
    'a': 1,
    'b': proxy6,
    'c': !![]
});
var handler7 = {
        'get': function (_0x27b027, _0x8d7193) {
            var _0x2bdd6e = _0x27a411;
            return delete parent7['a'], delete parent7['c'], parent7['e'] = '5', _0x8d7193[_0x2bdd6e(218)]();
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
assertEquals(_0x27a411(247), JSON[_0x27a411(217)](parent7)), assertEquals(_0x27a411(248), JSON['stringify'](parent7));
var log = [], logger = {}, handler = new Proxy({}, logger);
logger[_0x27a411(249)] = function (_0x28c271, _0xd6b907, _0x11657f) {
    return function () {
        var _0x44edd7 = _0x24b4;
        return log[_0x44edd7(250)]([
            _0xd6b907,
            ...arguments
        ]), Reflect[_0xd6b907](...arguments);
    };
}, log[_0x27a411(251)] = 3129 * 1 + 8663 * 1 + -4 * 2948;
var target = () => 6192 + -5549 + -601, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x27a411(220)), assertEquals(undefined, JSON[_0x27a411(217)](proxy)), assertEquals(-773 * 1 + -6647 + 7421, log['length']);
for (var i in log)
    assertSame(target, log[i][281 * 3 + 1013 * -5 + 4223 * 1]);
function _0x24b4(_0x13c15b, _0x327239) {
    return _0x24b4 = function (_0x19ffc6, _0x5748b9) {
        _0x19ffc6 = _0x19ffc6 - (-1 * -8497 + -1 * -5233 + -13523);
        var _0x170f95 = _0x5be8[_0x19ffc6];
        return _0x170f95;
    }, _0x24b4(_0x13c15b, _0x327239);
}
assertEquals([
    'get',
    target,
    _0x27a411(241),
    proxy
], log[5160 + 6979 + -12139 * 1]), log[_0x27a411(251)] = -1 * 3403 + -2929 + 6332;
var target = { 'foo': 42 }, proxy = new Proxy(target, handler);
assertFalse(Array[_0x27a411(252)](proxy)), assertEquals(_0x27a411(253), JSON[_0x27a411(217)](proxy)), assertEquals(8839 + -1528 * -6 + -3 * 6001, log[_0x27a411(251)]);
for (var i in log)
    assertSame(target, log[i][11 * 1 + -1 * -2731 + -2741]);
assertEquals([
    _0x27a411(249),
    target,
    _0x27a411(241),
    proxy
], log[502 * 9 + -6517 + 1999]), assertEquals([
    _0x27a411(254),
    target
], log[3214 + 74 * 127 + -12611 * 1]), assertEquals([
    _0x27a411(255),
    target,
    _0x27a411(256)
], log[3627 + -1814 + 1 * -1811]), assertEquals([
    _0x27a411(249),
    target,
    _0x27a411(256),
    proxy
], log[2422 + 8907 + 11326 * -1]), log[_0x27a411(251)] = 4621 + -1 * 4582 + 13 * -3;
var target = [-1702 + 2267 + -1 * 523], proxy = new Proxy(target, handler);
assertTrue(Array[_0x27a411(252)](proxy)), assertEquals(_0x27a411(257), JSON[_0x27a411(217)](proxy)), assertEquals(-7946 + 7686 + -263 * -1, log[_0x27a411(251)]);
for (var i in log)
    assertSame(target, log[i][-6969 * -1 + -977 * 4 + -3060]);
assertEquals([
    _0x27a411(249),
    target,
    'toJSON',
    proxy
], log[9898 * 1 + 6 * -424 + -3677 * 2]), assertEquals([
    _0x27a411(249),
    target,
    'length',
    proxy
], log[-1 * 2729 + 103 * -83 + -11279 * -1]), assertEquals([
    _0x27a411(249),
    target,
    '0',
    proxy
], log[2708 + 1875 + 4581 * -1]), log['length'] = 3022 + 6679 * 1 + -109 * 89;
var object = {
        0: _0x27a411(256),
        1: 666
    }, target = (_0x295fbc, _0x19770c) => _0x295fbc == '1' ? _0x19770c + (-5797 * 1 + -6740 + 12579) : _0x19770c, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === 'function'), assertEquals('{"0":"foo","1":708}', JSON[_0x27a411(217)](object, proxy)), assertEquals(-2898 + -5399 + 8300, log['length']);
for (var i in log)
    assertSame(target, log[i][-8404 + -6577 + -681 * -22]);
assertEquals(8383 + 690 * -9 + -2169, log[6308 + -489 * 1 + -5819 * 1][_0x27a411(251)]), assertEquals(_0x27a411(222), log[-8714 + 4533 + 37 * 113][9 * -1039 + 1 * 7759 + 2 * 796]), assertEquals('', log[4 * -2239 + -3984 + 12940][7 * 1251 + 8249 + -17003][-8371 + -3 * -29 + 8284]), assertEquals({
    0: _0x27a411(256),
    1: 666
}, log[5294 + 1838 + -4 * 1783][1 * -1414 + -1 * -3727 + -77 * 30][4196 + -6131 + 1936]), assertEquals(24 * 364 + -1 * -5857 + -14589, log[9536 + -18 * -517 + -18841]['length']), assertEquals('apply', log[-2341 + 9311 + 101 * -69][-1 * -7444 + -2240 + 2 * -2602]), assertEquals([
    '0',
    _0x27a411(256)
], log[-92 * 99 + -5512 + 14621][-6272 + -9041 + 15316]), assertEquals(-6437 + 6359 + 82, log[26 * 129 + 2554 + -2 * 2953][_0x27a411(251)]), assertEquals(_0x27a411(222), log[2026 + 1 * 1237 + 1 * -3261][-6696 + -6625 + 13321]), assertEquals([
    '1',
    -187 * 6 + 12 * -439 + 18 * 392
], log[781 + 2384 + -3163][9201 + 9687 + -18885]), log['length'] = 420 + -9723 * -1 + 441 * -23;
var object = {
        0: _0x27a411(256),
        1: 666
    }, target = [-6685 + 4677 + -2008 * -1], proxy = new Proxy(target, handler);
assertTrue(Array[_0x27a411(252)](proxy)), assertEquals('{"0":"foo"}', JSON['stringify'](object, proxy)), assertEquals(1818 + 7559 + -9375 * 1, log['length']);
for (var i in log)
    assertSame(target, log[i][1 * 3209 + 6377 + -9585]);
assertEquals([
    _0x27a411(249),
    target,
    _0x27a411(251),
    proxy
], log[-1 * 3565 + 4677 * -1 + 8242]), assertEquals([
    _0x27a411(249),
    target,
    '0',
    proxy
], log[9692 + 9749 * -1 + 58]), log['length'] = -53 * 137 + -3 * 354 + -41 * -203;
var object = [
        _0x27a411(256),
        3256 + -263 * 37 + 6517
    ], target = [-16 * -32 + 6425 + -7 * 991], proxy = new Proxy(target, handler);
assertTrue(Array[_0x27a411(252)](proxy)), assertEquals('["foo",42]', JSON[_0x27a411(217)](object, proxy)), assertEquals(6925 + -2692 + 1 * -4231, log[_0x27a411(251)]);
for (var i in log)
    assertSame(target, log[i][3 * 1381 + 1469 * -3 + 265]);
assertEquals([
    _0x27a411(249),
    target,
    'length',
    proxy
], log[6400 + -21 * -47 + -83 * 89]), assertEquals([
    _0x27a411(249),
    target,
    '0',
    proxy
], log[3 * 929 + 3343 + -6129]);
var getTrap = function (_0x3d64ff, _0x186415) {
        var _0x2ff6e1 = _0x27a411, _0x4a6029 = {
                'QaSvy': function (_0x2aca4f, _0x318829) {
                    return _0x2aca4f === _0x318829;
                },
                'lbbCa': _0x2ff6e1(251),
                'LOIVm': 'foo'
            };
        if (_0x4a6029[_0x2ff6e1(258)](_0x186415, _0x4a6029['lbbCa']))
            return {
                [Symbol[_0x2ff6e1(234)]]() {
                    return -519 * -10 + 8522 + -13670;
                }
            };
        if (_0x4a6029[_0x2ff6e1(258)](_0x186415, '41'))
            return _0x4a6029['LOIVm'];
        if (_0x4a6029[_0x2ff6e1(258)](_0x186415, '42'))
            return 'bar';
    }, target = [], proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array[_0x27a411(252)](proxy));
var object = {
    'foo': !![],
    'bar': 666
};
assertEquals('{"foo":true}', JSON[_0x27a411(217)](object, proxy));
var getTrap = function (_0xd989c, _0xfbc7b2) {
        var _0x1f77e = _0x27a411, _0x219227 = {
                'NYvLg': function (_0x38e7c6, _0x22715b) {
                    return _0x38e7c6 === _0x22715b;
                },
                'BCzES': _0x1f77e(251),
                'rIzDO': _0x1f77e(259)
            };
        if (_0x219227[_0x1f77e(260)](_0xfbc7b2, _0x219227['BCzES']))
            return Symbol();
        if (_0xfbc7b2 === '41')
            return _0x1f77e(256);
        if (_0xfbc7b2 === '42')
            return _0x219227[_0x1f77e(261)];
    }, target = [], proxy = new Proxy(target, { 'get': getTrap });
assertTrue(Array[_0x27a411(252)](proxy));
var object = {
    'foo': !![],
    'bar': 666
};
assertThrows(() => JSON[_0x27a411(217)](object, proxy), TypeError), log['length'] = 4785 + 35 * -277 + 4910;
var object = [
        'foo',
        1 * 9157 + -4 * -1238 + -14067
    ], target = { 'baz': 5 }, proxy = new Proxy(target, handler), replacer = (_0xfdbc79, _0x277068) => _0xfdbc79 === '1' ? proxy : _0x277068;
assertEquals(_0x27a411(262), JSON[_0x27a411(217)](object, replacer)), assertEquals(-6449 * 1 + -2870 * -1 + 398 * 9, log[_0x27a411(251)]);
for (var i in log)
    assertSame(target, log[i][8147 * 1 + 7537 + 1 * -15683]);
assertEquals([
    _0x27a411(254),
    target
], log[-1866 + -8449 + -10315 * -1]), assertEquals([
    _0x27a411(255),
    target,
    _0x27a411(263)
], log[4764 + -260 * 24 + 1477]), log['length'] = 660 + 1 * 8093 + 8753 * -1;
var object = [
        _0x27a411(256),
        4533 + -5033 * -1 + 1 * -9524
    ], target = [_0x27a411(259)], proxy = new Proxy(target, handler), replacer = (_0x1dd03b, _0x29e336) => _0x1dd03b === '1' ? proxy : _0x29e336;
assertEquals('["foo",["bar"]]', JSON[_0x27a411(217)](object, replacer)), assertEquals(7379 + 9585 + -2 * 8481, log[_0x27a411(251)]);
for (var i in log)
    assertSame(target, log[i][-5566 + 2 * 3223 + -3 * 293]);
assertEquals([
    _0x27a411(249),
    target,
    _0x27a411(251),
    proxy
], log[-2184 * 3 + -8492 + 15044]), assertEquals([
    _0x27a411(249),
    target,
    '0',
    proxy
], log[-3503 * 1 + -297 * -7 + -285 * -5]);
var getTrap = function (_0x1e4e44, _0x4bde4b) {
        var _0x47696c = _0x27a411, _0x4fe440 = {
                'CotTN': function (_0x5d763a, _0x50021a) {
                    return _0x5d763a === _0x50021a;
                },
                'Ymcdb': _0x47696c(251),
                'LbPni': _0x47696c(263),
                'AHJAR': _0x47696c(259)
            };
        if (_0x4fe440[_0x47696c(264)](_0x4bde4b, _0x4fe440[_0x47696c(265)]))
            return {
                [Symbol[_0x47696c(234)]]() {
                    return 1 * 9313 + -7466 * -1 + -1864 * 9;
                }
            };
        if (_0x4fe440[_0x47696c(264)](_0x4bde4b, '2'))
            return _0x4fe440[_0x47696c(266)];
        if (_0x4bde4b === '3')
            return _0x4fe440['AHJAR'];
    }, target = [], proxy = new Proxy(target, { 'get': getTrap }), replacer = (_0x5ab97a, _0x4f86c2) => _0x5ab97a === 'goo' ? proxy : _0x4f86c2, object = {
        'foo': !![],
        'goo': ![]
    };
assertEquals('{"foo":true,"goo":[null,null,"baz"]}', JSON['stringify'](object, replacer));
var getTrap = function (_0x5b7e01, _0x15a837) {
        var _0x424b81 = _0x27a411, _0x39be0a = {
                'HsWbl': function (_0x598a4b, _0x5f0f09) {
                    return _0x598a4b === _0x5f0f09;
                },
                'zSsFr': function (_0x398c71) {
                    return _0x398c71();
                },
                'gyPGN': _0x424b81(263),
                'mVDos': _0x424b81(259)
            };
        if (_0x39be0a[_0x424b81(267)](_0x15a837, _0x424b81(251)))
            return _0x39be0a[_0x424b81(268)](Symbol);
        if (_0x39be0a[_0x424b81(267)](_0x15a837, '2'))
            return _0x39be0a[_0x424b81(269)];
        if (_0x15a837 === '3')
            return _0x39be0a[_0x424b81(270)];
    }, target = [], proxy = new Proxy(target, { 'get': getTrap }), replacer = (_0x21c5f1, _0x3ddb5c) => _0x21c5f1 === _0x27a411(271) ? proxy : _0x3ddb5c, object = {
        'foo': !![],
        'goo': ![]
    };
assertThrows(() => JSON[_0x27a411(217)](object, replacer), TypeError), log[_0x27a411(251)] = -6933 + 1 * -2306 + 9239;
var target = () => -739 * 1 + 32 * -226 + 8637, proxy = new Proxy(target, handler), replacer = (_0x4c00d8, _0x30d92c) => _0x4c00d8 === '1' ? proxy : _0x30d92c;
assertEquals('["foo",null]', JSON['stringify']([
    _0x27a411(256),
    3403 + -1724 + -1 * 1637
], replacer)), assertEquals(-11 * 412 + -1 * 4878 + -1 * -9410, log[_0x27a411(251)]), assertEquals(_0x27a411(272), JSON[_0x27a411(217)]({
    0: _0x27a411(256),
    1: 42
}, replacer)), assertEquals(-836 + -6344 + 4 * 1795, log['length']), log['length'] = -6242 + 9913 * -1 + 16155;
var target = () => 3413 * 1 + -8484 + -5113 * -1, proxy = new Proxy(target, handler);
assertTrue(typeof proxy === _0x27a411(220)), assertEquals(8867 * -1 + 1 * -2086 + 15 * 733, JSON[_0x27a411(273)](_0x27a411(274), proxy)), assertEquals(9196 + 2 * -4252 + -689, log[_0x27a411(251)]);
for (var i in log)
    assertSame(target, log[i][-4479 + 2650 * 2 + -820]);
assertEquals(-4432 + -93 * 22 + 6482, log[1057 * 3 + 2563 * -2 + 5 * 391][_0x27a411(251)]), assertEquals(_0x27a411(222), log[8255 * 1 + -3774 * 1 + 1 * -4481][-2 * -2082 + -5198 + 22 * 47]), assertEquals([
    '0',
    !![]
], log[2245 + -6655 + -70 * -63][-53 * 108 + 1689 + -1 * -4038]), assertEquals(276 * 1 + -6105 + 5833, log[2865 * -1 + -8620 + 11486][_0x27a411(251)]), assertEquals('apply', log[-6025 + -3440 + 9466][-2316 + 82 * 76 + 89 * -44]), assertEquals([
    '1',
    ![]
], log[7939 * 1 + -1641 + 6297 * -1][1053 * -7 + -8 * -731 + -763 * -2]), assertEquals(-38 * -191 + 1 * 6038 + -13292, log[2712 + -3490 + 780][_0x27a411(251)]), assertEquals(_0x27a411(222), log[6705 + 5887 + -12590][-9031 + 9332 * 1 + 7 * -43]), assertEquals([
    '',
    [
        9414 + 280 + -9652,
        -6120 + 9072 + -2910
    ]
], log[-9907 * -1 + -9301 * -1 + 582 * -33][-72 * 89 + 1 * -9322 + 15733]), log[_0x27a411(251)] = 287 + 1676 + -1 * 1963;
var target = { 'baz': 42 }, proxy = new Proxy(target, handler), reviver = function (_0x7178a5, _0x173d46) {
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
            return 1995 + -7522 + -1 * -5532;
        if (_0xc4bb25['QqXcx'](_0x7178a5, _0xc4bb25[_0x34a7c2(275)]))
            this[_0x34a7c2(259)] = proxy;
        return _0x173d46;
    };
assertEquals({
    'foo': 0,
    'bar': proxy
}, JSON[_0x27a411(273)](_0x27a411(276), reviver)), assertEquals(1758 + -6862 + -2554 * -2, log[_0x27a411(251)]);
for (var i in log)
    assertSame(target, log[i][-115 * -40 + -1168 * 5 + -1241 * -1]);
assertEquals([
    _0x27a411(254),
    target
], log[-4909 + -9099 + 14008]), assertEquals([
    _0x27a411(255),
    target,
    _0x27a411(263)
], log[2 * -2129 + -545 + -1201 * -4]), assertEquals([
    'get',
    target,
    'baz',
    proxy
], log[-1959 * 3 + 9052 + 19 * -167]), assertEquals([
    _0x27a411(277),
    target,
    'baz',
    {
        'value': 5,
        'configurable': !![],
        'writable': !![],
        'enumerable': !![]
    }
], log[-1216 + 244 * 16 + 2685 * -1]), log[_0x27a411(251)] = 3 * 2004 + 48 * -106 + -924;
var target = [9 * 998 + 129 * -48 + -2748], proxy = new Proxy(target, handler);
assertTrue(Array[_0x27a411(252)](proxy));
var reviver = function (_0x2ba106, _0x5af066) {
        var _0x3b1f71 = _0x27a411, _0x45c4d5 = {
                'PiHXK': function (_0x3cf6d0, _0x49c5d9) {
                    return _0x3cf6d0 === _0x49c5d9;
                },
                'UCWYa': _0x3b1f71(256)
            };
        if (_0x45c4d5[_0x3b1f71(278)](_0x2ba106, '0'))
            return undefined;
        if (_0x2ba106 === _0x45c4d5[_0x3b1f71(279)])
            this[_0x3b1f71(259)] = proxy;
        return _0x5af066;
    }, result = JSON[_0x27a411(273)](_0x27a411(276), reviver);
assertEquals({
    'foo': 0,
    'bar': proxy
}, result), assertSame(result['bar'], proxy), assertEquals(-3661 + -7 * 97 + 4343 * 1, log[_0x27a411(251)]);
for (var i in log)
    assertSame(target, log[i][-53 * 73 + 8356 + -1 * 4486]);
assertEquals([
    _0x27a411(249),
    target,
    'length',
    proxy
], log[9004 + 6481 + 19 * -815]), assertEquals([
    'get',
    target,
    '0',
    proxy
], log[2799 + -2 * -1619 + 1006 * -6]), assertEquals([
    _0x27a411(280),
    target,
    '0'
], log[9667 + -7900 + 353 * -5]), proxy = new Proxy([], {
    'get': function (_0x13eb32, _0x22dfaf) {
        var _0x479ba3 = _0x27a411, _0x1b9475 = {
                'tyYgi': function (_0x29276d, _0x2e4daa) {
                    return _0x29276d == _0x2e4daa;
                },
                'baLBO': _0x479ba3(251)
            };
        if (_0x1b9475['tyYgi'](_0x22dfaf, _0x1b9475[_0x479ba3(281)]))
            return 85 * 13 + -709 * 3 + 1029;
        return -2089 * -1 + -7583 * -1 + -9672;
    }
}), assertEquals(_0x27a411(282), JSON[_0x27a411(217)]([proxy])), proxy = new Proxy([], {
    'get': function (_0x55199e, _0x1942c3) {
        var _0x5d7610 = _0x27a411, _0x1bb7cd = {
                'keFpe': function (_0x50744c, _0x50d833) {
                    return _0x50744c == _0x50d833;
                },
                'HNazB': _0x5d7610(251)
            };
        if (_0x1bb7cd[_0x5d7610(283)](_0x1942c3, _0x1bb7cd[_0x5d7610(284)]))
            return 1e+40;
        return -175 * -5 + -1251 * -3 + -4628;
    }
}), assertThrows(() => JSON[_0x27a411(217)]([proxy]), RangeError), log = [], proxy = new Proxy({}, {
    'ownKeys': function () {
        var _0x1e3e38 = _0x27a411, _0x2d0d06 = { 'wKjbA': _0x1e3e38(254) };
        return log[_0x1e3e38(250)](_0x2d0d06[_0x1e3e38(285)]), [
            '0',
            'a',
            'b'
        ];
    },
    'get': function (_0x422e5c, _0x1af1ad) {
        var _0x9dedb2 = _0x27a411, _0x41cdf6 = { 'RABAU': _0x9dedb2(286) };
        return log[_0x9dedb2(250)](_0x41cdf6['RABAU'] + _0x1af1ad), _0x1af1ad[_0x9dedb2(218)]();
    },
    'getOwnPropertyDescriptor': function (_0x19bdea, _0xfae1f) {
        var _0x132bcf = _0x27a411, _0x4e4c0b = {
                'Hzlgj': function (_0x1bf586, _0x2a6055) {
                    return _0x1bf586 + _0x2a6055;
                },
                'iGhpv': 'descriptor '
            };
        return log[_0x132bcf(250)](_0x4e4c0b['Hzlgj'](_0x4e4c0b[_0x132bcf(287)], _0xfae1f)), {
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
}), assertEquals(_0x27a411(288), JSON[_0x27a411(217)]([proxy])), assertEquals([
    'get toJSON',
    _0x27a411(254),
    _0x27a411(289),
    'descriptor a',
    _0x27a411(290),
    _0x27a411(291),
    _0x27a411(292),
    _0x27a411(293)
], log);