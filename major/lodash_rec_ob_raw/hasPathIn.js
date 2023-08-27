import _0xe6b34d from './.internal/castPath.js';
import _0x3dcc79 from './isArguments.js';
import _0x1cadd3 from './.internal/isIndex.js';
import _0x129cda from './isLength.js';
import _0x3a5c12 from './.internal/toKey.js';
function hasPathIn(_0xc84044, _0x435dae) {
    _0x435dae = _0xe6b34d(_0x435dae, _0xc84044);
    let _0x4616a6 = -1, {length: _0x1e9b14} = _0x435dae, _0x41148b = ![], _0x4454a7;
    while (++_0x4616a6 < _0x1e9b14) {
        _0x4454a7 = _0x3a5c12(_0x435dae[_0x4616a6]);
        if (!(_0x41148b = _0xc84044 != null && _0x4454a7 in Object(_0xc84044)))
            break;
        _0xc84044 = _0xc84044[_0x4454a7];
    }
    if (_0x41148b || ++_0x4616a6 != _0x1e9b14)
        return _0x41148b;
    return _0x1e9b14 = _0xc84044 == null ? 0 : _0xc84044['length'], !!_0x1e9b14 && _0x129cda(_0x1e9b14) && _0x1cadd3(_0x4454a7, _0x1e9b14) && (Array['isArray'](_0xc84044) || _0x3dcc79(_0xc84044));
}
export default hasPathIn;