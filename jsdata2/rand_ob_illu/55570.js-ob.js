'use strict';

const _0x1cce = ['assert', 'domain', 'BAM', 'create', 'vjsaU', 'strictEqual', 'mustCall', 'run', 'password', 'salt', 'pbkdf2', 'iuokw', 'randomBytes', '644752oNSDVi', '1405651WUZbav', '755608SAahOo', '1003505OWWEpc', '586576WQtOEC', '1aJQhnc', '700399EXoaKQ', '1554985TzSFub', '../common', 'hasCrypto', 'skip'];
const _0xd20f98 = _0x222a;

(function (_0x489506, _0x3e1b59) {
    const _0x5cb52c = _0x222a;

    while (true) {
        try {
            const _0x483027 = -parseInt(_0x5cb52c(0x18a)) + parseInt(_0x5cb52c(0x18b)) + parseInt(_0x5cb52c(0x18c)) + -parseInt(_0x5cb52c(0x18d)) + -parseInt(_0x5cb52c(0x18e)) + parseInt(_0x5cb52c(0x18f)) * -parseInt(_0x5cb52c(0x190)) + parseInt(_0x5cb52c(0x191));

            if (_0x483027 === _0x3e1b59) break;else _0x489506.push(_0x489506.shift());
        } catch (_0x176c5d) {
            _0x489506.push(_0x489506.shift());
        }
    }
})(_0x1cce, 781012);
function _0x222a(_0x1367ea, _0x56a2aa) {
    return _0x222a = function (_0x1c7b0a, _0x4441c6) {
        _0x1c7b0a = _0x1c7b0a - 394;
        const _0x84cfea = _0x1cce[_0x1c7b0a];

        return _0x84cfea;
    }, _0x222a(_0x1367ea, _0x56a2aa);
}

const common = require(_0xd20f98(0x192));

if (!common[_0xd20f98(0x193)]) common[_0xd20f98(0x194)]('missing crypto');

const assert = require(_0xd20f98(0x195));

const crypto = require('crypto');

const domain = require(_0xd20f98(0x196));

const test = _0x54386d => {
    const _0x9317f8 = _0xd20f98;
    const _0x28092a = { 'vjsaU': 'error' };

    const _0x5439c3 = new Error(_0x9317f8(0x197));

    const _0x218b69 = domain[_0x9317f8(0x198)]();

    _0x218b69.on(_0x28092a[_0x9317f8(0x199)], common.mustCall(function (_0x49f9ea) {
        const _0x4fc4da = _0x9317f8;

        assert[_0x4fc4da(0x19a)](_0x49f9ea, _0x5439c3);
    }));

    const _0x150dfe = common[_0x9317f8(0x19b)](function () {
        throw _0x5439c3;
    });

    _0x218b69[_0x9317f8(0x19c)](_0x150dfe);
};

test(function (_0x5302d8) {
    const _0x5745c6 = _0xd20f98;
    const _0x2be0e0 = {
        'uDmzg': _0x5745c6(0x19d),
        'iuokw': _0x5745c6(0x19e)
    };

    crypto[_0x5745c6(0x19f)](_0x2be0e0.uDmzg, _0x2be0e0[_0x5745c6(0x1a0)], 1, 8, _0x5302d8);
}), test(function (_0x5ea67e) {
    const _0x205289 = _0xd20f98;

    crypto[_0x205289(0x1a1)](32, _0x5ea67e);
});
