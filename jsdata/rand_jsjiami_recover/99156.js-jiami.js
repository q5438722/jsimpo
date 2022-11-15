'use strict';
module['exports']['handler'] = (_0x8e9575, _0xeea5e2, _0x543092) => {
    const _0x232a42 = () => _0x543092(null, {
        'statusCode': 200,
        'body': JSON['stringify']({
            'path': _0x8e9575['path'],
            'method': _0x8e9575['httpMethod'],
            'headers': _0x8e9575['headers']
        })
    });
    if (_0x8e9575['path'] === '/bar/timeout')
        setTimeout(_0x232a42, 2000);
    else
        _0x232a42();
};
module['exports']['minimal'] = async _0x374adb => {
    return {
        'statusCode': 200,
        'body': JSON['stringify']({
            'message': 'Hello from API Gateway! - (minimal)',
            'event': _0x374adb
        })
    };
};