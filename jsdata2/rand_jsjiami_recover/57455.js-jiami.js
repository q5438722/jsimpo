[
    {
        'input': 'z=b&a=b&z=a&a=a',
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
        'input': '\uFFFD=x&\uFFFC&\uFFFD=a',
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
        'input': 'ﬃ&Ꮮ',
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
        'input': 'é&e\uFFFD&é',
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
        'input': 'z=z&a=a&z=y&a=b&z=x&a=c&z=w&a=d&z=v&a=e&z=u&a=f&z=t&a=g',
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
        'input': 'bbb&bb&aaa&aa=x&aa=y',
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
                'bbb',
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
        'input': 'aྤ\x824Ӕ',
        'output': [
            [
                'a뼋',
                ''
            ],
            [
                'aᑶ',
                ''
            ]
        ]
    }
]['forEach'](_0x5af048 => {
    test(() => {
        let _0x789780 = new URLSearchParams(_0x5af048['input']), _0x44730d = 0;
        _0x789780['sort']();
        for (let _0x20d011 of _0x789780) {
            _0x25e2f0['gFTNh'](assert_array_equals, _0x20d011, _0x5af048['output'][_0x44730d]);
            _0x44730d++;
        }
    }, 'Parse and sort: ' + _0x5af048['input']);
    test(() => {
        let _0x253804 = new URL('?' + _0x5af048['input'], 'https://example/');
        _0x253804['searchParams']['sort']();
        let _0x55b494 = new URLSearchParams(_0x253804['search']), _0x5e9f98 = 0;
        for (let _0x294737 of _0x55b494) {
            assert_array_equals(_0x294737, _0x5af048['output'][_0x5e9f98]);
            _0x5e9f98++;
        }
    }, 'URL parse and sort: ' + _0x5af048['input']);
});
test(function () {
    const _0x19bef8 = new URL('http://example.com/?');
    _0x19bef8['searchParams']['sort']();
    assert_equals(_0x19bef8['href'], 'http://example.com/');
    assert_equals(_0x19bef8['search'], '');
}, 'Sorting non-existent params removes ? from URL');