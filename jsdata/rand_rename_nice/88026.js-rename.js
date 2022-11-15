'use strict';
(function(ast, factory) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    factory(exports);
  } else {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else {
      factory((ast.acorn = ast.acorn || {}, ast.acorn.walk = ast.acorn.walk || {}));
    }
  }
})(this, function(exports) {
  function run(buf, ctx, fn, options, implOpts) {
    if (!fn) {
      fn = exports.base;
    }
    (function next(value, cb, type) {
      var method = type || value.type;
      var f = ctx[method];
      fn[method](value, cb, next);
      if (f) {
        f(value, cb);
      }
    })(buf, options, implOpts);
  }
  function create(it, key, fn, cb) {
    if (!fn) {
      fn = exports.base;
    }
    var ret = [];
    (function display(obj, args, name) {
      var i = name || obj.type;
      var format = key[i];
      var notNullOrUndefined = obj != ret[ret.length - 1];
      if (notNullOrUndefined) {
        ret.push(obj);
      }
      fn[i](obj, args, display);
      if (format) {
        format(obj, args || ret, ret);
      }
      if (notNullOrUndefined) {
        ret.pop();
      }
    })(it, cb);
  }
  function load(points, t, value, name, i) {
    var node = value ? exports.make(value, name) : name;
    (function c(a, b, type) {
      node[type || a.type](a, b, c);
    })(points, t, i);
  }
  function w(w) {
    if (typeof w == "string") {
      return function(b) {
        return b == w;
      };
    } else {
      if (!w) {
        return function() {
          return true;
        };
      } else {
        return w;
      }
    }
  }
  function transform(tagName, start, end, value, base, relative) {
    value = w(value);
    if (!base) {
      base = exports.base;
    }
    try {
      (function callback(node, value, title) {
        var name = title || node.type;
        if ((start == null || node.start <= start) && (end == null || node.end >= end)) {
          base[name](node, value, callback);
        }
        if ((start == null || node.start == start) && (end == null || node.end == end) && value(name, node)) {
          throw new Error(node, value);
        }
      })(tagName, relative);
    } catch (newData) {
      if (newData instanceof Error) {
        return newData;
      }
      throw newData;
    }
  }
  function remove(deep, pos, value, fn, t) {
    value = w(value);
    if (!fn) {
      fn = exports.base;
    }
    try {
      (function next(node, x, type) {
        var i = type || node.type;
        if (node.start > pos || node.end < pos) {
          return;
        }
        fn[i](node, x, next);
        if (value(i, node)) {
          throw new Error(node, x);
        }
      })(deep, t);
    } catch (returned) {
      if (returned instanceof Error) {
        return returned;
      }
      throw returned;
    }
  }
  function initialize(height, pos, value, fn, x) {
    value = w(value);
    if (!fn) {
      fn = exports.base;
    }
    try {
      (function next(node, val, type) {
        if (node.end < pos) {
          return;
        }
        var key = type || node.type;
        if (node.start >= pos && value(key, node)) {
          throw new Error(node, val);
        }
        fn[key](node, val, next);
      })(height, x);
    } catch (connection) {
      if (connection instanceof Error) {
        return connection;
      }
      throw connection;
    }
  }
  function render(zoom, time, value, fn, b) {
    value = w(value);
    if (!fn) {
      fn = exports.base;
    }
    var evt;
    (function next(event, data, type) {
      if (event.start > time) {
        return;
      }
      var i = type || event.type;
      if (event.end <= time && (!evt || evt.node.end < event.end) && value(i, event)) {
        evt = new Error(event, data);
      }
      fn[i](event, data, next);
    })(zoom, b);
    return evt;
  }
  function make(data, type) {
    if (!type) {
      type = exports.base;
    }
    var b = f(type);
    var i;
    for (i in data) {
      b[i] = data[i];
    }
    return b;
  }
  function skipThrough(node, st, c) {
    c(node, st);
  }
  function ignore(cb, options, elem) {
  }
  var Error = function parse(n, state) {
    this.node = n;
    this.state = state;
  };
  var f = Object.create || function(p) {
    function GeneratedWrapper() {
    }
    GeneratedWrapper.prototype = p;
    return new GeneratedWrapper;
  };
  var base = {};
  base.Program = base.BlockStatement = function(node, st, c) {
    var i = 0;
    for (; i < node.body.length; ++i) {
      c(node.body[i], st, "Statement");
    }
  };
  base.Statement = skipThrough;
  base.EmptyStatement = ignore;
  base.ExpressionStatement = base.ParenthesizedExpression = function(node, st, c) {
    return c(node.expression, st, "Expression");
  };
  base.IfStatement = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.consequent, st, "Statement");
    if (node.alternate) {
      c(node.alternate, st, "Statement");
    }
  };
  base.LabeledStatement = function(node, st, c) {
    return c(node.body, st, "Statement");
  };
  base.BreakStatement = base.ContinueStatement = ignore;
  base.WithStatement = function(node, st, c) {
    c(node.object, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.SwitchStatement = function(node, st, c) {
    c(node.discriminant, st, "Expression");
    var i = 0;
    for (; i < node.cases.length; ++i) {
      var cs = node.cases[i];
      if (cs.test) {
        c(cs.test, st, "Expression");
      }
      var j = 0;
      for (; j < cs.consequent.length; ++j) {
        c(cs.consequent[j], st, "Statement");
      }
    }
  };
  base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function(node, st, c) {
    if (node.argument) {
      c(node.argument, st, "Expression");
    }
  };
  base.ThrowStatement = base.SpreadElement = function(node, st, c) {
    return c(node.argument, st, "Expression");
  };
  base.TryStatement = function(node, st, c) {
    c(node.block, st, "Statement");
    if (node.handler) {
      c(node.handler, st);
    }
    if (node.finalizer) {
      c(node.finalizer, st, "Statement");
    }
  };
  base.CatchClause = function(node, st, c) {
    c(node.param, st, "Pattern");
    c(node.body, st, "ScopeBody");
  };
  base.WhileStatement = base.DoWhileStatement = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.ForStatement = function(node, st, c) {
    if (node.init) {
      c(node.init, st, "ForInit");
    }
    if (node.test) {
      c(node.test, st, "Expression");
    }
    if (node.update) {
      c(node.update, st, "Expression");
    }
    c(node.body, st, "Statement");
  };
  base.ForInStatement = base.ForOfStatement = function(node, st, c) {
    c(node.left, st, "ForInit");
    c(node.right, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.ForInit = function(node, st, c) {
    if (node.type == "VariableDeclaration") {
      c(node, st);
    } else {
      c(node, st, "Expression");
    }
  };
  base.DebuggerStatement = ignore;
  base.FunctionDeclaration = function(fn, n, c) {
    return c(fn, n, "Function");
  };
  base.VariableDeclaration = function(scope, c, n) {
    var i = 0;
    for (; i < scope.declarations.length; ++i) {
      n(scope.declarations[i], c);
    }
  };
  base.VariableDeclarator = function(node, st, c) {
    c(node.id, st, "Pattern");
    if (node.init) {
      c(node.init, st, "Expression");
    }
  };
  base.Function = function(node, st, c) {
    if (node.id) {
      c(node.id, st, "Pattern");
    }
    var i = 0;
    for (; i < node.params.length; i++) {
      c(node.params[i], st, "Pattern");
    }
    c(node.body, st, node.expression ? "ScopeExpression" : "ScopeBody");
  };
  base.ScopeBody = function(node, st, c) {
    return c(node, st, "Statement");
  };
  base.ScopeExpression = function(node, st, c) {
    return c(node, st, "Expression");
  };
  base.Pattern = function(obj, msg, c) {
    if (obj.type == "Identifier") {
      c(obj, msg, "VariablePattern");
    } else {
      if (obj.type == "MemberExpression") {
        c(obj, msg, "MemberPattern");
      } else {
        c(obj, msg);
      }
    }
  };
  base.VariablePattern = ignore;
  base.MemberPattern = skipThrough;
  base.RestElement = function(node, st, c) {
    return c(node.argument, st, "Pattern");
  };
  base.ArrayPattern = function(expr, scope, c) {
    var i = 0;
    for (; i < expr.elements.length; ++i) {
      var elem = expr.elements[i];
      if (elem) {
        c(elem, scope, "Pattern");
      }
    }
  };
  base.ObjectPattern = function(expr, node, c) {
    var i = 0;
    for (; i < expr.properties.length; ++i) {
      c(expr.properties[i].value, node, "Pattern");
    }
  };
  base.Expression = skipThrough;
  base.ThisExpression = base.Super = base.MetaProperty = ignore;
  base.ArrayExpression = function(node, st, c) {
    var i = 0;
    for (; i < node.elements.length; ++i) {
      var elem = node.elements[i];
      if (elem) {
        c(elem, st, "Expression");
      }
    }
  };
  base.ObjectExpression = function(node, path, filter) {
    var i = 0;
    for (; i < node.properties.length; ++i) {
      filter(node.properties[i], path);
    }
  };
  base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
  base.SequenceExpression = base.TemplateLiteral = function(expr, scope, c) {
    var i = 0;
    for (; i < expr.expressions.length; ++i) {
      c(expr.expressions[i], scope, "Expression");
    }
  };
  base.UnaryExpression = base.UpdateExpression = function(node, st, c) {
    c(node.argument, st, "Expression");
  };
  base.BinaryExpression = base.LogicalExpression = function(node, st, c) {
    c(node.left, st, "Expression");
    c(node.right, st, "Expression");
  };
  base.AssignmentExpression = base.AssignmentPattern = function(node, st, c) {
    c(node.left, st, "Pattern");
    c(node.right, st, "Expression");
  };
  base.ConditionalExpression = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.consequent, st, "Expression");
    c(node.alternate, st, "Expression");
  };
  base.NewExpression = base.CallExpression = function(node, st, c) {
    c(node.callee, st, "Expression");
    if (node.arguments) {
      var i = 0;
      for (; i < node.arguments.length; ++i) {
        c(node.arguments[i], st, "Expression");
      }
    }
  };
  base.MemberExpression = function(node, st, c) {
    c(node.object, st, "Expression");
    if (node.computed) {
      c(node.property, st, "Expression");
    }
  };
  base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function(node, st, c) {
    if (node.declaration) {
      c(node.declaration, st, node.type == "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression");
    }
    if (node.source) {
      c(node.source, st, "Expression");
    }
  };
  base.ExportAllDeclaration = function(node, st, c) {
    c(node.source, st, "Expression");
  };
  base.ImportDeclaration = function(node, st, c) {
    var i = 0;
    for (; i < node.specifiers.length; i++) {
      c(node.specifiers[i], st);
    }
    c(node.source, st, "Expression");
  };
  base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.Literal = ignore;
  base.TaggedTemplateExpression = function(node, st, c) {
    c(node.tag, st, "Expression");
    c(node.quasi, st);
  };
  base.ClassDeclaration = base.ClassExpression = function(node, st, c) {
    return c(node, st, "Class");
  };
  base.Class = function(node, data, c) {
    if (node.id) {
      c(node.id, data, "Pattern");
    }
    if (node.superClass) {
      c(node.superClass, data, "Expression");
    }
    var i = 0;
    for (; i < node.body.body.length; i++) {
      c(node.body.body[i], data);
    }
  };
  base.MethodDefinition = base.Property = function(node, st, c) {
    if (node.computed) {
      c(node.key, st, "Expression");
    }
    c(node.value, st, "Expression");
  };
  exports.simple = run;
  exports.ancestor = create;
  exports.recursive = load;
  exports.findNodeAt = transform;
  exports.findNodeAround = remove;
  exports.findNodeAfter = initialize;
  exports.findNodeBefore = render;
  exports.make = make;
  exports.base = base;
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
});

