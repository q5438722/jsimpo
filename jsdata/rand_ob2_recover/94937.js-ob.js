const debug = require(_0x281ebb(239))('@cypress/react'), tryLoadWebpackConfig = require(_0x281ebb(240)), {allowModuleSourceInPlace} = require(_0x281ebb(241)), {addCypressToWebpackEslintRulesInPlace} = require('../utils/eslint-helpers'), {getTranspileFolders} = require('../utils/get-transpile-folders'), {addFolderToBabelLoaderTranspileInPlace} = require('../utils/babel-helpers');
module['exports'] = function findReactScriptsWebpackConfig(_0x2ea23b, {webpackConfigPath: _0x3ab1c0} = { 'webpackConfigPath': _0x281ebb(242) }) {
    const _0x2e8fbd = _0x281ebb;
    process[_0x2e8fbd(243)][_0x2e8fbd(244)] = _0x2e8fbd(245);
    const _0x3d5954 = tryLoadWebpackConfig(_0x3ab1c0);
    if (!_0x3d5954)
        throw new Error(_0x2e8fbd(246));
    return addCypressToWebpackEslintRulesInPlace(_0x3d5954), getTranspileFolders(_0x2ea23b)[_0x2e8fbd(247)](_0x136509 => {
        allowModuleSourceInPlace(_0x136509, _0x3d5954), addFolderToBabelLoaderTranspileInPlace(_0x136509, _0x3d5954);
    }), debug(_0x2e8fbd(248), _0x3d5954), _0x3d5954;
};