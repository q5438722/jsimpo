import _0x20e2ea from './filter.js';
import _0x829b5a from './map.js';
import _0x3d7ef3 from './.internal/baseProperty.js';
import _0x33a8e9 from './isArrayLikeObject.js';
function unzip(_0x38ad0c) {
    if (!(_0x38ad0c != null && _0x38ad0c['length']))
        return [];
    let _0x5b42f7 = 0;
    _0x38ad0c = _0x20e2ea(_0x38ad0c, _0x3c0247 => {
        if (_0x33a8e9(_0x3c0247))
            return _0x5b42f7 = Math['max'](_0x3c0247['length'], _0x5b42f7), !![];
    });
    let _0x30308b = -1;
    const _0x537ef7 = new Array(_0x5b42f7);
    while (++_0x30308b < _0x5b42f7) {
        _0x537ef7[_0x30308b] = _0x829b5a(_0x38ad0c, _0x3d7ef3(_0x30308b));
    }
    return _0x537ef7;
}
export default unzip;