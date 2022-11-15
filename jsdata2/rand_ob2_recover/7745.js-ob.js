const path = require(_0x683190(178)), spawn = require(_0x683190(179)), httpServer = require(_0x683190(180)), server = httpServer[_0x683190(181)]({ 'root': path[_0x683190(182)](__dirname, _0x683190(183)) });
function _0x2ff9(_0x5a2416, _0x34e426) {
    return _0x2ff9 = function (_0x2d3f8d, _0x2ff9bd) {
        _0x2d3f8d = _0x2d3f8d - 167;
        let _0x1348b0 = _0x2d3f[_0x2d3f8d];
        return _0x1348b0;
    }, _0x2ff9(_0x5a2416, _0x34e426);
}
server[_0x683190(184)](8080);
let args = process[_0x683190(185)][_0x683190(186)](2);
args['indexOf'](_0x683190(187)) === -1 && (args = args['concat']([
    _0x683190(187),
    _0x683190(188)
]));
args[_0x683190(189)](_0x683190(190)) === -1 && (args = args[_0x683190(191)]([
    '--env',
    _0x683190(192)
]));
const i = args[_0x683190(189)](_0x683190(193));
i > -1 && (args[i + 1] = _0x683190(194) + args[i + 1] + _0x683190(195));
const runner = spawn(_0x683190(196), args, { 'stdio': 'inherit' });
runner['on'](_0x683190(197), function (_0x4b0cb0) {
    const _0x27b6c4 = _0x683190;
    server['close'](), process[_0x27b6c4(197)](_0x4b0cb0);
}), runner['on'](_0x683190(198), function (_0x249914) {
    server['close']();
    throw _0x249914;
});