const _0x45ab = [
    '996307JUanuc',
    '3zZJjal',
    '381971Fqchdd',
    '139618wJXOUT',
    '1667qhxjec',
    '559knCJqz',
    '30183gBBeJu',
    '31hSliaM',
    '973709kPvukB',
    '97mQnUPx',
    '35543RnZBIy',
    '%idbKeyValVersioned%',
    'routing',
    'waitUntil',
    'set',
    'resources:',
    'clear',
    'addEventListener',
    'message',
    'data',
    'request',
    'url',
    'match',
    'includes',
    'split',
    'api',
    'zvnvF',
    'replace',
    '^%pathPrefix%',
    'get',
    'precaching',
    'getCacheKeyForURL',
    'registerRoute'
];
const _0x5f1501 = _0x2d91;
(function (_0x32e851, _0x527495) {
    const _0x13a29b = _0x2d91;
    while (!![]) {
        try {
            const _0x306fb2 = -parseInt(_0x13a29b(0x18b)) + parseInt(_0x13a29b(0x18c)) * parseInt(_0x13a29b(0x18d)) + -parseInt(_0x13a29b(0x18e)) + -parseInt(_0x13a29b(0x18f)) * parseInt(_0x13a29b(0x190)) + -parseInt(_0x13a29b(0x191)) * parseInt(_0x13a29b(0x192)) + -parseInt(_0x13a29b(0x193)) + parseInt(_0x13a29b(0x194)) * parseInt(_0x13a29b(0x195));
            if (_0x306fb2 === _0x527495)
                break;
            else
                _0x32e851['push'](_0x32e851['shift']());
        } catch (_0x31301c) {
            _0x32e851['push'](_0x32e851['shift']());
        }
    }
}(_0x45ab, -0x2 * 0x1add1 + 0xfb * 0x5ed + -0x1 * -0x6f42b), importScripts(_0x5f1501(0x196)));
const {NavigationRoute} = workbox[_0x5f1501(0x197)];
let lastNavigationRequest = null, offlineShellEnabled = !![];
const MessageAPI = {
    'setPathResources': (_0x28d7ec, {
        path: _0x307637,
        resources: _0x53c9ef
    }) => {
        const _0x1e27a8 = _0x5f1501;
        _0x28d7ec[_0x1e27a8(0x198)](idbKeyval[_0x1e27a8(0x199)](_0x1e27a8(0x19a) + _0x307637, _0x53c9ef));
    },
    'clearPathResources': _0x446ec6 => {
        const _0x1716d6 = _0x5f1501;
        _0x446ec6[_0x1716d6(0x198)](idbKeyval[_0x1716d6(0x19b)]());
    },
    'enableOfflineShell': () => {
        offlineShellEnabled = !![];
    },
    'disableOfflineShell': () => {
        offlineShellEnabled = ![];
    }
};
self[_0x5f1501(0x19c)](_0x5f1501(0x19d), _0x1c9a2b => {
    const _0x4c8bb8 = _0x5f1501, {gatsbyApi: _0x3724b2} = _0x1c9a2b[_0x4c8bb8(0x19e)];
    if (_0x3724b2)
        MessageAPI[_0x3724b2](_0x1c9a2b, _0x1c9a2b[_0x4c8bb8(0x19e)]);
});
function handleAPIRequest({event: _0x4d195b}) {
    const _0x4a6cd5 = _0x5f1501, _0x1f6aaf = {
            'YFxZX': function (_0x395c25, _0x48a362) {
                return _0x395c25 !== _0x48a362;
            }
        }, {pathname: _0x43d69b} = new URL(_0x4d195b[_0x4a6cd5(0x19f)][_0x4a6cd5(0x1a0)]), _0x10c4d5 = _0x43d69b[_0x4a6cd5(0x1a1)](/:(.+)/)[0x1c * -0x9a + -0x15a + 0x1233], _0x17c266 = {};
    _0x10c4d5[_0x4a6cd5(0x1a2)]('=') ? _0x10c4d5[_0x4a6cd5(0x1a3)]('&')['forEach'](_0x4bfd2a => {
        const _0x26d0da = _0x4a6cd5, [_0x1074ce, _0x50fd05] = _0x4bfd2a[_0x26d0da(0x1a3)]('=');
        _0x17c266[_0x1074ce] = _0x50fd05;
    }) : _0x17c266[_0x4a6cd5(0x1a4)] = _0x10c4d5;
    _0x1f6aaf['YFxZX'](MessageAPI[_0x17c266[_0x4a6cd5(0x1a4)]], undefined) && MessageAPI[_0x17c266[_0x4a6cd5(0x1a4)]]();
    if (!_0x17c266['redirect'])
        return new Response();
    return new Response(null, {
        'status': 0x12e,
        'headers': { 'Location': lastNavigationRequest }
    });
}
const navigationRoute = new NavigationRoute(async ({event: _0x5d6e54}) => {
    const _0x596979 = _0x5f1501, _0x320fa4 = {
            'zvnvF': function (_0x4033dd, _0x5ab0d7) {
                return _0x4033dd(_0x5ab0d7);
            }
        };
    if (_0x5d6e54[_0x596979(0x19f)][_0x596979(0x1a0)]['match'](/\/.gatsby-plugin-offline:.+/))
        return _0x320fa4[_0x596979(0x1a5)](handleAPIRequest, { 'event': _0x5d6e54 });
    if (!offlineShellEnabled)
        return await _0x320fa4[_0x596979(0x1a5)](fetch, _0x5d6e54[_0x596979(0x19f)]);
    lastNavigationRequest = _0x5d6e54[_0x596979(0x19f)]['url'];
    let {pathname: _0x12adf3} = new URL(_0x5d6e54[_0x596979(0x19f)][_0x596979(0x1a0)]);
    _0x12adf3 = _0x12adf3[_0x596979(0x1a6)](new RegExp(_0x596979(0x1a7)), '');
    const _0x2ba831 = await idbKeyval[_0x596979(0x1a8)](_0x596979(0x19a) + _0x12adf3);
    if (!_0x2ba831 || !await caches[_0x596979(0x1a1)]('%pathPrefix%/%appFile%'))
        return await _0x320fa4[_0x596979(0x1a5)](fetch, _0x5d6e54[_0x596979(0x19f)]);
    for (const _0x56cae1 of _0x2ba831) {
        if (!await caches[_0x596979(0x1a1)](_0x56cae1))
            return await _0x320fa4[_0x596979(0x1a5)](fetch, _0x5d6e54[_0x596979(0x19f)]);
    }
    const _0x27d03a = '%pathPrefix%/offline-plugin-app-shell-fallback/index.html', _0x491015 = workbox[_0x596979(0x1a9)][_0x596979(0x1aa)](_0x27d03a);
    return await caches[_0x596979(0x1a1)](_0x491015);
});
function _0x2d91(_0x1faf68, _0xfff64a) {
    return _0x2d91 = function (_0x4cb9c5, _0x2c3375) {
        _0x4cb9c5 = _0x4cb9c5 - (-0x7a6 + 0x16ab + -0xd7a);
        let _0x57ca81 = _0x45ab[_0x4cb9c5];
        return _0x57ca81;
    }, _0x2d91(_0x1faf68, _0xfff64a);
}
workbox[_0x5f1501(0x197)][_0x5f1501(0x1ab)](navigationRoute), workbox[_0x5f1501(0x197)]['registerRoute'](/\/.gatsby-plugin-offline:.+/, handleAPIRequest);
