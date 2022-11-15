'use strict';
const _0x31d7 = [
    'headers',
    'minimal',
    'stringify',
    '773429NPJxLs',
    '52831BGeSHi',
    '26RkrXVm',
    '748189bWqSqV',
    '1201228vLIMvO',
    '147151dHqfRK',
    '1GGbTHJ',
    '879WZVsxb',
    '349rGrafz',
    '3840759CZIWvy',
    'exports',
    'path',
    'httpMethod'
];
const _0x4c646c = _0x34e8;
(function (_0x614295, _0x7599c2) {
    const _0x2a857d = _0x34e8;
    while (!![]) {
        try {
            const _0x241ecb = -parseInt(_0x2a857d(0x19c)) + parseInt(_0x2a857d(0x19d)) * -parseInt(_0x2a857d(0x19e)) + parseInt(_0x2a857d(0x19f)) + -parseInt(_0x2a857d(0x1a0)) + parseInt(_0x2a857d(0x1a1)) * -parseInt(_0x2a857d(0x1a2)) + parseInt(_0x2a857d(0x1a3)) * -parseInt(_0x2a857d(0x1a4)) + parseInt(_0x2a857d(0x1a5));
            if (_0x241ecb === _0x7599c2)
                break;
            else
                _0x614295['push'](_0x614295['shift']());
        } catch (_0x5951e1) {
            _0x614295['push'](_0x614295['shift']());
        }
    }
}(_0x31d7, 0xc014b));
function _0x34e8(_0x5bd796, _0x44dcdc) {
    return _0x34e8 = function (_0x31d796, _0x34e823) {
        _0x31d796 = _0x31d796 - 0x19c;
        let _0x296036 = _0x31d7[_0x31d796];
        return _0x296036;
    }, _0x34e8(_0x5bd796, _0x44dcdc);
}
module[_0x4c646c(0x1a6)]['handler'] = (_0x7cc4d0, _0x59d438, _0x24cccd) => {
    const _0x5243eb = _0x4c646c, _0x4d4884 = () => _0x24cccd(null, {
            'statusCode': 0xc8,
            'body': JSON['stringify']({
                'path': _0x7cc4d0[_0x5243eb(0x1a7)],
                'method': _0x7cc4d0[_0x5243eb(0x1a8)],
                'headers': _0x7cc4d0[_0x5243eb(0x1a9)]
            })
        });
    if (_0x7cc4d0[_0x5243eb(0x1a7)] === '/bar/timeout')
        setTimeout(_0x4d4884, 0x7d0);
    else
        _0x4d4884();
}, module[_0x4c646c(0x1a6)][_0x4c646c(0x1aa)] = async _0x676f36 => {
    const _0x24a03f = _0x4c646c;
    return {
        'statusCode': 0xc8,
        'body': JSON[_0x24a03f(0x1ab)]({
            'message': 'Hello\x20from\x20API\x20Gateway!\x20-\x20(minimal)',
            'event': _0x676f36
        })
    };
};
