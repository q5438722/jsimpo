var selftest = require('../tool-testing/selftest.js');
selftest['define']('boot utils', function (_0x1ffdd7) {
    var _0x128a2b = require('../static-assets/server/boot-utils.js');
    selftest['expectTrue'](_0x128a2b['validPid'](123));
    selftest['expectTrue'](_0x128a2b['validPid']('123'));
    selftest['expectTrue'](_0x128a2b['validPid'](291));
    selftest['expectTrue'](_0x128a2b['validPid']('0x123'));
    selftest['expectFalse'](_0x128a2b['validPid']('foo123'));
    selftest['expectFalse'](_0x128a2b['validPid']('foobar'));
    selftest['expectFalse'](_0x128a2b['validPid']('123foo'));
});