const _0xca67 = [
    '906627WtGiRa',
    'exports',
    'resolve',
    './app.js',
    'app',
    'react-vendors',
    './page2.js',
    './page3.js',
    'react',
    './other-vendors',
    'web',
    '[name].js',
    'afterSeal',
    'tap',
    'testcase',
    'name',
    'getChunkModulesIterable',
    'identifier',
    'other-vendors',
    'not',
    'toContain',
    'page1',
    'page3',
    '1447ZpBXQu',
    '303bQlWwc',
    '211513LLXXur',
    '3ryHkHb',
    '375300EfDZZz',
    '403407YYlkvg',
    '201269zNfcaA',
    '98950teJurP'
];
function _0x20cb(_0x55dbff, _0x9adffa) {
    return _0x20cb = function (_0xca67dc, _0x20cbd1) {
        _0xca67dc = _0xca67dc - 0x1d9;
        let _0x807095 = _0xca67[_0xca67dc];
        return _0x807095;
    }, _0x20cb(_0x55dbff, _0x9adffa);
}
const _0x58f92a = _0x20cb;
(function (_0x21e840, _0xa7169d) {
    const _0x48bf6f = _0x20cb;
    while (!![]) {
        try {
            const _0x3075ef = -parseInt(_0x48bf6f(0x1d9)) * parseInt(_0x48bf6f(0x1da)) + -parseInt(_0x48bf6f(0x1db)) * -parseInt(_0x48bf6f(0x1dc)) + -parseInt(_0x48bf6f(0x1dd)) + -parseInt(_0x48bf6f(0x1de)) + parseInt(_0x48bf6f(0x1df)) + -parseInt(_0x48bf6f(0x1e0)) + parseInt(_0x48bf6f(0x1e1));
            if (_0x3075ef === _0xa7169d)
                break;
            else
                _0x21e840['push'](_0x21e840['shift']());
        } catch (_0x53bc57) {
            _0x21e840['push'](_0x21e840['shift']());
        }
    }
}(_0xca67, 0x68161), module[_0x58f92a(0x1e2)] = {
    'entry'() {
        const _0x59088b = _0x58f92a;
        return Promise[_0x59088b(0x1e3)]({
            'app': {
                'import': _0x59088b(0x1e4),
                'dependOn': ['other-vendors']
            },
            'page1': {
                'import': './page1.js',
                'dependOn': [
                    _0x59088b(0x1e5),
                    _0x59088b(0x1e6)
                ]
            },
            'page2': {
                'import': _0x59088b(0x1e7),
                'dependOn': [
                    _0x59088b(0x1e5),
                    'react-vendors'
                ]
            },
            'page3': {
                'import': _0x59088b(0x1e8),
                'dependOn': ['app']
            },
            'react-vendors': [
                _0x59088b(0x1e9),
                'react-dom',
                'prop-types'
            ],
            'other-vendors': _0x59088b(0x1ea)
        });
    },
    'target': _0x58f92a(0x1eb),
    'optimization': { 'runtimeChunk': 'single' },
    'output': { 'filename': _0x58f92a(0x1ec) },
    'plugins': [function () {
            const _0x49c6aa = _0x58f92a, _0x3c422c = _0x33022c => {
                    const _0x469576 = _0x20cb;
                    _0x33022c['hooks'][_0x469576(0x1ed)][_0x469576(0x1ee)](_0x469576(0x1ef), () => {
                        const _0x365326 = _0x469576, {chunkGraph: _0x17655c} = _0x33022c, _0x17e881 = {};
                        for (const _0x4634dd of _0x33022c['chunks']) {
                            _0x17e881[_0x4634dd[_0x365326(0x1f0)]] = new Set();
                            for (const _0x4d91a8 of _0x17655c[_0x365326(0x1f1)](_0x4634dd)) {
                                _0x17e881[_0x4634dd[_0x365326(0x1f0)]]['add'](_0x4d91a8[_0x365326(0x1f2)]());
                            }
                        }
                        for (const _0x941859 of _0x17e881[_0x365326(0x1f3)]) {
                            expect([..._0x17e881[_0x365326(0x1e5)]])[_0x365326(0x1f4)][_0x365326(0x1f5)](_0x941859);
                        }
                        for (const _0x35b2be of [
                                ..._0x17e881[_0x365326(0x1f3)],
                                ..._0x17e881[_0x365326(0x1e6)],
                                ..._0x17e881[_0x365326(0x1e5)]
                            ]) {
                            expect(_0x17e881[_0x365326(0x1f6)])[_0x365326(0x1f4)][_0x365326(0x1f5)](_0x35b2be), expect(_0x17e881['page2'])[_0x365326(0x1f4)][_0x365326(0x1f5)](_0x35b2be);
                        }
                        for (const _0x3685c4 of [
                                ..._0x17e881[_0x365326(0x1f3)],
                                ..._0x17e881[_0x365326(0x1e5)]
                            ]) {
                            expect([..._0x17e881[_0x365326(0x1f7)]])[_0x365326(0x1f4)][_0x365326(0x1f5)](_0x3685c4);
                        }
                    });
                };
            this['hooks']['compilation'][_0x49c6aa(0x1ee)](_0x49c6aa(0x1ef), _0x3c422c);
        }]
});
