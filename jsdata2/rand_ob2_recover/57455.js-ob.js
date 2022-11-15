[
    {
        'input': _0x3c090e(376),
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
        'input': _0x3c090e(377),
        'output': [
            [
                '\uFFFC',
                ''
            ],
            [
                '\uFFFD',
                'x'
            ],
            [
                '\uFFFD',
                'a'
            ]
        ]
    },
    {
        'input': _0x3c090e(378),
        'output': [
            [
                '\uD83C\uDF08',
                ''
            ],
            [
                'ﬃ',
                ''
            ]
        ]
    },
    {
        'input': _0x3c090e(379),
        'output': [
            [
                'é',
                ''
            ],
            [
                'e\uFFFD',
                ''
            ],
            [
                'é',
                ''
            ]
        ]
    },
    {
        'input': _0x3c090e(380),
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
        'input': _0x3c090e(381),
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
                _0x3c090e(382),
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
        'input': _0x3c090e(383),
        'output': [
            [
                _0x3c090e(384),
                ''
            ],
            [
                _0x3c090e(385),
                ''
            ]
        ]
    }
][_0x3c090e(386)](_0xac5d5c => {
    const _0x1a2b97 = _0x3c090e;
    test(() => {
        const _0x339080 = _0x588b;
        let _0x45f194 = new URLSearchParams(_0xac5d5c['input']), _0x385e83 = 0;
        _0x45f194['sort']();
        for (let _0x29ed45 of _0x45f194) {
            assert_array_equals(_0x29ed45, _0xac5d5c[_0x339080(387)][_0x385e83]), _0x385e83++;
        }
    }, 'Parse and sort: ' + _0xac5d5c[_0x1a2b97(388)]), test(() => {
        const _0x16e9d0 = _0x1a2b97;
        let _0x2e5605 = new URL('?' + _0xac5d5c[_0x16e9d0(388)], _0x16e9d0(389));
        _0x2e5605[_0x16e9d0(390)][_0x16e9d0(391)]();
        let _0x4c5356 = new URLSearchParams(_0x2e5605[_0x16e9d0(392)]), _0x3cc0aa = 0;
        for (let _0x33d3a6 of _0x4c5356) {
            assert_array_equals(_0x33d3a6, _0xac5d5c[_0x16e9d0(387)][_0x3cc0aa]), _0x3cc0aa++;
        }
    }, _0x1a2b97(393) + _0xac5d5c[_0x1a2b97(388)]);
}), test(function () {
    const _0x3e730a = _0x3c090e, _0x105a54 = new URL('http://example.com/?');
    _0x105a54[_0x3e730a(390)][_0x3e730a(391)](), assert_equals(_0x105a54[_0x3e730a(394)], 'http://example.com/'), assert_equals(_0x105a54[_0x3e730a(392)], '');
}, _0x3c090e(395));