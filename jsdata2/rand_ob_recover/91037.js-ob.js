importScripts(_0x5f1501(406));
const {NavigationRoute} = workbox[_0x5f1501(407)];
let lastNavigationRequest = null, offlineShellEnabled = !![];
const MessageAPI = {
    'setPathResources': (_0x28d7ec, {
        path: _0x307637,
        resources: _0x53c9ef
    }) => {
        const _0x1e27a8 = _0x5f1501;
        _0x28d7ec[_0x1e27a8(408)](idbKeyval[_0x1e27a8(409)](_0x1e27a8(410) + _0x307637, _0x53c9ef));
    },
    'clearPathResources': _0x446ec6 => {
        const _0x1716d6 = _0x5f1501;
        _0x446ec6[_0x1716d6(408)](idbKeyval[_0x1716d6(411)]());
    },
    'enableOfflineShell': () => {
        offlineShellEnabled = !![];
    },
    'disableOfflineShell': () => {
        offlineShellEnabled = ![];
    }
};
self[_0x5f1501(412)](_0x5f1501(413), _0x1c9a2b => {
    const _0x4c8bb8 = _0x5f1501, {gatsbyApi: _0x3724b2} = _0x1c9a2b[_0x4c8bb8(414)];
    if (_0x3724b2)
        MessageAPI[_0x3724b2](_0x1c9a2b, _0x1c9a2b[_0x4c8bb8(414)]);
});
function handleAPIRequest({event: _0x4d195b}) {
    const _0x4a6cd5 = _0x5f1501, _0x1f6aaf = {
            'YFxZX': function (_0x395c25, _0x48a362) {
                return _0x395c25 !== _0x48a362;
            }
        }, {pathname: _0x43d69b} = new URL(_0x4d195b[_0x4a6cd5(415)][_0x4a6cd5(416)]), _0x10c4d5 = _0x43d69b[_0x4a6cd5(417)](/:(.+)/)[28 * -154 + -346 + 4659], _0x17c266 = {};
    _0x10c4d5[_0x4a6cd5(418)]('=') ? _0x10c4d5[_0x4a6cd5(419)]('&')['forEach'](_0x4bfd2a => {
        const _0x26d0da = _0x4a6cd5, [_0x1074ce, _0x50fd05] = _0x4bfd2a[_0x26d0da(419)]('=');
        _0x17c266[_0x1074ce] = _0x50fd05;
    }) : _0x17c266[_0x4a6cd5(420)] = _0x10c4d5;
    _0x1f6aaf['YFxZX'](MessageAPI[_0x17c266[_0x4a6cd5(420)]], undefined) && MessageAPI[_0x17c266[_0x4a6cd5(420)]]();
    if (!_0x17c266['redirect'])
        return new Response();
    return new Response(null, {
        'status': 302,
        'headers': { 'Location': lastNavigationRequest }
    });
}
const navigationRoute = new NavigationRoute(async ({event: _0x5d6e54}) => {
    const _0x596979 = _0x5f1501, _0x320fa4 = {
            'zvnvF': function (_0x4033dd, _0x5ab0d7) {
                return _0x4033dd(_0x5ab0d7);
            }
        };
    if (_0x5d6e54[_0x596979(415)][_0x596979(416)]['match'](/\/.gatsby-plugin-offline:.+/))
        return _0x320fa4[_0x596979(421)](handleAPIRequest, { 'event': _0x5d6e54 });
    if (!offlineShellEnabled)
        return await _0x320fa4[_0x596979(421)](fetch, _0x5d6e54[_0x596979(415)]);
    lastNavigationRequest = _0x5d6e54[_0x596979(415)]['url'];
    let {pathname: _0x12adf3} = new URL(_0x5d6e54[_0x596979(415)][_0x596979(416)]);
    _0x12adf3 = _0x12adf3[_0x596979(422)](new RegExp(_0x596979(423)), '');
    const _0x2ba831 = await idbKeyval[_0x596979(424)](_0x596979(410) + _0x12adf3);
    if (!_0x2ba831 || !await caches[_0x596979(417)]('%pathPrefix%/%appFile%'))
        return await _0x320fa4[_0x596979(421)](fetch, _0x5d6e54[_0x596979(415)]);
    for (const _0x56cae1 of _0x2ba831) {
        if (!await caches[_0x596979(417)](_0x56cae1))
            return await _0x320fa4[_0x596979(421)](fetch, _0x5d6e54[_0x596979(415)]);
    }
    const _0x27d03a = '%pathPrefix%/offline-plugin-app-shell-fallback/index.html', _0x491015 = workbox[_0x596979(425)][_0x596979(426)](_0x27d03a);
    return await caches[_0x596979(417)](_0x491015);
});
function _0x2d91(_0x1faf68, _0xfff64a) {
    return _0x2d91 = function (_0x4cb9c5, _0x2c3375) {
        _0x4cb9c5 = _0x4cb9c5 - (-1958 + 5803 + -3450);
        let _0x57ca81 = _0x45ab[_0x4cb9c5];
        return _0x57ca81;
    }, _0x2d91(_0x1faf68, _0xfff64a);
}
workbox[_0x5f1501(407)][_0x5f1501(427)](navigationRoute), workbox[_0x5f1501(407)]['registerRoute'](/\/.gatsby-plugin-offline:.+/, handleAPIRequest);