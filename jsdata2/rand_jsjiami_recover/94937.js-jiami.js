const debug = require('debug')('@cypress/react');
const tryLoadWebpackConfig = require('../utils/tryLoadWebpackConfig');
const {allowModuleSourceInPlace} = require('../utils/webpack-helpers');
const {addCypressToWebpackEslintRulesInPlace} = require('../utils/eslint-helpers');
const {getTranspileFolders} = require('../utils/get-transpile-folders');
const {addFolderToBabelLoaderTranspileInPlace} = require('../utils/babel-helpers');
module['exports'] = function findReactScriptsWebpackConfig(_0x409111, {webpackConfigPath} = { 'webpackConfigPath': 'react-scripts/config/webpack.config' }) {
    process['env']['FAST_REFRESH'] = 'false';
    const _0x508292 = tryLoadWebpackConfig(webpackConfigPath);
    if (!_0x508292) {
        throw new Error('\u26A0️ Could not find Webpack options for react-scripts. Make sure that you have react-scripts module available.');
    }
    addCypressToWebpackEslintRulesInPlace(_0x508292);
    getTranspileFolders(_0x409111)['forEach'](_0x30037f => {
        allowModuleSourceInPlace(_0x30037f, _0x508292);
        addFolderToBabelLoaderTranspileInPlace(_0x30037f, _0x508292);
    });
    debug('resolved webpack config: %o', _0x508292);
    return _0x508292;
};