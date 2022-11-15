'use strict';
const common = require('../common');
const assert = require('assert');
const cp = require('child_process');
const child = cp['spawn'](process['execPath'], ['-i']);
let output = '';
child['stdout']['setEncoding']('utf8');
child['stdout']['on']('data', _0x587ad5 => {
    output += _0x587ad5;
});
child['on']('exit', common['mustCall'](() => {
    const _0x4c7669 = output['split']('\n');
    _0x4c7669['shift']();
    assert['deepStrictEqual'](_0x4c7669, [
        'Type ".help" for more information.',
        '> Uncaught ReferenceError: x is not defined',
        '> short',
        'undefined',
        '> Foobar',
        '> '
    ]);
}));
child['stdin']['write']('x\n');
child['stdin']['write']('process.on("uncaughtException", () => console.log("Foobar"));' + 'console.log("short")\n');
child['stdin']['write']('x\n');
child['stdin']['end']();