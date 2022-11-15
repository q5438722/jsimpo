var _0x4d5e = [
    '\x5cu00D7',
    '\x5cu220C',
    '\x5cu2218',
    '\x5cu221B',
    '\x5cu2229',
    '\x5cu2260',
    '\x5cu2264',
    '\x5cu2265',
    '\x5cu2286',
    '\x5cu2288',
    '\x5cu228A',
    '\x5cb(in|isa)\x5cb(?!.?\x5c()',
    'identifiers',
    'immutable',
    'let',
    'for',
    'else',
    'elseif',
    'try',
    'finally',
    'catch',
    'end',
    'begin',
    'return',
    'break',
    'continue',
    'global',
    'local',
    'const',
    'export',
    'import',
    'importall',
    'using',
    'where',
    'macro',
    'module',
    'baremodule',
    'struct',
    'type',
    'mutable',
    'quote',
    'typealias',
    'abstract',
    'bitstype',
    'true',
    'false',
    'nothing',
    'NaN',
    'Inf',
    'registerHelper',
    'hintWords',
    'nestedGenerators',
    'scopes',
    'length',
    'match',
    'tokenize',
    'leavingExpr',
    'sol',
    'operator',
    'error',
    'eatSpace',
    'skipToEnd',
    'comment',
    'push',
    'nestedArrays',
    'pop',
    'lastToken',
    'number',
    'builtin',
    'current',
    'isDefinition',
    'peek',
    'variable',
    'def',
    'next',
    'nestedParameters',
    'nestedComments',
    'string',
    'substr',
    '\x22\x22\x22',
    'eat',
    'eatWhile',
    'test',
    '()[]{}\x22\x22',
    'indent',
    'text/x-julia',
    'julia',
    '909082sFTkTD',
    '1187665WjNBvf',
    '1060645dgxnmG',
    '590669nZmNmD',
    '25703VVxoXt',
    '7CWBHvp',
    '78247iQPEvx',
    '13jHLUYT',
    '109603ZtBpgq',
    'object',
    '../../lib/codemirror',
    'function',
    'amd',
    'defineMode',
    'undefined',
    'join',
    '\x5c\x5c[0-7]{1,3}',
    '\x5c\x5cx[A-Fa-f0-9]{1,2}',
    '\x5c\x5c[abefnrtv0%?\x27\x22\x5c\x5c]',
    '([^\x5cu0027\x5cu005C\x5cuD800-\x5cuDFFF]|[\x5cuD800-\x5cuDFFF][\x5cuDC00-\x5cuDFFF])',
    'operators',
    '[<>=]=',
    '<<=?',
    '>>>?=?',
    '\x5c/\x5c/',
    '[\x5c\x5c%*+\x5c-<>!=\x5c/^|&\x5cu00F7\x5cu22BB]=?'
];
function _0x2a92(_0x170d6e, _0x1070d6) {
    return _0x2a92 = function (_0x4d5e5e, _0x2a92c8) {
        _0x4d5e5e = _0x4d5e5e - 0x170;
        var _0x7cd40c = _0x4d5e[_0x4d5e5e];
        return _0x7cd40c;
    }, _0x2a92(_0x170d6e, _0x1070d6);
}
(function (_0x466d1c, _0x2903be) {
    var _0x223991 = _0x2a92;
    while (!![]) {
        try {
            var _0x25a956 = -parseInt(_0x223991(0x170)) + parseInt(_0x223991(0x171)) + parseInt(_0x223991(0x172)) + parseInt(_0x223991(0x173)) + parseInt(_0x223991(0x174)) * -parseInt(_0x223991(0x175)) + parseInt(_0x223991(0x176)) * -parseInt(_0x223991(0x177)) + -parseInt(_0x223991(0x178));
            if (_0x25a956 === _0x2903be)
                break;
            else
                _0x466d1c['push'](_0x466d1c['shift']());
        } catch (_0x43ff2d) {
            _0x466d1c['push'](_0x466d1c['shift']());
        }
    }
}(_0x4d5e, 0x9823a), function (_0x2156e9) {
    var _0x2b1c3e = _0x2a92;
    if (typeof exports == 'object' && typeof module == _0x2b1c3e(0x179))
        _0x2156e9(require(_0x2b1c3e(0x17a)));
    else {
        if (typeof define == _0x2b1c3e(0x17b) && define[_0x2b1c3e(0x17c)])
            define(['../../lib/codemirror'], _0x2156e9);
        else
            _0x2156e9(CodeMirror);
    }
}(function (_0x518dcf) {
    'use strict';
    var _0x480b63 = _0x2a92;
    _0x518dcf[_0x480b63(0x17d)]('julia', function (_0x35809c, _0x29412d) {
        var _0x42767b = _0x480b63;
        function _0x5882b5(_0x1d1764, _0xec501d) {
            var _0x586759 = _0x2a92;
            return typeof _0xec501d === _0x586759(0x17e) && (_0xec501d = '\x5cb'), new RegExp('^((' + _0x1d1764[_0x586759(0x17f)](')|(') + '))' + _0xec501d);
        }
        var _0xf4094f = _0x42767b(0x180), _0x3627c5 = _0x42767b(0x181), _0x2ba5a3 = _0x42767b(0x182), _0x3aa0c3 = _0x42767b(0x183), _0x4a9017 = _0x29412d[_0x42767b(0x184)] || _0x5882b5([
                '[<>]:',
                _0x42767b(0x185),
                _0x42767b(0x186),
                _0x42767b(0x187),
                '=>',
                '->',
                _0x42767b(0x188),
                _0x42767b(0x189),
                '\x5c?',
                '\x5c$',
                '~',
                ':',
                _0x42767b(0x18a),
                '\x5cu2208',
                '\x5cu2209',
                '\x5cu220B',
                _0x42767b(0x18b),
                _0x42767b(0x18c),
                '\x5cu221A',
                _0x42767b(0x18d),
                _0x42767b(0x18e),
                '\x5cu222A',
                _0x42767b(0x18f),
                _0x42767b(0x190),
                _0x42767b(0x191),
                _0x42767b(0x192),
                _0x42767b(0x193),
                _0x42767b(0x194),
                '\x5cu22C5',
                _0x42767b(0x195)
            ], ''), _0x4a6186 = _0x29412d['delimiters'] || /^[;,()[\]{}]/, _0x522768 = _0x29412d[_0x42767b(0x196)] || /^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/, _0x5cdbe5 = _0x5882b5([
                _0xf4094f,
                _0x3627c5,
                _0x2ba5a3,
                _0x3aa0c3
            ], '\x27'), _0x113181 = [
                'begin',
                'function',
                'type',
                'struct',
                _0x42767b(0x197),
                _0x42767b(0x198),
                'macro',
                _0x42767b(0x199),
                'while',
                'quote',
                'if',
                _0x42767b(0x19a),
                _0x42767b(0x19b),
                _0x42767b(0x19c),
                _0x42767b(0x19d),
                _0x42767b(0x19e),
                'do'
            ], _0x19c3e5 = [
                _0x42767b(0x19f),
                _0x42767b(0x19a),
                _0x42767b(0x19b),
                _0x42767b(0x19e),
                _0x42767b(0x19d)
            ], _0x14b023 = [
                'if',
                _0x42767b(0x19a),
                'elseif',
                'while',
                'for',
                _0x42767b(0x1a0),
                _0x42767b(0x198),
                _0x42767b(0x19f),
                'do',
                _0x42767b(0x19c),
                _0x42767b(0x19e),
                'finally',
                _0x42767b(0x1a1),
                _0x42767b(0x1a2),
                _0x42767b(0x1a3),
                _0x42767b(0x1a4),
                _0x42767b(0x1a5),
                _0x42767b(0x1a6),
                _0x42767b(0x1a7),
                _0x42767b(0x1a8),
                _0x42767b(0x1a9),
                _0x42767b(0x1aa),
                'function',
                _0x42767b(0x1ab),
                _0x42767b(0x1ac),
                _0x42767b(0x1ad),
                _0x42767b(0x1ae),
                _0x42767b(0x1af),
                _0x42767b(0x1b0),
                _0x42767b(0x1b1),
                _0x42767b(0x197),
                _0x42767b(0x1b2),
                _0x42767b(0x1b3),
                _0x42767b(0x1b4),
                'primitive',
                _0x42767b(0x1b5)
            ], _0x32dee6 = [
                _0x42767b(0x1b6),
                _0x42767b(0x1b7),
                _0x42767b(0x1b8),
                _0x42767b(0x1b9),
                _0x42767b(0x1ba)
            ];
        _0x518dcf[_0x42767b(0x1bb)](_0x42767b(0x1bc), 'julia', _0x14b023['concat'](_0x32dee6));
        var _0xd192d = _0x5882b5(_0x113181), _0x1728a5 = _0x5882b5(_0x19c3e5), _0x388aa4 = _0x5882b5(_0x14b023), _0x419c9a = _0x5882b5(_0x32dee6), _0x183cba = /^@[_A-Za-z][\w]*/, _0x3a7e98 = /^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/, _0x1bc1ce = /^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;
        function _0x4ecfae(_0x4d2837) {
            return _0x4d2837['nestedArrays'] > 0x0;
        }
        function _0x1e0d82(_0x48d151) {
            var _0x2564f1 = _0x42767b;
            return _0x48d151[_0x2564f1(0x1bd)] > 0x0;
        }
        function _0x3a29e6(_0x1ef835, _0x11822e) {
            var _0x288fc5 = _0x42767b;
            typeof _0x11822e === _0x288fc5(0x17e) && (_0x11822e = 0x0);
            if (_0x1ef835[_0x288fc5(0x1be)][_0x288fc5(0x1bf)] <= _0x11822e)
                return null;
            return _0x1ef835['scopes'][_0x1ef835['scopes'][_0x288fc5(0x1bf)] - (_0x11822e + 0x1)];
        }
        function _0x42dd10(_0x2618b1, _0x1c442b) {
            var _0x2f4bb7 = _0x42767b;
            if (_0x2618b1[_0x2f4bb7(0x1c0)]('#=', ![]))
                return _0x1c442b['tokenize'] = _0x5143b1, _0x1c442b[_0x2f4bb7(0x1c1)](_0x2618b1, _0x1c442b);
            var _0x435061 = _0x1c442b[_0x2f4bb7(0x1c2)];
            _0x2618b1[_0x2f4bb7(0x1c3)]() && (_0x435061 = ![]);
            _0x1c442b['leavingExpr'] = ![];
            if (_0x435061) {
                if (_0x2618b1[_0x2f4bb7(0x1c0)](/^'+/))
                    return _0x2f4bb7(0x1c4);
            }
            if (_0x2618b1[_0x2f4bb7(0x1c0)](/\.{4,}/))
                return _0x2f4bb7(0x1c5);
            else {
                if (_0x2618b1[_0x2f4bb7(0x1c0)](/\.{1,3}/))
                    return _0x2f4bb7(0x1c4);
            }
            if (_0x2618b1[_0x2f4bb7(0x1c6)]())
                return null;
            var _0x794ede = _0x2618b1['peek']();
            if (_0x794ede === '#')
                return _0x2618b1[_0x2f4bb7(0x1c7)](), _0x2f4bb7(0x1c8);
            _0x794ede === '[' && (_0x1c442b[_0x2f4bb7(0x1be)][_0x2f4bb7(0x1c9)]('['), _0x1c442b[_0x2f4bb7(0x1ca)]++);
            _0x794ede === '(' && (_0x1c442b[_0x2f4bb7(0x1be)][_0x2f4bb7(0x1c9)]('('), _0x1c442b[_0x2f4bb7(0x1bd)]++);
            if (_0x4ecfae(_0x1c442b) && _0x794ede === ']') {
                while (_0x1c442b['scopes'][_0x2f4bb7(0x1bf)] && _0x3a29e6(_0x1c442b) !== '[') {
                    _0x1c442b['scopes'][_0x2f4bb7(0x1cb)]();
                }
                _0x1c442b[_0x2f4bb7(0x1be)]['pop'](), _0x1c442b[_0x2f4bb7(0x1ca)]--, _0x1c442b['leavingExpr'] = !![];
            }
            if (_0x1e0d82(_0x1c442b) && _0x794ede === ')') {
                while (_0x1c442b[_0x2f4bb7(0x1be)][_0x2f4bb7(0x1bf)] && _0x3a29e6(_0x1c442b) !== '(') {
                    _0x1c442b['scopes'][_0x2f4bb7(0x1cb)]();
                }
                _0x1c442b[_0x2f4bb7(0x1be)][_0x2f4bb7(0x1cb)](), _0x1c442b[_0x2f4bb7(0x1bd)]--, _0x1c442b['leavingExpr'] = !![];
            }
            if (_0x4ecfae(_0x1c442b)) {
                if (_0x1c442b[_0x2f4bb7(0x1cc)] == _0x2f4bb7(0x19f) && _0x2618b1[_0x2f4bb7(0x1c0)](':'))
                    return _0x2f4bb7(0x1c4);
                if (_0x2618b1[_0x2f4bb7(0x1c0)]('end'))
                    return _0x2f4bb7(0x1cd);
            }
            var _0x25ae6d;
            (_0x25ae6d = _0x2618b1[_0x2f4bb7(0x1c0)](_0xd192d, ![])) && _0x1c442b[_0x2f4bb7(0x1be)][_0x2f4bb7(0x1c9)](_0x25ae6d[0x0]);
            _0x2618b1[_0x2f4bb7(0x1c0)](_0x1728a5, ![]) && _0x1c442b[_0x2f4bb7(0x1be)][_0x2f4bb7(0x1cb)]();
            if (_0x2618b1['match'](/^::(?![:\$])/))
                return _0x1c442b[_0x2f4bb7(0x1c1)] = _0x558445, _0x1c442b[_0x2f4bb7(0x1c1)](_0x2618b1, _0x1c442b);
            if (!_0x435061 && _0x2618b1['match'](_0x3a7e98) || _0x2618b1[_0x2f4bb7(0x1c0)](/:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/))
                return _0x2f4bb7(0x1ce);
            if (_0x2618b1[_0x2f4bb7(0x1c0)](_0x4a9017))
                return _0x2f4bb7(0x1c4);
            if (_0x2618b1[_0x2f4bb7(0x1c0)](/^\.?\d/, ![])) {
                var _0x212f11 = RegExp(/^im\b/), _0x1142c4 = ![];
                _0x2618b1[_0x2f4bb7(0x1c0)](/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i) && (_0x1142c4 = !![]);
                _0x2618b1['match'](/^0x[0-9a-f_]+/i) && (_0x1142c4 = !![]);
                _0x2618b1[_0x2f4bb7(0x1c0)](/^0b[01_]+/i) && (_0x1142c4 = !![]);
                _0x2618b1[_0x2f4bb7(0x1c0)](/^0o[0-7_]+/i) && (_0x1142c4 = !![]);
                _0x2618b1[_0x2f4bb7(0x1c0)](/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i) && (_0x1142c4 = !![]);
                _0x2618b1[_0x2f4bb7(0x1c0)](/^\d[_\d]*(e[\+\-]?\d+)?/i) && (_0x1142c4 = !![]);
                if (_0x1142c4)
                    return _0x2618b1[_0x2f4bb7(0x1c0)](_0x212f11), _0x1c442b[_0x2f4bb7(0x1c2)] = !![], _0x2f4bb7(0x1cd);
            }
            if (_0x2618b1['match']('\x27'))
                return _0x1c442b[_0x2f4bb7(0x1c1)] = _0x115ccd, _0x1c442b[_0x2f4bb7(0x1c1)](_0x2618b1, _0x1c442b);
            if (_0x2618b1[_0x2f4bb7(0x1c0)](_0x1bc1ce))
                return _0x1c442b[_0x2f4bb7(0x1c1)] = _0x5777ae(_0x2618b1[_0x2f4bb7(0x1cf)]()), _0x1c442b['tokenize'](_0x2618b1, _0x1c442b);
            if (_0x2618b1[_0x2f4bb7(0x1c0)](_0x183cba))
                return 'meta';
            if (_0x2618b1[_0x2f4bb7(0x1c0)](_0x4a6186))
                return null;
            if (_0x2618b1[_0x2f4bb7(0x1c0)](_0x388aa4))
                return 'keyword';
            if (_0x2618b1[_0x2f4bb7(0x1c0)](_0x419c9a))
                return _0x2f4bb7(0x1ce);
            var _0x33d8ca = _0x1c442b[_0x2f4bb7(0x1d0)] || _0x1c442b[_0x2f4bb7(0x1cc)] == _0x2f4bb7(0x17b) || _0x1c442b[_0x2f4bb7(0x1cc)] == _0x2f4bb7(0x1ac) || _0x1c442b[_0x2f4bb7(0x1cc)] == 'type' || _0x1c442b[_0x2f4bb7(0x1cc)] == 'struct' || _0x1c442b[_0x2f4bb7(0x1cc)] == 'immutable';
            if (_0x2618b1['match'](_0x522768)) {
                if (_0x33d8ca) {
                    if (_0x2618b1[_0x2f4bb7(0x1d1)]() === '.')
                        return _0x1c442b[_0x2f4bb7(0x1d0)] = !![], _0x2f4bb7(0x1d2);
                    return _0x1c442b['isDefinition'] = ![], _0x2f4bb7(0x1d3);
                }
                return _0x1c442b['leavingExpr'] = !![], 'variable';
            }
            return _0x2618b1[_0x2f4bb7(0x1d4)](), _0x2f4bb7(0x1c5);
        }
        function _0x558445(_0x45a5c8, _0x26d4d0) {
            var _0x42984f = _0x42767b;
            _0x45a5c8[_0x42984f(0x1c0)](/.*?(?=[,;{}()=\s]|$)/);
            if (_0x45a5c8[_0x42984f(0x1c0)]('{'))
                _0x26d4d0[_0x42984f(0x1d5)]++;
            else
                _0x45a5c8[_0x42984f(0x1c0)]('}') && _0x26d4d0[_0x42984f(0x1d5)] > 0x0 && _0x26d4d0[_0x42984f(0x1d5)]--;
            if (_0x26d4d0[_0x42984f(0x1d5)] > 0x0)
                _0x45a5c8[_0x42984f(0x1c0)](/.*?(?={|})/) || _0x45a5c8[_0x42984f(0x1d4)]();
            else
                _0x26d4d0[_0x42984f(0x1d5)] == 0x0 && (_0x26d4d0['tokenize'] = _0x42dd10);
            return _0x42984f(0x1ce);
        }
        function _0x5143b1(_0x1d32ef, _0x4112fd) {
            var _0x2e18fb = _0x42767b;
            _0x1d32ef['match']('#=') && _0x4112fd[_0x2e18fb(0x1d6)]++;
            !_0x1d32ef['match'](/.*?(?=(#=|=#))/) && _0x1d32ef[_0x2e18fb(0x1c7)]();
            if (_0x1d32ef[_0x2e18fb(0x1c0)]('=#')) {
                _0x4112fd[_0x2e18fb(0x1d6)]--;
                if (_0x4112fd[_0x2e18fb(0x1d6)] == 0x0)
                    _0x4112fd[_0x2e18fb(0x1c1)] = _0x42dd10;
            }
            return _0x2e18fb(0x1c8);
        }
        function _0x115ccd(_0x533a37, _0x77e2fa) {
            var _0x18eed5 = _0x42767b, _0x47ffbb = ![], _0x3e065f;
            if (_0x533a37[_0x18eed5(0x1c0)](_0x5cdbe5))
                _0x47ffbb = !![];
            else {
                if (_0x3e065f = _0x533a37[_0x18eed5(0x1c0)](/\\u([a-f0-9]{1,4})(?=')/i)) {
                    var _0x55c5c1 = parseInt(_0x3e065f[0x1], 0x10);
                    (_0x55c5c1 <= 0xd7ff || _0x55c5c1 >= 0xe000) && (_0x47ffbb = !![], _0x533a37[_0x18eed5(0x1d4)]());
                } else {
                    if (_0x3e065f = _0x533a37[_0x18eed5(0x1c0)](/\\U([A-Fa-f0-9]{5,8})(?=')/)) {
                        var _0x55c5c1 = parseInt(_0x3e065f[0x1], 0x10);
                        _0x55c5c1 <= 0x10ffff && (_0x47ffbb = !![], _0x533a37[_0x18eed5(0x1d4)]());
                    }
                }
            }
            if (_0x47ffbb)
                return _0x77e2fa['leavingExpr'] = !![], _0x77e2fa['tokenize'] = _0x42dd10, _0x18eed5(0x1d7);
            return !_0x533a37[_0x18eed5(0x1c0)](/^[^']+(?=')/) && _0x533a37[_0x18eed5(0x1c7)](), _0x533a37[_0x18eed5(0x1c0)]('\x27') && (_0x77e2fa[_0x18eed5(0x1c1)] = _0x42dd10), _0x18eed5(0x1c5);
        }
        function _0x5777ae(_0x9ae396) {
            var _0x225e8f = _0x42767b;
            if (_0x9ae396[_0x225e8f(0x1d8)](-0x3) === _0x225e8f(0x1d9))
                _0x9ae396 = '\x22\x22\x22';
            else
                _0x9ae396['substr'](-0x1) === '\x22' && (_0x9ae396 = '\x22');
            function _0x51382d(_0x491f7f, _0x16ed1a) {
                var _0x1f49a2 = _0x225e8f;
                if (_0x491f7f[_0x1f49a2(0x1da)]('\x5c'))
                    _0x491f7f['next']();
                else {
                    if (_0x491f7f[_0x1f49a2(0x1c0)](_0x9ae396))
                        return _0x16ed1a['tokenize'] = _0x42dd10, _0x16ed1a['leavingExpr'] = !![], _0x1f49a2(0x1d7);
                    else
                        _0x491f7f['eat'](/[`"]/);
                }
                return _0x491f7f[_0x1f49a2(0x1db)](/[^\\`"]/), _0x1f49a2(0x1d7);
            }
            return _0x51382d;
        }
        var _0x4f1ba9 = {
            'startState': function () {
                return {
                    'tokenize': _0x42dd10,
                    'scopes': [],
                    'lastToken': null,
                    'leavingExpr': ![],
                    'isDefinition': ![],
                    'nestedArrays': 0x0,
                    'nestedComments': 0x0,
                    'nestedGenerators': 0x0,
                    'nestedParameters': 0x0,
                    'firstParenPos': -0x1
                };
            },
            'token': function (_0x3f6a53, _0x4387bf) {
                var _0xef72ab = _0x42767b, _0x35b9f4 = _0x4387bf[_0xef72ab(0x1c1)](_0x3f6a53, _0x4387bf), _0x454230 = _0x3f6a53[_0xef72ab(0x1cf)]();
                return _0x454230 && _0x35b9f4 && (_0x4387bf['lastToken'] = _0x454230), _0x35b9f4;
            },
            'indent': function (_0x571eff, _0x4f9813) {
                var _0xfd1b33 = _0x42767b, _0x4d60ee = 0x0;
                return (_0x4f9813 === ']' || _0x4f9813 === ')' || /^end\b/[_0xfd1b33(0x1dc)](_0x4f9813) || /^else/[_0xfd1b33(0x1dc)](_0x4f9813) || /^catch\b/[_0xfd1b33(0x1dc)](_0x4f9813) || /^elseif\b/[_0xfd1b33(0x1dc)](_0x4f9813) || /^finally/[_0xfd1b33(0x1dc)](_0x4f9813)) && (_0x4d60ee = -0x1), (_0x571eff[_0xfd1b33(0x1be)][_0xfd1b33(0x1bf)] + _0x4d60ee) * _0x35809c['indentUnit'];
            },
            'electricInput': /\b(end|else|catch|finally)\b/,
            'blockCommentStart': '#=',
            'blockCommentEnd': '=#',
            'lineComment': '#',
            'closeBrackets': _0x42767b(0x1dd),
            'fold': _0x42767b(0x1de)
        };
        return _0x4f1ba9;
    }), _0x518dcf['defineMIME'](_0x480b63(0x1df), _0x480b63(0x1e0));
}));
