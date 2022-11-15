require(_0x1e1e8d(284));
const assert = require('assert'), util = require('util');
class MyDate extends Date {
    constructor(..._0x470daa) {
        super(..._0x470daa), this[0] = '1';
    }
}
class MyRegExp extends RegExp {
    constructor(..._0x5d45f2) {
        super(..._0x5d45f2), this[0] = '1';
    }
}
{
    const arr = new Uint8Array([
            120,
            121,
            122,
            10
        ]), buf = Buffer[_0x1e1e8d(285)](arr);
    assert[_0x1e1e8d(286)](util['isDeepStrictEqual'](arr, buf), ![]);
    const buf2 = Buffer[_0x1e1e8d(285)](arr);
    buf2[_0x1e1e8d(287)] = 1, assert[_0x1e1e8d(286)](util[_0x1e1e8d(288)](buf2, buf), ![]);
    const arr2 = new Uint8Array([
        120,
        121,
        122,
        10
    ]);
    arr2[_0x1e1e8d(287)] = 5, assert[_0x1e1e8d(286)](util['isDeepStrictEqual'](arr, arr2), ![]);
}
{
    const date = new Date('2016'), date2 = new MyDate(_0x1e1e8d(289));
    assert['strictEqual'](util['isDeepStrictEqual'](date, date2), ![]), assert[_0x1e1e8d(286)](util['isDeepStrictEqual'](date2, date), ![]);
}
{
    const re1 = new RegExp(_0x1e1e8d(290)), re2 = new MyRegExp(_0x1e1e8d(290));
    assert[_0x1e1e8d(286)](util[_0x1e1e8d(288)](re1, re2), ![]);
}
{
    const similar = new Set([
        { 0: '1' },
        { 0: 1 },
        new String('1'),
        ['1'],
        [1],
        new MyDate(_0x1e1e8d(289)),
        new MyRegExp(_0x1e1e8d(290)),
        new Int8Array([1]),
        new Uint8Array([1]),
        new Int16Array([1]),
        new Uint16Array([1]),
        new Int32Array([1]),
        new Uint32Array([1]),
        Buffer[_0x1e1e8d(285)]([1])
    ]);
    for (const a of similar) {
        for (const b of similar) {
            a !== b && assert[_0x1e1e8d(286)](util[_0x1e1e8d(288)](a, b), ![]);
        }
    }
}
function utilIsDeepStrict(_0xfc0905, _0x4117c1) {
    const _0x405852 = _0x1e1e8d;
    assert['strictEqual'](util[_0x405852(288)](_0xfc0905, _0x4117c1), !![]), assert[_0x405852(286)](util['isDeepStrictEqual'](_0x4117c1, _0xfc0905), !![]);
}
function notUtilIsDeepStrict(_0x54a22d, _0x1c82f8) {
    const _0x228096 = _0x1e1e8d;
    assert[_0x228096(286)](util[_0x228096(288)](_0x54a22d, _0x1c82f8), ![]), assert[_0x228096(286)](util['isDeepStrictEqual'](_0x1c82f8, _0x54a22d), ![]);
}
utilIsDeepStrict(new Set(), new Set()), utilIsDeepStrict(new Map(), new Map()), utilIsDeepStrict(new Set([
    1,
    2,
    3
]), new Set([
    1,
    2,
    3
])), notUtilIsDeepStrict(new Set([
    1,
    2,
    3
]), new Set([
    1,
    2,
    3,
    4
])), notUtilIsDeepStrict(new Set([
    1,
    2,
    3,
    4
]), new Set([
    1,
    2,
    3
])), utilIsDeepStrict(new Set([
    '1',
    '2',
    '3'
]), new Set([
    '1',
    '2',
    '3'
])), utilIsDeepStrict(new Set([
    [
        1,
        2
    ],
    [
        3,
        4
    ]
]), new Set([
    [
        3,
        4
    ],
    [
        1,
        2
    ]
]));
{
    const a = [
            1,
            2
        ], b = [
            3,
            4
        ], c = [
            1,
            2
        ], d = [
            3,
            4
        ];
    utilIsDeepStrict({
        'a': a,
        'b': b,
        's': new Set([
            a,
            b
        ])
    }, {
        'a': c,
        'b': d,
        's': new Set([
            d,
            c
        ])
    });
}
utilIsDeepStrict(new Map([
    [
        1,
        1
    ],
    [
        2,
        2
    ]
]), new Map([
    [
        1,
        1
    ],
    [
        2,
        2
    ]
])), utilIsDeepStrict(new Map([
    [
        1,
        1
    ],
    [
        2,
        2
    ]
]), new Map([
    [
        2,
        2
    ],
    [
        1,
        1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        1,
        1
    ],
    [
        2,
        2
    ]
]), new Map([
    [
        1,
        2
    ],
    [
        2,
        1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        [1],
        1
    ],
    [
        {},
        2
    ]
]), new Map([
    [
        [1],
        2
    ],
    [
        {},
        1
    ]
])), notUtilIsDeepStrict(new Set([1]), [1]), notUtilIsDeepStrict(new Set(), []), notUtilIsDeepStrict(new Set(), {}), notUtilIsDeepStrict(new Map([[
        'a',
        1
    ]]), { 'a': 1 }), notUtilIsDeepStrict(new Map(), []), notUtilIsDeepStrict(new Map(), {}), notUtilIsDeepStrict(new Set(['1']), new Set([1])), notUtilIsDeepStrict(new Map([[
        '1',
        'a'
    ]]), new Map([[
        1,
        'a'
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        1
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        2
    ]])), utilIsDeepStrict(new Set([{}]), new Set([{}])), notUtilIsDeepStrict(new Set([
    { 'a': 1 },
    { 'a': 1 }
]), new Set([
    { 'a': 1 },
    { 'a': 2 }
])), notUtilIsDeepStrict(new Set([
    { 'a': 1 },
    { 'a': 1 },
    { 'a': 2 }
]), new Set([
    { 'a': 1 },
    { 'a': 2 },
    { 'a': 2 }
])), notUtilIsDeepStrict(new Map([
    [
        { 'x': 1 },
        5
    ],
    [
        { 'x': 1 },
        5
    ]
]), new Map([
    [
        { 'x': 1 },
        5
    ],
    [
        { 'x': 2 },
        5
    ]
])), notUtilIsDeepStrict(new Set([
    3,
    '3'
]), new Set([
    3,
    4
])), notUtilIsDeepStrict(new Map([
    [
        3,
        0
    ],
    [
        '3',
        0
    ]
]), new Map([
    [
        3,
        0
    ],
    [
        4,
        0
    ]
])), notUtilIsDeepStrict(new Set([
    { 'a': 1 },
    { 'a': 1 },
    { 'a': 2 }
]), new Set([
    { 'a': 1 },
    { 'a': 2 },
    { 'a': 2 }
])), utilIsDeepStrict(new Map([
    [
        1,
        'a'
    ],
    [
        {},
        'a'
    ]
]), new Map([
    [
        1,
        'a'
    ],
    [
        {},
        'a'
    ]
])), utilIsDeepStrict(new Set([
    1,
    'a',
    [
        {},
        'a'
    ]
]), new Set([
    1,
    'a',
    [
        {},
        'a'
    ]
])), notUtilIsDeepStrict(new Map([
    [
        1,
        'a'
    ],
    [
        '1',
        'b'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        !![],
        'b'
    ]
])), notUtilIsDeepStrict(new Set(['a']), new Set(['b'])), utilIsDeepStrict(new Map([
    [
        {},
        'a'
    ],
    [
        {},
        'b'
    ]
]), new Map([
    [
        {},
        'b'
    ],
    [
        {},
        'a'
    ]
])), notUtilIsDeepStrict(new Map([
    [
        !![],
        'a'
    ],
    [
        '1',
        'b'
    ],
    [
        1,
        'a'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        1,
        'b'
    ],
    [
        !![],
        'a'
    ]
])), notUtilIsDeepStrict(new Map([
    [
        !![],
        'a'
    ],
    [
        '1',
        'b'
    ],
    [
        1,
        'c'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        1,
        'b'
    ],
    [
        !![],
        'a'
    ]
])), notUtilIsDeepStrict(new Set([
    {},
    {}
]), new Set([
    {},
    1
])), notUtilIsDeepStrict(new Set([
    [
        {},
        1
    ],
    [
        {},
        1
    ]
]), new Set([
    [
        {},
        1
    ],
    [
        1,
        1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        1
    ],
    [
        {},
        1
    ]
]), new Map([
    [
        {},
        1
    ],
    [
        1,
        1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        1
    ],
    [
        !![],
        1
    ]
]), new Map([
    [
        {},
        1
    ],
    [
        1,
        1
    ]
])), notUtilIsDeepStrict(new Set([
    1,
    !![],
    ![]
]), new Set([
    '1',
    0,
    '0'
])), notUtilIsDeepStrict(new Map([
    [
        1,
        5
    ],
    [
        !![],
        5
    ],
    [
        ![],
        5
    ]
]), new Map([
    [
        '1',
        5
    ],
    [
        0,
        5
    ],
    [
        '0',
        5
    ]
])), utilIsDeepStrict(new Map([[
        1,
        undefined
    ]]), new Map([[
        1,
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        1,
        null
    ]]), new Map([[
        '1',
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        1,
        undefined
    ]]), new Map([[
        2,
        undefined
    ]])), utilIsDeepStrict(new Map([[
        null,
        3
    ]]), new Map([[
        null,
        3
    ]])), notUtilIsDeepStrict(new Map([[
        null,
        undefined
    ]]), new Map([[
        undefined,
        null
    ]])), notUtilIsDeepStrict(new Set([null]), new Set([undefined]));
{
    const b = {};
    b['b'] = b;
    const c = {};
    c['b'] = c, utilIsDeepStrict(b, c);
    const d = {};
    d['a'] = 1, d['b'] = d;
    const e = {};
    e['a'] = 1, e['b'] = {}, notUtilIsDeepStrict(d, e);
}
{
    const a = {}, b = {};
    a['a'] = a, b['a'] = {}, b['a']['a'] = a, utilIsDeepStrict(a, b);
}
{
    const a = new Set(), b = new Set(), c = new Set();
    a[_0x1e1e8d(291)](a), b[_0x1e1e8d(291)](b), c['add'](a), utilIsDeepStrict(b, c);
}
function _0x5192(_0x3bd093, _0x50160f) {
    return _0x5192 = function (_0x551ecf, _0x51923b) {
        _0x551ecf = _0x551ecf - 273;
        let _0x1cb81a = _0x551e[_0x551ecf];
        return _0x1cb81a;
    }, _0x5192(_0x3bd093, _0x50160f);
}
{
    const args = function () {
        return arguments;
    }();
    notUtilIsDeepStrict([], args);
}
{
    const returnArguments = function () {
            return arguments;
        }, someArgs = returnArguments('a'), sameArgs = returnArguments('a'), diffArgs = returnArguments('b');
    notUtilIsDeepStrict(someArgs, ['a']), notUtilIsDeepStrict(someArgs, { '0': 'a' }), notUtilIsDeepStrict(someArgs, diffArgs), utilIsDeepStrict(someArgs, sameArgs);
}
{
    const values = [
        123,
        Infinity,
        0,
        null,
        undefined,
        ![],
        !![],
        {},
        [],
        () => {
        }
    ];
    utilIsDeepStrict(new Set(values), new Set(values)), utilIsDeepStrict(new Set(values), new Set(values['reverse']()));
    const mapValues = values[_0x1e1e8d(292)](_0x3379f0 => [
        _0x3379f0,
        { 'a': 5 }
    ]);
    utilIsDeepStrict(new Map(mapValues), new Map(mapValues)), utilIsDeepStrict(new Map(mapValues), new Map(mapValues[_0x1e1e8d(293)]()));
}
{
    const s1 = new Set(), s2 = new Set();
    s1[_0x1e1e8d(291)](1), s1[_0x1e1e8d(291)](2), s2[_0x1e1e8d(291)](2), s2[_0x1e1e8d(291)](1), utilIsDeepStrict(s1, s2);
}
{
    const m1 = new Map(), m2 = new Map(), obj = {
            'a': 5,
            'b': 6
        };
    m1[_0x1e1e8d(294)](1, obj), m1[_0x1e1e8d(294)](2, 'hi'), m1[_0x1e1e8d(294)](3, [
        1,
        2,
        3
    ]), m2[_0x1e1e8d(294)](2, 'hi'), m2[_0x1e1e8d(294)](1, obj), m2[_0x1e1e8d(294)](3, [
        1,
        2,
        3
    ]), utilIsDeepStrict(m1, m2);
}
{
    const m1 = new Map(), m2 = new Map();
    m1[_0x1e1e8d(294)](1, m1), m2['set'](1, new Map()), notUtilIsDeepStrict(m1, m2);
}
{
    const map1 = new Map([[
                1,
                1
            ]]), map2 = new Map([[
                1,
                '1'
            ]]);
    assert['strictEqual'](util[_0x1e1e8d(288)](map1, map2), ![]);
}
{
    const s1 = new Set(), s2 = new Set();
    s1['x'] = 5, notUtilIsDeepStrict(s1, s2);
    const m1 = new Map(), m2 = new Map();
    m1['x'] = 5, notUtilIsDeepStrict(m1, m2);
}
{
    const s1 = new Set();
    s1[_0x1e1e8d(291)](s1);
    const s2 = new Set();
    s2[_0x1e1e8d(291)](s2), utilIsDeepStrict(s1, s2);
    const m1 = new Map();
    m1[_0x1e1e8d(294)](2, m1);
    const m2 = new Map();
    m2[_0x1e1e8d(294)](2, m2), utilIsDeepStrict(m1, m2);
    const m3 = new Map();
    m3[_0x1e1e8d(294)](m3, 2);
    const m4 = new Map();
    m4[_0x1e1e8d(294)](m4, 2), utilIsDeepStrict(m3, m4);
}
utilIsDeepStrict([
    1,
    ,
    ,
    3
], [
    1,
    ,
    ,
    3
]), notUtilIsDeepStrict([
    1,
    ,
    ,
    3
], [
    1,
    ,
    ,
    3,
    ,
    ,
]);
{
    const err1 = new Error('foo1'), err2 = new Error(_0x1e1e8d(295)), err3 = new TypeError(_0x1e1e8d(296));
    notUtilIsDeepStrict(err1, err2, assert[_0x1e1e8d(297)]), notUtilIsDeepStrict(err1, err3, assert[_0x1e1e8d(297)]), notUtilIsDeepStrict(err1, {}, assert[_0x1e1e8d(297)]);
}
assert[_0x1e1e8d(286)](util[_0x1e1e8d(288)](NaN, NaN), !![]), assert[_0x1e1e8d(286)](util[_0x1e1e8d(288)]({ 'a': NaN }, { 'a': NaN }), !![]), assert['strictEqual'](util['isDeepStrictEqual']([
    1,
    2,
    NaN,
    4
], [
    1,
    2,
    NaN,
    4
]), !![]);
{
    const boxedString = new String(_0x1e1e8d(290)), boxedSymbol = Object(Symbol());
    notUtilIsDeepStrict(new Boolean(!![]), Object(![])), notUtilIsDeepStrict(Object(!![]), new Number(1)), notUtilIsDeepStrict(new Number(2), new Number(1)), notUtilIsDeepStrict(boxedSymbol, Object(Symbol())), notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(boxedSymbol, boxedSymbol), utilIsDeepStrict(Object(!![]), Object(!![])), utilIsDeepStrict(Object(2), Object(2)), utilIsDeepStrict(boxedString, Object('test')), boxedString[_0x1e1e8d(298)] = !![], notUtilIsDeepStrict(boxedString, Object(_0x1e1e8d(290))), boxedSymbol['slow'] = !![], notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(Object(BigInt(1)), Object(BigInt(1))), notUtilIsDeepStrict(Object(BigInt(1)), Object(BigInt(2)));
    const booleanish = new Boolean(!![]);
    Object[_0x1e1e8d(299)](booleanish, Symbol['toStringTag'], { 'value': _0x1e1e8d(300) }), Object[_0x1e1e8d(301)](booleanish, String[_0x1e1e8d(302)]), notUtilIsDeepStrict(booleanish, new String('true'));
    const numberish = new Number(42);
    Object[_0x1e1e8d(299)](numberish, Symbol[_0x1e1e8d(303)], { 'value': _0x1e1e8d(300) }), Object['setPrototypeOf'](numberish, String[_0x1e1e8d(302)]), notUtilIsDeepStrict(numberish, new String('42'));
    const stringish = new String('0');
    Object[_0x1e1e8d(299)](stringish, Symbol[_0x1e1e8d(303)], { 'value': _0x1e1e8d(304) }), Object[_0x1e1e8d(301)](stringish, Number[_0x1e1e8d(302)]), notUtilIsDeepStrict(stringish, new Number(0));
    const bigintish = new Object(BigInt(42));
    Object[_0x1e1e8d(299)](bigintish, Symbol[_0x1e1e8d(303)], { 'value': 'String' }), Object['setPrototypeOf'](bigintish, String[_0x1e1e8d(302)]), notUtilIsDeepStrict(bigintish, new String('42'));
    const symbolish = new Object(Symbol(_0x1e1e8d(305)));
    Object['defineProperty'](symbolish, Symbol[_0x1e1e8d(303)], { 'value': _0x1e1e8d(300) }), Object[_0x1e1e8d(301)](symbolish, String[_0x1e1e8d(302)]), notUtilIsDeepStrict(symbolish, new String(_0x1e1e8d(305)));
}
notUtilIsDeepStrict(0, -0), utilIsDeepStrict(-0, -0);
{
    const symbol1 = Symbol(), obj1 = { [symbol1]: 1 }, obj2 = { [symbol1]: 1 }, obj3 = { [Symbol()]: 1 }, obj4 = {};
    Object['defineProperty'](obj2, Symbol(), { 'value': 1 }), Object['defineProperty'](obj4, symbol1, { 'value': 1 }), notUtilIsDeepStrict(obj1, obj3), utilIsDeepStrict(obj1, obj2), notUtilIsDeepStrict(obj1, obj4);
    const a = new Uint8Array(4), b = new Uint8Array(4);
    a[symbol1] = !![], b[symbol1] = ![], notUtilIsDeepStrict(a, b), b[symbol1] = !![], utilIsDeepStrict(a, b);
    const boxedStringA = new String(_0x1e1e8d(290)), boxedStringB = new String(_0x1e1e8d(290));
    boxedStringA[symbol1] = !![], notUtilIsDeepStrict(boxedStringA, boxedStringB), boxedStringA[symbol1] = !![], utilIsDeepStrict(a, b);
}