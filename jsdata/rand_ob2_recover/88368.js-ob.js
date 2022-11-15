if (Meteor[_0x32d3bd(479)])
    var Future = Npm[_0x32d3bd(480)](_0x32d3bd(481));
typeof __meteor_runtime_config__ === _0x32d3bd(482) && __meteor_runtime_config__[_0x32d3bd(483)] && (Meteor[_0x32d3bd(484)] = __meteor_runtime_config__[_0x32d3bd(483)]);
Meteor[_0x32d3bd(485)] = function (_0x34edab) {
    var _0x35b8b3 = _0x32d3bd;
    for (var _0x317e57 = 1; _0x317e57 < arguments[_0x35b8b3(486)]; _0x317e57++) {
        if (!(arguments[_0x317e57] in _0x34edab))
            return undefined;
        _0x34edab = _0x34edab[arguments[_0x317e57]];
    }
    return _0x34edab;
}, Meteor[_0x32d3bd(487)] = function (_0x4b3ea6) {
    for (var _0x3cb945 = 1; _0x3cb945 < arguments['length']; _0x3cb945++) {
        var _0x39b221 = arguments[_0x3cb945];
        if (!(_0x39b221 in _0x4b3ea6))
            _0x4b3ea6[_0x39b221] = {};
        _0x4b3ea6 = _0x4b3ea6[_0x39b221];
    }
    return _0x4b3ea6;
}, Meteor[_0x32d3bd(488)] = function (_0x359d41) {
    var _0x38f74e = _0x32d3bd, _0x49c6c3 = [_0x359d41], _0x570d6e = !![];
    for (var _0x35939d = 1; _0x35939d < arguments[_0x38f74e(486)] - 1; _0x35939d++) {
        var _0x27280c = arguments[_0x35939d];
        if (!(_0x27280c in _0x359d41)) {
            _0x570d6e = ![];
            break;
        }
        _0x359d41 = _0x359d41[_0x27280c];
        if (typeof _0x359d41 !== _0x38f74e(482))
            break;
        _0x49c6c3[_0x38f74e(489)](_0x359d41);
    }
    for (var _0x35939d = _0x49c6c3[_0x38f74e(486)] - 1; _0x35939d >= 0; _0x35939d--) {
        var _0x27280c = arguments[_0x35939d + 1];
        if (_0x570d6e)
            _0x570d6e = ![];
        else {
            for (var _0x47002d in _0x49c6c3[_0x35939d][_0x27280c])
                return;
        }
        delete _0x49c6c3[_0x35939d][_0x27280c];
    }
}, Meteor[_0x32d3bd(490)] = function (_0x45adce, _0x29c63b) {
    return function () {
        var _0x2acf24 = _0x2cbd, _0x6ce133 = _0x29c63b || this, _0x41d4aa = Array[_0x2acf24(491)][_0x2acf24(492)][_0x2acf24(493)](arguments), _0x156f42;
        for (var _0x2797fb = _0x41d4aa[_0x2acf24(486)] - 1; _0x2797fb >= 0; --_0x2797fb) {
            var _0x5e1e35 = _0x41d4aa[_0x2797fb], _0x3bfd6d = typeof _0x5e1e35;
            if (_0x3bfd6d !== _0x2acf24(494)) {
                _0x3bfd6d === 'function' && (_0x156f42 = _0x5e1e35);
                break;
            }
        }
        if (!_0x156f42) {
            if (Meteor[_0x2acf24(495)])
                _0x156f42 = logErr;
            else {
                var _0xa6c068 = new Future();
                _0x156f42 = _0xa6c068[_0x2acf24(496)]();
            }
            ++_0x2797fb;
        }
        _0x41d4aa[_0x2797fb] = Meteor['bindEnvironment'](_0x156f42);
        var _0x16b3e5 = _0x45adce['apply'](_0x6ce133, _0x41d4aa);
        return _0xa6c068 ? _0xa6c068[_0x2acf24(497)]() : _0x16b3e5;
    };
};
var hasOwn = Object[_0x32d3bd(491)][_0x32d3bd(498)];
Meteor[_0x32d3bd(499)] = function (_0x1abd84, _0x995f99) {
    var _0x272888 = _0x32d3bd;
    for (var _0x53b0c4 in _0x995f99) {
        hasOwn['call'](_0x995f99, _0x53b0c4) && (_0x1abd84[_0x53b0c4] = _0x995f99[_0x53b0c4]);
    }
    var _0xeddffb = function () {
        var _0x38abfb = _0x2cbd;
        this[_0x38abfb(500)] = _0x1abd84;
    };
    return _0xeddffb['prototype'] = _0x995f99[_0x272888(491)], _0x1abd84[_0x272888(491)] = new _0xeddffb(), _0x1abd84[_0x272888(501)] = _0x995f99[_0x272888(491)], _0x1abd84;
};
var warnedAboutWrapAsync = ![];
Meteor[_0x32d3bd(502)] = function (_0x1fb948, _0x56a8f6) {
    var _0x2c436f = _0x32d3bd;
    return !warnedAboutWrapAsync && (Meteor[_0x2c436f(503)](_0x2c436f(504)), warnedAboutWrapAsync = !![]), Meteor[_0x2c436f(490)]['apply'](Meteor, arguments);
};
function logErr(_0x425562) {
    var _0x46df94 = _0x32d3bd;
    if (_0x425562)
        return Meteor[_0x46df94(503)](_0x46df94(505), _0x425562);
}