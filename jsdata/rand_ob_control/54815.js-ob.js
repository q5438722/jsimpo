'use strict';
require('../common');
const assert = require('assert'), fork = require('child_process')['fork'];
if (process['argv'][0x2] === 'child')
    process['send']('1'), setTimeout(function () {
        process['send']('2');
    }, 0xc8), process['on']('disconnect', function () {
        process['stdout']['write']('3');
    });
else {
    const child = fork(__filename, ['child'], { 'silent': !![] }), ipc = [];
    let stdout = '';
    child['on']('message', function (_0x21cfd5) {
        const _0x300415 = {
            'zwnTU': function (_0x41819e, _0x3ee4da) {
                return _0x41819e === _0x3ee4da;
            }
        };
        ipc['push'](_0x21cfd5);
        if (_0x300415['zwnTU'](_0x21cfd5, '2'))
            child['disconnect']();
    }), child['stdout']['on']('data', function (_0x3480a8) {
        stdout += _0x3480a8;
    }), child['once']('exit', function () {
        assert['deepStrictEqual'](ipc, [
            '1',
            '2'
        ]), assert['strictEqual'](stdout, '3');
    });
}
