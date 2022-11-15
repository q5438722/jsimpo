(function (_0x275b22) {
    if (typeof exports == 'object' && typeof module == 'object')
        _0x275b22(require('../../lib/codemirror'));
    else {
        if (typeof define == 'function' && define['amd'])
            define(['../../lib/codemirror'], _0x275b22);
        else
            _0x275b22(CodeMirror);
    }
}(function (_0x2fafb6) {
    'use strict';
    _0x2fafb6['defineMode']('xquery', function () {
        var _0x3a773e = function () {
            function _0x103e7d(_0x187602) {
                return {
                    'type': _0x187602,
                    'style': 'keyword'
                };
            }
            var _0x197e0a = _0x103e7d('operator'), _0x50f01d = {
                    'type': 'atom',
                    'style': 'atom'
                }, _0x222a8c = {
                    'type': 'punctuation',
                    'style': null
                }, _0x456304 = {
                    'type': 'axis_specifier',
                    'style': 'qualifier'
                }, _0x31fb08 = { ',': _0x222a8c }, _0x1f6e30 = [
                    'after',
                    'all',
                    'allowing',
                    'ancestor',
                    'ancestor-or-self',
                    'any',
                    'array',
                    'as',
                    'ascending',
                    'at',
                    'attribute',
                    'base-uri',
                    'before',
                    'boundary-space',
                    'by',
                    'case',
                    'cast',
                    'castable',
                    'catch',
                    'child',
                    'collation',
                    'comment',
                    'construction',
                    'contains',
                    'content',
                    'context',
                    'copy',
                    'copy-namespaces',
                    'count',
                    'decimal-format',
                    'declare',
                    'default',
                    'delete',
                    'descendant',
                    'descendant-or-self',
                    'descending',
                    'diacritics',
                    'different',
                    'distance',
                    'document',
                    'document-node',
                    'element',
                    'else',
                    'empty',
                    'empty-sequence',
                    'encoding',
                    'end',
                    'entire',
                    'every',
                    'exactly',
                    'except',
                    'external',
                    'first',
                    'following',
                    'following-sibling',
                    'for',
                    'from',
                    'ftand',
                    'ftnot',
                    'ft-option',
                    'ftor',
                    'function',
                    'fuzzy',
                    'greatest',
                    'group',
                    'if',
                    'import',
                    'in',
                    'inherit',
                    'insensitive',
                    'insert',
                    'instance',
                    'intersect',
                    'into',
                    'invoke',
                    'is',
                    'item',
                    'language',
                    'last',
                    'lax',
                    'least',
                    'let',
                    'levels',
                    'lowercase',
                    'map',
                    'modify',
                    'module',
                    'most',
                    'namespace',
                    'next',
                    'no',
                    'node',
                    'nodes',
                    'no-inherit',
                    'no-preserve',
                    'not',
                    'occurs',
                    'of',
                    'only',
                    'option',
                    'order',
                    'ordered',
                    'ordering',
                    'paragraph',
                    'paragraphs',
                    'parent',
                    'phrase',
                    'preceding',
                    'preceding-sibling',
                    'preserve',
                    'previous',
                    'processing-instruction',
                    'relationship',
                    'rename',
                    'replace',
                    'return',
                    'revalidation',
                    'same',
                    'satisfies',
                    'schema',
                    'schema-attribute',
                    'schema-element',
                    'score',
                    'self',
                    'sensitive',
                    'sentence',
                    'sentences',
                    'sequence',
                    'skip',
                    'sliding',
                    'some',
                    'stable',
                    'start',
                    'stemming',
                    'stop',
                    'strict',
                    'strip',
                    'switch',
                    'text',
                    'then',
                    'thesaurus',
                    'times',
                    'to',
                    'transform',
                    'treat',
                    'try',
                    'tumbling',
                    'type',
                    'typeswitch',
                    'union',
                    'unordered',
                    'update',
                    'updating',
                    'uppercase',
                    'using',
                    'validate',
                    'value',
                    'variable',
                    'version',
                    'weight',
                    'when',
                    'where',
                    'wildcards',
                    'window',
                    'with',
                    'without',
                    'word',
                    'words',
                    'xquery'
                ];
            for (var _0x119624 = -0x915 + -0xd * -0x1db + -0xf0a, _0x5a160b = _0x1f6e30['length']; _0x119624 < _0x5a160b; _0x119624++) {
                _0x31fb08[_0x1f6e30[_0x119624]] = _0x103e7d(_0x1f6e30[_0x119624]);
            }
            ;
            var _0x2ab85b = [
                'xs:anyAtomicType',
                'xs:anySimpleType',
                'xs:anyType',
                'xs:anyURI',
                'xs:base64Binary',
                'xs:boolean',
                'xs:byte',
                'xs:date',
                'xs:dateTime',
                'xs:dateTimeStamp',
                'xs:dayTimeDuration',
                'xs:decimal',
                'xs:double',
                'xs:duration',
                'xs:ENTITIES',
                'xs:ENTITY',
                'xs:float',
                'xs:gDay',
                'xs:gMonth',
                'xs:gMonthDay',
                'xs:gYear',
                'xs:gYearMonth',
                'xs:hexBinary',
                'xs:ID',
                'xs:IDREF',
                'xs:IDREFS',
                'xs:int',
                'xs:integer',
                'xs:item',
                'xs:java',
                'xs:language',
                'xs:long',
                'xs:Name',
                'xs:NCName',
                'xs:negativeInteger',
                'xs:NMTOKEN',
                'xs:NMTOKENS',
                'xs:nonNegativeInteger',
                'xs:nonPositiveInteger',
                'xs:normalizedString',
                'xs:NOTATION',
                'xs:numeric',
                'xs:positiveInteger',
                'xs:precisionDecimal',
                'xs:QName',
                'xs:short',
                'xs:string',
                'xs:time',
                'xs:token',
                'xs:unsignedByte',
                'xs:unsignedInt',
                'xs:unsignedLong',
                'xs:unsignedShort',
                'xs:untyped',
                'xs:untypedAtomic',
                'xs:yearMonthDuration'
            ];
            for (var _0x119624 = -0x241d + -0x67 * -0x1 + 0x23b6, _0x5a160b = _0x2ab85b['length']; _0x119624 < _0x5a160b; _0x119624++) {
                _0x31fb08[_0x2ab85b[_0x119624]] = _0x50f01d;
            }
            ;
            var _0x405e3e = [
                'eq',
                'ne',
                'lt',
                'le',
                'gt',
                'ge',
                ':=',
                '=',
                '>',
                '>=',
                '<',
                '<=',
                '.',
                '|',
                '?',
                'and',
                'or',
                'div',
                'idiv',
                'mod',
                '*',
                '/',
                '+',
                '-'
            ];
            for (var _0x119624 = -0x3c7 * 0x2 + -0xf17 * 0x2 + -0x7 * -0x564, _0x5a160b = _0x405e3e['length']; _0x119624 < _0x5a160b; _0x119624++) {
                _0x31fb08[_0x405e3e[_0x119624]] = _0x197e0a;
            }
            ;
            var _0x2254fd = [
                'self::',
                'attribute::',
                'child::',
                'descendant::',
                'descendant-or-self::',
                'parent::',
                'ancestor::',
                'ancestor-or-self::',
                'following::',
                'preceding::',
                'following-sibling::',
                'preceding-sibling::'
            ];
            for (var _0x119624 = 0x1e6b + 0xf * 0x126 + 0x2fa5 * -0x1, _0x5a160b = _0x2254fd['length']; _0x119624 < _0x5a160b; _0x119624++) {
                _0x31fb08[_0x2254fd[_0x119624]] = _0x456304;
            }
            ;
            return _0x31fb08;
        }();
        function _0x5ef32f(_0x3c408f, _0x50f4c4, _0x160d44) {
            return _0x50f4c4['tokenize'] = _0x160d44, _0x160d44(_0x3c408f, _0x50f4c4);
        }
        function _0x529b39(_0x104ded, _0xb2d35c) {
            var _0x1761e3 = _0x104ded['next'](), _0x1add3d = ![], _0x1e2286 = _0x5a61c1(_0x104ded);
            if (_0x1761e3 == '<') {
                if (_0x104ded['match']('!--', !![]))
                    return _0x5ef32f(_0x104ded, _0xb2d35c, _0x428b8e);
                if (_0x104ded['match']('![CDATA', ![]))
                    return _0xb2d35c['tokenize'] = _0x1e4d07, 'tag';
                if (_0x104ded['match']('?', ![]))
                    return _0x5ef32f(_0x104ded, _0xb2d35c, _0x4beef4);
                var _0xc42ba1 = _0x104ded['eat']('/');
                _0x104ded['eatSpace']();
                var _0x501634 = '', _0x2cbd2e;
                while (_0x2cbd2e = _0x104ded['eat'](/[^\s\u00a0=<>\"\'\/?]/))
                    _0x501634 += _0x2cbd2e;
                return _0x5ef32f(_0x104ded, _0xb2d35c, _0x433ce7(_0x501634, _0xc42ba1));
            } else {
                if (_0x1761e3 == '{')
                    return _0x202c9b(_0xb2d35c, { 'type': 'codeblock' }), null;
                else {
                    if (_0x1761e3 == '}')
                        return _0x167c05(_0xb2d35c), null;
                    else {
                        if (_0x1a404f(_0xb2d35c)) {
                            if (_0x1761e3 == '>')
                                return 'tag';
                            else {
                                if (_0x1761e3 == '/' && _0x104ded['eat']('>'))
                                    return _0x167c05(_0xb2d35c), 'tag';
                                else
                                    return 'variable';
                            }
                        } else {
                            if (/\d/['test'](_0x1761e3))
                                return _0x104ded['match'](/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/), 'atom';
                            else {
                                if (_0x1761e3 === '(' && _0x104ded['eat'](':'))
                                    return _0x202c9b(_0xb2d35c, { 'type': 'comment' }), _0x5ef32f(_0x104ded, _0xb2d35c, _0x3d225f);
                                else {
                                    if (!_0x1e2286 && (_0x1761e3 === '\x22' || _0x1761e3 === '\x27'))
                                        return _0x5ef32f(_0x104ded, _0xb2d35c, _0x2044ef(_0x1761e3));
                                    else {
                                        if (_0x1761e3 === '$')
                                            return _0x5ef32f(_0x104ded, _0xb2d35c, _0x469fb1);
                                        else {
                                            if (_0x1761e3 === ':' && _0x104ded['eat']('='))
                                                return 'keyword';
                                            else {
                                                if (_0x1761e3 === '(')
                                                    return _0x202c9b(_0xb2d35c, { 'type': 'paren' }), null;
                                                else {
                                                    if (_0x1761e3 === ')')
                                                        return _0x167c05(_0xb2d35c), null;
                                                    else {
                                                        if (_0x1761e3 === '[')
                                                            return _0x202c9b(_0xb2d35c, { 'type': 'bracket' }), null;
                                                        else {
                                                            if (_0x1761e3 === ']')
                                                                return _0x167c05(_0xb2d35c), null;
                                                            else {
                                                                var _0x578a6a = _0x3a773e['propertyIsEnumerable'](_0x1761e3) && _0x3a773e[_0x1761e3];
                                                                if (_0x1e2286 && _0x1761e3 === '\x22')
                                                                    while (_0x104ded['next']() !== '\x22') {
                                                                    }
                                                                if (_0x1e2286 && _0x1761e3 === '\x27')
                                                                    while (_0x104ded['next']() !== '\x27') {
                                                                    }
                                                                if (!_0x578a6a)
                                                                    _0x104ded['eatWhile'](/[\w\$_-]/);
                                                                var _0x42fe81 = _0x104ded['eat'](':');
                                                                !_0x104ded['eat'](':') && _0x42fe81 && _0x104ded['eatWhile'](/[\w\$_-]/);
                                                                _0x104ded['match'](/^[ \t]*\(/, ![]) && (_0x1add3d = !![]);
                                                                var _0x1429e8 = _0x104ded['current']();
                                                                _0x578a6a = _0x3a773e['propertyIsEnumerable'](_0x1429e8) && _0x3a773e[_0x1429e8];
                                                                if (_0x1add3d && !_0x578a6a)
                                                                    _0x578a6a = {
                                                                        'type': 'function_call',
                                                                        'style': 'variable\x20def'
                                                                    };
                                                                if (_0x180765(_0xb2d35c))
                                                                    return _0x167c05(_0xb2d35c), 'variable';
                                                                if (_0x1429e8 == 'element' || _0x1429e8 == 'attribute' || _0x578a6a['type'] == 'axis_specifier')
                                                                    _0x202c9b(_0xb2d35c, { 'type': 'xmlconstructor' });
                                                                return _0x578a6a ? _0x578a6a['style'] : 'variable';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        function _0x3d225f(_0x148c77, _0x3ce630) {
            var _0x89f1f7 = ![], _0x29e9ef = ![], _0x25404c = 0x35d + 0xb * -0x1b3 + 0xf54, _0x4288a8;
            while (_0x4288a8 = _0x148c77['next']()) {
                if (_0x4288a8 == ')' && _0x89f1f7) {
                    if (_0x25404c > -0xd * 0x1a3 + -0x23b6 + 0x38fd)
                        _0x25404c--;
                    else {
                        _0x167c05(_0x3ce630);
                        break;
                    }
                } else
                    _0x4288a8 == ':' && _0x29e9ef && _0x25404c++;
                _0x89f1f7 = _0x4288a8 == ':', _0x29e9ef = _0x4288a8 == '(';
            }
            return 'comment';
        }
        function _0x2044ef(_0x40ed7a, _0x97286b) {
            return function (_0x3e624f, _0x43be89) {
                var _0x35a073;
                if (_0x300f07(_0x43be89) && _0x3e624f['current']() == _0x40ed7a) {
                    _0x167c05(_0x43be89);
                    if (_0x97286b)
                        _0x43be89['tokenize'] = _0x97286b;
                    return 'string';
                }
                _0x202c9b(_0x43be89, {
                    'type': 'string',
                    'name': _0x40ed7a,
                    'tokenize': _0x2044ef(_0x40ed7a, _0x97286b)
                });
                if (_0x3e624f['match']('{', ![]) && _0x2294fb(_0x43be89))
                    return _0x43be89['tokenize'] = _0x529b39, 'string';
                while (_0x35a073 = _0x3e624f['next']()) {
                    if (_0x35a073 == _0x40ed7a) {
                        _0x167c05(_0x43be89);
                        if (_0x97286b)
                            _0x43be89['tokenize'] = _0x97286b;
                        break;
                    } else {
                        if (_0x3e624f['match']('{', ![]) && _0x2294fb(_0x43be89))
                            return _0x43be89['tokenize'] = _0x529b39, 'string';
                    }
                }
                return 'string';
            };
        }
        function _0x469fb1(_0x422458, _0xb1669b) {
            var _0x19af7f = /[\w\$_-]/;
            if (_0x422458['eat']('\x22')) {
                while (_0x422458['next']() !== '\x22') {
                }
                ;
                _0x422458['eat'](':');
            } else {
                _0x422458['eatWhile'](_0x19af7f);
                if (!_0x422458['match'](':=', ![]))
                    _0x422458['eat'](':');
            }
            return _0x422458['eatWhile'](_0x19af7f), _0xb1669b['tokenize'] = _0x529b39, 'variable';
        }
        function _0x433ce7(_0x2ff2ea, _0x37be5c) {
            return function (_0x30f205, _0x23053f) {
                _0x30f205['eatSpace']();
                if (_0x37be5c && _0x30f205['eat']('>'))
                    return _0x167c05(_0x23053f), _0x23053f['tokenize'] = _0x529b39, 'tag';
                if (!_0x30f205['eat']('/'))
                    _0x202c9b(_0x23053f, {
                        'type': 'tag',
                        'name': _0x2ff2ea,
                        'tokenize': _0x529b39
                    });
                if (!_0x30f205['eat']('>'))
                    return _0x23053f['tokenize'] = _0x4c4b1f, 'tag';
                else
                    _0x23053f['tokenize'] = _0x529b39;
                return 'tag';
            };
        }
        function _0x4c4b1f(_0x4f5835, _0x382666) {
            var _0x4f411e = _0x4f5835['next']();
            if (_0x4f411e == '/' && _0x4f5835['eat']('>')) {
                if (_0x2294fb(_0x382666))
                    _0x167c05(_0x382666);
                if (_0x1a404f(_0x382666))
                    _0x167c05(_0x382666);
                return 'tag';
            }
            if (_0x4f411e == '>') {
                if (_0x2294fb(_0x382666))
                    _0x167c05(_0x382666);
                return 'tag';
            }
            if (_0x4f411e == '=')
                return null;
            if (_0x4f411e == '\x22' || _0x4f411e == '\x27')
                return _0x5ef32f(_0x4f5835, _0x382666, _0x2044ef(_0x4f411e, _0x4c4b1f));
            if (!_0x2294fb(_0x382666))
                _0x202c9b(_0x382666, {
                    'type': 'attribute',
                    'tokenize': _0x4c4b1f
                });
            return _0x4f5835['eat'](/[a-zA-Z_:]/), _0x4f5835['eatWhile'](/[-a-zA-Z0-9_:.]/), _0x4f5835['eatSpace'](), (_0x4f5835['match']('>', ![]) || _0x4f5835['match']('/', ![])) && (_0x167c05(_0x382666), _0x382666['tokenize'] = _0x529b39), 'attribute';
        }
        function _0x428b8e(_0x5082d6, _0x159b87) {
            var _0x360017;
            while (_0x360017 = _0x5082d6['next']()) {
                if (_0x360017 == '-' && _0x5082d6['match']('->', !![]))
                    return _0x159b87['tokenize'] = _0x529b39, 'comment';
            }
        }
        function _0x1e4d07(_0x21d578, _0x27cecd) {
            var _0x19188a;
            while (_0x19188a = _0x21d578['next']()) {
                if (_0x19188a == ']' && _0x21d578['match'](']', !![]))
                    return _0x27cecd['tokenize'] = _0x529b39, 'comment';
            }
        }
        function _0x4beef4(_0x298a76, _0x3141c3) {
            var _0x19bbf4;
            while (_0x19bbf4 = _0x298a76['next']()) {
                if (_0x19bbf4 == '?' && _0x298a76['match']('>', !![]))
                    return _0x3141c3['tokenize'] = _0x529b39, 'comment\x20meta';
            }
        }
        function _0x1a404f(_0x29284d) {
            return _0x2388af(_0x29284d, 'tag');
        }
        function _0x2294fb(_0x583bae) {
            return _0x2388af(_0x583bae, 'attribute');
        }
        function _0x180765(_0x18ffb2) {
            return _0x2388af(_0x18ffb2, 'xmlconstructor');
        }
        function _0x300f07(_0x374e66) {
            return _0x2388af(_0x374e66, 'string');
        }
        function _0x5a61c1(_0x46a306) {
            if (_0x46a306['current']() === '\x22')
                return _0x46a306['match'](/^[^\"]+\"\:/, ![]);
            else {
                if (_0x46a306['current']() === '\x27')
                    return _0x46a306['match'](/^[^\"]+\'\:/, ![]);
                else
                    return ![];
            }
        }
        function _0x2388af(_0x547dc3, _0x3ac1e5) {
            return _0x547dc3['stack']['length'] && _0x547dc3['stack'][_0x547dc3['stack']['length'] - (-0x24cc + 0xda2 * 0x2 + 0x989)]['type'] == _0x3ac1e5;
        }
        function _0x202c9b(_0xefdf4, _0x22b133) {
            _0xefdf4['stack']['push'](_0x22b133);
        }
        function _0x167c05(_0x3153c1) {
            _0x3153c1['stack']['pop']();
            var _0x1fea52 = _0x3153c1['stack']['length'] && _0x3153c1['stack'][_0x3153c1['stack']['length'] - (0x140b + -0x1b66 + 0x75c)]['tokenize'];
            _0x3153c1['tokenize'] = _0x1fea52 || _0x529b39;
        }
        return {
            'startState': function () {
                return {
                    'tokenize': _0x529b39,
                    'cc': [],
                    'stack': []
                };
            },
            'token': function (_0x4a59e8, _0x1d9525) {
                if (_0x4a59e8['eatSpace']())
                    return null;
                var _0x37e381 = _0x1d9525['tokenize'](_0x4a59e8, _0x1d9525);
                return _0x37e381;
            },
            'blockCommentStart': '(:',
            'blockCommentEnd': ':)'
        };
    }), _0x2fafb6['defineMIME']('application/xquery', 'xquery');
}));
