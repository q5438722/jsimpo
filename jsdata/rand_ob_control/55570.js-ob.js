'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), crypto = require('crypto'), domain = require('domain'), test = _0x5f093e => {
        const _0x7985aa = {
                'LRJmH': 'BAM',
                'HzXjt': 'error'
            }, _0xaedf3a = new Error(_0x7985aa['LRJmH']), _0x301532 = domain['create']();
        _0x301532['on'](_0x7985aa['HzXjt'], common['mustCall'](function (_0x40ebee) {
            assert['strictEqual'](_0x40ebee, _0xaedf3a);
        }));
        const _0x2b0a17 = common['mustCall'](function () {
            throw _0xaedf3a;
        });
        _0x301532['run'](_0x2b0a17);
    };
test(function (_0x577d46) {
    const _0x534450 = {
        'Clqdb': 'password',
        'XxLik': 'salt'
    };
    crypto['pbkdf2'](_0x534450['Clqdb'], _0x534450['XxLik'], 0x1, 0x8, _0x577d46);
}), test(function (_0xa0be00) {
    crypto['randomBytes'](0x20, _0xa0be00);
});
