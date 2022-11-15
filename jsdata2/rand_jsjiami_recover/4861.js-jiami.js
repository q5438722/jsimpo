var current = process['versions'] && process['versions']['node'] && process['versions']['node']['split']('.') || [];
function specifierIncluded(_0x29d8e0) {
    var _0x4452a8 = _0x29d8e0['split'](' ');
    var _0x48c38b = _0x4452a8['length'] > 1 ? _0x4452a8[0] : '=';
    var _0x470888 = (_0x4452a8['length'] > 1 ? _0x4452a8[1] : _0x4452a8[0])['split']('.');
    for (var _0x2ad409 = 0; _0x2ad409 < 3; ++_0x2ad409) {
        if ('VuQZD' === 'XPsAR') {
            return ![];
        } else {
            var _0x58949b = Number(current[_0x2ad409] || 0);
            var _0x2be063 = Number(_0x470888[_0x2ad409] || 0);
            if (_0x58949b === _0x2be063) {
                continue;
            }
            if (_0x48c38b === '<') {
                if ('yeixr' !== 'HboKl') {
                    return _0x58949b < _0x2be063;
                } else {
                    return specifierValue;
                }
            } else if (_0x48c38b === '>=') {
                return _0x58949b >= _0x2be063;
            } else {
                if ('wtieB' !== 'tcmGq') {
                    return ![];
                } else {
                    if (!specifierIncluded(specifiers[_0x2ad409])) {
                        return ![];
                    }
                }
            }
        }
    }
    return _0x48c38b === '>=';
}
function matchesRange(_0x2ddb54) {
    var _0x1b6858 = _0x2ddb54['split'](/ ?&& ?/);
    if (_0x1b6858['length'] === 0) {
        return ![];
    }
    for (var _0x1cbd0c = 0; _0x1cbd0c < _0x1b6858['length']; ++_0x1cbd0c) {
        if (!specifierIncluded(_0x1b6858[_0x1cbd0c])) {
            if ('WfBrQ' !== 'WfBrQ') {
                return ![];
            } else {
                return ![];
            }
        }
    }
    return !![];
}
function versionIncluded(_0xefb46c) {
    if (typeof _0xefb46c === 'boolean') {
        if ('HnJCx' === 'Ruesj') {
            for (var _0xa5709a = 0; _0xa5709a < _0xefb46c['length']; ++_0xa5709a) {
                if (matchesRange(_0xefb46c[_0xa5709a])) {
                    return !![];
                }
            }
            return ![];
        } else {
            return _0xefb46c;
        }
    }
    if (_0xefb46c && typeof _0xefb46c === 'object') {
        if ('KmraT' === 'FKDFf') {
            return cur >= ver;
        } else {
            for (var _0x27e3fc = 0; _0x27e3fc < _0xefb46c['length']; ++_0x27e3fc) {
                if ('xqNTU' !== 'xqNTU') {
                    return !![];
                } else {
                    if (matchesRange(_0xefb46c[_0x27e3fc])) {
                        return !![];
                    }
                }
            }
            return ![];
        }
    }
    return matchesRange(_0xefb46c);
}
var data = require('./core.json');
var core = {};
for (var mod in data) {
    if (Object['prototype']['hasOwnProperty']['call'](data, mod)) {
        core[mod] = versionIncluded(data[mod]);
    }
}
module['exports'] = core;