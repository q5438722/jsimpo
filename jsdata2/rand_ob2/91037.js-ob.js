const _0x3d92 = [
    'registerRoute',
    '2671aiNVdJ',
    '388itIixI',
    '105249arEGAu',
    '10ftaGjM',
    '48700Vrmdde',
    '213zoMGou',
    '5078PhyXUS',
    '896010NDJgzD',
    '181NOhhqb',
    '2426mVkRry',
    '5009210DukivH',
    'set',
    'resources:',
    'waitUntil',
    'clear',
    'message',
    'data',
    'request',
    'url',
    'includes',
    'split',
    'forEach',
    'api',
    'match',
    'replace',
    '^%pathPrefix%',
    'get',
    '%pathPrefix%/%appFile%',
    '%pathPrefix%/offline-plugin-app-shell-fallback/index.html',
    'precaching',
    'getCacheKeyForURL',
    'routing'
];
const _0x3c7dac = _0x2938;
(function (_0x5f46e1, _0x5bc45c) {
    const _0xaf1c6e = _0x2938;
    while (!![]) {
        try {
            const _0x2349f0 = parseInt(_0xaf1c6e(0xd1)) * -parseInt(_0xaf1c6e(0xd2)) + -parseInt(_0xaf1c6e(0xd3)) * parseInt(_0xaf1c6e(0xd4)) + parseInt(_0xaf1c6e(0xd5)) + -parseInt(_0xaf1c6e(0xd6)) * parseInt(_0xaf1c6e(0xd7)) + -parseInt(_0xaf1c6e(0xd8)) + -parseInt(_0xaf1c6e(0xd9)) * parseInt(_0xaf1c6e(0xda)) + parseInt(_0xaf1c6e(0xdb));
            if (_0x2349f0 === _0x5bc45c)
                break;
            else
                _0x5f46e1['push'](_0x5f46e1['shift']());
        } catch (_0x310c82) {
            _0x5f46e1['push'](_0x5f46e1['shift']());
        }
    }
}(_0x3d92, 0x86d96), importScripts('%idbKeyValVersioned%'));
const {NavigationRoute} = workbox['routing'];
let lastNavigationRequest = null, offlineShellEnabled = !![];
const MessageAPI = {
    'setPathResources': (_0x5a65f5, {
        path: _0x260de6,
        resources: _0x3d276c
    }) => {
        const _0x8c1ced = _0x2938;
        _0x5a65f5['waitUntil'](idbKeyval[_0x8c1ced(0xdc)](_0x8c1ced(0xdd) + _0x260de6, _0x3d276c));
    },
    'clearPathResources': _0x2b4959 => {
        const _0x4f7035 = _0x2938;
        _0x2b4959[_0x4f7035(0xde)](idbKeyval[_0x4f7035(0xdf)]());
    },
    'enableOfflineShell': () => {
        offlineShellEnabled = !![];
    },
    'disableOfflineShell': () => {
        offlineShellEnabled = ![];
    }
};
self['addEventListener'](_0x3c7dac(0xe0), _0xba9359 => {
    const _0x53c6cd = _0x3c7dac, {gatsbyApi: _0x46ece1} = _0xba9359[_0x53c6cd(0xe1)];
    if (_0x46ece1)
        MessageAPI[_0x46ece1](_0xba9359, _0xba9359[_0x53c6cd(0xe1)]);
});
function handleAPIRequest({event: _0x2b692e}) {
    const _0x557261 = _0x3c7dac, {pathname: _0x2f4499} = new URL(_0x2b692e[_0x557261(0xe2)][_0x557261(0xe3)]), _0x138066 = _0x2f4499['match'](/:(.+)/)[0x1], _0x43c34a = {};
    _0x138066[_0x557261(0xe4)]('=') ? _0x138066[_0x557261(0xe5)]('&')[_0x557261(0xe6)](_0x454762 => {
        const _0x182a76 = _0x557261, [_0x5188ad, _0xdc42bd] = _0x454762[_0x182a76(0xe5)]('=');
        _0x43c34a[_0x5188ad] = _0xdc42bd;
    }) : _0x43c34a['api'] = _0x138066;
    MessageAPI[_0x43c34a[_0x557261(0xe7)]] !== undefined && MessageAPI[_0x43c34a[_0x557261(0xe7)]]();
    if (!_0x43c34a['redirect'])
        return new Response();
    return new Response(null, {
        'status': 0x12e,
        'headers': { 'Location': lastNavigationRequest }
    });
}
function _0x2938(_0x3ef887, _0x3193f9) {
    return _0x2938 = function (_0x3d9239, _0x293889) {
        _0x3d9239 = _0x3d9239 - 0xd1;
        let _0x1c799d = _0x3d92[_0x3d9239];
        return _0x1c799d;
    }, _0x2938(_0x3ef887, _0x3193f9);
}
const navigationRoute = new NavigationRoute(async ({event: _0x44da66}) => {
    const _0x283015 = _0x3c7dac;
    if (_0x44da66[_0x283015(0xe2)]['url'][_0x283015(0xe8)](/\/.gatsby-plugin-offline:.+/))
        return handleAPIRequest({ 'event': _0x44da66 });
    if (!offlineShellEnabled)
        return await fetch(_0x44da66['request']);
    lastNavigationRequest = _0x44da66[_0x283015(0xe2)][_0x283015(0xe3)];
    let {pathname: _0x59e8fb} = new URL(_0x44da66[_0x283015(0xe2)]['url']);
    _0x59e8fb = _0x59e8fb[_0x283015(0xe9)](new RegExp(_0x283015(0xea)), '');
    const _0x28b97d = await idbKeyval[_0x283015(0xeb)](_0x283015(0xdd) + _0x59e8fb);
    if (!_0x28b97d || !await caches[_0x283015(0xe8)](_0x283015(0xec)))
        return await fetch(_0x44da66[_0x283015(0xe2)]);
    for (const _0x3355cc of _0x28b97d) {
        if (!await caches[_0x283015(0xe8)](_0x3355cc))
            return await fetch(_0x44da66[_0x283015(0xe2)]);
    }
    const _0x3f493d = _0x283015(0xed), _0x418908 = workbox[_0x283015(0xee)][_0x283015(0xef)](_0x3f493d);
    return await caches[_0x283015(0xe8)](_0x418908);
});
workbox[_0x3c7dac(0xf0)][_0x3c7dac(0xf1)](navigationRoute), workbox['routing'][_0x3c7dac(0xf1)](/\/.gatsby-plugin-offline:.+/, handleAPIRequest);
