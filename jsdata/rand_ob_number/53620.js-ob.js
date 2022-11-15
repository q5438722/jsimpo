'use strict';
const common = require('../common'), assert = require('assert'), spawn = require('child_process')['spawn'];
if (process['argv'][0xb * -0x59 + 0x43 * 0xd + 0x6e] === 'child')
    process['abort']();
else {
    const child = spawn(process['execPath'], [
        __filename,
        'child'
    ]);
    child['on']('exit', common['mustCall']((_0x59c90e, _0x3b6c3b) => {
        common['isWindows'] ? (assert['strictEqual'](_0x59c90e, 0xc * 0x223 + 0x141b + 0x2d39 * -0x1), assert['strictEqual'](_0x3b6c3b, null)) : (assert['strictEqual'](_0x59c90e, null), assert['strictEqual'](_0x3b6c3b, 'SIGABRT'));
    }));
}
