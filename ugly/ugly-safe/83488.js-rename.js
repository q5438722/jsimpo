"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    function chives(chinchilla) {
      var ibex; // a
      
          chinchilla = chinchilla + "";
      ibex = chinchilla.indexOf(".");
      return ibex == -1 ? 0 : chinchilla.length - ibex - 1;
    }
    function bean_sprout(boar, llama) {
      var capybara; // i
      var mink; // e
      var prairie_dog; // h
      
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
      var hamster; // h
    
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
        AMPMS : ["m", "f", ],
        DAY : ["DiDòmhnaich", "DiLuain", "DiMàirt", "DiCiadain", "DiarDaoin", "DihAoine", "DiSathairne", ],
        ERANAMES : ["Ro Chrìosta", "An dèidh Chrìosta", ],
        ERAS : ["RC", "AD", ],
        FIRSTDAYOFWEEK : 0,
        MONTH : ["dhen Fhaoilleach", "dhen Ghearran", "dhen Mhàrt", "dhen Ghiblean", "dhen Chèitean", "dhen Ògmhios", "dhen Iuchar", "dhen Lùnastal", "dhen t-Sultain", "dhen Dàmhair", "dhen t-Samhain", "dhen Dùbhlachd", ],
        SHORTDAY : ["DiD", "DiL", "DiM", "DiC", "Dia", "Dih", "DiS", ],
        SHORTMONTH : ["Faoi", "Gearr", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùna", "Sult", "Dàmh", "Samh", "Dùbh", ],
        STANDALONEMONTH : ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE, d'mh' MMMM y",
        longDate : "d'mh' MMMM y",
        medium : "d MMM y HH:mm:ss",
        mediumDate : "d MMM y",
        mediumTime : "HH:mm:ss",
        short : "dd/MM/y HH:mm",
        shortDate : "dd/MM/y",
        shortTime : "HH:mm"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "£",
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
      id : "gd",
      localeID : "gd",
      pluralCat : function (mantis, dogfish) {
        var snail; // i
        var dunlin; // e
        
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
  