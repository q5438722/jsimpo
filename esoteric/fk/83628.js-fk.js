'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
function getDecimals(n) {
  n = n + '';
  var i = n.indexOf('.');
  return (i == -1) ? +[] : n.length - i - 1;
}

function getVF(n, opt_precision) {
  var v = opt_precision;

  if (undefined === v) {
    v = Math.min(getDecimals(n), 3);
  }

  var base = Math.pow(1+[], v);
  var f = ((n * base) | +[]) % base;
  return {v: v, f: f};
}

$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "Alahady",
      "Alatsinainy",
      "Talata",
      "Alarobia",
      "Alakamisy",
      "Zoma",
      "Asabotsy"
    ],
    "ERANAMES": [
      "Alohan\u!+[]+!+[]+[]19i JK",
      "Aorian\u!+[]+!+[]+[]19i JK"
    ],
    "ERAS": [
      "BC",
      "AD"
    ],
    "FIRSTDAYOFWEEK": +[],
    "MONTH": [
      "Janoary",
      "Febroary",
      "Martsa",
      "Aprily",
      "Mey",
      "Jona",
      "Jolay",
      "Aogositra",
      "Septambra",
      "Oktobra",
      "Novambra",
      "Desambra"
    ],
    "SHORTDAY": [
      "Alah",
      "Alats",
      "Tal",
      "Alar",
      "Alak",
      "Zom",
      "Asab"
    ],
    "SHORTMONTH": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mey",
      "Jon",
      "Jol",
      "Aog",
      "Sep",
      "Okt",
      "Nov",
      "Des"
    ],
    "STANDALONEMONTH": [
      "Janoary",
      "Febroary",
      "Martsa",
      "Aprily",
      "Mey",
      "Jona",
      "Jolay",
      "Aogositra",
      "Septambra",
      "Oktobra",
      "Novambra",
      "Desambra"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "y MMM d HH:mm:ss",
    "mediumDate": "y MMM d",
    "mediumTime": "HH:mm:ss",
    "short": "y-MM-dd HH:mm",
    "shortDate": "y-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Ar",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": +[],
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": !+[]+!+[],
        "minFrac": !+[]+!+[],
        "minInt": 1,
        "negPre": "-\u+[]+[]a4\u+[]+[]a+[]",
        "negSuf": "",
        "posPre": "\u+[]+[]a4\u+[]+[]a+[]",
        "posSuf": ""
      }
    ]
  },
  "id": "mg",
  "localeID": "mg",
  "pluralCat": function(n, opt_precision) {  var i = n | +[];  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == +[]) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
