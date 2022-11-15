var nwNatives = requireNative(_0x2b38ea(346)), forEach = require(_0x2b38ea(347))[_0x2b38ea(348)], runtimeNatives = requireNative(_0x2b38ea(349)), renderFrameObserverNatives = requireNative(_0x2b38ea(350)), appWindowNatives = requireNative(_0x2b38ea(351)), GetExtensionViews = runtimeNatives[_0x2b38ea(352)], currentNWWindow = null, currentNWWindowInternal = null, currentRoutingID = nwNatives['getRoutingID'](), currentWidgetRoutingID = nwNatives[_0x2b38ea(353)](), bgPage = GetExtensionViews(-1, -1, _0x2b38ea(354))[0], try_hidden = function (_0x365cac) {
        var _0x34289c = _0x2b38ea;
        if (_0x365cac[_0x34289c(355)]['windows'])
            return _0x365cac;
        return privates(_0x365cac);
    }, try_nw = function (_0x33bf96) {
        if (_0x33bf96['nw'])
            return _0x33bf96;
        return privates(_0x33bf96);
    };
function getPlatform() {
    var _0x25c8a2 = _0x2b38ea, _0x9697ba = [
            [
                /CrOS Touch/,
                _0x25c8a2(356)
            ],
            [
                /CrOS/,
                _0x25c8a2(357)
            ],
            [
                /Linux/,
                _0x25c8a2(358)
            ],
            [
                /Mac/,
                'mac'
            ],
            [
                /Win/,
                _0x25c8a2(359)
            ]
        ];
    for (var _0x2b676d = 0; _0x2b676d < _0x9697ba[_0x25c8a2(360)]; _0x2b676d++) {
        if ($RegExp[_0x25c8a2(361)](_0x9697ba[_0x2b676d][0], navigator[_0x25c8a2(362)]))
            return _0x9697ba[_0x2b676d][1];
    }
    return _0x25c8a2(363);
}
var canSetVisibleOnAllWorkspaces = /(mac|linux)/[_0x2b38ea(361)](getPlatform()), nwWinEventsMap = {
        'minimize': 'onMinimized',
        'maximize': _0x2b38ea(364),
        'restore': 'onRestore',
        'enter-fullscreen': _0x2b38ea(365),
        'zoom': _0x2b38ea(366),
        'resize': 'onResized'
    }, nwWrapEventsMap = {
        'new-win-policy': _0x2b38ea(367),
        'navigation': 'onNavigation'
    }, wrapEventsMapNewWin = {
        'move': _0x2b38ea(368),
        'focus': _0x2b38ea(369),
        'blur': _0x2b38ea(369),
        'closed': _0x2b38ea(370),
        'close': _0x2b38ea(371)
    };
function NWWindow(_0x34d366) {
    var _0x91da55 = _0x2b38ea, _0xcb7949 = this;
    if (_0x34d366)
        this['cWindow'] = _0x34d366;
    else {
        this[_0x91da55(372)] = currentNWWindowInternal[_0x91da55(373)](-2, { 'populate': !![] });
        if (!this['cWindow'])
            console[_0x91da55(374)](_0x91da55(375) + _0x91da55(376));
    }
    function _0x14e63e(_0xff863b) {
        var _0x1c7424 = _0x91da55;
        if (_0xff863b['id'] !== _0xcb7949['cWindow']['id'])
            return;
        var _0x32636a = _0xcb7949[_0x1c7424(372)][_0x1c7424(377)], _0x7cd2f4 = _0xcb7949['cWindow']['width'], _0x2c5b7b = _0xcb7949[_0x1c7424(372)][_0x1c7424(378)];
        _0xcb7949['cWindow'][_0x1c7424(377)] = _0xff863b['state'], _0xcb7949[_0x1c7424(372)][_0x1c7424(379)] = _0xff863b[_0x1c7424(379)], _0xcb7949[_0x1c7424(372)]['height'] = _0xff863b[_0x1c7424(378)];
        if (_0x32636a != 'minimized' && _0xff863b['state'] == _0x1c7424(380))
            dispatchEventIfExists(_0xcb7949, _0x1c7424(381), [_0xff863b['id']]);
        else {
            if (_0x32636a != _0x1c7424(382) && _0xff863b['state'] == 'maximized')
                dispatchEventIfExists(_0xcb7949, _0x1c7424(364), [_0xff863b['id']]);
            else {
                if (_0x32636a != _0x1c7424(383) && _0xff863b[_0x1c7424(377)] == 'fullscreen')
                    dispatchEventIfExists(_0xcb7949, _0x1c7424(365), [_0xff863b['id']]);
                else {
                    if (_0x32636a != _0x1c7424(384) && _0xff863b['state'] == _0x1c7424(384))
                        dispatchEventIfExists(_0xcb7949, _0x1c7424(385), [_0xff863b['id']]);
                    else
                        (_0x7cd2f4 != _0xff863b[_0x1c7424(379)] || _0x2c5b7b != _0xff863b[_0x1c7424(378)]) && dispatchEventIfExists(_0xcb7949, _0x1c7424(386), [
                            _0xff863b['id'],
                            _0xff863b[_0x1c7424(379)],
                            _0xff863b['height']
                        ]);
                }
            }
        }
    }
    privates(this)['menu'] = null, chrome[_0x91da55(387)][_0x91da55(388)][_0x91da55(389)](_0x14e63e);
}
NWWindow[_0x2b38ea(390)][_0x2b38ea(367)] = bindingUtil[_0x2b38ea(391)](_0x2b38ea(392), ![], ![]), NWWindow[_0x2b38ea(390)]['onNavigation'] = bindingUtil['createCustomEvent'](_0x2b38ea(393), ![], ![]), NWWindow[_0x2b38ea(390)][_0x2b38ea(394)] = bindingUtil[_0x2b38ea(391)](_0x2b38ea(395), ![], ![]), NWWindow[_0x2b38ea(390)][_0x2b38ea(396)] = bindingUtil[_0x2b38ea(391)](_0x2b38ea(397), ![], ![]), NWWindow[_0x2b38ea(390)][_0x2b38ea(398)] = bindingUtil[_0x2b38ea(391)](_0x2b38ea(399), ![], ![]), NWWindow[_0x2b38ea(390)]['onZoom'] = bindingUtil[_0x2b38ea(391)](_0x2b38ea(400), ![], ![]), NWWindow['prototype'][_0x2b38ea(401)] = bindingUtil['createCustomEvent'](_0x2b38ea(402), !![], ![]), NWWindow[_0x2b38ea(390)][_0x2b38ea(381)] = bindingUtil[_0x2b38ea(391)](_0x2b38ea(403), ![], ![]), NWWindow[_0x2b38ea(390)]['onMaximized'] = bindingUtil[_0x2b38ea(391)](_0x2b38ea(404), ![], ![]), NWWindow[_0x2b38ea(390)][_0x2b38ea(365)] = bindingUtil['createCustomEvent']('nw.Window.onFullscreen', ![], ![]), NWWindow[_0x2b38ea(390)][_0x2b38ea(386)] = bindingUtil['createCustomEvent'](_0x2b38ea(405), ![], ![]), NWWindow['prototype'][_0x2b38ea(385)] = bindingUtil[_0x2b38ea(391)]('nw.Window.onRestore', ![], ![]), NWWindow['prototype'][_0x2b38ea(406)] = function (_0x437e60) {
    var _0x23659d = _0x2b38ea;
    currentNWWindowInternal['close'](_0x437e60, this[_0x23659d(372)]['id']);
}, NWWindow[_0x2b38ea(390)]['once'] = function (_0xb0e674, _0x2b5650, _0x58b4a2) {
    var _0x152799 = _0x2b38ea;
    if (typeof _0x2b5650 !== 'function')
        throw new TypeError(_0x152799(407));
    var _0x2b7f07 = ![], _0x53f158 = this;
    function _0x1a7bca() {
        var _0x5295e9 = _0x152799;
        _0x53f158[_0x5295e9(408)](_0xb0e674, _0x1a7bca), !_0x2b7f07 && (_0x2b7f07 = !![], _0x2b5650['apply'](_0x53f158, arguments));
    }
    return this['on'](_0xb0e674, _0x1a7bca, ![]), this;
}, NWWindow[_0x2b38ea(390)]['on'] = function (_0x544c8c, _0x1a4caf, _0x2cb01e) {
    var _0x512c7d = _0x2b38ea, _0x5a78b8 = this;
    function _0x49b498(_0x27b4bf) {
        var _0x92869f = _0x5f1e, _0x1fb377 = (_0x27b4bf || _0x1a4caf)['bind'](_0x5a78b8);
        return _0x1fb377[_0x92869f(409)] = _0x1a4caf, _0x1fb377[_0x92869f(410)] = _0x5a78b8[_0x92869f(372)]['id'], _0x1a4caf['__nw_cb'] = _0x1fb377, _0x1fb377;
    }
    if (_0x544c8c === _0x512c7d(406)) {
        var _0xca76c4 = _0x49b498(function (_0x16e6d0, _0x3e457b) {
            var _0x1ff654 = _0x512c7d;
            if (_0x5a78b8[_0x1ff654(372)]['id'] !== _0x16e6d0)
                return;
            _0x1a4caf[_0x1ff654(411)](_0x5a78b8, _0x3e457b);
        });
        return chrome[_0x512c7d(387)][_0x512c7d(371)]['addListener'](_0xca76c4, { 'instanceId': _0x5a78b8['cWindow']['id'] }), this;
    }
    switch (_0x544c8c) {
    case _0x512c7d(412):
        var _0x1be572 = _0x49b498(function (_0x162e1d) {
            var _0xea26d7 = _0x512c7d;
            if (_0x5a78b8['cWindow']['id'] !== _0x162e1d)
                return;
            _0x1a4caf[_0xea26d7(411)](_0x5a78b8);
        });
        chrome[_0x512c7d(387)][_0x512c7d(369)]['addListener'](_0x1be572);
        break;
    case _0x512c7d(413):
        this[_0x512c7d(372)] = currentNWWindowInternal[_0x512c7d(373)](this[_0x512c7d(372)]['id'], { 'populate': !![] });
        var _0x1be572 = _0x49b498(function (_0x2cb9a8) {
            var _0x5a29d3 = _0x512c7d;
            if (_0x5a78b8['cWindow']['id'] === _0x2cb9a8) {
                _0x1a4caf[_0x5a29d3(414)][_0x5a29d3(415)] = !![];
                return;
            }
            if (!_0x1a4caf['__nw_cb'][_0x5a29d3(415)])
                return;
            _0x1a4caf[_0x5a29d3(414)][_0x5a29d3(415)] = ![], _0x1a4caf[_0x5a29d3(411)](_0x5a78b8);
        });
        chrome[_0x512c7d(387)][_0x512c7d(369)]['addListener'](_0x1be572);
        break;
    case 'closed':
        var _0x30bab4 = _0x49b498(function (_0x1f88e1) {
            var _0x4f2732 = _0x512c7d;
            if (_0x5a78b8[_0x4f2732(372)]['id'] !== _0x1f88e1)
                return;
            _0x1a4caf['call'](_0x5a78b8);
        });
        chrome[_0x512c7d(387)]['onRemoved'][_0x512c7d(389)](_0x30bab4);
        break;
    case 'loaded':
        var _0x48362b = _0x49b498(function (_0x15d4a5, _0xa19ae4, _0x315f56) {
            var _0x4abc18 = _0x512c7d;
            if (_0x315f56['windowId'] !== _0x5a78b8[_0x4abc18(372)]['id'])
                return;
            if (_0x4abc18(416) in _0xa19ae4 && _0xa19ae4['nwstatus'] == 'complete')
                _0x1a4caf[_0x4abc18(411)](_0x5a78b8);
        });
        chrome[_0x512c7d(417)][_0x512c7d(418)][_0x512c7d(389)](_0x48362b);
        break;
    case _0x512c7d(419):
        var _0x124b24 = _0x49b498(function (_0x1cb5a2, _0x4a0e30) {
            var _0x327cdd = _0x512c7d;
            if (_0x4a0e30 !== _0x5a78b8[_0x327cdd(372)]['tabs'][0][_0x327cdd(420)])
                return;
            _0x1a4caf[_0x327cdd(411)](_0x5a78b8, _0x1cb5a2);
        });
        this[_0x512c7d(396)]['addListener'](_0x124b24);
        break;
    case _0x512c7d(421):
        var _0x366218 = _0x49b498(function (_0x41a9e3, _0x4edbab) {
            var _0x43da95 = _0x512c7d;
            if (_0x4edbab !== _0x5a78b8['cWindow'][_0x43da95(417)][0]['mainFrameId'])
                return;
            _0x1a4caf[_0x43da95(411)](_0x5a78b8, _0x41a9e3);
        });
        this[_0x512c7d(398)]['addListener'](_0x366218);
        break;
    case _0x512c7d(422):
        var _0x14a38c = _0x49b498(function (_0x1bf584, _0x464904, _0x5c3c89, _0x592d54) {
            var _0x224e27 = _0x512c7d;
            if (_0x592d54 !== _0x5a78b8[_0x224e27(372)][_0x224e27(417)][0][_0x224e27(420)])
                return;
            _0x5c3c89[_0x224e27(423)] = function () {
                var _0x28fa9e = _0x224e27;
                this[_0x28fa9e(424)] = 'ignore';
            }, _0x5c3c89[_0x224e27(425)] = function () {
                var _0x4cd05b = _0x224e27;
                this[_0x4cd05b(424)] = _0x4cd05b(426);
            }, _0x5c3c89[_0x224e27(427)] = function () {
                var _0x19286a = _0x224e27;
                this[_0x19286a(424)] = _0x19286a(428);
            }, _0x5c3c89[_0x224e27(429)] = function () {
                var _0x227189 = _0x224e27;
                this[_0x227189(424)] = _0x227189(430);
            }, _0x5c3c89[_0x224e27(431)] = function () {
                var _0x5ee326 = _0x224e27;
                this['val'] = _0x5ee326(432);
            }, _0x5c3c89['setNewWindowManifest'] = function (_0x464bc8) {
                var _0xd3533e = _0x224e27;
                this[_0xd3533e(433)] = _0x464bc8;
            }, _0x1a4caf[_0x224e27(411)](_0x5a78b8, _0x1bf584, _0x464904, _0x5c3c89);
        });
        this[_0x512c7d(367)]['addListener'](_0x14a38c);
        break;
    case _0x512c7d(434):
        var _0x1a6e1a = _0x49b498(function (_0x3ac094, _0x379df6, _0x5782df, _0x26fecb, _0x4a8b52) {
            var _0x27cd41 = _0x512c7d;
            if (_0x4a8b52 !== _0x5a78b8[_0x27cd41(372)]['tabs'][0]['mainFrameId'])
                return;
            _0x5782df[_0x27cd41(423)] = function () {
                var _0x49da10 = _0x27cd41;
                this[_0x49da10(424)] = _0x49da10(423);
            }, _0x1a4caf[_0x27cd41(411)](_0x5a78b8, _0x3ac094, _0x379df6, _0x5782df, _0x26fecb);
        });
        this[_0x512c7d(435)]['addListener'](_0x1a6e1a);
        break;
    case _0x512c7d(436):
        var _0x4b9fc3 = _0x49b498(function (_0x48b043) {
            var _0x2c0256 = _0x512c7d;
            if (_0x48b043['id'] != _0x5a78b8[_0x2c0256(372)]['id'])
                return;
            _0x1a4caf[_0x2c0256(411)](_0x5a78b8, _0x48b043[_0x2c0256(437)], _0x48b043[_0x2c0256(438)]);
        });
        chrome[_0x512c7d(387)][_0x512c7d(368)]['addListener'](_0x4b9fc3);
        return this;
        break;
    }
    if (nwWinEventsMap['hasOwnProperty'](_0x544c8c)) {
        let _0x4a9df5 = _0x49b498(function (_0x19c95c, ..._0x3413e7) {
            var _0x4831a6 = _0x512c7d;
            if (_0x19c95c != _0x5a78b8[_0x4831a6(372)]['id'])
                return;
            _0x1a4caf[_0x4831a6(411)](_0x5a78b8, ..._0x3413e7);
        });
        return this[nwWinEventsMap[_0x544c8c]][_0x512c7d(389)](_0x4a9df5), this;
    }
    return this;
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(408)] = function (_0x1ad1c6, _0x4c0032) {
    var _0x1e7ed0 = _0x2b38ea;
    if (_0x1ad1c6 === _0x1e7ed0(439))
        for (let _0x285b1a of chrome[_0x1e7ed0(417)][_0x1e7ed0(418)][_0x1e7ed0(440)]()) {
            if (_0x285b1a[_0x1e7ed0(409)] && _0x285b1a[_0x1e7ed0(409)] === _0x4c0032)
                return chrome[_0x1e7ed0(417)][_0x1e7ed0(418)]['removeListener'](_0x285b1a), this;
        }
    if (nwWinEventsMap[_0x1e7ed0(441)](_0x1ad1c6))
        for (let _0x3cd222 of this[nwWinEventsMap[_0x1ad1c6]][_0x1e7ed0(440)]()) {
            if (_0x3cd222[_0x1e7ed0(409)] && _0x3cd222['listener'] === _0x4c0032)
                return this[nwWinEventsMap[_0x1ad1c6]][_0x1e7ed0(408)](_0x3cd222), this;
        }
    if (nwWrapEventsMap['hasOwnProperty'](_0x1ad1c6))
        for (let _0x529cc1 of this[nwWrapEventsMap[_0x1ad1c6]][_0x1e7ed0(440)]()) {
            if (_0x529cc1[_0x1e7ed0(409)] && _0x529cc1['listener'] === _0x4c0032)
                return this[nwWrapEventsMap[_0x1ad1c6]][_0x1e7ed0(408)](_0x529cc1), this;
        }
    if (wrapEventsMapNewWin[_0x1e7ed0(441)](_0x1ad1c6))
        for (let _0x4d7158 of chrome['windows'][wrapEventsMapNewWin[_0x1ad1c6]][_0x1e7ed0(440)]()) {
            if (_0x4d7158[_0x1e7ed0(409)] && _0x4d7158['listener'] === _0x4c0032)
                return chrome['windows'][wrapEventsMapNewWin[_0x1ad1c6]][_0x1e7ed0(408)](_0x4d7158), this;
        }
    return this;
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(442)] = function (_0x45ff80) {
    var _0x306712 = _0x2b38ea;
    if (arguments[_0x306712(360)] === 0) {
        var _0x2f1226 = Object[_0x306712(443)]({}, nwWinEventsMap, nwWrapEventsMap), _0x184b7c = Object['keys'](_0x2f1226);
        for (var _0x44a194 = 0, _0x5dbd54; _0x44a194 < _0x184b7c[_0x306712(360)]; ++_0x44a194) {
            _0x5dbd54 = _0x184b7c[_0x44a194], this[_0x306712(442)](_0x5dbd54);
        }
        return this;
    }
    if (nwWinEventsMap[_0x306712(441)](_0x45ff80)) {
        for (let _0x370b1a of this[nwWinEventsMap[_0x45ff80]][_0x306712(440)]()) {
            this[nwWinEventsMap[_0x45ff80]][_0x306712(408)](_0x370b1a);
        }
        return this;
    }
    if (nwWrapEventsMap[_0x306712(441)](_0x45ff80)) {
        for (let _0x2645e4 of this[nwWrapEventsMap[_0x45ff80]][_0x306712(440)]()) {
            this[nwWrapEventsMap[_0x45ff80]]['removeListener'](_0x2645e4);
        }
        return this;
    }
    if (wrapEventsMapNewWin[_0x306712(441)](_0x45ff80)) {
        for (let _0x2f8dcb of chrome['windows'][wrapEventsMapNewWin[_0x45ff80]][_0x306712(440)]()) {
            _0x2f8dcb['c_win_id'] === this[_0x306712(372)]['id'] && chrome[_0x306712(387)][wrapEventsMapNewWin[_0x45ff80]][_0x306712(408)](_0x2f8dcb);
        }
        return this;
    }
    if (_0x45ff80 === _0x306712(439)) {
        for (let _0x49fea3 of chrome[_0x306712(417)][_0x306712(418)][_0x306712(440)]()) {
            _0x49fea3[_0x306712(410)] === this[_0x306712(372)]['id'] && chrome[_0x306712(417)]['onUpdated'][_0x306712(408)](_0x49fea3);
        }
        return this;
    }
    return this;
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(444)] = function (_0x1add68) {
    var _0x169c32 = _0x2b38ea;
    currentNWWindowInternal[_0x169c32(445)](_0x1add68, this[_0x169c32(372)]['id']);
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(446)] = function (_0x35c2ff) {
    var _0x1d1261 = _0x2b38ea;
    currentNWWindowInternal[_0x1d1261(447)](_0x35c2ff, this['cWindow']['id']);
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(448)] = function (_0x2b37eb) {
    var _0x3dfff2 = _0x2b38ea;
    currentNWWindowInternal[_0x3dfff2(449)](_0x2b37eb, this[_0x3dfff2(372)]['id']);
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(450)] = function (_0x2c714c) {
    var _0x57531b = _0x2b38ea;
    currentNWWindowInternal[_0x57531b(451)](_0x2c714c, this[_0x57531b(372)]['id']);
}, NWWindow[_0x2b38ea(390)]['enterKioskMode'] = function () {
    var _0x4cd26b = _0x2b38ea;
    currentNWWindowInternal[_0x4cd26b(452)](this[_0x4cd26b(372)]['id']);
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(453)] = function () {
    var _0x282d1b = _0x2b38ea;
    currentNWWindowInternal[_0x282d1b(454)](this[_0x282d1b(372)]['id']);
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(455)] = function () {
    var _0xed1edc = _0x2b38ea;
    currentNWWindowInternal[_0xed1edc(456)](this[_0xed1edc(372)]['id']);
}, NWWindow['prototype']['showDevTools'] = function (_0x13638a, _0x1f6bf1) {
    var _0x142d87 = _0x2b38ea, _0x57ec4c = '';
    if (typeof _0x13638a === _0x142d87(457))
        _0x57ec4c = _0x13638a;
    var _0x440e2f = null;
    if (_0x57ec4c)
        _0x440e2f = this[_0x142d87(458)][_0x142d87(459)](_0x57ec4c);
    else
        _0x440e2f = _0x13638a || null;
    nwNatives[_0x142d87(460)](_0x440e2f), currentNWWindowInternal[_0x142d87(461)](this['cWindow']['id'], _0x1f6bf1);
}, NWWindow[_0x2b38ea(390)]['capturePage'] = function (_0x175bfc, _0x14547a) {
    var _0x4c19b1 = _0x2b38ea, _0x296442 = _0x175bfc;
    if (!_0x14547a)
        _0x14547a = {
            'format': 'jpeg',
            'datatype': _0x4c19b1(462)
        };
    if (typeof _0x14547a == 'string')
        _0x14547a = {
            'format': _0x14547a,
            'datatype': _0x4c19b1(462)
        };
    _0x14547a[_0x4c19b1(463)] != _0x4c19b1(462) && (_0x296442 = function (_0x1e7a9a, _0x1fb110) {
        var _0x739f89 = _0x4c19b1, _0x1c6b04 = _0x1fb110[_0x739f89(464)](/^data:[^;]*;base64,/, '');
        switch (_0x1e7a9a) {
        case _0x739f89(465):
            _0x175bfc(new nw[(_0x739f89(466))](_0x1c6b04, _0x739f89(467)));
            break;
        case _0x739f89(468):
            _0x175bfc(_0x1c6b04);
            break;
        }
    }, _0x296442 = _0x296442['bind'](undefined, _0x14547a['datatype'])), this['cWindow'] = currentNWWindowInternal[_0x4c19b1(373)](this[_0x4c19b1(372)]['id'], { 'populate': !![] }), currentNWWindowInternal['capturePageInternal'](this[_0x4c19b1(372)]['id'], _0x14547a, _0x296442);
};
function sendCommand(_0x3c6da4, _0x391160, _0xc6038) {
    return new Promise((_0x19982a, _0x24aed7) => {
        var _0x18c4ec = _0x5f1e;
        chrome[_0x18c4ec(469)][_0x18c4ec(470)]({ 'tabId': _0x3c6da4 }, _0x391160, _0xc6038, _0x1dd231 => {
            var _0x2e02b7 = _0x18c4ec;
            if (!_0x1dd231) {
                _0x24aed7(chrome[_0x2e02b7(349)][_0x2e02b7(471)]);
                return;
            }
            _0x19982a(_0x1dd231);
        });
    });
}
function attach(_0x5e5d2e) {
    return new Promise((_0x29fd91, _0x7b0eff) => {
        var _0xfb081d = _0x5f1e;
        chrome[_0xfb081d(469)]['attach']({ 'tabId': _0x5e5d2e }, _0xfb081d(472), () => {
            var _0x2d2169 = _0xfb081d;
            if (chrome[_0x2d2169(349)][_0x2d2169(471)]) {
                _0x7b0eff(chrome[_0x2d2169(349)][_0x2d2169(471)]);
                return;
            }
            _0x29fd91();
        });
    });
}
function _0x5f1e(_0x5d44d5, _0x364eb2) {
    return _0x5f1e = function (_0x493232, _0x5f1ef0) {
        _0x493232 = _0x493232 - 336;
        var _0x1c8c4d = _0x4932[_0x493232];
        return _0x1c8c4d;
    }, _0x5f1e(_0x5d44d5, _0x364eb2);
}
function detach(_0x32c88e) {
    return new Promise((_0x8fa8c, _0x43fbf2) => {
        var _0x12e571 = _0x5f1e;
        chrome['debugger'][_0x12e571(473)]({ 'tabId': _0x32c88e }, () => {
            var _0x156ff1 = _0x12e571;
            if (chrome['runtime'][_0x156ff1(471)]) {
                _0x43fbf2(chrome[_0x156ff1(349)][_0x156ff1(471)]);
                return;
            }
            _0x8fa8c();
        });
    });
}
async function captureScreenshotHelper(_0xc2a3ba, _0x3e1186) {
    var _0xa795b = _0x2b38ea;
    await attach(_0xc2a3ba);
    let _0x3d06ce = await sendCommand(_0xc2a3ba, _0xa795b(474));
    if (_0x3e1186[_0xa795b(475)]) {
        const _0x227154 = Math['min']((1 << 14) / window[_0xa795b(476)], _0x3d06ce[_0xa795b(477)][_0xa795b(378)]);
        await sendCommand(_0xc2a3ba, _0xa795b(478), {
            'deviceScaleFactor': 0,
            'mobile': ![],
            'width': _0x3d06ce['contentSize'][_0xa795b(379)],
            'height': Math[_0xa795b(479)](_0x227154)
        });
    }
    let _0x227ffb = await sendCommand(_0xc2a3ba, _0xa795b(480), _0x3e1186);
    if (_0x3e1186['fullSize'])
        await sendCommand(_0xc2a3ba, 'Emulation.clearDeviceMetricsOverride');
    return await detach(_0xc2a3ba), _0x227ffb['data'];
}
NWWindow[_0x2b38ea(390)][_0x2b38ea(481)] = function (_0x208547, _0x837d88) {
    var _0x3ffa0f = _0x2b38ea;
    let _0x3f111d = this['cWindow'][_0x3ffa0f(417)][0]['id'];
    if (!_0x837d88)
        return captureScreenshotHelper(_0x3f111d, _0x208547);
    captureScreenshotHelper(_0x3f111d, _0x208547)[_0x3ffa0f(482)](_0x6ee95b => {
        _0x837d88(null, _0x6ee95b);
    })[_0x3ffa0f(483)](_0x837d88);
}, NWWindow[_0x2b38ea(390)]['reload'] = function () {
    var _0x442625 = _0x2b38ea;
    chrome[_0x442625(417)][_0x442625(484)](this[_0x442625(372)]['tabs'][0]['id']);
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(485)] = function () {
    var _0x2e9ef3 = _0x2b38ea;
    chrome[_0x2e9ef3(417)]['reload'](this[_0x2e9ef3(372)]['tabs'][0]['id'], { 'bypassCache': !![] });
}, NWWindow['prototype'][_0x2b38ea(486)] = function (_0x255bb3, _0x10fcb3) {
    var _0x355ce8 = _0x2b38ea;
    return this['cWindow'] = currentNWWindowInternal['getCurrent'](this[_0x355ce8(372)]['id'], { 'populate': !![] }), nwNatives[_0x355ce8(487)](_0x255bb3, _0x10fcb3, this[_0x355ce8(372)][_0x355ce8(417)][0][_0x355ce8(420)]);
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(488)] = function (_0x19a1b9, _0x64f09) {
    var _0x5da9a0 = _0x2b38ea;
    this['cWindow'] = currentNWWindowInternal[_0x5da9a0(373)](this['cWindow']['id'], { 'populate': !![] }), this[_0x5da9a0(489)](_0x19a1b9, _0x64f09, null, this[_0x5da9a0(372)]['tabs'][0][_0x5da9a0(420)]);
}, NWWindow['prototype'][_0x2b38ea(490)] = function (_0x1794ef, _0x23d93e, _0x419d30) {
    var _0x331476 = _0x2b38ea;
    this[_0x331476(372)] = currentNWWindowInternal[_0x331476(373)](this[_0x331476(372)]['id'], { 'populate': !![] }), this[_0x331476(489)](_0x1794ef, _0x23d93e, _0x419d30, this['cWindow']['tabs'][0][_0x331476(420)]);
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(489)] = function (_0x32aeb3, _0x5b07f8, _0x135b70, _0x398652) {
    var _0x2ea7ea = _0x2b38ea, _0x408e3c;
    if (Buffer[_0x2ea7ea(491)](_0x5b07f8)) {
        let _0x1a9dea = _0x5b07f8;
        _0x408e3c = new global['ArrayBuffer'](_0x5b07f8[_0x2ea7ea(360)]), _0x5b07f8[_0x2ea7ea(492)](Buffer['from'](_0x408e3c));
    } else {
        if ($Object[_0x2ea7ea(390)][_0x2ea7ea(493)][_0x2ea7ea(494)](_0x5b07f8) === _0x2ea7ea(495))
            _0x408e3c = _0x5b07f8;
        else {
            let _0x5d8045 = global[_0x2ea7ea(496)]('fs')['readFileSync'](_0x5b07f8);
            _0x408e3c = new global[(_0x2ea7ea(497))](_0x5d8045[_0x2ea7ea(360)]), _0x5d8045[_0x2ea7ea(492)](Buffer[_0x2ea7ea(498)](_0x408e3c));
        }
    }
    return nwNatives[_0x2ea7ea(488)](_0x32aeb3, _0x408e3c, _0x135b70, _0x398652);
}, NWWindow['prototype'][_0x2b38ea(499)] = function () {
    var _0x426c14 = _0x2b38ea;
    chrome[_0x426c14(387)][_0x426c14(500)](this['cWindow']['id'], { 'show': !![] });
}, NWWindow[_0x2b38ea(390)]['hide'] = function () {
    var _0x4aecde = _0x2b38ea;
    chrome[_0x4aecde(387)]['update'](this[_0x4aecde(372)]['id'], { 'state': _0x4aecde(501) });
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(412)] = function () {
    var _0x4e221c = _0x2b38ea;
    chrome[_0x4e221c(387)][_0x4e221c(500)](this[_0x4e221c(372)]['id'], { 'focused': !![] });
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(413)] = function () {
    var _0x22b0b4 = _0x2b38ea;
    chrome['windows'][_0x22b0b4(500)](this[_0x22b0b4(372)]['id'], { 'focused': ![] });
}, NWWindow['prototype'][_0x2b38ea(502)] = function () {
    var _0x14c0ca = _0x2b38ea;
    chrome[_0x14c0ca(387)][_0x14c0ca(500)](this[_0x14c0ca(372)]['id'], { 'state': 'minimized' });
}, NWWindow['prototype'][_0x2b38ea(503)] = function () {
    var _0x3dd2ff = _0x2b38ea;
    chrome[_0x3dd2ff(387)][_0x3dd2ff(500)](this[_0x3dd2ff(372)]['id'], { 'state': _0x3dd2ff(382) });
}, NWWindow['prototype']['unmaximize'] = NWWindow[_0x2b38ea(390)][_0x2b38ea(504)] = function () {
    var _0xfb9d4b = _0x2b38ea;
    chrome[_0xfb9d4b(387)][_0xfb9d4b(500)](this[_0xfb9d4b(372)]['id'], { 'state': _0xfb9d4b(384) });
}, NWWindow[_0x2b38ea(390)]['enterFullscreen'] = function () {
    var _0x568db9 = _0x2b38ea;
    chrome['windows']['update'](this[_0x568db9(372)]['id'], { 'state': 'fullscreen' });
}, NWWindow['prototype']['leaveFullscreen'] = function () {
    var _0x2e3db2 = _0x2b38ea, _0x3b5ef8 = this;
    chrome[_0x2e3db2(387)][_0x2e3db2(505)](this[_0x2e3db2(372)]['id'], {}, function (_0x4d74d3) {
        var _0x34c3bb = _0x2e3db2;
        _0x3b5ef8[_0x34c3bb(372)] = _0x4d74d3;
        if (_0x4d74d3['state'] === _0x34c3bb(383))
            chrome[_0x34c3bb(387)][_0x34c3bb(500)](_0x4d74d3['id'], { 'state': _0x34c3bb(384) });
    });
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(506)] = function () {
    var _0x1e887a = this;
    chrome['windows']['get'](this['cWindow']['id'], {}, function (_0x1bc12f) {
        var _0x56dd31 = _0x5f1e;
        _0x1e887a['cWindow'] = _0x1bc12f;
        if (_0x1bc12f['state'] === _0x56dd31(383))
            chrome[_0x56dd31(387)][_0x56dd31(500)](_0x1bc12f['id'], { 'state': _0x56dd31(384) });
        else
            _0x1e887a[_0x56dd31(507)]();
    });
}, NWWindow['prototype'][_0x2b38ea(508)] = function (_0x68a9e0) {
    var _0x32996c = _0x2b38ea;
    chrome[_0x32996c(387)][_0x32996c(500)](this[_0x32996c(372)]['id'], { 'alwaysOnTop': _0x68a9e0 });
}, NWWindow['prototype'][_0x2b38ea(509)] = function (_0x409f69) {
    var _0x4aea0d = _0x2b38ea;
    this[_0x4aea0d(372)] = currentNWWindowInternal[_0x4aea0d(373)](this['cWindow']['id'], { 'populate': !![] });
    if (_0x409f69 == _0x4aea0d(510)) {
        var _0x2c3946 = screen[_0x4aea0d(511)], _0x3dabe7 = screen[_0x4aea0d(512)], _0x32eccf = this[_0x4aea0d(372)][_0x4aea0d(379)], _0x2f289d = this[_0x4aea0d(372)]['height'];
        chrome['windows'][_0x4aea0d(500)](this[_0x4aea0d(372)]['id'], {
            'left': Math[_0x4aea0d(513)]((_0x2c3946 - _0x32eccf) / 2),
            'top': Math[_0x4aea0d(513)]((_0x3dabe7 - _0x2f289d) / 2)
        });
    } else
        _0x409f69 == 'mouse' && chrome['windows'][_0x4aea0d(500)](this[_0x4aea0d(372)]['id'], { 'position': _0x4aea0d(514) });
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(515)] = function (_0x2e9e96) {
    var _0x2a23b6 = _0x2b38ea;
    chrome[_0x2a23b6(387)]['update'](this[_0x2a23b6(372)]['id'], { 'allVisible': _0x2e9e96 });
}, NWWindow['prototype'][_0x2b38ea(516)] = function () {
    return canSetVisibleOnAllWorkspaces;
}, NWWindow[_0x2b38ea(390)]['setMaximumSize'] = function (_0xcf0ff6, _0x323fe2) {
    var _0x4b336c = _0x2b38ea;
    chrome[_0x4b336c(387)][_0x4b336c(500)](this['cWindow']['id'], {
        'maxWidth': _0xcf0ff6,
        'maxHeight': _0x323fe2
    });
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(517)] = function (_0x25bed4, _0x491384) {
    var _0x104bc4 = _0x2b38ea;
    chrome[_0x104bc4(387)][_0x104bc4(500)](this[_0x104bc4(372)]['id'], {
        'minWidth': _0x25bed4,
        'minHeight': _0x491384
    });
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(518)] = function (_0xcbd879, _0x53529c) {
    var _0x4db113 = _0x2b38ea;
    chrome[_0x4db113(387)][_0x4db113(500)](this[_0x4db113(372)]['id'], {
        'innerWidth': _0xcbd879,
        'innerHeight': _0x53529c
    });
}, NWWindow[_0x2b38ea(390)][_0x2b38ea(519)] = function (_0x29370d) {
    var _0x1d1df8 = _0x2b38ea;
    chrome[_0x1d1df8(387)][_0x1d1df8(500)](this['cWindow']['id'], { 'innerWidth': _0x29370d });
}, NWWindow['prototype'][_0x2b38ea(520)] = function (_0x29fdae) {
    var _0x33ced0 = _0x2b38ea;
    chrome[_0x33ced0(387)]['update'](this[_0x33ced0(372)]['id'], { 'innerHeight': _0x29fdae });
}, NWWindow[_0x2b38ea(390)]['resizeBy'] = function (_0x47ee8d, _0x344851) {
    var _0x35a89b = _0x2b38ea;
    this[_0x35a89b(372)] = currentNWWindowInternal[_0x35a89b(373)](this[_0x35a89b(372)]['id'], { 'populate': !![] }), chrome[_0x35a89b(387)][_0x35a89b(500)](this[_0x35a89b(372)]['id'], {
        'width': this[_0x35a89b(372)][_0x35a89b(379)] + _0x47ee8d,
        'height': this[_0x35a89b(372)]['height'] + _0x344851
    });
}, NWWindow['prototype'][_0x2b38ea(521)] = function (_0x1a5bd5, _0x28c161) {
    var _0x39225e = _0x2b38ea;
    chrome[_0x39225e(387)][_0x39225e(500)](this[_0x39225e(372)]['id'], {
        'left': _0x1a5bd5,
        'top': _0x28c161
    });
}, NWWindow[_0x2b38ea(390)]['moveBy'] = function (_0x3fd758, _0x16bf82) {
    var _0x64e6ea = _0x2b38ea;
    this['cWindow'] = currentNWWindowInternal[_0x64e6ea(373)](this[_0x64e6ea(372)]['id'], { 'populate': !![] }), chrome[_0x64e6ea(387)][_0x64e6ea(500)](this[_0x64e6ea(372)]['id'], {
        'left': this[_0x64e6ea(372)]['left'] + _0x3fd758,
        'top': this[_0x64e6ea(372)]['top'] + _0x16bf82
    });
}, NWWindow[_0x2b38ea(390)]['setResizable'] = function (_0x88d4b7) {
    chrome['windows']['update'](this['cWindow']['id'], { 'resizable': _0x88d4b7 });
}, NWWindow[_0x2b38ea(390)]['requestAttention'] = function (_0x40bd9a) {
    var _0x315060 = _0x2b38ea;
    if (typeof _0x40bd9a == _0x315060(522))
        _0x40bd9a = _0x40bd9a ? -1 : 0;
    currentNWWindowInternal[_0x315060(523)](_0x40bd9a);
}, NWWindow['prototype']['cookies'] = chrome[_0x2b38ea(524)], NWWindow[_0x2b38ea(390)][_0x2b38ea(525)] = function (_0x520771) {
    var _0x46c478 = _0x2b38ea, _0x1d8257 = JSON[_0x46c478(526)](JSON[_0x46c478(527)](_0x520771));
    if (!(_0x46c478(528) in _0x1d8257))
        _0x1d8257[_0x46c478(528)] = !![];
    if (_0x520771[_0x46c478(529)])
        _0x1d8257[_0x46c478(530)] = 'Save as PDF';
    currentNWWindowInternal['setPrintSettingsInternal'](_0x1d8257, this[_0x46c478(372)]['id']), this[_0x46c478(458)][_0x46c478(525)]();
}, Object[_0x2b38ea(531)](NWWindow['prototype'], 'x', {
    'get': function () {
        var _0x35d8ab = _0x2b38ea;
        return this[_0x35d8ab(372)] = currentNWWindowInternal[_0x35d8ab(373)](this[_0x35d8ab(372)]['id'], { 'populate': !![] }), this[_0x35d8ab(372)][_0x35d8ab(437)];
    },
    'set': function (_0x588dfe) {
        var _0xbed8f6 = _0x2b38ea;
        chrome['windows'][_0xbed8f6(500)](this[_0xbed8f6(372)]['id'], { 'left': _0x588dfe });
    }
}), Object['defineProperty'](NWWindow[_0x2b38ea(390)], 'y', {
    'get': function () {
        var _0x2733a3 = _0x2b38ea;
        return this[_0x2733a3(372)] = currentNWWindowInternal['getCurrent'](this[_0x2733a3(372)]['id'], { 'populate': !![] }), this[_0x2733a3(372)][_0x2733a3(438)];
    },
    'set': function (_0x15e2b6) {
        var _0x194fc2 = _0x2b38ea;
        chrome[_0x194fc2(387)]['update'](this[_0x194fc2(372)]['id'], { 'top': _0x15e2b6 });
    }
}), Object[_0x2b38ea(531)](NWWindow['prototype'], _0x2b38ea(379), {
    'get': function () {
        var _0x46386f = _0x2b38ea;
        return this['cWindow'] = currentNWWindowInternal[_0x46386f(373)](this[_0x46386f(372)]['id'], { 'populate': !![] }), this['cWindow'][_0x46386f(379)];
    },
    'set': function (_0x21c499) {
        var _0x4f5c0f = _0x2b38ea;
        chrome[_0x4f5c0f(387)][_0x4f5c0f(500)](this['cWindow']['id'], { 'width': _0x21c499 });
    }
}), Object['defineProperty'](NWWindow[_0x2b38ea(390)], _0x2b38ea(378), {
    'get': function () {
        var _0x107854 = _0x2b38ea;
        return this[_0x107854(372)] = currentNWWindowInternal[_0x107854(373)](this[_0x107854(372)]['id'], { 'populate': !![] }), this[_0x107854(372)]['height'];
    },
    'set': function (_0x2fd67d) {
        var _0x2d7670 = _0x2b38ea;
        chrome['windows'][_0x2d7670(500)](this[_0x2d7670(372)]['id'], { 'height': _0x2fd67d });
    }
}), Object[_0x2b38ea(531)](NWWindow[_0x2b38ea(390)], 'title', {
    'get': function () {
        var _0x4257cc = _0x2b38ea;
        return currentNWWindowInternal[_0x4257cc(532)](this['cWindow']['id']);
    },
    'set': function (_0x2f0f5d) {
        var _0x59c0a0 = _0x2b38ea;
        currentNWWindowInternal[_0x59c0a0(533)](_0x2f0f5d, this[_0x59c0a0(372)]['id']);
    }
}), Object[_0x2b38ea(531)](NWWindow['prototype'], _0x2b38ea(534), {
    'get': function () {
        var _0xd0aeab = _0x2b38ea;
        return currentNWWindowInternal[_0xd0aeab(535)](this[_0xd0aeab(372)]['id']);
    },
    'set': function (_0x39f0a5) {
        var _0x1eec4c = _0x2b38ea;
        currentNWWindowInternal['setZoom'](_0x39f0a5, this[_0x1eec4c(372)]['id']);
    }
}), Object['defineProperty'](NWWindow[_0x2b38ea(390)], _0x2b38ea(536), {
    'get': function () {
        var _0x3f341f = _0x2b38ea;
        return this[_0x3f341f(537)][_0x3f341f(538)]();
    }
}), Object[_0x2b38ea(531)](NWWindow[_0x2b38ea(390)], _0x2b38ea(539), {
    'get': function () {
        return currentNWWindowInternal['isKioskInternal'](this['cWindow']['id']);
    },
    'set': function (_0x17db18) {
        var _0x2b6102 = _0x2b38ea;
        if (_0x17db18)
            currentNWWindowInternal[_0x2b6102(452)](this[_0x2b6102(372)]['id']);
        else
            currentNWWindowInternal[_0x2b6102(454)](this[_0x2b6102(372)]['id']);
    }
}), Object['defineProperty'](NWWindow[_0x2b38ea(390)], _0x2b38ea(540), {
    'get': function () {
        var _0x3dcbb4 = _0x2b38ea;
        return this[_0x3dcbb4(372)] = currentNWWindowInternal[_0x3dcbb4(373)](this[_0x3dcbb4(372)]['id'], { 'populate': !![] }), this['cWindow'][_0x3dcbb4(377)] === _0x3dcbb4(383);
    }
}), Object[_0x2b38ea(531)](NWWindow[_0x2b38ea(390)], _0x2b38ea(541), {
    'get': function () {
        var _0x3733db = _0x2b38ea;
        return this[_0x3733db(372)] = currentNWWindowInternal[_0x3733db(373)](this[_0x3733db(372)]['id'], { 'populate': !![] }), this[_0x3733db(372)]['alwaysOnTop'];
    }
}), Object[_0x2b38ea(531)](NWWindow[_0x2b38ea(390)], _0x2b38ea(542), {
    'get': function () {
        var _0x47aad7 = _0x2b38ea, _0xeada4b = privates(this)[_0x47aad7(542)] || {};
        return _0xeada4b;
    },
    'set': function (_0x8530d) {
        var _0x413830 = _0x2b38ea;
        if (!_0x8530d) {
            privates(this)['menu'] = null, currentNWWindowInternal[_0x413830(543)](this[_0x413830(372)]['id']);
            return;
        }
        if (_0x8530d['type'] != _0x413830(544))
            throw new TypeError(_0x413830(545));
        privates(this)[_0x413830(542)] = _0x8530d;
        var _0x3004b9 = currentNWWindowInternal[_0x413830(546)](_0x8530d['id'], this[_0x413830(372)]['id']);
        _0x3004b9[_0x413830(360)] && _0x3004b9[_0x413830(348)](_0x3dbb3b => {
            var _0x464201 = _0x413830;
            let _0x11ee4f = _0x3dbb3b['menu'], _0x16760f = _0x3dbb3b['index'], _0x94a8fb = _0x8530d[_0x464201(547)][_0x11ee4f];
            _0x94a8fb && _0x94a8fb[_0x464201(548)] && _0x94a8fb[_0x464201(548)][_0x464201(549)](new nw['MenuItem'](_0x3dbb3b['option']), _0x16760f);
        });
    }
}), Object[_0x2b38ea(531)](NWWindow[_0x2b38ea(390)], _0x2b38ea(458), {
    'get': function () {
        var _0x71900b = _0x2b38ea;
        return this[_0x71900b(372)] = currentNWWindowInternal[_0x71900b(373)](this[_0x71900b(372)]['id'], { 'populate': !![] }), appWindowNatives[_0x71900b(550)](this['cWindow'][_0x71900b(417)][0]['mainFrameId'], ![]);
    }
}), Object['defineProperty'](NWWindow['prototype'], _0x2b38ea(551), {
    'get': function () {
        return currentRoutingID;
    }
}), apiBridge[_0x2b38ea(552)](function (_0x74de4) {
    var _0x4af443 = _0x2b38ea, _0x347dab = _0x74de4[_0x4af443(553)];
    currentNWWindowInternal = getInternalApi('nw.currentWindowInternal'), forEach(currentNWWindowInternal, function (_0x2bc145, _0x36e704) {
        var _0x4451ef = _0x4af443;
        if (!_0x2bc145[_0x4451ef(554)]('Internal') && _0x2bc145 !== _0x4451ef(406))
            NWWindow['prototype'][_0x2bc145] = _0x36e704;
    }), _0x347dab[_0x4af443(555)](_0x4af443(505), function (_0x126cfe) {
        var _0x48e29a = _0x4af443;
        if (_0x126cfe)
            return try_nw(_0x126cfe[_0x48e29a(438)])['nw'][_0x48e29a(556)]['get']();
        if (currentNWWindow)
            return currentNWWindow;
        return currentNWWindow = new NWWindow(), currentNWWindow;
    }), _0x347dab[_0x4af443(555)]('getAll', function (_0xf6bbf8) {
        var _0x2667ac = _0x4af443;
        chrome[_0x2667ac(387)][_0x2667ac(557)]({ 'populate': !![] }, function (_0x41c848) {
            var _0x5da0bd = _0x2667ac;
            let _0x1e8a35 = _0x3fc2b7 => new NWWindow(_0x3fc2b7);
            _0xf6bbf8(_0x41c848[_0x5da0bd(558)](_0x1e8a35));
        });
    }), _0x347dab[_0x4af443(555)](_0x4af443(559), function (_0x21d0f3, _0x97f8a6, _0x2cb170) {
        var _0x407b44 = _0x4af443, _0x387711 = {
                'url': _0x21d0f3,
                'setSelfAsOpener': !![],
                'type': _0x407b44(560)
            };
        if (_0x97f8a6) {
            if (_0x97f8a6[_0x407b44(561)] === ![])
                _0x387711['frameless'] = !![];
            if (_0x97f8a6['resizable'] === ![])
                _0x387711[_0x407b44(562)] = ![];
            if (_0x97f8a6['focus'] === ![])
                _0x387711[_0x407b44(415)] = ![];
            if (_0x97f8a6['x'])
                _0x387711[_0x407b44(437)] = _0x97f8a6['x'];
            if (_0x97f8a6['y'])
                _0x387711[_0x407b44(438)] = _0x97f8a6['y'];
            if (_0x97f8a6['height'])
                _0x387711[_0x407b44(378)] = _0x97f8a6['height'];
            if (_0x97f8a6[_0x407b44(379)])
                _0x387711[_0x407b44(379)] = _0x97f8a6[_0x407b44(379)];
            if (_0x97f8a6[_0x407b44(563)])
                _0x387711[_0x407b44(564)] = _0x97f8a6['min_width'];
            if (_0x97f8a6[_0x407b44(565)])
                _0x387711[_0x407b44(566)] = _0x97f8a6[_0x407b44(565)];
            if (_0x97f8a6[_0x407b44(567)])
                _0x387711['minHeight'] = _0x97f8a6[_0x407b44(567)];
            if (_0x97f8a6[_0x407b44(568)])
                _0x387711['maxHeight'] = _0x97f8a6[_0x407b44(568)];
            if (_0x97f8a6[_0x407b44(383)] === !![])
                _0x387711[_0x407b44(377)] = _0x407b44(383);
            if (_0x97f8a6[_0x407b44(499)] === ![])
                _0x387711[_0x407b44(501)] = !![];
            if (_0x97f8a6[_0x407b44(569)] === ![])
                _0x387711['showInTaskbar'] = ![];
            if (_0x97f8a6[_0x407b44(570)] === !![])
                _0x387711[_0x407b44(571)] = !![];
            if (_0x97f8a6[_0x407b44(572)] === !![])
                _0x387711[_0x407b44(573)] = !![];
            if (typeof _0x97f8a6['inject_js_start'] == _0x407b44(457))
                _0x387711[_0x407b44(574)] = _0x97f8a6[_0x407b44(574)];
            if (typeof _0x97f8a6[_0x407b44(575)] == _0x407b44(457))
                _0x387711['inject_js_end'] = _0x97f8a6[_0x407b44(575)];
            if (_0x97f8a6[_0x407b44(576)])
                _0x387711[_0x407b44(538)] = !![];
            _0x97f8a6[_0x407b44(577)] === !![] && (_0x387711[_0x407b44(577)] = !![], _0x387711['setSelfAsOpener'] = ![]);
            if (_0x97f8a6['mixed_context'] === !![]) {
                if (_0x97f8a6['new_instance'] !== !![])
                    throw new Error(_0x407b44(578));
                _0x387711[_0x407b44(579)] = !![];
            }
            if (_0x97f8a6['position'])
                _0x387711[_0x407b44(580)] = _0x97f8a6['position'];
            if (_0x97f8a6[_0x407b44(581)])
                _0x387711[_0x407b44(581)] = _0x97f8a6[_0x407b44(581)];
            if (_0x97f8a6[_0x407b44(582)])
                _0x387711[_0x407b44(582)] = _0x97f8a6[_0x407b44(582)];
            if (_0x97f8a6['id'])
                _0x387711['id'] = _0x97f8a6['id'];
        }
        if (_0x2cb170 && !(_0x387711[_0x407b44(577)] === !![]))
            _0x387711[_0x407b44(583)] = !![];
        try_hidden(window)['chrome'][_0x407b44(387)][_0x407b44(584)](_0x387711, function (_0x12398b) {
            var _0x2eeee1 = _0x407b44;
            try {
                if (_0x2cb170) {
                    if (_0x12398b)
                        _0x2cb170(new NWWindow(_0x12398b));
                    else
                        _0x2cb170();
                }
            } finally {
                if (_0x387711['block_parser'])
                    appWindowNatives[_0x2eeee1(585)](_0x12398b[_0x2eeee1(417)][0]['mainFrameId']);
            }
        });
    });
});
function dispatchEventIfExists(_0x19c175, _0x5bb075, _0x215db9) {
    var _0x282e82 = _0x2b38ea, _0x112fb2 = _0x19c175[_0x5bb075];
    if (_0x112fb2 && typeof _0x112fb2[_0x282e82(586)] == 'function')
        $Function[_0x282e82(494)](_0x112fb2[_0x282e82(586)], _0x112fb2, _0x215db9);
    else
        console[_0x282e82(587)]('Could not dispatch ' + _0x5bb075 + _0x282e82(588));
}
function onNewWinPolicy(_0x49109b, _0x4a3f7b, _0x487aea, _0x417df7) {
    var _0x6bd6a8 = _0x2b38ea;
    dispatchEventIfExists(NWWindow[_0x6bd6a8(390)], _0x6bd6a8(367), [
        _0x49109b,
        _0x4a3f7b,
        _0x487aea,
        _0x417df7
    ]);
}
function onNavigation(_0x40df06, _0xa36279, _0x419f8e, _0x1b61a6, _0x5af100) {
    var _0x458470 = _0x2b38ea;
    dispatchEventIfExists(NWWindow[_0x458470(390)], 'onNavigation', [
        _0x40df06,
        _0xa36279,
        _0x419f8e,
        _0x5af100,
        _0x1b61a6
    ]);
}
function onLoadingStateChanged(_0x2a4712) {
    if (!currentNWWindow)
        return;
    dispatchEventIfExists(currentNWWindow, 'LoadingStateChanged', [_0x2a4712]);
}
function onDocumentStartEnd(_0x1484cb, _0x179fee, _0x135caa) {
    var _0x1ef436 = _0x2b38ea;
    if (_0x1484cb)
        dispatchEventIfExists(NWWindow[_0x1ef436(390)], _0x1ef436(396), [
            _0x179fee,
            _0x135caa
        ]);
    else
        dispatchEventIfExists(NWWindow[_0x1ef436(390)], _0x1ef436(398), [
            _0x179fee,
            _0x135caa
        ]);
}
function updateAppWindowZoom(_0x365f7f, _0x5bc7a7) {
    var _0x5de0ba = _0x2b38ea;
    if (!currentNWWindow)
        return;
    dispatchEventIfExists(currentNWWindow, _0x5de0ba(366), [_0x5bc7a7]);
}
function onClose(_0xe51112) {
    var _0x475f36 = _0x2b38ea;
    if (!currentNWWindow)
        return;
    currentNWWindow[_0x475f36(401)][_0x475f36(589)]({ 'instanceId': currentWidgetRoutingID }, _0xe51112);
}
function get_nw() {
    var _0x2ffef3 = _0x2b38ea;
    appWindowNatives[_0x2ffef3(590)]();
    var _0x39bf41 = try_nw(window)['nw'];
    if (_0x39bf41)
        _0x39bf41['Window'][_0x2ffef3(505)]();
}
exports[_0x2b38ea(367)] = onNewWinPolicy, exports[_0x2b38ea(435)] = onNavigation, exports[_0x2b38ea(394)] = onLoadingStateChanged, exports[_0x2b38ea(591)] = onDocumentStartEnd, exports[_0x2b38ea(401)] = onClose, exports[_0x2b38ea(592)] = updateAppWindowZoom;