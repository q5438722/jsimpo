const path = require('path');
const http = require('http');
const server = http['createServer'](async (_0x14dd36, _0x30c7a1) => {
    const _0x55e688 = async _0x251e38 => {
        const _0x5177a8 = require('./' + path['join']('.next/serverless/pages/', _0x251e38));
        try {
            return await (_0x5177a8['render'] || _0x5177a8['default'] || _0x5177a8)(_0x14dd36, _0x30c7a1);
        } catch (_0x38c128) {
            _0x30c7a1['statusCode'] = 500;
            return _0x30c7a1['end']('internal error');
        }
    };
    try {
        await _0x55e688('/[[...slug]].js');
    } catch (_0x90b293) {
        console['error']('failed to render', _0x90b293);
        _0x30c7a1['statusCode'] = 500;
        _0x30c7a1['end']('Internal Error');
    }
});
const port = process['env']['PORT'] || 3000;
server['listen'](port, () => {
    console['log']('ready on', port);
});