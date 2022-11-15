var isArray, isObject, isDefined, noop, ngRouteModule = angular[_0x2f86c2(292)]('ngRoute', [])[_0x2f86c2(293)]({ 'angularVersion': '"NG_VERSION_FULL"' })[_0x2f86c2(294)](_0x2f86c2(295), $RouteProvider)[_0x2f86c2(296)](instantiateRoute), $routeMinErr = angular['$$minErr'](_0x2f86c2(297)), isEagerInstantiationEnabled;
function $RouteProvider() {
    var _0x3c440a = _0x2f86c2;
    isArray = angular['isArray'], isObject = angular[_0x3c440a(298)], isDefined = angular[_0x3c440a(299)], noop = angular[_0x3c440a(300)];
    function _0x136bf0(_0x4b3463, _0x1125f9) {
        var _0xa674d1 = _0x3c440a;
        return angular[_0xa674d1(301)](Object[_0xa674d1(302)](_0x4b3463), _0x1125f9);
    }
    var _0x4e1fc3 = {};
    this['when'] = function (_0x161085, _0xbe67bd) {
        var _0x17c178 = _0x3c440a, _0x16a72d = shallowCopy(_0xbe67bd);
        angular[_0x17c178(303)](_0x16a72d[_0x17c178(304)]) && (_0x16a72d[_0x17c178(304)] = !![]);
        angular[_0x17c178(303)](_0x16a72d[_0x17c178(305)]) && (_0x16a72d[_0x17c178(305)] = !![]);
        angular[_0x17c178(303)](_0x16a72d[_0x17c178(306)]) && (_0x16a72d['caseInsensitiveMatch'] = this[_0x17c178(306)]);
        _0x4e1fc3[_0x161085] = angular[_0x17c178(301)](_0x16a72d, { 'originalPath': _0x161085 }, _0x161085 && routeToRegExp(_0x161085, _0x16a72d));
        if (_0x161085) {
            var _0x16193b = _0x161085[_0x161085['length'] - 1] === '/' ? _0x161085[_0x17c178(307)](0, _0x161085[_0x17c178(308)] - 1) : _0x161085 + '/';
            _0x4e1fc3[_0x16193b] = angular[_0x17c178(301)]({
                'originalPath': _0x161085,
                'redirectTo': _0x161085
            }, routeToRegExp(_0x16193b, _0x16a72d));
        }
        return this;
    }, this[_0x3c440a(306)] = ![], this['otherwise'] = function (_0xc70b4e) {
        var _0x1a90b7 = _0x3c440a;
        return typeof _0xc70b4e === _0x1a90b7(309) && (_0xc70b4e = { 'redirectTo': _0xc70b4e }), this['when'](null, _0xc70b4e), this;
    }, isEagerInstantiationEnabled = !![], this[_0x3c440a(310)] = function _0x176210(_0xf2b744) {
        if (isDefined(_0xf2b744))
            return isEagerInstantiationEnabled = _0xf2b744, this;
        return isEagerInstantiationEnabled;
    }, this[_0x3c440a(311)] = [
        '$rootScope',
        '$location',
        _0x3c440a(312),
        '$q',
        _0x3c440a(313),
        '$templateRequest',
        _0x3c440a(314),
        _0x3c440a(315),
        function (_0xeaff40, _0x462658, _0x474e08, _0x483047, _0x4ce15a, _0x50f2c3, _0x545832, _0x95947) {
            var _0x85c30f = _0x3c440a, _0x547cca = ![], _0x275b17, _0x209ddd, _0x5f2904 = {
                    'routes': _0x4e1fc3,
                    'reload': function () {
                        var _0xf5d5bf = _0x56fb;
                        _0x547cca = !![];
                        var _0x48a9dd = {
                            'defaultPrevented': ![],
                            'preventDefault': function _0x4fe5e5() {
                                var _0x3cde4b = _0x56fb;
                                this[_0x3cde4b(316)] = !![], _0x547cca = ![];
                            }
                        };
                        _0xeaff40[_0xf5d5bf(317)](function () {
                            var _0x1e3092 = _0xf5d5bf;
                            _0x2af28a(_0x48a9dd);
                            if (!_0x48a9dd[_0x1e3092(316)])
                                _0x5e3907();
                        });
                    },
                    'updateParams': function (_0x40d22e) {
                        var _0x250a96 = _0x56fb;
                        if (this['current'] && this[_0x250a96(318)]['$$route'])
                            _0x40d22e = angular[_0x250a96(301)]({}, this[_0x250a96(318)][_0x250a96(319)], _0x40d22e), _0x462658['path'](_0x2417a9(this[_0x250a96(318)]['$$route'][_0x250a96(320)], _0x40d22e)), _0x462658[_0x250a96(321)](_0x40d22e);
                        else
                            throw $routeMinErr(_0x250a96(322), _0x250a96(323));
                    }
                };
            _0xeaff40['$on'](_0x85c30f(324), _0x2af28a), _0xeaff40[_0x85c30f(325)]('$locationChangeSuccess', _0x5e3907);
            return _0x5f2904;
            function _0x6a0a8c(_0x4a805e, _0x248d33) {
                var _0x28b6ea = _0x85c30f, _0x1a21f3 = _0x248d33[_0x28b6ea(326)], _0x2059ea = {};
                if (!_0x248d33['regexp'])
                    return null;
                var _0x360f18 = _0x248d33[_0x28b6ea(327)][_0x28b6ea(328)](_0x4a805e);
                if (!_0x360f18)
                    return null;
                for (var _0xc242ea = 1, _0x4255ef = _0x360f18[_0x28b6ea(308)]; _0xc242ea < _0x4255ef; ++_0xc242ea) {
                    var _0x1ea0d9 = _0x1a21f3[_0xc242ea - 1], _0xc65b58 = _0x360f18[_0xc242ea];
                    _0x1ea0d9 && _0xc65b58 && (_0x2059ea[_0x1ea0d9[_0x28b6ea(329)]] = _0xc65b58);
                }
                return _0x2059ea;
            }
            function _0x2af28a(_0x4f1cdd) {
                var _0x26b745 = _0x85c30f, _0x474a45 = _0x5f2904[_0x26b745(318)];
                _0x275b17 = _0x214dd4(), _0x209ddd = _0x25eb78(_0x275b17, _0x474a45), !_0x209ddd && (_0x474a45 || _0x275b17) && (_0xeaff40[_0x26b745(330)](_0x26b745(331), _0x275b17, _0x474a45)[_0x26b745(316)] && (_0x4f1cdd && _0x4f1cdd[_0x26b745(332)]()));
            }
            function _0x5e3907() {
                var _0x23d10f = _0x85c30f, _0x4e2a69 = _0x5f2904['current'], _0x63ff1e = _0x275b17;
                if (_0x209ddd)
                    _0x4e2a69[_0x23d10f(319)] = _0x63ff1e[_0x23d10f(319)], angular['copy'](_0x4e2a69[_0x23d10f(319)], _0x474e08), _0xeaff40['$broadcast'](_0x23d10f(333), _0x4e2a69);
                else {
                    if (_0x63ff1e || _0x4e2a69) {
                        _0x547cca = ![], _0x5f2904[_0x23d10f(318)] = _0x63ff1e;
                        var _0x4b3620 = _0x483047[_0x23d10f(334)](_0x63ff1e);
                        _0x95947[_0x23d10f(335)](_0x23d10f(295)), _0x4b3620[_0x23d10f(336)](_0x5355cf)[_0x23d10f(336)](_0x239e4b)[_0x23d10f(336)](function (_0x27cd44) {
                            var _0x433063 = _0x23d10f;
                            return _0x27cd44 && _0x4b3620[_0x433063(336)](_0x59f455)[_0x433063(336)](function (_0x44da74) {
                                var _0x1e68b5 = _0x433063;
                                _0x63ff1e === _0x5f2904[_0x1e68b5(318)] && (_0x63ff1e && (_0x63ff1e['locals'] = _0x44da74, angular[_0x1e68b5(337)](_0x63ff1e['params'], _0x474e08)), _0xeaff40[_0x1e68b5(330)](_0x1e68b5(338), _0x63ff1e, _0x4e2a69));
                            });
                        })[_0x23d10f(339)](function (_0x300f79) {
                            var _0x3cb813 = _0x23d10f;
                            _0x63ff1e === _0x5f2904[_0x3cb813(318)] && _0xeaff40['$broadcast'](_0x3cb813(340), _0x63ff1e, _0x4e2a69, _0x300f79);
                        })[_0x23d10f(341)](function () {
                            var _0x3bcc2b = _0x23d10f;
                            _0x95947[_0x3bcc2b(342)](noop, _0x3bcc2b(295));
                        });
                    }
                }
            }
            function _0x5355cf(_0x3a0265) {
                var _0x571a31 = _0x85c30f, _0x5d0194 = {
                        'route': _0x3a0265,
                        'hasRedirection': ![]
                    };
                if (_0x3a0265) {
                    if (_0x3a0265[_0x571a31(343)]) {
                        if (angular[_0x571a31(344)](_0x3a0265[_0x571a31(343)]))
                            _0x5d0194[_0x571a31(345)] = _0x2417a9(_0x3a0265[_0x571a31(343)], _0x3a0265[_0x571a31(319)]), _0x5d0194[_0x571a31(321)] = _0x3a0265[_0x571a31(319)], _0x5d0194['hasRedirection'] = !![];
                        else {
                            var _0x57914c = _0x462658[_0x571a31(345)](), _0x3c87dd = _0x462658[_0x571a31(321)](), _0x468cb1 = _0x3a0265[_0x571a31(343)](_0x3a0265[_0x571a31(346)], _0x57914c, _0x3c87dd);
                            angular[_0x571a31(299)](_0x468cb1) && (_0x5d0194[_0x571a31(347)] = _0x468cb1, _0x5d0194[_0x571a31(348)] = !![]);
                        }
                    } else {
                        if (_0x3a0265[_0x571a31(349)])
                            return _0x483047[_0x571a31(334)](_0x4ce15a[_0x571a31(350)](_0x3a0265[_0x571a31(349)]))[_0x571a31(336)](function (_0x14b17b) {
                                var _0x49bd35 = _0x571a31;
                                return angular[_0x49bd35(299)](_0x14b17b) && (_0x5d0194[_0x49bd35(347)] = _0x14b17b, _0x5d0194[_0x49bd35(348)] = !![]), _0x5d0194;
                            });
                    }
                }
                return _0x5d0194;
            }
            function _0x239e4b(_0x1f5be4) {
                var _0x3f1bf3 = _0x85c30f, _0x5c01b5 = !![];
                if (_0x1f5be4[_0x3f1bf3(351)] !== _0x5f2904[_0x3f1bf3(318)])
                    _0x5c01b5 = ![];
                else {
                    if (_0x1f5be4[_0x3f1bf3(348)]) {
                        var _0x5ae05a = _0x462658['url'](), _0x2672a1 = _0x1f5be4[_0x3f1bf3(347)];
                        _0x2672a1 ? _0x462658[_0x3f1bf3(347)](_0x2672a1)[_0x3f1bf3(352)]() : _0x2672a1 = _0x462658[_0x3f1bf3(345)](_0x1f5be4[_0x3f1bf3(345)])[_0x3f1bf3(321)](_0x1f5be4[_0x3f1bf3(321)])[_0x3f1bf3(352)]()[_0x3f1bf3(347)](), _0x2672a1 !== _0x5ae05a && (_0x5c01b5 = ![]);
                    }
                }
                return _0x5c01b5;
            }
            function _0x59f455(_0x107395) {
                var _0x5bb645 = _0x85c30f;
                if (_0x107395) {
                    var _0x2fc754 = angular['extend']({}, _0x107395[_0x5bb645(334)]);
                    angular[_0x5bb645(353)](_0x2fc754, function (_0x3a3060, _0x3a083f) {
                        var _0x3001c2 = _0x5bb645;
                        _0x2fc754[_0x3a083f] = angular[_0x3001c2(344)](_0x3a3060) ? _0x4ce15a[_0x3001c2(354)](_0x3a3060) : _0x4ce15a[_0x3001c2(350)](_0x3a3060, null, null, _0x3a083f);
                    });
                    var _0x389313 = _0xe52cbe(_0x107395);
                    return angular[_0x5bb645(299)](_0x389313) && (_0x2fc754['$template'] = _0x389313), _0x483047[_0x5bb645(355)](_0x2fc754);
                }
            }
            function _0xe52cbe(_0x4461cb) {
                var _0x27dcb1 = _0x85c30f, _0x57a26e, _0xb40b2b;
                if (angular[_0x27dcb1(299)](_0x57a26e = _0x4461cb[_0x27dcb1(356)]))
                    angular['isFunction'](_0x57a26e) && (_0x57a26e = _0x57a26e(_0x4461cb[_0x27dcb1(319)]));
                else
                    angular[_0x27dcb1(299)](_0xb40b2b = _0x4461cb[_0x27dcb1(357)]) && (angular[_0x27dcb1(358)](_0xb40b2b) && (_0xb40b2b = _0xb40b2b(_0x4461cb[_0x27dcb1(319)])), angular[_0x27dcb1(299)](_0xb40b2b) && (_0x4461cb[_0x27dcb1(359)] = _0x545832[_0x27dcb1(360)](_0xb40b2b), _0x57a26e = _0x50f2c3(_0xb40b2b)));
                return _0x57a26e;
            }
            function _0x214dd4() {
                var _0x16d1d7 = _0x85c30f, _0x50436a, _0x4e3601;
                return angular[_0x16d1d7(353)](_0x4e1fc3, function (_0x3e1efc, _0x2ebdf7) {
                    var _0x4753f6 = _0x16d1d7;
                    !_0x4e3601 && (_0x50436a = _0x6a0a8c(_0x462658[_0x4753f6(345)](), _0x3e1efc)) && (_0x4e3601 = _0x136bf0(_0x3e1efc, {
                        'params': angular[_0x4753f6(301)]({}, _0x462658[_0x4753f6(321)](), _0x50436a),
                        'pathParams': _0x50436a
                    }), _0x4e3601['$$route'] = _0x3e1efc);
                }), _0x4e3601 || _0x4e1fc3[null] && _0x136bf0(_0x4e1fc3[null], {
                    'params': {},
                    'pathParams': {}
                });
            }
            function _0x25eb78(_0x17e83f, _0x4fe3b1) {
                var _0x481bec = _0x85c30f;
                return !_0x547cca && _0x17e83f && _0x4fe3b1 && _0x17e83f['$$route'] === _0x4fe3b1[_0x481bec(361)] && (!_0x17e83f[_0x481bec(304)] || !_0x17e83f[_0x481bec(305)] && angular[_0x481bec(362)](_0x17e83f[_0x481bec(346)], _0x4fe3b1[_0x481bec(346)]));
            }
            function _0x2417a9(_0x360ba5, _0xb5b65e) {
                var _0x2c3b3c = _0x85c30f, _0x2d22db = [];
                return angular[_0x2c3b3c(353)]((_0x360ba5 || '')[_0x2c3b3c(363)](':'), function (_0x7400b4, _0x1e78ee) {
                    var _0x12fda3 = _0x2c3b3c;
                    if (_0x1e78ee === 0)
                        _0x2d22db[_0x12fda3(364)](_0x7400b4);
                    else {
                        var _0x59ef49 = _0x7400b4['match'](/(\w+)(?:[?*])?(.*)/), _0x518bfe = _0x59ef49[1];
                        _0x2d22db[_0x12fda3(364)](_0xb5b65e[_0x518bfe]), _0x2d22db['push'](_0x59ef49[2] || ''), delete _0xb5b65e[_0x518bfe];
                    }
                }), _0x2d22db['join']('');
            }
        }
    ];
}
instantiateRoute['$inject'] = ['$injector'];
function _0x56fb(_0x13585f, _0x561ca8) {
    return _0x56fb = function (_0x99207d, _0x56fb35) {
        _0x99207d = _0x99207d - 280;
        var _0x1affec = _0x9920[_0x99207d];
        return _0x1affec;
    }, _0x56fb(_0x13585f, _0x561ca8);
}
function instantiateRoute(_0x436c81) {
    var _0x4d6a15 = _0x2f86c2;
    isEagerInstantiationEnabled && _0x436c81[_0x4d6a15(354)]('$route');
}