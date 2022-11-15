'use strict';
var _0x129a = [
    '$$completeOutstandingRequest',
    'redirectTo',
    'hasRedirection',
    'pathParams',
    'url',
    'resolveRedirectTo',
    'invoke',
    'route',
    'replace',
    'forEach',
    'isString',
    'get',
    '$template',
    'isFunction',
    'loadedTemplateUrl',
    'split',
    'match',
    'push',
    '$inject',
    '774843AFamoQ',
    '307392wAkusU',
    '182264ImDFkQ',
    '4yqzLbO',
    '775584AQIkeW',
    '1PWzxFP',
    '800759vPTRZc',
    '630316cuNSmZ',
    '1322349PRUHqX',
    'module',
    'info',
    '\x22NG_VERSION_FULL\x22',
    'provider',
    '$route',
    'run',
    '$$minErr',
    'ngRoute',
    'isObject',
    'isDefined',
    'noop',
    'extend',
    'isUndefined',
    'reloadOnUrl',
    'reloadOnSearch',
    'caseInsensitiveMatch',
    'otherwise',
    'when',
    'eagerInstantiationEnabled',
    '$get',
    '$rootScope',
    '$location',
    '$routeParams',
    '$injector',
    '$templateRequest',
    '$sce',
    '$browser',
    '$evalAsync',
    'current',
    '$$route',
    'params',
    'path',
    'search',
    'norout',
    '$on',
    '$locationChangeStart',
    '$locationChangeSuccess',
    'keys',
    'regexp',
    'exec',
    'length',
    'name',
    '$broadcast',
    'preventDefault',
    'copy',
    'resolve',
    '$$incOutstandingRequestCount',
    'then',
    'locals',
    '$routeChangeSuccess',
    '$routeChangeError',
    'finally'
];
var _0xe8d6d2 = _0x2dce;
(function (_0x12b902, _0x4d62a8) {
    var _0xf5c212 = _0x2dce;
    while (!![]) {
        try {
            var _0x3136a5 = parseInt(_0xf5c212(0x174)) + -parseInt(_0xf5c212(0x175)) + parseInt(_0xf5c212(0x176)) * -parseInt(_0xf5c212(0x177)) + parseInt(_0xf5c212(0x178)) + -parseInt(_0xf5c212(0x179)) * parseInt(_0xf5c212(0x17a)) + -parseInt(_0xf5c212(0x17b)) + parseInt(_0xf5c212(0x17c));
            if (_0x3136a5 === _0x4d62a8)
                break;
            else
                _0x12b902['push'](_0x12b902['shift']());
        } catch (_0x30deb3) {
            _0x12b902['push'](_0x12b902['shift']());
        }
    }
}(_0x129a, 0x62f05));
function _0x2dce(_0x1cfe5b, _0x5930e5) {
    return _0x2dce = function (_0x129a4e, _0x2dcee4) {
        _0x129a4e = _0x129a4e - 0x174;
        var _0x12e050 = _0x129a[_0x129a4e];
        return _0x12e050;
    }, _0x2dce(_0x1cfe5b, _0x5930e5);
}
var isArray, isObject, isDefined, noop, ngRouteModule = angular[_0xe8d6d2(0x17d)]('ngRoute', [])[_0xe8d6d2(0x17e)]({ 'angularVersion': _0xe8d6d2(0x17f) })[_0xe8d6d2(0x180)](_0xe8d6d2(0x181), $RouteProvider)[_0xe8d6d2(0x182)](instantiateRoute), $routeMinErr = angular[_0xe8d6d2(0x183)](_0xe8d6d2(0x184)), isEagerInstantiationEnabled;
function $RouteProvider() {
    var _0x530248 = _0xe8d6d2;
    isArray = angular['isArray'], isObject = angular[_0x530248(0x185)], isDefined = angular[_0x530248(0x186)], noop = angular[_0x530248(0x187)];
    function _0x38e0ac(_0x7bcb74, _0x28c419) {
        var _0x61b79c = _0x530248;
        return angular[_0x61b79c(0x188)](Object['create'](_0x7bcb74), _0x28c419);
    }
    var _0x1922af = {};
    this['when'] = function (_0x441cdc, _0x30b3d3) {
        var _0x33bd78 = _0x530248, _0x582eb6 = shallowCopy(_0x30b3d3);
        angular[_0x33bd78(0x189)](_0x582eb6[_0x33bd78(0x18a)]) && (_0x582eb6[_0x33bd78(0x18a)] = !![]);
        angular[_0x33bd78(0x189)](_0x582eb6['reloadOnSearch']) && (_0x582eb6[_0x33bd78(0x18b)] = !![]);
        angular['isUndefined'](_0x582eb6['caseInsensitiveMatch']) && (_0x582eb6[_0x33bd78(0x18c)] = this[_0x33bd78(0x18c)]);
        _0x1922af[_0x441cdc] = angular[_0x33bd78(0x188)](_0x582eb6, { 'originalPath': _0x441cdc }, _0x441cdc && routeToRegExp(_0x441cdc, _0x582eb6));
        if (_0x441cdc) {
            var _0x5a3697 = _0x441cdc[_0x441cdc['length'] - 0x1] === '/' ? _0x441cdc['substr'](0x0, _0x441cdc['length'] - 0x1) : _0x441cdc + '/';
            _0x1922af[_0x5a3697] = angular[_0x33bd78(0x188)]({
                'originalPath': _0x441cdc,
                'redirectTo': _0x441cdc
            }, routeToRegExp(_0x5a3697, _0x582eb6));
        }
        return this;
    }, this[_0x530248(0x18c)] = ![], this[_0x530248(0x18d)] = function (_0x4e8727) {
        var _0x16101a = _0x530248;
        return typeof _0x4e8727 === 'string' && (_0x4e8727 = { 'redirectTo': _0x4e8727 }), this[_0x16101a(0x18e)](null, _0x4e8727), this;
    }, isEagerInstantiationEnabled = !![], this[_0x530248(0x18f)] = function _0x420ecf(_0x295313) {
        if (isDefined(_0x295313))
            return isEagerInstantiationEnabled = _0x295313, this;
        return isEagerInstantiationEnabled;
    }, this[_0x530248(0x190)] = [
        _0x530248(0x191),
        _0x530248(0x192),
        _0x530248(0x193),
        '$q',
        _0x530248(0x194),
        _0x530248(0x195),
        _0x530248(0x196),
        _0x530248(0x197),
        function (_0x5453ff, _0x2f4c24, _0x1cb3bf, _0x327d2b, _0x5aecc7, _0x1fbc69, _0x74b557, _0x46b4e9) {
            var _0x5ab726 = _0x530248, _0x2618d = ![], _0x10c81f, _0x31a6ee, _0x4c7743 = {
                    'routes': _0x1922af,
                    'reload': function () {
                        var _0xa7c8a4 = _0x2dce;
                        _0x2618d = !![];
                        var _0xf18b35 = {
                            'defaultPrevented': ![],
                            'preventDefault': function _0x4d7674() {
                                this['defaultPrevented'] = !![], _0x2618d = ![];
                            }
                        };
                        _0x5453ff[_0xa7c8a4(0x198)](function () {
                            _0x1d95a0(_0xf18b35);
                            if (!_0xf18b35['defaultPrevented'])
                                _0x1319df();
                        });
                    },
                    'updateParams': function (_0x450d84) {
                        var _0x3ddcb8 = _0x2dce;
                        if (this[_0x3ddcb8(0x199)] && this[_0x3ddcb8(0x199)][_0x3ddcb8(0x19a)])
                            _0x450d84 = angular[_0x3ddcb8(0x188)]({}, this['current'][_0x3ddcb8(0x19b)], _0x450d84), _0x2f4c24[_0x3ddcb8(0x19c)](_0x11bff9(this[_0x3ddcb8(0x199)][_0x3ddcb8(0x19a)]['originalPath'], _0x450d84)), _0x2f4c24[_0x3ddcb8(0x19d)](_0x450d84);
                        else
                            throw $routeMinErr(_0x3ddcb8(0x19e), 'Tried\x20updating\x20route\x20with\x20no\x20current\x20route');
                    }
                };
            _0x5453ff[_0x5ab726(0x19f)](_0x5ab726(0x1a0), _0x1d95a0), _0x5453ff[_0x5ab726(0x19f)](_0x5ab726(0x1a1), _0x1319df);
            return _0x4c7743;
            function _0x57bfe7(_0x5437ff, _0x30e988) {
                var _0x1dd50d = _0x5ab726, _0x2dfaaa = _0x30e988[_0x1dd50d(0x1a2)], _0x583fbb = {};
                if (!_0x30e988[_0x1dd50d(0x1a3)])
                    return null;
                var _0x461804 = _0x30e988[_0x1dd50d(0x1a3)][_0x1dd50d(0x1a4)](_0x5437ff);
                if (!_0x461804)
                    return null;
                for (var _0x592b83 = 0x1, _0x173d8b = _0x461804[_0x1dd50d(0x1a5)]; _0x592b83 < _0x173d8b; ++_0x592b83) {
                    var _0x4f7eed = _0x2dfaaa[_0x592b83 - 0x1], _0x87b1ac = _0x461804[_0x592b83];
                    _0x4f7eed && _0x87b1ac && (_0x583fbb[_0x4f7eed[_0x1dd50d(0x1a6)]] = _0x87b1ac);
                }
                return _0x583fbb;
            }
            function _0x1d95a0(_0x3a69e9) {
                var _0x37b53f = _0x5ab726, _0x3331ae = _0x4c7743[_0x37b53f(0x199)];
                _0x10c81f = _0x37a175(), _0x31a6ee = _0x2ae770(_0x10c81f, _0x3331ae), !_0x31a6ee && (_0x3331ae || _0x10c81f) && (_0x5453ff[_0x37b53f(0x1a7)]('$routeChangeStart', _0x10c81f, _0x3331ae)['defaultPrevented'] && (_0x3a69e9 && _0x3a69e9[_0x37b53f(0x1a8)]()));
            }
            function _0x1319df() {
                var _0x53c335 = _0x5ab726, _0x159ff2 = _0x4c7743[_0x53c335(0x199)], _0x3f83f9 = _0x10c81f;
                if (_0x31a6ee)
                    _0x159ff2[_0x53c335(0x19b)] = _0x3f83f9[_0x53c335(0x19b)], angular[_0x53c335(0x1a9)](_0x159ff2[_0x53c335(0x19b)], _0x1cb3bf), _0x5453ff[_0x53c335(0x1a7)]('$routeUpdate', _0x159ff2);
                else {
                    if (_0x3f83f9 || _0x159ff2) {
                        _0x2618d = ![], _0x4c7743[_0x53c335(0x199)] = _0x3f83f9;
                        var _0x3bc863 = _0x327d2b[_0x53c335(0x1aa)](_0x3f83f9);
                        _0x46b4e9[_0x53c335(0x1ab)]('$route'), _0x3bc863['then'](_0x111263)['then'](_0x1101e3)[_0x53c335(0x1ac)](function (_0x1a1d74) {
                            var _0x523e1b = _0x53c335;
                            return _0x1a1d74 && _0x3bc863[_0x523e1b(0x1ac)](_0xacebe7)[_0x523e1b(0x1ac)](function (_0x43b0df) {
                                var _0x3706e0 = _0x523e1b;
                                _0x3f83f9 === _0x4c7743[_0x3706e0(0x199)] && (_0x3f83f9 && (_0x3f83f9[_0x3706e0(0x1ad)] = _0x43b0df, angular[_0x3706e0(0x1a9)](_0x3f83f9[_0x3706e0(0x19b)], _0x1cb3bf)), _0x5453ff[_0x3706e0(0x1a7)](_0x3706e0(0x1ae), _0x3f83f9, _0x159ff2));
                            });
                        })['catch'](function (_0x3d0e3a) {
                            var _0x13eb23 = _0x53c335;
                            _0x3f83f9 === _0x4c7743[_0x13eb23(0x199)] && _0x5453ff[_0x13eb23(0x1a7)](_0x13eb23(0x1af), _0x3f83f9, _0x159ff2, _0x3d0e3a);
                        })[_0x53c335(0x1b0)](function () {
                            var _0x2158af = _0x53c335;
                            _0x46b4e9[_0x2158af(0x1b1)](noop, _0x2158af(0x181));
                        });
                    }
                }
            }
            function _0x111263(_0x585b89) {
                var _0x264526 = _0x5ab726, _0x583a98 = {
                        'route': _0x585b89,
                        'hasRedirection': ![]
                    };
                if (_0x585b89) {
                    if (_0x585b89[_0x264526(0x1b2)]) {
                        if (angular['isString'](_0x585b89['redirectTo']))
                            _0x583a98[_0x264526(0x19c)] = _0x11bff9(_0x585b89['redirectTo'], _0x585b89['params']), _0x583a98[_0x264526(0x19d)] = _0x585b89['params'], _0x583a98[_0x264526(0x1b3)] = !![];
                        else {
                            var _0x4fcd25 = _0x2f4c24['path'](), _0x3dd522 = _0x2f4c24[_0x264526(0x19d)](), _0x55159d = _0x585b89[_0x264526(0x1b2)](_0x585b89[_0x264526(0x1b4)], _0x4fcd25, _0x3dd522);
                            angular['isDefined'](_0x55159d) && (_0x583a98[_0x264526(0x1b5)] = _0x55159d, _0x583a98[_0x264526(0x1b3)] = !![]);
                        }
                    } else {
                        if (_0x585b89[_0x264526(0x1b6)])
                            return _0x327d2b[_0x264526(0x1aa)](_0x5aecc7[_0x264526(0x1b7)](_0x585b89[_0x264526(0x1b6)]))[_0x264526(0x1ac)](function (_0x299cb8) {
                                var _0x5e4dfd = _0x264526;
                                return angular['isDefined'](_0x299cb8) && (_0x583a98[_0x5e4dfd(0x1b5)] = _0x299cb8, _0x583a98[_0x5e4dfd(0x1b3)] = !![]), _0x583a98;
                            });
                    }
                }
                return _0x583a98;
            }
            function _0x1101e3(_0x38fc6e) {
                var _0x983378 = _0x5ab726, _0x571381 = !![];
                if (_0x38fc6e[_0x983378(0x1b8)] !== _0x4c7743[_0x983378(0x199)])
                    _0x571381 = ![];
                else {
                    if (_0x38fc6e['hasRedirection']) {
                        var _0x34a114 = _0x2f4c24['url'](), _0x2a80db = _0x38fc6e[_0x983378(0x1b5)];
                        _0x2a80db ? _0x2f4c24['url'](_0x2a80db)[_0x983378(0x1b9)]() : _0x2a80db = _0x2f4c24[_0x983378(0x19c)](_0x38fc6e[_0x983378(0x19c)])[_0x983378(0x19d)](_0x38fc6e[_0x983378(0x19d)])['replace']()[_0x983378(0x1b5)](), _0x2a80db !== _0x34a114 && (_0x571381 = ![]);
                    }
                }
                return _0x571381;
            }
            function _0xacebe7(_0x21f87d) {
                var _0x2c9eca = _0x5ab726;
                if (_0x21f87d) {
                    var _0x3bc763 = angular[_0x2c9eca(0x188)]({}, _0x21f87d[_0x2c9eca(0x1aa)]);
                    angular[_0x2c9eca(0x1ba)](_0x3bc763, function (_0x4ee386, _0x239197) {
                        var _0x5eca3c = _0x2c9eca;
                        _0x3bc763[_0x239197] = angular[_0x5eca3c(0x1bb)](_0x4ee386) ? _0x5aecc7[_0x5eca3c(0x1bc)](_0x4ee386) : _0x5aecc7[_0x5eca3c(0x1b7)](_0x4ee386, null, null, _0x239197);
                    });
                    var _0x562c02 = _0x1dc637(_0x21f87d);
                    return angular[_0x2c9eca(0x186)](_0x562c02) && (_0x3bc763[_0x2c9eca(0x1bd)] = _0x562c02), _0x327d2b['all'](_0x3bc763);
                }
            }
            function _0x1dc637(_0x3a634d) {
                var _0x2c2862 = _0x5ab726, _0x588870, _0x27704b;
                if (angular[_0x2c2862(0x186)](_0x588870 = _0x3a634d['template']))
                    angular[_0x2c2862(0x1be)](_0x588870) && (_0x588870 = _0x588870(_0x3a634d['params']));
                else
                    angular[_0x2c2862(0x186)](_0x27704b = _0x3a634d['templateUrl']) && (angular[_0x2c2862(0x1be)](_0x27704b) && (_0x27704b = _0x27704b(_0x3a634d['params'])), angular['isDefined'](_0x27704b) && (_0x3a634d[_0x2c2862(0x1bf)] = _0x74b557['valueOf'](_0x27704b), _0x588870 = _0x1fbc69(_0x27704b)));
                return _0x588870;
            }
            function _0x37a175() {
                var _0x480529 = _0x5ab726, _0xf60e20, _0x11101f;
                return angular[_0x480529(0x1ba)](_0x1922af, function (_0x31bf42, _0x537a76) {
                    var _0x33dda3 = _0x480529;
                    !_0x11101f && (_0xf60e20 = _0x57bfe7(_0x2f4c24[_0x33dda3(0x19c)](), _0x31bf42)) && (_0x11101f = _0x38e0ac(_0x31bf42, {
                        'params': angular[_0x33dda3(0x188)]({}, _0x2f4c24['search'](), _0xf60e20),
                        'pathParams': _0xf60e20
                    }), _0x11101f[_0x33dda3(0x19a)] = _0x31bf42);
                }), _0x11101f || _0x1922af[null] && _0x38e0ac(_0x1922af[null], {
                    'params': {},
                    'pathParams': {}
                });
            }
            function _0x2ae770(_0x76120d, _0x52a2f8) {
                var _0x2684fd = _0x5ab726;
                return !_0x2618d && _0x76120d && _0x52a2f8 && _0x76120d[_0x2684fd(0x19a)] === _0x52a2f8[_0x2684fd(0x19a)] && (!_0x76120d[_0x2684fd(0x18a)] || !_0x76120d[_0x2684fd(0x18b)] && angular['equals'](_0x76120d['pathParams'], _0x52a2f8[_0x2684fd(0x1b4)]));
            }
            function _0x11bff9(_0x13bfb9, _0x381396) {
                var _0x39c230 = _0x5ab726, _0x5baba8 = [];
                return angular[_0x39c230(0x1ba)]((_0x13bfb9 || '')[_0x39c230(0x1c0)](':'), function (_0x2f9bfe, _0x1a0c5e) {
                    var _0x906f44 = _0x39c230;
                    if (_0x1a0c5e === 0x0)
                        _0x5baba8['push'](_0x2f9bfe);
                    else {
                        var _0x1d6acf = _0x2f9bfe[_0x906f44(0x1c1)](/(\w+)(?:[?*])?(.*)/), _0x235d52 = _0x1d6acf[0x1];
                        _0x5baba8['push'](_0x381396[_0x235d52]), _0x5baba8[_0x906f44(0x1c2)](_0x1d6acf[0x2] || ''), delete _0x381396[_0x235d52];
                    }
                }), _0x5baba8['join']('');
            }
        }
    ];
}
instantiateRoute[_0xe8d6d2(0x1c3)] = [_0xe8d6d2(0x194)];
function instantiateRoute(_0x13e485) {
    var _0x12008c = _0xe8d6d2;
    isEagerInstantiationEnabled && _0x13e485[_0x12008c(0x1bc)](_0x12008c(0x181));
}
