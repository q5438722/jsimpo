var _0x3338 = [
    '487781CJbHTd',
    '1345377prKHuA',
    '854101zuGpqe',
    '1AnbLpX',
    '2YczBBU',
    '601072koDcGL',
    '63390uitRlC',
    '3hanMid',
    '482377nxoDXC',
    '2020KstvzU',
    '908YEJAwj',
    'onOpen',
    'onReopen',
    'registerCustomHook',
    'apiFunctions',
    'setHandleRequest',
    'crashRenderer',
    '__defineGetter__',
    'argv',
    'some',
    'test',
    'App',
    'getArgvSync',
    'compiledApi',
    'filteredArgv',
    '__defineSetter__',
    'manifest',
    'runtime',
    'getManifest',
    'hasOwnProperty',
    '__nwjs_manifest',
    'nw.App.getArgvSync',
    'setProxyConfig',
    'sendRequestSync',
    'nw.App.setProxyConfig',
    'from',
    'clearCache',
    'nw.App.clearCache',
    'clearAppCache',
    'nw.App.clearAppCache',
    'getProxyForURL',
    'addOriginAccessWhitelistEntry',
    'removeOriginAccessWhitelistEntry',
    'apply',
    'once',
    'function',
    'removeListener',
    'addListener',
    'removeAllListeners',
    'getListeners',
    'getDataPath',
    'nw.App.getDataPath',
    'getStartPath',
    'dataPath',
    'startPath',
    'registerGlobalHotKey',
    'Shortcut',
    'unregisterGlobalHotKey'
];
var _0x4d60f9 = _0x4788;
(function (_0x68e32f, _0xd278e9) {
    var _0x25b74e = _0x4788;
    while (!![]) {
        try {
            var _0x42b3fe = -parseInt(_0x25b74e(0x17e)) + parseInt(_0x25b74e(0x17f)) + parseInt(_0x25b74e(0x180)) * -parseInt(_0x25b74e(0x181)) + parseInt(_0x25b74e(0x182)) * -parseInt(_0x25b74e(0x183)) + parseInt(_0x25b74e(0x184)) * -parseInt(_0x25b74e(0x185)) + parseInt(_0x25b74e(0x186)) + -parseInt(_0x25b74e(0x187)) * -parseInt(_0x25b74e(0x188));
            if (_0x42b3fe === _0xd278e9)
                break;
            else
                _0x68e32f['push'](_0x68e32f['shift']());
        } catch (_0x2c0135) {
            _0x68e32f['push'](_0x68e32f['shift']());
        }
    }
}(_0x3338, 0xe27e6));
var nwNatives = requireNative('nw_natives'), fullArgv = null, dataPath, eventsMap = {
        'open': _0x4d60f9(0x189),
        'reopen': _0x4d60f9(0x18a)
    }, filteredArgv = [
        /^--url=/,
        /^--remote-debugging-port=/,
        /^--renderer-cmd-prefix=/,
        /^--nwapp=/
    ];
function _0x4788(_0x28f97f, _0x14daea) {
    return _0x4788 = function (_0x3338da, _0x47881c) {
        _0x3338da = _0x3338da - 0x17e;
        var _0x2957d3 = _0x3338[_0x3338da];
        return _0x2957d3;
    }, _0x4788(_0x28f97f, _0x14daea);
}
apiBridge[_0x4d60f9(0x18b)](function (_0xfadcbf) {
    var _0x103312 = _0x4d60f9, _0x418c30 = _0xfadcbf[_0x103312(0x18c)];
    _0x418c30[_0x103312(0x18d)]('crashRenderer', function () {
        var _0x132222 = _0x103312;
        nwNatives[_0x132222(0x18e)]();
    }), _0xfadcbf['compiledApi'][_0x103312(0x18f)](_0x103312(0x190), function () {
        var _0x245cd9 = this['fullArgv'], _0x3b8677 = _0x245cd9['filter'](function (_0x971030) {
                var _0x50414b = _0x4788;
                return !filteredArgv[_0x50414b(0x191)](function (_0x1f888) {
                    var _0x5a3e3a = _0x50414b;
                    return _0x1f888[_0x5a3e3a(0x192)](_0x971030);
                });
            });
        return _0x3b8677;
    }), _0xfadcbf['compiledApi'][_0x103312(0x18f)]('fullArgv', function () {
        var _0x1c1b79 = _0x103312;
        if (fullArgv)
            return fullArgv;
        return fullArgv = nw[_0x1c1b79(0x193)][_0x1c1b79(0x194)](), fullArgv;
    }), _0xfadcbf[_0x103312(0x195)][_0x103312(0x18f)](_0x103312(0x196), function () {
        return filteredArgv;
    }), _0xfadcbf[_0x103312(0x195)][_0x103312(0x197)](_0x103312(0x196), function (_0x4cd36a) {
        return filteredArgv = _0x4cd36a;
    }), _0xfadcbf['compiledApi'][_0x103312(0x18f)](_0x103312(0x198), function () {
        var _0x446e63 = _0x103312, _0xc61589 = chrome[_0x446e63(0x199)][_0x446e63(0x19a)]();
        if (_0xc61589[_0x446e63(0x19b)](_0x446e63(0x19c)))
            return _0xc61589[_0x446e63(0x19c)];
        return _0xc61589;
    }), _0x418c30[_0x103312(0x18d)](_0x103312(0x194), function () {
        var _0x5bd762 = _0x103312;
        return bindingUtil['sendRequestSync'](_0x5bd762(0x19d), [], undefined, undefined);
    }), _0x418c30['setHandleRequest'](_0x103312(0x19e), function () {
        var _0x41b197 = _0x103312;
        bindingUtil[_0x41b197(0x19f)](_0x41b197(0x1a0), $Array[_0x41b197(0x1a1)](arguments), undefined, undefined);
    }), _0x418c30[_0x103312(0x18d)](_0x103312(0x1a2), function () {
        var _0x468bb8 = _0x103312;
        bindingUtil['sendRequestSync'](_0x468bb8(0x1a3), $Array[_0x468bb8(0x1a1)](arguments), undefined, undefined);
    }), _0x418c30[_0x103312(0x18d)](_0x103312(0x1a4), function () {
        var _0x284047 = _0x103312;
        bindingUtil[_0x284047(0x19f)](_0x284047(0x1a5), $Array[_0x284047(0x1a1)](arguments), undefined, undefined);
    }), _0x418c30[_0x103312(0x18d)](_0x103312(0x1a6), function () {
        return nwNatives['getProxyForURL']['apply'](this, arguments);
    }), _0x418c30[_0x103312(0x18d)](_0x103312(0x1a7), function () {
        var _0x32cf62 = _0x103312;
        nwNatives[_0x32cf62(0x1a7)]['apply'](this, arguments);
    }), _0x418c30[_0x103312(0x18d)](_0x103312(0x1a8), function () {
        var _0x438f75 = _0x103312;
        nwNatives[_0x438f75(0x1a8)][_0x438f75(0x1a9)](this, arguments);
    }), _0x418c30[_0x103312(0x18d)](_0x103312(0x1aa), function (_0x39ea9a, _0x3c2e0f) {
        var _0x14651f = _0x103312;
        if (typeof _0x3c2e0f !== _0x14651f(0x1ab))
            throw new TypeError('listener\x20must\x20be\x20a\x20function');
        var _0x3d5572 = ![], _0x5a88d8 = this;
        function _0x510857() {
            var _0x49520e = _0x14651f;
            _0x5a88d8[_0x49520e(0x1ac)](_0x39ea9a, _0x510857), !_0x3d5572 && (_0x3d5572 = !![], _0x3c2e0f[_0x49520e(0x1a9)](_0x5a88d8, arguments));
        }
        return this['on'](_0x39ea9a, _0x510857), this;
    }), _0x418c30[_0x103312(0x18d)]('on', function (_0x219171, _0x4bd065) {
        var _0x37b99d = _0x103312;
        eventsMap['hasOwnProperty'](_0x219171) && nw[_0x37b99d(0x193)][eventsMap[_0x219171]][_0x37b99d(0x1ad)](_0x4bd065);
    }), _0x418c30[_0x103312(0x18d)](_0x103312(0x1ac), function (_0x54d913, _0x5b5e30) {
        var _0x502da0 = _0x103312;
        eventsMap[_0x502da0(0x19b)](_0x54d913) && nw[_0x502da0(0x193)][eventsMap[_0x54d913]][_0x502da0(0x1ac)](_0x5b5e30);
    }), _0x418c30['setHandleRequest'](_0x103312(0x1ae), function (_0x4f2d13) {
        var _0x4a7421 = _0x103312;
        if (eventsMap[_0x4a7421(0x19b)](_0x4f2d13))
            for (let _0x951c52 of nw['App'][eventsMap[_0x4f2d13]][_0x4a7421(0x1af)]()) {
                nw[_0x4a7421(0x193)][eventsMap[_0x4f2d13]][_0x4a7421(0x1ac)](_0x951c52['callback']);
            }
    }), _0x418c30[_0x103312(0x18d)](_0x103312(0x1b0), function () {
        var _0x26478f = _0x103312;
        return bindingUtil['sendRequestSync'](_0x26478f(0x1b1), [], undefined, undefined)[0x0];
    }), _0x418c30['setHandleRequest'](_0x103312(0x1b2), function () {
        return nwNatives['getOldCwd']();
    }), _0xfadcbf['compiledApi'][_0x103312(0x18f)](_0x103312(0x1b3), function () {
        var _0x19553d = _0x103312;
        if (!dataPath)
            dataPath = nw[_0x19553d(0x193)][_0x19553d(0x1b0)]();
        return dataPath;
    }), _0xfadcbf[_0x103312(0x195)][_0x103312(0x18f)](_0x103312(0x1b4), function () {
        var _0x5c97ef = _0x103312;
        return nw[_0x5c97ef(0x193)][_0x5c97ef(0x1b2)]();
    }), _0xfadcbf[_0x103312(0x195)]['registerGlobalHotKey'] = function () {
        var _0x518ecd = _0x103312;
        return nw['Shortcut'][_0x518ecd(0x1b5)]['apply'](nw[_0x518ecd(0x1b6)], arguments);
    }, _0xfadcbf['compiledApi'][_0x103312(0x1b7)] = function () {
        var _0x2614a3 = _0x103312;
        return nw[_0x2614a3(0x1b6)][_0x2614a3(0x1b7)]['apply'](nw[_0x2614a3(0x1b6)], arguments);
    };
});
