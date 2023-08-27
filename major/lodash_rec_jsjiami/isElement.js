import _0x126037 from'./isObjectLike.js';
import _0x1af48b from'./isPlainObject.js';
;
function isElement(value) {
    return _0x126037(value) && value['nodeType'] === 1 && !_0x1af48b(value);
}
export default isElement;