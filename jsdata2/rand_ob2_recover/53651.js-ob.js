function _0x2f8f(_0x5260fe, _0x4aa5f4) {
    return _0x2f8f = function (_0x1cc9ff, _0x2f8fcb) {
        _0x1cc9ff = _0x1cc9ff - 295;
        let _0x41548e = _0x1cc9[_0x1cc9ff];
        return _0x41548e;
    }, _0x2f8f(_0x5260fe, _0x4aa5f4);
}
const common = require(_0x3a3f1d(305)), assert = require(_0x3a3f1d(306)), exec = require(_0x3a3f1d(307))[_0x3a3f1d(308)], fixtures = require(_0x3a3f1d(309));
function errExec(_0x111f9f, _0x221c32) {
    const _0x4f65c0 = _0x3a3f1d, _0x3a0876 = '"' + process[_0x4f65c0(310)][0] + _0x4f65c0(311) + fixtures['path'](_0x111f9f) + '"';
    return exec(_0x3a0876, (_0x554068, _0x594563, _0x40cf52) => {
        const _0x1f3397 = _0x4f65c0;
        assert['ok'](_0x554068), assert['ok'](_0x40cf52[_0x1f3397(312)]('\n')[_0x1f3397(313)]), _0x221c32(_0x554068, _0x594563, _0x40cf52);
    });
}
const syntaxErrorMessage = /\bSyntaxError\b/;
errExec(_0x3a3f1d(314), common[_0x3a3f1d(315)]((_0x2f18b6, _0x3d493c, _0x11f926) => {
    const _0x39c998 = _0x3a3f1d;
    assert['ok'](/blah/[_0x39c998(316)](_0x11f926));
})), errExec(_0x3a3f1d(317), common['mustCall']((_0x1008f4, _0xf6d239, _0xd959cb) => {
    assert['ok'](syntaxErrorMessage['test'](_0xd959cb));
})), errExec(_0x3a3f1d(318), common[_0x3a3f1d(315)]((_0x431ed9, _0x5a5041, _0x39c89d) => {
    const _0x49ca68 = _0x3a3f1d;
    assert['ok'](syntaxErrorMessage[_0x49ca68(316)](_0x39c89d));
})), errExec(_0x3a3f1d(319), common[_0x3a3f1d(315)]((_0x240ec4, _0xb2b0fb, _0xb43824) => {
    const _0x24ae43 = _0x3a3f1d;
    assert['ok'](syntaxErrorMessage[_0x24ae43(316)](_0xb43824));
})), errExec(_0x3a3f1d(320), common[_0x3a3f1d(315)]((_0x2112ab, _0x2b4d76, _0x5412d7) => {
    const _0x41fe7f = _0x3a3f1d;
    assert['ok'](syntaxErrorMessage[_0x41fe7f(316)](_0x5412d7));
})), errExec(_0x3a3f1d(321), common[_0x3a3f1d(315)]((_0x33195f, _0x3bf6bc, _0x18d63c) => {
    const _0x43e02e = _0x3a3f1d;
    assert['ok'](syntaxErrorMessage[_0x43e02e(316)](_0x18d63c));
})), errExec('throws_error7.js', common[_0x3a3f1d(315)]((_0x37a9fc, _0x136d33, _0x4e2e50) => {
    const _0x55cfc1 = _0x3a3f1d;
    assert['ok'](/throw {\r?\n\^\r?\n{ toString: \[Function: toString] }\r?\n$/[_0x55cfc1(316)](_0x4e2e50));
}));