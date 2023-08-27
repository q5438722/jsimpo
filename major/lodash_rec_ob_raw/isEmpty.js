import _0x655be from './.internal/getTag.js';
import _0x3554fa from './isArguments.js';
import _0x3e25cf from './isArrayLike.js';
import _0x70ff8a from './isBuffer.js';
import _0x563c14 from './.internal/isPrototype.js';
import _0x478205 from './isTypedArray.js';
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function isEmpty(_0x27902d) {
    if (_0x27902d == null)
        return !![];
    if (_0x3e25cf(_0x27902d) && (Array['isArray'](_0x27902d) || typeof _0x27902d === 'string' || typeof _0x27902d['splice'] === 'function' || _0x70ff8a(_0x27902d) || _0x478205(_0x27902d) || _0x3554fa(_0x27902d)))
        return !_0x27902d['length'];
    const _0x8613ec = _0x655be(_0x27902d);
    if (_0x8613ec == '[object Map]' || _0x8613ec == '[object Set]')
        return !_0x27902d['size'];
    if (_0x563c14(_0x27902d))
        return !Object['keys'](_0x27902d)['length'];
    for (const _0xd04117 in _0x27902d) {
        if (hasOwnProperty['call'](_0x27902d, _0xd04117))
            return ![];
    }
    return !![];
}
export default isEmpty;