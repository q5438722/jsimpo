var _0x40d8 = [
    '43JfNclj',
    '351645ZjhWUj',
    '320818KmVdkC',
    '1hHgdnu',
    '87161IMPAJl',
    '2sGkrxp',
    '46675ZkiVie',
    '../../lib/defaults',
    'defaults',
    'CUSTOM-XSRF-TOKEN',
    'Ajax',
    'install',
    'baseURL',
    'headers',
    'get',
    'post',
    'X-CUSTOM-HEADER',
    'cookie',
    'now',
    'toGMTString',
    'bar',
    'toEqual',
    '{\x22foo\x22:\x22bar\x22}',
    'should\x20do\x20nothing\x20to\x20request\x20string',
    'transformRequest',
    'foo=bar',
    'transformResponse',
    'call',
    'object',
    'foo',
    'should\x20do\x20nothing\x20to\x20response\x20string',
    'should\x20use\x20global\x20defaults\x20config',
    'then',
    'url',
    'toBe',
    '/foo',
    'should\x20use\x20modified\x20defaults\x20config',
    'http://example.com/',
    'should\x20use\x20request\x20config',
    'http://www.example.com/foo',
    'should\x20use\x20default\x20config\x20for\x20custom\x20instance',
    'X-CUSTOM-XSRF-TOKEN',
    'xsrfCookieName',
    '=foobarbaz',
    'requestHeaders',
    'foobarbaz',
    'should\x20use\x20GET\x20headers',
    'should\x20use\x20POST\x20headers',
    'should\x20use\x20header\x20config',
    'commonHeaderValue',
    'postHeaderValue',
    'barHeaderValue',
    'merge',
    'common',
    'getHeaderValue',
    'fooHeaderValue',
    'should\x20be\x20used\x20by\x20custom\x20instance\x20if\x20set\x20before\x20instance\x20created',
    'http://example.org/',
    'create',
    'http://example.org/foo',
    'should\x20not\x20be\x20used\x20by\x20custom\x20instance\x20if\x20set\x20after\x20instance\x20created',
    '170302LFjyPp',
    '2xxOSMZ',
    '186469VXlqFv',
    '2rzYAjB',
    '7846UwufDF'
];
var _0x5dcbe5 = _0x2822;
(function (_0x312b7f, _0x193527) {
    var _0x3e9bf1 = _0x2822;
    while (!![]) {
        try {
            var _0x46f819 = parseInt(_0x3e9bf1(0x113)) * -parseInt(_0x3e9bf1(0x114)) + -parseInt(_0x3e9bf1(0x115)) * -parseInt(_0x3e9bf1(0x116)) + parseInt(_0x3e9bf1(0x117)) * -parseInt(_0x3e9bf1(0x118)) + parseInt(_0x3e9bf1(0x119)) + parseInt(_0x3e9bf1(0x11a)) * parseInt(_0x3e9bf1(0x11b)) + -parseInt(_0x3e9bf1(0x11c)) + parseInt(_0x3e9bf1(0x11d)) * -parseInt(_0x3e9bf1(0x11e));
            if (_0x46f819 === _0x193527)
                break;
            else
                _0x312b7f['push'](_0x312b7f['shift']());
        } catch (_0x3325a1) {
            _0x312b7f['push'](_0x312b7f['shift']());
        }
    }
}(_0x40d8, 0x2da1c));
var defaults = require(_0x5dcbe5(0x11f)), utils = require('../../lib/utils');
function _0x2822(_0x45536b, _0x27e47a) {
    return _0x2822 = function (_0x40d83a, _0x282208) {
        _0x40d83a = _0x40d83a - 0x113;
        var _0x56699b = _0x40d8[_0x40d83a];
        return _0x56699b;
    }, _0x2822(_0x45536b, _0x27e47a);
}
describe(_0x5dcbe5(0x120), function () {
    var _0x546057 = _0x5dcbe5, _0x2aae78 = _0x546057(0x121);
    beforeEach(function () {
        var _0x166983 = _0x546057;
        jasmine[_0x166983(0x122)][_0x166983(0x123)]();
    }), afterEach(function () {
        var _0x46f544 = _0x546057;
        jasmine['Ajax']['uninstall'](), delete axios['defaults'][_0x46f544(0x124)], delete axios['defaults'][_0x46f544(0x125)][_0x46f544(0x126)]['X-CUSTOM-HEADER'], delete axios[_0x46f544(0x120)][_0x46f544(0x125)][_0x46f544(0x127)][_0x46f544(0x128)], document[_0x46f544(0x129)] = _0x2aae78 + '=;expires=' + new Date(Date[_0x46f544(0x12a)]() - 0x5265c00)[_0x46f544(0x12b)]();
    }), it('should\x20transform\x20request\x20json', function () {
        var _0x219dd8 = _0x546057;
        expect(defaults['transformRequest'][0x0]({ 'foo': _0x219dd8(0x12c) }))[_0x219dd8(0x12d)](_0x219dd8(0x12e));
    }), it(_0x546057(0x12f), function () {
        var _0x1a0fc8 = _0x546057;
        expect(defaults[_0x1a0fc8(0x130)][0x0]('foo=bar'))[_0x1a0fc8(0x12d)](_0x1a0fc8(0x131));
    }), it('should\x20transform\x20response\x20json', function () {
        var _0x28291d = _0x546057, _0x7237d5 = defaults[_0x28291d(0x132)][0x0][_0x28291d(0x133)](defaults, _0x28291d(0x12e));
        expect(typeof _0x7237d5)[_0x28291d(0x12d)](_0x28291d(0x134)), expect(_0x7237d5[_0x28291d(0x135)])['toEqual']('bar');
    }), it(_0x546057(0x136), function () {
        var _0x5d0f79 = _0x546057;
        expect(defaults['transformResponse'][0x0](_0x5d0f79(0x131)))[_0x5d0f79(0x12d)](_0x5d0f79(0x131));
    }), it(_0x546057(0x137), function (_0x33da0f) {
        var _0x5ae26b = _0x546057;
        axios('/foo'), getAjaxRequest()[_0x5ae26b(0x138)](function (_0x5911f6) {
            var _0xe6e199 = _0x5ae26b;
            expect(_0x5911f6[_0xe6e199(0x139)])[_0xe6e199(0x13a)](_0xe6e199(0x13b)), _0x33da0f();
        });
    }), it(_0x546057(0x13c), function (_0x150ba6) {
        var _0xa5296f = _0x546057;
        axios[_0xa5296f(0x120)][_0xa5296f(0x124)] = _0xa5296f(0x13d), axios(_0xa5296f(0x13b)), getAjaxRequest()[_0xa5296f(0x138)](function (_0x29a6a6) {
            expect(_0x29a6a6['url'])['toBe']('http://example.com/foo'), _0x150ba6();
        });
    }), it(_0x546057(0x13e), function (_0x44ae4e) {
        var _0x9ed180 = _0x546057;
        axios(_0x9ed180(0x13b), { 'baseURL': 'http://www.example.com' }), getAjaxRequest()[_0x9ed180(0x138)](function (_0x333b1c) {
            var _0xf3da7c = _0x9ed180;
            expect(_0x333b1c[_0xf3da7c(0x139)])['toBe'](_0xf3da7c(0x13f)), _0x44ae4e();
        });
    }), it(_0x546057(0x140), function (_0xb5abfd) {
        var _0x28f1fc = _0x546057, _0x1b9b26 = axios['create']({
                'xsrfCookieName': _0x2aae78,
                'xsrfHeaderName': _0x28f1fc(0x141)
            });
        document[_0x28f1fc(0x129)] = _0x1b9b26[_0x28f1fc(0x120)][_0x28f1fc(0x142)] + _0x28f1fc(0x143), _0x1b9b26[_0x28f1fc(0x126)](_0x28f1fc(0x13b)), getAjaxRequest()[_0x28f1fc(0x138)](function (_0x3ed6e9) {
            var _0x9e376e = _0x28f1fc;
            expect(_0x3ed6e9[_0x9e376e(0x144)][_0x1b9b26[_0x9e376e(0x120)]['xsrfHeaderName']])[_0x9e376e(0x12d)](_0x9e376e(0x145)), _0xb5abfd();
        });
    }), it(_0x546057(0x146), function (_0x3beb40) {
        var _0x46ed34 = _0x546057;
        axios[_0x46ed34(0x120)][_0x46ed34(0x125)]['get'][_0x46ed34(0x128)] = _0x46ed34(0x135), axios[_0x46ed34(0x126)](_0x46ed34(0x13b)), getAjaxRequest()[_0x46ed34(0x138)](function (_0x2f6125) {
            var _0xc4d372 = _0x46ed34;
            expect(_0x2f6125[_0xc4d372(0x144)][_0xc4d372(0x128)])[_0xc4d372(0x13a)](_0xc4d372(0x135)), _0x3beb40();
        });
    }), it(_0x546057(0x147), function (_0x49360b) {
        var _0x7af7df = _0x546057;
        axios['defaults'][_0x7af7df(0x125)][_0x7af7df(0x127)][_0x7af7df(0x128)] = _0x7af7df(0x135), axios[_0x7af7df(0x127)](_0x7af7df(0x13b), {}), getAjaxRequest()[_0x7af7df(0x138)](function (_0x32ddd5) {
            var _0x107617 = _0x7af7df;
            expect(_0x32ddd5[_0x107617(0x144)][_0x107617(0x128)])[_0x107617(0x13a)](_0x107617(0x135)), _0x49360b();
        });
    }), it(_0x546057(0x148), function (_0x18aa16) {
        var _0x205bea = _0x546057, _0x91e53a = axios['create']({
                'headers': {
                    'common': { 'X-COMMON-HEADER': _0x205bea(0x149) },
                    'get': { 'X-GET-HEADER': 'getHeaderValue' },
                    'post': { 'X-POST-HEADER': _0x205bea(0x14a) }
                }
            });
        _0x91e53a[_0x205bea(0x126)](_0x205bea(0x13b), {
            'headers': {
                'X-FOO-HEADER': 'fooHeaderValue',
                'X-BAR-HEADER': _0x205bea(0x14b)
            }
        }), getAjaxRequest()[_0x205bea(0x138)](function (_0x1ad35e) {
            var _0x1f61cc = _0x205bea;
            expect(_0x1ad35e[_0x1f61cc(0x144)])[_0x1f61cc(0x12d)](utils[_0x1f61cc(0x14c)](defaults['headers'][_0x1f61cc(0x14d)], defaults[_0x1f61cc(0x125)][_0x1f61cc(0x126)], {
                'X-COMMON-HEADER': _0x1f61cc(0x149),
                'X-GET-HEADER': _0x1f61cc(0x14e),
                'X-FOO-HEADER': _0x1f61cc(0x14f),
                'X-BAR-HEADER': _0x1f61cc(0x14b)
            })), _0x18aa16();
        });
    }), it(_0x546057(0x150), function (_0x393f9c) {
        var _0x13842c = _0x546057;
        axios[_0x13842c(0x120)]['baseURL'] = _0x13842c(0x151);
        var _0x3a1b3d = axios[_0x13842c(0x152)]();
        _0x3a1b3d[_0x13842c(0x126)](_0x13842c(0x13b)), getAjaxRequest()[_0x13842c(0x138)](function (_0x31f0ec) {
            var _0x893844 = _0x13842c;
            expect(_0x31f0ec[_0x893844(0x139)])[_0x893844(0x13a)](_0x893844(0x153)), _0x393f9c();
        });
    }), it(_0x546057(0x154), function (_0x2e62bb) {
        var _0x68b179 = _0x546057, _0x1e5c77 = axios[_0x68b179(0x152)]();
        axios[_0x68b179(0x120)]['baseURL'] = _0x68b179(0x151), _0x1e5c77['get'](_0x68b179(0x13b)), getAjaxRequest()[_0x68b179(0x138)](function (_0x3e0527) {
            var _0x5615eb = _0x68b179;
            expect(_0x3e0527[_0x5615eb(0x139)])[_0x5615eb(0x13a)]('/foo'), _0x2e62bb();
        });
    });
});
