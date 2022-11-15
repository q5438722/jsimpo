function _0x2dce(_0x1cfe5b, _0x5930e5) {
    return _0x2dce = function (_0x129a4e, _0x2dcee4) {
        _0x129a4e = _0x129a4e - 372;
        var _0x12e050 = _0x129a[_0x129a4e];
        return _0x12e050;
    }, _0x2dce(_0x1cfe5b, _0x5930e5);
}
var isArray, isObject, isDefined, noop, ngRouteModule = angular[_0xe8d6d2(381)]('ngRoute', [])[_0xe8d6d2(382)]({ 'angularVersion': _0xe8d6d2(383) })[_0xe8d6d2(384)](_0xe8d6d2(385), $RouteProvider)[_0xe8d6d2(386)](instantiateRoute), $routeMinErr = angular[_0xe8d6d2(387)](_0xe8d6d2(388)), isEagerInstantiationEnabled;
function $RouteProvider() {
    var _0x530248 = _0xe8d6d2;
    isArray = angular['isArray'], isObject = angular[_0x530248(389)], isDefined = angular[_0x530248(390)], noop = angular[_0x530248(391)];
    function _0x38e0ac(_0x7bcb74, _0x28c419) {
        var _0x61b79c = _0x530248;
        return angular[_0x61b79c(392)](Object['create'](_0x7bcb74), _0x28c419);
    }
    var _0x1922af = {};
    this['when'] = function (_0x441cdc, _0x30b3d3) {
        var _0x33bd78 = _0x530248, _0x582eb6 = shallowCopy(_0x30b3d3);
        angular[_0x33bd78(393)](_0x582eb6[_0x33bd78(394)]) && (_0x582eb6[_0x33bd78(394)] = !![]);
        angular[_0x33bd78(393)](_0x582eb6['reloadOnSearch']) && (_0x582eb6[_0x33bd78(395)] = !![]);
        angular['isUndefined'](_0x582eb6['caseInsensitiveMatch']) && (_0x582eb6[_0x33bd78(396)] = this[_0x33bd78(396)]);
        _0x1922af[_0x441cdc] = angular[_0x33bd78(392)](_0x582eb6, { 'originalPath': _0x441cdc }, _0x441cdc && routeToRegExp(_0x441cdc, _0x582eb6));
        if (_0x441cdc) {
            var _0x5a3697 = _0x441cdc[_0x441cdc['length'] - 1] === '/' ? _0x441cdc['substr'](0, _0x441cdc['length'] - 1) : _0x441cdc + '/';
            _0x1922af[_0x5a3697] = angular[_0x33bd78(392)]({
                'originalPath': _0x441cdc,
                'redirectTo': _0x441cdc
            }, routeToRegExp(_0x5a3697, _0x582eb6));
        }
        return this;
    }, this[_0x530248(396)] = ![], this[_0x530248(397)] = function (_0x4e8727) {
        var _0x16101a = _0x530248;
        return typeof _0x4e8727 === 'string' && (_0x4e8727 = { 'redirectTo': _0x4e8727 }), this[_0x16101a(398)](null, _0x4e8727), this;
    }, isEagerInstantiationEnabled = !![], this[_0x530248(399)] = function _0x420ecf(_0x295313) {
        if (isDefined(_0x295313))
            return isEagerInstantiationEnabled = _0x295313, this;
        return isEagerInstantiationEnabled;
    }, this[_0x530248(400)] = [
        _0x530248(401),
        _0x530248(402),
        _0x530248(403),
        '$q',
        _0x530248(404),
        _0x530248(405),
        _0x530248(406),
        _0x530248(407),
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
                        _0x5453ff[_0xa7c8a4(408)](function () {
                            _0x1d95a0(_0xf18b35);
                            if (!_0xf18b35['defaultPrevented'])
                                _0x1319df();
                        });
                    },
                    'updateParams': function (_0x450d84) {
                        var _0x3ddcb8 = _0x2dce;
                        if (this[_0x3ddcb8(409)] && this[_0x3ddcb8(409)][_0x3ddcb8(410)])
                            _0x450d84 = angular[_0x3ddcb8(392)]({}, this['current'][_0x3ddcb8(411)], _0x450d84), _0x2f4c24[_0x3ddcb8(412)](_0x11bff9(this[_0x3ddcb8(409)][_0x3ddcb8(410)]['originalPath'], _0x450d84)), _0x2f4c24[_0x3ddcb8(413)](_0x450d84);
                        else
                            throw $routeMinErr(_0x3ddcb8(414), 'Tried updating route with no current route');
                    }
                };
            _0x5453ff[_0x5ab726(415)](_0x5ab726(416), _0x1d95a0), _0x5453ff[_0x5ab726(415)](_0x5ab726(417), _0x1319df);
            return _0x4c7743;
            function _0x57bfe7(_0x5437ff, _0x30e988) {
                var _0x1dd50d = _0x5ab726, _0x2dfaaa = _0x30e988[_0x1dd50d(418)], _0x583fbb = {};
                if (!_0x30e988[_0x1dd50d(419)])
                    return null;
                var _0x461804 = _0x30e988[_0x1dd50d(419)][_0x1dd50d(420)](_0x5437ff);
                if (!_0x461804)
                    return null;
                for (var _0x592b83 = 1, _0x173d8b = _0x461804[_0x1dd50d(421)]; _0x592b83 < _0x173d8b; ++_0x592b83) {
                    var _0x4f7eed = _0x2dfaaa[_0x592b83 - 1], _0x87b1ac = _0x461804[_0x592b83];
                    _0x4f7eed && _0x87b1ac && (_0x583fbb[_0x4f7eed[_0x1dd50d(422)]] = _0x87b1ac);
                }
                return _0x583fbb;
            }
            function _0x1d95a0(_0x3a69e9) {
                var _0x37b53f = _0x5ab726, _0x3331ae = _0x4c7743[_0x37b53f(409)];
                _0x10c81f = _0x37a175(), _0x31a6ee = _0x2ae770(_0x10c81f, _0x3331ae), !_0x31a6ee && (_0x3331ae || _0x10c81f) && (_0x5453ff[_0x37b53f(423)]('$routeChangeStart', _0x10c81f, _0x3331ae)['defaultPrevented'] && (_0x3a69e9 && _0x3a69e9[_0x37b53f(424)]()));
            }
            function _0x1319df() {
                var _0x53c335 = _0x5ab726, _0x159ff2 = _0x4c7743[_0x53c335(409)], _0x3f83f9 = _0x10c81f;
                if (_0x31a6ee)
                    _0x159ff2[_0x53c335(411)] = _0x3f83f9[_0x53c335(411)], angular[_0x53c335(425)](_0x159ff2[_0x53c335(411)], _0x1cb3bf), _0x5453ff[_0x53c335(423)]('$routeUpdate', _0x159ff2);
                else {
                    if (_0x3f83f9 || _0x159ff2) {
                        _0x2618d = ![], _0x4c7743[_0x53c335(409)] = _0x3f83f9;
                        var _0x3bc863 = _0x327d2b[_0x53c335(426)](_0x3f83f9);
                        _0x46b4e9[_0x53c335(427)]('$route'), _0x3bc863['then'](_0x111263)['then'](_0x1101e3)[_0x53c335(428)](function (_0x1a1d74) {
                            var _0x523e1b = _0x53c335;
                            return _0x1a1d74 && _0x3bc863[_0x523e1b(428)](_0xacebe7)[_0x523e1b(428)](function (_0x43b0df) {
                                var _0x3706e0 = _0x523e1b;
                                _0x3f83f9 === _0x4c7743[_0x3706e0(409)] && (_0x3f83f9 && (_0x3f83f9[_0x3706e0(429)] = _0x43b0df, angular[_0x3706e0(425)](_0x3f83f9[_0x3706e0(411)], _0x1cb3bf)), _0x5453ff[_0x3706e0(423)](_0x3706e0(430), _0x3f83f9, _0x159ff2));
                            });
                        })['catch'](function (_0x3d0e3a) {
                            var _0x13eb23 = _0x53c335;
                            _0x3f83f9 === _0x4c7743[_0x13eb23(409)] && _0x5453ff[_0x13eb23(423)](_0x13eb23(431), _0x3f83f9, _0x159ff2, _0x3d0e3a);
                        })[_0x53c335(432)](function () {
                            var _0x2158af = _0x53c335;
                            _0x46b4e9[_0x2158af(433)](noop, _0x2158af(385));
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
                    if (_0x585b89[_0x264526(434)]) {
                        if (angular['isString'](_0x585b89['redirectTo']))
                            _0x583a98[_0x264526(412)] = _0x11bff9(_0x585b89['redirectTo'], _0x585b89['params']), _0x583a98[_0x264526(413)] = _0x585b89['params'], _0x583a98[_0x264526(435)] = !![];
                        else {
                            var _0x4fcd25 = _0x2f4c24['path'](), _0x3dd522 = _0x2f4c24[_0x264526(413)](), _0x55159d = _0x585b89[_0x264526(434)](_0x585b89[_0x264526(436)], _0x4fcd25, _0x3dd522);
                            angular['isDefined'](_0x55159d) && (_0x583a98[_0x264526(437)] = _0x55159d, _0x583a98[_0x264526(435)] = !![]);
                        }
                    } else {
                        if (_0x585b89[_0x264526(438)])
                            return _0x327d2b[_0x264526(426)](_0x5aecc7[_0x264526(439)](_0x585b89[_0x264526(438)]))[_0x264526(428)](function (_0x299cb8) {
                                var _0x5e4dfd = _0x264526;
                                return angular['isDefined'](_0x299cb8) && (_0x583a98[_0x5e4dfd(437)] = _0x299cb8, _0x583a98[_0x5e4dfd(435)] = !![]), _0x583a98;
                            });
                    }
                }
                return _0x583a98;
            }
            function _0x1101e3(_0x38fc6e) {
                var _0x983378 = _0x5ab726, _0x571381 = !![];
                if (_0x38fc6e[_0x983378(440)] !== _0x4c7743[_0x983378(409)])
                    _0x571381 = ![];
                else {
                    if (_0x38fc6e['hasRedirection']) {
                        var _0x34a114 = _0x2f4c24['url'](), _0x2a80db = _0x38fc6e[_0x983378(437)];
                        _0x2a80db ? _0x2f4c24['url'](_0x2a80db)[_0x983378(441)]() : _0x2a80db = _0x2f4c24[_0x983378(412)](_0x38fc6e[_0x983378(412)])[_0x983378(413)](_0x38fc6e[_0x983378(413)])['replace']()[_0x983378(437)](), _0x2a80db !== _0x34a114 && (_0x571381 = ![]);
                    }
                }
                return _0x571381;
            }
            function _0xacebe7(_0x21f87d) {
                var _0x2c9eca = _0x5ab726;
                if (_0x21f87d) {
                    var _0x3bc763 = angular[_0x2c9eca(392)]({}, _0x21f87d[_0x2c9eca(426)]);
                    angular[_0x2c9eca(442)](_0x3bc763, function (_0x4ee386, _0x239197) {
                        var _0x5eca3c = _0x2c9eca;
                        _0x3bc763[_0x239197] = angular[_0x5eca3c(443)](_0x4ee386) ? _0x5aecc7[_0x5eca3c(444)](_0x4ee386) : _0x5aecc7[_0x5eca3c(439)](_0x4ee386, null, null, _0x239197);
                    });
                    var _0x562c02 = _0x1dc637(_0x21f87d);
                    return angular[_0x2c9eca(390)](_0x562c02) && (_0x3bc763[_0x2c9eca(445)] = _0x562c02), _0x327d2b['all'](_0x3bc763);
                }
            }
            function _0x1dc637(_0x3a634d) {
                var _0x2c2862 = _0x5ab726, _0x588870, _0x27704b;
                if (angular[_0x2c2862(390)](_0x588870 = _0x3a634d['template']))
                    angular[_0x2c2862(446)](_0x588870) && (_0x588870 = _0x588870(_0x3a634d['params']));
                else
                    angular[_0x2c2862(390)](_0x27704b = _0x3a634d['templateUrl']) && (angular[_0x2c2862(446)](_0x27704b) && (_0x27704b = _0x27704b(_0x3a634d['params'])), angular['isDefined'](_0x27704b) && (_0x3a634d[_0x2c2862(447)] = _0x74b557['valueOf'](_0x27704b), _0x588870 = _0x1fbc69(_0x27704b)));
                return _0x588870;
            }
            function _0x37a175() {
                var _0x480529 = _0x5ab726, _0xf60e20, _0x11101f;
                return angular[_0x480529(442)](_0x1922af, function (_0x31bf42, _0x537a76) {
                    var _0x33dda3 = _0x480529;
                    !_0x11101f && (_0xf60e20 = _0x57bfe7(_0x2f4c24[_0x33dda3(412)](), _0x31bf42)) && (_0x11101f = _0x38e0ac(_0x31bf42, {
                        'params': angular[_0x33dda3(392)]({}, _0x2f4c24['search'](), _0xf60e20),
                        'pathParams': _0xf60e20
                    }), _0x11101f[_0x33dda3(410)] = _0x31bf42);
                }), _0x11101f || _0x1922af[null] && _0x38e0ac(_0x1922af[null], {
                    'params': {},
                    'pathParams': {}
                });
            }
            function _0x2ae770(_0x76120d, _0x52a2f8) {
                var _0x2684fd = _0x5ab726;
                return !_0x2618d && _0x76120d && _0x52a2f8 && _0x76120d[_0x2684fd(410)] === _0x52a2f8[_0x2684fd(410)] && (!_0x76120d[_0x2684fd(394)] || !_0x76120d[_0x2684fd(395)] && angular['equals'](_0x76120d['pathParams'], _0x52a2f8[_0x2684fd(436)]));
            }
            function _0x11bff9(_0x13bfb9, _0x381396) {
                var _0x39c230 = _0x5ab726, _0x5baba8 = [];
                return angular[_0x39c230(442)]((_0x13bfb9 || '')[_0x39c230(448)](':'), function (_0x2f9bfe, _0x1a0c5e) {
                    var _0x906f44 = _0x39c230;
                    if (_0x1a0c5e === 0)
                        _0x5baba8['push'](_0x2f9bfe);
                    else {
                        var _0x1d6acf = _0x2f9bfe[_0x906f44(449)](/(\w+)(?:[?*])?(.*)/), _0x235d52 = _0x1d6acf[1];
                        _0x5baba8['push'](_0x381396[_0x235d52]), _0x5baba8[_0x906f44(450)](_0x1d6acf[2] || ''), delete _0x381396[_0x235d52];
                    }
                }), _0x5baba8['join']('');
            }
        }
    ];
}
instantiateRoute[_0xe8d6d2(451)] = [_0xe8d6d2(404)];
function instantiateRoute(_0x13e485) {
    var _0x12008c = _0xe8d6d2;
    isEagerInstantiationEnabled && _0x13e485[_0x12008c(444)](_0x12008c(385));
}