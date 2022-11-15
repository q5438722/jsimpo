'use strict';
const _0x147d = [
    'ncsGO',
    'platformTimeout',
    'exit',
    'mustCall',
    'strictEqual',
    'XEpZl',
    'domain',
    'create',
    'error',
    '2|3|5|0|1|4',
    'log',
    'run',
    '297609OduWgH',
    '570719ilrwkU',
    '1eOWnon',
    '10nxwzBS',
    '86377YVvlEZ',
    '572520BAJyVn',
    '1382511iIYPRb',
    '1mCHxJC',
    '757487VPkSjU',
    '1nFcDGI',
    '1963326VjjdlW',
    '../common',
    'argv',
    'child_process',
    'spawn',
    'child',
    'child\x20is\x20hung'
];
const _0x1fbc30 = _0x4012;
(function (_0x3d0be1, _0x12471b) {
    const _0x1020ab = _0x4012;
    while (!![]) {
        try {
            const _0x679f63 = parseInt(_0x1020ab(0x1bf)) + parseInt(_0x1020ab(0x1c0)) * parseInt(_0x1020ab(0x1c1)) + parseInt(_0x1020ab(0x1c2)) * -parseInt(_0x1020ab(0x1c3)) + -parseInt(_0x1020ab(0x1c4)) + parseInt(_0x1020ab(0x1c5)) * -parseInt(_0x1020ab(0x1c6)) + parseInt(_0x1020ab(0x1c7)) + parseInt(_0x1020ab(0x1c8)) * parseInt(_0x1020ab(0x1c9));
            if (_0x679f63 === _0x12471b)
                break;
            else
                _0x3d0be1['push'](_0x3d0be1['shift']());
        } catch (_0x545ab2) {
            _0x3d0be1['push'](_0x3d0be1['shift']());
        }
    }
}(_0x147d, -0x93b0f + -0x281 * -0x529 + 0x40845 * 0x2));
function _0x4012(_0x2f4391, _0xd8c15b) {
    return _0x4012 = function (_0x5e42d0, _0x189e06) {
        _0x5e42d0 = _0x5e42d0 - (-0xc22 + -0x1 * -0x62 + 0xd7f);
        let _0x8ef86a = _0x147d[_0x5e42d0];
        return _0x8ef86a;
    }, _0x4012(_0x2f4391, _0xd8c15b);
}
const common = require(_0x1fbc30(0x1ca)), assert = require('assert');
if (process[_0x1fbc30(0x1cb)][-0x1a9 * -0x8 + -0x1 * 0x1b33 + 0x2c9 * 0x5] !== 'child') {
    const spawn = require(_0x1fbc30(0x1cc))[_0x1fbc30(0x1cd)], child = spawn(process['execPath'], [
            __filename,
            _0x1fbc30(0x1ce)
        ], { 'stdio': 'pipe' }), timer = setTimeout(function () {
            const _0xb3f08f = _0x1fbc30, _0x552e02 = { 'ncsGO': _0xb3f08f(0x1cf) };
            throw new Error(_0x552e02[_0xb3f08f(0x1d0)]);
        }, common[_0x1fbc30(0x1d1)](-0x12 * -0x1 + 0x13e8 + -0x842));
    child['on'](_0x1fbc30(0x1d2), common[_0x1fbc30(0x1d3)](function (_0x62abec) {
        const _0xca3a3 = _0x1fbc30, _0x30ef07 = {
                'XEpZl': function (_0x3c626b, _0x2a743d) {
                    return _0x3c626b(_0x2a743d);
                }
            };
        assert[_0xca3a3(0x1d4)](_0x62abec, 0x1d90 + 0x615 * -0x6 + 0x6ee), _0x30ef07[_0xca3a3(0x1d5)](clearTimeout, timer);
    }));
} else {
    const domain = require(_0x1fbc30(0x1d6)), d = domain[_0x1fbc30(0x1d7)]();
    d['on'](_0x1fbc30(0x1d8), function () {
        const _0x427500 = _0x1fbc30, _0x441482 = {
                'LdTEx': function (_0x19a563) {
                    return _0x19a563();
                }
            }, _0x2d5cec = _0x427500(0x1d9)['split']('|');
        let _0x135a61 = -0x1871 + 0xc01 + 0xc70;
        while (!![]) {
            switch (_0x2d5cec[_0x135a61++]) {
            case '0':
                console['log']('d');
                continue;
            case '1':
                console[_0x427500(0x1da)]('e');
                continue;
            case '2':
                console['log']('a');
                continue;
            case '3':
                console['log']('b');
                continue;
            case '4':
                _0x441482['LdTEx'](f);
                continue;
            case '5':
                console['log']('c');
                continue;
            }
            break;
        }
    });
    function f() {
        process['nextTick'](function () {
            const _0x4089aa = _0x4012;
            d[_0x4089aa(0x1db)](function () {
                throw new Error('x');
            });
        });
    }
    f(), setImmediate(function () {
        const _0x1f8e56 = _0x1fbc30;
        console[_0x1f8e56(0x1d8)]('broke\x20in!'), process[_0x1f8e56(0x1d2)](0x1 * -0x2113 + 0x3 * 0xb91 + -0x1a0);
    });
}
