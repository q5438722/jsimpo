'use strict';
const _0x4a57 = [
    'skip',
    'missing\x20crypto',
    'assert',
    'crypto',
    'domain',
    'BAM',
    'create',
    'mustCall',
    'strictEqual',
    'run',
    'password',
    'salt',
    '112153pBaLTl',
    '1KvEXzf',
    '73383uEBXhG',
    '1xnlUdV',
    '388660CUzTZo',
    '523241NpkXIT',
    '6037HsCLkB',
    '98063rfPdaQ',
    '5ldKktN',
    '6ekJdBI',
    '10114whXfHI',
    'hasCrypto'
];
const _0x9d317d = _0x584f;
function _0x584f(_0x429afc, _0x27694c) {
    return _0x584f = function (_0x4a5783, _0x584f42) {
        _0x4a5783 = _0x4a5783 - 0xd0;
        let _0x466814 = _0x4a57[_0x4a5783];
        return _0x466814;
    }, _0x584f(_0x429afc, _0x27694c);
}
(function (_0x2ee044, _0x20c266) {
    const _0x7d7ff8 = _0x584f;
    while (!![]) {
        try {
            const _0x54f035 = -parseInt(_0x7d7ff8(0xd0)) * -parseInt(_0x7d7ff8(0xd1)) + -parseInt(_0x7d7ff8(0xd2)) * parseInt(_0x7d7ff8(0xd3)) + parseInt(_0x7d7ff8(0xd4)) + -parseInt(_0x7d7ff8(0xd5)) + parseInt(_0x7d7ff8(0xd6)) + -parseInt(_0x7d7ff8(0xd7)) * -parseInt(_0x7d7ff8(0xd8)) + parseInt(_0x7d7ff8(0xd9)) * -parseInt(_0x7d7ff8(0xda));
            if (_0x54f035 === _0x20c266)
                break;
            else
                _0x2ee044['push'](_0x2ee044['shift']());
        } catch (_0x5061c5) {
            _0x2ee044['push'](_0x2ee044['shift']());
        }
    }
}(_0x4a57, 0x52f91));
const common = require('../common');
if (!common[_0x9d317d(0xdb)])
    common[_0x9d317d(0xdc)](_0x9d317d(0xdd));
const assert = require(_0x9d317d(0xde)), crypto = require(_0x9d317d(0xdf)), domain = require(_0x9d317d(0xe0)), test = _0x3a7a85 => {
        const _0x2452a6 = _0x9d317d, _0x48a87e = new Error(_0x2452a6(0xe1)), _0x55297b = domain[_0x2452a6(0xe2)]();
        _0x55297b['on']('error', common[_0x2452a6(0xe3)](function (_0x120ef9) {
            const _0xb20395 = _0x2452a6;
            assert[_0xb20395(0xe4)](_0x120ef9, _0x48a87e);
        }));
        const _0xdb42dd = common[_0x2452a6(0xe3)](function () {
            throw _0x48a87e;
        });
        _0x55297b[_0x2452a6(0xe5)](_0xdb42dd);
    };
test(function (_0x2ad96c) {
    const _0xdd0f38 = _0x9d317d;
    crypto['pbkdf2'](_0xdd0f38(0xe6), _0xdd0f38(0xe7), 0x1, 0x8, _0x2ad96c);
}), test(function (_0x310603) {
    crypto['randomBytes'](0x20, _0x310603);
});
