const _0x12e9 = ['custom-entry', '1zveTQk', '283013IUhQEs', '275079MjvPNd', '214155nEGoDP', '88089MnuACf', '2kLHIWk', '407842rPpPLP', '317563BKNBRv', '1435686bVCmKo', '../../../', 'exports', 'production', './index.js', 'container', './entry'];
const _0x3b0b73 = _0x5265;

function _0x5265(_0x1c8b54, _0x44942f) {
    return _0x5265 = function (_0x50e153, _0x226204) {
        _0x50e153 = _0x50e153 - 314;
        const _0x16791c = _0x12e9[_0x50e153];

        return _0x16791c;
    }, _0x5265(_0x1c8b54, _0x44942f);
}
(function (_0x3802f5, _0x47589f) {
    const _0x575ced = _0x5265;

    while (true) {
        try {
            const _0x33ecbf = -parseInt(_0x575ced(0x13a)) * parseInt(_0x575ced(0x13b)) + parseInt(_0x575ced(0x13c)) + -parseInt(_0x575ced(0x13d)) + parseInt(_0x575ced(0x13e)) * -parseInt(_0x575ced(0x13f)) + -parseInt(_0x575ced(0x140)) + -parseInt(_0x575ced(0x141)) + parseInt(_0x575ced(0x142));

            if (_0x33ecbf === _0x47589f) break;else _0x3802f5.push(_0x3802f5.shift());
        } catch (_0xb875a7) {
            _0x3802f5.push(_0x3802f5.shift());
        }
    }
})(_0x12e9, 312014);

var { ModuleFederationPlugin } = require(_0x3b0b73(0x143)).container;

module[_0x3b0b73(0x144)] = {
    'mode': _0x3b0b73(0x145),
    'entry': _0x3b0b73(0x146),
    'output': { 'filename': '[name]_bundle.js' },
    'plugins': [new ModuleFederationPlugin({
        'name': _0x3b0b73(0x147),
        'exposes': {
            './entry': {
                'import': _0x3b0b73(0x148),
                'name': _0x3b0b73(0x149)
            }
        }
    })]
};
