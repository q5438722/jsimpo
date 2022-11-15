const {ModuleFederationPlugin} = require(_0x3b0b73(323))['container'];
module[_0x3b0b73(324)] = {
    'mode': _0x3b0b73(325),
    'entry': _0x3b0b73(326),
    'output': { 'filename': '[name]_bundle.js' },
    'plugins': [new ModuleFederationPlugin({
            'name': _0x3b0b73(327),
            'exposes': {
                './entry': {
                    'import': _0x3b0b73(328),
                    'name': _0x3b0b73(329)
                }
            }
        })]
};