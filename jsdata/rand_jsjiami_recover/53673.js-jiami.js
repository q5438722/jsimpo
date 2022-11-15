'use strict';
const common = require('../common');
const http = require('http');
const server = http['createServer'](common['mustNotCall']());
server['listen'](0, common['mustCall'](() => {
    const _0x2a767 = http['request']({
        'method': 'GET',
        'host': '127.0.0.1',
        'port': server['address']()['port']
    });
    _0x2a767['on']('abort', common['mustCall'](() => {
        server['close']();
    }));
    _0x2a767['on']('error', common['mustNotCall']());
    _0x2a767['abort']();
    _0x2a767['end']();
}));