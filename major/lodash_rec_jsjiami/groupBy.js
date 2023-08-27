import _0x3d5a20 from'./.internal/baseAssignValue.js';
import _0x2f5395 from'./reduce.js';
;
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function groupBy(collection, iteratee) {
    return _0x2f5395(collection, (result, value, key) => {
        key = iteratee(value);
        if (hasOwnProperty['call'](result, key)) {
            result[key]['push'](value);
        } else {
            _0x3d5a20(result, key, [value]);
        }
        return result;
    }, {});
}
export default groupBy;