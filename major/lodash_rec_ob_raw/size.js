import _0x36673a from './.internal/getTag.js';
import _0x388252 from './isArrayLike.js';
import _0x46519f from './isString.js';
import _0x1aa694 from './.internal/stringSize.js';
const mapTag = '[object Map]', setTag = '[object Set]';
function size(_0xacd841) {
    if (_0xacd841 == null)
        return 0;
    if (_0x388252(_0xacd841))
        return _0x46519f(_0xacd841) ? _0x1aa694(_0xacd841) : _0xacd841['length'];
    const _0x292a14 = _0x36673a(_0xacd841);
    if (_0x292a14 == mapTag || _0x292a14 == setTag)
        return _0xacd841['size'];
    return Object['keys'](_0xacd841)['length'];
}
export default size;