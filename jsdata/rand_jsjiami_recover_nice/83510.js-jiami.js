'use strict';
angular["module"]("ngLocale", [], ["$provide", function(varWikidataTypes) {
  var PLURAL_CATEGORY = {
    "ZERO" : _0x403c4d["QnVEr"],
    "ONE" : _0x403c4d["ULIAu"],
    "TWO" : _0x403c4d["gyyxw"],
    "FEW" : _0x403c4d["GqWYP"],
    "MANY" : _0x403c4d["rCTSy"],
    "OTHER" : _0x403c4d["RtFNO"]
  };
  varWikidataTypes["value"]("$locale", {
    "DATETIME_FORMATS" : {
      "AMPMS" : ["da manh\u00e3", "da tarde"],
      "DAY" : [_0x403c4d["pnLej"], "segunda-feira", _0x403c4d["JcFQv"], "quarta-feira", _0x403c4d["wCDhe"], _0x403c4d["TbLob"], _0x403c4d["eyqsG"]],
      "ERANAMES" : [_0x403c4d["KaAAe"], _0x403c4d["cYluD"]],
      "ERAS" : [_0x403c4d["SEOsC"], _0x403c4d["dfTqT"]],
      "FIRSTDAYOFWEEK" : 0,
      "MONTH" : ["janeiro", _0x403c4d["gYrbb"], _0x403c4d["fctre"], _0x403c4d["zVqJv"], "maio", _0x403c4d["HkzgC"], _0x403c4d["lNSiL"], "agosto", _0x403c4d["eSTEq"], "outubro", "novembro", "dezembro"],
      "SHORTDAY" : ["domingo", "segunda", _0x403c4d["bNsEE"], "quarta", "quinta", _0x403c4d["rsTCD"], _0x403c4d["eyqsG"]],
      "SHORTMONTH" : [_0x403c4d["SlSOx"], _0x403c4d["vcsdx"], "mar", _0x403c4d["AAiDH"], "mai", _0x403c4d["qcIpn"], _0x403c4d["PLyUA"], _0x403c4d["mbckc"], "set", _0x403c4d["dWDWG"], _0x403c4d["JaKKS"], "dez"],
      "STANDALONEMONTH" : [_0x403c4d["vqAMA"], _0x403c4d["gYrbb"], _0x403c4d["fctre"], _0x403c4d["zVqJv"], _0x403c4d["dZLiv"], "junho", _0x403c4d["lNSiL"], _0x403c4d["Fvlge"], _0x403c4d["eSTEq"], _0x403c4d["eWMQM"], _0x403c4d["gHDow"], "dezembro"],
      "WEEKENDRANGE" : [5, 6],
      "fullDate" : _0x403c4d["JRhdH"],
      "longDate" : _0x403c4d["HDVLs"],
      "medium" : _0x403c4d["dkpwA"],
      "mediumDate" : "dd/MM/y",
      "mediumTime" : "HH:mm:ss",
      "short" : _0x403c4d["Ospxt"],
      "shortDate" : _0x403c4d["svMDn"],
      "shortTime" : _0x403c4d["OrILM"]
    },
    "NUMBER_FORMATS" : {
      "CURRENCY_SYM" : "Db",
      "DECIMAL_SEP" : ",",
      "GROUP_SEP" : "\u00a0",
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
        "maxFrac" : 0,
        "minFrac" : 0,
        "minInt" : 1,
        "negPre" : "-",
        "negSuf" : "\u00a0\u00a4",
        "posPre" : "",
        "posSuf" : "\u00a0\u00a4"
      }]
    },
    "id" : _0x403c4d["HESFK"],
    "localeID" : _0x403c4d["cArQR"],
    "pluralCat" : function(n, opt_precision) {
      var i = n | 0;
      if (i >= 0 && i <= 1) {
        return PLURAL_CATEGORY["ONE"];
      }
      return PLURAL_CATEGORY["OTHER"];
    }
  });
}]);

