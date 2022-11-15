"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    function chives(chinchilla) {
      var ibex; // r
      
          chinchilla = chinchilla + "";
      ibex = chinchilla.indexOf(".");
      return ibex == -1 ? 0 : chinchilla.length - ibex - 1;
    }
    function bean_sprout(boar, llama) {
      var capybara; // e
      var mink; // o
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
        DAY : ["Alahady", "Alatsinainy", "Talata", "Alarobia", "Alakamisy", "Zoma", "Asabotsy", ],
        ERANAMES : ["Alohan’i JK", "Aorian’i JK", ],
        ERAS : ["BC", "AD", ],
        FIRSTDAYOFWEEK : 0,
        MONTH : ["Janoary", "Febroary", "Martsa", "Aprily", "Mey", "Jona", "Jolay", "Aogositra", "Septambra", "Oktobra", "Novambra", "Desambra", ],
        SHORTDAY : ["Alah", "Alats", "Tal", "Alar", "Alak", "Zom", "Asab", ],
        SHORTMONTH : ["Jan", "Feb", "Mar", "Apr", "Mey", "Jon", "Jol", "Aog", "Sep", "Okt", "Nov", "Des", ],
        STANDALONEMONTH : ["Janoary", "Febroary", "Martsa", "Aprily", "Mey", "Jona", "Jolay", "Aogositra", "Septambra", "Oktobra", "Novambra", "Desambra", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE d MMMM y",
        longDate : "d MMMM y",
        medium : "y MMM d HH:mm:ss",
        mediumDate : "y MMM d",
        mediumTime : "HH:mm:ss",
        short : "y-MM-dd HH:mm",
        shortDate : "y-MM-dd",
        shortTime : "HH:mm"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "Ar",
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
      id : "mg",
      localeID : "mg",
      pluralCat : function (mantis, dogfish) {
        var snail; // e
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
  