'use strict';
const _0x509b = [
    'path',
    'refresh',
    'throws',
    'rmdirSync',
    'join',
    'noexist.txt',
    'rmdir',
    'mustCall',
    'strictEqual',
    'ENOENT',
    'promises',
    '24359MYXinx',
    '10eHEeWx',
    '439367GTuZFM',
    '9tYKYbb',
    '5573DXWLzj',
    '1186457cFIRhX',
    '57193llshHs',
    '15aZHTbl',
    '1116949UrmPxr',
    '1098vlKBdo',
    '3999wICknh',
    '../common',
    '../common/tmpdir',
    'assert'
];
const _0x25ba58 = _0x426a;
(function (_0x1a4147, _0x111354) {
    const _0x301671 = _0x426a;
    while (!![]) {
        try {
            const _0x534f4b = parseInt(_0x301671(0x1d6)) * -parseInt(_0x301671(0x1d7)) + -parseInt(_0x301671(0x1d8)) + parseInt(_0x301671(0x1d9)) * parseInt(_0x301671(0x1da)) + -parseInt(_0x301671(0x1db)) + -parseInt(_0x301671(0x1dc)) * parseInt(_0x301671(0x1dd)) + -parseInt(_0x301671(0x1de)) + parseInt(_0x301671(0x1df)) * parseInt(_0x301671(0x1e0));
            if (_0x534f4b === _0x111354)
                break;
            else
                _0x1a4147['push'](_0x1a4147['shift']());
        } catch (_0x200785) {
            _0x1a4147['push'](_0x1a4147['shift']());
        }
    }
}(_0x509b, 0x91b41));
const common = require(_0x25ba58(0x1e1)), tmpdir = require(_0x25ba58(0x1e2)), assert = require(_0x25ba58(0x1e3)), fs = require('fs'), path = require(_0x25ba58(0x1e4));
tmpdir[_0x25ba58(0x1e5)]();
{
    assert[_0x25ba58(0x1e6)](() => fs[_0x25ba58(0x1e7)](path[_0x25ba58(0x1e8)](tmpdir[_0x25ba58(0x1e4)], _0x25ba58(0x1e9)), { 'recursive': !![] }), { 'code': 'ENOENT' });
}
function _0x426a(_0x102ec3, _0x78a4f6) {
    return _0x426a = function (_0x509b6f, _0x426a4a) {
        _0x509b6f = _0x509b6f - 0x1d6;
        let _0xb1394c = _0x509b[_0x509b6f];
        return _0xb1394c;
    }, _0x426a(_0x102ec3, _0x78a4f6);
}
{
    fs[_0x25ba58(0x1ea)](path[_0x25ba58(0x1e8)](tmpdir['path'], _0x25ba58(0x1e9)), { 'recursive': !![] }, common[_0x25ba58(0x1eb)](_0x2979fc => {
        const _0x403b0c = _0x25ba58;
        assert[_0x403b0c(0x1ec)](_0x2979fc['code'], _0x403b0c(0x1ed));
    }));
}
{
    assert['rejects'](() => fs[_0x25ba58(0x1ee)]['rmdir'](path['join'](tmpdir[_0x25ba58(0x1e4)], _0x25ba58(0x1e9)), { 'recursive': !![] }), { 'code': _0x25ba58(0x1ed) })['then'](common[_0x25ba58(0x1eb)]());
}
