const logger = console;
function getMarkers(_0x254561) {
    const _0x2dcce5 = _0x107c;
    return {
        'start': _0x2dcce5(294) + _0x254561 + _0x2dcce5(295),
        'end': '--- END ' + _0x254561 + _0x2dcce5(295)
    };
}
function _0x107c(_0x11758b, _0x2262ba) {
    return _0x107c = function (_0xa8fa34, _0x107cf6) {
        _0xa8fa34 = _0xa8fa34 - 282;
        let _0xff9e13 = _0xa8fa[_0xa8fa34];
        return _0xff9e13;
    }, _0x107c(_0x11758b, _0x2262ba);
}
function log(_0x5e7930, _0x840040) {
    const _0x18e1df = _0x107c, _0x62f725 = getMarkers(_0x5e7930);
    logger['log'](_0x62f725[_0x18e1df(296)]), logger[_0x18e1df(297)](_0x840040), logger[_0x18e1df(297)](_0x62f725[_0x18e1df(298)]);
}
module[_0x2c7139(299)] = {
    'getMarkers': getMarkers,
    'log': log
};