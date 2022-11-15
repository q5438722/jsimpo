'use strict';
const _0x2d99 = [
    '131449PpooQt',
    '1NquCAA',
    '458685KdSsub',
    '__esModule',
    'defineProperty',
    'debug',
    'default',
    'https-proxy-agent:parse-proxy-response',
    'once',
    'readable',
    'removeListener',
    'end',
    'close',
    'onclose\x20had\x20error\x20%o',
    'onend',
    'indexOf',
    '\x0d\x0a\x0d\x0a',
    'ascii',
    'error',
    '1mfnOIi',
    '325156KcpfDS',
    '1yMaAJg',
    '42157HGMVdw',
    '132396wdCIpJ',
    '3oKqGQv',
    '2028fstYCf',
    '257uslUbq',
    '1237YlOMbR'
];
const _0x41815a = _0x1e6f;
(function (_0x25ca3e, _0x2e4c86) {
    const _0x3f60d2 = _0x1e6f;
    while (!![]) {
        try {
            const _0x23174e = -parseInt(_0x3f60d2(0x17e)) * -parseInt(_0x3f60d2(0x17f)) + parseInt(_0x3f60d2(0x180)) * parseInt(_0x3f60d2(0x181)) + parseInt(_0x3f60d2(0x182)) + parseInt(_0x3f60d2(0x183)) * -parseInt(_0x3f60d2(0x184)) + parseInt(_0x3f60d2(0x185)) * parseInt(_0x3f60d2(0x186)) + -parseInt(_0x3f60d2(0x187)) * parseInt(_0x3f60d2(0x188)) + -parseInt(_0x3f60d2(0x189));
            if (_0x23174e === _0x2e4c86)
                break;
            else
                _0x25ca3e['push'](_0x25ca3e['shift']());
        } catch (_0xb78efa) {
            _0x25ca3e['push'](_0x25ca3e['shift']());
        }
    }
}(_0x2d99, 0x360d8));
var __importDefault = this && this['__importDefault'] || function (_0x296984) {
    const _0x11a5e9 = _0x1e6f;
    return _0x296984 && _0x296984[_0x11a5e9(0x18a)] ? _0x296984 : { 'default': _0x296984 };
};
Object[_0x41815a(0x18b)](exports, '__esModule', { 'value': !![] });
const debug_1 = __importDefault(require(_0x41815a(0x18c))), debug = debug_1[_0x41815a(0x18d)](_0x41815a(0x18e));
function parseProxyResponse(_0x2cbe77) {
    return new Promise((_0x2337f5, _0x4db29d) => {
        const _0x508e3b = _0x1e6f;
        let _0x5b167d = 0x0;
        const _0x3d2f0f = [];
        function _0x223a8c() {
            const _0x1b8c42 = _0x1e6f, _0x365d8b = _0x2cbe77['read']();
            if (_0x365d8b)
                _0x22cbdb(_0x365d8b);
            else
                _0x2cbe77[_0x1b8c42(0x18f)](_0x1b8c42(0x190), _0x223a8c);
        }
        function _0x5ae981() {
            const _0x4d9417 = _0x1e6f;
            _0x2cbe77[_0x4d9417(0x191)](_0x4d9417(0x192), _0x25bbce), _0x2cbe77['removeListener']('error', _0x5344e9), _0x2cbe77[_0x4d9417(0x191)](_0x4d9417(0x193), _0x2a1c95), _0x2cbe77[_0x4d9417(0x191)](_0x4d9417(0x190), _0x223a8c);
        }
        function _0x2a1c95(_0x3973b5) {
            const _0x48d483 = _0x1e6f;
            debug(_0x48d483(0x194), _0x3973b5);
        }
        function _0x25bbce() {
            const _0x334a8b = _0x1e6f;
            debug(_0x334a8b(0x195));
        }
        function _0x5344e9(_0x5ba324) {
            _0x5ae981(), debug('onerror\x20%o', _0x5ba324), _0x4db29d(_0x5ba324);
        }
        function _0x22cbdb(_0x3cfb1c) {
            const _0xd7a5ca = _0x1e6f;
            _0x3d2f0f['push'](_0x3cfb1c), _0x5b167d += _0x3cfb1c['length'];
            const _0x3b505c = Buffer['concat'](_0x3d2f0f, _0x5b167d), _0x3e8cb6 = _0x3b505c[_0xd7a5ca(0x196)](_0xd7a5ca(0x197));
            if (_0x3e8cb6 === -0x1) {
                debug('have\x20not\x20received\x20end\x20of\x20HTTP\x20headers\x20yet...'), _0x223a8c();
                return;
            }
            const _0x53925a = _0x3b505c['toString'](_0xd7a5ca(0x198), 0x0, _0x3b505c['indexOf']('\x0d\x0a')), _0x49d0f4 = +_0x53925a['split']('\x20')[0x1];
            debug('got\x20proxy\x20server\x20response:\x20%o', _0x53925a), _0x2337f5({
                'statusCode': _0x49d0f4,
                'buffered': _0x3b505c
            });
        }
        _0x2cbe77['on'](_0x508e3b(0x199), _0x5344e9), _0x2cbe77['on'](_0x508e3b(0x193), _0x2a1c95), _0x2cbe77['on'](_0x508e3b(0x192), _0x25bbce), _0x223a8c();
    });
}
function _0x1e6f(_0x398ca4, _0x35a9a9) {
    return _0x1e6f = function (_0x2d99d1, _0x1e6f7b) {
        _0x2d99d1 = _0x2d99d1 - 0x17e;
        let _0x40e3d5 = _0x2d99[_0x2d99d1];
        return _0x40e3d5;
    }, _0x1e6f(_0x398ca4, _0x35a9a9);
}
exports[_0x41815a(0x18d)] = parseProxyResponse;
