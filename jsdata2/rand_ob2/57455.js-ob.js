const _0x1da3 = [
    'href',
    'Sorting\x20non-existent\x20params\x20removes\x20?\x20from\x20URL',
    '435458rzBkkh',
    '914ztGXCW',
    '563vAdAaE',
    '11UqSnTt',
    '81578AjlaWi',
    '652833pdMTse',
    '569702bVJPda',
    '838717uMWlVW',
    '1778203OKWJLn',
    '1JQJSjT',
    'z=b&a=b&z=a&a=a',
    '�=x&￼&�=a',
    'ﬃ&🌈',
    'é&e�&é',
    'z=z&a=a&z=y&a=b&z=x&a=c&z=w&a=d&z=v&a=e&z=u&a=f&z=t&a=g',
    'bbb&bb&aaa&aa=x&aa=y',
    'bbb',
    'a🌈&a💩',
    'a🌈',
    'a💩',
    'forEach',
    'output',
    'input',
    'https://example/',
    'searchParams',
    'sort',
    'search',
    'URL\x20parse\x20and\x20sort:\x20'
];
const _0x3c090e = _0x588b;
function _0x588b(_0x3dd73e, _0x4c783c) {
    return _0x588b = function (_0x1da36a, _0x588bea) {
        _0x1da36a = _0x1da36a - 0x16e;
        let _0x5b1b8e = _0x1da3[_0x1da36a];
        return _0x5b1b8e;
    }, _0x588b(_0x3dd73e, _0x4c783c);
}
(function (_0x42dc46, _0x378973) {
    const _0x40de1b = _0x588b;
    while (!![]) {
        try {
            const _0x20bf3a = parseInt(_0x40de1b(0x16e)) + parseInt(_0x40de1b(0x16f)) * parseInt(_0x40de1b(0x170)) + parseInt(_0x40de1b(0x171)) * parseInt(_0x40de1b(0x172)) + parseInt(_0x40de1b(0x173)) + parseInt(_0x40de1b(0x174)) + -parseInt(_0x40de1b(0x175)) + parseInt(_0x40de1b(0x176)) * -parseInt(_0x40de1b(0x177));
            if (_0x20bf3a === _0x378973)
                break;
            else
                _0x42dc46['push'](_0x42dc46['shift']());
        } catch (_0x1ad709) {
            _0x42dc46['push'](_0x42dc46['shift']());
        }
    }
}(_0x1da3, 0x6e995), [
    {
        'input': _0x3c090e(0x178),
        'output': [
            [
                'a',
                'b'
            ],
            [
                'a',
                'a'
            ],
            [
                'z',
                'b'
            ],
            [
                'z',
                'a'
            ]
        ]
    },
    {
        'input': _0x3c090e(0x179),
        'output': [
            [
                '￼',
                ''
            ],
            [
                '�',
                'x'
            ],
            [
                '�',
                'a'
            ]
        ]
    },
    {
        'input': _0x3c090e(0x17a),
        'output': [
            [
                '🌈',
                ''
            ],
            [
                'ﬃ',
                ''
            ]
        ]
    },
    {
        'input': _0x3c090e(0x17b),
        'output': [
            [
                'é',
                ''
            ],
            [
                'e�',
                ''
            ],
            [
                'é',
                ''
            ]
        ]
    },
    {
        'input': _0x3c090e(0x17c),
        'output': [
            [
                'a',
                'a'
            ],
            [
                'a',
                'b'
            ],
            [
                'a',
                'c'
            ],
            [
                'a',
                'd'
            ],
            [
                'a',
                'e'
            ],
            [
                'a',
                'f'
            ],
            [
                'a',
                'g'
            ],
            [
                'z',
                'z'
            ],
            [
                'z',
                'y'
            ],
            [
                'z',
                'x'
            ],
            [
                'z',
                'w'
            ],
            [
                'z',
                'v'
            ],
            [
                'z',
                'u'
            ],
            [
                'z',
                't'
            ]
        ]
    },
    {
        'input': _0x3c090e(0x17d),
        'output': [
            [
                'aa',
                'x'
            ],
            [
                'aa',
                'y'
            ],
            [
                'aaa',
                ''
            ],
            [
                'bb',
                ''
            ],
            [
                _0x3c090e(0x17e),
                ''
            ]
        ]
    },
    {
        'input': 'z=z&=f&=t&=x',
        'output': [
            [
                '',
                'f'
            ],
            [
                '',
                't'
            ],
            [
                '',
                'x'
            ],
            [
                'z',
                'z'
            ]
        ]
    },
    {
        'input': _0x3c090e(0x17f),
        'output': [
            [
                _0x3c090e(0x180),
                ''
            ],
            [
                _0x3c090e(0x181),
                ''
            ]
        ]
    }
][_0x3c090e(0x182)](_0xac5d5c => {
    const _0x1a2b97 = _0x3c090e;
    test(() => {
        const _0x339080 = _0x588b;
        let _0x45f194 = new URLSearchParams(_0xac5d5c['input']), _0x385e83 = 0x0;
        _0x45f194['sort']();
        for (let _0x29ed45 of _0x45f194) {
            assert_array_equals(_0x29ed45, _0xac5d5c[_0x339080(0x183)][_0x385e83]), _0x385e83++;
        }
    }, 'Parse\x20and\x20sort:\x20' + _0xac5d5c[_0x1a2b97(0x184)]), test(() => {
        const _0x16e9d0 = _0x1a2b97;
        let _0x2e5605 = new URL('?' + _0xac5d5c[_0x16e9d0(0x184)], _0x16e9d0(0x185));
        _0x2e5605[_0x16e9d0(0x186)][_0x16e9d0(0x187)]();
        let _0x4c5356 = new URLSearchParams(_0x2e5605[_0x16e9d0(0x188)]), _0x3cc0aa = 0x0;
        for (let _0x33d3a6 of _0x4c5356) {
            assert_array_equals(_0x33d3a6, _0xac5d5c[_0x16e9d0(0x183)][_0x3cc0aa]), _0x3cc0aa++;
        }
    }, _0x1a2b97(0x189) + _0xac5d5c[_0x1a2b97(0x184)]);
}), test(function () {
    const _0x3e730a = _0x3c090e, _0x105a54 = new URL('http://example.com/?');
    _0x105a54[_0x3e730a(0x186)][_0x3e730a(0x187)](), assert_equals(_0x105a54[_0x3e730a(0x18a)], 'http://example.com/'), assert_equals(_0x105a54[_0x3e730a(0x188)], '');
}, _0x3c090e(0x18b)));
