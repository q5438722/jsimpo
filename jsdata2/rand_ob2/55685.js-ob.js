'use strict';
const _0x319f = [
    '1Amfivo',
    '253718RGmvPA',
    '147447gxosLu',
    '146701tQsilG',
    '7WbRDFp',
    '1296165IiGvsp',
    '204792rTrbVD',
    '8926DrEOSX',
    '160gfxWFV',
    '4284310hiuNBj',
    '../common',
    'assert',
    'from',
    'strictEqual',
    'isDeepStrictEqual',
    '2016',
    'add',
    'reverse',
    'map',
    'set',
    'foo1',
    'foo2',
    'AssertionError',
    'test',
    'slow',
    'defineProperty',
    'toStringTag',
    'String',
    'setPrototypeOf',
    'prototype',
    'fhqwhgads'
];
const _0x39f556 = _0xda2b;
(function (_0x2e4cbf, _0x54281e) {
    const _0x5b1f1f = _0xda2b;
    while (!![]) {
        try {
            const _0x14c6fc = -parseInt(_0x5b1f1f(0x11f)) * -parseInt(_0x5b1f1f(0x120)) + parseInt(_0x5b1f1f(0x121)) + -parseInt(_0x5b1f1f(0x122)) * parseInt(_0x5b1f1f(0x123)) + -parseInt(_0x5b1f1f(0x124)) + -parseInt(_0x5b1f1f(0x125)) + -parseInt(_0x5b1f1f(0x126)) * parseInt(_0x5b1f1f(0x127)) + parseInt(_0x5b1f1f(0x128));
            if (_0x14c6fc === _0x54281e)
                break;
            else
                _0x2e4cbf['push'](_0x2e4cbf['shift']());
        } catch (_0x5a43e4) {
            _0x2e4cbf['push'](_0x2e4cbf['shift']());
        }
    }
}(_0x319f, 0xb216b));
function _0xda2b(_0x20fd13, _0x52a081) {
    return _0xda2b = function (_0x319f4b, _0xda2b1b) {
        _0x319f4b = _0x319f4b - 0x11f;
        let _0x3483f1 = _0x319f[_0x319f4b];
        return _0x3483f1;
    }, _0xda2b(_0x20fd13, _0x52a081);
}
require(_0x39f556(0x129));
const assert = require(_0x39f556(0x12a)), util = require('util');
class MyDate extends Date {
    constructor(..._0x167755) {
        super(..._0x167755), this[0x0] = '1';
    }
}
class MyRegExp extends RegExp {
    constructor(..._0xb93412) {
        super(..._0xb93412), this[0x0] = '1';
    }
}
{
    const arr = new Uint8Array([
            0x78,
            0x79,
            0x7a,
            0xa
        ]), buf = Buffer[_0x39f556(0x12b)](arr);
    assert[_0x39f556(0x12c)](util[_0x39f556(0x12d)](arr, buf), ![]);
    const buf2 = Buffer[_0x39f556(0x12b)](arr);
    buf2['prop'] = 0x1, assert[_0x39f556(0x12c)](util[_0x39f556(0x12d)](buf2, buf), ![]);
    const arr2 = new Uint8Array([
        0x78,
        0x79,
        0x7a,
        0xa
    ]);
    arr2['prop'] = 0x5, assert[_0x39f556(0x12c)](util[_0x39f556(0x12d)](arr, arr2), ![]);
}
{
    const date = new Date(_0x39f556(0x12e)), date2 = new MyDate('2016');
    assert['strictEqual'](util[_0x39f556(0x12d)](date, date2), ![]), assert[_0x39f556(0x12c)](util[_0x39f556(0x12d)](date2, date), ![]);
}
{
    const re1 = new RegExp('test'), re2 = new MyRegExp('test');
    assert[_0x39f556(0x12c)](util[_0x39f556(0x12d)](re1, re2), ![]);
}
{
    const similar = new Set([
        { 0x0: '1' },
        { 0x0: 0x1 },
        new String('1'),
        ['1'],
        [0x1],
        new MyDate(_0x39f556(0x12e)),
        new MyRegExp('test'),
        new Int8Array([0x1]),
        new Uint8Array([0x1]),
        new Int16Array([0x1]),
        new Uint16Array([0x1]),
        new Int32Array([0x1]),
        new Uint32Array([0x1]),
        Buffer[_0x39f556(0x12b)]([0x1])
    ]);
    for (const a of similar) {
        for (const b of similar) {
            a !== b && assert['strictEqual'](util[_0x39f556(0x12d)](a, b), ![]);
        }
    }
}
function utilIsDeepStrict(_0x58ce5c, _0x15b03d) {
    const _0x52b006 = _0x39f556;
    assert[_0x52b006(0x12c)](util['isDeepStrictEqual'](_0x58ce5c, _0x15b03d), !![]), assert[_0x52b006(0x12c)](util[_0x52b006(0x12d)](_0x15b03d, _0x58ce5c), !![]);
}
function notUtilIsDeepStrict(_0x1677c7, _0x2a352c) {
    const _0x348f09 = _0x39f556;
    assert[_0x348f09(0x12c)](util[_0x348f09(0x12d)](_0x1677c7, _0x2a352c), ![]), assert[_0x348f09(0x12c)](util[_0x348f09(0x12d)](_0x2a352c, _0x1677c7), ![]);
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
    a[_0x39f556(0x12f)](a), b['add'](b), c[_0x39f556(0x12f)](a), utilIsDeepStrict(b, c);
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
    utilIsDeepStrict(new Set(values), new Set(values)), utilIsDeepStrict(new Set(values), new Set(values[_0x39f556(0x130)]()));
    const mapValues = values[_0x39f556(0x131)](_0x1cfdba => [
        _0x1cfdba,
        { 'a': 0x5 }
    ]);
    utilIsDeepStrict(new Map(mapValues), new Map(mapValues)), utilIsDeepStrict(new Map(mapValues), new Map(mapValues['reverse']()));
}
{
    const s1 = new Set(), s2 = new Set();
    s1[_0x39f556(0x12f)](0x1), s1['add'](0x2), s2[_0x39f556(0x12f)](0x2), s2['add'](0x1), utilIsDeepStrict(s1, s2);
}
{
    const m1 = new Map(), m2 = new Map(), obj = {
            'a': 0x5,
            'b': 0x6
        };
    m1[_0x39f556(0x132)](0x1, obj), m1[_0x39f556(0x132)](0x2, 'hi'), m1[_0x39f556(0x132)](0x3, [
        0x1,
        0x2,
        0x3
    ]), m2['set'](0x2, 'hi'), m2[_0x39f556(0x132)](0x1, obj), m2['set'](0x3, [
        0x1,
        0x2,
        0x3
    ]), utilIsDeepStrict(m1, m2);
}
{
    const m1 = new Map(), m2 = new Map();
    m1[_0x39f556(0x132)](0x1, m1), m2[_0x39f556(0x132)](0x1, new Map()), notUtilIsDeepStrict(m1, m2);
}
{
    const map1 = new Map([[
                0x1,
                0x1
            ]]), map2 = new Map([[
                0x1,
                '1'
            ]]);
    assert['strictEqual'](util[_0x39f556(0x12d)](map1, map2), ![]);
}
{
    const s1 = new Set(), s2 = new Set();
    s1['x'] = 0x5, notUtilIsDeepStrict(s1, s2);
    const m1 = new Map(), m2 = new Map();
    m1['x'] = 0x5, notUtilIsDeepStrict(m1, m2);
}
{
    const s1 = new Set();
    s1[_0x39f556(0x12f)](s1);
    const s2 = new Set();
    s2[_0x39f556(0x12f)](s2), utilIsDeepStrict(s1, s2);
    const m1 = new Map();
    m1[_0x39f556(0x132)](0x2, m1);
    const m2 = new Map();
    m2['set'](0x2, m2), utilIsDeepStrict(m1, m2);
    const m3 = new Map();
    m3[_0x39f556(0x132)](m3, 0x2);
    const m4 = new Map();
    m4[_0x39f556(0x132)](m4, 0x2), utilIsDeepStrict(m3, m4);
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
    const err1 = new Error(_0x39f556(0x133)), err2 = new Error(_0x39f556(0x134)), err3 = new TypeError(_0x39f556(0x133));
    notUtilIsDeepStrict(err1, err2, assert[_0x39f556(0x135)]), notUtilIsDeepStrict(err1, err3, assert[_0x39f556(0x135)]), notUtilIsDeepStrict(err1, {}, assert['AssertionError']);
}
assert['strictEqual'](util[_0x39f556(0x12d)](NaN, NaN), !![]), assert[_0x39f556(0x12c)](util[_0x39f556(0x12d)]({ 'a': NaN }, { 'a': NaN }), !![]), assert[_0x39f556(0x12c)](util[_0x39f556(0x12d)]([
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
    const boxedString = new String(_0x39f556(0x136)), boxedSymbol = Object(Symbol());
    notUtilIsDeepStrict(new Boolean(!![]), Object(![])), notUtilIsDeepStrict(Object(!![]), new Number(0x1)), notUtilIsDeepStrict(new Number(0x2), new Number(0x1)), notUtilIsDeepStrict(boxedSymbol, Object(Symbol())), notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(boxedSymbol, boxedSymbol), utilIsDeepStrict(Object(!![]), Object(!![])), utilIsDeepStrict(Object(0x2), Object(0x2)), utilIsDeepStrict(boxedString, Object(_0x39f556(0x136))), boxedString[_0x39f556(0x137)] = !![], notUtilIsDeepStrict(boxedString, Object(_0x39f556(0x136))), boxedSymbol['slow'] = !![], notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(Object(BigInt(0x1)), Object(BigInt(0x1))), notUtilIsDeepStrict(Object(BigInt(0x1)), Object(BigInt(0x2)));
    const booleanish = new Boolean(!![]);
    Object[_0x39f556(0x138)](booleanish, Symbol[_0x39f556(0x139)], { 'value': _0x39f556(0x13a) }), Object[_0x39f556(0x13b)](booleanish, String[_0x39f556(0x13c)]), notUtilIsDeepStrict(booleanish, new String('true'));
    const numberish = new Number(0x2a);
    Object[_0x39f556(0x138)](numberish, Symbol[_0x39f556(0x139)], { 'value': _0x39f556(0x13a) }), Object[_0x39f556(0x13b)](numberish, String['prototype']), notUtilIsDeepStrict(numberish, new String('42'));
    const stringish = new String('0');
    Object[_0x39f556(0x138)](stringish, Symbol[_0x39f556(0x139)], { 'value': 'Number' }), Object[_0x39f556(0x13b)](stringish, Number[_0x39f556(0x13c)]), notUtilIsDeepStrict(stringish, new Number(0x0));
    const bigintish = new Object(BigInt(0x2a));
    Object[_0x39f556(0x138)](bigintish, Symbol['toStringTag'], { 'value': _0x39f556(0x13a) }), Object[_0x39f556(0x13b)](bigintish, String[_0x39f556(0x13c)]), notUtilIsDeepStrict(bigintish, new String('42'));
    const symbolish = new Object(Symbol(_0x39f556(0x13d)));
    Object[_0x39f556(0x138)](symbolish, Symbol[_0x39f556(0x139)], { 'value': 'String' }), Object['setPrototypeOf'](symbolish, String['prototype']), notUtilIsDeepStrict(symbolish, new String(_0x39f556(0x13d)));
}
notUtilIsDeepStrict(0x0, -0x0), utilIsDeepStrict(-0x0, -0x0);
{
    const symbol1 = Symbol(), obj1 = { [symbol1]: 0x1 }, obj2 = { [symbol1]: 0x1 }, obj3 = { [Symbol()]: 0x1 }, obj4 = {};
    Object['defineProperty'](obj2, Symbol(), { 'value': 0x1 }), Object[_0x39f556(0x138)](obj4, symbol1, { 'value': 0x1 }), notUtilIsDeepStrict(obj1, obj3), utilIsDeepStrict(obj1, obj2), notUtilIsDeepStrict(obj1, obj4);
    const a = new Uint8Array(0x4), b = new Uint8Array(0x4);
    a[symbol1] = !![], b[symbol1] = ![], notUtilIsDeepStrict(a, b), b[symbol1] = !![], utilIsDeepStrict(a, b);
    const boxedStringA = new String(_0x39f556(0x136)), boxedStringB = new String(_0x39f556(0x136));
    boxedStringA[symbol1] = !![], notUtilIsDeepStrict(boxedStringA, boxedStringB), boxedStringA[symbol1] = !![], utilIsDeepStrict(a, b);
}
