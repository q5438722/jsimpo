import _0x1059f6 from'./.internal/copyArray.js';
import _0x401e0c from'./.internal/getTag.js';
import _0x1d6d3e from'./isArrayLike.js';
import _0x5a159e from'./isString.js';
import _0xd1a940 from'./.internal/iteratorToArray.js';
import _0x15570f from'./.internal/mapToArray.js';
import _0x45def9 from'./.internal/setToArray.js';
import _0x19d1c0 from'./.internal/stringToArray.js';
import _0x420b9e from'./values.js';
;
const mapTag = '[object Map]';
const setTag = '[object Set]';
const symIterator = Symbol['iterator'];
function toArray(value) {
    if (!value) {
        return [];
    }
    if (_0x1d6d3e(value)) {
        return _0x5a159e(value) ? _0x19d1c0(value) : _0x1059f6(value);
    }
    if (symIterator && value[symIterator]) {
        return _0xd1a940(value[symIterator]());
    }
    const tag = _0x401e0c(value);
    const func = tag == mapTag ? _0x15570f : tag == setTag ? _0x45def9 : _0x420b9e;
    return func(value);
}
export default toArray;