'use strict';

const _0x2907 = ['split', 'strictEqual', 'domainThrown', 'domainBound', 'domainEmitter', 'irGOQ', 'nextTick', '2RBRaNf', '817421doRKDD', '496434SOXGIV', '2oJKrMD', '190079zpBgBg', '318834HZcCMx', '897670SjiWkR', '112779mFXdFE', '6aoaCln', '1442372vKFFSQ', '../common', 'assert', 'domain', 'Domain', 'error', 'mustCall', '4|0|3|2|1', 'foobar', 'BVfvh'];

function _0x15ee(_0x41ce3c, _0x8b2dce) {
    return _0x15ee = function (_0x5b9d37, _0x2c032a) {
        _0x5b9d37 = _0x5b9d37 - 203;
        const _0x300405 = _0x2907[_0x5b9d37];

        return _0x300405;
    }, _0x15ee(_0x41ce3c, _0x8b2dce);
}
const _0x958483 = _0x15ee;

(function (_0x4e8f21, _0x3154c2) {
    const _0x6971b0 = _0x15ee;

    while (true) {
        try {
            const _0x8ed7cf = -parseInt(_0x6971b0(0xcb)) * -parseInt(_0x6971b0(0xcc)) + parseInt(_0x6971b0(0xcd)) + -parseInt(_0x6971b0(0xce)) * parseInt(_0x6971b0(0xcf)) + parseInt(_0x6971b0(0xd0)) + parseInt(_0x6971b0(0xd1)) + -parseInt(_0x6971b0(0xd2)) * parseInt(_0x6971b0(0xd3)) + -parseInt(_0x6971b0(0xd4));

            if (_0x8ed7cf === _0x3154c2) break;else _0x4e8f21.push(_0x4e8f21.shift());
        } catch (_0x2bcb65) {
            _0x4e8f21.push(_0x4e8f21.shift());
        }
    }
})(_0x2907, 848576);

const common = require(_0x958483(0xd5));

const assert = require(_0x958483(0xd6));

const domain = require(_0x958483(0xd7));

const d = new domain[_0x958483(0xd8)]();

d.on(_0x958483(0xd9), common[_0x958483(0xda)](_0x4533ed => {
    const _0x530e58 = _0x958483;
    const _0xe14ab7 = {
        'BVfvh': _0x530e58(0xdb),
        'irGOQ': _0x530e58(0xdc)
    };

    const _0x41eeb0 = _0xe14ab7[_0x530e58(0xdd)][_0x530e58(0xde)]('|');

    var _0x51693a = 0;

    while (true) {
        switch (_0x41eeb0[_0x51693a++]) {
            case '0':
                assert[_0x530e58(0xdf)](_0x4533ed[_0x530e58(0xd7)], d);
                continue;
            case '1':
                assert[_0x530e58(0xdf)](_0x4533ed[_0x530e58(0xe0)], true);
                continue;
            case '2':
                assert.strictEqual(_0x4533ed[_0x530e58(0xe1)], undefined);
                continue;
            case '3':
                assert[_0x530e58(0xdf)](_0x4533ed[_0x530e58(0xe2)], undefined);
                continue;
            case '4':
                assert[_0x530e58(0xdf)](_0x4533ed.message, _0xe14ab7[_0x530e58(0xe3)]);
                continue;
        }
        break;
    }
})), d.run(common.mustCall(() => {
    const _0x359d7b = _0x958483;
    const _0x3b1d7e = { 'OaoEv': _0x359d7b(0xdc) };

    process[_0x359d7b(0xe4)](common[_0x359d7b(0xda)](() => {
        throw new Error(_0x3b1d7e.OaoEv);
    }));
}));
