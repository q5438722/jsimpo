const _0x36f8 = [
    '../utils/get-transpile-folders',
    '../utils/babel-helpers',
    'exports',
    'react-scripts/config/webpack.config',
    'env',
    'FAST_REFRESH',
    'false',
    '⚠️\x20Could\x20not\x20find\x20Webpack\x20options\x20for\x20react-scripts.\x20Make\x20sure\x20that\x20you\x20have\x20react-scripts\x20module\x20available.',
    'forEach',
    'resolved\x20webpack\x20config:\x20%o',
    '379291TMwzZr',
    '269109RUrKzr',
    '3aUkduD',
    '267501wsYvqJ',
    '700035aRFdJr',
    '1146538aOMwUY',
    '2724KzYwxt',
    '353VbmmlP',
    '1hyHSja',
    '2712316EgSOGR',
    'debug',
    '@cypress/react',
    '../utils/tryLoadWebpackConfig',
    '../utils/webpack-helpers',
    '../utils/eslint-helpers'
];
const _0x26f180 = _0x3c15;
function _0x3c15(_0x42d554, _0x4d1e55) {
    return _0x3c15 = function (_0x36f87d, _0x3c15e9) {
        _0x36f87d = _0x36f87d - 0x6a;
        let _0x1fcac1 = _0x36f8[_0x36f87d];
        return _0x1fcac1;
    }, _0x3c15(_0x42d554, _0x4d1e55);
}
(function (_0x52a1cf, _0x3a2a97) {
    const _0x87ed14 = _0x3c15;
    while (!![]) {
        try {
            const _0x3b1e92 = -parseInt(_0x87ed14(0x6a)) + -parseInt(_0x87ed14(0x6b)) * -parseInt(_0x87ed14(0x6c)) + parseInt(_0x87ed14(0x6d)) + -parseInt(_0x87ed14(0x6e)) + -parseInt(_0x87ed14(0x6f)) + -parseInt(_0x87ed14(0x70)) * parseInt(_0x87ed14(0x71)) + -parseInt(_0x87ed14(0x72)) * -parseInt(_0x87ed14(0x73));
            if (_0x3b1e92 === _0x3a2a97)
                break;
            else
                _0x52a1cf['push'](_0x52a1cf['shift']());
        } catch (_0x287539) {
            _0x52a1cf['push'](_0x52a1cf['shift']());
        }
    }
}(_0x36f8, 0x9269c));
const debug = require(_0x26f180(0x74))(_0x26f180(0x75)), tryLoadWebpackConfig = require(_0x26f180(0x76)), {allowModuleSourceInPlace} = require(_0x26f180(0x77)), {addCypressToWebpackEslintRulesInPlace} = require(_0x26f180(0x78)), {getTranspileFolders} = require(_0x26f180(0x79)), {addFolderToBabelLoaderTranspileInPlace} = require(_0x26f180(0x7a));
module[_0x26f180(0x7b)] = function findReactScriptsWebpackConfig(_0x4bdeb6, {webpackConfigPath: _0x38edd6} = { 'webpackConfigPath': _0x26f180(0x7c) }) {
    const _0x1a9b8f = _0x26f180;
    process[_0x1a9b8f(0x7d)][_0x1a9b8f(0x7e)] = _0x1a9b8f(0x7f);
    const _0x54cfdb = tryLoadWebpackConfig(_0x38edd6);
    if (!_0x54cfdb)
        throw new Error(_0x1a9b8f(0x80));
    return addCypressToWebpackEslintRulesInPlace(_0x54cfdb), getTranspileFolders(_0x4bdeb6)[_0x1a9b8f(0x81)](_0x33be8c => {
        allowModuleSourceInPlace(_0x33be8c, _0x54cfdb), addFolderToBabelLoaderTranspileInPlace(_0x33be8c, _0x54cfdb);
    }), debug(_0x1a9b8f(0x82), _0x54cfdb), _0x54cfdb;
};
