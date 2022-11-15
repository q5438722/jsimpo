'use strict';
const common = require('../common');
process['config']['variables']['arm_version'] === '7' && common['skip']('Too\x20slow\x20for\x20armv7\x20bots');
let complete = 0x0;
(function runner() {
    const _0x35fe8e = {
        'PQRhW': function (_0x310a5b, _0x1c3351) {
            return _0x310a5b < _0x1c3351;
        }
    };
    if (_0x35fe8e['PQRhW'](++complete, 0x5f5e100))
        process['nextTick'](runner);
}(), setImmediate(function () {
    console['log']('ok');
}));
