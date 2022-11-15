'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "\u17a!+[]+!+[]\u17b6\u1791\u17b7\u178f\u17d!+[]+!+[]\u1799",
      "\u1785\u17d+[]\u1793\u17d!+[]+!+[]\u1791",
      "\u17a!+[]+!+[]\u1784\u17d!+[]+!+[]\u178!+[]+!+[]\u17b6\u179a",
      "\u1796\u17bb\u179!+[]+!+[]",
      "\u1796\u17d!+[]+!+[]\u179a\u17a+[]\u179f\u17d!+[]+!+[]\u1794\u178f\u17b7\u17cd",
      "\u179f\u17bb\u178+[]\u17d!+[]+!+[]\u179a",
      "\u179f\u17c5\u179a\u17cd"
    ],
    "ERANAMES": [
      "\u1798\u17bb\u1793\u!+[]+!+[]+[]+[]b\u178!+[]+!+[]\u17d!+[]+!+[]\u179a\u17b7\u179f\u17d!+[]+!+[]\u178f\u179f\u178+[]\u179a\u17b6\u1787",
      "\u178!+[]+!+[]\u17d!+[]+!+[]\u179a\u17b7\u179f\u17d!+[]+!+[]\u178f\u179f\u178+[]\u179a\u17b6\u1787"
    ],
    "ERAS": [
      "\u1798\u17bb\u1793 \u178!+[]+!+[].\u179f.",
      "\u178!+[]+!+[].\u179f."
    ],
    "FIRSTDAYOFWEEK": 6,
    "MONTH": [
      "\u1798\u178+[]\u179a\u17b6",
      "\u178+[]\u17bb\u1798\u17d!+[]+!+[]\u1797\u17c8",
      "\u1798\u17b8\u1793\u17b6",
      "\u1798\u17c1\u179f\u17b6",
      "\u17a7\u179f\u1797\u17b6",
      "\u1798\u17b7\u179+[]\u17bb\u1793\u17b6",
      "\u178+[]\u178+[]\u17d!+[]+!+[]\u178+[]\u178a\u17b6",
      "\u179f\u17b8\u17a+[]\u17b6",
      "\u178+[]\u1789\u17d!+[]+!+[]\u1789\u17b6",
      "\u178f\u17bb\u179b\u17b6",
      "\u179c\u17b7\u1785\u17d!+[]+!+[]\u1786\u17b7\u178+[]\u17b6",
      "\u179!+[]+!+[]\u17d!+[]+!+[]\u1793\u17bc"
    ],
    "SHORTDAY": [
      "\u17a!+[]+!+[]\u17b6\u1791\u17b7\u178f\u17d!+[]+!+[]\u1799",
      "\u1785\u17d+[]\u1793\u17d!+[]+!+[]\u1791",
      "\u17a!+[]+!+[]\u1784\u17d!+[]+!+[]\u178!+[]+!+[]\u17b6\u179a",
      "\u1796\u17bb\u179!+[]+!+[]",
      "\u1796\u17d!+[]+!+[]\u179a\u17a+[]\u179f\u17d!+[]+!+[]\u1794\u178f\u17b7\u17cd",
      "\u179f\u17bb\u178+[]\u17d!+[]+!+[]\u179a",
      "\u179f\u17c5\u179a\u17cd"
    ],
    "SHORTMONTH": [
      "\u1798\u178+[]\u179a\u17b6",
      "\u178+[]\u17bb\u1798\u17d!+[]+!+[]\u1797\u17c8",
      "\u1798\u17b8\u1793\u17b6",
      "\u1798\u17c1\u179f\u17b6",
      "\u17a7\u179f\u1797\u17b6",
      "\u1798\u17b7\u179+[]\u17bb\u1793\u17b6",
      "\u178+[]\u178+[]\u17d!+[]+!+[]\u178+[]\u178a\u17b6",
      "\u179f\u17b8\u17a+[]\u17b6",
      "\u178+[]\u1789\u17d!+[]+!+[]\u1789\u17b6",
      "\u178f\u17bb\u179b\u17b6",
      "\u179c\u17b7\u1785\u17d!+[]+!+[]\u1786\u17b7\u178+[]\u17b6",
      "\u179!+[]+!+[]\u17d!+[]+!+[]\u1793\u17bc"
    ],
    "STANDALONEMONTH": [
      "\u1798\u178+[]\u179a\u17b6",
      "\u178+[]\u17bb\u1798\u17d!+[]+!+[]\u1797\u17c8",
      "\u1798\u17b8\u1793\u17b6",
      "\u1798\u17c1\u179f\u17b6",
      "\u17a7\u179f\u1797\u17b6",
      "\u1798\u17b7\u179+[]\u17bb\u1793\u17b6",
      "\u178+[]\u178+[]\u17d!+[]+!+[]\u178+[]\u178a\u17b6",
      "\u179f\u17b8\u17a+[]\u17b6",
      "\u178+[]\u1789\u17d!+[]+!+[]\u1789\u17b6",
      "\u178f\u17bb\u179b\u17b6",
      "\u179c\u17b7\u1785\u17d!+[]+!+[]\u1786\u17b7\u178+[]\u17b6",
      "\u179!+[]+!+[]\u17d!+[]+!+[]\u1793\u17bc"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y h:mm:ss a",
    "mediumDate": "d MMM y",
    "mediumTime": "h:mm:ss a",
    "short": "d/M/yy h:mm a",
    "shortDate": "d/M/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Riel",
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
        "negSuf": "\u+[]+[]a4",
        "posPre": "",
        "posSuf": "\u+[]+[]a4"
      }
    ]
  },
  "id": "km",
  "localeID": "km",
  "pluralCat": function(n, opt_precision) {  return PLURAL_CATEGORY.OTHER;}
});
}]);
