'use strict';
const common = require('../common'), {Worker} = require('worker_threads'), w = new Worker('\x0aconst\x20{\x20parentPort\x20}\x20=\x20require(\x27worker_threads\x27);\x0aparentPort.once(\x27message\x27,\x20(msg)\x20=>\x20{\x0a\x20\x20parentPort.postMessage(msg);\x0a});\x0a', { 'eval': !![] });
process['once']('beforeExit', common['mustCall'](() => {
    console['log']('beforeExit'), w['ref'](), w['postMessage']({ 'hello': 'world' });
})), w['once']('message', common['mustCall'](_0x563694 => {
    console['log']('message', _0x563694);
})), w['on']('exit', common['mustCall'](() => {
    console['log']('exit');
})), w['unref']();
