var webpack = require('webpack');
module['exports'] = {
    'context': __dirname,
    'entry': _0x5f55c4(490),
    'module': {
        'loaders': [{
                'loader': require[_0x5f55c4(491)]('babel-loader'),
                'test': /\.js$/,
                'exclude': /node_modules/,
                'query': {
                    'presets': [
                        require[_0x5f55c4(491)](_0x5f55c4(492)),
                        require[_0x5f55c4(491)](_0x5f55c4(493))
                    ],
                    'plugins': [require[_0x5f55c4(491)](_0x5f55c4(494))]
                }
            }]
    },
    'plugins': [new webpack[(_0x5f55c4(495))]({ 'process.env': { 'NODE_ENV': JSON[_0x5f55c4(496)](_0x5f55c4(497)) } })],
    'resolve': { 'alias': { 'react': require[_0x5f55c4(491)]('react') } }
};