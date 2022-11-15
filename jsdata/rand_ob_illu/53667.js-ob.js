'use strict';

const _0x2c69 = ['undefined', 'shift', 'deepStrictEqual', 'OQjsW', 'sSzHx', '> Foobar', 'stdin', 'write', 'process.on("uncaughtException", () => console.log("Foobar"));', 'end', '169516CAjqLr', '27910XTncWW', '4GQPrVJ', '330915rnyGWF', '12058EmEwFS', '6LllLDy', '14356KnkJua', '15538bjQJDE', '1858aAuUQP', '344Jyjghv', '../common', 'assert', 'spawn', 'execPath', 'stdout', 'data', 'exit', 'mustCall', 'Type ".help" for more information.', '> short'];
const _0x4c2d9c = _0x2aef;

(function (_0x107f4d, _0x2fe4b8) {
    const _0x37fe31 = _0x2aef;

    while (true) {
        try {
            const _0x3c6b86 = -parseInt(_0x37fe31(0xa6)) + parseInt(_0x37fe31(0xa7)) * parseInt(_0x37fe31(0xa8)) + -parseInt(_0x37fe31(0xa9)) + -parseInt(_0x37fe31(0xaa)) * parseInt(_0x37fe31(0xab)) + parseInt(_0x37fe31(0xac)) + -parseInt(_0x37fe31(0xad)) + -parseInt(_0x37fe31(0xae)) * -parseInt(_0x37fe31(0xaf));

            if (_0x3c6b86 === _0x2fe4b8) break;else _0x107f4d.push(_0x107f4d.shift());
        } catch (_0x3b779c) {
            _0x107f4d.push(_0x107f4d.shift());
        }
    }
})(_0x2c69, 176831);
function _0x2aef(_0x36baed, _0x50db5e) {
    return _0x2aef = function (_0xc4141d, _0x42b0e4) {
        _0xc4141d = _0xc4141d - 166;
        const _0xfd3cbd = _0x2c69[_0xc4141d];

        return _0xfd3cbd;
    }, _0x2aef(_0x36baed, _0x50db5e);
}

const common = require(_0x4c2d9c(0xb0));

const assert = require(_0x4c2d9c(0xb1));

const cp = require('child_process');

const child = cp[_0x4c2d9c(0xb2)](process[_0x4c2d9c(0xb3)], ['-i']);

var output = '';

child[_0x4c2d9c(0xb4)].setEncoding('utf8'), child[_0x4c2d9c(0xb4)].on(_0x4c2d9c(0xb5), _0x21f262 => {
    output += _0x21f262;
}), child.on(_0x4c2d9c(0xb6), common[_0x4c2d9c(0xb7)](() => {
    const _0x21012a = _0x4c2d9c;
    const _0x574a6a = {
        'nBcCg': _0x21012a(0xb8),
        'OQjsW': _0x21012a(0xb9),
        'sSzHx': _0x21012a(0xba)
    };

    const _0x1891d6 = output.split('\n');

    _0x1891d6[_0x21012a(0xbb)](), assert[_0x21012a(0xbc)](_0x1891d6, [_0x574a6a.nBcCg, '> Uncaught ReferenceError: x is not defined', _0x574a6a[_0x21012a(0xbd)], _0x574a6a[_0x21012a(0xbe)], _0x21012a(0xbf), '> ']);
})), child[_0x4c2d9c(0xc0)].write('x\n'), child[_0x4c2d9c(0xc0)][_0x4c2d9c(0xc1)](_0x4c2d9c(0xc2) + 'console.log("short")\n'), child[_0x4c2d9c(0xc0)][_0x4c2d9c(0xc1)]('x\n'), child[_0x4c2d9c(0xc0)][_0x4c2d9c(0xc3)]();
