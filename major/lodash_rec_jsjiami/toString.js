import _0x2247e6 from'./isSymbol.js';
;
const INFINITY = 1 / 0;
function toString(_0x1179e4) {
    if (_0x1179e4 == null) {
        return '';
    }
    if (typeof _0x1179e4 === 'string') {
        return _0x1179e4;
    }
    if (Array['isArray'](_0x1179e4)) {
        return '' + _0x1179e4['map'](_0x3d98c2 => _0x3d98c2 == null ? _0x3d98c2 : toString(_0x3d98c2));
    }
    if (_0x2247e6(_0x1179e4)) {
        return _0x1179e4['toString']();
    }
    const _0x83abb5 = '' + _0x1179e4;
    return _0x83abb5 == '0' && 1 / _0x1179e4 == -INFINITY ? '-0' : _0x83abb5;
}
export default toString;