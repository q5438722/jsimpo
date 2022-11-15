const debug = require(_0x26f180(116))(_0x26f180(117)), tryLoadWebpackConfig = require(_0x26f180(118)), {allowModuleSourceInPlace} = require(_0x26f180(119)), {addCypressToWebpackEslintRulesInPlace} = require(_0x26f180(120)), {getTranspileFolders} = require(_0x26f180(121)), {addFolderToBabelLoaderTranspileInPlace} = require(_0x26f180(122));
module[_0x26f180(123)] = function findReactScriptsWebpackConfig(_0x4bdeb6, {webpackConfigPath: _0x38edd6} = { 'webpackConfigPath': _0x26f180(124) }) {
    const _0x1a9b8f = _0x26f180;
    process[_0x1a9b8f(125)][_0x1a9b8f(126)] = _0x1a9b8f(127);
    const _0x54cfdb = tryLoadWebpackConfig(_0x38edd6);
    if (!_0x54cfdb)
        throw new Error(_0x1a9b8f(128));
    return addCypressToWebpackEslintRulesInPlace(_0x54cfdb), getTranspileFolders(_0x4bdeb6)[_0x1a9b8f(129)](_0x33be8c => {
        allowModuleSourceInPlace(_0x33be8c, _0x54cfdb), addFolderToBabelLoaderTranspileInPlace(_0x33be8c, _0x54cfdb);
    }), debug(_0x1a9b8f(130), _0x54cfdb), _0x54cfdb;
};