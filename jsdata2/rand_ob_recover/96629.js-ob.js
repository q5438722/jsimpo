var nwNatives = requireNative('nw_natives'), forEach = require(_0x1c8100(316))[_0x1c8100(317)], runtimeNatives = requireNative(_0x1c8100(318)), renderFrameObserverNatives = requireNative(_0x1c8100(319)), appWindowNatives = requireNative(_0x1c8100(320)), GetExtensionViews = runtimeNatives[_0x1c8100(321)], currentNWWindow = null, currentNWWindowInternal = null, currentRoutingID = nwNatives[_0x1c8100(322)](), currentWidgetRoutingID = nwNatives['getWidgetRoutingID'](), bgPage = GetExtensionViews(-(8745 + 1 * 7079 + -15823 * 1), -(-7873 + 8372 + -6 * 83), _0x1c8100(323))[-354 + 1 * -5587 + 5941], try_hidden = function (_0x344e4f) {
        var _0x5992dd = _0x1c8100, _0x364a97 = {
                'wgDbb': function (_0xb4e20c, _0x195ead) {
                    return _0xb4e20c(_0x195ead);
                }
            };
        if (_0x344e4f[_0x5992dd(324)]['windows'])
            return _0x344e4f;
        return _0x364a97[_0x5992dd(325)](privates, _0x344e4f);
    }, try_nw = function (_0x1a71cf) {
        var _0x4255ae = {
            'koFeQ': function (_0x4f2f1c, _0x24500a) {
                return _0x4f2f1c(_0x24500a);
            }
        };
        if (_0x1a71cf['nw'])
            return _0x1a71cf;
        return _0x4255ae['koFeQ'](privates, _0x1a71cf);
    };
function getPlatform() {
    var _0x20b89a = _0x1c8100, _0x109f4e = {
            'Crxon': _0x20b89a(326),
            'SpUUe': _0x20b89a(327),
            'LjLhH': _0x20b89a(328),
            'NYSYb': _0x20b89a(329),
            'zutRE': _0x20b89a(330),
            'MfSyy': function (_0x4b0605, _0x4d6e36) {
                return _0x4b0605 < _0x4d6e36;
            },
            'UfiDK': _0x20b89a(331)
        }, _0x2e60f8 = [
            [
                /CrOS Touch/,
                _0x109f4e[_0x20b89a(332)]
            ],
            [
                /CrOS/,
                _0x109f4e['SpUUe']
            ],
            [
                /Linux/,
                _0x109f4e[_0x20b89a(333)]
            ],
            [
                /Mac/,
                _0x109f4e[_0x20b89a(334)]
            ],
            [
                /Win/,
                _0x109f4e[_0x20b89a(335)]
            ]
        ];
    for (var _0x256aaf = -4757 + -1 * 3406 + 1 * 8163; _0x109f4e[_0x20b89a(336)](_0x256aaf, _0x2e60f8[_0x20b89a(337)]); _0x256aaf++) {
        if ($RegExp['exec'](_0x2e60f8[_0x256aaf][5393 + 7839 + -13232], navigator[_0x20b89a(338)]))
            return _0x2e60f8[_0x256aaf][1 * 2763 + -3145 + 383];
    }
    return _0x109f4e[_0x20b89a(339)];
}
var canSetVisibleOnAllWorkspaces = /(mac|linux)/[_0x1c8100(340)](getPlatform()), nwWinEventsMap = {
        'minimize': _0x1c8100(341),
        'maximize': _0x1c8100(342),
        'restore': _0x1c8100(343),
        'enter-fullscreen': 'onFullscreen',
        'zoom': _0x1c8100(344),
        'resize': 'onResized'
    }, nwWrapEventsMap = {
        'new-win-policy': _0x1c8100(345),
        'navigation': 'onNavigation'
    }, wrapEventsMapNewWin = {
        'move': _0x1c8100(346),
        'focus': _0x1c8100(347),
        'blur': _0x1c8100(347),
        'closed': _0x1c8100(348),
        'close': _0x1c8100(349)
    };
function NWWindow(_0x2f87d7) {
    var _0x128f00 = _0x1c8100, _0x13c583 = {
            'fowUc': function (_0x103642, _0xf2f5ca) {
                return _0x103642 !== _0xf2f5ca;
            },
            'WjXAE': _0x128f00(350),
            'BETur': function (_0x10c5af, _0x368e8f) {
                return _0x10c5af == _0x368e8f;
            },
            'Tzpwf': _0x128f00(341),
            'tVaUq': _0x128f00(351),
            'sdXfK': function (_0x2c5429, _0x4cd814) {
                return _0x2c5429 == _0x4cd814;
            },
            'MTSbJ': function (_0x11a41e, _0x19f3a3, _0x2edbd6, _0x5294f5) {
                return _0x11a41e(_0x19f3a3, _0x2edbd6, _0x5294f5);
            },
            'EvAEz': function (_0x334e07, _0x2960ca) {
                return _0x334e07 != _0x2960ca;
            },
            'TeKGU': 'fullscreen',
            'Ljjco': function (_0x45427f, _0x555f79, _0x317f9d, _0x12c1f2) {
                return _0x45427f(_0x555f79, _0x317f9d, _0x12c1f2);
            },
            'XaEPD': _0x128f00(352),
            'mACFv': function (_0x68c671, _0x52d3a1) {
                return _0x68c671 == _0x52d3a1;
            },
            'vCvkz': function (_0xc42129, _0xab7536, _0x5db0d8, _0x60407a) {
                return _0xc42129(_0xab7536, _0x5db0d8, _0x60407a);
            },
            'tMpsK': function (_0x572842, _0x35d7d7) {
                return _0x572842 != _0x35d7d7;
            },
            'GIoUY': 'onResized',
            'fsWfu': function (_0x352b94, _0x2e231c) {
                return _0x352b94 + _0x2e231c;
            },
            'qIrxZ': _0x128f00(353),
            'yKceU': _0x128f00(354),
            'pKFay': function (_0x1ce139, _0x35cc11) {
                return _0x1ce139(_0x35cc11);
            }
        }, _0x2d073d = this;
    if (_0x2f87d7)
        this[_0x128f00(355)] = _0x2f87d7;
    else {
        this[_0x128f00(355)] = currentNWWindowInternal['getCurrent'](-(-1 * -2881 + 3137 * -1 + 258), { 'populate': !![] });
        if (!this[_0x128f00(355)])
            console[_0x128f00(356)](_0x13c583[_0x128f00(357)](_0x13c583['qIrxZ'], _0x13c583['yKceU']));
    }
    function _0x4ba86c(_0x1865e9) {
        var _0x3a285a = _0x128f00;
        if (_0x13c583[_0x3a285a(358)](_0x1865e9['id'], _0x2d073d[_0x3a285a(355)]['id']))
            return;
        var _0x3d6f78 = _0x2d073d[_0x3a285a(355)][_0x3a285a(359)], _0x53c1b4 = _0x2d073d[_0x3a285a(355)][_0x3a285a(360)], _0x14e9af = _0x2d073d['cWindow']['height'];
        _0x2d073d[_0x3a285a(355)][_0x3a285a(359)] = _0x1865e9['state'], _0x2d073d[_0x3a285a(355)][_0x3a285a(360)] = _0x1865e9['width'], _0x2d073d[_0x3a285a(355)]['height'] = _0x1865e9[_0x3a285a(361)];
        if (_0x3d6f78 != _0x13c583['WjXAE'] && _0x13c583[_0x3a285a(362)](_0x1865e9[_0x3a285a(359)], _0x3a285a(350)))
            dispatchEventIfExists(_0x2d073d, _0x13c583['Tzpwf'], [_0x1865e9['id']]);
        else {
            if (_0x3d6f78 != _0x13c583['tVaUq'] && _0x13c583[_0x3a285a(363)](_0x1865e9[_0x3a285a(359)], _0x13c583[_0x3a285a(364)]))
                _0x13c583[_0x3a285a(365)](dispatchEventIfExists, _0x2d073d, _0x3a285a(342), [_0x1865e9['id']]);
            else {
                if (_0x13c583[_0x3a285a(366)](_0x3d6f78, 'fullscreen') && _0x1865e9[_0x3a285a(359)] == _0x13c583[_0x3a285a(367)])
                    _0x13c583[_0x3a285a(368)](dispatchEventIfExists, _0x2d073d, _0x13c583[_0x3a285a(369)], [_0x1865e9['id']]);
                else {
                    if (_0x3d6f78 != _0x3a285a(370) && _0x13c583['mACFv'](_0x1865e9[_0x3a285a(359)], _0x3a285a(370)))
                        _0x13c583[_0x3a285a(371)](dispatchEventIfExists, _0x2d073d, 'onRestore', [_0x1865e9['id']]);
                    else
                        (_0x13c583[_0x3a285a(372)](_0x53c1b4, _0x1865e9['width']) || _0x14e9af != _0x1865e9['height']) && dispatchEventIfExists(_0x2d073d, _0x13c583[_0x3a285a(373)], [
                            _0x1865e9['id'],
                            _0x1865e9['width'],
                            _0x1865e9[_0x3a285a(361)]
                        ]);
                }
            }
        }
    }
    _0x13c583['pKFay'](privates, this)[_0x128f00(374)] = null, chrome[_0x128f00(375)][_0x128f00(376)][_0x128f00(377)](_0x4ba86c);
}
NWWindow['prototype']['onNewWinPolicy'] = bindingUtil[_0x1c8100(378)](_0x1c8100(379), ![], ![]), NWWindow['prototype'][_0x1c8100(380)] = bindingUtil[_0x1c8100(378)](_0x1c8100(381), ![], ![]), NWWindow['prototype'][_0x1c8100(382)] = bindingUtil['createCustomEvent']('nw.Window.LoadingStateChanged', ![], ![]), NWWindow[_0x1c8100(383)][_0x1c8100(384)] = bindingUtil[_0x1c8100(378)](_0x1c8100(385), ![], ![]), NWWindow[_0x1c8100(383)][_0x1c8100(386)] = bindingUtil[_0x1c8100(378)]('nw.Window.onDocumentEnd', ![], ![]), NWWindow[_0x1c8100(383)][_0x1c8100(344)] = bindingUtil['createCustomEvent'](_0x1c8100(387), ![], ![]), NWWindow[_0x1c8100(383)][_0x1c8100(388)] = bindingUtil[_0x1c8100(378)]('nw.Window.onClose', !![], ![]), NWWindow['prototype'][_0x1c8100(341)] = bindingUtil[_0x1c8100(378)]('nw.Window.onMinimized', ![], ![]), NWWindow[_0x1c8100(383)][_0x1c8100(342)] = bindingUtil[_0x1c8100(378)](_0x1c8100(389), ![], ![]), NWWindow['prototype'][_0x1c8100(352)] = bindingUtil[_0x1c8100(378)](_0x1c8100(390), ![], ![]), NWWindow['prototype'][_0x1c8100(391)] = bindingUtil['createCustomEvent'](_0x1c8100(392), ![], ![]), NWWindow['prototype'][_0x1c8100(343)] = bindingUtil['createCustomEvent'](_0x1c8100(393), ![], ![]), NWWindow[_0x1c8100(383)][_0x1c8100(394)] = function (_0x674b33) {
    currentNWWindowInternal['close'](_0x674b33, this['cWindow']['id']);
}, NWWindow[_0x1c8100(383)][_0x1c8100(395)] = function (_0x1fcb33, _0x3659cf, _0x4fe6d1) {
    var _0x397c25 = _0x1c8100, _0x14dcda = {
            'VrWXF': function (_0x225d2a, _0x45ab53) {
                return _0x225d2a !== _0x45ab53;
            },
            'bfmbZ': 'function'
        };
    if (_0x14dcda[_0x397c25(396)](typeof _0x3659cf, _0x14dcda[_0x397c25(397)]))
        throw new TypeError(_0x397c25(398));
    var _0x5cd90d = ![], _0x1b87eb = this;
    function _0x224b66() {
        _0x1b87eb['removeListener'](_0x1fcb33, _0x224b66), !_0x5cd90d && (_0x5cd90d = !![], _0x3659cf['apply'](_0x1b87eb, arguments));
    }
    return this['on'](_0x1fcb33, _0x224b66, ![]), this;
}, NWWindow[_0x1c8100(383)]['on'] = function (_0x1c3235, _0x2f2489, _0x2cc2e3) {
    var _0x16252a = _0x1c8100, _0x58c3ba = {
            'REycp': _0x16252a(399),
            'uYMsP': function (_0x2ed6f3, _0x943cd8) {
                return _0x2ed6f3 || _0x943cd8;
            },
            'DxXJs': function (_0x8a721c, _0x26f404) {
                return _0x8a721c !== _0x26f404;
            },
            'IMuNR': function (_0x26e196, _0x53a19e) {
                return _0x26e196 !== _0x53a19e;
            },
            'wFgqs': function (_0x51b695, _0x2d2d6e) {
                return _0x51b695 === _0x2d2d6e;
            },
            'SZsVr': function (_0x41d078, _0xbe488f) {
                return _0x41d078 !== _0xbe488f;
            },
            'WKbCx': function (_0x24f28c, _0x55ca23) {
                return _0x24f28c in _0x55ca23;
            },
            'DjbAc': _0x16252a(400),
            'hAHPT': function (_0x5c0d6c, _0x4559a6) {
                return _0x5c0d6c == _0x4559a6;
            },
            'koIKf': _0x16252a(401),
            'rwCeh': function (_0x452a75, _0x15a3e7) {
                return _0x452a75 !== _0x15a3e7;
            },
            'PXHMJ': function (_0x33a777, _0x208cc9) {
                return _0x33a777 !== _0x208cc9;
            },
            'TaLPV': _0x16252a(402),
            'TndBn': _0x16252a(403),
            'PGeeU': _0x16252a(404),
            'KvqGZ': _0x16252a(405),
            'BGLYL': _0x16252a(406),
            'fbUHW': _0x16252a(407),
            'Bkzls': function (_0x48c19a, _0x232465) {
                return _0x48c19a !== _0x232465;
            },
            'vFlFW': function (_0x214530, _0xdabb43) {
                return _0x214530 != _0xdabb43;
            },
            'VurZD': function (_0x1f3487, _0x34a9b8) {
                return _0x1f3487 != _0x34a9b8;
            },
            'kofzL': _0x16252a(394),
            'XPcdD': function (_0x3aeb58, _0x486f40) {
                return _0x3aeb58(_0x486f40);
            },
            'zKmPo': 'focus',
            'IAvbB': _0x16252a(408),
            'lpmeq': function (_0x571b64, _0x2f8dcc) {
                return _0x571b64(_0x2f8dcc);
            },
            'PCCOr': _0x16252a(409),
            'aLQJg': function (_0xc772ad, _0xcc2c97) {
                return _0xc772ad(_0xcc2c97);
            },
            'LiaBN': _0x16252a(410),
            'ibjcV': 'document-start',
            'nyNLb': _0x16252a(411),
            'DzxJD': _0x16252a(412),
            'IGhlU': _0x16252a(413),
            'oYBbZ': function (_0x2e4e4f, _0x1e9130) {
                return _0x2e4e4f(_0x1e9130);
            },
            'WlIXD': _0x16252a(414)
        }, _0x566936 = this;
    function _0x1331ff(_0x22c77a) {
        var _0x8f9a3a = _0x16252a, _0x540410 = _0x58c3ba[_0x8f9a3a(415)]['split']('|'), _0x3b6db6 = -3354 + 1355 * 7 + 1 * -6131;
        while (!![]) {
            switch (_0x540410[_0x3b6db6++]) {
            case '0':
                var _0x308d5f = _0x58c3ba[_0x8f9a3a(416)](_0x22c77a, _0x2f2489)[_0x8f9a3a(417)](_0x566936);
                continue;
            case '1':
                _0x308d5f[_0x8f9a3a(418)] = _0x2f2489;
                continue;
            case '2':
                return _0x308d5f;
            case '3':
                _0x308d5f['c_win_id'] = _0x566936[_0x8f9a3a(355)]['id'];
                continue;
            case '4':
                _0x2f2489[_0x8f9a3a(419)] = _0x308d5f;
                continue;
            }
            break;
        }
    }
    if (_0x58c3ba[_0x16252a(420)](_0x1c3235, _0x58c3ba[_0x16252a(421)])) {
        var _0x14de81 = _0x58c3ba['XPcdD'](_0x1331ff, function (_0x427685, _0x2e537e) {
            var _0x12cc56 = _0x16252a;
            if (_0x58c3ba['DxXJs'](_0x566936[_0x12cc56(355)]['id'], _0x427685))
                return;
            _0x2f2489[_0x12cc56(422)](_0x566936, _0x2e537e);
        });
        return chrome['windows']['onRemoving'][_0x16252a(377)](_0x14de81, { 'instanceId': _0x566936['cWindow']['id'] }), this;
    }
    switch (_0x1c3235) {
    case _0x58c3ba[_0x16252a(423)]:
        var _0x3e88c6 = _0x58c3ba[_0x16252a(424)](_0x1331ff, function (_0x54f661) {
            var _0x12afbf = _0x16252a;
            if (_0x58c3ba['IMuNR'](_0x566936[_0x12afbf(355)]['id'], _0x54f661))
                return;
            _0x2f2489[_0x12afbf(422)](_0x566936);
        });
        chrome[_0x16252a(375)][_0x16252a(347)][_0x16252a(377)](_0x3e88c6);
        break;
    case _0x58c3ba[_0x16252a(425)]:
        this[_0x16252a(355)] = currentNWWindowInternal['getCurrent'](this[_0x16252a(355)]['id'], { 'populate': !![] });
        var _0x3e88c6 = _0x58c3ba[_0x16252a(426)](_0x1331ff, function (_0x490f26) {
            var _0x143b4f = _0x16252a;
            if (_0x58c3ba[_0x143b4f(420)](_0x566936['cWindow']['id'], _0x490f26)) {
                _0x2f2489[_0x143b4f(419)][_0x143b4f(427)] = !![];
                return;
            }
            if (!_0x2f2489[_0x143b4f(419)][_0x143b4f(427)])
                return;
            _0x2f2489[_0x143b4f(419)]['focused'] = ![], _0x2f2489['call'](_0x566936);
        });
        chrome[_0x16252a(375)]['onFocusChanged'][_0x16252a(377)](_0x3e88c6);
        break;
    case _0x58c3ba[_0x16252a(428)]:
        var _0x390e36 = _0x58c3ba[_0x16252a(429)](_0x1331ff, function (_0x305e46) {
            var _0x51403e = _0x16252a;
            if (_0x58c3ba['SZsVr'](_0x566936[_0x51403e(355)]['id'], _0x305e46))
                return;
            _0x2f2489[_0x51403e(422)](_0x566936);
        });
        chrome[_0x16252a(375)]['onRemoved'][_0x16252a(377)](_0x390e36);
        break;
    case _0x58c3ba['LiaBN']:
        var _0xde39d7 = _0x1331ff(function (_0x373fbb, _0x1dd926, _0x52acec) {
            var _0x1ffd7f = _0x16252a;
            if (_0x58c3ba['SZsVr'](_0x52acec['windowId'], _0x566936['cWindow']['id']))
                return;
            if (_0x58c3ba[_0x1ffd7f(430)](_0x58c3ba['DjbAc'], _0x1dd926) && _0x58c3ba[_0x1ffd7f(431)](_0x1dd926[_0x1ffd7f(400)], _0x58c3ba[_0x1ffd7f(432)]))
                _0x2f2489['call'](_0x566936);
        });
        chrome[_0x16252a(433)][_0x16252a(434)]['addListener'](_0xde39d7);
        break;
    case _0x58c3ba[_0x16252a(435)]:
        var _0x2464b4 = _0x58c3ba[_0x16252a(429)](_0x1331ff, function (_0x14e8fa, _0x3e5fd3) {
            var _0x48e958 = _0x16252a;
            if (_0x58c3ba['rwCeh'](_0x3e5fd3, _0x566936[_0x48e958(355)][_0x48e958(433)][50 * 119 + 8207 + -14157][_0x48e958(436)]))
                return;
            _0x2f2489[_0x48e958(422)](_0x566936, _0x14e8fa);
        });
        this[_0x16252a(384)][_0x16252a(377)](_0x2464b4);
        break;
    case _0x58c3ba['nyNLb']:
        var _0x4404d3 = _0x58c3ba['aLQJg'](_0x1331ff, function (_0x4f6972, _0x584f67) {
            var _0xb82380 = _0x16252a;
            if (_0x58c3ba[_0xb82380(437)](_0x584f67, _0x566936[_0xb82380(355)]['tabs'][8437 + 771 * -3 + -6124][_0xb82380(436)]))
                return;
            _0x2f2489[_0xb82380(422)](_0x566936, _0x4f6972);
        });
        this[_0x16252a(386)][_0x16252a(377)](_0x4404d3);
        break;
    case _0x58c3ba['DzxJD']:
        var _0x4016a9 = _0x58c3ba[_0x16252a(429)](_0x1331ff, function (_0x77bc65, _0x32dc36, _0x236796, _0x10dff6) {
            var _0x583a39 = _0x16252a, _0x1dea73 = _0x58c3ba[_0x583a39(438)]['split']('|'), _0x3a0595 = 3807 * -1 + -2 * 3058 + 9923;
            while (!![]) {
                switch (_0x1dea73[_0x3a0595++]) {
                case '0':
                    _0x236796[_0x583a39(439)] = function () {
                        var _0x5e0d00 = _0x583a39;
                        this[_0x5e0d00(440)] = _0x96eb00[_0x5e0d00(441)];
                    };
                    continue;
                case '1':
                    _0x236796['ignore'] = function () {
                        var _0x3dbf9c = _0x583a39;
                        this[_0x3dbf9c(440)] = _0x96eb00[_0x3dbf9c(442)];
                    };
                    continue;
                case '2':
                    _0x236796[_0x583a39(443)] = function () {
                        var _0xb770db = _0x583a39;
                        this[_0xb770db(440)] = _0x96eb00[_0xb770db(444)];
                    };
                    continue;
                case '3':
                    _0x236796['forceDownload'] = function () {
                        var _0x5ea790 = _0x583a39;
                        this['val'] = _0x58c3ba[_0x5ea790(445)];
                    };
                    continue;
                case '4':
                    _0x236796[_0x583a39(446)] = function (_0x388240) {
                        this['manifest'] = _0x388240;
                    };
                    continue;
                case '5':
                    _0x2f2489[_0x583a39(422)](_0x566936, _0x77bc65, _0x32dc36, _0x236796);
                    continue;
                case '6':
                    if (_0x58c3ba[_0x583a39(437)](_0x10dff6, _0x566936['cWindow']['tabs'][-9453 + 844 + -8609 * -1][_0x583a39(436)]))
                        return;
                    continue;
                case '7':
                    var _0x96eb00 = {
                        'VFrjN': _0x58c3ba['KvqGZ'],
                        'yOpcO': _0x58c3ba[_0x583a39(447)],
                        'PswFH': _0x58c3ba[_0x583a39(448)]
                    };
                    continue;
                case '8':
                    _0x236796[_0x583a39(449)] = function () {
                        this['val'] = _0x58c3ba['TaLPV'];
                    };
                    continue;
                }
                break;
            }
        });
        this[_0x16252a(345)]['addListener'](_0x4016a9);
        break;
    case _0x58c3ba[_0x16252a(450)]:
        var _0x1044b3 = _0x58c3ba[_0x16252a(451)](_0x1331ff, function (_0x51c978, _0x4ac6ef, _0x138dc8, _0x488e65, _0x25da18) {
            var _0x406041 = _0x16252a;
            if (_0x58c3ba[_0x406041(452)](_0x25da18, _0x566936[_0x406041(355)][_0x406041(433)][8265 + 1 * -1009 + -7256]['mainFrameId']))
                return;
            _0x138dc8['ignore'] = function () {
                var _0x2273a5 = _0x406041;
                this[_0x2273a5(440)] = _0x58c3ba[_0x2273a5(453)];
            }, _0x2f2489[_0x406041(422)](_0x566936, _0x51c978, _0x4ac6ef, _0x138dc8, _0x488e65);
        });
        this[_0x16252a(380)]['addListener'](_0x1044b3);
        break;
    case _0x58c3ba[_0x16252a(454)]:
        var _0x56224f = _0x1331ff(function (_0x27fbbf) {
            var _0x10c91f = _0x16252a;
            if (_0x58c3ba[_0x10c91f(455)](_0x27fbbf['id'], _0x566936['cWindow']['id']))
                return;
            _0x2f2489[_0x10c91f(422)](_0x566936, _0x27fbbf[_0x10c91f(456)], _0x27fbbf[_0x10c91f(457)]);
        });
        chrome[_0x16252a(375)][_0x16252a(346)]['addListener'](_0x56224f);
        return this;
        break;
    }
    if (nwWinEventsMap[_0x16252a(458)](_0x1c3235)) {
        let _0x5a4735 = _0x1331ff(function (_0xacab6f, ..._0x4f3c96) {
            var _0x323d2d = _0x16252a;
            if (_0x58c3ba[_0x323d2d(459)](_0xacab6f, _0x566936[_0x323d2d(355)]['id']))
                return;
            _0x2f2489[_0x323d2d(422)](_0x566936, ..._0x4f3c96);
        });
        return this[nwWinEventsMap[_0x1c3235]][_0x16252a(377)](_0x5a4735), this;
    }
    return this;
}, NWWindow[_0x1c8100(383)][_0x1c8100(460)] = function (_0x1db4e0, _0x1978d9) {
    var _0x318e75 = _0x1c8100, _0x36e5a9 = {
            'MyiOy': function (_0x3fcde2, _0x413408) {
                return _0x3fcde2 === _0x413408;
            },
            'gCJYp': _0x318e75(410),
            'eiQMU': function (_0x3dadc8, _0x30dd59) {
                return _0x3dadc8 === _0x30dd59;
            },
            'rKrKX': function (_0x42cb41, _0x5a63b2) {
                return _0x42cb41 === _0x5a63b2;
            }
        };
    if (_0x36e5a9[_0x318e75(461)](_0x1db4e0, _0x36e5a9[_0x318e75(462)]))
        for (let _0x56d1a6 of chrome[_0x318e75(433)]['onUpdated'][_0x318e75(463)]()) {
            if (_0x56d1a6['listener'] && _0x36e5a9[_0x318e75(464)](_0x56d1a6[_0x318e75(418)], _0x1978d9))
                return chrome[_0x318e75(433)][_0x318e75(434)][_0x318e75(460)](_0x56d1a6), this;
        }
    if (nwWinEventsMap[_0x318e75(458)](_0x1db4e0))
        for (let _0x5f7491 of this[nwWinEventsMap[_0x1db4e0]][_0x318e75(463)]()) {
            if (_0x5f7491[_0x318e75(418)] && _0x5f7491[_0x318e75(418)] === _0x1978d9)
                return this[nwWinEventsMap[_0x1db4e0]]['removeListener'](_0x5f7491), this;
        }
    if (nwWrapEventsMap['hasOwnProperty'](_0x1db4e0))
        for (let _0x4d44a8 of this[nwWrapEventsMap[_0x1db4e0]][_0x318e75(463)]()) {
            if (_0x4d44a8[_0x318e75(418)] && _0x36e5a9[_0x318e75(465)](_0x4d44a8[_0x318e75(418)], _0x1978d9))
                return this[nwWrapEventsMap[_0x1db4e0]][_0x318e75(460)](_0x4d44a8), this;
        }
    if (wrapEventsMapNewWin['hasOwnProperty'](_0x1db4e0))
        for (let _0x2f7635 of chrome['windows'][wrapEventsMapNewWin[_0x1db4e0]]['getListeners']()) {
            if (_0x2f7635[_0x318e75(418)] && _0x36e5a9[_0x318e75(465)](_0x2f7635[_0x318e75(418)], _0x1978d9))
                return chrome[_0x318e75(375)][wrapEventsMapNewWin[_0x1db4e0]][_0x318e75(460)](_0x2f7635), this;
        }
    return this;
}, NWWindow[_0x1c8100(383)][_0x1c8100(466)] = function (_0x28c80b) {
    var _0x585db3 = _0x1c8100, _0x4bdbf8 = {
            'bsHrU': function (_0x5ca7d1, _0x10573e) {
                return _0x5ca7d1 === _0x10573e;
            },
            'HXowE': function (_0x150a7c, _0x3bcb7f) {
                return _0x150a7c === _0x3bcb7f;
            },
            'iRhbB': 'loaded',
            'ReuwR': function (_0x3e4387, _0xfaf377) {
                return _0x3e4387 === _0xfaf377;
            }
        };
    if (_0x4bdbf8[_0x585db3(467)](arguments[_0x585db3(337)], 2943 * -3 + 113 * -84 + 31 * 591)) {
        var _0x4c1c17 = Object[_0x585db3(468)]({}, nwWinEventsMap, nwWrapEventsMap), _0x12a430 = Object[_0x585db3(469)](_0x4c1c17);
        for (var _0x30771c = 14 * -317 + 7 * -1201 + 367 * 35, _0x2a9682; _0x30771c < _0x12a430[_0x585db3(337)]; ++_0x30771c) {
            _0x2a9682 = _0x12a430[_0x30771c], this['removeAllListeners'](_0x2a9682);
        }
        return this;
    }
    if (nwWinEventsMap[_0x585db3(458)](_0x28c80b)) {
        for (let _0x4addb4 of this[nwWinEventsMap[_0x28c80b]]['getListeners']()) {
            this[nwWinEventsMap[_0x28c80b]][_0x585db3(460)](_0x4addb4);
        }
        return this;
    }
    if (nwWrapEventsMap[_0x585db3(458)](_0x28c80b)) {
        for (let _0x3e2da1 of this[nwWrapEventsMap[_0x28c80b]][_0x585db3(463)]()) {
            this[nwWrapEventsMap[_0x28c80b]][_0x585db3(460)](_0x3e2da1);
        }
        return this;
    }
    if (wrapEventsMapNewWin[_0x585db3(458)](_0x28c80b)) {
        for (let _0x17ac62 of chrome['windows'][wrapEventsMapNewWin[_0x28c80b]]['getListeners']()) {
            _0x4bdbf8[_0x585db3(470)](_0x17ac62[_0x585db3(471)], this[_0x585db3(355)]['id']) && chrome[_0x585db3(375)][wrapEventsMapNewWin[_0x28c80b]][_0x585db3(460)](_0x17ac62);
        }
        return this;
    }
    if (_0x4bdbf8[_0x585db3(470)](_0x28c80b, _0x4bdbf8[_0x585db3(472)])) {
        for (let _0x333fa2 of chrome[_0x585db3(433)]['onUpdated'][_0x585db3(463)]()) {
            _0x4bdbf8[_0x585db3(473)](_0x333fa2[_0x585db3(471)], this['cWindow']['id']) && chrome[_0x585db3(433)]['onUpdated'][_0x585db3(460)](_0x333fa2);
        }
        return this;
    }
    return this;
}, NWWindow['prototype']['setShadow'] = function (_0x2b7cc4) {
    var _0x38333a = _0x1c8100;
    currentNWWindowInternal[_0x38333a(474)](_0x2b7cc4, this[_0x38333a(355)]['id']);
}, NWWindow[_0x1c8100(383)][_0x1c8100(475)] = function (_0x46140a) {
    var _0x314693 = _0x1c8100;
    currentNWWindowInternal['setBadgeLabelInternal'](_0x46140a, this[_0x314693(355)]['id']);
}, NWWindow[_0x1c8100(383)][_0x1c8100(476)] = function (_0x5879f1) {
    var _0x43be9f = _0x1c8100;
    currentNWWindowInternal[_0x43be9f(477)](_0x5879f1, this[_0x43be9f(355)]['id']);
}, NWWindow['prototype'][_0x1c8100(478)] = function (_0x789b24) {
    var _0x354df8 = _0x1c8100;
    currentNWWindowInternal['setShowInTaskbarInternal'](_0x789b24, this[_0x354df8(355)]['id']);
}, NWWindow[_0x1c8100(383)][_0x1c8100(479)] = function () {
    var _0x45dc3c = _0x1c8100;
    currentNWWindowInternal[_0x45dc3c(480)](this['cWindow']['id']);
}, NWWindow[_0x1c8100(383)][_0x1c8100(481)] = function () {
    var _0x29b967 = _0x1c8100;
    currentNWWindowInternal[_0x29b967(482)](this[_0x29b967(355)]['id']);
}, NWWindow['prototype'][_0x1c8100(483)] = function () {
    var _0x2d88e5 = _0x1c8100;
    currentNWWindowInternal[_0x2d88e5(484)](this['cWindow']['id']);
}, NWWindow['prototype'][_0x1c8100(485)] = function (_0x10d8f2, _0x4cd9c9) {
    var _0x3af012 = _0x1c8100, _0x32c669 = {
            'YAYzY': '3|2|0|1|4|5',
            'OuyHN': function (_0x5cf368, _0x521a7a) {
                return _0x5cf368 || _0x521a7a;
            },
            'fRoZk': function (_0x2b9694, _0x2d71b1) {
                return _0x2b9694 === _0x2d71b1;
            },
            'cWdcq': 'string'
        }, _0x2cbf2e = _0x32c669['YAYzY'][_0x3af012(486)]('|'), _0x1226e4 = -1 * 9215 + 415 + 200 * 44;
    while (!![]) {
        switch (_0x2cbf2e[_0x1226e4++]) {
        case '0':
            var _0x255fc2 = null;
            continue;
        case '1':
            if (_0x442ffd)
                _0x255fc2 = this[_0x3af012(487)][_0x3af012(488)](_0x442ffd);
            else
                _0x255fc2 = _0x32c669[_0x3af012(489)](_0x10d8f2, null);
            continue;
        case '2':
            if (_0x32c669[_0x3af012(490)](typeof _0x10d8f2, _0x32c669['cWdcq']))
                _0x442ffd = _0x10d8f2;
            continue;
        case '3':
            var _0x442ffd = '';
            continue;
        case '4':
            nwNatives[_0x3af012(491)](_0x255fc2);
            continue;
        case '5':
            currentNWWindowInternal[_0x3af012(492)](this[_0x3af012(355)]['id'], _0x4cd9c9);
            continue;
        }
        break;
    }
}, NWWindow[_0x1c8100(383)][_0x1c8100(493)] = function (_0x35b834, _0x2f3737) {
    var _0x4e8132 = _0x1c8100, _0x3013b2 = {
            'EPqAE': _0x4e8132(494),
            'kLUdt': _0x4e8132(495),
            'mCRNk': function (_0x11119c, _0x4de934) {
                return _0x11119c(_0x4de934);
            },
            'rXnkU': _0x4e8132(496),
            'AOIMe': 'datauri',
            'bavUe': _0x4e8132(497)
        }, _0x1f6bfd = _0x35b834;
    if (!_0x2f3737)
        _0x2f3737 = {
            'format': _0x3013b2[_0x4e8132(498)],
            'datatype': _0x3013b2[_0x4e8132(499)]
        };
    if (typeof _0x2f3737 == _0x3013b2[_0x4e8132(500)])
        _0x2f3737 = {
            'format': _0x2f3737,
            'datatype': _0x3013b2[_0x4e8132(499)]
        };
    _0x2f3737[_0x4e8132(501)] != _0x3013b2['AOIMe'] && (_0x1f6bfd = function (_0x520372, _0x4e6956) {
        var _0x1f9a97 = _0x4e8132, _0x4c73e2 = _0x4e6956[_0x1f9a97(502)](/^data:[^;]*;base64,/, '');
        switch (_0x520372) {
        case _0x3013b2[_0x1f9a97(503)]:
            _0x35b834(new nw[(_0x1f9a97(504))](_0x4c73e2, _0x1f9a97(505)));
            break;
        case _0x3013b2['kLUdt']:
            _0x3013b2[_0x1f9a97(506)](_0x35b834, _0x4c73e2);
            break;
        }
    }, _0x1f6bfd = _0x1f6bfd[_0x4e8132(417)](undefined, _0x2f3737[_0x4e8132(501)])), this['cWindow'] = currentNWWindowInternal[_0x4e8132(507)](this[_0x4e8132(355)]['id'], { 'populate': !![] }), currentNWWindowInternal[_0x4e8132(508)](this[_0x4e8132(355)]['id'], _0x2f3737, _0x1f6bfd);
};
function sendCommand(_0x538b1b, _0x3ee85d, _0xcef7bd) {
    var _0x15519f = {
        'cepOR': function (_0x372a15, _0x48a6b0) {
            return _0x372a15(_0x48a6b0);
        }
    };
    return new Promise((_0x5c2ca2, _0x4ee6ee) => {
        var _0x20b365 = _0x123a, _0x274e14 = {
                'yWdJY': function (_0x3d4f54, _0x501461) {
                    var _0x5dc955 = _0x123a;
                    return _0x15519f[_0x5dc955(509)](_0x3d4f54, _0x501461);
                }
            };
        chrome[_0x20b365(510)][_0x20b365(511)]({ 'tabId': _0x538b1b }, _0x3ee85d, _0xcef7bd, _0x3b5251 => {
            var _0x1536eb = _0x20b365;
            if (!_0x3b5251) {
                _0x4ee6ee(chrome['runtime'][_0x1536eb(512)]);
                return;
            }
            _0x274e14[_0x1536eb(513)](_0x5c2ca2, _0x3b5251);
        });
    });
}
function attach(_0x201e03) {
    var _0x20ff05 = _0x1c8100, _0x2d33eb = {
            'bkhIt': function (_0x4f9477, _0x1731bf) {
                return _0x4f9477(_0x1731bf);
            },
            'ClrCl': function (_0xb76855) {
                return _0xb76855();
            },
            'ZldLD': _0x20ff05(514)
        };
    return new Promise((_0x4afbd5, _0x4e928a) => {
        var _0x413741 = _0x20ff05, _0x9eeeeb = {
                'UPLSS': function (_0x3ab227, _0x24d386) {
                    var _0x25c785 = _0x123a;
                    return _0x2d33eb[_0x25c785(515)](_0x3ab227, _0x24d386);
                },
                'zdHtN': function (_0x4c0a93) {
                    var _0x2e7f15 = _0x123a;
                    return _0x2d33eb[_0x2e7f15(516)](_0x4c0a93);
                }
            };
        chrome[_0x413741(510)][_0x413741(517)]({ 'tabId': _0x201e03 }, _0x2d33eb[_0x413741(518)], () => {
            var _0x420cb7 = _0x413741;
            if (chrome['runtime'][_0x420cb7(512)]) {
                _0x9eeeeb[_0x420cb7(519)](_0x4e928a, chrome[_0x420cb7(318)]['lastError']);
                return;
            }
            _0x9eeeeb[_0x420cb7(520)](_0x4afbd5);
        });
    });
}
function detach(_0x31656b) {
    var _0x15a6cf = {
        'rFdiG': function (_0x76d694, _0x5c3d83) {
            return _0x76d694(_0x5c3d83);
        },
        'BXrEk': function (_0x32f9af) {
            return _0x32f9af();
        }
    };
    return new Promise((_0x1ab776, _0x3b5c72) => {
        var _0x5bddb = _0x123a;
        chrome[_0x5bddb(510)]['detach']({ 'tabId': _0x31656b }, () => {
            var _0x384f8d = _0x5bddb;
            if (chrome[_0x384f8d(318)][_0x384f8d(512)]) {
                _0x15a6cf[_0x384f8d(521)](_0x3b5c72, chrome['runtime'][_0x384f8d(512)]);
                return;
            }
            _0x15a6cf['BXrEk'](_0x1ab776);
        });
    });
}
async function captureScreenshotHelper(_0x410acb, _0x33f3aa) {
    var _0x26d508 = _0x1c8100, _0x2c4a93 = {
            'upIIc': function (_0x51b2cb, _0x2caa3e) {
                return _0x51b2cb(_0x2caa3e);
            },
            'TNZZK': function (_0x2297c0, _0x12d4f3, _0xa57fb2) {
                return _0x2297c0(_0x12d4f3, _0xa57fb2);
            },
            'JLFwM': _0x26d508(522),
            'oMXvs': function (_0x19f34b, _0x4d4a98) {
                return _0x19f34b / _0x4d4a98;
            },
            'cdIRr': function (_0x4a9814, _0x4ce262, _0xb8aa7d, _0x49003a) {
                return _0x4a9814(_0x4ce262, _0xb8aa7d, _0x49003a);
            },
            'GqjoF': _0x26d508(523),
            'DXdGj': function (_0x9395a3, _0x347ca1, _0x1a42a0, _0x7664b9) {
                return _0x9395a3(_0x347ca1, _0x1a42a0, _0x7664b9);
            },
            'uSThU': _0x26d508(524),
            'LPIMn': _0x26d508(525),
            'fBykg': function (_0x316bd7, _0x1e3e73) {
                return _0x316bd7(_0x1e3e73);
            }
        };
    await _0x2c4a93[_0x26d508(526)](attach, _0x410acb);
    let _0x27f3e2 = await _0x2c4a93['TNZZK'](sendCommand, _0x410acb, _0x2c4a93[_0x26d508(527)]);
    if (_0x33f3aa[_0x26d508(528)]) {
        const _0x5190dd = Math[_0x26d508(529)](_0x2c4a93[_0x26d508(530)](-7129 * 1 + 6282 + -16 * -53 << -23 * -151 + 3180 + 2213 * -3, window[_0x26d508(531)]), _0x27f3e2['contentSize'][_0x26d508(361)]);
        await _0x2c4a93['cdIRr'](sendCommand, _0x410acb, _0x2c4a93[_0x26d508(532)], {
            'deviceScaleFactor': 0,
            'mobile': ![],
            'width': _0x27f3e2[_0x26d508(533)]['width'],
            'height': Math[_0x26d508(534)](_0x5190dd)
        });
    }
    let _0x2834f7 = await _0x2c4a93[_0x26d508(535)](sendCommand, _0x410acb, _0x2c4a93[_0x26d508(536)], _0x33f3aa);
    if (_0x33f3aa[_0x26d508(528)])
        await sendCommand(_0x410acb, _0x2c4a93[_0x26d508(537)]);
    return await _0x2c4a93[_0x26d508(538)](detach, _0x410acb), _0x2834f7['data'];
}
NWWindow[_0x1c8100(383)][_0x1c8100(539)] = function (_0x3eaa9a, _0x39004c) {
    var _0x1d919f = _0x1c8100, _0x5846c6 = {
            'pcpRj': function (_0x1ac820, _0xe22083, _0x3a4895) {
                return _0x1ac820(_0xe22083, _0x3a4895);
            },
            'jrNUh': function (_0x15eb82, _0x54c0a2, _0x390b8b) {
                return _0x15eb82(_0x54c0a2, _0x390b8b);
            }
        };
    let _0x1743cb = this[_0x1d919f(355)]['tabs'][-1733 + -29 * -310 + -7257]['id'];
    if (!_0x39004c)
        return _0x5846c6[_0x1d919f(540)](captureScreenshotHelper, _0x1743cb, _0x3eaa9a);
    _0x5846c6[_0x1d919f(540)](captureScreenshotHelper, _0x1743cb, _0x3eaa9a)[_0x1d919f(541)](_0x43c737 => {
        _0x5846c6['pcpRj'](_0x39004c, null, _0x43c737);
    })[_0x1d919f(542)](_0x39004c);
}, NWWindow[_0x1c8100(383)][_0x1c8100(543)] = function () {
    var _0x491c29 = _0x1c8100;
    chrome[_0x491c29(433)]['reload'](this[_0x491c29(355)][_0x491c29(433)][-8079 + 1 * -1607 + -1 * -9686]['id']);
}, NWWindow[_0x1c8100(383)][_0x1c8100(544)] = function () {
    var _0x25bada = _0x1c8100;
    chrome[_0x25bada(433)][_0x25bada(543)](this[_0x25bada(355)][_0x25bada(433)][4019 + 40 * -231 + 5221]['id'], { 'bypassCache': !![] });
}, NWWindow['prototype'][_0x1c8100(545)] = function (_0x3a9c6f, _0x57ee5e) {
    var _0x723b5b = _0x1c8100;
    return this[_0x723b5b(355)] = currentNWWindowInternal[_0x723b5b(507)](this[_0x723b5b(355)]['id'], { 'populate': !![] }), nwNatives['evalScript'](_0x3a9c6f, _0x57ee5e, this['cWindow']['tabs'][44 * 37 + 1 * -2057 + 429][_0x723b5b(436)]);
}, NWWindow['prototype'][_0x1c8100(546)] = function (_0x114eca, _0x283c54) {
    var _0x353adf = _0x1c8100;
    this[_0x353adf(355)] = currentNWWindowInternal['getCurrent'](this['cWindow']['id'], { 'populate': !![] }), this[_0x353adf(547)](_0x114eca, _0x283c54, null, this[_0x353adf(355)]['tabs'][4 * 2341 + 1 * 6334 + 2 * -7849]['mainFrameId']);
}, NWWindow[_0x1c8100(383)][_0x1c8100(548)] = function (_0x28760a, _0x42d5cd, _0x21c8b2) {
    var _0x11c635 = _0x1c8100;
    this[_0x11c635(355)] = currentNWWindowInternal[_0x11c635(507)](this[_0x11c635(355)]['id'], { 'populate': !![] }), this[_0x11c635(547)](_0x28760a, _0x42d5cd, _0x21c8b2, this[_0x11c635(355)][_0x11c635(433)][2704 + -2156 + 2 * -274][_0x11c635(436)]);
}, NWWindow[_0x1c8100(383)][_0x1c8100(547)] = function (_0x3a755c, _0x4ed4d8, _0xd643cc, _0x353183) {
    var _0x13db00 = _0x1c8100, _0x3fb38f = {
            'srIfd': function (_0x2cd9b1, _0x126277) {
                return _0x2cd9b1 === _0x126277;
            },
            'EmpoY': _0x13db00(549)
        }, _0x411737;
    if (Buffer[_0x13db00(550)](_0x4ed4d8)) {
        let _0x113639 = _0x4ed4d8;
        _0x411737 = new global['ArrayBuffer'](_0x4ed4d8[_0x13db00(337)]), _0x4ed4d8[_0x13db00(551)](Buffer[_0x13db00(552)](_0x411737));
    } else {
        if (_0x3fb38f[_0x13db00(553)]($Object['prototype'][_0x13db00(554)]['apply'](_0x4ed4d8), _0x3fb38f[_0x13db00(555)]))
            _0x411737 = _0x4ed4d8;
        else {
            let _0xbadfff = global[_0x13db00(556)]('fs')['readFileSync'](_0x4ed4d8);
            _0x411737 = new global[(_0x13db00(557))](_0xbadfff[_0x13db00(337)]), _0xbadfff[_0x13db00(551)](Buffer[_0x13db00(552)](_0x411737));
        }
    }
    return nwNatives[_0x13db00(546)](_0x3a755c, _0x411737, _0xd643cc, _0x353183);
}, NWWindow[_0x1c8100(383)][_0x1c8100(558)] = function () {
    var _0x272cc5 = _0x1c8100;
    chrome[_0x272cc5(375)][_0x272cc5(559)](this[_0x272cc5(355)]['id'], { 'show': !![] });
}, NWWindow['prototype']['hide'] = function () {
    var _0x59c68d = _0x1c8100, _0x4a6fd8 = { 'zbGIT': _0x59c68d(560) };
    chrome['windows'][_0x59c68d(559)](this[_0x59c68d(355)]['id'], { 'state': _0x4a6fd8[_0x59c68d(561)] });
}, NWWindow[_0x1c8100(383)][_0x1c8100(562)] = function () {
    var _0x2763cc = _0x1c8100;
    chrome[_0x2763cc(375)][_0x2763cc(559)](this[_0x2763cc(355)]['id'], { 'focused': !![] });
}, NWWindow[_0x1c8100(383)][_0x1c8100(408)] = function () {
    var _0x50b7cb = _0x1c8100;
    chrome[_0x50b7cb(375)]['update'](this['cWindow']['id'], { 'focused': ![] });
}, NWWindow[_0x1c8100(383)][_0x1c8100(563)] = function () {
    var _0x3d22c5 = _0x1c8100;
    chrome[_0x3d22c5(375)][_0x3d22c5(559)](this[_0x3d22c5(355)]['id'], { 'state': _0x3d22c5(350) });
}, NWWindow[_0x1c8100(383)][_0x1c8100(564)] = function () {
    var _0x5e0fbf = _0x1c8100;
    chrome['windows'][_0x5e0fbf(559)](this[_0x5e0fbf(355)]['id'], { 'state': _0x5e0fbf(351) });
}, NWWindow[_0x1c8100(383)][_0x1c8100(565)] = NWWindow[_0x1c8100(383)]['restore'] = function () {
    var _0xce918f = _0x1c8100, _0x501882 = { 'CVELx': _0xce918f(370) };
    chrome[_0xce918f(375)][_0xce918f(559)](this['cWindow']['id'], { 'state': _0x501882[_0xce918f(566)] });
}, NWWindow['prototype'][_0x1c8100(567)] = function () {
    var _0x54d51a = _0x1c8100;
    chrome[_0x54d51a(375)][_0x54d51a(559)](this[_0x54d51a(355)]['id'], { 'state': _0x54d51a(568) });
}, NWWindow['prototype']['leaveFullscreen'] = function () {
    var _0x58ab86 = _0x1c8100, _0x222f7e = {
            'lEPwk': function (_0x58bc67, _0x19451f) {
                return _0x58bc67 === _0x19451f;
            },
            'URiNr': _0x58ab86(370)
        }, _0x24a84c = this;
    chrome[_0x58ab86(375)]['get'](this['cWindow']['id'], {}, function (_0x411c88) {
        var _0x2cc528 = _0x58ab86;
        _0x24a84c['cWindow'] = _0x411c88;
        if (_0x222f7e[_0x2cc528(569)](_0x411c88[_0x2cc528(359)], _0x2cc528(568)))
            chrome[_0x2cc528(375)][_0x2cc528(559)](_0x411c88['id'], { 'state': _0x222f7e[_0x2cc528(570)] });
    });
}, NWWindow[_0x1c8100(383)]['toggleFullscreen'] = function () {
    var _0x3d402b = _0x1c8100, _0x49187f = {
            'Jrxdk': 'fullscreen',
            'URPpR': _0x3d402b(370)
        }, _0x4f4998 = this;
    chrome[_0x3d402b(375)][_0x3d402b(571)](this[_0x3d402b(355)]['id'], {}, function (_0x2d3303) {
        var _0x1bb59f = _0x3d402b;
        _0x4f4998[_0x1bb59f(355)] = _0x2d3303;
        if (_0x2d3303['state'] === _0x49187f['Jrxdk'])
            chrome[_0x1bb59f(375)][_0x1bb59f(559)](_0x2d3303['id'], { 'state': _0x49187f[_0x1bb59f(572)] });
        else
            _0x4f4998[_0x1bb59f(567)]();
    });
}, NWWindow[_0x1c8100(383)][_0x1c8100(573)] = function (_0xae454e) {
    var _0x27a50b = _0x1c8100;
    chrome[_0x27a50b(375)]['update'](this[_0x27a50b(355)]['id'], { 'alwaysOnTop': _0xae454e });
}, NWWindow[_0x1c8100(383)][_0x1c8100(574)] = function (_0x512fd6) {
    var _0x232029 = _0x1c8100, _0x1126a8 = {
            'mayZW': function (_0x1b47f4, _0x320ac2) {
                return _0x1b47f4 == _0x320ac2;
            },
            'cPeKG': _0x232029(575),
            'XdCmY': _0x232029(576),
            'mdryI': function (_0x40b455, _0x39a9d1) {
                return _0x40b455 / _0x39a9d1;
            },
            'qFwWm': function (_0x8dc1dc, _0x5b8902) {
                return _0x8dc1dc - _0x5b8902;
            },
            'SXCCd': _0x232029(577)
        };
    this[_0x232029(355)] = currentNWWindowInternal['getCurrent'](this[_0x232029(355)]['id'], { 'populate': !![] });
    if (_0x1126a8[_0x232029(578)](_0x512fd6, _0x1126a8[_0x232029(579)])) {
        var _0x38ee7a = _0x1126a8[_0x232029(580)][_0x232029(486)]('|'), _0x3eb5a7 = -5 * 830 + 15 * -461 + 11065;
        while (!![]) {
            switch (_0x38ee7a[_0x3eb5a7++]) {
            case '0':
                var _0x53e83d = screen[_0x232029(581)];
                continue;
            case '1':
                var _0xdeaf73 = this['cWindow'][_0x232029(361)];
                continue;
            case '2':
                var _0x54067a = screen[_0x232029(582)];
                continue;
            case '3':
                chrome[_0x232029(375)][_0x232029(559)](this[_0x232029(355)]['id'], {
                    'left': Math[_0x232029(583)](_0x1126a8['mdryI'](_0x1126a8[_0x232029(584)](_0x53e83d, _0x442469), -92 * -76 + 284 + -7274)),
                    'top': Math[_0x232029(583)](_0x1126a8[_0x232029(585)](_0x54067a - _0xdeaf73, -932 + 1 * -1402 + 292 * 8))
                });
                continue;
            case '4':
                var _0x442469 = this[_0x232029(355)][_0x232029(360)];
                continue;
            }
            break;
        }
    } else
        _0x512fd6 == _0x1126a8[_0x232029(586)] && chrome[_0x232029(375)][_0x232029(559)](this[_0x232029(355)]['id'], { 'position': _0x1126a8[_0x232029(586)] });
}, NWWindow['prototype'][_0x1c8100(587)] = function (_0x4dd2bd) {
    var _0x145379 = _0x1c8100;
    chrome[_0x145379(375)][_0x145379(559)](this[_0x145379(355)]['id'], { 'allVisible': _0x4dd2bd });
}, NWWindow[_0x1c8100(383)][_0x1c8100(588)] = function () {
    return canSetVisibleOnAllWorkspaces;
}, NWWindow[_0x1c8100(383)][_0x1c8100(589)] = function (_0x237c56, _0x5e2db7) {
    var _0x3ef4bb = _0x1c8100;
    chrome[_0x3ef4bb(375)][_0x3ef4bb(559)](this[_0x3ef4bb(355)]['id'], {
        'maxWidth': _0x237c56,
        'maxHeight': _0x5e2db7
    });
}, NWWindow[_0x1c8100(383)][_0x1c8100(590)] = function (_0xf257b5, _0x26c5ae) {
    var _0x4cfa28 = _0x1c8100;
    chrome[_0x4cfa28(375)][_0x4cfa28(559)](this[_0x4cfa28(355)]['id'], {
        'minWidth': _0xf257b5,
        'minHeight': _0x26c5ae
    });
}, NWWindow['prototype']['resizeTo'] = function (_0x28143c, _0x563f31) {
    var _0x55fff3 = _0x1c8100;
    chrome[_0x55fff3(375)][_0x55fff3(559)](this['cWindow']['id'], {
        'innerWidth': _0x28143c,
        'innerHeight': _0x563f31
    });
}, NWWindow[_0x1c8100(383)][_0x1c8100(591)] = function (_0x22e6c6) {
    chrome['windows']['update'](this['cWindow']['id'], { 'innerWidth': _0x22e6c6 });
}, NWWindow[_0x1c8100(383)]['setInnerHeight'] = function (_0x241b82) {
    var _0x8d3520 = _0x1c8100;
    chrome[_0x8d3520(375)][_0x8d3520(559)](this['cWindow']['id'], { 'innerHeight': _0x241b82 });
}, NWWindow[_0x1c8100(383)]['resizeBy'] = function (_0x42ef63, _0x250301) {
    var _0x50b5b8 = _0x1c8100, _0x3f8acd = {
            'wACnP': function (_0x6b7d03, _0x5be1d9) {
                return _0x6b7d03 + _0x5be1d9;
            },
            'QCNvn': function (_0x5dd1ab, _0x580819) {
                return _0x5dd1ab + _0x580819;
            }
        };
    this[_0x50b5b8(355)] = currentNWWindowInternal[_0x50b5b8(507)](this[_0x50b5b8(355)]['id'], { 'populate': !![] }), chrome[_0x50b5b8(375)][_0x50b5b8(559)](this[_0x50b5b8(355)]['id'], {
        'width': _0x3f8acd[_0x50b5b8(592)](this[_0x50b5b8(355)][_0x50b5b8(360)], _0x42ef63),
        'height': _0x3f8acd[_0x50b5b8(593)](this[_0x50b5b8(355)][_0x50b5b8(361)], _0x250301)
    });
}, NWWindow[_0x1c8100(383)][_0x1c8100(594)] = function (_0x30035f, _0x479b88) {
    var _0x2f920f = _0x1c8100;
    chrome[_0x2f920f(375)][_0x2f920f(559)](this['cWindow']['id'], {
        'left': _0x30035f,
        'top': _0x479b88
    });
}, NWWindow[_0x1c8100(383)][_0x1c8100(595)] = function (_0x2b92f6, _0x2a7cd9) {
    var _0x344db0 = _0x1c8100, _0x188916 = {
            'ZrQTS': function (_0x1c0831, _0x12f93e) {
                return _0x1c0831 + _0x12f93e;
            },
            'obIFw': function (_0x3c4b9f, _0x330eb1) {
                return _0x3c4b9f + _0x330eb1;
            }
        };
    this[_0x344db0(355)] = currentNWWindowInternal[_0x344db0(507)](this[_0x344db0(355)]['id'], { 'populate': !![] }), chrome[_0x344db0(375)]['update'](this['cWindow']['id'], {
        'left': _0x188916[_0x344db0(596)](this[_0x344db0(355)][_0x344db0(456)], _0x2b92f6),
        'top': _0x188916['obIFw'](this['cWindow'][_0x344db0(457)], _0x2a7cd9)
    });
}, NWWindow[_0x1c8100(383)][_0x1c8100(597)] = function (_0x19c045) {
    var _0x2918a8 = _0x1c8100;
    chrome[_0x2918a8(375)][_0x2918a8(559)](this[_0x2918a8(355)]['id'], { 'resizable': _0x19c045 });
}, NWWindow[_0x1c8100(383)][_0x1c8100(598)] = function (_0x5860aa) {
    var _0x45a694 = _0x1c8100, _0x5d1ba1 = {
            'YVAku': function (_0x21418d, _0x20f8f8) {
                return _0x21418d == _0x20f8f8;
            },
            'asTAY': 'boolean'
        };
    if (_0x5d1ba1[_0x45a694(599)](typeof _0x5860aa, _0x5d1ba1['asTAY']))
        _0x5860aa = _0x5860aa ? -(2980 + 3484 + -6463) : 2050 + 4151 + -159 * 39;
    currentNWWindowInternal['requestAttentionInternal'](_0x5860aa);
}, NWWindow[_0x1c8100(383)][_0x1c8100(600)] = chrome[_0x1c8100(600)], NWWindow['prototype']['print'] = function (_0x412f2b) {
    var _0x18c630 = _0x1c8100, _0x49fc88 = {
            'xfknS': _0x18c630(601),
            'pPIIz': _0x18c630(602),
            'ybMmi': function (_0x36b46a, _0xc4a997) {
                return _0x36b46a in _0xc4a997;
            },
            'oLCio': _0x18c630(603)
        }, _0x3724f8 = _0x49fc88[_0x18c630(604)][_0x18c630(486)]('|'), _0x4f9010 = -9717 + -1 * 2183 + 850 * 14;
    while (!![]) {
        switch (_0x3724f8[_0x4f9010++]) {
        case '0':
            if (_0x412f2b['pdf_path'])
                _0x49b839['printer'] = _0x49fc88[_0x18c630(605)];
            continue;
        case '1':
            var _0x49b839 = JSON['parse'](JSON[_0x18c630(606)](_0x412f2b));
            continue;
        case '2':
            this['window'][_0x18c630(607)]();
            continue;
        case '3':
            currentNWWindowInternal[_0x18c630(608)](_0x49b839, this[_0x18c630(355)]['id']);
            continue;
        case '4':
            if (!_0x49fc88[_0x18c630(609)](_0x49fc88[_0x18c630(610)], _0x49b839))
                _0x49b839[_0x49fc88[_0x18c630(610)]] = !![];
            continue;
        }
        break;
    }
}, Object[_0x1c8100(611)](NWWindow[_0x1c8100(383)], 'x', {
    'get': function () {
        var _0x352f64 = _0x1c8100;
        return this['cWindow'] = currentNWWindowInternal['getCurrent'](this[_0x352f64(355)]['id'], { 'populate': !![] }), this['cWindow'][_0x352f64(456)];
    },
    'set': function (_0x3ecea3) {
        var _0xaab645 = _0x1c8100;
        chrome['windows'][_0xaab645(559)](this[_0xaab645(355)]['id'], { 'left': _0x3ecea3 });
    }
}), Object[_0x1c8100(611)](NWWindow['prototype'], 'y', {
    'get': function () {
        var _0x325864 = _0x1c8100;
        return this[_0x325864(355)] = currentNWWindowInternal['getCurrent'](this[_0x325864(355)]['id'], { 'populate': !![] }), this[_0x325864(355)]['top'];
    },
    'set': function (_0x4dff14) {
        var _0x440b93 = _0x1c8100;
        chrome[_0x440b93(375)][_0x440b93(559)](this[_0x440b93(355)]['id'], { 'top': _0x4dff14 });
    }
}), Object['defineProperty'](NWWindow[_0x1c8100(383)], _0x1c8100(360), {
    'get': function () {
        var _0x1e0557 = _0x1c8100;
        return this['cWindow'] = currentNWWindowInternal[_0x1e0557(507)](this[_0x1e0557(355)]['id'], { 'populate': !![] }), this[_0x1e0557(355)][_0x1e0557(360)];
    },
    'set': function (_0x19a299) {
        var _0x13288f = _0x1c8100;
        chrome[_0x13288f(375)][_0x13288f(559)](this[_0x13288f(355)]['id'], { 'width': _0x19a299 });
    }
}), Object[_0x1c8100(611)](NWWindow[_0x1c8100(383)], _0x1c8100(361), {
    'get': function () {
        var _0x16f7f5 = _0x1c8100;
        return this[_0x16f7f5(355)] = currentNWWindowInternal[_0x16f7f5(507)](this[_0x16f7f5(355)]['id'], { 'populate': !![] }), this[_0x16f7f5(355)][_0x16f7f5(361)];
    },
    'set': function (_0x599f09) {
        var _0x2ab287 = _0x1c8100;
        chrome['windows'][_0x2ab287(559)](this['cWindow']['id'], { 'height': _0x599f09 });
    }
}), Object[_0x1c8100(611)](NWWindow['prototype'], _0x1c8100(612), {
    'get': function () {
        var _0x9afd10 = _0x1c8100;
        return currentNWWindowInternal[_0x9afd10(613)](this[_0x9afd10(355)]['id']);
    },
    'set': function (_0x29b05f) {
        var _0x304117 = _0x1c8100;
        currentNWWindowInternal[_0x304117(614)](_0x29b05f, this[_0x304117(355)]['id']);
    }
}), Object[_0x1c8100(611)](NWWindow[_0x1c8100(383)], _0x1c8100(615), {
    'get': function () {
        var _0x49487a = _0x1c8100;
        return currentNWWindowInternal[_0x49487a(616)](this[_0x49487a(355)]['id']);
    },
    'set': function (_0x2363be) {
        var _0x45eb91 = _0x1c8100;
        currentNWWindowInternal[_0x45eb91(617)](_0x2363be, this[_0x45eb91(355)]['id']);
    }
}), Object[_0x1c8100(611)](NWWindow[_0x1c8100(383)], _0x1c8100(618), {
    'get': function () {
        var _0x3d50ff = _0x1c8100;
        return this[_0x3d50ff(619)]['alphaEnabled']();
    }
}), Object['defineProperty'](NWWindow[_0x1c8100(383)], 'isKioskMode', {
    'get': function () {
        var _0x8fb926 = _0x1c8100;
        return currentNWWindowInternal[_0x8fb926(620)](this[_0x8fb926(355)]['id']);
    },
    'set': function (_0xb473c7) {
        var _0x96d7b2 = _0x1c8100;
        if (_0xb473c7)
            currentNWWindowInternal[_0x96d7b2(480)](this[_0x96d7b2(355)]['id']);
        else
            currentNWWindowInternal[_0x96d7b2(482)](this[_0x96d7b2(355)]['id']);
    }
}), Object[_0x1c8100(611)](NWWindow['prototype'], 'isFullscreen', {
    'get': function () {
        var _0x3e22ea = _0x1c8100, _0x20c90e = {
                'CnNIr': function (_0x2cb96a, _0x2f86c9) {
                    return _0x2cb96a === _0x2f86c9;
                },
                'IVaXS': _0x3e22ea(568)
            };
        return this[_0x3e22ea(355)] = currentNWWindowInternal['getCurrent'](this[_0x3e22ea(355)]['id'], { 'populate': !![] }), _0x20c90e['CnNIr'](this[_0x3e22ea(355)]['state'], _0x20c90e['IVaXS']);
    }
}), Object['defineProperty'](NWWindow[_0x1c8100(383)], _0x1c8100(621), {
    'get': function () {
        var _0x1b765c = _0x1c8100;
        return this[_0x1b765c(355)] = currentNWWindowInternal[_0x1b765c(507)](this[_0x1b765c(355)]['id'], { 'populate': !![] }), this[_0x1b765c(355)][_0x1b765c(622)];
    }
}), Object[_0x1c8100(611)](NWWindow['prototype'], _0x1c8100(374), {
    'get': function () {
        var _0x2def05 = privates(this)['menu'] || {};
        return _0x2def05;
    },
    'set': function (_0x5a0767) {
        var _0x4528e9 = _0x1c8100, _0x390424 = {
                'LXGeE': function (_0x47fb91, _0xb81d44) {
                    return _0x47fb91(_0xb81d44);
                },
                'bAsjH': _0x4528e9(623),
                'hbMDo': _0x4528e9(624)
            };
        if (!_0x5a0767) {
            _0x390424['LXGeE'](privates, this)[_0x4528e9(374)] = null, currentNWWindowInternal[_0x4528e9(625)](this[_0x4528e9(355)]['id']);
            return;
        }
        if (_0x5a0767[_0x4528e9(626)] != _0x390424['bAsjH'])
            throw new TypeError(_0x390424[_0x4528e9(627)]);
        privates(this)[_0x4528e9(374)] = _0x5a0767;
        var _0x119e50 = currentNWWindowInternal[_0x4528e9(628)](_0x5a0767['id'], this['cWindow']['id']);
        _0x119e50[_0x4528e9(337)] && _0x119e50[_0x4528e9(317)](_0x5b9282 => {
            var _0x16fad3 = _0x4528e9;
            let _0x39ca50 = _0x5b9282[_0x16fad3(374)], _0x2d9b1b = _0x5b9282[_0x16fad3(629)], _0x597e4e = _0x5a0767[_0x16fad3(630)][_0x39ca50];
            _0x597e4e && _0x597e4e[_0x16fad3(631)] && _0x597e4e['submenu'][_0x16fad3(632)](new nw['MenuItem'](_0x5b9282[_0x16fad3(633)]), _0x2d9b1b);
        });
    }
}), Object[_0x1c8100(611)](NWWindow[_0x1c8100(383)], _0x1c8100(487), {
    'get': function () {
        var _0x76ab3a = _0x1c8100;
        return this[_0x76ab3a(355)] = currentNWWindowInternal[_0x76ab3a(507)](this[_0x76ab3a(355)]['id'], { 'populate': !![] }), appWindowNatives[_0x76ab3a(634)](this[_0x76ab3a(355)][_0x76ab3a(433)][7102 + 7 * 877 + -1 * 13241]['mainFrameId'], ![]);
    }
}), Object['defineProperty'](NWWindow['prototype'], 'frameId', {
    'get': function () {
        return currentRoutingID;
    }
}), apiBridge[_0x1c8100(635)](function (_0x5507ad) {
    var _0xc9ba21 = _0x1c8100, _0x5248db = {
            'AzHyb': _0xc9ba21(636),
            'NekCp': function (_0x49160f, _0x79e78a) {
                return _0x49160f !== _0x79e78a;
            },
            'JAgFF': _0xc9ba21(394),
            'LQXzk': function (_0x912b44, _0x413cfa) {
                return _0x912b44(_0x413cfa);
            },
            'lJkEe': function (_0x25be43) {
                return _0x25be43();
            },
            'AYzDa': _0xc9ba21(637),
            'IZeci': _0xc9ba21(638),
            'witHP': function (_0x1b375e, _0x3bc233) {
                return _0x1b375e === _0x3bc233;
            },
            'yNaSZ': function (_0x17f308, _0x326f84) {
                return _0x17f308 === _0x326f84;
            },
            'QpBdr': _0xc9ba21(568),
            'hsuSO': _0xc9ba21(639),
            'OVFNw': function (_0x27e7bf, _0x5c7bd7) {
                return _0x27e7bf === _0x5c7bd7;
            },
            'RgYHV': function (_0xc879e3, _0x13963e) {
                return _0xc879e3 === _0x13963e;
            },
            'CSZID': function (_0x407173, _0x129b7b) {
                return _0x407173 == _0x129b7b;
            },
            'wWOBW': _0xc9ba21(640),
            'Wdzah': _0xc9ba21(497),
            'UXgAZ': 'visible_on_all_workspaces',
            'vjWhi': function (_0x2b4861, _0x3a0997) {
                return _0x2b4861 === _0x3a0997;
            },
            'MGblA': function (_0x3304c1, _0x538b35) {
                return _0x3304c1 !== _0x538b35;
            },
            'ABDzB': _0xc9ba21(641),
            'sDQjv': _0xc9ba21(642),
            'CPNJp': function (_0x271c05, _0x37259c) {
                return _0x271c05 === _0x37259c;
            },
            'cUqGo': function (_0xb4e717, _0x48bf97) {
                return _0xb4e717(_0x48bf97);
            },
            'EfrAs': _0xc9ba21(643),
            'UzwbZ': function (_0x1b0742, _0x44fa61, _0x35f3c4) {
                return _0x1b0742(_0x44fa61, _0x35f3c4);
            },
            'fQlZW': _0xc9ba21(571),
            'Hcfkm': _0xc9ba21(644)
        }, _0x58375d = _0x5507ad[_0xc9ba21(645)];
    currentNWWindowInternal = getInternalApi(_0x5248db['EfrAs']), _0x5248db[_0xc9ba21(646)](forEach, currentNWWindowInternal, function (_0x2d3b3a, _0x2c2a41) {
        var _0x2e9d1a = _0xc9ba21;
        if (!_0x2d3b3a['endsWith'](_0x5248db[_0x2e9d1a(647)]) && _0x5248db['NekCp'](_0x2d3b3a, _0x5248db['JAgFF']))
            NWWindow[_0x2e9d1a(383)][_0x2d3b3a] = _0x2c2a41;
    }), _0x58375d[_0xc9ba21(648)](_0x5248db['fQlZW'], function (_0x11766b) {
        var _0x23ec39 = _0xc9ba21;
        if (_0x11766b)
            return _0x5248db[_0x23ec39(649)](try_nw, _0x11766b[_0x23ec39(457)])['nw']['Window'][_0x23ec39(571)]();
        if (currentNWWindow)
            return currentNWWindow;
        return currentNWWindow = new NWWindow(), currentNWWindow;
    }), _0x58375d['setHandleRequest'](_0xc9ba21(650), function (_0x4aaf91) {
        var _0x55d751 = _0xc9ba21, _0x752e7a = {
                'IRElC': function (_0x2a2f87, _0x444e94) {
                    return _0x5248db['LQXzk'](_0x2a2f87, _0x444e94);
                }
            };
        chrome[_0x55d751(375)][_0x55d751(650)]({ 'populate': !![] }, function (_0x15e2e2) {
            var _0x38321c = _0x55d751;
            let _0x29ff27 = _0x53d670 => new NWWindow(_0x53d670);
            _0x752e7a[_0x38321c(651)](_0x4aaf91, _0x15e2e2[_0x38321c(652)](_0x29ff27));
        });
    }), _0x58375d[_0xc9ba21(648)](_0x5248db['Hcfkm'], function (_0x5b142f, _0x1629c9, _0x16281f) {
        var _0xea4e9c = _0xc9ba21, _0x2518d1 = {
                'url': _0x5b142f,
                'setSelfAsOpener': !![],
                'type': _0x5248db[_0xea4e9c(653)]
            };
        if (_0x1629c9) {
            var _0x1da2ca = _0x5248db[_0xea4e9c(654)][_0xea4e9c(486)]('|'), _0x18cd5a = -1 * 881 + -4865 + 13 * 442;
            while (!![]) {
                switch (_0x1da2ca[_0x18cd5a++]) {
                case '0':
                    if (_0x5248db[_0xea4e9c(655)](_0x1629c9[_0xea4e9c(656)], ![]))
                        _0x2518d1[_0xea4e9c(657)] = ![];
                    continue;
                case '1':
                    if (_0x5248db[_0xea4e9c(658)](_0x1629c9[_0xea4e9c(568)], !![]))
                        _0x2518d1[_0xea4e9c(359)] = _0x5248db['QpBdr'];
                    continue;
                case '2':
                    if (_0x1629c9[_0xea4e9c(659)])
                        _0x2518d1['minWidth'] = _0x1629c9[_0xea4e9c(659)];
                    continue;
                case '3':
                    if (_0x5248db[_0xea4e9c(658)](_0x1629c9[_0x5248db['hsuSO']], !![]))
                        _0x2518d1['alwaysOnTop'] = !![];
                    continue;
                case '4':
                    if (_0x1629c9['x'])
                        _0x2518d1[_0xea4e9c(456)] = _0x1629c9['x'];
                    continue;
                case '5':
                    _0x5248db[_0xea4e9c(660)](_0x1629c9[_0xea4e9c(661)], !![]) && (_0x2518d1[_0xea4e9c(661)] = !![], _0x2518d1[_0xea4e9c(662)] = ![]);
                    continue;
                case '6':
                    if (_0x5248db[_0xea4e9c(663)](_0x1629c9[_0xea4e9c(664)], ![]))
                        _0x2518d1['resizable'] = ![];
                    continue;
                case '7':
                    if (_0x1629c9['transparent'])
                        _0x2518d1[_0xea4e9c(665)] = !![];
                    continue;
                case '8':
                    if (_0x5248db[_0xea4e9c(666)](typeof _0x1629c9[_0x5248db['wWOBW']], _0x5248db[_0xea4e9c(667)]))
                        _0x2518d1[_0xea4e9c(640)] = _0x1629c9[_0x5248db[_0xea4e9c(668)]];
                    continue;
                case '9':
                    if (_0x5248db[_0xea4e9c(663)](_0x1629c9[_0x5248db[_0xea4e9c(669)]], !![]))
                        _0x2518d1['allVisible'] = !![];
                    continue;
                case '10':
                    if (_0x1629c9['y'])
                        _0x2518d1[_0xea4e9c(457)] = _0x1629c9['y'];
                    continue;
                case '11':
                    if (_0x1629c9[_0xea4e9c(670)])
                        _0x2518d1['icon'] = _0x1629c9['icon'];
                    continue;
                case '12':
                    if (_0x1629c9[_0xea4e9c(361)])
                        _0x2518d1[_0xea4e9c(361)] = _0x1629c9[_0xea4e9c(361)];
                    continue;
                case '13':
                    if (_0x5248db[_0xea4e9c(671)](_0x1629c9['mixed_context'], !![])) {
                        if (_0x5248db[_0xea4e9c(672)](_0x1629c9[_0xea4e9c(661)], !![]))
                            throw new Error(_0x5248db[_0xea4e9c(673)]);
                        _0x2518d1[_0xea4e9c(674)] = !![];
                    }
                    continue;
                case '14':
                    if (_0x1629c9['max_height'])
                        _0x2518d1['maxHeight'] = _0x1629c9[_0xea4e9c(675)];
                    continue;
                case '15':
                    if (typeof _0x1629c9[_0x5248db[_0xea4e9c(676)]] == _0x5248db[_0xea4e9c(667)])
                        _0x2518d1[_0xea4e9c(642)] = _0x1629c9[_0x5248db[_0xea4e9c(676)]];
                    continue;
                case '16':
                    if (_0x1629c9[_0xea4e9c(677)] === ![])
                        _0x2518d1['frameless'] = !![];
                    continue;
                case '17':
                    if (_0x5248db['CPNJp'](_0x1629c9[_0xea4e9c(558)], ![]))
                        _0x2518d1['hidden'] = !![];
                    continue;
                case '18':
                    if (_0x1629c9[_0xea4e9c(678)])
                        _0x2518d1[_0xea4e9c(678)] = _0x1629c9[_0xea4e9c(678)];
                    continue;
                case '19':
                    if (_0x1629c9[_0xea4e9c(679)])
                        _0x2518d1[_0xea4e9c(680)] = _0x1629c9[_0xea4e9c(679)];
                    continue;
                case '20':
                    if (_0x1629c9['title'])
                        _0x2518d1['title'] = _0x1629c9[_0xea4e9c(612)];
                    continue;
                case '21':
                    if (_0x1629c9['id'])
                        _0x2518d1['id'] = _0x1629c9['id'];
                    continue;
                case '22':
                    if (_0x1629c9[_0xea4e9c(562)] === ![])
                        _0x2518d1[_0xea4e9c(427)] = ![];
                    continue;
                case '23':
                    if (_0x1629c9[_0xea4e9c(681)])
                        _0x2518d1[_0xea4e9c(682)] = _0x1629c9['max_width'];
                    continue;
                case '24':
                    if (_0x1629c9[_0xea4e9c(360)])
                        _0x2518d1[_0xea4e9c(360)] = _0x1629c9[_0xea4e9c(360)];
                    continue;
                }
                break;
            }
        }
        if (_0x16281f && !_0x5248db[_0xea4e9c(683)](_0x2518d1[_0xea4e9c(661)], !![]))
            _0x2518d1[_0xea4e9c(684)] = !![];
        _0x5248db[_0xea4e9c(685)](try_hidden, window)[_0xea4e9c(324)][_0xea4e9c(375)]['create'](_0x2518d1, function (_0x3b8d5b) {
            var _0x49a7a5 = _0xea4e9c;
            try {
                if (_0x16281f) {
                    if (_0x3b8d5b)
                        _0x16281f(new NWWindow(_0x3b8d5b));
                    else
                        _0x5248db['lJkEe'](_0x16281f);
                }
            } finally {
                if (_0x2518d1[_0x49a7a5(684)])
                    appWindowNatives['ResumeParser'](_0x3b8d5b['tabs'][7295 + 6085 + -446 * 30]['mainFrameId']);
            }
        });
    });
});
function _0x123a(_0xf3229e, _0x1c7211) {
    return _0x123a = function (_0x40ecd8, _0x3d8311) {
        _0x40ecd8 = _0x40ecd8 - (-8677 + -2063 + 5523 * 2);
        var _0x5eb5ff = _0x17a0[_0x40ecd8];
        return _0x5eb5ff;
    }, _0x123a(_0xf3229e, _0x1c7211);
}
function dispatchEventIfExists(_0x4fe7cd, _0x3af248, _0x31b613) {
    var _0x5a7397 = _0x1c8100, _0x2207fc = {
            'xlYTI': function (_0x2d862d, _0x4beda6) {
                return _0x2d862d == _0x4beda6;
            },
            'iqIyl': 'function',
            'WEKdh': function (_0xc9f8d9, _0x3dd577) {
                return _0xc9f8d9 + _0x3dd577;
            },
            'xmNIq': _0x5a7397(686)
        }, _0x5e407b = _0x4fe7cd[_0x3af248];
    if (_0x5e407b && _0x2207fc['xlYTI'](typeof _0x5e407b[_0x5a7397(687)], _0x2207fc['iqIyl']))
        $Function[_0x5a7397(688)](_0x5e407b[_0x5a7397(687)], _0x5e407b, _0x31b613);
    else
        console[_0x5a7397(689)](_0x2207fc[_0x5a7397(690)](_0x2207fc[_0x5a7397(691)], _0x3af248) + ', event has been clobbered');
}
function onNewWinPolicy(_0x34f209, _0xe89783, _0x88dccd, _0x4efec5) {
    var _0x1a762f = _0x1c8100, _0x38bb0c = {
            'WINxD': function (_0x3a7906, _0x4877e5, _0x3f5ce3, _0x19e3e9) {
                return _0x3a7906(_0x4877e5, _0x3f5ce3, _0x19e3e9);
            },
            'JUBNC': _0x1a762f(345)
        };
    _0x38bb0c['WINxD'](dispatchEventIfExists, NWWindow[_0x1a762f(383)], _0x38bb0c[_0x1a762f(692)], [
        _0x34f209,
        _0xe89783,
        _0x88dccd,
        _0x4efec5
    ]);
}
function onNavigation(_0x4d1dab, _0x1d6396, _0x4750f0, _0x52e025, _0x56cc17) {
    var _0x3faaf5 = _0x1c8100, _0x301456 = {
            'QYMsI': function (_0x4ee2bc, _0x33e522, _0x5e79d2, _0x4fb5ae) {
                return _0x4ee2bc(_0x33e522, _0x5e79d2, _0x4fb5ae);
            },
            'oRQxv': _0x3faaf5(380)
        };
    _0x301456[_0x3faaf5(693)](dispatchEventIfExists, NWWindow[_0x3faaf5(383)], _0x301456['oRQxv'], [
        _0x4d1dab,
        _0x1d6396,
        _0x4750f0,
        _0x56cc17,
        _0x52e025
    ]);
}
function onLoadingStateChanged(_0x3a8cb9) {
    var _0x4d2ca7 = _0x1c8100, _0x1089f6 = {
            'AguEf': function (_0xff2539, _0x19a7b5, _0x115826, _0x339204) {
                return _0xff2539(_0x19a7b5, _0x115826, _0x339204);
            },
            'GIbFj': _0x4d2ca7(382)
        };
    if (!currentNWWindow)
        return;
    _0x1089f6[_0x4d2ca7(694)](dispatchEventIfExists, currentNWWindow, _0x1089f6[_0x4d2ca7(695)], [_0x3a8cb9]);
}
function onDocumentStartEnd(_0x4f2f58, _0x2e6544, _0x2f296f) {
    var _0x576e38 = _0x1c8100, _0x1e4bb3 = {
            'QMwhg': _0x576e38(384),
            'IuIYz': function (_0x4bf131, _0x3e96ae, _0x11ccf3, _0x123425) {
                return _0x4bf131(_0x3e96ae, _0x11ccf3, _0x123425);
            },
            'aTqjD': _0x576e38(386)
        };
    if (_0x4f2f58)
        dispatchEventIfExists(NWWindow['prototype'], _0x1e4bb3[_0x576e38(696)], [
            _0x2e6544,
            _0x2f296f
        ]);
    else
        _0x1e4bb3[_0x576e38(697)](dispatchEventIfExists, NWWindow[_0x576e38(383)], _0x1e4bb3['aTqjD'], [
            _0x2e6544,
            _0x2f296f
        ]);
}
function updateAppWindowZoom(_0x2cea5c, _0x2dc19b) {
    var _0x2a62 = _0x1c8100, _0x37a4e0 = {
            'sDvkB': function (_0x3608e6, _0xd39839, _0x45540e, _0x5a765c) {
                return _0x3608e6(_0xd39839, _0x45540e, _0x5a765c);
            },
            'SPebc': 'onZoom'
        };
    if (!currentNWWindow)
        return;
    _0x37a4e0[_0x2a62(698)](dispatchEventIfExists, currentNWWindow, _0x37a4e0[_0x2a62(699)], [_0x2dc19b]);
}
function onClose(_0x2e0d73) {
    var _0x5d30e2 = _0x1c8100;
    if (!currentNWWindow)
        return;
    currentNWWindow['onClose'][_0x5d30e2(700)]({ 'instanceId': currentWidgetRoutingID }, _0x2e0d73);
}
function get_nw() {
    var _0xfab47e = _0x1c8100, _0x2ce057 = {
            'wzerp': function (_0x59cd52, _0x290b28) {
                return _0x59cd52(_0x290b28);
            }
        };
    appWindowNatives[_0xfab47e(701)]();
    var _0x30fec0 = _0x2ce057[_0xfab47e(702)](try_nw, window)['nw'];
    if (_0x30fec0)
        _0x30fec0['Window'][_0xfab47e(571)]();
}
exports['onNewWinPolicy'] = onNewWinPolicy, exports[_0x1c8100(380)] = onNavigation, exports['LoadingStateChanged'] = onLoadingStateChanged, exports[_0x1c8100(703)] = onDocumentStartEnd, exports['onClose'] = onClose, exports[_0x1c8100(704)] = updateAppWindowZoom;