const _0x579a = ['slice', 'indexOf', '--config', 'concat', '--env', 'chrome,phantomjs', '--test', 'test/e2e/specs/', '.js', './node_modules/.bin/nightwatch', 'inherit', 'close', 'error', '987911VokGuT', '1TOAsVZ', '1368572gHXqsB', '7391veNqwA', '33APceWF', '1199926ylYMcg', '695272DLuqnP', '716595FZoiQM', '5sWJAFC', '689107hzvolo', 'cross-spawn', 'createServer', 'resolve', 'listen'];

function _0x6e12(_0x4a3b87, _0x5b085b) {
    return _0x6e12 = function (_0x277c17, _0xc84001) {
        _0x277c17 = _0x277c17 - 495;
        const _0x56c849 = _0x579a[_0x277c17];

        return _0x56c849;
    }, _0x6e12(_0x4a3b87, _0x5b085b);
}
const _0x49e536 = _0x6e12;

(function (_0xf8e7b8, _0x2eff37) {
    const _0x10ed92 = _0x6e12;

    while (true) {
        try {
            const _0x61f371 = -parseInt(_0x10ed92(0x1ef)) * parseInt(_0x10ed92(0x1f0)) + parseInt(_0x10ed92(0x1f1)) + -parseInt(_0x10ed92(0x1f2)) * parseInt(_0x10ed92(0x1f3)) + -parseInt(_0x10ed92(0x1f4)) + -parseInt(_0x10ed92(0x1f5)) + -parseInt(_0x10ed92(0x1f6)) + -parseInt(_0x10ed92(0x1f7)) * -parseInt(_0x10ed92(0x1f8));

            if (_0x61f371 === _0x2eff37) break;else _0xf8e7b8.push(_0xf8e7b8.shift());
        } catch (_0x43ab8a) {
            _0xf8e7b8.push(_0xf8e7b8.shift());
        }
    }
})(_0x579a, 970500);

const path = require('path');

const spawn = require(_0x49e536(0x1f9));

const httpServer = require('http-server');

const server = httpServer[_0x49e536(0x1fa)]({ 'root': path[_0x49e536(0x1fb)](__dirname, '../../') });

server[_0x49e536(0x1fc)](8080);

var args = process.argv[_0x49e536(0x1fd)](2);

args[_0x49e536(0x1fe)](_0x49e536(0x1ff)) === -1 && (args = args[_0x49e536(0x200)]([_0x49e536(0x1ff), 'test/e2e/nightwatch.config.js']));
args.indexOf(_0x49e536(0x201)) === -1 && (args = args[_0x49e536(0x200)](['--env', _0x49e536(0x202)]));

const i = args[_0x49e536(0x1fe)](_0x49e536(0x203));

i > -1 && (args[i + 1] = _0x49e536(0x204) + args[i + 1] + _0x49e536(0x205));
const runner = spawn(_0x49e536(0x206), args, { 'stdio': _0x49e536(0x207) });

runner.on('exit', function (_0x93f549) {
    const _0x376833 = _0x49e536;

    server[_0x376833(0x208)](), process.exit(_0x93f549);
}), runner.on(_0x49e536(0x209), function (_0x209875) {
    const _0x4232dd = _0x49e536;

    server[_0x4232dd(0x208)]();
    throw _0x209875;
});
