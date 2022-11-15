const router = require(_0x46ff13(242))[_0x46ff13(243)](), {INFO} = require('../models'), {reqLimiter} = require(_0x46ff13(244));
function _0xcfce(_0xf31ee0, _0x301301) {
    return _0xcfce = function (_0x300b2f, _0x426884) {
        _0x300b2f = _0x300b2f - (3255 + -1813 + -7 * 173);
        let _0x382cda = _0x1f20[_0x300b2f];
        return _0x382cda;
    }, _0xcfce(_0xf31ee0, _0x301301);
}
router['get']('/', reqLimiter, async (_0x2bd1d2, _0x2bdfe7) => {
    const _0x39191a = _0x46ff13, [{
                lastUpdate: _0x9612bb,
                numPRs: _0x45e290,
                prRange: _0x3e0f2d
            }] = await INFO[_0x39191a(245)]({});
    _0x2bdfe7['json']({
        'ok': !![],
        'lastUpdate': _0x9612bb,
        'numPRs': _0x45e290,
        'prRange': _0x3e0f2d
    });
}), module[_0x46ff13(246)] = router;