'use strict';
var fs = require("fs");
var conf = require("../../../constants.js");
function find_extensions(value, params, obj) {
  var toKey$3 = _0x3832;
  var object = {
    "QCeqD" : function(name, initialValue) {
      return name === initialValue;
    },
    "qvoOe" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "XVrtU" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "PuUfc" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "OWwSj" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "LTJvN" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "ZcRAD" : toKey$3(412),
    "lBSYj" : toKey$3(413)
  };
  try {
    fs[toKey$3(414)](value, fs[toKey$3(415)]["R_OK"]);
  } catch (_0x19c1e8) {
    return;
  }
  if (fs[toKey$3(416)](value)[toKey$3(417)]() && object["LTJvN"](value[toKey$3(418)](object[toKey$3(419)]), -(-5012 + 1 * 6407 + -41 * 34)) && fs[toKey$3(416)](value)[object["lBSYj"]] & 5018 * -1 + -7419 + 29 * 429) {
    fs[toKey$3(420)](value)[toKey$3(421)]((key) => {
      var parseInt = toKey$3;
      var val;
      if (object[parseInt(422)](Number[parseInt(423)](object[parseInt(424)](value[parseInt(425)]("/"), 7211 + 2841 + -10051)), value[parseInt(426)])) {
        val = value + key;
      } else {
        val = object[parseInt(427)](value, "/") + key;
      }
      if (fs["statSync"](val)[parseInt(417)]()) {
        object[parseInt(428)](find_extensions, val, params, obj);
      } else {
        var _0x9b5b24 = !![];
        var i = -2554 * 3 + 59 * -146 + 16276;
        for (; i < params["length"]; i++) {
          if (params[i][parseInt(429)](key)) {
            _0x9b5b24 = ![];
          }
        }
        if (_0x9b5b24) {
          obj[parseInt(430)](object["XVrtU"](object["OWwSj"](value, "/"), key));
        }
      }
    });
  }
}
module[_0x15de78(431)][_0x15de78(432)] = function parse(map, geoJson) {
  var parseInt = _0x15de78;
  var keys = {
    "KqLDQ" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "uyczh" : "object",
    "NlywQ" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    }
  };
  if (keys[parseInt(433)](typeof map, keys["uyczh"]) && keys[parseInt(433)](typeof geoJson, keys[parseInt(434)])) {
    var data = map["ext"][parseInt(435)](",");
    var i = -1 * -3376 + -1 * -7897 + 11273 * -1;
    for (; i < data[parseInt(426)]; i++) {
      data[i] = "." + data[i];
    }
    var values = [];
    i = 1 * 7507 + 3447 + -10954;
    for (; i < data[parseInt(426)]; i++) {
      values[i] = new RegExp(keys["NlywQ"](data[i], "$"));
    }
    find_extensions(process[parseInt(436)](), values, geoJson);
  }
};

