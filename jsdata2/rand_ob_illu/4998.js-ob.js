const _0x149f = ['stringify', 'write', 'correct', '8OJtdPk', '22679VapYrG', '1473sxVLcT', '241GyaxLs', '381226SQTyvv', '1XCzqYl', '187337TCXqFB', '82681KOXXvo', '166130hfqzwo', '2ChCLWl', '402191BQBImx', 'random', 'jsonparse', 'from', '4|0|3|1|2', 'split', 'onValue', 'parsed', 'error', 'WBBWB', 'equal'];
const _0x31ec3a = _0x4eb1;

(function (_0x28fe19, _0x5d798a) {
    const _0x10c816 = _0x4eb1;

    while (true) {
        try {
            const _0x49d4bf = parseInt(_0x10c816(0xdd)) * -parseInt(_0x10c816(0xde)) + parseInt(_0x10c816(0xdf)) * -parseInt(_0x10c816(0xe0)) + parseInt(_0x10c816(0xe1)) + -parseInt(_0x10c816(0xe2)) * parseInt(_0x10c816(0xe3)) + -parseInt(_0x10c816(0xe4)) + -parseInt(_0x10c816(0xe5)) + -parseInt(_0x10c816(0xe6)) * -parseInt(_0x10c816(0xe7));

            if (_0x49d4bf === _0x5d798a) break;else _0x28fe19.push(_0x28fe19.shift());
        } catch (_0x1ad46b) {
            _0x28fe19.push(_0x28fe19.shift());
        }
    }
})(_0x149f, 213035);

const r = Math[_0x31ec3a(0xe8)]();

const Parser = require(_0x31ec3a(0xe9));

const p = new Parser();

const assert = require('assert');

var times = 20;
const bufferFrom = Buffer[_0x31ec3a(0xea)] && Buffer[_0x31ec3a(0xea)] !== Uint8Array.from;
var str;

function _0x4eb1(_0x4f2b09, _0x18bae4) {
    return _0x4eb1 = function (_0x22dbb3, _0x4b1573) {
        _0x22dbb3 = _0x22dbb3 - 221;
        const _0x55c265 = _0x149f[_0x22dbb3];

        return _0x55c265;
    }, _0x4eb1(_0x4f2b09, _0x18bae4);
}
while (times--) {
    const iqBkeD = _0x31ec3a(0xeb)[_0x31ec3a(0xec)]('|');

    var BTAVhM = 0;

    while (true) {
        switch (iqBkeD[BTAVhM++]) {
            case '0':
                p[_0x31ec3a(0xed)] = function (_0x28f718) {
                    const _0x2ac377 = _0x31ec3a;
                    const _0x5317d4 = { 'WBBWB': _0x2ac377(0xee) };

                    console[_0x2ac377(0xef)](_0x5317d4[_0x2ac377(0xf0)], _0x28f718), assert[_0x2ac377(0xf1)](_0x28f718, r);
                };
                continue;
            case '1':
                str = JSON[_0x31ec3a(0xf2)]([r]);
                continue;
            case '2':
                p[_0x31ec3a(0xf3)](bufferFrom ? Buffer[_0x31ec3a(0xea)](str) : new Buffer(str));
                continue;
            case '3':
                console.error(_0x31ec3a(0xf4), r);
                continue;
            case '4':
                assert[_0x31ec3a(0xf1)](JSON.parse(JSON[_0x31ec3a(0xf2)](r)), r, 'core JSON');
                continue;
        }
        break;
    }
}