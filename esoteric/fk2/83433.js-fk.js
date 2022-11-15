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
      "a. m.",
      "p. m."
    ],
    "DAY": [
      "diumenge",
      "dilluns",
      "dimarts",
      "dimecres",
      "dijous",
      "divendres",
      "dissabte"
    ],
    "ERANAMES": [
      "abans de Crist",
      "despr\u+[]+[]e9s de Crist"
    ],
    "ERAS": [
      "aC",
      "dC"
    ],
    "FIRSTDAYOFWEEK": +[],
    "MONTH": [
      "de gener",
      "de febrer",
      "de mar\u+[]+[]e7",
      "d\u!+[]+!+[]+[]19abril",
      "de maig",
      "de juny",
      "de juliol",
      "d\u!+[]+!+[]+[]19agost",
      "de setembre",
      "d\u!+[]+!+[]+[]19octubre",
      "de novembre",
      "de desembre"
    ],
    "SHORTDAY": [
      "dg.",
      "dl.",
      "dt.",
      "dc.",
      "dj.",
      "dv.",
      "ds."
    ],
    "SHORTMONTH": [
      "de gen.",
      "de febr.",
      "de mar\u+[]+[]e7",
      "d\u!+[]+!+[]+[]19abr.",
      "de maig",
      "de juny",
      "de jul.",
      "d\u!+[]+!+[]+[]19ag.",
      "de set.",
      "d\u!+[]+!+[]+[]19oct.",
      "de nov.",
      "de des."
    ],
    "STANDALONEMONTH": [
      "gener",
      "febrer",
      "mar\u+[]+[]e7",
      "abril",
      "maig",
      "juny",
      "juliol",
      "agost",
      "setembre",
      "octubre",
      "novembre",
      "desembre"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE, d MMMM 'de' y",
    "longDate": "d MMMM 'de' y",
    "medium": "d MMM y H:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "H:mm:ss",
    "short": "d/M/yy H:mm",
    "shortDate": "d/M/yy",
    "shortTime": "H:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u!+[]+!+[]+[]ac",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": ".",
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
        "negPre": "-",
        "negSuf": "\u+[]+[]a+[]\u+[]+[]a4",
        "posPre": "",
        "posSuf": "\u+[]+[]a+[]\u+[]+[]a4"
      }
    ]
  },
  "id": "ca-fr",
  "localeID": "ca_FR",
  "pluralCat": function(n, opt_precision) {  var i = n | +[];  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == +[]) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
