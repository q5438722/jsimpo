require(_0x337539(209));
const assert = require(_0x337539(210)), util = require('util');
class MyDate extends Date {
    constructor(..._0x58390e) {
        super(..._0x58390e), this[-4600 + -7319 + 3 * 3973] = '1';
    }
}
class MyRegExp extends RegExp {
    constructor(..._0x538410) {
        super(..._0x538410), this[-39 * -146 + 9097 + -14791] = '1';
    }
}
{
    const arr = new Uint8Array([
            -9917 + 1 * -4383 + 2060 * 7,
            7512 + -4298 + -3093,
            113 * 61 + -1 * -5120 + -11891,
            -28 * 263 + -141 + 7515
        ]), buf = Buffer['from'](arr);
    assert[_0x337539(211)](util[_0x337539(212)](arr, buf), ![]);
    const buf2 = Buffer['from'](arr);
    buf2[_0x337539(213)] = 5838 + 7230 + -13067, assert[_0x337539(211)](util['isDeepStrictEqual'](buf2, buf), ![]);
    const arr2 = new Uint8Array([
        6828 + 27 * -114 + -2 * 1815,
        -9300 + 9229 + -48 * -4,
        6482 + 3 * -2737 + 1851,
        -52 * -21 + -2 * -953 + -2988
    ]);
    arr2['prop'] = -9253 * 1 + -1 * -4490 + -2384 * -2, assert[_0x337539(211)](util[_0x337539(212)](arr, arr2), ![]);
}
{
    const date = new Date('2016'), date2 = new MyDate(_0x337539(214));
    assert[_0x337539(211)](util['isDeepStrictEqual'](date, date2), ![]), assert['strictEqual'](util[_0x337539(212)](date2, date), ![]);
}
function _0x2b36(_0x2087ee, _0x5ae1c7) {
    return _0x2b36 = function (_0x4139ed, _0x164f3c) {
        _0x4139ed = _0x4139ed - (-1 * 2757 + -8 * -571 + 14 * -115);
        let _0x456093 = _0x5181[_0x4139ed];
        return _0x456093;
    }, _0x2b36(_0x2087ee, _0x5ae1c7);
}
{
    const re1 = new RegExp(_0x337539(215)), re2 = new MyRegExp(_0x337539(215));
    assert[_0x337539(211)](util[_0x337539(212)](re1, re2), ![]);
}
{
    const similar = new Set([
        { 0: '1' },
        { 0: 1 },
        new String('1'),
        ['1'],
        [-9526 + 647 * -9 + 15350],
        new MyDate(_0x337539(214)),
        new MyRegExp(_0x337539(215)),
        new Int8Array([-1 * -8637 + 68 * -6 + 2057 * -4]),
        new Uint8Array([-844 * 3 + -55 * 163 + -5749 * -2]),
        new Int16Array([-8846 * -1 + -8559 + 11 * -26]),
        new Uint16Array([-89 * -79 + -309 * 17 + 1 * -1777]),
        new Int32Array([-8004 + 2 * 4202 + 3 * -133]),
        new Uint32Array([-4425 + 7383 + 1 * -2957]),
        Buffer[_0x337539(216)]([1 * 5203 + 1 * 1797 + -1 * 6999])
    ]);
    for (const a of similar) {
        for (const b of similar) {
            a !== b && assert['strictEqual'](util['isDeepStrictEqual'](a, b), ![]);
        }
    }
}
function utilIsDeepStrict(_0x2ad204, _0x37a5e5) {
    const _0x47eb99 = _0x337539;
    assert['strictEqual'](util['isDeepStrictEqual'](_0x2ad204, _0x37a5e5), !![]), assert[_0x47eb99(211)](util[_0x47eb99(212)](_0x37a5e5, _0x2ad204), !![]);
}
function notUtilIsDeepStrict(_0x5e2c99, _0x46d3ab) {
    const _0x4cb4b2 = _0x337539;
    assert[_0x4cb4b2(211)](util['isDeepStrictEqual'](_0x5e2c99, _0x46d3ab), ![]), assert[_0x4cb4b2(211)](util[_0x4cb4b2(212)](_0x46d3ab, _0x5e2c99), ![]);
}
utilIsDeepStrict(new Set(), new Set()), utilIsDeepStrict(new Map(), new Map()), utilIsDeepStrict(new Set([
    -8394 + -111 * -62 + 1513,
    2817 * -2 + 3604 + -127 * -16,
    -4 * 2393 + 9982 + -11 * 37
]), new Set([
    9581 * -1 + -2697 + 12279,
    798 * -6 + -4495 * 2 + -130 * -106,
    -4638 + 6 * -467 + 7443 * 1
])), notUtilIsDeepStrict(new Set([
    5 * 157 + 7283 + -8067,
    -20 * 66 + 1130 * 3 + -2068,
    -4423 + -68 * 113 + 12110
]), new Set([
    -2 * -274 + -6460 + -5913 * -1,
    -197 * -43 + 543 * 15 + -16614,
    -4731 + -106 * 74 + 12578,
    1 * 649 + 8930 + -9575 * 1
])), notUtilIsDeepStrict(new Set([
    -693 * -10 + -1106 + -1941 * 3,
    -1 * 2791 + -7234 + 1 * 10027,
    -139 * -13 + 5836 + -7640,
    2798 * 3 + 6218 * 1 + -14608
]), new Set([
    4112 + -73 * 47 + -680,
    -1 * -3413 + 5241 + -1236 * 7,
    9360 + 3000 + -12357
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
        7739 + 218 * 35 + 904 * -17,
        3 * -2175 + -7921 + 14448
    ],
    [
        1557 + 3389 * 1 + 4943 * -1,
        -43 * -178 + -6799 + -851
    ]
]), new Set([
    [
        -1286 + 9988 + -8699 * 1,
        6311 * -1 + -25 * 277 + 13240
    ],
    [
        -1 * -6933 + 4121 + -11053,
        4225 * 1 + -2001 + -2222
    ]
]));
{
    const a = [
            -1514 + -4451 * 1 + 5966,
            1 * 5117 + -3223 * -3 + -14784
        ], b = [
            -3055 + 1 * 7302 + -4244,
            -6812 + -5643 + -4153 * -3
        ], c = [
            -6197 + 6949 + -751,
            -8040 + -92 * -61 + 405 * 6
        ], d = [
            -1 * -5105 + 4288 + -9390,
            1 * 692 + -37 * -26 + -1650
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
        1 * 3181 + 47 * 26 + -4402,
        8463 + 9701 + -18163
    ],
    [
        3573 + -1 * 4358 + 787,
        1094 * 3 + -1 * 9179 + -17 * -347
    ]
]), new Map([
    [
        -7582 + 2113 + 5470,
        9856 + 6 * -361 + -699 * 11
    ],
    [
        -61 * -9 + -795 + 248,
        -5152 + -63 * -1 + 5091
    ]
])), utilIsDeepStrict(new Map([
    [
        9011 + -6229 + 9 * -309,
        -26 * -54 + 2144 + -1 * 3547
    ],
    [
        -2542 + -5 * -140 + -2 * -922,
        2 * 3702 + -3536 + -3866
    ]
]), new Map([
    [
        5430 + 7649 + 9 * -1453,
        -5 * 1587 + 9777 + -1840
    ],
    [
        -1 * 51 + 917 + -173 * 5,
        -2216 * 2 + 8 * -63 + 4937 * 1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        4 * 881 + -1414 + 3 * -703,
        4803 + 17 * -40 + -1 * 4122
    ],
    [
        -28 * 328 + -647 + 1 * 9833,
        3 * 881 + -5424 + -1 * -2783
    ]
]), new Map([
    [
        -778 * 5 + 1 * -8012 + 11903,
        1 * -647 + 4154 * -2 + 13 * 689
    ],
    [
        3519 + 2 * -479 + 853 * -3,
        822 + 4980 + 5801 * -1
    ]
])), notUtilIsDeepStrict(new Map([
    [
        [-8290 + -34 + 37 * 225],
        -3 * 881 + -47 * 191 + 11621
    ],
    [
        {},
        -3551 + 4 * 1398 + -2039
    ]
]), new Map([
    [
        [3954 + -3929 * 1 + 24 * -1],
        -9356 + 17 * -223 + 13149
    ],
    [
        {},
        -2540 + 9211 + 10 * -667
    ]
])), notUtilIsDeepStrict(new Set([-23 * -325 + -1 * -4787 + 67 * -183]), [-994 + -3880 + 195 * 25]), notUtilIsDeepStrict(new Set(), []), notUtilIsDeepStrict(new Set(), {}), notUtilIsDeepStrict(new Map([[
        'a',
        -14 * -492 + 4136 + -11023
    ]]), { 'a': 1 }), notUtilIsDeepStrict(new Map(), []), notUtilIsDeepStrict(new Map(), {}), notUtilIsDeepStrict(new Set(['1']), new Set([2213 + 1 * -8370 + 6158])), notUtilIsDeepStrict(new Map([[
        '1',
        'a'
    ]]), new Map([[
        -25 * -27 + 397 * 25 + -1 * 10599,
        'a'
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        -7 * -959 + 5461 + -12173
    ]])), notUtilIsDeepStrict(new Map([[
        'a',
        '1'
    ]]), new Map([[
        'a',
        -6238 + 3650 + -370 * -7
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
        527 * 2 + 6422 + -7471
    ],
    [
        { 'x': 1 },
        9684 + 9872 + 399 * -49
    ]
]), new Map([
    [
        { 'x': 1 },
        -1528 + -3866 * 2 + 1 * 9265
    ],
    [
        { 'x': 2 },
        -8679 + 8936 * -1 + -10 * -1762
    ]
])), notUtilIsDeepStrict(new Set([
    -1 * -8087 + 1 * 6163 + -4749 * 3,
    '3'
]), new Set([
    1760 + -7 * -312 + 563 * -7,
    5491 + -289 * 19 + 4
])), notUtilIsDeepStrict(new Map([
    [
        8 * 671 + -6388 + 1023,
        1 * -5609 + 6275 + 666 * -1
    ],
    [
        '3',
        4783 * -1 + -178 * 55 + -59 * -247
    ]
]), new Map([
    [
        7056 + -6825 + -228,
        -4628 + -2 * -2748 + -124 * 7
    ],
    [
        6619 + -224 * -42 + -16023,
        1 * 4357 + 9076 + -13433
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
        -4646 + -161 * 55 + -2 * -6751,
        'a'
    ],
    [
        {},
        'a'
    ]
]), new Map([
    [
        -7867 + 1 * 5879 + -153 * -13,
        'a'
    ],
    [
        {},
        'a'
    ]
])), utilIsDeepStrict(new Set([
    -1 * 670 + 1869 + -1198,
    'a',
    [
        {},
        'a'
    ]
]), new Set([
    -117 * -19 + 3077 * -3 + 163 * 43,
    'a',
    [
        {},
        'a'
    ]
])), notUtilIsDeepStrict(new Map([
    [
        1103 * 1 + -812 * -5 + -5162,
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
        1 * -7638 + 6598 + 1041,
        'a'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        2169 * -2 + 1 * -7354 + -11 * -1063,
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
        2234 + -43 * -73 + -5372,
        'c'
    ]
]), new Map([
    [
        '1',
        'a'
    ],
    [
        -3 * 389 + -3170 + -4338 * -1,
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
    9952 + -433 * 13 + 2161 * -2
])), notUtilIsDeepStrict(new Set([
    [
        {},
        -2 * 2837 + 5 * 1515 + -5 * 380
    ],
    [
        {},
        6067 * 1 + -7406 + -20 * -67
    ]
]), new Set([
    [
        {},
        -1 * 328 + -3247 * 1 + -3576 * -1
    ],
    [
        -1451 * -1 + 941 + -797 * 3,
        4066 + -8389 + -4 * -1081
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        -71 * -115 + -620 * 10 + -491 * 4
    ],
    [
        {},
        31 * 33 + 57 * 6 + 124 * -11
    ]
]), new Map([
    [
        {},
        -4681 + 9014 + -4332
    ],
    [
        -3736 + 6173 * 1 + 6 * -406,
        -17 * 265 + 387 * 7 + 1797
    ]
])), notUtilIsDeepStrict(new Map([
    [
        {},
        -6431 * 1 + 783 + 1883 * 3
    ],
    [
        !![],
        777 + 1969 + -3 * 915
    ]
]), new Map([
    [
        {},
        775 + 809 + -1583
    ],
    [
        6124 + 52 * 158 + 1 * -14339,
        6 * -1448 + -52 * 122 + 15033
    ]
])), notUtilIsDeepStrict(new Set([
    4761 + -617 * -11 + -11547,
    !![],
    ![]
]), new Set([
    '1',
    -1 * -4857 + 1588 + -6445,
    '0'
])), notUtilIsDeepStrict(new Map([
    [
        6153 + -1011 * 3 + -3119,
        4701 * 1 + -741 * -8 + 664 * -16
    ],
    [
        !![],
        8853 + -4093 + -4755
    ],
    [
        ![],
        -6297 * 1 + -1 * -7013 + 79 * -9
    ]
]), new Map([
    [
        '1',
        -7041 * -1 + -1871 * -5 + -443 * 37
    ],
    [
        7557 + -8 * -938 + -15061,
        -714 * -11 + -5611 + 2 * -1119
    ],
    [
        '0',
        -38 * -203 + 9754 * -1 + 2045
    ]
])), utilIsDeepStrict(new Map([[
        417 * 5 + 5479 + -3 * 2521,
        undefined
    ]]), new Map([[
        5134 + 47 * 74 + -109 * 79,
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        7931 + 5870 + -20 * 690,
        null
    ]]), new Map([[
        '1',
        undefined
    ]])), notUtilIsDeepStrict(new Map([[
        4675 + 313 * 23 + -11873,
        undefined
    ]]), new Map([[
        -54 * 172 + 3996 + -1 * -5294,
        undefined
    ]])), utilIsDeepStrict(new Map([[
        null,
        1 * -5691 + 6672 + -978
    ]]), new Map([[
        null,
        21 * 367 + 699 + -8403
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
    d['a'] = 8490 + 6204 + -14693, d['b'] = d;
    const e = {};
    e['a'] = -5819 + -3286 + -1 * -9106, e['b'] = {}, notUtilIsDeepStrict(d, e);
}
{
    const a = {}, b = {};
    a['a'] = a, b['a'] = {}, b['a']['a'] = a, utilIsDeepStrict(a, b);
}
{
    const a = new Set(), b = new Set(), c = new Set();
    a[_0x337539(217)](a), b[_0x337539(217)](b), c[_0x337539(217)](a), utilIsDeepStrict(b, c);
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
        2309 * 1 + 4390 + -6576,
        Infinity,
        3 * 1990 + -3 * 1981 + 1 * -27,
        null,
        undefined,
        ![],
        !![],
        {},
        [],
        () => {
        }
    ];
    utilIsDeepStrict(new Set(values), new Set(values)), utilIsDeepStrict(new Set(values), new Set(values[_0x337539(218)]()));
    const mapValues = values[_0x337539(219)](_0x248800 => [
        _0x248800,
        { 'a': 5 }
    ]);
    utilIsDeepStrict(new Map(mapValues), new Map(mapValues)), utilIsDeepStrict(new Map(mapValues), new Map(mapValues[_0x337539(218)]()));
}
{
    const s1 = new Set(), s2 = new Set();
    s1[_0x337539(217)](3155 + 28 * 175 + -8054), s1['add'](1006 * -3 + -9343 * -1 + -6323), s2[_0x337539(217)](-2417 + -2513 + -411 * -12), s2[_0x337539(217)](1 * 6007 + -3 * -815 + -8451), utilIsDeepStrict(s1, s2);
}
{
    const m1 = new Map(), m2 = new Map(), obj = {
            'a': 5,
            'b': 6
        };
    m1[_0x337539(220)](4461 * -2 + -9433 + 2 * 9178, obj), m1[_0x337539(220)](2 * -385 + -8662 + 9434, 'hi'), m1[_0x337539(220)](-1733 * 4 + 1 * 2297 + -4638 * -1, [
        -3707 * -1 + -3791 + 85,
        3716 + -8910 + 866 * 6,
        3282 + 379 * 11 + -56 * 133
    ]), m2[_0x337539(220)](-7879 * 1 + -5448 + 9 * 1481, 'hi'), m2[_0x337539(220)](-8188 + -47 * 33 + 9740, obj), m2[_0x337539(220)](-5381 + -877 * -3 + 2753 * 1, [
        7381 + -2181 + 1 * -5199,
        33 * 74 + 17 * 11 + -2627,
        8016 + 5385 + -13398
    ]), utilIsDeepStrict(m1, m2);
}
{
    const m1 = new Map(), m2 = new Map();
    m1['set'](-5454 + 157 * 53 + 1433 * -2, m1), m2[_0x337539(220)](-1702 + 7843 + -6140, new Map()), notUtilIsDeepStrict(m1, m2);
}
{
    const map1 = new Map([[
                505 * 6 + 1568 + -4597,
                -1 * 695 + 1092 * 3 + -2580
            ]]), map2 = new Map([[
                29 * 174 + -3385 * 1 + 332 * -5,
                '1'
            ]]);
    assert['strictEqual'](util[_0x337539(212)](map1, map2), ![]);
}
{
    const s1 = new Set(), s2 = new Set();
    s1['x'] = 3171 + 67 * 6 + -3568, notUtilIsDeepStrict(s1, s2);
    const m1 = new Map(), m2 = new Map();
    m1['x'] = -2132 + 13 * -737 + 11718, notUtilIsDeepStrict(m1, m2);
}
{
    const s1 = new Set();
    s1['add'](s1);
    const s2 = new Set();
    s2['add'](s2), utilIsDeepStrict(s1, s2);
    const m1 = new Map();
    m1[_0x337539(220)](-81 * -23 + -8923 + 7062, m1);
    const m2 = new Map();
    m2[_0x337539(220)](1 * -8893 + -1676 * -5 + -515 * -1, m2), utilIsDeepStrict(m1, m2);
    const m3 = new Map();
    m3[_0x337539(220)](m3, 1356 + -167 * -46 + -9036);
    const m4 = new Map();
    m4[_0x337539(220)](m4, -742 * -1 + 1 * 5961 + -6701), utilIsDeepStrict(m3, m4);
}
utilIsDeepStrict([
    9 * 579 + 233 * 1 + -1 * 5443,
    ,
    ,
    -6269 + -395 + 6667
], [
    -298 * 11 + 6034 + 29 * -95,
    ,
    ,
    -9227 * 1 + 6606 + 164 * 16
]), notUtilIsDeepStrict([
    2055 * -3 + -8293 + 14459,
    ,
    ,
    76 * 109 + -18 * -90 + 9901 * -1
], [
    -846 * 2 + -2449 + 19 * 218,
    ,
    ,
    -8429 + -3 * 3205 + -1 * -18047,
    ,
    ,
]);
{
    const err1 = new Error(_0x337539(221)), err2 = new Error(_0x337539(222)), err3 = new TypeError(_0x337539(221));
    notUtilIsDeepStrict(err1, err2, assert[_0x337539(223)]), notUtilIsDeepStrict(err1, err3, assert[_0x337539(223)]), notUtilIsDeepStrict(err1, {}, assert[_0x337539(223)]);
}
assert[_0x337539(211)](util[_0x337539(212)](NaN, NaN), !![]), assert['strictEqual'](util[_0x337539(212)]({ 'a': NaN }, { 'a': NaN }), !![]), assert[_0x337539(211)](util[_0x337539(212)]([
    1 * 9883 + 1 * -9978 + 96,
    -2 * -3017 + 5 * -351 + -47 * 91,
    NaN,
    6772 * -1 + -7902 + 14678
], [
    2163 + 3029 * -1 + 867,
    96 * 72 + -443 * 4 + -5138,
    NaN,
    1117 + 9599 + -5356 * 2
]), !![]);
{
    const boxedString = new String(_0x337539(215)), boxedSymbol = Object(Symbol());
    notUtilIsDeepStrict(new Boolean(!![]), Object(![])), notUtilIsDeepStrict(Object(!![]), new Number(-7334 + -166 * -10 + -1135 * -5)), notUtilIsDeepStrict(new Number(-5704 + -1 * -8764 + -3058), new Number(-8931 + 7027 * -1 + -15959 * -1)), notUtilIsDeepStrict(boxedSymbol, Object(Symbol())), notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(boxedSymbol, boxedSymbol), utilIsDeepStrict(Object(!![]), Object(!![])), utilIsDeepStrict(Object(-2169 + -2315 + 4486), Object(2 * 761 + -1542 + 22)), utilIsDeepStrict(boxedString, Object('test')), boxedString[_0x337539(224)] = !![], notUtilIsDeepStrict(boxedString, Object(_0x337539(215))), boxedSymbol[_0x337539(224)] = !![], notUtilIsDeepStrict(boxedSymbol, {}), utilIsDeepStrict(Object(BigInt(-3511 * 2 + -5851 * -1 + 1172)), Object(BigInt(8923 * -1 + 1 * -8761 + 17685))), notUtilIsDeepStrict(Object(BigInt(-33 * 22 + 2 * -1655 + 4037)), Object(BigInt(7731 + -48 * -90 + -12049 * 1)));
    const booleanish = new Boolean(!![]);
    Object[_0x337539(225)](booleanish, Symbol[_0x337539(226)], { 'value': _0x337539(227) }), Object[_0x337539(228)](booleanish, String[_0x337539(229)]), notUtilIsDeepStrict(booleanish, new String(_0x337539(230)));
    const numberish = new Number(-3 * 1137 + 51 * -40 + 5493);
    Object[_0x337539(225)](numberish, Symbol[_0x337539(226)], { 'value': _0x337539(227) }), Object['setPrototypeOf'](numberish, String[_0x337539(229)]), notUtilIsDeepStrict(numberish, new String('42'));
    const stringish = new String('0');
    Object['defineProperty'](stringish, Symbol[_0x337539(226)], { 'value': _0x337539(231) }), Object[_0x337539(228)](stringish, Number[_0x337539(229)]), notUtilIsDeepStrict(stringish, new Number(-9422 + 3823 + 11 * 509));
    const bigintish = new Object(BigInt(-2340 + -175 * 19 + 1 * 5707));
    Object[_0x337539(225)](bigintish, Symbol[_0x337539(226)], { 'value': 'String' }), Object[_0x337539(228)](bigintish, String[_0x337539(229)]), notUtilIsDeepStrict(bigintish, new String('42'));
    const symbolish = new Object(Symbol('fhqwhgads'));
    Object['defineProperty'](symbolish, Symbol[_0x337539(226)], { 'value': _0x337539(227) }), Object[_0x337539(228)](symbolish, String['prototype']), notUtilIsDeepStrict(symbolish, new String(_0x337539(232)));
}
notUtilIsDeepStrict(-101 * 1 + 6023 + -5922, -(1293 * -3 + 6513 + -2634)), utilIsDeepStrict(-(-1 * -1596 + 2036 + -3632), -(8029 + -628 * -13 + 16193 * -1));
{
    const symbol1 = Symbol(), obj1 = { [symbol1]: -4348 + 4794 + -445 }, obj2 = { [symbol1]: 31 * -299 + 376 * 19 + 2126 }, obj3 = { [Symbol()]: 3079 + 5790 + -739 * 12 }, obj4 = {};
    Object[_0x337539(225)](obj2, Symbol(), { 'value': 1 }), Object['defineProperty'](obj4, symbol1, { 'value': 1 }), notUtilIsDeepStrict(obj1, obj3), utilIsDeepStrict(obj1, obj2), notUtilIsDeepStrict(obj1, obj4);
    const a = new Uint8Array(2666 + 1 * -297 + -2365), b = new Uint8Array(3761 + 25 * -393 + 6068);
    a[symbol1] = !![], b[symbol1] = ![], notUtilIsDeepStrict(a, b), b[symbol1] = !![], utilIsDeepStrict(a, b);
    const boxedStringA = new String(_0x337539(215)), boxedStringB = new String(_0x337539(215));
    boxedStringA[symbol1] = !![], notUtilIsDeepStrict(boxedStringA, boxedStringB), boxedStringA[symbol1] = !![], utilIsDeepStrict(a, b);
}