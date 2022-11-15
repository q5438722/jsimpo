'use strict';
var _0x3a6b = [
    '$includeContentRequested',
    'root',
    'element',
    'length',
    'level',
    'children',
    'push',
    'component',
    'tocTree',
    '<ul>',
    '<li\x20ng-repeat=\x22item\x20in\x20$ctrl.items\x22>',
    '<a\x20ng-href=\x22{{\x20$ctrl.path\x20}}#{{item.fragment}}\x22>{{item.title}}</a>',
    '<toc-tree\x20ng-if=\x22::item.children.length\x20>\x200\x22\x20items=\x22item.children\x22></toc-tree>',
    '</li>',
    '</ul>',
    '$location',
    'path',
    'tocContainer',
    'showToc',
    '$ctrl',
    'items',
    '<div\x20ng-if=\x22::$ctrl.items.length\x20>\x201\x22>',
    '<b>Contents</b>',
    '<button\x20class=\x22btn\x22\x20ng-click=\x22$ctrl.showToc\x20=\x20!$ctrl.showToc\x22>{{$ctrl.showToc\x20?\x20\x27Hide\x27\x20:\x20\x27Show\x27}}</button><br>',
    '<toc-tree\x20items=\x22$ctrl.items\x22\x20ng-show=\x22$ctrl.showToc\x22></toc-tree>',
    'header',
    '$compile',
    '^^?',
    'after',
    'register',
    'text',
    '2699ASjQrZ',
    '499fkmthu',
    '2zHOPiK',
    '115075CsEpTY',
    '970604eZglDa',
    '708917ZzrMXs',
    '960823IVatRv',
    '1GxYwPN',
    '84047KpjKqp',
    '1AnzrtX',
    '2332740KmvVLG',
    'module',
    'backToTop',
    'click',
    'directive',
    'code',
    'hasClass',
    'linenum',
    'exec',
    'className',
    'html',
    'prettyPrintOne',
    '$anchorScroll',
    'yOffset',
    'table',
    'class',
    'addClass',
    'table\x20table-bordered\x20table-striped\x20code-table',
    'tocCollector',
    '$rootScope',
    '$element'
];
function _0x1f02(_0x14ed00, _0x414561) {
    return _0x1f02 = function (_0x3a6b9f, _0x1f02c9) {
        _0x3a6b9f = _0x3a6b9f - 0x1cd;
        var _0x1f97f0 = _0x3a6b[_0x3a6b9f];
        return _0x1f97f0;
    }, _0x1f02(_0x14ed00, _0x414561);
}
var _0x3bd682 = _0x1f02;
(function (_0x34edb7, _0x282f4d) {
    var _0x4c56c1 = _0x1f02;
    while (!![]) {
        try {
            var _0x3bfd90 = -parseInt(_0x4c56c1(0x1cd)) * -parseInt(_0x4c56c1(0x1ce)) + parseInt(_0x4c56c1(0x1cf)) * -parseInt(_0x4c56c1(0x1d0)) + -parseInt(_0x4c56c1(0x1d1)) + -parseInt(_0x4c56c1(0x1d2)) + parseInt(_0x4c56c1(0x1d3)) * -parseInt(_0x4c56c1(0x1d4)) + parseInt(_0x4c56c1(0x1d5)) * -parseInt(_0x4c56c1(0x1d6)) + parseInt(_0x4c56c1(0x1d7));
            if (_0x3bfd90 === _0x282f4d)
                break;
            else
                _0x34edb7['push'](_0x34edb7['shift']());
        } catch (_0x2872a2) {
            _0x34edb7['push'](_0x34edb7['shift']());
        }
    }
}(_0x3a6b, 0xb1008));
var directivesModule = angular[_0x3bd682(0x1d8)]('directives', []);
directivesModule['directive'](_0x3bd682(0x1d9), [
    '$anchorScroll',
    '$location',
    function (_0x425d2a, _0x5208c2) {
        return function _0x4a9291(_0x418e49, _0x44a270) {
            var _0x19dcc6 = _0x1f02;
            _0x44a270['on'](_0x19dcc6(0x1da), function (_0x3ff49f) {
                _0x5208c2['hash'](''), _0x418e49['$apply'](_0x425d2a);
            });
        };
    }
])[_0x3bd682(0x1db)](_0x3bd682(0x1dc), function () {
    return {
        'restrict': 'E',
        'terminal': !![],
        'compile': function (_0x2c4f21) {
            var _0x49a18f = _0x1f02, _0x1a1ff8 = _0x2c4f21[_0x49a18f(0x1dd)](_0x49a18f(0x1de)), _0x3d48e8 = /lang-(\S+)/[_0x49a18f(0x1df)](_0x2c4f21[0x0][_0x49a18f(0x1e0)]), _0x12a5d7 = _0x3d48e8 && _0x3d48e8[0x1], _0x2a576f = _0x2c4f21[_0x49a18f(0x1e1)]();
            _0x2c4f21['html'](window[_0x49a18f(0x1e2)](_0x2a576f, _0x12a5d7, _0x1a1ff8));
        }
    };
})[_0x3bd682(0x1db)]('scrollYOffsetElement', [
    _0x3bd682(0x1e3),
    function (_0x3534e7) {
        return function (_0x23e3ab, _0x5f297f) {
            var _0x233df4 = _0x1f02;
            _0x3534e7[_0x233df4(0x1e4)] = _0x5f297f;
        };
    }
])[_0x3bd682(0x1db)](_0x3bd682(0x1e5), function () {
    return {
        'restrict': 'E',
        'link': function (_0x114a4d, _0x23872a, _0x3deff8) {
            var _0x10b325 = _0x1f02;
            !_0x3deff8[_0x10b325(0x1e6)] && _0x23872a[_0x10b325(0x1e7)](_0x10b325(0x1e8));
        }
    };
})[_0x3bd682(0x1db)](_0x3bd682(0x1e9), [
    _0x3bd682(0x1ea),
    function (_0x18f8ae) {
        var _0x1aa2d9 = _0x3bd682;
        return {
            'controller': [
                _0x1aa2d9(0x1eb),
                function (_0x21afbf) {
                    var _0xc5e7a5 = _0x1aa2d9, _0x7ee436 = this;
                    _0x18f8ae['$on'](_0xc5e7a5(0x1ec), function () {
                        _0x7ee436['hs'] = [], _0x7ee436['root'] = [];
                    }), this['hs'] = [], this[_0xc5e7a5(0x1ed)] = [], this[_0xc5e7a5(0x1ee)] = _0x21afbf, this['register'] = function (_0x32e83e) {
                        var _0x466a70 = _0xc5e7a5, _0x34239e;
                        for (var _0x1189f9 = _0x7ee436['hs'][_0x466a70(0x1ef)] - 0x1; _0x1189f9 >= 0x0; _0x1189f9--) {
                            if (_0x7ee436['hs'][_0x1189f9]['level'] === _0x32e83e[_0x466a70(0x1f0)] - 0x1) {
                                _0x34239e = _0x7ee436['hs'][_0x1189f9];
                                break;
                            }
                        }
                        _0x34239e ? _0x34239e[_0x466a70(0x1f1)]['push'](_0x32e83e) : this[_0x466a70(0x1ed)][_0x466a70(0x1f2)](_0x32e83e), _0x7ee436['hs'][_0x466a70(0x1f2)](_0x32e83e);
                    };
                }
            ]
        };
    }
])[_0x3bd682(0x1f3)](_0x3bd682(0x1f4), {
    'template': _0x3bd682(0x1f5) + _0x3bd682(0x1f6) + _0x3bd682(0x1f7) + _0x3bd682(0x1f8) + _0x3bd682(0x1f9) + _0x3bd682(0x1fa),
    'bindings': { 'items': '<' },
    'controller': [
        _0x3bd682(0x1fb),
        function (_0x269eee) {
            var _0x21b53f = _0x3bd682;
            this[_0x21b53f(0x1fc)] = _0x269eee['path']()['replace'](/^\/?(.+?)(\/index)?\/?$/, '$1');
        }
    ]
})['directive'](_0x3bd682(0x1fd), function () {
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
            this[_0x18a94b(0x1fe)] = !![], this['items'] = [];
        },
        'controllerAs': _0x4a153a(0x1ff),
        'link': function (_0x2eeff2, _0xbfeb45, _0x4e517c, _0x40daf6) {
            var _0x26c736 = _0x4a153a;
            _0x40daf6['tocContainer'][_0x26c736(0x200)] = _0x40daf6[_0x26c736(0x1e9)][_0x26c736(0x1ed)];
        },
        'template': _0x4a153a(0x201) + _0x4a153a(0x202) + _0x4a153a(0x203) + _0x4a153a(0x204) + '</div>'
    };
})[_0x3bd682(0x1db)](_0x3bd682(0x205), function () {
    var _0x44389d = _0x3bd682;
    return {
        'restrict': 'E',
        'controller': [
            _0x44389d(0x1eb),
            function (_0x3d771e) {
                var _0x3cc0e4 = _0x44389d;
                this[_0x3cc0e4(0x1ee)] = _0x3d771e;
            }
        ]
    };
})[_0x3bd682(0x1db)]('h1', [
    _0x3bd682(0x206),
    function (_0x3b4579) {
        var _0x23edd2 = _0x3bd682;
        return {
            'restrict': 'E',
            'require': {
                'tocCollector': _0x23edd2(0x207),
                'header': _0x23edd2(0x207)
            },
            'link': function (_0x5ba8f4, _0x25574b, _0x1c4140, _0x25b72e) {
                var _0x4412cb = _0x23edd2;
                if (!_0x25b72e[_0x4412cb(0x1e9)])
                    return;
                var _0x91cfbf = angular[_0x4412cb(0x1ee)]('<toc-container></toc-container>'), _0x9f78f6 = _0x25b72e[_0x4412cb(0x205)] ? _0x25b72e['header'][_0x4412cb(0x1ee)] : _0x25574b;
                _0x9f78f6[_0x4412cb(0x208)](_0x91cfbf), _0x3b4579(_0x91cfbf)(_0x5ba8f4);
            }
        };
    }
]);
for (var i = 0x2; i <= 0x5; i++) {
    registerHDirective(i);
}
function registerHDirective(_0x140255) {
    var _0x2bb89a = _0x3bd682;
    directivesModule[_0x2bb89a(0x1db)]('h' + _0x140255, function () {
        var _0x11113c = _0x2bb89a;
        return {
            'restrict': 'E',
            'require': { 'tocCollector': _0x11113c(0x207) },
            'link': function (_0x209b3d, _0xd156e7, _0x21eff8, _0x36c704) {
                var _0x2a92e1 = _0x11113c, _0xda7097 = _0x36c704[_0x2a92e1(0x1e9)];
                if (!_0xda7097 || !_0x21eff8['id'])
                    return;
                _0xda7097[_0x2a92e1(0x209)]({
                    'level': _0x140255,
                    'fragment': _0x21eff8['id'],
                    'title': _0xd156e7[_0x2a92e1(0x20a)](),
                    'children': []
                });
            }
        };
    });
}
