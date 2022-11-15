'use strict';
const common = require('../common'), assert = require('assert'), async_hooks = require('async_hooks'), fnsToTest = [
        setTimeout,
        _0x2722c9 => {
            setImmediate(() => {
                _0x2722c9(), setImmediate(() => {
                    hook['disable']();
                });
            });
        },
        _0x51988f => {
            setImmediate(() => {
                process['nextTick'](() => {
                    _0x51988f(), setImmediate(() => {
                        hook['disable'](), assert['strictEqual'](fnsToTest['length'], 0x1f57 * 0x1 + 0x1 * -0x1e71 + -0xe6);
                    });
                });
            });
        }
    ], hook = async_hooks['createHook']({
        'before': common['mustNotCall'](),
        'after': common['mustCall'](() => {
        }, -0x155f * -0x1 + -0xeb6 + 0x25 * -0x2e),
        'destroy': common['mustCall'](() => {
            hook['disable'](), nextTest();
        }, -0xa8c + -0xbb6 * -0x1 + 0x5 * -0x3b)
    });
nextTest();
function nextTest() {
    fnsToTest['length'] > -0x23f2 + -0x1ba8 + 0x3f9a && fnsToTest['shift']()(common['mustCall'](() => {
        hook['enable']();
    }));
}
