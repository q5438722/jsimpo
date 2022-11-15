const common = require(_0x25ba58(481)), tmpdir = require(_0x25ba58(482)), assert = require(_0x25ba58(483)), fs = require('fs'), path = require(_0x25ba58(484));
tmpdir[_0x25ba58(485)]();
{
    assert[_0x25ba58(486)](() => fs[_0x25ba58(487)](path[_0x25ba58(488)](tmpdir[_0x25ba58(484)], _0x25ba58(489)), { 'recursive': !![] }), { 'code': 'ENOENT' });
}
function _0x426a(_0x102ec3, _0x78a4f6) {
    return _0x426a = function (_0x509b6f, _0x426a4a) {
        _0x509b6f = _0x509b6f - 470;
        let _0xb1394c = _0x509b[_0x509b6f];
        return _0xb1394c;
    }, _0x426a(_0x102ec3, _0x78a4f6);
}
{
    fs[_0x25ba58(490)](path[_0x25ba58(488)](tmpdir['path'], _0x25ba58(489)), { 'recursive': !![] }, common[_0x25ba58(491)](_0x2979fc => {
        const _0x403b0c = _0x25ba58;
        assert[_0x403b0c(492)](_0x2979fc['code'], _0x403b0c(493));
    }));
}
{
    assert['rejects'](() => fs[_0x25ba58(494)]['rmdir'](path['join'](tmpdir[_0x25ba58(484)], _0x25ba58(489)), { 'recursive': !![] }), { 'code': _0x25ba58(493) })['then'](common[_0x25ba58(491)]());
}