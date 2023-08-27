import _0x8c48c7 from './.internal/basePullAt.js';
;
function remove(_0x2efd49, _0x840bfc) {
    const _0x557cf7 = [];
    if (!(_0x2efd49 != null && _0x2efd49['length'])) {
        return _0x557cf7;
    }
    let _0x528eb7 = -1;
    const _0x2da755 = [];
    const {length} = _0x2efd49;
    while (++_0x528eb7 < length) {
        const _0x14162c = _0x2efd49[_0x528eb7];
        if (_0x840bfc(_0x14162c, _0x528eb7, _0x2efd49)) {
            _0x557cf7['push'](_0x14162c);
            _0x2da755['push'](_0x528eb7);
        }
    }
    _0x4482b8(_0x2efd49, _0x2da755);
    return _0x557cf7;
}
export default remove;