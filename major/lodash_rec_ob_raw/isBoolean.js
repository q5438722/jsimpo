import _0x439704 from './.internal/getTag.js';
import _0x427cc3 from './isObjectLike.js';
function isBoolean(_0x4395b0) {
    return _0x4395b0 === !![] || _0x4395b0 === ![] || _0x427cc3(_0x4395b0) && _0x439704(_0x4395b0) == '[object Boolean]';
}
export default isBoolean;