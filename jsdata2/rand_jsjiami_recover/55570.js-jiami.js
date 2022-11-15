'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
const assert = require('assert');
const crypto = require('crypto');
const domain = require('domain');
const test = _0x2756a7 => {
    const _0x14a0c7 = new Error('BAM');
    const _0x2ff973 = domain['create']();
    _0x2ff973['on']('error', common['mustCall'](function (_0x4a4f00) {
        assert['strictEqual'](_0x4a4f00, _0x14a0c7);
    }));
    const _0x248354 = common['mustCall'](function () {
        throw _0x14a0c7;
    });
    _0x2ff973['run'](_0x248354);
};
test(function (_0x1f5d51) {
    crypto['pbkdf2']('password', 'salt', 1, 8, _0x1f5d51);
});
test(function (_0x3b9c3c) {
    crypto['randomBytes'](32, _0x3b9c3c);
});