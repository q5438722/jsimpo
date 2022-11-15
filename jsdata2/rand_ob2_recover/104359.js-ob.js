var defaults = require(_0x47dc1a(278)), utils = require(_0x47dc1a(279));
function _0x3d6d(_0x397def, _0x48a800) {
    return _0x3d6d = function (_0x1b7fc8, _0x3d6db5) {
        _0x1b7fc8 = _0x1b7fc8 - 266;
        var _0x298afe = _0x1b7f[_0x1b7fc8];
        return _0x298afe;
    }, _0x3d6d(_0x397def, _0x48a800);
}
describe('defaults', function () {
    var _0x55a123 = _0x47dc1a, _0x4b9ea2 = _0x55a123(280);
    beforeEach(function () {
        var _0x3814b4 = _0x55a123;
        jasmine[_0x3814b4(281)][_0x3814b4(282)]();
    }), afterEach(function () {
        var _0x359c12 = _0x55a123;
        jasmine[_0x359c12(281)][_0x359c12(283)](), delete axios[_0x359c12(284)][_0x359c12(285)], delete axios[_0x359c12(284)][_0x359c12(286)][_0x359c12(287)]['X-CUSTOM-HEADER'], delete axios[_0x359c12(284)][_0x359c12(286)][_0x359c12(288)][_0x359c12(289)], document['cookie'] = _0x4b9ea2 + '=;expires=' + new Date(Date['now']() - 86400000)[_0x359c12(290)]();
    }), it(_0x55a123(291), function () {
        var _0x294e68 = _0x55a123;
        expect(defaults[_0x294e68(292)][0]({ 'foo': 'bar' }))[_0x294e68(293)](_0x294e68(294));
    }), it(_0x55a123(295), function () {
        var _0x5216c2 = _0x55a123;
        expect(defaults[_0x5216c2(292)][0](_0x5216c2(296)))[_0x5216c2(293)](_0x5216c2(296));
    }), it(_0x55a123(297), function () {
        var _0x5ad2ad = _0x55a123, _0x2ab56a = defaults['transformResponse'][0][_0x5ad2ad(298)](defaults, _0x5ad2ad(294));
        expect(typeof _0x2ab56a)[_0x5ad2ad(293)](_0x5ad2ad(299)), expect(_0x2ab56a[_0x5ad2ad(300)])[_0x5ad2ad(293)]('bar');
    }), it(_0x55a123(301), function () {
        var _0x296f4e = _0x55a123;
        expect(defaults[_0x296f4e(302)][0](_0x296f4e(296)))['toEqual'](_0x296f4e(296));
    }), it(_0x55a123(303), function (_0x168d89) {
        axios('/foo'), getAjaxRequest()['then'](function (_0x2edbd0) {
            var _0x57fc92 = _0x3d6d;
            expect(_0x2edbd0[_0x57fc92(304)])[_0x57fc92(305)](_0x57fc92(306)), _0x168d89();
        });
    }), it(_0x55a123(307), function (_0x16b056) {
        var _0x1c9e79 = _0x55a123;
        axios[_0x1c9e79(284)]['baseURL'] = _0x1c9e79(308), axios('/foo'), getAjaxRequest()[_0x1c9e79(309)](function (_0x41f779) {
            var _0xf3b032 = _0x1c9e79;
            expect(_0x41f779[_0xf3b032(304)])['toBe'](_0xf3b032(310)), _0x16b056();
        });
    }), it(_0x55a123(311), function (_0x365a2d) {
        var _0x37d149 = _0x55a123;
        axios(_0x37d149(306), { 'baseURL': _0x37d149(312) }), getAjaxRequest()['then'](function (_0x1d8a5c) {
            var _0x463e00 = _0x37d149;
            expect(_0x1d8a5c['url'])['toBe'](_0x463e00(313)), _0x365a2d();
        });
    }), it(_0x55a123(314), function (_0x5b5dc8) {
        var _0x2d919f = _0x55a123, _0x237302 = axios[_0x2d919f(315)]({
                'xsrfCookieName': _0x4b9ea2,
                'xsrfHeaderName': _0x2d919f(316)
            });
        document[_0x2d919f(317)] = _0x237302[_0x2d919f(284)]['xsrfCookieName'] + _0x2d919f(318), _0x237302[_0x2d919f(287)](_0x2d919f(306)), getAjaxRequest()[_0x2d919f(309)](function (_0x449d06) {
            var _0x20745f = _0x2d919f;
            expect(_0x449d06[_0x20745f(319)][_0x237302[_0x20745f(284)][_0x20745f(320)]])['toEqual'](_0x20745f(321)), _0x5b5dc8();
        });
    }), it(_0x55a123(322), function (_0x4e072d) {
        var _0x7a4c76 = _0x55a123;
        axios[_0x7a4c76(284)][_0x7a4c76(286)]['get']['X-CUSTOM-HEADER'] = 'foo', axios[_0x7a4c76(287)](_0x7a4c76(306)), getAjaxRequest()[_0x7a4c76(309)](function (_0x47defb) {
            var _0x5f50d6 = _0x7a4c76;
            expect(_0x47defb[_0x5f50d6(319)][_0x5f50d6(289)])[_0x5f50d6(305)]('foo'), _0x4e072d();
        });
    }), it(_0x55a123(323), function (_0x55e177) {
        var _0x6818b2 = _0x55a123;
        axios[_0x6818b2(284)]['headers'][_0x6818b2(288)]['X-CUSTOM-HEADER'] = 'foo', axios[_0x6818b2(288)](_0x6818b2(306), {}), getAjaxRequest()[_0x6818b2(309)](function (_0x37b809) {
            var _0x19b139 = _0x6818b2;
            expect(_0x37b809['requestHeaders']['X-CUSTOM-HEADER'])[_0x19b139(305)](_0x19b139(300)), _0x55e177();
        });
    }), it(_0x55a123(324), function (_0x433cf1) {
        var _0x985ad1 = _0x55a123, _0x4da251 = axios[_0x985ad1(315)]({
                'headers': {
                    'common': { 'X-COMMON-HEADER': _0x985ad1(325) },
                    'get': { 'X-GET-HEADER': _0x985ad1(326) },
                    'post': { 'X-POST-HEADER': 'postHeaderValue' }
                }
            });
        _0x4da251['get'](_0x985ad1(306), {
            'headers': {
                'X-FOO-HEADER': _0x985ad1(327),
                'X-BAR-HEADER': _0x985ad1(328)
            }
        }), getAjaxRequest()[_0x985ad1(309)](function (_0x2cd50c) {
            var _0x30edf8 = _0x985ad1;
            expect(_0x2cd50c[_0x30edf8(319)])['toEqual'](utils[_0x30edf8(329)](defaults[_0x30edf8(286)]['common'], defaults['headers'][_0x30edf8(287)], {
                'X-COMMON-HEADER': 'commonHeaderValue',
                'X-GET-HEADER': 'getHeaderValue',
                'X-FOO-HEADER': _0x30edf8(327),
                'X-BAR-HEADER': _0x30edf8(328)
            })), _0x433cf1();
        });
    }), it(_0x55a123(330), function (_0x451ca2) {
        var _0x2eea25 = _0x55a123;
        axios['defaults'][_0x2eea25(285)] = _0x2eea25(331);
        var _0x49eef7 = axios[_0x2eea25(315)]();
        _0x49eef7[_0x2eea25(287)](_0x2eea25(306)), getAjaxRequest()[_0x2eea25(309)](function (_0x202339) {
            var _0x454345 = _0x2eea25;
            expect(_0x202339['url'])[_0x454345(305)](_0x454345(332)), _0x451ca2();
        });
    }), it(_0x55a123(333), function (_0x383173) {
        var _0x22fc10 = _0x55a123, _0x40e30a = axios['create']();
        axios[_0x22fc10(284)][_0x22fc10(285)] = _0x22fc10(331), _0x40e30a['get'](_0x22fc10(306)), getAjaxRequest()[_0x22fc10(309)](function (_0x5562c3) {
            var _0x35dc8a = _0x22fc10;
            expect(_0x5562c3['url'])[_0x35dc8a(305)](_0x35dc8a(306)), _0x383173();
        });
    });
});