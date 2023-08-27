import _0x11eb93 from './isSymbol.js';
const INFINITY = 1 / 0;
function toString(_0x5d2ab5) {
    if (_0x5d2ab5 == null)
        return '';
    if (typeof _0x5d2ab5 === 'string')
        return _0x5d2ab5;
    if (Array['isArray'](_0x5d2ab5))
        return '' + _0x5d2ab5['map'](_0x5a9b3e => _0x5a9b3e == null ? _0x5a9b3e : toString(_0x5a9b3e));
    if (_0x11eb93(_0x5d2ab5))
        return _0x5d2ab5['toString']();
    const _0x39e8dd = '' + _0x5d2ab5;
    return _0x39e8dd == '0' && 1 / _0x5d2ab5 == -INFINITY ? '-0' : _0x39e8dd;
}
export default toString;