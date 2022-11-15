Object['defineProperty'](exports, _0x217a42(178), { 'value': !![] }), exports[_0x217a42(179)] = exports[_0x217a42(180)] = exports[_0x217a42(181)] = exports[_0x217a42(182)] = exports[_0x217a42(183)] = exports[_0x217a42(184)] = void 0;
var _is = require(_0x217a42(185)), _isValidIdentifier = require(_0x217a42(186)), _helperValidatorIdentifier = require(_0x217a42(187)), _constants = require(_0x217a42(188)), _utils = require(_0x217a42(189));
(0, _utils[_0x217a42(190)])(_0x217a42(191), {
    'fields': {
        'elements': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils['assertEach'])((0, _utils['assertNodeOrValueType'])('null', _0x217a42(195), _0x217a42(196)))),
            'default': !process[_0x217a42(197)][_0x217a42(198)] ? [] : undefined
        }
    },
    'visitor': [_0x217a42(199)],
    'aliases': ['Expression']
}), (0, _utils[_0x217a42(190)])(_0x217a42(200), {
    'fields': {
        'operator': {
            'validate': function () {
                const _0x5c4904 = _0x217a42;
                if (!process[_0x5c4904(197)]['BABEL_TYPES_8_BREAKING'])
                    return (0, _utils[_0x5c4904(193)])('string');
                const _0x4a03e2 = (0, _utils[_0x5c4904(201)])(..._constants[_0x5c4904(202)]), _0x4c5d1a = (0, _utils[_0x5c4904(201)])('=');
                return function (_0x4d9fa2, _0x14190b, _0x4c6e47) {
                    const _0x3ade05 = _0x5c4904, _0x3465c1 = (0, _is[_0x3ade05(190)])(_0x3ade05(203), _0x4d9fa2['left']) ? _0x4c5d1a : _0x4a03e2;
                    _0x3465c1(_0x4d9fa2, _0x14190b, _0x4c6e47);
                };
            }()
        },
        'left': { 'validate': !process[_0x217a42(197)][_0x217a42(198)] ? (0, _utils[_0x217a42(204)])(_0x217a42(205)) : (0, _utils[_0x217a42(204)])(_0x217a42(206), 'MemberExpression', 'ArrayPattern', 'ObjectPattern') },
        'right': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) }
    },
    'builder': [
        _0x217a42(207),
        _0x217a42(208),
        _0x217a42(209)
    ],
    'visitor': [
        'left',
        _0x217a42(209)
    ],
    'aliases': [_0x217a42(195)]
}), (0, _utils['default'])(_0x217a42(210), {
    'builder': [
        _0x217a42(207),
        _0x217a42(208),
        _0x217a42(209)
    ],
    'fields': {
        'operator': { 'validate': (0, _utils[_0x217a42(201)])(..._constants['BINARY_OPERATORS']) },
        'left': {
            'validate': function () {
                const _0x135c11 = _0x217a42, _0x5b4f96 = (0, _utils[_0x135c11(204)])('Expression'), _0x5a9b28 = (0, _utils['assertNodeType'])(_0x135c11(195), _0x135c11(211)), _0x4fd32f = function (_0x2c3775, _0x1ad11e, _0x218a9d) {
                        const _0x386788 = _0x135c11, _0x31e5d9 = _0x2c3775[_0x386788(207)] === 'in' ? _0x5a9b28 : _0x5b4f96;
                        _0x31e5d9(_0x2c3775, _0x1ad11e, _0x218a9d);
                    };
                return _0x4fd32f[_0x135c11(212)] = [
                    'Expression',
                    'PrivateName'
                ], _0x4fd32f;
            }()
        },
        'right': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) }
    },
    'visitor': [
        _0x217a42(208),
        'right'
    ],
    'aliases': [
        'Binary',
        _0x217a42(195)
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(213), {
    'builder': [_0x217a42(214)],
    'fields': { 'value': { 'validate': (0, _utils[_0x217a42(193)])(_0x217a42(215)) } }
}), (0, _utils[_0x217a42(190)])('Directive', {
    'visitor': ['value'],
    'fields': { 'value': { 'validate': (0, _utils['assertNodeType'])(_0x217a42(216)) } }
}), (0, _utils[_0x217a42(190)])('DirectiveLiteral', {
    'builder': ['value'],
    'fields': { 'value': { 'validate': (0, _utils[_0x217a42(193)])('string') } }
}), (0, _utils[_0x217a42(190)])('BlockStatement', {
    'builder': [
        _0x217a42(217),
        _0x217a42(218)
    ],
    'visitor': [
        _0x217a42(218),
        'body'
    ],
    'fields': {
        'directives': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])('array'), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(220)))),
            'default': []
        },
        'body': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])('array'), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(221)))) }
    },
    'aliases': [
        _0x217a42(222),
        'BlockParent',
        'Block',
        _0x217a42(221)
    ]
}), (0, _utils['default'])('BreakStatement', {
    'visitor': ['label'],
    'fields': {
        'label': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(206)),
            'optional': !![]
        }
    },
    'aliases': [
        _0x217a42(221),
        'Terminatorless',
        _0x217a42(223)
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(224), {
    'visitor': [
        _0x217a42(225),
        'arguments',
        _0x217a42(226),
        _0x217a42(227)
    ],
    'builder': [
        _0x217a42(225),
        _0x217a42(228)
    ],
    'aliases': [_0x217a42(195)],
    'fields': Object[_0x217a42(229)]({
        'callee': { 'validate': (0, _utils[_0x217a42(204)])('Expression', 'V8IntrinsicIdentifier') },
        'arguments': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])('Expression', _0x217a42(196), _0x217a42(230), _0x217a42(231)))) }
    }, !process['env'][_0x217a42(198)] ? {
        'optional': {
            'validate': (0, _utils['assertOneOf'])(!![], ![]),
            'optional': !![]
        }
    } : {}, {
        'typeArguments': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(232)),
            'optional': !![]
        },
        'typeParameters': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(233)),
            'optional': !![]
        }
    })
}), (0, _utils[_0x217a42(190)])(_0x217a42(234), {
    'visitor': [
        _0x217a42(235),
        _0x217a42(217)
    ],
    'fields': {
        'param': {
            'validate': (0, _utils[_0x217a42(204)])('Identifier', _0x217a42(236), _0x217a42(237)),
            'optional': !![]
        },
        'body': { 'validate': (0, _utils['assertNodeType'])('BlockStatement') }
    },
    'aliases': [
        'Scopable',
        _0x217a42(238)
    ]
}), (0, _utils[_0x217a42(190)])('ConditionalExpression', {
    'visitor': [
        'test',
        _0x217a42(239),
        'alternate'
    ],
    'fields': {
        'test': { 'validate': (0, _utils[_0x217a42(204)])('Expression') },
        'consequent': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) },
        'alternate': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) }
    },
    'aliases': [
        'Expression',
        _0x217a42(240)
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(241), {
    'visitor': ['label'],
    'fields': {
        'label': {
            'validate': (0, _utils['assertNodeType'])(_0x217a42(206)),
            'optional': !![]
        }
    },
    'aliases': [
        _0x217a42(221),
        _0x217a42(242),
        _0x217a42(223)
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(243), { 'aliases': ['Statement'] }), (0, _utils['default'])(_0x217a42(244), {
    'visitor': [
        _0x217a42(245),
        _0x217a42(217)
    ],
    'fields': {
        'test': { 'validate': (0, _utils['assertNodeType'])(_0x217a42(195)) },
        'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(221)) }
    },
    'aliases': [
        _0x217a42(221),
        _0x217a42(238),
        _0x217a42(246),
        _0x217a42(247),
        _0x217a42(222)
    ]
}), (0, _utils[_0x217a42(190)])('EmptyStatement', { 'aliases': [_0x217a42(221)] }), (0, _utils[_0x217a42(190)])(_0x217a42(248), {
    'visitor': ['expression'],
    'fields': { 'expression': { 'validate': (0, _utils[_0x217a42(204)])('Expression') } },
    'aliases': [
        _0x217a42(221),
        'ExpressionWrapper'
    ]
}), (0, _utils['default'])(_0x217a42(249), {
    'builder': [
        _0x217a42(250),
        _0x217a42(251),
        _0x217a42(252)
    ],
    'visitor': ['program'],
    'fields': {
        'program': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(253)) },
        'comments': {
            'validate': !process[_0x217a42(197)]['BABEL_TYPES_8_BREAKING'] ? Object[_0x217a42(229)](() => {
            }, {
                'each': {
                    'oneOfNodeTypes': [
                        'CommentBlock',
                        _0x217a42(254)
                    ]
                }
            }) : (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])('CommentBlock', _0x217a42(254))),
            'optional': !![]
        },
        'tokens': {
            'validate': (0, _utils[_0x217a42(219)])(Object['assign'](() => {
            }, { 'type': _0x217a42(255) })),
            'optional': !![]
        }
    }
}), (0, _utils['default'])(_0x217a42(256), {
    'visitor': [
        _0x217a42(208),
        _0x217a42(209),
        _0x217a42(217)
    ],
    'aliases': [
        _0x217a42(222),
        _0x217a42(221),
        _0x217a42(257),
        _0x217a42(238),
        _0x217a42(246),
        'ForXStatement'
    ],
    'fields': {
        'left': { 'validate': !process[_0x217a42(197)][_0x217a42(198)] ? (0, _utils['assertNodeType'])(_0x217a42(258), 'LVal') : (0, _utils[_0x217a42(204)])(_0x217a42(258), _0x217a42(206), 'MemberExpression', _0x217a42(236), _0x217a42(237)) },
        'right': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) },
        'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(221)) }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(259), {
    'visitor': [
        _0x217a42(260),
        _0x217a42(245),
        _0x217a42(261),
        _0x217a42(217)
    ],
    'aliases': [
        _0x217a42(222),
        _0x217a42(221),
        'For',
        _0x217a42(238),
        _0x217a42(246)
    ],
    'fields': {
        'init': {
            'validate': (0, _utils['assertNodeType'])('VariableDeclaration', _0x217a42(195)),
            'optional': !![]
        },
        'test': {
            'validate': (0, _utils[_0x217a42(204)])('Expression'),
            'optional': !![]
        },
        'update': {
            'validate': (0, _utils['assertNodeType'])(_0x217a42(195)),
            'optional': !![]
        },
        'body': { 'validate': (0, _utils[_0x217a42(204)])('Statement') }
    }
});
const functionCommon = {
    'params': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils['assertValueType'])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(206), 'Pattern', 'RestElement'))) },
    'generator': { 'default': ![] },
    'async': { 'default': ![] }
};
exports[_0x217a42(184)] = functionCommon;
const functionTypeAnnotationCommon = {
    'returnType': {
        'validate': (0, _utils[_0x217a42(204)])(_0x217a42(262), _0x217a42(263), _0x217a42(264)),
        'optional': !![]
    },
    'typeParameters': {
        'validate': (0, _utils[_0x217a42(204)])(_0x217a42(265), _0x217a42(266), 'Noop'),
        'optional': !![]
    }
};
exports[_0x217a42(183)] = functionTypeAnnotationCommon;
const functionDeclarationCommon = Object[_0x217a42(229)]({}, functionCommon, {
    'declare': {
        'validate': (0, _utils['assertValueType'])(_0x217a42(267)),
        'optional': !![]
    },
    'id': {
        'validate': (0, _utils['assertNodeType'])(_0x217a42(206)),
        'optional': !![]
    }
});
exports[_0x217a42(182)] = functionDeclarationCommon, (0, _utils[_0x217a42(190)])(_0x217a42(268), {
    'builder': [
        'id',
        _0x217a42(269),
        _0x217a42(217),
        _0x217a42(270),
        _0x217a42(271)
    ],
    'visitor': [
        'id',
        _0x217a42(269),
        _0x217a42(217),
        _0x217a42(272),
        _0x217a42(226)
    ],
    'fields': Object[_0x217a42(229)]({}, functionDeclarationCommon, functionTypeAnnotationCommon, { 'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(273)) } }),
    'aliases': [
        _0x217a42(222),
        'Function',
        _0x217a42(238),
        _0x217a42(274),
        _0x217a42(221),
        'Pureish',
        _0x217a42(275)
    ],
    'validate': function () {
        const _0x1320ea = _0x217a42;
        if (!process[_0x1320ea(197)]['BABEL_TYPES_8_BREAKING'])
            return () => {
            };
        const _0x510a63 = (0, _utils[_0x1320ea(204)])('Identifier');
        return function (_0x138648, _0x11faf4, _0x3e18c4) {
            const _0x1f0c9a = _0x1320ea;
            !(0, _is['default'])(_0x1f0c9a(276), _0x138648) && _0x510a63(_0x3e18c4, 'id', _0x3e18c4['id']);
        };
    }()
}), (0, _utils['default'])('FunctionExpression', {
    'inherits': _0x217a42(268),
    'aliases': [
        _0x217a42(222),
        _0x217a42(277),
        'BlockParent',
        _0x217a42(274),
        _0x217a42(195),
        'Pureish'
    ],
    'fields': Object[_0x217a42(229)]({}, functionCommon, functionTypeAnnotationCommon, {
        'id': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(206)),
            'optional': !![]
        },
        'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(273)) }
    })
});
const patternLikeCommon = {
    'typeAnnotation': {
        'validate': (0, _utils[_0x217a42(204)])(_0x217a42(262), _0x217a42(263), _0x217a42(264)),
        'optional': !![]
    },
    'decorators': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(278)))) }
};
exports[_0x217a42(181)] = patternLikeCommon, (0, _utils[_0x217a42(190)])('Identifier', {
    'builder': [_0x217a42(279)],
    'visitor': [
        _0x217a42(280),
        _0x217a42(281)
    ],
    'aliases': [
        _0x217a42(195),
        _0x217a42(282),
        _0x217a42(205),
        _0x217a42(283)
    ],
    'fields': Object[_0x217a42(229)]({}, patternLikeCommon, {
        'name': {
            'validate': (0, _utils['chain'])((0, _utils[_0x217a42(193)])(_0x217a42(215)), Object[_0x217a42(229)](function (_0x458e7f, _0x3efa55, _0x3cb5d1) {
                const _0x2cc539 = _0x217a42;
                if (!process[_0x2cc539(197)][_0x2cc539(198)])
                    return;
                if (!(0, _isValidIdentifier[_0x2cc539(190)])(_0x3cb5d1, ![]))
                    throw new TypeError('"' + _0x3cb5d1 + '" is not a valid identifier name');
            }, { 'type': _0x217a42(215) }))
        },
        'optional': {
            'validate': (0, _utils[_0x217a42(193)])(_0x217a42(267)),
            'optional': !![]
        }
    }),
    'validate'(_0x3d74b0, _0x3faccc, _0x12358f) {
        const _0x1d3ea6 = _0x217a42;
        if (!process['env'][_0x1d3ea6(198)])
            return;
        const _0x365de7 = /\.(\w+)$/[_0x1d3ea6(284)](_0x3faccc);
        if (!_0x365de7)
            return;
        const [, _0x2fb710] = _0x365de7, _0x27de02 = { 'computed': ![] };
        if (_0x2fb710 === _0x1d3ea6(285)) {
            if ((0, _is[_0x1d3ea6(190)])(_0x1d3ea6(286), _0x3d74b0, _0x27de02))
                return;
            if ((0, _is[_0x1d3ea6(190)])(_0x1d3ea6(287), _0x3d74b0, _0x27de02))
                return;
        } else {
            if (_0x2fb710 === 'key') {
                if ((0, _is['default'])(_0x1d3ea6(288), _0x3d74b0, _0x27de02))
                    return;
                if ((0, _is['default'])(_0x1d3ea6(289), _0x3d74b0, _0x27de02))
                    return;
            } else {
                if (_0x2fb710 === 'exported') {
                    if ((0, _is[_0x1d3ea6(190)])('ExportSpecifier', _0x3d74b0))
                        return;
                } else {
                    if (_0x2fb710 === _0x1d3ea6(290)) {
                        if ((0, _is['default'])(_0x1d3ea6(291), _0x3d74b0, { 'imported': _0x12358f }))
                            return;
                    } else {
                        if (_0x2fb710 === 'meta') {
                            if ((0, _is['default'])('MetaProperty', _0x3d74b0, { 'meta': _0x12358f }))
                                return;
                        }
                    }
                }
            }
        }
        if (((0, _helperValidatorIdentifier[_0x1d3ea6(292)])(_0x12358f[_0x1d3ea6(279)]) || (0, _helperValidatorIdentifier['isReservedWord'])(_0x12358f[_0x1d3ea6(279)], ![])) && _0x12358f[_0x1d3ea6(279)] !== _0x1d3ea6(293))
            throw new TypeError('"' + _0x12358f[_0x1d3ea6(279)] + '" is not a valid identifier');
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(294), {
    'visitor': [
        _0x217a42(245),
        _0x217a42(239),
        _0x217a42(295)
    ],
    'aliases': [
        _0x217a42(221),
        _0x217a42(240)
    ],
    'fields': {
        'test': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) },
        'consequent': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(221)) },
        'alternate': {
            'optional': !![],
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(221))
        }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(296), {
    'visitor': [
        _0x217a42(297),
        'body'
    ],
    'aliases': [_0x217a42(221)],
    'fields': {
        'label': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(206)) },
        'body': { 'validate': (0, _utils[_0x217a42(204)])('Statement') }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(298), {
    'builder': [_0x217a42(214)],
    'fields': { 'value': { 'validate': (0, _utils['assertValueType'])(_0x217a42(215)) } },
    'aliases': [
        'Expression',
        _0x217a42(299),
        'Literal',
        _0x217a42(300)
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(301), {
    'builder': [_0x217a42(214)],
    'deprecatedAlias': _0x217a42(302),
    'fields': { 'value': { 'validate': (0, _utils['assertValueType'])(_0x217a42(303)) } },
    'aliases': [
        _0x217a42(195),
        _0x217a42(299),
        _0x217a42(304),
        'Immutable'
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(305), {
    'aliases': [
        _0x217a42(195),
        _0x217a42(299),
        'Literal',
        _0x217a42(300)
    ]
}), (0, _utils['default'])(_0x217a42(306), {
    'builder': [_0x217a42(214)],
    'fields': { 'value': { 'validate': (0, _utils[_0x217a42(193)])(_0x217a42(267)) } },
    'aliases': [
        _0x217a42(195),
        _0x217a42(299),
        'Literal',
        _0x217a42(300)
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(307), {
    'builder': [
        'pattern',
        'flags'
    ],
    'deprecatedAlias': _0x217a42(308),
    'aliases': [
        _0x217a42(195),
        _0x217a42(299),
        _0x217a42(304)
    ],
    'fields': {
        'pattern': { 'validate': (0, _utils[_0x217a42(193)])(_0x217a42(215)) },
        'flags': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(215)), Object[_0x217a42(229)](function (_0x20e891, _0x5ba576, _0x7b2306) {
                const _0x8b0483 = _0x217a42;
                if (!process[_0x8b0483(197)][_0x8b0483(198)])
                    return;
                const _0x1cafc9 = /[^gimsuy]/[_0x8b0483(284)](_0x7b2306);
                if (_0x1cafc9)
                    throw new TypeError('"' + _0x1cafc9[0] + _0x8b0483(309));
            }, { 'type': _0x217a42(215) })),
            'default': ''
        }
    }
}), (0, _utils['default'])(_0x217a42(310), {
    'builder': [
        _0x217a42(207),
        _0x217a42(208),
        _0x217a42(209)
    ],
    'visitor': [
        _0x217a42(208),
        _0x217a42(209)
    ],
    'aliases': [
        'Binary',
        _0x217a42(195)
    ],
    'fields': {
        'operator': { 'validate': (0, _utils[_0x217a42(201)])(..._constants[_0x217a42(311)]) },
        'left': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) },
        'right': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) }
    }
}), (0, _utils[_0x217a42(190)])('MemberExpression', {
    'builder': [
        _0x217a42(312),
        'property',
        'computed',
        ...!process[_0x217a42(197)][_0x217a42(198)] ? [_0x217a42(313)] : []
    ],
    'visitor': [
        _0x217a42(312),
        'property'
    ],
    'aliases': [
        _0x217a42(195),
        _0x217a42(205)
    ],
    'fields': Object[_0x217a42(229)]({
        'object': { 'validate': (0, _utils[_0x217a42(204)])('Expression') },
        'property': {
            'validate': function () {
                const _0x4c5498 = _0x217a42, _0xff4d7e = (0, _utils[_0x4c5498(204)])(_0x4c5498(206), _0x4c5498(211)), _0x131316 = (0, _utils['assertNodeType'])(_0x4c5498(195)), _0x54732e = function (_0x2771ff, _0x4b7dc4, _0x30cd7d) {
                        const _0x5ab24a = _0x2771ff['computed'] ? _0x131316 : _0xff4d7e;
                        _0x5ab24a(_0x2771ff, _0x4b7dc4, _0x30cd7d);
                    };
                return _0x54732e[_0x4c5498(212)] = [
                    'Expression',
                    _0x4c5498(206),
                    _0x4c5498(211)
                ], _0x54732e;
            }()
        },
        'computed': { 'default': ![] }
    }, !process[_0x217a42(197)]['BABEL_TYPES_8_BREAKING'] ? {
        'optional': {
            'validate': (0, _utils[_0x217a42(201)])(!![], ![]),
            'optional': !![]
        }
    } : {})
}), (0, _utils[_0x217a42(190)])(_0x217a42(314), { 'inherits': _0x217a42(224) }), (0, _utils[_0x217a42(190)])('Program', {
    'visitor': [
        'directives',
        _0x217a42(217)
    ],
    'builder': [
        _0x217a42(217),
        _0x217a42(218),
        _0x217a42(315),
        _0x217a42(316)
    ],
    'fields': {
        'sourceFile': { 'validate': (0, _utils[_0x217a42(193)])(_0x217a42(215)) },
        'sourceType': {
            'validate': (0, _utils[_0x217a42(201)])(_0x217a42(317), _0x217a42(318)),
            'default': _0x217a42(317)
        },
        'interpreter': {
            'validate': (0, _utils[_0x217a42(204)])('InterpreterDirective'),
            'default': null,
            'optional': !![]
        },
        'directives': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])('Directive'))),
            'default': []
        },
        'body': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils['assertEach'])((0, _utils[_0x217a42(204)])(_0x217a42(221)))) }
    },
    'aliases': [
        _0x217a42(222),
        'BlockParent',
        _0x217a42(319)
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(320), {
    'visitor': ['properties'],
    'aliases': [_0x217a42(195)],
    'fields': { 'properties': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils['assertValueType'])(_0x217a42(194)), (0, _utils['assertEach'])((0, _utils[_0x217a42(204)])(_0x217a42(321), _0x217a42(322), 'SpreadElement'))) } }
}), (0, _utils[_0x217a42(190)])(_0x217a42(321), {
    'builder': [
        'kind',
        'key',
        _0x217a42(269),
        _0x217a42(217),
        _0x217a42(323),
        _0x217a42(270),
        'async'
    ],
    'fields': Object[_0x217a42(229)]({}, functionCommon, functionTypeAnnotationCommon, {
        'kind': Object[_0x217a42(229)]({ 'validate': (0, _utils[_0x217a42(201)])('method', _0x217a42(324), _0x217a42(325)) }, !process[_0x217a42(197)][_0x217a42(198)] ? { 'default': 'method' } : {}),
        'computed': { 'default': ![] },
        'key': {
            'validate': function () {
                const _0x2ebca9 = _0x217a42, _0x2c0254 = (0, _utils[_0x2ebca9(204)])(_0x2ebca9(206), _0x2ebca9(298), _0x2ebca9(301)), _0x387856 = (0, _utils[_0x2ebca9(204)])(_0x2ebca9(195)), _0x2e4c61 = function (_0x115e3d, _0x11768c, _0x214653) {
                        const _0x4f46d3 = _0x115e3d['computed'] ? _0x387856 : _0x2c0254;
                        _0x4f46d3(_0x115e3d, _0x11768c, _0x214653);
                    };
                return _0x2e4c61['oneOfNodeTypes'] = [
                    _0x2ebca9(195),
                    _0x2ebca9(206),
                    _0x2ebca9(298),
                    'NumericLiteral'
                ], _0x2e4c61;
            }()
        },
        'decorators': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])('Decorator'))),
            'optional': !![]
        },
        'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(273)) }
    }),
    'visitor': [
        _0x217a42(326),
        _0x217a42(269),
        _0x217a42(217),
        'decorators',
        _0x217a42(272),
        _0x217a42(226)
    ],
    'aliases': [
        _0x217a42(327),
        _0x217a42(277),
        _0x217a42(222),
        _0x217a42(238),
        'FunctionParent',
        _0x217a42(289),
        _0x217a42(328)
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(322), {
    'builder': [
        'key',
        _0x217a42(214),
        _0x217a42(323),
        _0x217a42(329),
        ...!process['env'][_0x217a42(198)] ? ['decorators'] : []
    ],
    'fields': {
        'computed': { 'default': ![] },
        'key': {
            'validate': function () {
                const _0x4f241f = _0x217a42, _0x5b106c = (0, _utils[_0x4f241f(204)])(_0x4f241f(206), _0x4f241f(298), _0x4f241f(301)), _0x40739b = (0, _utils[_0x4f241f(204)])('Expression'), _0x23ec58 = function (_0x103ffb, _0x8f7102, _0x5898bf) {
                        const _0x4dead7 = _0x4f241f, _0x172dc1 = _0x103ffb[_0x4dead7(323)] ? _0x40739b : _0x5b106c;
                        _0x172dc1(_0x103ffb, _0x8f7102, _0x5898bf);
                    };
                return _0x23ec58[_0x4f241f(212)] = [
                    _0x4f241f(195),
                    _0x4f241f(206),
                    'StringLiteral',
                    _0x4f241f(301)
                ], _0x23ec58;
            }()
        },
        'value': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195), _0x217a42(282)) },
        'shorthand': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils['assertValueType'])(_0x217a42(267)), Object[_0x217a42(229)](function (_0xeef2a9, _0x32b054, _0x103e26) {
                const _0x5a2d78 = _0x217a42;
                if (!process['env']['BABEL_TYPES_8_BREAKING'])
                    return;
                if (_0x103e26 && _0xeef2a9['computed'])
                    throw new TypeError(_0x5a2d78(330));
            }, { 'type': _0x217a42(267) }), function (_0x245448, _0xa8f5ec, _0x43b88f) {
                const _0x2e0280 = _0x217a42;
                if (!process['env']['BABEL_TYPES_8_BREAKING'])
                    return;
                if (_0x43b88f && !(0, _is[_0x2e0280(190)])('Identifier', _0x245448['key']))
                    throw new TypeError(_0x2e0280(331));
            }),
            'default': ![]
        },
        'decorators': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils['assertEach'])((0, _utils[_0x217a42(204)])(_0x217a42(278)))),
            'optional': !![]
        }
    },
    'visitor': [
        'key',
        _0x217a42(214),
        _0x217a42(281)
    ],
    'aliases': [
        _0x217a42(327),
        _0x217a42(288),
        _0x217a42(328)
    ],
    'validate': function () {
        const _0x565505 = _0x217a42, _0x1591e3 = (0, _utils[_0x565505(204)])('Identifier', _0x565505(203)), _0x823fc0 = (0, _utils[_0x565505(204)])('Expression');
        return function (_0x53403a, _0x1480fb, _0x475c72) {
            const _0x1f5d50 = _0x565505;
            if (!process[_0x1f5d50(197)][_0x1f5d50(198)])
                return;
            const _0x1291cf = (0, _is[_0x1f5d50(190)])(_0x1f5d50(237), _0x53403a) ? _0x1591e3 : _0x823fc0;
            _0x1291cf(_0x475c72, _0x1f5d50(214), _0x475c72[_0x1f5d50(214)]);
        };
    }()
}), (0, _utils[_0x217a42(190)])('RestElement', {
    'visitor': [
        _0x217a42(332),
        'typeAnnotation'
    ],
    'builder': [_0x217a42(332)],
    'aliases': [
        _0x217a42(205),
        _0x217a42(282)
    ],
    'deprecatedAlias': 'RestProperty',
    'fields': Object[_0x217a42(229)]({}, patternLikeCommon, { 'argument': { 'validate': !process[_0x217a42(197)][_0x217a42(198)] ? (0, _utils['assertNodeType'])(_0x217a42(205)) : (0, _utils[_0x217a42(204)])(_0x217a42(206), _0x217a42(203), _0x217a42(286)) } }),
    'validate'(_0x8d8039, _0x48515c) {
        const _0x371860 = _0x217a42;
        if (!process[_0x371860(197)][_0x371860(198)])
            return;
        const _0x5b24b5 = /(\w+)\[(\d+)\]/[_0x371860(284)](_0x48515c);
        if (!_0x5b24b5)
            throw new Error(_0x371860(333));
        const [, _0x465de1, _0x375857] = _0x5b24b5;
        if (_0x8d8039[_0x465de1][_0x371860(334)] > _0x375857 + 1)
            throw new TypeError('RestElement must be last element of ' + _0x465de1);
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(335), {
    'visitor': [_0x217a42(332)],
    'aliases': [
        'Statement',
        _0x217a42(242),
        _0x217a42(223)
    ],
    'fields': {
        'argument': {
            'validate': (0, _utils[_0x217a42(204)])('Expression'),
            'optional': !![]
        }
    }
}), (0, _utils[_0x217a42(190)])('SequenceExpression', {
    'visitor': [_0x217a42(336)],
    'fields': { 'expressions': { 'validate': (0, _utils['chain'])((0, _utils[_0x217a42(193)])('array'), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(195)))) } },
    'aliases': ['Expression']
}), (0, _utils['default'])('ParenthesizedExpression', {
    'visitor': [_0x217a42(337)],
    'aliases': [
        _0x217a42(195),
        'ExpressionWrapper'
    ],
    'fields': { 'expression': { 'validate': (0, _utils['assertNodeType'])(_0x217a42(195)) } }
}), (0, _utils['default'])(_0x217a42(338), {
    'visitor': [
        _0x217a42(245),
        _0x217a42(239)
    ],
    'fields': {
        'test': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)),
            'optional': !![]
        },
        'consequent': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils['assertEach'])((0, _utils[_0x217a42(204)])('Statement'))) }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(339), {
    'visitor': [
        _0x217a42(340),
        _0x217a42(341)
    ],
    'aliases': [
        _0x217a42(221),
        'BlockParent',
        _0x217a42(222)
    ],
    'fields': {
        'discriminant': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) },
        'cases': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(338)))) }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(342), { 'aliases': [_0x217a42(195)] }), (0, _utils['default'])(_0x217a42(343), {
    'visitor': ['argument'],
    'aliases': [
        _0x217a42(221),
        'Terminatorless',
        _0x217a42(223)
    ],
    'fields': { 'argument': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) } }
}), (0, _utils[_0x217a42(190)])(_0x217a42(344), {
    'visitor': [
        _0x217a42(345),
        _0x217a42(346),
        _0x217a42(347)
    ],
    'aliases': [_0x217a42(221)],
    'fields': {
        'block': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(204)])('BlockStatement'), Object[_0x217a42(229)](function (_0x2d370f) {
                const _0x4cdfcb = _0x217a42;
                if (!process[_0x4cdfcb(197)][_0x4cdfcb(198)])
                    return;
                if (!_0x2d370f['handler'] && !_0x2d370f[_0x4cdfcb(347)])
                    throw new TypeError(_0x4cdfcb(348));
            }, { 'oneOfNodeTypes': [_0x217a42(273)] }))
        },
        'handler': {
            'optional': !![],
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(234))
        },
        'finalizer': {
            'optional': !![],
            'validate': (0, _utils['assertNodeType'])(_0x217a42(273))
        }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(349), {
    'builder': [
        _0x217a42(207),
        _0x217a42(332),
        _0x217a42(350)
    ],
    'fields': {
        'prefix': { 'default': !![] },
        'argument': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) },
        'operator': { 'validate': (0, _utils['assertOneOf'])(..._constants[_0x217a42(351)]) }
    },
    'visitor': ['argument'],
    'aliases': [
        _0x217a42(352),
        _0x217a42(195)
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(353), {
    'builder': [
        _0x217a42(207),
        _0x217a42(332),
        'prefix'
    ],
    'fields': {
        'prefix': { 'default': ![] },
        'argument': { 'validate': !process[_0x217a42(197)][_0x217a42(198)] ? (0, _utils['assertNodeType'])('Expression') : (0, _utils[_0x217a42(204)])(_0x217a42(206), _0x217a42(286)) },
        'operator': { 'validate': (0, _utils[_0x217a42(201)])(..._constants[_0x217a42(354)]) }
    },
    'visitor': ['argument'],
    'aliases': [_0x217a42(195)]
}), (0, _utils[_0x217a42(190)])('VariableDeclaration', {
    'builder': [
        _0x217a42(355),
        _0x217a42(356)
    ],
    'visitor': [_0x217a42(356)],
    'aliases': [
        _0x217a42(221),
        _0x217a42(275)
    ],
    'fields': {
        'declare': {
            'validate': (0, _utils['assertValueType'])(_0x217a42(267)),
            'optional': !![]
        },
        'kind': { 'validate': (0, _utils['assertOneOf'])('var', _0x217a42(357), _0x217a42(358)) },
        'declarations': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])('array'), (0, _utils[_0x217a42(219)])((0, _utils['assertNodeType'])(_0x217a42(359)))) }
    },
    'validate'(_0x52f205, _0xfd4e9f, _0x5cd364) {
        const _0x33b3e7 = _0x217a42;
        if (!process[_0x33b3e7(197)][_0x33b3e7(198)])
            return;
        if (!(0, _is[_0x33b3e7(190)])(_0x33b3e7(360), _0x52f205, { 'left': _0x5cd364 }))
            return;
        if (_0x5cd364[_0x33b3e7(356)][_0x33b3e7(334)] !== 1)
            throw new TypeError(_0x33b3e7(361) + _0x52f205[_0x33b3e7(362)]);
    }
}), (0, _utils['default'])(_0x217a42(359), {
    'visitor': [
        'id',
        'init'
    ],
    'fields': {
        'id': {
            'validate': function () {
                const _0x3fdb16 = _0x217a42;
                if (!process[_0x3fdb16(197)][_0x3fdb16(198)])
                    return (0, _utils[_0x3fdb16(204)])(_0x3fdb16(205));
                const _0x5395c8 = (0, _utils['assertNodeType'])(_0x3fdb16(206), _0x3fdb16(236), _0x3fdb16(237)), _0x40ac55 = (0, _utils[_0x3fdb16(204)])(_0x3fdb16(206));
                return function (_0x42f264, _0xaa8607, _0x497c7d) {
                    const _0x32ed50 = _0x3fdb16, _0x35aafe = _0x42f264[_0x32ed50(260)] ? _0x5395c8 : _0x40ac55;
                    _0x35aafe(_0x42f264, _0xaa8607, _0x497c7d);
                };
            }()
        },
        'definite': {
            'optional': !![],
            'validate': (0, _utils[_0x217a42(193)])(_0x217a42(267))
        },
        'init': {
            'optional': !![],
            'validate': (0, _utils['assertNodeType'])(_0x217a42(195))
        }
    }
}), (0, _utils['default'])(_0x217a42(363), {
    'visitor': [
        _0x217a42(245),
        'body'
    ],
    'aliases': [
        _0x217a42(221),
        _0x217a42(238),
        _0x217a42(246),
        _0x217a42(247),
        _0x217a42(222)
    ],
    'fields': {
        'test': { 'validate': (0, _utils[_0x217a42(204)])('Expression') },
        'body': { 'validate': (0, _utils[_0x217a42(204)])('Statement') }
    }
}), (0, _utils['default'])(_0x217a42(364), {
    'visitor': [
        _0x217a42(312),
        _0x217a42(217)
    ],
    'aliases': [_0x217a42(221)],
    'fields': {
        'object': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) },
        'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(221)) }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(365), {
    'visitor': [
        'left',
        _0x217a42(209),
        'decorators'
    ],
    'builder': [
        _0x217a42(208),
        _0x217a42(209)
    ],
    'aliases': [
        _0x217a42(203),
        _0x217a42(282),
        _0x217a42(205)
    ],
    'fields': Object[_0x217a42(229)]({}, patternLikeCommon, {
        'left': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(206), _0x217a42(237), _0x217a42(236), _0x217a42(286)) },
        'right': { 'validate': (0, _utils[_0x217a42(204)])('Expression') },
        'decorators': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(278)))),
            'optional': !![]
        }
    })
}), (0, _utils['default'])(_0x217a42(236), {
    'visitor': [
        _0x217a42(199),
        'typeAnnotation'
    ],
    'builder': [_0x217a42(199)],
    'aliases': [
        _0x217a42(203),
        _0x217a42(282),
        _0x217a42(205)
    ],
    'fields': Object[_0x217a42(229)]({}, patternLikeCommon, {
        'elements': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils['assertNodeOrValueType'])(_0x217a42(366), _0x217a42(282)))) },
        'decorators': {
            'validate': (0, _utils['chain'])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils['assertNodeType'])(_0x217a42(278)))),
            'optional': !![]
        }
    })
}), (0, _utils['default'])(_0x217a42(367), {
    'builder': [
        _0x217a42(269),
        _0x217a42(217),
        'async'
    ],
    'visitor': [
        'params',
        _0x217a42(217),
        _0x217a42(272),
        _0x217a42(226)
    ],
    'aliases': [
        _0x217a42(222),
        _0x217a42(277),
        _0x217a42(238),
        'FunctionParent',
        _0x217a42(195),
        _0x217a42(299)
    ],
    'fields': Object[_0x217a42(229)]({}, functionCommon, functionTypeAnnotationCommon, {
        'expression': { 'validate': (0, _utils[_0x217a42(193)])(_0x217a42(267)) },
        'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(273), _0x217a42(195)) }
    })
}), (0, _utils[_0x217a42(190)])(_0x217a42(368), {
    'visitor': [_0x217a42(217)],
    'fields': { 'body': { 'validate': (0, _utils['chain'])((0, _utils['assertValueType'])(_0x217a42(194)), (0, _utils['assertEach'])((0, _utils['assertNodeType'])(_0x217a42(369), _0x217a42(370), _0x217a42(371), _0x217a42(372), _0x217a42(373), _0x217a42(374)))) } }
}), (0, _utils[_0x217a42(190)])('ClassExpression', {
    'builder': [
        'id',
        _0x217a42(375),
        _0x217a42(217),
        'decorators'
    ],
    'visitor': [
        'id',
        _0x217a42(217),
        _0x217a42(375),
        _0x217a42(376),
        _0x217a42(226),
        _0x217a42(377),
        _0x217a42(378),
        _0x217a42(281)
    ],
    'aliases': [
        'Scopable',
        'Class',
        _0x217a42(195)
    ],
    'fields': {
        'id': {
            'validate': (0, _utils['assertNodeType'])(_0x217a42(206)),
            'optional': !![]
        },
        'typeParameters': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(265), _0x217a42(266), 'Noop'),
            'optional': !![]
        },
        'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(368)) },
        'superClass': {
            'optional': !![],
            'validate': (0, _utils['assertNodeType'])('Expression')
        },
        'superTypeParameters': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(232), _0x217a42(233)),
            'optional': !![]
        },
        'implements': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(379), _0x217a42(380)))),
            'optional': !![]
        },
        'decorators': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])('array'), (0, _utils['assertEach'])((0, _utils[_0x217a42(204)])('Decorator'))),
            'optional': !![]
        },
        'mixins': {
            'validate': (0, _utils[_0x217a42(204)])('InterfaceExtends'),
            'optional': !![]
        }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(381), {
    'inherits': _0x217a42(382),
    'aliases': [
        'Scopable',
        _0x217a42(383),
        'Statement',
        _0x217a42(275)
    ],
    'fields': {
        'id': { 'validate': (0, _utils[_0x217a42(204)])('Identifier') },
        'typeParameters': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(265), _0x217a42(266), _0x217a42(264)),
            'optional': !![]
        },
        'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(368)) },
        'superClass': {
            'optional': !![],
            'validate': (0, _utils[_0x217a42(204)])('Expression')
        },
        'superTypeParameters': {
            'validate': (0, _utils[_0x217a42(204)])('TypeParameterInstantiation', _0x217a42(233)),
            'optional': !![]
        },
        'implements': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])('array'), (0, _utils[_0x217a42(219)])((0, _utils['assertNodeType'])(_0x217a42(379), _0x217a42(380)))),
            'optional': !![]
        },
        'decorators': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils['assertValueType'])('array'), (0, _utils['assertEach'])((0, _utils[_0x217a42(204)])(_0x217a42(278)))),
            'optional': !![]
        },
        'mixins': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(384)),
            'optional': !![]
        },
        'declare': {
            'validate': (0, _utils[_0x217a42(193)])(_0x217a42(267)),
            'optional': !![]
        },
        'abstract': {
            'validate': (0, _utils[_0x217a42(193)])(_0x217a42(267)),
            'optional': !![]
        }
    },
    'validate': function () {
        const _0x5bffca = _0x217a42, _0x53791c = (0, _utils['assertNodeType'])(_0x5bffca(206));
        return function (_0x2fb8f4, _0x3c4e20, _0x535971) {
            const _0x26f437 = _0x5bffca;
            if (!process[_0x26f437(197)]['BABEL_TYPES_8_BREAKING'])
                return;
            !(0, _is[_0x26f437(190)])(_0x26f437(276), _0x2fb8f4) && _0x53791c(_0x535971, 'id', _0x535971['id']);
        };
    }()
}), (0, _utils['default'])(_0x217a42(385), {
    'visitor': [_0x217a42(386)],
    'aliases': [
        _0x217a42(221),
        _0x217a42(275),
        'ModuleDeclaration',
        _0x217a42(387)
    ],
    'fields': {
        'source': { 'validate': (0, _utils[_0x217a42(204)])('StringLiteral') },
        'exportKind': (0, _utils[_0x217a42(388)])((0, _utils['assertOneOf'])(_0x217a42(362), _0x217a42(214))),
        'assertions': {
            'optional': !![],
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils['assertNodeType'])(_0x217a42(389))))
        }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(276), {
    'visitor': [_0x217a42(390)],
    'aliases': [
        _0x217a42(221),
        _0x217a42(275),
        'ModuleDeclaration',
        _0x217a42(387)
    ],
    'fields': { 'declaration': { 'validate': (0, _utils['assertNodeType'])('FunctionDeclaration', _0x217a42(391), _0x217a42(381), 'Expression') } }
}), (0, _utils[_0x217a42(190)])(_0x217a42(392), {
    'visitor': [
        'declaration',
        _0x217a42(393),
        _0x217a42(386)
    ],
    'aliases': [
        _0x217a42(221),
        'Declaration',
        _0x217a42(394),
        _0x217a42(387)
    ],
    'fields': {
        'declaration': {
            'optional': !![],
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(204)])(_0x217a42(275)), Object[_0x217a42(229)](function (_0x53c93d, _0x435d1f, _0x1ecc28) {
                const _0x286295 = _0x217a42;
                if (!process[_0x286295(197)][_0x286295(198)])
                    return;
                if (_0x1ecc28 && _0x53c93d[_0x286295(393)][_0x286295(334)])
                    throw new TypeError(_0x286295(395));
            }, { 'oneOfNodeTypes': [_0x217a42(275)] }), function (_0x110fc9, _0x3899bb, _0x16eb86) {
                const _0x1f589e = _0x217a42;
                if (!process[_0x1f589e(197)][_0x1f589e(198)])
                    return;
                if (_0x16eb86 && _0x110fc9[_0x1f589e(386)])
                    throw new TypeError('Cannot export a declaration from a source');
            })
        },
        'assertions': {
            'optional': !![],
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])('ImportAttribute')))
        },
        'specifiers': {
            'default': [],
            'validate': (0, _utils['chain'])((0, _utils[_0x217a42(193)])('array'), (0, _utils[_0x217a42(219)])(function () {
                const _0xb1f471 = _0x217a42, _0x433c73 = (0, _utils[_0xb1f471(204)])(_0xb1f471(396), _0xb1f471(397), _0xb1f471(398)), _0x2d767c = (0, _utils[_0xb1f471(204)])(_0xb1f471(396));
                if (!process[_0xb1f471(197)][_0xb1f471(198)])
                    return _0x433c73;
                return function (_0x3e1078, _0x3b27d9, _0x5d9670) {
                    const _0x4f9f3c = _0x3e1078['source'] ? _0x433c73 : _0x2d767c;
                    _0x4f9f3c(_0x3e1078, _0x3b27d9, _0x5d9670);
                };
            }()))
        },
        'source': {
            'validate': (0, _utils['assertNodeType'])(_0x217a42(298)),
            'optional': !![]
        },
        'exportKind': (0, _utils['validateOptional'])((0, _utils[_0x217a42(201)])(_0x217a42(362), _0x217a42(214)))
    }
}), (0, _utils[_0x217a42(190)])('ExportSpecifier', {
    'visitor': [
        _0x217a42(399),
        _0x217a42(400)
    ],
    'aliases': [_0x217a42(401)],
    'fields': {
        'local': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(206)) },
        'exported': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(206), _0x217a42(298)) }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(402), {
    'visitor': [
        _0x217a42(208),
        'right',
        _0x217a42(217)
    ],
    'builder': [
        _0x217a42(208),
        'right',
        _0x217a42(217),
        'await'
    ],
    'aliases': [
        _0x217a42(222),
        'Statement',
        _0x217a42(257),
        'BlockParent',
        'Loop',
        _0x217a42(360)
    ],
    'fields': {
        'left': {
            'validate': function () {
                const _0x38c037 = _0x217a42;
                if (!process[_0x38c037(197)][_0x38c037(198)])
                    return (0, _utils['assertNodeType'])(_0x38c037(258), _0x38c037(205));
                const _0x553a44 = (0, _utils[_0x38c037(204)])('VariableDeclaration'), _0x511589 = (0, _utils['assertNodeType'])(_0x38c037(206), _0x38c037(286), _0x38c037(236), _0x38c037(237));
                return function (_0x523874, _0x15f46a, _0x5938e0) {
                    const _0x2eecdd = _0x38c037;
                    (0, _is[_0x2eecdd(190)])(_0x2eecdd(258), _0x5938e0) ? _0x553a44(_0x523874, _0x15f46a, _0x5938e0) : _0x511589(_0x523874, _0x15f46a, _0x5938e0);
                };
            }()
        },
        'right': { 'validate': (0, _utils['assertNodeType'])(_0x217a42(195)) },
        'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(221)) },
        'await': { 'default': ![] }
    }
}), (0, _utils['default'])(_0x217a42(403), {
    'visitor': [
        _0x217a42(393),
        _0x217a42(386)
    ],
    'aliases': [
        'Statement',
        _0x217a42(275),
        _0x217a42(394)
    ],
    'fields': {
        'assertions': {
            'optional': !![],
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(389))))
        },
        'specifiers': { 'validate': (0, _utils['chain'])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(291), 'ImportDefaultSpecifier', 'ImportNamespaceSpecifier'))) },
        'source': { 'validate': (0, _utils[_0x217a42(204)])('StringLiteral') },
        'importKind': {
            'validate': (0, _utils[_0x217a42(201)])('type', _0x217a42(404), _0x217a42(214)),
            'optional': !![]
        }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(405), {
    'visitor': ['local'],
    'aliases': [_0x217a42(401)],
    'fields': { 'local': { 'validate': (0, _utils[_0x217a42(204)])('Identifier') } }
}), (0, _utils[_0x217a42(190)])(_0x217a42(406), {
    'visitor': [_0x217a42(399)],
    'aliases': [_0x217a42(401)],
    'fields': { 'local': { 'validate': (0, _utils['assertNodeType'])('Identifier') } }
}), (0, _utils[_0x217a42(190)])('ImportSpecifier', {
    'visitor': [
        _0x217a42(399),
        _0x217a42(290)
    ],
    'aliases': [_0x217a42(401)],
    'fields': {
        'local': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(206)) },
        'imported': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(206), 'StringLiteral') },
        'importKind': {
            'validate': (0, _utils[_0x217a42(201)])('type', _0x217a42(404)),
            'optional': !![]
        }
    }
}), (0, _utils[_0x217a42(190)])('MetaProperty', {
    'visitor': [
        'meta',
        _0x217a42(285)
    ],
    'aliases': [_0x217a42(195)],
    'fields': {
        'meta': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils['assertNodeType'])(_0x217a42(206)), Object[_0x217a42(229)](function (_0x2c4203, _0x4bf1f1, _0x28b048) {
                const _0x3ea9a5 = _0x217a42;
                if (!process[_0x3ea9a5(197)][_0x3ea9a5(198)])
                    return;
                let _0x19fdba;
                switch (_0x28b048[_0x3ea9a5(279)]) {
                case _0x3ea9a5(407):
                    _0x19fdba = _0x3ea9a5(408);
                    break;
                case 'new':
                    _0x19fdba = _0x3ea9a5(409);
                    break;
                case _0x3ea9a5(410):
                    _0x19fdba = _0x3ea9a5(411);
                    break;
                }
                if (!(0, _is[_0x3ea9a5(190)])(_0x3ea9a5(206), _0x2c4203[_0x3ea9a5(285)], { 'name': _0x19fdba }))
                    throw new TypeError(_0x3ea9a5(412));
            }, { 'oneOfNodeTypes': [_0x217a42(206)] }))
        },
        'property': { 'validate': (0, _utils['assertNodeType'])(_0x217a42(206)) }
    }
});
function _0x3d39(_0xafbc6, _0x521287) {
    return _0x3d39 = function (_0x19265e, _0x3d3953) {
        _0x19265e = _0x19265e - 166;
        let _0x128653 = _0x1926[_0x19265e];
        return _0x128653;
    }, _0x3d39(_0xafbc6, _0x521287);
}
const classMethodOrPropertyCommon = {
    'abstract': {
        'validate': (0, _utils[_0x217a42(193)])(_0x217a42(267)),
        'optional': !![]
    },
    'accessibility': {
        'validate': (0, _utils[_0x217a42(201)])(_0x217a42(413), _0x217a42(414), _0x217a42(415)),
        'optional': !![]
    },
    'static': { 'default': ![] },
    'override': { 'default': ![] },
    'computed': { 'default': ![] },
    'optional': {
        'validate': (0, _utils[_0x217a42(193)])(_0x217a42(267)),
        'optional': !![]
    },
    'key': {
        'validate': (0, _utils[_0x217a42(192)])(function () {
            const _0x263f06 = _0x217a42, _0xa24452 = (0, _utils[_0x263f06(204)])(_0x263f06(206), _0x263f06(298), _0x263f06(301)), _0x56c49a = (0, _utils[_0x263f06(204)])('Expression');
            return function (_0x12c723, _0x208034, _0x456d32) {
                const _0x94bdfd = _0x263f06, _0x84b723 = _0x12c723[_0x94bdfd(323)] ? _0x56c49a : _0xa24452;
                _0x84b723(_0x12c723, _0x208034, _0x456d32);
            };
        }(), (0, _utils[_0x217a42(204)])(_0x217a42(206), _0x217a42(298), _0x217a42(301), 'Expression'))
    }
};
exports[_0x217a42(180)] = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = Object['assign']({}, functionCommon, classMethodOrPropertyCommon, {
    'params': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils['assertNodeType'])('Identifier', _0x217a42(203), 'RestElement', _0x217a42(416)))) },
    'kind': {
        'validate': (0, _utils[_0x217a42(201)])('get', _0x217a42(325), _0x217a42(417), _0x217a42(418)),
        'default': _0x217a42(417)
    },
    'access': {
        'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(215)), (0, _utils[_0x217a42(201)])(_0x217a42(413), _0x217a42(414), 'protected')),
        'optional': !![]
    },
    'decorators': {
        'validate': (0, _utils[_0x217a42(192)])((0, _utils['assertValueType'])(_0x217a42(194)), (0, _utils['assertEach'])((0, _utils[_0x217a42(204)])(_0x217a42(278)))),
        'optional': !![]
    }
});
exports[_0x217a42(179)] = classMethodOrDeclareMethodCommon, (0, _utils['default'])('ClassMethod', {
    'aliases': [
        _0x217a42(277),
        'Scopable',
        _0x217a42(238),
        _0x217a42(274),
        _0x217a42(289)
    ],
    'builder': [
        _0x217a42(355),
        _0x217a42(326),
        _0x217a42(269),
        _0x217a42(217),
        _0x217a42(323),
        _0x217a42(419),
        'generator',
        _0x217a42(271)
    ],
    'visitor': [
        _0x217a42(326),
        _0x217a42(269),
        'body',
        _0x217a42(281),
        _0x217a42(272),
        _0x217a42(226)
    ],
    'fields': Object['assign']({}, classMethodOrDeclareMethodCommon, functionTypeAnnotationCommon, { 'body': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(273)) } })
}), (0, _utils[_0x217a42(190)])(_0x217a42(237), {
    'visitor': [
        _0x217a42(420),
        _0x217a42(280),
        _0x217a42(281)
    ],
    'builder': [_0x217a42(420)],
    'aliases': [
        _0x217a42(203),
        'PatternLike',
        'LVal'
    ],
    'fields': Object[_0x217a42(229)]({}, patternLikeCommon, { 'properties': { 'validate': (0, _utils['chain'])((0, _utils['assertValueType'])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])('RestElement', 'ObjectProperty'))) } })
}), (0, _utils[_0x217a42(190)])(_0x217a42(196), {
    'visitor': ['argument'],
    'aliases': ['UnaryLike'],
    'deprecatedAlias': 'SpreadProperty',
    'fields': { 'argument': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) } }
}), (0, _utils['default'])('Super', { 'aliases': [_0x217a42(195)] }), (0, _utils['default'])('TaggedTemplateExpression', {
    'visitor': [
        _0x217a42(421),
        _0x217a42(422)
    ],
    'aliases': [_0x217a42(195)],
    'fields': {
        'tag': { 'validate': (0, _utils['assertNodeType'])(_0x217a42(195)) },
        'quasi': { 'validate': (0, _utils['assertNodeType'])(_0x217a42(423)) },
        'typeParameters': {
            'validate': (0, _utils['assertNodeType'])(_0x217a42(232), _0x217a42(233)),
            'optional': !![]
        }
    }
}), (0, _utils['default'])(_0x217a42(424), {
    'builder': [
        _0x217a42(214),
        'tail'
    ],
    'fields': {
        'value': {
            'validate': (0, _utils[_0x217a42(425)])({
                'raw': { 'validate': (0, _utils['assertValueType'])('string') },
                'cooked': {
                    'validate': (0, _utils[_0x217a42(193)])(_0x217a42(215)),
                    'optional': !![]
                }
            })
        },
        'tail': { 'default': ![] }
    }
}), (0, _utils[_0x217a42(190)])('TemplateLiteral', {
    'visitor': [
        'quasis',
        _0x217a42(336)
    ],
    'aliases': [
        'Expression',
        _0x217a42(304)
    ],
    'fields': {
        'quasis': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(194)), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])('TemplateElement'))) },
        'expressions': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])('array'), (0, _utils[_0x217a42(219)])((0, _utils[_0x217a42(204)])(_0x217a42(195), _0x217a42(426))), function (_0x212c61, _0x3e3905, _0x469f28) {
                const _0x407ddf = _0x217a42;
                if (_0x212c61[_0x407ddf(427)][_0x407ddf(334)] !== _0x469f28[_0x407ddf(334)] + 1)
                    throw new TypeError('Number of ' + _0x212c61[_0x407ddf(362)] + _0x407ddf(428) + (_0x469f28['length'] + 1) + ' quasis but got ' + _0x212c61[_0x407ddf(427)][_0x407ddf(334)]);
            })
        }
    }
}), (0, _utils[_0x217a42(190)])(_0x217a42(429), {
    'builder': [
        _0x217a42(332),
        _0x217a42(430)
    ],
    'visitor': ['argument'],
    'aliases': [
        _0x217a42(195),
        _0x217a42(242)
    ],
    'fields': {
        'delegate': {
            'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(267)), Object[_0x217a42(229)](function (_0x4d0173, _0x1b4ec3, _0x4792f2) {
                const _0x5b0d00 = _0x217a42;
                if (!process[_0x5b0d00(197)][_0x5b0d00(198)])
                    return;
                if (_0x4792f2 && !_0x4d0173['argument'])
                    throw new TypeError(_0x5b0d00(431));
            }, { 'type': _0x217a42(267) })),
            'default': ![]
        },
        'argument': {
            'optional': !![],
            'validate': (0, _utils[_0x217a42(204)])('Expression')
        }
    }
}), (0, _utils['default'])('AwaitExpression', {
    'builder': ['argument'],
    'visitor': [_0x217a42(332)],
    'aliases': [
        'Expression',
        _0x217a42(242)
    ],
    'fields': { 'argument': { 'validate': (0, _utils[_0x217a42(204)])('Expression') } }
}), (0, _utils['default'])(_0x217a42(432), { 'aliases': ['Expression'] }), (0, _utils[_0x217a42(190)])('BigIntLiteral', {
    'builder': [_0x217a42(214)],
    'fields': { 'value': { 'validate': (0, _utils[_0x217a42(193)])(_0x217a42(215)) } },
    'aliases': [
        _0x217a42(195),
        _0x217a42(299),
        _0x217a42(304),
        'Immutable'
    ]
}), (0, _utils[_0x217a42(190)])(_0x217a42(398), {
    'visitor': [_0x217a42(400)],
    'aliases': [_0x217a42(401)],
    'fields': { 'exported': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(206)) } }
}), (0, _utils['default'])(_0x217a42(287), {
    'builder': [
        _0x217a42(312),
        _0x217a42(285),
        _0x217a42(323),
        _0x217a42(313)
    ],
    'visitor': [
        _0x217a42(312),
        _0x217a42(285)
    ],
    'aliases': [_0x217a42(195)],
    'fields': {
        'object': { 'validate': (0, _utils[_0x217a42(204)])(_0x217a42(195)) },
        'property': {
            'validate': function () {
                const _0x286b14 = _0x217a42, _0x44da80 = (0, _utils[_0x286b14(204)])(_0x286b14(206)), _0x5dd18a = (0, _utils[_0x286b14(204)])(_0x286b14(195)), _0x179d67 = function (_0xa4eef4, _0x2f4b04, _0x58cb11) {
                        const _0x3e80e4 = _0xa4eef4['computed'] ? _0x5dd18a : _0x44da80;
                        _0x3e80e4(_0xa4eef4, _0x2f4b04, _0x58cb11);
                    };
                return _0x179d67[_0x286b14(212)] = [
                    _0x286b14(195),
                    _0x286b14(206)
                ], _0x179d67;
            }()
        },
        'computed': { 'default': ![] },
        'optional': { 'validate': !process[_0x217a42(197)][_0x217a42(198)] ? (0, _utils[_0x217a42(193)])(_0x217a42(267)) : (0, _utils[_0x217a42(192)])((0, _utils['assertValueType'])(_0x217a42(267)), (0, _utils['assertOptionalChainStart'])()) }
    }
}), (0, _utils['default'])(_0x217a42(433), {
    'visitor': [
        'callee',
        'arguments',
        _0x217a42(226),
        'typeArguments'
    ],
    'builder': [
        'callee',
        _0x217a42(228),
        _0x217a42(313)
    ],
    'aliases': ['Expression'],
    'fields': {
        'callee': { 'validate': (0, _utils['assertNodeType'])('Expression') },
        'arguments': { 'validate': (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])('array'), (0, _utils['assertEach'])((0, _utils[_0x217a42(204)])('Expression', 'SpreadElement', _0x217a42(230), _0x217a42(231)))) },
        'optional': { 'validate': !process[_0x217a42(197)][_0x217a42(198)] ? (0, _utils[_0x217a42(193)])(_0x217a42(267)) : (0, _utils[_0x217a42(192)])((0, _utils[_0x217a42(193)])(_0x217a42(267)), (0, _utils['assertOptionalChainStart'])()) },
        'typeArguments': {
            'validate': (0, _utils[_0x217a42(204)])(_0x217a42(232)),
            'optional': !![]
        },
        'typeParameters': {
            'validate': (0, _utils[_0x217a42(204)])('TSTypeParameterInstantiation'),
            'optional': !![]
        }
    }
});