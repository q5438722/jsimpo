'use strict';
const common = require('../common');
const {Worker} = require('worker_threads');
const w = new Worker('\nconst { parentPort } = require(\'worker_threads\');\nparentPort.once(\'message\', (msg) => {\n  parentPort.postMessage(msg);\n});\n', { 'eval': !![] });
process['once']('beforeExit', common['mustCall'](() => {
    console['log']('beforeExit');
    w['ref']();
    w['postMessage']({ 'hello': 'world' });
}));
w['once']('message', common['mustCall'](_0x585049 => {
    console['log']('message', _0x585049);
}));
w['on']('exit', common['mustCall'](() => {
    console['log']('exit');
}));
w['unref']();