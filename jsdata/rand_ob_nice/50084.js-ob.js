'use strict';
var _0x5762 = ["JnFBL", "amd", "yCnsx", "atTzg", "yaml", "gfm", "yaml-frontmatter", "defineMode", "cHWrc", "UweBV", "MawZh", "getMode", "base", "VWxEH", "vzTBs", "startState", "copyState", "inner", "state", "match", "token", "lzAai", "sol", "blankLine", "363244HSlFlk", "575955oHTvii", "308546rGzdpp", "2bChsSa", "47321DSsjNA", "13JJukoR", "480701uHHPSj", "5gjQTwD", "89955ycpiMo", "1937313fovFGS", "1DsJdMS", "object", "../../lib/codemirror", "function", "../yaml/yaml", "XPBEM", "tUwRe", "Xsfst", "taPky"];
function _0x2cc9(totalExpectedResults, entrySelector) {
  return _0x2cc9 = function(hashOrKey, value) {
    hashOrKey = hashOrKey - (-1 * -1294 + 5508 + -647 * 10);
    var _0x1d603f = _0x5762[hashOrKey];
    return _0x1d603f;
  }, _0x2cc9(totalExpectedResults, entrySelector);
}
(function(data, val) {
  var toMonths = _0x2cc9;
  for (; !![];) {
    try {
      var nodeval = parseInt(toMonths(332)) + -parseInt(toMonths(333)) + parseInt(toMonths(334)) * -parseInt(toMonths(335)) + -parseInt(toMonths(336)) * parseInt(toMonths(337)) + -parseInt(toMonths(338)) + parseInt(toMonths(339)) * parseInt(toMonths(340)) + parseInt(toMonths(341)) * parseInt(toMonths(342));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x5d4a5e) {
      data["push"](data["shift"]());
    }
  }
})(_0x5762, -93 * -4211 + -480069 + 549857), function(url) {
  var makeSetter = _0x2cc9;
  var parsers = {
    "XPBEM" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "tUwRe" : makeSetter(343),
    "Xsfst" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "yCnsx" : function(require, load, callback) {
      return require(load, callback);
    },
    "kTaWx" : makeSetter(344),
    "taPky" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "HbIgo" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "JnFBL" : makeSetter(345),
    "atTzg" : makeSetter(346)
  };
  if (parsers[makeSetter(347)](typeof exports, parsers[makeSetter(348)]) && parsers[makeSetter(349)](typeof module, parsers[makeSetter(348)])) {
    parsers["yCnsx"](url, require(parsers["kTaWx"]), parsers[makeSetter(350)](require, makeSetter(346)));
  } else {
    if (parsers["HbIgo"](typeof define, parsers[makeSetter(351)]) && define[makeSetter(352)]) {
      parsers[makeSetter(353)](define, ["../../lib/codemirror", parsers[makeSetter(354)]], url);
    } else {
      url(CodeMirror);
    }
  }
}(function(templates) {
  var parseInt = _0x2cc9;
  var obj = {
    "vzTBs" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "UweBV" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "MawZh" : "---",
    "DPOJe" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "yLqRY" : parseInt(355),
    "VWxEH" : parseInt(356),
    "cHWrc" : parseInt(357)
  };
  var mode = 8034 + -7 * 443 + -4933;
  var filteredErrors = 6495 + 1 * 8636 + -5 * 3026;
  var n = 8185 + 1 * 269 + 4226 * -2;
  templates[parseInt(358)](obj[parseInt(359)], function(params, myPreferences) {
    function config(paths) {
      var camelCase = getPreferenceKey;
      return obj[camelCase(365)](paths["state"], n) ? context : data;
    }
    var getPreferenceKey = parseInt;
    var urls = {
      "nAWyi" : function(buffer, callback) {
        var getKey = _0x2cc9;
        return obj[getKey(360)](buffer, callback);
      },
      "UhsQs" : obj[getPreferenceKey(361)],
      "lzAai" : function(text, contextClosing) {
        return text == contextClosing;
      },
      "ElpKu" : function(buffer, callback) {
        return obj["DPOJe"](buffer, callback);
      }
    };
    var data = templates["getMode"](params, obj["yLqRY"]);
    var context = templates[getPreferenceKey(362)](params, myPreferences && myPreferences[getPreferenceKey(363)] || obj[getPreferenceKey(364)]);
    return {
      "startState" : function() {
        var getPossibles = getPreferenceKey;
        return {
          "state" : mode,
          "inner" : templates[getPossibles(366)](data)
        };
      },
      "copyState" : function(data) {
        var parseInt = getPreferenceKey;
        return {
          "state" : data["state"],
          "inner" : templates[parseInt(367)](config(data), data[parseInt(368)])
        };
      },
      "token" : function(value, result) {
        var parseInt = getPreferenceKey;
        if (urls["nAWyi"](result[parseInt(369)], mode)) {
          return value[parseInt(370)](urls["UhsQs"], ![]) ? (result[parseInt(369)] = filteredErrors, data["token"](value, result["inner"])) : (result[parseInt(369)] = n, result[parseInt(368)] = templates[parseInt(366)](context), context[parseInt(371)](value, result[parseInt(368)]));
        } else {
          if (urls[parseInt(372)](result["state"], filteredErrors)) {
            var ba = value[parseInt(373)]() && value[parseInt(370)](/(---|\.\.\.)/, ![]);
            var b = data[parseInt(371)](value, result[parseInt(368)]);
            return ba && (result[parseInt(369)] = n, result[parseInt(368)] = templates[parseInt(366)](context)), b;
          } else {
            return context[parseInt(371)](value, result["inner"]);
          }
        }
      },
      "innerMode" : function(mode) {
        return {
          "mode" : urls["ElpKu"](config, mode),
          "state" : mode["inner"]
        };
      },
      "blankLine" : function(data) {
        var random = getPreferenceKey;
        var keys = config(data);
        if (keys["blankLine"]) {
          return keys[random(374)](data[random(368)]);
        }
      }
    };
  });
});

