var defaults = require('../../lib/defaults'), utils = require('../../lib/utils');
describe('defaults', function () {
    var _0x33971a = 'CUSTOM-XSRF-TOKEN';
    beforeEach(function () {
        jasmine['Ajax']['install']();
    }), afterEach(function () {
        jasmine['Ajax']['uninstall'](), delete axios['defaults']['baseURL'], delete axios['defaults']['headers']['get']['X-CUSTOM-HEADER'], delete axios['defaults']['headers']['post']['X-CUSTOM-HEADER'], document['cookie'] = _0x33971a + '=;expires=' + new Date(Date['now']() - (0x1cd0ede + -0x1 * 0xd8aa85 + -0x1 * -0x431f7a7))['toGMTString']();
    }), it('should\x20transform\x20request\x20json', function () {
        expect(defaults['transformRequest'][-0x4d5 * 0x5 + 0x626 + 0x35 * 0x57]({ 'foo': 'bar' }))['toEqual']('{\x22foo\x22:\x22bar\x22}');
    }), it('should\x20do\x20nothing\x20to\x20request\x20string', function () {
        expect(defaults['transformRequest'][-0x14b3 + 0xd17 + -0x4 * -0x1e7]('foo=bar'))['toEqual']('foo=bar');
    }), it('should\x20transform\x20response\x20json', function () {
        var _0x4d7a50 = defaults['transformResponse'][0x4c1 + 0x1f5c + -0x1 * 0x241d]['call'](defaults, '{\x22foo\x22:\x22bar\x22}');
        expect(typeof _0x4d7a50)['toEqual']('object'), expect(_0x4d7a50['foo'])['toEqual']('bar');
    }), it('should\x20do\x20nothing\x20to\x20response\x20string', function () {
        expect(defaults['transformResponse'][-0xf75 * 0x1 + -0x151c + -0x197 * -0x17]('foo=bar'))['toEqual']('foo=bar');
    }), it('should\x20use\x20global\x20defaults\x20config', function (_0x1eba52) {
        axios('/foo'), getAjaxRequest()['then'](function (_0x3c0e6c) {
            expect(_0x3c0e6c['url'])['toBe']('/foo'), _0x1eba52();
        });
    }), it('should\x20use\x20modified\x20defaults\x20config', function (_0x1ce0cb) {
        axios['defaults']['baseURL'] = 'http://example.com/', axios('/foo'), getAjaxRequest()['then'](function (_0x3cfa7a) {
            expect(_0x3cfa7a['url'])['toBe']('http://example.com/foo'), _0x1ce0cb();
        });
    }), it('should\x20use\x20request\x20config', function (_0x4c2d62) {
        axios('/foo', { 'baseURL': 'http://www.example.com' }), getAjaxRequest()['then'](function (_0x4537de) {
            expect(_0x4537de['url'])['toBe']('http://www.example.com/foo'), _0x4c2d62();
        });
    }), it('should\x20use\x20default\x20config\x20for\x20custom\x20instance', function (_0x10874) {
        var _0x348911 = axios['create']({
            'xsrfCookieName': _0x33971a,
            'xsrfHeaderName': 'X-CUSTOM-XSRF-TOKEN'
        });
        document['cookie'] = _0x348911['defaults']['xsrfCookieName'] + '=foobarbaz', _0x348911['get']('/foo'), getAjaxRequest()['then'](function (_0x267782) {
            expect(_0x267782['requestHeaders'][_0x348911['defaults']['xsrfHeaderName']])['toEqual']('foobarbaz'), _0x10874();
        });
    }), it('should\x20use\x20GET\x20headers', function (_0x48850d) {
        axios['defaults']['headers']['get']['X-CUSTOM-HEADER'] = 'foo', axios['get']('/foo'), getAjaxRequest()['then'](function (_0x3ec220) {
            expect(_0x3ec220['requestHeaders']['X-CUSTOM-HEADER'])['toBe']('foo'), _0x48850d();
        });
    }), it('should\x20use\x20POST\x20headers', function (_0x5cbe0a) {
        axios['defaults']['headers']['post']['X-CUSTOM-HEADER'] = 'foo', axios['post']('/foo', {}), getAjaxRequest()['then'](function (_0x4abe1b) {
            expect(_0x4abe1b['requestHeaders']['X-CUSTOM-HEADER'])['toBe']('foo'), _0x5cbe0a();
        });
    }), it('should\x20use\x20header\x20config', function (_0x5a609d) {
        var _0x31bc00 = axios['create']({
            'headers': {
                'common': { 'X-COMMON-HEADER': 'commonHeaderValue' },
                'get': { 'X-GET-HEADER': 'getHeaderValue' },
                'post': { 'X-POST-HEADER': 'postHeaderValue' }
            }
        });
        _0x31bc00['get']('/foo', {
            'headers': {
                'X-FOO-HEADER': 'fooHeaderValue',
                'X-BAR-HEADER': 'barHeaderValue'
            }
        }), getAjaxRequest()['then'](function (_0xfef37b) {
            expect(_0xfef37b['requestHeaders'])['toEqual'](utils['merge'](defaults['headers']['common'], defaults['headers']['get'], {
                'X-COMMON-HEADER': 'commonHeaderValue',
                'X-GET-HEADER': 'getHeaderValue',
                'X-FOO-HEADER': 'fooHeaderValue',
                'X-BAR-HEADER': 'barHeaderValue'
            })), _0x5a609d();
        });
    }), it('should\x20be\x20used\x20by\x20custom\x20instance\x20if\x20set\x20before\x20instance\x20created', function (_0x2f84fc) {
        axios['defaults']['baseURL'] = 'http://example.org/';
        var _0x26dbe7 = axios['create']();
        _0x26dbe7['get']('/foo'), getAjaxRequest()['then'](function (_0xe0c7ed) {
            expect(_0xe0c7ed['url'])['toBe']('http://example.org/foo'), _0x2f84fc();
        });
    }), it('should\x20not\x20be\x20used\x20by\x20custom\x20instance\x20if\x20set\x20after\x20instance\x20created', function (_0xbb0dc0) {
        var _0x27b53b = axios['create']();
        axios['defaults']['baseURL'] = 'http://example.org/', _0x27b53b['get']('/foo'), getAjaxRequest()['then'](function (_0x1f669f) {
            expect(_0x1f669f['url'])['toBe']('/foo'), _0xbb0dc0();
        });
    });
});
