import _0x1802c0 from './isObjectLike.js';
import _0x18ee57 from './isPlainObject.js';
function isElement(_0x1165a9) {
    return _0x1802c0(_0x1165a9) && _0x1165a9['nodeType'] === 1 && !_0x18ee57(_0x1165a9);
}
export default isElement;