'use strict';
var _0x1e04 = [
    '235285YcoRZb',
    '245606pcMRTw',
    '284270ANsHbS',
    '357410ULonri',
    '8518cDRrBZ',
    '124dVkNbx',
    'path',
    'convert-source-map',
    'inline-source-map',
    './lib/path-is-absolute',
    './lib/mappings-from-map',
    'join',
    'replace',
    'test',
    'dirname',
    'fromSource',
    'sourcesContent',
    'prototype',
    '_addGeneratedMap',
    'generator',
    'sources',
    'length',
    'addSourceContent',
    'sourceRoot',
    'forEach',
    'addMappings',
    'source',
    'addFile',
    'hasOwnProperty',
    'line',
    'column',
    '_addExistingMap',
    'sourceFile',
    'base64',
    'comment',
    'inlineMappingUrl',
    'commentRegex',
    'mapFileCommentRegex',
    '7870XFuCOw',
    '43ZfaRzl',
    '11UZCHPz',
    '10463hhTkaZ'
];
var _0x211579 = _0x3860;
(function (_0x30d506, _0x2887f2) {
    var _0x2ad68c = _0x3860;
    while (!![]) {
        try {
            var _0x25e69d = -parseInt(_0x2ad68c(0xeb)) * parseInt(_0x2ad68c(0xec)) + parseInt(_0x2ad68c(0xed)) * -parseInt(_0x2ad68c(0xee)) + -parseInt(_0x2ad68c(0xef)) + -parseInt(_0x2ad68c(0xf0)) + -parseInt(_0x2ad68c(0xf1)) + parseInt(_0x2ad68c(0xf2)) + -parseInt(_0x2ad68c(0xf3)) * -parseInt(_0x2ad68c(0xf4));
            if (_0x25e69d === _0x2887f2)
                break;
            else
                _0x30d506['push'](_0x30d506['shift']());
        } catch (_0x492c05) {
            _0x30d506['push'](_0x30d506['shift']());
        }
    }
}(_0x1e04, 0x2f9a2));
var path = require(_0x211579(0xf5)), convert = require(_0x211579(0xf6)), memoize = require('lodash.memoize'), createGenerator = require(_0x211579(0xf7)), pathIsAbsolute = require(_0x211579(0xf8)), mappingsFromMap = require(_0x211579(0xf9)), protocolRx = /^[a-z]+:\/\//, rebaseRelativePath = memoize(function (_0x1d54e6, _0x37f9f8, _0x241d7e) {
        var _0x299e9e = _0x211579;
        if (!_0x241d7e)
            return _0x241d7e;
        var _0x237289 = _0x37f9f8 ? path[_0x299e9e(0xfa)](_0x37f9f8, _0x241d7e) : _0x241d7e;
        _0x237289 = _0x237289[_0x299e9e(0xfb)](/\\/g, '/'), _0x1d54e6 = _0x1d54e6[_0x299e9e(0xfb)](/\\/g, '/');
        if (_0x1d54e6 === _0x237289 || pathIsAbsolute(_0x237289) || protocolRx[_0x299e9e(0xfc)](_0x237289))
            return _0x237289;
        return path['join'](path[_0x299e9e(0xfd)](_0x1d54e6), _0x237289)[_0x299e9e(0xfb)](/\\/g, '/');
    }, function (_0x8c37e6, _0x10b084, _0x122dc8) {
        return _0x8c37e6 + '::' + _0x10b084 + '::' + _0x122dc8;
    });
function resolveMap(_0x36dc80) {
    var _0x280c21 = _0x211579, _0x2be253 = convert[_0x280c21(0xfe)](_0x36dc80);
    return _0x2be253 ? _0x2be253['toObject']() : null;
}
function _0x3860(_0x4123f0, _0x1c4686) {
    return _0x3860 = function (_0x1e04a2, _0x386054) {
        _0x1e04a2 = _0x1e04a2 - 0xeb;
        var _0x56cd88 = _0x1e04[_0x1e04a2];
        return _0x56cd88;
    }, _0x3860(_0x4123f0, _0x1c4686);
}
function hasInlinedSource(_0x3ed335) {
    var _0x4a66ae = _0x211579;
    return _0x3ed335[_0x4a66ae(0xff)] && !!_0x3ed335[_0x4a66ae(0xff)][0x0];
}
function Combiner(_0x1b64b1, _0x29afc1) {
    this['generator'] = createGenerator({
        'file': _0x1b64b1 || 'generated.js',
        'sourceRoot': _0x29afc1
    });
}
Combiner[_0x211579(0x100)][_0x211579(0x101)] = function (_0x22c74f, _0xdc6fdd, _0x14f50e) {
    var _0x1169cb = _0x211579;
    return this['generator']['addGeneratedMappings'](_0x22c74f, _0xdc6fdd, _0x14f50e), this[_0x1169cb(0x102)]['addSourceContent'](_0x22c74f, _0xdc6fdd), this;
}, Combiner[_0x211579(0x100)]['_addExistingMap'] = function (_0x243d54, _0xa399f5, _0x3acaba, _0x3ac34e) {
    var _0x1b296f = _0x211579, _0x566fed = mappingsFromMap(_0x3acaba);
    for (var _0x1b459e = 0x0, _0x409663 = _0x3acaba[_0x1b296f(0x103)][_0x1b296f(0x104)]; _0x1b459e < _0x409663; _0x1b459e++) {
        if (!_0x3acaba[_0x1b296f(0xff)])
            continue;
        this[_0x1b296f(0x102)][_0x1b296f(0x105)](rebaseRelativePath(_0x243d54, _0x3acaba[_0x1b296f(0x106)], _0x3acaba[_0x1b296f(0x103)][_0x1b459e]), _0x3acaba[_0x1b296f(0xff)][_0x1b459e]);
    }
    return _0x566fed[_0x1b296f(0x107)](function (_0x4fbcb8) {
        var _0x5c97b7 = _0x1b296f;
        this['generator'][_0x5c97b7(0x108)](rebaseRelativePath(_0x243d54, null, _0x4fbcb8[_0x5c97b7(0x109)]), [_0x4fbcb8], _0x3ac34e);
    }, this), this;
}, Combiner[_0x211579(0x100)][_0x211579(0x10a)] = function (_0x1c37f5, _0x578bf6) {
    var _0x396387 = _0x211579;
    _0x578bf6 = _0x578bf6 || {};
    if (!_0x578bf6[_0x396387(0x10b)]('line'))
        _0x578bf6[_0x396387(0x10c)] = 0x0;
    if (!_0x578bf6[_0x396387(0x10b)](_0x396387(0x10d)))
        _0x578bf6[_0x396387(0x10d)] = 0x0;
    var _0xc48f18 = resolveMap(_0x1c37f5[_0x396387(0x109)]);
    return _0xc48f18 && hasInlinedSource(_0xc48f18) ? this[_0x396387(0x10e)](_0x1c37f5[_0x396387(0x10f)], _0x1c37f5[_0x396387(0x109)], _0xc48f18, _0x578bf6) : this[_0x396387(0x101)](_0x1c37f5['sourceFile'], _0x1c37f5[_0x396387(0x109)], _0x578bf6);
}, Combiner[_0x211579(0x100)][_0x211579(0x110)] = function () {
    return this['generator']['base64Encode']();
}, Combiner['prototype'][_0x211579(0x111)] = function () {
    var _0x57ba4e = _0x211579;
    return this[_0x57ba4e(0x102)][_0x57ba4e(0x112)]();
}, exports['create'] = function (_0x1f5353, _0x58a403) {
    return new Combiner(_0x1f5353, _0x58a403);
}, exports['removeComments'] = function (_0x35f86c) {
    var _0x200f07 = _0x211579;
    if (!_0x35f86c['replace'])
        return _0x35f86c;
    return _0x35f86c['replace'](convert[_0x200f07(0x113)], '')[_0x200f07(0xfb)](convert[_0x200f07(0x114)], '');
};
