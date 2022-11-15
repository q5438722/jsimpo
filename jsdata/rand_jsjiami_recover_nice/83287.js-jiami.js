'use strict';
angular["module"]("ngLocale", [], ["$provide", function(properties) {
  var item = {};
  var params = {
    "ZERO" : item["eHDqp"],
    "FEW" : item["IEsuY"],
    "MANY" : item["thzVB"],
    "OTHER" : item["zuajM"]
  };
  properties["value"](item["AnLRA"], {
    "DATETIME_FORMATS" : {
      "AMPMS" : ["\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07", item["DVwfZ"]],
      "DAY" : ["\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c", item["xWYTb"], item["VvCgc"], item["lVanD"], item["IAeRQ"], item["piQZI"], item["PSbbE"]],
      "ERANAMES" : [item["uRoEM"], item["IOQnG"]],
      "ERAS" : [item["ppLDy"], item["UAVbV"]],
      "FIRSTDAYOFWEEK" : 6,
      "MONTH" : ["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21", "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c", item["WJydP"], item["oRkxu"], item["JcnAt"], item["gMPLU"], item["IhOwO"], "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21", item["hoFAj"], item["pEhMy"], item["BsLWs"], item["qLhrc"]],
      "SHORTDAY" : ["\u0e2d\u0e32.", "\u0e08.", "\u0e2d.", "\u0e1e.", item["proHe"], "\u0e28.", "\u0e2a."],
      "SHORTMONTH" : ["\u0e21.\u0e04.", "\u0e01.\u0e1e.", item["kLSBU"], item["rRphr"], item["pRWRu"], item["sFzqu"], item["qbURK"], item["TXRoK"], item["gcRtJ"], item["OTggN"], "\u0e1e.\u0e22.", item["uhzaP"]],
      "STANDALONEMONTH" : [item["UfHtp"], "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c", item["WJydP"], item["oRkxu"], item["JcnAt"], "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19", item["IhOwO"], item["HBYUw"], item["hoFAj"], item["pEhMy"], "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19", "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"],
      "WEEKENDRANGE" : [5, 6],
      "fullDate" : item["iJHmv"],
      "longDate" : item["qUOnl"],
      "medium" : item["eWACD"],
      "mediumDate" : item["gJTGd"],
      "mediumTime" : "HH:mm:ss",
      "short" : item["XSaED"],
      "shortDate" : item["ZlPef"],
      "shortTime" : "HH:mm"
    },
    "NUMBER_FORMATS" : {
      "CURRENCY_SYM" : "\u0e3f",
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
    "id" : "th",
    "localeID" : "th",
    "pluralCat" : function(n, opt_precision) {
      return params["OTHER"];
    }
  });
}]);

