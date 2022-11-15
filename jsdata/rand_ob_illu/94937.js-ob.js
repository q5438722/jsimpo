const _0x3f41 = ['RiFIb', 'XuvWW', 'resolved webpack config: %o', '192587EoesuW', '16wwNPrI', '31883DLDjbU', '57947SZARBL', '4HHlnqU', '28693BEwtnk', '20LkUhxA', '24919vpDubU', '149ZFhnwg', '2440PcEVpE', '1309892sxBrJT', 'debug', '@cypress/react', '../utils/tryLoadWebpackConfig', '../utils/get-transpile-folders', '../utils/babel-helpers', 'exports', 'react-scripts/config/webpack.config', 'false', 'env', 'MZWol', 'xjAta', 'ntzfC', 'CNrxN', 'forEach'];
const _0x39829e = _0x1e08;

(function (_0xc49088, _0x2567ef) {
    const _0x5727a5 = _0x1e08;

    while (true) {
        try {
            const _0x4f55e6 = parseInt(_0x5727a5(0xf7)) + parseInt(_0x5727a5(0xf8)) * parseInt(_0x5727a5(0xf9)) + -parseInt(_0x5727a5(0xfa)) * -parseInt(_0x5727a5(0xfb)) + -parseInt(_0x5727a5(0xfc)) + -parseInt(_0x5727a5(0xfd)) * -parseInt(_0x5727a5(0xfe)) + parseInt(_0x5727a5(0xff)) * parseInt(_0x5727a5(0x100)) + -parseInt(_0x5727a5(0x101));

            if (_0x4f55e6 === _0x2567ef) break;else _0xc49088.push(_0xc49088.shift());
        } catch (_0x594886) {
            _0xc49088.push(_0xc49088.shift());
        }
    }
})(_0x3f41, 457858);

const debug = require(_0x39829e(0x102))(_0x39829e(0x103));

const tryLoadWebpackConfig = require(_0x39829e(0x104));

var { allowModuleSourceInPlace } = require('../utils/webpack-helpers');

var { addCypressToWebpackEslintRulesInPlace } = require('../utils/eslint-helpers');

var { getTranspileFolders } = require(_0x39829e(0x105));

var { addFolderToBabelLoaderTranspileInPlace } = require(_0x39829e(0x106));

function _0x1e08(_0xeff1d, _0x2fa56a) {
    return _0x1e08 = function (_0x4d1de5, _0x3ab376) {
        _0x4d1de5 = _0x4d1de5 - 247;
        const _0x3ffb08 = _0x3f41[_0x4d1de5];

        return _0x3ffb08;
    }, _0x1e08(_0xeff1d, _0x2fa56a);
}
module[_0x39829e(0x107)] = function findReactScriptsWebpackConfig(_0x48361f, { webpackConfigPath: _0x283e13 } = { 'webpackConfigPath': _0x39829e(0x108) }) {
    const _0x1f80e8 = _0x39829e;
    const _0x533831 = {
        'RiFIb': function (_0x42e0e4, _0x2f4b05, _0x22a2f0) {
            return _0x42e0e4(_0x2f4b05, _0x22a2f0);
        },
        'MZWol': _0x1f80e8(0x109),
        'xjAta': function (_0x1085c4, _0x58de76) {
            return _0x1085c4(_0x58de76);
        },
        'ntzfC': '\u26A0\uFE0F Could not find Webpack options for react-scripts. Make sure that you have react-scripts module available.',
        'CNrxN': function (_0x10c026, _0x2826ef) {
            return _0x10c026(_0x2826ef);
        },
        'XuvWW': function (_0x1a1091, _0x2b66a2, _0x4c62e0) {
            return _0x1a1091(_0x2b66a2, _0x4c62e0);
        }
    };

    process[_0x1f80e8(0x10a)]['FAST_REFRESH'] = _0x533831[_0x1f80e8(0x10b)];

    const _0x1f44b4 = _0x533831[_0x1f80e8(0x10c)](tryLoadWebpackConfig, _0x283e13);

    if (!_0x1f44b4) throw new Error(_0x533831[_0x1f80e8(0x10d)]);
    return _0x533831[_0x1f80e8(0x10e)](addCypressToWebpackEslintRulesInPlace, _0x1f44b4), _0x533831.CNrxN(getTranspileFolders, _0x48361f)[_0x1f80e8(0x10f)](_0x4914b6 => {
        const _0x1a50b9 = _0x1f80e8;

        _0x533831[_0x1a50b9(0x110)](allowModuleSourceInPlace, _0x4914b6, _0x1f44b4), addFolderToBabelLoaderTranspileInPlace(_0x4914b6, _0x1f44b4);
    }), _0x533831[_0x1f80e8(0x111)](debug, _0x1f80e8(0x112), _0x1f44b4), _0x1f44b4;
};
