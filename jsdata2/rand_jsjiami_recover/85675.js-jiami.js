var SetTileIndexCallback = function (_0x41aad0, _0x3cf707, _0x1ac8a5, _0x55c593) {
    if (typeof _0x41aad0 === 'number') {
        _0x55c593['callbacks'][_0x41aad0] = _0x3cf707 !== null ? {
            'callback': _0x3cf707,
            'callbackContext': _0x1ac8a5
        } : undefined;
    } else {
        for (var _0x421d2e = 0, _0x57ab3c = _0x41aad0['length']; _0x421d2e < _0x57ab3c; _0x421d2e++) {
            _0x55c593['callbacks'][_0x41aad0[_0x421d2e]] = _0x3cf707 !== null ? {
                'callback': _0x3cf707,
                'callbackContext': _0x1ac8a5
            } : undefined;
        }
    }
};
module['exports'] = SetTileIndexCallback;