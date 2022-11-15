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
      "k\u+[]+[]edk\u+[]+[]edr\u+[]+[]edg",
      "ng\u+[]!+[]+!+[]59g\u+[]+[]f3g\u+[]!+[]+!+[]59le"
    ],
    "DAY": [
      "s\u+[]!+[]+!+[]54\u+[]3+[]1nd\u+[]!+[]+!+[]54",
      "m\u+[]!+[]+!+[]54\u+[]3+[]1ndi",
      "s\u+[]!+[]+!+[]54\u+[]3+[]1nd\u+[]!+[]+!+[]54 m\u+[]!+[]+!+[]59l\u+[]+[]fa m\u+[]!+[]+!+[]59\u+[]3+[]1b\u+[]!+[]+!+[]5b\u+[]3+[]c",
      "s\u+[]!+[]+!+[]54\u+[]3+[]1nd\u+[]!+[]+!+[]54 m\u+[]!+[]+!+[]59l\u+[]+[]fa m\u+[]!+[]+!+[]59\u+[]3+[]1l\u+[]!+[]+!+[]5b\u+[]3+[]1",
      "s\u+[]!+[]+!+[]54\u+[]3+[]1nd\u+[]!+[]+!+[]54 m\u+[]!+[]+!+[]59l\u+[]+[]fa m\u+[]!+[]+!+[]59\u+[]3+[]1nyi",
      "f\u+[]+[]falad\u+[]+[]e9",
      "s\u+[]+[]e9rad\u+[]+[]e9"
    ],
    "ERANAMES": [
      "os\u+[]+[]fas\u+[]+[]faa Y\u+[]+[]e9sus kiri",
      "\u+[]+[]e1mvus Y\u+[]+[]e9sus Kir\u+[]+[]eds"
    ],
    "ERAS": [
      "oyk",
      "ayk"
    ],
    "FIRSTDAYOFWEEK": +[],
    "MONTH": [
      "ng\u+[]!+[]+!+[]54n os\u+[]+[]fa",
      "ng\u+[]!+[]+!+[]54n b\u+[]!+[]+!+[]5b\u+[]3+[]c",
      "ng\u+[]!+[]+!+[]54n l\u+[]+[]e1la",
      "ng\u+[]!+[]+!+[]54n nyina",
      "ng\u+[]!+[]+!+[]54n t\u+[]+[]e1na",
      "ng\u+[]!+[]+!+[]54n sam\u+[]!+[]+!+[]59na",
      "ng\u+[]!+[]+!+[]54n zamgb\u+[]+[]e1la",
      "ng\u+[]!+[]+!+[]54n mwom",
      "ng\u+[]!+[]+!+[]54n ebul\u+[]+[]fa",
      "ng\u+[]!+[]+!+[]54n aw\u+[]+[]f3m",
      "ng\u+[]!+[]+!+[]54n aw\u+[]+[]f3m ai dzi\u+[]+[]e1",
      "ng\u+[]!+[]+!+[]54n aw\u+[]+[]f3m ai b\u+[]!+[]+!+[]5b\u+[]3+[]c"
    ],
    "SHORTDAY": [
      "s\u+[]!+[]+!+[]54\u+[]3+[]1n",
      "m\u+[]!+[]+!+[]54\u+[]3+[]1n",
      "smb",
      "sml",
      "smn",
      "f\u+[]+[]fal",
      "s\u+[]+[]e9r"
    ],
    "SHORTMONTH": [
      "ngo",
      "ngb",
      "ngl",
      "ngn",
      "ngt",
      "ngs",
      "ngz",
      "ngm",
      "nge",
      "nga",
      "ngad",
      "ngab"
    ],
    "STANDALONEMONTH": [
      "ng\u+[]!+[]+!+[]54n os\u+[]+[]fa",
      "ng\u+[]!+[]+!+[]54n b\u+[]!+[]+!+[]5b\u+[]3+[]c",
      "ng\u+[]!+[]+!+[]54n l\u+[]+[]e1la",
      "ng\u+[]!+[]+!+[]54n nyina",
      "ng\u+[]!+[]+!+[]54n t\u+[]+[]e1na",
      "ng\u+[]!+[]+!+[]54n sam\u+[]!+[]+!+[]59na",
      "ng\u+[]!+[]+!+[]54n zamgb\u+[]+[]e1la",
      "ng\u+[]!+[]+!+[]54n mwom",
      "ng\u+[]!+[]+!+[]54n ebul\u+[]+[]fa",
      "ng\u+[]!+[]+!+[]54n aw\u+[]+[]f3m",
      "ng\u+[]!+[]+!+[]54n aw\u+[]+[]f3m ai dzi\u+[]+[]e1",
      "ng\u+[]!+[]+!+[]54n aw\u+[]+[]f3m ai b\u+[]!+[]+!+[]5b\u+[]3+[]c"
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
    "short": "d/M/y HH:mm",
    "shortDate": "d/M/y",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "FCFA",
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
  "id": "ewo-cm",
  "localeID": "ewo_CM",
  "pluralCat": function(n, opt_precision) {  var i = n | +[];  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == +[]) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
