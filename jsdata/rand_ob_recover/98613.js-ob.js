var webpack = require(_0x49f19c(420));
module[_0x49f19c(421)] = {
    'context': __dirname,
    'entry': './app.js',
    'module': {
        'loaders': [{
                'loader': require[_0x49f19c(422)](_0x49f19c(423)),
                'test': /\.js$/,
                'exclude': /node_modules/,
                'query': {
                    'presets': [
                        require[_0x49f19c(422)](_0x49f19c(424)),
                        require[_0x49f19c(422)](_0x49f19c(425))
                    ],
                    'plugins': [require[_0x49f19c(422)](_0x49f19c(426))]
                }
            }]
    },
    'plugins': [new webpack[(_0x49f19c(427))]({ 'process.env': { 'NODE_ENV': JSON[_0x49f19c(428)](_0x49f19c(429)) } })],
    'resolve': { 'alias': { 'react': require[_0x49f19c(422)]('react') } }
};