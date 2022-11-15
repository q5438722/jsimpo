"use strict";
  angular.module("ngLocale", [], ["$provide", function (raccoon) {
    function chives(chinchilla) {
      var ibex; // M
      
          chinchilla = chinchilla + "";
      ibex = chinchilla.indexOf(".");
      return ibex == -1 ? 0 : chinchilla.length - ibex - 1;
    }
    function bean_sprout(boar, llama) {
      var capybara; // a
      var mink; // n
      var prairie_dog; // r
      
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
      var hamster; // r
    
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
        DAY : ["اَتھوار", "ژٔنٛدرٕروار", "بوٚموار", "بودوار", "برٛٮ۪سوار", "جُمہ", "بٹوار", ],
        ERANAMES : ["قبٕل مسیٖح", "عیٖسوی سنہٕ", ],
        ERAS : ["بی سی", "اے ڈی", ],
        FIRSTDAYOFWEEK : 6,
        MONTH : ["جنؤری", "فرؤری", "مارٕچ", "اپریل", "میٔ", "جوٗن", "جوٗلایی", "اگست", "ستمبر", "اکتوٗبر", "نومبر", "دسمبر", ],
        SHORTDAY : ["آتھوار", "ژٔنٛدٕروار", "بوٚموار", "بودوار", "برٛٮ۪سوار", "جُمہ", "بٹوار", ],
        SHORTMONTH : ["جنؤری", "فرؤری", "مارٕچ", "اپریل", "میٔ", "جوٗن", "جوٗلایی", "اگست", "ستمبر", "اکتوٗبر", "نومبر", "دسمبر", ],
        STANDALONEMONTH : ["جنؤری", "فرؤری", "مارٕچ", "اپریل", "میٔ", "جوٗن", "جوٗلایی", "اگست", "ستمبر", "اکتوٗبر", "نومبر", "دسمبر", ],
        WEEKENDRANGE : [6, 6, ],
        fullDate : "EEEE, MMMM d, y",
        longDate : "MMMM d, y",
        medium : "MMM d, y h:mm:ss a",
        mediumDate : "MMM d, y",
        mediumTime : "h:mm:ss a",
        short : "M/d/yy h:mm a",
        shortDate : "M/d/yy",
        shortTime : "h:mm a"
      },
      NUMBER_FORMATS : {
        CURRENCY_SYM : "₹",
        DECIMAL_SEP : "٫",
        GROUP_SEP : "٬",
        PATTERNS : [{
          gSize : 2,
          lgSize : 3,
          maxFrac : 3,
          minFrac : 0,
          minInt : 1,
          negPre : "-",
          negSuf : "",
          posPre : "",
          posSuf : ""
        }, {
          gSize : 2,
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
      id : "ks",
      localeID : "ks",
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
  