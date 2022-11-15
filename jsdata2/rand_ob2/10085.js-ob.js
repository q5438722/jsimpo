const _0x2126 = [
    'Expected\x20targets\x20to\x20be\x20a\x20string',
    '@babel/preset-env',
    '379596yINbBI',
    '229fSxOEP',
    '1481FhWVad',
    '370324jeLuCB',
    '362886kUhbJa',
    '987YwyIAT',
    '628reWXmp',
    '572803sWXHNb',
    '823089vqMqQV',
    'semver',
    '^2.0.0-beta.1',
    'exports',
    'caller',
    'name',
    'version',
    'parcel',
    'satisfies',
    'targets',
    'string'
];
const _0x5929d7 = _0x544e;
function _0x544e(_0x23963e, _0x35d400) {
    return _0x544e = function (_0x212658, _0x544eff) {
        _0x212658 = _0x212658 - 0x1e5;
        let _0x5e0f07 = _0x2126[_0x212658];
        return _0x5e0f07;
    }, _0x544e(_0x23963e, _0x35d400);
}
(function (_0x74593c, _0x143243) {
    const _0x483eb6 = _0x544e;
    while (!![]) {
        try {
            const _0x5a7979 = parseInt(_0x483eb6(0x1e5)) + parseInt(_0x483eb6(0x1e6)) * -parseInt(_0x483eb6(0x1e7)) + parseInt(_0x483eb6(0x1e8)) + -parseInt(_0x483eb6(0x1e9)) + -parseInt(_0x483eb6(0x1ea)) * -parseInt(_0x483eb6(0x1eb)) + parseInt(_0x483eb6(0x1ec)) + -parseInt(_0x483eb6(0x1ed));
            if (_0x5a7979 === _0x143243)
                break;
            else
                _0x74593c['push'](_0x74593c['shift']());
        } catch (_0x22a061) {
            _0x74593c['push'](_0x74593c['shift']());
        }
    }
}(_0x2126, 0x65e9b));
const semver = require(_0x5929d7(0x1ee)), COMPATIBLE_PARCEL_BABEL_TRANSFORMER_SEMVER = _0x5929d7(0x1ef);
module[_0x5929d7(0x1f0)] = function parcelBabelPresetEnv(_0x3516ea, _0x153e7b) {
    const _0x299812 = _0x5929d7;
    let _0x34cb66 = _0x3516ea[_0x299812(0x1f1)](_0x57eb09 => _0x57eb09 && _0x57eb09[_0x299812(0x1f2)]), _0x1d02d4 = _0x3516ea[_0x299812(0x1f1)](_0x4d9bee => _0x4d9bee && _0x4d9bee[_0x299812(0x1f3)]);
    if (_0x34cb66 === _0x299812(0x1f4) && typeof _0x1d02d4 === 'string' && semver[_0x299812(0x1f5)](_0x1d02d4, COMPATIBLE_PARCEL_BABEL_TRANSFORMER_SEMVER)) {
        let _0xf63890 = _0x3516ea[_0x299812(0x1f1)](_0x307bfa => _0x307bfa && _0x307bfa[_0x299812(0x1f6)]);
        if (typeof _0xf63890 !== _0x299812(0x1f7))
            throw new Error(_0x299812(0x1f8));
        return {
            'presets': [[
                    _0x299812(0x1f9),
                    {
                        'modules': ![],
                        'ignoreBrowserslistConfig': !![],
                        'targets': JSON['parse'](_0xf63890),
                        'useBuiltIns': 'entry',
                        'corejs': 0x3,
                        'shippedProposals': !![],
                        ..._0x153e7b
                    }
                ]]
        };
    }
    return {
        'presets': [[
                _0x299812(0x1f9),
                {
                    'shippedProposals': !![],
                    ..._0x153e7b
                }
            ]]
    };
};
