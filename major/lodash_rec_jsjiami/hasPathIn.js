import _0x165d45 from'./.internal/castPath.js';
import _0x1c77a1 from'./isArguments.js';
import _0xd11600 from'./.internal/isIndex.js';
import _0x5aae2c from'./isLength.js';
import _0x508ca0 from'./.internal/toKey.js';
;
function hasPathIn(object, path) {
    path = _0x165d45(path, object);
    let index = -1;
    let {length} = path;
    let result = ![];
    let key;
    while (++index < length) {
        key = _0x508ca0(path[index]);
        if (!(result = object != null && key in Object(object))) {
            break;
        }
        object = object[key];
    }
    if (result || ++index != length) {
        return result;
    }
    length = object == null ? 0 : object['length'];
    return !!length && _0x5aae2c(length) && _0xd11600(key, length) && (Array['isArray'](object) || _0x1c77a1(object));
}
export default hasPathIn;