'use strict';
const _0x551e = [
    'from',
    'strictEqual',
    'prop',
    'isDeepStrictEqual',
    '2016',
    'test',
    'add',
    'map',
    'reverse',
    'set',
    'foo2',
    'foo1',
    'AssertionError',
    'slow',
    'defineProperty',
    'String',
    'setPrototypeOf',
    'prototype',
    'toStringTag',
    'Number',
    'fhqwhgads',
    '499249JzwnJt',
    '370229qrDaOr',
    '191cQTcAm',
    '3983RyQAnI',
    '1XtTgFc',
    '1023173OisPQu',
    '879956XixTps',
    '3AYVlHy',
    '182977tCAtAV',
    '727fJhNZn',
    '727YScPgy',
    '../common'
];
const _0x1e1e8d = _0x5192;
(function (_0x5721b9, _0x1080a7) {
    const _0x39e046 = _0x5192;
    while (!![]) {
        try {
            const _0x26979a = parseInt(_0x39e046(0x111)) + parseInt(_0x39e046(0x112)) + -parseInt(_0x39e046(0x113)) * -parseInt(_0x39e046(0x114)) + parseInt(_0x39e046(0x115)) * -parseInt(_0x39e046(0x116)) + -parseInt(_0x39e046(0x117)) + parseInt(_0x39e046(0x118)) * parseInt(_0x39e046(0x119)) + parseInt(_0x39e046(0x11a)) * parseInt(_0x39e046(0x11b));
            if (_0x26979a === _0x1080a7)
                break;
            else
                _0x5721b9['push'](_0x5721b9['shift']());
        } catch (_0x464496) {
            _0x5721b9['push'](_0x5721b9['shift']());
        }
    }
}(_0x551e, 0xc46d2));
require(_0x1e1e8d(0x11c));
const assert = require('assert'), util = require('util');
class MyDate extends Date {
    constructor(..._0x470daa) {
        super(..._0x470daa), this[0x0] = '1';
    }
}
class MyRegExp extends RegExp {
    constructor(..._0x5d45f2) {
        super(..._0x5d45f2), this[0x0] = '1';
    }
}
{
    const arr = new Uint8Array([
            0x78,
            0x79,
            0x7a,
            0xa
        ]), buf = Buffer[_0x1e1e8d(0x11d)](arr);
    assert[_0x1e1e8d(0x11e)](util['isDeepStrictEqual'](arr, buf), ![]);
    const buf2 = Buffer[_0x1e1e8d(0x11d)](arr);
    buf2[_0x1e1e8d(0x11f)] = 0x1, assert[_0x1e1e8d(0x11e)](util[_0x1e1e8d(0x120)](buf2, buf), ![]);
    const arr2 = new Uint8Array([
        0x78,
        0x79,
        0x7a,
        0xa
    ]);
    arr2[_0x1e1e8d(0x11f)] = 0x5, assert[_0x1e1e8d(0x11e)](util['isDeepStrictEqual'](arr, arr2), ![]);
}
{
    const date = new Date('2016'), date2 = new MyDate(_0x1e1e8d(0x121));
    assert['strictEqual'](util['isDeepStrictEqual'](date, date2), ![]), assert[_0x1e1e8d(0x11e)](util['isDeepStrictEqual'](date2, date), ![]);
}
{
    const re1 = new RegExp(_0x1e1e8d(0x122)), re2 = new MyRegExp(_0x1e1e8d(0x122));
    assert[_0x1e1e8d(0x11e)](util[_0x1e1e8d(0x120)](re1, re2), ![]);
}
{
    const similar = new Set([
        { 0x0: '1' },
        { 0x0: 0x1 },
        new String('1'),
        ['1'],
        [0x1],
        new MyDate(_0x1e1e8d(0x121)),
        new MyRegExp(_0x1e1e8d(0x122)),
        new Int8Array([0x1]),
        new Uint8Array([0x1]),
        new Int16Array([0x1]),
        new Uint16Array([0x1]),
        new Int32Array([0x1]),
        new Uint32Array([0x1]),
        Buffer[_0x1e1e8d(0x11d)]([0x1])
    ]);
    for (const a of similar) {
        for (const b of similar) {
            a !== b && assert[_0x1e1e8d(0x11e)](util[_0x1e1e8d(0x120)](a, b), ![]);
        }
    }
}
function utilIsDeepStrict(_0xfc0905, _0x4117c1) {
    const _0x405852 = _0x1e1e8d;
    assert['strictEqual'](util[_0x405852(0x120)](_0xfc0905, _0x4117c1), !![]), assert[_0x405852(0x11e)](util['isDeepStrictEqual'](_0x4117c1, _0xfc0905), !![]);
}
function notUtilIsDeepStrict(_0x54a22d, _0x1c82f8) {
    const _0x228096 = _0x1e1e8d;
    assert[_0x228096(0x11e)](util[_0x228096(0x120)](_0x54a22d, _0x1c82f8), ![]), assert[_0x228096(0x11e)](util['isDeepStrictEqual'](_0x1c82f8, _0x54a22d), ![]);
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
    a[_0x1e1e8d(0x123)](a), b[_0x1e1e8d(0x123)](b), c['add'](a), utilIsDeepStrict(b, c);
}
function _0x5192(_0x3bd093, _0x50160f) {
    return _0x5192 = function (_0x551ecf, _0x51923b) {
        _0x551ecf = _0x551ecf - 0x111;
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
    const mapValues = values[_0x1e1e8d(0x124)](_0x3379f0 => [
        _0x3379f0,
        { 'a': 0x5 }
    ]);
    utilIsDeepStrict(new Map(mapValues), new Map(mapValues)), utilIsDeepStrict(new Map(mapValues), new Map(mapValues[_0x1e1e8d(0x125)]()));
}
{
    const s1 = new Set(), s2 = new Set();
    s1[_0x1e1e8d(0x123)](0x1), s1[_0x1e1e8d(0x123)](0x2), s2[_0x1e1e8d(0x123)](0x2), s2[_0x1e1e8d(0x123)](0x1), utilIsDeepStrict(s1, s2);
}
{
    const m1 = new Map(), m2 = new Map(), obj = {
            'a': 0x5,
            'b': 0x6
        };
    m1[_0x1e1e8d(0x126)](0x1, obj), m1[_0x1e1e8d(0x126)](0x2, 'hi'), m1[_0x1e1e8d(0x126)](0x3, [
        0x1,
        0x2,
        0x3
    ]), m2[_0x1e1e8d(0x126)](0x2, 'hi'), m2[_0x1e1e8d(0x126)](0x1, obj), m2[_0x1e1e8d(0x126)](0x3, [
        0x1,
        0x2,
        0x3
    ]), utilIsDeepStrict(m1, m2);
}
{
    const m1 = new Map(), m2 = new Map();
    m1[_0x1e1e8d(0x126)](0x1, m1), m2['set'](0x1, new Map()), notUtilIsDeepStrict(m1, m2);
}
{
    const map1 = new Map([[
                0x1,
                0x1
            ]]), map2 = new Map([[
                0x1,
                '1'
            ]]);
    assert['strictEqual'](util[_0x1e1e8d(0x120)](map1, map2), ![]);
}
{
    const s1 = new Set(), s2 = new Set();
    s1['x'] = 0x5, notUtilIsDeepStrict(s1, s2);
    const m1 = new Map(), m2 = new Map();
    m1['x'] = 0x5, notUtilIsDeepStrict(m1, m2);
}
{
    const s1 = new Set();
    s1[_0x1e1e8d(0x123)](s1);
    const s2 = new Set();
    s2[_0x1e1e8d(0x123)](s2), utilIsDeepStrict(s1, s2);
    const m1 = new Map();
    m1[_0x1e1e8d(0x126)](0x2, m1);
    const m2 = new Map();
    m2[_0x1e1e8d(0x126)](0x2, m2), utilIsDeepStrict(m1, m2);
    const m3 = new Map();
    m3[_0x1e1e8d(0x126)](m3, 0x2);
    const m4 = new Map();
    m4[_0x1e1e8d(0x126)](m4, 0x2), utilIsDeepStrict(m3, m4);
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
    const err1 = new Error('foo1'), err2 = new Error(_0x1e1e8d(0x127)), err3 = new TypeError(_0x1e1e8d(0x128));
    notUtilIsDeepStrict(err1, err2, assert[_0x1e1e8d(0x129)]), notUtilIsDeepStrict(err1, err3, assert[_0x1e1e8d(0x129)]), notUtilIsDeepStrict(err1, {}, assert[_0x1e1e8d(0x129)]);
}
assert[_0x1e1e8d(0x11e)](util[_0x1e1e8d(0x120)](NaN, NaN), !![]), assert[_0x1e1e8d(0x11e)](util[_0x1e1e8d(0x120)]({ 'a': NaN }, { 'a': NaN }), !![]), assert['strictEqual'](util['isDeepStrictEqual']([
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
    const boxedString = new String(_0x1e1e8d(0x122)), boxedSymbol = Object(Symbol());
    notUtilIsDeepStrict(new Boolean(!![]), Object(![])), notUtilIsDeepStrict(Object(!![]), new Number(0x1)), notUtilIsDeepStrict(new Number(0x2), new Number(0x1)), notUtilIsDeepStrict(boxedSymbol, Object(Symbol())), notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(boxedSymbol, boxedSymbol), utilIsDeepStrict(Object(!![]), Object(!![])), utilIsDeepStrict(Object(0x2), Object(0x2)), utilIsDeepStrict(boxedString, Object('test')), boxedString[_0x1e1e8d(0x12a)] = !![], notUtilIsDeepStrict(boxedString, Object(_0x1e1e8d(0x122))), boxedSymbol['slow'] = !![], notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(Object(BigInt(0x1)), Object(BigInt(0x1))), notUtilIsDeepStrict(Object(BigInt(0x1)), Object(BigInt(0x2)));
    const booleanish = new Boolean(!![]);
    Object[_0x1e1e8d(0x12b)](booleanish, Symbol['toStringTag'], { 'value': _0x1e1e8d(0x12c) }), Object[_0x1e1e8d(0x12d)](booleanish, String[_0x1e1e8d(0x12e)]), notUtilIsDeepStrict(booleanish, new String('true'));
    const numberish = new Number(0x2a);
    Object[_0x1e1e8d(0x12b)](numberish, Symbol[_0x1e1e8d(0x12f)], { 'value': _0x1e1e8d(0x12c) }), Object['setPrototypeOf'](numberish, String[_0x1e1e8d(0x12e)]), notUtilIsDeepStrict(numberish, new String('42'));
    const stringish = new String('0');
    Object[_0x1e1e8d(0x12b)](stringish, Symbol[_0x1e1e8d(0x12f)], { 'value': _0x1e1e8d(0x130) }), Object[_0x1e1e8d(0x12d)](stringish, Number[_0x1e1e8d(0x12e)]), notUtilIsDeepStrict(stringish, new Number(0x0));
    const bigintish = new Object(BigInt(0x2a));
    Object[_0x1e1e8d(0x12b)](bigintish, Symbol[_0x1e1e8d(0x12f)], { 'value': 'String' }), Object['setPrototypeOf'](bigintish, String[_0x1e1e8d(0x12e)]), notUtilIsDeepStrict(bigintish, new String('42'));
    const symbolish = new Object(Symbol(_0x1e1e8d(0x131)));
    Object['defineProperty'](symbolish, Symbol[_0x1e1e8d(0x12f)], { 'value': _0x1e1e8d(0x12c) }), Object[_0x1e1e8d(0x12d)](symbolish, String[_0x1e1e8d(0x12e)]), notUtilIsDeepStrict(symbolish, new String(_0x1e1e8d(0x131)));
}
notUtilIsDeepStrict(0x0, -0x0), utilIsDeepStrict(-0x0, -0x0);
{
    const symbol1 = Symbol(), obj1 = { [symbol1]: 0x1 }, obj2 = { [symbol1]: 0x1 }, obj3 = { [Symbol()]: 0x1 }, obj4 = {};
    Object['defineProperty'](obj2, Symbol(), { 'value': 0x1 }), Object['defineProperty'](obj4, symbol1, { 'value': 0x1 }), notUtilIsDeepStrict(obj1, obj3), utilIsDeepStrict(obj1, obj2), notUtilIsDeepStrict(obj1, obj4);
    const a = new Uint8Array(0x4), b = new Uint8Array(0x4);
    a[symbol1] = !![], b[symbol1] = ![], notUtilIsDeepStrict(a, b), b[symbol1] = !![], utilIsDeepStrict(a, b);
    const boxedStringA = new String(_0x1e1e8d(0x122)), boxedStringB = new String(_0x1e1e8d(0x122));
    boxedStringA[symbol1] = !![], notUtilIsDeepStrict(boxedStringA, boxedStringB), boxedStringA[symbol1] = !![], utilIsDeepStrict(a, b);
}
