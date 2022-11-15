'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
  function convertToSecondsWithFrames(time) {
    time = time + "";
    var total_len = time.indexOf(".");
    return total_len == -1 ? 0 : time.length - total_len - 1;
  }
  function t(end, r) {
    var e = r;
    if (undefined === e) {
      e = Math.min(convertToSecondsWithFrames(end), 3);
    }
    var t = Math.pow(10, e);
    var overlapping = (end * t | 0) % t;
    return {
      v : e,
      f : overlapping
    };
  }
  var PLURAL_CATEGORY = {
    ZERO : "zero",
    ONE : "one",
    TWO : "two",
    FEW : "few",
    MANY : "many",
    OTHER : "other"
  };
  $provide.value("$locale", {
    DATETIME_FORMATS : {
      AMPMS : ["AM", "PM"],
      DAY : ["Alahady", "Alatsinainy", "Talata", "Alarobia", "Alakamisy", "Zoma", "Asabotsy"],
      ERANAMES : ["Alohan\u2019i JK", "Aorian\u2019i JK"],
      ERAS : ["BC", "AD"],
      FIRSTDAYOFWEEK : 0,
      MONTH : ["Janoary", "Febroary", "Martsa", "Aprily", "Mey", "Jona", "Jolay", "Aogositra", "Septambra", "Oktobra", "Novambra", "Desambra"],
      SHORTDAY : ["Alah", "Alats", "Tal", "Alar", "Alak", "Zom", "Asab"],
      SHORTMONTH : ["Jan", "Feb", "Mar", "Apr", "Mey", "Jon", "Jol", "Aog", "Sep", "Okt", "Nov", "Des"],
      STANDALONEMONTH : ["Janoary", "Febroary", "Martsa", "Aprily", "Mey", "Jona", "Jolay", "Aogositra", "Septambra", "Oktobra", "Novambra", "Desambra"],
      WEEKENDRANGE : [5, 6],
      fullDate : "EEEE d MMMM y",
      longDate : "d MMMM y",
      medium : "y MMM d HH:mm:ss",
      mediumDate : "y MMM d",
      mediumTime : "HH:mm:ss",
      short : "y-MM-dd HH:mm",
      shortDate : "y-MM-dd",
      shortTime : "HH:mm"
    },
    NUMBER_FORMATS : {
      CURRENCY_SYM : "Ar",
      DECIMAL_SEP : ".",
      GROUP_SEP : ",",
      PATTERNS : [{
        gSize : 3,
        lgSize : 3,
        maxFrac : 3,
        minFrac : 0,
        minInt : 1,
        negPre : "-",
        negSuf : "",
        posPre : "",
        posSuf : ""
      }, {
        gSize : 3,
        lgSize : 3,
        maxFrac : 2,
        minFrac : 2,
        minInt : 1,
        negPre : "-\u00a4\u00a0",
        negSuf : "",
        posPre : "\u00a4\u00a0",
        posSuf : ""
      }]
    },
    id : "mg",
    localeID : "mg",
    pluralCat : function(n, r) {
      var i = n | 0;
      var o = t(n, r);
      if (i == 1 && o.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }
      return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

