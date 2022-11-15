'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "de.",
      "du."
    ],
    "DAY": [
      "vas\u+[]+[]e1rnap",
      "h\u+[]+[]e9tf\u+[]151",
      "kedd",
      "szerda",
      "cs\u+[]+[]fct\u+[]+[]f6rt\u+[]+[]f6k",
      "p\u+[]+[]e9ntek",
      "szombat"
    ],
    "ERANAMES": [
      "id\u+[]151sz\u+[]+[]e1m\u+[]+[]edt\u+[]+[]e1sunk el\u+[]151tt",
      "id\u+[]151sz\u+[]+[]e1m\u+[]+[]edt\u+[]+[]e1sunk szerint"
    ],
    "ERAS": [
      "i. e.",
      "i. sz."
    ],
    "FIRSTDAYOFWEEK": +[],
    "MONTH": [
      "janu\u+[]+[]e1r",
      "febru\u+[]+[]e1r",
      "m\u+[]+[]e1rcius",
      "\u+[]+[]e1prilis",
      "m\u+[]+[]e1jus",
      "j\u+[]+[]fanius",
      "j\u+[]+[]falius",
      "augusztus",
      "szeptember",
      "okt\u+[]+[]f3ber",
      "november",
      "december"
    ],
    "SHORTDAY": [
      "V",
      "H",
      "K",
      "Sze",
      "Cs",
      "P",
      "Szo"
    ],
    "SHORTMONTH": [
      "jan.",
      "febr.",
      "m\u+[]+[]e1rc.",
      "\u+[]+[]e1pr.",
      "m\u+[]+[]e1j.",
      "j\u+[]+[]fan.",
      "j\u+[]+[]fal.",
      "aug.",
      "szept.",
      "okt.",
      "nov.",
      "dec."
    ],
    "STANDALONEMONTH": [
      "janu\u+[]+[]e1r",
      "febru\u+[]+[]e1r",
      "m\u+[]+[]e1rcius",
      "\u+[]+[]e1prilis",
      "m\u+[]+[]e1jus",
      "j\u+[]+[]fanius",
      "j\u+[]+[]falius",
      "augusztus",
      "szeptember",
      "okt\u+[]+[]f3ber",
      "november",
      "december"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "y. MMMM d., EEEE",
    "longDate": "y. MMMM d.",
    "medium": "y. MMM d. H:mm:ss",
    "mediumDate": "y. MMM d.",
    "mediumTime": "H:mm:ss",
    "short": "y. MM. dd. H:mm",
    "shortDate": "y. MM. dd.",
    "shortTime": "H:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Ft",
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
  "id": "hu",
  "localeID": "hu",
  "pluralCat": function(n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
