'use strict';
function minimal(_0x26f8f9, _0x5949f7, _0x5c908e) {
    console['info']('Event type', _0x26f8f9['requestContext']['eventType']);
    if (_0x26f8f9['body'])
        console['info']('Event body', _0x26f8f9['body']);
    return _0x5c908e(null, { 'statusCode': 200 });
}
function sayHello(_0x50b9e3, _0xc15081, _0x57c078) {
    const _0x5368f5 = JSON['parse'](_0x50b9e3['body']);
    return _0x57c078(null, {
        'statusCode': 200,
        'body': 'Hello, ' + _0x5368f5['name']
    });
}
module['exports'] = {
    'minimal': minimal,
    'sayHello': sayHello
};