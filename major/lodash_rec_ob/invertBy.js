
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function invertBy(_0x1c3a3d, _0x5a3af2) {
    const _0x1fdcec = {};
    return Object['keys'](_0x1c3a3d)['forEach'](_0x23b0a0 => {
        const _0x5d6de6 = _0x5a3af2(_0x1c3a3d[_0x23b0a0]);
        hasOwnProperty['call'](_0x1fdcec, _0x5d6de6) ? _0x1fdcec[_0x5d6de6]['push'](_0x23b0a0) : _0x1fdcec[_0x5d6de6] = [_0x23b0a0];
    }), _0x1fdcec;
}
export default invertBy;