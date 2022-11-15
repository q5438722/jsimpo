const less = require('less'), path = require('path');
module['exports'] = (_0x5c8a16, _0x4ade29 = path['resolve'](__dirname, '../../src/core')) => new Promise((_0x46ccfe, _0xdd039c) => {
    less['render'](_0x5c8a16, { 'paths': [_0x4ade29] })['then'](_0x3e7234 => {
        _0x46ccfe(_0x3e7234['css']);
    })['catch'](_0xbef392 => {
        _0xdd039c(_0xbef392);
        throw _0xbef392;
    });
});
