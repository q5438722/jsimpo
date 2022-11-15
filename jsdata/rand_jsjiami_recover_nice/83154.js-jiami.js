'use strict';
angular["module"]("ngLocale", [], ["$provide", function(fns) {
  var resp = {};
  var PLURAL_CATEGORY = {
    "ZERO" : resp["nVmtm"],
    "ONE" : resp["YqICk"],
    "TWO" : resp["hLJkU"],
    "FEW" : resp["hhopa"],
    "MANY" : resp["AJcUO"],
    "OTHER" : resp["BFiHB"]
  };
  fns["value"](resp["zQNaf"], {
    "DATETIME_FORMATS" : {
      "AMPMS" : ["\u4e0a\u5348", "\u4e0b\u5348"],
      "DAY" : [resp["tgnwT"], resp["YtvAU"], "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", resp["rIzGG"], resp["suVco"], resp["aCuLg"]],
      "ERANAMES" : [resp["pcVSJ"], "\u516c\u5143"],
      "ERAS" : ["\u516c\u5143\u524d", "\u516c\u5143"],
      "FIRSTDAYOFWEEK" : 6,
      "MONTH" : ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", resp["ltyEf"], resp["OSAgi"], resp["YuwoX"]],
      "SHORTDAY" : ["\u9031\u65e5", "\u9031\u4e00", "\u9031\u4e8c", "\u9031\u4e09", "\u9031\u56db", "\u9031\u4e94", "\u9031\u516d"],
      "SHORTMONTH" : ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", resp["ltyEf"], resp["OSAgi"], resp["YuwoX"]],
      "STANDALONEMONTH" : ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", resp["YuwoX"]],
      "WEEKENDRANGE" : [5, 6],
      "fullDate" : resp["iazqN"],
      "longDate" : resp["ikGck"],
      "medium" : resp["pbJRP"],
      "mediumDate" : resp["ikGck"],
      "mediumTime" : resp["gPPzp"],
      "short" : resp["AKNxh"],
      "shortDate" : "d/M/y",
      "shortTime" : resp["FzqrI"]
    },
    "NUMBER_FORMATS" : {
      "CURRENCY_SYM" : "$",
      "DECIMAL_SEP" : ".",
      "GROUP_SEP" : ",",
      "PATTERNS" : [{
        "gSize" : 3,
        "lgSize" : 3,
        "maxFrac" : 3,
        "minFrac" : 0,
        "minInt" : 1,
        "negPre" : "-",
        "negSuf" : "",
        "posPre" : "",
        "posSuf" : ""
      }, {
        "gSize" : 3,
        "lgSize" : 3,
        "maxFrac" : 2,
        "minFrac" : 2,
        "minInt" : 1,
        "negPre" : "-\u00a4",
        "negSuf" : "",
        "posPre" : "\u00a4",
        "posSuf" : ""
      }]
    },
    "id" : resp["dKSCd"],
    "localeID" : "zh_Hant_HK",
    "pluralCat" : function(n, opt_precision) {
      return PLURAL_CATEGORY["OTHER"];
    }
  });
}]);

