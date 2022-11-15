'use strict';
const _0x1cc9 = [
    '../common/fixtures',
    'argv',
    '\x22\x20\x22',
    'split',
    'length',
    'throws_error.js',
    'mustCall',
    'test',
    'throws_error2.js',
    'throws_error3.js',
    'throws_error4.js',
    'throws_error5.js',
    'throws_error6.js',
    '1038644podczK',
    '5GialPf',
    '10037MjeVQy',
    '783757CdyxCN',
    '2MZLPNz',
    '760237ZuBQup',
    '281hgNBEQ',
    '6286PAUivS',
    '464343MwJfih',
    '19162BUoaZv',
    '../common',
    'assert',
    'child_process',
    'exec'
];
const _0x3a3f1d = _0x2f8f;
(function (_0x55e511, _0x54ed88) {
    const _0x24a583 = _0x2f8f;
    while (!![]) {
        try {
            const _0x2d3c06 = parseInt(_0x24a583(0x127)) + parseInt(_0x24a583(0x128)) * -parseInt(_0x24a583(0x129)) + -parseInt(_0x24a583(0x12a)) + parseInt(_0x24a583(0x12b)) * -parseInt(_0x24a583(0x12c)) + -parseInt(_0x24a583(0x12d)) * -parseInt(_0x24a583(0x12e)) + parseInt(_0x24a583(0x12f)) + -parseInt(_0x24a583(0x130));
            if (_0x2d3c06 === _0x54ed88)
                break;
            else
                _0x55e511['push'](_0x55e511['shift']());
        } catch (_0x3ed722) {
            _0x55e511['push'](_0x55e511['shift']());
        }
    }
}(_0x1cc9, 0xdab1f));
function _0x2f8f(_0x5260fe, _0x4aa5f4) {
    return _0x2f8f = function (_0x1cc9ff, _0x2f8fcb) {
        _0x1cc9ff = _0x1cc9ff - 0x127;
        let _0x41548e = _0x1cc9[_0x1cc9ff];
        return _0x41548e;
    }, _0x2f8f(_0x5260fe, _0x4aa5f4);
}
const common = require(_0x3a3f1d(0x131)), assert = require(_0x3a3f1d(0x132)), exec = require(_0x3a3f1d(0x133))[_0x3a3f1d(0x134)], fixtures = require(_0x3a3f1d(0x135));
function errExec(_0x111f9f, _0x221c32) {
    const _0x4f65c0 = _0x3a3f1d, _0x3a0876 = '\x22' + process[_0x4f65c0(0x136)][0x0] + _0x4f65c0(0x137) + fixtures['path'](_0x111f9f) + '\x22';
    return exec(_0x3a0876, (_0x554068, _0x594563, _0x40cf52) => {
        const _0x1f3397 = _0x4f65c0;
        assert['ok'](_0x554068), assert['ok'](_0x40cf52[_0x1f3397(0x138)]('\x0a')[_0x1f3397(0x139)]), _0x221c32(_0x554068, _0x594563, _0x40cf52);
    });
}
const syntaxErrorMessage = /\bSyntaxError\b/;
errExec(_0x3a3f1d(0x13a), common[_0x3a3f1d(0x13b)]((_0x2f18b6, _0x3d493c, _0x11f926) => {
    const _0x39c998 = _0x3a3f1d;
    assert['ok'](/blah/[_0x39c998(0x13c)](_0x11f926));
})), errExec(_0x3a3f1d(0x13d), common['mustCall']((_0x1008f4, _0xf6d239, _0xd959cb) => {
    assert['ok'](syntaxErrorMessage['test'](_0xd959cb));
})), errExec(_0x3a3f1d(0x13e), common[_0x3a3f1d(0x13b)]((_0x431ed9, _0x5a5041, _0x39c89d) => {
    const _0x49ca68 = _0x3a3f1d;
    assert['ok'](syntaxErrorMessage[_0x49ca68(0x13c)](_0x39c89d));
})), errExec(_0x3a3f1d(0x13f), common[_0x3a3f1d(0x13b)]((_0x240ec4, _0xb2b0fb, _0xb43824) => {
    const _0x24ae43 = _0x3a3f1d;
    assert['ok'](syntaxErrorMessage[_0x24ae43(0x13c)](_0xb43824));
})), errExec(_0x3a3f1d(0x140), common[_0x3a3f1d(0x13b)]((_0x2112ab, _0x2b4d76, _0x5412d7) => {
    const _0x41fe7f = _0x3a3f1d;
    assert['ok'](syntaxErrorMessage[_0x41fe7f(0x13c)](_0x5412d7));
})), errExec(_0x3a3f1d(0x141), common[_0x3a3f1d(0x13b)]((_0x33195f, _0x3bf6bc, _0x18d63c) => {
    const _0x43e02e = _0x3a3f1d;
    assert['ok'](syntaxErrorMessage[_0x43e02e(0x13c)](_0x18d63c));
})), errExec('throws_error7.js', common[_0x3a3f1d(0x13b)]((_0x37a9fc, _0x136d33, _0x4e2e50) => {
    const _0x55cfc1 = _0x3a3f1d;
    assert['ok'](/throw {\r?\n\^\r?\n{ toString: \[Function: toString] }\r?\n$/[_0x55cfc1(0x13c)](_0x4e2e50));
}));
