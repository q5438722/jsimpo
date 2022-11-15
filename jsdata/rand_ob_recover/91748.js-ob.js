function _0x3076(_0x401f19, _0x141787) {
    return _0x3076 = function (_0x11a91c, _0x521974) {
        _0x11a91c = _0x11a91c - (-5849 + 1042 + -1 * -5132);
        let _0x146275 = _0xfc6d[_0x11a91c];
        return _0x146275;
    }, _0x3076(_0x401f19, _0x141787);
}
const {onCreateWebpackConfig, onCreateBabelConfig} = require('../gatsby-node'), PreactRefreshPlugin = require(_0x56af4a(337)), ReactRefreshWebpackPlugin = require(_0x56af4a(338));
describe(_0x56af4a(339), () => {
    const _0x2a4733 = _0x56af4a, _0xb4e09f = {
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
    _0xb4e09f[_0x2a4733(340)](it, _0x2a4733(341), () => {
        const _0x437c4e = _0x2a4733, _0x599014 = jest['fn'](() => {
                return {
                    'entry': { 'commons': [] },
                    'plugins': [new ReactRefreshWebpackPlugin()]
                };
            }), _0x41c661 = {
                'setWebpackConfig': jest['fn'](),
                'setBabelPlugin': jest['fn'](),
                'replaceWebpackConfig': jest['fn']()
            };
        onCreateBabelConfig({
            'stage': _0x437c4e(342),
            'actions': _0x41c661
        }), _0xb4e09f[_0x437c4e(343)](onCreateBabelConfig, {
            'stage': _0x437c4e(344),
            'actions': _0x41c661
        }), onCreateWebpackConfig({
            'stage': _0x437c4e(342),
            'actions': _0x41c661,
            'getConfig': _0x599014
        }), onCreateWebpackConfig({
            'stage': _0x437c4e(344),
            'actions': _0x41c661,
            'getConfig': _0x599014
        }), _0xb4e09f['Bovck'](expect, _0x41c661['setWebpackConfig'])[_0x437c4e(345)](1329 * -1 + 1 * 3061 + -1730), _0xb4e09f[_0x437c4e(346)](expect, _0x41c661['setWebpackConfig'])[_0x437c4e(347)]({
            'plugins': expect['arrayContaining']([expect[_0x437c4e(348)](PreactRefreshPlugin)]),
            'resolve': {
                'alias': {
                    'react': _0x437c4e(349),
                    'react-dom': _0x437c4e(349)
                }
            }
        }), _0xb4e09f[_0x437c4e(346)](expect, _0x599014)[_0x437c4e(345)](2995 + -18 * -410 + -10373), _0xb4e09f['dklRi'](expect, _0x41c661[_0x437c4e(350)])[_0x437c4e(345)](444 + -8249 + 1301 * 6), _0xb4e09f[_0x437c4e(351)](expect, _0x41c661[_0x437c4e(350)])[_0x437c4e(347)]({
            'name': _0x437c4e(352),
            'stage': _0x437c4e(342)
        }), _0xb4e09f['JTgKS'](expect, _0x41c661['replaceWebpackConfig'])[_0x437c4e(345)](72 * -107 + 171 * -41 + -3679 * -4), expect(_0x41c661[_0x437c4e(353)])[_0x437c4e(347)]({
            'plugins': [],
            'entry': { 'commons': [_0x437c4e(354)] }
        });
    }), _0xb4e09f[_0x2a4733(355)](it, _0x2a4733(356), () => {
        const _0x106e9b = _0x2a4733, _0x11568a = [
                _0x106e9b(357),
                _0x106e9b(358),
                _0x106e9b(359),
                _0x106e9b(360)
            ], _0x5380cb = jest['fn'](() => {
                const _0x372538 = _0x106e9b;
                return {
                    'optimization': {
                        'splitChunks': {
                            'chunks': _0x372538(361),
                            'cacheGroups': {
                                'default': ![],
                                'vendors': ![],
                                'framework': {
                                    'chunks': _0x372538(361),
                                    'name': _0x372538(362),
                                    'test': new RegExp(_0x372538(363) + _0x11568a['join']('|') + _0x372538(364)),
                                    'priority': 40,
                                    'enforce': !![]
                                }
                            }
                        }
                    }
                };
            }), _0x5bfec5 = {
                'setWebpackConfig': jest['fn'](),
                'setBabelPlugin': jest['fn'](),
                'replaceWebpackConfig': jest['fn']()
            };
        _0xb4e09f[_0x106e9b(365)](onCreateBabelConfig, {
            'stage': 'build-javascript',
            'actions': _0x5bfec5
        }), _0xb4e09f[_0x106e9b(365)](onCreateBabelConfig, {
            'stage': _0x106e9b(366),
            'actions': _0x5bfec5
        }), _0xb4e09f[_0x106e9b(365)](onCreateWebpackConfig, {
            'stage': _0x106e9b(367),
            'actions': _0x5bfec5,
            'getConfig': _0x5380cb
        }), onCreateWebpackConfig({
            'stage': _0x106e9b(366),
            'actions': _0x5bfec5,
            'getConfig': _0x5380cb
        }), _0xb4e09f['oWFvk'](expect, _0x5bfec5['setWebpackConfig'])[_0x106e9b(345)](8596 + -6411 * 1 + -59 * 37), expect(_0x5bfec5['setWebpackConfig'])[_0x106e9b(347)]({
            'plugins': [],
            'resolve': {
                'alias': {
                    'react': 'preact/compat',
                    'react-dom': _0x106e9b(349)
                }
            }
        }), expect(_0x5380cb)['toHaveBeenCalledTimes'](5250 + -3057 + -4 * 548), _0xb4e09f['SBJyB'](expect, _0x5bfec5['setBabelPlugin'])[_0x106e9b(345)](17 * -587 + -5441 * -1 + 2269 * 2), _0xb4e09f['SBJyB'](expect, _0x5bfec5['replaceWebpackConfig'])[_0x106e9b(345)](-9777 + 62 * -5 + 10088), _0xb4e09f[_0x106e9b(368)](expect, _0x5bfec5[_0x106e9b(353)])[_0x106e9b(369)](_0x106e9b(370));
    });
});