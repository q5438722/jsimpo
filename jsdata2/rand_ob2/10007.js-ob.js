const _0x2e58 = [
    'exports',
    'then',
    'instantiateStreaming',
    'arrayBuffer',
    'instantiate',
    '68287pTvjPV',
    '4eVXgzs',
    '14123DAbmWl',
    '27ezxOKF',
    '374258MTHljD',
    '496230xWZNSi',
    '4uzNTCM',
    '73765BTYgen',
    '161902KZgAHN',
    '15aTGmPz',
    '60556RMwAtc',
    '../cacheLoader'
];
const _0x3cfae0 = _0x1ca4;
(function (_0x22b28a, _0x163aca) {
    const _0x5d3516 = _0x1ca4;
    while (!![]) {
        try {
            const _0x5de2a4 = -parseInt(_0x5d3516(0x156)) * parseInt(_0x5d3516(0x157)) + -parseInt(_0x5d3516(0x158)) * parseInt(_0x5d3516(0x159)) + parseInt(_0x5d3516(0x15a)) + -parseInt(_0x5d3516(0x15b)) + parseInt(_0x5d3516(0x15c)) * parseInt(_0x5d3516(0x15d)) + -parseInt(_0x5d3516(0x15e)) + -parseInt(_0x5d3516(0x15f)) * -parseInt(_0x5d3516(0x160));
            if (_0x5de2a4 === _0x163aca)
                break;
            else
                _0x22b28a['push'](_0x22b28a['shift']());
        } catch (_0x211f28) {
            _0x22b28a['push'](_0x22b28a['shift']());
        }
    }
}(_0x2e58, 0x40b61));
const cacheLoader = require(_0x3cfae0(0x161));
function _0x1ca4(_0x38df41, _0x10e987) {
    return _0x1ca4 = function (_0x2e5870, _0x1ca41c) {
        _0x2e5870 = _0x2e5870 - 0x156;
        let _0x3b8e1f = _0x2e58[_0x2e5870];
        return _0x3b8e1f;
    }, _0x1ca4(_0x38df41, _0x10e987);
}
module[_0x3cfae0(0x162)] = cacheLoader(function loadWASMBundle(_0x5da5cc) {
    const _0xdf27d7 = _0x3cfae0;
    return fetch(_0x5da5cc)[_0xdf27d7(0x163)](function (_0x28fd4c) {
        const _0x3aa7fe = _0xdf27d7;
        return WebAssembly[_0x3aa7fe(0x164)] ? WebAssembly[_0x3aa7fe(0x164)](_0x28fd4c) : _0x28fd4c[_0x3aa7fe(0x165)]()['then'](function (_0xc623ff) {
            const _0x36ee14 = _0x3aa7fe;
            return WebAssembly[_0x36ee14(0x166)](_0xc623ff);
        });
    })['then'](function (_0x1584b5) {
        const _0x3c022e = _0xdf27d7;
        return _0x1584b5['instance'][_0x3c022e(0x162)];
    });
});
