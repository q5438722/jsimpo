'use strict';
const common = require('../common'), http = require('http'), server = http['createServer'](common['mustNotCall']());
server['listen'](-0x158f + 0x20bf * -0x1 + -0xe * -0x3e1, common['mustCall'](() => {
    const _0x55bf82 = http['request']({
        'method': 'GET',
        'host': '127.0.0.1',
        'port': server['address']()['port']
    });
    _0x55bf82['on']('abort', common['mustCall'](() => {
        server['close']();
    })), _0x55bf82['on']('error', common['mustNotCall']()), _0x55bf82['abort'](), _0x55bf82['end']();
}));
