const errors = require(_0x422382(215)), i18n = require(_0x422382(216)), auth = require(_0x422382(217)), shared = require('../../../shared'), apiMw = require(_0x422382(218)), notImplemented = function (_0x789d16, _0xcc0975, _0x51738f) {
        const _0x129dea = _0x422382, _0x5a4ede = {
                'DUdaS': function (_0x5c3dce) {
                    return _0x5c3dce();
                },
                'OdSnx': 'GET',
                'nmsDm': _0x129dea(219),
                'zNJbT': _0x129dea(220),
                'LYkzq': _0x129dea(221),
                'LSEOE': function (_0x3e84de) {
                    return _0x3e84de();
                },
                'aVqUC': 'NotImplementedError',
                'pPjCV': _0x129dea(222)
            };
        if (!_0x789d16[_0x129dea(223)])
            return _0x5a4ede[_0x129dea(224)](_0x51738f);
        const _0x3f9dff = {
                'site': [_0x5a4ede[_0x129dea(225)]],
                'posts': [
                    _0x5a4ede[_0x129dea(225)],
                    _0x5a4ede[_0x129dea(226)],
                    _0x5a4ede[_0x129dea(227)],
                    _0x5a4ede[_0x129dea(228)]
                ],
                'pages': [
                    _0x129dea(229),
                    _0x129dea(219),
                    _0x129dea(220),
                    _0x5a4ede[_0x129dea(228)]
                ],
                'images': [_0x129dea(221)],
                'webhooks': [
                    _0x129dea(221),
                    'PUT',
                    _0x129dea(220)
                ],
                'actions': ['GET'],
                'tags': [
                    _0x5a4ede[_0x129dea(225)],
                    _0x5a4ede[_0x129dea(226)],
                    _0x5a4ede[_0x129dea(227)],
                    _0x5a4ede['LYkzq']
                ],
                'labels': [
                    _0x5a4ede[_0x129dea(225)],
                    'PUT',
                    _0x5a4ede[_0x129dea(227)],
                    _0x5a4ede[_0x129dea(228)]
                ],
                'users': [_0x5a4ede[_0x129dea(225)]],
                'themes': [
                    _0x129dea(221),
                    _0x5a4ede[_0x129dea(226)]
                ],
                'members': [
                    _0x5a4ede[_0x129dea(225)],
                    _0x5a4ede[_0x129dea(226)],
                    'DELETE',
                    _0x5a4ede[_0x129dea(228)]
                ],
                'config': [_0x5a4ede['OdSnx']],
                'schedules': [_0x129dea(219)],
                'db': [_0x5a4ede[_0x129dea(228)]]
            }, _0x3a6701 = _0x789d16[_0x129dea(230)]['match'](/^\/(\w+)\/?/);
        if (_0x3a6701) {
            const _0x2d86a4 = _0x3a6701[9974 + -7850 + -2123 * 1];
            if (_0x3f9dff[_0x2d86a4] && _0x3f9dff[_0x2d86a4][_0x129dea(231)](_0x789d16['method']))
                return _0x5a4ede['LSEOE'](_0x51738f);
        }
        _0x51738f(new errors[(_0x129dea(232))]({
            'errorType': _0x5a4ede[_0x129dea(233)],
            'message': i18n['t'](_0x129dea(234)),
            'statusCode': _0x5a4ede[_0x129dea(235)]
        }));
    };
function _0x1eb2(_0x559b10, _0x34245d) {
    return _0x1eb2 = function (_0x1e1c24, _0x105556) {
        _0x1e1c24 = _0x1e1c24 - (-7152 + 1156 + 6199);
        let _0x57083e = _0x1c26[_0x1e1c24];
        return _0x57083e;
    }, _0x1eb2(_0x559b10, _0x34245d);
}
module['exports'][_0x422382(236)] = [
    auth['authenticate'][_0x422382(237)],
    auth[_0x422382(238)]['authorizeAdminApi'],
    apiMw[_0x422382(239)],
    apiMw['cors'],
    shared['middlewares'][_0x422382(240)][_0x422382(241)],
    shared[_0x422382(242)][_0x422382(243)],
    notImplemented
], module[_0x422382(244)][_0x422382(245)] = [
    auth[_0x422382(246)]['authenticateAdminApiWithUrl'],
    auth[_0x422382(238)]['authorizeAdminApi'],
    apiMw[_0x422382(239)],
    apiMw['cors'],
    shared['middlewares']['urlRedirects']['adminSSLAndHostRedirect'],
    shared[_0x422382(242)][_0x422382(243)],
    notImplemented
], module[_0x422382(244)][_0x422382(247)] = [
    apiMw[_0x422382(248)],
    shared[_0x422382(242)][_0x422382(240)][_0x422382(241)],
    shared[_0x422382(242)][_0x422382(243)],
    notImplemented
];