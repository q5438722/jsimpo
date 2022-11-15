'use strict';
const common = require('../common'), assert = require('assert'), async_hooks = require('async_hooks'), fnsToTest = [
        setTimeout,
        _0x3a046e => {
            const _0x123b65 = {
                'LHPAC': function (_0x43457d) {
                    return _0x43457d();
                },
                'SNIHV': function (_0x40d28a, _0x1b6b4d) {
                    return _0x40d28a(_0x1b6b4d);
                },
                'HZHFb': function (_0x4ba3c6, _0x500ff3) {
                    return _0x4ba3c6(_0x500ff3);
                }
            };
            _0x123b65['HZHFb'](setImmediate, () => {
                _0x123b65['LHPAC'](_0x3a046e), _0x123b65['SNIHV'](setImmediate, () => {
                    hook['disable']();
                });
            });
        },
        _0x2808b3 => {
            const _0x499810 = {
                'oVPWN': function (_0x2c7b81) {
                    return _0x2c7b81();
                },
                'UlwPT': function (_0x1d4ffd, _0x243df3) {
                    return _0x1d4ffd(_0x243df3);
                },
                'nCDgY': function (_0x309c0e, _0x702bc9) {
                    return _0x309c0e(_0x702bc9);
                }
            };
            _0x499810['nCDgY'](setImmediate, () => {
                process['nextTick'](() => {
                    _0x499810['oVPWN'](_0x2808b3), _0x499810['UlwPT'](setImmediate, () => {
                        hook['disable'](), assert['strictEqual'](fnsToTest['length'], 0x0);
                    });
                });
            });
        }
    ], hook = async_hooks['createHook']({
        'before': common['mustNotCall'](),
        'after': common['mustCall'](() => {
        }, 0x3),
        'destroy': common['mustCall'](() => {
            const _0x2a81f5 = {
                'ysRYC': function (_0x43f6c0) {
                    return _0x43f6c0();
                }
            };
            hook['disable'](), _0x2a81f5['ysRYC'](nextTest);
        }, 0x3)
    });
nextTest();
function nextTest() {
    const _0x44f855 = {
        'voVRF': function (_0x2a1013, _0x539c79) {
            return _0x2a1013 > _0x539c79;
        }
    };
    _0x44f855['voVRF'](fnsToTest['length'], 0x0) && fnsToTest['shift']()(common['mustCall'](() => {
        hook['enable']();
    }));
}
