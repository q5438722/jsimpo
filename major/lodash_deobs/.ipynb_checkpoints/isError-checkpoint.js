import _0x340a52 from'./.internal/getTag.js';
import _0x45cd9c from'./isObjectLike.js';
import _0xf26333 from'./isPlainObject.js';
;
function isError(value) {
    if (!_0x45cd9c(value)) {
        return ![];
    }
    const tag = _0x340a52(value);
    return tag == '[object Error]' || tag == '[object DOMException]' || typeof value['message'] === 'string' && typeof value['name'] === 'string' && !_0xf26333(value);
}
export default isError;