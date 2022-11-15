require(_0x5c0291(222));
const assert = require(_0x5c0291(223)), util = require(_0x5c0291(224));
class MyDate extends Date {
    constructor(..._0x5b5ef3) {
        super(..._0x5b5ef3), this[-6943 + 9200 + 37 * -61] = '1';
    }
}
class MyRegExp extends RegExp {
    constructor(..._0x396293) {
        super(..._0x396293), this[-3681 + -8453 + 12134] = '1';
    }
}
{
    const arr = new Uint8Array([
            -13 * -597 + -1 * 535 + -7106,
            -797 * -1 + -8352 + 7676,
            3285 + 4 * -1331 + 2161,
            6059 + 345 + -6394
        ]), buf = Buffer[_0x5c0291(225)](arr);
    assert['strictEqual'](util[_0x5c0291(226)](arr, buf), ![]);
    const buf2 = Buffer[_0x5c0291(225)](arr);
    buf2['prop'] = -8646 + 1922 + 6725, assert[_0x5c0291(227)](util['isDeepStrictEqual'](buf2, buf), ![]);
    const arr2 = new Uint8Array([
        -1663 + -4529 * -2 + -7275,
        277 * -21 + -4449 * 2 + 14836,
        8312 + 16 * 379 + 14254 * -1,
        -357 * 3 + 286 * -9 + 3655 * 1
    ]);
    arr2[_0x5c0291(228)] = -2695 + 1 * -4699 + 7399, assert[_0x5c0291(227)](util[_0x5c0291(226)](arr, arr2), ![]);
}
{
    const date = new Date(_0x5c0291(229)), date2 = new MyDate(_0x5c0291(229));
    assert['strictEqual'](util[_0x5c0291(226)](date, date2), ![]), assert[_0x5c0291(227)](util['isDeepStrictEqual'](date2, date), ![]);
}
{
    const re1 = new RegExp(_0x5c0291(230)), re2 = new MyRegExp(_0x5c0291(230));
    assert['strictEqual'](util[_0x5c0291(226)](re1, re2), ![]);
}
{
    const similar = new Set([
        { 0: '1' },
        { 0: 1 },
        new String('1'),
        ['1'],
        [-8 * 523 + 23 * 157 + -41 * -14],
        new MyDate(_0x5c0291(229)),
        new MyRegExp(_0x5c0291(230)),
        new Int8Array([-14 * 382 + -3295 * -3 + -4536]),
        new Uint8Array([-8604 * 1 + -3 * -2243 + 1876]),
        new Int16Array([61 * 47 + -4 * 1142 + 1702]),
        new Uint16Array([9120 + 3345 + -304 * 41]),
        new Int32Array([3833 * -1 + 3459 * -1 + 7293]),
        new Uint32Array([1350 + 8074 + 1 * -9423]),
        Buffer[_0x5c0291(225)]([-9834 + 4218 + 5617])
    ]);
    for (const a of similar) {
        for (const b of similar) {
            a !== b && assert[_0x5c0291(227)](util['isDeepStrictEqual'](a, b), ![]);
        }
    }
}
function utilIsDeepStrict(_0x32860e, _0x2d754c) {
    const _0x10b64a = _0x5c0291;
    assert[_0x10b64a(227)](util[_0x10b64a(226)](_0x32860e, _0x2d754c), !![]), assert[_0x10b64a(227)](util[_0x10b64a(226)](_0x2d754c, _0x32860e), !![]);
}
function notUtilIsDeepStrict(_0x229993, _0x81e2e0) {
    const _0x4fbf5e = _0x5c0291;
    assert[_0x4fbf5e(227)](util[_0x4fbf5e(226)](_0x229993, _0x81e2e0), ![]), assert[_0x4fbf5e(227)](util[_0x4fbf5e(226)](_0x81e2e0, _0x229993), ![]);
}
utilIsDeepStrict(new Set(), new Set()), utilIsDeepStrict(new Map(), new Map()), utilIsDeepStrict(new Set([
    -83 * -102 + 8801 + -8633 * 2,
    173 * 25 + 407 * -13 + 968,
    -1 * 5024 + -5 * 565 + 7852
]), new Set([
    2280 + -2601 + 322,
    -7 * 1255 + -108 * -47 + 1 * 3711,
    -4901 * -2 + 8822 + -18621
])), notUtilIsDeepStrict(new Set([
    4931 + 2179 * 1 + -7109,
    116 * -19 + -599 * -1 + -1 * -1607,
    1 * 3215 + -11 * 879 + -11 * -587
]), new Set([
    6503 + -8031 + -11 * -139,
    8 * 239 + -6786 + 4876 * 1,
    -4403 + -4 * 2335 + 13746,
    194 * -12 + -515 * 2 + 3362
])), notUtilIsDeepStrict(new Set([
    -1 * -2355 + 520 + -2874,
    -3888 + 4467 + 1 * -577,
    -2118 + 3819 + -1698,
    -1 * -9584 + 70 * 103 + 1 * -16790
]), new Set([
    2866 + -1 * -9991 + -12856,
    -563 + -929 + 6 * 249,
    -8975 + -2587 * -1 + 6391 * 1
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
        523 * 3 + -2929 + 1361,
        14 * 698 + -129 + -31 * 311
    ],
    [
        76 * -22 + -3 * 1753 + 6934,
        -1758 * 3 + 5 * 1289 + -1167
    ]
]), new Set([
    [
        6487 * -1 + 6687 + -197,
        2357 * -2 + -1093 + -1 * -5811
    ],
    [
        8901 + -2134 + -6766,
        -546 * 7 + -3844 + 4 * 1917
    ]
]));
{
    const a = [
            5 * 345 + -6493 + 251 * 19,
            1 * 9722 + -2334 * 1 + -7386
        ], b = [
            5410 + -9175 + 3768,
            -9393 + -1607 * 6 + 1 * 19039
        ], c = [
            34 * 81 + -6443 + 82 * 45,
            744 + 8890 + 1 * -9632
        ], d = [
            4737 + 9769 + -14503,
            -9877 * -1 + -4842 + -5031
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
        -1 * 116 + 1565 * 1 + -1448,
        -303 + -9174 + 9478
    ],
    [
        9008 + 2634 + -11640,
        -1 * -2129 + -3938 * 1 + -1811 * -1
    ]
]), new Map([
    [
        4337 + 2 * 2642 + -9620,
        -1235 + -1 * -4647 + 9 * -379
    ],
    [
        9173 * -1 + -3853 + 13028,
        -906 * -3 + 3 * 1013 + -5755
    ]
])), utilIsDeepStrict(new Map([
    [
        1297 * 5 + 269 * -21 + -167 * 5,
        -7396 + 3010 + 41 * 107
    ],
    [
        3363 + -12 * 302 + 263,
        -563 * -5 + 1 * 1726 + -4539
    ]
]), new Map([
    [
        -7439 + 4 * -1709 + 14277,
        -2692 + 4229 + -1535 * 1
    ],
    [
        5607 + 4645 * 1 + 3 * -3417,
        2 * -2457 + -5 * 259 + 6210
    ]
])), notUtilIsDeepStrict(new Map([
    [
        -4 * -986 + -2036 * -1 + -5979,
        -2308 + -3351 * -1 + -1042
    ],
    [
        -3071 * -2 + 1 * -4901 + 7 * -177,
        5290 + 17 * 221 + -9045
    ]
]), new Map([
    [
        8836 + 5304 + -14139,
        -1 * 2469 + 271 * 1 + 8 * 275
    ],
    [
        -7108 + -6529 + 13639,
        -379 * 1 + 1 * -3939 + 7 * 617
    ]
])), notUtilIsDeepStrict(new Map([
    [
        [775 * -8 + 1730 * -1 + 7931],
        -3583 + -1339 + 4923
    ],
    [
        {},
        -4808 + 3 * 2463 + -2579
    ]
]), new Map([
    [
        [-1 * -9624 + -3369 + -118 * 53],
        -2 * -4337 + -7494 + -1178
    ],
    [
        {},
        1 * 7417 + 458 + -127 * 62
    ]
])), notUtilIsDeepStrict(new Set([-1 * 1268 + -2 * -1658 + -2047]), [1849 * 2 + 2377 * 4 + -13205]), notUtilIsDeepStrict(new Set(), []), notUtilIsDeepStrict(new Set(), {}), notUtilIsDeepStrict(new Map([[
        'a',
        -1 * 1915 + -279 * 7 + 3869
    ]]), { 'a': 1 }), notUtilIsDeepStrict(new Map(), []), notUtilIsDeepStrict(new Map(), {}), notUtilIsDeepStrict(new Set(['1']), new Set([2 * 3748 + 5544 + 1 * -13039])), notUtilIsDeepStrict(new Map([[
        '1',
        'a'
    ]]), new Map([[
        8 * -444 + -8206 + 11759,
        'a'
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        19 * 51 + 1329 + -2297
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        -5134 + 1 * -654 + -386 * -15
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
        7 * 383 + 8753 * -1 + 103 * 59
    ],
    [
        { 'x': 1 },
        -9517 * -1 + -71 * -81 + -15263
    ]
]), new Map([
    [
        { 'x': 1 },
        -3487 + -8927 + -12419 * -1
    ],
    [
        { 'x': 2 },
        -4376 + -4 * -1465 + 1 * -1479
    ]
])), notUtilIsDeepStrict(new Set([
    -5027 + 1487 * 3 + 1 * 569,
    '3'
]), new Set([
    2350 + 2992 + -19 * 281,
    -6577 * 1 + 637 * 1 + 5944
])), notUtilIsDeepStrict(new Map([
    [
        -1619 + -70 * -116 + -6498 * 1,
        7354 + 1947 * -1 + -5407 * 1
    ],
    [
        '3',
        8596 + 277 * -3 + -7765
    ]
]), new Map([
    [
        5182 + -8003 + 706 * 4,
        -2654 + -6245 + 8899 * 1
    ],
    [
        4 * -1487 + -5825 + 1 * 11777,
        -4867 + -9796 + 341 * 43
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
        10 * -211 + 3 * 2912 + -265 * 25,
        'a'
    ],
    [
        {},
        'a'
    ]
]), new Map([
    [
        545 + -4452 + -3908 * -1,
        'a'
    ],
    [
        {},
        'a'
    ]
])), utilIsDeepStrict(new Set([
    7317 + 8542 + -15858,
    'a',
    [
        {},
        'a'
    ]
]), new Set([
    13 * -439 + -311 + 6019,
    'a',
    [
        {},
        'a'
    ]
])), notUtilIsDeepStrict(new Map([
    [
        4 * 1438 + -91 * 71 + 710,
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
        669 * -7 + 8364 * -1 + 13048,
        'a'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        -8249 * 1 + 8911 + -661 * 1,
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
        -8921 + -53 * 55 + 11837,
        'c'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        -716 + 6270 + 617 * -9,
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
    -6287 + 94 * -25 + -8638 * -1
])), notUtilIsDeepStrict(new Set([
    [
        {},
        9174 + -2317 + 6856 * -1
    ],
    [
        {},
        59 * -139 + 5523 + 19 * 141
    ]
]), new Set([
    [
        {},
        7598 + -1 * -3544 + -13 * 857
    ],
    [
        5165 * 1 + 7381 * -1 + -1 * -2217,
        -6537 + -6724 + 13262
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        -6589 + 54 * -99 + 11936
    ],
    [
        {},
        7238 + 5 * -1115 + -1662
    ]
]), new Map([
    [
        {},
        1 * -6093 + 1 * -3071 + -13 * -705
    ],
    [
        -7877 + -1815 + 9693,
        8555 * -1 + -4354 + -2582 * -5
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        7401 * 1 + -5029 + 1 * -2371
    ],
    [
        !![],
        1 * -9107 + 1 * 4113 + 4995
    ]
]), new Map([
    [
        {},
        6663 * 1 + 8647 + -15309
    ],
    [
        -47 * 176 + 31 * 79 + 5824,
        -3236 + -1 * 2158 + 65 * 83
    ]
])), notUtilIsDeepStrict(new Set([
    -1807 + 15 * -586 + 5299 * 2,
    !![],
    ![]
]), new Set([
    '1',
    2860 + 532 + -3392,
    '0'
])), notUtilIsDeepStrict(new Map([
    [
        3525 + 1 * 1471 + -4995 * 1,
        -1418 + 8954 + -7531
    ],
    [
        !![],
        -1483 * 3 + 7934 + 696 * -5
    ],
    [
        ![],
        9253 + 8612 + -17860
    ]
]), new Map([
    [
        '1',
        3 * -1672 + -8354 * -1 + 3 * -1111
    ],
    [
        -17 * -306 + 9140 + 71 * -202,
        1 * -7822 + -4 * -1631 + 1303
    ],
    [
        '0',
        -291 * -26 + 131 * 61 + -15552
    ]
])), utilIsDeepStrict(new Map([[
        769 * 4 + 4602 + -9 * 853,
        undefined
    ]]), new Map([[
        2 * 2099 + -2 * -4132 + -12461 * 1,
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        -3894 + -7119 + 5507 * 2,
        null
    ]]), new Map([[
        '1',
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        271 * 16 + 31 * -116 + 739 * -1,
        undefined
    ]]), new Map([[
        -185 * -2 + 1 * -971 + 3 * 201,
        undefined
    ]])), utilIsDeepStrict(new Map([[
        null,
        297 + -1209 * 5 + -213 * -27
    ]]), new Map([[
        null,
        331 + 5128 + -5456
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
    d['a'] = -1492 * -1 + 1822 + -3313 * 1, d['b'] = d;
    const e = {};
    e['a'] = -20 * 444 + 4062 + 79 * 61, e['b'] = {}, notUtilIsDeepStrict(d, e);
}
{
    const a = {}, b = {};
    a['a'] = a, b['a'] = {}, b['a']['a'] = a, utilIsDeepStrict(a, b);
}
{
    const a = new Set(), b = new Set(), c = new Set();
    a[_0x5c0291(231)](a), b[_0x5c0291(231)](b), c['add'](a), utilIsDeepStrict(b, c);
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
        -6089 + -8794 + 15006,
        Infinity,
        -1 * 5211 + 5361 * -1 + 1 * 10572,
        null,
        undefined,
        ![],
        !![],
        {},
        [],
        () => {
        }
    ];
    utilIsDeepStrict(new Set(values), new Set(values)), utilIsDeepStrict(new Set(values), new Set(values[_0x5c0291(232)]()));
    const mapValues = values[_0x5c0291(233)](_0xabdc21 => [
        _0xabdc21,
        { 'a': 5 }
    ]);
    utilIsDeepStrict(new Map(mapValues), new Map(mapValues)), utilIsDeepStrict(new Map(mapValues), new Map(mapValues[_0x5c0291(232)]()));
}
function _0x2dc5(_0xec9b2d, _0xb94e65) {
    return _0x2dc5 = function (_0xee01a3, _0x59ccda) {
        _0xee01a3 = _0xee01a3 - (4121 + -756 + 1051 * -3);
        let _0x36c711 = _0x11dc[_0xee01a3];
        return _0x36c711;
    }, _0x2dc5(_0xec9b2d, _0xb94e65);
}
{
    const s1 = new Set(), s2 = new Set();
    s1[_0x5c0291(231)](-1865 + 2 * 1133 + -200 * 2), s1[_0x5c0291(231)](1 * -976 + -122 * -59 + -6220), s2[_0x5c0291(231)](59 * -163 + -5663 + 2 * 7641), s2[_0x5c0291(231)](6710 * -1 + -1666 * -2 + 3379), utilIsDeepStrict(s1, s2);
}
{
    const m1 = new Map(), m2 = new Map(), obj = {
            'a': 5,
            'b': 6
        };
    m1[_0x5c0291(234)](-8304 + 42 * 119 + -3307 * -1, obj), m1['set'](-8988 + -16 * 212 + 12382, 'hi'), m1[_0x5c0291(234)](7208 + -1 * 2741 + 72 * -62, [
        -158 * 4 + 2 * -707 + 1 * 2047,
        2140 + -8782 + -2 * -3322,
        -8 * -427 + -1073 + -2340
    ]), m2['set'](25 * -71 + -1 * -5163 + -3386, 'hi'), m2['set'](5 * 1706 + -766 * 2 + -1 * 6997, obj), m2[_0x5c0291(234)](-6346 + -2 * -212 + 5925, [
        -6149 + -2 * -4866 + 1 * -3582,
        2 * -4464 + -6 * -1289 + 1196,
        8999 + -1 * 2273 + -6723
    ]), utilIsDeepStrict(m1, m2);
}
{
    const m1 = new Map(), m2 = new Map();
    m1['set'](-3098 + -6364 + 9463 * 1, m1), m2[_0x5c0291(234)](-1223 * 1 + -6269 * -1 + -5045, new Map()), notUtilIsDeepStrict(m1, m2);
}
{
    const map1 = new Map([[
                4834 + 1 * 8680 + -1 * 13513,
                109 * 47 + -6880 + 1758
            ]]), map2 = new Map([[
                979 * -1 + 4722 + -3742,
                '1'
            ]]);
    assert['strictEqual'](util[_0x5c0291(226)](map1, map2), ![]);
}
{
    const s1 = new Set(), s2 = new Set();
    s1['x'] = 6297 + -4869 + -1423, notUtilIsDeepStrict(s1, s2);
    const m1 = new Map(), m2 = new Map();
    m1['x'] = -1 * -5203 + -139 * -26 + -4 * 2203, notUtilIsDeepStrict(m1, m2);
}
{
    const s1 = new Set();
    s1[_0x5c0291(231)](s1);
    const s2 = new Set();
    s2[_0x5c0291(231)](s2), utilIsDeepStrict(s1, s2);
    const m1 = new Map();
    m1[_0x5c0291(234)](8031 + -7521 + -508, m1);
    const m2 = new Map();
    m2[_0x5c0291(234)](2 * 3688 + -43 * 191 + -839 * -1, m2), utilIsDeepStrict(m1, m2);
    const m3 = new Map();
    m3[_0x5c0291(234)](m3, 2670 + -47 * 167 + -3 * -1727);
    const m4 = new Map();
    m4[_0x5c0291(234)](m4, 9415 + -1189 + -8224), utilIsDeepStrict(m3, m4);
}
utilIsDeepStrict([
    1720 * 5 + -27 * -201 + -14026,
    ,
    ,
    -2 * -2829 + -4877 + -778
], [
    78 * 32 + 2960 + -5455,
    ,
    ,
    -8653 + 2549 + 6107
]), notUtilIsDeepStrict([
    9 * -375 + -218 * -27 + 502 * -5,
    ,
    ,
    3229 * -2 + -3291 * 1 + 46 * 212
], [
    9688 + 8144 * -1 + -1 * 1543,
    ,
    ,
    59 * 105 + -47 * 46 + -4030 * 1,
    ,
    ,
]);
{
    const err1 = new Error(_0x5c0291(235)), err2 = new Error(_0x5c0291(236)), err3 = new TypeError(_0x5c0291(235));
    notUtilIsDeepStrict(err1, err2, assert['AssertionError']), notUtilIsDeepStrict(err1, err3, assert[_0x5c0291(237)]), notUtilIsDeepStrict(err1, {}, assert[_0x5c0291(237)]);
}
assert[_0x5c0291(227)](util[_0x5c0291(226)](NaN, NaN), !![]), assert[_0x5c0291(227)](util[_0x5c0291(226)]({ 'a': NaN }, { 'a': NaN }), !![]), assert[_0x5c0291(227)](util[_0x5c0291(226)]([
    -8222 + -1 * 3217 + 11440,
    -3655 + -619 * 8 + 8609,
    NaN,
    2232 + 9529 + 11757 * -1
], [
    -2144 + -2638 + 1 * 4783,
    2765 + -4785 + -1 * -2022,
    NaN,
    -9816 + 5206 + 4614
]), !![]);
{
    const boxedString = new String('test'), boxedSymbol = Object(Symbol());
    notUtilIsDeepStrict(new Boolean(!![]), Object(![])), notUtilIsDeepStrict(Object(!![]), new Number(-1051 + -8639 + 9691)), notUtilIsDeepStrict(new Number(-49 * 106 + 34 * 75 + 2646), new Number(-442 * -22 + -1 * 1102 + 233 * -37)), notUtilIsDeepStrict(boxedSymbol, Object(Symbol())), notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(boxedSymbol, boxedSymbol), utilIsDeepStrict(Object(!![]), Object(!![])), utilIsDeepStrict(Object(17 * -186 + 344 * 14 + -1652), Object(-1 * -4999 + -409 * -21 + -13586)), utilIsDeepStrict(boxedString, Object('test')), boxedString[_0x5c0291(238)] = !![], notUtilIsDeepStrict(boxedString, Object(_0x5c0291(230))), boxedSymbol[_0x5c0291(238)] = !![], notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(Object(BigInt(5670 + -1691 * -1 + -7360)), Object(BigInt(-1953 + 3886 + -1932))), notUtilIsDeepStrict(Object(BigInt(634 * -10 + 49 * -29 + -7762 * -1)), Object(BigInt(-2061 * -3 + -4793 + -347 * 4)));
    const booleanish = new Boolean(!![]);
    Object['defineProperty'](booleanish, Symbol['toStringTag'], { 'value': _0x5c0291(239) }), Object[_0x5c0291(240)](booleanish, String[_0x5c0291(241)]), notUtilIsDeepStrict(booleanish, new String(_0x5c0291(242)));
    const numberish = new Number(-1227 + 2002 + -1 * 733);
    Object['defineProperty'](numberish, Symbol[_0x5c0291(243)], { 'value': 'String' }), Object['setPrototypeOf'](numberish, String['prototype']), notUtilIsDeepStrict(numberish, new String('42'));
    const stringish = new String('0');
    Object[_0x5c0291(244)](stringish, Symbol['toStringTag'], { 'value': _0x5c0291(245) }), Object[_0x5c0291(240)](stringish, Number[_0x5c0291(241)]), notUtilIsDeepStrict(stringish, new Number(973 * -7 + -2903 + 9714));
    const bigintish = new Object(BigInt(1696 + 904 + 2558 * -1));
    Object[_0x5c0291(244)](bigintish, Symbol[_0x5c0291(243)], { 'value': _0x5c0291(239) }), Object[_0x5c0291(240)](bigintish, String[_0x5c0291(241)]), notUtilIsDeepStrict(bigintish, new String('42'));
    const symbolish = new Object(Symbol(_0x5c0291(246)));
    Object[_0x5c0291(244)](symbolish, Symbol['toStringTag'], { 'value': _0x5c0291(239) }), Object[_0x5c0291(240)](symbolish, String[_0x5c0291(241)]), notUtilIsDeepStrict(symbolish, new String(_0x5c0291(246)));
}
notUtilIsDeepStrict(5127 * 1 + -4654 + -1 * 473, -(-5042 + 8153 + 3111 * -1)), utilIsDeepStrict(-(-4 * -2385 + 18 * 412 + -16956), -(-1184 + -2039 + -1 * -3223));
{
    const symbol1 = Symbol(), obj1 = { [symbol1]: 835 + -2017 + 1183 }, obj2 = { [symbol1]: 1078 + 1426 * 1 + -2503 * 1 }, obj3 = { [Symbol()]: 2 * -3346 + 1 * 7213 + -40 * 13 }, obj4 = {};
    Object['defineProperty'](obj2, Symbol(), { 'value': 1 }), Object[_0x5c0291(244)](obj4, symbol1, { 'value': 1 }), notUtilIsDeepStrict(obj1, obj3), utilIsDeepStrict(obj1, obj2), notUtilIsDeepStrict(obj1, obj4);
    const a = new Uint8Array(-1347 * 5 + -2158 + -7 * -1271), b = new Uint8Array(-3874 + -9 * 29 + -4139 * -1);
    a[symbol1] = !![], b[symbol1] = ![], notUtilIsDeepStrict(a, b), b[symbol1] = !![], utilIsDeepStrict(a, b);
    const boxedStringA = new String(_0x5c0291(230)), boxedStringB = new String('test');
    boxedStringA[symbol1] = !![], notUtilIsDeepStrict(boxedStringA, boxedStringB), boxedStringA[symbol1] = !![], utilIsDeepStrict(a, b);
}