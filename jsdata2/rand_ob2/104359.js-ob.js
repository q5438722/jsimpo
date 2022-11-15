var _0x1b7f = [
    '244261jsLQFC',
    '69eCevmu',
    '419kUFdgN',
    '1IYbQZP',
    '336386MrAhDv',
    '69zhWnyO',
    '194LKklRq',
    '7022OSXVtH',
    '83bipZoP',
    '../../lib/defaults',
    '../../lib/utils',
    'CUSTOM-XSRF-TOKEN',
    'Ajax',
    'install',
    'uninstall',
    'defaults',
    'baseURL',
    'headers',
    'get',
    'post',
    'X-CUSTOM-HEADER',
    'toGMTString',
    'should\x20transform\x20request\x20json',
    'transformRequest',
    'toEqual',
    '{\x22foo\x22:\x22bar\x22}',
    'should\x20do\x20nothing\x20to\x20request\x20string',
    'foo=bar',
    'should\x20transform\x20response\x20json',
    'call',
    'object',
    'foo',
    'should\x20do\x20nothing\x20to\x20response\x20string',
    'transformResponse',
    'should\x20use\x20global\x20defaults\x20config',
    'url',
    'toBe',
    '/foo',
    'should\x20use\x20modified\x20defaults\x20config',
    'http://example.com/',
    'then',
    'http://example.com/foo',
    'should\x20use\x20request\x20config',
    'http://www.example.com',
    'http://www.example.com/foo',
    'should\x20use\x20default\x20config\x20for\x20custom\x20instance',
    'create',
    'X-CUSTOM-XSRF-TOKEN',
    'cookie',
    '=foobarbaz',
    'requestHeaders',
    'xsrfHeaderName',
    'foobarbaz',
    'should\x20use\x20GET\x20headers',
    'should\x20use\x20POST\x20headers',
    'should\x20use\x20header\x20config',
    'commonHeaderValue',
    'getHeaderValue',
    'fooHeaderValue',
    'barHeaderValue',
    'merge',
    'should\x20be\x20used\x20by\x20custom\x20instance\x20if\x20set\x20before\x20instance\x20created',
    'http://example.org/',
    'http://example.org/foo',
    'should\x20not\x20be\x20used\x20by\x20custom\x20instance\x20if\x20set\x20after\x20instance\x20created',
    '218273IooeKD',
    '1LEEUFN',
    '75835IRDcJA'
];
var _0x47dc1a = _0x3d6d;
(function (_0x24ec72, _0x46eff4) {
    var _0x1e026e = _0x3d6d;
    while (!![]) {
        try {
            var _0x5364a5 = parseInt(_0x1e026e(0x10a)) * parseInt(_0x1e026e(0x10b)) + parseInt(_0x1e026e(0x10c)) + -parseInt(_0x1e026e(0x10d)) + parseInt(_0x1e026e(0x10e)) * parseInt(_0x1e026e(0x10f)) + parseInt(_0x1e026e(0x110)) * -parseInt(_0x1e026e(0x111)) + -parseInt(_0x1e026e(0x112)) * parseInt(_0x1e026e(0x113)) + -parseInt(_0x1e026e(0x114)) * -parseInt(_0x1e026e(0x115));
            if (_0x5364a5 === _0x46eff4)
                break;
            else
                _0x24ec72['push'](_0x24ec72['shift']());
        } catch (_0x42547d) {
            _0x24ec72['push'](_0x24ec72['shift']());
        }
    }
}(_0x1b7f, 0x4c204));
var defaults = require(_0x47dc1a(0x116)), utils = require(_0x47dc1a(0x117));
function _0x3d6d(_0x397def, _0x48a800) {
    return _0x3d6d = function (_0x1b7fc8, _0x3d6db5) {
        _0x1b7fc8 = _0x1b7fc8 - 0x10a;
        var _0x298afe = _0x1b7f[_0x1b7fc8];
        return _0x298afe;
    }, _0x3d6d(_0x397def, _0x48a800);
}
describe('defaults', function () {
    var _0x55a123 = _0x47dc1a, _0x4b9ea2 = _0x55a123(0x118);
    beforeEach(function () {
        var _0x3814b4 = _0x55a123;
        jasmine[_0x3814b4(0x119)][_0x3814b4(0x11a)]();
    }), afterEach(function () {
        var _0x359c12 = _0x55a123;
        jasmine[_0x359c12(0x119)][_0x359c12(0x11b)](), delete axios[_0x359c12(0x11c)][_0x359c12(0x11d)], delete axios[_0x359c12(0x11c)][_0x359c12(0x11e)][_0x359c12(0x11f)]['X-CUSTOM-HEADER'], delete axios[_0x359c12(0x11c)][_0x359c12(0x11e)][_0x359c12(0x120)][_0x359c12(0x121)], document['cookie'] = _0x4b9ea2 + '=;expires=' + new Date(Date['now']() - 0x5265c00)[_0x359c12(0x122)]();
    }), it(_0x55a123(0x123), function () {
        var _0x294e68 = _0x55a123;
        expect(defaults[_0x294e68(0x124)][0x0]({ 'foo': 'bar' }))[_0x294e68(0x125)](_0x294e68(0x126));
    }), it(_0x55a123(0x127), function () {
        var _0x5216c2 = _0x55a123;
        expect(defaults[_0x5216c2(0x124)][0x0](_0x5216c2(0x128)))[_0x5216c2(0x125)](_0x5216c2(0x128));
    }), it(_0x55a123(0x129), function () {
        var _0x5ad2ad = _0x55a123, _0x2ab56a = defaults['transformResponse'][0x0][_0x5ad2ad(0x12a)](defaults, _0x5ad2ad(0x126));
        expect(typeof _0x2ab56a)[_0x5ad2ad(0x125)](_0x5ad2ad(0x12b)), expect(_0x2ab56a[_0x5ad2ad(0x12c)])[_0x5ad2ad(0x125)]('bar');
    }), it(_0x55a123(0x12d), function () {
        var _0x296f4e = _0x55a123;
        expect(defaults[_0x296f4e(0x12e)][0x0](_0x296f4e(0x128)))['toEqual'](_0x296f4e(0x128));
    }), it(_0x55a123(0x12f), function (_0x168d89) {
        axios('/foo'), getAjaxRequest()['then'](function (_0x2edbd0) {
            var _0x57fc92 = _0x3d6d;
            expect(_0x2edbd0[_0x57fc92(0x130)])[_0x57fc92(0x131)](_0x57fc92(0x132)), _0x168d89();
        });
    }), it(_0x55a123(0x133), function (_0x16b056) {
        var _0x1c9e79 = _0x55a123;
        axios[_0x1c9e79(0x11c)]['baseURL'] = _0x1c9e79(0x134), axios('/foo'), getAjaxRequest()[_0x1c9e79(0x135)](function (_0x41f779) {
            var _0xf3b032 = _0x1c9e79;
            expect(_0x41f779[_0xf3b032(0x130)])['toBe'](_0xf3b032(0x136)), _0x16b056();
        });
    }), it(_0x55a123(0x137), function (_0x365a2d) {
        var _0x37d149 = _0x55a123;
        axios(_0x37d149(0x132), { 'baseURL': _0x37d149(0x138) }), getAjaxRequest()['then'](function (_0x1d8a5c) {
            var _0x463e00 = _0x37d149;
            expect(_0x1d8a5c['url'])['toBe'](_0x463e00(0x139)), _0x365a2d();
        });
    }), it(_0x55a123(0x13a), function (_0x5b5dc8) {
        var _0x2d919f = _0x55a123, _0x237302 = axios[_0x2d919f(0x13b)]({
                'xsrfCookieName': _0x4b9ea2,
                'xsrfHeaderName': _0x2d919f(0x13c)
            });
        document[_0x2d919f(0x13d)] = _0x237302[_0x2d919f(0x11c)]['xsrfCookieName'] + _0x2d919f(0x13e), _0x237302[_0x2d919f(0x11f)](_0x2d919f(0x132)), getAjaxRequest()[_0x2d919f(0x135)](function (_0x449d06) {
            var _0x20745f = _0x2d919f;
            expect(_0x449d06[_0x20745f(0x13f)][_0x237302[_0x20745f(0x11c)][_0x20745f(0x140)]])['toEqual'](_0x20745f(0x141)), _0x5b5dc8();
        });
    }), it(_0x55a123(0x142), function (_0x4e072d) {
        var _0x7a4c76 = _0x55a123;
        axios[_0x7a4c76(0x11c)][_0x7a4c76(0x11e)]['get']['X-CUSTOM-HEADER'] = 'foo', axios[_0x7a4c76(0x11f)](_0x7a4c76(0x132)), getAjaxRequest()[_0x7a4c76(0x135)](function (_0x47defb) {
            var _0x5f50d6 = _0x7a4c76;
            expect(_0x47defb[_0x5f50d6(0x13f)][_0x5f50d6(0x121)])[_0x5f50d6(0x131)]('foo'), _0x4e072d();
        });
    }), it(_0x55a123(0x143), function (_0x55e177) {
        var _0x6818b2 = _0x55a123;
        axios[_0x6818b2(0x11c)]['headers'][_0x6818b2(0x120)]['X-CUSTOM-HEADER'] = 'foo', axios[_0x6818b2(0x120)](_0x6818b2(0x132), {}), getAjaxRequest()[_0x6818b2(0x135)](function (_0x37b809) {
            var _0x19b139 = _0x6818b2;
            expect(_0x37b809['requestHeaders']['X-CUSTOM-HEADER'])[_0x19b139(0x131)](_0x19b139(0x12c)), _0x55e177();
        });
    }), it(_0x55a123(0x144), function (_0x433cf1) {
        var _0x985ad1 = _0x55a123, _0x4da251 = axios[_0x985ad1(0x13b)]({
                'headers': {
                    'common': { 'X-COMMON-HEADER': _0x985ad1(0x145) },
                    'get': { 'X-GET-HEADER': _0x985ad1(0x146) },
                    'post': { 'X-POST-HEADER': 'postHeaderValue' }
                }
            });
        _0x4da251['get'](_0x985ad1(0x132), {
            'headers': {
                'X-FOO-HEADER': _0x985ad1(0x147),
                'X-BAR-HEADER': _0x985ad1(0x148)
            }
        }), getAjaxRequest()[_0x985ad1(0x135)](function (_0x2cd50c) {
            var _0x30edf8 = _0x985ad1;
            expect(_0x2cd50c[_0x30edf8(0x13f)])['toEqual'](utils[_0x30edf8(0x149)](defaults[_0x30edf8(0x11e)]['common'], defaults['headers'][_0x30edf8(0x11f)], {
                'X-COMMON-HEADER': 'commonHeaderValue',
                'X-GET-HEADER': 'getHeaderValue',
                'X-FOO-HEADER': _0x30edf8(0x147),
                'X-BAR-HEADER': _0x30edf8(0x148)
            })), _0x433cf1();
        });
    }), it(_0x55a123(0x14a), function (_0x451ca2) {
        var _0x2eea25 = _0x55a123;
        axios['defaults'][_0x2eea25(0x11d)] = _0x2eea25(0x14b);
        var _0x49eef7 = axios[_0x2eea25(0x13b)]();
        _0x49eef7[_0x2eea25(0x11f)](_0x2eea25(0x132)), getAjaxRequest()[_0x2eea25(0x135)](function (_0x202339) {
            var _0x454345 = _0x2eea25;
            expect(_0x202339['url'])[_0x454345(0x131)](_0x454345(0x14c)), _0x451ca2();
        });
    }), it(_0x55a123(0x14d), function (_0x383173) {
        var _0x22fc10 = _0x55a123, _0x40e30a = axios['create']();
        axios[_0x22fc10(0x11c)][_0x22fc10(0x11d)] = _0x22fc10(0x14b), _0x40e30a['get'](_0x22fc10(0x132)), getAjaxRequest()[_0x22fc10(0x135)](function (_0x5562c3) {
            var _0x35dc8a = _0x22fc10;
            expect(_0x5562c3['url'])[_0x35dc8a(0x131)](_0x35dc8a(0x132)), _0x383173();
        });
    });
});
