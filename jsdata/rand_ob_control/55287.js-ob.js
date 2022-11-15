'use strict';
const common = require('../common'), assert = require('assert'), {inspect} = require('util'), N = 0x2;
function cb() {
    throw new Error();
}
for (let i = 0x0; i < N; ++i) {
    process['nextTick'](common['mustCall'](cb));
}
process['on']('uncaughtException', common['mustCall'](N)), process['on']('exit', function () {
    const _0x8e1888 = { 'LDfer': 'uncaughtException' };
    process['removeAllListeners'](_0x8e1888['LDfer']);
}), [
    null,
    0x1,
    'test',
    {},
    [],
    Infinity,
    !![]
]['forEach'](_0x317048 => {
    const _0x185371 = {
        'YiSmW': 'ERR_INVALID_CALLBACK',
        'LSNzT': 'TypeError',
        'ghFCK': function (_0x284b74, _0x54237f) {
            return _0x284b74(_0x54237f);
        }
    };
    assert['throws'](() => process['nextTick'](_0x317048), {
        'code': _0x185371['YiSmW'],
        'name': _0x185371['LSNzT'],
        'message': 'Callback\x20must\x20be\x20a\x20function.\x20Received\x20' + _0x185371['ghFCK'](inspect, _0x317048)
    });
});
