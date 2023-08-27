
function castArray(..._0x5403d9) {
    if (!_0x5403d9['length'])
        return [];
    const _0x16ce83 = _0x5403d9[0];
    return Array['isArray'](_0x16ce83) ? _0x16ce83 : [_0x16ce83];
}
export default castArray;