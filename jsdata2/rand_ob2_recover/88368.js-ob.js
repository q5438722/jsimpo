if (Meteor[_0x2ac726(367)])
    var Future = Npm['require']('fibers/future');
typeof __meteor_runtime_config__ === _0x2ac726(368) && __meteor_runtime_config__['meteorRelease'] && (Meteor[_0x2ac726(369)] = __meteor_runtime_config__[_0x2ac726(370)]);
Meteor[_0x2ac726(371)] = function (_0x44dae9) {
    var _0x2bd67 = _0x2ac726;
    for (var _0x273c85 = 1; _0x273c85 < arguments[_0x2bd67(372)]; _0x273c85++) {
        if (!(arguments[_0x273c85] in _0x44dae9))
            return undefined;
        _0x44dae9 = _0x44dae9[arguments[_0x273c85]];
    }
    return _0x44dae9;
}, Meteor[_0x2ac726(373)] = function (_0x1991ae) {
    for (var _0x592347 = 1; _0x592347 < arguments['length']; _0x592347++) {
        var _0x49cf44 = arguments[_0x592347];
        if (!(_0x49cf44 in _0x1991ae))
            _0x1991ae[_0x49cf44] = {};
        _0x1991ae = _0x1991ae[_0x49cf44];
    }
    return _0x1991ae;
}, Meteor[_0x2ac726(374)] = function (_0x56af98) {
    var _0x30cf40 = _0x2ac726, _0x3a57af = [_0x56af98], _0x4c775e = !![];
    for (var _0xca2365 = 1; _0xca2365 < arguments['length'] - 1; _0xca2365++) {
        var _0x2eb9a7 = arguments[_0xca2365];
        if (!(_0x2eb9a7 in _0x56af98)) {
            _0x4c775e = ![];
            break;
        }
        _0x56af98 = _0x56af98[_0x2eb9a7];
        if (typeof _0x56af98 !== _0x30cf40(368))
            break;
        _0x3a57af[_0x30cf40(375)](_0x56af98);
    }
    for (var _0xca2365 = _0x3a57af[_0x30cf40(372)] - 1; _0xca2365 >= 0; _0xca2365--) {
        var _0x2eb9a7 = arguments[_0xca2365 + 1];
        if (_0x4c775e)
            _0x4c775e = ![];
        else {
            for (var _0x8d8538 in _0x3a57af[_0xca2365][_0x2eb9a7])
                return;
        }
        delete _0x3a57af[_0xca2365][_0x2eb9a7];
    }
}, Meteor[_0x2ac726(376)] = function (_0x4431b0, _0xaabac3) {
    return function () {
        var _0x422288 = _0x5c83, _0x5bf5a6 = _0xaabac3 || this, _0xdcf8df = Array[_0x422288(377)]['slice'][_0x422288(378)](arguments), _0x1359fb;
        for (var _0x2a4361 = _0xdcf8df[_0x422288(372)] - 1; _0x2a4361 >= 0; --_0x2a4361) {
            var _0x353def = _0xdcf8df[_0x2a4361], _0x2d2fd4 = typeof _0x353def;
            if (_0x2d2fd4 !== _0x422288(379)) {
                _0x2d2fd4 === _0x422288(380) && (_0x1359fb = _0x353def);
                break;
            }
        }
        if (!_0x1359fb) {
            if (Meteor[_0x422288(381)])
                _0x1359fb = logErr;
            else {
                var _0x3447d9 = new Future();
                _0x1359fb = _0x3447d9[_0x422288(382)]();
            }
            ++_0x2a4361;
        }
        _0xdcf8df[_0x2a4361] = Meteor['bindEnvironment'](_0x1359fb);
        var _0x4d3622 = _0x4431b0[_0x422288(383)](_0x5bf5a6, _0xdcf8df);
        return _0x3447d9 ? _0x3447d9[_0x422288(384)]() : _0x4d3622;
    };
};
var hasOwn = Object[_0x2ac726(377)][_0x2ac726(385)];
function _0x5c83(_0x33d426, _0x9898fd) {
    return _0x5c83 = function (_0x2e45fd, _0x5c83e6) {
        _0x2e45fd = _0x2e45fd - 356;
        var _0x5da487 = _0x2e45[_0x2e45fd];
        return _0x5da487;
    }, _0x5c83(_0x33d426, _0x9898fd);
}
Meteor['_inherits'] = function (_0x549ca6, _0x44f5a6) {
    var _0x3120cb = _0x2ac726;
    for (var _0x316425 in _0x44f5a6) {
        hasOwn[_0x3120cb(378)](_0x44f5a6, _0x316425) && (_0x549ca6[_0x316425] = _0x44f5a6[_0x316425]);
    }
    var _0x5ca55f = function () {
        this['constructor'] = _0x549ca6;
    };
    return _0x5ca55f[_0x3120cb(377)] = _0x44f5a6['prototype'], _0x549ca6[_0x3120cb(377)] = new _0x5ca55f(), _0x549ca6[_0x3120cb(386)] = _0x44f5a6[_0x3120cb(377)], _0x549ca6;
};
var warnedAboutWrapAsync = ![];
Meteor[_0x2ac726(387)] = function (_0x27d4f5, _0x252b93) {
    var _0x4aee4d = _0x2ac726;
    return !warnedAboutWrapAsync && (Meteor[_0x4aee4d(388)](_0x4aee4d(389)), warnedAboutWrapAsync = !![]), Meteor[_0x4aee4d(376)]['apply'](Meteor, arguments);
};
function logErr(_0x22cd15) {
    var _0x468b93 = _0x2ac726;
    if (_0x22cd15)
        return Meteor[_0x468b93(388)](_0x468b93(390), _0x22cd15);
}