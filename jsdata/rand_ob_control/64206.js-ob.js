function TestNestedLoops() {
    var _0x4a4100 = {
            'BlZYf': function (_0x504884, _0x35f0cd) {
                return _0x504884 < _0x35f0cd;
            },
            'FBJQn': function (_0x382363, _0x1edf93) {
                return _0x382363 + _0x1edf93;
            },
            'JDQNR': function (_0xf2979, _0x49c4cc) {
                return _0xf2979 + _0x49c4cc;
            },
            'RhMQV': function (_0xbe5ad4, _0x11416f) {
                return _0xbe5ad4 + _0x11416f;
            }
        }, _0x1c6e96 = 0x0;
    for (var _0xd66160 = 0x0; _0x4a4100['BlZYf'](_0xd66160, 0xc8); _0xd66160 = _0x4a4100['FBJQn'](_0xd66160, 0x1)) {
        for (var _0x400574 = 0x0; _0x4a4100['BlZYf'](_0x400574, 0xc8); _0x400574 = _0x4a4100['JDQNR'](_0x400574, 0x1)) {
            _0x1c6e96 = _0x4a4100['RhMQV'](_0x1c6e96, 0x1);
        }
    }
    return _0x1c6e96;
}
assertEquals(0xc8 * 0xc8, TestNestedLoops());
