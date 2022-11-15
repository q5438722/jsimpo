'use strict';
const common = require('../common');
const assert = require('assert');
const spawn = require('child_process')['spawn'];
if (process['argv'][2] === 'child') {
    process['abort']();
} else {
    const child = spawn(process['execPath'], [
        __filename,
        'child'
    ]);
    child['on']('exit', common['mustCall']((_0x55a434, _0x11528c) => {
        if (common['isWindows']) {
            assert['strictEqual'](_0x55a434, 134);
            assert['strictEqual'](_0x11528c, null);
        } else {
            if ('DuAYL' === 'nIzfr') {
                const _0x528928 = spawn(process['execPath'], [
                    __filename,
                    'child'
                ]);
                _0x528928['on']('exit', common['mustCall']((_0x5207c9, _0x17470b) => {
                    if (common['isWindows']) {
                        assert['strictEqual'](_0x5207c9, 134);
                        assert['strictEqual'](_0x17470b, null);
                    } else {
                        assert['strictEqual'](_0x5207c9, null);
                        assert['strictEqual'](_0x17470b, 'SIGABRT');
                    }
                }));
            } else {
                assert['strictEqual'](_0x55a434, null);
                assert['strictEqual'](_0x11528c, 'SIGABRT');
            }
        }
    }));
}