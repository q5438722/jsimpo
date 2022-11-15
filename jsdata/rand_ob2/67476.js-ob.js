const _0x4034 = [
    '339FULCua',
    '276432llhKhS',
    '54883yiGWTm',
    '501387filZGT',
    '1aZnRRH',
    '160901sTGOnA',
    '978526jXwvXd',
    '../../../',
    'exports',
    './index.js',
    '[name]_bundle.js',
    './entry',
    '524272UqrXUR',
    '787yYpXtu'
];
const _0x53ce96 = _0x3e27;
(function (_0x2eac16, _0x17cb54) {
    const _0x5980b9 = _0x3e27;
    while (!![]) {
        try {
            const _0x2c6287 = parseInt(_0x5980b9(0xc2)) + -parseInt(_0x5980b9(0xc3)) * -parseInt(_0x5980b9(0xc4)) + parseInt(_0x5980b9(0xc5)) + -parseInt(_0x5980b9(0xc6)) + -parseInt(_0x5980b9(0xc7)) * -parseInt(_0x5980b9(0xc8)) + -parseInt(_0x5980b9(0xc9)) + -parseInt(_0x5980b9(0xca));
            if (_0x2c6287 === _0x17cb54)
                break;
            else
                _0x2eac16['push'](_0x2eac16['shift']());
        } catch (_0x46015a) {
            _0x2eac16['push'](_0x2eac16['shift']());
        }
    }
}(_0x4034, 0x5b72e));
function _0x3e27(_0x548dea, _0x408295) {
    return _0x3e27 = function (_0x403432, _0x3e27dd) {
        _0x403432 = _0x403432 - 0xc2;
        let _0x23cdd8 = _0x4034[_0x403432];
        return _0x23cdd8;
    }, _0x3e27(_0x548dea, _0x408295);
}
const {ModuleFederationPlugin} = require(_0x53ce96(0xcb))['container'];
module[_0x53ce96(0xcc)] = {
    'mode': 'production',
    'entry': _0x53ce96(0xcd),
    'output': { 'filename': _0x53ce96(0xce) },
    'plugins': [new ModuleFederationPlugin({
            'name': 'container',
            'exposes': {
                './entry': {
                    'import': _0x53ce96(0xcf),
                    'name': 'custom-entry'
                }
            }
        })]
};
