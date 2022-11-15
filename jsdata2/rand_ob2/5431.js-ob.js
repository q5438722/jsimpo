var _0xb2c3 = [
    'matchOne',
    'matchOne\x20loop',
    '\x0aglobstar\x20while',
    'dot\x20detected!',
    'globstar\x20swallow\x20a\x20segment,\x20and\x20continue',
    '\x0a>>>\x20no\x20match,\x20partial?',
    'toLowerCase',
    'string\x20match',
    'pattern\x20match',
    'wtf?',
    '\x5c$&',
    '686603NXENDV',
    '31998iDclBN',
    '8oHpAox',
    '603664sdefwl',
    '147024TnEGls',
    '10gfDWeo',
    '24670smisWu',
    '329025IahZoQ',
    '86026JIKMfK',
    '17gMWEkI',
    'path',
    'GLOBSTAR',
    'brace-expansion',
    '(?:',
    '[^/]',
    '(?:(?!(?:\x5c/|^)(?:\x5c.{1,2})($|\x5c/)).)*?',
    '(?:(?!(?:\x5c/|^)\x5c.).)*?',
    '().*{}+?[]^$\x5c!',
    'split',
    'reduce',
    'filter',
    'keys',
    'forEach',
    'defaults',
    'length',
    'Minimatch',
    'string',
    'glob\x20pattern\x20string\x20required',
    'nocomment',
    'charAt',
    'trim',
    'match',
    'sep',
    'join',
    'regexp',
    'comment',
    'empty',
    'make',
    'prototype',
    'debug',
    '_made',
    'options',
    'globSet',
    'pattern',
    'globParts',
    'map',
    'indexOf',
    'set',
    'parseNegate',
    'substr',
    'braceExpand',
    'undefined',
    'undefined\x20pattern',
    'nobrace',
    'parse',
    'noglobstar',
    'nocase',
    'dot',
    '(?!(?:^|\x5c/)\x5c.{1,2}(?:$|\x5c/))',
    '(?!\x5c.)',
    'clearStateChar\x20%j\x20%j',
    '%s\x09%s\x20%s\x20%j',
    '%s\x09%s\x20%s\x20%j\x20<--\x20stateChar',
    'call\x20clearStateChar\x20%j',
    'noext',
    'push',
    'open',
    'close',
    '(?:(?!(?:',
    'plType\x20%j\x20%j',
    'pop',
    'type',
    'substring',
    'slice',
    'reStart',
    'setting\x20tail',
    'reEnd',
    'replace',
    '_src',
    'makeRe',
    'negate',
    '^(?!',
    ').*$',
    'nonull',
    'matchBase',
    'flipNegate'
];
var _0x365fd1 = _0x1dc8;
(function (_0xdf161e, _0xaa8548) {
    var _0x43bfa8 = _0x1dc8;
    while (!![]) {
        try {
            var _0x3f8452 = -parseInt(_0x43bfa8(0x1af)) + parseInt(_0x43bfa8(0x1b0)) * -parseInt(_0x43bfa8(0x1b1)) + parseInt(_0x43bfa8(0x1b2)) + -parseInt(_0x43bfa8(0x1b3)) + -parseInt(_0x43bfa8(0x1b4)) * parseInt(_0x43bfa8(0x1b5)) + -parseInt(_0x43bfa8(0x1b6)) + parseInt(_0x43bfa8(0x1b7)) * parseInt(_0x43bfa8(0x1b8));
            if (_0x3f8452 === _0xaa8548)
                break;
            else
                _0xdf161e['push'](_0xdf161e['shift']());
        } catch (_0x456648) {
            _0xdf161e['push'](_0xdf161e['shift']());
        }
    }
}(_0xb2c3, 0x61d82), module['exports'] = minimatch, minimatch['Minimatch'] = Minimatch);
var path = { 'sep': '/' };
try {
    path = require(_0x365fd1(0x1b9));
} catch (_0x24227f) {
}
var GLOBSTAR = minimatch[_0x365fd1(0x1ba)] = Minimatch[_0x365fd1(0x1ba)] = {}, expand = require(_0x365fd1(0x1bb)), plTypes = {
        '!': {
            'open': '(?:(?!(?:',
            'close': '))[^/]*?)'
        },
        '?': {
            'open': _0x365fd1(0x1bc),
            'close': ')?'
        },
        '+': {
            'open': _0x365fd1(0x1bc),
            'close': ')+'
        },
        '*': {
            'open': _0x365fd1(0x1bc),
            'close': ')*'
        },
        '@': {
            'open': _0x365fd1(0x1bc),
            'close': ')'
        }
    }, qmark = _0x365fd1(0x1bd), star = qmark + '*?', twoStarDot = _0x365fd1(0x1be), twoStarNoDot = _0x365fd1(0x1bf), reSpecials = charSet(_0x365fd1(0x1c0));
function charSet(_0x469861) {
    var _0x70f850 = _0x365fd1;
    return _0x469861[_0x70f850(0x1c1)]('')[_0x70f850(0x1c2)](function (_0x16b98e, _0x25bb5a) {
        return _0x16b98e[_0x25bb5a] = !![], _0x16b98e;
    }, {});
}
var slashSplit = /\/+/;
minimatch[_0x365fd1(0x1c3)] = filter;
function filter(_0x2fe4de, _0x32d1a5) {
    return _0x32d1a5 = _0x32d1a5 || {}, function (_0x59b9c7, _0x2e7fb6, _0x18ac40) {
        return minimatch(_0x59b9c7, _0x2fe4de, _0x32d1a5);
    };
}
function ext(_0x440914, _0x18f8e3) {
    var _0xdbafc = _0x365fd1;
    _0x440914 = _0x440914 || {}, _0x18f8e3 = _0x18f8e3 || {};
    var _0x21086f = {};
    return Object[_0xdbafc(0x1c4)](_0x18f8e3)['forEach'](function (_0x34eaf0) {
        _0x21086f[_0x34eaf0] = _0x18f8e3[_0x34eaf0];
    }), Object[_0xdbafc(0x1c4)](_0x440914)[_0xdbafc(0x1c5)](function (_0x7e3a60) {
        _0x21086f[_0x7e3a60] = _0x440914[_0x7e3a60];
    }), _0x21086f;
}
minimatch[_0x365fd1(0x1c6)] = function (_0x52d572) {
    var _0x47ec3f = _0x365fd1;
    if (!_0x52d572 || !Object['keys'](_0x52d572)[_0x47ec3f(0x1c7)])
        return minimatch;
    var _0x298518 = minimatch, _0xf78d2a = function _0x5bdd4e(_0x58ae95, _0x2bbd95, _0x3c8f46) {
            return _0x298518['minimatch'](_0x58ae95, _0x2bbd95, ext(_0x52d572, _0x3c8f46));
        };
    return _0xf78d2a[_0x47ec3f(0x1c8)] = function _0x4c8e69(_0x1bf32b, _0x3dd91d) {
        return new _0x298518['Minimatch'](_0x1bf32b, ext(_0x52d572, _0x3dd91d));
    }, _0xf78d2a;
}, Minimatch[_0x365fd1(0x1c6)] = function (_0x3f914c) {
    var _0xbf7807 = _0x365fd1;
    if (!_0x3f914c || !Object['keys'](_0x3f914c)[_0xbf7807(0x1c7)])
        return Minimatch;
    return minimatch[_0xbf7807(0x1c6)](_0x3f914c)[_0xbf7807(0x1c8)];
};
function minimatch(_0x39a78a, _0x10c30c, _0x2457c8) {
    var _0x32ed96 = _0x365fd1;
    if (typeof _0x10c30c !== _0x32ed96(0x1c9))
        throw new TypeError(_0x32ed96(0x1ca));
    if (!_0x2457c8)
        _0x2457c8 = {};
    if (!_0x2457c8[_0x32ed96(0x1cb)] && _0x10c30c[_0x32ed96(0x1cc)](0x0) === '#')
        return ![];
    if (_0x10c30c[_0x32ed96(0x1cd)]() === '')
        return _0x39a78a === '';
    return new Minimatch(_0x10c30c, _0x2457c8)[_0x32ed96(0x1ce)](_0x39a78a);
}
function Minimatch(_0x540339, _0x3e0bf0) {
    var _0x3c904e = _0x365fd1;
    if (!(this instanceof Minimatch))
        return new Minimatch(_0x540339, _0x3e0bf0);
    if (typeof _0x540339 !== 'string')
        throw new TypeError(_0x3c904e(0x1ca));
    if (!_0x3e0bf0)
        _0x3e0bf0 = {};
    _0x540339 = _0x540339['trim'](), path[_0x3c904e(0x1cf)] !== '/' && (_0x540339 = _0x540339['split'](path[_0x3c904e(0x1cf)])[_0x3c904e(0x1d0)]('/')), this['options'] = _0x3e0bf0, this['set'] = [], this['pattern'] = _0x540339, this[_0x3c904e(0x1d1)] = null, this['negate'] = ![], this[_0x3c904e(0x1d2)] = ![], this[_0x3c904e(0x1d3)] = ![], this[_0x3c904e(0x1d4)]();
}
Minimatch[_0x365fd1(0x1d5)][_0x365fd1(0x1d6)] = function () {
}, Minimatch[_0x365fd1(0x1d5)][_0x365fd1(0x1d4)] = make;
function make() {
    var _0x2d0025 = _0x365fd1;
    if (this[_0x2d0025(0x1d7)])
        return;
    var _0x224d63 = this['pattern'], _0x4870a0 = this[_0x2d0025(0x1d8)];
    if (!_0x4870a0[_0x2d0025(0x1cb)] && _0x224d63['charAt'](0x0) === '#') {
        this['comment'] = !![];
        return;
    }
    if (!_0x224d63) {
        this[_0x2d0025(0x1d3)] = !![];
        return;
    }
    this['parseNegate']();
    var _0x3d3c9f = this[_0x2d0025(0x1d9)] = this['braceExpand']();
    if (_0x4870a0[_0x2d0025(0x1d6)])
        this[_0x2d0025(0x1d6)] = console['error'];
    this['debug'](this[_0x2d0025(0x1da)], _0x3d3c9f), _0x3d3c9f = this[_0x2d0025(0x1db)] = _0x3d3c9f[_0x2d0025(0x1dc)](function (_0xeddf10) {
        return _0xeddf10['split'](slashSplit);
    }), this[_0x2d0025(0x1d6)](this[_0x2d0025(0x1da)], _0x3d3c9f), _0x3d3c9f = _0x3d3c9f['map'](function (_0x16c8c3, _0x234ad6, _0x482f70) {
        var _0x5ef786 = _0x2d0025;
        return _0x16c8c3[_0x5ef786(0x1dc)](this['parse'], this);
    }, this), this['debug'](this[_0x2d0025(0x1da)], _0x3d3c9f), _0x3d3c9f = _0x3d3c9f[_0x2d0025(0x1c3)](function (_0x3df732) {
        var _0x5afdca = _0x2d0025;
        return _0x3df732[_0x5afdca(0x1dd)](![]) === -0x1;
    }), this['debug'](this['pattern'], _0x3d3c9f), this[_0x2d0025(0x1de)] = _0x3d3c9f;
}
Minimatch['prototype'][_0x365fd1(0x1df)] = parseNegate;
function parseNegate() {
    var _0x5a266f = _0x365fd1, _0x2382f8 = this[_0x5a266f(0x1da)], _0x30d25f = ![], _0x202960 = this[_0x5a266f(0x1d8)], _0x342f52 = 0x0;
    if (_0x202960['nonegate'])
        return;
    for (var _0x5ddad8 = 0x0, _0x14f1ff = _0x2382f8[_0x5a266f(0x1c7)]; _0x5ddad8 < _0x14f1ff && _0x2382f8['charAt'](_0x5ddad8) === '!'; _0x5ddad8++) {
        _0x30d25f = !_0x30d25f, _0x342f52++;
    }
    if (_0x342f52)
        this[_0x5a266f(0x1da)] = _0x2382f8[_0x5a266f(0x1e0)](_0x342f52);
    this['negate'] = _0x30d25f;
}
minimatch[_0x365fd1(0x1e1)] = function (_0xb3cc12, _0x38ae12) {
    return braceExpand(_0xb3cc12, _0x38ae12);
}, Minimatch[_0x365fd1(0x1d5)][_0x365fd1(0x1e1)] = braceExpand;
function braceExpand(_0x2a77b8, _0x5b2820) {
    var _0x3d93a0 = _0x365fd1;
    !_0x5b2820 && (this instanceof Minimatch ? _0x5b2820 = this[_0x3d93a0(0x1d8)] : _0x5b2820 = {});
    _0x2a77b8 = typeof _0x2a77b8 === 'undefined' ? this['pattern'] : _0x2a77b8;
    if (typeof _0x2a77b8 === _0x3d93a0(0x1e2))
        throw new TypeError(_0x3d93a0(0x1e3));
    if (_0x5b2820[_0x3d93a0(0x1e4)] || !_0x2a77b8[_0x3d93a0(0x1ce)](/\{.*\}/))
        return [_0x2a77b8];
    return expand(_0x2a77b8);
}
Minimatch['prototype'][_0x365fd1(0x1e5)] = parse;
function _0x1dc8(_0x3ec48c, _0x44cb92) {
    return _0x1dc8 = function (_0xb2c337, _0x1dc8d5) {
        _0xb2c337 = _0xb2c337 - 0x1af;
        var _0x3bd65b = _0xb2c3[_0xb2c337];
        return _0x3bd65b;
    }, _0x1dc8(_0x3ec48c, _0x44cb92);
}
var SUBPARSE = {};
function parse(_0x2cb846, _0xc436d9) {
    var _0x1ec61c = _0x365fd1;
    if (_0x2cb846[_0x1ec61c(0x1c7)] > 0x400 * 0x40)
        throw new TypeError('pattern\x20is\x20too\x20long');
    var _0x2b6dc8 = this[_0x1ec61c(0x1d8)];
    if (!_0x2b6dc8[_0x1ec61c(0x1e6)] && _0x2cb846 === '**')
        return GLOBSTAR;
    if (_0x2cb846 === '')
        return '';
    var _0x5a8725 = '', _0x462494 = !!_0x2b6dc8[_0x1ec61c(0x1e7)], _0x36b85b = ![], _0x18d6e8 = [], _0x6998a0 = [], _0x1a4d24, _0x179b52 = ![], _0xbf2585 = -0x1, _0x2422d0 = -0x1, _0xa72344 = _0x2cb846[_0x1ec61c(0x1cc)](0x0) === '.' ? '' : _0x2b6dc8[_0x1ec61c(0x1e8)] ? _0x1ec61c(0x1e9) : _0x1ec61c(0x1ea), _0x32d205 = this;
    function _0x1fffac() {
        var _0x278827 = _0x1ec61c;
        if (_0x1a4d24) {
            switch (_0x1a4d24) {
            case '*':
                _0x5a8725 += star, _0x462494 = !![];
                break;
            case '?':
                _0x5a8725 += qmark, _0x462494 = !![];
                break;
            default:
                _0x5a8725 += '\x5c' + _0x1a4d24;
                break;
            }
            _0x32d205['debug'](_0x278827(0x1eb), _0x1a4d24, _0x5a8725), _0x1a4d24 = ![];
        }
    }
    for (var _0x2767a2 = 0x0, _0x3e12ce = _0x2cb846[_0x1ec61c(0x1c7)], _0x5ccac1; _0x2767a2 < _0x3e12ce && (_0x5ccac1 = _0x2cb846[_0x1ec61c(0x1cc)](_0x2767a2)); _0x2767a2++) {
        this[_0x1ec61c(0x1d6)](_0x1ec61c(0x1ec), _0x2cb846, _0x2767a2, _0x5a8725, _0x5ccac1);
        if (_0x36b85b && reSpecials[_0x5ccac1]) {
            _0x5a8725 += '\x5c' + _0x5ccac1, _0x36b85b = ![];
            continue;
        }
        switch (_0x5ccac1) {
        case '/':
            return ![];
        case '\x5c':
            _0x1fffac(), _0x36b85b = !![];
            continue;
        case '?':
        case '*':
        case '+':
        case '@':
        case '!':
            this['debug'](_0x1ec61c(0x1ed), _0x2cb846, _0x2767a2, _0x5a8725, _0x5ccac1);
            if (_0x179b52) {
                this[_0x1ec61c(0x1d6)]('\x20\x20in\x20class');
                if (_0x5ccac1 === '!' && _0x2767a2 === _0x2422d0 + 0x1)
                    _0x5ccac1 = '^';
                _0x5a8725 += _0x5ccac1;
                continue;
            }
            _0x32d205['debug'](_0x1ec61c(0x1ee), _0x1a4d24), _0x1fffac(), _0x1a4d24 = _0x5ccac1;
            if (_0x2b6dc8[_0x1ec61c(0x1ef)])
                _0x1fffac();
            continue;
        case '(':
            if (_0x179b52) {
                _0x5a8725 += '(';
                continue;
            }
            if (!_0x1a4d24) {
                _0x5a8725 += '\x5c(';
                continue;
            }
            _0x18d6e8[_0x1ec61c(0x1f0)]({
                'type': _0x1a4d24,
                'start': _0x2767a2 - 0x1,
                'reStart': _0x5a8725[_0x1ec61c(0x1c7)],
                'open': plTypes[_0x1a4d24][_0x1ec61c(0x1f1)],
                'close': plTypes[_0x1a4d24][_0x1ec61c(0x1f2)]
            }), _0x5a8725 += _0x1a4d24 === '!' ? _0x1ec61c(0x1f3) : '(?:', this[_0x1ec61c(0x1d6)](_0x1ec61c(0x1f4), _0x1a4d24, _0x5a8725), _0x1a4d24 = ![];
            continue;
        case ')':
            if (_0x179b52 || !_0x18d6e8[_0x1ec61c(0x1c7)]) {
                _0x5a8725 += '\x5c)';
                continue;
            }
            _0x1fffac(), _0x462494 = !![];
            var _0x1565af = _0x18d6e8[_0x1ec61c(0x1f5)]();
            _0x5a8725 += _0x1565af[_0x1ec61c(0x1f2)];
            _0x1565af[_0x1ec61c(0x1f6)] === '!' && _0x6998a0[_0x1ec61c(0x1f0)](_0x1565af);
            _0x1565af['reEnd'] = _0x5a8725[_0x1ec61c(0x1c7)];
            continue;
        case '|':
            if (_0x179b52 || !_0x18d6e8['length'] || _0x36b85b) {
                _0x5a8725 += '\x5c|', _0x36b85b = ![];
                continue;
            }
            _0x1fffac(), _0x5a8725 += '|';
            continue;
        case '[':
            _0x1fffac();
            if (_0x179b52) {
                _0x5a8725 += '\x5c' + _0x5ccac1;
                continue;
            }
            _0x179b52 = !![], _0x2422d0 = _0x2767a2, _0xbf2585 = _0x5a8725[_0x1ec61c(0x1c7)], _0x5a8725 += _0x5ccac1;
            continue;
        case ']':
            if (_0x2767a2 === _0x2422d0 + 0x1 || !_0x179b52) {
                _0x5a8725 += '\x5c' + _0x5ccac1, _0x36b85b = ![];
                continue;
            }
            if (_0x179b52) {
                var _0x231924 = _0x2cb846[_0x1ec61c(0x1f7)](_0x2422d0 + 0x1, _0x2767a2);
                try {
                    RegExp('[' + _0x231924 + ']');
                } catch (_0x117503) {
                    var _0x51d914 = this[_0x1ec61c(0x1e5)](_0x231924, SUBPARSE);
                    _0x5a8725 = _0x5a8725[_0x1ec61c(0x1e0)](0x0, _0xbf2585) + '\x5c[' + _0x51d914[0x0] + '\x5c]', _0x462494 = _0x462494 || _0x51d914[0x1], _0x179b52 = ![];
                    continue;
                }
            }
            _0x462494 = !![], _0x179b52 = ![], _0x5a8725 += _0x5ccac1;
            continue;
        default:
            _0x1fffac();
            if (_0x36b85b)
                _0x36b85b = ![];
            else
                reSpecials[_0x5ccac1] && !(_0x5ccac1 === '^' && _0x179b52) && (_0x5a8725 += '\x5c');
            _0x5a8725 += _0x5ccac1;
        }
    }
    _0x179b52 && (_0x231924 = _0x2cb846[_0x1ec61c(0x1e0)](_0x2422d0 + 0x1), _0x51d914 = this[_0x1ec61c(0x1e5)](_0x231924, SUBPARSE), _0x5a8725 = _0x5a8725[_0x1ec61c(0x1e0)](0x0, _0xbf2585) + '\x5c[' + _0x51d914[0x0], _0x462494 = _0x462494 || _0x51d914[0x1]);
    for (_0x1565af = _0x18d6e8[_0x1ec61c(0x1f5)](); _0x1565af; _0x1565af = _0x18d6e8['pop']()) {
        var _0x46f231 = _0x5a8725[_0x1ec61c(0x1f8)](_0x1565af[_0x1ec61c(0x1f9)] + _0x1565af[_0x1ec61c(0x1f1)][_0x1ec61c(0x1c7)]);
        this[_0x1ec61c(0x1d6)](_0x1ec61c(0x1fa), _0x5a8725, _0x1565af), _0x46f231 = _0x46f231['replace'](/((?:\\{2}){0,64})(\\?)\|/g, function (_0x4d557c, _0x53ca6c, _0x406306) {
            return !_0x406306 && (_0x406306 = '\x5c'), _0x53ca6c + _0x53ca6c + _0x406306 + '|';
        }), this[_0x1ec61c(0x1d6)]('tail=%j\x0a\x20\x20\x20%s', _0x46f231, _0x46f231, _0x1565af, _0x5a8725);
        var _0x58dd37 = _0x1565af[_0x1ec61c(0x1f6)] === '*' ? star : _0x1565af[_0x1ec61c(0x1f6)] === '?' ? qmark : '\x5c' + _0x1565af[_0x1ec61c(0x1f6)];
        _0x462494 = !![], _0x5a8725 = _0x5a8725[_0x1ec61c(0x1f8)](0x0, _0x1565af[_0x1ec61c(0x1f9)]) + _0x58dd37 + '\x5c(' + _0x46f231;
    }
    _0x1fffac();
    _0x36b85b && (_0x5a8725 += '\x5c\x5c');
    var _0x2f5ba4 = ![];
    switch (_0x5a8725[_0x1ec61c(0x1cc)](0x0)) {
    case '.':
    case '[':
    case '(':
        _0x2f5ba4 = !![];
    }
    for (var _0x30df56 = _0x6998a0[_0x1ec61c(0x1c7)] - 0x1; _0x30df56 > -0x1; _0x30df56--) {
        var _0x16c151 = _0x6998a0[_0x30df56], _0x5d392a = _0x5a8725[_0x1ec61c(0x1f8)](0x0, _0x16c151['reStart']), _0x5a383a = _0x5a8725[_0x1ec61c(0x1f8)](_0x16c151[_0x1ec61c(0x1f9)], _0x16c151['reEnd'] - 0x8), _0x5bb779 = _0x5a8725['slice'](_0x16c151['reEnd'] - 0x8, _0x16c151[_0x1ec61c(0x1fb)]), _0x99177f = _0x5a8725[_0x1ec61c(0x1f8)](_0x16c151['reEnd']);
        _0x5bb779 += _0x99177f;
        var _0x485e56 = _0x5d392a[_0x1ec61c(0x1c1)]('(')[_0x1ec61c(0x1c7)] - 0x1, _0x11695e = _0x99177f;
        for (_0x2767a2 = 0x0; _0x2767a2 < _0x485e56; _0x2767a2++) {
            _0x11695e = _0x11695e[_0x1ec61c(0x1fc)](/\)[+*?]?/, '');
        }
        _0x99177f = _0x11695e;
        var _0x1971df = '';
        _0x99177f === '' && _0xc436d9 !== SUBPARSE && (_0x1971df = '$');
        var _0x234d1b = _0x5d392a + _0x5a383a + _0x99177f + _0x1971df + _0x5bb779;
        _0x5a8725 = _0x234d1b;
    }
    _0x5a8725 !== '' && _0x462494 && (_0x5a8725 = '(?=.)' + _0x5a8725);
    _0x2f5ba4 && (_0x5a8725 = _0xa72344 + _0x5a8725);
    if (_0xc436d9 === SUBPARSE)
        return [
            _0x5a8725,
            _0x462494
        ];
    if (!_0x462494)
        return globUnescape(_0x2cb846);
    var _0x4b3e55 = _0x2b6dc8[_0x1ec61c(0x1e7)] ? 'i' : '';
    try {
        var _0x32435c = new RegExp('^' + _0x5a8725 + '$', _0x4b3e55);
    } catch (_0x41a63f) {
        return new RegExp('$.');
    }
    return _0x32435c['_glob'] = _0x2cb846, _0x32435c[_0x1ec61c(0x1fd)] = _0x5a8725, _0x32435c;
}
minimatch[_0x365fd1(0x1fe)] = function (_0x5b562e, _0x474db6) {
    var _0x1aa61c = _0x365fd1;
    return new Minimatch(_0x5b562e, _0x474db6 || {})[_0x1aa61c(0x1fe)]();
}, Minimatch[_0x365fd1(0x1d5)][_0x365fd1(0x1fe)] = makeRe;
function makeRe() {
    var _0x231312 = _0x365fd1;
    if (this[_0x231312(0x1d1)] || this[_0x231312(0x1d1)] === ![])
        return this[_0x231312(0x1d1)];
    var _0x11a00f = this['set'];
    if (!_0x11a00f[_0x231312(0x1c7)])
        return this[_0x231312(0x1d1)] = ![], this['regexp'];
    var _0x192cd4 = this[_0x231312(0x1d8)], _0x53d998 = _0x192cd4[_0x231312(0x1e6)] ? star : _0x192cd4[_0x231312(0x1e8)] ? twoStarDot : twoStarNoDot, _0x206282 = _0x192cd4[_0x231312(0x1e7)] ? 'i' : '', _0x4272c2 = _0x11a00f[_0x231312(0x1dc)](function (_0x4e9eed) {
            var _0x5696e6 = _0x231312;
            return _0x4e9eed[_0x5696e6(0x1dc)](function (_0x34f12d) {
                var _0x3014ab = _0x5696e6;
                return _0x34f12d === GLOBSTAR ? _0x53d998 : typeof _0x34f12d === _0x3014ab(0x1c9) ? regExpEscape(_0x34f12d) : _0x34f12d['_src'];
            })[_0x5696e6(0x1d0)]('\x5c/');
        })['join']('|');
    _0x4272c2 = '^(?:' + _0x4272c2 + ')$';
    if (this[_0x231312(0x1ff)])
        _0x4272c2 = _0x231312(0x200) + _0x4272c2 + _0x231312(0x201);
    try {
        this['regexp'] = new RegExp(_0x4272c2, _0x206282);
    } catch (_0x4adbed) {
        this['regexp'] = ![];
    }
    return this[_0x231312(0x1d1)];
}
minimatch[_0x365fd1(0x1ce)] = function (_0x46e188, _0x387cfc, _0x28680e) {
    var _0x336f4c = _0x365fd1;
    _0x28680e = _0x28680e || {};
    var _0x583df8 = new Minimatch(_0x387cfc, _0x28680e);
    return _0x46e188 = _0x46e188[_0x336f4c(0x1c3)](function (_0x219f42) {
        var _0x4d9faa = _0x336f4c;
        return _0x583df8[_0x4d9faa(0x1ce)](_0x219f42);
    }), _0x583df8[_0x336f4c(0x1d8)][_0x336f4c(0x202)] && !_0x46e188[_0x336f4c(0x1c7)] && _0x46e188[_0x336f4c(0x1f0)](_0x387cfc), _0x46e188;
}, Minimatch[_0x365fd1(0x1d5)][_0x365fd1(0x1ce)] = match;
function match(_0x37e475, _0x26dc33) {
    var _0x27e5de = _0x365fd1;
    this[_0x27e5de(0x1d6)]('match', _0x37e475, this[_0x27e5de(0x1da)]);
    if (this['comment'])
        return ![];
    if (this[_0x27e5de(0x1d3)])
        return _0x37e475 === '';
    if (_0x37e475 === '/' && _0x26dc33)
        return !![];
    var _0x145622 = this[_0x27e5de(0x1d8)];
    path[_0x27e5de(0x1cf)] !== '/' && (_0x37e475 = _0x37e475[_0x27e5de(0x1c1)](path[_0x27e5de(0x1cf)])[_0x27e5de(0x1d0)]('/'));
    _0x37e475 = _0x37e475[_0x27e5de(0x1c1)](slashSplit), this[_0x27e5de(0x1d6)](this['pattern'], 'split', _0x37e475);
    var _0x16b052 = this['set'];
    this[_0x27e5de(0x1d6)](this['pattern'], _0x27e5de(0x1de), _0x16b052);
    var _0x2f7ee9, _0x409f84;
    for (_0x409f84 = _0x37e475['length'] - 0x1; _0x409f84 >= 0x0; _0x409f84--) {
        _0x2f7ee9 = _0x37e475[_0x409f84];
        if (_0x2f7ee9)
            break;
    }
    for (_0x409f84 = 0x0; _0x409f84 < _0x16b052[_0x27e5de(0x1c7)]; _0x409f84++) {
        var _0x5ab20e = _0x16b052[_0x409f84], _0x56deb3 = _0x37e475;
        _0x145622[_0x27e5de(0x203)] && _0x5ab20e[_0x27e5de(0x1c7)] === 0x1 && (_0x56deb3 = [_0x2f7ee9]);
        var _0xecb3f1 = this['matchOne'](_0x56deb3, _0x5ab20e, _0x26dc33);
        if (_0xecb3f1) {
            if (_0x145622[_0x27e5de(0x204)])
                return !![];
            return !this['negate'];
        }
    }
    if (_0x145622[_0x27e5de(0x204)])
        return ![];
    return this[_0x27e5de(0x1ff)];
}
Minimatch[_0x365fd1(0x1d5)][_0x365fd1(0x205)] = function (_0x42fb9c, _0x35f951, _0x55de91) {
    var _0x1ea3d7 = _0x365fd1, _0x52d6bc = this[_0x1ea3d7(0x1d8)];
    this[_0x1ea3d7(0x1d6)](_0x1ea3d7(0x205), {
        'this': this,
        'file': _0x42fb9c,
        'pattern': _0x35f951
    }), this['debug'](_0x1ea3d7(0x205), _0x42fb9c[_0x1ea3d7(0x1c7)], _0x35f951[_0x1ea3d7(0x1c7)]);
    for (var _0x2c7efe = 0x0, _0x50082e = 0x0, _0x351fb9 = _0x42fb9c[_0x1ea3d7(0x1c7)], _0x17da5c = _0x35f951[_0x1ea3d7(0x1c7)]; _0x2c7efe < _0x351fb9 && _0x50082e < _0x17da5c; _0x2c7efe++, _0x50082e++) {
        this[_0x1ea3d7(0x1d6)](_0x1ea3d7(0x206));
        var _0x1cd1d0 = _0x35f951[_0x50082e], _0x3ac232 = _0x42fb9c[_0x2c7efe];
        this[_0x1ea3d7(0x1d6)](_0x35f951, _0x1cd1d0, _0x3ac232);
        if (_0x1cd1d0 === ![])
            return ![];
        if (_0x1cd1d0 === GLOBSTAR) {
            this['debug'](_0x1ea3d7(0x1ba), [
                _0x35f951,
                _0x1cd1d0,
                _0x3ac232
            ]);
            var _0x551753 = _0x2c7efe, _0x1e63ec = _0x50082e + 0x1;
            if (_0x1e63ec === _0x17da5c) {
                this[_0x1ea3d7(0x1d6)]('**\x20at\x20the\x20end');
                for (; _0x2c7efe < _0x351fb9; _0x2c7efe++) {
                    if (_0x42fb9c[_0x2c7efe] === '.' || _0x42fb9c[_0x2c7efe] === '..' || !_0x52d6bc['dot'] && _0x42fb9c[_0x2c7efe][_0x1ea3d7(0x1cc)](0x0) === '.')
                        return ![];
                }
                return !![];
            }
            while (_0x551753 < _0x351fb9) {
                var _0x28a8cc = _0x42fb9c[_0x551753];
                this['debug'](_0x1ea3d7(0x207), _0x42fb9c, _0x551753, _0x35f951, _0x1e63ec, _0x28a8cc);
                if (this[_0x1ea3d7(0x205)](_0x42fb9c[_0x1ea3d7(0x1f8)](_0x551753), _0x35f951[_0x1ea3d7(0x1f8)](_0x1e63ec), _0x55de91))
                    return this[_0x1ea3d7(0x1d6)]('globstar\x20found\x20match!', _0x551753, _0x351fb9, _0x28a8cc), !![];
                else {
                    if (_0x28a8cc === '.' || _0x28a8cc === '..' || !_0x52d6bc[_0x1ea3d7(0x1e8)] && _0x28a8cc[_0x1ea3d7(0x1cc)](0x0) === '.') {
                        this[_0x1ea3d7(0x1d6)](_0x1ea3d7(0x208), _0x42fb9c, _0x551753, _0x35f951, _0x1e63ec);
                        break;
                    }
                    this[_0x1ea3d7(0x1d6)](_0x1ea3d7(0x209)), _0x551753++;
                }
            }
            if (_0x55de91) {
                this[_0x1ea3d7(0x1d6)](_0x1ea3d7(0x20a), _0x42fb9c, _0x551753, _0x35f951, _0x1e63ec);
                if (_0x551753 === _0x351fb9)
                    return !![];
            }
            return ![];
        }
        var _0x1d1ce5;
        typeof _0x1cd1d0 === _0x1ea3d7(0x1c9) ? (_0x52d6bc[_0x1ea3d7(0x1e7)] ? _0x1d1ce5 = _0x3ac232[_0x1ea3d7(0x20b)]() === _0x1cd1d0[_0x1ea3d7(0x20b)]() : _0x1d1ce5 = _0x3ac232 === _0x1cd1d0, this[_0x1ea3d7(0x1d6)](_0x1ea3d7(0x20c), _0x1cd1d0, _0x3ac232, _0x1d1ce5)) : (_0x1d1ce5 = _0x3ac232[_0x1ea3d7(0x1ce)](_0x1cd1d0), this['debug'](_0x1ea3d7(0x20d), _0x1cd1d0, _0x3ac232, _0x1d1ce5));
        if (!_0x1d1ce5)
            return ![];
    }
    if (_0x2c7efe === _0x351fb9 && _0x50082e === _0x17da5c)
        return !![];
    else {
        if (_0x2c7efe === _0x351fb9)
            return _0x55de91;
        else {
            if (_0x50082e === _0x17da5c) {
                var _0x34fa8b = _0x2c7efe === _0x351fb9 - 0x1 && _0x42fb9c[_0x2c7efe] === '';
                return _0x34fa8b;
            }
        }
    }
    throw new Error(_0x1ea3d7(0x20e));
};
function globUnescape(_0x34169a) {
    var _0x2db9f6 = _0x365fd1;
    return _0x34169a[_0x2db9f6(0x1fc)](/\\(.)/g, '$1');
}
function regExpEscape(_0x5e07b9) {
    var _0x2a44dc = _0x365fd1;
    return _0x5e07b9['replace'](/[-[\]{}()*+?.,\\^$|#\s]/g, _0x2a44dc(0x20f));
}
