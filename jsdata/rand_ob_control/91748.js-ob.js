const {onCreateWebpackConfig, onCreateBabelConfig} = require('../gatsby-node'), PreactRefreshPlugin = require('@prefresh/webpack'), ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
describe('gatsby-plugin-preact', () => {
    const _0x57c8d2 = {
        'ndmeO': function (_0x5dea14, _0x56bfd7) {
            return _0x5dea14(_0x56bfd7);
        },
        'KpKSv': function (_0xa31c12, _0xffc8fa) {
            return _0xa31c12(_0xffc8fa);
        },
        'dGrwv': function (_0x1893e3, _0x5a9a51) {
            return _0x1893e3(_0x5a9a51);
        },
        'NGSZX': function (_0x21b74e, _0x647ed4) {
            return _0x21b74e(_0x647ed4);
        },
        'ilbtK': function (_0x243725, _0x36515c) {
            return _0x243725(_0x36515c);
        },
        'HnFmu': function (_0x410d00, _0x4c9487) {
            return _0x410d00(_0x4c9487);
        },
        'SAWKf': function (_0x552696, _0x1af456) {
            return _0x552696(_0x1af456);
        },
        'wBIWy': function (_0x4d1f5f, _0x4dffcd) {
            return _0x4d1f5f(_0x4dffcd);
        },
        'rIFcH': function (_0x21ae53, _0x2b92fe) {
            return _0x21ae53(_0x2b92fe);
        },
        'kAYoS': function (_0x3e185a, _0x21ac6a) {
            return _0x3e185a(_0x21ac6a);
        },
        'wdVqU': function (_0x18c5a7, _0x1d8e61) {
            return _0x18c5a7(_0x1d8e61);
        },
        'MbgHY': function (_0x2ed5d6, _0x5b15d6, _0x3b73b0) {
            return _0x2ed5d6(_0x5b15d6, _0x3b73b0);
        }
    };
    _0x57c8d2['MbgHY'](it, 'sets\x20the\x20correct\x20webpack\x20config\x20in\x20development', () => {
        const _0x185cf9 = jest['fn'](() => {
                return {
                    'entry': { 'commons': [] },
                    'plugins': [new ReactRefreshWebpackPlugin()]
                };
            }), _0x536bcb = {
                'setWebpackConfig': jest['fn'](),
                'setBabelPlugin': jest['fn'](),
                'replaceWebpackConfig': jest['fn']()
            };
        _0x57c8d2['ndmeO'](onCreateBabelConfig, {
            'stage': 'develop',
            'actions': _0x536bcb
        }), _0x57c8d2['ndmeO'](onCreateBabelConfig, {
            'stage': 'develop-html',
            'actions': _0x536bcb
        }), _0x57c8d2['KpKSv'](onCreateWebpackConfig, {
            'stage': 'develop',
            'actions': _0x536bcb,
            'getConfig': _0x185cf9
        }), _0x57c8d2['dGrwv'](onCreateWebpackConfig, {
            'stage': 'develop-html',
            'actions': _0x536bcb,
            'getConfig': _0x185cf9
        }), _0x57c8d2['dGrwv'](expect, _0x536bcb['setWebpackConfig'])['toHaveBeenCalledTimes'](0x2), _0x57c8d2['NGSZX'](expect, _0x536bcb['setWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': expect['arrayContaining']([expect['any'](PreactRefreshPlugin)]),
            'resolve': {
                'alias': {
                    'react': 'preact/compat',
                    'react-dom': 'preact/compat'
                }
            }
        }), _0x57c8d2['ilbtK'](expect, _0x185cf9)['toHaveBeenCalledTimes'](0x2), _0x57c8d2['ilbtK'](expect, _0x536bcb['setBabelPlugin'])['toHaveBeenCalledTimes'](0x1), _0x57c8d2['ilbtK'](expect, _0x536bcb['setBabelPlugin'])['toHaveBeenCalledWith']({
            'name': '@prefresh/babel-plugin',
            'stage': 'develop'
        }), _0x57c8d2['HnFmu'](expect, _0x536bcb['replaceWebpackConfig'])['toHaveBeenCalledTimes'](0x1), _0x57c8d2['SAWKf'](expect, _0x536bcb['replaceWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': [],
            'entry': { 'commons': ['@gatsbyjs/webpack-hot-middleware/client'] }
        });
    }), _0x57c8d2['MbgHY'](it, 'sets\x20the\x20correct\x20webpack\x20config\x20in\x20production', () => {
        const _0x27013f = [
                'react',
                'react-dom',
                'scheduler',
                'prop-types'
            ], _0x52f141 = jest['fn'](() => {
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
                                    'test': new RegExp('(?<!node_modules.*)[\x5c\x5c/]node_modules[\x5c\x5c/](' + _0x27013f['join']('|') + ')[\x5c\x5c/]'),
                                    'priority': 0x28,
                                    'enforce': !![]
                                }
                            }
                        }
                    }
                };
            }), _0x4781cf = {
                'setWebpackConfig': jest['fn'](),
                'setBabelPlugin': jest['fn'](),
                'replaceWebpackConfig': jest['fn']()
            };
        _0x57c8d2['SAWKf'](onCreateBabelConfig, {
            'stage': 'build-javascript',
            'actions': _0x4781cf
        }), _0x57c8d2['wBIWy'](onCreateBabelConfig, {
            'stage': 'build-html',
            'actions': _0x4781cf
        }), _0x57c8d2['wBIWy'](onCreateWebpackConfig, {
            'stage': 'build-javascript',
            'actions': _0x4781cf,
            'getConfig': _0x52f141
        }), _0x57c8d2['wBIWy'](onCreateWebpackConfig, {
            'stage': 'build-html',
            'actions': _0x4781cf,
            'getConfig': _0x52f141
        }), _0x57c8d2['wBIWy'](expect, _0x4781cf['setWebpackConfig'])['toHaveBeenCalledTimes'](0x2), _0x57c8d2['rIFcH'](expect, _0x4781cf['setWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': [],
            'resolve': {
                'alias': {
                    'react': 'preact/compat',
                    'react-dom': 'preact/compat'
                }
            }
        }), _0x57c8d2['kAYoS'](expect, _0x52f141)['toHaveBeenCalledTimes'](0x1), _0x57c8d2['wdVqU'](expect, _0x4781cf['setBabelPlugin'])['toHaveBeenCalledTimes'](0x0), _0x57c8d2['wdVqU'](expect, _0x4781cf['replaceWebpackConfig'])['toHaveBeenCalledTimes'](0x1), _0x57c8d2['wdVqU'](expect, _0x4781cf['replaceWebpackConfig'])['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20[MockFunction]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22calls\x22:\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22optimization\x22:\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22splitChunks\x22:\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22cacheGroups\x22:\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22default\x22:\x20false,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22framework\x22:\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22chunks\x22:\x20\x22all\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22enforce\x22:\x20true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22name\x22:\x20\x22framework\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22priority\x22:\x2040,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22test\x22:\x20[Function],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22vendors\x22:\x20false,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22chunks\x22:\x20\x22all\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22results\x22:\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22type\x22:\x20\x22return\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22value\x22:\x20undefined,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20');
    });
});
