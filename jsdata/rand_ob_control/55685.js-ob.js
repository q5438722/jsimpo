'use strict';
require('../common');
const assert = require('assert'), util = require('util');
class MyDate extends Date {
    constructor(..._0x13275b) {
        super(..._0x13275b), this[0x0] = '1';
    }
}
class MyRegExp extends RegExp {
    constructor(..._0x399504) {
        super(..._0x399504), this[0x0] = '1';
    }
}
{
    const arr = new Uint8Array([
            0x78,
            0x79,
            0x7a,
            0xa
        ]), buf = Buffer['from'](arr);
    assert['strictEqual'](util['isDeepStrictEqual'](arr, buf), ![]);
    const buf2 = Buffer['from'](arr);
    buf2['prop'] = 0x1, assert['strictEqual'](util['isDeepStrictEqual'](buf2, buf), ![]);
    const arr2 = new Uint8Array([
        0x78,
        0x79,
        0x7a,
        0xa
    ]);
    arr2['prop'] = 0x5, assert['strictEqual'](util['isDeepStrictEqual'](arr, arr2), ![]);
}
{
    const date = new Date('2016'), date2 = new MyDate('2016');
    assert['strictEqual'](util['isDeepStrictEqual'](date, date2), ![]), assert['strictEqual'](util['isDeepStrictEqual'](date2, date), ![]);
}
{
    const re1 = new RegExp('test'), re2 = new MyRegExp('test');
    assert['strictEqual'](util['isDeepStrictEqual'](re1, re2), ![]);
}
{
    const similar = new Set([
        { 0x0: '1' },
        { 0x0: 0x1 },
        new String('1'),
        ['1'],
        [0x1],
        new MyDate('2016'),
        new MyRegExp('test'),
        new Int8Array([0x1]),
        new Uint8Array([0x1]),
        new Int16Array([0x1]),
        new Uint16Array([0x1]),
        new Int32Array([0x1]),
        new Uint32Array([0x1]),
        Buffer['from']([0x1])
    ]);
    for (const a of similar) {
        for (const b of similar) {
            a !== b && assert['strictEqual'](util['isDeepStrictEqual'](a, b), ![]);
        }
    }
}
function utilIsDeepStrict(_0x63b5f6, _0x3fd858) {
    assert['strictEqual'](util['isDeepStrictEqual'](_0x63b5f6, _0x3fd858), !![]), assert['strictEqual'](util['isDeepStrictEqual'](_0x3fd858, _0x63b5f6), !![]);
}
function notUtilIsDeepStrict(_0x3c73e8, _0x5950a5) {
    assert['strictEqual'](util['isDeepStrictEqual'](_0x3c73e8, _0x5950a5), ![]), assert['strictEqual'](util['isDeepStrictEqual'](_0x5950a5, _0x3c73e8), ![]);
}
utilIsDeepStrict(new Set(), new Set()), utilIsDeepStrict(new Map(), new Map()), utilIsDeepStrict(new Set([
    0x1,
    0x2,
    0x3
]), new Set([
    0x1,
    0x2,
    0x3
])), notUtilIsDeepStrict(new Set([
    0x1,
    0x2,
    0x3
]), new Set([
    0x1,
    0x2,
    0x3,
    0x4
])), notUtilIsDeepStrict(new Set([
    0x1,
    0x2,
    0x3,
    0x4
]), new Set([
    0x1,
    0x2,
    0x3
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
        0x1,
        0x2
    ],
    [
        0x3,
        0x4
    ]
]), new Set([
    [
        0x3,
        0x4
    ],
    [
        0x1,
        0x2
    ]
]));
{
    const a = [
            0x1,
            0x2
        ], b = [
            0x3,
            0x4
        ], c = [
            0x1,
            0x2
        ], d = [
            0x3,
            0x4
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
        0x1,
        0x1
    ],
    [
        0x2,
        0x2
    ]
]), new Map([
    [
        0x1,
        0x1
    ],
    [
        0x2,
        0x2
    ]
])), utilIsDeepStrict(new Map([
    [
        0x1,
        0x1
    ],
    [
        0x2,
        0x2
    ]
]), new Map([
    [
        0x2,
        0x2
    ],
    [
        0x1,
        0x1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        0x1,
        0x1
    ],
    [
        0x2,
        0x2
    ]
]), new Map([
    [
        0x1,
        0x2
    ],
    [
        0x2,
        0x1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        [0x1],
        0x1
    ],
    [
        {},
        0x2
    ]
]), new Map([
    [
        [0x1],
        0x2
    ],
    [
        {},
        0x1
    ]
])), notUtilIsDeepStrict(new Set([0x1]), [0x1]), notUtilIsDeepStrict(new Set(), []), notUtilIsDeepStrict(new Set(), {}), notUtilIsDeepStrict(new Map([[
        'a',
        0x1
    ]]), { 'a': 0x1 }), notUtilIsDeepStrict(new Map(), []), notUtilIsDeepStrict(new Map(), {}), notUtilIsDeepStrict(new Set(['1']), new Set([0x1])), notUtilIsDeepStrict(new Map([[
        '1',
        'a'
    ]]), new Map([[
        0x1,
        'a'
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        0x1
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        0x2
    ]])), utilIsDeepStrict(new Set([{}]), new Set([{}])), notUtilIsDeepStrict(new Set([
    { 'a': 0x1 },
    { 'a': 0x1 }
]), new Set([
    { 'a': 0x1 },
    { 'a': 0x2 }
])), notUtilIsDeepStrict(new Set([
    { 'a': 0x1 },
    { 'a': 0x1 },
    { 'a': 0x2 }
]), new Set([
    { 'a': 0x1 },
    { 'a': 0x2 },
    { 'a': 0x2 }
])), notUtilIsDeepStrict(new Map([
    [
        { 'x': 0x1 },
        0x5
    ],
    [
        { 'x': 0x1 },
        0x5
    ]
]), new Map([
    [
        { 'x': 0x1 },
        0x5
    ],
    [
        { 'x': 0x2 },
        0x5
    ]
])), notUtilIsDeepStrict(new Set([
    0x3,
    '3'
]), new Set([
    0x3,
    0x4
])), notUtilIsDeepStrict(new Map([
    [
        0x3,
        0x0
    ],
    [
        '3',
        0x0
    ]
]), new Map([
    [
        0x3,
        0x0
    ],
    [
        0x4,
        0x0
    ]
])), notUtilIsDeepStrict(new Set([
    { 'a': 0x1 },
    { 'a': 0x1 },
    { 'a': 0x2 }
]), new Set([
    { 'a': 0x1 },
    { 'a': 0x2 },
    { 'a': 0x2 }
])), utilIsDeepStrict(new Map([
    [
        0x1,
        'a'
    ],
    [
        {},
        'a'
    ]
]), new Map([
    [
        0x1,
        'a'
    ],
    [
        {},
        'a'
    ]
])), utilIsDeepStrict(new Set([
    0x1,
    'a',
    [
        {},
        'a'
    ]
]), new Set([
    0x1,
    'a',
    [
        {},
        'a'
    ]
])), notUtilIsDeepStrict(new Map([
    [
        0x1,
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
        0x1,
        'a'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        0x1,
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
        0x1,
        'c'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        0x1,
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
    0x1
])), notUtilIsDeepStrict(new Set([
    [
        {},
        0x1
    ],
    [
        {},
        0x1
    ]
]), new Set([
    [
        {},
        0x1
    ],
    [
        0x1,
        0x1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        0x1
    ],
    [
        {},
        0x1
    ]
]), new Map([
    [
        {},
        0x1
    ],
    [
        0x1,
        0x1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        0x1
    ],
    [
        !![],
        0x1
    ]
]), new Map([
    [
        {},
        0x1
    ],
    [
        0x1,
        0x1
    ]
])), notUtilIsDeepStrict(new Set([
    0x1,
    !![],
    ![]
]), new Set([
    '1',
    0x0,
    '0'
])), notUtilIsDeepStrict(new Map([
    [
        0x1,
        0x5
    ],
    [
        !![],
        0x5
    ],
    [
        ![],
        0x5
    ]
]), new Map([
    [
        '1',
        0x5
    ],
    [
        0x0,
        0x5
    ],
    [
        '0',
        0x5
    ]
])), utilIsDeepStrict(new Map([[
        0x1,
        undefined
    ]]), new Map([[
        0x1,
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        0x1,
        null
    ]]), new Map([[
        '1',
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        0x1,
        undefined
    ]]), new Map([[
        0x2,
        undefined
    ]])), utilIsDeepStrict(new Map([[
        null,
        0x3
    ]]), new Map([[
        null,
        0x3
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
    d['a'] = 0x1, d['b'] = d;
    const e = {};
    e['a'] = 0x1, e['b'] = {}, notUtilIsDeepStrict(d, e);
}
{
    const a = {}, b = {};
    a['a'] = a, b['a'] = {}, b['a']['a'] = a, utilIsDeepStrict(a, b);
}
{
    const a = new Set(), b = new Set(), c = new Set();
    a['add'](a), b['add'](b), c['add'](a), utilIsDeepStrict(b, c);
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
        0x7b,
        Infinity,
        0x0,
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
    const mapValues = values['map'](_0x5666e7 => [
        _0x5666e7,
        { 'a': 0x5 }
    ]);
    utilIsDeepStrict(new Map(mapValues), new Map(mapValues)), utilIsDeepStrict(new Map(mapValues), new Map(mapValues['reverse']()));
}
{
    const s1 = new Set(), s2 = new Set();
    s1['add'](0x1), s1['add'](0x2), s2['add'](0x2), s2['add'](0x1), utilIsDeepStrict(s1, s2);
}
{
    const m1 = new Map(), m2 = new Map(), obj = {
            'a': 0x5,
            'b': 0x6
        };
    m1['set'](0x1, obj), m1['set'](0x2, 'hi'), m1['set'](0x3, [
        0x1,
        0x2,
        0x3
    ]), m2['set'](0x2, 'hi'), m2['set'](0x1, obj), m2['set'](0x3, [
        0x1,
        0x2,
        0x3
    ]), utilIsDeepStrict(m1, m2);
}
{
    const m1 = new Map(), m2 = new Map();
    m1['set'](0x1, m1), m2['set'](0x1, new Map()), notUtilIsDeepStrict(m1, m2);
}
{
    const map1 = new Map([[
                0x1,
                0x1
            ]]), map2 = new Map([[
                0x1,
                '1'
            ]]);
    assert['strictEqual'](util['isDeepStrictEqual'](map1, map2), ![]);
}
{
    const s1 = new Set(), s2 = new Set();
    s1['x'] = 0x5, notUtilIsDeepStrict(s1, s2);
    const m1 = new Map(), m2 = new Map();
    m1['x'] = 0x5, notUtilIsDeepStrict(m1, m2);
}
{
    const s1 = new Set();
    s1['add'](s1);
    const s2 = new Set();
    s2['add'](s2), utilIsDeepStrict(s1, s2);
    const m1 = new Map();
    m1['set'](0x2, m1);
    const m2 = new Map();
    m2['set'](0x2, m2), utilIsDeepStrict(m1, m2);
    const m3 = new Map();
    m3['set'](m3, 0x2);
    const m4 = new Map();
    m4['set'](m4, 0x2), utilIsDeepStrict(m3, m4);
}
utilIsDeepStrict([
    0x1,
    ,
    ,
    0x3
], [
    0x1,
    ,
    ,
    0x3
]), notUtilIsDeepStrict([
    0x1,
    ,
    ,
    0x3
], [
    0x1,
    ,
    ,
    0x3,
    ,
    ,
]);
{
    const err1 = new Error('foo1'), err2 = new Error('foo2'), err3 = new TypeError('foo1');
    notUtilIsDeepStrict(err1, err2, assert['AssertionError']), notUtilIsDeepStrict(err1, err3, assert['AssertionError']), notUtilIsDeepStrict(err1, {}, assert['AssertionError']);
}
assert['strictEqual'](util['isDeepStrictEqual'](NaN, NaN), !![]), assert['strictEqual'](util['isDeepStrictEqual']({ 'a': NaN }, { 'a': NaN }), !![]), assert['strictEqual'](util['isDeepStrictEqual']([
    0x1,
    0x2,
    NaN,
    0x4
], [
    0x1,
    0x2,
    NaN,
    0x4
]), !![]);
{
    const boxedString = new String('test'), boxedSymbol = Object(Symbol());
    notUtilIsDeepStrict(new Boolean(!![]), Object(![])), notUtilIsDeepStrict(Object(!![]), new Number(0x1)), notUtilIsDeepStrict(new Number(0x2), new Number(0x1)), notUtilIsDeepStrict(boxedSymbol, Object(Symbol())), notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(boxedSymbol, boxedSymbol), utilIsDeepStrict(Object(!![]), Object(!![])), utilIsDeepStrict(Object(0x2), Object(0x2)), utilIsDeepStrict(boxedString, Object('test')), boxedString['slow'] = !![], notUtilIsDeepStrict(boxedString, Object('test')), boxedSymbol['slow'] = !![], notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(Object(BigInt(0x1)), Object(BigInt(0x1))), notUtilIsDeepStrict(Object(BigInt(0x1)), Object(BigInt(0x2)));
    const booleanish = new Boolean(!![]);
    Object['defineProperty'](booleanish, Symbol['toStringTag'], { 'value': 'String' }), Object['setPrototypeOf'](booleanish, String['prototype']), notUtilIsDeepStrict(booleanish, new String('true'));
    const numberish = new Number(0x2a);
    Object['defineProperty'](numberish, Symbol['toStringTag'], { 'value': 'String' }), Object['setPrototypeOf'](numberish, String['prototype']), notUtilIsDeepStrict(numberish, new String('42'));
    const stringish = new String('0');
    Object['defineProperty'](stringish, Symbol['toStringTag'], { 'value': 'Number' }), Object['setPrototypeOf'](stringish, Number['prototype']), notUtilIsDeepStrict(stringish, new Number(0x0));
    const bigintish = new Object(BigInt(0x2a));
    Object['defineProperty'](bigintish, Symbol['toStringTag'], { 'value': 'String' }), Object['setPrototypeOf'](bigintish, String['prototype']), notUtilIsDeepStrict(bigintish, new String('42'));
    const symbolish = new Object(Symbol('fhqwhgads'));
    Object['defineProperty'](symbolish, Symbol['toStringTag'], { 'value': 'String' }), Object['setPrototypeOf'](symbolish, String['prototype']), notUtilIsDeepStrict(symbolish, new String('fhqwhgads'));
}
notUtilIsDeepStrict(0x0, -0x0), utilIsDeepStrict(-0x0, -0x0);
{
    const symbol1 = Symbol(), obj1 = { [symbol1]: 0x1 }, obj2 = { [symbol1]: 0x1 }, obj3 = { [Symbol()]: 0x1 }, obj4 = {};
    Object['defineProperty'](obj2, Symbol(), { 'value': 0x1 }), Object['defineProperty'](obj4, symbol1, { 'value': 0x1 }), notUtilIsDeepStrict(obj1, obj3), utilIsDeepStrict(obj1, obj2), notUtilIsDeepStrict(obj1, obj4);
    const a = new Uint8Array(0x4), b = new Uint8Array(0x4);
    a[symbol1] = !![], b[symbol1] = ![], notUtilIsDeepStrict(a, b), b[symbol1] = !![], utilIsDeepStrict(a, b);
    const boxedStringA = new String('test'), boxedStringB = new String('test');
    boxedStringA[symbol1] = !![], notUtilIsDeepStrict(boxedStringA, boxedStringB), boxedStringA[symbol1] = !![], utilIsDeepStrict(a, b);
}
