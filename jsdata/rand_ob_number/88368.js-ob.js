if (Meteor['isServer'])
    var Future = Npm['require']('fibers/future');
typeof __meteor_runtime_config__ === 'object' && __meteor_runtime_config__['meteorRelease'] && (Meteor['release'] = __meteor_runtime_config__['meteorRelease']);
Meteor['_get'] = function (_0x803046) {
    for (var _0xf9f0c6 = 0x3 * 0x5d1 + -0x299 + -0xed9; _0xf9f0c6 < arguments['length']; _0xf9f0c6++) {
        if (!(arguments[_0xf9f0c6] in _0x803046))
            return undefined;
        _0x803046 = _0x803046[arguments[_0xf9f0c6]];
    }
    return _0x803046;
}, Meteor['_ensure'] = function (_0x34fe91) {
    for (var _0x455a39 = 0x2320 + 0x155e + 0x387d * -0x1; _0x455a39 < arguments['length']; _0x455a39++) {
        var _0x2e980a = arguments[_0x455a39];
        if (!(_0x2e980a in _0x34fe91))
            _0x34fe91[_0x2e980a] = {};
        _0x34fe91 = _0x34fe91[_0x2e980a];
    }
    return _0x34fe91;
}, Meteor['_delete'] = function (_0x274c47) {
    var _0x540c2f = [_0x274c47], _0xcfefe6 = !![];
    for (var _0x49066a = 0x1 * 0x2677 + -0x1009 + -0x1 * 0x166d; _0x49066a < arguments['length'] - (-0x4 * -0x973 + -0x1 * 0x391 + -0x223a); _0x49066a++) {
        var _0x9e74d2 = arguments[_0x49066a];
        if (!(_0x9e74d2 in _0x274c47)) {
            _0xcfefe6 = ![];
            break;
        }
        _0x274c47 = _0x274c47[_0x9e74d2];
        if (typeof _0x274c47 !== 'object')
            break;
        _0x540c2f['push'](_0x274c47);
    }
    for (var _0x49066a = _0x540c2f['length'] - (-0xd1 * 0x11 + -0x137a + -0x7 * -0x4c4); _0x49066a >= 0x17b * 0xb + 0x1cf3 * -0x1 + -0x1 * -0xcaa; _0x49066a--) {
        var _0x9e74d2 = arguments[_0x49066a + (0x2 * 0xf2a + 0x1cdf + -0x3b32)];
        if (_0xcfefe6)
            _0xcfefe6 = ![];
        else {
            for (var _0x23f9eb in _0x540c2f[_0x49066a][_0x9e74d2])
                return;
        }
        delete _0x540c2f[_0x49066a][_0x9e74d2];
    }
}, Meteor['wrapAsync'] = function (_0x199ac8, _0x146cf3) {
    return function () {
        var _0x48c06d = _0x146cf3 || this, _0x54ac29 = Array['prototype']['slice']['call'](arguments), _0x335aaf;
        for (var _0x98f1f9 = _0x54ac29['length'] - (0x1 * 0x1120 + 0x187f * 0x1 + -0x2 * 0x14cf); _0x98f1f9 >= -0xa3 * -0x2c + -0x21fd + 0x5f9; --_0x98f1f9) {
            var _0x2404f6 = _0x54ac29[_0x98f1f9], _0x25bb9d = typeof _0x2404f6;
            if (_0x25bb9d !== 'undefined') {
                _0x25bb9d === 'function' && (_0x335aaf = _0x2404f6);
                break;
            }
        }
        if (!_0x335aaf) {
            if (Meteor['isClient'])
                _0x335aaf = logErr;
            else {
                var _0xd15f40 = new Future();
                _0x335aaf = _0xd15f40['resolver']();
            }
            ++_0x98f1f9;
        }
        _0x54ac29[_0x98f1f9] = Meteor['bindEnvironment'](_0x335aaf);
        var _0x4e2e11 = _0x199ac8['apply'](_0x48c06d, _0x54ac29);
        return _0xd15f40 ? _0xd15f40['wait']() : _0x4e2e11;
    };
};
var hasOwn = Object['prototype']['hasOwnProperty'];
Meteor['_inherits'] = function (_0x1373cf, _0x2b7dfe) {
    for (var _0x475a43 in _0x2b7dfe) {
        hasOwn['call'](_0x2b7dfe, _0x475a43) && (_0x1373cf[_0x475a43] = _0x2b7dfe[_0x475a43]);
    }
    var _0x4254bd = function () {
        this['constructor'] = _0x1373cf;
    };
    return _0x4254bd['prototype'] = _0x2b7dfe['prototype'], _0x1373cf['prototype'] = new _0x4254bd(), _0x1373cf['__super__'] = _0x2b7dfe['prototype'], _0x1373cf;
};
var warnedAboutWrapAsync = ![];
Meteor['_wrapAsync'] = function (_0x477ae9, _0x5bd217) {
    return !warnedAboutWrapAsync && (Meteor['_debug']('Meteor._wrapAsync\x20has\x20been\x20renamed\x20to\x20Meteor.wrapAsync'), warnedAboutWrapAsync = !![]), Meteor['wrapAsync']['apply'](Meteor, arguments);
};
function logErr(_0x283e5a) {
    if (_0x283e5a)
        return Meteor['_debug']('Exception\x20in\x20callback\x20of\x20async\x20function', _0x283e5a);
}
