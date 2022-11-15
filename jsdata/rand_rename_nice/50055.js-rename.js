'use strict';
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") {
    mod(require("../../lib/codemirror"));
  } else {
    if (typeof define == "function" && define.amd) {
      define(["../../lib/codemirror"], mod);
    } else {
      mod(CodeMirror);
    }
  }
})(function(CodeMirror) {
  CodeMirror.defineMode("xquery", function() {
    function chain(stream, state, f) {
      state.tokenize = f;
      return f(stream, state);
    }
    function tokenBase(stream, state) {
      var ch = stream.next();
      var mightBeFunction = false;
      var isEQName = isEQNameAhead(stream);
      if (ch == "<") {
        if (stream.match("!--", true)) {
          return chain(stream, state, tokenXMLComment);
        }
        if (stream.match("![CDATA", false)) {
          state.tokenize = tokenComment;
          return "tag";
        }
        if (stream.match("?", false)) {
          return chain(stream, state, tokenPreProcessing);
        }
        var isclose = stream.eat("/");
        stream.eatSpace();
        var tagName = "";
        var c;
        for (; c = stream.eat(/[^\s\u00a0=<>"'\/?]/);) {
          tagName = tagName + c;
        }
        return chain(stream, state, tokenTag(tagName, isclose));
      } else {
        if (ch == "{") {
          pushStateStack(state, {
            type : "codeblock"
          });
          return null;
        } else {
          if (ch == "}") {
            popStateStack(state);
            return null;
          } else {
            if (isInXmlBlock(state)) {
              if (ch == ">") {
                return "tag";
              } else {
                if (ch == "/" && stream.eat(">")) {
                  popStateStack(state);
                  return "tag";
                } else {
                  return "variable";
                }
              }
            } else {
              if (/\d/.test(ch)) {
                stream.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/);
                return "atom";
              } else {
                if (ch === "(" && stream.eat(":")) {
                  pushStateStack(state, {
                    type : "comment"
                  });
                  return chain(stream, state, twTokenCode);
                } else {
                  if (!isEQName && (ch === '"' || ch === "'")) {
                    return chain(stream, state, tokenString(ch));
                  } else {
                    if (ch === "$") {
                      return chain(stream, state, tokenVariable);
                    } else {
                      if (ch === ":" && stream.eat("=")) {
                        return "keyword";
                      } else {
                        if (ch === "(") {
                          pushStateStack(state, {
                            type : "paren"
                          });
                          return null;
                        } else {
                          if (ch === ")") {
                            popStateStack(state);
                            return null;
                          } else {
                            if (ch === "[") {
                              pushStateStack(state, {
                                type : "bracket"
                              });
                              return null;
                            } else {
                              if (ch === "]") {
                                popStateStack(state);
                                return null;
                              } else {
                                var known = keywords.propertyIsEnumerable(ch) && keywords[ch];
                                if (isEQName && ch === '"') {
                                  for (; stream.next() !== '"';) {
                                  }
                                }
                                if (isEQName && ch === "'") {
                                  for (; stream.next() !== "'";) {
                                  }
                                }
                                if (!known) {
                                  stream.eatWhile(/[\w\$_-]/);
                                }
                                var u = stream.eat(":");
                                if (!stream.eat(":") && u) {
                                  stream.eatWhile(/[\w\$_-]/);
                                }
                                if (stream.match(/^[ \t]*\(/, false)) {
                                  mightBeFunction = true;
                                }
                                var word = stream.current();
                                known = keywords.propertyIsEnumerable(word) && keywords[word];
                                if (mightBeFunction && !known) {
                                  known = {
                                    type : "function_call",
                                    style : "variable def"
                                  };
                                }
                                if (isInXmlConstructor(state)) {
                                  popStateStack(state);
                                  return "variable";
                                }
                                if (word == "element" || word == "attribute" || known.type == "axis_specifier") {
                                  pushStateStack(state, {
                                    type : "xmlconstructor"
                                  });
                                }
                                return known ? known.style : "variable";
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
    function twTokenCode(stream, state) {
      var b = false;
      var castle_flags = false;
      var i = 0;
      var a;
      for (; a = stream.next();) {
        if (a == ")" && b) {
          if (i > 0) {
            i--;
          } else {
            popStateStack(state);
            break;
          }
        } else {
          if (a == ":" && castle_flags) {
            i++;
          }
        }
        b = a == ":";
        castle_flags = a == "(";
      }
      return "comment";
    }
    function tokenString(quote, f) {
      return function(toc, state) {
        var ch;
        if (isInString(state) && toc.current() == quote) {
          popStateStack(state);
          if (f) {
            state.tokenize = f;
          }
          return "string";
        }
        pushStateStack(state, {
          type : "string",
          name : quote,
          tokenize : tokenString(quote, f)
        });
        if (toc.match("{", false) && isInXmlAttributeBlock(state)) {
          state.tokenize = tokenBase;
          return "string";
        }
        for (; ch = toc.next();) {
          if (ch == quote) {
            popStateStack(state);
            if (f) {
              state.tokenize = f;
            }
            break;
          } else {
            if (toc.match("{", false) && isInXmlAttributeBlock(state)) {
              state.tokenize = tokenBase;
              return "string";
            }
          }
        }
        return "string";
      };
    }
    function tokenVariable(stream, state) {
      var isOperatorChar = /[\w\$_-]/;
      if (stream.eat('"')) {
        for (; stream.next() !== '"';) {
        }
        stream.eat(":");
      } else {
        stream.eatWhile(isOperatorChar);
        if (!stream.match(":=", false)) {
          stream.eat(":");
        }
      }
      stream.eatWhile(isOperatorChar);
      state.tokenize = tokenBase;
      return "variable";
    }
    function tokenTag(name, isclose) {
      return function(stream, state) {
        stream.eatSpace();
        if (isclose && stream.eat(">")) {
          popStateStack(state);
          state.tokenize = tokenBase;
          return "tag";
        }
        if (!stream.eat("/")) {
          pushStateStack(state, {
            type : "tag",
            name : name,
            tokenize : tokenBase
          });
        }
        if (!stream.eat(">")) {
          state.tokenize = tokenAttribute;
          return "tag";
        } else {
          state.tokenize = tokenBase;
        }
        return "tag";
      };
    }
    function tokenAttribute(stream, state) {
      var ch = stream.next();
      if (ch == "/" && stream.eat(">")) {
        if (isInXmlAttributeBlock(state)) {
          popStateStack(state);
        }
        if (isInXmlBlock(state)) {
          popStateStack(state);
        }
        return "tag";
      }
      if (ch == ">") {
        if (isInXmlAttributeBlock(state)) {
          popStateStack(state);
        }
        return "tag";
      }
      if (ch == "=") {
        return null;
      }
      if (ch == '"' || ch == "'") {
        return chain(stream, state, tokenString(ch, tokenAttribute));
      }
      if (!isInXmlAttributeBlock(state)) {
        pushStateStack(state, {
          type : "attribute",
          tokenize : tokenAttribute
        });
      }
      stream.eat(/[a-zA-Z_:]/);
      stream.eatWhile(/[-a-zA-Z0-9_:.]/);
      stream.eatSpace();
      if (stream.match(">", false) || stream.match("/", false)) {
        popStateStack(state);
        state.tokenize = tokenBase;
      }
      return "attribute";
    }
    function tokenXMLComment(stream, state) {
      var brace1;
      for (; brace1 = stream.next();) {
        if (brace1 == "-" && stream.match("->", true)) {
          state.tokenize = tokenBase;
          return "comment";
        }
      }
    }
    function tokenComment(stream, state) {
      var n;
      for (; n = stream.next();) {
        if (n == "]" && stream.match("]", true)) {
          state.tokenize = tokenBase;
          return "comment";
        }
      }
    }
    function tokenPreProcessing(stream, state) {
      var n;
      for (; n = stream.next();) {
        if (n == "?" && stream.match(">", true)) {
          state.tokenize = tokenBase;
          return "comment meta";
        }
      }
    }
    function isInXmlBlock(state) {
      return isIn(state, "tag");
    }
    function isInXmlAttributeBlock(state) {
      return isIn(state, "attribute");
    }
    function isInXmlConstructor(state) {
      return isIn(state, "xmlconstructor");
    }
    function isInString(state) {
      return isIn(state, "string");
    }
    function isEQNameAhead(stream) {
      if (stream.current() === '"') {
        return stream.match(/^[^"]+":/, false);
      } else {
        if (stream.current() === "'") {
          return stream.match(/^[^"]+':/, false);
        } else {
          return false;
        }
      }
    }
    function isIn(state, type) {
      return state.stack.length && state.stack[state.stack.length - 1].type == type;
    }
    function pushStateStack(state, newState) {
      state.stack.push(newState);
    }
    function popStateStack(state) {
      state.stack.pop();
      var reinstateTokenize = state.stack.length && state.stack[state.stack.length - 1].tokenize;
      state.tokenize = reinstateTokenize || tokenBase;
    }
    var keywords = function() {
      function token(type) {
        return {
          type : type,
          style : "keyword"
        };
      }
      var id = token("operator");
      var heading = {
        type : "atom",
        style : "atom"
      };
      var atom = {
        type : "punctuation",
        style : null
      };
      var res = {
        type : "axis_specifier",
        style : "qualifier"
      };
      var result = {
        "," : atom
      };
      var args = ["after", "all", "allowing", "ancestor", "ancestor-or-self", "any", "array", "as", "ascending", "at", "attribute", "base-uri", "before", "boundary-space", "by", "case", "cast", "castable", "catch", "child", "collation", "comment", "construction", "contains", "content", "context", "copy", "copy-namespaces", "count", "decimal-format", "declare", "default", "delete", "descendant", "descendant-or-self", "descending", "diacritics", "different", "distance", "document", "document-node", 
      "element", "else", "empty", "empty-sequence", "encoding", "end", "entire", "every", "exactly", "except", "external", "first", "following", "following-sibling", "for", "from", "ftand", "ftnot", "ft-option", "ftor", "function", "fuzzy", "greatest", "group", "if", "import", "in", "inherit", "insensitive", "insert", "instance", "intersect", "into", "invoke", "is", "item", "language", "last", "lax", "least", "let", "levels", "lowercase", "map", "modify", "module", "most", "namespace", "next", "no", 
      "node", "nodes", "no-inherit", "no-preserve", "not", "occurs", "of", "only", "option", "order", "ordered", "ordering", "paragraph", "paragraphs", "parent", "phrase", "preceding", "preceding-sibling", "preserve", "previous", "processing-instruction", "relationship", "rename", "replace", "return", "revalidation", "same", "satisfies", "schema", "schema-attribute", "schema-element", "score", "self", "sensitive", "sentence", "sentences", "sequence", "skip", "sliding", "some", "stable", "start", 
      "stemming", "stop", "strict", "strip", "switch", "text", "then", "thesaurus", "times", "to", "transform", "treat", "try", "tumbling", "type", "typeswitch", "union", "unordered", "update", "updating", "uppercase", "using", "validate", "value", "variable", "version", "weight", "when", "where", "wildcards", "window", "with", "without", "word", "words", "xquery"];
      var i = 0;
      var l = args.length;
      for (; i < l; i++) {
        result[args[i]] = token(args[i]);
      }
      var parents = ["xs:anyAtomicType", "xs:anySimpleType", "xs:anyType", "xs:anyURI", "xs:base64Binary", "xs:boolean", "xs:byte", "xs:date", "xs:dateTime", "xs:dateTimeStamp", "xs:dayTimeDuration", "xs:decimal", "xs:double", "xs:duration", "xs:ENTITIES", "xs:ENTITY", "xs:float", "xs:gDay", "xs:gMonth", "xs:gMonthDay", "xs:gYear", "xs:gYearMonth", "xs:hexBinary", "xs:ID", "xs:IDREF", "xs:IDREFS", "xs:int", "xs:integer", "xs:item", "xs:java", "xs:language", "xs:long", "xs:Name", "xs:NCName", "xs:negativeInteger", 
      "xs:NMTOKEN", "xs:NMTOKENS", "xs:nonNegativeInteger", "xs:nonPositiveInteger", "xs:normalizedString", "xs:NOTATION", "xs:numeric", "xs:positiveInteger", "xs:precisionDecimal", "xs:QName", "xs:short", "xs:string", "xs:time", "xs:token", "xs:unsignedByte", "xs:unsignedInt", "xs:unsignedLong", "xs:unsignedShort", "xs:untyped", "xs:untypedAtomic", "xs:yearMonthDuration"];
      i = 0;
      l = parents.length;
      for (; i < l; i++) {
        result[parents[i]] = heading;
      }
      var operators = ["eq", "ne", "lt", "le", "gt", "ge", ":=", "=", ">", ">=", "<", "<=", ".", "|", "?", "and", "or", "div", "idiv", "mod", "*", "/", "+", "-"];
      i = 0;
      l = operators.length;
      for (; i < l; i++) {
        result[operators[i]] = id;
      }
      var _properties = ["self::", "attribute::", "child::", "descendant::", "descendant-or-self::", "parent::", "ancestor::", "ancestor-or-self::", "following::", "preceding::", "following-sibling::", "preceding-sibling::"];
      i = 0;
      l = _properties.length;
      for (; i < l; i++) {
        result[_properties[i]] = res;
      }
      return result;
    }();
    return {
      startState : function() {
        return {
          tokenize : tokenBase,
          cc : [],
          stack : []
        };
      },
      token : function(stream, state) {
        if (stream.eatSpace()) {
          return null;
        }
        var style = state.tokenize(stream, state);
        return style;
      },
      blockCommentStart : "(:",
      blockCommentEnd : ":)"
    };
  });
  CodeMirror.defineMIME("application/xquery", "xquery");
});

