const path = require('path'), http = require('http'), server = http['createServer'](async (_0xefec05, _0x13892e) => {
        const _0x9edff9 = async _0x4e4482 => {
            const _0x2ccbdc = require('./' + path['join']('.next/serverless/pages/', _0x4e4482));
            try {
                return await (_0x2ccbdc['render'] || _0x2ccbdc['default'] || _0x2ccbdc)(_0xefec05, _0x13892e);
            } catch (_0x4919e2) {
                return _0x13892e['statusCode'] = 0x185d + -0xf28 + -0x3 * 0x26b, _0x13892e['end']('internal\x20error');
            }
        };
        try {
            await _0x9edff9('/[[...slug]].js');
        } catch (_0x2d821d) {
            console['error']('failed\x20to\x20render', _0x2d821d), _0x13892e['statusCode'] = -0x127 * -0x1d + 0x61 * 0x5e + -0x4315, _0x13892e['end']('Internal\x20Error');
        }
    }), port = process['env']['PORT'] || -0x1d * -0x101 + -0x2601 + 0x149c;
server['listen'](port, () => {
    console['log']('ready\x20on', port);
});
