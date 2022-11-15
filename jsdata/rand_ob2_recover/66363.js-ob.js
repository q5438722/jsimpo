var __importDefault = this && this['__importDefault'] || function (_0x296984) {
    const _0x11a5e9 = _0x1e6f;
    return _0x296984 && _0x296984[_0x11a5e9(394)] ? _0x296984 : { 'default': _0x296984 };
};
Object[_0x41815a(395)](exports, '__esModule', { 'value': !![] });
const debug_1 = __importDefault(require(_0x41815a(396))), debug = debug_1[_0x41815a(397)](_0x41815a(398));
function parseProxyResponse(_0x2cbe77) {
    return new Promise((_0x2337f5, _0x4db29d) => {
        const _0x508e3b = _0x1e6f;
        let _0x5b167d = 0;
        const _0x3d2f0f = [];
        function _0x223a8c() {
            const _0x1b8c42 = _0x1e6f, _0x365d8b = _0x2cbe77['read']();
            if (_0x365d8b)
                _0x22cbdb(_0x365d8b);
            else
                _0x2cbe77[_0x1b8c42(399)](_0x1b8c42(400), _0x223a8c);
        }
        function _0x5ae981() {
            const _0x4d9417 = _0x1e6f;
            _0x2cbe77[_0x4d9417(401)](_0x4d9417(402), _0x25bbce), _0x2cbe77['removeListener']('error', _0x5344e9), _0x2cbe77[_0x4d9417(401)](_0x4d9417(403), _0x2a1c95), _0x2cbe77[_0x4d9417(401)](_0x4d9417(400), _0x223a8c);
        }
        function _0x2a1c95(_0x3973b5) {
            const _0x48d483 = _0x1e6f;
            debug(_0x48d483(404), _0x3973b5);
        }
        function _0x25bbce() {
            const _0x334a8b = _0x1e6f;
            debug(_0x334a8b(405));
        }
        function _0x5344e9(_0x5ba324) {
            _0x5ae981(), debug('onerror %o', _0x5ba324), _0x4db29d(_0x5ba324);
        }
        function _0x22cbdb(_0x3cfb1c) {
            const _0xd7a5ca = _0x1e6f;
            _0x3d2f0f['push'](_0x3cfb1c), _0x5b167d += _0x3cfb1c['length'];
            const _0x3b505c = Buffer['concat'](_0x3d2f0f, _0x5b167d), _0x3e8cb6 = _0x3b505c[_0xd7a5ca(406)](_0xd7a5ca(407));
            if (_0x3e8cb6 === -1) {
                debug('have not received end of HTTP headers yet...'), _0x223a8c();
                return;
            }
            const _0x53925a = _0x3b505c['toString'](_0xd7a5ca(408), 0, _0x3b505c['indexOf']('\r\n')), _0x49d0f4 = +_0x53925a['split'](' ')[1];
            debug('got proxy server response: %o', _0x53925a), _0x2337f5({
                'statusCode': _0x49d0f4,
                'buffered': _0x3b505c
            });
        }
        _0x2cbe77['on'](_0x508e3b(409), _0x5344e9), _0x2cbe77['on'](_0x508e3b(403), _0x2a1c95), _0x2cbe77['on'](_0x508e3b(402), _0x25bbce), _0x223a8c();
    });
}
function _0x1e6f(_0x398ca4, _0x35a9a9) {
    return _0x1e6f = function (_0x2d99d1, _0x1e6f7b) {
        _0x2d99d1 = _0x2d99d1 - 382;
        let _0x40e3d5 = _0x2d99[_0x2d99d1];
        return _0x40e3d5;
    }, _0x1e6f(_0x398ca4, _0x35a9a9);
}
exports[_0x41815a(397)] = parseProxyResponse;