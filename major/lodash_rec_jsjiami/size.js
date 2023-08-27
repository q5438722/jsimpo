import _0x2abf7e from'./.internal/getTag.js';
import _0xcb14b2 from'./isArrayLike.js';
import _0x4a87a6 from'./isString.js';
import _0x3950c4 from'./.internal/stringSize.js';
;
const mapTag = '[object Map]';
const setTag = '[object Set]';
function size(collection) {
    if (collection == null) {
        return 0;
    }
    if (_0xcb14b2(collection)) {
        return _0x4a87a6(collection) ? _0x3950c4(collection) : collection['length'];
    }
    const tag = _0x2abf7e(collection);
    if (tag == mapTag || tag == setTag) {
        return collection['size'];
    }
    return Object['keys'](collection)['length'];
}
export default size;