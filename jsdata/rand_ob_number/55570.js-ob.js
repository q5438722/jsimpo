'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), crypto = require('crypto'), domain = require('domain'), test = _0x441215 => {
        const _0x1c3d1c = new Error('BAM'), _0x214445 = domain['create']();
        _0x214445['on']('error', common['mustCall'](function (_0x89953d) {
            assert['strictEqual'](_0x89953d, _0x1c3d1c);
        }));
        const _0x25f0cc = common['mustCall'](function () {
            throw _0x1c3d1c;
        });
        _0x214445['run'](_0x25f0cc);
    };
test(function (_0x4b4566) {
    crypto['pbkdf2']('password', 'salt', -0x5 * -0x3a + -0x1ee3 + 0x1dc2, 0xf1a + -0x7c * -0x1 + -0xf8e, _0x4b4566);
}), test(function (_0x1dda64) {
    crypto['randomBytes'](-0x8a0 * 0x1 + -0x1 * 0xecf + 0x178f, _0x1dda64);
});
