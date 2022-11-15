'use strict';
const common = require('../common'), http = require('http'), server = http['createServer'](common['mustNotCall']());
server['listen'](0x0, common['mustCall'](() => {
    const _0x54383d = {
            'mesvD': 'GET',
            'bZHKQ': '127.0.0.1',
            'pyOfs': 'abort',
            'SwRDr': 'error'
        }, _0x1eac4a = http['request']({
            'method': _0x54383d['mesvD'],
            'host': _0x54383d['bZHKQ'],
            'port': server['address']()['port']
        });
    _0x1eac4a['on'](_0x54383d['pyOfs'], common['mustCall'](() => {
        server['close']();
    })), _0x1eac4a['on'](_0x54383d['SwRDr'], common['mustNotCall']()), _0x1eac4a['abort'](), _0x1eac4a['end']();
}));
