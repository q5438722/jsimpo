'use strict';
const _0x1926 = [
    'Method',
    'imported',
    'ImportSpecifier',
    'isKeyword',
    'this',
    'IfStatement',
    'alternate',
    'LabeledStatement',
    'label',
    'StringLiteral',
    'Pureish',
    'Immutable',
    'NumericLiteral',
    'NumberLiteral',
    'number',
    'Literal',
    'NullLiteral',
    'BooleanLiteral',
    'RegExpLiteral',
    'RegexLiteral',
    '\x22\x20is\x20not\x20a\x20valid\x20RegExp\x20flag',
    'LogicalExpression',
    'LOGICAL_OPERATORS',
    'object',
    'optional',
    'NewExpression',
    'sourceType',
    'interpreter',
    'script',
    'module',
    'Block',
    'ObjectExpression',
    'ObjectMethod',
    'ObjectProperty',
    'computed',
    'get',
    'set',
    'key',
    'UserWhitespacable',
    'ObjectMember',
    'shorthand',
    'Property\x20shorthand\x20of\x20ObjectProperty\x20cannot\x20be\x20true\x20if\x20computed\x20is\x20true',
    'Property\x20shorthand\x20of\x20ObjectProperty\x20cannot\x20be\x20true\x20if\x20key\x20is\x20not\x20an\x20Identifier',
    'argument',
    'Internal\x20Babel\x20error:\x20malformed\x20key.',
    'length',
    'ReturnStatement',
    'expressions',
    'expression',
    'SwitchCase',
    'SwitchStatement',
    'discriminant',
    'cases',
    'ThisExpression',
    'ThrowStatement',
    'TryStatement',
    'block',
    'handler',
    'finalizer',
    'TryStatement\x20expects\x20either\x20a\x20handler\x20or\x20finalizer,\x20or\x20both',
    'UnaryExpression',
    'prefix',
    'UNARY_OPERATORS',
    'UnaryLike',
    'UpdateExpression',
    'UPDATE_OPERATORS',
    'kind',
    'declarations',
    'let',
    'const',
    'VariableDeclarator',
    'ForXStatement',
    'Exactly\x20one\x20VariableDeclarator\x20is\x20required\x20in\x20the\x20VariableDeclaration\x20of\x20a\x20',
    'type',
    'WhileStatement',
    'WithStatement',
    'AssignmentPattern',
    'null',
    'ArrowFunctionExpression',
    'ClassBody',
    'ClassMethod',
    'ClassPrivateMethod',
    'ClassProperty',
    'ClassPrivateProperty',
    'TSDeclareMethod',
    'TSIndexSignature',
    'superClass',
    'mixins',
    'superTypeParameters',
    'implements',
    'TSExpressionWithTypeArguments',
    'ClassImplements',
    'ClassDeclaration',
    'ClassExpression',
    'Class',
    'InterfaceExtends',
    'ExportAllDeclaration',
    'source',
    'ExportDeclaration',
    'validateOptional',
    'ImportAttribute',
    'declaration',
    'TSDeclareFunction',
    'ExportNamedDeclaration',
    'specifiers',
    'ModuleDeclaration',
    'Only\x20declaration\x20or\x20specifiers\x20is\x20allowed\x20on\x20ExportNamedDeclaration',
    'ExportSpecifier',
    'ExportDefaultSpecifier',
    'ExportNamespaceSpecifier',
    'local',
    'exported',
    'ModuleSpecifier',
    'ForOfStatement',
    'ImportDeclaration',
    'typeof',
    'ImportDefaultSpecifier',
    'ImportNamespaceSpecifier',
    'function',
    'sent',
    'target',
    'import',
    'meta',
    'Unrecognised\x20MetaProperty',
    'public',
    'private',
    'protected',
    'TSParameterProperty',
    'method',
    'constructor',
    'static',
    'properties',
    'tag',
    'quasi',
    'TemplateLiteral',
    'TemplateElement',
    'assertShape',
    'TSType',
    'quasis',
    '\x20quasis\x20should\x20be\x20exactly\x20one\x20more\x20than\x20the\x20number\x20of\x20expressions.\x0aExpected\x20',
    'YieldExpression',
    'delegate',
    'Property\x20delegate\x20of\x20YieldExpression\x20cannot\x20be\x20true\x20if\x20there\x20is\x20no\x20argument',
    'Import',
    'OptionalCallExpression',
    '788428gptBHz',
    '842377bxllSA',
    '626667uUCbry',
    '1izPLFb',
    '144941ZSjZSn',
    '4YcVNZz',
    '3wQUaIq',
    '9311TDEKwS',
    '78LUlfiW',
    '9667SBnmMa',
    '431994exuwfs',
    '3BWmftz',
    '__esModule',
    'classMethodOrDeclareMethodCommon',
    'classMethodOrPropertyCommon',
    'patternLikeCommon',
    'functionDeclarationCommon',
    'functionTypeAnnotationCommon',
    'functionCommon',
    '../validators/is',
    '../validators/isValidIdentifier',
    '@babel/helper-validator-identifier',
    '../constants',
    './utils',
    'default',
    'ArrayExpression',
    'chain',
    'assertValueType',
    'array',
    'Expression',
    'SpreadElement',
    'env',
    'BABEL_TYPES_8_BREAKING',
    'elements',
    'AssignmentExpression',
    'assertOneOf',
    'ASSIGNMENT_OPERATORS',
    'Pattern',
    'assertNodeType',
    'LVal',
    'Identifier',
    'operator',
    'left',
    'right',
    'BinaryExpression',
    'PrivateName',
    'oneOfNodeTypes',
    'InterpreterDirective',
    'value',
    'string',
    'DirectiveLiteral',
    'body',
    'directives',
    'assertEach',
    'Directive',
    'Statement',
    'Scopable',
    'CompletionStatement',
    'CallExpression',
    'callee',
    'typeParameters',
    'typeArguments',
    'arguments',
    'assign',
    'JSXNamespacedName',
    'ArgumentPlaceholder',
    'TypeParameterInstantiation',
    'TSTypeParameterInstantiation',
    'CatchClause',
    'param',
    'ArrayPattern',
    'ObjectPattern',
    'BlockParent',
    'consequent',
    'Conditional',
    'ContinueStatement',
    'Terminatorless',
    'DebuggerStatement',
    'DoWhileStatement',
    'test',
    'Loop',
    'While',
    'ExpressionStatement',
    'File',
    'program',
    'comments',
    'tokens',
    'Program',
    'CommentLine',
    'any',
    'ForInStatement',
    'For',
    'VariableDeclaration',
    'ForStatement',
    'init',
    'update',
    'TypeAnnotation',
    'TSTypeAnnotation',
    'Noop',
    'TypeParameterDeclaration',
    'TSTypeParameterDeclaration',
    'boolean',
    'FunctionDeclaration',
    'params',
    'generator',
    'async',
    'returnType',
    'BlockStatement',
    'FunctionParent',
    'Declaration',
    'ExportDefaultDeclaration',
    'Function',
    'Decorator',
    'name',
    'typeAnnotation',
    'decorators',
    'PatternLike',
    'TSEntityName',
    'exec',
    'property',
    'MemberExpression',
    'OptionalMemberExpression',
    'Property'
];
const _0x217a42 = _0x3d39;
(function (_0x5d1a63, _0x3d52f6) {
    const _0x4a7aaa = _0x3d39;
    while (!![]) {
        try {
            const _0x1dd8ed = -parseInt(_0x4a7aaa(0xa6)) + -parseInt(_0x4a7aaa(0xa7)) + parseInt(_0x4a7aaa(0xa8)) * parseInt(_0x4a7aaa(0xa9)) + -parseInt(_0x4a7aaa(0xaa)) * parseInt(_0x4a7aaa(0xab)) + -parseInt(_0x4a7aaa(0xac)) * -parseInt(_0x4a7aaa(0xad)) + parseInt(_0x4a7aaa(0xae)) * parseInt(_0x4a7aaa(0xaf)) + parseInt(_0x4a7aaa(0xb0)) * parseInt(_0x4a7aaa(0xb1));
            if (_0x1dd8ed === _0x3d52f6)
                break;
            else
                _0x5d1a63['push'](_0x5d1a63['shift']());
        } catch (_0x1c1793) {
            _0x5d1a63['push'](_0x5d1a63['shift']());
        }
    }
}(_0x1926, 0x789d7));
Object['defineProperty'](exports, _0x217a42(0xb2), { 'value': !![] }), exports[_0x217a42(0xb3)] = exports[_0x217a42(0xb4)] = exports[_0x217a42(0xb5)] = exports[_0x217a42(0xb6)] = exports[_0x217a42(0xb7)] = exports[_0x217a42(0xb8)] = void 0x0;
var _is = require(_0x217a42(0xb9)), _isValidIdentifier = require(_0x217a42(0xba)), _helperValidatorIdentifier = require(_0x217a42(0xbb)), _constants = require(_0x217a42(0xbc)), _utils = require(_0x217a42(0xbd));
(0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xbf), {
    'fields': {
        'elements': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils['assertEach'])((0x0, _utils['assertNodeOrValueType'])('null', _0x217a42(0xc3), _0x217a42(0xc4)))),
            'default': !process[_0x217a42(0xc5)][_0x217a42(0xc6)] ? [] : undefined
        }
    },
    'visitor': [_0x217a42(0xc7)],
    'aliases': ['Expression']
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xc8), {
    'fields': {
        'operator': {
            'validate': function () {
                const _0x5c4904 = _0x217a42;
                if (!process[_0x5c4904(0xc5)]['BABEL_TYPES_8_BREAKING'])
                    return (0x0, _utils[_0x5c4904(0xc1)])('string');
                const _0x4a03e2 = (0x0, _utils[_0x5c4904(0xc9)])(..._constants[_0x5c4904(0xca)]), _0x4c5d1a = (0x0, _utils[_0x5c4904(0xc9)])('=');
                return function (_0x4d9fa2, _0x14190b, _0x4c6e47) {
                    const _0x3ade05 = _0x5c4904, _0x3465c1 = (0x0, _is[_0x3ade05(0xbe)])(_0x3ade05(0xcb), _0x4d9fa2['left']) ? _0x4c5d1a : _0x4a03e2;
                    _0x3465c1(_0x4d9fa2, _0x14190b, _0x4c6e47);
                };
            }()
        },
        'left': { 'validate': !process[_0x217a42(0xc5)][_0x217a42(0xc6)] ? (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xcd)) : (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce), 'MemberExpression', 'ArrayPattern', 'ObjectPattern') },
        'right': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) }
    },
    'builder': [
        _0x217a42(0xcf),
        _0x217a42(0xd0),
        _0x217a42(0xd1)
    ],
    'visitor': [
        'left',
        _0x217a42(0xd1)
    ],
    'aliases': [_0x217a42(0xc3)]
}), (0x0, _utils['default'])(_0x217a42(0xd2), {
    'builder': [
        _0x217a42(0xcf),
        _0x217a42(0xd0),
        _0x217a42(0xd1)
    ],
    'fields': {
        'operator': { 'validate': (0x0, _utils[_0x217a42(0xc9)])(..._constants['BINARY_OPERATORS']) },
        'left': {
            'validate': function () {
                const _0x135c11 = _0x217a42, _0x5b4f96 = (0x0, _utils[_0x135c11(0xcc)])('Expression'), _0x5a9b28 = (0x0, _utils['assertNodeType'])(_0x135c11(0xc3), _0x135c11(0xd3)), _0x4fd32f = function (_0x2c3775, _0x1ad11e, _0x218a9d) {
                        const _0x386788 = _0x135c11, _0x31e5d9 = _0x2c3775[_0x386788(0xcf)] === 'in' ? _0x5a9b28 : _0x5b4f96;
                        _0x31e5d9(_0x2c3775, _0x1ad11e, _0x218a9d);
                    };
                return _0x4fd32f[_0x135c11(0xd4)] = [
                    'Expression',
                    'PrivateName'
                ], _0x4fd32f;
            }()
        },
        'right': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) }
    },
    'visitor': [
        _0x217a42(0xd0),
        'right'
    ],
    'aliases': [
        'Binary',
        _0x217a42(0xc3)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xd5), {
    'builder': [_0x217a42(0xd6)],
    'fields': { 'value': { 'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xd7)) } }
}), (0x0, _utils[_0x217a42(0xbe)])('Directive', {
    'visitor': ['value'],
    'fields': { 'value': { 'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xd8)) } }
}), (0x0, _utils[_0x217a42(0xbe)])('DirectiveLiteral', {
    'builder': ['value'],
    'fields': { 'value': { 'validate': (0x0, _utils[_0x217a42(0xc1)])('string') } }
}), (0x0, _utils[_0x217a42(0xbe)])('BlockStatement', {
    'builder': [
        _0x217a42(0xd9),
        _0x217a42(0xda)
    ],
    'visitor': [
        _0x217a42(0xda),
        'body'
    ],
    'fields': {
        'directives': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])('array'), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xdc)))),
            'default': []
        },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])('array'), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xdd)))) }
    },
    'aliases': [
        _0x217a42(0xde),
        'BlockParent',
        'Block',
        _0x217a42(0xdd)
    ]
}), (0x0, _utils['default'])('BreakStatement', {
    'visitor': ['label'],
    'fields': {
        'label': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce)),
            'optional': !![]
        }
    },
    'aliases': [
        _0x217a42(0xdd),
        'Terminatorless',
        _0x217a42(0xdf)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xe0), {
    'visitor': [
        _0x217a42(0xe1),
        'arguments',
        _0x217a42(0xe2),
        _0x217a42(0xe3)
    ],
    'builder': [
        _0x217a42(0xe1),
        _0x217a42(0xe4)
    ],
    'aliases': [_0x217a42(0xc3)],
    'fields': Object[_0x217a42(0xe5)]({
        'callee': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression', 'V8IntrinsicIdentifier') },
        'arguments': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])('Expression', _0x217a42(0xc4), _0x217a42(0xe6), _0x217a42(0xe7)))) }
    }, !process['env'][_0x217a42(0xc6)] ? {
        'optional': {
            'validate': (0x0, _utils['assertOneOf'])(!![], ![]),
            'optional': !![]
        }
    } : {}, {
        'typeArguments': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xe8)),
            'optional': !![]
        },
        'typeParameters': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xe9)),
            'optional': !![]
        }
    })
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xea), {
    'visitor': [
        _0x217a42(0xeb),
        _0x217a42(0xd9)
    ],
    'fields': {
        'param': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])('Identifier', _0x217a42(0xec), _0x217a42(0xed)),
            'optional': !![]
        },
        'body': { 'validate': (0x0, _utils['assertNodeType'])('BlockStatement') }
    },
    'aliases': [
        'Scopable',
        _0x217a42(0xee)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])('ConditionalExpression', {
    'visitor': [
        'test',
        _0x217a42(0xef),
        'alternate'
    ],
    'fields': {
        'test': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression') },
        'consequent': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) },
        'alternate': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) }
    },
    'aliases': [
        'Expression',
        _0x217a42(0xf0)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xf1), {
    'visitor': ['label'],
    'fields': {
        'label': {
            'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xce)),
            'optional': !![]
        }
    },
    'aliases': [
        _0x217a42(0xdd),
        _0x217a42(0xf2),
        _0x217a42(0xdf)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xf3), { 'aliases': ['Statement'] }), (0x0, _utils['default'])(_0x217a42(0xf4), {
    'visitor': [
        _0x217a42(0xf5),
        _0x217a42(0xd9)
    ],
    'fields': {
        'test': { 'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xc3)) },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xdd)) }
    },
    'aliases': [
        _0x217a42(0xdd),
        _0x217a42(0xee),
        _0x217a42(0xf6),
        _0x217a42(0xf7),
        _0x217a42(0xde)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])('EmptyStatement', { 'aliases': [_0x217a42(0xdd)] }), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xf8), {
    'visitor': ['expression'],
    'fields': { 'expression': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression') } },
    'aliases': [
        _0x217a42(0xdd),
        'ExpressionWrapper'
    ]
}), (0x0, _utils['default'])(_0x217a42(0xf9), {
    'builder': [
        _0x217a42(0xfa),
        _0x217a42(0xfb),
        _0x217a42(0xfc)
    ],
    'visitor': ['program'],
    'fields': {
        'program': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xfd)) },
        'comments': {
            'validate': !process[_0x217a42(0xc5)]['BABEL_TYPES_8_BREAKING'] ? Object[_0x217a42(0xe5)](() => {
            }, {
                'each': {
                    'oneOfNodeTypes': [
                        'CommentBlock',
                        _0x217a42(0xfe)
                    ]
                }
            }) : (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])('CommentBlock', _0x217a42(0xfe))),
            'optional': !![]
        },
        'tokens': {
            'validate': (0x0, _utils[_0x217a42(0xdb)])(Object['assign'](() => {
            }, { 'type': _0x217a42(0xff) })),
            'optional': !![]
        }
    }
}), (0x0, _utils['default'])(_0x217a42(0x100), {
    'visitor': [
        _0x217a42(0xd0),
        _0x217a42(0xd1),
        _0x217a42(0xd9)
    ],
    'aliases': [
        _0x217a42(0xde),
        _0x217a42(0xdd),
        _0x217a42(0x101),
        _0x217a42(0xee),
        _0x217a42(0xf6),
        'ForXStatement'
    ],
    'fields': {
        'left': { 'validate': !process[_0x217a42(0xc5)][_0x217a42(0xc6)] ? (0x0, _utils['assertNodeType'])(_0x217a42(0x102), 'LVal') : (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x102), _0x217a42(0xce), 'MemberExpression', _0x217a42(0xec), _0x217a42(0xed)) },
        'right': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xdd)) }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x103), {
    'visitor': [
        _0x217a42(0x104),
        _0x217a42(0xf5),
        _0x217a42(0x105),
        _0x217a42(0xd9)
    ],
    'aliases': [
        _0x217a42(0xde),
        _0x217a42(0xdd),
        'For',
        _0x217a42(0xee),
        _0x217a42(0xf6)
    ],
    'fields': {
        'init': {
            'validate': (0x0, _utils['assertNodeType'])('VariableDeclaration', _0x217a42(0xc3)),
            'optional': !![]
        },
        'test': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression'),
            'optional': !![]
        },
        'update': {
            'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xc3)),
            'optional': !![]
        },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Statement') }
    }
});
const functionCommon = {
    'params': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils['assertValueType'])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce), 'Pattern', 'RestElement'))) },
    'generator': { 'default': ![] },
    'async': { 'default': ![] }
};
exports[_0x217a42(0xb8)] = functionCommon;
const functionTypeAnnotationCommon = {
    'returnType': {
        'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x106), _0x217a42(0x107), _0x217a42(0x108)),
        'optional': !![]
    },
    'typeParameters': {
        'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x109), _0x217a42(0x10a), 'Noop'),
        'optional': !![]
    }
};
exports[_0x217a42(0xb7)] = functionTypeAnnotationCommon;
const functionDeclarationCommon = Object[_0x217a42(0xe5)]({}, functionCommon, {
    'declare': {
        'validate': (0x0, _utils['assertValueType'])(_0x217a42(0x10b)),
        'optional': !![]
    },
    'id': {
        'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xce)),
        'optional': !![]
    }
});
exports[_0x217a42(0xb6)] = functionDeclarationCommon, (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x10c), {
    'builder': [
        'id',
        _0x217a42(0x10d),
        _0x217a42(0xd9),
        _0x217a42(0x10e),
        _0x217a42(0x10f)
    ],
    'visitor': [
        'id',
        _0x217a42(0x10d),
        _0x217a42(0xd9),
        _0x217a42(0x110),
        _0x217a42(0xe2)
    ],
    'fields': Object[_0x217a42(0xe5)]({}, functionDeclarationCommon, functionTypeAnnotationCommon, { 'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x111)) } }),
    'aliases': [
        _0x217a42(0xde),
        'Function',
        _0x217a42(0xee),
        _0x217a42(0x112),
        _0x217a42(0xdd),
        'Pureish',
        _0x217a42(0x113)
    ],
    'validate': function () {
        const _0x1320ea = _0x217a42;
        if (!process[_0x1320ea(0xc5)]['BABEL_TYPES_8_BREAKING'])
            return () => {
            };
        const _0x510a63 = (0x0, _utils[_0x1320ea(0xcc)])('Identifier');
        return function (_0x138648, _0x11faf4, _0x3e18c4) {
            const _0x1f0c9a = _0x1320ea;
            !(0x0, _is['default'])(_0x1f0c9a(0x114), _0x138648) && _0x510a63(_0x3e18c4, 'id', _0x3e18c4['id']);
        };
    }()
}), (0x0, _utils['default'])('FunctionExpression', {
    'inherits': _0x217a42(0x10c),
    'aliases': [
        _0x217a42(0xde),
        _0x217a42(0x115),
        'BlockParent',
        _0x217a42(0x112),
        _0x217a42(0xc3),
        'Pureish'
    ],
    'fields': Object[_0x217a42(0xe5)]({}, functionCommon, functionTypeAnnotationCommon, {
        'id': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce)),
            'optional': !![]
        },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x111)) }
    })
});
const patternLikeCommon = {
    'typeAnnotation': {
        'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x106), _0x217a42(0x107), _0x217a42(0x108)),
        'optional': !![]
    },
    'decorators': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x116)))) }
};
exports[_0x217a42(0xb5)] = patternLikeCommon, (0x0, _utils[_0x217a42(0xbe)])('Identifier', {
    'builder': [_0x217a42(0x117)],
    'visitor': [
        _0x217a42(0x118),
        _0x217a42(0x119)
    ],
    'aliases': [
        _0x217a42(0xc3),
        _0x217a42(0x11a),
        _0x217a42(0xcd),
        _0x217a42(0x11b)
    ],
    'fields': Object[_0x217a42(0xe5)]({}, patternLikeCommon, {
        'name': {
            'validate': (0x0, _utils['chain'])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xd7)), Object[_0x217a42(0xe5)](function (_0x458e7f, _0x3efa55, _0x3cb5d1) {
                const _0x2cc539 = _0x217a42;
                if (!process[_0x2cc539(0xc5)][_0x2cc539(0xc6)])
                    return;
                if (!(0x0, _isValidIdentifier[_0x2cc539(0xbe)])(_0x3cb5d1, ![]))
                    throw new TypeError('\x22' + _0x3cb5d1 + '\x22\x20is\x20not\x20a\x20valid\x20identifier\x20name');
            }, { 'type': _0x217a42(0xd7) }))
        },
        'optional': {
            'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)),
            'optional': !![]
        }
    }),
    'validate'(_0x3d74b0, _0x3faccc, _0x12358f) {
        const _0x1d3ea6 = _0x217a42;
        if (!process['env'][_0x1d3ea6(0xc6)])
            return;
        const _0x365de7 = /\.(\w+)$/[_0x1d3ea6(0x11c)](_0x3faccc);
        if (!_0x365de7)
            return;
        const [, _0x2fb710] = _0x365de7, _0x27de02 = { 'computed': ![] };
        if (_0x2fb710 === _0x1d3ea6(0x11d)) {
            if ((0x0, _is[_0x1d3ea6(0xbe)])(_0x1d3ea6(0x11e), _0x3d74b0, _0x27de02))
                return;
            if ((0x0, _is[_0x1d3ea6(0xbe)])(_0x1d3ea6(0x11f), _0x3d74b0, _0x27de02))
                return;
        } else {
            if (_0x2fb710 === 'key') {
                if ((0x0, _is['default'])(_0x1d3ea6(0x120), _0x3d74b0, _0x27de02))
                    return;
                if ((0x0, _is['default'])(_0x1d3ea6(0x121), _0x3d74b0, _0x27de02))
                    return;
            } else {
                if (_0x2fb710 === 'exported') {
                    if ((0x0, _is[_0x1d3ea6(0xbe)])('ExportSpecifier', _0x3d74b0))
                        return;
                } else {
                    if (_0x2fb710 === _0x1d3ea6(0x122)) {
                        if ((0x0, _is['default'])(_0x1d3ea6(0x123), _0x3d74b0, { 'imported': _0x12358f }))
                            return;
                    } else {
                        if (_0x2fb710 === 'meta') {
                            if ((0x0, _is['default'])('MetaProperty', _0x3d74b0, { 'meta': _0x12358f }))
                                return;
                        }
                    }
                }
            }
        }
        if (((0x0, _helperValidatorIdentifier[_0x1d3ea6(0x124)])(_0x12358f[_0x1d3ea6(0x117)]) || (0x0, _helperValidatorIdentifier['isReservedWord'])(_0x12358f[_0x1d3ea6(0x117)], ![])) && _0x12358f[_0x1d3ea6(0x117)] !== _0x1d3ea6(0x125))
            throw new TypeError('\x22' + _0x12358f[_0x1d3ea6(0x117)] + '\x22\x20is\x20not\x20a\x20valid\x20identifier');
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x126), {
    'visitor': [
        _0x217a42(0xf5),
        _0x217a42(0xef),
        _0x217a42(0x127)
    ],
    'aliases': [
        _0x217a42(0xdd),
        _0x217a42(0xf0)
    ],
    'fields': {
        'test': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) },
        'consequent': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xdd)) },
        'alternate': {
            'optional': !![],
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xdd))
        }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x128), {
    'visitor': [
        _0x217a42(0x129),
        'body'
    ],
    'aliases': [_0x217a42(0xdd)],
    'fields': {
        'label': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce)) },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Statement') }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x12a), {
    'builder': [_0x217a42(0xd6)],
    'fields': { 'value': { 'validate': (0x0, _utils['assertValueType'])(_0x217a42(0xd7)) } },
    'aliases': [
        'Expression',
        _0x217a42(0x12b),
        'Literal',
        _0x217a42(0x12c)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x12d), {
    'builder': [_0x217a42(0xd6)],
    'deprecatedAlias': _0x217a42(0x12e),
    'fields': { 'value': { 'validate': (0x0, _utils['assertValueType'])(_0x217a42(0x12f)) } },
    'aliases': [
        _0x217a42(0xc3),
        _0x217a42(0x12b),
        _0x217a42(0x130),
        'Immutable'
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x131), {
    'aliases': [
        _0x217a42(0xc3),
        _0x217a42(0x12b),
        'Literal',
        _0x217a42(0x12c)
    ]
}), (0x0, _utils['default'])(_0x217a42(0x132), {
    'builder': [_0x217a42(0xd6)],
    'fields': { 'value': { 'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)) } },
    'aliases': [
        _0x217a42(0xc3),
        _0x217a42(0x12b),
        'Literal',
        _0x217a42(0x12c)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x133), {
    'builder': [
        'pattern',
        'flags'
    ],
    'deprecatedAlias': _0x217a42(0x134),
    'aliases': [
        _0x217a42(0xc3),
        _0x217a42(0x12b),
        _0x217a42(0x130)
    ],
    'fields': {
        'pattern': { 'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xd7)) },
        'flags': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xd7)), Object[_0x217a42(0xe5)](function (_0x20e891, _0x5ba576, _0x7b2306) {
                const _0x8b0483 = _0x217a42;
                if (!process[_0x8b0483(0xc5)][_0x8b0483(0xc6)])
                    return;
                const _0x1cafc9 = /[^gimsuy]/[_0x8b0483(0x11c)](_0x7b2306);
                if (_0x1cafc9)
                    throw new TypeError('\x22' + _0x1cafc9[0x0] + _0x8b0483(0x135));
            }, { 'type': _0x217a42(0xd7) })),
            'default': ''
        }
    }
}), (0x0, _utils['default'])(_0x217a42(0x136), {
    'builder': [
        _0x217a42(0xcf),
        _0x217a42(0xd0),
        _0x217a42(0xd1)
    ],
    'visitor': [
        _0x217a42(0xd0),
        _0x217a42(0xd1)
    ],
    'aliases': [
        'Binary',
        _0x217a42(0xc3)
    ],
    'fields': {
        'operator': { 'validate': (0x0, _utils[_0x217a42(0xc9)])(..._constants[_0x217a42(0x137)]) },
        'left': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) },
        'right': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) }
    }
}), (0x0, _utils[_0x217a42(0xbe)])('MemberExpression', {
    'builder': [
        _0x217a42(0x138),
        'property',
        'computed',
        ...!process[_0x217a42(0xc5)][_0x217a42(0xc6)] ? [_0x217a42(0x139)] : []
    ],
    'visitor': [
        _0x217a42(0x138),
        'property'
    ],
    'aliases': [
        _0x217a42(0xc3),
        _0x217a42(0xcd)
    ],
    'fields': Object[_0x217a42(0xe5)]({
        'object': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression') },
        'property': {
            'validate': function () {
                const _0x4c5498 = _0x217a42, _0xff4d7e = (0x0, _utils[_0x4c5498(0xcc)])(_0x4c5498(0xce), _0x4c5498(0xd3)), _0x131316 = (0x0, _utils['assertNodeType'])(_0x4c5498(0xc3)), _0x54732e = function (_0x2771ff, _0x4b7dc4, _0x30cd7d) {
                        const _0x5ab24a = _0x2771ff['computed'] ? _0x131316 : _0xff4d7e;
                        _0x5ab24a(_0x2771ff, _0x4b7dc4, _0x30cd7d);
                    };
                return _0x54732e[_0x4c5498(0xd4)] = [
                    'Expression',
                    _0x4c5498(0xce),
                    _0x4c5498(0xd3)
                ], _0x54732e;
            }()
        },
        'computed': { 'default': ![] }
    }, !process[_0x217a42(0xc5)]['BABEL_TYPES_8_BREAKING'] ? {
        'optional': {
            'validate': (0x0, _utils[_0x217a42(0xc9)])(!![], ![]),
            'optional': !![]
        }
    } : {})
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x13a), { 'inherits': _0x217a42(0xe0) }), (0x0, _utils[_0x217a42(0xbe)])('Program', {
    'visitor': [
        'directives',
        _0x217a42(0xd9)
    ],
    'builder': [
        _0x217a42(0xd9),
        _0x217a42(0xda),
        _0x217a42(0x13b),
        _0x217a42(0x13c)
    ],
    'fields': {
        'sourceFile': { 'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xd7)) },
        'sourceType': {
            'validate': (0x0, _utils[_0x217a42(0xc9)])(_0x217a42(0x13d), _0x217a42(0x13e)),
            'default': _0x217a42(0x13d)
        },
        'interpreter': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])('InterpreterDirective'),
            'default': null,
            'optional': !![]
        },
        'directives': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])('Directive'))),
            'default': []
        },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils['assertEach'])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xdd)))) }
    },
    'aliases': [
        _0x217a42(0xde),
        'BlockParent',
        _0x217a42(0x13f)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x140), {
    'visitor': ['properties'],
    'aliases': [_0x217a42(0xc3)],
    'fields': { 'properties': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils['assertValueType'])(_0x217a42(0xc2)), (0x0, _utils['assertEach'])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x141), _0x217a42(0x142), 'SpreadElement'))) } }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x141), {
    'builder': [
        'kind',
        'key',
        _0x217a42(0x10d),
        _0x217a42(0xd9),
        _0x217a42(0x143),
        _0x217a42(0x10e),
        'async'
    ],
    'fields': Object[_0x217a42(0xe5)]({}, functionCommon, functionTypeAnnotationCommon, {
        'kind': Object[_0x217a42(0xe5)]({ 'validate': (0x0, _utils[_0x217a42(0xc9)])('method', _0x217a42(0x144), _0x217a42(0x145)) }, !process[_0x217a42(0xc5)][_0x217a42(0xc6)] ? { 'default': 'method' } : {}),
        'computed': { 'default': ![] },
        'key': {
            'validate': function () {
                const _0x2ebca9 = _0x217a42, _0x2c0254 = (0x0, _utils[_0x2ebca9(0xcc)])(_0x2ebca9(0xce), _0x2ebca9(0x12a), _0x2ebca9(0x12d)), _0x387856 = (0x0, _utils[_0x2ebca9(0xcc)])(_0x2ebca9(0xc3)), _0x2e4c61 = function (_0x115e3d, _0x11768c, _0x214653) {
                        const _0x4f46d3 = _0x115e3d['computed'] ? _0x387856 : _0x2c0254;
                        _0x4f46d3(_0x115e3d, _0x11768c, _0x214653);
                    };
                return _0x2e4c61['oneOfNodeTypes'] = [
                    _0x2ebca9(0xc3),
                    _0x2ebca9(0xce),
                    _0x2ebca9(0x12a),
                    'NumericLiteral'
                ], _0x2e4c61;
            }()
        },
        'decorators': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])('Decorator'))),
            'optional': !![]
        },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x111)) }
    }),
    'visitor': [
        _0x217a42(0x146),
        _0x217a42(0x10d),
        _0x217a42(0xd9),
        'decorators',
        _0x217a42(0x110),
        _0x217a42(0xe2)
    ],
    'aliases': [
        _0x217a42(0x147),
        _0x217a42(0x115),
        _0x217a42(0xde),
        _0x217a42(0xee),
        'FunctionParent',
        _0x217a42(0x121),
        _0x217a42(0x148)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x142), {
    'builder': [
        'key',
        _0x217a42(0xd6),
        _0x217a42(0x143),
        _0x217a42(0x149),
        ...!process['env'][_0x217a42(0xc6)] ? ['decorators'] : []
    ],
    'fields': {
        'computed': { 'default': ![] },
        'key': {
            'validate': function () {
                const _0x4f241f = _0x217a42, _0x5b106c = (0x0, _utils[_0x4f241f(0xcc)])(_0x4f241f(0xce), _0x4f241f(0x12a), _0x4f241f(0x12d)), _0x40739b = (0x0, _utils[_0x4f241f(0xcc)])('Expression'), _0x23ec58 = function (_0x103ffb, _0x8f7102, _0x5898bf) {
                        const _0x4dead7 = _0x4f241f, _0x172dc1 = _0x103ffb[_0x4dead7(0x143)] ? _0x40739b : _0x5b106c;
                        _0x172dc1(_0x103ffb, _0x8f7102, _0x5898bf);
                    };
                return _0x23ec58[_0x4f241f(0xd4)] = [
                    _0x4f241f(0xc3),
                    _0x4f241f(0xce),
                    'StringLiteral',
                    _0x4f241f(0x12d)
                ], _0x23ec58;
            }()
        },
        'value': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3), _0x217a42(0x11a)) },
        'shorthand': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils['assertValueType'])(_0x217a42(0x10b)), Object[_0x217a42(0xe5)](function (_0xeef2a9, _0x32b054, _0x103e26) {
                const _0x5a2d78 = _0x217a42;
                if (!process['env']['BABEL_TYPES_8_BREAKING'])
                    return;
                if (_0x103e26 && _0xeef2a9['computed'])
                    throw new TypeError(_0x5a2d78(0x14a));
            }, { 'type': _0x217a42(0x10b) }), function (_0x245448, _0xa8f5ec, _0x43b88f) {
                const _0x2e0280 = _0x217a42;
                if (!process['env']['BABEL_TYPES_8_BREAKING'])
                    return;
                if (_0x43b88f && !(0x0, _is[_0x2e0280(0xbe)])('Identifier', _0x245448['key']))
                    throw new TypeError(_0x2e0280(0x14b));
            }),
            'default': ![]
        },
        'decorators': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils['assertEach'])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x116)))),
            'optional': !![]
        }
    },
    'visitor': [
        'key',
        _0x217a42(0xd6),
        _0x217a42(0x119)
    ],
    'aliases': [
        _0x217a42(0x147),
        _0x217a42(0x120),
        _0x217a42(0x148)
    ],
    'validate': function () {
        const _0x565505 = _0x217a42, _0x1591e3 = (0x0, _utils[_0x565505(0xcc)])('Identifier', _0x565505(0xcb)), _0x823fc0 = (0x0, _utils[_0x565505(0xcc)])('Expression');
        return function (_0x53403a, _0x1480fb, _0x475c72) {
            const _0x1f5d50 = _0x565505;
            if (!process[_0x1f5d50(0xc5)][_0x1f5d50(0xc6)])
                return;
            const _0x1291cf = (0x0, _is[_0x1f5d50(0xbe)])(_0x1f5d50(0xed), _0x53403a) ? _0x1591e3 : _0x823fc0;
            _0x1291cf(_0x475c72, _0x1f5d50(0xd6), _0x475c72[_0x1f5d50(0xd6)]);
        };
    }()
}), (0x0, _utils[_0x217a42(0xbe)])('RestElement', {
    'visitor': [
        _0x217a42(0x14c),
        'typeAnnotation'
    ],
    'builder': [_0x217a42(0x14c)],
    'aliases': [
        _0x217a42(0xcd),
        _0x217a42(0x11a)
    ],
    'deprecatedAlias': 'RestProperty',
    'fields': Object[_0x217a42(0xe5)]({}, patternLikeCommon, { 'argument': { 'validate': !process[_0x217a42(0xc5)][_0x217a42(0xc6)] ? (0x0, _utils['assertNodeType'])(_0x217a42(0xcd)) : (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce), _0x217a42(0xcb), _0x217a42(0x11e)) } }),
    'validate'(_0x8d8039, _0x48515c) {
        const _0x371860 = _0x217a42;
        if (!process[_0x371860(0xc5)][_0x371860(0xc6)])
            return;
        const _0x5b24b5 = /(\w+)\[(\d+)\]/[_0x371860(0x11c)](_0x48515c);
        if (!_0x5b24b5)
            throw new Error(_0x371860(0x14d));
        const [, _0x465de1, _0x375857] = _0x5b24b5;
        if (_0x8d8039[_0x465de1][_0x371860(0x14e)] > _0x375857 + 0x1)
            throw new TypeError('RestElement\x20must\x20be\x20last\x20element\x20of\x20' + _0x465de1);
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x14f), {
    'visitor': [_0x217a42(0x14c)],
    'aliases': [
        'Statement',
        _0x217a42(0xf2),
        _0x217a42(0xdf)
    ],
    'fields': {
        'argument': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression'),
            'optional': !![]
        }
    }
}), (0x0, _utils[_0x217a42(0xbe)])('SequenceExpression', {
    'visitor': [_0x217a42(0x150)],
    'fields': { 'expressions': { 'validate': (0x0, _utils['chain'])((0x0, _utils[_0x217a42(0xc1)])('array'), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)))) } },
    'aliases': ['Expression']
}), (0x0, _utils['default'])('ParenthesizedExpression', {
    'visitor': [_0x217a42(0x151)],
    'aliases': [
        _0x217a42(0xc3),
        'ExpressionWrapper'
    ],
    'fields': { 'expression': { 'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xc3)) } }
}), (0x0, _utils['default'])(_0x217a42(0x152), {
    'visitor': [
        _0x217a42(0xf5),
        _0x217a42(0xef)
    ],
    'fields': {
        'test': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)),
            'optional': !![]
        },
        'consequent': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils['assertEach'])((0x0, _utils[_0x217a42(0xcc)])('Statement'))) }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x153), {
    'visitor': [
        _0x217a42(0x154),
        _0x217a42(0x155)
    ],
    'aliases': [
        _0x217a42(0xdd),
        'BlockParent',
        _0x217a42(0xde)
    ],
    'fields': {
        'discriminant': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) },
        'cases': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x152)))) }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x156), { 'aliases': [_0x217a42(0xc3)] }), (0x0, _utils['default'])(_0x217a42(0x157), {
    'visitor': ['argument'],
    'aliases': [
        _0x217a42(0xdd),
        'Terminatorless',
        _0x217a42(0xdf)
    ],
    'fields': { 'argument': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) } }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x158), {
    'visitor': [
        _0x217a42(0x159),
        _0x217a42(0x15a),
        _0x217a42(0x15b)
    ],
    'aliases': [_0x217a42(0xdd)],
    'fields': {
        'block': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xcc)])('BlockStatement'), Object[_0x217a42(0xe5)](function (_0x2d370f) {
                const _0x4cdfcb = _0x217a42;
                if (!process[_0x4cdfcb(0xc5)][_0x4cdfcb(0xc6)])
                    return;
                if (!_0x2d370f['handler'] && !_0x2d370f[_0x4cdfcb(0x15b)])
                    throw new TypeError(_0x4cdfcb(0x15c));
            }, { 'oneOfNodeTypes': [_0x217a42(0x111)] }))
        },
        'handler': {
            'optional': !![],
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xea))
        },
        'finalizer': {
            'optional': !![],
            'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0x111))
        }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x15d), {
    'builder': [
        _0x217a42(0xcf),
        _0x217a42(0x14c),
        _0x217a42(0x15e)
    ],
    'fields': {
        'prefix': { 'default': !![] },
        'argument': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) },
        'operator': { 'validate': (0x0, _utils['assertOneOf'])(..._constants[_0x217a42(0x15f)]) }
    },
    'visitor': ['argument'],
    'aliases': [
        _0x217a42(0x160),
        _0x217a42(0xc3)
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x161), {
    'builder': [
        _0x217a42(0xcf),
        _0x217a42(0x14c),
        'prefix'
    ],
    'fields': {
        'prefix': { 'default': ![] },
        'argument': { 'validate': !process[_0x217a42(0xc5)][_0x217a42(0xc6)] ? (0x0, _utils['assertNodeType'])('Expression') : (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce), _0x217a42(0x11e)) },
        'operator': { 'validate': (0x0, _utils[_0x217a42(0xc9)])(..._constants[_0x217a42(0x162)]) }
    },
    'visitor': ['argument'],
    'aliases': [_0x217a42(0xc3)]
}), (0x0, _utils[_0x217a42(0xbe)])('VariableDeclaration', {
    'builder': [
        _0x217a42(0x163),
        _0x217a42(0x164)
    ],
    'visitor': [_0x217a42(0x164)],
    'aliases': [
        _0x217a42(0xdd),
        _0x217a42(0x113)
    ],
    'fields': {
        'declare': {
            'validate': (0x0, _utils['assertValueType'])(_0x217a42(0x10b)),
            'optional': !![]
        },
        'kind': { 'validate': (0x0, _utils['assertOneOf'])('var', _0x217a42(0x165), _0x217a42(0x166)) },
        'declarations': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])('array'), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils['assertNodeType'])(_0x217a42(0x167)))) }
    },
    'validate'(_0x52f205, _0xfd4e9f, _0x5cd364) {
        const _0x33b3e7 = _0x217a42;
        if (!process[_0x33b3e7(0xc5)][_0x33b3e7(0xc6)])
            return;
        if (!(0x0, _is[_0x33b3e7(0xbe)])(_0x33b3e7(0x168), _0x52f205, { 'left': _0x5cd364 }))
            return;
        if (_0x5cd364[_0x33b3e7(0x164)][_0x33b3e7(0x14e)] !== 0x1)
            throw new TypeError(_0x33b3e7(0x169) + _0x52f205[_0x33b3e7(0x16a)]);
    }
}), (0x0, _utils['default'])(_0x217a42(0x167), {
    'visitor': [
        'id',
        'init'
    ],
    'fields': {
        'id': {
            'validate': function () {
                const _0x3fdb16 = _0x217a42;
                if (!process[_0x3fdb16(0xc5)][_0x3fdb16(0xc6)])
                    return (0x0, _utils[_0x3fdb16(0xcc)])(_0x3fdb16(0xcd));
                const _0x5395c8 = (0x0, _utils['assertNodeType'])(_0x3fdb16(0xce), _0x3fdb16(0xec), _0x3fdb16(0xed)), _0x40ac55 = (0x0, _utils[_0x3fdb16(0xcc)])(_0x3fdb16(0xce));
                return function (_0x42f264, _0xaa8607, _0x497c7d) {
                    const _0x32ed50 = _0x3fdb16, _0x35aafe = _0x42f264[_0x32ed50(0x104)] ? _0x5395c8 : _0x40ac55;
                    _0x35aafe(_0x42f264, _0xaa8607, _0x497c7d);
                };
            }()
        },
        'definite': {
            'optional': !![],
            'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b))
        },
        'init': {
            'optional': !![],
            'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xc3))
        }
    }
}), (0x0, _utils['default'])(_0x217a42(0x16b), {
    'visitor': [
        _0x217a42(0xf5),
        'body'
    ],
    'aliases': [
        _0x217a42(0xdd),
        _0x217a42(0xee),
        _0x217a42(0xf6),
        _0x217a42(0xf7),
        _0x217a42(0xde)
    ],
    'fields': {
        'test': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression') },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Statement') }
    }
}), (0x0, _utils['default'])(_0x217a42(0x16c), {
    'visitor': [
        _0x217a42(0x138),
        _0x217a42(0xd9)
    ],
    'aliases': [_0x217a42(0xdd)],
    'fields': {
        'object': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xdd)) }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x16d), {
    'visitor': [
        'left',
        _0x217a42(0xd1),
        'decorators'
    ],
    'builder': [
        _0x217a42(0xd0),
        _0x217a42(0xd1)
    ],
    'aliases': [
        _0x217a42(0xcb),
        _0x217a42(0x11a),
        _0x217a42(0xcd)
    ],
    'fields': Object[_0x217a42(0xe5)]({}, patternLikeCommon, {
        'left': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce), _0x217a42(0xed), _0x217a42(0xec), _0x217a42(0x11e)) },
        'right': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression') },
        'decorators': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x116)))),
            'optional': !![]
        }
    })
}), (0x0, _utils['default'])(_0x217a42(0xec), {
    'visitor': [
        _0x217a42(0xc7),
        'typeAnnotation'
    ],
    'builder': [_0x217a42(0xc7)],
    'aliases': [
        _0x217a42(0xcb),
        _0x217a42(0x11a),
        _0x217a42(0xcd)
    ],
    'fields': Object[_0x217a42(0xe5)]({}, patternLikeCommon, {
        'elements': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils['assertNodeOrValueType'])(_0x217a42(0x16e), _0x217a42(0x11a)))) },
        'decorators': {
            'validate': (0x0, _utils['chain'])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils['assertNodeType'])(_0x217a42(0x116)))),
            'optional': !![]
        }
    })
}), (0x0, _utils['default'])(_0x217a42(0x16f), {
    'builder': [
        _0x217a42(0x10d),
        _0x217a42(0xd9),
        'async'
    ],
    'visitor': [
        'params',
        _0x217a42(0xd9),
        _0x217a42(0x110),
        _0x217a42(0xe2)
    ],
    'aliases': [
        _0x217a42(0xde),
        _0x217a42(0x115),
        _0x217a42(0xee),
        'FunctionParent',
        _0x217a42(0xc3),
        _0x217a42(0x12b)
    ],
    'fields': Object[_0x217a42(0xe5)]({}, functionCommon, functionTypeAnnotationCommon, {
        'expression': { 'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)) },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x111), _0x217a42(0xc3)) }
    })
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x170), {
    'visitor': [_0x217a42(0xd9)],
    'fields': { 'body': { 'validate': (0x0, _utils['chain'])((0x0, _utils['assertValueType'])(_0x217a42(0xc2)), (0x0, _utils['assertEach'])((0x0, _utils['assertNodeType'])(_0x217a42(0x171), _0x217a42(0x172), _0x217a42(0x173), _0x217a42(0x174), _0x217a42(0x175), _0x217a42(0x176)))) } }
}), (0x0, _utils[_0x217a42(0xbe)])('ClassExpression', {
    'builder': [
        'id',
        _0x217a42(0x177),
        _0x217a42(0xd9),
        'decorators'
    ],
    'visitor': [
        'id',
        _0x217a42(0xd9),
        _0x217a42(0x177),
        _0x217a42(0x178),
        _0x217a42(0xe2),
        _0x217a42(0x179),
        _0x217a42(0x17a),
        _0x217a42(0x119)
    ],
    'aliases': [
        'Scopable',
        'Class',
        _0x217a42(0xc3)
    ],
    'fields': {
        'id': {
            'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xce)),
            'optional': !![]
        },
        'typeParameters': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x109), _0x217a42(0x10a), 'Noop'),
            'optional': !![]
        },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x170)) },
        'superClass': {
            'optional': !![],
            'validate': (0x0, _utils['assertNodeType'])('Expression')
        },
        'superTypeParameters': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xe8), _0x217a42(0xe9)),
            'optional': !![]
        },
        'implements': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x17b), _0x217a42(0x17c)))),
            'optional': !![]
        },
        'decorators': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])('array'), (0x0, _utils['assertEach'])((0x0, _utils[_0x217a42(0xcc)])('Decorator'))),
            'optional': !![]
        },
        'mixins': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])('InterfaceExtends'),
            'optional': !![]
        }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x17d), {
    'inherits': _0x217a42(0x17e),
    'aliases': [
        'Scopable',
        _0x217a42(0x17f),
        'Statement',
        _0x217a42(0x113)
    ],
    'fields': {
        'id': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Identifier') },
        'typeParameters': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x109), _0x217a42(0x10a), _0x217a42(0x108)),
            'optional': !![]
        },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x170)) },
        'superClass': {
            'optional': !![],
            'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression')
        },
        'superTypeParameters': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])('TypeParameterInstantiation', _0x217a42(0xe9)),
            'optional': !![]
        },
        'implements': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])('array'), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils['assertNodeType'])(_0x217a42(0x17b), _0x217a42(0x17c)))),
            'optional': !![]
        },
        'decorators': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils['assertValueType'])('array'), (0x0, _utils['assertEach'])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x116)))),
            'optional': !![]
        },
        'mixins': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x180)),
            'optional': !![]
        },
        'declare': {
            'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)),
            'optional': !![]
        },
        'abstract': {
            'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)),
            'optional': !![]
        }
    },
    'validate': function () {
        const _0x5bffca = _0x217a42, _0x53791c = (0x0, _utils['assertNodeType'])(_0x5bffca(0xce));
        return function (_0x2fb8f4, _0x3c4e20, _0x535971) {
            const _0x26f437 = _0x5bffca;
            if (!process[_0x26f437(0xc5)]['BABEL_TYPES_8_BREAKING'])
                return;
            !(0x0, _is[_0x26f437(0xbe)])(_0x26f437(0x114), _0x2fb8f4) && _0x53791c(_0x535971, 'id', _0x535971['id']);
        };
    }()
}), (0x0, _utils['default'])(_0x217a42(0x181), {
    'visitor': [_0x217a42(0x182)],
    'aliases': [
        _0x217a42(0xdd),
        _0x217a42(0x113),
        'ModuleDeclaration',
        _0x217a42(0x183)
    ],
    'fields': {
        'source': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('StringLiteral') },
        'exportKind': (0x0, _utils[_0x217a42(0x184)])((0x0, _utils['assertOneOf'])(_0x217a42(0x16a), _0x217a42(0xd6))),
        'assertions': {
            'optional': !![],
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils['assertNodeType'])(_0x217a42(0x185))))
        }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x114), {
    'visitor': [_0x217a42(0x186)],
    'aliases': [
        _0x217a42(0xdd),
        _0x217a42(0x113),
        'ModuleDeclaration',
        _0x217a42(0x183)
    ],
    'fields': { 'declaration': { 'validate': (0x0, _utils['assertNodeType'])('FunctionDeclaration', _0x217a42(0x187), _0x217a42(0x17d), 'Expression') } }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x188), {
    'visitor': [
        'declaration',
        _0x217a42(0x189),
        _0x217a42(0x182)
    ],
    'aliases': [
        _0x217a42(0xdd),
        'Declaration',
        _0x217a42(0x18a),
        _0x217a42(0x183)
    ],
    'fields': {
        'declaration': {
            'optional': !![],
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x113)), Object[_0x217a42(0xe5)](function (_0x53c93d, _0x435d1f, _0x1ecc28) {
                const _0x286295 = _0x217a42;
                if (!process[_0x286295(0xc5)][_0x286295(0xc6)])
                    return;
                if (_0x1ecc28 && _0x53c93d[_0x286295(0x189)][_0x286295(0x14e)])
                    throw new TypeError(_0x286295(0x18b));
            }, { 'oneOfNodeTypes': [_0x217a42(0x113)] }), function (_0x110fc9, _0x3899bb, _0x16eb86) {
                const _0x1f589e = _0x217a42;
                if (!process[_0x1f589e(0xc5)][_0x1f589e(0xc6)])
                    return;
                if (_0x16eb86 && _0x110fc9[_0x1f589e(0x182)])
                    throw new TypeError('Cannot\x20export\x20a\x20declaration\x20from\x20a\x20source');
            })
        },
        'assertions': {
            'optional': !![],
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])('ImportAttribute')))
        },
        'specifiers': {
            'default': [],
            'validate': (0x0, _utils['chain'])((0x0, _utils[_0x217a42(0xc1)])('array'), (0x0, _utils[_0x217a42(0xdb)])(function () {
                const _0xb1f471 = _0x217a42, _0x433c73 = (0x0, _utils[_0xb1f471(0xcc)])(_0xb1f471(0x18c), _0xb1f471(0x18d), _0xb1f471(0x18e)), _0x2d767c = (0x0, _utils[_0xb1f471(0xcc)])(_0xb1f471(0x18c));
                if (!process[_0xb1f471(0xc5)][_0xb1f471(0xc6)])
                    return _0x433c73;
                return function (_0x3e1078, _0x3b27d9, _0x5d9670) {
                    const _0x4f9f3c = _0x3e1078['source'] ? _0x433c73 : _0x2d767c;
                    _0x4f9f3c(_0x3e1078, _0x3b27d9, _0x5d9670);
                };
            }()))
        },
        'source': {
            'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0x12a)),
            'optional': !![]
        },
        'exportKind': (0x0, _utils['validateOptional'])((0x0, _utils[_0x217a42(0xc9)])(_0x217a42(0x16a), _0x217a42(0xd6)))
    }
}), (0x0, _utils[_0x217a42(0xbe)])('ExportSpecifier', {
    'visitor': [
        _0x217a42(0x18f),
        _0x217a42(0x190)
    ],
    'aliases': [_0x217a42(0x191)],
    'fields': {
        'local': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce)) },
        'exported': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce), _0x217a42(0x12a)) }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x192), {
    'visitor': [
        _0x217a42(0xd0),
        'right',
        _0x217a42(0xd9)
    ],
    'builder': [
        _0x217a42(0xd0),
        'right',
        _0x217a42(0xd9),
        'await'
    ],
    'aliases': [
        _0x217a42(0xde),
        'Statement',
        _0x217a42(0x101),
        'BlockParent',
        'Loop',
        _0x217a42(0x168)
    ],
    'fields': {
        'left': {
            'validate': function () {
                const _0x38c037 = _0x217a42;
                if (!process[_0x38c037(0xc5)][_0x38c037(0xc6)])
                    return (0x0, _utils['assertNodeType'])(_0x38c037(0x102), _0x38c037(0xcd));
                const _0x553a44 = (0x0, _utils[_0x38c037(0xcc)])('VariableDeclaration'), _0x511589 = (0x0, _utils['assertNodeType'])(_0x38c037(0xce), _0x38c037(0x11e), _0x38c037(0xec), _0x38c037(0xed));
                return function (_0x523874, _0x15f46a, _0x5938e0) {
                    const _0x2eecdd = _0x38c037;
                    (0x0, _is[_0x2eecdd(0xbe)])(_0x2eecdd(0x102), _0x5938e0) ? _0x553a44(_0x523874, _0x15f46a, _0x5938e0) : _0x511589(_0x523874, _0x15f46a, _0x5938e0);
                };
            }()
        },
        'right': { 'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xc3)) },
        'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xdd)) },
        'await': { 'default': ![] }
    }
}), (0x0, _utils['default'])(_0x217a42(0x193), {
    'visitor': [
        _0x217a42(0x189),
        _0x217a42(0x182)
    ],
    'aliases': [
        'Statement',
        _0x217a42(0x113),
        _0x217a42(0x18a)
    ],
    'fields': {
        'assertions': {
            'optional': !![],
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x185))))
        },
        'specifiers': { 'validate': (0x0, _utils['chain'])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x123), 'ImportDefaultSpecifier', 'ImportNamespaceSpecifier'))) },
        'source': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('StringLiteral') },
        'importKind': {
            'validate': (0x0, _utils[_0x217a42(0xc9)])('type', _0x217a42(0x194), _0x217a42(0xd6)),
            'optional': !![]
        }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x195), {
    'visitor': ['local'],
    'aliases': [_0x217a42(0x191)],
    'fields': { 'local': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Identifier') } }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x196), {
    'visitor': [_0x217a42(0x18f)],
    'aliases': [_0x217a42(0x191)],
    'fields': { 'local': { 'validate': (0x0, _utils['assertNodeType'])('Identifier') } }
}), (0x0, _utils[_0x217a42(0xbe)])('ImportSpecifier', {
    'visitor': [
        _0x217a42(0x18f),
        _0x217a42(0x122)
    ],
    'aliases': [_0x217a42(0x191)],
    'fields': {
        'local': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce)) },
        'imported': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce), 'StringLiteral') },
        'importKind': {
            'validate': (0x0, _utils[_0x217a42(0xc9)])('type', _0x217a42(0x194)),
            'optional': !![]
        }
    }
}), (0x0, _utils[_0x217a42(0xbe)])('MetaProperty', {
    'visitor': [
        'meta',
        _0x217a42(0x11d)
    ],
    'aliases': [_0x217a42(0xc3)],
    'fields': {
        'meta': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils['assertNodeType'])(_0x217a42(0xce)), Object[_0x217a42(0xe5)](function (_0x2c4203, _0x4bf1f1, _0x28b048) {
                const _0x3ea9a5 = _0x217a42;
                if (!process[_0x3ea9a5(0xc5)][_0x3ea9a5(0xc6)])
                    return;
                let _0x19fdba;
                switch (_0x28b048[_0x3ea9a5(0x117)]) {
                case _0x3ea9a5(0x197):
                    _0x19fdba = _0x3ea9a5(0x198);
                    break;
                case 'new':
                    _0x19fdba = _0x3ea9a5(0x199);
                    break;
                case _0x3ea9a5(0x19a):
                    _0x19fdba = _0x3ea9a5(0x19b);
                    break;
                }
                if (!(0x0, _is[_0x3ea9a5(0xbe)])(_0x3ea9a5(0xce), _0x2c4203[_0x3ea9a5(0x11d)], { 'name': _0x19fdba }))
                    throw new TypeError(_0x3ea9a5(0x19c));
            }, { 'oneOfNodeTypes': [_0x217a42(0xce)] }))
        },
        'property': { 'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xce)) }
    }
});
function _0x3d39(_0xafbc6, _0x521287) {
    return _0x3d39 = function (_0x19265e, _0x3d3953) {
        _0x19265e = _0x19265e - 0xa6;
        let _0x128653 = _0x1926[_0x19265e];
        return _0x128653;
    }, _0x3d39(_0xafbc6, _0x521287);
}
const classMethodOrPropertyCommon = {
    'abstract': {
        'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)),
        'optional': !![]
    },
    'accessibility': {
        'validate': (0x0, _utils[_0x217a42(0xc9)])(_0x217a42(0x19d), _0x217a42(0x19e), _0x217a42(0x19f)),
        'optional': !![]
    },
    'static': { 'default': ![] },
    'override': { 'default': ![] },
    'computed': { 'default': ![] },
    'optional': {
        'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)),
        'optional': !![]
    },
    'key': {
        'validate': (0x0, _utils[_0x217a42(0xc0)])(function () {
            const _0x263f06 = _0x217a42, _0xa24452 = (0x0, _utils[_0x263f06(0xcc)])(_0x263f06(0xce), _0x263f06(0x12a), _0x263f06(0x12d)), _0x56c49a = (0x0, _utils[_0x263f06(0xcc)])('Expression');
            return function (_0x12c723, _0x208034, _0x456d32) {
                const _0x94bdfd = _0x263f06, _0x84b723 = _0x12c723[_0x94bdfd(0x143)] ? _0x56c49a : _0xa24452;
                _0x84b723(_0x12c723, _0x208034, _0x456d32);
            };
        }(), (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce), _0x217a42(0x12a), _0x217a42(0x12d), 'Expression'))
    }
};
exports[_0x217a42(0xb4)] = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = Object['assign']({}, functionCommon, classMethodOrPropertyCommon, {
    'params': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils['assertNodeType'])('Identifier', _0x217a42(0xcb), 'RestElement', _0x217a42(0x1a0)))) },
    'kind': {
        'validate': (0x0, _utils[_0x217a42(0xc9)])('get', _0x217a42(0x145), _0x217a42(0x1a1), _0x217a42(0x1a2)),
        'default': _0x217a42(0x1a1)
    },
    'access': {
        'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xd7)), (0x0, _utils[_0x217a42(0xc9)])(_0x217a42(0x19d), _0x217a42(0x19e), 'protected')),
        'optional': !![]
    },
    'decorators': {
        'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils['assertValueType'])(_0x217a42(0xc2)), (0x0, _utils['assertEach'])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x116)))),
        'optional': !![]
    }
});
exports[_0x217a42(0xb3)] = classMethodOrDeclareMethodCommon, (0x0, _utils['default'])('ClassMethod', {
    'aliases': [
        _0x217a42(0x115),
        'Scopable',
        _0x217a42(0xee),
        _0x217a42(0x112),
        _0x217a42(0x121)
    ],
    'builder': [
        _0x217a42(0x163),
        _0x217a42(0x146),
        _0x217a42(0x10d),
        _0x217a42(0xd9),
        _0x217a42(0x143),
        _0x217a42(0x1a3),
        'generator',
        _0x217a42(0x10f)
    ],
    'visitor': [
        _0x217a42(0x146),
        _0x217a42(0x10d),
        'body',
        _0x217a42(0x119),
        _0x217a42(0x110),
        _0x217a42(0xe2)
    ],
    'fields': Object['assign']({}, classMethodOrDeclareMethodCommon, functionTypeAnnotationCommon, { 'body': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0x111)) } })
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xed), {
    'visitor': [
        _0x217a42(0x1a4),
        _0x217a42(0x118),
        _0x217a42(0x119)
    ],
    'builder': [_0x217a42(0x1a4)],
    'aliases': [
        _0x217a42(0xcb),
        'PatternLike',
        'LVal'
    ],
    'fields': Object[_0x217a42(0xe5)]({}, patternLikeCommon, { 'properties': { 'validate': (0x0, _utils['chain'])((0x0, _utils['assertValueType'])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])('RestElement', 'ObjectProperty'))) } })
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0xc4), {
    'visitor': ['argument'],
    'aliases': ['UnaryLike'],
    'deprecatedAlias': 'SpreadProperty',
    'fields': { 'argument': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) } }
}), (0x0, _utils['default'])('Super', { 'aliases': [_0x217a42(0xc3)] }), (0x0, _utils['default'])('TaggedTemplateExpression', {
    'visitor': [
        _0x217a42(0x1a5),
        _0x217a42(0x1a6)
    ],
    'aliases': [_0x217a42(0xc3)],
    'fields': {
        'tag': { 'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xc3)) },
        'quasi': { 'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0x1a7)) },
        'typeParameters': {
            'validate': (0x0, _utils['assertNodeType'])(_0x217a42(0xe8), _0x217a42(0xe9)),
            'optional': !![]
        }
    }
}), (0x0, _utils['default'])(_0x217a42(0x1a8), {
    'builder': [
        _0x217a42(0xd6),
        'tail'
    ],
    'fields': {
        'value': {
            'validate': (0x0, _utils[_0x217a42(0x1a9)])({
                'raw': { 'validate': (0x0, _utils['assertValueType'])('string') },
                'cooked': {
                    'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xd7)),
                    'optional': !![]
                }
            })
        },
        'tail': { 'default': ![] }
    }
}), (0x0, _utils[_0x217a42(0xbe)])('TemplateLiteral', {
    'visitor': [
        'quasis',
        _0x217a42(0x150)
    ],
    'aliases': [
        'Expression',
        _0x217a42(0x130)
    ],
    'fields': {
        'quasis': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xc2)), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])('TemplateElement'))) },
        'expressions': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])('array'), (0x0, _utils[_0x217a42(0xdb)])((0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3), _0x217a42(0x1aa))), function (_0x212c61, _0x3e3905, _0x469f28) {
                const _0x407ddf = _0x217a42;
                if (_0x212c61[_0x407ddf(0x1ab)][_0x407ddf(0x14e)] !== _0x469f28[_0x407ddf(0x14e)] + 0x1)
                    throw new TypeError('Number\x20of\x20' + _0x212c61[_0x407ddf(0x16a)] + _0x407ddf(0x1ac) + (_0x469f28['length'] + 0x1) + '\x20quasis\x20but\x20got\x20' + _0x212c61[_0x407ddf(0x1ab)][_0x407ddf(0x14e)]);
            })
        }
    }
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x1ad), {
    'builder': [
        _0x217a42(0x14c),
        _0x217a42(0x1ae)
    ],
    'visitor': ['argument'],
    'aliases': [
        _0x217a42(0xc3),
        _0x217a42(0xf2)
    ],
    'fields': {
        'delegate': {
            'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)), Object[_0x217a42(0xe5)](function (_0x4d0173, _0x1b4ec3, _0x4792f2) {
                const _0x5b0d00 = _0x217a42;
                if (!process[_0x5b0d00(0xc5)][_0x5b0d00(0xc6)])
                    return;
                if (_0x4792f2 && !_0x4d0173['argument'])
                    throw new TypeError(_0x5b0d00(0x1af));
            }, { 'type': _0x217a42(0x10b) })),
            'default': ![]
        },
        'argument': {
            'optional': !![],
            'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression')
        }
    }
}), (0x0, _utils['default'])('AwaitExpression', {
    'builder': ['argument'],
    'visitor': [_0x217a42(0x14c)],
    'aliases': [
        'Expression',
        _0x217a42(0xf2)
    ],
    'fields': { 'argument': { 'validate': (0x0, _utils[_0x217a42(0xcc)])('Expression') } }
}), (0x0, _utils['default'])(_0x217a42(0x1b0), { 'aliases': ['Expression'] }), (0x0, _utils[_0x217a42(0xbe)])('BigIntLiteral', {
    'builder': [_0x217a42(0xd6)],
    'fields': { 'value': { 'validate': (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0xd7)) } },
    'aliases': [
        _0x217a42(0xc3),
        _0x217a42(0x12b),
        _0x217a42(0x130),
        'Immutable'
    ]
}), (0x0, _utils[_0x217a42(0xbe)])(_0x217a42(0x18e), {
    'visitor': [_0x217a42(0x190)],
    'aliases': [_0x217a42(0x191)],
    'fields': { 'exported': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xce)) } }
}), (0x0, _utils['default'])(_0x217a42(0x11f), {
    'builder': [
        _0x217a42(0x138),
        _0x217a42(0x11d),
        _0x217a42(0x143),
        _0x217a42(0x139)
    ],
    'visitor': [
        _0x217a42(0x138),
        _0x217a42(0x11d)
    ],
    'aliases': [_0x217a42(0xc3)],
    'fields': {
        'object': { 'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xc3)) },
        'property': {
            'validate': function () {
                const _0x286b14 = _0x217a42, _0x44da80 = (0x0, _utils[_0x286b14(0xcc)])(_0x286b14(0xce)), _0x5dd18a = (0x0, _utils[_0x286b14(0xcc)])(_0x286b14(0xc3)), _0x179d67 = function (_0xa4eef4, _0x2f4b04, _0x58cb11) {
                        const _0x3e80e4 = _0xa4eef4['computed'] ? _0x5dd18a : _0x44da80;
                        _0x3e80e4(_0xa4eef4, _0x2f4b04, _0x58cb11);
                    };
                return _0x179d67[_0x286b14(0xd4)] = [
                    _0x286b14(0xc3),
                    _0x286b14(0xce)
                ], _0x179d67;
            }()
        },
        'computed': { 'default': ![] },
        'optional': { 'validate': !process[_0x217a42(0xc5)][_0x217a42(0xc6)] ? (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)) : (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils['assertValueType'])(_0x217a42(0x10b)), (0x0, _utils['assertOptionalChainStart'])()) }
    }
}), (0x0, _utils['default'])(_0x217a42(0x1b1), {
    'visitor': [
        'callee',
        'arguments',
        _0x217a42(0xe2),
        'typeArguments'
    ],
    'builder': [
        'callee',
        _0x217a42(0xe4),
        _0x217a42(0x139)
    ],
    'aliases': ['Expression'],
    'fields': {
        'callee': { 'validate': (0x0, _utils['assertNodeType'])('Expression') },
        'arguments': { 'validate': (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])('array'), (0x0, _utils['assertEach'])((0x0, _utils[_0x217a42(0xcc)])('Expression', 'SpreadElement', _0x217a42(0xe6), _0x217a42(0xe7)))) },
        'optional': { 'validate': !process[_0x217a42(0xc5)][_0x217a42(0xc6)] ? (0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)) : (0x0, _utils[_0x217a42(0xc0)])((0x0, _utils[_0x217a42(0xc1)])(_0x217a42(0x10b)), (0x0, _utils['assertOptionalChainStart'])()) },
        'typeArguments': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])(_0x217a42(0xe8)),
            'optional': !![]
        },
        'typeParameters': {
            'validate': (0x0, _utils[_0x217a42(0xcc)])('TSTypeParameterInstantiation'),
            'optional': !![]
        }
    }
});
