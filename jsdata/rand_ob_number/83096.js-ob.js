'use strict';
var isArray, isObject, isDefined, noop, ngRouteModule = angular['module']('ngRoute', [])['info']({ 'angularVersion': '\x22NG_VERSION_FULL\x22' })['provider']('$route', $RouteProvider)['run'](instantiateRoute), $routeMinErr = angular['$$minErr']('ngRoute'), isEagerInstantiationEnabled;
function $RouteProvider() {
    isArray = angular['isArray'], isObject = angular['isObject'], isDefined = angular['isDefined'], noop = angular['noop'];
    function _0x1974cb(_0x129bcb, _0x1fc403) {
        return angular['extend'](Object['create'](_0x129bcb), _0x1fc403);
    }
    var _0x55d758 = {};
    this['when'] = function (_0x3c71e9, _0x2562e3) {
        var _0xa5386e = shallowCopy(_0x2562e3);
        angular['isUndefined'](_0xa5386e['reloadOnUrl']) && (_0xa5386e['reloadOnUrl'] = !![]);
        angular['isUndefined'](_0xa5386e['reloadOnSearch']) && (_0xa5386e['reloadOnSearch'] = !![]);
        angular['isUndefined'](_0xa5386e['caseInsensitiveMatch']) && (_0xa5386e['caseInsensitiveMatch'] = this['caseInsensitiveMatch']);
        _0x55d758[_0x3c71e9] = angular['extend'](_0xa5386e, { 'originalPath': _0x3c71e9 }, _0x3c71e9 && routeToRegExp(_0x3c71e9, _0xa5386e));
        if (_0x3c71e9) {
            var _0xebfefe = _0x3c71e9[_0x3c71e9['length'] - (-0x1 * 0x1a75 + 0x16cd + 0x1 * 0x3a9)] === '/' ? _0x3c71e9['substr'](0x2ae + 0x1c9f + -0x1 * 0x1f4d, _0x3c71e9['length'] - (-0xe48 + -0x416 * 0x5 + -0x22b7 * -0x1)) : _0x3c71e9 + '/';
            _0x55d758[_0xebfefe] = angular['extend']({
                'originalPath': _0x3c71e9,
                'redirectTo': _0x3c71e9
            }, routeToRegExp(_0xebfefe, _0xa5386e));
        }
        return this;
    }, this['caseInsensitiveMatch'] = ![], this['otherwise'] = function (_0x16f9d1) {
        return typeof _0x16f9d1 === 'string' && (_0x16f9d1 = { 'redirectTo': _0x16f9d1 }), this['when'](null, _0x16f9d1), this;
    }, isEagerInstantiationEnabled = !![], this['eagerInstantiationEnabled'] = function _0x4bd4dd(_0x3529d6) {
        if (isDefined(_0x3529d6))
            return isEagerInstantiationEnabled = _0x3529d6, this;
        return isEagerInstantiationEnabled;
    }, this['$get'] = [
        '$rootScope',
        '$location',
        '$routeParams',
        '$q',
        '$injector',
        '$templateRequest',
        '$sce',
        '$browser',
        function (_0x16495f, _0x108cab, _0x5eeaa2, _0x3ff7a1, _0x11adfc, _0x53f384, _0x3d3690, _0x5abbad) {
            var _0x1b3ed7 = ![], _0x49fad1, _0x3fa4b7, _0x1af3c3 = {
                    'routes': _0x55d758,
                    'reload': function () {
                        _0x1b3ed7 = !![];
                        var _0xb1d647 = {
                            'defaultPrevented': ![],
                            'preventDefault': function _0x2c71f9() {
                                this['defaultPrevented'] = !![], _0x1b3ed7 = ![];
                            }
                        };
                        _0x16495f['$evalAsync'](function () {
                            _0x54fd6b(_0xb1d647);
                            if (!_0xb1d647['defaultPrevented'])
                                _0x2aca53();
                        });
                    },
                    'updateParams': function (_0x55fd26) {
                        if (this['current'] && this['current']['$$route'])
                            _0x55fd26 = angular['extend']({}, this['current']['params'], _0x55fd26), _0x108cab['path'](_0x42d1eb(this['current']['$$route']['originalPath'], _0x55fd26)), _0x108cab['search'](_0x55fd26);
                        else
                            throw $routeMinErr('norout', 'Tried\x20updating\x20route\x20with\x20no\x20current\x20route');
                    }
                };
            _0x16495f['$on']('$locationChangeStart', _0x54fd6b), _0x16495f['$on']('$locationChangeSuccess', _0x2aca53);
            return _0x1af3c3;
            function _0x233746(_0x36686f, _0x5f141a) {
                var _0x3e0f38 = _0x5f141a['keys'], _0x144d1b = {};
                if (!_0x5f141a['regexp'])
                    return null;
                var _0x39c49b = _0x5f141a['regexp']['exec'](_0x36686f);
                if (!_0x39c49b)
                    return null;
                for (var _0x5e324c = 0xfde + -0x121f + 0x242, _0x29aeed = _0x39c49b['length']; _0x5e324c < _0x29aeed; ++_0x5e324c) {
                    var _0x4d01d9 = _0x3e0f38[_0x5e324c - (0x7 * 0x537 + 0x2 * -0x8e9 + 0x63a * -0x3)], _0x2bd8dc = _0x39c49b[_0x5e324c];
                    _0x4d01d9 && _0x2bd8dc && (_0x144d1b[_0x4d01d9['name']] = _0x2bd8dc);
                }
                return _0x144d1b;
            }
            function _0x54fd6b(_0x10e64f) {
                var _0x5def1b = _0x1af3c3['current'];
                _0x49fad1 = _0x41cc13(), _0x3fa4b7 = _0x5c8207(_0x49fad1, _0x5def1b), !_0x3fa4b7 && (_0x5def1b || _0x49fad1) && (_0x16495f['$broadcast']('$routeChangeStart', _0x49fad1, _0x5def1b)['defaultPrevented'] && (_0x10e64f && _0x10e64f['preventDefault']()));
            }
            function _0x2aca53() {
                var _0xabaa2d = _0x1af3c3['current'], _0x1573bc = _0x49fad1;
                if (_0x3fa4b7)
                    _0xabaa2d['params'] = _0x1573bc['params'], angular['copy'](_0xabaa2d['params'], _0x5eeaa2), _0x16495f['$broadcast']('$routeUpdate', _0xabaa2d);
                else {
                    if (_0x1573bc || _0xabaa2d) {
                        _0x1b3ed7 = ![], _0x1af3c3['current'] = _0x1573bc;
                        var _0xfb3fbf = _0x3ff7a1['resolve'](_0x1573bc);
                        _0x5abbad['$$incOutstandingRequestCount']('$route'), _0xfb3fbf['then'](_0x152059)['then'](_0x2eaee3)['then'](function (_0x2b4b94) {
                            return _0x2b4b94 && _0xfb3fbf['then'](_0x2e2739)['then'](function (_0x12dac9) {
                                _0x1573bc === _0x1af3c3['current'] && (_0x1573bc && (_0x1573bc['locals'] = _0x12dac9, angular['copy'](_0x1573bc['params'], _0x5eeaa2)), _0x16495f['$broadcast']('$routeChangeSuccess', _0x1573bc, _0xabaa2d));
                            });
                        })['catch'](function (_0x5a2950) {
                            _0x1573bc === _0x1af3c3['current'] && _0x16495f['$broadcast']('$routeChangeError', _0x1573bc, _0xabaa2d, _0x5a2950);
                        })['finally'](function () {
                            _0x5abbad['$$completeOutstandingRequest'](noop, '$route');
                        });
                    }
                }
            }
            function _0x152059(_0x20f682) {
                var _0x32a0ed = {
                    'route': _0x20f682,
                    'hasRedirection': ![]
                };
                if (_0x20f682) {
                    if (_0x20f682['redirectTo']) {
                        if (angular['isString'](_0x20f682['redirectTo']))
                            _0x32a0ed['path'] = _0x42d1eb(_0x20f682['redirectTo'], _0x20f682['params']), _0x32a0ed['search'] = _0x20f682['params'], _0x32a0ed['hasRedirection'] = !![];
                        else {
                            var _0x8059c5 = _0x108cab['path'](), _0xf65950 = _0x108cab['search'](), _0x368a30 = _0x20f682['redirectTo'](_0x20f682['pathParams'], _0x8059c5, _0xf65950);
                            angular['isDefined'](_0x368a30) && (_0x32a0ed['url'] = _0x368a30, _0x32a0ed['hasRedirection'] = !![]);
                        }
                    } else {
                        if (_0x20f682['resolveRedirectTo'])
                            return _0x3ff7a1['resolve'](_0x11adfc['invoke'](_0x20f682['resolveRedirectTo']))['then'](function (_0x11d8bf) {
                                return angular['isDefined'](_0x11d8bf) && (_0x32a0ed['url'] = _0x11d8bf, _0x32a0ed['hasRedirection'] = !![]), _0x32a0ed;
                            });
                    }
                }
                return _0x32a0ed;
            }
            function _0x2eaee3(_0x4f5915) {
                var _0x4a6166 = !![];
                if (_0x4f5915['route'] !== _0x1af3c3['current'])
                    _0x4a6166 = ![];
                else {
                    if (_0x4f5915['hasRedirection']) {
                        var _0xd05c9a = _0x108cab['url'](), _0x42465c = _0x4f5915['url'];
                        _0x42465c ? _0x108cab['url'](_0x42465c)['replace']() : _0x42465c = _0x108cab['path'](_0x4f5915['path'])['search'](_0x4f5915['search'])['replace']()['url'](), _0x42465c !== _0xd05c9a && (_0x4a6166 = ![]);
                    }
                }
                return _0x4a6166;
            }
            function _0x2e2739(_0x37abc3) {
                if (_0x37abc3) {
                    var _0x4bd3c2 = angular['extend']({}, _0x37abc3['resolve']);
                    angular['forEach'](_0x4bd3c2, function (_0x268809, _0x29bb3f) {
                        _0x4bd3c2[_0x29bb3f] = angular['isString'](_0x268809) ? _0x11adfc['get'](_0x268809) : _0x11adfc['invoke'](_0x268809, null, null, _0x29bb3f);
                    });
                    var _0x30ab1e = _0x3cba64(_0x37abc3);
                    return angular['isDefined'](_0x30ab1e) && (_0x4bd3c2['$template'] = _0x30ab1e), _0x3ff7a1['all'](_0x4bd3c2);
                }
            }
            function _0x3cba64(_0x4ed4fd) {
                var _0x5d5cf3, _0x56afd5;
                if (angular['isDefined'](_0x5d5cf3 = _0x4ed4fd['template']))
                    angular['isFunction'](_0x5d5cf3) && (_0x5d5cf3 = _0x5d5cf3(_0x4ed4fd['params']));
                else
                    angular['isDefined'](_0x56afd5 = _0x4ed4fd['templateUrl']) && (angular['isFunction'](_0x56afd5) && (_0x56afd5 = _0x56afd5(_0x4ed4fd['params'])), angular['isDefined'](_0x56afd5) && (_0x4ed4fd['loadedTemplateUrl'] = _0x3d3690['valueOf'](_0x56afd5), _0x5d5cf3 = _0x53f384(_0x56afd5)));
                return _0x5d5cf3;
            }
            function _0x41cc13() {
                var _0x3ecb02, _0x58412a;
                return angular['forEach'](_0x55d758, function (_0x1863ce, _0x594af6) {
                    !_0x58412a && (_0x3ecb02 = _0x233746(_0x108cab['path'](), _0x1863ce)) && (_0x58412a = _0x1974cb(_0x1863ce, {
                        'params': angular['extend']({}, _0x108cab['search'](), _0x3ecb02),
                        'pathParams': _0x3ecb02
                    }), _0x58412a['$$route'] = _0x1863ce);
                }), _0x58412a || _0x55d758[null] && _0x1974cb(_0x55d758[null], {
                    'params': {},
                    'pathParams': {}
                });
            }
            function _0x5c8207(_0x2dae7a, _0x26ef5a) {
                return !_0x1b3ed7 && _0x2dae7a && _0x26ef5a && _0x2dae7a['$$route'] === _0x26ef5a['$$route'] && (!_0x2dae7a['reloadOnUrl'] || !_0x2dae7a['reloadOnSearch'] && angular['equals'](_0x2dae7a['pathParams'], _0x26ef5a['pathParams']));
            }
            function _0x42d1eb(_0x2f2925, _0x3a31c8) {
                var _0x839142 = [];
                return angular['forEach']((_0x2f2925 || '')['split'](':'), function (_0x335054, _0x3b87ad) {
                    if (_0x3b87ad === 0x6 * -0x20b + -0x91d * -0x2 + -0x4 * 0x17e)
                        _0x839142['push'](_0x335054);
                    else {
                        var _0x1a2838 = _0x335054['match'](/(\w+)(?:[?*])?(.*)/), _0x44fa3b = _0x1a2838[0x1 * 0x1dd8 + -0x1 * 0x19db + -0x3fc];
                        _0x839142['push'](_0x3a31c8[_0x44fa3b]), _0x839142['push'](_0x1a2838[0x101f * -0x1 + 0x21e + 0xe03] || ''), delete _0x3a31c8[_0x44fa3b];
                    }
                }), _0x839142['join']('');
            }
        }
    ];
}
instantiateRoute['$inject'] = ['$injector'];
function instantiateRoute(_0x1d7674) {
    isEagerInstantiationEnabled && _0x1d7674['get']('$route');
}
