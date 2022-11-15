'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "a.m.",
      "p.m."
    ],
    "DAY": [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi"
    ],
    "ERANAMES": [
      "avant J\u+[]+[]e9sus-Christ",
      "apr\u+[]+[]e8s J\u+[]+[]e9sus-Christ"
    ],
    "ERAS": [
      "av. J.-C.",
      "ap. J.-C."
    ],
    "FIRSTDAYOFWEEK": 6,
    "MONTH": [
      "janvier",
      "f\u+[]+[]e9vrier",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "ao\u+[]+[]fbt",
      "septembre",
      "octobre",
      "novembre",
      "d\u+[]+[]e9cembre"
    ],
    "SHORTDAY": [
      "dim.",
      "lun.",
      "mar.",
      "mer.",
      "jeu.",
      "ven.",
      "sam."
    ],
    "SHORTMONTH": [
      "janv.",
      "f\u+[]+[]e9vr.",
      "mars",
      "avr.",
      "mai",
      "juin",
      "juill.",
      "ao\u+[]+[]fbt",
      "sept.",
      "oct.",
      "nov.",
      "d\u+[]+[]e9c."
    ],
    "STANDALONEMONTH": [
      "janvier",
      "f\u+[]+[]e9vrier",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "ao\u+[]+[]fbt",
      "septembre",
      "octobre",
      "novembre",
      "d\u+[]+[]e9cembre"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "yy-MM-dd HH 'h' mm",
    "shortDate": "yy-MM-dd",
    "shortTime": "HH 'h' mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "$",
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
  "id": "fr-ca",
  "localeID": "fr_CA",
  "pluralCat": function(n, opt_precision) {  var i = n | +[];  if (i == +[] || i == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
