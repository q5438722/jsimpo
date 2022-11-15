"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    function chives(chinchilla) {
      var ibex; // a
      
          chinchilla = chinchilla + "";
      ibex = chinchilla.indexOf(".");
      return ibex == -1 ? 0 : chinchilla.length - ibex - 1;
    }
    function bean_sprout(boar, llama) {
      var capybara; // g
      var mink; // m
      var prairie_dog; // e
      
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
      var hamster; // e
    
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
        AMPMS : ["kíkíríg", "ngəgógəle", ],
        DAY : ["sɔ́ndɔ", "mɔ́ndi", "sɔ́ndɔ məlú mə́bɛ̌", "sɔ́ndɔ məlú mə́lɛ́", "sɔ́ndɔ məlú mə́nyi", "fúladé", "séradé", ],
        ERANAMES : ["osúsúa Yésus kiri", "ámvus Yésus Kirís", ],
        ERAS : ["oyk", "ayk", ],
        FIRSTDAYOFWEEK : 0,
        MONTH : ["ngɔn osú", "ngɔn bɛ̌", "ngɔn lála", "ngɔn nyina", "ngɔn tána", "ngɔn saməna", "ngɔn zamgbála", "ngɔn mwom", "ngɔn ebulú", "ngɔn awóm", "ngɔn awóm ai dziá", "ngɔn awóm ai bɛ̌", ],
        SHORTDAY : ["sɔ́n", "mɔ́n", "smb", "sml", "smn", "fúl", "sér", ],
        SHORTMONTH : ["ngo", "ngb", "ngl", "ngn", "ngt", "ngs", "ngz", "ngm", "nge", "nga", "ngad", "ngab", ],
        STANDALONEMONTH : ["ngɔn osú", "ngɔn bɛ̌", "ngɔn lála", "ngɔn nyina", "ngɔn tána", "ngɔn saməna", "ngɔn zamgbála", "ngɔn mwom", "ngɔn ebulú", "ngɔn awóm", "ngɔn awóm ai dziá", "ngɔn awóm ai bɛ̌", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE d MMMM y",
        longDate : "d MMMM y",
        medium : "d MMM y HH:mm:ss",
        mediumDate : "d MMM y",
        mediumTime : "HH:mm:ss",
        short : "d/M/y HH:mm",
        shortDate : "d/M/y",
        shortTime : "HH:mm"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "FCFA",
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
      id : "ewo-cm",
      localeID : "ewo_CM",
      pluralCat : function (mantis, dogfish) {
        var snail; // g
        var dunlin; // m
        
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
  