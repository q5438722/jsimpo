'use strict';

const _0x3f44 = ['crypto', 'domain', 'error', 'wRUNb', 'create', 'jqUxj', 'mustCall', 'strictEqual', 'run', 'pbkdf2', 'frBEj', 'salt', '95303JuhrpO', '3Hxzymt', '176986QdVRlt', '441266rlHmGi', '99swExMG', '2966ZoWAoJ', '423575AmjwBS', '2nCEhay', '1dXPMbi', '233353nwhKCF', '1200586XouyrI', 'skip', 'missing crypto', 'assert'];
const _0x327eb7 = _0x16dd;

(function (_0x3f5848, _0x2470a3) {
    const _0x124078 = _0x16dd;

    while (true) {
        try {
            const _0x1b2cf4 = parseInt(_0x124078(0x166)) + -parseInt(_0x124078(0x167)) * -parseInt(_0x124078(0x168)) + -parseInt(_0x124078(0x169)) + parseInt(_0x124078(0x16a)) * parseInt(_0x124078(0x16b)) + -parseInt(_0x124078(0x16c)) * parseInt(_0x124078(0x16d)) + -parseInt(_0x124078(0x16e)) * parseInt(_0x124078(0x16f)) + parseInt(_0x124078(0x170));

            if (_0x1b2cf4 === _0x2470a3) break;else _0x3f5848.push(_0x3f5848.shift());
        } catch (_0x3b8e3b) {
            _0x3f5848.push(_0x3f5848.shift());
        }
    }
})(_0x3f44, 598712);

const common = require('../common');

if (!common.hasCrypto) common[_0x327eb7(0x171)](_0x327eb7(0x172));

const assert = require(_0x327eb7(0x173));

const crypto = require(_0x327eb7(0x174));

const domain = require(_0x327eb7(0x175));

const test = _0x132d73 => {
    const _0x2ca184 = _0x327eb7;
    const _0x33fb36 = {
        'wRUNb': 'BAM',
        'jqUxj': _0x2ca184(0x176)
    };

    const _0x241e10 = new Error(_0x33fb36[_0x2ca184(0x177)]);

    const _0x45b9a4 = domain[_0x2ca184(0x178)]();

    _0x45b9a4.on(_0x33fb36[_0x2ca184(0x179)], common[_0x2ca184(0x17a)](function (_0x5d4d95) {
        const _0x20aac0 = _0x2ca184;

        assert[_0x20aac0(0x17b)](_0x5d4d95, _0x241e10);
    }));

    const _0x407351 = common[_0x2ca184(0x17a)](function () {
        throw _0x241e10;
    });

    _0x45b9a4[_0x2ca184(0x17c)](_0x407351);
};

function _0x16dd(_0x1b8fe0, _0x66c075) {
    return _0x16dd = function (_0x33063e, _0x3e8e5b) {
        _0x33063e = _0x33063e - 358;
        const _0x3080c8 = _0x3f44[_0x33063e];

        return _0x3080c8;
    }, _0x16dd(_0x1b8fe0, _0x66c075);
}
test(function (_0x5b7718) {
    const _0x4d17f2 = _0x327eb7;
    const _0x28eca1 = { 'frBEj': 'password' };

    crypto[_0x4d17f2(0x17d)](_0x28eca1[_0x4d17f2(0x17e)], _0x4d17f2(0x17f), 1, 8, _0x5b7718);
}), test(function (_0x3de0e7) {
    crypto.randomBytes(32, _0x3de0e7);
});
