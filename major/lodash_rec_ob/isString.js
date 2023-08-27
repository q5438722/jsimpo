import _0x53008d from './.internal/getTag.js';
function isString(_0x2326b4) {
    const _0x1e20d5 = typeof _0x2326b4;
    return _0x1e20d5 === 'string' || _0x1e20d5 === 'object' && _0x2326b4 != null && !Array['isArray'](_0x2326b4) && _0x53008d(_0x2326b4) == '[object String]';
}
export default isString;