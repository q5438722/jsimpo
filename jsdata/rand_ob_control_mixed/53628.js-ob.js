'use strict';
require('../common');
const {Duplex} = require('stream'), {inspect} = require('util'), {strictEqual} = require('assert'), {REPLServer} = require('repl');
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout['_read'] = function () {
    const _0x3c84ef = { 'eNoPk': 'util.inspect(\x22string\x22)\x0a' };
    this['push'](_0x3c84ef['eNoPk']), this['push'](null);
}, inout['_write'] = function (_0x14bec1, _0x453788, _0x3213dd) {
    const _0x173bad = {
        'MIcJv': function (_0x223756) {
            return _0x223756();
        }
    };
    output += _0x14bec1, _0x173bad['MIcJv'](_0x3213dd);
};
const repl = new REPLServer({
    'input': inout,
    'output': inout,
    'useColors': !![]
});
inout['isTTY'] = !![];
const repl2 = new REPLServer({
    'input': inout,
    'output': inout
});
process['on']('exit', function () {
    const _0x37b384 = {
            'bUIdf': '3|0|1|2|4',
            'fekJP': function (_0x21dc51, _0x152c62, _0x2636a9) {
                return _0x21dc51(_0x152c62, _0x2636a9);
            },
            'eHnVp': function (_0xeb08b7, _0x4b0221, _0x1474fc) {
                return _0xeb08b7(_0x4b0221, _0x1474fc);
            },
            'oCYMQ': function (_0x337f51, _0x563fa0, _0x430dbb) {
                return _0x337f51(_0x563fa0, _0x430dbb);
            }
        }, _0x1460cf = _0x37b384['bUIdf']['split']('|');
    let _0x124bb0 = 0x0;
    while (!![]) {
        switch (_0x1460cf[_0x124bb0++]) {
        case '0':
            _0x37b384['fekJP'](strictEqual, output['includes']('\x27\x1b[32m\x5c\x27string\x5c\x27\x1b[39m\x27'), ![]);
            continue;
        case '1':
            _0x37b384['eHnVp'](strictEqual, inspect['defaultOptions']['colors'], ![]);
            continue;
        case '2':
            _0x37b384['eHnVp'](strictEqual, repl['writer']['options']['colors'], !![]);
            continue;
        case '3':
            _0x37b384['eHnVp'](strictEqual, output['includes']('\x22\x27string\x27\x22'), !![]);
            continue;
        case '4':
            _0x37b384['oCYMQ'](strictEqual, repl2['writer']['options']['colors'], !![]);
            continue;
        }
        break;
    }
});
