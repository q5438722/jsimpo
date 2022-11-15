'use strict';
var css = require("css");
var util = require("./lib/util");
var validateItem = require("./lib/validator").validate;
var shorthandParser = require("./lib/shorthand-parser");
function convertLengthShorthand(ast, name) {
  var i = 0;
  for (; i < ast.declarations.length; i++) {
    var m = ast.declarations[i];
    if (m.property === name) {
      var split_values = m.value.split(/\s+/);
      split_values[1] = split_values[1] || split_values[0];
      split_values[2] = split_values[2] || split_values[0];
      split_values[3] = split_values[3] || split_values[1];
      ast.declarations.splice(i, 1);
      ast.declarations.splice(i, 0, {
        type : "declaration",
        property : name + "-left",
        value : split_values[3],
        position : m.position
      });
      ast.declarations.splice(i, 0, {
        type : "declaration",
        property : name + "-bottom",
        value : split_values[2],
        position : m.position
      });
      ast.declarations.splice(i, 0, {
        type : "declaration",
        property : name + "-right",
        value : split_values[1],
        position : m.position
      });
      ast.declarations.splice(i, 0, {
        type : "declaration",
        property : name + "-top",
        value : split_values[0],
        position : m.position
      });
    }
  }
}
function mergeStyle(options, to, x, a, i, b) {
  if (!process.env.UNI_USING_NVUE_STYLE_COMPILER) {
    options[to] = options[to] || {};
    options[to][i] = a[i];
    return;
  }
  to = to.split(".").map((canCreateDiscussions) => {
    return "." + canCreateDiscussions;
  }).slice(1);
  var value = to.find((minWorkers) => {
    return minWorkers in options;
  }) || to[0];
  x = x + to.filter((optionsValue) => {
    return optionsValue !== value;
  }).sort().join("");
  var mostRecentPublicUser = options[value] = options[value] || {};
  var color_table = mostRecentPublicUser[x] = mostRecentPublicUser[x] || {};
  color_table[i] = [...a[i], x.split(".").length - 1, b];
}
function parse(data, fn) {
  var parsed;
  var observersForKey;
  var acc = {};
  var messages = [];
  parsed = css.parse(data, {
    silent : true
  });
  if (parsed.stylesheet.parsingErrors && parsed.stylesheet.parsingErrors.length) {
    observersForKey = parsed.stylesheet.parsingErrors;
    observersForKey.forEach(function(error) {
      messages.push({
        line : error.line,
        column : error.column,
        reason : error.toString().replace("Error", "ERROR")
      });
    });
  }
  if (parsed && parsed.type === "stylesheet" && parsed.stylesheet && parsed.stylesheet.rules && parsed.stylesheet.rules.length) {
    parsed.stylesheet.rules.forEach(function(ast, n) {
      var type = ast.type;
      var headers = {};
      var errors = [];
      if (type === "rule") {
        if (ast.declarations && ast.declarations.length) {
          ast.declarations = shorthandParser(ast.declarations);
          convertLengthShorthand(ast, "padding");
          convertLengthShorthand(ast, "margin");
          ast.declarations.forEach(function(tmp) {
            var name = tmp.type;
            var id;
            var n;
            var i;
            var o;
            var data;
            var key;
            if (name !== "declaration") {
              return;
            }
            id = tmp.property;
            n = tmp.value;
            var m = n.replace(/\s*!important/g, "");
            var min = Number(n !== m);
            n = m;
            key = util.hyphenedToCamelCase(id);
            data = validateItem(key, n);
            if (typeof data.value === "number" || typeof data.value === "string") {
              if (process.env.UNI_USING_NVUE_STYLE_COMPILER) {
                var value = headers[key];
                headers[key] = Array.isArray(value) && value[1] > min ? value : [data.value, min];
              } else {
                headers[key] = data.value;
              }
            }
            if (data.log) {
              data.log.line = tmp.position.start.line;
              data.log.column = tmp.position.start.column;
              errors.push(data.log);
            }
          });
          ast.selectors.forEach(function(styleText) {
            styleText = styleText.replace(/\s*([\+~>])\s*/g, "$1").replace(/\s+/, " ");
            const values = styleText.match(process.env.UNI_USING_NVUE_STYLE_COMPILER ? /^((?:(?:\.[A-Za-z0-9_\-]+)+[\+~> ])*)((?:\.[A-Za-z0-9_\-:]+)+)$/ : /^(\.)([A-Za-z0-9_\-:]+)$/);
            if (values) {
              var blurRadius = values[1];
              var a = values[2];
              var i = a.indexOf(":");
              if (i > -1) {
                var param = a.slice(i);
                a = a.slice(0, i);
                var params = {};
                Object.keys(headers).forEach(function(i) {
                  params[i + param] = headers[i];
                });
                headers = params;
              }
              Object.keys(headers).forEach(function(___j) {
                mergeStyle(acc, a, blurRadius, headers, ___j, n);
              });
            } else {
              messages.push({
                line : ast.position.start.line,
                column : ast.position.start.column,
                reason : "ERROR: Selector `" + styleText + "` is not supported. Weex only support classname selector"
              });
            }
          });
          messages = messages.concat(errors);
        }
      } else {
        if (type === "font-face") {
          if (ast.declarations && ast.declarations.length) {
            ast.declarations.forEach(function(rule) {
              if (rule.type !== "declaration") {
                return;
              }
              var key = util.hyphenedToCamelCase(rule.property);
              var val = rule.value;
              if (key === "fontFamily" && "\"'".indexOf(val[0]) > -1) {
                val = val.slice(1, val.length - 1);
              }
              headers[key] = val;
            });
            if (!acc["@FONT-FACE"]) {
              acc["@FONT-FACE"] = [];
            }
            acc["@FONT-FACE"].push(headers);
          }
        }
      }
    });
  }
  acc["@VERSION"] = 2;
  fn(observersForKey, {
    jsonStyle : acc,
    log : messages
  });
}
function validate(data, cb) {
  var errors = [];
  var last_error;
  try {
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {
    last_error = e;
    data = {};
  }
  Object.keys(data).forEach(function(id1) {
    var a = data[id1];
    Object.keys(a).forEach(function(i) {
      var n = a[i];
      var e = validateItem(i, n);
      if (typeof e.value === "number" || typeof e.value === "string") {
        a[i] = e.value;
      } else {
        delete a[i];
      }
      if (e.log) {
        errors.push(e.log);
      }
    });
  });
  cb(last_error, {
    jsonStyle : data,
    log : errors
  });
}
module.exports = {
  parse : parse,
  validate : validate,
  validateItem : validateItem,
  util : util
};

