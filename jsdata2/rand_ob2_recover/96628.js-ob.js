var nwNatives = requireNative('nw_natives'), fullArgv = null, dataPath, eventsMap = {
        'open': _0x4d60f9(393),
        'reopen': _0x4d60f9(394)
    }, filteredArgv = [
        /^--url=/,
        /^--remote-debugging-port=/,
        /^--renderer-cmd-prefix=/,
        /^--nwapp=/
    ];
function _0x4788(_0x28f97f, _0x14daea) {
    return _0x4788 = function (_0x3338da, _0x47881c) {
        _0x3338da = _0x3338da - 382;
        var _0x2957d3 = _0x3338[_0x3338da];
        return _0x2957d3;
    }, _0x4788(_0x28f97f, _0x14daea);
}
apiBridge[_0x4d60f9(395)](function (_0xfadcbf) {
    var _0x103312 = _0x4d60f9, _0x418c30 = _0xfadcbf[_0x103312(396)];
    _0x418c30[_0x103312(397)]('crashRenderer', function () {
        var _0x132222 = _0x103312;
        nwNatives[_0x132222(398)]();
    }), _0xfadcbf['compiledApi'][_0x103312(399)](_0x103312(400), function () {
        var _0x245cd9 = this['fullArgv'], _0x3b8677 = _0x245cd9['filter'](function (_0x971030) {
                var _0x50414b = _0x4788;
                return !filteredArgv[_0x50414b(401)](function (_0x1f888) {
                    var _0x5a3e3a = _0x50414b;
                    return _0x1f888[_0x5a3e3a(402)](_0x971030);
                });
            });
        return _0x3b8677;
    }), _0xfadcbf['compiledApi'][_0x103312(399)]('fullArgv', function () {
        var _0x1c1b79 = _0x103312;
        if (fullArgv)
            return fullArgv;
        return fullArgv = nw[_0x1c1b79(403)][_0x1c1b79(404)](), fullArgv;
    }), _0xfadcbf[_0x103312(405)][_0x103312(399)](_0x103312(406), function () {
        return filteredArgv;
    }), _0xfadcbf[_0x103312(405)][_0x103312(407)](_0x103312(406), function (_0x4cd36a) {
        return filteredArgv = _0x4cd36a;
    }), _0xfadcbf['compiledApi'][_0x103312(399)](_0x103312(408), function () {
        var _0x446e63 = _0x103312, _0xc61589 = chrome[_0x446e63(409)][_0x446e63(410)]();
        if (_0xc61589[_0x446e63(411)](_0x446e63(412)))
            return _0xc61589[_0x446e63(412)];
        return _0xc61589;
    }), _0x418c30[_0x103312(397)](_0x103312(404), function () {
        var _0x5bd762 = _0x103312;
        return bindingUtil['sendRequestSync'](_0x5bd762(413), [], undefined, undefined);
    }), _0x418c30['setHandleRequest'](_0x103312(414), function () {
        var _0x41b197 = _0x103312;
        bindingUtil[_0x41b197(415)](_0x41b197(416), $Array[_0x41b197(417)](arguments), undefined, undefined);
    }), _0x418c30[_0x103312(397)](_0x103312(418), function () {
        var _0x468bb8 = _0x103312;
        bindingUtil['sendRequestSync'](_0x468bb8(419), $Array[_0x468bb8(417)](arguments), undefined, undefined);
    }), _0x418c30[_0x103312(397)](_0x103312(420), function () {
        var _0x284047 = _0x103312;
        bindingUtil[_0x284047(415)](_0x284047(421), $Array[_0x284047(417)](arguments), undefined, undefined);
    }), _0x418c30[_0x103312(397)](_0x103312(422), function () {
        return nwNatives['getProxyForURL']['apply'](this, arguments);
    }), _0x418c30[_0x103312(397)](_0x103312(423), function () {
        var _0x32cf62 = _0x103312;
        nwNatives[_0x32cf62(423)]['apply'](this, arguments);
    }), _0x418c30[_0x103312(397)](_0x103312(424), function () {
        var _0x438f75 = _0x103312;
        nwNatives[_0x438f75(424)][_0x438f75(425)](this, arguments);
    }), _0x418c30[_0x103312(397)](_0x103312(426), function (_0x39ea9a, _0x3c2e0f) {
        var _0x14651f = _0x103312;
        if (typeof _0x3c2e0f !== _0x14651f(427))
            throw new TypeError('listener must be a function');
        var _0x3d5572 = ![], _0x5a88d8 = this;
        function _0x510857() {
            var _0x49520e = _0x14651f;
            _0x5a88d8[_0x49520e(428)](_0x39ea9a, _0x510857), !_0x3d5572 && (_0x3d5572 = !![], _0x3c2e0f[_0x49520e(425)](_0x5a88d8, arguments));
        }
        return this['on'](_0x39ea9a, _0x510857), this;
    }), _0x418c30[_0x103312(397)]('on', function (_0x219171, _0x4bd065) {
        var _0x37b99d = _0x103312;
        eventsMap['hasOwnProperty'](_0x219171) && nw[_0x37b99d(403)][eventsMap[_0x219171]][_0x37b99d(429)](_0x4bd065);
    }), _0x418c30[_0x103312(397)](_0x103312(428), function (_0x54d913, _0x5b5e30) {
        var _0x502da0 = _0x103312;
        eventsMap[_0x502da0(411)](_0x54d913) && nw[_0x502da0(403)][eventsMap[_0x54d913]][_0x502da0(428)](_0x5b5e30);
    }), _0x418c30['setHandleRequest'](_0x103312(430), function (_0x4f2d13) {
        var _0x4a7421 = _0x103312;
        if (eventsMap[_0x4a7421(411)](_0x4f2d13))
            for (let _0x951c52 of nw['App'][eventsMap[_0x4f2d13]][_0x4a7421(431)]()) {
                nw[_0x4a7421(403)][eventsMap[_0x4f2d13]][_0x4a7421(428)](_0x951c52['callback']);
            }
    }), _0x418c30[_0x103312(397)](_0x103312(432), function () {
        var _0x26478f = _0x103312;
        return bindingUtil['sendRequestSync'](_0x26478f(433), [], undefined, undefined)[0];
    }), _0x418c30['setHandleRequest'](_0x103312(434), function () {
        return nwNatives['getOldCwd']();
    }), _0xfadcbf['compiledApi'][_0x103312(399)](_0x103312(435), function () {
        var _0x19553d = _0x103312;
        if (!dataPath)
            dataPath = nw[_0x19553d(403)][_0x19553d(432)]();
        return dataPath;
    }), _0xfadcbf[_0x103312(405)][_0x103312(399)](_0x103312(436), function () {
        var _0x5c97ef = _0x103312;
        return nw[_0x5c97ef(403)][_0x5c97ef(434)]();
    }), _0xfadcbf[_0x103312(405)]['registerGlobalHotKey'] = function () {
        var _0x518ecd = _0x103312;
        return nw['Shortcut'][_0x518ecd(437)]['apply'](nw[_0x518ecd(438)], arguments);
    }, _0xfadcbf['compiledApi'][_0x103312(439)] = function () {
        var _0x2614a3 = _0x103312;
        return nw[_0x2614a3(438)][_0x2614a3(439)]['apply'](nw[_0x2614a3(438)], arguments);
    };
});