const _0x2d3f = [
    'concat',
    'chrome,phantomjs',
    '--test',
    'test/e2e/specs/',
    '.js',
    './node_modules/.bin/nightwatch',
    'exit',
    'error',
    '571XVPmtj',
    '808eLXwrs',
    '401748JgVnVQ',
    '247196SapKoq',
    '5hiwDGF',
    '87499fLTeRz',
    '39146QVyRnM',
    '1VDJvYZ',
    '529687Hwcsve',
    '2545fvehGn',
    '983rmfyio',
    'path',
    'cross-spawn',
    'http-server',
    'createServer',
    'resolve',
    '../../',
    'listen',
    'argv',
    'slice',
    '--config',
    'test/e2e/nightwatch.config.js',
    'indexOf',
    '--env'
];
const _0x683190 = _0x2ff9;
(function (_0x511cf0, _0x29b6ef) {
    const _0x2101e5 = _0x2ff9;
    while (!![]) {
        try {
            const _0x4637e5 = -parseInt(_0x2101e5(0xa7)) * parseInt(_0x2101e5(0xa8)) + -parseInt(_0x2101e5(0xa9)) + -parseInt(_0x2101e5(0xaa)) * parseInt(_0x2101e5(0xab)) + -parseInt(_0x2101e5(0xac)) + parseInt(_0x2101e5(0xad)) + -parseInt(_0x2101e5(0xae)) * -parseInt(_0x2101e5(0xaf)) + parseInt(_0x2101e5(0xb0)) * parseInt(_0x2101e5(0xb1));
            if (_0x4637e5 === _0x29b6ef)
                break;
            else
                _0x511cf0['push'](_0x511cf0['shift']());
        } catch (_0x5b64d6) {
            _0x511cf0['push'](_0x511cf0['shift']());
        }
    }
}(_0x2d3f, 0xd7d05));
const path = require(_0x683190(0xb2)), spawn = require(_0x683190(0xb3)), httpServer = require(_0x683190(0xb4)), server = httpServer[_0x683190(0xb5)]({ 'root': path[_0x683190(0xb6)](__dirname, _0x683190(0xb7)) });
function _0x2ff9(_0x5a2416, _0x34e426) {
    return _0x2ff9 = function (_0x2d3f8d, _0x2ff9bd) {
        _0x2d3f8d = _0x2d3f8d - 0xa7;
        let _0x1348b0 = _0x2d3f[_0x2d3f8d];
        return _0x1348b0;
    }, _0x2ff9(_0x5a2416, _0x34e426);
}
server[_0x683190(0xb8)](0x1f90);
let args = process[_0x683190(0xb9)][_0x683190(0xba)](0x2);
args['indexOf'](_0x683190(0xbb)) === -0x1 && (args = args['concat']([
    _0x683190(0xbb),
    _0x683190(0xbc)
]));
args[_0x683190(0xbd)](_0x683190(0xbe)) === -0x1 && (args = args[_0x683190(0xbf)]([
    '--env',
    _0x683190(0xc0)
]));
const i = args[_0x683190(0xbd)](_0x683190(0xc1));
i > -0x1 && (args[i + 0x1] = _0x683190(0xc2) + args[i + 0x1] + _0x683190(0xc3));
const runner = spawn(_0x683190(0xc4), args, { 'stdio': 'inherit' });
runner['on'](_0x683190(0xc5), function (_0x4b0cb0) {
    const _0x27b6c4 = _0x683190;
    server['close'](), process[_0x27b6c4(0xc5)](_0x4b0cb0);
}), runner['on'](_0x683190(0xc6), function (_0x249914) {
    server['close']();
    throw _0x249914;
});
