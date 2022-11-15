if (Meteor['isServer'])
    var Future = Npm['require']('fibers/future');
if (typeof __meteor_runtime_config__ === 'object' && __meteor_runtime_config__['meteorRelease']) {
    Meteor['release'] = __meteor_runtime_config__['meteorRelease'];
}
Meteor['_get'] = function (_0x431904) {
    for (var _0x514bd6 = 1; _0x514bd6 < arguments['length']; _0x514bd6++) {
        if (!(arguments[_0x514bd6] in _0x431904))
            return undefined;
        _0x431904 = _0x431904[arguments[_0x514bd6]];
    }
    return _0x431904;
};
Meteor['_ensure'] = function (_0x11bbd3) {
    for (var _0x344975 = 1; _0x344975 < arguments['length']; _0x344975++) {
        if ('RWRaO' !== 'RWRaO') {
            if (!(arguments[_0x344975] in _0x11bbd3))
                return undefined;
            _0x11bbd3 = _0x11bbd3[arguments[_0x344975]];
        } else {
            var _0x3191c0 = arguments[_0x344975];
            if (!(_0x3191c0 in _0x11bbd3))
                _0x11bbd3[_0x3191c0] = {};
            _0x11bbd3 = _0x11bbd3[_0x3191c0];
        }
    }
    return _0x11bbd3;
};
Meteor['_delete'] = function (_0x25f9e1) {
    var _0x583d46 = [_0x25f9e1];
    var _0x207d2e = !![];
    for (var _0x7d0c0b = 1; _0x7d0c0b < arguments['length'] - 1; _0x7d0c0b++) {
        if ('Myxav' === 'yAqNX') {
            Meteor['release'] = __meteor_runtime_config__['meteorRelease'];
        } else {
            var _0x32ef5a = arguments[_0x7d0c0b];
            if (!(_0x32ef5a in _0x25f9e1)) {
                _0x207d2e = ![];
                break;
            }
            _0x25f9e1 = _0x25f9e1[_0x32ef5a];
            if (typeof _0x25f9e1 !== 'object')
                break;
            _0x583d46['push'](_0x25f9e1);
        }
    }
    for (var _0x7d0c0b = _0x583d46['length'] - 1; _0x7d0c0b >= 0; _0x7d0c0b--) {
        if ('GXgKD' !== 'tSuzZ') {
            var _0x32ef5a = arguments[_0x7d0c0b + 1];
            if (_0x207d2e)
                _0x207d2e = ![];
            else
                for (var _0x217bf2 in _0x583d46[_0x7d0c0b][_0x32ef5a])
                    return;
            delete _0x583d46[_0x7d0c0b][_0x32ef5a];
        } else {
            this['constructor'] = Child;
        }
    }
};
Meteor['wrapAsync'] = function (_0x52dd07, _0x375adc) {
    return function () {
        var _0x94e55c = _0x375adc || this;
        var _0x24e6bc = Array['prototype']['slice']['call'](arguments);
        var _0x2538ea;
        for (var _0x185cd1 = _0x24e6bc['length'] - 1; _0x185cd1 >= 0; --_0x185cd1) {
            var _0x328fd3 = _0x24e6bc[_0x185cd1];
            var _0x424913 = typeof _0x328fd3;
            if (_0x424913 !== 'undefined') {
                if (_0x424913 === 'function') {
                    _0x2538ea = _0x328fd3;
                }
                break;
            }
        }
        if (!_0x2538ea) {
            if ('EQxrI' === 'EQxrI') {
                if (Meteor['isClient']) {
                    _0x2538ea = logErr;
                } else {
                    if ('rOupU' === 'UajEI') {
                        if (err) {
                            return Meteor['_debug']('Exception in callback of async function', err);
                        }
                    } else {
                        var _0x481674 = new Future();
                        _0x2538ea = _0x481674['resolver']();
                    }
                }
                ++_0x185cd1;
            } else {
                var _0xf5b102 = new Future();
                _0x2538ea = _0xf5b102['resolver']();
            }
        }
        _0x24e6bc[_0x185cd1] = Meteor['bindEnvironment'](_0x2538ea);
        var _0x2e95c9 = _0x52dd07['apply'](_0x94e55c, _0x24e6bc);
        return _0x481674 ? _0x481674['wait']() : _0x2e95c9;
    };
};
var hasOwn = Object['prototype']['hasOwnProperty'];
Meteor['_inherits'] = function (_0x51ce4b, _0x3b0dc3) {
    for (var _0x6f7470 in _0x3b0dc3) {
        if (hasOwn['call'](_0x3b0dc3, _0x6f7470)) {
            if ('oLlTA' !== 'oLlTA') {
                var _0x3b0a23 = arguments[i];
                if (!(_0x3b0a23 in obj))
                    obj[_0x3b0a23] = {};
                obj = obj[_0x3b0a23];
            } else {
                _0x51ce4b[_0x6f7470] = _0x3b0dc3[_0x6f7470];
            }
        }
    }
    var _0x57fc80 = function () {
        this['constructor'] = _0x51ce4b;
    };
    _0x57fc80['prototype'] = _0x3b0dc3['prototype'];
    _0x51ce4b['prototype'] = new _0x57fc80();
    _0x51ce4b['__super__'] = _0x3b0dc3['prototype'];
    return _0x51ce4b;
};
var warnedAboutWrapAsync = ![];
Meteor['_wrapAsync'] = function (_0x446ae5, _0x121f41) {
    if (!warnedAboutWrapAsync) {
        Meteor['_debug']('Meteor._wrapAsync has been renamed to Meteor.wrapAsync');
        warnedAboutWrapAsync = !![];
    }
    return Meteor['wrapAsync']['apply'](Meteor, arguments);
};
function logErr(_0x4b1f09) {
    if (_0x4b1f09) {
        return Meteor['_debug']('Exception in callback of async function', _0x4b1f09);
    }
}