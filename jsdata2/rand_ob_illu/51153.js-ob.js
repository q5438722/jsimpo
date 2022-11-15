'use strict';

const _0x53ae = ['3ImbTbk', '213461jgmawk', '553807sqhGeM', '../common.js', 'assert', 'createBenchmark', 'keys', 'deepEqual', 'notDeepEqual', 'eep', 'not', 'replace', 'includes', 'WqmFl', 'start', 'Tfigs', '1jevCvy', '26710xtRbJC', '11081Xhnzku', '2kTNObv', '109171tVczui', '2hVmDTd', '6jncQBD', '7882NrZAtr', '29833PJMGPD'];
const _0x2b67b2 = _0xfdd7;

(function (_0x44acc2, _0x45bc10) {
    const _0x3bd823 = _0xfdd7;

    while (true) {
        try {
            const _0x174a74 = -parseInt(_0x3bd823(0xad)) * -parseInt(_0x3bd823(0xae)) + -parseInt(_0x3bd823(0xaf)) * -parseInt(_0x3bd823(0xb0)) + -parseInt(_0x3bd823(0xb1)) * parseInt(_0x3bd823(0xb2)) + parseInt(_0x3bd823(0xb3)) * parseInt(_0x3bd823(0xb4)) + parseInt(_0x3bd823(0xb5)) * -parseInt(_0x3bd823(0xb6)) + -parseInt(_0x3bd823(0xb7)) + parseInt(_0x3bd823(0xb8));

            if (_0x174a74 === _0x45bc10) break;else _0x44acc2.push(_0x44acc2.shift());
        } catch (_0x4d32fe) {
            _0x44acc2.push(_0x44acc2.shift());
        }
    }
})(_0x53ae, 128669);

const common = require(_0x2b67b2(0xb9));

const assert = require(_0x2b67b2(0xba));

const primValues = {
    'string': 'a',
    'number': 0x1,
    'object': { 0x0: 'a' },
    'array': [1, 2, 3]
};

const bench = common[_0x2b67b2(0xbb)](main, {
    'primitive': Object[_0x2b67b2(0xbc)](primValues),
    'n': [20000],
    'strict': [0, 1],
    'method': [_0x2b67b2(0xbd), _0x2b67b2(0xbe)]
});

function _0xfdd7(_0x460aee, _0x30f226) {
    return _0xfdd7 = function (_0x5d0157, _0xf77de4) {
        _0x5d0157 = _0x5d0157 - 173;
        const _0x4f63ce = _0x53ae[_0x5d0157];

        return _0x4f63ce;
    }, _0xfdd7(_0x460aee, _0x30f226);
}
function main({
    n: _0x164d60,
    primitive: _0x4cf38c,
    method: _0x516cb5,
    strict: _0x26de13
}) {
    const _0x397837 = _0x2b67b2;
    const _0x469846 = {
        'XkBeT': _0x397837(0xbf),
        'XBljK': 'eepStrict',
        'WqmFl': _0x397837(0xc0),
        'Tfigs': function (_0x17b406, _0x523af1, _0x3fe19b) {
            return _0x17b406(_0x523af1, _0x3fe19b);
        }
    };
    const _0x5cf651 = primValues[_0x4cf38c];
    const _0x1e4bc7 = _0x5cf651;
    const _0x1a1b24 = _0x5cf651;
    const _0x12ad4e = 'b';

    _0x26de13 && (_0x516cb5 = _0x516cb5[_0x397837(0xc1)](_0x469846.XkBeT, _0x469846.XBljK));
    const _0x51f02a = assert[_0x516cb5];

    const _0x2d2d4d = _0x516cb5[_0x397837(0xc2)](_0x469846[_0x397837(0xc3)]) ? _0x12ad4e : _0x1a1b24;

    bench[_0x397837(0xc4)]();
    for (let _0xb6c84a = 0; _0xb6c84a < _0x164d60; ++_0xb6c84a) {
        _0x469846[_0x397837(0xc5)](_0x51f02a, [_0x1e4bc7], [_0x2d2d4d]);
    }
    bench.end(_0x164d60);
}
