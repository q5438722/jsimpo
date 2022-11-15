const common = require('../common');
if (!common[_0x9d317d(219)])
    common[_0x9d317d(220)](_0x9d317d(221));
const assert = require(_0x9d317d(222)), crypto = require(_0x9d317d(223)), domain = require(_0x9d317d(224)), test = _0x3a7a85 => {
        const _0x2452a6 = _0x9d317d, _0x48a87e = new Error(_0x2452a6(225)), _0x55297b = domain[_0x2452a6(226)]();
        _0x55297b['on']('error', common[_0x2452a6(227)](function (_0x120ef9) {
            const _0xb20395 = _0x2452a6;
            assert[_0xb20395(228)](_0x120ef9, _0x48a87e);
        }));
        const _0xdb42dd = common[_0x2452a6(227)](function () {
            throw _0x48a87e;
        });
        _0x55297b[_0x2452a6(229)](_0xdb42dd);
    };
test(function (_0x2ad96c) {
    const _0xdd0f38 = _0x9d317d;
    crypto['pbkdf2'](_0xdd0f38(230), _0xdd0f38(231), 1, 8, _0x2ad96c);
}), test(function (_0x310603) {
    crypto['randomBytes'](32, _0x310603);
});