'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['default'] = _default;
var t = require('@babel/types');
function _default(_0x1862cd) {
    const _0x4ccff6 = _0x1862cd['params'];
    for (let _0x56cf5d = -0x30f * 0xc + 0xa5d + -0x1 * -0x1a57; _0x56cf5d < _0x4ccff6['length']; _0x56cf5d++) {
        const _0x471309 = _0x4ccff6[_0x56cf5d];
        if (t['isAssignmentPattern'](_0x471309) || t['isRestElement'](_0x471309))
            return _0x56cf5d;
    }
    return _0x4ccff6['length'];
}
