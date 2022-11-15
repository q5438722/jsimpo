if (Meteor['isServer'])
    var Future = Npm['require']('fibers/future');
typeof __meteor_runtime_config__ === 'object' && __meteor_runtime_config__['meteorRelease'] && (Meteor['release'] = __meteor_runtime_config__['meteorRelease']);
Meteor['_get'] = function (_0x4064a8) {
    var _0x11adef = {
        'QNSzb': function (_0x4bc627, _0x52a48e) {
            return _0x4bc627 < _0x52a48e;
        },
        'CzEhv': function (_0x465489, _0x39e8e8) {
            return _0x465489 in _0x39e8e8;
        }
    };
    for (var _0x2ff980 = 0x1; _0x11adef['QNSzb'](_0x2ff980, arguments['length']); _0x2ff980++) {
        if (!_0x11adef['CzEhv'](arguments[_0x2ff980], _0x4064a8))
            return undefined;
        _0x4064a8 = _0x4064a8[arguments[_0x2ff980]];
    }
    return _0x4064a8;
}, Meteor['_ensure'] = function (_0x13adb9) {
    var _0xec17ea = {
        'npeBH': function (_0x4b655f, _0x1a7909) {
            return _0x4b655f < _0x1a7909;
        },
        'vgvWR': function (_0x4b2f89, _0x2721f2) {
            return _0x4b2f89 in _0x2721f2;
        }
    };
    for (var _0x1373ec = 0x1; _0xec17ea['npeBH'](_0x1373ec, arguments['length']); _0x1373ec++) {
        var _0x152605 = arguments[_0x1373ec];
        if (!_0xec17ea['vgvWR'](_0x152605, _0x13adb9))
            _0x13adb9[_0x152605] = {};
        _0x13adb9 = _0x13adb9[_0x152605];
    }
    return _0x13adb9;
}, Meteor['_delete'] = function (_0x517740) {
    var _0x547547 = {
            'jtvHX': function (_0x316f62, _0x1502d0) {
                return _0x316f62 < _0x1502d0;
            },
            'ITuTf': function (_0x1d84bb, _0x1a30fa) {
                return _0x1d84bb - _0x1a30fa;
            },
            'gJyDu': function (_0x304315, _0x574063) {
                return _0x304315 in _0x574063;
            },
            'YGtTU': function (_0x172d06, _0x3b3acd) {
                return _0x172d06 !== _0x3b3acd;
            },
            'xJAGs': 'object',
            'VileS': function (_0x151bbb, _0x12365c) {
                return _0x151bbb - _0x12365c;
            },
            'iabFW': function (_0x3c3539, _0x4b5f18) {
                return _0x3c3539 >= _0x4b5f18;
            },
            'Dleny': function (_0x3cef2e, _0x394ec3) {
                return _0x3cef2e + _0x394ec3;
            }
        }, _0xab3cdf = [_0x517740], _0x105bc0 = !![];
    for (var _0x260a0d = 0x1; _0x547547['jtvHX'](_0x260a0d, _0x547547['ITuTf'](arguments['length'], 0x1)); _0x260a0d++) {
        var _0x556da8 = arguments[_0x260a0d];
        if (!_0x547547['gJyDu'](_0x556da8, _0x517740)) {
            _0x105bc0 = ![];
            break;
        }
        _0x517740 = _0x517740[_0x556da8];
        if (_0x547547['YGtTU'](typeof _0x517740, _0x547547['xJAGs']))
            break;
        _0xab3cdf['push'](_0x517740);
    }
    for (var _0x260a0d = _0x547547['VileS'](_0xab3cdf['length'], 0x1); _0x547547['iabFW'](_0x260a0d, 0x0); _0x260a0d--) {
        var _0x556da8 = arguments[_0x547547['Dleny'](_0x260a0d, 0x1)];
        if (_0x105bc0)
            _0x105bc0 = ![];
        else {
            for (var _0x43050c in _0xab3cdf[_0x260a0d][_0x556da8])
                return;
        }
        delete _0xab3cdf[_0x260a0d][_0x556da8];
    }
}, Meteor['wrapAsync'] = function (_0x43ba21, _0xb0b12d) {
    var _0x324141 = {
        'sbaoR': function (_0xe9b3dd, _0xb7a0a3) {
            return _0xe9b3dd - _0xb7a0a3;
        },
        'CDEuQ': function (_0x1d023f, _0x1c8688) {
            return _0x1d023f >= _0x1c8688;
        },
        'MiyPa': function (_0x7f5987, _0xe441c5) {
            return _0x7f5987 !== _0xe441c5;
        },
        'ylCcq': 'undefined',
        'oCkdf': function (_0xea0e13, _0x2cce6d) {
            return _0xea0e13 === _0x2cce6d;
        },
        'yyAdf': 'function'
    };
    return function () {
        var _0x869252 = _0xb0b12d || this, _0x4c8710 = Array['prototype']['slice']['call'](arguments), _0x477c90;
        for (var _0x403566 = _0x324141['sbaoR'](_0x4c8710['length'], 0x1); _0x324141['CDEuQ'](_0x403566, 0x0); --_0x403566) {
            var _0x53dbb8 = _0x4c8710[_0x403566], _0x112385 = typeof _0x53dbb8;
            if (_0x324141['MiyPa'](_0x112385, _0x324141['ylCcq'])) {
                _0x324141['oCkdf'](_0x112385, _0x324141['yyAdf']) && (_0x477c90 = _0x53dbb8);
                break;
            }
        }
        if (!_0x477c90) {
            if (Meteor['isClient'])
                _0x477c90 = logErr;
            else {
                var _0x3d8bca = new Future();
                _0x477c90 = _0x3d8bca['resolver']();
            }
            ++_0x403566;
        }
        _0x4c8710[_0x403566] = Meteor['bindEnvironment'](_0x477c90);
        var _0x3fee8c = _0x43ba21['apply'](_0x869252, _0x4c8710);
        return _0x3d8bca ? _0x3d8bca['wait']() : _0x3fee8c;
    };
};
var hasOwn = Object['prototype']['hasOwnProperty'];
Meteor['_inherits'] = function (_0x40499a, _0x3332cd) {
    var _0x1868ed = { 'kcCMX': '1|4|3|0|2|5' }, _0x228071 = _0x1868ed['kcCMX']['split']('|'), _0x5f554e = 0x0;
    while (!![]) {
        switch (_0x228071[_0x5f554e++]) {
        case '0':
            _0x40499a['prototype'] = new _0x157884();
            continue;
        case '1':
            for (var _0x28a7e6 in _0x3332cd) {
                hasOwn['call'](_0x3332cd, _0x28a7e6) && (_0x40499a[_0x28a7e6] = _0x3332cd[_0x28a7e6]);
            }
            continue;
        case '2':
            _0x40499a['__super__'] = _0x3332cd['prototype'];
            continue;
        case '3':
            _0x157884['prototype'] = _0x3332cd['prototype'];
            continue;
        case '4':
            var _0x157884 = function () {
                this['constructor'] = _0x40499a;
            };
            continue;
        case '5':
            return _0x40499a;
        }
        break;
    }
};
var warnedAboutWrapAsync = ![];
Meteor['_wrapAsync'] = function (_0x4bfe9b, _0x5600fd) {
    var _0x538fdc = { 'pMtOW': 'Meteor._wrapAsync\x20has\x20been\x20renamed\x20to\x20Meteor.wrapAsync' };
    return !warnedAboutWrapAsync && (Meteor['_debug'](_0x538fdc['pMtOW']), warnedAboutWrapAsync = !![]), Meteor['wrapAsync']['apply'](Meteor, arguments);
};
function logErr(_0x5156a2) {
    var _0xb06650 = { 'LGCoI': 'Exception\x20in\x20callback\x20of\x20async\x20function' };
    if (_0x5156a2)
        return Meteor['_debug'](_0xb06650['LGCoI'], _0x5156a2);
}
