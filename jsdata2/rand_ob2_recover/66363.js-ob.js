var __importDefault = this && this[_0x181790(139)] || function (_0x4284ed) {
    const _0x413207 = _0x181790;
    return _0x4284ed && _0x4284ed[_0x413207(140)] ? _0x4284ed : { 'default': _0x4284ed };
};
Object[_0x181790(141)](exports, _0x181790(140), { 'value': !![] });
const debug_1 = __importDefault(require(_0x181790(142))), debug = debug_1[_0x181790(143)](_0x181790(144));
function parseProxyResponse(_0x24acf7) {
    return new Promise((_0x32e842, _0x3f5353) => {
        const _0x40bd3c = _0x3e84;
        let _0x3db236 = 0;
        const _0x54fd69 = [];
        function _0x1e7915() {
            const _0x4aa034 = _0x3e84, _0x5c94fd = _0x24acf7[_0x4aa034(145)]();
            if (_0x5c94fd)
                _0x565c43(_0x5c94fd);
            else
                _0x24acf7[_0x4aa034(146)](_0x4aa034(147), _0x1e7915);
        }
        function _0x21bf33() {
            const _0x684220 = _0x3e84;
            _0x24acf7[_0x684220(148)]('end', _0x4088b1), _0x24acf7['removeListener'](_0x684220(149), _0x17289a), _0x24acf7['removeListener'](_0x684220(150), _0x297f78), _0x24acf7['removeListener'](_0x684220(147), _0x1e7915);
        }
        function _0x297f78(_0x94a5c7) {
            debug('onclose had error %o', _0x94a5c7);
        }
        function _0x4088b1() {
            const _0x5c5375 = _0x3e84;
            debug(_0x5c5375(151));
        }
        function _0x17289a(_0x49b497) {
            const _0x402ba3 = _0x3e84;
            _0x21bf33(), debug(_0x402ba3(152), _0x49b497), _0x3f5353(_0x49b497);
        }
        function _0x565c43(_0x5759d7) {
            const _0x25b88d = _0x3e84;
            _0x54fd69[_0x25b88d(153)](_0x5759d7), _0x3db236 += _0x5759d7[_0x25b88d(154)];
            const _0x233b0d = Buffer['concat'](_0x54fd69, _0x3db236), _0x40c00d = _0x233b0d[_0x25b88d(155)](_0x25b88d(156));
            if (_0x40c00d === -1) {
                debug(_0x25b88d(157)), _0x1e7915();
                return;
            }
            const _0xe70c5d = _0x233b0d[_0x25b88d(158)](_0x25b88d(159), 0, _0x233b0d[_0x25b88d(155)]('\r\n')), _0x28ebc4 = +_0xe70c5d[_0x25b88d(160)](' ')[1];
            debug(_0x25b88d(161), _0xe70c5d), _0x32e842({
                'statusCode': _0x28ebc4,
                'buffered': _0x233b0d
            });
        }
        _0x24acf7['on'](_0x40bd3c(149), _0x17289a), _0x24acf7['on'](_0x40bd3c(150), _0x297f78), _0x24acf7['on'](_0x40bd3c(162), _0x4088b1), _0x1e7915();
    });
}
function _0x3e84(_0x15d5a0, _0x829716) {
    return _0x3e84 = function (_0x41db2a, _0x3e84f5) {
        _0x41db2a = _0x41db2a - 129;
        let _0x5d111a = _0x41db[_0x41db2a];
        return _0x5d111a;
    }, _0x3e84(_0x15d5a0, _0x829716);
}
exports[_0x181790(143)] = parseProxyResponse;