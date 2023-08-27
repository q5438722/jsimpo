import _0x1eb65d from './eq.js';
const objectProto = Object['prototype'], hasOwnProperty = objectProto['hasOwnProperty'];
function defaults(_0x177b3c, ..._0x31f0d8) {
    return _0x177b3c = Object(_0x177b3c), _0x31f0d8['forEach'](_0x195ff0 => {
        if (_0x195ff0 != null) {
            _0x195ff0 = Object(_0x195ff0);
            for (const _0x597298 in _0x195ff0) {
                const _0x38d4fd = _0x177b3c[_0x597298];
                (_0x38d4fd === undefined || _0x1eb65d(_0x38d4fd, objectProto[_0x597298]) && !hasOwnProperty['call'](_0x177b3c, _0x597298)) && (_0x177b3c[_0x597298] = _0x195ff0[_0x597298]);
            }
        }
    }), _0x177b3c;
}
export default defaults;