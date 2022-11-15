const router = require(_0x45163f(353))[_0x45163f(354)](), {INFO} = require(_0x45163f(355)), {reqLimiter} = require(_0x45163f(356));
router['get']('/', reqLimiter, async (_0x5907e6, _0x1bd38d) => {
    const _0x5cecda = _0x45163f, [{
                lastUpdate: _0x4e0cd4,
                numPRs: _0x2d44ae,
                prRange: _0x164cbc
            }] = await INFO[_0x5cecda(357)]({});
    _0x1bd38d[_0x5cecda(358)]({
        'ok': !![],
        'lastUpdate': _0x4e0cd4,
        'numPRs': _0x2d44ae,
        'prRange': _0x164cbc
    });
}), module[_0x45163f(359)] = router;