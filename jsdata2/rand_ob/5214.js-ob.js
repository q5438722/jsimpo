'use strict';
var _0x5052 = [
    'dirname',
    'yoVeo',
    'OUkKX',
    'generated.js',
    'generator',
    'SDhKC',
    'vDHNl',
    'PIkkF',
    'prototype',
    '_addGeneratedMap',
    'addSourceContent',
    '_addExistingMap',
    'wfgMh',
    'sources',
    'length',
    'sourcesContent',
    'forEach',
    'addMappings',
    'source',
    'addFile',
    '1|2|3|0|4',
    'line',
    'column',
    'split',
    'zjJaI',
    'hasOwnProperty',
    'sourceFile',
    'base64',
    'create',
    'mapFileCommentRegex',
    '315299hyHGiR',
    '2474GlkGOw',
    '114016OstRJJ',
    '27743BMBUWc',
    '1CpmULP',
    '1DoCpsT',
    '212083LbXsYg',
    '223944EeafaG',
    '4867hjHcio',
    '28fTqUCL',
    'path',
    'lodash.memoize',
    'inline-source-map',
    './lib/path-is-absolute',
    './lib/mappings-from-map',
    '2|5|3|1|0|4',
    'Phqgh',
    'GDsKK',
    'ngilS',
    'test',
    'replace',
    'join'
];
var _0x9c4319 = _0x2d03;
(function (_0x4aaf25, _0x448e56) {
    var _0x8b06f3 = _0x2d03;
    while (!![]) {
        try {
            var _0x262395 = -parseInt(_0x8b06f3(0x163)) + parseInt(_0x8b06f3(0x164)) + -parseInt(_0x8b06f3(0x165)) + -parseInt(_0x8b06f3(0x166)) * -parseInt(_0x8b06f3(0x167)) + parseInt(_0x8b06f3(0x168)) * parseInt(_0x8b06f3(0x169)) + parseInt(_0x8b06f3(0x16a)) + -parseInt(_0x8b06f3(0x16b)) * -parseInt(_0x8b06f3(0x16c));
            if (_0x262395 === _0x448e56)
                break;
            else
                _0x4aaf25['push'](_0x4aaf25['shift']());
        } catch (_0x21a115) {
            _0x4aaf25['push'](_0x4aaf25['shift']());
        }
    }
}(_0x5052, 0x40495 + -0x1 * 0x1e94f + 0x894f));
var path = require(_0x9c4319(0x16d)), convert = require('convert-source-map'), memoize = require(_0x9c4319(0x16e)), createGenerator = require(_0x9c4319(0x16f)), pathIsAbsolute = require(_0x9c4319(0x170)), mappingsFromMap = require(_0x9c4319(0x171)), protocolRx = /^[a-z]+:\/\//, rebaseRelativePath = memoize(function (_0x7317b0, _0x568350, _0x3cf7c) {
        var _0x27ec95 = _0x9c4319, _0x4f4375 = {
                'Phqgh': _0x27ec95(0x172),
                'GDsKK': function (_0x540902, _0x4c51cc) {
                    return _0x540902 === _0x4c51cc;
                },
                'ngilS': function (_0x4a37e2, _0x547db7) {
                    return _0x4a37e2(_0x547db7);
                }
            }, _0x2ff107 = _0x4f4375[_0x27ec95(0x173)]['split']('|'), _0x266b1c = -0x172 * -0xb + -0x1ab7 * -0x1 + -0x1 * 0x2a9d;
        while (!![]) {
            switch (_0x2ff107[_0x266b1c++]) {
            case '0':
                if (_0x4f4375[_0x27ec95(0x174)](_0x7317b0, _0x39908d) || _0x4f4375[_0x27ec95(0x175)](pathIsAbsolute, _0x39908d) || protocolRx[_0x27ec95(0x176)](_0x39908d))
                    return _0x39908d;
                continue;
            case '1':
                _0x7317b0 = _0x7317b0['replace'](/\\/g, '/');
                continue;
            case '2':
                if (!_0x3cf7c)
                    return _0x3cf7c;
                continue;
            case '3':
                _0x39908d = _0x39908d[_0x27ec95(0x177)](/\\/g, '/');
                continue;
            case '4':
                return path[_0x27ec95(0x178)](path[_0x27ec95(0x179)](_0x7317b0), _0x39908d)[_0x27ec95(0x177)](/\\/g, '/');
            case '5':
                var _0x39908d = _0x568350 ? path['join'](_0x568350, _0x3cf7c) : _0x3cf7c;
                continue;
            }
            break;
        }
    }, function (_0x23d5cb, _0x286ba1, _0x1a9430) {
        var _0x1890e3 = _0x9c4319, _0x1d6786 = {
                'yoVeo': function (_0x1ef62c, _0x4988fe) {
                    return _0x1ef62c + _0x4988fe;
                },
                'OUkKX': function (_0x2fc630, _0x822d20) {
                    return _0x2fc630 + _0x822d20;
                }
            };
        return _0x1d6786[_0x1890e3(0x17a)](_0x1d6786[_0x1890e3(0x17b)](_0x1d6786[_0x1890e3(0x17b)](_0x23d5cb + '::', _0x286ba1), '::'), _0x1a9430);
    });
function _0x2d03(_0x295b45, _0x412e34) {
    return _0x2d03 = function (_0x588a1e, _0x35ce0f) {
        _0x588a1e = _0x588a1e - (-0x1 * -0x225 + -0x2185 + 0x20c3);
        var _0x448aee = _0x5052[_0x588a1e];
        return _0x448aee;
    }, _0x2d03(_0x295b45, _0x412e34);
}
function resolveMap(_0x20db82) {
    var _0x19c1f3 = convert['fromSource'](_0x20db82);
    return _0x19c1f3 ? _0x19c1f3['toObject']() : null;
}
function hasInlinedSource(_0x270c25) {
    return _0x270c25['sourcesContent'] && !!_0x270c25['sourcesContent'][0xe87 + 0xe32 * 0x1 + -0x1cb9];
}
function Combiner(_0x262312, _0x15cf61) {
    var _0x188f5b = _0x9c4319, _0x4e73ba = {
            'SDhKC': function (_0xb033ed, _0x4ea7a5) {
                return _0xb033ed(_0x4ea7a5);
            },
            'vDHNl': function (_0x334525, _0x477b12) {
                return _0x334525 || _0x477b12;
            },
            'PIkkF': _0x188f5b(0x17c)
        };
    this[_0x188f5b(0x17d)] = _0x4e73ba[_0x188f5b(0x17e)](createGenerator, {
        'file': _0x4e73ba[_0x188f5b(0x17f)](_0x262312, _0x4e73ba[_0x188f5b(0x180)]),
        'sourceRoot': _0x15cf61
    });
}
Combiner[_0x9c4319(0x181)][_0x9c4319(0x182)] = function (_0x1783f5, _0x4c0369, _0x272007) {
    var _0xddb952 = _0x9c4319;
    return this[_0xddb952(0x17d)]['addGeneratedMappings'](_0x1783f5, _0x4c0369, _0x272007), this[_0xddb952(0x17d)][_0xddb952(0x183)](_0x1783f5, _0x4c0369), this;
}, Combiner[_0x9c4319(0x181)][_0x9c4319(0x184)] = function (_0x32feb1, _0x26c14e, _0xafca83, _0x4c1181) {
    var _0x5c725b = _0x9c4319, _0x503e58 = {
            'AfWqe': function (_0x4aa9bb, _0x15f073, _0x4ebca1, _0xb1947a) {
                return _0x4aa9bb(_0x15f073, _0x4ebca1, _0xb1947a);
            },
            'wfgMh': function (_0x1d3547, _0x59a651) {
                return _0x1d3547(_0x59a651);
            }
        }, _0x27c1fa = _0x503e58[_0x5c725b(0x185)](mappingsFromMap, _0xafca83);
    for (var _0x4ddf86 = 0x2139 + 0x109d + -0x31d6, _0x5b7f9d = _0xafca83[_0x5c725b(0x186)][_0x5c725b(0x187)]; _0x4ddf86 < _0x5b7f9d; _0x4ddf86++) {
        if (!_0xafca83[_0x5c725b(0x188)])
            continue;
        this[_0x5c725b(0x17d)][_0x5c725b(0x183)](_0x503e58['AfWqe'](rebaseRelativePath, _0x32feb1, _0xafca83['sourceRoot'], _0xafca83[_0x5c725b(0x186)][_0x4ddf86]), _0xafca83[_0x5c725b(0x188)][_0x4ddf86]);
    }
    return _0x27c1fa[_0x5c725b(0x189)](function (_0x102539) {
        var _0x2a1855 = _0x5c725b;
        this[_0x2a1855(0x17d)][_0x2a1855(0x18a)](_0x503e58['AfWqe'](rebaseRelativePath, _0x32feb1, null, _0x102539[_0x2a1855(0x18b)]), [_0x102539], _0x4c1181);
    }, this), this;
}, Combiner[_0x9c4319(0x181)][_0x9c4319(0x18c)] = function (_0x9b2db0, _0x16fe49) {
    var _0x50fa81 = _0x9c4319, _0x2abec7 = {
            'lgpFH': _0x50fa81(0x18d),
            'zjJaI': function (_0x56c230, _0x17ff8c) {
                return _0x56c230(_0x17ff8c);
            },
            'HSqDj': function (_0x4dc6cc, _0x288f66) {
                return _0x4dc6cc || _0x288f66;
            },
            'rayfX': _0x50fa81(0x18e),
            'lLcbc': _0x50fa81(0x18f)
        }, _0x465016 = _0x2abec7['lgpFH'][_0x50fa81(0x190)]('|'), _0x20e9f6 = -0x245c + -0x1de7 * -0x1 + 0x57 * 0x13;
    while (!![]) {
        switch (_0x465016[_0x20e9f6++]) {
        case '0':
            var _0x39aaf3 = _0x2abec7[_0x50fa81(0x191)](resolveMap, _0x9b2db0[_0x50fa81(0x18b)]);
            continue;
        case '1':
            _0x16fe49 = _0x2abec7['HSqDj'](_0x16fe49, {});
            continue;
        case '2':
            if (!_0x16fe49[_0x50fa81(0x192)](_0x2abec7['rayfX']))
                _0x16fe49[_0x50fa81(0x18e)] = 0x34d + -0x12f + -0x21e;
            continue;
        case '3':
            if (!_0x16fe49[_0x50fa81(0x192)](_0x2abec7['lLcbc']))
                _0x16fe49[_0x50fa81(0x18f)] = 0x2485 + -0x11f1 + -0x1294;
            continue;
        case '4':
            return _0x39aaf3 && hasInlinedSource(_0x39aaf3) ? this[_0x50fa81(0x184)](_0x9b2db0[_0x50fa81(0x193)], _0x9b2db0[_0x50fa81(0x18b)], _0x39aaf3, _0x16fe49) : this[_0x50fa81(0x182)](_0x9b2db0[_0x50fa81(0x193)], _0x9b2db0[_0x50fa81(0x18b)], _0x16fe49);
        }
        break;
    }
}, Combiner[_0x9c4319(0x181)][_0x9c4319(0x194)] = function () {
    var _0x441616 = _0x9c4319;
    return this[_0x441616(0x17d)]['base64Encode']();
}, Combiner[_0x9c4319(0x181)]['comment'] = function () {
    var _0x1c1761 = _0x9c4319;
    return this[_0x1c1761(0x17d)]['inlineMappingUrl']();
}, exports[_0x9c4319(0x195)] = function (_0x48e7ba, _0x304d2a) {
    return new Combiner(_0x48e7ba, _0x304d2a);
}, exports['removeComments'] = function (_0x3eafa0) {
    var _0x4dca52 = _0x9c4319;
    if (!_0x3eafa0[_0x4dca52(0x177)])
        return _0x3eafa0;
    return _0x3eafa0[_0x4dca52(0x177)](convert['commentRegex'], '')[_0x4dca52(0x177)](convert[_0x4dca52(0x196)], '');
};
