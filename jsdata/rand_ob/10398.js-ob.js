'use strict';
var _0x2b64 = [
    '36458RYpcRC',
    '101393hubPKD',
    '738942tHZnGH',
    'GET',
    '/providers',
    'authentication.getProviders',
    '/connect/:provider',
    'authentication.providerLogin',
    'POST',
    '/providers/options',
    'authentication.getProviderLoginOptions',
    'admin::isAuthenticatedAdmin',
    'admin::provider-login.read',
    'PUT',
    'admin::provider-login.update',
    '251297xgOgaf',
    '1LvclQV',
    '15898Ehjolm',
    '14SdSliH',
    '50667LXYeXj',
    '3fNCJmv',
    '253112fZxGWB',
    '5wSvImz'
];
var _0x575c9e = _0x5a93;
(function (_0x53affb, _0x1a1066) {
    var _0x3e7ec1 = _0x5a93;
    while (!![]) {
        try {
            var _0x5c976b = parseInt(_0x3e7ec1(0x190)) * -parseInt(_0x3e7ec1(0x191)) + parseInt(_0x3e7ec1(0x192)) * -parseInt(_0x3e7ec1(0x193)) + -parseInt(_0x3e7ec1(0x194)) * parseInt(_0x3e7ec1(0x195)) + -parseInt(_0x3e7ec1(0x196)) + parseInt(_0x3e7ec1(0x197)) * parseInt(_0x3e7ec1(0x198)) + parseInt(_0x3e7ec1(0x199)) + parseInt(_0x3e7ec1(0x19a));
            if (_0x5c976b === _0x1a1066)
                break;
            else
                _0x53affb['push'](_0x53affb['shift']());
        } catch (_0x1a8b1a) {
            _0x53affb['push'](_0x53affb['shift']());
        }
    }
}(_0x2b64, -0x779 * 0x7 + 0xb * 0x6035 + -0x1 * 0x1bcdd));
function _0x5a93(_0x49de33, _0x536345) {
    return _0x5a93 = function (_0x4770d4, _0x29979c) {
        _0x4770d4 = _0x4770d4 - (-0x15e2 + 0x3 * 0x85a + -0x19c);
        var _0x4a239c = _0x2b64[_0x4770d4];
        return _0x4a239c;
    }, _0x5a93(_0x49de33, _0x536345);
}
module['exports'] = {
    'sso': [
        {
            'method': _0x575c9e(0x19b),
            'path': _0x575c9e(0x19c),
            'handler': _0x575c9e(0x19d)
        },
        {
            'method': _0x575c9e(0x19b),
            'path': _0x575c9e(0x19e),
            'handler': _0x575c9e(0x19f)
        },
        {
            'method': _0x575c9e(0x1a0),
            'path': _0x575c9e(0x19e),
            'handler': _0x575c9e(0x19f)
        },
        {
            'method': _0x575c9e(0x19b),
            'path': _0x575c9e(0x1a1),
            'handler': _0x575c9e(0x1a2),
            'config': {
                'policies': [
                    _0x575c9e(0x1a3),
                    [
                        'admin::hasPermissions',
                        [_0x575c9e(0x1a4)]
                    ]
                ]
            }
        },
        {
            'method': _0x575c9e(0x1a5),
            'path': _0x575c9e(0x1a1),
            'handler': 'authentication.updateProviderLoginOptions',
            'config': {
                'policies': [
                    'admin::isAuthenticatedAdmin',
                    [
                        'admin::hasPermissions',
                        [_0x575c9e(0x1a6)]
                    ]
                ]
            }
        }
    ]
};
