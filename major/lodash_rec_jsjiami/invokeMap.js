import _0x16322d from'./.internal/baseEach.js';
import _0x1b4c73 from'./invoke.js';
import _0x1fb4b8 from'./isArrayLike.js';
;
function invokeMap(collection, path, args) {
    let index = -1;
    const isFunc = typeof path === 'function';
    const result = _0x1fb4b8(collection) ? new Array(collection['length']) : [];
    _0x16322d(collection, value => {
        result[++index] = isFunc ? path['apply'](value, args) : _0x1b4c73(value, path, args);
    });
    return result;
}
export default invokeMap;