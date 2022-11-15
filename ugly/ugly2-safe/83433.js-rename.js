"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    function chives(chinchilla) {
      var ibex; // d
      
          chinchilla = chinchilla + "";
      ibex = chinchilla.indexOf(".");
      return ibex == -1 ? 0 : chinchilla.length - ibex - 1;
    }
    function bean_sprout(boar, llama) {
      var capybara; // r
      var mink; // a
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
        AMPMS : ["a. m.", "p. m.", ],
        DAY : ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", ],
        ERANAMES : ["abans de Crist", "després de Crist", ],
        ERAS : ["aC", "dC", ],
        FIRSTDAYOFWEEK : 0,
        MONTH : ["de gener", "de febrer", "de març", "d’abril", "de maig", "de juny", "de juliol", "d’agost", "de setembre", "d’octubre", "de novembre", "de desembre", ],
        SHORTDAY : ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds.", ],
        SHORTMONTH : ["de gen.", "de febr.", "de març", "d’abr.", "de maig", "de juny", "de jul.", "d’ag.", "de set.", "d’oct.", "de nov.", "de des.", ],
        STANDALONEMONTH : ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre", ],
        WEEKENDRANGE : [5, 6, ],
        fullDate : "EEEE, d MMMM 'de' y",
        longDate : "d MMMM 'de' y",
        medium : "d MMM y H:mm:ss",
        mediumDate : "d MMM y",
        mediumTime : "H:mm:ss",
        short : "d/M/yy H:mm",
        shortDate : "d/M/yy",
        shortTime : "H:mm"
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
      id : "ca-fr",
      localeID : "ca_FR",
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
  