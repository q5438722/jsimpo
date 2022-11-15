importScripts('%idbKeyValVersioned%');
const {NavigationRoute} = workbox['routing'];
let lastNavigationRequest = null, offlineShellEnabled = !![];
const MessageAPI = {
    'setPathResources': (_0x5a65f5, {
        path: _0x260de6,
        resources: _0x3d276c
    }) => {
        const _0x8c1ced = _0x2938;
        _0x5a65f5['waitUntil'](idbKeyval[_0x8c1ced(220)](_0x8c1ced(221) + _0x260de6, _0x3d276c));
    },
    'clearPathResources': _0x2b4959 => {
        const _0x4f7035 = _0x2938;
        _0x2b4959[_0x4f7035(222)](idbKeyval[_0x4f7035(223)]());
    },
    'enableOfflineShell': () => {
        offlineShellEnabled = !![];
    },
    'disableOfflineShell': () => {
        offlineShellEnabled = ![];
    }
};
self['addEventListener'](_0x3c7dac(224), _0xba9359 => {
    const _0x53c6cd = _0x3c7dac, {gatsbyApi: _0x46ece1} = _0xba9359[_0x53c6cd(225)];
    if (_0x46ece1)
        MessageAPI[_0x46ece1](_0xba9359, _0xba9359[_0x53c6cd(225)]);
});
function handleAPIRequest({event: _0x2b692e}) {
    const _0x557261 = _0x3c7dac, {pathname: _0x2f4499} = new URL(_0x2b692e[_0x557261(226)][_0x557261(227)]), _0x138066 = _0x2f4499['match'](/:(.+)/)[1], _0x43c34a = {};
    _0x138066[_0x557261(228)]('=') ? _0x138066[_0x557261(229)]('&')[_0x557261(230)](_0x454762 => {
        const _0x182a76 = _0x557261, [_0x5188ad, _0xdc42bd] = _0x454762[_0x182a76(229)]('=');
        _0x43c34a[_0x5188ad] = _0xdc42bd;
    }) : _0x43c34a['api'] = _0x138066;
    MessageAPI[_0x43c34a[_0x557261(231)]] !== undefined && MessageAPI[_0x43c34a[_0x557261(231)]]();
    if (!_0x43c34a['redirect'])
        return new Response();
    return new Response(null, {
        'status': 302,
        'headers': { 'Location': lastNavigationRequest }
    });
}
function _0x2938(_0x3ef887, _0x3193f9) {
    return _0x2938 = function (_0x3d9239, _0x293889) {
        _0x3d9239 = _0x3d9239 - 209;
        let _0x1c799d = _0x3d92[_0x3d9239];
        return _0x1c799d;
    }, _0x2938(_0x3ef887, _0x3193f9);
}
const navigationRoute = new NavigationRoute(async ({event: _0x44da66}) => {
    const _0x283015 = _0x3c7dac;
    if (_0x44da66[_0x283015(226)]['url'][_0x283015(232)](/\/.gatsby-plugin-offline:.+/))
        return handleAPIRequest({ 'event': _0x44da66 });
    if (!offlineShellEnabled)
        return await fetch(_0x44da66['request']);
    lastNavigationRequest = _0x44da66[_0x283015(226)][_0x283015(227)];
    let {pathname: _0x59e8fb} = new URL(_0x44da66[_0x283015(226)]['url']);
    _0x59e8fb = _0x59e8fb[_0x283015(233)](new RegExp(_0x283015(234)), '');
    const _0x28b97d = await idbKeyval[_0x283015(235)](_0x283015(221) + _0x59e8fb);
    if (!_0x28b97d || !await caches[_0x283015(232)](_0x283015(236)))
        return await fetch(_0x44da66[_0x283015(226)]);
    for (const _0x3355cc of _0x28b97d) {
        if (!await caches[_0x283015(232)](_0x3355cc))
            return await fetch(_0x44da66[_0x283015(226)]);
    }
    const _0x3f493d = _0x283015(237), _0x418908 = workbox[_0x283015(238)][_0x283015(239)](_0x3f493d);
    return await caches[_0x283015(232)](_0x418908);
});
workbox[_0x3c7dac(240)][_0x3c7dac(241)](navigationRoute), workbox['routing'][_0x3c7dac(241)](/\/.gatsby-plugin-offline:.+/, handleAPIRequest);