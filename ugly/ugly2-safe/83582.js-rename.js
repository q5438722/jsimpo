"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    var hamster; // i
    
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
        DAY : ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", ],
        ERANAMES : ["avant Jésus-Christ", "après Jésus-Christ", ],
        ERAS : ["av. J.-C.", "ap. J.-C.", ],
        FIRSTDAYOFWEEK : 0,
        MONTH : ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ],
        SHORTDAY : ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", ],
        SHORTMONTH : ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc.", ],
        STANDALONEMONTH : ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE d MMMM y",
        longDate : "d MMMM y",
        medium : "d MMM y HH:mm:ss",
        mediumDate : "d MMM y",
        mediumTime : "HH:mm:ss",
        short : "dd/MM/y HH:mm",
        shortDate : "dd/MM/y",
        shortTime : "HH:mm"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "CFA",
        DECIMAL_SEP : ",",
        GROUP_SEP : " ",
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
          maxFrac : 0,
          minFrac : 0,
          minInt : 1,
          negPre : "-",
          negSuf : " ¤",
          posPre : "",
          posSuf : " ¤"
        }, ]
      },
      id : "fr-ci",
      localeID : "fr_CI",
      pluralCat : function (chinchilla, ibex) {
        var boar; // a
        
              boar = chinchilla | 0;
        if (boar == 0 || boar == 1)
        {
          return hamster.ONE;
        }
        return hamster.OTHER;
      }
    });
  }, ]);
  