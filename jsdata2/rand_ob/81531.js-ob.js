const _0x1c26 = [
    'GhostError',
    'aVqUC',
    'errors.api.common.notImplemented',
    'pPjCV',
    'authAdminApi',
    'authenticateAdminApi',
    'authorize',
    'updateUserLastSeen',
    'urlRedirects',
    'adminSSLAndHostRedirect',
    'middlewares',
    'prettyUrls',
    'exports',
    'authAdminApiWithUrl',
    'authenticate',
    'publicAdminApi',
    'cors',
    '162711krPKSE',
    '8hRuqCy',
    '30269jOQZGh',
    '2063aBHvAa',
    '125WpGkcz',
    '62536vJuiPx',
    '2UCHDJV',
    '41435JHskEI',
    '2VmrbTf',
    '103924yyGpgb',
    '307933aTxOIL',
    '1jJIyKQ',
    '@tryghost/errors',
    '../../../../../shared/i18n',
    '../../../../services/auth',
    '../../middleware',
    'PUT',
    'DELETE',
    'POST',
    '501',
    'api_key',
    'DUdaS',
    'OdSnx',
    'nmsDm',
    'zNJbT',
    'LYkzq',
    'GET',
    'url',
    'includes'
];
const _0x422382 = _0x1eb2;
(function (_0x475805, _0x37d02b) {
    const _0x1ad403 = _0x1eb2;
    while (!![]) {
        try {
            const _0x3a0c10 = parseInt(_0x1ad403(0xcb)) + -parseInt(_0x1ad403(0xcc)) * -parseInt(_0x1ad403(0xcd)) + -parseInt(_0x1ad403(0xce)) * parseInt(_0x1ad403(0xcf)) + -parseInt(_0x1ad403(0xd0)) * -parseInt(_0x1ad403(0xd1)) + -parseInt(_0x1ad403(0xd2)) + parseInt(_0x1ad403(0xd3)) * parseInt(_0x1ad403(0xd4)) + parseInt(_0x1ad403(0xd5)) * -parseInt(_0x1ad403(0xd6));
            if (_0x3a0c10 === _0x37d02b)
                break;
            else
                _0x475805['push'](_0x475805['shift']());
        } catch (_0x3e5900) {
            _0x475805['push'](_0x475805['shift']());
        }
    }
}(_0x1c26, 0x26761 + 0x1573 + -0x7ee8));
const errors = require(_0x422382(0xd7)), i18n = require(_0x422382(0xd8)), auth = require(_0x422382(0xd9)), shared = require('../../../shared'), apiMw = require(_0x422382(0xda)), notImplemented = function (_0x789d16, _0xcc0975, _0x51738f) {
        const _0x129dea = _0x422382, _0x5a4ede = {
                'DUdaS': function (_0x5c3dce) {
                    return _0x5c3dce();
                },
                'OdSnx': 'GET',
                'nmsDm': _0x129dea(0xdb),
                'zNJbT': _0x129dea(0xdc),
                'LYkzq': _0x129dea(0xdd),
                'LSEOE': function (_0x3e84de) {
                    return _0x3e84de();
                },
                'aVqUC': 'NotImplementedError',
                'pPjCV': _0x129dea(0xde)
            };
        if (!_0x789d16[_0x129dea(0xdf)])
            return _0x5a4ede[_0x129dea(0xe0)](_0x51738f);
        const _0x3f9dff = {
                'site': [_0x5a4ede[_0x129dea(0xe1)]],
                'posts': [
                    _0x5a4ede[_0x129dea(0xe1)],
                    _0x5a4ede[_0x129dea(0xe2)],
                    _0x5a4ede[_0x129dea(0xe3)],
                    _0x5a4ede[_0x129dea(0xe4)]
                ],
                'pages': [
                    _0x129dea(0xe5),
                    _0x129dea(0xdb),
                    _0x129dea(0xdc),
                    _0x5a4ede[_0x129dea(0xe4)]
                ],
                'images': [_0x129dea(0xdd)],
                'webhooks': [
                    _0x129dea(0xdd),
                    'PUT',
                    _0x129dea(0xdc)
                ],
                'actions': ['GET'],
                'tags': [
                    _0x5a4ede[_0x129dea(0xe1)],
                    _0x5a4ede[_0x129dea(0xe2)],
                    _0x5a4ede[_0x129dea(0xe3)],
                    _0x5a4ede['LYkzq']
                ],
                'labels': [
                    _0x5a4ede[_0x129dea(0xe1)],
                    'PUT',
                    _0x5a4ede[_0x129dea(0xe3)],
                    _0x5a4ede[_0x129dea(0xe4)]
                ],
                'users': [_0x5a4ede[_0x129dea(0xe1)]],
                'themes': [
                    _0x129dea(0xdd),
                    _0x5a4ede[_0x129dea(0xe2)]
                ],
                'members': [
                    _0x5a4ede[_0x129dea(0xe1)],
                    _0x5a4ede[_0x129dea(0xe2)],
                    'DELETE',
                    _0x5a4ede[_0x129dea(0xe4)]
                ],
                'config': [_0x5a4ede['OdSnx']],
                'schedules': [_0x129dea(0xdb)],
                'db': [_0x5a4ede[_0x129dea(0xe4)]]
            }, _0x3a6701 = _0x789d16[_0x129dea(0xe6)]['match'](/^\/(\w+)\/?/);
        if (_0x3a6701) {
            const _0x2d86a4 = _0x3a6701[0x26f6 + -0x1eaa + -0x84b * 0x1];
            if (_0x3f9dff[_0x2d86a4] && _0x3f9dff[_0x2d86a4][_0x129dea(0xe7)](_0x789d16['method']))
                return _0x5a4ede['LSEOE'](_0x51738f);
        }
        _0x51738f(new errors[(_0x129dea(0xe8))]({
            'errorType': _0x5a4ede[_0x129dea(0xe9)],
            'message': i18n['t'](_0x129dea(0xea)),
            'statusCode': _0x5a4ede[_0x129dea(0xeb)]
        }));
    };
function _0x1eb2(_0x559b10, _0x34245d) {
    return _0x1eb2 = function (_0x1e1c24, _0x105556) {
        _0x1e1c24 = _0x1e1c24 - (-0x1bf0 + 0x484 + 0x1837);
        let _0x57083e = _0x1c26[_0x1e1c24];
        return _0x57083e;
    }, _0x1eb2(_0x559b10, _0x34245d);
}
module['exports'][_0x422382(0xec)] = [
    auth['authenticate'][_0x422382(0xed)],
    auth[_0x422382(0xee)]['authorizeAdminApi'],
    apiMw[_0x422382(0xef)],
    apiMw['cors'],
    shared['middlewares'][_0x422382(0xf0)][_0x422382(0xf1)],
    shared[_0x422382(0xf2)][_0x422382(0xf3)],
    notImplemented
], module[_0x422382(0xf4)][_0x422382(0xf5)] = [
    auth[_0x422382(0xf6)]['authenticateAdminApiWithUrl'],
    auth[_0x422382(0xee)]['authorizeAdminApi'],
    apiMw[_0x422382(0xef)],
    apiMw['cors'],
    shared['middlewares']['urlRedirects']['adminSSLAndHostRedirect'],
    shared[_0x422382(0xf2)][_0x422382(0xf3)],
    notImplemented
], module[_0x422382(0xf4)][_0x422382(0xf7)] = [
    apiMw[_0x422382(0xf8)],
    shared[_0x422382(0xf2)][_0x422382(0xf0)][_0x422382(0xf1)],
    shared[_0x422382(0xf2)][_0x422382(0xf3)],
    notImplemented
];
