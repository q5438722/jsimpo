'use strict';
Object.defineProperty(exports, "__esModule", {
  value : true
});
function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
var deindent = _interopDefault(require("de-indent"));
var he = _interopDefault(require("he"));
var emptyObject = Object.freeze({});
function isUndef(o) {
  return o === undefined || o === null;
}
function isPrimitive(val) {
  return typeof val === "string" || typeof val === "number" || typeof val === "symbol" || typeof val === "boolean";
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
var _toString = Object.prototype.toString;
function toRawType(val) {
  return _toString.call(val).slice(8, -1);
}
function isPlainObject(obj) {
  return _toString.call(obj) === "[object Object]";
}
function isValidArrayIndex(val) {
  var l = parseFloat(String(val));
  return l >= 0 && Math.floor(l) === l && isFinite(val);
}
function makeMap(size, str) {
  var dec = Object.create(null);
  var s = size.split(",");
  var i = 0;
  for (; i < s.length; i++) {
    dec[s[i]] = true;
  }
  return str ? function(p_Interval) {
    return dec[p_Interval.toLowerCase()];
  } : function(value) {
    return dec[value];
  };
}
var isBuiltInTag = makeMap("slot,component", true);
var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
function remove(array, i) {
  if (array.length) {
    var removed = array.indexOf(i);
    if (removed > -1) {
      return array.splice(removed, 1);
    }
  }
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function cached(fun) {
  var funcs = Object.create(null);
  return function tween(i) {
    var iter = funcs[i];
    return iter || (funcs[i] = fun(i));
  };
}
var camelizeRE = /-(\w)/g;
var camelize = cached(function(str) {
  return str.replace(camelizeRE, function(canCreateDiscussions, t) {
    return t ? t.toUpperCase() : "";
  });
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function(str) {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }
  boundFn._length = fn.length;
  return boundFn;
}
function nativeBind(notify, t) {
  return notify.bind(t);
}
var bind = Function.prototype.bind ? nativeBind : polyfillBind;
function extend(target, arr) {
  var i;
  for (i in arr) {
    target[i] = arr[i];
  }
  return target;
}
function noop(obj, i, options) {
}
var no = function(type, index, str) {
  return false;
};
var identity = function(value) {
  return value;
};
function genStaticKeys(modules) {
  return modules.reduce(function(requestValuesAggs, m) {
    return requestValuesAggs.concat(m.staticKeys || []);
  }, []).join(",");
}
var isUnaryTag = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen," + "link,meta,param,source,track,wbr");
var canBeLeftOpenTag = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
var isNonPhrasingTag = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd," + "details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form," + "h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta," + "optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead," + "title,tr,track");
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function def(object, property, settings, options) {
  Object.defineProperty(object, property, {
    value : settings,
    enumerable : !!options,
    writable : true,
    configurable : true
  });
}
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp("^<" + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;
var isPlainTextElement = makeMap("script,style,textarea", true);
var reCache = {};
var decodingMap = {
  "&lt;" : "<",
  "&gt;" : ">",
  "&quot;" : '"',
  "&amp;" : "&",
  "&#10;" : "\n",
  "&#9;" : "\t",
  "&#39;" : "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
var isIgnoreNewlineTag = makeMap("pre,textarea", true);
var shouldIgnoreFirstNewline = function(ensure, mode) {
  return ensure && isIgnoreNewlineTag(ensure) && mode[0] === "\n";
};
function decodeAttr(value, shouldDecodeNewlines) {
  var regexVariable = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(regexVariable, function(match) {
    return decodingMap[match];
  });
}
function parseHTML(html, options) {
  function advance(n) {
    index = index + n;
    html = html.substring(n);
  }
  function parseStartTag() {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName : start[1],
        attrs : [],
        start : index
      };
      advance(start[0].length);
      var end;
      var n;
      for (; !(end = html.match(startTagClose)) && (n = html.match(dynamicArgAttribute) || html.match(attribute));) {
        n.start = index;
        advance(n[0].length);
        n.end = index;
        match.attrs.push(n);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }
  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;
    if (readOnlyFn) {
      if (lastTag === "p" && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }
    var end = isNonPhrasingTag(tagName) || !!unarySlash;
    var dataLength = match.attrs.length;
    var data = new Array(dataLength);
    var i = 0;
    for (; i < dataLength; i++) {
      var attr = match.attrs[i];
      var value = attr[3] || attr[4] || attr[5] || "";
      var value_form = tagName === "a" && attr[1] === "href" ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
      data[i] = {
        name : attr[1],
        value : decodeAttr(value, value_form),
        bool : attr[3] === undefined && attr[4] === undefined && attr[5] === undefined
      };
      if (process.env.NODE_ENV !== "production" && options.outputSourceRange) {
        data[i].start = attr.start + attr[0].match(/^\s*/).length;
        data[i].end = attr.end;
      }
    }
    if (!end) {
      stack.push({
        tag : tagName,
        lowerCasedTag : tagName.toLowerCase(),
        attrs : data,
        start : match.start,
        end : match.end
      });
      lastTag = tagName;
    }
    if (options.start) {
      options.start(tagName, data, end, match.start, match.end);
    }
  }
  function parseEndTag(tagName, start, end) {
    var pos;
    var lowerCasedTagName;
    if (start == null) {
      start = index;
    }
    if (end == null) {
      end = index;
    }
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      pos = stack.length - 1;
      for (; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      pos = 0;
    }
    if (pos >= 0) {
      var i = stack.length - 1;
      for (; i >= pos; i--) {
        if (process.env.NODE_ENV !== "production" && (i > pos || !tagName) && options.warn) {
          options.warn("tag <" + stack[i].tag + "> has no matching end tag.", {
            start : stack[i].start,
            end : stack[i].end
          });
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else {
      if (lowerCasedTagName === "br") {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else {
        if (lowerCasedTagName === "p") {
          if (options.start) {
            options.start(tagName, [], false, start, end);
          }
          if (options.end) {
            options.end(tagName, start, end);
          }
        }
      }
    }
  }
  var stack = [];
  var readOnlyFn = options.expectHTML;
  var isNonPhrasingTag = options.isUnaryTag || no;
  var canBeLeftOpenTag = options.canBeLeftOpenTag || no;
  var index = 0;
  var last;
  var lastTag;
  for (; html;) {
    last = html;
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf("<");
      if (textEnd === 0) {
        if (comment.test(html)) {
          var commentEnd = html.indexOf("--\x3e");
          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue;
          }
        }
        if (conditionalComment.test(html)) {
          var commentEnd = html.indexOf("]>");
          if (commentEnd >= 0) {
            advance(commentEnd + 2);
            continue;
          }
        }
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue;
        }
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var last = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], last, index);
          continue;
        }
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue;
        }
      }
      var text = void 0;
      var rest = void 0;
      var next = void 0;
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        for (; !endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest);) {
          next = rest.indexOf("<", 1);
          if (next < 0) {
            break;
          }
          textEnd = textEnd + next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }
      if (textEnd < 0) {
        text = html;
      }
      if (text) {
        advance(text.length);
      }
      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp("([\\s\\S]*?)(</" + stackedTag + "[^>]*>)", "i"));
      var rest = html.replace(reStackedTag, function(canCreateDiscussions, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== "noscript") {
          text = text.replace(/<!\--([\s\S]*?)--\x3e/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]\x3e/g, "$1");
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return "";
      });
      index = index + (html.length - rest.length);
      html = rest;
      parseEndTag(stackedTag, index - endTagLength, index);
    }
    if (html === last) {
      if (options.chars) {
        options.chars(html);
      }
      if (process.env.NODE_ENV !== "production" && !stack.length && options.warn) {
        options.warn('Mal-formatted tag at end of template: "' + html + '"', {
          start : index + html.length
        });
      }
      break;
    }
  }
  parseEndTag();
}
var splitRE = /\r?\n/g;
var replaceRE = /./g;
var isSpecialTag = makeMap("script,style,template", true);
var isCustomBlock = makeMap("wxs,filter,sjs,renderjs", true);
function parseComponent(data, config) {
  function t(name, state, x, n, before) {
    if (itemType === 0) {
      item = {
        type : name,
        content : "",
        start : before,
        attrs : state.reduce(function(tarJSON, _ref22) {
          var name = _ref22.name;
          var type = _ref22.value;
          tarJSON[name] = type || true;
          return tarJSON;
        }, {})
      };
      if (isSpecialTag(name) && !isCustomBlock(String(item.attrs.lang || ""))) {
        render(item, state);
        if (name === "style") {
          options.styles.push(item);
        } else {
          options[name] = item;
        }
      } else {
        options.customBlocks.push(item);
      }
    }
    if (!x) {
      itemType++;
    }
  }
  function render(item, filters) {
    var i = 0;
    for (; i < filters.length; i++) {
      var data = filters[i];
      if (data.name === "lang") {
        item.lang = data.value;
      }
      if (data.name === "scoped") {
        item.scoped = true;
      }
      if (data.name === "module") {
        item.module = data.value || true;
      }
      if (data.name === "src") {
        item.src = data.value;
      }
    }
  }
  function compile(noPrefix, callback) {
    if (itemType === 1 && item) {
      item.end = callback;
      var string = data.slice(item.start, item.end);
      if (config.deindent !== false) {
        string = deindent(string);
      }
      if (item.type !== "template" && config.pad) {
        string = parse(item, config.pad) + string;
      }
      item.content = string;
      item = null;
    }
    itemType--;
  }
  function parse(node, action) {
    if (action === "space") {
      return data.slice(0, node.start).replace(replaceRE, " ");
    } else {
      var missing = data.slice(0, node.start).split(splitRE).length;
      var caseValue = node.attrs && node.attrs.lang;
      var barChar = node.type === "script" && !node.lang && !isCustomBlock(String(caseValue || "")) ? "//\n" : "\n";
      return Array(missing).join(barChar);
    }
  }
  if (config === void 0) {
    config = {};
  }
  var options = {
    template : null,
    script : null,
    styles : [],
    customBlocks : [],
    errors : []
  };
  var itemType = 0;
  var item = null;
  var logger = function(type) {
    options.errors.push(type);
  };
  if (process.env.NODE_ENV !== "production" && config.outputSourceRange) {
    logger = function(obj, n) {
      var o = {
        msg : obj
      };
      if (n.start != null) {
        o.start = n.start;
      }
      if (n.end != null) {
        o.end = n.end;
      }
      options.errors.push(o);
    };
  }
  parseHTML(data, {
    warn : logger,
    start : t,
    end : compile,
    outputSourceRange : config.outputSourceRange
  });
  return options;
}
var validDivisionCharRE = /[\w).+\-_$\]]/;
function parseFilters(params) {
  function parseFilter() {
    (changes || (changes = [])).push(params.slice(c, i).trim());
    c = i + 1;
  }
  var t = false;
  var r = false;
  var n = false;
  var a = false;
  var index = 0;
  var o = 0;
  var s = 0;
  var c = 0;
  var status;
  var overallStatus;
  var i;
  var output;
  var changes;
  i = 0;
  for (; i < params.length; i++) {
    overallStatus = status;
    status = params.charCodeAt(i);
    if (t) {
      if (status === 39 && overallStatus !== 92) {
        t = false;
      }
    } else {
      if (r) {
        if (status === 34 && overallStatus !== 92) {
          r = false;
        }
      } else {
        if (n) {
          if (status === 96 && overallStatus !== 92) {
            n = false;
          }
        } else {
          if (a) {
            if (status === 47 && overallStatus !== 92) {
              a = false;
            }
          } else {
            if (status === 124 && params.charCodeAt(i + 1) !== 124 && params.charCodeAt(i - 1) !== 124 && !index && !o && !s) {
              if (output === undefined) {
                c = i + 1;
                output = params.slice(0, i).trim();
              } else {
                parseFilter();
              }
            } else {
              switch(status) {
                case 34:
                  r = true;
                  break;
                case 39:
                  t = true;
                  break;
                case 96:
                  n = true;
                  break;
                case 40:
                  s++;
                  break;
                case 41:
                  s--;
                  break;
                case 91:
                  o++;
                  break;
                case 93:
                  o--;
                  break;
                case 123:
                  index++;
                  break;
                case 125:
                  index--;
                  break;
              }
              if (status === 47) {
                var x = i - 1;
                var originValue = void 0;
                for (; x >= 0; x--) {
                  originValue = params.charAt(x);
                  if (originValue !== " ") {
                    break;
                  }
                }
                if (!originValue || !validDivisionCharRE.test(originValue)) {
                  a = true;
                }
              }
            }
          }
        }
      }
    }
  }
  if (output === undefined) {
    output = params.slice(0, i).trim();
  } else {
    if (c !== 0) {
      parseFilter();
    }
  }
  if (changes) {
    i = 0;
    for (; i < changes.length; i++) {
      output = wrapFilter(output, changes[i]);
    }
  }
  return output;
}
function wrapFilter(input, filter) {
  var end = filter.indexOf("(");
  if (end < 0) {
    return '_f("' + filter + '")(' + input + ")";
  } else {
    var lines = filter.slice(0, end);
    var precision = filter.slice(end + 1);
    return '_f("' + lines + '")(' + input + (precision !== ")" ? "," + precision : precision);
  }
}
var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var buildRegex = cached(function(contentsArray) {
  var _start2 = contentsArray[0].replace(regexEscapeRE, "\\$&");
  var _end2 = contentsArray[1].replace(regexEscapeRE, "\\$&");
  return new RegExp(_start2 + "((?:.|\\n)+?)" + _end2, "g");
});
function parseText(str, value) {
  var pattern = value ? buildRegex(value) : defaultTagRE;
  if (!pattern.test(str)) {
    return;
  }
  var xmlCells = [];
  var tokens = [];
  var i = pattern.lastIndex = 0;
  var temp;
  var b;
  var c;
  for (; temp = pattern.exec(str);) {
    b = temp.index;
    if (b > i) {
      tokens.push(c = str.slice(i, b));
      xmlCells.push(JSON.stringify(c));
    }
    var filter = parseFilters(temp[1].trim());
    xmlCells.push("_s(" + filter + ")");
    tokens.push({
      "@binding" : filter
    });
    i = b + temp[0].length;
  }
  if (i < str.length) {
    tokens.push(c = str.slice(i));
    xmlCells.push(JSON.stringify(c));
  }
  return {
    expression : xmlCells.join("+"),
    tokens : tokens
  };
}
function genComponentModel(data, value, expires) {
  var d = expires || {};
  var n = d.number;
  var trim = d.trim;
  var $exisintg_num = "$$v";
  var i = $exisintg_num;
  if (trim) {
    i = "(typeof " + $exisintg_num + " === 'string'" + "? " + $exisintg_num + ".trim()" + ": " + $exisintg_num + ")";
  }
  if (n) {
    i = "_n(" + i + ")";
  }
  var oldTermination = genAssignmentCode(value, i);
  data.model = {
    value : "(" + value + ")",
    expression : JSON.stringify(value),
    callback : "function (" + $exisintg_num + ") {" + oldTermination + "}"
  };
}
function genAssignmentCode(data, name) {
  var config = parseModel(data);
  if (config.key === null) {
    return data + "=" + name;
  } else {
    return "$set(" + config.exp + ", " + config.key + ", " + name + ")";
  }
}
var len;
var str;
var chr;
var index;
var expressionPos;
var expressionEndPos;
function parseModel(text) {
  text = text.trim();
  len = text.length;
  if (text.indexOf("[") < 0 || text.lastIndexOf("]") < len - 1) {
    index = text.lastIndexOf(".");
    if (index > -1) {
      return {
        exp : text.slice(0, index),
        key : '"' + text.slice(index + 1) + '"'
      };
    } else {
      return {
        exp : text,
        key : null
      };
    }
  }
  str = text;
  index = expressionPos = expressionEndPos = 0;
  for (; !eof();) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
    } else {
      if (chr === 91) {
        parseBracket(chr);
      }
    }
  }
  return {
    exp : text.slice(0, expressionPos),
    key : text.slice(expressionPos + 1, expressionEndPos)
  };
}
function next() {
  return str.charCodeAt(++index);
}
function eof() {
  return index >= len;
}
function isStringStart(chr) {
  return chr === 34 || chr === 39;
}
function parseBracket(c) {
  var t = 1;
  expressionPos = index;
  for (; !eof();) {
    c = next();
    if (isStringStart(c)) {
      parseString(c);
      continue;
    }
    if (c === 91) {
      t++;
    }
    if (c === 93) {
      t--;
    }
    if (t === 0) {
      expressionEndPos = index;
      break;
    }
  }
}
function parseString(value) {
  var fromValue = value;
  for (; !eof();) {
    value = next();
    if (value === fromValue) {
      break;
    }
  }
}
var hasProto = "__proto__" in {};
var inBrowser = typeof window !== "undefined";
var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
var isEdge = UA && UA.indexOf("edge/") > 0;
var isAndroid = UA && UA.indexOf("android") > 0 || weexPlatform === "android";
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === "ios";
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);
var nativeWatch = {}.watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, "passive", {
      get : function e() {
      }
    });
    window.addEventListener("test-passive", null, opts);
  } catch (e) {
  }
}
var _isServer;
var isServerRendering = function() {
  if (_isServer === undefined) {
    if (!inBrowser && !inWeex && typeof global !== "undefined") {
      _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function isNative(value) {
  return typeof value === "function" && /native code/.test(value.toString());
}
var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
var _Set;
if (typeof Set !== "undefined" && isNative(Set)) {
  _Set = Set;
} else {
  _Set = function() {
    function LRUCache() {
      this.set = Object.create(null);
    }
    LRUCache.prototype.has = function init(inputId) {
      return this.set[inputId] === true;
    };
    LRUCache.prototype.add = function init(inputId) {
      this.set[inputId] = true;
    };
    LRUCache.prototype.clear = function loginToBehance() {
      this.set = Object.create(null);
    };
    return LRUCache;
  }();
}
function baseWarn(propertyName, property) {
  console.error("[Vue compiler]: " + propertyName);
}
function pluckModuleFunction(p2, t) {
  return p2 ? p2.map(function(extraInjections) {
    return extraInjections[t];
  }).filter(function(canCreateDiscussions) {
    return canCreateDiscussions;
  }) : [];
}
function addProp(obj, key, name, fn, value) {
  (obj.props || (obj.props = [])).push(rangeSetItem({
    name : key,
    value : name,
    dynamic : value
  }, fn));
  obj.plain = false;
}
function addAttr(val, type, attr, key, data) {
  var columns = data ? val.dynamicAttrs || (val.dynamicAttrs = []) : val.attrs || (val.attrs = []);
  columns.push(rangeSetItem({
    name : type,
    value : attr,
    dynamic : data
  }, key));
  val.plain = false;
}
function addRawAttr(ast, name, r, sender) {
  ast.attrsMap[name] = r;
  ast.attrsList.push(rangeSetItem({
    name : name,
    value : r
  }, sender));
}
function addDirective(ast, name, value, str, params, mode, type, directive) {
  (ast.directives || (ast.directives = [])).push(rangeSetItem({
    name : name,
    rawName : value,
    value : str,
    arg : params,
    isDynamicArg : mode,
    modifiers : type
  }, directive));
  ast.plain = false;
}
function prependModifierMarker(basePath, filePath, useCargo) {
  return useCargo ? "_p(" + filePath + ',"' + basePath + '")' : basePath + filePath;
}
function addHandler(obj, type, method, options, next, action, key, e) {
  options = options || emptyObject;
  if (process.env.NODE_ENV !== "production" && action && options.prevent && options.passive) {
    action("passive and prevent can't be used together. " + "Passive handler can't prevent default event.", key);
  }
  if (options.right) {
    if (e) {
      type = "(" + type + ")==='click'?'contextmenu':(" + type + ")";
    } else {
      if (type === "click") {
        type = "contextmenu";
        delete options.right;
      }
    }
  } else {
    if (options.middle) {
      if (e) {
        type = "(" + type + ")==='click'?'mouseup':(" + type + ")";
      } else {
        if (type === "click") {
          type = "mouseup";
        }
      }
    }
  }
  if (options.capture) {
    delete options.capture;
    type = prependModifierMarker("!", type, e);
  }
  if (options.once) {
    delete options.once;
    type = prependModifierMarker("~", type, e);
  }
  if (options.passive) {
    delete options.passive;
    type = prependModifierMarker("&", type, e);
  }
  var ret;
  if (options.native) {
    delete options.native;
    ret = obj.nativeEvents || (obj.nativeEvents = {});
  } else {
    ret = obj.events || (obj.events = {});
  }
  var node = rangeSetItem({
    value : method.trim(),
    dynamic : e
  }, key);
  if (options !== emptyObject) {
    node.modifiers = options;
  }
  var list = ret[type];
  if (Array.isArray(list)) {
    if (next) {
      list.unshift(node);
    } else {
      list.push(node);
    }
  } else {
    if (list) {
      ret[type] = next ? [node, list] : [list, node];
    } else {
      ret[type] = node;
    }
  }
  obj.plain = false;
}
function getRawBindingAttr(e, i) {
  return e.rawAttrsMap[":" + i] || e.rawAttrsMap["v-bind:" + i] || e.rawAttrsMap[i];
}
function getBindingAttr(el, name, type) {
  var excludeUnavailable = getAndRemoveAttr(el, ":" + name) || getAndRemoveAttr(el, "v-bind:" + name);
  if (excludeUnavailable != null) {
    return parseFilters(excludeUnavailable);
  } else {
    if (type !== false) {
      var a = getAndRemoveAttr(el, name);
      if (a != null) {
        return JSON.stringify(a);
      }
    }
  }
}
function getAndRemoveAttr(el, name, isPk) {
  var baseProvider;
  if ((baseProvider = el.attrsMap[name]) != null) {
    var a = el.attrsList;
    var i = 0;
    var az = a.length;
    for (; i < az; i++) {
      if (a[i].name === name) {
        a.splice(i, 1);
        break;
      }
    }
  }
  if (isPk) {
    delete el.attrsMap[name];
  }
  return baseProvider;
}
function getAndRemoveAttrByRegex(el, re) {
  var r = el.attrsList;
  var h = 0;
  var w = r.length;
  for (; h < w; h++) {
    var obj = r[h];
    if (re.test(obj.name)) {
      r.splice(h, 1);
      return obj;
    }
  }
}
function rangeSetItem(result, element) {
  if (element) {
    if (element.start != null) {
      result.start = element.start;
    }
    if (element.end != null) {
      result.end = element.end;
    }
  }
  return result;
}
var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;
var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
var slotRE = /^v-slot(:|$)|^#/;
var lineBreakRE = /[\r\n]/;
var whitespaceRE = /\s+/g;
var invalidAttributeRE = /[\s"'<>\/=]/;
var decodeHTMLCached = cached(he.decode);
var emptySlotScopeToken = "_empty_";
var warn;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;
function createASTElement(type, obj, node) {
  return {
    type : 1,
    tag : type,
    attrsList : obj,
    attrsMap : makeAttrsMap(obj),
    rawAttrsMap : {},
    parent : node,
    children : []
  };
}
function parse(body, options) {
  function callback(file, k) {
    if (!r) {
      r = true;
      warn(file, k);
    }
  }
  function get(result) {
    value(result);
    if (!v && !result.processed) {
      result = processElement(result, options);
    }
    if (!queue.length && result !== node) {
      if (node.if && (result.elseif || result.else)) {
        if (process.env.NODE_ENV !== "production") {
          append(result);
        }
        addIfCondition(node, {
          exp : result.elseif,
          block : result
        });
      } else {
        if (process.env.NODE_ENV !== "production") {
          callback("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", {
            start : result.start
          });
        }
      }
    }
    if (element && !result.forbidden) {
      if (result.elseif || result.else) {
        processIfConditions(result, element);
      } else {
        if (result.slotScope) {
          var unquotedTerm = result.slotTarget || '"default"';
          (element.scopedSlots || (element.scopedSlots = {}))[unquotedTerm] = result;
        }
        element.children.push(result);
        result.parent = element;
      }
    }
    result.children = result.children.filter(function(canCreateDiscussions) {
      return !canCreateDiscussions.slotScope;
    });
    value(result);
    if (result.pre) {
      v = false;
    }
    if (platformIsPreTag(result.tag)) {
      usesBower = false;
    }
    var i = 0;
    for (; i < postTransforms.length; i++) {
      postTransforms[i](result, options);
    }
  }
  function value(n) {
    if (!usesBower) {
      var low_lim;
      for (; (low_lim = n.children[n.children.length - 1]) && low_lim.type === 3 && low_lim.text === " ";) {
        n.children.pop();
      }
    }
  }
  function append(el) {
    if (el.tag === "slot" || el.tag === "template") {
      callback("Cannot use <" + el.tag + "> as component root element because it may " + "contain multiple nodes.", {
        start : el.start
      });
    }
    if (el.attrsMap.hasOwnProperty("v-for")) {
      callback("Cannot use v-for on stateful component root element because " + "it renders multiple elements.", el.rawAttrsMap["v-for"]);
    }
  }
  warn = options.warn || baseWarn;
  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isDefined = options.isReservedTag || no;
  maybeComponent = function(ast) {
    return !!ast.component || !isDefined(ast.tag);
  };
  transforms = pluckModuleFunction(options.modules, "transformNode");
  preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
  postTransforms = pluckModuleFunction(options.modules, "postTransformNode");
  delimiters = options.delimiters;
  var queue = [];
  var $option = options.preserveWhitespace !== false;
  var version = options.whitespace;
  var node;
  var element;
  var v = false;
  var usesBower = false;
  var r = false;
  parseHTML(body, {
    warn : warn,
    expectHTML : options.expectHTML,
    isUnaryTag : options.isUnaryTag,
    canBeLeftOpenTag : options.canBeLeftOpenTag,
    shouldDecodeNewlines : options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref : options.shouldDecodeNewlinesForHref,
    shouldKeepComment : options.comments,
    outputSourceRange : options.outputSourceRange,
    start : function start(value, name, x, from, to) {
      {
        name.forEach(function(attr) {
          if (!onRE.test(attr.name) && attr.name.indexOf("v-slot") !== 0 && attr.value === "" && attr.start + attr.name.length === attr.end) {
            attr.value = true;
          }
        });
      }
      var ns = element && element.ns || platformGetTagNamespace(value);
      if (isIE && ns === "svg") {
        name = guardIESVGBug(name);
      }
      var result = createASTElement(value, name, element);
      if (ns) {
        result.ns = ns;
      }
      if (process.env.NODE_ENV !== "production") {
        if (options.outputSourceRange) {
          result.start = from;
          result.end = to;
          result.rawAttrsMap = result.attrsList.reduce(function(forms, form) {
            forms[form.name] = form;
            return forms;
          }, {});
        }
        name.forEach(function(e) {
          if (invalidAttributeRE.test(e.name)) {
            warn("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
              start : e.start + e.name.indexOf("["),
              end : e.start + e.name.length
            });
          }
        });
      }
      if (isForbiddenTag(result) && !isServerRendering()) {
        result.forbidden = true;
        if (process.env.NODE_ENV !== "production") {
          warn("Templates should only be responsible for mapping the state to the " + "UI. Avoid placing tags with side-effects in your templates, such as " + "<" + value + ">" + ", as they will not be parsed.", {
            start : result.start
          });
        }
      }
      var i = 0;
      for (; i < preTransforms.length; i++) {
        result = preTransforms[i](result, options) || result;
      }
      if (!v) {
        processPre(result);
        if (result.pre) {
          v = true;
        }
      }
      if (platformIsPreTag(result.tag)) {
        usesBower = true;
      }
      if (v) {
        processRawAttrs(result);
      } else {
        if (!result.processed) {
          processFor(result);
          processIf(result);
          processOnce(result);
        }
      }
      if (!node) {
        node = result;
        if (process.env.NODE_ENV !== "production") {
          append(node);
        }
      }
      if (!x) {
        element = result;
        queue.push(result);
      } else {
        get(result);
      }
    },
    end : function checkDecoratorArguments(name, def, value) {
      var obj = queue[queue.length - 1];
      queue.length -= 1;
      element = queue[queue.length - 1];
      if (process.env.NODE_ENV !== "production" && options.outputSourceRange) {
        obj.end = value;
      }
      get(obj);
    },
    chars : function parse(text, value, start) {
      if (!element) {
        if (process.env.NODE_ENV !== "production") {
          if (text === body) {
            callback("Component template requires a root element, rather than just text.", {
              start : value
            });
          } else {
            if (text = text.trim()) {
              callback('text "' + text + '" outside root element will be ignored.', {
                start : value
              });
            }
          }
        }
        return;
      }
      if (isIE && element.tag === "textarea" && element.attrsMap.placeholder === text) {
        return;
      }
      var a = element.children;
      if (usesBower || text.trim()) {
        text = isTextTag(element) ? text : decodeHTMLCached(text);
      } else {
        if (!a.length) {
          text = "";
        } else {
          if (version) {
            if (version === "condense") {
              text = lineBreakRE.test(text) ? "" : " ";
            } else {
              text = " ";
            }
          } else {
            text = $option ? " " : "";
          }
        }
      }
      if (text) {
        if (!usesBower && version === "condense") {
          text = text.replace(whitespaceRE, " ");
        }
        var tokens;
        var obj;
        if (!v && text !== " " && (tokens = parseText(text, delimiters))) {
          obj = {
            type : 2,
            expression : tokens.expression,
            tokens : tokens.tokens,
            text : text
          };
        } else {
          if (text !== " " || !a.length || a[a.length - 1].text !== " ") {
            obj = {
              type : 3,
              text : text
            };
          }
        }
        if (obj) {
          if (process.env.NODE_ENV !== "production" && options.outputSourceRange) {
            obj.start = value;
            obj.end = start;
          }
          a.push(obj);
        }
      }
    },
    comment : function main(object, from, callback) {
      if (element) {
        var target = {
          type : 3,
          text : object,
          isComment : true
        };
        if (process.env.NODE_ENV !== "production" && options.outputSourceRange) {
          target.start = from;
          target.end = callback;
        }
        element.children.push(target);
      }
    }
  });
  return node;
}
function processPre(el) {
  if (getAndRemoveAttr(el, "v-pre") != null) {
    el.pre = true;
  }
}
function processRawAttrs(options) {
  var texts = options.attrsList;
  var len = texts.length;
  if (len) {
    var nodes = options.attrs = new Array(len);
    var i = 0;
    for (; i < len; i++) {
      nodes[i] = {
        name : texts[i].name,
        value : JSON.stringify(texts[i].value)
      };
      if (texts[i].start != null) {
        nodes[i].start = texts[i].start;
        nodes[i].end = texts[i].end;
      }
    }
  } else {
    if (!options.pre) {
      options.plain = true;
    }
  }
}
function processElement(val, options) {
  processKey(val);
  val.plain = !val.key && !val.scopedSlots && !val.attrsList.length;
  processRef(val);
  processSlotContent(val);
  processSlotOutlet(val);
  processComponent(val);
  var i = 0;
  for (; i < transforms.length; i++) {
    val = transforms[i](val, options) || val;
  }
  processAttrs(val);
  return val;
}
function processKey(e) {
  var error = getBindingAttr(e, "key");
  if (error) {
    if (process.env.NODE_ENV !== "production") {
      if (e.tag === "template") {
        warn("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(e, "key"));
      }
      if (e.for) {
        var result = e.iterator2 || e.iterator1;
        var channel = e.parent;
        if (result && result === error && channel && channel.tag === "transition-group") {
          warn("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(e, "key"), true);
        }
      }
    }
    e.key = error;
  }
}
function processRef(el) {
  var ref = getBindingAttr(el, "ref");
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}
function processFor(el) {
  var attr;
  if (attr = getAndRemoveAttr(el, "v-for")) {
    var src = parseFor(attr);
    if (src) {
      extend(el, src);
    } else {
      if (process.env.NODE_ENV !== "production") {
        warn("Invalid v-for expression: " + attr, el.rawAttrsMap["v-for"]);
      }
    }
  }
}
function parseFor(node) {
  var termFragments = node.match(forAliasRE);
  if (!termFragments) {
    return;
  }
  var liAst = {};
  liAst.for = termFragments[2].trim();
  var layerName = termFragments[1].trim().replace(stripParensRE, "");
  var firstLines = layerName.match(forIteratorRE);
  if (firstLines) {
    liAst.alias = layerName.replace(forIteratorRE, "").trim();
    liAst.iterator1 = firstLines[1].trim();
    if (firstLines[2]) {
      liAst.iterator2 = firstLines[2].trim();
    }
  } else {
    liAst.alias = layerName;
  }
  return liAst;
}
function processIf(n) {
  var text = getAndRemoveAttr(n, "v-if");
  if (text) {
    n.if = text;
    addIfCondition(n, {
      exp : text,
      block : n
    });
  } else {
    if (getAndRemoveAttr(n, "v-else") != null) {
      n.else = true;
    }
    var text = getAndRemoveAttr(n, "v-else-if");
    if (text) {
      n.elseif = text;
    }
  }
}
function processIfConditions(result, module) {
  var options = findPrevElement(module.children);
  if (options && options.if) {
    addIfCondition(options, {
      exp : result.elseif,
      block : result
    });
  } else {
    if (process.env.NODE_ENV !== "production") {
      warn("v-" + (result.elseif ? 'else-if="' + result.elseif + '"' : "else") + " " + "used on element <" + result.tag + "> without corresponding v-if.", result.rawAttrsMap[result.elseif ? "v-else-if" : "v-else"]);
    }
  }
}
function findPrevElement(msg) {
  var i = msg.length;
  for (; i--;) {
    if (msg[i].type === 1) {
      return msg[i];
    } else {
      if (process.env.NODE_ENV !== "production" && msg[i].text !== " ") {
        warn('text "' + msg[i].text.trim() + '" between v-if and v-else(-if) ' + "will be ignored.", msg[i]);
      }
      msg.pop();
    }
  }
}
function addIfCondition(ast, module) {
  if (!ast.ifConditions) {
    ast.ifConditions = [];
  }
  ast.ifConditions.push(module);
}
function processOnce(el) {
  var classListString = getAndRemoveAttr(el, "v-once");
  if (classListString != null) {
    el.once = true;
  }
}
function processSlotContent(el) {
  var value;
  if (el.tag === "template") {
    value = getAndRemoveAttr(el, "scope");
    if (process.env.NODE_ENV !== "production" && value) {
      warn('the "scope" attribute for scoped slots have been deprecated and ' + 'replaced by "slot-scope" since 2.5. The new "slot-scope" attribute ' + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap["scope"], true);
    }
    el.slotScope = value || getAndRemoveAttr(el, "slot-scope");
  } else {
    if (value = getAndRemoveAttr(el, "slot-scope")) {
      if (process.env.NODE_ENV !== "production" && el.attrsMap["v-for"]) {
        warn("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap["slot-scope"], true);
      }
      el.slotScope = value;
    }
  }
  var val = getBindingAttr(el, "slot");
  if (val) {
    el.slotTarget = val === '""' ? '"default"' : val;
    el.slotTargetDynamic = !!(el.attrsMap[":slot"] || el.attrsMap["v-bind:slot"]);
    if (el.tag !== "template" && !el.slotScope) {
      addAttr(el, "slot", val, getRawBindingAttr(el, "slot"));
    }
  }
  {
    if (el.tag === "template") {
      var n = getAndRemoveAttrByRegex(el, slotRE);
      if (n) {
        if (process.env.NODE_ENV !== "production") {
          if (el.slotTarget || el.slotScope) {
            warn("Unexpected mixed usage of different slot syntaxes.", el);
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn("<template v-slot> can only appear at the root level inside " + "the receiving the component", el);
          }
        }
        var c = getSlotName(n);
        var b = c.name;
        var cl = c.dynamic;
        el.slotTarget = b;
        el.slotTargetDynamic = cl;
        el.slotScope = n.value || emptySlotScopeToken;
      }
    } else {
      var id = getAndRemoveAttrByRegex(el, slotRE);
      if (id) {
        if (process.env.NODE_ENV !== "production") {
          if (!maybeComponent(el)) {
            warn("v-slot can only be used on components or <template>.", id);
          }
          if (el.slotScope || el.slotTarget) {
            warn("Unexpected mixed usage of different slot syntaxes.", el);
          }
          if (el.scopedSlots) {
            warn("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", id);
          }
        }
        var _cache = el.scopedSlots || (el.scopedSlots = {});
        var entity = getSlotName(id);
        var key = entity.name;
        var path = entity.dynamic;
        var ast = _cache[key] = createASTElement("template", [], el);
        ast.slotTarget = key;
        ast.slotTargetDynamic = path;
        ast.children = el.children.filter(function(result) {
          if (!result.slotScope) {
            result.parent = ast;
            return true;
          }
        });
        ast.slotScope = id.value || emptySlotScopeToken;
        el.children = [];
        el.plain = false;
      }
    }
  }
}
function getSlotName(k) {
  var name = k.name.replace(slotRE, "");
  if (!name) {
    if (k.name[0] !== "#") {
      name = "default";
    } else {
      if (process.env.NODE_ENV !== "production") {
        warn("v-slot shorthand syntax requires a slot name.", k);
      }
    }
  }
  return dynamicArgRE.test(name) ? {
    name : name.slice(1, -1),
    dynamic : true
  } : {
    name : '"' + name + '"',
    dynamic : false
  };
}
function processSlotOutlet(el) {
  if (el.tag === "slot") {
    el.slotName = getBindingAttr(el, "name");
    if (process.env.NODE_ENV !== "production" && el.key) {
      warn("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, "key"));
    }
  }
}
function processComponent(el) {
  var instance;
  if (instance = getBindingAttr(el, "is")) {
    el.component = instance;
  }
  if (getAndRemoveAttr(el, "inline-template") != null) {
    el.inlineTemplate = true;
  }
}
function processAttrs(el) {
  var actual = el.attrsList;
  var j;
  var m;
  var name;
  var address;
  var value;
  var o;
  var resize;
  var val;
  j = 0;
  m = actual.length;
  for (; j < m; j++) {
    name = address = actual[j].name;
    value = actual[j].value;
    if (dirRE.test(name)) {
      el.hasBindings = true;
      o = parseModifiers(name.replace(dirRE, ""));
      if (o) {
        name = name.replace(modifierRE, "");
      }
      if (bindRE.test(name)) {
        name = name.replace(bindRE, "");
        value = parseFilters(value);
        val = dynamicArgRE.test(name);
        if (val) {
          name = name.slice(1, -1);
        }
        if (process.env.NODE_ENV !== "production" && value.trim().length === 0) {
          warn('The value for a v-bind expression cannot be empty. Found in "v-bind:' + name + '"');
        }
        if (o) {
          if (o.prop && !val) {
            name = camelize(name);
            if (name === "innerHtml") {
              name = "innerHTML";
            }
          }
          if (o.camel && !val) {
            name = camelize(name);
          }
          if (o.sync) {
            resize = genAssignmentCode(value, "$event");
            if (!val) {
              addHandler(el, "update:" + camelize(name), resize, null, false, warn, actual[j]);
              if (hyphenate(name) !== camelize(name)) {
                addHandler(el, "update:" + hyphenate(name), resize, null, false, warn, actual[j]);
              }
            } else {
              addHandler(el, '"update:"+(' + name + ")", resize, null, false, warn, actual[j], true);
            }
          }
        }
        if (o && o.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value, actual[j], val);
        } else {
          addAttr(el, name, value, actual[j], val);
        }
      } else {
        if (onRE.test(name)) {
          name = name.replace(onRE, "");
          val = dynamicArgRE.test(name);
          if (val) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, o, false, warn, actual[j], val);
        } else {
          name = name.replace(dirRE, "");
          var f = name.match(argRE);
          var a = f && f[1];
          val = false;
          if (a) {
            name = name.slice(0, -(a.length + 1));
            if (dynamicArgRE.test(a)) {
              a = a.slice(1, -1);
              val = true;
            }
          }
          addDirective(el, name, address, value, a, val, o, actual[j]);
          if (process.env.NODE_ENV !== "production" && name === "model") {
            checkForAliasModel(el, value);
          }
        }
      }
    } else {
      if (process.env.NODE_ENV !== "production") {
        var parts = parseText(value, delimiters);
        if (parts) {
          warn(name + '="' + value + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div id="{{ val }}">, use <div :id="val">.', actual[j]);
        }
      }
      addAttr(el, name, JSON.stringify(value), actual[j]);
      if (!el.component && name === "muted" && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, "true", actual[j]);
      }
    }
  }
}
function checkInFor(srcNode) {
  var node = srcNode;
  for (; node;) {
    if (node.for !== undefined) {
      return true;
    }
    node = node.parent;
  }
  return false;
}
function parseModifiers(name) {
  var match = name.match(modifierRE);
  if (match) {
    var res = {};
    match.forEach(function(headerPlusSegments) {
      res[headerPlusSegments.slice(1)] = true;
    });
    return res;
  }
}
function makeAttrsMap(result) {
  var mapAttrs = {};
  var j = 0;
  var n = result.length;
  for (; j < n; j++) {
    if (process.env.NODE_ENV !== "production" && mapAttrs[result[j].name] && !isIE && !isEdge) {
      warn("duplicate attribute: " + result[j].name, result[j]);
    }
    mapAttrs[result[j].name] = result[j].value;
  }
  return mapAttrs;
}
function isTextTag(item) {
  return item.tag === "script" || item.tag === "style";
}
function isForbiddenTag(child) {
  return child.tag === "style" || child.tag === "script" && (!child.attrsMap.type || child.attrsMap.type === "text/javascript");
}
var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;
function guardIESVGBug(now) {
  var colorDist = [];
  var i = 0;
  for (; i < now.length; i++) {
    var n = now[i];
    if (!ieNSBug.test(n.name)) {
      n.name = n.name.replace(ieNSPrefix, "");
      colorDist.push(n);
    }
  }
  return colorDist;
}
function checkForAliasModel(s, key) {
  var file = s;
  for (; file;) {
    if (file.for && file.alias === key) {
      warn("<" + s.tag + ' v-model="' + key + '">: ' + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", s.rawAttrsMap["v-model"]);
    }
    file = file.parent;
  }
}
var isStaticKey;
var isPlatformReservedTag;
var genStaticKeysCached = cached(genStaticKeys$1);
function optimize(tree, options) {
  if (!tree) {
    return;
  }
  isStaticKey = genStaticKeysCached(options.staticKeys || "");
  isPlatformReservedTag = options.isReservedTag || no;
  markStatic(tree);
  markStaticRoots(tree, false);
}
function genStaticKeys$1(static_id) {
  return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (static_id ? "," + static_id : ""));
}
function markStatic(ast) {
  ast.static = isStatic(ast);
  if (ast.type === 1) {
    if (!isPlatformReservedTag(ast.tag) && ast.tag !== "slot" && ast.attrsMap["inline-template"] == null) {
      return;
    }
    var i = 0;
    var patchLen = ast.children.length;
    for (; i < patchLen; i++) {
      var e = ast.children[i];
      markStatic(e);
      if (!e.static) {
        ast.static = false;
      }
    }
    if (ast.ifConditions) {
      var n = 1;
      var numberOfFrustums = ast.ifConditions.length;
      for (; n < numberOfFrustums; n++) {
        var node = ast.ifConditions[n].block;
        markStatic(node);
        if (!node.static) {
          ast.static = false;
        }
      }
    }
  }
}
function markStaticRoots(options, data) {
  if (options.type === 1) {
    if (options.static || options.once) {
      options.staticInFor = data;
    }
    if (options.static && options.children.length && !(options.children.length === 1 && options.children[0].type === 3)) {
      options.staticRoot = true;
      return;
    } else {
      options.staticRoot = false;
    }
    if (options.children) {
      var j = 0;
      var imagesLen = options.children.length;
      for (; j < imagesLen; j++) {
        markStaticRoots(options.children[j], data || !!options.for);
      }
    }
    if (options.ifConditions) {
      var n = 1;
      var numberOfFrustums = options.ifConditions.length;
      for (; n < numberOfFrustums; n++) {
        markStaticRoots(options.ifConditions[n].block, data);
      }
    }
  }
}
function isStatic(options) {
  if (options.type === 2) {
    return false;
  }
  if (options.type === 3) {
    return true;
  }
  return !!(options.pre || !options.hasBindings && !options.if && !options.for && !isBuiltInTag(options.tag) && isPlatformReservedTag(options.tag) && !isDirectChildOfTemplateFor(options) && Object.keys(options).every(isStaticKey));
}
function isDirectChildOfTemplateFor(n) {
  for (; n.parent;) {
    n = n.parent;
    if (n.tag !== "template") {
      return false;
    }
    if (n.for) {
      return true;
    }
  }
  return false;
}
var acorn = require("acorn");
var walk = require("acorn/dist/walk");
var escodegen = require("escodegen");
var functionCallRE = /^\s*([A-Za-z_$0-9\['\."\]]+)*\s*\(\s*(([A-Za-z_$0-9\['\."\]]+)?(\s*,\s*([A-Za-z_$0-9\['\."\]]+))*)\s*\)$/;
function nodeToBinding(node) {
  switch(node.type) {
    case "Literal":
      return node.value;
    case "Identifier":
    case "UnaryExpression":
    case "BinaryExpression":
    case "LogicalExpression":
    case "ConditionalExpression":
    case "MemberExpression":
      return {
        "@binding" : escodegen.generate(node)
      };
    case "ArrayExpression":
      return node.elements.map(function(inmediate_node) {
        return nodeToBinding(inmediate_node);
      });
    case "ObjectExpression":
      {
        var fbSubscribeEventFunctions = {};
        node.properties.forEach(function(result) {
          if (!result.key || result.key.type !== "Identifier") {
            return;
          }
          var name = escodegen.generate(result.key);
          var callback = nodeToBinding(result.value);
          if (name && callback) {
            fbSubscribeEventFunctions[name] = callback;
          }
        });
        return fbSubscribeEventFunctions;
      }
    default:
      {
        return "";
      }
  }
}
function generateBinding(type) {
  if (type && typeof type === "string") {
    var ast = null;
    try {
      ast = acorn.parse("(" + type + ")");
    } catch (e) {
      return "";
    }
    var rr = "";
    walk.simple(ast, {
      Expression : function e3Ticks(hash) {
        rr = nodeToBinding(hash);
      }
    });
    return rr;
  }
}
var transpile = require("vue-template-es2015-compiler");
function genWeexHandlerWithParams(ride_id) {
  var capture = functionCallRE.exec(ride_id);
  if (!capture) {
    return "";
  }
  var text = capture[1];
  var a = capture[2].split(/\s*,\s*/);
  var navLinksArr = a.filter(function(e) {
    return simplePathRE.test(e) && e !== "$event";
  });
  var train1or = navLinksArr.map(function(type) {
    return generateBinding(type);
  });
  var locals = navLinksArr.map(function(frame, canCreateDiscussions) {
    var modPath = "$$_" + (canCreateDiscussions + 1);
    var i = 0;
    for (; i < a.length; ++i) {
      if (a[i] === frame) {
        a[i] = modPath;
      }
    }
    return modPath;
  });
  locals.push("$event");
  return "{\n    handler: function (" + locals.join(",") + ") {\n      " + text + "(" + a.join(",") + ");\n    },\n    params:" + JSON.stringify(train1or) + "\n  }";
}
function genWeexHandler(options, emitter) {
  var result = options.value;
  var cons = simplePathRE.test(result);
  var console = fnExpRE.test(result);
  var resultCmp = functionCallRE.test(result);
  if (emitter.recyclable) {
    if (cons) {
      return "function($event){this." + result + "()}";
    }
    if (console && emitter.warn) {
      emitter.warn("Function expression is not supported in recyclable components: " + result + ".");
    }
    if (resultCmp) {
      return "function($event){this." + result + "}";
    }
    result = transpile("with(this){" + result + "}", {
      transforms : {
        stripWith : true
      }
    });
  }
  if (cons || console) {
    return result;
  }
  if (options.params) {
    return genWeexHandlerWithParams(options.value);
  }
  return "function($event){" + result + "}";
}
var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
function genHandlers(geometries, properties, value) {
  var property = properties ? "nativeOn:" : "on:";
  var value = "";
  var body = "";
  var key;
  for (key in geometries) {
    var primitive = genHandler(geometries[key], value);
    if (geometries[key] && geometries[key].dynamic) {
      body = body + (key + "," + primitive + ",");
    } else {
      value = value + ('"' + key + '":' + primitive + ",");
    }
  }
  value = "{" + value.slice(0, -1) + "}";
  if (body) {
    return property + "_d(" + value + ",[" + body.slice(0, -1) + "])";
  } else {
    return property + value;
  }
}
function genHandler(data, type) {
  if (!data) {
    return "function(){}";
  }
  if (Array.isArray(data)) {
    return "[" + data.map(function(email) {
      return genHandler(email, type);
    }).join(",") + "]";
  }
  var r = simplePathRE.test(data.value);
  var n = fnExpRE.test(data.value);
  var a = simplePathRE.test(data.value.replace(fnInvokeRE, ""));
  {
    return genWeexHandler(data, type);
  }
}
var ASSET_TYPES = ["component", "directive", "filter"];
var LIFECYCLE_HOOKS = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"];
var config = {
  optionMergeStrategies : Object.create(null),
  silent : false,
  productionTip : process.env.NODE_ENV !== "production",
  devtools : process.env.NODE_ENV !== "production",
  performance : false,
  errorHandler : null,
  warnHandler : null,
  ignoredElements : [],
  keyCodes : Object.create(null),
  isReservedTag : no,
  isReservedAttr : no,
  isUnknownElement : no,
  getTagNamespace : noop,
  parsePlatformTagName : identity,
  mustUseProp : no,
  async : true,
  _lifecycleHooks : LIFECYCLE_HOOKS
};
var warn$1 = noop;
var tip = noop;
var generateComponentTrace = noop;
var formatComponentName = noop;
if (process.env.NODE_ENV !== "production") {
  var hasConsole = typeof console !== "undefined";
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function(str) {
    return str.replace(classifyRE, function(shortMonthName) {
      return shortMonthName.toUpperCase();
    }).replace(/[-_]/g, "");
  };
  warn$1 = function(type, key) {
    var url = key ? generateComponentTrace(key) : "";
    if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + type + url);
    }
  };
  tip = function(type, message) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + type + (message ? generateComponentTrace(message) : ""));
    }
  };
  formatComponentName = function(obj, property) {
    if (obj.$root === obj) {
      return "<Root>";
    }
    var self = typeof obj === "function" && obj.cid != null ? obj.options : obj._isVue ? obj.$options || obj.constructor.options : obj;
    var name = self.name || self._componentTag;
    var file = self.__file;
    if (!name && file) {
      var matches = file.match(/([^/\\]+)\.vue$/);
      name = matches && matches[1];
    }
    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && property !== false ? " at " + file : "");
  };
  var repeat = function(str, times) {
    var newStr = "";
    for (; times;) {
      if (times % 2 === 1) {
        newStr = newStr + str;
      }
      if (times > 1) {
        str = str + str;
      }
      times = times >> 1;
    }
    return newStr;
  };
  generateComponentTrace = function(object) {
    if (object._isVue && object.$parent) {
      var hash = [];
      var lastChild = 0;
      for (; object;) {
        if (hash.length > 0) {
          var item = hash[hash.length - 1];
          if (item.constructor === object.constructor) {
            lastChild++;
            object = object.$parent;
            continue;
          } else {
            if (lastChild > 0) {
              hash[hash.length - 1] = [item, lastChild];
              lastChild = 0;
            }
          }
        }
        hash.push(object);
        object = object.$parent;
      }
      return "\n\nfound in\n\n" + hash.map(function(vm, canCreateDiscussions) {
        return "" + (canCreateDiscussions === 0 ? "---\x3e " : repeat(" ", 5 + canCreateDiscussions * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join("\n");
    } else {
      return "\n\n(found in " + formatComponentName(object) + ")";
    }
  };
}
var uid = 0;
var Dep = function Socket() {
  if (typeof SharedObject !== "undefined") {
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};
Dep.prototype.addSub = function loopTreeData(data) {
  this.subs.push(data);
};
Dep.prototype.removeSub = function e(n) {
  remove(this.subs, n);
};
Dep.prototype.depend = function depend() {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};
Dep.prototype.notify = function initialize() {
  var decorations = this.subs.slice();
  if (process.env.NODE_ENV !== "production" && !config.async) {
    decorations.sort(function(a, b) {
      return a.id - b.id;
    });
  }
  var i = 0;
  var nDecorations = decorations.length;
  for (; i < nDecorations; i++) {
    decorations[i].update();
  }
};
Dep.SharedObject = typeof SharedObject !== "undefined" ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];
var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, array) {
  {
    if (data && Array.isArray(data.class)) {
      data.class = data.class.slice(0);
    }
  }
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = array;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};
var prototypeAccessors = {
  child : {
    configurable : true
  }
};
prototypeAccessors.child.get = function() {
  return this.componentInstance;
};
Object.defineProperties(VNode.prototype, prototypeAccessors);
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
methodsToPatch.forEach(function(method) {
  var func = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var a = [];
    var i = arguments.length;
    for (; i--;) {
      a[i] = arguments[i];
    }
    var l = func.apply(this, a);
    var ob = this.__ob__;
    var val;
    switch(method) {
      case "push":
      case "unshift":
        val = a;
        break;
      case "splice":
        val = a.slice(2);
        break;
    }
    if (val) {
      ob.observeArray(val);
    }
    ob.dep.notify();
    return l;
  });
});
var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
var shouldObserve = true;
var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep;
  this.vmCount = 0;
  def(value, "__ob__", this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
Observer.prototype.walk = function loop(obj) {
  var keys = Object.keys(obj);
  var i = 0;
  for (; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
Observer.prototype.observeArray = function treatMultiplePaste(items) {
  var i = 0;
  var items_length = items.length;
  for (; i < items_length; i++) {
    observe(items[i]);
  }
};
function protoAugment(target, src) {
  target.__proto__ = src;
}
function copyAugment(target, src, keys) {
  var i = 0;
  var l = keys.length;
  for (; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
function observe(value, type) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  var ob;
  if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else {
    if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
  }
  if (type && ob) {
    ob.vmCount++;
  }
  return ob;
}
function defineReactive$$1(obj, key, val, customSetter, _noMismatch) {
  var dep = new Dep;
  var descriptor = Object.getOwnPropertyDescriptor(obj, key);
  if (descriptor && descriptor.configurable === false) {
    return;
  }
  var getter = descriptor && descriptor.get;
  var setter = descriptor && descriptor.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }
  var self = !_noMismatch && observe(val);
  Object.defineProperty(obj, key, {
    enumerable : true,
    configurable : true,
    get : function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) {
        dep.depend();
        if (self) {
          self.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set : function reactiveSetter(newValue) {
      var oldValue = getter ? getter.call(obj) : val;
      if (newValue === oldValue || newValue !== newValue && oldValue !== oldValue) {
        return;
      }
      if (process.env.NODE_ENV !== "production" && customSetter) {
        customSetter();
      }
      if (getter && !setter) {
        return;
      }
      if (setter) {
        setter.call(obj, newValue);
      } else {
        val = newValue;
      }
      self = !_noMismatch && observe(newValue);
      dep.notify();
    }
  });
}
function set(obj, key, val) {
  if (process.env.NODE_ENV !== "production" && (isUndef(obj) || isPrimitive(obj))) {
    warn$1("Cannot set reactive property on undefined, null, or primitive value: " + obj);
  }
  if (Array.isArray(obj) && isValidArrayIndex(key)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val;
  }
  if (key in obj && !(key in Object.prototype)) {
    obj[key] = val;
    return val;
  }
  var ob = obj.__ob__;
  if (obj._isVue || ob && ob.vmCount) {
    if (process.env.NODE_ENV !== "production") {
      warn$1("Avoid adding reactive properties to a Vue instance or its root $data " + "at runtime - declare it upfront in the data option.");
    }
    return val;
  }
  if (!ob) {
    obj[key] = val;
    return val;
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
function dependArray(value) {
  var e = void 0;
  var j = 0;
  var valueLength = value.length;
  for (; j < valueLength; j++) {
    e = value[j];
    if (e && e.__ob__) {
      e.__ob__.dep.depend();
    }
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
var strats = config.optionMergeStrategies;
if (process.env.NODE_ENV !== "production") {
  strats.el = strats.propsData = function(parent, child, vm, key) {
    if (!vm) {
      warn$1('option "' + key + '" can only be used during instance ' + "creation with the `new` keyword.");
    }
    return defaultStrat(parent, child);
  };
}
function mergeData(data, obj) {
  if (!obj) {
    return data;
  }
  var key;
  var o;
  var name;
  var relevantExtensionKeys = hasSymbol ? Reflect.ownKeys(obj) : Object.keys(obj);
  var i = 0;
  for (; i < relevantExtensionKeys.length; i++) {
    key = relevantExtensionKeys[i];
    if (key === "__ob__") {
      continue;
    }
    o = data[key];
    name = obj[key];
    if (!hasOwn(data, key)) {
      set(data, key, name);
    } else {
      if (o !== name && isPlainObject(o) && isPlainObject(name)) {
        mergeData(o, name);
      }
    }
  }
  return data;
}
function mergeDataOrFn(base, value, i) {
  if (!i) {
    if (!value) {
      return base;
    }
    if (!base) {
      return value;
    }
    return function mergedInstanceDataFn() {
      return mergeData(typeof value === "function" ? value.call(this, this) : value, typeof base === "function" ? base.call(this, this) : base);
    };
  } else {
    return function mergedInstanceDataFn() {
      var data = typeof value === "function" ? value.call(i, i) : value;
      var proto = typeof base === "function" ? base.call(i, i) : base;
      if (data) {
        return mergeData(data, proto);
      } else {
        return proto;
      }
    };
  }
}
strats.data = function(result, value, m) {
  if (!m) {
    if (value && typeof value !== "function") {
      if (process.env.NODE_ENV !== "production") {
        warn$1('The "data" option should be a function ' + "that returns a per-instance value in component " + "definitions.", m);
      }
      return result;
    }
    return mergeDataOrFn(result, value);
  }
  return mergeDataOrFn(result, value, m);
};
function mergeHook(parentVal, childVal) {
  var t = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return t ? dedupeHooks(t) : t;
}
function dedupeHooks(result) {
  var ret = [];
  var i = 0;
  for (; i < result.length; i++) {
    if (ret.indexOf(result[i]) === -1) {
      ret.push(result[i]);
    }
  }
  return ret;
}
LIFECYCLE_HOOKS.forEach(function(hook) {
  strats[hook] = mergeHook;
});
function mergeAssets(parentVal, childVal, vm, callVal) {
  var a = Object.create(parentVal || null);
  if (childVal) {
    if (process.env.NODE_ENV !== "production") {
      assertObjectType(callVal, childVal, vm);
    }
    return extend(a, childVal);
  } else {
    return a;
  }
}
ASSET_TYPES.forEach(function(type) {
  strats[type + "s"] = mergeAssets;
});
strats.watch = function(params, item, level, exp) {
  if (params === nativeWatch) {
    params = undefined;
  }
  if (item === nativeWatch) {
    item = undefined;
  }
  if (!item) {
    return Object.create(params || null);
  }
  if (process.env.NODE_ENV !== "production") {
    assertObjectType(exp, item, level);
  }
  if (!params) {
    return item;
  }
  var result = {};
  extend(result, params);
  var i;
  for (i in item) {
    var value = result[i];
    var element = item[i];
    if (value && !Array.isArray(value)) {
      value = [value];
    }
    result[i] = value ? value.concat(element) : Array.isArray(element) ? element : [element];
  }
  return result;
};
strats.props = strats.methods = strats.inject = strats.computed = function(target, value, opts, val) {
  if (value && process.env.NODE_ENV !== "production") {
    assertObjectType(val, value, opts);
  }
  if (!target) {
    return value;
  }
  var result = Object.create(null);
  extend(result, target);
  if (value) {
    extend(result, value);
  }
  return result;
};
strats.provide = mergeDataOrFn;
var defaultStrat = function(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
function assertObjectType(val, x, arr) {
  if (!isPlainObject(x)) {
    warn$1('Invalid value for option "' + val + '": expected an Object, ' + "but got " + toRawType(x) + ".", arr);
  }
}
function on(data, options) {
  if (process.env.NODE_ENV !== "production" && options.modifiers) {
    warn$1("v-on without argument does not support modifiers.");
  }
  data.wrapListeners = function(aNetChannelMessage) {
    return "_g(" + aNetChannelMessage + "," + options.value + ")";
  };
}
function bind$1(targets, options) {
  targets.wrapData = function(data) {
    return "_b(" + data + ",'" + targets.tag + "'," + options.value + "," + (options.modifiers && options.modifiers.prop ? "true" : "false") + (options.modifiers && options.modifiers.sync ? ",true" : "") + ")";
  };
}
var baseDirectives = {
  on : on,
  bind : bind$1,
  cloak : noop
};
var CodegenState = function init(options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, "transformCode");
  this.dataGenFns = pluckModuleFunction(options.modules, "genData");
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var supported = options.isReservedTag || no;
  this.maybeComponent = function(options) {
    return !!options.component || !supported(options.tag);
  };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};
function generate(obj, url) {
  var options = new CodegenState(url);
  var array = obj ? genElement(obj, options) : '_c("div")';
  return {
    render : "with(this){return " + array + "}",
    staticRenderFns : options.staticRenderFns
  };
}
function genElement(options, data) {
  if (options.parent) {
    options.pre = options.pre || options.parent.pre;
  }
  if (options.staticRoot && !options.staticProcessed) {
    return genStatic(options, data);
  } else {
    if (options.once && !options.onceProcessed) {
      return genOnce(options, data);
    } else {
      if (options.for && !options.forProcessed) {
        return genFor(options, data);
      } else {
        if (options.if && !options.ifProcessed) {
          return genIf(options, data);
        } else {
          if (options.tag === "template" && !options.slotTarget && !data.pre) {
            return genChildren(options, data) || "void 0";
          } else {
            if (options.tag === "slot") {
              return genSlot(options, data);
            } else {
              var result;
              if (options.component) {
                result = genComponent(options.component, options, data);
              } else {
                var status;
                if (!options.plain || options.pre && data.maybeComponent(options)) {
                  status = genData(options, data);
                }
                var mixElem = options.inlineTemplate ? null : genChildren(options, data, true);
                result = "_c('" + options.tag + "'" + (status ? "," + status : "") + (mixElem ? "," + mixElem : "") + ")";
              }
              var i = 0;
              for (; i < data.transforms.length; i++) {
                result = data.transforms[i](options, result);
              }
              return result;
            }
          }
        }
      }
    }
  }
}
function genStatic(cache, options) {
  cache.staticProcessed = true;
  var pre = options.pre;
  if (cache.pre) {
    options.pre = cache.pre;
  }
  options.staticRenderFns.push("with(this){return " + genElement(cache, options) + "}");
  options.pre = pre;
  return "_m(" + (options.staticRenderFns.length - 1) + (cache.staticInFor ? ",true" : "") + ")";
}
function genOnce(obj, a) {
  obj.onceProcessed = true;
  if (obj.if && !obj.ifProcessed) {
    return genIf(obj, a);
  } else {
    if (obj.staticInFor) {
      var body = "";
      var n = obj.parent;
      for (; n;) {
        if (n.for) {
          body = n.key;
          break;
        }
        n = n.parent;
      }
      if (!body) {
        if (process.env.NODE_ENV !== "production") {
          a.warn("v-once can only be used inside v-for that is keyed. ", obj.rawAttrsMap["v-once"]);
        }
        return genElement(obj, a);
      }
      return "_o(" + genElement(obj, a) + "," + a.onceId++ + "," + body + ")";
    } else {
      return genStatic(obj, a);
    }
  }
}
function genIf(ast, text, headers, name) {
  ast.ifProcessed = true;
  return genIfConditions(ast.ifConditions.slice(), text, headers, name);
}
function genIfConditions(args, body, cb, num) {
  function read(options) {
    return cb ? cb(options, body) : options.once ? genOnce(options, body) : genElement(options, body);
  }
  if (!args.length) {
    return num || "_e()";
  }
  var fn = args.shift();
  if (fn.exp) {
    return "(" + fn.exp + ")?" + read(fn.block) + ":" + genIfConditions(args, body, cb, num);
  } else {
    return "" + read(fn.block);
  }
}
function genFor(n, code, fn, macro_context) {
  var Symbol_for = n.for;
  var a = n.alias;
  var b = n.iterator1 ? "," + n.iterator1 : "";
  var name = n.iterator2 ? "," + n.iterator2 : "";
  if (process.env.NODE_ENV !== "production" && code.maybeComponent(n) && n.tag !== "slot" && n.tag !== "template" && !n.key) {
    code.warn("<" + n.tag + ' v-for="' + a + " in " + Symbol_for + '">: component lists rendered with ' + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", n.rawAttrsMap["v-for"], true);
  }
  n.forProcessed = true;
  return (macro_context || "_l") + "((" + Symbol_for + ")," + "function(" + a + b + name + "){" + "return " + (fn || genElement)(n, code) + "})";
}
function genData(node, el) {
  var data = "{";
  var i = genDirectives(node, el);
  if (i) {
    data = data + (i + ",");
  }
  if (node.key) {
    data = data + ("key:" + node.key + ",");
  }
  if (node.ref) {
    data = data + ("ref:" + node.ref + ",");
  }
  if (node.refInFor) {
    data = data + "refInFor:true,";
  }
  if (node.pre) {
    data = data + "pre:true,";
  }
  if (node.component) {
    data = data + ('tag:"' + node.tag + '",');
  }
  var a = 0;
  for (; a < el.dataGenFns.length; a++) {
    data = data + el.dataGenFns[a](node);
  }
  if (node.attrs) {
    data = data + ("attrs:" + genProps(node.attrs) + ",");
  }
  if (node.props) {
    data = data + ("domProps:" + genProps(node.props) + ",");
  }
  if (node.events) {
    data = data + (genHandlers(node.events, false, el.options) + ",");
  }
  if (node.nativeEvents) {
    data = data + (genHandlers(node.nativeEvents, true, el.options) + ",");
  }
  if (node.slotTarget && !node.slotScope) {
    data = data + ("slot:" + node.slotTarget + ",");
  }
  if (node.scopedSlots) {
    data = data + (genScopedSlots(node, node.scopedSlots, el) + ",");
  }
  if (node.model) {
    data = data + ("model:{value:" + node.model.value + ",callback:" + node.model.callback + ",expression:" + node.model.expression + "},");
  }
  if (node.inlineTemplate) {
    var i = genInlineTemplate(node, el);
    if (i) {
      data = data + (i + ",");
    }
  }
  data = data.replace(/,$/, "") + "}";
  if (node.dynamicAttrs) {
    data = "_b(" + data + ',"' + node.tag + '",' + genProps(node.dynamicAttrs) + ")";
  }
  if (node.wrapData) {
    data = node.wrapData(data);
  }
  if (node.wrapListeners) {
    data = node.wrapListeners(data);
  }
  return data;
}
function genDirectives(options, result) {
  var targets = options.directives;
  if (!targets) {
    return;
  }
  var s = "directives:[";
  var a = false;
  var i;
  var ln;
  var node;
  var c;
  i = 0;
  ln = targets.length;
  for (; i < ln; i++) {
    node = targets[i];
    c = true;
    var formatter = result.directives[node.name];
    if (formatter) {
      c = !!formatter(options, node, result.warn);
    }
    if (c) {
      a = true;
      s = s + ('{name:"' + node.name + '",rawName:"' + node.rawName + '"' + (node.value ? ",value:(" + node.value + "),expression:" + JSON.stringify(node.value) : "") + (node.arg ? ",arg:" + (node.isDynamicArg ? node.arg : '"' + node.arg + '"') : "") + (node.modifiers ? ",modifiers:" + JSON.stringify(node.modifiers) : "") + "},");
    }
  }
  if (a) {
    return s.slice(0, -1) + "]";
  }
}
function genInlineTemplate(ast, file) {
  var value = ast.children[0];
  if (process.env.NODE_ENV !== "production" && (ast.children.length !== 1 || value.type !== 1)) {
    file.warn("Inline-template components must have exactly one child element.", {
      start : ast.start
    });
  }
  if (value && value.type === 1) {
    var result = generate(value, file.options);
    return "inlineTemplate:{render:function(){" + result.render + "},staticRenderFns:[" + result.staticRenderFns.map(function(canCreateDiscussions) {
      return "function(){" + canCreateDiscussions + "}";
    }).join(",") + "]}";
  }
}
function genScopedSlots(v, data, element) {
  var palette_disabled = v.for || Object.keys(data).some(function(id) {
    var n = data[id];
    return n.slotTargetDynamic || n.if || n.for || containsSlotChild(n);
  });
  var color_palette = !!v.if;
  if (!palette_disabled) {
    var n = v.parent;
    for (; n;) {
      if (n.slotScope && n.slotScope !== emptySlotScopeToken || n.for) {
        palette_disabled = true;
        break;
      }
      if (n.if) {
        color_palette = true;
      }
      n = n.parent;
    }
  }
  var promises = Object.keys(data).map(function(unbracketed) {
    return genScopedSlot(data[unbracketed], element);
  }).join(",");
  return "scopedSlots:_u([" + promises + "]" + (palette_disabled ? ",null,true" : "") + (!palette_disabled && color_palette ? ",null,false," + hash(promises) : "") + ")";
}
function hash(value) {
  var t = 5381;
  var i = value.length;
  for (; i;) {
    t = t * 33 ^ value.charCodeAt(--i);
  }
  return t >>> 0;
}
function containsSlotChild(n) {
  if (n.type === 1) {
    if (n.tag === "slot") {
      return true;
    }
    return n.children.some(containsSlotChild);
  }
  return false;
}
function genScopedSlot(n, data) {
  var drawHidden = n.attrsMap["slot-scope"];
  if (n.if && !n.ifProcessed && !drawHidden) {
    return genIf(n, data, genScopedSlot, "null");
  }
  if (n.for && !n.forProcessed) {
    return genFor(n, data, genScopedSlot);
  }
  var root = n.slotScope === emptySlotScopeToken ? "" : String(n.slotScope);
  var compare_acorn_es6 = "function(" + root + "){" + "return " + (n.tag === "template" ? n.if && drawHidden ? "(" + n.if + ")?" + (genChildren(n, data) || "undefined") + ":undefined" : genChildren(n, data) || "undefined" : genElement(n, data)) + "}";
  var file = root ? "" : ",proxy:true";
  return "{key:" + (n.slotTarget || '"default"') + ",fn:" + compare_acorn_es6 + file + "}";
}
function genChildren(obj, value, children, key, join) {
  var nodes = obj.children;
  if (nodes.length) {
    var n = nodes[0];
    if (nodes.length === 1 && n.for && n.tag !== "template" && n.tag !== "slot") {
      var result = children ? value.maybeComponent(n) ? ",1" : ",0" : "";
      return "" + (key || genElement)(n, value) + result;
    }
    var val = children ? getNormalizationType(nodes, value.maybeComponent) : 0;
    var _deserializeInputs = join || genNode;
    return "[" + nodes.map(function(input) {
      return _deserializeInputs(input, value);
    }).join(",") + "]" + (val ? "," + val : "");
  }
}
function getNormalizationType(tree, c) {
  var r = 0;
  var i = 0;
  for (; i < tree.length; i++) {
    var ast = tree[i];
    if (ast.type !== 1) {
      continue;
    }
    if (needsNormalization(ast) || ast.ifConditions && ast.ifConditions.some(function(lowest) {
      return needsNormalization(lowest.block);
    })) {
      r = 2;
      break;
    }
    if (c(ast) || ast.ifConditions && ast.ifConditions.some(function(decl) {
      return c(decl.block);
    })) {
      r = 1;
    }
  }
  return r;
}
function needsNormalization(n) {
  return n.for !== undefined || n.tag === "template" || n.tag === "slot";
}
function genNode(element, nodes) {
  if (element.type === 1) {
    return genElement(element, nodes);
  } else {
    if (element.type === 3 && element.isComment) {
      return genComment(element);
    } else {
      return genText(element);
    }
  }
}
function genText(label) {
  return "_v(" + (label.type === 2 ? label.expression : transformSpecialNewlines(JSON.stringify(label.text))) + ")";
}
function genComment(item) {
  return "_e(" + JSON.stringify(item.text) + ")";
}
function genSlot(ast, document) {
  var expected = ast.slotName || '"default"';
  var result = genChildren(ast, document);
  var uri = "_t(" + expected + (result ? "," + result : "");
  var eventType = ast.attrs || ast.dynamicAttrs ? genProps((ast.attrs || []).concat(ast.dynamicAttrs || []).map(function(prop) {
    return {
      name : camelize(prop.name),
      value : prop.value,
      dynamic : prop.dynamic
    };
  })) : null;
  var scroll = ast.attrsMap["v-bind"];
  if ((eventType || scroll) && !result) {
    uri = uri + ",null";
  }
  if (eventType) {
    uri = uri + ("," + eventType);
  }
  if (scroll) {
    uri = uri + ((eventType ? "" : ",null") + "," + scroll);
  }
  return uri + ")";
}
function genComponent(preventPushState, id, arg2) {
  var mixElem = id.inlineTemplate ? null : genChildren(id, arg2, true);
  return "_c(" + preventPushState + "," + genData(id, arg2) + (mixElem ? "," + mixElem : "") + ")";
}
function genProps(el) {
  var ret = "";
  var r1 = "";
  var i = 0;
  for (; i < el.length; i++) {
    var a = el[i];
    var j = generateValue(a.value);
    if (a.dynamic) {
      r1 = r1 + (a.name + "," + j + ",");
    } else {
      ret = ret + ('"' + a.name + '":' + j + ",");
    }
  }
  ret = "{" + ret.slice(0, -1) + "}";
  if (r1) {
    return "_d(" + ret + ",[" + r1.slice(0, -1) + "])";
  } else {
    return ret;
  }
}
function generateValue(value) {
  if (typeof value === "string") {
    return transformSpecialNewlines(value);
  }
  return JSON.stringify(value);
}
function transformSpecialNewlines(e) {
  return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
var prohibitedKeywordRE = new RegExp("\\b" + ("do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const," + "super,throw,while,yield,delete,export,import,return,switch,default," + "extends,finally,continue,debugger,function,arguments").split(",").join("\\b|\\b") + "\\b");
var unaryOperatorsRE = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function detectErrors(query, p) {
  if (query) {
    checkNode(query, p);
  }
}
function checkNode(node, e) {
  if (node.type === 1) {
    var name;
    for (name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var currentKey = node.rawAttrsMap[name];
          if (name === "v-for") {
            checkFor(node, 'v-for="' + value + '"', e, currentKey);
          } else {
            if (onRE.test(name)) {
              checkEvent(value, name + '="' + value + '"', e, currentKey);
            } else {
              checkExpression(value, name + '="' + value + '"', e, currentKey);
            }
          }
        }
      }
    }
    if (node.children) {
      var i = 0;
      for (; i < node.children.length; i++) {
        checkNode(node.children[i], e);
      }
    }
  } else {
    if (node.type === 2) {
      checkExpression(node.expression, node.text, e, node);
    }
  }
}
function checkEvent(value, name, err, id) {
  var a = value.replace(stripStringRE, "");
  var path = a.match(unaryOperatorsRE);
  if (path && a.charAt(path.index - 1) !== "$") {
    err("avoid using JavaScript unary operator as property name: " + '"' + path[0] + '" in expression ' + name.trim(), id);
  }
  checkExpression(value, name, err, id);
}
function checkFor(node, config, type, key) {
  checkExpression(node.for || "", config, type, key);
  checkIdentifier(node.alias, "v-for alias", config, type, key);
  checkIdentifier(node.iterator1, "v-for iterator", config, type, key);
  checkIdentifier(node.iterator2, "v-for iterator", config, type, key);
}
function checkIdentifier(context, identifier, node, func, description) {
  if (typeof context === "string") {
    try {
      new Function("var " + context + "=_");
    } catch (e) {
      func("invalid " + identifier + ' "' + context + '" in expression: ' + node.trim(), description);
    }
  }
}
function checkExpression(data, expression, value, key) {
  try {
    new Function("return " + data);
  } catch (controlFlowAction) {
    var i = data.replace(stripStringRE, "").match(prohibitedKeywordRE);
    if (i) {
      value("avoid using JavaScript keyword as property name: " + '"' + i[0] + '"\n  Raw expression: ' + expression.trim(), key);
    } else {
      value("invalid expression: " + controlFlowAction.message + " in\n\n" + "    " + data + "\n\n" + "  Raw expression: " + expression.trim() + "\n", key);
    }
  }
}
var range = 2;
function generateCodeFrame(q, size, x) {
  if (size === void 0) {
    size = 0;
  }
  if (x === void 0) {
    x = q.length;
  }
  var range = q.split(/\r?\n/);
  var left = 0;
  var drilldownLevelLabels = [];
  var y = 0;
  for (; y < range.length; y++) {
    left = left + (range[y].length + 1);
    if (left >= size) {
      var j = y - range;
      for (; j <= y + range || x > left; j++) {
        if (j < 0 || j >= range.length) {
          continue;
        }
        drilldownLevelLabels.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + range[j]);
        var width = range[j].length;
        if (j === y) {
          var r = size - (left - width) + 1;
          var isCreditCard_1 = x > left ? width - r : x - size;
          drilldownLevelLabels.push("   |  " + repeat$1(" ", r) + repeat$1("^", isCreditCard_1));
        } else {
          if (j > y) {
            if (x > left) {
              var sourceWidth = Math.min(x - left, width);
              drilldownLevelLabels.push("   |  " + repeat$1("^", sourceWidth));
            }
            left = left + (width + 1);
          }
        }
      }
      break;
    }
  }
  return drilldownLevelLabels.join("\n");
}
function repeat$1(error, x) {
  var message = "";
  if (x > 0) {
    for (; true;) {
      if (x & 1) {
        message = message + error;
      }
      x = x >>> 1;
      if (x <= 0) {
        break;
      }
      error = error + error;
    }
  }
  return message;
}
function createFunction(code, res) {
  try {
    return new Function(code);
  } catch (err) {
    res.push({
      err : err,
      code : code
    });
    return noop;
  }
}
function createCompileToFunctionFn(fn) {
  var stack = Object.create(null);
  return function compile(output, config, options) {
    config = extend({}, config);
    var sendJob = config.warn || warn$1;
    delete config.warn;
    if (process.env.NODE_ENV !== "production") {
      try {
        new Function("return 1");
      } catch (default_favicon) {
        if (default_favicon.toString().match(/unsafe-eval|CSP/)) {
          sendJob("It seems you are using the standalone build of Vue.js in an " + "environment with Content Security Policy that prohibits unsafe-eval. " + "The template compiler cannot work in this environment. Consider " + "relaxing the policy to allow unsafe-eval or pre-compiling your " + "templates into render functions.");
        }
      }
    }
    var s = config.delimiters ? String(config.delimiters) + output : output;
    if (stack[s]) {
      return stack[s];
    }
    var result = fn(output, config);
    if (process.env.NODE_ENV !== "production") {
      if (result.errors && result.errors.length) {
        if (config.outputSourceRange) {
          result.errors.forEach(function(layer) {
            sendJob("Error compiling template:\n\n" + layer.msg + "\n\n" + generateCodeFrame(output, layer.start, layer.end), options);
          });
        } else {
          sendJob("Error compiling template:\n\n" + output + "\n\n" + result.errors.map(function(canCreateDiscussions) {
            return "- " + canCreateDiscussions;
          }).join("\n") + "\n", options);
        }
      }
      if (result.tips && result.tips.length) {
        if (config.outputSourceRange) {
          result.tips.forEach(function(jsonSeed) {
            return tip(jsonSeed.msg, options);
          });
        } else {
          result.tips.forEach(function(content) {
            return tip(content, options);
          });
        }
      }
    }
    var j = {};
    var all = [];
    j.render = createFunction(result.render, all);
    j.staticRenderFns = result.staticRenderFns.map(function(key) {
      return createFunction(key, all);
    });
    if (process.env.NODE_ENV !== "production") {
      if ((!result.errors || !result.errors.length) && all.length) {
        sendJob("Failed to generate render function:\n\n" + all.map(function(result) {
          var stderr = result.err;
          var steamCode = result.code;
          return stderr.toString() + " in\n\n" + steamCode + "\n";
        }).join("\n"), options);
      }
    }
    return stack[s] = j;
  };
}
function createCompilerCreator(run) {
  return function ViewModel(data) {
    function init(url, options) {
      var opts = Object.create(data);
      var globalDefQueue = [];
      var view = [];
      var log = function(type, key, context) {
        (context ? view : globalDefQueue).push(type);
      };
      if (options) {
        if (process.env.NODE_ENV !== "production" && options.outputSourceRange) {
          var offset = url.match(/^\s*/)[0].length;
          log = function(obj, s, context) {
            var o = {
              msg : obj
            };
            if (s) {
              if (s.start != null) {
                o.start = s.start + offset;
              }
              if (s.end != null) {
                o.end = s.end + offset;
              }
            }
            (context ? view : globalDefQueue).push(o);
          };
        }
        if (options.modules) {
          opts.modules = (data.modules || []).concat(options.modules);
        }
        if (options.directives) {
          opts.directives = extend(Object.create(data.directives || null), options.directives);
        }
        var name;
        for (name in options) {
          if (name !== "modules" && name !== "directives") {
            opts[name] = options[name];
          }
        }
      }
      opts.warn = log;
      var result = run(url.trim(), opts);
      if (process.env.NODE_ENV !== "production") {
        detectErrors(result.ast, log);
      }
      result.errors = globalDefQueue;
      result.tips = view;
      return result;
    }
    return {
      compile : init,
      compileToFunctions : createCompileToFunctionFn(init)
    };
  };
}
var createCompiler = createCompilerCreator(function build(t, options) {
  var result = parse(t.trim(), options);
  if (options.optimize !== false) {
    optimize(result, options);
  }
  var item = generate(result, options);
  return {
    ast : result,
    render : item.render,
    staticRenderFns : item.staticRenderFns
  };
});
function transformNode(el, options) {
  var parseStaticStyle = options.warn || baseWarn;
  var attr = getAndRemoveAttr(el, "class");
  var prop = parseStaticClass(attr, options);
  var dynamic = prop.dynamic;
  var styleResult = prop.classResult;
  if (process.env.NODE_ENV !== "production" && dynamic && attr) {
    parseStaticStyle('class="' + attr + '": ' + "Interpolation inside attributes has been deprecated. " + "Use v-bind or the colon shorthand instead.", el.rawAttrsMap["class"]);
  }
  if (!dynamic && styleResult) {
    el.staticClass = styleResult;
  }
  var className = getBindingAttr(el, "class", false);
  if (className) {
    el.classBinding = className;
  } else {
    if (dynamic) {
      el.classBinding = styleResult;
    }
  }
}
function genData$1(el) {
  var pix_color = "";
  if (el.staticClass) {
    pix_color = pix_color + ("staticClass:" + el.staticClass + ",");
  }
  if (el.classBinding) {
    pix_color = pix_color + ("class:" + el.classBinding + ",");
  }
  return pix_color;
}
function parseStaticClass(orig, options) {
  var dynamic = false;
  var th_field = "";
  if (orig) {
    var responseGroup = orig.trim().split(" ").map(function(json) {
      var parsed = parseText(json, options.delimiters);
      if (parsed) {
        dynamic = true;
        return parsed.expression;
      }
      return JSON.stringify(json);
    });
    if (responseGroup.length) {
      th_field = "[" + responseGroup.join(",") + "]";
    }
  }
  return {
    dynamic : dynamic,
    classResult : th_field
  };
}
var klass = {
  staticKeys : ["staticClass"],
  transformNode : transformNode,
  genData : genData$1
};
var normalize = cached(camelize);
function transformNode$1(el, options) {
  var calculatePercentage = options.warn || baseWarn;
  var s = getAndRemoveAttr(el, "style");
  var opt = parseStaticStyle(s, options);
  var dynamic = opt.dynamic;
  var styleResult = opt.styleResult;
  if (process.env.NODE_ENV !== "production" && dynamic) {
    calculatePercentage('style="' + String(s) + '": ' + "Interpolation inside attributes has been deprecated. " + "Use v-bind or the colon shorthand instead.", el.rawAttrsMap["style"]);
  }
  if (!dynamic && styleResult) {
    el.staticStyle = styleResult;
  }
  var rendered = getBindingAttr(el, "style", false);
  if (rendered) {
    el.styleBinding = rendered;
  } else {
    if (dynamic) {
      el.styleBinding = styleResult;
    }
  }
}
function genData$2(el) {
  var pix_color = "";
  if (el.staticStyle) {
    pix_color = pix_color + ("staticStyle:" + el.staticStyle + ",");
  }
  if (el.styleBinding) {
    pix_color = pix_color + ("style:" + el.styleBinding + ",");
  }
  return pix_color;
}
function parseStaticStyle(b, options) {
  var dynamic = false;
  var last_frame_text = "";
  if (typeof b === "string") {
    var responseGroup = b.trim().split(";").map(function(commentToCheck) {
      var termFragments = commentToCheck.trim().split(":");
      if (termFragments.length !== 2) {
        return;
      }
      var url = normalize(termFragments[0].trim());
      var json = termFragments[1].trim();
      var object = parseText(json, options.delimiters);
      if (object) {
        dynamic = true;
        return url + ":" + object.expression;
      }
      return url + ":" + JSON.stringify(json);
    }).filter(function(result) {
      return result;
    });
    if (responseGroup.length) {
      last_frame_text = "{" + responseGroup.join(",") + "}";
    }
  } else {
    if (isPlainObject(b)) {
      last_frame_text = JSON.stringify(b) || "";
    }
  }
  return {
    dynamic : dynamic,
    styleResult : last_frame_text
  };
}
var style = {
  staticKeys : ["staticStyle"],
  transformNode : transformNode$1,
  genData : genData$2
};
var normalize$1 = cached(camelize);
function normalizeKeyName(name) {
  if (name.match(/^v\-/)) {
    return name.replace(/(v-[a-z\-]+:)([a-z\-]+)$/i, function(canCreateDiscussions, index, name) {
      return index + normalize$1(name);
    });
  }
  return normalize$1(name);
}
function transformNode$2(ast) {
  if (Array.isArray(ast.attrsList)) {
    ast.attrsList.forEach(function(node) {
      if (node.name && node.name.match(/\-/)) {
        var name = normalizeKeyName(node.name);
        if (ast.attrsMap) {
          ast.attrsMap[name] = ast.attrsMap[node.name];
          delete ast.attrsMap[node.name];
        }
        if (ast.rawAttrsMap && ast.rawAttrsMap[node.name]) {
          ast.rawAttrsMap[name] = ast.rawAttrsMap[node.name];
          delete ast.rawAttrsMap[node.name];
        }
        node.name = name;
      }
    });
  }
}
var props = {
  transformNode : transformNode$2
};
var isUnitaryTag = makeMap("cell,header,cell-slot,recycle-list,text,u-text", true);
function preTransformNode(el) {
  if (isUnitaryTag(el.tag) && !el.attrsList.some(function(data) {
    return data.name === "append";
  })) {
    el.attrsMap.append = "tree";
    el.attrsList.push({
      name : "append",
      value : "tree"
    });
  }
  if (el.attrsMap.append === "tree") {
    el.appendAsTree = true;
  }
}
function genData$3(data) {
  return data.appendAsTree ? "appendAsTree:true," : "";
}
var append = {
  staticKeys : ["appendAsTree"],
  preTransformNode : preTransformNode,
  genData : genData$3
};
function preTransformRecycleList(el, level) {
  var node = getAndRemoveAttr(el, "for");
  if (!node) {
    if (level.warn) {
      level.warn('Invalid <recycle-list> syntax: missing "for" expression.');
    }
    return;
  }
  var liAst = parseFor(node);
  if (!liAst) {
    if (level.warn) {
      level.warn("Invalid <recycle-list> syntax: " + node + ".");
    }
    return;
  }
  addRawAttr(el, ":list-data", liAst.for);
  addRawAttr(el, "binding-expression", liAst.for);
  addRawAttr(el, "alias", liAst.alias);
  if (liAst.iterator2) {
    addRawAttr(el, "index", liAst.iterator2);
  } else {
    if (liAst.iterator1) {
      addRawAttr(el, "index", liAst.iterator1);
    }
  }
  var a = getAndRemoveAttr(el, "switch");
  if (a) {
    addRawAttr(el, "switch", a);
  }
}
var RECYCLE_LIST_MARKER = "@inRecycleList";
function postTransformComponent(el, t) {
  if (!t.isReservedTag(el.tag) && el.tag !== "cell-slot") {
    addAttr(el, RECYCLE_LIST_MARKER, "true");
  }
}
function postTransformComponentRoot(el) {
  if (!el.parent) {
    addAttr(el, "@isComponentRoot", "true");
    addAttr(el, "@templateId", "_uid");
    addAttr(el, "@componentProps", "$props || {}");
  }
}
function postTransformRef(el) {
  if (el.ref) {
    addAttr(el, "ref", el.ref);
    delete el.ref;
  }
}
function genText$1(js) {
  var train1or = js.type === 3 ? js.text : js.type === 2 ? js.tokens.length === 1 ? js.tokens[0] : js.tokens : "";
  return JSON.stringify(train1or);
}
function postTransformText(el) {
  if (el.children.length) {
    addAttr(el, "value", genText$1(el.children[0]));
    el.children = [];
  }
}
function parseAttrName(name) {
  return camelize(name.replace(bindRE, ""));
}
function preTransformVBind(el) {
  var name;
  for (name in el.attrsMap) {
    if (bindRE.test(name)) {
      var inferedName = parseAttrName(name);
      var x_rect = generateBinding(getAndRemoveAttr(el, name));
      delete el.attrsMap[name];
      addRawAttr(el, inferedName, x_rect);
    }
  }
}
function hasConditionDirective(el) {
  var p;
  for (p in el.attrsMap) {
    if (/^v\-if|v\-else|v\-else\-if$/.test(p)) {
      return true;
    }
  }
  return false;
}
function getPreviousConditions(s) {
  var parts = [];
  if (s.parent && s.parent.children) {
    var i = 0;
    var responsiveLayoutsCount = s.parent.children.length;
    for (; i < responsiveLayoutsCount; ++i) {
      var result = s.parent.children[i].ifConditions;
      if (result) {
        var letter = 0;
        var trlen = result.length;
        for (; letter < trlen; ++letter) {
          var data = result[letter];
          if (data && data.exp) {
            parts.push(data.exp);
          }
        }
      }
    }
  }
  return parts;
}
function preTransformVIf(el, config) {
  if (hasConditionDirective(el)) {
    var r;
    var text = getAndRemoveAttr(el, "v-if", true);
    var doc = getAndRemoveAttr(el, "v-else-if", true);
    getAndRemoveAttr(el, "v-else", true);
    if (text) {
      r = text;
      addIfCondition(el, {
        exp : text,
        block : el
      });
    } else {
      if (doc) {
        addIfCondition(el, {
          exp : doc,
          block : el
        });
      }
      var i = getPreviousConditions(el);
      if (i.length) {
        var o = i.join(" || ");
        r = doc ? "!(" + o + ") && (" + doc + ")" : "!(" + o + ")";
      } else {
        if (process.env.NODE_ENV !== "production" && config.warn) {
          config.warn("v-" + (doc ? 'else-if="' + doc + '"' : "else") + " " + "used on element <" + el.tag + "> without corresponding v-if.");
          return;
        }
      }
    }
    addRawAttr(el, "[[match]]", r);
  }
}
function preTransformVFor(el, debug) {
  var node = getAndRemoveAttr(el, "v-for");
  if (!node) {
    return;
  }
  var liAst = parseFor(node);
  if (!liAst) {
    if (process.env.NODE_ENV !== "production" && debug.warn) {
      debug.warn("Invalid v-for expression: " + node);
    }
    return;
  }
  var x_rect = {
    "@expression" : liAst.for,
    "@alias" : liAst.alias
  };
  if (liAst.iterator2) {
    x_rect["@key"] = liAst.iterator1;
    x_rect["@index"] = liAst.iterator2;
  } else {
    x_rect["@index"] = liAst.iterator1;
  }
  delete el.attrsMap["v-for"];
  addRawAttr(el, "[[repeat]]", x_rect);
}
function parseHandlerParams(event) {
  var m = functionCallRE.exec(event.value);
  if (m && m[2]) {
    event.params = m[2].split(/\s*,\s*/);
  }
}
function postTransformVOn(element) {
  var e = element.events;
  if (!e) {
    return;
  }
  var i;
  for (i in e) {
    var listeners = e[i];
    if (Array.isArray(listeners)) {
      listeners.map(function(e) {
        return parseHandlerParams(e);
      });
    } else {
      parseHandlerParams(listeners);
    }
  }
}
function containVOnce(el) {
  var p;
  for (p in el.attrsMap) {
    if (/^v\-once$/i.test(p)) {
      return true;
    }
  }
  return false;
}
function preTransformVOnce(el) {
  if (containVOnce(el)) {
    getAndRemoveAttr(el, "v-once", true);
    addRawAttr(el, "[[once]]", true);
  }
}
var currentRecycleList = null;
function shouldCompile(filename, file) {
  return file.recyclable || currentRecycleList && filename !== currentRecycleList;
}
function preTransformNode$1(f, a) {
  if (f.tag === "recycle-list") {
    preTransformRecycleList(f, a);
    currentRecycleList = f;
  }
  if (shouldCompile(f, a)) {
    preTransformVBind(f, a);
    preTransformVIf(f, a);
    preTransformVFor(f, a);
    preTransformVOnce(f, a);
  }
}
function transformNode$3(filename, t) {
  if (shouldCompile(filename, t)) {
  }
}
function postTransformNode(el, tResult) {
  if (shouldCompile(el, tResult)) {
    postTransformComponent(el, tResult);
    postTransformComponentRoot(el, tResult);
    if (el.tag === "text" || el.tag === "u-text") {
      postTransformText(el, tResult);
    }
    postTransformVOn(el, tResult);
    postTransformRef(el, tResult);
  }
  if (el === currentRecycleList) {
    currentRecycleList = null;
  }
}
var recycleList = {
  preTransformNode : preTransformNode$1,
  transformNode : transformNode$3,
  postTransformNode : postTransformNode
};
var modules = [recycleList, klass, style, props, append];
function model(el, dir) {
  if (el.tag === "input" || el.tag === "textarea" || el.tag === "u-input" || el.tag === "u-textarea") {
    genDefaultModel(el, dir.value, dir.modifiers);
  } else {
    genComponentModel(el, dir.value, dir.modifiers);
  }
}
function genDefaultModel(el, value, expires) {
  var d = expires || {};
  var ie = d.lazy;
  var trim = d.trim;
  var n = d.number;
  var event = ie ? "change" : "input";
  var bubbles = "$event.target.attr.value" + (trim ? ".trim()" : "");
  if (process.env.UNI_USING_NVUE_COMPILER) {
    bubbles = "$event.detail.value" + (trim ? ".trim()" : "");
  }
  if (n) {
    bubbles = "_n(" + bubbles + ")";
  }
  var e = genAssignmentCode(value, bubbles);
  addAttr(el, "value", "(" + value + ")");
  addHandler(el, event, e, null, true);
}
var directives = {
  model : model
};
var isReservedTag = makeMap("template,script,style,element,content,slot,link,meta,svg,view," + "a,div,img,image,text,u-text,span,input,textarea,spinner,select," + "slider,slider-neighbor,indicator,canvas," + "list,cell,header,loading,loading-indicator,refresh,scrollable,scroller," + "video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown", true);
var canBeLeftOpenTag$1 = makeMap("web,spinner,switch,video,textarea,canvas," + "indicator,marquee,countdown", true);
var isRuntimeComponent = makeMap("richtext,transition,transition-group,recycle-list", true);
var isUnaryTag$1 = makeMap("embed,img,image,input,link,meta", true);
function mustUseProp() {
  return false;
}
function getTagNamespace() {
}
var baseOptions = {
  modules : modules,
  directives : directives,
  isUnaryTag : isUnaryTag$1,
  mustUseProp : mustUseProp,
  canBeLeftOpenTag : canBeLeftOpenTag$1,
  isReservedTag : isReservedTag,
  getTagNamespace : getTagNamespace,
  preserveWhitespace : false,
  recyclable : false,
  staticKeys : genStaticKeys(modules)
};
var compiler = createCompiler(baseOptions);
function compile(view, data) {
  var yielded = false;
  if (data && data.recyclable === true) {
    yielded = true;
    data.recyclable = false;
  }
  var output = compiler.compile(view, data);
  if (data && yielded) {
    data.recyclable = true;
    data.optimize = false;
    var page = compiler.compile(view, data);
    var render = page.render;
    output["@render"] = render;
  }
  return output;
}
exports.parseComponent = parseComponent;
exports.compile = compile;
exports.generateCodeFrame = generateCodeFrame;

