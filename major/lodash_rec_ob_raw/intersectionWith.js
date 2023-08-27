import _0x4085d6 from './map.js';
import _0x4ebdc0 from './.internal/baseIntersection.js';
import _0x16fa15 from './.internal/castArrayLikeObject.js';
import _0x370325 from './last.js';
function intersectionWith(..._0x952bf3) {
    let _0xa94543 = _0x370325(_0x952bf3);
    const _0x278203 = _0x4085d6(_0x952bf3, _0x16fa15);
    return _0xa94543 = typeof _0xa94543 === 'function' ? _0xa94543 : undefined, _0xa94543 && _0x278203['pop'](), _0x278203['length'] && _0x278203[0] === _0x952bf3[0] ? _0x4ebdc0(_0x278203, undefined, _0xa94543) : [];
}
export default intersectionWith;