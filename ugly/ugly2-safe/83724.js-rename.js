"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    var hamster; // E
    
      hamster = {
      ZERO : "zero",
      ONE : "one",
      TWO : "two",
      FEW : "few",
      MANY : "many",
      OTHER : "other"
    };
    raccoon.value("$locale", {
      DATETIME_FORMATS : {
        AMPMS : ["AM", "PM", ],
        DAY : ["អាទិត្យ", "ច័ន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍", ],
        ERANAMES : ["មុន​គ្រិស្តសករាជ", "គ្រិស្តសករាជ", ],
        ERAS : ["មុន គ.ស.", "គ.ស.", ],
        FIRSTDAYOFWEEK : 6,
        MONTH : ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ", ],
        SHORTDAY : ["អាទិត្យ", "ច័ន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍", ],
        SHORTMONTH : ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ", ],
        STANDALONEMONTH : ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE d MMMM y",
        longDate : "d MMMM y",
        medium : "d MMM y h:mm:ss a",
        mediumDate : "d MMM y",
        mediumTime : "h:mm:ss a",
        short : "d/M/yy h:mm a",
        shortDate : "d/M/yy",
        shortTime : "h:mm a"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "Riel",
        DECIMAL_SEP : ",",
        GROUP_SEP : ".",
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
          negPre : "-",
          negSuf : "¤",
          posPre : "",
          posSuf : "¤"
        }, ]
      },
      id : "km",
      localeID : "km",
      pluralCat : function (chinchilla, ibex) {
        return hamster.OTHER;
      }
    });
  }, ]);
  