import _0x2d9057 from './.internal/copyArray.js';
import _0x377f39 from './.internal/getTag.js';
import _0x5d00c1 from './isArrayLike.js';
import _0x132456 from './isString.js';
import _0x26cee8 from './.internal/iteratorToArray.js';
import _0x54599f from './.internal/mapToArray.js';
import _0x1647bd from './.internal/setToArray.js';
import _0x1832fe from './.internal/stringToArray.js';
import _0x5255e0 from './values.js';
const mapTag = '[object Map]', setTag = '[object Set]', symIterator = Symbol['iterator'];
function toArray(_0x4221f6) {
    if (!_0x4221f6)
        return [];
    if (_0x5d00c1(_0x4221f6))
        return _0x132456(_0x4221f6) ? _0x1832fe(_0x4221f6) : _0x2d9057(_0x4221f6);
    if (symIterator && _0x4221f6[symIterator])
        return _0x26cee8(_0x4221f6[symIterator]());
    const _0x12f2ec = _0x377f39(_0x4221f6), _0x1e4123 = _0x12f2ec == mapTag ? _0x54599f : _0x12f2ec == setTag ? _0x1647bd : _0x5255e0;
    return _0x1e4123(_0x4221f6);
}
export default toArray;