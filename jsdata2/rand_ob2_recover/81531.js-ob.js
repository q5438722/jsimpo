const errors = require('@tryghost/errors'), i18n = require(_0xfcfefa(316)), auth = require(_0xfcfefa(317)), shared = require('../../../shared'), apiMw = require(_0xfcfefa(318)), notImplemented = function (_0x28e65a, _0x45efa2, _0x17f64f) {
        const _0xf2bab7 = _0xfcfefa;
        if (!_0x28e65a['api_key'])
            return _0x17f64f();
        const _0x3657b3 = {
                'site': [_0xf2bab7(319)],
                'posts': [
                    'GET',
                    _0xf2bab7(320),
                    _0xf2bab7(321),
                    'POST'
                ],
                'pages': [
                    _0xf2bab7(319),
                    _0xf2bab7(320),
                    _0xf2bab7(321),
                    _0xf2bab7(322)
                ],
                'images': ['POST'],
                'webhooks': [
                    'POST',
                    _0xf2bab7(320),
                    'DELETE'
                ],
                'actions': [_0xf2bab7(319)],
                'tags': [
                    _0xf2bab7(319),
                    _0xf2bab7(320),
                    _0xf2bab7(321),
                    _0xf2bab7(322)
                ],
                'labels': [
                    _0xf2bab7(319),
                    _0xf2bab7(320),
                    'DELETE',
                    'POST'
                ],
                'users': [_0xf2bab7(319)],
                'themes': [
                    'POST',
                    _0xf2bab7(320)
                ],
                'members': [
                    _0xf2bab7(319),
                    _0xf2bab7(320),
                    'DELETE',
                    _0xf2bab7(322)
                ],
                'config': [_0xf2bab7(319)],
                'schedules': [_0xf2bab7(320)],
                'db': [_0xf2bab7(322)]
            }, _0x1931f0 = _0x28e65a[_0xf2bab7(323)][_0xf2bab7(324)](/^\/(\w+)\/?/);
        if (_0x1931f0) {
            const _0x4b1d5b = _0x1931f0[1];
            if (_0x3657b3[_0x4b1d5b] && _0x3657b3[_0x4b1d5b][_0xf2bab7(325)](_0x28e65a[_0xf2bab7(326)]))
                return _0x17f64f();
        }
        _0x17f64f(new errors[(_0xf2bab7(327))]({
            'errorType': _0xf2bab7(328),
            'message': i18n['t'](_0xf2bab7(329)),
            'statusCode': _0xf2bab7(330)
        }));
    };
function _0x1223(_0x433cca, _0x26a0eb) {
    return _0x1223 = function (_0xa052a5, _0x122329) {
        _0xa052a5 = _0xa052a5 - 306;
        let _0x45cc2e = _0xa052[_0xa052a5];
        return _0x45cc2e;
    }, _0x1223(_0x433cca, _0x26a0eb);
}
module[_0xfcfefa(331)][_0xfcfefa(332)] = [
    auth[_0xfcfefa(333)]['authenticateAdminApi'],
    auth[_0xfcfefa(334)]['authorizeAdminApi'],
    apiMw[_0xfcfefa(335)],
    apiMw[_0xfcfefa(336)],
    shared[_0xfcfefa(337)][_0xfcfefa(338)][_0xfcfefa(339)],
    shared['middlewares'][_0xfcfefa(340)],
    notImplemented
], module[_0xfcfefa(331)][_0xfcfefa(341)] = [
    auth[_0xfcfefa(333)][_0xfcfefa(342)],
    auth[_0xfcfefa(334)]['authorizeAdminApi'],
    apiMw['updateUserLastSeen'],
    apiMw['cors'],
    shared[_0xfcfefa(337)][_0xfcfefa(338)][_0xfcfefa(339)],
    shared[_0xfcfefa(337)][_0xfcfefa(340)],
    notImplemented
], module[_0xfcfefa(331)][_0xfcfefa(343)] = [
    apiMw[_0xfcfefa(336)],
    shared[_0xfcfefa(337)][_0xfcfefa(338)][_0xfcfefa(339)],
    shared[_0xfcfefa(337)]['prettyUrls'],
    notImplemented
];