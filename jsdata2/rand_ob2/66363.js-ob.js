'use strict';
const _0x41db = [
    'default',
    'https-proxy-agent:parse-proxy-response',
    'read',
    'once',
    'readable',
    'removeListener',
    'error',
    'close',
    'onend',
    'onerror\x20%o',
    'push',
    'length',
    'indexOf',
    '\x0d\x0a\x0d\x0a',
    'have\x20not\x20received\x20end\x20of\x20HTTP\x20headers\x20yet...',
    'toString',
    'ascii',
    'split',
    'got\x20proxy\x20server\x20response:\x20%o',
    'end',
    '243470DENfnK',
    '2VRXAmK',
    '6031BGAMEq',
    '70FVtAbx',
    '234904ScpDBk',
    '664816HblmBI',
    '868350MyTiKI',
    '54604bnPbqj',
    '29wXpQiB',
    '195503pnERXi',
    '__importDefault',
    '__esModule',
    'defineProperty',
    'debug'
];
const _0x181790 = _0x3e84;
(function (_0x44bba9, _0x40fd1f) {
    const _0x42d6ee = _0x3e84;
    while (!![]) {
        try {
            const _0x52a8b6 = -parseInt(_0x42d6ee(0x81)) * parseInt(_0x42d6ee(0x82)) + -parseInt(_0x42d6ee(0x83)) * parseInt(_0x42d6ee(0x84)) + parseInt(_0x42d6ee(0x85)) + parseInt(_0x42d6ee(0x86)) + -parseInt(_0x42d6ee(0x87)) + parseInt(_0x42d6ee(0x88)) * parseInt(_0x42d6ee(0x89)) + parseInt(_0x42d6ee(0x8a));
            if (_0x52a8b6 === _0x40fd1f)
                break;
            else
                _0x44bba9['push'](_0x44bba9['shift']());
        } catch (_0x5c6a7f) {
            _0x44bba9['push'](_0x44bba9['shift']());
        }
    }
}(_0x41db, 0xdc09f));
var __importDefault = this && this[_0x181790(0x8b)] || function (_0x4284ed) {
    const _0x413207 = _0x181790;
    return _0x4284ed && _0x4284ed[_0x413207(0x8c)] ? _0x4284ed : { 'default': _0x4284ed };
};
Object[_0x181790(0x8d)](exports, _0x181790(0x8c), { 'value': !![] });
const debug_1 = __importDefault(require(_0x181790(0x8e))), debug = debug_1[_0x181790(0x8f)](_0x181790(0x90));
function parseProxyResponse(_0x24acf7) {
    return new Promise((_0x32e842, _0x3f5353) => {
        const _0x40bd3c = _0x3e84;
        let _0x3db236 = 0x0;
        const _0x54fd69 = [];
        function _0x1e7915() {
            const _0x4aa034 = _0x3e84, _0x5c94fd = _0x24acf7[_0x4aa034(0x91)]();
            if (_0x5c94fd)
                _0x565c43(_0x5c94fd);
            else
                _0x24acf7[_0x4aa034(0x92)](_0x4aa034(0x93), _0x1e7915);
        }
        function _0x21bf33() {
            const _0x684220 = _0x3e84;
            _0x24acf7[_0x684220(0x94)]('end', _0x4088b1), _0x24acf7['removeListener'](_0x684220(0x95), _0x17289a), _0x24acf7['removeListener'](_0x684220(0x96), _0x297f78), _0x24acf7['removeListener'](_0x684220(0x93), _0x1e7915);
        }
        function _0x297f78(_0x94a5c7) {
            debug('onclose\x20had\x20error\x20%o', _0x94a5c7);
        }
        function _0x4088b1() {
            const _0x5c5375 = _0x3e84;
            debug(_0x5c5375(0x97));
        }
        function _0x17289a(_0x49b497) {
            const _0x402ba3 = _0x3e84;
            _0x21bf33(), debug(_0x402ba3(0x98), _0x49b497), _0x3f5353(_0x49b497);
        }
        function _0x565c43(_0x5759d7) {
            const _0x25b88d = _0x3e84;
            _0x54fd69[_0x25b88d(0x99)](_0x5759d7), _0x3db236 += _0x5759d7[_0x25b88d(0x9a)];
            const _0x233b0d = Buffer['concat'](_0x54fd69, _0x3db236), _0x40c00d = _0x233b0d[_0x25b88d(0x9b)](_0x25b88d(0x9c));
            if (_0x40c00d === -0x1) {
                debug(_0x25b88d(0x9d)), _0x1e7915();
                return;
            }
            const _0xe70c5d = _0x233b0d[_0x25b88d(0x9e)](_0x25b88d(0x9f), 0x0, _0x233b0d[_0x25b88d(0x9b)]('\x0d\x0a')), _0x28ebc4 = +_0xe70c5d[_0x25b88d(0xa0)]('\x20')[0x1];
            debug(_0x25b88d(0xa1), _0xe70c5d), _0x32e842({
                'statusCode': _0x28ebc4,
                'buffered': _0x233b0d
            });
        }
        _0x24acf7['on'](_0x40bd3c(0x95), _0x17289a), _0x24acf7['on'](_0x40bd3c(0x96), _0x297f78), _0x24acf7['on'](_0x40bd3c(0xa2), _0x4088b1), _0x1e7915();
    });
}
function _0x3e84(_0x15d5a0, _0x829716) {
    return _0x3e84 = function (_0x41db2a, _0x3e84f5) {
        _0x41db2a = _0x41db2a - 0x81;
        let _0x5d111a = _0x41db[_0x41db2a];
        return _0x5d111a;
    }, _0x3e84(_0x15d5a0, _0x829716);
}
exports[_0x181790(0x8f)] = parseProxyResponse;
