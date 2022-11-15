'use strict';
const common = require('../common');
const assert = require('assert');
const cluster = require('cluster');
const fork = require('child_process')['fork'];
const net = require('net');
if (cluster['isPrimary'] && process['argv']['length'] !== 3) {
    const tmpdir = require('../common/tmpdir');
    tmpdir['refresh']();
    const PIPE_NAME = common['PIPE'];
    const worker = cluster['fork']({ 'PIPE_NAME': PIPE_NAME });
    cluster['on']('fork', common['mustCall']());
    worker['on']('online', common['mustCall']());
    worker['on']('message', common['mustCall'](function (_0x5d3085) {
        worker['disconnect']();
        assert['strictEqual'](_0x5d3085['code'], 'EADDRINUSE');
    }));
} else if (process['argv']['length'] !== 3) {
    const PIPE_NAME = process['env']['PIPE_NAME'];
    const cp = fork(__filename, [PIPE_NAME], { 'stdio': 'inherit' });
    cp['on']('message', common['mustCall'](function () {
        const _0x4bddcb = net['createServer']()['listen'](PIPE_NAME, function () {
            var _0x4ff465 = { 'MngQq': 'EADDRINUSE' };
            if ('JDzFb' !== 'JDzFb') {
                worker['disconnect']();
                assert['strictEqual'](err['code'], _0x4ff465['MngQq']);
            } else {
                cp['send']('end');
                process['send']('PIPE should have been in use.');
            }
        });
        _0x4bddcb['on']('error', function (_0x24d0bf) {
            if ('oPnrV' !== 'oPnrV') {
                cp['send']('end');
                process['send']('PIPE should have been in use.');
            } else {
                cp['send']('end');
                process['send'](_0x24d0bf);
            }
        });
    }));
} else if (process['argv']['length'] === 3) {
    const PIPE_NAME = process['argv'][2];
    const server = net['createServer']()['listen'](PIPE_NAME, common['mustCall'](() => {
        process['send']('listening');
    }));
    process['once']('message', common['mustCall'](() => server['close']()));
} else {
    assert['fail']('Impossible state');
}