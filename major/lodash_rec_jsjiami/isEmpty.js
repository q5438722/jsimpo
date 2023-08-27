import _0x29a1c0 from'./.internal/getTag.js';
import _0x3868b3 from'./isArguments.js';
import _0x3c5fed from'./isArrayLike.js';
import _0x2238a3 from'./isBuffer.js';
import _0x2efaf5 from'./.internal/isPrototype.js';
import _0x228fdb from'./isTypedArray.js';
;
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function isEmpty(value) {
    if (value == null) {
        return !![];
    }
    if (_0x3c5fed(value) && (Array['isArray'](value) || typeof value === 'string' || typeof value['splice'] === 'function' || _0x2238a3(value) || _0x228fdb(value) || _0x3868b3(value))) {
        return !value['length'];
    }
    const tag = _0x29a1c0(value);
    if (tag == '[object Map]' || tag == '[object Set]') {
        return !value['size'];
    }
    if (_0x2efaf5(value)) {
        return !Object['keys'](value)['length'];
    }
    for (const key in value) {
        if (hasOwnProperty['call'](value, key)) {
            return ![];
        }
    }
    return !![];
}
export default isEmpty;