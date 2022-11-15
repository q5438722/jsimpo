var _0x22d5 = [
    '1929JFhJcE',
    '38IxLDpA',
    '32537ufkGsv',
    '14LjrQFL',
    'webpack',
    'exports',
    'resolve',
    'babel-loader',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/plugin-proposal-class-properties',
    'DefinePlugin',
    'stringify',
    'development',
    '66811eOURUA',
    '4772FXgVmZ',
    '68pjPZkw',
    '354498clJlMa',
    '114483nOWZiR',
    '285529YDZxzq'
];
var _0x49f19c = _0x4f74;
function _0x4f74(_0x4f2eaf, _0x251a9c) {
    return _0x4f74 = function (_0x12ff94, _0xd51cfb) {
        _0x12ff94 = _0x12ff94 - (-0x1c0a + -0x1ce * 0x2 + -0x8 * -0x428);
        var _0x36bf70 = _0x22d5[_0x12ff94];
        return _0x36bf70;
    }, _0x4f74(_0x4f2eaf, _0x251a9c);
}
(function (_0x32cabf, _0x1232dc) {
    var _0x52ee4d = _0x4f74;
    while (!![]) {
        try {
            var _0x4790bc = parseInt(_0x52ee4d(0x19a)) + parseInt(_0x52ee4d(0x19b)) * -parseInt(_0x52ee4d(0x19c)) + parseInt(_0x52ee4d(0x19d)) + -parseInt(_0x52ee4d(0x19e)) + -parseInt(_0x52ee4d(0x19f)) + -parseInt(_0x52ee4d(0x1a0)) * -parseInt(_0x52ee4d(0x1a1)) + parseInt(_0x52ee4d(0x1a2)) * parseInt(_0x52ee4d(0x1a3));
            if (_0x4790bc === _0x1232dc)
                break;
            else
                _0x32cabf['push'](_0x32cabf['shift']());
        } catch (_0x3fad6d) {
            _0x32cabf['push'](_0x32cabf['shift']());
        }
    }
}(_0x22d5, -0x3e35f + 0x5cfe4 + 0x184d0));
var webpack = require(_0x49f19c(0x1a4));
module[_0x49f19c(0x1a5)] = {
    'context': __dirname,
    'entry': './app.js',
    'module': {
        'loaders': [{
                'loader': require[_0x49f19c(0x1a6)](_0x49f19c(0x1a7)),
                'test': /\.js$/,
                'exclude': /node_modules/,
                'query': {
                    'presets': [
                        require[_0x49f19c(0x1a6)](_0x49f19c(0x1a8)),
                        require[_0x49f19c(0x1a6)](_0x49f19c(0x1a9))
                    ],
                    'plugins': [require[_0x49f19c(0x1a6)](_0x49f19c(0x1aa))]
                }
            }]
    },
    'plugins': [new webpack[(_0x49f19c(0x1ab))]({ 'process.env': { 'NODE_ENV': JSON[_0x49f19c(0x1ac)](_0x49f19c(0x1ad)) } })],
    'resolve': { 'alias': { 'react': require[_0x49f19c(0x1a6)]('react') } }
};
