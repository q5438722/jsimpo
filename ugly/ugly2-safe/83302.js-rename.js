"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    function chives(chinchilla) {
      var ibex; // i
      
          chinchilla = chinchilla + "";
      ibex = chinchilla.indexOf(".");
      return ibex == -1 ? 0 : chinchilla.length - ibex - 1;
    }
    function bean_sprout(boar, llama) {
      var capybara; // u
      var mink; // r
      var prairie_dog; // n
      
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
      var hamster; // n
    
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
        DAY : ["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Jummaʼa", "Asabar", ],
        ERANAMES : ["Kafin haihuwar annab", "Bayan haihuwar annab", ],
        ERAS : ["KHAI", "BHAI", ],
        FIRSTDAYOFWEEK : 0,
        MONTH : ["Janairu", "Faburairu", "Maris", "Afirilu", "Mayu", "Yuni", "Yuli", "Agusta", "Satumba", "Oktoba", "Nuwamba", "Disamba", ],
        SHORTDAY : ["Lah", "Lit", "Tal", "Lar", "Alh", "Jum", "Asa", ],
        SHORTMONTH : ["Jan", "Fab", "Mar", "Afi", "May", "Yun", "Yul", "Agu", "Sat", "Okt", "Nuw", "Dis", ],
        STANDALONEMONTH : ["Janairu", "Faburairu", "Maris", "Afirilu", "Mayu", "Yuni", "Yuli", "Agusta", "Satumba", "Oktoba", "Nuwamba", "Disamba", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE, d MMMM, y",
        longDate : "d MMMM, y",
        medium : "d MMM, y HH:mm:ss",
        mediumDate : "d MMM, y",
        mediumTime : "HH:mm:ss",
        short : "d/M/yy HH:mm",
        shortDate : "d/M/yy",
        shortTime : "HH:mm"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "₦",
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
          negPre : "-¤ ",
          negSuf : "",
          posPre : "¤ ",
          posSuf : ""
        }, ]
      },
      id : "ha",
      localeID : "ha",
      pluralCat : function (mantis, dogfish) {
        var snail; // u
        var dunlin; // r
        
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
  