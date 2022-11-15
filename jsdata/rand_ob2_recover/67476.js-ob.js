function _0x3e27(_0x548dea, _0x408295) {
    return _0x3e27 = function (_0x403432, _0x3e27dd) {
        _0x403432 = _0x403432 - 194;
        let _0x23cdd8 = _0x4034[_0x403432];
        return _0x23cdd8;
    }, _0x3e27(_0x548dea, _0x408295);
}
const {ModuleFederationPlugin} = require(_0x53ce96(203))['container'];
module[_0x53ce96(204)] = {
    'mode': 'production',
    'entry': _0x53ce96(205),
    'output': { 'filename': _0x53ce96(206) },
    'plugins': [new ModuleFederationPlugin({
            'name': 'container',
            'exposes': {
                './entry': {
                    'import': _0x53ce96(207),
                    'name': 'custom-entry'
                }
            }
        })]
};