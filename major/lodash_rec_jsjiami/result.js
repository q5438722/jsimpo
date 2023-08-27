import _0x4337d0 from'./.internal/castPath.js';
import _0x5ec641 from'./.internal/toKey.js';
;
function result(object, path, defaultValue) {
    path = _0x4337d0(path, object);
    let index = -1;
    let length = path['length'];
    if (!length) {
        length = 1;
        object = undefined;
    }
    while (++index < length) {
        let value = object == null ? undefined : object[_0x5ec641(path[index])];
        if (value === undefined) {
            index = length;
            value = defaultValue;
        }
        object = typeof value === 'function' ? value['call'](object) : value;
    }
    return object;
}
export default result;