'use strict';
angular["module"]("ngLocale", [], ["$provide", function(varWikidataTypes) {
  var LOD_DIST = {
    "ONE" : _0x3e666f["gBjnT"],
    "TWO" : _0x3e666f["wTAlY"],
    "MANY" : _0x3e666f["GeOdz"]
  };
  varWikidataTypes["value"]("$locale", {
    "DATETIME_FORMATS" : {
      "AMPMS" : ["AM", "PM"],
      "DAY" : ["dimanche", _0x3e666f["REnKW"], _0x3e666f["JEdFd"], _0x3e666f["sFgnH"], "jeudi", _0x3e666f["mcuuD"], _0x3e666f["ALyNU"]],
      "ERANAMES" : ["avant J\u00e9sus-Christ", _0x3e666f["cUCxM"]],
      "ERAS" : [_0x3e666f["Djocp"], _0x3e666f["dFsUA"]],
      "FIRSTDAYOFWEEK" : 0,
      "MONTH" : [_0x3e666f["IOplJ"], _0x3e666f["ItnVH"], _0x3e666f["vjQpI"], "avril", _0x3e666f["tJGLE"], _0x3e666f["LLuCd"], _0x3e666f["KwPkK"], "ao\u00fbt", _0x3e666f["xFbxS"], _0x3e666f["DtlHn"], _0x3e666f["wmsLt"], _0x3e666f["PpZcO"]],
      "SHORTDAY" : ["dim.", _0x3e666f["bMOfX"], _0x3e666f["MwCaG"], _0x3e666f["cGsNV"], "jeu.", _0x3e666f["SsAhB"], _0x3e666f["jPXBK"]],
      "SHORTMONTH" : ["janv.", "f\u00e9vr.", "mars", _0x3e666f["GvVAA"], _0x3e666f["tJGLE"], _0x3e666f["LLuCd"], _0x3e666f["Ldkmb"], "ao\u00fbt", "sept.", _0x3e666f["XjrZe"], "nov.", _0x3e666f["Hlxnv"]],
      "STANDALONEMONTH" : [_0x3e666f["IOplJ"], _0x3e666f["ItnVH"], _0x3e666f["vjQpI"], _0x3e666f["EJnfT"], _0x3e666f["tJGLE"], "juin", _0x3e666f["KwPkK"], "ao\u00fbt", "septembre", _0x3e666f["DtlHn"], _0x3e666f["wmsLt"], _0x3e666f["PpZcO"]],
      "WEEKENDRANGE" : [5, 6],
      "fullDate" : _0x3e666f["fVMFt"],
      "longDate" : "d MMMM y",
      "medium" : _0x3e666f["nGMVn"],
      "mediumDate" : _0x3e666f["SNeZP"],
      "mediumTime" : _0x3e666f["TLEbn"],
      "short" : _0x3e666f["dJBLx"],
      "shortDate" : "dd/MM/y",
      "shortTime" : "HH:mm"
    },
    "NUMBER_FORMATS" : {
      "CURRENCY_SYM" : _0x3e666f["bplrA"],
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
    "id" : _0x3e666f["dUYcp"],
    "localeID" : _0x3e666f["qyMyd"],
    "pluralCat" : function(n, opt_precision) {
      var i = n | 0;
      if (i == 0 || i == 1) {
        return LOD_DIST["ONE"];
      }
      return LOD_DIST["OTHER"];
    }
  });
}]);

