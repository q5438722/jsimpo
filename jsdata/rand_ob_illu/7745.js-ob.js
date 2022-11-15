const _0x16e3 = ['--config', 'concat', 'test/e2e/nightwatch.config.js', '--env', 'chrome,phantomjs', '--test', 'test/e2e/specs/', './node_modules/.bin/nightwatch', 'close', '613323RnYwUe', '137837kySJcM', '2sKjvDW', '116598pMupod', '560710pahMJE', '13ETmXxQ', '6803TFqpyk', '270937tndTLA', '1zqsOWi', '376384hDIjsz', '1gurQVw', 'path', 'cross-spawn', 'http-server', 'createServer', 'listen', 'argv', 'slice', 'indexOf'];
const _0x14fa20 = _0x2168;

(function (_0xeed3cd, _0x273bac) {
    const _0xdfc636 = _0x2168;

    while (true) {
        try {
            const _0x2b70fd = parseInt(_0xdfc636(0x73)) + -parseInt(_0xdfc636(0x74)) + -parseInt(_0xdfc636(0x75)) * parseInt(_0xdfc636(0x76)) + -parseInt(_0xdfc636(0x77)) + parseInt(_0xdfc636(0x78)) * parseInt(_0xdfc636(0x79)) + -parseInt(_0xdfc636(0x7a)) * -parseInt(_0xdfc636(0x7b)) + -parseInt(_0xdfc636(0x7c)) * -parseInt(_0xdfc636(0x7d));

            if (_0x2b70fd === _0x273bac) break;else _0xeed3cd.push(_0xeed3cd.shift());
        } catch (_0x462de9) {
            _0xeed3cd.push(_0xeed3cd.shift());
        }
    }
})(_0x16e3, 417340);
function _0x2168(_0x38ccc7, _0x37646c) {
    return _0x2168 = function (_0x338a7a, _0x15c020) {
        _0x338a7a = _0x338a7a - 115;
        const _0x1fb5c2 = _0x16e3[_0x338a7a];

        return _0x1fb5c2;
    }, _0x2168(_0x38ccc7, _0x37646c);
}

const path = require(_0x14fa20(0x7e));

const spawn = require(_0x14fa20(0x7f));

const httpServer = require(_0x14fa20(0x80));

const server = httpServer[_0x14fa20(0x81)]({ 'root': path.resolve(__dirname, '../../') });

server[_0x14fa20(0x82)](8080);

var args = process[_0x14fa20(0x83)][_0x14fa20(0x84)](2);

args[_0x14fa20(0x85)](_0x14fa20(0x86)) === -1 && (args = args[_0x14fa20(0x87)](['--config', _0x14fa20(0x88)]));
args[_0x14fa20(0x85)](_0x14fa20(0x89)) === -1 && (args = args[_0x14fa20(0x87)]([_0x14fa20(0x89), _0x14fa20(0x8a)]));

const i = args[_0x14fa20(0x85)](_0x14fa20(0x8b));

i > -1 && (args[i + 1] = _0x14fa20(0x8c) + args[i + 1] + '.js');
const runner = spawn(_0x14fa20(0x8d), args, { 'stdio': 'inherit' });

runner.on('exit', function (_0x4e2ef5) {
    const _0x7a9eff = _0x14fa20;

    server[_0x7a9eff(0x8e)](), process.exit(_0x4e2ef5);
}), runner.on('error', function (_0x1cb07d) {
    const _0x2c6cb0 = _0x14fa20;

    server[_0x2c6cb0(0x8e)]();
    throw _0x1cb07d;
});
