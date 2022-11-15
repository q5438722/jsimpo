'use strict';
var _0x9920 = [
    'resolve',
    '$$incOutstandingRequestCount',
    'then',
    'copy',
    '$routeChangeSuccess',
    'catch',
    '$routeChangeError',
    'finally',
    '$$completeOutstandingRequest',
    'redirectTo',
    'isString',
    'path',
    'pathParams',
    'url',
    'hasRedirection',
    'resolveRedirectTo',
    'invoke',
    'route',
    'replace',
    'forEach',
    'get',
    'all',
    'template',
    'templateUrl',
    'isFunction',
    'loadedTemplateUrl',
    'valueOf',
    '$$route',
    'equals',
    'split',
    'push',
    '676034hZelRW',
    '32377vkOMjG',
    '8UczsWy',
    '5LxOjRT',
    '191827GVFEOW',
    '986761PmoRxT',
    '144343xCXFyS',
    '6lFNAny',
    '1NAfSLN',
    '525874nBfJBs',
    '8218HXxCin',
    '22zKroiP',
    'module',
    'info',
    'provider',
    '$route',
    'run',
    'ngRoute',
    'isObject',
    'isDefined',
    'noop',
    'extend',
    'create',
    'isUndefined',
    'reloadOnUrl',
    'reloadOnSearch',
    'caseInsensitiveMatch',
    'substr',
    'length',
    'string',
    'eagerInstantiationEnabled',
    '$get',
    '$routeParams',
    '$injector',
    '$sce',
    '$browser',
    'defaultPrevented',
    '$evalAsync',
    'current',
    'params',
    'originalPath',
    'search',
    'norout',
    'Tried\x20updating\x20route\x20with\x20no\x20current\x20route',
    '$locationChangeStart',
    '$on',
    'keys',
    'regexp',
    'exec',
    'name',
    '$broadcast',
    '$routeChangeStart',
    'preventDefault',
    '$routeUpdate'
];
var _0x2f86c2 = _0x56fb;
(function (_0x4dfb36, _0x74b87d) {
    var _0x2f2447 = _0x56fb;
    while (!![]) {
        try {
            var _0x415889 = parseInt(_0x2f2447(0x118)) + parseInt(_0x2f2447(0x119)) * parseInt(_0x2f2447(0x11a)) + parseInt(_0x2f2447(0x11b)) * -parseInt(_0x2f2447(0x11c)) + -parseInt(_0x2f2447(0x11d)) + -parseInt(_0x2f2447(0x11e)) * -parseInt(_0x2f2447(0x11f)) + parseInt(_0x2f2447(0x120)) * parseInt(_0x2f2447(0x121)) + -parseInt(_0x2f2447(0x122)) * -parseInt(_0x2f2447(0x123));
            if (_0x415889 === _0x74b87d)
                break;
            else
                _0x4dfb36['push'](_0x4dfb36['shift']());
        } catch (_0x42a7aa) {
            _0x4dfb36['push'](_0x4dfb36['shift']());
        }
    }
}(_0x9920, 0x892da));
var isArray, isObject, isDefined, noop, ngRouteModule = angular[_0x2f86c2(0x124)]('ngRoute', [])[_0x2f86c2(0x125)]({ 'angularVersion': '\x22NG_VERSION_FULL\x22' })[_0x2f86c2(0x126)](_0x2f86c2(0x127), $RouteProvider)[_0x2f86c2(0x128)](instantiateRoute), $routeMinErr = angular['$$minErr'](_0x2f86c2(0x129)), isEagerInstantiationEnabled;
function $RouteProvider() {
    var _0x3c440a = _0x2f86c2;
    isArray = angular['isArray'], isObject = angular[_0x3c440a(0x12a)], isDefined = angular[_0x3c440a(0x12b)], noop = angular[_0x3c440a(0x12c)];
    function _0x136bf0(_0x4b3463, _0x1125f9) {
        var _0xa674d1 = _0x3c440a;
        return angular[_0xa674d1(0x12d)](Object[_0xa674d1(0x12e)](_0x4b3463), _0x1125f9);
    }
    var _0x4e1fc3 = {};
    this['when'] = function (_0x161085, _0xbe67bd) {
        var _0x17c178 = _0x3c440a, _0x16a72d = shallowCopy(_0xbe67bd);
        angular[_0x17c178(0x12f)](_0x16a72d[_0x17c178(0x130)]) && (_0x16a72d[_0x17c178(0x130)] = !![]);
        angular[_0x17c178(0x12f)](_0x16a72d[_0x17c178(0x131)]) && (_0x16a72d[_0x17c178(0x131)] = !![]);
        angular[_0x17c178(0x12f)](_0x16a72d[_0x17c178(0x132)]) && (_0x16a72d['caseInsensitiveMatch'] = this[_0x17c178(0x132)]);
        _0x4e1fc3[_0x161085] = angular[_0x17c178(0x12d)](_0x16a72d, { 'originalPath': _0x161085 }, _0x161085 && routeToRegExp(_0x161085, _0x16a72d));
        if (_0x161085) {
            var _0x16193b = _0x161085[_0x161085['length'] - 0x1] === '/' ? _0x161085[_0x17c178(0x133)](0x0, _0x161085[_0x17c178(0x134)] - 0x1) : _0x161085 + '/';
            _0x4e1fc3[_0x16193b] = angular[_0x17c178(0x12d)]({
                'originalPath': _0x161085,
                'redirectTo': _0x161085
            }, routeToRegExp(_0x16193b, _0x16a72d));
        }
        return this;
    }, this[_0x3c440a(0x132)] = ![], this['otherwise'] = function (_0xc70b4e) {
        var _0x1a90b7 = _0x3c440a;
        return typeof _0xc70b4e === _0x1a90b7(0x135) && (_0xc70b4e = { 'redirectTo': _0xc70b4e }), this['when'](null, _0xc70b4e), this;
    }, isEagerInstantiationEnabled = !![], this[_0x3c440a(0x136)] = function _0x176210(_0xf2b744) {
        if (isDefined(_0xf2b744))
            return isEagerInstantiationEnabled = _0xf2b744, this;
        return isEagerInstantiationEnabled;
    }, this[_0x3c440a(0x137)] = [
        '$rootScope',
        '$location',
        _0x3c440a(0x138),
        '$q',
        _0x3c440a(0x139),
        '$templateRequest',
        _0x3c440a(0x13a),
        _0x3c440a(0x13b),
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
                                this[_0x3cde4b(0x13c)] = !![], _0x547cca = ![];
                            }
                        };
                        _0xeaff40[_0xf5d5bf(0x13d)](function () {
                            var _0x1e3092 = _0xf5d5bf;
                            _0x2af28a(_0x48a9dd);
                            if (!_0x48a9dd[_0x1e3092(0x13c)])
                                _0x5e3907();
                        });
                    },
                    'updateParams': function (_0x40d22e) {
                        var _0x250a96 = _0x56fb;
                        if (this['current'] && this[_0x250a96(0x13e)]['$$route'])
                            _0x40d22e = angular[_0x250a96(0x12d)]({}, this[_0x250a96(0x13e)][_0x250a96(0x13f)], _0x40d22e), _0x462658['path'](_0x2417a9(this[_0x250a96(0x13e)]['$$route'][_0x250a96(0x140)], _0x40d22e)), _0x462658[_0x250a96(0x141)](_0x40d22e);
                        else
                            throw $routeMinErr(_0x250a96(0x142), _0x250a96(0x143));
                    }
                };
            _0xeaff40['$on'](_0x85c30f(0x144), _0x2af28a), _0xeaff40[_0x85c30f(0x145)]('$locationChangeSuccess', _0x5e3907);
            return _0x5f2904;
            function _0x6a0a8c(_0x4a805e, _0x248d33) {
                var _0x28b6ea = _0x85c30f, _0x1a21f3 = _0x248d33[_0x28b6ea(0x146)], _0x2059ea = {};
                if (!_0x248d33['regexp'])
                    return null;
                var _0x360f18 = _0x248d33[_0x28b6ea(0x147)][_0x28b6ea(0x148)](_0x4a805e);
                if (!_0x360f18)
                    return null;
                for (var _0xc242ea = 0x1, _0x4255ef = _0x360f18[_0x28b6ea(0x134)]; _0xc242ea < _0x4255ef; ++_0xc242ea) {
                    var _0x1ea0d9 = _0x1a21f3[_0xc242ea - 0x1], _0xc65b58 = _0x360f18[_0xc242ea];
                    _0x1ea0d9 && _0xc65b58 && (_0x2059ea[_0x1ea0d9[_0x28b6ea(0x149)]] = _0xc65b58);
                }
                return _0x2059ea;
            }
            function _0x2af28a(_0x4f1cdd) {
                var _0x26b745 = _0x85c30f, _0x474a45 = _0x5f2904[_0x26b745(0x13e)];
                _0x275b17 = _0x214dd4(), _0x209ddd = _0x25eb78(_0x275b17, _0x474a45), !_0x209ddd && (_0x474a45 || _0x275b17) && (_0xeaff40[_0x26b745(0x14a)](_0x26b745(0x14b), _0x275b17, _0x474a45)[_0x26b745(0x13c)] && (_0x4f1cdd && _0x4f1cdd[_0x26b745(0x14c)]()));
            }
            function _0x5e3907() {
                var _0x23d10f = _0x85c30f, _0x4e2a69 = _0x5f2904['current'], _0x63ff1e = _0x275b17;
                if (_0x209ddd)
                    _0x4e2a69[_0x23d10f(0x13f)] = _0x63ff1e[_0x23d10f(0x13f)], angular['copy'](_0x4e2a69[_0x23d10f(0x13f)], _0x474e08), _0xeaff40['$broadcast'](_0x23d10f(0x14d), _0x4e2a69);
                else {
                    if (_0x63ff1e || _0x4e2a69) {
                        _0x547cca = ![], _0x5f2904[_0x23d10f(0x13e)] = _0x63ff1e;
                        var _0x4b3620 = _0x483047[_0x23d10f(0x14e)](_0x63ff1e);
                        _0x95947[_0x23d10f(0x14f)](_0x23d10f(0x127)), _0x4b3620[_0x23d10f(0x150)](_0x5355cf)[_0x23d10f(0x150)](_0x239e4b)[_0x23d10f(0x150)](function (_0x27cd44) {
                            var _0x433063 = _0x23d10f;
                            return _0x27cd44 && _0x4b3620[_0x433063(0x150)](_0x59f455)[_0x433063(0x150)](function (_0x44da74) {
                                var _0x1e68b5 = _0x433063;
                                _0x63ff1e === _0x5f2904[_0x1e68b5(0x13e)] && (_0x63ff1e && (_0x63ff1e['locals'] = _0x44da74, angular[_0x1e68b5(0x151)](_0x63ff1e['params'], _0x474e08)), _0xeaff40[_0x1e68b5(0x14a)](_0x1e68b5(0x152), _0x63ff1e, _0x4e2a69));
                            });
                        })[_0x23d10f(0x153)](function (_0x300f79) {
                            var _0x3cb813 = _0x23d10f;
                            _0x63ff1e === _0x5f2904[_0x3cb813(0x13e)] && _0xeaff40['$broadcast'](_0x3cb813(0x154), _0x63ff1e, _0x4e2a69, _0x300f79);
                        })[_0x23d10f(0x155)](function () {
                            var _0x3bcc2b = _0x23d10f;
                            _0x95947[_0x3bcc2b(0x156)](noop, _0x3bcc2b(0x127));
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
                    if (_0x3a0265[_0x571a31(0x157)]) {
                        if (angular[_0x571a31(0x158)](_0x3a0265[_0x571a31(0x157)]))
                            _0x5d0194[_0x571a31(0x159)] = _0x2417a9(_0x3a0265[_0x571a31(0x157)], _0x3a0265[_0x571a31(0x13f)]), _0x5d0194[_0x571a31(0x141)] = _0x3a0265[_0x571a31(0x13f)], _0x5d0194['hasRedirection'] = !![];
                        else {
                            var _0x57914c = _0x462658[_0x571a31(0x159)](), _0x3c87dd = _0x462658[_0x571a31(0x141)](), _0x468cb1 = _0x3a0265[_0x571a31(0x157)](_0x3a0265[_0x571a31(0x15a)], _0x57914c, _0x3c87dd);
                            angular[_0x571a31(0x12b)](_0x468cb1) && (_0x5d0194[_0x571a31(0x15b)] = _0x468cb1, _0x5d0194[_0x571a31(0x15c)] = !![]);
                        }
                    } else {
                        if (_0x3a0265[_0x571a31(0x15d)])
                            return _0x483047[_0x571a31(0x14e)](_0x4ce15a[_0x571a31(0x15e)](_0x3a0265[_0x571a31(0x15d)]))[_0x571a31(0x150)](function (_0x14b17b) {
                                var _0x49bd35 = _0x571a31;
                                return angular[_0x49bd35(0x12b)](_0x14b17b) && (_0x5d0194[_0x49bd35(0x15b)] = _0x14b17b, _0x5d0194[_0x49bd35(0x15c)] = !![]), _0x5d0194;
                            });
                    }
                }
                return _0x5d0194;
            }
            function _0x239e4b(_0x1f5be4) {
                var _0x3f1bf3 = _0x85c30f, _0x5c01b5 = !![];
                if (_0x1f5be4[_0x3f1bf3(0x15f)] !== _0x5f2904[_0x3f1bf3(0x13e)])
                    _0x5c01b5 = ![];
                else {
                    if (_0x1f5be4[_0x3f1bf3(0x15c)]) {
                        var _0x5ae05a = _0x462658['url'](), _0x2672a1 = _0x1f5be4[_0x3f1bf3(0x15b)];
                        _0x2672a1 ? _0x462658[_0x3f1bf3(0x15b)](_0x2672a1)[_0x3f1bf3(0x160)]() : _0x2672a1 = _0x462658[_0x3f1bf3(0x159)](_0x1f5be4[_0x3f1bf3(0x159)])[_0x3f1bf3(0x141)](_0x1f5be4[_0x3f1bf3(0x141)])[_0x3f1bf3(0x160)]()[_0x3f1bf3(0x15b)](), _0x2672a1 !== _0x5ae05a && (_0x5c01b5 = ![]);
                    }
                }
                return _0x5c01b5;
            }
            function _0x59f455(_0x107395) {
                var _0x5bb645 = _0x85c30f;
                if (_0x107395) {
                    var _0x2fc754 = angular['extend']({}, _0x107395[_0x5bb645(0x14e)]);
                    angular[_0x5bb645(0x161)](_0x2fc754, function (_0x3a3060, _0x3a083f) {
                        var _0x3001c2 = _0x5bb645;
                        _0x2fc754[_0x3a083f] = angular[_0x3001c2(0x158)](_0x3a3060) ? _0x4ce15a[_0x3001c2(0x162)](_0x3a3060) : _0x4ce15a[_0x3001c2(0x15e)](_0x3a3060, null, null, _0x3a083f);
                    });
                    var _0x389313 = _0xe52cbe(_0x107395);
                    return angular[_0x5bb645(0x12b)](_0x389313) && (_0x2fc754['$template'] = _0x389313), _0x483047[_0x5bb645(0x163)](_0x2fc754);
                }
            }
            function _0xe52cbe(_0x4461cb) {
                var _0x27dcb1 = _0x85c30f, _0x57a26e, _0xb40b2b;
                if (angular[_0x27dcb1(0x12b)](_0x57a26e = _0x4461cb[_0x27dcb1(0x164)]))
                    angular['isFunction'](_0x57a26e) && (_0x57a26e = _0x57a26e(_0x4461cb[_0x27dcb1(0x13f)]));
                else
                    angular[_0x27dcb1(0x12b)](_0xb40b2b = _0x4461cb[_0x27dcb1(0x165)]) && (angular[_0x27dcb1(0x166)](_0xb40b2b) && (_0xb40b2b = _0xb40b2b(_0x4461cb[_0x27dcb1(0x13f)])), angular[_0x27dcb1(0x12b)](_0xb40b2b) && (_0x4461cb[_0x27dcb1(0x167)] = _0x545832[_0x27dcb1(0x168)](_0xb40b2b), _0x57a26e = _0x50f2c3(_0xb40b2b)));
                return _0x57a26e;
            }
            function _0x214dd4() {
                var _0x16d1d7 = _0x85c30f, _0x50436a, _0x4e3601;
                return angular[_0x16d1d7(0x161)](_0x4e1fc3, function (_0x3e1efc, _0x2ebdf7) {
                    var _0x4753f6 = _0x16d1d7;
                    !_0x4e3601 && (_0x50436a = _0x6a0a8c(_0x462658[_0x4753f6(0x159)](), _0x3e1efc)) && (_0x4e3601 = _0x136bf0(_0x3e1efc, {
                        'params': angular[_0x4753f6(0x12d)]({}, _0x462658[_0x4753f6(0x141)](), _0x50436a),
                        'pathParams': _0x50436a
                    }), _0x4e3601['$$route'] = _0x3e1efc);
                }), _0x4e3601 || _0x4e1fc3[null] && _0x136bf0(_0x4e1fc3[null], {
                    'params': {},
                    'pathParams': {}
                });
            }
            function _0x25eb78(_0x17e83f, _0x4fe3b1) {
                var _0x481bec = _0x85c30f;
                return !_0x547cca && _0x17e83f && _0x4fe3b1 && _0x17e83f['$$route'] === _0x4fe3b1[_0x481bec(0x169)] && (!_0x17e83f[_0x481bec(0x130)] || !_0x17e83f[_0x481bec(0x131)] && angular[_0x481bec(0x16a)](_0x17e83f[_0x481bec(0x15a)], _0x4fe3b1[_0x481bec(0x15a)]));
            }
            function _0x2417a9(_0x360ba5, _0xb5b65e) {
                var _0x2c3b3c = _0x85c30f, _0x2d22db = [];
                return angular[_0x2c3b3c(0x161)]((_0x360ba5 || '')[_0x2c3b3c(0x16b)](':'), function (_0x7400b4, _0x1e78ee) {
                    var _0x12fda3 = _0x2c3b3c;
                    if (_0x1e78ee === 0x0)
                        _0x2d22db[_0x12fda3(0x16c)](_0x7400b4);
                    else {
                        var _0x59ef49 = _0x7400b4['match'](/(\w+)(?:[?*])?(.*)/), _0x518bfe = _0x59ef49[0x1];
                        _0x2d22db[_0x12fda3(0x16c)](_0xb5b65e[_0x518bfe]), _0x2d22db['push'](_0x59ef49[0x2] || ''), delete _0xb5b65e[_0x518bfe];
                    }
                }), _0x2d22db['join']('');
            }
        }
    ];
}
instantiateRoute['$inject'] = ['$injector'];
function _0x56fb(_0x13585f, _0x561ca8) {
    return _0x56fb = function (_0x99207d, _0x56fb35) {
        _0x99207d = _0x99207d - 0x118;
        var _0x1affec = _0x9920[_0x99207d];
        return _0x1affec;
    }, _0x56fb(_0x13585f, _0x561ca8);
}
function instantiateRoute(_0x436c81) {
    var _0x4d6a15 = _0x2f86c2;
    isEagerInstantiationEnabled && _0x436c81[_0x4d6a15(0x162)]('$route');
}
