import _0x5d071d from './.internal/getTag.js';
import _0x5f3a34 from './isObjectLike.js';
function isNumber(_0x1e5745) {
    return typeof _0x1e5745 === 'number' || _0x5f3a34(_0x1e5745) && _0x5d071d(_0x1e5745) == '[object Number]';
}
export default isNumber;