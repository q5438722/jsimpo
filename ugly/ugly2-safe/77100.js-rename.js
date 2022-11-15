  (function (snail, dunlin) {
    typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? dunlin(require("../moment")) : typeof define === "function" && define.amd ? define(["../moment", ], dunlin) : dunlin(snail.moment);
  })(this, function (raccoon) {
  "use strict";
    var hamster; // r
    var chinchilla; // e
    
      hamster = {
      1 : "-inci",
      5 : "-inci",
      8 : "-inci",
      70 : "-inci",
      80 : "-inci",
      2 : "-nci",
      7 : "-nci",
      20 : "-nci",
      50 : "-nci",
      3 : "-üncü",
      4 : "-üncü",
      100 : "-üncü",
      6 : "-ncı",
      9 : "-uncu",
      10 : "-uncu",
      30 : "-uncu",
      60 : "-ıncı",
      90 : "-ıncı"
    };
    chinchilla = raccoon.defineLocale("az", {
      months : "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
      monthsShort : "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
      weekdays : "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
      weekdaysShort : "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
      weekdaysMin : "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
      weekdaysParseExact : true,
      longDateFormat : {
        LT : "HH:mm",
        LTS : "HH:mm:ss",
        L : "DD.MM.YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY HH:mm",
        LLLL : "dddd, D MMMM YYYY HH:mm"
      },
      calendar : {
        sameDay : "[bugün saat] LT",
        nextDay : "[sabah saat] LT",
        nextWeek : "[gələn həftə] dddd [saat] LT",
        lastDay : "[dünən] LT",
        lastWeek : "[keçən həftə] dddd [saat] LT",
        sameElse : "L"
      },
      relativeTime : {
        future : "%s sonra",
        past : "%s əvvəl",
        s : "birneçə saniyyə",
        m : "bir dəqiqə",
        mm : "%d dəqiqə",
        h : "bir saat",
        hh : "%d saat",
        d : "bir gün",
        dd : "%d gün",
        M : "bir ay",
        MM : "%d ay",
        y : "bir il",
        yy : "%d il"
      },
      meridiemParse : new RegExp("gecə|səhər|gündüz|axşam", ""),
      isPM : function (ibex) {
        return new RegExp("^(gündüz|axşam)$", "").test(ibex);
      },
      meridiem : function (boar, llama, capybara) {
        if (boar < 4)
        {
          return "gecə";
        }
        else
          if (boar < 12)
          {
            return "səhər";
          }
          else
            if (boar < 17)
            {
              return "gündüz";
            }
            else
            {
              return "axşam";
            }
      },
      ordinalParse : new RegExp("\\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)", ""),
      ordinal : function (mink) {
        var prairie_dog; // e
        var mantis; // a
        var dogfish; // i
        
              if (mink === 0)
        {
          return mink + "-ıncı";
        }
        {
          prairie_dog = mink % 10;
          mantis = mink % 100 - prairie_dog;
          dogfish = mink >= 100 ? 100 : null;
        }
        return mink + (hamster[prairie_dog] || hamster[mantis] || hamster[dogfish]);
      },
      week : {
        dow : 1,
        doy : 7
      }
    });
    return chinchilla;
  });
  