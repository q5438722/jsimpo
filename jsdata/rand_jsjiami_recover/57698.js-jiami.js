'use strict';
const common = require('../common');
if (process['config']['variables']['arm_version'] === '7') {
    common['skip']('Too slow for armv7 bots');
}
let complete = 0;
(function runner() {
    if (++complete < 100000000)
        process['nextTick'](runner);
}());
setImmediate(function () {
    console['log']('ok');
});