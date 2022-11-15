'use strict';
const _0x2356 = [
    'assert',
    'async_hooks',
    'JBRVs',
    'disable',
    'VqpQK',
    'nextTick',
    'yBEyI',
    'strictEqual',
    'createHook',
    'mustCall',
    'RZEaU',
    'length',
    'shift',
    'enable',
    '44954hDWGmR',
    '631997vKAlAe',
    '839710wPaIYW',
    '191cAviiZ',
    '3858FwUJmt',
    '51694VrevkN',
    '3zukKcf',
    '16LEYFjs',
    '13364fWLcTw',
    '3224820vgLJek',
    '../common'
];
const _0x280e3e = _0x2d47;
(function (_0x55c152, _0x53a6b0) {
    const _0x3ff7b7 = _0x2d47;
    while (!![]) {
        try {
            const _0x201583 = -parseInt(_0x3ff7b7(0xe8)) + -parseInt(_0x3ff7b7(0xe9)) + -parseInt(_0x3ff7b7(0xea)) + -parseInt(_0x3ff7b7(0xeb)) * parseInt(_0x3ff7b7(0xec)) + parseInt(_0x3ff7b7(0xed)) * -parseInt(_0x3ff7b7(0xee)) + parseInt(_0x3ff7b7(0xef)) * -parseInt(_0x3ff7b7(0xf0)) + parseInt(_0x3ff7b7(0xf1));
            if (_0x201583 === _0x53a6b0)
                break;
            else
                _0x55c152['push'](_0x55c152['shift']());
        } catch (_0x392b41) {
            _0x55c152['push'](_0x55c152['shift']());
        }
    }
}(_0x2356, 0x1 * 0x6867b + 0x1 * -0x9779e + 0xc222a * 0x1));
function _0x2d47(_0x483a76, _0x487464) {
    return _0x2d47 = function (_0x44afca, _0x21b60f) {
        _0x44afca = _0x44afca - (0x2703 + 0x20a1 + 0x5e5 * -0xc);
        let _0x5064a9 = _0x2356[_0x44afca];
        return _0x5064a9;
    }, _0x2d47(_0x483a76, _0x487464);
}
const common = require(_0x280e3e(0xf2)), assert = require(_0x280e3e(0xf3)), async_hooks = require(_0x280e3e(0xf4)), fnsToTest = [
        setTimeout,
        _0x88e16c => {
            const _0x4cc337 = _0x280e3e, _0x44af45 = {
                    'JBRVs': function (_0x502715, _0x5b738a) {
                        return _0x502715(_0x5b738a);
                    }
                };
            _0x44af45[_0x4cc337(0xf5)](setImmediate, () => {
                _0x88e16c(), setImmediate(() => {
                    const _0x2c38b7 = _0x2d47;
                    hook[_0x2c38b7(0xf6)]();
                });
            });
        },
        _0x494003 => {
            const _0xe8550e = _0x280e3e, _0x20fd8f = {
                    'yBEyI': function (_0x3a1331) {
                        return _0x3a1331();
                    },
                    'VqpQK': function (_0x5c09ad, _0x1e7a0b) {
                        return _0x5c09ad(_0x1e7a0b);
                    }
                };
            _0x20fd8f[_0xe8550e(0xf7)](setImmediate, () => {
                const _0x5734b1 = _0xe8550e;
                process[_0x5734b1(0xf8)](() => {
                    const _0xcd63aa = _0x5734b1;
                    _0x20fd8f[_0xcd63aa(0xf9)](_0x494003), _0x20fd8f['VqpQK'](setImmediate, () => {
                        const _0x28ae0f = _0xcd63aa;
                        hook['disable'](), assert[_0x28ae0f(0xfa)](fnsToTest['length'], 0x15cf + -0x8 * -0x293 + -0x1 * 0x2a67);
                    });
                });
            });
        }
    ], hook = async_hooks[_0x280e3e(0xfb)]({
        'before': common['mustNotCall'](),
        'after': common[_0x280e3e(0xfc)](() => {
        }, -0x1a62 + -0xdd4 + -0x1 * -0x2839),
        'destroy': common[_0x280e3e(0xfc)](() => {
            const _0x39b078 = _0x280e3e, _0x191844 = {
                    'RZEaU': function (_0x3b4b46) {
                        return _0x3b4b46();
                    }
                };
            hook[_0x39b078(0xf6)](), _0x191844[_0x39b078(0xfd)](nextTest);
        }, 0x3 * 0x503 + -0x1 * 0x185 + -0xd81)
    });
nextTest();
function nextTest() {
    const _0x596108 = _0x280e3e;
    fnsToTest[_0x596108(0xfe)] > 0xc4e + -0x15bd + 0xa1 * 0xf && fnsToTest[_0x596108(0xff)]()(common[_0x596108(0xfc)](() => {
        const _0x2585a8 = _0x596108;
        hook[_0x2585a8(0x100)]();
    }));
}
