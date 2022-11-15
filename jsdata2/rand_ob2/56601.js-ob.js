'use strict';
const _0x5a65 = [
    '../common',
    'assert',
    'async_hooks',
    'disable',
    'nextTick',
    'strictEqual',
    'length',
    'mustNotCall',
    'mustCall',
    '1pOAPFp',
    '403196aJYPoK',
    '1372293jFwxhX',
    '1092597tPEORF',
    '20702piATGV',
    '158CqROfN',
    '6133wRuJhl',
    '982981PQJrun',
    '2781121zBFuHn'
];
const _0x1ec618 = _0x55d8;
(function (_0x5ac674, _0xd1623a) {
    const _0x58b6cf = _0x55d8;
    while (!![]) {
        try {
            const _0x2baf7e = parseInt(_0x58b6cf(0xbf)) * parseInt(_0x58b6cf(0xc0)) + -parseInt(_0x58b6cf(0xc1)) + -parseInt(_0x58b6cf(0xc2)) + parseInt(_0x58b6cf(0xc3)) + parseInt(_0x58b6cf(0xc4)) * -parseInt(_0x58b6cf(0xc5)) + parseInt(_0x58b6cf(0xc6)) + parseInt(_0x58b6cf(0xc7));
            if (_0x2baf7e === _0xd1623a)
                break;
            else
                _0x5ac674['push'](_0x5ac674['shift']());
        } catch (_0x276a17) {
            _0x5ac674['push'](_0x5ac674['shift']());
        }
    }
}(_0x5a65, 0xb81b0));
const common = require(_0x1ec618(0xc8)), assert = require(_0x1ec618(0xc9)), async_hooks = require(_0x1ec618(0xca)), fnsToTest = [
        setTimeout,
        _0x11751d => {
            setImmediate(() => {
                _0x11751d(), setImmediate(() => {
                    const _0x32761b = _0x55d8;
                    hook[_0x32761b(0xcb)]();
                });
            });
        },
        _0x27f29f => {
            setImmediate(() => {
                const _0x1f6db3 = _0x55d8;
                process[_0x1f6db3(0xcc)](() => {
                    _0x27f29f(), setImmediate(() => {
                        const _0x3cd1ef = _0x55d8;
                        hook[_0x3cd1ef(0xcb)](), assert[_0x3cd1ef(0xcd)](fnsToTest[_0x3cd1ef(0xce)], 0x0);
                    });
                });
            });
        }
    ], hook = async_hooks['createHook']({
        'before': common[_0x1ec618(0xcf)](),
        'after': common['mustCall'](() => {
        }, 0x3),
        'destroy': common['mustCall'](() => {
            const _0x3c0ac8 = _0x1ec618;
            hook[_0x3c0ac8(0xcb)](), nextTest();
        }, 0x3)
    });
nextTest();
function _0x55d8(_0x248ea0, _0x234ac8) {
    return _0x55d8 = function (_0x5a65d9, _0x55d8ae) {
        _0x5a65d9 = _0x5a65d9 - 0xbf;
        let _0x2aec09 = _0x5a65[_0x5a65d9];
        return _0x2aec09;
    }, _0x55d8(_0x248ea0, _0x234ac8);
}
function nextTest() {
    const _0x228f0a = _0x1ec618;
    fnsToTest[_0x228f0a(0xce)] > 0x0 && fnsToTest['shift']()(common[_0x228f0a(0xd0)](() => {
        hook['enable']();
    }));
}
