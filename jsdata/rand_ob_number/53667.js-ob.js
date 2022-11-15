'use strict';
const common = require('../common'), assert = require('assert'), cp = require('child_process'), child = cp['spawn'](process['execPath'], ['-i']);
let output = '';
child['stdout']['setEncoding']('utf8'), child['stdout']['on']('data', _0x5189c7 => {
    output += _0x5189c7;
}), child['on']('exit', common['mustCall'](() => {
    const _0x20453d = output['split']('\x0a');
    _0x20453d['shift'](), assert['deepStrictEqual'](_0x20453d, [
        'Type\x20\x22.help\x22\x20for\x20more\x20information.',
        '>\x20Uncaught\x20ReferenceError:\x20x\x20is\x20not\x20defined',
        '>\x20short',
        'undefined',
        '>\x20Foobar',
        '>\x20'
    ]);
})), child['stdin']['write']('x\x0a'), child['stdin']['write']('process.on(\x22uncaughtException\x22,\x20()\x20=>\x20console.log(\x22Foobar\x22));' + 'console.log(\x22short\x22)\x0a'), child['stdin']['write']('x\x0a'), child['stdin']['end']();
