'use strict';
const logger = console;
function getMarkers(_0x16908c) {
    return {
        'start': '--- START ' + _0x16908c + ' ---',
        'end': '--- END ' + _0x16908c + ' ---'
    };
}
function log(_0x390ce9, _0x369ce6) {
    const _0x4db0a7 = getMarkers(_0x390ce9);
    logger['log'](_0x4db0a7['start']);
    logger['log'](_0x369ce6);
    logger['log'](_0x4db0a7['end']);
}
module['exports'] = {
    'getMarkers': getMarkers,
    'log': log
};