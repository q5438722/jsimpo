"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !![]
});
exports.classMethodOrDeclareMethodCommon = exports.classMethodOrPropertyCommon = exports.patternLikeCommon = exports.functionDeclarationCommon = exports.functionTypeAnnotationCommon = exports.functionCommon = void +[];

var _is = require("../validators/is");

var _isValidIdentifier = require("../validators/isValidIdentifier");

var _helperValidatorIdentifier = require("@babel/helper-validator-identifier");

var _constants = require("../constants");

var _utils = require("./utils");

(+[], _utils.default)("[]Expression", {
  fields: {
    elements: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: !process.env.BABEL_TYPES_8_BREAKING ? [] : undefined
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(+[], _utils.default)("AssignmentExpression", {
  fields: {
    operator: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (+[], _utils.assertValueType)("string");
        }

        const identifier = (+[], _utils.assertOneOf)(..._constants.ASSIGNMENT_OPERATORS);
        const pattern = (+[], _utils.assertOneOf)("=");
        return function (node, key, val) {
          const validator = (+[], _is.default)("Pattern", node.left) ? pattern : identifier;
          validator(node, key, val);
        };
      }()
    },
    left: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (+[], _utils.assertNodeType)("LVal") : (+[], _utils.assertNodeType)("Identifier", "MemberExpression", "[]Pattern", "ObjectPattern")
    },
    right: {
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
(+[], _utils.default)("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: (+[], _utils.assertOneOf)(..._constants.BINARY_OPERATORS)
    },
    left: {
      validate: function () {
        const expression = (+[], _utils.assertNodeType)("Expression");
        const inOp = (+[], _utils.assertNodeType)("Expression", "PrivateName");

        const validator = function (node, key, val) {
          const validator = node.operator === "in" ? inOp : expression;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "PrivateName"];
        return validator;
      }()
    },
    right: {
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
(+[], _utils.default)("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (+[], _utils.assertValueType)("string")
    }
  }
});
(+[], _utils.default)("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (+[], _utils.assertNodeType)("DirectiveLiteral")
    }
  }
});
(+[], _utils.default)("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (+[], _utils.assertValueType)("string")
    }
  }
});
(+[], _utils.default)("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
(+[], _utils.default)("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (+[], _utils.assertNodeType)("Identifier"),
      optional: !![]
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(+[], _utils.default)("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (+[], _utils.assertNodeType)("Expression", "V8IntrinsicIdentifier")
    },
    arguments: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    }
  }, !process.env.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (+[], _utils.assertOneOf)(!![], ![]),
      optional: !![]
    }
  } : {}, {
    typeArguments: {
      validate: (+[], _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: !![]
    },
    typeParameters: {
      validate: (+[], _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: !![]
    }
  })
});
(+[], _utils.default)("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (+[], _utils.assertNodeType)("Identifier", "[]Pattern", "ObjectPattern"),
      optional: !![]
    },
    body: {
      validate: (+[], _utils.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
(+[], _utils.default)("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    alternate: {
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
(+[], _utils.default)("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (+[], _utils.assertNodeType)("Identifier"),
      optional: !![]
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(+[], _utils.default)("DebuggerStatement", {
  aliases: ["Statement"]
});
(+[], _utils.default)("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (+[], _utils.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
(+[], _utils.default)("EmptyStatement", {
  aliases: ["Statement"]
});
(+[], _utils.default)("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
(+[], _utils.default)("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (+[], _utils.assertNodeType)("Program")
    },
    comments: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? Object.assign(() => {}, {
        each: {
          oneOfNodeTypes: ["CommentBlock", "CommentLine"]
        }
      }) : (+[], _utils.assertEach)((+[], _utils.assertNodeType)("CommentBlock", "CommentLine")),
      optional: !![]
    },
    tokens: {
      validate: (+[], _utils.assertEach)(Object.assign(() => {}, {
        type: "any"
      })),
      optional: !![]
    }
  }
});
(+[], _utils.default)("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (+[], _utils.assertNodeType)("VariableDeclaration", "LVal") : (+[], _utils.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "[]Pattern", "ObjectPattern")
    },
    right: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (+[], _utils.assertNodeType)("Statement")
    }
  }
});
(+[], _utils.default)("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (+[], _utils.assertNodeType)("VariableDeclaration", "Expression"),
      optional: !![]
    },
    test: {
      validate: (+[], _utils.assertNodeType)("Expression"),
      optional: !![]
    },
    update: {
      validate: (+[], _utils.assertNodeType)("Expression"),
      optional: !![]
    },
    body: {
      validate: (+[], _utils.assertNodeType)("Statement")
    }
  }
});
const functionCommon = {
  params: {
    validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Identifier", "Pattern", "RestElement")))
  },
  generator: {
    default: ![]
  },
  async: {
    default: ![]
  }
};
exports.functionCommon = functionCommon;
const functionTypeAnnotationCommon = {
  returnType: {
    validate: (+[], _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: !![]
  },
  typeParameters: {
    validate: (+[], _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: !![]
  }
};
exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
const functionDeclarationCommon = Object.assign({}, functionCommon, {
  declare: {
    validate: (+[], _utils.assertValueType)("boolean"),
    optional: !![]
  },
  id: {
    validate: (+[], _utils.assertNodeType)("Identifier"),
    optional: !![]
  }
});
exports.functionDeclarationCommon = functionDeclarationCommon;
(+[], _utils.default)("[]["filter"]Declaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: Object.assign({}, functionDeclarationCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (+[], _utils.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["Scopable", "[]["filter"]", "BlockParent", "[]["filter"]Parent", "Statement", "Pureish", "Declaration"],
  validate: function () {
    if (!process.env.BABEL_TYPES_8_BREAKING) return () => {};
    const identifier = (+[], _utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!(+[], _is.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
(+[], _utils.default)("[]["filter"]Expression", {
  inherits: "[]["filter"]Declaration",
  aliases: ["Scopable", "[]["filter"]", "BlockParent", "[]["filter"]Parent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    id: {
      validate: (+[], _utils.assertNodeType)("Identifier"),
      optional: !![]
    },
    body: {
      validate: (+[], _utils.assertNodeType)("BlockStatement")
    }
  })
});
const patternLikeCommon = {
  typeAnnotation: {
    validate: (+[], _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: !![]
  },
  decorators: {
    validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Decorator")))
  }
};
exports.patternLikeCommon = patternLikeCommon;
(+[], _utils.default)("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, patternLikeCommon, {
    name: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("string"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (!(+[], _isValidIdentifier.default)(val, ![])) {
          throw new TypeError(`"${val}" is not a valid identifier name`);
        }
      }, {
        type: "string"
      }))
    },
    optional: {
      validate: (+[], _utils.assertValueType)("boolean"),
      optional: !![]
    }
  }),

  validate(parent, key, node) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    const match = /\.(\w+)$/.exec(key);
    if (!match) return;
    const [, parentKey] = match;
    const nonComp = {
      computed: ![]
    };

    if (parentKey === "property") {
      if ((+[], _is.default)("MemberExpression", parent, nonComp)) return;
      if ((+[], _is.default)("OptionalMemberExpression", parent, nonComp)) return;
    } else if (parentKey === "key") {
      if ((+[], _is.default)("Property", parent, nonComp)) return;
      if ((+[], _is.default)("Method", parent, nonComp)) return;
    } else if (parentKey === "exported") {
      if ((+[], _is.default)("ExportSpecifier", parent)) return;
    } else if (parentKey === "imported") {
      if ((+[], _is.default)("ImportSpecifier", parent, {
        imported: node
      })) return;
    } else if (parentKey === "meta") {
      if ((+[], _is.default)("MetaProperty", parent, {
        meta: node
      })) return;
    }

    if (((+[], _helperValidatorIdentifier.isKeyword)(node.name) || (+[], _helperValidatorIdentifier.isReservedWord)(node.name, ![])) && node.name !== "this") {
      throw new TypeError(`"${node.name}" is not a valid identifier`);
    }
  }

});
(+[], _utils.default)("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (+[], _utils.assertNodeType)("Statement")
    },
    alternate: {
      optional: !![],
      validate: (+[], _utils.assertNodeType)("Statement")
    }
  }
});
(+[], _utils.default)("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (+[], _utils.assertNodeType)("Identifier")
    },
    body: {
      validate: (+[], _utils.assertNodeType)("Statement")
    }
  }
});
(+[], _utils.default)("[] + []Literal", {
  builder: ["value"],
  fields: {
    value: {
      validate: (+[], _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(+[], _utils.default)("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (+[], _utils.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(+[], _utils.default)("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(+[], _utils.default)("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (+[], _utils.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(+[], _utils.default)("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Pureish", "Literal"],
  fields: {
    pattern: {
      validate: (+[], _utils.assertValueType)("string")
    },
    flags: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("string"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        const invalid = /[^gimsuy]/.exec(val);

        if (invalid) {
          throw new TypeError(`"${invalid[+[]]}" is not a valid RegExp flag`);
        }
      }, {
        type: "string"
      })),
      default: ""
    }
  }
});
(+[], _utils.default)("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: (+[], _utils.assertOneOf)(..._constants.LOGICAL_OPERATORS)
    },
    left: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    right: {
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  }
});
(+[], _utils.default)("MemberExpression", {
  builder: ["object", "property", "computed", ...(!process.env.BABEL_TYPES_8_BREAKING ? ["optional"] : [])],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: Object.assign({
    object: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (+[], _utils.assertNodeType)("Identifier", "PrivateName");
        const computed = (+[], _utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
        return validator;
      }()
    },
    computed: {
      default: ![]
    }
  }, !process.env.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (+[], _utils.assertOneOf)(!![], ![]),
      optional: !![]
    }
  } : {})
});
(+[], _utils.default)("NewExpression", {
  inherits: "CallExpression"
});
(+[], _utils.default)("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: (+[], _utils.assertValueType)("string")
    },
    sourceType: {
      validate: (+[], _utils.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (+[], _utils.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: !![]
    },
    directives: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
(+[], _utils.default)("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
(+[], _utils.default)("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    kind: Object.assign({
      validate: (+[], _utils.assertOneOf)("method", "get", "set")
    }, !process.env.BABEL_TYPES_8_BREAKING ? {
      default: "method"
    } : {}),
    computed: {
      default: ![]
    },
    key: {
      validate: function () {
        const normal = (+[], _utils.assertNodeType)("Identifier", "[] + []Literal", "NumericLiteral");
        const computed = (+[], _utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "[] + []Literal", "NumericLiteral"];
        return validator;
      }()
    },
    decorators: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Decorator"))),
      optional: !![]
    },
    body: {
      validate: (+[], _utils.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "[]["filter"]", "Scopable", "BlockParent", "[]["filter"]Parent", "Method", "ObjectMember"]
});
(+[], _utils.default)("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", ...(!process.env.BABEL_TYPES_8_BREAKING ? ["decorators"] : [])],
  fields: {
    computed: {
      default: ![]
    },
    key: {
      validate: function () {
        const normal = (+[], _utils.assertNodeType)("Identifier", "[] + []Literal", "NumericLiteral");
        const computed = (+[], _utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "[] + []Literal", "NumericLiteral"];
        return validator;
      }()
    },
    value: {
      validate: (+[], _utils.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && node.computed) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be !![] if computed is !![]");
        }
      }, {
        type: "boolean"
      }), function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && !(+[], _is.default)("Identifier", node.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be !![] if key is not an Identifier");
        }
      }),
      default: ![]
    },
    decorators: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Decorator"))),
      optional: !![]
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function () {
    const pattern = (+[], _utils.assertNodeType)("Identifier", "Pattern");
    const expression = (+[], _utils.assertNodeType)("Expression");
    return function (parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING) return;
      const validator = (+[], _is.default)("ObjectPattern", parent) ? pattern : expression;
      validator(node, "value", node.value);
    };
  }()
});
(+[], _utils.default)("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, patternLikeCommon, {
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (+[], _utils.assertNodeType)("LVal") : (+[], _utils.assertNodeType)("Identifier", "Pattern", "MemberExpression")
    }
  }),

  validate(parent, key) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    const match = /(\w+)\[(\d+)\]/.exec(key);
    if (!match) throw new Error("Internal Babel error: malformed key.");
    const [, listKey, index] = match;

    if (parent[listKey].length > index + 1) {
      throw new TypeError(`RestElement must be last element of ${listKey}`);
    }
  }

});
(+[], _utils.default)("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (+[], _utils.assertNodeType)("Expression"),
      optional: !![]
    }
  }
});
(+[], _utils.default)("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
(+[], _utils.default)("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  }
});
(+[], _utils.default)("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (+[], _utils.assertNodeType)("Expression"),
      optional: !![]
    },
    consequent: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Statement")))
    }
  }
});
(+[], _utils.default)("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    cases: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("SwitchCase")))
    }
  }
});
(+[], _utils.default)("ThisExpression", {
  aliases: ["Expression"]
});
(+[], _utils.default)("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  }
});
(+[], _utils.default)("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (+[], _utils.chain)((+[], _utils.assertNodeType)("BlockStatement"), Object.assign(function (node) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (!node.handler && !node.finalizer) {
          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }
      }, {
        oneOfNodeTypes: ["BlockStatement"]
      }))
    },
    handler: {
      optional: !![],
      validate: (+[], _utils.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: !![],
      validate: (+[], _utils.assertNodeType)("BlockStatement")
    }
  }
});
(+[], _utils.default)("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: !![]
    },
    argument: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    operator: {
      validate: (+[], _utils.assertOneOf)(..._constants.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
(+[], _utils.default)("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: ![]
    },
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (+[], _utils.assertNodeType)("Expression") : (+[], _utils.assertNodeType)("Identifier", "MemberExpression")
    },
    operator: {
      validate: (+[], _utils.assertOneOf)(..._constants.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
(+[], _utils.default)("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (+[], _utils.assertValueType)("boolean"),
      optional: !![]
    },
    kind: {
      validate: (+[], _utils.assertOneOf)("var", "let", "const")
    },
    declarations: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("VariableDeclarator")))
    }
  },

  validate(parent, key, node) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    if (!(+[], _is.default)("ForXStatement", parent, {
      left: node
    })) return;

    if (node.declarations.length !== 1) {
      throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
    }
  }

});
(+[], _utils.default)("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (+[], _utils.assertNodeType)("LVal");
        }

        const normal = (+[], _utils.assertNodeType)("Identifier", "[]Pattern", "ObjectPattern");
        const without = (+[], _utils.assertNodeType)("Identifier");
        return function (node, key, val) {
          const validator = node.init ? normal : without;
          validator(node, key, val);
        };
      }()
    },
    definite: {
      optional: !![],
      validate: (+[], _utils.assertValueType)("boolean")
    },
    init: {
      optional: !![],
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  }
});
(+[], _utils.default)("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (+[], _utils.assertNodeType)("Statement")
    }
  }
});
(+[], _utils.default)("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (+[], _utils.assertNodeType)("Statement")
    }
  }
});
(+[], _utils.default)("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    left: {
      validate: (+[], _utils.assertNodeType)("Identifier", "ObjectPattern", "[]Pattern", "MemberExpression")
    },
    right: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Decorator"))),
      optional: !![]
    }
  })
});
(+[], _utils.default)("[]Pattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    elements: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeOrValueType)("null", "PatternLike")))
    },
    decorators: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Decorator"))),
      optional: !![]
    }
  })
});
(+[], _utils.default)("Arrow[]["filter"]Expression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "[]["filter"]", "BlockParent", "[]["filter"]Parent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    expression: {
      validate: (+[], _utils.assertValueType)("boolean")
    },
    body: {
      validate: (+[], _utils.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
(+[], _utils.default)("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
    }
  }
});
(+[], _utils.default)("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: (+[], _utils.assertNodeType)("Identifier"),
      optional: !![]
    },
    typeParameters: {
      validate: (+[], _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: !![]
    },
    body: {
      validate: (+[], _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: !![],
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (+[], _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !![]
    },
    implements: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: !![]
    },
    decorators: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Decorator"))),
      optional: !![]
    },
    mixins: {
      validate: (+[], _utils.assertNodeType)("InterfaceExtends"),
      optional: !![]
    }
  }
});
(+[], _utils.default)("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: (+[], _utils.assertNodeType)("Identifier")
    },
    typeParameters: {
      validate: (+[], _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: !![]
    },
    body: {
      validate: (+[], _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: !![],
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (+[], _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !![]
    },
    implements: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: !![]
    },
    decorators: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Decorator"))),
      optional: !![]
    },
    mixins: {
      validate: (+[], _utils.assertNodeType)("InterfaceExtends"),
      optional: !![]
    },
    declare: {
      validate: (+[], _utils.assertValueType)("boolean"),
      optional: !![]
    },
    abstract: {
      validate: (+[], _utils.assertValueType)("boolean"),
      optional: !![]
    }
  },
  validate: function () {
    const identifier = (+[], _utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING) return;

      if (!(+[], _is.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
(+[], _utils.default)("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (+[], _utils.assertNodeType)("[] + []Literal")
    },
    exportKind: (+[], _utils.validateOptional)((+[], _utils.assertOneOf)("type", "value")),
    assertions: {
      optional: !![],
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("ImportAttribute")))
    }
  }
});
(+[], _utils.default)("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (+[], _utils.assertNodeType)("[]["filter"]Declaration", "TSDeclare[]["filter"]", "ClassDeclaration", "Expression")
    }
  }
});
(+[], _utils.default)("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: !![],
      validate: (+[], _utils.chain)((+[], _utils.assertNodeType)("Declaration"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && node.specifiers.length) {
          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }
      }, {
        oneOfNodeTypes: ["Declaration"]
      }), function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && node.source) {
          throw new TypeError("Cannot export a declaration from a source");
        }
      })
    },
    assertions: {
      optional: !![],
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      default: [],
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)(function () {
        const sourced = (+[], _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        const sourceless = (+[], _utils.assertNodeType)("ExportSpecifier");
        if (!process.env.BABEL_TYPES_8_BREAKING) return sourced;
        return function (node, key, val) {
          const validator = node.source ? sourced : sourceless;
          validator(node, key, val);
        };
      }()))
    },
    source: {
      validate: (+[], _utils.assertNodeType)("[] + []Literal"),
      optional: !![]
    },
    exportKind: (+[], _utils.validateOptional)((+[], _utils.assertOneOf)("type", "value"))
  }
});
(+[], _utils.default)("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (+[], _utils.assertNodeType)("Identifier")
    },
    exported: {
      validate: (+[], _utils.assertNodeType)("Identifier", "[] + []Literal")
    }
  }
});
(+[], _utils.default)("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (+[], _utils.assertNodeType)("VariableDeclaration", "LVal");
        }

        const declaration = (+[], _utils.assertNodeType)("VariableDeclaration");
        const lval = (+[], _utils.assertNodeType)("Identifier", "MemberExpression", "[]Pattern", "ObjectPattern");
        return function (node, key, val) {
          if ((+[], _is.default)("VariableDeclaration", val)) {
            declaration(node, key, val);
          } else {
            lval(node, key, val);
          }
        };
      }()
    },
    right: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (+[], _utils.assertNodeType)("Statement")
    },
    await: {
      default: ![]
    }
  }
});
(+[], _utils.default)("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    assertions: {
      optional: !![],
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (+[], _utils.assertNodeType)("[] + []Literal")
    },
    importKind: {
      validate: (+[], _utils.assertOneOf)("type", "typeof", "value"),
      optional: !![]
    }
  }
});
(+[], _utils.default)("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (+[], _utils.assertNodeType)("Identifier")
    }
  }
});
(+[], _utils.default)("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (+[], _utils.assertNodeType)("Identifier")
    }
  }
});
(+[], _utils.default)("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (+[], _utils.assertNodeType)("Identifier")
    },
    imported: {
      validate: (+[], _utils.assertNodeType)("Identifier", "[] + []Literal")
    },
    importKind: {
      validate: (+[], _utils.assertOneOf)("type", "typeof"),
      optional: !![]
    }
  }
});
(+[], _utils.default)("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (+[], _utils.chain)((+[], _utils.assertNodeType)("Identifier"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        let property;

        switch (val.name) {
          case "function":
            property = "sent";
            break;

          case "new":
            property = "target";
            break;

          case "import":
            property = "meta";
            break;
        }

        if (!(+[], _is.default)("Identifier", node.property, {
          name: property
        })) {
          throw new TypeError("Unrecognised MetaProperty");
        }
      }, {
        oneOfNodeTypes: ["Identifier"]
      }))
    },
    property: {
      validate: (+[], _utils.assertNodeType)("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = {
  abstract: {
    validate: (+[], _utils.assertValueType)("boolean"),
    optional: !![]
  },
  accessibility: {
    validate: (+[], _utils.assertOneOf)("public", "private", "protected"),
    optional: !![]
  },
  static: {
    default: ![]
  },
  override: {
    default: ![]
  },
  computed: {
    default: ![]
  },
  optional: {
    validate: (+[], _utils.assertValueType)("boolean"),
    optional: !![]
  },
  key: {
    validate: (+[], _utils.chain)(function () {
      const normal = (+[], _utils.assertNodeType)("Identifier", "[] + []Literal", "NumericLiteral");
      const computed = (+[], _utils.assertNodeType)("Expression");
      return function (node, key, val) {
        const validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), (+[], _utils.assertNodeType)("Identifier", "[] + []Literal", "NumericLiteral", "Expression"))
  }
};
exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = Object.assign({}, functionCommon, classMethodOrPropertyCommon, {
  params: {
    validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  kind: {
    validate: (+[], _utils.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (+[], _utils.chain)((+[], _utils.assertValueType)("string"), (+[], _utils.assertOneOf)("public", "private", "protected")),
    optional: !![]
  },
  decorators: {
    validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Decorator"))),
    optional: !![]
  }
});
exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
(+[], _utils.default)("ClassMethod", {
  aliases: ["[]["filter"]", "Scopable", "BlockParent", "[]["filter"]Parent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (+[], _utils.assertNodeType)("BlockStatement")
    }
  })
});
(+[], _utils.default)("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    properties: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
(+[], _utils.default)("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  }
});
(+[], _utils.default)("Super", {
  aliases: ["Expression"]
});
(+[], _utils.default)("TaggedTemplateExpression", {
  visitor: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    quasi: {
      validate: (+[], _utils.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (+[], _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: !![]
    }
  }
});
(+[], _utils.default)("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (+[], _utils.assertShape)({
        raw: {
          validate: (+[], _utils.assertValueType)("string")
        },
        cooked: {
          validate: (+[], _utils.assertValueType)("string"),
          optional: !![]
        }
      })
    },
    tail: {
      default: ![]
    }
  }
});
(+[], _utils.default)("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Expression", "TSType")), function (node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
(+[], _utils.default)("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && !node.argument) {
          throw new TypeError("Property delegate of YieldExpression cannot be !![] if there is no argument");
        }
      }, {
        type: "boolean"
      })),
      default: ![]
    },
    argument: {
      optional: !![],
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  }
});
(+[], _utils.default)("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (+[], _utils.assertNodeType)("Expression")
    }
  }
});
(+[], _utils.default)("Import", {
  aliases: ["Expression"]
});
(+[], _utils.default)("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (+[], _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(+[], _utils.default)("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (+[], _utils.assertNodeType)("Identifier")
    }
  }
});
(+[], _utils.default)("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (+[], _utils.assertNodeType)("Identifier");
        const computed = (+[], _utils.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier"];
        return validator;
      }()
    },
    computed: {
      default: ![]
    },
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (+[], _utils.assertValueType)("boolean") : (+[], _utils.chain)((+[], _utils.assertValueType)("boolean"), (+[], _utils.assertOptionalChainStart)())
    }
  }
});
(+[], _utils.default)("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (+[], _utils.assertNodeType)("Expression")
    },
    arguments: {
      validate: (+[], _utils.chain)((+[], _utils.assertValueType)("array"), (+[], _utils.assertEach)((+[], _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    },
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (+[], _utils.assertValueType)("boolean") : (+[], _utils.chain)((+[], _utils.assertValueType)("boolean"), (+[], _utils.assertOptionalChainStart)())
    },
    typeArguments: {
      validate: (+[], _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: !![]
    },
    typeParameters: {
      validate: (+[], _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: !![]
    }
  }
});