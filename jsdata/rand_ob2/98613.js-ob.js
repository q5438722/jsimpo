var _0x18b0 = [
    'resolve',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/plugin-proposal-class-properties',
    'DefinePlugin',
    'stringify',
    'development',
    '795334PGuzUl',
    '703897QLupnS',
    '1SOfHhe',
    '1CjFCEM',
    '710293QMdxcX',
    '732773sfCfvE',
    '145201RniAih',
    '1ukkXie',
    '186881GGyItI',
    '892251tkczJn',
    './app.js'
];
function _0x2bd0(_0x1fa9ba, _0x2404d3) {
    return _0x2bd0 = function (_0x18b0d4, _0x2bd07b) {
        _0x18b0d4 = _0x18b0d4 - 0x1e0;
        var _0x38d5dd = _0x18b0[_0x18b0d4];
        return _0x38d5dd;
    }, _0x2bd0(_0x1fa9ba, _0x2404d3);
}
var _0x5f55c4 = _0x2bd0;
(function (_0x54dfd2, _0x513112) {
    var _0x2e0c01 = _0x2bd0;
    while (!![]) {
        try {
            var _0x4df61e = -parseInt(_0x2e0c01(0x1e0)) + -parseInt(_0x2e0c01(0x1e1)) * -parseInt(_0x2e0c01(0x1e2)) + parseInt(_0x2e0c01(0x1e3)) * -parseInt(_0x2e0c01(0x1e4)) + parseInt(_0x2e0c01(0x1e5)) + -parseInt(_0x2e0c01(0x1e6)) + parseInt(_0x2e0c01(0x1e7)) * -parseInt(_0x2e0c01(0x1e8)) + parseInt(_0x2e0c01(0x1e9));
            if (_0x4df61e === _0x513112)
                break;
            else
                _0x54dfd2['push'](_0x54dfd2['shift']());
        } catch (_0x55bd04) {
            _0x54dfd2['push'](_0x54dfd2['shift']());
        }
    }
}(_0x18b0, 0x77ecc));
var webpack = require('webpack');
module['exports'] = {
    'context': __dirname,
    'entry': _0x5f55c4(0x1ea),
    'module': {
        'loaders': [{
                'loader': require[_0x5f55c4(0x1eb)]('babel-loader'),
                'test': /\.js$/,
                'exclude': /node_modules/,
                'query': {
                    'presets': [
                        require[_0x5f55c4(0x1eb)](_0x5f55c4(0x1ec)),
                        require[_0x5f55c4(0x1eb)](_0x5f55c4(0x1ed))
                    ],
                    'plugins': [require[_0x5f55c4(0x1eb)](_0x5f55c4(0x1ee))]
                }
            }]
    },
    'plugins': [new webpack[(_0x5f55c4(0x1ef))]({ 'process.env': { 'NODE_ENV': JSON[_0x5f55c4(0x1f0)](_0x5f55c4(0x1f1)) } })],
    'resolve': { 'alias': { 'react': require[_0x5f55c4(0x1eb)]('react') } }
};
