'use strict';
module['exports']['handler'] = (_0x5f544d, _0x554ae9, _0x2381cf) => {
    const _0x5831a7 = () => _0x2381cf(null, {
        'statusCode': 0xc8,
        'body': JSON['stringify']({
            'path': _0x5f544d['path'],
            'method': _0x5f544d['httpMethod'],
            'headers': _0x5f544d['headers']
        })
    });
    if (_0x5f544d['path'] === '/bar/timeout')
        setTimeout(_0x5831a7, -0x1cbd + 0x965 * 0x4 + 0x107 * -0x1);
    else
        _0x5831a7();
}, module['exports']['minimal'] = async _0x423ebf => {
    return {
        'statusCode': 0xc8,
        'body': JSON['stringify']({
            'message': 'Hello\x20from\x20API\x20Gateway!\x20-\x20(minimal)',
            'event': _0x423ebf
        })
    };
};
