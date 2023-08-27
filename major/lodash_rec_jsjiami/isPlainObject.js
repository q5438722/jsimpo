import _0xfd4540 from'./.internal/getTag.js';
import _0x3ada74 from'./isObjectLike.js';
;
function isPlainObject(value) {
    if (!_0x3ada74(value) || _0xfd4540(value) != '[object Object]') {
        return ![];
    }
    if (Object['getPrototypeOf'](value) === null) {
        return !![];
    }
    let proto = value;
    while (Object['getPrototypeOf'](proto) !== null) {
        proto = Object['getPrototypeOf'](proto);
    }
    return Object['getPrototypeOf'](value) === proto;
}
export default isPlainObject;