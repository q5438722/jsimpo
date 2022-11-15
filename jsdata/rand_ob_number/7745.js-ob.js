const path = require('path'), spawn = require('cross-spawn'), httpServer = require('http-server'), server = httpServer['createServer']({ 'root': path['resolve'](__dirname, '../../') });
server['listen'](0x3ef3 + 0x17ed + -0x3750);
let args = process['argv']['slice'](-0x177d + 0x2a7 + -0x3a * -0x5c);
args['indexOf']('--config') === -(0x190b + 0x11df + -0x41 * 0xa9) && (args = args['concat']([
    '--config',
    'test/e2e/nightwatch.config.js'
]));
args['indexOf']('--env') === -(0x15c4 + 0x3 * -0xaae + 0x1 * 0xa47) && (args = args['concat']([
    '--env',
    'chrome,phantomjs'
]));
const i = args['indexOf']('--test');
i > -(0x2b9 * 0xc + 0x3 * -0x769 + -0xa70) && (args[i + (0x1 * -0x1a83 + 0x593 * 0x2 + -0x2 * -0x7af)] = 'test/e2e/specs/' + args[i + (-0x4 * -0x2ea + 0x2 * 0x583 + -0x16ad)] + '.js');
const runner = spawn('./node_modules/.bin/nightwatch', args, { 'stdio': 'inherit' });
runner['on']('exit', function (_0x3df2ba) {
    server['close'](), process['exit'](_0x3df2ba);
}), runner['on']('error', function (_0x1c6daa) {
    server['close']();
    throw _0x1c6daa;
});
