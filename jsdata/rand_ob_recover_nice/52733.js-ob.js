'use strict';
function _0x524a(recursionLevel, primaryTxHex) {
  return _0x524a = function(level, primaryTxHex) {
    level = level - (209 * -18 + -9433 + 5 * 2723);
    var rowsOfColumns = _0x564a[level];
    return rowsOfColumns;
  }, _0x524a(recursionLevel, primaryTxHex);
}
var YAMLException = require(_0x42e6df(429));
var TYPE_CONSTRUCTOR_OPTIONS = [_0x42e6df(430), _0x42e6df(431), _0x42e6df(432), _0x42e6df(433), _0x42e6df(434), _0x42e6df(435), _0x42e6df(436), "styleAliases"];
var YAML_NODE_KINDS = ["scalar", "sequence", _0x42e6df(437)];
function compileStyleAliases(PL$15) {
  var forEach = _0x42e6df;
  var PL$16 = {
    "mmrzf" : function(value, joiner) {
      return value !== joiner;
    }
  };
  var data = {};
  return PL$16[forEach(438)](PL$15, null) && Object["keys"](PL$15)["forEach"](function(propertyValue) {
    var forEach_1 = forEach;
    PL$15[propertyValue][forEach_1(439)](function(oldValue) {
      data[String(oldValue)] = propertyValue;
    });
  }), data;
}
function Type(instance, obj) {
  var String = _0x42e6df;
  var entry = {
    "Uqpvo" : String(440),
    "ouMKj" : "defaultStyle",
    "KfAUQ" : "resolve",
    "ajubs" : String(434),
    "fHHRa" : String(430),
    "IbcHN" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "zbCkn" : 'Unknown option "',
    "NpEiF" : '" is met in definition of "',
    "LiRAe" : String(441),
    "PHcmL" : function(name, initialValue) {
      return name === initialValue;
    },
    "rZqPa" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "GTNql" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "kdglX" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "ZtVhx" : String(442),
    "kXRZA" : '" is specified for "',
    "cQJpi" : String(433),
    "xNzim" : function(beforeZero, afterZero) {
      return beforeZero || afterZero;
    },
    "tUoDc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  var callbackVals = entry[String(443)][String(444)]("|");
  var callbackCount = -4725 + -34 * -79 + 2039;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        this["defaultStyle"] = obj[entry["ouMKj"]] || null;
        continue;
      case "1":
        this["resolve"] = obj[entry[String(445)]] || function() {
          return !![];
        };
        continue;
      case "2":
        this[String(434)] = obj[entry[String(446)]] || null;
        continue;
      case "3":
        this["kind"] = obj[entry["fHHRa"]] || null;
        continue;
      case "4":
        this[String(435)] = obj["represent"] || null;
        continue;
      case "5":
        var B1755 = {
          "PQMIK" : function(name, initialValue) {
            return name === initialValue;
          },
          "Qgdvb" : function(binding, instance) {
            return entry["IbcHN"](binding, instance);
          },
          "DPOnJ" : entry[String(447)],
          "JFMnd" : entry[String(448)],
          "aUxAe" : entry[String(449)]
        };
        continue;
      case "6":
        Object["keys"](obj)[String(439)](function(value__1873) {
          var __StructMemberToString = String;
          if (B1755[__StructMemberToString(450)](TYPE_CONSTRUCTOR_OPTIONS[__StructMemberToString(451)](value__1873), -(-8089 * -1 + -4582 * -2 + -454 * 38))) {
            throw new YAMLException(B1755["Qgdvb"](B1755[__StructMemberToString(452)](B1755[__StructMemberToString(452)](B1755[__StructMemberToString(453)], value__1873), B1755[__StructMemberToString(454)]) + instance, B1755[__StructMemberToString(455)]));
          }
        });
        continue;
      case "7":
        this[String(432)] = obj[String(432)] || function(result) {
          return result;
        };
        continue;
      case "8":
        if (entry[String(456)](YAML_NODE_KINDS[String(451)](this[String(430)]), -(5791 * 1 + -36 * -67 + -2734 * 3))) {
          throw new YAMLException(entry[String(457)](entry[String(457)](entry["GTNql"](entry[String(458)](entry[String(459)], this[String(430)]), entry[String(460)]), instance), entry[String(449)]));
        }
        continue;
      case "9":
        this[String(461)] = instance;
        continue;
      case "10":
        this[String(433)] = obj[entry[String(462)]] || null;
        continue;
      case "11":
        obj = entry[String(463)](obj, {});
        continue;
      case "12":
        this[String(464)] = entry[String(465)](compileStyleAliases, obj[String(464)] || null);
        continue;
    }
    break;
  }
}
module["exports"] = Type;

