const _0x4d48 = [
    '784306xQSkeh',
    '386rVadnA',
    '580QRWsZU',
    '908sdPRcp',
    '1515RYpfsO',
    '95788uvyHGv',
    '4nZHVvV',
    '1762082LomETG',
    '182407TDGEOq',
    '5xEXGnB',
    '3158699vEFLHo',
    'resolve',
    './app.js',
    './page1.js',
    'app',
    'react-vendors',
    './page2.js',
    './page3.js',
    'prop-types',
    './other-vendors',
    'single',
    '[name].js',
    'hooks',
    'afterSeal',
    'testcase',
    'getChunkModulesIterable',
    'add',
    'identifier',
    'other-vendors',
    'not',
    'toContain',
    'page1',
    'page2',
    'page3',
    'compilation',
    'tap',
    '1hyoHtt'
];
function _0x2d7e(_0x559e1c, _0x45c7c2) {
    return _0x2d7e = function (_0x4d48d1, _0x2d7e9e) {
        _0x4d48d1 = _0x4d48d1 - 0x183;
        let _0x582412 = _0x4d48[_0x4d48d1];
        return _0x582412;
    }, _0x2d7e(_0x559e1c, _0x45c7c2);
}
const _0x1b25dc = _0x2d7e;
(function (_0x478e8c, _0x36758a) {
    const _0x4e2d2e = _0x2d7e;
    while (!![]) {
        try {
            const _0x3f7c4e = -parseInt(_0x4e2d2e(0x183)) * parseInt(_0x4e2d2e(0x184)) + parseInt(_0x4e2d2e(0x185)) * parseInt(_0x4e2d2e(0x186)) + -parseInt(_0x4e2d2e(0x187)) * -parseInt(_0x4e2d2e(0x188)) + parseInt(_0x4e2d2e(0x189)) * -parseInt(_0x4e2d2e(0x18a)) + -parseInt(_0x4e2d2e(0x18b)) + parseInt(_0x4e2d2e(0x18c)) * -parseInt(_0x4e2d2e(0x18d)) + parseInt(_0x4e2d2e(0x18e));
            if (_0x3f7c4e === _0x36758a)
                break;
            else
                _0x478e8c['push'](_0x478e8c['shift']());
        } catch (_0x2fc75e) {
            _0x478e8c['push'](_0x478e8c['shift']());
        }
    }
}(_0x4d48, 0xdfc90), module['exports'] = {
    'entry'() {
        const _0x4cb611 = _0x2d7e;
        return Promise[_0x4cb611(0x18f)]({
            'app': {
                'import': _0x4cb611(0x190),
                'dependOn': ['other-vendors']
            },
            'page1': {
                'import': _0x4cb611(0x191),
                'dependOn': [
                    _0x4cb611(0x192),
                    _0x4cb611(0x193)
                ]
            },
            'page2': {
                'import': _0x4cb611(0x194),
                'dependOn': [
                    _0x4cb611(0x192),
                    _0x4cb611(0x193)
                ]
            },
            'page3': {
                'import': _0x4cb611(0x195),
                'dependOn': [_0x4cb611(0x192)]
            },
            'react-vendors': [
                'react',
                'react-dom',
                _0x4cb611(0x196)
            ],
            'other-vendors': _0x4cb611(0x197)
        });
    },
    'target': 'web',
    'optimization': { 'runtimeChunk': _0x1b25dc(0x198) },
    'output': { 'filename': _0x1b25dc(0x199) },
    'plugins': [function () {
            const _0x2d5b6e = _0x1b25dc, _0x24599e = _0x4188e4 => {
                    const _0x555b74 = _0x2d7e;
                    _0x4188e4[_0x555b74(0x19a)][_0x555b74(0x19b)]['tap'](_0x555b74(0x19c), () => {
                        const _0x463331 = _0x555b74, {chunkGraph: _0x170ef9} = _0x4188e4, _0x30aea8 = {};
                        for (const _0x3c36e7 of _0x4188e4['chunks']) {
                            _0x30aea8[_0x3c36e7['name']] = new Set();
                            for (const _0x45118b of _0x170ef9[_0x463331(0x19d)](_0x3c36e7)) {
                                _0x30aea8[_0x3c36e7['name']][_0x463331(0x19e)](_0x45118b[_0x463331(0x19f)]());
                            }
                        }
                        for (const _0x317f61 of _0x30aea8[_0x463331(0x1a0)]) {
                            expect([..._0x30aea8[_0x463331(0x192)]])[_0x463331(0x1a1)][_0x463331(0x1a2)](_0x317f61);
                        }
                        for (const _0x5a5b04 of [
                                ..._0x30aea8[_0x463331(0x1a0)],
                                ..._0x30aea8[_0x463331(0x193)],
                                ..._0x30aea8[_0x463331(0x192)]
                            ]) {
                            expect(_0x30aea8[_0x463331(0x1a3)])[_0x463331(0x1a1)][_0x463331(0x1a2)](_0x5a5b04), expect(_0x30aea8[_0x463331(0x1a4)])[_0x463331(0x1a1)][_0x463331(0x1a2)](_0x5a5b04);
                        }
                        for (const _0x2c1507 of [
                                ..._0x30aea8[_0x463331(0x1a0)],
                                ..._0x30aea8[_0x463331(0x192)]
                            ]) {
                            expect([..._0x30aea8[_0x463331(0x1a5)]])[_0x463331(0x1a1)][_0x463331(0x1a2)](_0x2c1507);
                        }
                    });
                };
            this[_0x2d5b6e(0x19a)][_0x2d5b6e(0x1a6)][_0x2d5b6e(0x1a7)](_0x2d5b6e(0x19c), _0x24599e);
        }]
});
