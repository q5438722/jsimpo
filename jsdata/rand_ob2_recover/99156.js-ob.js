function _0x34e8(_0x5bd796, _0x44dcdc) {
    return _0x34e8 = function (_0x31d796, _0x34e823) {
        _0x31d796 = _0x31d796 - 412;
        let _0x296036 = _0x31d7[_0x31d796];
        return _0x296036;
    }, _0x34e8(_0x5bd796, _0x44dcdc);
}
module[_0x4c646c(422)]['handler'] = (_0x7cc4d0, _0x59d438, _0x24cccd) => {
    const _0x5243eb = _0x4c646c, _0x4d4884 = () => _0x24cccd(null, {
            'statusCode': 200,
            'body': JSON['stringify']({
                'path': _0x7cc4d0[_0x5243eb(423)],
                'method': _0x7cc4d0[_0x5243eb(424)],
                'headers': _0x7cc4d0[_0x5243eb(425)]
            })
        });
    if (_0x7cc4d0[_0x5243eb(423)] === '/bar/timeout')
        setTimeout(_0x4d4884, 2000);
    else
        _0x4d4884();
}, module[_0x4c646c(422)][_0x4c646c(426)] = async _0x676f36 => {
    const _0x24a03f = _0x4c646c;
    return {
        'statusCode': 200,
        'body': JSON[_0x24a03f(427)]({
            'message': 'Hello from API Gateway! - (minimal)',
            'event': _0x676f36
        })
    };
};