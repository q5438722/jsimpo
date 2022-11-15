'use strict';
require('../common');
const {Duplex} = require('stream'), {inspect} = require('util'), {strictEqual} = require('assert'), {REPLServer} = require('repl');
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout['_read'] = function () {
    this['push']('util.inspect(\x22string\x22)\x0a'), this['push'](null);
}, inout['_write'] = function (_0xdb9738, _0x5dac18, _0x4b70be) {
    output += _0xdb9738, _0x4b70be();
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
    strictEqual(output['includes']('\x22\x27string\x27\x22'), !![]), strictEqual(output['includes']('\x27\x1b[32m\x5c\x27string\x5c\x27\x1b[39m\x27'), ![]), strictEqual(inspect['defaultOptions']['colors'], ![]), strictEqual(repl['writer']['options']['colors'], !![]), strictEqual(repl2['writer']['options']['colors'], !![]);
});
