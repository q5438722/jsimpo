const _0xfc6d = ['oLZMj', 'sets the correct webpack config in development', 'develop', 'vtGnE', 'develop-html', 'toHaveBeenCalledTimes', 'Bovck', 'toHaveBeenCalledWith', 'any', 'preact/compat', 'setBabelPlugin', 'rsBoX', '@prefresh/babel-plugin', 'replaceWebpackConfig', '@gatsbyjs/webpack-hot-middleware/client', 'fBwbm', 'sets the correct webpack config in production', 'react', 'react-dom', 'scheduler', 'prop-types', 'all', 'framework', '(?<!node_modules.*)[\\\\/]node_modules[\\\\/](', ')[\\\\/]', 'JTgKS', 'build-html', 'build-javascript', 'xvUJO', 'toMatchInlineSnapshot', '\n      [MockFunction] {\n        "calls": Array [\n          Array [\n            Object {\n              "optimization": Object {\n                "splitChunks": Object {\n                  "cacheGroups": Object {\n                    "default": false,\n                    "framework": Object {\n                      "chunks": "all",\n                      "enforce": true,\n                      "name": "framework",\n                      "priority": 40,\n                      "test": [Function],\n                    },\n                    "vendors": false,\n                  },\n                  "chunks": "all",\n                },\n              },\n            },\n          ],\n        ],\n        "results": Array [\n          Object {\n            "type": "return",\n            "value": undefined,\n          },\n        ],\n      }\n    ', '1151810bkLruC', '1LLkYcf', '738889ZvHboz', '334434odkQig', '16MLtwCI', '29604DXkgOw', '530851bIONze', '1xIoSNb', '2053GKSFEX', '73gVqxrh', '1ujhfeX', '643673DGSPKx', '@prefresh/webpack', '@pmmmwh/react-refresh-webpack-plugin', 'gatsby-plugin-preact'];
const _0x56af4a = _0x3076;

(function (_0x28b914, _0x2be788) {
    const _0x28ed8c = _0x3076;

    while (true) {
        try {
            const _0x54a473 = parseInt(_0x28ed8c(0x145)) + -parseInt(_0x28ed8c(0x146)) * parseInt(_0x28ed8c(0x147)) + -parseInt(_0x28ed8c(0x148)) + parseInt(_0x28ed8c(0x149)) * -parseInt(_0x28ed8c(0x14a)) + parseInt(_0x28ed8c(0x14b)) * parseInt(_0x28ed8c(0x14c)) + parseInt(_0x28ed8c(0x14d)) * -parseInt(_0x28ed8c(0x14e)) + -parseInt(_0x28ed8c(0x14f)) * -parseInt(_0x28ed8c(0x150));

            if (_0x54a473 === _0x2be788) break;else _0x28b914.push(_0x28b914.shift());
        } catch (_0x378b7d) {
            _0x28b914.push(_0x28b914.shift());
        }
    }
})(_0xfc6d, 629478);
function _0x3076(_0x401f19, _0x141787) {
    return _0x3076 = function (_0x11a91c, _0x521974) {
        _0x11a91c = _0x11a91c - 325;
        const _0x146275 = _0xfc6d[_0x11a91c];

        return _0x146275;
    }, _0x3076(_0x401f19, _0x141787);
}

var { onCreateWebpackConfig, onCreateBabelConfig } = require('../gatsby-node');

const PreactRefreshPlugin = require(_0x56af4a(0x151));

const ReactRefreshWebpackPlugin = require(_0x56af4a(0x152));

describe(_0x56af4a(0x153), () => {
    const _0x2a4733 = _0x56af4a;
    const _0xb4e09f = {
        'vtGnE': function (_0x153d99, _0x54c6c5) {
            return _0x153d99(_0x54c6c5);
        },
        'Bovck': function (_0x243321, _0x459d9d) {
            return _0x243321(_0x459d9d);
        },
        'dklRi': function (_0x5e1d80, _0x2fafb7) {
            return _0x5e1d80(_0x2fafb7);
        },
        'rsBoX': function (_0x33fe3a, _0x1e5556) {
            return _0x33fe3a(_0x1e5556);
        },
        'JTgKS': function (_0x27a29e, _0x190a0c) {
            return _0x27a29e(_0x190a0c);
        },
        'oWFvk': function (_0x2a7133, _0x6e6944) {
            return _0x2a7133(_0x6e6944);
        },
        'SBJyB': function (_0x424d11, _0x5572e6) {
            return _0x424d11(_0x5572e6);
        },
        'xvUJO': function (_0x46f51f, _0x14019f) {
            return _0x46f51f(_0x14019f);
        },
        'oLZMj': function (_0x254b44, _0x219f24, _0x317698) {
            return _0x254b44(_0x219f24, _0x317698);
        },
        'fBwbm': function (_0x408339, _0x31028d, _0x14f1f7) {
            return _0x408339(_0x31028d, _0x14f1f7);
        }
    };

    _0xb4e09f[_0x2a4733(0x154)](it, _0x2a4733(0x155), () => {
        const _0x437c4e = _0x2a4733;

        const _0x599014 = jest.fn(() => {
            return {
                'entry': { 'commons': [] },
                'plugins': [new ReactRefreshWebpackPlugin()]
            };
        });

        const _0x41c661 = {
            'setWebpackConfig': jest.fn(),
            'setBabelPlugin': jest.fn(),
            'replaceWebpackConfig': jest.fn()
        };

        onCreateBabelConfig({
            'stage': _0x437c4e(0x156),
            'actions': _0x41c661
        }), _0xb4e09f[_0x437c4e(0x157)](onCreateBabelConfig, {
            'stage': _0x437c4e(0x158),
            'actions': _0x41c661
        }), onCreateWebpackConfig({
            'stage': _0x437c4e(0x156),
            'actions': _0x41c661,
            'getConfig': _0x599014
        }), onCreateWebpackConfig({
            'stage': _0x437c4e(0x158),
            'actions': _0x41c661,
            'getConfig': _0x599014
        }), _0xb4e09f.Bovck(expect, _0x41c661.setWebpackConfig)[_0x437c4e(0x159)](2), _0xb4e09f[_0x437c4e(0x15a)](expect, _0x41c661.setWebpackConfig)[_0x437c4e(0x15b)]({
            'plugins': expect.arrayContaining([expect[_0x437c4e(0x15c)](PreactRefreshPlugin)]),
            'resolve': {
                'alias': {
                    'react': _0x437c4e(0x15d),
                    'react-dom': _0x437c4e(0x15d)
                }
            }
        }), _0xb4e09f[_0x437c4e(0x15a)](expect, _0x599014)[_0x437c4e(0x159)](2), _0xb4e09f.dklRi(expect, _0x41c661[_0x437c4e(0x15e)])[_0x437c4e(0x159)](1), _0xb4e09f[_0x437c4e(0x15f)](expect, _0x41c661[_0x437c4e(0x15e)])[_0x437c4e(0x15b)]({
            'name': _0x437c4e(0x160),
            'stage': _0x437c4e(0x156)
        }), _0xb4e09f.JTgKS(expect, _0x41c661.replaceWebpackConfig)[_0x437c4e(0x159)](1), expect(_0x41c661[_0x437c4e(0x161)])[_0x437c4e(0x15b)]({
            'plugins': [],
            'entry': { 'commons': [_0x437c4e(0x162)] }
        });
    }), _0xb4e09f[_0x2a4733(0x163)](it, _0x2a4733(0x164), () => {
        const _0x106e9b = _0x2a4733;
        const _0x11568a = [_0x106e9b(0x165), _0x106e9b(0x166), _0x106e9b(0x167), _0x106e9b(0x168)];

        const _0x5380cb = jest.fn(() => {
            const _0x372538 = _0x106e9b;

            return {
                'optimization': {
                    'splitChunks': {
                        'chunks': _0x372538(0x169),
                        'cacheGroups': {
                            'default': false,
                            'vendors': false,
                            'framework': {
                                'chunks': _0x372538(0x169),
                                'name': _0x372538(0x16a),
                                'test': new RegExp(_0x372538(0x16b) + _0x11568a.join('|') + _0x372538(0x16c)),
                                'priority': 0x28,
                                'enforce': true
                            }
                        }
                    }
                }
            };
        });

        const _0x5bfec5 = {
            'setWebpackConfig': jest.fn(),
            'setBabelPlugin': jest.fn(),
            'replaceWebpackConfig': jest.fn()
        };

        _0xb4e09f[_0x106e9b(0x16d)](onCreateBabelConfig, {
            'stage': 'build-javascript',
            'actions': _0x5bfec5
        }), _0xb4e09f[_0x106e9b(0x16d)](onCreateBabelConfig, {
            'stage': _0x106e9b(0x16e),
            'actions': _0x5bfec5
        }), _0xb4e09f[_0x106e9b(0x16d)](onCreateWebpackConfig, {
            'stage': _0x106e9b(0x16f),
            'actions': _0x5bfec5,
            'getConfig': _0x5380cb
        }), onCreateWebpackConfig({
            'stage': _0x106e9b(0x16e),
            'actions': _0x5bfec5,
            'getConfig': _0x5380cb
        }), _0xb4e09f.oWFvk(expect, _0x5bfec5.setWebpackConfig)[_0x106e9b(0x159)](2), expect(_0x5bfec5.setWebpackConfig)[_0x106e9b(0x15b)]({
            'plugins': [],
            'resolve': {
                'alias': {
                    'react': 'preact/compat',
                    'react-dom': _0x106e9b(0x15d)
                }
            }
        }), expect(_0x5380cb).toHaveBeenCalledTimes(1), _0xb4e09f.SBJyB(expect, _0x5bfec5.setBabelPlugin)[_0x106e9b(0x159)](0), _0xb4e09f.SBJyB(expect, _0x5bfec5.replaceWebpackConfig)[_0x106e9b(0x159)](1), _0xb4e09f[_0x106e9b(0x170)](expect, _0x5bfec5[_0x106e9b(0x161)])[_0x106e9b(0x171)](_0x106e9b(0x172));
    });
});
