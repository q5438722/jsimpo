const debug = require('debug')('@cypress/react'), tryLoadWebpackConfig = require('../utils/tryLoadWebpackConfig'), {allowModuleSourceInPlace} = require('../utils/webpack-helpers'), {addCypressToWebpackEslintRulesInPlace} = require('../utils/eslint-helpers'), {getTranspileFolders} = require('../utils/get-transpile-folders'), {addFolderToBabelLoaderTranspileInPlace} = require('../utils/babel-helpers');
module['exports'] = function findReactScriptsWebpackConfig(_0xe66e5, {webpackConfigPath: _0x574951} = { 'webpackConfigPath': 'react-scripts/config/webpack.config' }) {
    process['env']['FAST_REFRESH'] = 'false';
    const _0x447855 = tryLoadWebpackConfig(_0x574951);
    if (!_0x447855)
        throw new Error('⚠️\x20Could\x20not\x20find\x20Webpack\x20options\x20for\x20react-scripts.\x20Make\x20sure\x20that\x20you\x20have\x20react-scripts\x20module\x20available.');
    return addCypressToWebpackEslintRulesInPlace(_0x447855), getTranspileFolders(_0xe66e5)['forEach'](_0x463f26 => {
        allowModuleSourceInPlace(_0x463f26, _0x447855), addFolderToBabelLoaderTranspileInPlace(_0x463f26, _0x447855);
    }), debug('resolved\x20webpack\x20config:\x20%o', _0x447855), _0x447855;
};
