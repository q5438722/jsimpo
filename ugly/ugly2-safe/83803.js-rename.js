"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    function chives(chinchilla) {
      var ibex; // o
      
          chinchilla = chinchilla + "";
      ibex = chinchilla.indexOf(".");
      return ibex == -1 ? 0 : chinchilla.length - ibex - 1;
    }
    function bean_sprout(boar, llama) {
      var capybara; // r
      var mink; // a
      var prairie_dog; // i
      
          capybara = llama;
      if (undefined === capybara)
      {
        capybara = Math.min(chives(boar), 3);
      }
      mink = Math.pow(10, capybara);
      prairie_dog = (boar * mink | 0) % mink;
      return {
        v : capybara,
        f : prairie_dog
      };
    }
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
        DAY : ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", ],
        ERANAMES : ["avanti Cristo", "dopo Cristo", ],
        ERAS : ["a.C.", "d.C.", ],
        FIRSTDAYOFWEEK : 0,
        MONTH : ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ],
        SHORTDAY : ["dom", "lun", "mar", "mer", "gio", "ven", "sab", ],
        SHORTMONTH : ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic", ],
        STANDALONEMONTH : ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE d MMMM y",
        longDate : "d MMMM y",
        medium : "dd MMM y HH:mm:ss",
        mediumDate : "dd MMM y",
        mediumTime : "HH:mm:ss",
        short : "dd/MM/yy HH:mm",
        shortDate : "dd/MM/yy",
        shortTime : "HH:mm"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "€",
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
          negSuf : " ¤",
          posPre : "",
          posSuf : " ¤"
        }, ]
      },
      id : "it-it",
      localeID : "it_IT",
      pluralCat : function (mantis, dogfish) {
        var snail; // r
        var dunlin; // a
        
              snail = mantis | 0;
        dunlin = bean_sprout(mantis, dogfish);
        if (snail == 1 && dunlin.v == 0)
        {
          return hamster.ONE;
        }
        return hamster.OTHER;
      }
    });
  }, ]);
  