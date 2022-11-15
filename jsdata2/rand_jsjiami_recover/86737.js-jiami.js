var GetTarget = function (_0x102df2) {
    var _0x482e28;
    if (_0x102df2 !== '') {
        if (typeof _0x102df2 === 'string') {
            _0x482e28 = document['getElementById'](_0x102df2);
        } else if (_0x102df2 && _0x102df2['nodeType'] === 1) {
            _0x482e28 = _0x102df2;
        }
    }
    if (!_0x482e28) {
        _0x482e28 = document['body'];
    }
    return _0x482e28;
};
module['exports'] = GetTarget;