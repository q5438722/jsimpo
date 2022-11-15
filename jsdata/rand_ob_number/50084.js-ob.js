(function (_0x50bce2) {
    if (typeof exports == 'object' && typeof module == 'object')
        _0x50bce2(require('../../lib/codemirror'), require('../yaml/yaml'));
    else {
        if (typeof define == 'function' && define['amd'])
            define([
                '../../lib/codemirror',
                '../yaml/yaml'
            ], _0x50bce2);
        else
            _0x50bce2(CodeMirror);
    }
}(function (_0xdf2bab) {
    var _0x1e9547 = -0x26 * -0x5d + -0x13fe + 0x630, _0xe91beb = -0x1 * -0x1dc3 + 0x1113 + -0x2ed5, _0x4e9872 = 0x98c + -0x239e + 0x2 * 0xd0a;
    _0xdf2bab['defineMode']('yaml-frontmatter', function (_0x16f04e, _0xd2712c) {
        var _0xcf2445 = _0xdf2bab['getMode'](_0x16f04e, 'yaml'), _0x22e004 = _0xdf2bab['getMode'](_0x16f04e, _0xd2712c && _0xd2712c['base'] || 'gfm');
        function _0x538918(_0x49f493) {
            return _0x49f493['state'] == _0x4e9872 ? _0x22e004 : _0xcf2445;
        }
        return {
            'startState': function () {
                return {
                    'state': _0x1e9547,
                    'inner': _0xdf2bab['startState'](_0xcf2445)
                };
            },
            'copyState': function (_0x3bd142) {
                return {
                    'state': _0x3bd142['state'],
                    'inner': _0xdf2bab['copyState'](_0x538918(_0x3bd142), _0x3bd142['inner'])
                };
            },
            'token': function (_0x370b82, _0x5bbc7f) {
                if (_0x5bbc7f['state'] == _0x1e9547)
                    return _0x370b82['match']('---', ![]) ? (_0x5bbc7f['state'] = _0xe91beb, _0xcf2445['token'](_0x370b82, _0x5bbc7f['inner'])) : (_0x5bbc7f['state'] = _0x4e9872, _0x5bbc7f['inner'] = _0xdf2bab['startState'](_0x22e004), _0x22e004['token'](_0x370b82, _0x5bbc7f['inner']));
                else {
                    if (_0x5bbc7f['state'] == _0xe91beb) {
                        var _0x372828 = _0x370b82['sol']() && _0x370b82['match'](/(---|\.\.\.)/, ![]), _0x5f082f = _0xcf2445['token'](_0x370b82, _0x5bbc7f['inner']);
                        return _0x372828 && (_0x5bbc7f['state'] = _0x4e9872, _0x5bbc7f['inner'] = _0xdf2bab['startState'](_0x22e004)), _0x5f082f;
                    } else
                        return _0x22e004['token'](_0x370b82, _0x5bbc7f['inner']);
                }
            },
            'innerMode': function (_0x34eb06) {
                return {
                    'mode': _0x538918(_0x34eb06),
                    'state': _0x34eb06['inner']
                };
            },
            'blankLine': function (_0x5727e) {
                var _0x3503be = _0x538918(_0x5727e);
                if (_0x3503be['blankLine'])
                    return _0x3503be['blankLine'](_0x5727e['inner']);
            }
        };
    });
}));
