const _0x40cd = [
    '1358237toOWDt',
    '299847mxKInW',
    '6siYaMz',
    '548454rMsVHI',
    'path',
    'http-server',
    'createServer',
    'resolve',
    '../../',
    'listen',
    'argv',
    'slice',
    '--config',
    'concat',
    'test/e2e/nightwatch.config.js',
    'indexOf',
    '--env',
    'chrome,phantomjs',
    '--test',
    'test/e2e/specs/',
    '.js',
    './node_modules/.bin/nightwatch',
    'inherit',
    'exit',
    'close',
    'error',
    '3QTVQCZ',
    '416615nEojYx',
    '77381QQpEOP',
    '1512583GCukxG',
    '77ycwjgL',
    '16201GroiqU'
];
const _0x517f43 = _0x4051;
function _0x4051(_0x173111, _0x525362) {
    return _0x4051 = function (_0x40cdf4, _0x4051ac) {
        _0x40cdf4 = _0x40cdf4 - 0xf4;
        let _0x3ef307 = _0x40cd[_0x40cdf4];
        return _0x3ef307;
    }, _0x4051(_0x173111, _0x525362);
}
(function (_0x35c41b, _0x4c7446) {
    const _0x43d6b8 = _0x4051;
    while (!![]) {
        try {
            const _0xfed3c4 = parseInt(_0x43d6b8(0xf4)) * parseInt(_0x43d6b8(0xf5)) + parseInt(_0x43d6b8(0xf6)) + -parseInt(_0x43d6b8(0xf7)) + -parseInt(_0x43d6b8(0xf8)) * parseInt(_0x43d6b8(0xf9)) + -parseInt(_0x43d6b8(0xfa)) + parseInt(_0x43d6b8(0xfb)) + parseInt(_0x43d6b8(0xfc)) * parseInt(_0x43d6b8(0xfd));
            if (_0xfed3c4 === _0x4c7446)
                break;
            else
                _0x35c41b['push'](_0x35c41b['shift']());
        } catch (_0x26c5ab) {
            _0x35c41b['push'](_0x35c41b['shift']());
        }
    }
}(_0x40cd, 0xc330c));
const path = require(_0x517f43(0xfe)), spawn = require('cross-spawn'), httpServer = require(_0x517f43(0xff)), server = httpServer[_0x517f43(0x100)]({ 'root': path[_0x517f43(0x101)](__dirname, _0x517f43(0x102)) });
server[_0x517f43(0x103)](0x1f90);
let args = process[_0x517f43(0x104)][_0x517f43(0x105)](0x2);
args['indexOf'](_0x517f43(0x106)) === -0x1 && (args = args[_0x517f43(0x107)]([
    _0x517f43(0x106),
    _0x517f43(0x108)
]));
args[_0x517f43(0x109)](_0x517f43(0x10a)) === -0x1 && (args = args['concat']([
    _0x517f43(0x10a),
    _0x517f43(0x10b)
]));
const i = args[_0x517f43(0x109)](_0x517f43(0x10c));
i > -0x1 && (args[i + 0x1] = _0x517f43(0x10d) + args[i + 0x1] + _0x517f43(0x10e));
const runner = spawn(_0x517f43(0x10f), args, { 'stdio': _0x517f43(0x110) });
runner['on'](_0x517f43(0x111), function (_0x202ede) {
    const _0x143861 = _0x517f43;
    server[_0x143861(0x112)](), process[_0x143861(0x111)](_0x202ede);
}), runner['on'](_0x517f43(0x113), function (_0x1cfe64) {
    server['close']();
    throw _0x1cfe64;
});
