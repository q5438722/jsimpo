import _0x411458 from './.internal/root.js';
const reTrimStart = /^\s+/, nativeParseInt = _0x411458['parseInt'];
function parseInt(_0x469945, _0xf778d4) {
    if (_0xf778d4 == null)
        _0xf778d4 = 0;
    else
        _0xf778d4 && (_0xf778d4 = +_0xf778d4);
    return nativeParseInt(('' + _0x469945)['replace'](reTrimStart, ''), _0xf778d4 || 0);
}
export default parseInt;