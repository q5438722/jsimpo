function _0x3a40(_0x3f8ea9, _0x36003f) {
    return _0x3a40 = function (_0x1e1c02, _0x35d1e9) {
        _0x1e1c02 = _0x1e1c02 - (16 * -468 + 4938 + -31 * -93);
        let _0x35eb3d = _0x3253[_0x1e1c02];
        return _0x35eb3d;
    }, _0x3a40(_0x3f8ea9, _0x36003f);
}
const debug = require(_0x351571(344))(_0x351571(345)), tryLoadWebpackConfig = require(_0x351571(346)), {allowModuleSourceInPlace} = require('../utils/webpack-helpers'), {addCypressToWebpackEslintRulesInPlace} = require(_0x351571(347)), {getTranspileFolders} = require('../utils/get-transpile-folders'), {addFolderToBabelLoaderTranspileInPlace} = require(_0x351571(348));
module[_0x351571(349)] = function findReactScriptsWebpackConfig(_0x1f29d9, {webpackConfigPath: _0x48d230} = { 'webpackConfigPath': _0x351571(350) }) {
    const _0x3f5d59 = _0x351571, _0xe3f6fd = {
            'PDBIy': function (_0x39c827, _0x2fb3bf, _0x3db922) {
                return _0x39c827(_0x2fb3bf, _0x3db922);
            },
            'msDXE': function (_0x266179, _0x533ccb, _0x158fdc) {
                return _0x266179(_0x533ccb, _0x158fdc);
            },
            'zVulL': _0x3f5d59(351),
            'yAzCS': _0x3f5d59(352),
            'CKAWH': function (_0x4d755f, _0x48b384) {
                return _0x4d755f(_0x48b384);
            }
        };
    process[_0x3f5d59(353)]['FAST_REFRESH'] = _0xe3f6fd[_0x3f5d59(354)];
    const _0x5b3372 = tryLoadWebpackConfig(_0x48d230);
    if (!_0x5b3372)
        throw new Error(_0xe3f6fd['yAzCS']);
    return _0xe3f6fd[_0x3f5d59(355)](addCypressToWebpackEslintRulesInPlace, _0x5b3372), _0xe3f6fd[_0x3f5d59(355)](getTranspileFolders, _0x1f29d9)['forEach'](_0x5d1ef2 => {
        const _0x2bf972 = _0x3f5d59;
        _0xe3f6fd[_0x2bf972(356)](allowModuleSourceInPlace, _0x5d1ef2, _0x5b3372), _0xe3f6fd[_0x2bf972(357)](addFolderToBabelLoaderTranspileInPlace, _0x5d1ef2, _0x5b3372);
    }), debug('resolved webpack config: %o', _0x5b3372), _0x5b3372;
};