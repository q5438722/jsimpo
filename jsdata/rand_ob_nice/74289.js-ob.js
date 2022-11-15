'use strict';
var template = ["QHftL", "defineLocale", "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f", 
"split", "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436", "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443", 
"\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430", "D MMMM YYYY \u0433.", "D MMMM YYYY \u0433., HH:mm", "dddd, D MMMM YYYY \u0433., HH:mm", "[\u0421\u0451\u043d\u043d\u044f \u045e] LT", "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT", "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT", 
"CSIrs", "day", "hjhKB", "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434", "\u043c\u0435\u0441\u044f\u0446", "\u0433\u043e\u0434", "test", "\u043d\u043e\u0447\u044b", "\u0432\u0435\u0447\u0430\u0440\u0430", "txQlP", "hqTDe", "leRKJ", "DDD", "HChGk", "Daaec", "Xijbu", "rlBNf", "tuzcp", "FKsHD", "-\u0433\u0430", "36MAZsim", "26704ZwebPL", "863932LyYnds", "62zleNvm", "3397eTlcuE", "913479rCcwYO", "110820FkyKWF", "776756mlSHmL", "483473YtPdQU", "2iCHiCk", "GtVHC", 
"fdDPW", "uEbLk", "Dfcnp", "emfRM", "DagDi", "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d", "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e", 
"\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e", "EuRWJ", "zxvHq", "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d", "PlrCg", "lwjaL", "pqEus", "\u0445\u0432\u0456\u043b\u0456\u043d\u0443", "LjtSl", "\u0433\u0430\u0434\u0437\u0456\u043d\u0430", "\u0433\u0430\u0434\u0437\u0456\u043d\u0443"];
var datePartGetterFactory = s;
(function(params, val) {
  var _s = s;
  for (; !![];) {
    try {
      var nodeval = -parseInt(_s(250)) * -parseInt(_s(251)) + -parseInt(_s(252)) + parseInt(_s(253)) * -parseInt(_s(254)) + parseInt(_s(255)) + parseInt(_s(256)) + parseInt(_s(257)) + parseInt(_s(258)) * -parseInt(_s(259));
      if (nodeval === val) {
        break;
      } else {
        params["push"](params["shift"]());
      }
    } catch (_0x1bfdfb) {
      params["push"](params["shift"]());
    }
  }
})(template, -240846 + -172810 + 1134563 * 1);
function s(n, d) {
  return s = function(i, def) {
    i = i - (-2648 + 2556 + 342);
    var substitution = template[i];
    return substitution;
  }, s(n, d);
}
import _0x2b4c1d from "../moment";
function t(d, type) {
  var add = s;
  var target = {
    "GtVHC" : function(number_to_dividee, divided_by) {
      return number_to_dividee % divided_by;
    },
    "fdDPW" : function(number_to_dividee, divided_by) {
      return number_to_dividee % divided_by;
    },
    "uEbLk" : function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    },
    "Dfcnp" : function(number_to_dividee, divided_by) {
      return number_to_dividee % divided_by;
    },
    "kCMXQ" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "emfRM" : function(nTilesLoaded, nTilesToLoad) {
      return nTilesLoaded >= nTilesToLoad;
    },
    "DagDi" : function(number_to_dividee, divided_by) {
      return number_to_dividee % divided_by;
    }
  };
  var pseudoNames = d["split"]("_");
  return type % (-1 * -9547 + -4970 + -4567) === -8650 + 6474 * 1 + 2177 && target[add(260)](type, -3 * -1273 + -4323 + 1 * 604) !== -28 * -294 + -623 + 131 * -58 ? pseudoNames[-3141 + 4307 + -1166] : target[add(261)](type, 9290 + 3771 * -1 + -5509) >= -1 * -8224 + -6 * -126 + -8978 && target[add(262)](target["Dfcnp"](type, 3652 + 1423 * 4 + -9334), -1 * -2558 + 2 * 1244 + -5042) && (target["kCMXQ"](target[add(263)](type, -1 * -388 + 931 + -1219), -1 * -9764 + -9686 + -68) || target[add(264)](target[add(265)](type, 
  5713 + 257 * 4 + -6641), -1 * 7727 + 6341 + 1406)) ? pseudoNames[-6 * -1579 + 16 * 191 + 737 * -17] : pseudoNames[2882 + -3381 + 167 * 3];
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
  var plural = s;
  var wordKey = {
    "EuRWJ" : plural(266),
    "zxvHq" : plural(267),
    "crmCc" : plural(268),
    "PlrCg" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
    "JnHzY" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
    "lwjaL" : "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",
    "pqEus" : plural(269),
    "yXtKS" : plural(270),
    "LjtSl" : function(name, initialValue) {
      return name === initialValue;
    },
    "QHftL" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "FYdnP" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  var map = {
    "ss" : withoutSuffix ? wordKey[plural(271)] : wordKey[plural(272)],
    "mm" : withoutSuffix ? plural(273) : wordKey["crmCc"],
    "hh" : withoutSuffix ? wordKey[plural(274)] : wordKey["JnHzY"],
    "dd" : wordKey[plural(275)],
    "MM" : wordKey[plural(276)],
    "yy" : wordKey["yXtKS"]
  };
  if (key === "m") {
    return withoutSuffix ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : plural(277);
  } else {
    return wordKey[plural(278)](key, "h") ? withoutSuffix ? plural(279) : plural(280) : wordKey[plural(281)](wordKey[plural(281)](number, " "), wordKey["FYdnP"](t, map[key], +number));
  }
}
export default _0x2b4c1d[datePartGetterFactory(282)]("be", {
  "months" : {
    "format" : datePartGetterFactory(283)["split"]("_"),
    "standalone" : "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c"[datePartGetterFactory(284)]("_")
  },
  "monthsShort" : datePartGetterFactory(285)[datePartGetterFactory(284)]("_"),
  "weekdays" : {
    "format" : datePartGetterFactory(286)[datePartGetterFactory(284)]("_"),
    "standalone" : datePartGetterFactory(287)[datePartGetterFactory(284)]("_"),
    "isFormat" : /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
  },
  "weekdaysShort" : "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431"[datePartGetterFactory(284)]("_"),
  "weekdaysMin" : "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431"[datePartGetterFactory(284)]("_"),
  "longDateFormat" : {
    "LT" : "HH:mm",
    "LTS" : "HH:mm:ss",
    "L" : "DD.MM.YYYY",
    "LL" : datePartGetterFactory(288),
    "LLL" : datePartGetterFactory(289),
    "LLLL" : datePartGetterFactory(290)
  },
  "calendar" : {
    "sameDay" : datePartGetterFactory(291),
    "nextDay" : datePartGetterFactory(292),
    "lastDay" : datePartGetterFactory(293),
    "nextWeek" : function() {
      var now = datePartGetterFactory;
      var rpm_traffic = {
        "CSIrs" : "[\u0423] dddd [\u045e] LT"
      };
      return rpm_traffic[now(294)];
    },
    "lastWeek" : function() {
      var now = datePartGetterFactory;
      var rpm_traffic = {
        "hjhKB" : "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT"
      };
      switch(this[now(295)]()) {
        case 1383 * 1 + -655 * -1 + -2038:
        case -6358 + -6 * 1413 + 14839:
        case -9881 + 7282 + 217 * 12:
        case 1 * -2453 + -20 * 11 + 2679:
          return rpm_traffic[now(296)];
        case -3563 * -1 + -606 + 1 * -2956:
        case 271 * -21 + -1680 + 7373:
        case 4636 + 7175 + -11807:
          return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT";
      }
    },
    "sameElse" : "L"
  },
  "relativeTime" : {
    "future" : "\u043f\u0440\u0430\u0437 %s",
    "past" : "%s \u0442\u0430\u043c\u0443",
    "s" : datePartGetterFactory(297),
    "m" : relativeTimeWithPlural,
    "mm" : relativeTimeWithPlural,
    "h" : relativeTimeWithPlural,
    "hh" : relativeTimeWithPlural,
    "d" : "\u0434\u0437\u0435\u043d\u044c",
    "dd" : relativeTimeWithPlural,
    "M" : datePartGetterFactory(298),
    "MM" : relativeTimeWithPlural,
    "y" : datePartGetterFactory(299),
    "yy" : relativeTimeWithPlural
  },
  "meridiemParse" : /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
  "isPM" : function(token) {
    var gotoNewOfflinePage = datePartGetterFactory;
    return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/[gotoNewOfflinePage(300)](token);
  },
  "meridiem" : function(expectedNumberOfNonCommentArgs, minute, isLower) {
    var addFormatToken = datePartGetterFactory;
    var args = {
      "txQlP" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      },
      "cgeJz" : addFormatToken(301),
      "hqTDe" : "\u0440\u0430\u043d\u0456\u0446\u044b",
      "leRKJ" : "\u0434\u043d\u044f",
      "ORavD" : addFormatToken(302)
    };
    if (args[addFormatToken(303)](expectedNumberOfNonCommentArgs, -613 * -11 + -421 + -6318)) {
      return args["cgeJz"];
    } else {
      if (args["txQlP"](expectedNumberOfNonCommentArgs, 2 * -1789 + 2 * 4825 + -6060)) {
        return args[addFormatToken(304)];
      } else {
        return args[addFormatToken(303)](expectedNumberOfNonCommentArgs, -2537 + -6145 + -8699 * -1) ? args[addFormatToken(305)] : args["ORavD"];
      }
    }
  },
  "dayOfMonthOrdinalParse" : /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
  "ordinal" : function(value, period) {
    var parseInt = datePartGetterFactory;
    var item = {
      "HChGk" : parseInt(306),
      "Daaec" : function(name, initialValue) {
        return name === initialValue;
      },
      "Xijbu" : function(number_to_dividee, divided_by) {
        return number_to_dividee % divided_by;
      },
      "rlBNf" : function(value, joiner) {
        return value !== joiner;
      },
      "tuzcp" : function(formatters, customFormatters) {
        return formatters + customFormatters;
      },
      "FKsHD" : function(formatters, customFormatters) {
        return formatters + customFormatters;
      }
    };
    switch(period) {
      case "M":
      case "d":
      case item[parseInt(307)]:
      case "w":
      case "W":
        return (item[parseInt(308)](value % (-8483 + -51 * 185 + -54 * -332), -5190 + 1417 * 7 + -163 * 29) || item[parseInt(308)](item[parseInt(309)](value, -9361 + -9556 + 18927), 8793 + -2609 + -6181 * 1)) && item[parseInt(310)](value % (837 + -27 * 360 + -691 * -13), -434 * 2 + -1351 * 3 + 1 * 4933) && item["rlBNf"](value % (-9645 + 2148 + 7597), -323 * -5 + 1068 * -1 + -534) ? value + "-\u0456" : item[parseInt(311)](value, "-\u044b");
      case "D":
        return item[parseInt(312)](value, parseInt(313));
      default:
        return value;
    }
  },
  "week" : {
    "dow" : 1,
    "doy" : 7
  }
});

