
function defer(_0x18d642, ..._0x35eb91) {
    if (typeof _0x18d642 !== 'function')
        throw new TypeError('Expected a function');
    return setTimeout(_0x18d642, 1, ..._0x35eb91);
}
export default defer;