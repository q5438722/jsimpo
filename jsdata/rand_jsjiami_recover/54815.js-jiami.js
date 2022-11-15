'use strict';
require('../common');
const assert = require('assert');
const fork = require('child_process')['fork'];
if (process['argv'][2] === 'child') {
    process['send']('1');
    setTimeout(function () {
        process['send']('2');
    }, 200);
    process['on']('disconnect', function () {
        process['stdout']['write']('3');
    });
} else {
    const child = fork(__filename, ['child'], { 'silent': !![] });
    const ipc = [];
    let stdout = '';
    child['on']('message', function (_0x2a88ef) {
        ipc['push'](_0x2a88ef);
        if (_0x2a88ef === '2')
            child['disconnect']();
    });
    child['stdout']['on']('data', function (_0x14f9cf) {
        stdout += _0x14f9cf;
    });
    child['once']('exit', function () {
        assert['deepStrictEqual'](ipc, [
            '1',
            '2'
        ]);
        assert['strictEqual'](stdout, '3');
    });
}