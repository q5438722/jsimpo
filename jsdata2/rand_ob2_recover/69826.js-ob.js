module[_0x58f92a(482)] = {
    'entry'() {
        const _0x59088b = _0x58f92a;
        return Promise[_0x59088b(483)]({
            'app': {
                'import': _0x59088b(484),
                'dependOn': ['other-vendors']
            },
            'page1': {
                'import': './page1.js',
                'dependOn': [
                    _0x59088b(485),
                    _0x59088b(486)
                ]
            },
            'page2': {
                'import': _0x59088b(487),
                'dependOn': [
                    _0x59088b(485),
                    'react-vendors'
                ]
            },
            'page3': {
                'import': _0x59088b(488),
                'dependOn': ['app']
            },
            'react-vendors': [
                _0x59088b(489),
                'react-dom',
                'prop-types'
            ],
            'other-vendors': _0x59088b(490)
        });
    },
    'target': _0x58f92a(491),
    'optimization': { 'runtimeChunk': 'single' },
    'output': { 'filename': _0x58f92a(492) },
    'plugins': [function () {
            const _0x49c6aa = _0x58f92a, _0x3c422c = _0x33022c => {
                    const _0x469576 = _0x20cb;
                    _0x33022c['hooks'][_0x469576(493)][_0x469576(494)](_0x469576(495), () => {
                        const _0x365326 = _0x469576, {chunkGraph: _0x17655c} = _0x33022c, _0x17e881 = {};
                        for (const _0x4634dd of _0x33022c['chunks']) {
                            _0x17e881[_0x4634dd[_0x365326(496)]] = new Set();
                            for (const _0x4d91a8 of _0x17655c[_0x365326(497)](_0x4634dd)) {
                                _0x17e881[_0x4634dd[_0x365326(496)]]['add'](_0x4d91a8[_0x365326(498)]());
                            }
                        }
                        for (const _0x941859 of _0x17e881[_0x365326(499)]) {
                            expect([..._0x17e881[_0x365326(485)]])[_0x365326(500)][_0x365326(501)](_0x941859);
                        }
                        for (const _0x35b2be of [
                                ..._0x17e881[_0x365326(499)],
                                ..._0x17e881[_0x365326(486)],
                                ..._0x17e881[_0x365326(485)]
                            ]) {
                            expect(_0x17e881[_0x365326(502)])[_0x365326(500)][_0x365326(501)](_0x35b2be), expect(_0x17e881['page2'])[_0x365326(500)][_0x365326(501)](_0x35b2be);
                        }
                        for (const _0x3685c4 of [
                                ..._0x17e881[_0x365326(499)],
                                ..._0x17e881[_0x365326(485)]
                            ]) {
                            expect([..._0x17e881[_0x365326(503)]])[_0x365326(500)][_0x365326(501)](_0x3685c4);
                        }
                    });
                };
            this['hooks']['compilation'][_0x49c6aa(494)](_0x49c6aa(495), _0x3c422c);
        }]
};