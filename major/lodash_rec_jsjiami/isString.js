import _0x39334f from'./.internal/getTag.js';
;
function isString(_0x18cd28) {
    const _0x1de779 = typeof _0x18cd28;
    return _0x1de779 === 'string' || _0x1de779 === 'object' && _0x18cd28 != null && !Array['isArray'](_0x18cd28) && _0x39334f(_0x18cd28) == '[object String]';
}
export default isString;