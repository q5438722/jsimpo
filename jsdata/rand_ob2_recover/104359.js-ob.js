var defaults = require(_0x5dcbe5(287)), utils = require('../../lib/utils');
function _0x2822(_0x45536b, _0x27e47a) {
    return _0x2822 = function (_0x40d83a, _0x282208) {
        _0x40d83a = _0x40d83a - 275;
        var _0x56699b = _0x40d8[_0x40d83a];
        return _0x56699b;
    }, _0x2822(_0x45536b, _0x27e47a);
}
describe(_0x5dcbe5(288), function () {
    var _0x546057 = _0x5dcbe5, _0x2aae78 = _0x546057(289);
    beforeEach(function () {
        var _0x166983 = _0x546057;
        jasmine[_0x166983(290)][_0x166983(291)]();
    }), afterEach(function () {
        var _0x46f544 = _0x546057;
        jasmine['Ajax']['uninstall'](), delete axios['defaults'][_0x46f544(292)], delete axios['defaults'][_0x46f544(293)][_0x46f544(294)]['X-CUSTOM-HEADER'], delete axios[_0x46f544(288)][_0x46f544(293)][_0x46f544(295)][_0x46f544(296)], document[_0x46f544(297)] = _0x2aae78 + '=;expires=' + new Date(Date[_0x46f544(298)]() - 86400000)[_0x46f544(299)]();
    }), it('should transform request json', function () {
        var _0x219dd8 = _0x546057;
        expect(defaults['transformRequest'][0]({ 'foo': _0x219dd8(300) }))[_0x219dd8(301)](_0x219dd8(302));
    }), it(_0x546057(303), function () {
        var _0x1a0fc8 = _0x546057;
        expect(defaults[_0x1a0fc8(304)][0]('foo=bar'))[_0x1a0fc8(301)](_0x1a0fc8(305));
    }), it('should transform response json', function () {
        var _0x28291d = _0x546057, _0x7237d5 = defaults[_0x28291d(306)][0][_0x28291d(307)](defaults, _0x28291d(302));
        expect(typeof _0x7237d5)[_0x28291d(301)](_0x28291d(308)), expect(_0x7237d5[_0x28291d(309)])['toEqual']('bar');
    }), it(_0x546057(310), function () {
        var _0x5d0f79 = _0x546057;
        expect(defaults['transformResponse'][0](_0x5d0f79(305)))[_0x5d0f79(301)](_0x5d0f79(305));
    }), it(_0x546057(311), function (_0x33da0f) {
        var _0x5ae26b = _0x546057;
        axios('/foo'), getAjaxRequest()[_0x5ae26b(312)](function (_0x5911f6) {
            var _0xe6e199 = _0x5ae26b;
            expect(_0x5911f6[_0xe6e199(313)])[_0xe6e199(314)](_0xe6e199(315)), _0x33da0f();
        });
    }), it(_0x546057(316), function (_0x150ba6) {
        var _0xa5296f = _0x546057;
        axios[_0xa5296f(288)][_0xa5296f(292)] = _0xa5296f(317), axios(_0xa5296f(315)), getAjaxRequest()[_0xa5296f(312)](function (_0x29a6a6) {
            expect(_0x29a6a6['url'])['toBe']('http://example.com/foo'), _0x150ba6();
        });
    }), it(_0x546057(318), function (_0x44ae4e) {
        var _0x9ed180 = _0x546057;
        axios(_0x9ed180(315), { 'baseURL': 'http://www.example.com' }), getAjaxRequest()[_0x9ed180(312)](function (_0x333b1c) {
            var _0xf3da7c = _0x9ed180;
            expect(_0x333b1c[_0xf3da7c(313)])['toBe'](_0xf3da7c(319)), _0x44ae4e();
        });
    }), it(_0x546057(320), function (_0xb5abfd) {
        var _0x28f1fc = _0x546057, _0x1b9b26 = axios['create']({
                'xsrfCookieName': _0x2aae78,
                'xsrfHeaderName': _0x28f1fc(321)
            });
        document[_0x28f1fc(297)] = _0x1b9b26[_0x28f1fc(288)][_0x28f1fc(322)] + _0x28f1fc(323), _0x1b9b26[_0x28f1fc(294)](_0x28f1fc(315)), getAjaxRequest()[_0x28f1fc(312)](function (_0x3ed6e9) {
            var _0x9e376e = _0x28f1fc;
            expect(_0x3ed6e9[_0x9e376e(324)][_0x1b9b26[_0x9e376e(288)]['xsrfHeaderName']])[_0x9e376e(301)](_0x9e376e(325)), _0xb5abfd();
        });
    }), it(_0x546057(326), function (_0x3beb40) {
        var _0x46ed34 = _0x546057;
        axios[_0x46ed34(288)][_0x46ed34(293)]['get'][_0x46ed34(296)] = _0x46ed34(309), axios[_0x46ed34(294)](_0x46ed34(315)), getAjaxRequest()[_0x46ed34(312)](function (_0x2f6125) {
            var _0xc4d372 = _0x46ed34;
            expect(_0x2f6125[_0xc4d372(324)][_0xc4d372(296)])[_0xc4d372(314)](_0xc4d372(309)), _0x3beb40();
        });
    }), it(_0x546057(327), function (_0x49360b) {
        var _0x7af7df = _0x546057;
        axios['defaults'][_0x7af7df(293)][_0x7af7df(295)][_0x7af7df(296)] = _0x7af7df(309), axios[_0x7af7df(295)](_0x7af7df(315), {}), getAjaxRequest()[_0x7af7df(312)](function (_0x32ddd5) {
            var _0x107617 = _0x7af7df;
            expect(_0x32ddd5[_0x107617(324)][_0x107617(296)])[_0x107617(314)](_0x107617(309)), _0x49360b();
        });
    }), it(_0x546057(328), function (_0x18aa16) {
        var _0x205bea = _0x546057, _0x91e53a = axios['create']({
                'headers': {
                    'common': { 'X-COMMON-HEADER': _0x205bea(329) },
                    'get': { 'X-GET-HEADER': 'getHeaderValue' },
                    'post': { 'X-POST-HEADER': _0x205bea(330) }
                }
            });
        _0x91e53a[_0x205bea(294)](_0x205bea(315), {
            'headers': {
                'X-FOO-HEADER': 'fooHeaderValue',
                'X-BAR-HEADER': _0x205bea(331)
            }
        }), getAjaxRequest()[_0x205bea(312)](function (_0x1ad35e) {
            var _0x1f61cc = _0x205bea;
            expect(_0x1ad35e[_0x1f61cc(324)])[_0x1f61cc(301)](utils[_0x1f61cc(332)](defaults['headers'][_0x1f61cc(333)], defaults[_0x1f61cc(293)][_0x1f61cc(294)], {
                'X-COMMON-HEADER': _0x1f61cc(329),
                'X-GET-HEADER': _0x1f61cc(334),
                'X-FOO-HEADER': _0x1f61cc(335),
                'X-BAR-HEADER': _0x1f61cc(331)
            })), _0x18aa16();
        });
    }), it(_0x546057(336), function (_0x393f9c) {
        var _0x13842c = _0x546057;
        axios[_0x13842c(288)]['baseURL'] = _0x13842c(337);
        var _0x3a1b3d = axios[_0x13842c(338)]();
        _0x3a1b3d[_0x13842c(294)](_0x13842c(315)), getAjaxRequest()[_0x13842c(312)](function (_0x31f0ec) {
            var _0x893844 = _0x13842c;
            expect(_0x31f0ec[_0x893844(313)])[_0x893844(314)](_0x893844(339)), _0x393f9c();
        });
    }), it(_0x546057(340), function (_0x2e62bb) {
        var _0x68b179 = _0x546057, _0x1e5c77 = axios[_0x68b179(338)]();
        axios[_0x68b179(288)]['baseURL'] = _0x68b179(337), _0x1e5c77['get'](_0x68b179(315)), getAjaxRequest()[_0x68b179(312)](function (_0x3e0527) {
            var _0x5615eb = _0x68b179;
            expect(_0x3e0527[_0x5615eb(313)])[_0x5615eb(314)]('/foo'), _0x2e62bb();
        });
    });
});