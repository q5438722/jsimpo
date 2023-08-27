import _0x2305e6 from './.internal/castPath.js';
import _0x5373e4 from './isArguments.js';
import _0x24f13b from './.internal/isIndex.js';
import _0x552530 from './isLength.js';
import _0x3dc97d from './.internal/toKey.js';
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function hasPath(_0x2ba0ee, _0x2f65e1) {
    _0x2f65e1 = _0x2305e6(_0x2f65e1, _0x2ba0ee);
    let _0xd8baa9 = -1, {length: _0x4ff28e} = _0x2f65e1, _0x2542e3 = ![], _0x1ba79c;
    while (++_0xd8baa9 < _0x4ff28e) {
        _0x1ba79c = _0x3dc97d(_0x2f65e1[_0xd8baa9]);
        if (!(_0x2542e3 = _0x2ba0ee != null && hasOwnProperty['call'](_0x2ba0ee, _0x1ba79c)))
            break;
        _0x2ba0ee = _0x2ba0ee[_0x1ba79c];
    }
    if (_0x2542e3 || ++_0xd8baa9 != _0x4ff28e)
        return _0x2542e3;
    return _0x4ff28e = _0x2ba0ee == null ? 0 : _0x2ba0ee['length'], !!_0x4ff28e && _0x552530(_0x4ff28e) && _0x24f13b(_0x1ba79c, _0x4ff28e) && (Array['isArray'](_0x2ba0ee) || _0x5373e4(_0x2ba0ee));
}
export default hasPath;