description('Test\x20for\x20function.prototype\x27s\x20property\x20descriptor.');
function test(_0x44b38a) {
    var _0x359e31 = {
        'aiuiw': 'prototype',
        'DaoaQ': function (_0x505924, _0x317459) {
            return _0x505924(_0x317459);
        },
        'eLfYA': 'descriptor[\x27writable\x27]',
        'pdCRm': 'descriptor[\x27enumerable\x27]',
        'kLCmf': 'descriptor[\x27configurable\x27]'
    };
    descriptor = Object['getOwnPropertyDescriptor'](_0x44b38a, _0x359e31['aiuiw']), _0x359e31['DaoaQ'](shouldBeTrue, _0x359e31['eLfYA']), _0x359e31['DaoaQ'](shouldBeFalse, _0x359e31['pdCRm']), _0x359e31['DaoaQ'](shouldBeFalse, _0x359e31['kLCmf']);
}
function a() {
}
test(a);
function b() {
}
b['prototype'] = {}, test(b);
function c() {
}
shouldThrow('Object.defineProperty(c,\x20\x27prototype\x27,\x20{\x20get:\x20function(){}\x20})'), test(c);
