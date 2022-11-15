const less = require('less');
const path = require('path');
module['exports'] = (_0x1c6533, _0x318e6c = path['resolve'](__dirname, '../../src/core')) => new Promise((_0x4d0201, _0x3b8c88) => {
    less['render'](_0x1c6533, { 'paths': [_0x318e6c] })['then'](_0x284eb9 => {
        _0x4d0201(_0x284eb9['css']);
    })['catch'](_0x2a4f2b => {
        _0x3b8c88(_0x2a4f2b);
        throw _0x2a4f2b;
    });
});