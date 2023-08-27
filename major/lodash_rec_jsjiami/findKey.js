
;
function findKey(_0x5d2927, _0xf25bde) {
    let _0x10b780;
    if (_0x5d2927 == null) {
        return _0x10b780;
    }
    Object['keys'](_0x5d2927)['some'](_0x2ece6b => {
        const _0x4fe31a = _0x5d2927[_0x2ece6b];
        if (_0xf25bde(_0x4fe31a, _0x2ece6b, _0x5d2927)) {
            _0x10b780 = _0x2ece6b;
            return !![];
        }
    });
    return _0x10b780;
}
export default findKey;