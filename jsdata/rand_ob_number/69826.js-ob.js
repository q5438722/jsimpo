module['exports'] = {
    'entry'() {
        return Promise['resolve']({
            'app': {
                'import': './app.js',
                'dependOn': ['other-vendors']
            },
            'page1': {
                'import': './page1.js',
                'dependOn': [
                    'app',
                    'react-vendors'
                ]
            },
            'page2': {
                'import': './page2.js',
                'dependOn': [
                    'app',
                    'react-vendors'
                ]
            },
            'page3': {
                'import': './page3.js',
                'dependOn': ['app']
            },
            'react-vendors': [
                'react',
                'react-dom',
                'prop-types'
            ],
            'other-vendors': './other-vendors'
        });
    },
    'target': 'web',
    'optimization': { 'runtimeChunk': 'single' },
    'output': { 'filename': '[name].js' },
    'plugins': [function () {
            const _0x4b1e2a = _0x526cb3 => {
                _0x526cb3['hooks']['afterSeal']['tap']('testcase', () => {
                    const {chunkGraph: _0x1a71db} = _0x526cb3, _0x6e4327 = {};
                    for (const _0x3f1e94 of _0x526cb3['chunks']) {
                        _0x6e4327[_0x3f1e94['name']] = new Set();
                        for (const _0x51957f of _0x1a71db['getChunkModulesIterable'](_0x3f1e94)) {
                            _0x6e4327[_0x3f1e94['name']]['add'](_0x51957f['identifier']());
                        }
                    }
                    for (const _0x4e16ae of _0x6e4327['other-vendors']) {
                        expect([..._0x6e4327['app']])['not']['toContain'](_0x4e16ae);
                    }
                    for (const _0x5556ca of [
                            ..._0x6e4327['other-vendors'],
                            ..._0x6e4327['react-vendors'],
                            ..._0x6e4327['app']
                        ]) {
                        expect(_0x6e4327['page1'])['not']['toContain'](_0x5556ca), expect(_0x6e4327['page2'])['not']['toContain'](_0x5556ca);
                    }
                    for (const _0xe3b916 of [
                            ..._0x6e4327['other-vendors'],
                            ..._0x6e4327['app']
                        ]) {
                        expect([..._0x6e4327['page3']])['not']['toContain'](_0xe3b916);
                    }
                });
            };
            this['hooks']['compilation']['tap']('testcase', _0x4b1e2a);
        }]
};
