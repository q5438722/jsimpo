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
      "\u+[]6!+[]+!+[]7\u+[]64e\u+[]6!+[]+!+[]a\u+[]6be\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]698\u+[]654\u+[]646\u+[]65b\u+[]6!+[]+!+[]f\u+[]631\u+[]655\u+[]631\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]6!+[]+!+[]8\u+[]648\u+[]65a\u+[]645\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]6!+[]+!+[]8\u+[]648\u+[]6!+[]+!+[]f\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]6!+[]+!+[]8\u+[]631\u+[]65b\u+[]66e\u+[]6ea\u+[]633\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]6!+[]+!+[]c\u+[]64f\u+[]645\u+[]6c1",
      "\u+[]6!+[]+!+[]8\u+[]679\u+[]648\u+[]6!+[]+!+[]7\u+[]631"
    ],
    "ERANAMES": [
      "\u+[]64!+[]+!+[]\u+[]6!+[]+!+[]8\u+[]655\u+[]644 \u+[]645\u+[]633\u+[]6cc\u+[]656\u+[]6!+[]+!+[]d",
      "\u+[]639\u+[]6cc\u+[]656\u+[]633\u+[]648\u+[]6cc \u+[]633\u+[]646\u+[]6c1\u+[]655"
    ],
    "ERAS": [
      "\u+[]6!+[]+!+[]8\u+[]6cc \u+[]633\u+[]6cc",
      "\u+[]6!+[]+!+[]7\u+[]6d!+[]+!+[] \u+[]688\u+[]6cc"
    ],
    "FIRSTDAYOFWEEK": 6,
    "MONTH": [
      "\u+[]6!+[]+!+[]c\u+[]646\u+[]6!+[]+!+[]4\u+[]631\u+[]6cc",
      "\u+[]641\u+[]631\u+[]6!+[]+!+[]4\u+[]631\u+[]6cc",
      "\u+[]645\u+[]6!+[]+!+[]7\u+[]631\u+[]655\u+[]686",
      "\u+[]6!+[]+!+[]7\u+[]67e\u+[]631\u+[]6cc\u+[]644",
      "\u+[]645\u+[]6cc\u+[]654",
      "\u+[]6!+[]+!+[]c\u+[]648\u+[]657\u+[]646",
      "\u+[]6!+[]+!+[]c\u+[]648\u+[]657\u+[]644\u+[]6!+[]+!+[]7\u+[]6cc\u+[]6cc",
      "\u+[]6!+[]+!+[]7\u+[]6af\u+[]633\u+[]6!+[]+!+[]a",
      "\u+[]633\u+[]6!+[]+!+[]a\u+[]645\u+[]6!+[]+!+[]8\u+[]631",
      "\u+[]6!+[]+!+[]7\u+[]6a9\u+[]6!+[]+!+[]a\u+[]648\u+[]657\u+[]6!+[]+!+[]8\u+[]631",
      "\u+[]646\u+[]648\u+[]645\u+[]6!+[]+!+[]8\u+[]631",
      "\u+[]6!+[]+!+[]f\u+[]633\u+[]645\u+[]6!+[]+!+[]8\u+[]631"
    ],
    "SHORTDAY": [
      "\u+[]6!+[]+!+[]!+[]+!+[]\u+[]6!+[]+!+[]a\u+[]6be\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]698\u+[]654\u+[]646\u+[]65b\u+[]6!+[]+!+[]f\u+[]655\u+[]631\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]6!+[]+!+[]8\u+[]648\u+[]65a\u+[]645\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]6!+[]+!+[]8\u+[]648\u+[]6!+[]+!+[]f\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]6!+[]+!+[]8\u+[]631\u+[]65b\u+[]66e\u+[]6ea\u+[]633\u+[]648\u+[]6!+[]+!+[]7\u+[]631",
      "\u+[]6!+[]+!+[]c\u+[]64f\u+[]645\u+[]6c1",
      "\u+[]6!+[]+!+[]8\u+[]679\u+[]648\u+[]6!+[]+!+[]7\u+[]631"
    ],
    "SHORTMONTH": [
      "\u+[]6!+[]+!+[]c\u+[]646\u+[]6!+[]+!+[]4\u+[]631\u+[]6cc",
      "\u+[]641\u+[]631\u+[]6!+[]+!+[]4\u+[]631\u+[]6cc",
      "\u+[]645\u+[]6!+[]+!+[]7\u+[]631\u+[]655\u+[]686",
      "\u+[]6!+[]+!+[]7\u+[]67e\u+[]631\u+[]6cc\u+[]644",
      "\u+[]645\u+[]6cc\u+[]654",
      "\u+[]6!+[]+!+[]c\u+[]648\u+[]657\u+[]646",
      "\u+[]6!+[]+!+[]c\u+[]648\u+[]657\u+[]644\u+[]6!+[]+!+[]7\u+[]6cc\u+[]6cc",
      "\u+[]6!+[]+!+[]7\u+[]6af\u+[]633\u+[]6!+[]+!+[]a",
      "\u+[]633\u+[]6!+[]+!+[]a\u+[]645\u+[]6!+[]+!+[]8\u+[]631",
      "\u+[]6!+[]+!+[]7\u+[]6a9\u+[]6!+[]+!+[]a\u+[]648\u+[]657\u+[]6!+[]+!+[]8\u+[]631",
      "\u+[]646\u+[]648\u+[]645\u+[]6!+[]+!+[]8\u+[]631",
      "\u+[]6!+[]+!+[]f\u+[]633\u+[]645\u+[]6!+[]+!+[]8\u+[]631"
    ],
    "STANDALONEMONTH": [
      "\u+[]6!+[]+!+[]c\u+[]646\u+[]6!+[]+!+[]4\u+[]631\u+[]6cc",
      "\u+[]641\u+[]631\u+[]6!+[]+!+[]4\u+[]631\u+[]6cc",
      "\u+[]645\u+[]6!+[]+!+[]7\u+[]631\u+[]655\u+[]686",
      "\u+[]6!+[]+!+[]7\u+[]67e\u+[]631\u+[]6cc\u+[]644",
      "\u+[]645\u+[]6cc\u+[]654",
      "\u+[]6!+[]+!+[]c\u+[]648\u+[]657\u+[]646",
      "\u+[]6!+[]+!+[]c\u+[]648\u+[]657\u+[]644\u+[]6!+[]+!+[]7\u+[]6cc\u+[]6cc",
      "\u+[]6!+[]+!+[]7\u+[]6af\u+[]633\u+[]6!+[]+!+[]a",
      "\u+[]633\u+[]6!+[]+!+[]a\u+[]645\u+[]6!+[]+!+[]8\u+[]631",
      "\u+[]6!+[]+!+[]7\u+[]6a9\u+[]6!+[]+!+[]a\u+[]648\u+[]657\u+[]6!+[]+!+[]8\u+[]631",
      "\u+[]646\u+[]648\u+[]645\u+[]6!+[]+!+[]8\u+[]631",
      "\u+[]6!+[]+!+[]f\u+[]633\u+[]645\u+[]6!+[]+!+[]8\u+[]631"
    ],
    "WEEKENDRANGE": [
      6,
      6
    ],
    "fullDate": "EEEE, MMMM d, y",
    "longDate": "MMMM d, y",
    "medium": "MMM d, y h:mm:ss a",
    "mediumDate": "MMM d, y",
    "mediumTime": "h:mm:ss a",
    "short": "M/d/yy h:mm a",
    "shortDate": "M/d/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u!+[]+!+[]+[]b9",
    "DECIMAL_SEP": "\u+[]66b",
    "GROUP_SEP": "\u+[]66c",
    "PATTERNS": [
      {
        "gSize": !+[]+!+[],
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
        "gSize": !+[]+!+[],
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
  "id": "ks",
  "localeID": "ks",
  "pluralCat": function(n, opt_precision) {  var i = n | +[];  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == +[]) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
