'use strict';
require('../common');
const assert = require('assert'), util = require('util');
class MyDate extends Date {
    constructor(..._0x1ec0b6) {
        super(..._0x1ec0b6), this[0xe0b * -0x2 + 0x278 * 0x1 + 0x199e] = '1';
    }
}
class MyRegExp extends RegExp {
    constructor(..._0x27f52a) {
        super(..._0x27f52a), this[0x2 * 0x12e5 + -0x8b + 0x1 * -0x253f] = '1';
    }
}
{
    const arr = new Uint8Array([
            0xc * 0x279 + 0xbcb * -0x3 + 0x62d,
            0x72e * 0x2 + -0x1d59 + 0xf76 * 0x1,
            0xe0 * -0x24 + 0x2394 + -0x1 * 0x39a,
            -0xcdd * -0x1 + -0x5bc + 0xa5 * -0xb
        ]), buf = Buffer['from'](arr);
    assert['strictEqual'](util['isDeepStrictEqual'](arr, buf), ![]);
    const buf2 = Buffer['from'](arr);
    buf2['prop'] = -0xa62 + -0x90a + -0x136d * -0x1, assert['strictEqual'](util['isDeepStrictEqual'](buf2, buf), ![]);
    const arr2 = new Uint8Array([
        -0x1355 * -0x2 + 0x15f5 + -0x6af * 0x9,
        0x14dd + -0x1730 + -0xb3 * -0x4,
        0x2f * 0xba + -0x18d * -0xf + -0x35 * 0x113,
        0x8b5 + -0x2 * -0x4d9 + -0x61f * 0x3
    ]);
    arr2['prop'] = 0x5 * 0x79f + 0x160e + -0x3c24, assert['strictEqual'](util['isDeepStrictEqual'](arr, arr2), ![]);
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
        [0x1d * 0x101 + -0x10 * 0x24b + 0x794],
        new MyDate('2016'),
        new MyRegExp('test'),
        new Int8Array([-0x5 * 0x6b8 + 0x3ab * 0x3 + -0x5a6 * -0x4]),
        new Uint8Array([0xdff * 0x1 + -0x278 + -0xb86]),
        new Int16Array([0x1 * 0x34d + 0x2 * 0x787 + -0x125a]),
        new Uint16Array([0x18d4 + 0x2cf * -0x1 + 0x581 * -0x4]),
        new Int32Array([-0x2 * 0x551 + -0x140 * 0x4 + -0xfa3 * -0x1]),
        new Uint32Array([0x2467 + -0x25dc * -0x1 + -0x2 * 0x2521]),
        Buffer['from']([0x2 * 0xb44 + -0x1fb * 0x9 + -0x4b4])
    ]);
    for (const a of similar) {
        for (const b of similar) {
            a !== b && assert['strictEqual'](util['isDeepStrictEqual'](a, b), ![]);
        }
    }
}
function utilIsDeepStrict(_0x352fc3, _0xdfd1f5) {
    assert['strictEqual'](util['isDeepStrictEqual'](_0x352fc3, _0xdfd1f5), !![]), assert['strictEqual'](util['isDeepStrictEqual'](_0xdfd1f5, _0x352fc3), !![]);
}
function notUtilIsDeepStrict(_0xa3114a, _0x274893) {
    assert['strictEqual'](util['isDeepStrictEqual'](_0xa3114a, _0x274893), ![]), assert['strictEqual'](util['isDeepStrictEqual'](_0x274893, _0xa3114a), ![]);
}
utilIsDeepStrict(new Set(), new Set()), utilIsDeepStrict(new Map(), new Map()), utilIsDeepStrict(new Set([
    0x3b * 0x2f + -0x6fc + -0x3d8,
    -0x10 * 0x218 + -0x9 * -0x1bd + 0x11dd,
    -0x2a2 * 0x4 + -0x680 * 0x1 + 0x110b
]), new Set([
    0x1c82 * -0x1 + -0xda1 + 0x2a24,
    -0x2190 + 0x1e3a * 0x1 + 0x358,
    -0x3 * -0xd01 + 0x1 * 0x776 + -0x272 * 0x13
])), notUtilIsDeepStrict(new Set([
    0x184b * -0x1 + 0x592 + 0x12ba,
    0x55c + -0x5e * 0x2 + -0x49e,
    -0x1c67 + -0x18e + 0x1df8
]), new Set([
    -0x4f * 0x26 + -0x168 + 0x1 * 0xd23,
    -0x119a + 0x147e * 0x1 + -0x2e2,
    -0xd03 * 0x2 + 0xa9 * -0x3b + -0x40fc * -0x1,
    0x15da + 0x1f16 + 0x6 * -0x8d2
])), notUtilIsDeepStrict(new Set([
    -0x1 * 0x18d9 + 0x63 * -0x4d + 0x36a1,
    -0x147 * 0x1 + 0x997 + -0x84e,
    0x95f + 0xb * -0x22 + -0x7e6,
    -0x1 * -0x19e1 + 0x553 + 0x4 * -0x7cc
]), new Set([
    0x34 * -0x55 + 0x1 * -0x15bb + 0x2700,
    -0x25 * -0x9b + 0x1c5 * -0x14 + 0xcff,
    0x181f + -0x3 * 0x11b + -0x14cb * 0x1
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
        0x1 * 0x64d + 0xea6 + 0x17f * -0xe,
        0xe * -0xbf + 0x176 * -0x16 + 0x2a98
    ],
    [
        0x1ee2 + 0xe5d * -0x1 + -0x1082 * 0x1,
        -0x219b + -0x17e7 + -0x1 * -0x3986
    ]
]), new Set([
    [
        -0x1b1 * -0x5 + -0x1d1c + -0x422 * -0x5,
        0x399 * -0x2 + -0x1d35 + 0x246b
    ],
    [
        0x1 * -0x22b9 + -0xb82 + 0x2e3c,
        -0x1 * 0x365 + -0x1 * -0xd5a + -0x3 * 0x351
    ]
]));
{
    const a = [
            0xc * 0x33d + -0xad8 + -0x1c03,
            0x2538 + 0x1b62 + -0x6a * 0x9c
        ], b = [
            0x11ff * 0x1 + -0x2a4 * -0x3 + -0x19e8,
            0x2c3 * -0xd + 0xa * -0x13 + 0x24a9
        ], c = [
            0x35 * 0x3d + -0x2 * 0x133 + 0x16 * -0x77,
            0x11f * -0x1f + -0xa7d + 0x1 * 0x2d40
        ], d = [
            -0xeea + 0x3e * 0x14 + 0xa15,
            -0x48d * -0x4 + -0x1887 + 0x657
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
        -0x962 * -0x1 + -0x1 * 0xc9d + 0x33c,
        0x7 * 0x2cf + 0x1dc1 + -0xd * 0x3cd
    ],
    [
        -0x4ff * 0x1 + -0x1 * 0x13d9 + 0x18da,
        0x9d * -0x3f + 0x1d3 * 0xe + 0xd1b
    ]
]), new Map([
    [
        -0x1b88 + -0x1fb9 * -0x1 + 0x10 * -0x43,
        0x1e23 + 0x55e * 0x7 + -0x43b4
    ],
    [
        0xe63 + -0x225 + 0x1b * -0x74,
        -0x1e58 + 0x1431 + 0xa29
    ]
])), utilIsDeepStrict(new Map([
    [
        -0x1 * 0x533 + 0x175c + 0x2 * -0x914,
        -0x615 + -0xe21 * 0x1 + 0x6bd * 0x3
    ],
    [
        0x8 * 0x1af + 0x241f + -0x3 * 0x1087,
        0x20f6 + 0x17ed + -0x1 * 0x38e1
    ]
]), new Map([
    [
        -0x2644 + -0x2707 + 0x4d4d,
        -0x1e08 + 0x25e9 + -0x7df
    ],
    [
        0x150a + -0x2 * -0x98b + -0x281f,
        -0x2545 + 0x25b1 * -0x1 + 0x4af7
    ]
])), notUtilIsDeepStrict(new Map([
    [
        -0xb7e * 0x1 + -0x3d1 * 0x7 + 0x2636,
        -0x35 * 0xb3 + 0x2 * 0xa45 + 0x1086 * 0x1
    ],
    [
        -0xbf * 0x31 + 0x1 * 0x2333 + 0x15e,
        0x1caa + -0x1dfe + 0x156
    ]
]), new Map([
    [
        0x16d5 + -0x2ed * -0x1 + -0x19c1,
        0x3 * 0x125 + -0x1 * 0x1bfe + 0x1891
    ],
    [
        -0xef6 + 0x6da + -0x40f * -0x2,
        0x19e6 + 0x1541 * 0x1 + 0x47 * -0xaa
    ]
])), notUtilIsDeepStrict(new Map([
    [
        [0x5dd * -0x1 + -0x360 + 0x1a * 0x5b],
        0x1 * -0x31d + 0x1b9c + -0x187e
    ],
    [
        {},
        -0x4 * 0x83f + -0x7 * -0x62 + 0x1e50
    ]
]), new Map([
    [
        [-0xa7 * -0x14 + -0xa3d + 0x167 * -0x2],
        0x69 * 0x31 + -0x1c3 * -0xc + -0x293b
    ],
    [
        {},
        -0x1565 + -0x1c16 + -0xc5f * -0x4
    ]
])), notUtilIsDeepStrict(new Set([-0x95 * 0x2b + -0x8 * 0x106 + 0x84e * 0x4]), [0x1e * -0xbb + 0x1f98 + -0x9ad]), notUtilIsDeepStrict(new Set(), []), notUtilIsDeepStrict(new Set(), {}), notUtilIsDeepStrict(new Map([[
        'a',
        0x1f91 + -0x2654 + -0x4 * -0x1b1
    ]]), { 'a': 0x1 }), notUtilIsDeepStrict(new Map(), []), notUtilIsDeepStrict(new Map(), {}), notUtilIsDeepStrict(new Set(['1']), new Set([0x4 * 0x353 + -0x43e + -0x90d])), notUtilIsDeepStrict(new Map([[
        '1',
        'a'
    ]]), new Map([[
        -0x359 + 0xd3d * 0x2 + 0x20 * -0xb9,
        'a'
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        -0x1 * -0x9d4 + 0x1d5f + -0x2732
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        0xccb + -0x1 * 0x1703 + 0xa3a
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
        0x1708 + 0x7b2 + -0x1eb5
    ],
    [
        { 'x': 0x1 },
        0x11a5 * -0x1 + 0x23ab + 0x1 * -0x1201
    ]
]), new Map([
    [
        { 'x': 0x1 },
        -0x6e + 0x307 + -0x294
    ],
    [
        { 'x': 0x2 },
        -0x1f7d + -0x1f52 + 0x3ed4
    ]
])), notUtilIsDeepStrict(new Set([
    -0x1cd6 + 0x866 + 0x1473,
    '3'
]), new Set([
    -0x3e9 + 0xb * 0xfd + -0x6f3 * 0x1,
    -0x22a0 + -0xfd * -0x25 + -0x1ed
])), notUtilIsDeepStrict(new Map([
    [
        -0x97 * -0x40 + -0x244a + -0x173,
        -0x15e5 + -0x51e + 0x1b03
    ],
    [
        '3',
        -0x1f68 + 0x1eb7 * -0x1 + 0x9 * 0x6e7
    ]
]), new Map([
    [
        -0x9d5 * 0x1 + 0x28 * -0x7a + 0x1ce8,
        0x10 * -0xad + 0x112 * -0x13 + 0xf93 * 0x2
    ],
    [
        -0x1d10 + -0xe * 0x26b + 0x3eee,
        0x132c + -0xd7 + -0xf7 * 0x13
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
        -0x1024 + -0x1472 + -0x2497 * -0x1,
        'a'
    ],
    [
        {},
        'a'
    ]
]), new Map([
    [
        0x1 * -0x11a6 + -0x139d + 0x2544,
        'a'
    ],
    [
        {},
        'a'
    ]
])), utilIsDeepStrict(new Set([
    -0x99 * 0x2d + -0x54 * 0x4f + 0x34d2 * 0x1,
    'a',
    [
        {},
        'a'
    ]
]), new Set([
    0x1cec + 0xd16 + -0x2a01,
    'a',
    [
        {},
        'a'
    ]
])), notUtilIsDeepStrict(new Map([
    [
        0x1 * 0x77d + 0x3 * 0x55e + -0x1796,
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
        -0x25 * 0xb5 + 0x2283 + -0x859 * 0x1,
        'a'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        -0x1bc * -0x1 + 0x45d + 0x3 * -0x208,
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
        -0x102a + 0x7c9 * -0x1 + 0x17f4,
        'c'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        -0x34 * 0x1 + -0x864 + 0x1f * 0x47,
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
    -0xb * 0x31a + 0x23ae + -0x18f
])), notUtilIsDeepStrict(new Set([
    [
        {},
        0x125 * -0x13 + 0x242c + -0xe6c
    ],
    [
        {},
        0x1e71 * 0x1 + -0xe6b + -0x1005
    ]
]), new Set([
    [
        {},
        0xc41 * 0x3 + 0x3d * 0x25 + -0x2d93
    ],
    [
        0x64 * -0x1f + 0x212b * 0x1 + -0x150e,
        -0xbe7 + -0x2172 + 0x2d5a
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        -0x149e + -0x18c2 + 0x2d61
    ],
    [
        {},
        -0x3 * 0x75f + 0x205f + 0x20d * -0x5
    ]
]), new Map([
    [
        {},
        0x1 * 0x142d + 0x141 + -0x156d
    ],
    [
        0x1d * -0x3a + -0xbf * 0x2b + 0x1354 * 0x2,
        0x143b + -0x228c + 0xe52
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        -0x60d + -0x32a + 0x14 * 0x76
    ],
    [
        !![],
        0x869 + 0x1c19 + -0x2481
    ]
]), new Map([
    [
        {},
        -0x1891 + 0x1373 * -0x1 + 0x2c05
    ],
    [
        -0x1 * 0xd79 + 0x1972 + 0xbf8 * -0x1,
        -0x776 * 0x5 + 0x2623 + -0xd4
    ]
])), notUtilIsDeepStrict(new Set([
    0x1 * -0x1bc5 + -0x5a6 * -0x4 + 0x52e,
    !![],
    ![]
]), new Set([
    '1',
    0x9dd + 0x13b * 0xb + -0x257 * 0xa,
    '0'
])), notUtilIsDeepStrict(new Map([
    [
        0x1dc7 + 0x223a + -0x4000,
        0x116f * 0x2 + 0x1f * 0x5d + 0xb87 * -0x4
    ],
    [
        !![],
        -0xab1 + -0x1ff * 0x10 + 0x2aa6
    ],
    [
        ![],
        0x5c9 * -0x1 + 0x1 * 0x1321 + -0xd53
    ]
]), new Map([
    [
        '1',
        -0x621 + 0x26d9 + 0x1 * -0x20b3
    ],
    [
        0xf * 0xdf + 0x6 * 0x257 + -0x909 * 0x3,
        0x178b + 0x417 + 0x1 * -0x1b9d
    ],
    [
        '0',
        -0x3b * -0x3b + 0x26df + -0x3473 * 0x1
    ]
])), utilIsDeepStrict(new Map([[
        0x8a1 + 0x2422 + -0x11 * 0x2a2,
        undefined
    ]]), new Map([[
        0x1801 + -0x1 * -0x1093 + -0x31f * 0xd,
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        -0x221c + -0x1afb * 0x1 + 0x3d18,
        null
    ]]), new Map([[
        '1',
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        0x19f + -0x175 * -0xc + -0x131a * 0x1,
        undefined
    ]]), new Map([[
        -0x1883 * 0x1 + 0x1a3 * -0xb + 0x2a86,
        undefined
    ]])), utilIsDeepStrict(new Map([[
        null,
        -0x7e4 + 0x2194 + 0x139 * -0x15
    ]]), new Map([[
        null,
        -0x1b5d + -0x762 + 0x22c2
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
    d['a'] = 0x1479 + -0x1706 * -0x1 + -0x2b7e, d['b'] = d;
    const e = {};
    e['a'] = -0x8b * -0x3 + -0x1f1f + 0x1d7f, e['b'] = {}, notUtilIsDeepStrict(d, e);
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
        -0x2312 + -0x1d9a + 0x1 * 0x4127,
        Infinity,
        -0xd * 0x18e + 0x199 * 0x7 + 0x907,
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
    const mapValues = values['map'](_0x47c755 => [
        _0x47c755,
        { 'a': 0x5 }
    ]);
    utilIsDeepStrict(new Map(mapValues), new Map(mapValues)), utilIsDeepStrict(new Map(mapValues), new Map(mapValues['reverse']()));
}
{
    const s1 = new Set(), s2 = new Set();
    s1['add'](0x1b62 + -0x1b9f + -0x3e * -0x1), s1['add'](0x6dc + -0x693 * 0x3 + 0x1 * 0xcdf), s2['add'](-0xa82 + 0xf8d * -0x1 + 0x1a11), s2['add'](-0xd9e + 0x1888 + -0xae9), utilIsDeepStrict(s1, s2);
}
{
    const m1 = new Map(), m2 = new Map(), obj = {
            'a': 0x5,
            'b': 0x6
        };
    m1['set'](-0xef5 + 0x1051 * -0x1 + 0x1f47, obj), m1['set'](0x14bb + 0x163 * 0xf + -0x2986, 'hi'), m1['set'](0x7 * -0x299 + 0x2434 + -0x5 * 0x39a, [
        -0xaa6 + -0x1 * -0x1140 + 0x233 * -0x3,
        0x1330 + -0x5 * -0x5ab + -0x2f85,
        0x93 + -0x24b2 + -0xb9 * -0x32
    ]), m2['set'](0x1 * -0x17ec + -0x1aea + 0x2 * 0x196c, 'hi'), m2['set'](-0x1 * 0xd5e + -0x2a * 0xca + -0xf81 * -0x3, obj), m2['set'](-0x1165 * 0x1 + -0x7 * -0x4f3 + -0x113d, [
        -0x15c5 + -0x1 * 0x112d + 0x26f3,
        -0x11 * 0xca + -0x11 * 0x1cf + -0x2c2b * -0x1,
        0x2 * -0x9b7 + 0x1 * -0x4f4 + 0x1865
    ]), utilIsDeepStrict(m1, m2);
}
{
    const m1 = new Map(), m2 = new Map();
    m1['set'](-0x1fc2 + 0x226 + 0x1d9d, m1), m2['set'](-0xe5 * -0x20 + -0x1686 + 0x7 * -0xdf, new Map()), notUtilIsDeepStrict(m1, m2);
}
{
    const map1 = new Map([[
                -0x7a8 + -0xe36 + -0x1fd * -0xb,
                0x51 * 0x71 + 0x13ae + -0x376e
            ]]), map2 = new Map([[
                0x90 * 0x33 + -0x188d + -0x211 * 0x2,
                '1'
            ]]);
    assert['strictEqual'](util['isDeepStrictEqual'](map1, map2), ![]);
}
{
    const s1 = new Set(), s2 = new Set();
    s1['x'] = 0x9 * -0x255 + -0xa7 * -0x21 + -0x85, notUtilIsDeepStrict(s1, s2);
    const m1 = new Map(), m2 = new Map();
    m1['x'] = -0x1b4 + 0xcce + 0x1 * -0xb15, notUtilIsDeepStrict(m1, m2);
}
{
    const s1 = new Set();
    s1['add'](s1);
    const s2 = new Set();
    s2['add'](s2), utilIsDeepStrict(s1, s2);
    const m1 = new Map();
    m1['set'](0x42 * -0x6a + -0x97b * -0x1 + 0x11db, m1);
    const m2 = new Map();
    m2['set'](0xcbb + -0xb * 0x3 + -0xc98, m2), utilIsDeepStrict(m1, m2);
    const m3 = new Map();
    m3['set'](m3, -0x2511 + 0x1f * -0x7f + 0x1a3a * 0x2);
    const m4 = new Map();
    m4['set'](m4, 0x1535 + 0x155f * -0x1 + 0xb * 0x4), utilIsDeepStrict(m3, m4);
}
utilIsDeepStrict([
    -0xb * 0x25e + 0x7 * -0x31d + -0x3 * -0xff2,
    ,
    ,
    0x1 * 0x1705 + -0x15a7 + -0x15b
], [
    -0x205 + 0x267d * -0x1 + -0x1 * -0x2883,
    ,
    ,
    -0xe * 0x2ca + 0x1297 + 0x83 * 0x28
]), notUtilIsDeepStrict([
    -0x1e71 * -0x1 + 0x17 * 0xc2 + -0x1 * 0x2fde,
    ,
    ,
    -0x154c + -0x2 * 0xc3a + 0x2dc3
], [
    0xba * 0xb + 0xee9 * -0x1 + 0x6ec,
    ,
    ,
    0xebd * -0x2 + 0x1bd7 * 0x1 + 0x1a6,
    ,
    ,
]);
{
    const err1 = new Error('foo1'), err2 = new Error('foo2'), err3 = new TypeError('foo1');
    notUtilIsDeepStrict(err1, err2, assert['AssertionError']), notUtilIsDeepStrict(err1, err3, assert['AssertionError']), notUtilIsDeepStrict(err1, {}, assert['AssertionError']);
}
assert['strictEqual'](util['isDeepStrictEqual'](NaN, NaN), !![]), assert['strictEqual'](util['isDeepStrictEqual']({ 'a': NaN }, { 'a': NaN }), !![]), assert['strictEqual'](util['isDeepStrictEqual']([
    -0x1 * -0x2614 + 0x1 * -0x280 + -0x7 * 0x515,
    -0x38 * -0x3e + -0x5d3 + -0x7bb * 0x1,
    NaN,
    0x13 * -0xfb + 0x1 * -0x1994 + -0x1 * -0x2c39
], [
    0x2594 + -0x8e8 + -0x1cab,
    0x1 * 0x2169 + -0x26da + -0x117 * -0x5,
    NaN,
    0x79c + -0x119 + -0x1 * 0x67f
]), !![]);
{
    const boxedString = new String('test'), boxedSymbol = Object(Symbol());
    notUtilIsDeepStrict(new Boolean(!![]), Object(![])), notUtilIsDeepStrict(Object(!![]), new Number(-0x34d + -0x5 * -0x1df + 0x60d * -0x1)), notUtilIsDeepStrict(new Number(0x25e + -0x2695 + 0x2439), new Number(-0xb7b * 0x2 + -0xe16 + 0x250d)), notUtilIsDeepStrict(boxedSymbol, Object(Symbol())), notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(boxedSymbol, boxedSymbol), utilIsDeepStrict(Object(!![]), Object(!![])), utilIsDeepStrict(Object(0x10 * 0x1c9 + -0xbef + 0x353 * -0x5), Object(-0x217d + 0x2 * 0xa60 + -0xd * -0xfb)), utilIsDeepStrict(boxedString, Object('test')), boxedString['slow'] = !![], notUtilIsDeepStrict(boxedString, Object('test')), boxedSymbol['slow'] = !![], notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(Object(BigInt(-0x1 * 0x647 + -0x1f73 + 0x25bb)), Object(BigInt(-0x269d + -0x9ce + 0x306c))), notUtilIsDeepStrict(Object(BigInt(0x61b + -0x1 * -0xae7 + 0x1 * -0x1101)), Object(BigInt(-0xca9 + -0x1 * 0x1ec5 + 0x2b70)));
    const booleanish = new Boolean(!![]);
    Object['defineProperty'](booleanish, Symbol['toStringTag'], { 'value': 'String' }), Object['setPrototypeOf'](booleanish, String['prototype']), notUtilIsDeepStrict(booleanish, new String('true'));
    const numberish = new Number(-0x1 * -0x2366 + -0x59 * 0x65 + -0x1 * 0x1f);
    Object['defineProperty'](numberish, Symbol['toStringTag'], { 'value': 'String' }), Object['setPrototypeOf'](numberish, String['prototype']), notUtilIsDeepStrict(numberish, new String('42'));
    const stringish = new String('0');
    Object['defineProperty'](stringish, Symbol['toStringTag'], { 'value': 'Number' }), Object['setPrototypeOf'](stringish, Number['prototype']), notUtilIsDeepStrict(stringish, new Number(-0x1 * 0x18bb + 0x1 * 0x25bf + -0xd04));
    const bigintish = new Object(BigInt(-0x2 * 0xcea + -0x1 * 0x349 + -0x1 * -0x1d47));
    Object['defineProperty'](bigintish, Symbol['toStringTag'], { 'value': 'String' }), Object['setPrototypeOf'](bigintish, String['prototype']), notUtilIsDeepStrict(bigintish, new String('42'));
    const symbolish = new Object(Symbol('fhqwhgads'));
    Object['defineProperty'](symbolish, Symbol['toStringTag'], { 'value': 'String' }), Object['setPrototypeOf'](symbolish, String['prototype']), notUtilIsDeepStrict(symbolish, new String('fhqwhgads'));
}
notUtilIsDeepStrict(-0x4 * 0x4c0 + 0x99b + 0x1 * 0x965, -(-0x10dc + 0x1 * -0x419 + 0xb9 * 0x1d)), utilIsDeepStrict(-(-0x3 * 0xc1 + -0x2f * 0xcc + 0x27b7), -(-0x753 + 0x1e2 * 0x5 + -0x217));
{
    const symbol1 = Symbol(), obj1 = { [symbol1]: 0x41 * -0x2f + -0xe0f + 0x25d * 0xb }, obj2 = { [symbol1]: -0x1d8 + 0x845 + -0x66c }, obj3 = { [Symbol()]: 0x1ff6 * 0x1 + 0x193f + -0x20b * 0x1c }, obj4 = {};
    Object['defineProperty'](obj2, Symbol(), { 'value': 0x1 }), Object['defineProperty'](obj4, symbol1, { 'value': 0x1 }), notUtilIsDeepStrict(obj1, obj3), utilIsDeepStrict(obj1, obj2), notUtilIsDeepStrict(obj1, obj4);
    const a = new Uint8Array(-0x5eb + -0x9 * 0x4d + 0x8a4), b = new Uint8Array(0x1 * 0x2146 + -0xa * -0x3d6 + -0x479e);
    a[symbol1] = !![], b[symbol1] = ![], notUtilIsDeepStrict(a, b), b[symbol1] = !![], utilIsDeepStrict(a, b);
    const boxedStringA = new String('test'), boxedStringB = new String('test');
    boxedStringA[symbol1] = !![], notUtilIsDeepStrict(boxedStringA, boxedStringB), boxedStringA[symbol1] = !![], utilIsDeepStrict(a, b);
}
