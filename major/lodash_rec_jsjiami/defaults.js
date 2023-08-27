import _0x1283fe from'./eq.js';
;
const objectProto = Object['prototype'];
const hasOwnProperty = objectProto['hasOwnProperty'];
function defaults(_0x33e2c1, ..._0x1ca878) {
    _0x33e2c1 = Object(_0x33e2c1);
    _0x1ca878['forEach'](_0x3cd62c => {
        if (_0x3cd62c != null) {
            _0x3cd62c = Object(_0x3cd62c);
            for (const _0x3023a1 in _0x3cd62c) {
                const _0x20007e = _0x33e2c1[_0x3023a1];
                if (_0x20007e === undefined || _0x1283fe(_0x20007e, objectProto[_0x3023a1]) && !hasOwnProperty['call'](_0x33e2c1, _0x3023a1)) {
                    _0x33e2c1[_0x3023a1] = _0x3cd62c[_0x3023a1];
                }
            }
        }
    });
    return _0x33e2c1;
}
export default defaults;