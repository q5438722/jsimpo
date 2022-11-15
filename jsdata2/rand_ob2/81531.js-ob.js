const _0xa052 = [
    '287044NVTkmU',
    '1152564Sxbkev',
    '1620161UUwtfg',
    '1WNJZPB',
    '2565326RbLykt',
    '../../../../../shared/i18n',
    '../../../../services/auth',
    '../../middleware',
    'GET',
    'PUT',
    'DELETE',
    'POST',
    'url',
    'match',
    'includes',
    'method',
    'GhostError',
    'NotImplementedError',
    'errors.api.common.notImplemented',
    '501',
    'exports',
    'authAdminApi',
    'authenticate',
    'authorize',
    'updateUserLastSeen',
    'cors',
    'middlewares',
    'urlRedirects',
    'adminSSLAndHostRedirect',
    'prettyUrls',
    'authAdminApiWithUrl',
    'authenticateAdminApiWithUrl',
    'publicAdminApi',
    '12362WrOfZS',
    '75TNkRBU',
    '1490156eNopxF',
    '1QHvayM',
    '2906UTdSyv'
];
const _0xfcfefa = _0x1223;
(function (_0x59162d, _0x460a07) {
    const _0x1dc8f7 = _0x1223;
    while (!![]) {
        try {
            const _0x2fe578 = parseInt(_0x1dc8f7(0x132)) * -parseInt(_0x1dc8f7(0x133)) + -parseInt(_0x1dc8f7(0x134)) * parseInt(_0x1dc8f7(0x135)) + -parseInt(_0x1dc8f7(0x136)) + parseInt(_0x1dc8f7(0x137)) + -parseInt(_0x1dc8f7(0x138)) + -parseInt(_0x1dc8f7(0x139)) * -parseInt(_0x1dc8f7(0x13a)) + parseInt(_0x1dc8f7(0x13b));
            if (_0x2fe578 === _0x460a07)
                break;
            else
                _0x59162d['push'](_0x59162d['shift']());
        } catch (_0x40a884) {
            _0x59162d['push'](_0x59162d['shift']());
        }
    }
}(_0xa052, 0xdbaab));
const errors = require('@tryghost/errors'), i18n = require(_0xfcfefa(0x13c)), auth = require(_0xfcfefa(0x13d)), shared = require('../../../shared'), apiMw = require(_0xfcfefa(0x13e)), notImplemented = function (_0x28e65a, _0x45efa2, _0x17f64f) {
        const _0xf2bab7 = _0xfcfefa;
        if (!_0x28e65a['api_key'])
            return _0x17f64f();
        const _0x3657b3 = {
                'site': [_0xf2bab7(0x13f)],
                'posts': [
                    'GET',
                    _0xf2bab7(0x140),
                    _0xf2bab7(0x141),
                    'POST'
                ],
                'pages': [
                    _0xf2bab7(0x13f),
                    _0xf2bab7(0x140),
                    _0xf2bab7(0x141),
                    _0xf2bab7(0x142)
                ],
                'images': ['POST'],
                'webhooks': [
                    'POST',
                    _0xf2bab7(0x140),
                    'DELETE'
                ],
                'actions': [_0xf2bab7(0x13f)],
                'tags': [
                    _0xf2bab7(0x13f),
                    _0xf2bab7(0x140),
                    _0xf2bab7(0x141),
                    _0xf2bab7(0x142)
                ],
                'labels': [
                    _0xf2bab7(0x13f),
                    _0xf2bab7(0x140),
                    'DELETE',
                    'POST'
                ],
                'users': [_0xf2bab7(0x13f)],
                'themes': [
                    'POST',
                    _0xf2bab7(0x140)
                ],
                'members': [
                    _0xf2bab7(0x13f),
                    _0xf2bab7(0x140),
                    'DELETE',
                    _0xf2bab7(0x142)
                ],
                'config': [_0xf2bab7(0x13f)],
                'schedules': [_0xf2bab7(0x140)],
                'db': [_0xf2bab7(0x142)]
            }, _0x1931f0 = _0x28e65a[_0xf2bab7(0x143)][_0xf2bab7(0x144)](/^\/(\w+)\/?/);
        if (_0x1931f0) {
            const _0x4b1d5b = _0x1931f0[0x1];
            if (_0x3657b3[_0x4b1d5b] && _0x3657b3[_0x4b1d5b][_0xf2bab7(0x145)](_0x28e65a[_0xf2bab7(0x146)]))
                return _0x17f64f();
        }
        _0x17f64f(new errors[(_0xf2bab7(0x147))]({
            'errorType': _0xf2bab7(0x148),
            'message': i18n['t'](_0xf2bab7(0x149)),
            'statusCode': _0xf2bab7(0x14a)
        }));
    };
function _0x1223(_0x433cca, _0x26a0eb) {
    return _0x1223 = function (_0xa052a5, _0x122329) {
        _0xa052a5 = _0xa052a5 - 0x132;
        let _0x45cc2e = _0xa052[_0xa052a5];
        return _0x45cc2e;
    }, _0x1223(_0x433cca, _0x26a0eb);
}
module[_0xfcfefa(0x14b)][_0xfcfefa(0x14c)] = [
    auth[_0xfcfefa(0x14d)]['authenticateAdminApi'],
    auth[_0xfcfefa(0x14e)]['authorizeAdminApi'],
    apiMw[_0xfcfefa(0x14f)],
    apiMw[_0xfcfefa(0x150)],
    shared[_0xfcfefa(0x151)][_0xfcfefa(0x152)][_0xfcfefa(0x153)],
    shared['middlewares'][_0xfcfefa(0x154)],
    notImplemented
], module[_0xfcfefa(0x14b)][_0xfcfefa(0x155)] = [
    auth[_0xfcfefa(0x14d)][_0xfcfefa(0x156)],
    auth[_0xfcfefa(0x14e)]['authorizeAdminApi'],
    apiMw['updateUserLastSeen'],
    apiMw['cors'],
    shared[_0xfcfefa(0x151)][_0xfcfefa(0x152)][_0xfcfefa(0x153)],
    shared[_0xfcfefa(0x151)][_0xfcfefa(0x154)],
    notImplemented
], module[_0xfcfefa(0x14b)][_0xfcfefa(0x157)] = [
    apiMw[_0xfcfefa(0x150)],
    shared[_0xfcfefa(0x151)][_0xfcfefa(0x152)][_0xfcfefa(0x153)],
    shared[_0xfcfefa(0x151)]['prettyUrls'],
    notImplemented
];
