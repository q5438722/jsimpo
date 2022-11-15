const _0x5135 = [
    '874952kuJIGj',
    '354149HLdlhY',
    '1iLouEj',
    '382596DuRXaf',
    '353508wHDQls',
    'path',
    'join',
    '.next/serverless/pages/',
    'render',
    'default',
    'end',
    'internal\x20error',
    '/[[...slug]].js',
    'statusCode',
    'env',
    'PORT',
    'listen',
    'log',
    'ready\x20on',
    '1ymnCcu',
    '1070623bavGjC',
    '684531sPxKRU',
    '1TfQfjH',
    '586610RItssL'
];
const _0x25f684 = _0x3cea;
function _0x3cea(_0x22b69c, _0x7b4387) {
    return _0x3cea = function (_0x5135b2, _0x3cea65) {
        _0x5135b2 = _0x5135b2 - 0x1bc;
        let _0x1ce971 = _0x5135[_0x5135b2];
        return _0x1ce971;
    }, _0x3cea(_0x22b69c, _0x7b4387);
}
(function (_0x276b17, _0x54c216) {
    const _0x593058 = _0x3cea;
    while (!![]) {
        try {
            const _0x1cd438 = -parseInt(_0x593058(0x1bc)) * -parseInt(_0x593058(0x1bd)) + -parseInt(_0x593058(0x1be)) * -parseInt(_0x593058(0x1bf)) + -parseInt(_0x593058(0x1c0)) + -parseInt(_0x593058(0x1c1)) + -parseInt(_0x593058(0x1c2)) * -parseInt(_0x593058(0x1c3)) + -parseInt(_0x593058(0x1c4)) + parseInt(_0x593058(0x1c5));
            if (_0x1cd438 === _0x54c216)
                break;
            else
                _0x276b17['push'](_0x276b17['shift']());
        } catch (_0x2a7c7f) {
            _0x276b17['push'](_0x276b17['shift']());
        }
    }
}(_0x5135, 0x9709d));
const path = require(_0x25f684(0x1c6)), http = require('http'), server = http['createServer'](async (_0x18bb2c, _0x3e20f4) => {
        const _0xcc05c = _0x25f684, _0x5b078d = async _0x3fa1be => {
                const _0x444b92 = _0x3cea, _0x386c0d = require('./' + path[_0x444b92(0x1c7)](_0x444b92(0x1c8), _0x3fa1be));
                try {
                    return await (_0x386c0d[_0x444b92(0x1c9)] || _0x386c0d[_0x444b92(0x1ca)] || _0x386c0d)(_0x18bb2c, _0x3e20f4);
                } catch (_0xe4ab5c) {
                    return _0x3e20f4['statusCode'] = 0x1f4, _0x3e20f4[_0x444b92(0x1cb)](_0x444b92(0x1cc));
                }
            };
        try {
            await _0x5b078d(_0xcc05c(0x1cd));
        } catch (_0x26b226) {
            console['error']('failed\x20to\x20render', _0x26b226), _0x3e20f4[_0xcc05c(0x1ce)] = 0x1f4, _0x3e20f4[_0xcc05c(0x1cb)]('Internal\x20Error');
        }
    }), port = process[_0x25f684(0x1cf)][_0x25f684(0x1d0)] || 0xbb8;
server[_0x25f684(0x1d1)](port, () => {
    const _0x3514e7 = _0x25f684;
    console[_0x3514e7(0x1d2)](_0x3514e7(0x1d3), port);
});
