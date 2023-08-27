import _0x551cd8 from'./.internal/root.js';
;
const reTrimStart = /^\s+/;
const nativeParseInt = _0x551cd8['parseInt'];
function parseInt(_0x10aad7, _0x30c76e) {
    if (_0x30c76e == null) {
        _0x30c76e = 0;
    } else if (_0x30c76e) {
        _0x30c76e = +_0x30c76e;
    }
    return nativeParseInt(('' + _0x10aad7)['replace'](reTrimStart, ''), _0x30c76e || 0);
}
export default parseInt;