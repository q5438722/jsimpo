'use strict';

const _0x1c51 = ['22yaLaYk', '39376KASfrc', '518592lJpZrj', '142IEHdcA', '2461pKSBcG', '596745zsMcAC', '378408JGXeNv', '213BaTZhI', '622pvjcSC', '../common', 'assert', 'util', 'nextTick', 'mustCall', 'uncaughtException', 'exit', 'removeAllListeners', 'test', 'forEach', 'ERR_INVALID_CALLBACK', 'TypeError', 'eiZMa', 'psADr', '2exZBrC', '435794nUoNEr'];
const _0x5b722c = _0x4e7f;

(function (_0x11cb1d, _0x267e14) {
    const _0x3ba35e = _0x4e7f;

    while (true) {
        try {
            const _0x33b3c7 = -parseInt(_0x3ba35e(0xc0)) * parseInt(_0x3ba35e(0xc1)) + parseInt(_0x3ba35e(0xc2)) * parseInt(_0x3ba35e(0xc3)) + parseInt(_0x3ba35e(0xc4)) + parseInt(_0x3ba35e(0xc5)) * parseInt(_0x3ba35e(0xc6)) + -parseInt(_0x3ba35e(0xc7)) + parseInt(_0x3ba35e(0xc8)) + parseInt(_0x3ba35e(0xc9)) * -parseInt(_0x3ba35e(0xca));

            if (_0x33b3c7 === _0x267e14) break;else _0x11cb1d.push(_0x11cb1d.shift());
        } catch (_0xa1ad4e) {
            _0x11cb1d.push(_0x11cb1d.shift());
        }
    }
})(_0x1c51, 511915);
function _0x4e7f(_0x31bcb9, _0x5f3a87) {
    return _0x4e7f = function (_0x50b1a2, _0x3ecede) {
        _0x50b1a2 = _0x50b1a2 - 192;
        const _0x19ffa7 = _0x1c51[_0x50b1a2];

        return _0x19ffa7;
    }, _0x4e7f(_0x31bcb9, _0x5f3a87);
}

const common = require(_0x5b722c(0xcb));

const assert = require(_0x5b722c(0xcc));

var { inspect } = require(_0x5b722c(0xcd));

const N = 2;

function cb() {
    throw new Error();
}
for (let i = 0; i < N; ++i) {
    process[_0x5b722c(0xce)](common[_0x5b722c(0xcf)](cb));
}
process.on(_0x5b722c(0xd0), common[_0x5b722c(0xcf)](N)), process.on(_0x5b722c(0xd1), function () {
    const _0x4fc19c = _0x5b722c;

    process[_0x4fc19c(0xd2)]('uncaughtException');
}), [null, 1, _0x5b722c(0xd3), {}, [], Infinity, true][_0x5b722c(0xd4)](_0x50ce48 => {
    const _0x2572e4 = _0x5b722c;
    const _0x26aae3 = {
        'pUoDL': _0x2572e4(0xd5),
        'eiZMa': _0x2572e4(0xd6),
        'psADr': function (_0x3eedd0, _0x293788) {
            return _0x3eedd0(_0x293788);
        }
    };

    assert.throws(() => process.nextTick(_0x50ce48), {
        'code': _0x26aae3.pUoDL,
        'name': _0x26aae3[_0x2572e4(0xd7)],
        'message': 'Callback must be a function. Received ' + _0x26aae3[_0x2572e4(0xd8)](inspect, _0x50ce48)
    });
});
