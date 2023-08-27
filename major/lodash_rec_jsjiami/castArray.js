
;
function castArray(..._0x47b0e8) {
    if (!_0x47b0e8['length']) {
        return [];
    }
    const _0x4f8a03 = _0x47b0e8[0];
    return Array['isArray'](_0x4f8a03) ? _0x4f8a03 : [_0x4f8a03];
}
export default castArray;