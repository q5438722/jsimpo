const {onCreateWebpackConfig, onCreateBabelConfig} = require(_0x43e4d2(313)), PreactRefreshPlugin = require(_0x43e4d2(314)), ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
describe(_0x43e4d2(315), () => {
    const _0x9b615c = _0x43e4d2;
    it(_0x9b615c(316), () => {
        const _0x215fac = _0x9b615c, _0x12894e = jest['fn'](() => {
                return {
                    'entry': { 'commons': [] },
                    'plugins': [new ReactRefreshWebpackPlugin()]
                };
            }), _0x344e52 = {
                'setWebpackConfig': jest['fn'](),
                'setBabelPlugin': jest['fn'](),
                'replaceWebpackConfig': jest['fn']()
            };
        onCreateBabelConfig({
            'stage': _0x215fac(317),
            'actions': _0x344e52
        }), onCreateBabelConfig({
            'stage': _0x215fac(318),
            'actions': _0x344e52
        }), onCreateWebpackConfig({
            'stage': _0x215fac(317),
            'actions': _0x344e52,
            'getConfig': _0x12894e
        }), onCreateWebpackConfig({
            'stage': _0x215fac(318),
            'actions': _0x344e52,
            'getConfig': _0x12894e
        }), expect(_0x344e52[_0x215fac(319)])[_0x215fac(320)](2), expect(_0x344e52[_0x215fac(319)])['toHaveBeenCalledWith']({
            'plugins': expect[_0x215fac(321)]([expect[_0x215fac(322)](PreactRefreshPlugin)]),
            'resolve': {
                'alias': {
                    'react': 'preact/compat',
                    'react-dom': _0x215fac(323)
                }
            }
        }), expect(_0x12894e)[_0x215fac(320)](2), expect(_0x344e52['setBabelPlugin'])['toHaveBeenCalledTimes'](1), expect(_0x344e52['setBabelPlugin'])[_0x215fac(324)]({
            'name': _0x215fac(325),
            'stage': _0x215fac(317)
        }), expect(_0x344e52['replaceWebpackConfig'])[_0x215fac(320)](1), expect(_0x344e52[_0x215fac(326)])['toHaveBeenCalledWith']({
            'plugins': [],
            'entry': { 'commons': ['@gatsbyjs/webpack-hot-middleware/client'] }
        });
    }), it(_0x9b615c(327), () => {
        const _0x29bc77 = _0x9b615c, _0x54c10c = [
                _0x29bc77(328),
                _0x29bc77(329),
                _0x29bc77(330),
                _0x29bc77(331)
            ], _0x385067 = jest['fn'](() => {
                const _0x3fd356 = _0x29bc77;
                return {
                    'optimization': {
                        'splitChunks': {
                            'chunks': _0x3fd356(332),
                            'cacheGroups': {
                                'default': ![],
                                'vendors': ![],
                                'framework': {
                                    'chunks': 'all',
                                    'name': _0x3fd356(333),
                                    'test': new RegExp(_0x3fd356(334) + _0x54c10c[_0x3fd356(335)]('|') + _0x3fd356(336)),
                                    'priority': 40,
                                    'enforce': !![]
                                }
                            }
                        }
                    }
                };
            }), _0x5a27d4 = {
                'setWebpackConfig': jest['fn'](),
                'setBabelPlugin': jest['fn'](),
                'replaceWebpackConfig': jest['fn']()
            };
        onCreateBabelConfig({
            'stage': _0x29bc77(337),
            'actions': _0x5a27d4
        }), onCreateBabelConfig({
            'stage': _0x29bc77(338),
            'actions': _0x5a27d4
        }), onCreateWebpackConfig({
            'stage': 'build-javascript',
            'actions': _0x5a27d4,
            'getConfig': _0x385067
        }), onCreateWebpackConfig({
            'stage': 'build-html',
            'actions': _0x5a27d4,
            'getConfig': _0x385067
        }), expect(_0x5a27d4[_0x29bc77(319)])['toHaveBeenCalledTimes'](2), expect(_0x5a27d4['setWebpackConfig'])['toHaveBeenCalledWith']({
            'plugins': [],
            'resolve': {
                'alias': {
                    'react': _0x29bc77(323),
                    'react-dom': _0x29bc77(323)
                }
            }
        }), expect(_0x385067)['toHaveBeenCalledTimes'](1), expect(_0x5a27d4[_0x29bc77(339)])['toHaveBeenCalledTimes'](0), expect(_0x5a27d4['replaceWebpackConfig'])[_0x29bc77(320)](1), expect(_0x5a27d4[_0x29bc77(326)])[_0x29bc77(340)](_0x29bc77(341));
    });
});