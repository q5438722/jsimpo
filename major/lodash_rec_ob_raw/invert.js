
const toString = Object['prototype']['toString'];
function invert(_0x594572) {
    const _0x5338f9 = {};
    return Object['keys'](_0x594572)['forEach'](_0x44d2e3 => {
        let _0x38d23c = _0x594572[_0x44d2e3];
        _0x38d23c != null && typeof _0x38d23c['toString'] !== 'function' && (_0x38d23c = toString['call'](_0x38d23c)), _0x5338f9[_0x38d23c] = _0x44d2e3;
    }), _0x5338f9;
}
export default invert;