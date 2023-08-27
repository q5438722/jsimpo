import _0x8c48c7 from './.internal/basePullAt.js';
function remove(_0x4b71f0, _0x17e3e3) {
    const _0x394aa6 = [];
    if (!(_0x4b71f0 != null && _0x4b71f0['length']))
        return _0x394aa6;
    let _0x1d8564 = -1;
    const _0x347608 = [], {length: _0xc351b2} = _0x4b71f0;
    while (++_0x1d8564 < _0xc351b2) {
        const _0x3122a3 = _0x4b71f0[_0x1d8564];
        _0x17e3e3(_0x3122a3, _0x1d8564, _0x4b71f0) && (_0x394aa6['push'](_0x3122a3), _0x347608['push'](_0x1d8564));
    }
    return _0x8c48c7(_0x4b71f0, _0x347608), _0x394aa6;
}
export default remove;