const logger = console;
function getMarkers(_0x44827e) {
    const _0x23e415 = _0x18ce;
    return {
        'start': _0x23e415(397) + _0x44827e + _0x23e415(398),
        'end': '--- END ' + _0x44827e + ' ---'
    };
}
function log(_0x213a17, _0x578b70) {
    const _0x3a8d91 = _0x18ce, _0x6c612 = getMarkers(_0x213a17);
    logger[_0x3a8d91(399)](_0x6c612['start']), logger[_0x3a8d91(399)](_0x578b70), logger[_0x3a8d91(399)](_0x6c612[_0x3a8d91(400)]);
}
module[_0x44ce4a(401)] = {
    'getMarkers': getMarkers,
    'log': log
};