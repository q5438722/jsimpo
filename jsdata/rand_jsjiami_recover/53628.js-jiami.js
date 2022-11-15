'use strict';
require('../common');
const {Duplex} = require('stream');
const {inspect} = require('util');
const {strictEqual} = require('assert');
const {REPLServer} = require('repl');
let output = '';
const inout = new Duplex({ 'decodeStrings': ![] });
inout['_read'] = function () {
    this['push']('util.inspect("string")\n');
    this['push'](null);
};
inout['_write'] = function (_0x15c01e, _0x3751d7, _0x5cf226) {
    output += _0x15c01e;
    _0x5cf226();
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
    var _0xd8f0ca = '1|4|2|0|3'['split']('|'), _0x854d35 = 0;
    while (!![]) {
        switch (_0xd8f0ca[_0x854d35++]) {
        case '0':
            strictEqual(repl['writer']['options']['colors'], !![]);
            continue;
        case '1':
            strictEqual(output['includes']('"\'string\'"'), !![]);
            continue;
        case '2':
            strictEqual(inspect['defaultOptions']['colors'], ![]);
            continue;
        case '3':
            strictEqual(repl2['writer']['options']['colors'], !![]);
            continue;
        case '4':
            strictEqual(output['includes']('\'\x1B[32m\\\'string\\\'\x1B[39m\''), ![]);
            continue;
        }
        break;
    }
});