'use strict';
const _0xa8fa = [
    '267979KjXKwK',
    '271972pbniHP',
    '1syWeEV',
    '1000028rgSnoy',
    '---\x20START\x20',
    '\x20---',
    'start',
    'log',
    'end',
    'exports',
    '234231TSRtFD',
    '1cExAYz',
    '14083HyYNbD',
    '18nHCyoJ',
    '1ogDhCB',
    '72379yGXnDn',
    '3161XONoOM',
    '113nBoTjQ'
];
const _0x2c7139 = _0x107c;
(function (_0x15aad5, _0x62af77) {
    const _0x5b1a3c = _0x107c;
    while (!![]) {
        try {
            const _0x5ddc90 = parseInt(_0x5b1a3c(0x11a)) * -parseInt(_0x5b1a3c(0x11b)) + -parseInt(_0x5b1a3c(0x11c)) * -parseInt(_0x5b1a3c(0x11d)) + -parseInt(_0x5b1a3c(0x11e)) * -parseInt(_0x5b1a3c(0x11f)) + -parseInt(_0x5b1a3c(0x120)) * parseInt(_0x5b1a3c(0x121)) + -parseInt(_0x5b1a3c(0x122)) + -parseInt(_0x5b1a3c(0x123)) * parseInt(_0x5b1a3c(0x124)) + parseInt(_0x5b1a3c(0x125));
            if (_0x5ddc90 === _0x62af77)
                break;
            else
                _0x15aad5['push'](_0x15aad5['shift']());
        } catch (_0x433db4) {
            _0x15aad5['push'](_0x15aad5['shift']());
        }
    }
}(_0xa8fa, 0x2f7de));
const logger = console;
function getMarkers(_0x254561) {
    const _0x2dcce5 = _0x107c;
    return {
        'start': _0x2dcce5(0x126) + _0x254561 + _0x2dcce5(0x127),
        'end': '---\x20END\x20' + _0x254561 + _0x2dcce5(0x127)
    };
}
function _0x107c(_0x11758b, _0x2262ba) {
    return _0x107c = function (_0xa8fa34, _0x107cf6) {
        _0xa8fa34 = _0xa8fa34 - 0x11a;
        let _0xff9e13 = _0xa8fa[_0xa8fa34];
        return _0xff9e13;
    }, _0x107c(_0x11758b, _0x2262ba);
}
function log(_0x5e7930, _0x840040) {
    const _0x18e1df = _0x107c, _0x62f725 = getMarkers(_0x5e7930);
    logger['log'](_0x62f725[_0x18e1df(0x128)]), logger[_0x18e1df(0x129)](_0x840040), logger[_0x18e1df(0x129)](_0x62f725[_0x18e1df(0x12a)]);
}
module[_0x2c7139(0x12b)] = {
    'getMarkers': getMarkers,
    'log': log
};
