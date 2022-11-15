const debug = require('debug')('@cypress/react'), tryLoadWebpackConfig = require('../utils/tryLoadWebpackConfig'), {allowModuleSourceInPlace} = require('../utils/webpack-helpers'), {addCypressToWebpackEslintRulesInPlace} = require('../utils/eslint-helpers'), {getTranspileFolders} = require('../utils/get-transpile-folders'), {addFolderToBabelLoaderTranspileInPlace} = require('../utils/babel-helpers');
module['exports'] = function findReactScriptsWebpackConfig(_0x2199b5, {webpackConfigPath: _0x990dec} = { 'webpackConfigPath': 'react-scripts/config/webpack.config' }) {
    const _0x289159 = {
        'iyCBD': function (_0x397fd5, _0x2ff849, _0x7313f4) {
            return _0x397fd5(_0x2ff849, _0x7313f4);
        },
        'cJYAB': 'false',
        'roghP': function (_0x1f1123, _0x9562d) {
            return _0x1f1123(_0x9562d);
        },
        'KODeu': '⚠️\x20Could\x20not\x20find\x20Webpack\x20options\x20for\x20react-scripts.\x20Make\x20sure\x20that\x20you\x20have\x20react-scripts\x20module\x20available.',
        'LfNIF': function (_0x3b8081, _0x1304d6) {
            return _0x3b8081(_0x1304d6);
        },
        'aKbRC': 'resolved\x20webpack\x20config:\x20%o'
    };
    process['env']['FAST_REFRESH'] = _0x289159['cJYAB'];
    const _0x228b7b = _0x289159['roghP'](tryLoadWebpackConfig, _0x990dec);
    if (!_0x228b7b)
        throw new Error(_0x289159['KODeu']);
    return _0x289159['roghP'](addCypressToWebpackEslintRulesInPlace, _0x228b7b), _0x289159['LfNIF'](getTranspileFolders, _0x2199b5)['forEach'](_0x2c0ef8 => {
        _0x289159['iyCBD'](allowModuleSourceInPlace, _0x2c0ef8, _0x228b7b), _0x289159['iyCBD'](addFolderToBabelLoaderTranspileInPlace, _0x2c0ef8, _0x228b7b);
    }), _0x289159['iyCBD'](debug, _0x289159['aKbRC'], _0x228b7b), _0x228b7b;
};
