const _0x1750 = [
    '771186UtaIid',
    '16626AxgRLZ',
    '26480ibWGSD',
    '251VNfrKg',
    '2519PwbuFh',
    '3TIrIbw',
    '25486LdOtqu',
    '186315FIRXfd',
    '906965nOEajf',
    'boolean',
    'The\x20\x27runtime\x27\x20option\x20must\x20be\x20boolean',
    'transform-named-capturing-groups-regex',
    'namedCaptureGroups'
];
(function (_0x233dd3, _0x165b98) {
    const _0x3eeda7 = _0x2669;
    while (!![]) {
        try {
            const _0x2d735f = parseInt(_0x3eeda7(0x64)) + -parseInt(_0x3eeda7(0x65)) + parseInt(_0x3eeda7(0x66)) + -parseInt(_0x3eeda7(0x67)) * -parseInt(_0x3eeda7(0x68)) + -parseInt(_0x3eeda7(0x69)) * -parseInt(_0x3eeda7(0x6a)) + -parseInt(_0x3eeda7(0x6b)) + -parseInt(_0x3eeda7(0x6c));
            if (_0x2d735f === _0x165b98)
                break;
            else
                _0x233dd3['push'](_0x233dd3['shift']());
        } catch (_0x2d87f2) {
            _0x233dd3['push'](_0x233dd3['shift']());
        }
    }
}(_0x1750, 0x60cc7));
function _0x2669(_0x595661, _0x1178e6) {
    return _0x2669 = function (_0x1750f1, _0x266929) {
        _0x1750f1 = _0x1750f1 - 0x64;
        let _0x31efb1 = _0x1750[_0x1750f1];
        return _0x31efb1;
    }, _0x2669(_0x595661, _0x1178e6);
}
import { createRegExpFeaturePlugin } from '@babel/helper-create-regexp-features-plugin';
export default function (core, options) {
    const _0x4473f5 = _0x2669, {
            runtime = !![]
        } = options;
    if (typeof runtime !== _0x4473f5(0x6d))
        throw new Error(_0x4473f5(0x6e));
    return createRegExpFeaturePlugin({
        'name': _0x4473f5(0x6f),
        'feature': _0x4473f5(0x70),
        'options': { 'runtime': runtime }
    });
}
