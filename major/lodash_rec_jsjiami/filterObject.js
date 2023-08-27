
;
function filterObject(_0x2617b6, _0x51879a) {
    _0x2617b6 = Object(_0x2617b6);
    const _0x217896 = [];
    Object['keys'](_0x2617b6)['forEach'](_0x148618 => {
        const _0x461ff7 = _0x2617b6[_0x148618];
        if (_0x51879a(_0x461ff7, _0x148618, _0x2617b6)) {
            _0x217896['push'](_0x461ff7);
        }
    });
    return _0x217896;
}
export default filterObject;