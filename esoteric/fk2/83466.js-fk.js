'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "e paradites",
      "e pasdites"
    ],
    "DAY": [
      "e diel",
      "e h\u+[]+[]ebn\u+[]+[]eb",
      "e mart\u+[]+[]eb",
      "e m\u+[]+[]ebrkur\u+[]+[]eb",
      "e enjte",
      "e premte",
      "e shtun\u+[]+[]eb"
    ],
    "ERANAMES": [
      "para Krishtit",
      "mbas Krishtit"
    ],
    "ERAS": [
      "p.K.",
      "mb.K."
    ],
    "FIRSTDAYOFWEEK": +[],
    "MONTH": [
      "janar",
      "shkurt",
      "mars",
      "prill",
      "maj",
      "qershor",
      "korrik",
      "gusht",
      "shtator",
      "tetor",
      "n\u+[]+[]ebntor",
      "dhjetor"
    ],
    "SHORTDAY": [
      "Die",
      "H\u+[]+[]ebn",
      "Mar",
      "M\u+[]+[]ebr",
      "Enj",
      "Pre",
      "Sht"
    ],
    "SHORTMONTH": [
      "jan",
      "shk",
      "mar",
      "pri",
      "maj",
      "qer",
      "kor",
      "gsh",
      "sht",
      "tet",
      "n\u+[]+[]ebn",
      "dhj"
    ],
    "STANDALONEMONTH": [
      "Janar",
      "Shkurt",
      "Mars",
      "Prill",
      "Maj",
      "Qershor",
      "Korrik",
      "Gusht",
      "Shtator",
      "Tetor",
      "N\u+[]+[]ebntor",
      "Dhjetor"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y h:mm:ss a",
    "mediumDate": "d MMM y",
    "mediumTime": "h:mm:ss a",
    "short": "d.M.yy h:mm a",
    "shortDate": "d.M.yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Lek",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": "\u+[]+[]a+[]",
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
        "maxFrac": +[],
        "minFrac": +[],
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\u+[]+[]a+[]\u+[]+[]a4",
        "posPre": "",
        "posSuf": "\u+[]+[]a+[]\u+[]+[]a4"
      }
    ]
  },
  "id": "sq-al",
  "localeID": "sq_AL",
  "pluralCat": function(n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
