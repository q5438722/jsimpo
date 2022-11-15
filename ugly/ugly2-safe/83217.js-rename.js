"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    function chives(chinchilla) {
      var ibex; // i
      
          chinchilla = chinchilla + "";
      ibex = chinchilla.indexOf(".");
      return ibex == -1 ? 0 : chinchilla.length - ibex - 1;
    }
    function bean_sprout(boar, llama) {
      var capybara; // d
      var mink; // o
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
        AMPMS : ["sn.", "gn.", ],
        DAY : ["Axad", "Isniin", "Talaado", "Arbaco", "Khamiis", "Jimco", "Sabti", ],
        ERANAMES : ["CK", "CD", ],
        ERAS : ["CK", "CD", ],
        FIRSTDAYOFWEEK : 6,
        MONTH : ["Bisha Koobaad", "Bisha Labaad", "Bisha Saddexaad", "Bisha Afraad", "Bisha Shanaad", "Bisha Lixaad", "Bisha Todobaad", "Bisha Sideedaad", "Bisha Sagaalaad", "Bisha Tobnaad", "Bisha Kow iyo Tobnaad", "Bisha Laba iyo Tobnaad", ],
        SHORTDAY : ["Axd", "Isn", "Tal", "Arb", "Kha", "Jim", "Sab", ],
        SHORTMONTH : ["Kob", "Lab", "Sad", "Afr", "Sha", "Lix", "Tod", "Sid", "Sag", "Tob", "KIT", "LIT", ],
        STANDALONEMONTH : ["Bisha Koobaad", "Bisha Labaad", "Bisha Saddexaad", "Bisha Afraad", "Bisha Shanaad", "Bisha Lixaad", "Bisha Todobaad", "Bisha Sideedaad", "Bisha Sagaalaad", "Bisha Tobnaad", "Bisha Kow iyo Tobnaad", "Bisha Laba iyo Tobnaad", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE, MMMM dd, y",
        longDate : "dd MMMM y",
        medium : "dd-MMM-y h:mm:ss a",
        mediumDate : "dd-MMM-y",
        mediumTime : "h:mm:ss a",
        short : "dd/MM/yy h:mm a",
        shortDate : "dd/MM/yy",
        shortTime : "h:mm a"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "Birr",
        DECIMAL_SEP : ".",
        GROUP_SEP : ",",
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
          negPre : "-¤",
          negSuf : "",
          posPre : "¤",
          posSuf : ""
        }, ]
      },
      id : "so-et",
      localeID : "so_ET",
      pluralCat : function (mantis, dogfish) {
        var snail; // d
        var dunlin; // o
        
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
  