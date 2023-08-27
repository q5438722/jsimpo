import _0x23a932 from './.internal/getTag.js';
import _0x50dfda from './isObjectLike.js';
import _0x1d6f0f from './isPlainObject.js';
function isError(_0x522cb3) {
    if (!_0x50dfda(_0x522cb3))
        return ![];
    const _0x315854 = _0x23a932(_0x522cb3);
    return _0x315854 == '[object Error]' || _0x315854 == '[object DOMException]' || typeof _0x522cb3['message'] === 'string' && typeof _0x522cb3['name'] === 'string' && !_0x1d6f0f(_0x522cb3);
}
export default isError;