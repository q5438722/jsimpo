'use strict';
var path = require('path');
var convert = require('convert-source-map');
var memoize = require('lodash.memoize');
var createGenerator = require('inline-source-map');
var pathIsAbsolute = require('./lib/path-is-absolute');
var mappingsFromMap = require('./lib/mappings-from-map');
var protocolRx = /^[a-z]+:\/\//;
var rebaseRelativePath = memoize(function (_0x5225ce, _0x1516cb, _0x393ce4) {
    if (!_0x393ce4) {
        if ('LEOAY' !== 'DXxuq') {
            return _0x393ce4;
        } else {
            this['generator']['addGeneratedMappings'](_0x5225ce, source, offset);
            this['generator']['addSourceContent'](_0x5225ce, source);
            return this;
        }
    }
    var _0x46abb1 = _0x1516cb ? path['join'](_0x1516cb, _0x393ce4) : _0x393ce4;
    _0x46abb1 = _0x46abb1['replace'](/\\/g, '/');
    _0x5225ce = _0x5225ce['replace'](/\\/g, '/');
    if (_0x5225ce === _0x46abb1 || pathIsAbsolute(_0x46abb1) || protocolRx['test'](_0x46abb1)) {
        if ('LHtQy' === 'LHtQy') {
            return _0x46abb1;
        } else {
            return _0x46abb1;
        }
    }
    return path['join'](path['dirname'](_0x5225ce), _0x46abb1)['replace'](/\\/g, '/');
}, function (_0x152d69, _0x4f465e, _0x5446c7) {
    return _0x152d69 + '::' + _0x4f465e + '::' + _0x5446c7;
});
function resolveMap(_0x368f0d) {
    var _0x106c1f = convert['fromSource'](_0x368f0d);
    return _0x106c1f ? _0x106c1f['toObject']() : null;
}
function hasInlinedSource(_0x2d012b) {
    return _0x2d012b['sourcesContent'] && !!_0x2d012b['sourcesContent'][0];
}
function Combiner(_0x206bb1, _0x4fccb3) {
    this['generator'] = createGenerator({
        'file': _0x206bb1 || 'generated.js',
        'sourceRoot': _0x4fccb3
    });
}
Combiner['prototype']['_addGeneratedMap'] = function (_0x30505b, _0x40275d, _0x378faf) {
    this['generator']['addGeneratedMappings'](_0x30505b, _0x40275d, _0x378faf);
    this['generator']['addSourceContent'](_0x30505b, _0x40275d);
    return this;
};
Combiner['prototype']['_addExistingMap'] = function (_0x583814, _0x9d8295, _0x48ae4c, _0x1832b2) {
    var _0x3982f1 = mappingsFromMap(_0x48ae4c);
    for (var _0x3a8b16 = 0, _0x885390 = _0x48ae4c['sources']['length']; _0x3a8b16 < _0x885390; _0x3a8b16++) {
        if (!_0x48ae4c['sourcesContent'])
            continue;
        this['generator']['addSourceContent'](rebaseRelativePath(_0x583814, _0x48ae4c['sourceRoot'], _0x48ae4c['sources'][_0x3a8b16]), _0x48ae4c['sourcesContent'][_0x3a8b16]);
    }
    _0x3982f1['forEach'](function (_0x1e19c0) {
        this['generator']['addMappings'](rebaseRelativePath(_0x583814, null, _0x1e19c0['source']), [_0x1e19c0], _0x1832b2);
    }, this);
    return this;
};
Combiner['prototype']['addFile'] = function (_0x36aa6f, _0x951dfe) {
    var _0x1ab37a = '4|3|0|1|2'['split']('|'), _0x2baf33 = 0;
    while (!![]) {
        switch (_0x1ab37a[_0x2baf33++]) {
        case '0':
            if (!_0x951dfe['hasOwnProperty']('column'))
                _0x951dfe['column'] = 0;
            continue;
        case '1':
            var _0x356f54 = resolveMap(_0x36aa6f['source']);
            continue;
        case '2':
            return _0x356f54 && hasInlinedSource(_0x356f54) ? this['_addExistingMap'](_0x36aa6f['sourceFile'], _0x36aa6f['source'], _0x356f54, _0x951dfe) : this['_addGeneratedMap'](_0x36aa6f['sourceFile'], _0x36aa6f['source'], _0x951dfe);
        case '3':
            if (!_0x951dfe['hasOwnProperty']('line'))
                _0x951dfe['line'] = 0;
            continue;
        case '4':
            _0x951dfe = _0x951dfe || {};
            continue;
        }
        break;
    }
};
Combiner['prototype']['base64'] = function () {
    return this['generator']['base64Encode']();
};
Combiner['prototype']['comment'] = function () {
    return this['generator']['inlineMappingUrl']();
};
exports['create'] = function (_0x810e89, _0x58b43e) {
    return new Combiner(_0x810e89, _0x58b43e);
};
exports['removeComments'] = function (_0x2faf9a) {
    if (!_0x2faf9a['replace'])
        return _0x2faf9a;
    return _0x2faf9a['replace'](convert['commentRegex'], '')['replace'](convert['mapFileCommentRegex'], '');
};