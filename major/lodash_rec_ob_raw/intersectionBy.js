import _0x45a0b7 from './map.js';
import _0x17bd52 from './.internal/baseIntersection.js';
import _0x197a39 from './.internal/castArrayLikeObject.js';
import _0x338e0e from './last.js';
function intersectionBy(..._0x2ea73e) {
    let _0x31b0ad = _0x338e0e(_0x2ea73e);
    const _0x9574a4 = _0x45a0b7(_0x2ea73e, _0x197a39);
    return _0x31b0ad === _0x338e0e(_0x9574a4) ? _0x31b0ad = undefined : _0x9574a4['pop'](), _0x9574a4['length'] && _0x9574a4[0] === _0x2ea73e[0] ? _0x17bd52(_0x9574a4, _0x31b0ad) : [];
}
export default intersectionBy;