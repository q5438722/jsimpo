'use strict';
var __importDefault = this && this['__importDefault'] || function (_0x50368b) {
    return _0x50368b && _0x50368b['__esModule'] ? _0x50368b : { 'default': _0x50368b };
};
Object['defineProperty'](exports, '__esModule', { 'value': !![] });
const debug_1 = __importDefault(require('debug')), debug = debug_1['default']('https-proxy-agent:parse-proxy-response');
function parseProxyResponse(_0x1b27cc) {
    return new Promise((_0x18bf14, _0x289850) => {
        let _0x523114 = 0x67 * -0x1 + -0x1 * 0x10cf + -0x1136 * -0x1;
        const _0x3410f7 = [];
        function _0x42fa04() {
            const _0x1628d4 = _0x1b27cc['read']();
            if (_0x1628d4)
                _0x4cb3d6(_0x1628d4);
            else
                _0x1b27cc['once']('readable', _0x42fa04);
        }
        function _0x2a752a() {
            _0x1b27cc['removeListener']('end', _0x47b1e3), _0x1b27cc['removeListener']('error', _0x222c3e), _0x1b27cc['removeListener']('close', _0x2e829c), _0x1b27cc['removeListener']('readable', _0x42fa04);
        }
        function _0x2e829c(_0x2e6dc0) {
            debug('onclose\x20had\x20error\x20%o', _0x2e6dc0);
        }
        function _0x47b1e3() {
            debug('onend');
        }
        function _0x222c3e(_0x50e0f1) {
            _0x2a752a(), debug('onerror\x20%o', _0x50e0f1), _0x289850(_0x50e0f1);
        }
        function _0x4cb3d6(_0x37c830) {
            _0x3410f7['push'](_0x37c830), _0x523114 += _0x37c830['length'];
            const _0x1f7401 = Buffer['concat'](_0x3410f7, _0x523114), _0x2906b7 = _0x1f7401['indexOf']('\x0d\x0a\x0d\x0a');
            if (_0x2906b7 === -(0x1 * 0x1d99 + 0x287 * -0x3 + -0x1603)) {
                debug('have\x20not\x20received\x20end\x20of\x20HTTP\x20headers\x20yet...'), _0x42fa04();
                return;
            }
            const _0x134f36 = _0x1f7401['toString']('ascii', 0x15ef * -0x1 + 0x8 * 0x276 + 0x23f, _0x1f7401['indexOf']('\x0d\x0a')), _0x5bcdb1 = +_0x134f36['split']('\x20')[0x2533 * -0x1 + 0x6 * -0x2c6 + 0x2 * 0x1aec];
            debug('got\x20proxy\x20server\x20response:\x20%o', _0x134f36), _0x18bf14({
                'statusCode': _0x5bcdb1,
                'buffered': _0x1f7401
            });
        }
        _0x1b27cc['on']('error', _0x222c3e), _0x1b27cc['on']('close', _0x2e829c), _0x1b27cc['on']('end', _0x47b1e3), _0x42fa04();
    });
}
exports['default'] = parseProxyResponse;
