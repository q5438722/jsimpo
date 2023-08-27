
;
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function invertBy(_0x5e5925, _0x4e96d4) {
    Object['keys'](_0x5e5925)['forEach'](_0x4c4d89 => {
        const _0x178c13 = _0x4e96d4(_0x5e5925[_0x4c4d89]);
        if (hasOwnProperty['call'](_0xf7e759, _0x178c13)) {
            _0xf7e759[_0x178c13]['push'](_0x4c4d89);
        } else {
            _0xf7e759[_0x178c13] = [_0x4c4d89];
        }
    });
    return _0xf7e759;
}
export default invertBy;