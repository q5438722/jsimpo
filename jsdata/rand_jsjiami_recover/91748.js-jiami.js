const {onCreateWebpackConfig, onCreateBabelConfig} = require('../gatsby-node');
const PreactRefreshPlugin = require('@prefresh/webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
describe('gatsby-plugin-preact', () => {
    it('sets the correct webpack config in development', () => {
        const _0x457348 = jest['fn'](() => {
            return {
                'entry': { 'commons': [] },
                'plugins': [new ReactRefreshWebpackPlugin()]
            };
        });
        const _0x455fd6 = {
            'setWebpackConfig': jest['fn'](),
            'setBabelPlugin': jest['fn'](),
            'replaceWebpackConfig': jest['fn']()
        };
        onCreateBabelConfig({
            'stage': 'develop',
            'actions': _0x455fd6
        });
        onCreateBabelConfig({
            'stage': 'develop-html',
            'actions': _0x455fd6
        });
        onCreateWebpackConfig({
            'stage': 'develop',
            'actions': _0x455fd6,
            'getConfig': _0x457348
        });
        onCreateWebpackConfig({
            'stage': 'develop-html',
            'actions': _0x455fd6,
            'getConfig': _0x457348
        });
        expect(_0x455fd6['setWebpackConfig'])['toHaveBeenCalledTimes'](2);
        expect(_0x455fd6['setWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': expect['arrayContaining']([expect['any'](PreactRefreshPlugin)]),
            'resolve': {
                'alias': {
                    'react': 'preact/compat',
                    'react-dom': 'preact/compat'
                }
            }
        });
        expect(_0x457348)['toHaveBeenCalledTimes'](2);
        expect(_0x455fd6['setBabelPlugin'])['toHaveBeenCalledTimes'](1);
        expect(_0x455fd6['setBabelPlugin'])['toHaveBeenCalledWith']({
            'name': '@prefresh/babel-plugin',
            'stage': 'develop'
        });
        expect(_0x455fd6['replaceWebpackConfig'])['toHaveBeenCalledTimes'](1);
        expect(_0x455fd6['replaceWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': [],
            'entry': { 'commons': ['@gatsbyjs/webpack-hot-middleware/client'] }
        });
    });
    it('sets the correct webpack config in production', () => {
        const _0x2fa6b4 = [
            'react',
            'react-dom',
            'scheduler',
            'prop-types'
        ];
        const _0x20bcc8 = jest['fn'](() => {
            return {
                'optimization': {
                    'splitChunks': {
                        'chunks': 'all',
                        'cacheGroups': {
                            'default': ![],
                            'vendors': ![],
                            'framework': {
                                'chunks': 'all',
                                'name': 'framework',
                                'test': new RegExp('(?<!node_modules.*)[\\\\/]node_modules[\\\\/](' + _0x2fa6b4['join']('|') + ')[\\\\/]'),
                                'priority': 40,
                                'enforce': !![]
                            }
                        }
                    }
                }
            };
        });
        const _0xe86e34 = {
            'setWebpackConfig': jest['fn'](),
            'setBabelPlugin': jest['fn'](),
            'replaceWebpackConfig': jest['fn']()
        };
        onCreateBabelConfig({
            'stage': 'build-javascript',
            'actions': _0xe86e34
        });
        onCreateBabelConfig({
            'stage': 'build-html',
            'actions': _0xe86e34
        });
        onCreateWebpackConfig({
            'stage': 'build-javascript',
            'actions': _0xe86e34,
            'getConfig': _0x20bcc8
        });
        onCreateWebpackConfig({
            'stage': 'build-html',
            'actions': _0xe86e34,
            'getConfig': _0x20bcc8
        });
        expect(_0xe86e34['setWebpackConfig'])['toHaveBeenCalledTimes'](2);
        expect(_0xe86e34['setWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': [],
            'resolve': {
                'alias': {
                    'react': 'preact/compat',
                    'react-dom': 'preact/compat'
                }
            }
        });
        expect(_0x20bcc8)['toHaveBeenCalledTimes'](1);
        expect(_0xe86e34['setBabelPlugin'])['toHaveBeenCalledTimes'](0);
        expect(_0xe86e34['replaceWebpackConfig'])['toHaveBeenCalledTimes'](1);
        expect(_0xe86e34['replaceWebpackConfig'])['toMatchInlineSnapshot']('\n      [MockFunction] {\n        "calls": Array [\n          Array [\n            Object {\n              "optimization": Object {\n                "splitChunks": Object {\n                  "cacheGroups": Object {\n                    "default": false,\n                    "framework": Object {\n                      "chunks": "all",\n                      "enforce": true,\n                      "name": "framework",\n                      "priority": 40,\n                      "test": [Function],\n                    },\n                    "vendors": false,\n                  },\n                  "chunks": "all",\n                },\n              },\n            },\n          ],\n        ],\n        "results": Array [\n          Object {\n            "type": "return",\n            "value": undefined,\n          },\n        ],\n      }\n    ');
    });
});