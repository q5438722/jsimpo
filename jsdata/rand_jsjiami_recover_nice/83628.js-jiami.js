'use strict';
angular["module"]("ngLocale", [], ["$provide", function(PL$102) {
  function wrap(p) {
    p = p + "";
    var dx = p["indexOf"](".");
    return dx == -1 ? 0 : p["length"] - dx - 1;
  }
  function build(x, y) {
    var r = y;
    if (undefined === r) {
      r = Math["min"](_0x222286["KnSSK"](wrap, x), wrap(x));
    }
    var n = Math["pow"](10, r);
    var i = (x * n | 0) % n;
    return {
      "v" : r,
      "f" : i
    };
  }
  var params = {
    "ZERO" : _0x222286["TRQiF"],
    "TWO" : _0x222286["wVvXh"],
    "FEW" : _0x222286["RVNDc"],
    "MANY" : _0x222286["wkBGA"]
  };
  PL$102["value"](_0x222286["PRbRn"], {
    "DATETIME_FORMATS" : {
      "AMPMS" : ["AM", "PM"],
      "DAY" : ["Alahady", _0x222286["kTeQS"], "Talata", _0x222286["treFb"], _0x222286["QyciP"], _0x222286["NgGkS"], "Asabotsy"],
      "ERANAMES" : [_0x222286["IintV"], _0x222286["sefgk"]],
      "ERAS" : ["BC", "AD"],
      "FIRSTDAYOFWEEK" : 0,
      "MONTH" : [_0x222286["IbAwQ"], _0x222286["VIAmz"], _0x222286["CasrF"], _0x222286["Fgwzd"], _0x222286["yNYBW"], _0x222286["bnYep"], "Jolay", "Aogositra", _0x222286["CEQZW"], _0x222286["sjFeg"], _0x222286["MMNdr"], _0x222286["EpvxE"]],
      "SHORTDAY" : ["Alah", _0x222286["piixH"], _0x222286["MWbhw"], _0x222286["ksUNv"], _0x222286["RmFKk"], _0x222286["mzhWp"], _0x222286["UxvPj"]],
      "SHORTMONTH" : [_0x222286["HXvhE"], _0x222286["rhOQH"], _0x222286["rofqt"], "Apr", "Mey", _0x222286["FEFUL"], _0x222286["ciKEL"], "Aog", _0x222286["oiWNB"], "Okt", "Nov", "Des"],
      "STANDALONEMONTH" : ["Janoary", _0x222286["VIAmz"], _0x222286["CasrF"], _0x222286["Fgwzd"], _0x222286["yNYBW"], _0x222286["bnYep"], "Jolay", _0x222286["OZRUY"], _0x222286["CEQZW"], _0x222286["sjFeg"], "Novambra", _0x222286["EpvxE"]],
      "WEEKENDRANGE" : [5, 6],
      "fullDate" : _0x222286["axBlD"],
      "longDate" : "d MMMM y",
      "medium" : _0x222286["xrTfJ"],
      "mediumDate" : _0x222286["NzBTE"],
      "mediumTime" : "HH:mm:ss",
      "short" : "y-MM-dd HH:mm",
      "shortDate" : _0x222286["pjaoX"],
      "shortTime" : _0x222286["kyLzB"]
    },
    "NUMBER_FORMATS" : {
      "CURRENCY_SYM" : "Ar",
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
        "negPre" : "-\u00a4\u00a0",
        "negSuf" : "",
        "posPre" : "\u00a4\u00a0",
        "posSuf" : ""
      }]
    },
    "id" : "mg",
    "localeID" : "mg",
    "pluralCat" : function(value, n) {
      var num = value | 0;
      var result = build(value, n);
      if (num == 1 && result["v"] == 0) {
        return params["ONE"];
      }
      return params["OTHER"];
    }
  });
}]);

