importScripts('%idbKeyValVersioned%');
const {NavigationRoute} = workbox['routing'];
let lastNavigationRequest = null;
let offlineShellEnabled = !![];
const MessageAPI = {
    'setPathResources': (_0x1ed03c, {path, resources}) => {
        _0x1ed03c['waitUntil'](idbKeyval['set']('resources:' + path, resources));
    },
    'clearPathResources': _0x4b6ff9 => {
        _0x4b6ff9['waitUntil'](idbKeyval['clear']());
    },
    'enableOfflineShell': () => {
        offlineShellEnabled = !![];
    },
    'disableOfflineShell': () => {
        offlineShellEnabled = ![];
    }
};
self['addEventListener']('message', _0x3ee042 => {
    const {gatsbyApi: api} = _0x3ee042['data'];
    if (api)
        MessageAPI[api](_0x3ee042, _0x3ee042['data']);
});
function handleAPIRequest({event}) {
    const {pathname} = new URL(event['request']['url']);
    const _0x3f58e2 = pathname['match'](/:(.+)/)[1];
    if (_0x3f58e2['includes']('=')) {
        _0x3f58e2['split']('&')['forEach'](_0x56019b => {
            if ('KZKEu' === 'nJiwf') {
                return handleAPIRequest({ 'event': event });
            } else {
                const [_0x12e320, _0x4dab33] = _0x56019b['split']('=');
                _0x26b2dc[_0x12e320] = _0x4dab33;
            }
        });
    } else {
        _0x26b2dc['api'] = _0x3f58e2;
    }
    if (MessageAPI[_0x26b2dc['api']] !== undefined) {
        MessageAPI[_0x26b2dc['api']]();
    }
    if (!_0x26b2dc['redirect']) {
        if ('LHvrb' === 'LHvrb') {
            return new Response();
        } else {
            event['waitUntil'](idbKeyval['clear']());
        }
    }
    return new Response(null, {
        'status': 302,
        'headers': { 'Location': lastNavigationRequest }
    });
}
const navigationRoute = new NavigationRoute(async ({event}) => {
    if (event['request']['url']['match'](/\/.gatsby-plugin-offline:.+/)) {
        return handleAPIRequest({ 'event': event });
    }
    if (!offlineShellEnabled) {
        if ('Pipzp' === 'Pipzp') {
            return await fetch(event['request']);
        } else {
            data['api'] = params;
        }
    }
    lastNavigationRequest = event['request']['url'];
    let {pathname} = new URL(event['request']['url']);
    pathname = pathname['replace'](new RegExp('^%pathPrefix%'), '');
    const _0x42b632 = await idbKeyval['get']('resources:' + pathname);
    if (!_0x42b632 || !await caches['match']('%pathPrefix%/%appFile%')) {
        return await fetch(event['request']);
    }
    for (const _0x5b3cc1 of _0x42b632) {
        if (!await caches['match'](_0x5b3cc1)) {
            return await fetch(event['request']);
        }
    }
    const _0x3661c0 = '%pathPrefix%/offline-plugin-app-shell-fallback/index.html';
    const _0x2ddb2e = workbox['precaching']['getCacheKeyForURL'](_0x3661c0);
    return await caches['match'](_0x2ddb2e);
});
workbox['routing']['registerRoute'](navigationRoute);
workbox['routing']['registerRoute'](/\/.gatsby-plugin-offline:.+/, handleAPIRequest);