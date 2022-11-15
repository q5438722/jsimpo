'use strict';
const common = require('../common'), assert = require('assert'), {inspect} = require('util'), N = -0x8 * -0x481 + -0x482 * 0x1 + 0xfc2 * -0x2;
function cb() {
    throw new Error();
}
for (let i = -0x5 * -0x67a + -0x5d9 + 0x1a89 * -0x1; i < N; ++i) {
    process['nextTick'](common['mustCall'](cb));
}
process['on']('uncaughtException', common['mustCall'](N)), process['on']('exit', function () {
    process['removeAllListeners']('uncaughtException');
}), [
    null,
    0x1 * -0x1b7 + -0x10fd + 0x12b5 * 0x1,
    'test',
    {},
    [],
    Infinity,
    !![]
]['forEach'](_0xad2b36 => {
    assert['throws'](() => process['nextTick'](_0xad2b36), {
        'code': 'ERR_INVALID_CALLBACK',
        'name': 'TypeError',
        'message': 'Callback\x20must\x20be\x20a\x20function.\x20Received\x20' + inspect(_0xad2b36)
    });
});
