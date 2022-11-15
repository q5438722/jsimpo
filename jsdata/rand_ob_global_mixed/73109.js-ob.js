const _0x1f20 = [
    '173951YYSDme',
    '6usRQTj',
    '1249997RzVgTK',
    '1108321gzhfWF',
    'express',
    'Router',
    '../req-limiter',
    'find',
    'exports',
    '14456CMIXjd',
    '71NKGsoX',
    '5xowUDj',
    '79812ieMkGF',
    '927197WeYgeU',
    '1IIYSqx',
    '1177319sCMCrE'
];
const _0x46ff13 = _0xcfce;
(function (_0x5b1ce3, _0x5509af) {
    const _0x4a7220 = _0xcfce;
    while (!![]) {
        try {
            const _0x2adebd = -parseInt(_0x4a7220(0xe7)) * parseInt(_0x4a7220(0xe8)) + -parseInt(_0x4a7220(0xe9)) * -parseInt(_0x4a7220(0xea)) + -parseInt(_0x4a7220(0xeb)) + -parseInt(_0x4a7220(0xec)) * parseInt(_0x4a7220(0xed)) + -parseInt(_0x4a7220(0xee)) * -parseInt(_0x4a7220(0xef)) + parseInt(_0x4a7220(0xf0)) + parseInt(_0x4a7220(0xf1));
            if (_0x2adebd === _0x5509af)
                break;
            else
                _0x5b1ce3['push'](_0x5b1ce3['shift']());
        } catch (_0x2cc111) {
            _0x5b1ce3['push'](_0x5b1ce3['shift']());
        }
    }
}(_0x1f20, 0x114a7b + -0x31c09 * -0x1 + -0xa2c94));
const router = require(_0x46ff13(0xf2))[_0x46ff13(0xf3)](), {INFO} = require('../models'), {reqLimiter} = require(_0x46ff13(0xf4));
function _0xcfce(_0xf31ee0, _0x301301) {
    return _0xcfce = function (_0x300b2f, _0x426884) {
        _0x300b2f = _0x300b2f - (0xcb7 + -0x715 + -0x7 * 0xad);
        let _0x382cda = _0x1f20[_0x300b2f];
        return _0x382cda;
    }, _0xcfce(_0xf31ee0, _0x301301);
}
router['get']('/', reqLimiter, async (_0x2bd1d2, _0x2bdfe7) => {
    const _0x39191a = _0x46ff13, [{
                lastUpdate: _0x9612bb,
                numPRs: _0x45e290,
                prRange: _0x3e0f2d
            }] = await INFO[_0x39191a(0xf5)]({});
    _0x2bdfe7['json']({
        'ok': !![],
        'lastUpdate': _0x9612bb,
        'numPRs': _0x45e290,
        'prRange': _0x3e0f2d
    });
}), module[_0x46ff13(0xf6)] = router;
