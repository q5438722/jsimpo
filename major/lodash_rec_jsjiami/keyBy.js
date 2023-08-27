import _0xfd31e7 from'./.internal/baseAssignValue.js';
import _0x294554 from'./reduce.js';
;
function keyBy(collection, iteratee) {
    return _0x294554(collection, (result, value, key) => (_0xfd31e7(result, iteratee(value), value), result), {});
}
export default keyBy;