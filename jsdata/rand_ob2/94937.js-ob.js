const _0x58ae = [
    'forEach',
    'resolved\x20webpack\x20config:\x20%o',
    '258190FmHTzz',
    '159528ggPLvZ',
    '3909VjqnlX',
    '23YdJprC',
    '199319iJeHfb',
    '1zPMUXq',
    '4146LbgWWK',
    '7XEkpsX',
    '88643fOudnp',
    '2XaYiPH',
    '1IblYZY',
    '119266nwXZMo',
    'debug',
    '../utils/tryLoadWebpackConfig',
    '../utils/webpack-helpers',
    'react-scripts/config/webpack.config',
    'env',
    'FAST_REFRESH',
    'false',
    '⚠️\x20Could\x20not\x20find\x20Webpack\x20options\x20for\x20react-scripts.\x20Make\x20sure\x20that\x20you\x20have\x20react-scripts\x20module\x20available.'
];
function _0x372f(_0x487e02, _0x395b20) {
    return _0x372f = function (_0x58aecc, _0x372f01) {
        _0x58aecc = _0x58aecc - 0xe3;
        let _0x63881d = _0x58ae[_0x58aecc];
        return _0x63881d;
    }, _0x372f(_0x487e02, _0x395b20);
}
const _0x281ebb = _0x372f;
(function (_0x5561c2, _0x11163a) {
    const _0x4631ea = _0x372f;
    while (!![]) {
        try {
            const _0x3728a7 = parseInt(_0x4631ea(0xe3)) + -parseInt(_0x4631ea(0xe4)) + -parseInt(_0x4631ea(0xe5)) * parseInt(_0x4631ea(0xe6)) + parseInt(_0x4631ea(0xe7)) * -parseInt(_0x4631ea(0xe8)) + -parseInt(_0x4631ea(0xe9)) * -parseInt(_0x4631ea(0xea)) + parseInt(_0x4631ea(0xeb)) * parseInt(_0x4631ea(0xec)) + parseInt(_0x4631ea(0xed)) * parseInt(_0x4631ea(0xee));
            if (_0x3728a7 === _0x11163a)
                break;
            else
                _0x5561c2['push'](_0x5561c2['shift']());
        } catch (_0x41f957) {
            _0x5561c2['push'](_0x5561c2['shift']());
        }
    }
}(_0x58ae, 0x20f62));
const debug = require(_0x281ebb(0xef))('@cypress/react'), tryLoadWebpackConfig = require(_0x281ebb(0xf0)), {allowModuleSourceInPlace} = require(_0x281ebb(0xf1)), {addCypressToWebpackEslintRulesInPlace} = require('../utils/eslint-helpers'), {getTranspileFolders} = require('../utils/get-transpile-folders'), {addFolderToBabelLoaderTranspileInPlace} = require('../utils/babel-helpers');
module['exports'] = function findReactScriptsWebpackConfig(_0x2ea23b, {webpackConfigPath: _0x3ab1c0} = { 'webpackConfigPath': _0x281ebb(0xf2) }) {
    const _0x2e8fbd = _0x281ebb;
    process[_0x2e8fbd(0xf3)][_0x2e8fbd(0xf4)] = _0x2e8fbd(0xf5);
    const _0x3d5954 = tryLoadWebpackConfig(_0x3ab1c0);
    if (!_0x3d5954)
        throw new Error(_0x2e8fbd(0xf6));
    return addCypressToWebpackEslintRulesInPlace(_0x3d5954), getTranspileFolders(_0x2ea23b)[_0x2e8fbd(0xf7)](_0x136509 => {
        allowModuleSourceInPlace(_0x136509, _0x3d5954), addFolderToBabelLoaderTranspileInPlace(_0x136509, _0x3d5954);
    }), debug(_0x2e8fbd(0xf8), _0x3d5954), _0x3d5954;
};
