'use strict';
require('../common');
const assert = require('assert'), fork = require('child_process')['fork'];
if (process['argv'][0x649 * -0x2 + -0x5 * 0xc5 + 0x91 * 0x1d] === 'child')
    process['send']('1'), setTimeout(function () {
        process['send']('2');
    }, 0x1e42 + 0x25 * -0xd9 + -0x1e3 * -0x1), process['on']('disconnect', function () {
        process['stdout']['write']('3');
    });
else {
    const child = fork(__filename, ['child'], { 'silent': !![] }), ipc = [];
    let stdout = '';
    child['on']('message', function (_0x5dafbc) {
        ipc['push'](_0x5dafbc);
        if (_0x5dafbc === '2')
            child['disconnect']();
    }), child['stdout']['on']('data', function (_0x453991) {
        stdout += _0x453991;
    }), child['once']('exit', function () {
        assert['deepStrictEqual'](ipc, [
            '1',
            '2'
        ]), assert['strictEqual'](stdout, '3');
    });
}
