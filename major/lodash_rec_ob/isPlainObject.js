import _0x2ca1c4 from './.internal/getTag.js';
import _0x1cc31f from './isObjectLike.js';
function isPlainObject(_0x2f513d) {
    if (!_0x1cc31f(_0x2f513d) || _0x2ca1c4(_0x2f513d) != '[object Object]')
        return ![];
    if (Object['getPrototypeOf'](_0x2f513d) === null)
        return !![];
    let _0x28e5ed = _0x2f513d;
    while (Object['getPrototypeOf'](_0x28e5ed) !== null) {
        _0x28e5ed = Object['getPrototypeOf'](_0x28e5ed);
    }
    return Object['getPrototypeOf'](_0x2f513d) === _0x28e5ed;
}
export default isPlainObject;