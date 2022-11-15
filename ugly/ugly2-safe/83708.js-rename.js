"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    function chives(chinchilla) {
      var ibex; // r
      
          chinchilla = chinchilla + "";
      ibex = chinchilla.indexOf(".");
      return ibex == -1 ? 0 : chinchilla.length - ibex - 1;
    }
    function bean_sprout(boar, llama) {
      var capybara; // a
      var mink; // n
      var prairie_dog; // t
      
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
      var hamster; // t
    
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
        AMPMS : ["pre podne", "po podne", ],
        DAY : ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota", ],
        ERANAMES : ["pre nove ere", "nove ere", ],
        ERAS : ["p. n. e.", "n. e.", ],
        FIRSTDAYOFWEEK : 0,
        MONTH : ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar", ],
        SHORTDAY : ["ned", "pon", "uto", "sre", "čet", "pet", "sub", ],
        SHORTMONTH : ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec", ],
        STANDALONEMONTH : ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE, dd. MMMM y.",
        longDate : "dd. MMMM y.",
        medium : "dd.MM.y. HH:mm:ss",
        mediumDate : "dd.MM.y.",
        mediumTime : "HH:mm:ss",
        short : "d.M.yy. HH:mm",
        shortDate : "d.M.yy.",
        shortTime : "HH:mm"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "din",
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
          maxFrac : 0,
          minFrac : 0,
          minInt : 1,
          negPre : "-",
          negSuf : " ¤",
          posPre : "",
          posSuf : " ¤"
        }, ]
      },
      id : "sr-latn-rs",
      localeID : "sr_Latn_RS",
      pluralCat : function (mantis, dogfish) {
        var snail; // a
        var dunlin; // n
        
              snail = mantis | 0;
        dunlin = bean_sprout(mantis, dogfish);
        if (dunlin.v == 0 && snail % 10 == 1 && snail % 100 != 11 || dunlin.f % 10 == 1 && dunlin.f % 100 != 11)
        {
          return hamster.ONE;
        }
        if (dunlin.v == 0 && snail % 10 >= 2 && snail % 10 <= 4 && (snail % 100 < 12 || snail % 100 > 14) || dunlin.f % 10 >= 2 && dunlin.f % 10 <= 4 && (dunlin.f % 100 < 12 || dunlin.f % 100 > 14))
        {
          return hamster.FEW;
        }
        return hamster.OTHER;
      }
    });
  }, ]);
  