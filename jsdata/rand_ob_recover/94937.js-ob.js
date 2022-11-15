const debug = require(_0x39829e(258))(_0x39829e(259)), tryLoadWebpackConfig = require(_0x39829e(260)), {allowModuleSourceInPlace} = require('../utils/webpack-helpers'), {addCypressToWebpackEslintRulesInPlace} = require('../utils/eslint-helpers'), {getTranspileFolders} = require(_0x39829e(261)), {addFolderToBabelLoaderTranspileInPlace} = require(_0x39829e(262));
function _0x1e08(_0xeff1d, _0x2fa56a) {
    return _0x1e08 = function (_0x4d1de5, _0x3ab376) {
        _0x4d1de5 = _0x4d1de5 - (-5 * 1931 + -1428 + -11 * -1030);
        let _0x3ffb08 = _0x3f41[_0x4d1de5];
        return _0x3ffb08;
    }, _0x1e08(_0xeff1d, _0x2fa56a);
}
module[_0x39829e(263)] = function findReactScriptsWebpackConfig(_0x48361f, {webpackConfigPath: _0x283e13} = { 'webpackConfigPath': _0x39829e(264) }) {
    const _0x1f80e8 = _0x39829e, _0x533831 = {
            'RiFIb': function (_0x42e0e4, _0x2f4b05, _0x22a2f0) {
                return _0x42e0e4(_0x2f4b05, _0x22a2f0);
            },
            'MZWol': _0x1f80e8(265),
            'xjAta': function (_0x1085c4, _0x58de76) {
                return _0x1085c4(_0x58de76);
            },
            'ntzfC': '\u26A0️ Could not find Webpack options for react-scripts. Make sure that you have react-scripts module available.',
            'CNrxN': function (_0x10c026, _0x2826ef) {
                return _0x10c026(_0x2826ef);
            },
            'XuvWW': function (_0x1a1091, _0x2b66a2, _0x4c62e0) {
                return _0x1a1091(_0x2b66a2, _0x4c62e0);
            }
        };
    process[_0x1f80e8(266)]['FAST_REFRESH'] = _0x533831[_0x1f80e8(267)];
    const _0x1f44b4 = _0x533831[_0x1f80e8(268)](tryLoadWebpackConfig, _0x283e13);
    if (!_0x1f44b4)
        throw new Error(_0x533831[_0x1f80e8(269)]);
    return _0x533831[_0x1f80e8(270)](addCypressToWebpackEslintRulesInPlace, _0x1f44b4), _0x533831['CNrxN'](getTranspileFolders, _0x48361f)[_0x1f80e8(271)](_0x4914b6 => {
        const _0x1a50b9 = _0x1f80e8;
        _0x533831[_0x1a50b9(272)](allowModuleSourceInPlace, _0x4914b6, _0x1f44b4), addFolderToBabelLoaderTranspileInPlace(_0x4914b6, _0x1f44b4);
    }), _0x533831[_0x1f80e8(273)](debug, _0x1f80e8(274), _0x1f44b4), _0x1f44b4;
};