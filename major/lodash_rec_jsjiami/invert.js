
;
const toString = Object['prototype']['toString'];
function invert(_0x583a9c) {
    const _0x27bffe = {};
    Object['keys'](_0x583a9c)['forEach'](_0x846f48 => {
        let _0x42143d = _0x583a9c[_0x846f48];
        if (_0x42143d != null && typeof _0x42143d['toString'] !== 'function') {
            _0x42143d = toString['call'](_0x42143d);
        }
        _0x27bffe[_0x42143d] = _0x846f48;
    });
    return _0x27bffe;
}
export default invert;