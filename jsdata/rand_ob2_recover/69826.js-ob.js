module['exports'] = {
    'entry'() {
        const _0x4cb611 = _0x2d7e;
        return Promise[_0x4cb611(399)]({
            'app': {
                'import': _0x4cb611(400),
                'dependOn': ['other-vendors']
            },
            'page1': {
                'import': _0x4cb611(401),
                'dependOn': [
                    _0x4cb611(402),
                    _0x4cb611(403)
                ]
            },
            'page2': {
                'import': _0x4cb611(404),
                'dependOn': [
                    _0x4cb611(402),
                    _0x4cb611(403)
                ]
            },
            'page3': {
                'import': _0x4cb611(405),
                'dependOn': [_0x4cb611(402)]
            },
            'react-vendors': [
                'react',
                'react-dom',
                _0x4cb611(406)
            ],
            'other-vendors': _0x4cb611(407)
        });
    },
    'target': 'web',
    'optimization': { 'runtimeChunk': _0x1b25dc(408) },
    'output': { 'filename': _0x1b25dc(409) },
    'plugins': [function () {
            const _0x2d5b6e = _0x1b25dc, _0x24599e = _0x4188e4 => {
                    const _0x555b74 = _0x2d7e;
                    _0x4188e4[_0x555b74(410)][_0x555b74(411)]['tap'](_0x555b74(412), () => {
                        const _0x463331 = _0x555b74, {chunkGraph: _0x170ef9} = _0x4188e4, _0x30aea8 = {};
                        for (const _0x3c36e7 of _0x4188e4['chunks']) {
                            _0x30aea8[_0x3c36e7['name']] = new Set();
                            for (const _0x45118b of _0x170ef9[_0x463331(413)](_0x3c36e7)) {
                                _0x30aea8[_0x3c36e7['name']][_0x463331(414)](_0x45118b[_0x463331(415)]());
                            }
                        }
                        for (const _0x317f61 of _0x30aea8[_0x463331(416)]) {
                            expect([..._0x30aea8[_0x463331(402)]])[_0x463331(417)][_0x463331(418)](_0x317f61);
                        }
                        for (const _0x5a5b04 of [
                                ..._0x30aea8[_0x463331(416)],
                                ..._0x30aea8[_0x463331(403)],
                                ..._0x30aea8[_0x463331(402)]
                            ]) {
                            expect(_0x30aea8[_0x463331(419)])[_0x463331(417)][_0x463331(418)](_0x5a5b04), expect(_0x30aea8[_0x463331(420)])[_0x463331(417)][_0x463331(418)](_0x5a5b04);
                        }
                        for (const _0x2c1507 of [
                                ..._0x30aea8[_0x463331(416)],
                                ..._0x30aea8[_0x463331(402)]
                            ]) {
                            expect([..._0x30aea8[_0x463331(421)]])[_0x463331(417)][_0x463331(418)](_0x2c1507);
                        }
                    });
                };
            this[_0x2d5b6e(410)][_0x2d5b6e(422)][_0x2d5b6e(423)](_0x2d5b6e(412), _0x24599e);
        }]
};