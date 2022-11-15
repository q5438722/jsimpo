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
      var prairie_dog; // u
      
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
      var hamster; // u
    
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
        DAY : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ],
        ERANAMES : ["Before Christ", "Anno Domini", ],
        ERAS : ["BC", "AD", ],
        FIRSTDAYOFWEEK : 0,
        MONTH : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ],
        SHORTDAY : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ],
        SHORTMONTH : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ],
        STANDALONEMONTH : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE, d MMMM y",
        longDate : "d MMMM y",
        medium : "d MMM y h:mm:ss a",
        mediumDate : "d MMM y",
        mediumTime : "h:mm:ss a",
        short : "dd/MM/y h:mm a",
        shortDate : "dd/MM/y",
        shortTime : "h:mm a"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "$",
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
      id : "en-fm",
      localeID : "en_FM",
      pluralCat : function (mantis, dogfish) {
        var snail; // a
        var dunlin; // n
        
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
  