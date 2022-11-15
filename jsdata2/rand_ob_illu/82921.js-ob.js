'use strict';

const _0x5458 = ['$anchorScroll', 'class', 'table table-bordered table-striped code-table', 'ftVul', 'addClass', '$rootScope', '$includeContentRequested', '$element', 'wpFAg', 'bjfUE', 'eZrqR', 'root', 'length', 'hFURK', 'level', 'children', 'push', 'component', 'tocTree', '<ul>', '<a ng-href="{{ $ctrl.path }}#{{item.fragment}}">{{item.title}}</a>', '<toc-tree ng-if="::item.children.length > 0" items="item.children"></toc-tree>', '</li>', 'path', 'replace', 'tocContainer', '$ctrl', '<b>Contents</b>', '<button class="btn" ng-click="$ctrl.showToc = !$ctrl.showToc">{{$ctrl.showToc ? \'Hide\' : \'Show\'}}</button><br>', '<toc-tree items="$ctrl.items" ng-show="$ctrl.showToc"></toc-tree>', '</div>', 'showToc', 'items', 'QLkVC', 'tocCollector', 'nfyHX', 'izeDN', 'odaKE', 'FDaxS', 'YxBVQ', 'header', 'tFosQ', 'element', '<toc-container></toc-container>', '^^?', 'CNLKo', '1|4|2|0|3', 'after', 'mqAmV', 'litvL', 'register', 'text', '1906530RRexGW', '818819EKQMGM', '1OSgXvG', '223mKEtox', '5674PzLiCO', '2831XtNnPC', '333deaVuy', '1736383dGfczm', '930491adsGrM', '2xdbHsK', '7627524wLRBhc', 'module', 'directive', 'backToTop', '$location', 'click', 'hash', 'code', '3|2|4|0|1', 'split', 'html', 'prettyPrintOne', 'exec', 'className', 'hasClass', 'linenum', 'scrollYOffsetElement'];
const _0x45349b = _0x1919;

function _0x1919(_0x31621a, _0x1fcd70) {
    return _0x1919 = function (_0x339415, _0x1d8486) {
        _0x339415 = _0x339415 - 396;
        const _0x1c56ad = _0x5458[_0x339415];

        return _0x1c56ad;
    }, _0x1919(_0x31621a, _0x1fcd70);
}
(function (_0xb7e138, _0x5a4b7b) {
    const _0x5c2d1a = _0x1919;

    while (true) {
        try {
            const _0x24da2f = -parseInt(_0x5c2d1a(0x18c)) + parseInt(_0x5c2d1a(0x18d)) * -parseInt(_0x5c2d1a(0x18e)) + parseInt(_0x5c2d1a(0x18f)) * -parseInt(_0x5c2d1a(0x190)) + -parseInt(_0x5c2d1a(0x191)) * -parseInt(_0x5c2d1a(0x192)) + -parseInt(_0x5c2d1a(0x193)) + -parseInt(_0x5c2d1a(0x194)) * parseInt(_0x5c2d1a(0x195)) + parseInt(_0x5c2d1a(0x196));

            if (_0x24da2f === _0x5a4b7b) break;else _0xb7e138.push(_0xb7e138.shift());
        } catch (_0x3e53c8) {
            _0xb7e138.push(_0xb7e138.shift());
        }
    }
})(_0x5458, 982231);

const directivesModule = angular[_0x45349b(0x197)]('directives', []);

directivesModule[_0x45349b(0x198)](_0x45349b(0x199), ['$anchorScroll', _0x45349b(0x19a), function (_0x176afe, _0x21a313) {
    return function _0x213dd5(_0x2a66bc, _0x58d674) {
        const _0x2ffed5 = _0x1919;

        _0x58d674.on(_0x2ffed5(0x19b), function (_0x1bf02a) {
            const _0x50851a = _0x2ffed5;

            _0x21a313[_0x50851a(0x19c)](''), _0x2a66bc.$apply(_0x176afe);
        });
    };
}])[_0x45349b(0x198)](_0x45349b(0x19d), function () {
    return {
        'restrict': 'E',
        'terminal': true,
        'compile': function (_0x2d8f7f) {
            const _0x4004f9 = _0x1919;

            const _0x507c2f = _0x4004f9(0x19e)[_0x4004f9(0x19f)]('|');

            var _0x5b640e = 0;

            while (true) {
                switch (_0x507c2f[_0x5b640e++]) {
                    case '0':
                        const _0x2fc476 = _0x2d8f7f[_0x4004f9(0x1a0)]();

                        continue;
                    case '1':
                        _0x2d8f7f[_0x4004f9(0x1a0)](window[_0x4004f9(0x1a1)](_0x2fc476, _0x549f21, _0x5ea358));
                        continue;
                    case '2':
                        const _0x8eef6f = /lang-(\S+)/[_0x4004f9(0x1a2)](_0x2d8f7f[0][_0x4004f9(0x1a3)]);

                        continue;
                    case '3':
                        const _0x5ea358 = _0x2d8f7f[_0x4004f9(0x1a4)](_0x4004f9(0x1a5));

                        continue;
                    case '4':
                        const _0x549f21 = _0x8eef6f && _0x8eef6f[1];

                        continue;
                }
                break;
            }
        }
    };
})[_0x45349b(0x198)](_0x45349b(0x1a6), [_0x45349b(0x1a7), function (_0x32896b) {
    return function (_0x3b084c, _0x1da0fd) {
        _0x32896b['yOffset'] = _0x1da0fd;
    };
}])[_0x45349b(0x198)]('table', function () {
    const _0xc5e28f = _0x45349b;
    const _0x36dc31 = {
        'ftVul': _0xc5e28f(0x1a8),
        'TsiwT': _0xc5e28f(0x1a9)
    };

    return {
        'restrict': 'E',
        'link': function (_0x2556ee, _0x56adbc, _0x5cb736) {
            const _0x1aa409 = _0xc5e28f;

            !_0x5cb736[_0x36dc31[_0x1aa409(0x1aa)]] && _0x56adbc[_0x1aa409(0x1ab)](_0x36dc31.TsiwT);
        }
    };
})[_0x45349b(0x198)]('tocCollector', [_0x45349b(0x1ac), function (_0x5d7dbf) {
    const _0x5f281d = _0x45349b;
    const _0x2e43ea = {
        'bjfUE': function (_0x539b71, _0x32ead3) {
            return _0x539b71 === _0x32ead3;
        },
        'aRPvb': function (_0x30f34e, _0x123729) {
            return _0x30f34e - _0x123729;
        },
        'eZrqR': _0x5f281d(0x1ad),
        'wpFAg': _0x5f281d(0x1ae)
    };

    return {
        'controller': [_0x2e43ea[_0x5f281d(0x1af)], function (_0x59a92b) {
            const _0x412592 = _0x5f281d;
            const _0x4ace75 = {
                'cLoHJ': function (_0x46d324, _0x58d2b6) {
                    return _0x46d324 >= _0x58d2b6;
                },
                'hFURK': function (_0x3dfd43, _0x47a6d9) {
                    const _0x551a85 = _0x1919;

                    return _0x2e43ea[_0x551a85(0x1b0)](_0x3dfd43, _0x47a6d9);
                },
                'QXTxI': function (_0x17aa1a, _0x6cf74c) {
                    return _0x2e43ea.aRPvb(_0x17aa1a, _0x6cf74c);
                }
            };

            const _0x4ca69c = this;

            _0x5d7dbf.$on(_0x2e43ea[_0x412592(0x1b1)], function () {
                const _0x1c7c17 = _0x412592;

                _0x4ca69c['hs'] = [], _0x4ca69c[_0x1c7c17(0x1b2)] = [];
            }), this['hs'] = [], this[_0x412592(0x1b2)] = [], this['element'] = _0x59a92b, this['register'] = function (_0x199a48) {
                const _0x560632 = _0x412592;

                var _0x51a355;

                for (var _0x38319b = _0x4ca69c.hs[_0x560632(0x1b3)] - 1; _0x4ace75.cLoHJ(_0x38319b, 0); _0x38319b--) {
                    if (_0x4ace75[_0x560632(0x1b4)](_0x4ca69c.hs[_0x38319b][_0x560632(0x1b5)], _0x4ace75.QXTxI(_0x199a48[_0x560632(0x1b5)], 1))) {
                        _0x51a355 = _0x4ca69c.hs[_0x38319b];
                        break;
                    }
                }
                _0x51a355 ? _0x51a355[_0x560632(0x1b6)][_0x560632(0x1b7)](_0x199a48) : this[_0x560632(0x1b2)].push(_0x199a48), _0x4ca69c.hs[_0x560632(0x1b7)](_0x199a48);
            };
        }]
    };
}])[_0x45349b(0x1b8)](_0x45349b(0x1b9), {
    'template': _0x45349b(0x1ba) + '<li ng-repeat="item in $ctrl.items">' + _0x45349b(0x1bb) + _0x45349b(0x1bc) + _0x45349b(0x1bd) + '</ul>',
    'bindings': { 'items': '<' },
    'controller': [_0x45349b(0x19a), function (_0x558ac9) {
        const _0x116939 = _0x45349b;

        this[_0x116939(0x1be)] = _0x558ac9[_0x116939(0x1be)]()[_0x116939(0x1bf)](/^\/?(.+?)(\/index)?\/?$/, '$1');
    }]
})[_0x45349b(0x198)](_0x45349b(0x1c0), function () {
    const _0x6d798c = _0x45349b;
    const _0x2a37b = {
        'QLkVC': _0x6d798c(0x1c1),
        'nfyHX': function (_0x525a3a, _0x39e767) {
            return _0x525a3a + _0x39e767;
        },
        'izeDN': '<div ng-if="::$ctrl.items.length > 1">',
        'odaKE': _0x6d798c(0x1c2),
        'FDaxS': _0x6d798c(0x1c3),
        'YxBVQ': _0x6d798c(0x1c4),
        'PtgtX': _0x6d798c(0x1c5)
    };

    return {
        'scope': true,
        'restrict': 'E',
        'require': {
            'tocContainer': '',
            'tocCollector': '^^'
        },
        'controller': function () {
            const _0x479bea = _0x6d798c;

            this[_0x479bea(0x1c6)] = true, this[_0x479bea(0x1c7)] = [];
        },
        'controllerAs': _0x2a37b[_0x6d798c(0x1c8)],
        'link': function (_0x730507, _0x4545c2, _0x4989d1, _0x4ab54d) {
            const _0x59c8e0 = _0x6d798c;

            _0x4ab54d[_0x59c8e0(0x1c0)][_0x59c8e0(0x1c7)] = _0x4ab54d[_0x59c8e0(0x1c9)].root;
        },
        'template': _0x2a37b[_0x6d798c(0x1ca)](_0x2a37b[_0x6d798c(0x1cb)], _0x2a37b[_0x6d798c(0x1cc)]) + _0x2a37b[_0x6d798c(0x1cd)] + _0x2a37b[_0x6d798c(0x1ce)] + _0x2a37b.PtgtX
    };
}).directive(_0x45349b(0x1cf), function () {
    const _0x4036cc = _0x45349b;
    const _0x5723eb = { 'tFosQ': _0x4036cc(0x1ae) };

    return {
        'restrict': 'E',
        'controller': [_0x5723eb[_0x4036cc(0x1d0)], function (_0x3a833a) {
            const _0x1e3892 = _0x4036cc;

            this[_0x1e3892(0x1d1)] = _0x3a833a;
        }]
    };
}).directive('h1', ['$compile', function (_0x3686fa) {
    const _0x549bf7 = _0x45349b;
    const _0x209365 = {
        'mqAmV': _0x549bf7(0x1d2),
        'CNLKo': _0x549bf7(0x1d3)
    };

    return {
        'restrict': 'E',
        'require': {
            'tocCollector': _0x209365[_0x549bf7(0x1d4)],
            'header': _0x209365[_0x549bf7(0x1d4)]
        },
        'link': function (_0x5c88c7, _0x7b7418, _0x139eda, _0x359080) {
            const _0xbbc812 = _0x549bf7;

            const _0x368feb = _0xbbc812(0x1d5)[_0xbbc812(0x19f)]('|');

            var _0x3aeed9 = 0;

            while (true) {
                switch (_0x368feb[_0x3aeed9++]) {
                    case '0':
                        _0xd7ab16[_0xbbc812(0x1d6)](_0x5a652c);
                        continue;
                    case '1':
                        if (!_0x359080[_0xbbc812(0x1c9)]) return;
                        continue;
                    case '2':
                        const _0xd7ab16 = _0x359080.header ? _0x359080.header[_0xbbc812(0x1d1)] : _0x7b7418;

                        continue;
                    case '3':
                        _0x3686fa(_0x5a652c)(_0x5c88c7);
                        continue;
                    case '4':
                        const _0x5a652c = angular[_0xbbc812(0x1d1)](_0x209365[_0xbbc812(0x1d7)]);

                        continue;
                }
                break;
            }
        }
    };
}]);
for (var i = 2; i <= 5; i++) {
    var _0x3cfb2c = _0x45349b;
    var _0x55f80a = { 'FnWZw': _0x3cfb2c(0x1d3), 'litvL': function (_0x1dc495, _0xf5d664) {
            return _0x1dc495 + _0xf5d664;
        } };
    directivesModule[_0x3cfb2c(0x198)](_0x55f80a[_0x3cfb2c(0x1d8)]('h', i), function () {
        return { 'restrict': 'E', 'require': { 'tocCollector': _0x55f80a.FnWZw }, 'link': function (_0x35d5ae, _0x2f576a, _0x1ffea2, _0x3cd0af) {
                const _0x2b9001 = _0x1919;

                const _0x3854ef = _0x3cd0af[_0x2b9001(0x1c9)];

                if (!_0x3854ef || !_0x1ffea2.id) return;_0x3854ef[_0x2b9001(0x1d9)]({ 'level': i, 'fragment': _0x1ffea2.id, 'title': _0x2f576a[_0x2b9001(0x1da)](), 'children': [] });
            } };
    });
}
function registerHDirective(_0x33edbd) {
    const _0x3cfb2c = _0x45349b;
    const _0x55f80a = {
        'FnWZw': _0x3cfb2c(0x1d3),
        'litvL': function (_0x1dc495, _0xf5d664) {
            return _0x1dc495 + _0xf5d664;
        }
    };

    directivesModule[_0x3cfb2c(0x198)](_0x55f80a[_0x3cfb2c(0x1d8)]('h', _0x33edbd), function () {
        return {
            'restrict': 'E',
            'require': { 'tocCollector': _0x55f80a.FnWZw },
            'link': function (_0x35d5ae, _0x2f576a, _0x1ffea2, _0x3cd0af) {
                const _0x2b9001 = _0x1919;

                const _0x3854ef = _0x3cd0af[_0x2b9001(0x1c9)];

                if (!_0x3854ef || !_0x1ffea2.id) return;
                _0x3854ef[_0x2b9001(0x1d9)]({
                    'level': _0x33edbd,
                    'fragment': _0x1ffea2.id,
                    'title': _0x2f576a[_0x2b9001(0x1da)](),
                    'children': []
                });
            }
        };
    });
}
