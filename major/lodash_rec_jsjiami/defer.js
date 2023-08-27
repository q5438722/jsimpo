
;
function defer(_0x514e92, ..._0x1db6d3) {
    if (typeof _0x514e92 !== 'function') {
        throw new TypeError('Expected a function');
    }
    return setTimeout(_0x514e92, 1, ..._0x1db6d3);
}
export default defer;