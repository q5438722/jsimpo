var path = require(_0x211579(245)), convert = require(_0x211579(246)), memoize = require('lodash.memoize'), createGenerator = require(_0x211579(247)), pathIsAbsolute = require(_0x211579(248)), mappingsFromMap = require(_0x211579(249)), protocolRx = /^[a-z]+:\/\//, rebaseRelativePath = memoize(function (_0x1d54e6, _0x37f9f8, _0x241d7e) {
        var _0x299e9e = _0x211579;
        if (!_0x241d7e)
            return _0x241d7e;
        var _0x237289 = _0x37f9f8 ? path[_0x299e9e(250)](_0x37f9f8, _0x241d7e) : _0x241d7e;
        _0x237289 = _0x237289[_0x299e9e(251)](/\\/g, '/'), _0x1d54e6 = _0x1d54e6[_0x299e9e(251)](/\\/g, '/');
        if (_0x1d54e6 === _0x237289 || pathIsAbsolute(_0x237289) || protocolRx[_0x299e9e(252)](_0x237289))
            return _0x237289;
        return path['join'](path[_0x299e9e(253)](_0x1d54e6), _0x237289)[_0x299e9e(251)](/\\/g, '/');
    }, function (_0x8c37e6, _0x10b084, _0x122dc8) {
        return _0x8c37e6 + '::' + _0x10b084 + '::' + _0x122dc8;
    });
function resolveMap(_0x36dc80) {
    var _0x280c21 = _0x211579, _0x2be253 = convert[_0x280c21(254)](_0x36dc80);
    return _0x2be253 ? _0x2be253['toObject']() : null;
}
function _0x3860(_0x4123f0, _0x1c4686) {
    return _0x3860 = function (_0x1e04a2, _0x386054) {
        _0x1e04a2 = _0x1e04a2 - 235;
        var _0x56cd88 = _0x1e04[_0x1e04a2];
        return _0x56cd88;
    }, _0x3860(_0x4123f0, _0x1c4686);
}
function hasInlinedSource(_0x3ed335) {
    var _0x4a66ae = _0x211579;
    return _0x3ed335[_0x4a66ae(255)] && !!_0x3ed335[_0x4a66ae(255)][0];
}
function Combiner(_0x1b64b1, _0x29afc1) {
    this['generator'] = createGenerator({
        'file': _0x1b64b1 || 'generated.js',
        'sourceRoot': _0x29afc1
    });
}
Combiner[_0x211579(256)][_0x211579(257)] = function (_0x22c74f, _0xdc6fdd, _0x14f50e) {
    var _0x1169cb = _0x211579;
    return this['generator']['addGeneratedMappings'](_0x22c74f, _0xdc6fdd, _0x14f50e), this[_0x1169cb(258)]['addSourceContent'](_0x22c74f, _0xdc6fdd), this;
}, Combiner[_0x211579(256)]['_addExistingMap'] = function (_0x243d54, _0xa399f5, _0x3acaba, _0x3ac34e) {
    var _0x1b296f = _0x211579, _0x566fed = mappingsFromMap(_0x3acaba);
    for (var _0x1b459e = 0, _0x409663 = _0x3acaba[_0x1b296f(259)][_0x1b296f(260)]; _0x1b459e < _0x409663; _0x1b459e++) {
        if (!_0x3acaba[_0x1b296f(255)])
            continue;
        this[_0x1b296f(258)][_0x1b296f(261)](rebaseRelativePath(_0x243d54, _0x3acaba[_0x1b296f(262)], _0x3acaba[_0x1b296f(259)][_0x1b459e]), _0x3acaba[_0x1b296f(255)][_0x1b459e]);
    }
    return _0x566fed[_0x1b296f(263)](function (_0x4fbcb8) {
        var _0x5c97b7 = _0x1b296f;
        this['generator'][_0x5c97b7(264)](rebaseRelativePath(_0x243d54, null, _0x4fbcb8[_0x5c97b7(265)]), [_0x4fbcb8], _0x3ac34e);
    }, this), this;
}, Combiner[_0x211579(256)][_0x211579(266)] = function (_0x1c37f5, _0x578bf6) {
    var _0x396387 = _0x211579;
    _0x578bf6 = _0x578bf6 || {};
    if (!_0x578bf6[_0x396387(267)]('line'))
        _0x578bf6[_0x396387(268)] = 0;
    if (!_0x578bf6[_0x396387(267)](_0x396387(269)))
        _0x578bf6[_0x396387(269)] = 0;
    var _0xc48f18 = resolveMap(_0x1c37f5[_0x396387(265)]);
    return _0xc48f18 && hasInlinedSource(_0xc48f18) ? this[_0x396387(270)](_0x1c37f5[_0x396387(271)], _0x1c37f5[_0x396387(265)], _0xc48f18, _0x578bf6) : this[_0x396387(257)](_0x1c37f5['sourceFile'], _0x1c37f5[_0x396387(265)], _0x578bf6);
}, Combiner[_0x211579(256)][_0x211579(272)] = function () {
    return this['generator']['base64Encode']();
}, Combiner['prototype'][_0x211579(273)] = function () {
    var _0x57ba4e = _0x211579;
    return this[_0x57ba4e(258)][_0x57ba4e(274)]();
}, exports['create'] = function (_0x1f5353, _0x58a403) {
    return new Combiner(_0x1f5353, _0x58a403);
}, exports['removeComments'] = function (_0x35f86c) {
    var _0x200f07 = _0x211579;
    if (!_0x35f86c['replace'])
        return _0x35f86c;
    return _0x35f86c['replace'](convert[_0x200f07(275)], '')[_0x200f07(251)](convert[_0x200f07(276)], '');
};