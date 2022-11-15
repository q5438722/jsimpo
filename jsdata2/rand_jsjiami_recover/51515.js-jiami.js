'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] });
exports['default'] = _default;
var t = require('@babel/types');
function _default(_0x471495) {
    const _0x173cfe = _0x471495['params'];
    for (let _0x3832a1 = 0; _0x3832a1 < _0x173cfe['length']; _0x3832a1++) {
        const _0xf935c5 = _0x173cfe[_0x3832a1];
        if (t['isAssignmentPattern'](_0xf935c5) || t['isRestElement'](_0xf935c5)) {
            return _0x3832a1;
        }
    }
    return _0x173cfe['length'];
}