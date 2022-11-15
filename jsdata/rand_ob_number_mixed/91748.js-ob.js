const {onCreateWebpackConfig, onCreateBabelConfig} = require('../gatsby-node'), PreactRefreshPlugin = require('@prefresh/webpack'), ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
describe('gatsby-plugin-preact', () => {
    it('sets\x20the\x20correct\x20webpack\x20config\x20in\x20development', () => {
        const _0xa55316 = jest['fn'](() => {
                return {
                    'entry': { 'commons': [] },
                    'plugins': [new ReactRefreshWebpackPlugin()]
                };
            }), _0x21b5fd = {
                'setWebpackConfig': jest['fn'](),
                'setBabelPlugin': jest['fn'](),
                'replaceWebpackConfig': jest['fn']()
            };
        onCreateBabelConfig({
            'stage': 'develop',
            'actions': _0x21b5fd
        }), onCreateBabelConfig({
            'stage': 'develop-html',
            'actions': _0x21b5fd
        }), onCreateWebpackConfig({
            'stage': 'develop',
            'actions': _0x21b5fd,
            'getConfig': _0xa55316
        }), onCreateWebpackConfig({
            'stage': 'develop-html',
            'actions': _0x21b5fd,
            'getConfig': _0xa55316
        }), expect(_0x21b5fd['setWebpackConfig'])['toHaveBeenCalledTimes'](0x1101 + 0x7 * -0x10a + -0x9b9), expect(_0x21b5fd['setWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': expect['arrayContaining']([expect['any'](PreactRefreshPlugin)]),
            'resolve': {
                'alias': {
                    'react': 'preact/compat',
                    'react-dom': 'preact/compat'
                }
            }
        }), expect(_0xa55316)['toHaveBeenCalledTimes'](0x10b6 + -0x1e95 + 0xde1), expect(_0x21b5fd['setBabelPlugin'])['toHaveBeenCalledTimes'](-0x251 * -0x2 + 0x7 * -0x109 + 0x43 * 0xa), expect(_0x21b5fd['setBabelPlugin'])['toHaveBeenCalledWith']({
            'name': '@prefresh/babel-plugin',
            'stage': 'develop'
        }), expect(_0x21b5fd['replaceWebpackConfig'])['toHaveBeenCalledTimes'](-0x1287 + -0x1 * -0x1075 + 0x3 * 0xb1), expect(_0x21b5fd['replaceWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': [],
            'entry': { 'commons': ['@gatsbyjs/webpack-hot-middleware/client'] }
        });
    }), it('sets\x20the\x20correct\x20webpack\x20config\x20in\x20production', () => {
        const _0x5de284 = [
                'react',
                'react-dom',
                'scheduler',
                'prop-types'
            ], _0x4fd872 = jest['fn'](() => {
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
                                    'test': new RegExp('(?<!node_modules.*)[\x5c\x5c/]node_modules[\x5c\x5c/](' + _0x5de284['join']('|') + ')[\x5c\x5c/]'),
                                    'priority': 0x28,
                                    'enforce': !![]
                                }
                            }
                        }
                    }
                };
            }), _0x102c49 = {
                'setWebpackConfig': jest['fn'](),
                'setBabelPlugin': jest['fn'](),
                'replaceWebpackConfig': jest['fn']()
            };
        onCreateBabelConfig({
            'stage': 'build-javascript',
            'actions': _0x102c49
        }), onCreateBabelConfig({
            'stage': 'build-html',
            'actions': _0x102c49
        }), onCreateWebpackConfig({
            'stage': 'build-javascript',
            'actions': _0x102c49,
            'getConfig': _0x4fd872
        }), onCreateWebpackConfig({
            'stage': 'build-html',
            'actions': _0x102c49,
            'getConfig': _0x4fd872
        }), expect(_0x102c49['setWebpackConfig'])['toHaveBeenCalledTimes'](0x830 + 0x21f9 * -0x1 + 0x19cb), expect(_0x102c49['setWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': [],
            'resolve': {
                'alias': {
                    'react': 'preact/compat',
                    'react-dom': 'preact/compat'
                }
            }
        }), expect(_0x4fd872)['toHaveBeenCalledTimes'](-0x135e + 0x8b * 0x7 + 0xf92), expect(_0x102c49['setBabelPlugin'])['toHaveBeenCalledTimes'](-0x88 * -0x7 + 0x7fd + 0x1b * -0x6f), expect(_0x102c49['replaceWebpackConfig'])['toHaveBeenCalledTimes'](-0x3 * -0xb29 + 0x1 * -0x1475 + -0xd05), expect(_0x102c49['replaceWebpackConfig'])['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20[MockFunction]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22calls\x22:\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22optimization\x22:\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22splitChunks\x22:\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22cacheGroups\x22:\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22default\x22:\x20false,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22framework\x22:\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22chunks\x22:\x20\x22all\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22enforce\x22:\x20true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22name\x22:\x20\x22framework\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22priority\x22:\x2040,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22test\x22:\x20[Function],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22vendors\x22:\x20false,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22chunks\x22:\x20\x22all\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22results\x22:\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22type\x22:\x20\x22return\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22value\x22:\x20undefined,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20');
    });
});
