var selftest = require('../tool-testing/selftest.js');
selftest['define']('boot\x20utils', function (_0x1f3031) {
    var _0x52cf9a = require('../static-assets/server/boot-utils.js');
    selftest['expectTrue'](_0x52cf9a['validPid'](-0x3a3 + -0x5 * 0x6c6 + -0x2 * -0x12fe)), selftest['expectTrue'](_0x52cf9a['validPid']('123')), selftest['expectTrue'](_0x52cf9a['validPid'](-0x8b * -0xd + -0x1c99 * -0x1 + -0x2285)), selftest['expectTrue'](_0x52cf9a['validPid']('0x123')), selftest['expectFalse'](_0x52cf9a['validPid']('foo123')), selftest['expectFalse'](_0x52cf9a['validPid']('foobar')), selftest['expectFalse'](_0x52cf9a['validPid']('123foo'));
});
