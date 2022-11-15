module['exports'] = { 'getPage': getPage };
function getPage(_0x207517, _0x2e1c95, _0x59630b) {
    const _0xb3171a = (_0x2e1c95 - 1) * _0x59630b;
    const _0x4ffa15 = _0x2e1c95 * _0x59630b;
    _0x1676e5['items'] = _0x207517['slice'](_0xb3171a, _0x4ffa15);
    if (_0x1676e5['items']['length'] === 0) {
        return _0x1676e5;
    }
    if (_0x2e1c95 > 1) {
        _0x1676e5['prev'] = _0x2e1c95 - 1;
    }
    if (_0x4ffa15 < _0x207517['length']) {
        _0x1676e5['next'] = _0x2e1c95 + 1;
    }
    if (_0x1676e5['items']['length'] !== _0x207517['length']) {
        _0x1676e5['current'] = _0x2e1c95;
        _0x1676e5['first'] = 1;
        _0x1676e5['last'] = Math['ceil'](_0x207517['length'] / _0x59630b);
    }
    return _0x1676e5;
}