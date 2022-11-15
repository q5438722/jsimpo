const _0x337c = [
    '45FwNVkz',
    '18080oFhAyK',
    '331uDtaxX',
    '799FGmHzX',
    '577360cnOZCc',
    '714919kiupwU',
    '448519fkfHbJ',
    '156607zxPzcm',
    '831419ZlXcHA'
];
(function (_0x3c8215, _0x1757cd) {
    const _0x2bd176 = _0x20fe;
    while (!![]) {
        try {
            const _0xac7080 = -parseInt(_0x2bd176(0x167)) * parseInt(_0x2bd176(0x168)) + parseInt(_0x2bd176(0x169)) * parseInt(_0x2bd176(0x16a)) + parseInt(_0x2bd176(0x16b)) + -parseInt(_0x2bd176(0x16c)) + parseInt(_0x2bd176(0x16d)) + -parseInt(_0x2bd176(0x16e)) + parseInt(_0x2bd176(0x16f));
            if (_0xac7080 === _0x1757cd)
                break;
            else
                _0x3c8215['push'](_0x3c8215['shift']());
        } catch (_0x1992b8) {
            _0x3c8215['push'](_0x3c8215['shift']());
        }
    }
}(_0x337c, 0x6a9a1));
import _0x5f0420 from './toNumber.js';
function _0x20fe(_0x34f428, _0x1ae7f7) {
    return _0x20fe = function (_0x337c9b, _0x20fe9c) {
        _0x337c9b = _0x337c9b - 0x167;
        let _0x3ef169 = _0x337c[_0x337c9b];
        return _0x3ef169;
    }, _0x20fe(_0x34f428, _0x1ae7f7);
}
const INFINITY = 0x1 / 0x0, MAX_INTEGER = 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
function toFinite(_0x2b00d2) {
    if (!_0x2b00d2)
        return _0x2b00d2 === 0x0 ? _0x2b00d2 : 0x0;
    _0x2b00d2 = _0x5f0420(_0x2b00d2);
    if (_0x2b00d2 === INFINITY || _0x2b00d2 === -INFINITY) {
        const _0x5480a9 = _0x2b00d2 < 0x0 ? -0x1 : 0x1;
        return _0x5480a9 * MAX_INTEGER;
    }
    return _0x2b00d2 === _0x2b00d2 ? _0x2b00d2 : 0x0;
}
export default toFinite;
