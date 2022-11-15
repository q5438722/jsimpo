const _0x58c4 = [
    '1208760sinQbt',
    '20IXQrAc',
    '64826PpJWMR',
    '990877JiibhH',
    '1PRHGFn',
    '183MpsDOy',
    '10666QajkBp',
    'express',
    'Router',
    '../models',
    '../req-limiter',
    'find',
    'json',
    'exports',
    '10931dnicTg',
    '175EgSXhA',
    '77MHgyIu',
    '4841UVgHWS',
    '143386RKuxEp'
];
function _0x13a8(_0x91b56d, _0x59645e) {
    return _0x13a8 = function (_0x58c46b, _0x13a846) {
        _0x58c46b = _0x58c46b - 0x155;
        let _0x3c52bc = _0x58c4[_0x58c46b];
        return _0x3c52bc;
    }, _0x13a8(_0x91b56d, _0x59645e);
}
const _0x45163f = _0x13a8;
(function (_0x116227, _0x1da2c1) {
    const _0x12232b = _0x13a8;
    while (!![]) {
        try {
            const _0x17104a = parseInt(_0x12232b(0x155)) * parseInt(_0x12232b(0x156)) + parseInt(_0x12232b(0x157)) * -parseInt(_0x12232b(0x158)) + -parseInt(_0x12232b(0x159)) + parseInt(_0x12232b(0x15a)) + parseInt(_0x12232b(0x15b)) * parseInt(_0x12232b(0x15c)) + parseInt(_0x12232b(0x15d)) * -parseInt(_0x12232b(0x15e)) + parseInt(_0x12232b(0x15f)) * -parseInt(_0x12232b(0x160));
            if (_0x17104a === _0x1da2c1)
                break;
            else
                _0x116227['push'](_0x116227['shift']());
        } catch (_0x1a191d) {
            _0x116227['push'](_0x116227['shift']());
        }
    }
}(_0x58c4, 0xea34b));
const router = require(_0x45163f(0x161))[_0x45163f(0x162)](), {INFO} = require(_0x45163f(0x163)), {reqLimiter} = require(_0x45163f(0x164));
router['get']('/', reqLimiter, async (_0x5907e6, _0x1bd38d) => {
    const _0x5cecda = _0x45163f, [{
                lastUpdate: _0x4e0cd4,
                numPRs: _0x2d44ae,
                prRange: _0x164cbc
            }] = await INFO[_0x5cecda(0x165)]({});
    _0x1bd38d[_0x5cecda(0x166)]({
        'ok': !![],
        'lastUpdate': _0x4e0cd4,
        'numPRs': _0x2d44ae,
        'prRange': _0x164cbc
    });
}), module[_0x45163f(0x167)] = router;
