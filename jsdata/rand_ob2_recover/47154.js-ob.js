const path = require(_0x25f684(454)), http = require('http'), server = http['createServer'](async (_0x18bb2c, _0x3e20f4) => {
        const _0xcc05c = _0x25f684, _0x5b078d = async _0x3fa1be => {
                const _0x444b92 = _0x3cea, _0x386c0d = require('./' + path[_0x444b92(455)](_0x444b92(456), _0x3fa1be));
                try {
                    return await (_0x386c0d[_0x444b92(457)] || _0x386c0d[_0x444b92(458)] || _0x386c0d)(_0x18bb2c, _0x3e20f4);
                } catch (_0xe4ab5c) {
                    return _0x3e20f4['statusCode'] = 500, _0x3e20f4[_0x444b92(459)](_0x444b92(460));
                }
            };
        try {
            await _0x5b078d(_0xcc05c(461));
        } catch (_0x26b226) {
            console['error']('failed to render', _0x26b226), _0x3e20f4[_0xcc05c(462)] = 500, _0x3e20f4[_0xcc05c(459)]('Internal Error');
        }
    }), port = process[_0x25f684(463)][_0x25f684(464)] || 3000;
server[_0x25f684(465)](port, () => {
    const _0x3514e7 = _0x25f684;
    console[_0x3514e7(466)](_0x3514e7(467), port);
});