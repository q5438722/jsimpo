var directivesModule = angular[_0x3bd682(472)]('directives', []);
directivesModule['directive'](_0x3bd682(473), [
    '$anchorScroll',
    '$location',
    function (_0x425d2a, _0x5208c2) {
        return function _0x4a9291(_0x418e49, _0x44a270) {
            var _0x19dcc6 = _0x1f02;
            _0x44a270['on'](_0x19dcc6(474), function (_0x3ff49f) {
                _0x5208c2['hash'](''), _0x418e49['$apply'](_0x425d2a);
            });
        };
    }
])[_0x3bd682(475)](_0x3bd682(476), function () {
    return {
        'restrict': 'E',
        'terminal': !![],
        'compile': function (_0x2c4f21) {
            var _0x49a18f = _0x1f02, _0x1a1ff8 = _0x2c4f21[_0x49a18f(477)](_0x49a18f(478)), _0x3d48e8 = /lang-(\S+)/[_0x49a18f(479)](_0x2c4f21[0][_0x49a18f(480)]), _0x12a5d7 = _0x3d48e8 && _0x3d48e8[1], _0x2a576f = _0x2c4f21[_0x49a18f(481)]();
            _0x2c4f21['html'](window[_0x49a18f(482)](_0x2a576f, _0x12a5d7, _0x1a1ff8));
        }
    };
})[_0x3bd682(475)]('scrollYOffsetElement', [
    _0x3bd682(483),
    function (_0x3534e7) {
        return function (_0x23e3ab, _0x5f297f) {
            var _0x233df4 = _0x1f02;
            _0x3534e7[_0x233df4(484)] = _0x5f297f;
        };
    }
])[_0x3bd682(475)](_0x3bd682(485), function () {
    return {
        'restrict': 'E',
        'link': function (_0x114a4d, _0x23872a, _0x3deff8) {
            var _0x10b325 = _0x1f02;
            !_0x3deff8[_0x10b325(486)] && _0x23872a[_0x10b325(487)](_0x10b325(488));
        }
    };
})[_0x3bd682(475)](_0x3bd682(489), [
    _0x3bd682(490),
    function (_0x18f8ae) {
        var _0x1aa2d9 = _0x3bd682;
        return {
            'controller': [
                _0x1aa2d9(491),
                function (_0x21afbf) {
                    var _0xc5e7a5 = _0x1aa2d9, _0x7ee436 = this;
                    _0x18f8ae['$on'](_0xc5e7a5(492), function () {
                        _0x7ee436['hs'] = [], _0x7ee436['root'] = [];
                    }), this['hs'] = [], this[_0xc5e7a5(493)] = [], this[_0xc5e7a5(494)] = _0x21afbf, this['register'] = function (_0x32e83e) {
                        var _0x466a70 = _0xc5e7a5, _0x34239e;
                        for (var _0x1189f9 = _0x7ee436['hs'][_0x466a70(495)] - 1; _0x1189f9 >= 0; _0x1189f9--) {
                            if (_0x7ee436['hs'][_0x1189f9]['level'] === _0x32e83e[_0x466a70(496)] - 1) {
                                _0x34239e = _0x7ee436['hs'][_0x1189f9];
                                break;
                            }
                        }
                        _0x34239e ? _0x34239e[_0x466a70(497)]['push'](_0x32e83e) : this[_0x466a70(493)][_0x466a70(498)](_0x32e83e), _0x7ee436['hs'][_0x466a70(498)](_0x32e83e);
                    };
                }
            ]
        };
    }
])[_0x3bd682(499)](_0x3bd682(500), {
    'template': _0x3bd682(501) + _0x3bd682(502) + _0x3bd682(503) + _0x3bd682(504) + _0x3bd682(505) + _0x3bd682(506),
    'bindings': { 'items': '<' },
    'controller': [
        _0x3bd682(507),
        function (_0x269eee) {
            var _0x21b53f = _0x3bd682;
            this[_0x21b53f(508)] = _0x269eee['path']()['replace'](/^\/?(.+?)(\/index)?\/?$/, '$1');
        }
    ]
})['directive'](_0x3bd682(509), function () {
    var _0x4a153a = _0x3bd682;
    return {
        'scope': !![],
        'restrict': 'E',
        'require': {
            'tocContainer': '',
            'tocCollector': '^^'
        },
        'controller': function () {
            var _0x18a94b = _0x1f02;
            this[_0x18a94b(510)] = !![], this['items'] = [];
        },
        'controllerAs': _0x4a153a(511),
        'link': function (_0x2eeff2, _0xbfeb45, _0x4e517c, _0x40daf6) {
            var _0x26c736 = _0x4a153a;
            _0x40daf6['tocContainer'][_0x26c736(512)] = _0x40daf6[_0x26c736(489)][_0x26c736(493)];
        },
        'template': _0x4a153a(513) + _0x4a153a(514) + _0x4a153a(515) + _0x4a153a(516) + '</div>'
    };
})[_0x3bd682(475)](_0x3bd682(517), function () {
    var _0x44389d = _0x3bd682;
    return {
        'restrict': 'E',
        'controller': [
            _0x44389d(491),
            function (_0x3d771e) {
                var _0x3cc0e4 = _0x44389d;
                this[_0x3cc0e4(494)] = _0x3d771e;
            }
        ]
    };
})[_0x3bd682(475)]('h1', [
    _0x3bd682(518),
    function (_0x3b4579) {
        var _0x23edd2 = _0x3bd682;
        return {
            'restrict': 'E',
            'require': {
                'tocCollector': _0x23edd2(519),
                'header': _0x23edd2(519)
            },
            'link': function (_0x5ba8f4, _0x25574b, _0x1c4140, _0x25b72e) {
                var _0x4412cb = _0x23edd2;
                if (!_0x25b72e[_0x4412cb(489)])
                    return;
                var _0x91cfbf = angular[_0x4412cb(494)]('<toc-container></toc-container>'), _0x9f78f6 = _0x25b72e[_0x4412cb(517)] ? _0x25b72e['header'][_0x4412cb(494)] : _0x25574b;
                _0x9f78f6[_0x4412cb(520)](_0x91cfbf), _0x3b4579(_0x91cfbf)(_0x5ba8f4);
            }
        };
    }
]);
for (var i = 2; i <= 5; i++) {
    registerHDirective(i);
}
function registerHDirective(_0x140255) {
    var _0x2bb89a = _0x3bd682;
    directivesModule[_0x2bb89a(475)]('h' + _0x140255, function () {
        var _0x11113c = _0x2bb89a;
        return {
            'restrict': 'E',
            'require': { 'tocCollector': _0x11113c(519) },
            'link': function (_0x209b3d, _0xd156e7, _0x21eff8, _0x36c704) {
                var _0x2a92e1 = _0x11113c, _0xda7097 = _0x36c704[_0x2a92e1(489)];
                if (!_0xda7097 || !_0x21eff8['id'])
                    return;
                _0xda7097[_0x2a92e1(521)]({
                    'level': _0x140255,
                    'fragment': _0x21eff8['id'],
                    'title': _0xd156e7[_0x2a92e1(522)](),
                    'children': []
                });
            }
        };
    });
}