function _0x5a93(_0x49de33, _0x536345) {
    return _0x5a93 = function (_0x4770d4, _0x29979c) {
        _0x4770d4 = _0x4770d4 - (-5602 + 3 * 2138 + -412);
        var _0x4a239c = _0x2b64[_0x4770d4];
        return _0x4a239c;
    }, _0x5a93(_0x49de33, _0x536345);
}
module['exports'] = {
    'sso': [
        {
            'method': _0x575c9e(411),
            'path': _0x575c9e(412),
            'handler': _0x575c9e(413)
        },
        {
            'method': _0x575c9e(411),
            'path': _0x575c9e(414),
            'handler': _0x575c9e(415)
        },
        {
            'method': _0x575c9e(416),
            'path': _0x575c9e(414),
            'handler': _0x575c9e(415)
        },
        {
            'method': _0x575c9e(411),
            'path': _0x575c9e(417),
            'handler': _0x575c9e(418),
            'config': {
                'policies': [
                    _0x575c9e(419),
                    [
                        'admin::hasPermissions',
                        [_0x575c9e(420)]
                    ]
                ]
            }
        },
        {
            'method': _0x575c9e(421),
            'path': _0x575c9e(417),
            'handler': 'authentication.updateProviderLoginOptions',
            'config': {
                'policies': [
                    'admin::isAuthenticatedAdmin',
                    [
                        'admin::hasPermissions',
                        [_0x575c9e(422)]
                    ]
                ]
            }
        }
    ]
};