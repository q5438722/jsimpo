'use strict';
var isArray, isObject, isDefined, noop, ngRouteModule = angular['module']('ngRoute', [])['info']({ 'angularVersion': '\x22NG_VERSION_FULL\x22' })['provider']('$route', $RouteProvider)['run'](instantiateRoute), $routeMinErr = angular['$$minErr']('ngRoute'), isEagerInstantiationEnabled;
function $RouteProvider() {
    var _0x2f4d67 = {
        'KqEoO': '4|5|2|1|3|6|0',
        'LPUiK': function (_0x15e6f7, _0x1235a0, _0x375c13) {
            return _0x15e6f7(_0x1235a0, _0x375c13);
        },
        'NiqIm': function (_0x3ae623, _0x951097) {
            return _0x3ae623(_0x951097);
        },
        'kiEOZ': function (_0x23d9d1, _0x5dd2ae) {
            return _0x23d9d1 === _0x5dd2ae;
        },
        'SjPHJ': function (_0x1bf470, _0x420fdd) {
            return _0x1bf470 - _0x420fdd;
        },
        'QVHjD': function (_0x4c2ed9, _0x57cf0e) {
            return _0x4c2ed9 + _0x57cf0e;
        },
        'RQnDo': 'string',
        'VjrYi': function (_0x2f5cff, _0xbe9632) {
            return _0x2f5cff(_0xbe9632);
        },
        'MMgnT': function (_0x10828e, _0x192520, _0x41d95b) {
            return _0x10828e(_0x192520, _0x41d95b);
        },
        'vnPbe': function (_0x4df526, _0x148553, _0x384c1f) {
            return _0x4df526(_0x148553, _0x384c1f);
        },
        'YEjaO': 'norout',
        'Fhcul': 'Tried\x20updating\x20route\x20with\x20no\x20current\x20route',
        'IikWk': function (_0xf89d62, _0xa2d577, _0x10f555) {
            return _0xf89d62(_0xa2d577, _0x10f555);
        },
        'epnUn': function (_0x3b5e69, _0x528ed8, _0x6ede4f) {
            return _0x3b5e69(_0x528ed8, _0x6ede4f);
        },
        'YQmbu': function (_0x57a344) {
            return _0x57a344();
        },
        'MFZeB': '2|5|4|1|3|0',
        'EzQKt': function (_0x4a330d, _0x2e58dd) {
            return _0x4a330d < _0x2e58dd;
        },
        'zyuuH': function (_0x274101, _0x10a88d) {
            return _0x274101 - _0x10a88d;
        },
        'RZVpa': function (_0x8bfd26, _0x2711e8) {
            return _0x8bfd26 && _0x2711e8;
        },
        'AoHAG': function (_0x235a3c, _0x32cf28) {
            return _0x235a3c || _0x32cf28;
        },
        'yyMWa': '$routeChangeStart',
        'MzLsP': function (_0x153595, _0x3185a1) {
            return _0x153595 === _0x3185a1;
        },
        'JLxZx': '$routeChangeSuccess',
        'iQUcH': function (_0x15b6ed, _0x266122) {
            return _0x15b6ed === _0x266122;
        },
        'WhdkN': '$routeChangeError',
        'CvefT': '$route',
        'tFPjq': '$routeUpdate',
        'bXIiW': '4|3|1|2|0',
        'IAHSn': function (_0x20a6ad, _0x55f834) {
            return _0x20a6ad !== _0x55f834;
        },
        'udUnF': '4|2|3|0|1',
        'WtYsZ': '$template',
        'snrvC': function (_0x40d2fe, _0x3d11ca) {
            return _0x40d2fe(_0x3d11ca);
        },
        'CNsZF': '2|3|0|4|1',
        'glDSk': '$locationChangeStart',
        'oQcte': '$locationChangeSuccess',
        'QgjVc': '$rootScope',
        'oKNDA': '$location',
        'bmSca': '$routeParams',
        'kTrDg': '$injector',
        'LuyZl': '$templateRequest',
        'OrDgm': '$sce',
        'DXLQz': '$browser'
    };
    isArray = angular['isArray'], isObject = angular['isObject'], isDefined = angular['isDefined'], noop = angular['noop'];
    function _0x490287(_0x18a25f, _0x15af5f) {
        return angular['extend'](Object['create'](_0x18a25f), _0x15af5f);
    }
    var _0x2d648c = {};
    this['when'] = function (_0x38cf7e, _0x34dd52) {
        var _0x8cf613 = _0x2f4d67['KqEoO']['split']('|'), _0x43bdd4 = 0x0;
        while (!![]) {
            switch (_0x8cf613[_0x43bdd4++]) {
            case '0':
                return this;
            case '1':
                angular['isUndefined'](_0x44968e['caseInsensitiveMatch']) && (_0x44968e['caseInsensitiveMatch'] = this['caseInsensitiveMatch']);
                continue;
            case '2':
                angular['isUndefined'](_0x44968e['reloadOnSearch']) && (_0x44968e['reloadOnSearch'] = !![]);
                continue;
            case '3':
                _0x2d648c[_0x38cf7e] = angular['extend'](_0x44968e, { 'originalPath': _0x38cf7e }, _0x38cf7e && _0x2f4d67['LPUiK'](routeToRegExp, _0x38cf7e, _0x44968e));
                continue;
            case '4':
                var _0x44968e = _0x2f4d67['NiqIm'](shallowCopy, _0x34dd52);
                continue;
            case '5':
                angular['isUndefined'](_0x44968e['reloadOnUrl']) && (_0x44968e['reloadOnUrl'] = !![]);
                continue;
            case '6':
                if (_0x38cf7e) {
                    var _0x9367ba = _0x2f4d67['kiEOZ'](_0x38cf7e[_0x2f4d67['SjPHJ'](_0x38cf7e['length'], 0x1)], '/') ? _0x38cf7e['substr'](0x0, _0x2f4d67['SjPHJ'](_0x38cf7e['length'], 0x1)) : _0x2f4d67['QVHjD'](_0x38cf7e, '/');
                    _0x2d648c[_0x9367ba] = angular['extend']({
                        'originalPath': _0x38cf7e,
                        'redirectTo': _0x38cf7e
                    }, _0x2f4d67['LPUiK'](routeToRegExp, _0x9367ba, _0x44968e));
                }
                continue;
            }
            break;
        }
    }, this['caseInsensitiveMatch'] = ![], this['otherwise'] = function (_0x517a81) {
        return _0x2f4d67['kiEOZ'](typeof _0x517a81, _0x2f4d67['RQnDo']) && (_0x517a81 = { 'redirectTo': _0x517a81 }), this['when'](null, _0x517a81), this;
    }, isEagerInstantiationEnabled = !![], this['eagerInstantiationEnabled'] = function _0x520516(_0x2c06e3) {
        if (_0x2f4d67['VjrYi'](isDefined, _0x2c06e3))
            return isEagerInstantiationEnabled = _0x2c06e3, this;
        return isEagerInstantiationEnabled;
    }, this['$get'] = [
        _0x2f4d67['QgjVc'],
        _0x2f4d67['oKNDA'],
        _0x2f4d67['bmSca'],
        '$q',
        _0x2f4d67['kTrDg'],
        _0x2f4d67['LuyZl'],
        _0x2f4d67['OrDgm'],
        _0x2f4d67['DXLQz'],
        function (_0x1ec759, _0x4fc14f, _0xf6b885, _0x428617, _0x2a15fc, _0xfcf632, _0x1e4640, _0x3ca81b) {
            var _0x244474 = {
                    'rofVL': function (_0x39f6e3, _0x33b077) {
                        return _0x2f4d67['VjrYi'](_0x39f6e3, _0x33b077);
                    },
                    'inFqP': function (_0x33ac5f) {
                        return _0x2f4d67['YQmbu'](_0x33ac5f);
                    },
                    'AdGOx': _0x2f4d67['MFZeB'],
                    'wKGJB': function (_0x3b9221, _0x5e0a7b) {
                        return _0x2f4d67['EzQKt'](_0x3b9221, _0x5e0a7b);
                    },
                    'VkHRJ': function (_0x207a4c, _0x4d93c6) {
                        return _0x2f4d67['zyuuH'](_0x207a4c, _0x4d93c6);
                    },
                    'ZIQti': function (_0x231dff, _0x1cfea8) {
                        return _0x2f4d67['RZVpa'](_0x231dff, _0x1cfea8);
                    },
                    'yBzsk': function (_0x4f300f, _0x41f004, _0x2da7b2) {
                        return _0x2f4d67['epnUn'](_0x4f300f, _0x41f004, _0x2da7b2);
                    },
                    'ymZlA': function (_0x3c90a0, _0x3c5fc6) {
                        return _0x2f4d67['AoHAG'](_0x3c90a0, _0x3c5fc6);
                    },
                    'EpkNV': _0x2f4d67['yyMWa'],
                    'ouGvI': function (_0x57e708, _0x3bb159) {
                        return _0x2f4d67['MzLsP'](_0x57e708, _0x3bb159);
                    },
                    'SMwUh': _0x2f4d67['JLxZx'],
                    'sXuNk': function (_0x148f6f, _0x13a7d6) {
                        return _0x2f4d67['iQUcH'](_0x148f6f, _0x13a7d6);
                    },
                    'deAvw': _0x2f4d67['WhdkN'],
                    'OyRYD': _0x2f4d67['CvefT'],
                    'XMYVU': _0x2f4d67['tFPjq'],
                    'rYBHF': _0x2f4d67['bXIiW'],
                    'GDZAG': function (_0x2819a4, _0x542cf2) {
                        return _0x2f4d67['IAHSn'](_0x2819a4, _0x542cf2);
                    },
                    'wQVIf': _0x2f4d67['udUnF'],
                    'tPALq': _0x2f4d67['WtYsZ'],
                    'UNfHl': function (_0x4f9fa9, _0x4943c8) {
                        return _0x2f4d67['snrvC'](_0x4f9fa9, _0x4943c8);
                    },
                    'JPRlN': function (_0x572804, _0x464821) {
                        return _0x2f4d67['snrvC'](_0x572804, _0x464821);
                    },
                    'sHzUk': function (_0xc569ef, _0x156ed1, _0x2ec58d) {
                        return _0x2f4d67['epnUn'](_0xc569ef, _0x156ed1, _0x2ec58d);
                    },
                    'QzKvS': function (_0x304738, _0x1f099c, _0x7b5dc) {
                        return _0x2f4d67['epnUn'](_0x304738, _0x1f099c, _0x7b5dc);
                    },
                    'JNFOt': function (_0x26f5d3, _0x4b1f87) {
                        return _0x2f4d67['RZVpa'](_0x26f5d3, _0x4b1f87);
                    },
                    'pRidC': function (_0x94786, _0x2e5229) {
                        return _0x2f4d67['iQUcH'](_0x94786, _0x2e5229);
                    },
                    'vHfZf': function (_0x19146c, _0x328490) {
                        return _0x2f4d67['iQUcH'](_0x19146c, _0x328490);
                    },
                    'jBPpD': _0x2f4d67['CNsZF'],
                    'VTXSn': function (_0x2fd1a2, _0x456205) {
                        return _0x2f4d67['AoHAG'](_0x2fd1a2, _0x456205);
                    }
                }, _0x34fcf9 = ![], _0x246886, _0x1e03b9, _0x5457bf = {
                    'routes': _0x2d648c,
                    'reload': function () {
                        _0x34fcf9 = !![];
                        var _0x34de55 = {
                            'defaultPrevented': ![],
                            'preventDefault': function _0x531286() {
                                this['defaultPrevented'] = !![], _0x34fcf9 = ![];
                            }
                        };
                        _0x1ec759['$evalAsync'](function () {
                            _0x244474['rofVL'](_0x4cd472, _0x34de55);
                            if (!_0x34de55['defaultPrevented'])
                                _0x244474['inFqP'](_0xbfc407);
                        });
                    },
                    'updateParams': function (_0x19c4d3) {
                        if (this['current'] && this['current']['$$route'])
                            _0x19c4d3 = angular['extend']({}, this['current']['params'], _0x19c4d3), _0x4fc14f['path'](_0x2f4d67['MMgnT'](_0x68a226, this['current']['$$route']['originalPath'], _0x19c4d3)), _0x4fc14f['search'](_0x19c4d3);
                        else
                            throw _0x2f4d67['vnPbe']($routeMinErr, _0x2f4d67['YEjaO'], _0x2f4d67['Fhcul']);
                    }
                };
            _0x1ec759['$on'](_0x2f4d67['glDSk'], _0x4cd472), _0x1ec759['$on'](_0x2f4d67['oQcte'], _0xbfc407);
            return _0x5457bf;
            function _0x53f76d(_0x319ded, _0x1b8a2a) {
                var _0x33cbcb = _0x244474['AdGOx']['split']('|'), _0x152b71 = 0x0;
                while (!![]) {
                    switch (_0x33cbcb[_0x152b71++]) {
                    case '0':
                        return _0x4fb749;
                    case '1':
                        if (!_0x28860c)
                            return null;
                        continue;
                    case '2':
                        var _0x54e6c6 = _0x1b8a2a['keys'], _0x4fb749 = {};
                        continue;
                    case '3':
                        for (var _0x38ba10 = 0x1, _0x4ac4cd = _0x28860c['length']; _0x244474['wKGJB'](_0x38ba10, _0x4ac4cd); ++_0x38ba10) {
                            var _0x41bdf8 = _0x54e6c6[_0x244474['VkHRJ'](_0x38ba10, 0x1)], _0x56952d = _0x28860c[_0x38ba10];
                            _0x244474['ZIQti'](_0x41bdf8, _0x56952d) && (_0x4fb749[_0x41bdf8['name']] = _0x56952d);
                        }
                        continue;
                    case '4':
                        var _0x28860c = _0x1b8a2a['regexp']['exec'](_0x319ded);
                        continue;
                    case '5':
                        if (!_0x1b8a2a['regexp'])
                            return null;
                        continue;
                    }
                    break;
                }
            }
            function _0x4cd472(_0x34ac47) {
                var _0x1b8596 = _0x5457bf['current'];
                _0x246886 = _0x244474['inFqP'](_0x2ccb49), _0x1e03b9 = _0x244474['yBzsk'](_0xa84c1e, _0x246886, _0x1b8596), !_0x1e03b9 && _0x244474['ymZlA'](_0x1b8596, _0x246886) && (_0x1ec759['$broadcast'](_0x244474['EpkNV'], _0x246886, _0x1b8596)['defaultPrevented'] && (_0x34ac47 && _0x34ac47['preventDefault']()));
            }
            function _0xbfc407() {
                var _0x31cee1 = {
                        'AIAeh': function (_0x185352, _0xb18b26) {
                            return _0x244474['ouGvI'](_0x185352, _0xb18b26);
                        },
                        'yYHyN': _0x244474['SMwUh'],
                        'SyVVL': function (_0x455646, _0x58a30f) {
                            return _0x244474['sXuNk'](_0x455646, _0x58a30f);
                        },
                        'bMzJQ': _0x244474['deAvw'],
                        'PUTju': _0x244474['OyRYD']
                    }, _0x49067a = _0x5457bf['current'], _0x4c35a3 = _0x246886;
                if (_0x1e03b9)
                    _0x49067a['params'] = _0x4c35a3['params'], angular['copy'](_0x49067a['params'], _0xf6b885), _0x1ec759['$broadcast'](_0x244474['XMYVU'], _0x49067a);
                else {
                    if (_0x244474['ymZlA'](_0x4c35a3, _0x49067a)) {
                        var _0x55f584 = _0x244474['rYBHF']['split']('|'), _0x2e9de8 = 0x0;
                        while (!![]) {
                            switch (_0x55f584[_0x2e9de8++]) {
                            case '0':
                                _0x49fb26['then'](_0x477cfd)['then'](_0x50b99f)['then'](function (_0x1bce34) {
                                    return _0x1bce34 && _0x49fb26['then'](_0x1a4450)['then'](function (_0x2f7c45) {
                                        _0x31cee1['AIAeh'](_0x4c35a3, _0x5457bf['current']) && (_0x4c35a3 && (_0x4c35a3['locals'] = _0x2f7c45, angular['copy'](_0x4c35a3['params'], _0xf6b885)), _0x1ec759['$broadcast'](_0x31cee1['yYHyN'], _0x4c35a3, _0x49067a));
                                    });
                                })['catch'](function (_0x1a1d15) {
                                    _0x31cee1['SyVVL'](_0x4c35a3, _0x5457bf['current']) && _0x1ec759['$broadcast'](_0x31cee1['bMzJQ'], _0x4c35a3, _0x49067a, _0x1a1d15);
                                })['finally'](function () {
                                    _0x3ca81b['$$completeOutstandingRequest'](noop, _0x31cee1['PUTju']);
                                });
                                continue;
                            case '1':
                                var _0x49fb26 = _0x428617['resolve'](_0x4c35a3);
                                continue;
                            case '2':
                                _0x3ca81b['$$incOutstandingRequestCount'](_0x244474['OyRYD']);
                                continue;
                            case '3':
                                _0x5457bf['current'] = _0x4c35a3;
                                continue;
                            case '4':
                                _0x34fcf9 = ![];
                                continue;
                            }
                            break;
                        }
                    }
                }
            }
            function _0x477cfd(_0x3efc2e) {
                var _0x49b498 = {
                    'route': _0x3efc2e,
                    'hasRedirection': ![]
                };
                if (_0x3efc2e) {
                    if (_0x3efc2e['redirectTo']) {
                        if (angular['isString'](_0x3efc2e['redirectTo']))
                            _0x49b498['path'] = _0x2f4d67['IikWk'](_0x68a226, _0x3efc2e['redirectTo'], _0x3efc2e['params']), _0x49b498['search'] = _0x3efc2e['params'], _0x49b498['hasRedirection'] = !![];
                        else {
                            var _0x57d555 = _0x4fc14f['path'](), _0x417e4f = _0x4fc14f['search'](), _0x5ddc6e = _0x3efc2e['redirectTo'](_0x3efc2e['pathParams'], _0x57d555, _0x417e4f);
                            angular['isDefined'](_0x5ddc6e) && (_0x49b498['url'] = _0x5ddc6e, _0x49b498['hasRedirection'] = !![]);
                        }
                    } else {
                        if (_0x3efc2e['resolveRedirectTo'])
                            return _0x428617['resolve'](_0x2a15fc['invoke'](_0x3efc2e['resolveRedirectTo']))['then'](function (_0x35fd7d) {
                                return angular['isDefined'](_0x35fd7d) && (_0x49b498['url'] = _0x35fd7d, _0x49b498['hasRedirection'] = !![]), _0x49b498;
                            });
                    }
                }
                return _0x49b498;
            }
            function _0x50b99f(_0x1f23ca) {
                var _0x2ad4f7 = !![];
                if (_0x244474['GDZAG'](_0x1f23ca['route'], _0x5457bf['current']))
                    _0x2ad4f7 = ![];
                else {
                    if (_0x1f23ca['hasRedirection']) {
                        var _0x4b507e = _0x4fc14f['url'](), _0x44c01f = _0x1f23ca['url'];
                        _0x44c01f ? _0x4fc14f['url'](_0x44c01f)['replace']() : _0x44c01f = _0x4fc14f['path'](_0x1f23ca['path'])['search'](_0x1f23ca['search'])['replace']()['url'](), _0x244474['GDZAG'](_0x44c01f, _0x4b507e) && (_0x2ad4f7 = ![]);
                    }
                }
                return _0x2ad4f7;
            }
            function _0x1a4450(_0x5d1f1e) {
                if (_0x5d1f1e) {
                    var _0x16eee6 = _0x244474['wQVIf']['split']('|'), _0x2c4613 = 0x0;
                    while (!![]) {
                        switch (_0x16eee6[_0x2c4613++]) {
                        case '0':
                            angular['isDefined'](_0x1f215f) && (_0x35c676[_0x244474['tPALq']] = _0x1f215f);
                            continue;
                        case '1':
                            return _0x428617['all'](_0x35c676);
                        case '2':
                            angular['forEach'](_0x35c676, function (_0x5dff86, _0x46e28e) {
                                _0x35c676[_0x46e28e] = angular['isString'](_0x5dff86) ? _0x2a15fc['get'](_0x5dff86) : _0x2a15fc['invoke'](_0x5dff86, null, null, _0x46e28e);
                            });
                            continue;
                        case '3':
                            var _0x1f215f = _0x244474['rofVL'](_0x3e5761, _0x5d1f1e);
                            continue;
                        case '4':
                            var _0x35c676 = angular['extend']({}, _0x5d1f1e['resolve']);
                            continue;
                        }
                        break;
                    }
                }
            }
            function _0x3e5761(_0x430171) {
                var _0x5bfafb, _0x378fee;
                if (angular['isDefined'](_0x5bfafb = _0x430171['template']))
                    angular['isFunction'](_0x5bfafb) && (_0x5bfafb = _0x244474['rofVL'](_0x5bfafb, _0x430171['params']));
                else
                    angular['isDefined'](_0x378fee = _0x430171['templateUrl']) && (angular['isFunction'](_0x378fee) && (_0x378fee = _0x244474['UNfHl'](_0x378fee, _0x430171['params'])), angular['isDefined'](_0x378fee) && (_0x430171['loadedTemplateUrl'] = _0x1e4640['valueOf'](_0x378fee), _0x5bfafb = _0x244474['JPRlN'](_0xfcf632, _0x378fee)));
                return _0x5bfafb;
            }
            function _0x2ccb49() {
                var _0x123739, _0x1ae1ac;
                return angular['forEach'](_0x2d648c, function (_0x4a7be2, _0x2c8cd4) {
                    !_0x1ae1ac && (_0x123739 = _0x244474['sHzUk'](_0x53f76d, _0x4fc14f['path'](), _0x4a7be2)) && (_0x1ae1ac = _0x244474['QzKvS'](_0x490287, _0x4a7be2, {
                        'params': angular['extend']({}, _0x4fc14f['search'](), _0x123739),
                        'pathParams': _0x123739
                    }), _0x1ae1ac['$$route'] = _0x4a7be2);
                }), _0x1ae1ac || _0x2d648c[null] && _0x2f4d67['epnUn'](_0x490287, _0x2d648c[null], {
                    'params': {},
                    'pathParams': {}
                });
            }
            function _0xa84c1e(_0x3b6c15, _0x331ece) {
                return _0x244474['JNFOt'](!_0x34fcf9, _0x3b6c15) && _0x331ece && _0x244474['pRidC'](_0x3b6c15['$$route'], _0x331ece['$$route']) && (!_0x3b6c15['reloadOnUrl'] || !_0x3b6c15['reloadOnSearch'] && angular['equals'](_0x3b6c15['pathParams'], _0x331ece['pathParams']));
            }
            function _0x68a226(_0x204e0c, _0x108dc6) {
                var _0x1f3bf7 = [];
                return angular['forEach'](_0x244474['VTXSn'](_0x204e0c, '')['split'](':'), function (_0x294dd3, _0x441ecc) {
                    if (_0x244474['vHfZf'](_0x441ecc, 0x0))
                        _0x1f3bf7['push'](_0x294dd3);
                    else {
                        var _0x231261 = _0x244474['jBPpD']['split']('|'), _0x71b924 = 0x0;
                        while (!![]) {
                            switch (_0x231261[_0x71b924++]) {
                            case '0':
                                _0x1f3bf7['push'](_0x108dc6[_0x2f106f]);
                                continue;
                            case '1':
                                delete _0x108dc6[_0x2f106f];
                                continue;
                            case '2':
                                var _0x569f73 = _0x294dd3['match'](/(\w+)(?:[?*])?(.*)/);
                                continue;
                            case '3':
                                var _0x2f106f = _0x569f73[0x1];
                                continue;
                            case '4':
                                _0x1f3bf7['push'](_0x569f73[0x2] || '');
                                continue;
                            }
                            break;
                        }
                    }
                }), _0x1f3bf7['join']('');
            }
        }
    ];
}
instantiateRoute['$inject'] = ['$injector'];
function instantiateRoute(_0x557f5b) {
    var _0x4653e1 = { 'ZgGVb': '$route' };
    isEagerInstantiationEnabled && _0x557f5b['get'](_0x4653e1['ZgGVb']);
}
