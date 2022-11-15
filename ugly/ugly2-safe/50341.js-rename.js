  (function (mink, prairie_dog) {
    typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? prairie_dog(require("../moment")) : typeof define === "function" && define.amd ? define(["../moment", ], prairie_dog) : prairie_dog(mink.moment);
  })(this, function (raccoon) {
  "use strict";
    var hamster; // a
    
      hamster = raccoon.defineLocale("ms-my", {
      months : "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
      monthsShort : "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
      weekdays : "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
      weekdaysShort : "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
      weekdaysMin : "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
      longDateFormat : {
        LT : "HH.mm",
        LTS : "HH.mm.ss",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY [pukul] HH.mm",
        LLLL : "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse : new RegExp("pagi|tengahari|petang|malam", ""),
      meridiemHour : function (chinchilla, ibex) {
        if (chinchilla === 12)
        {
          chinchilla = 0;
        }
        if (ibex === "pagi")
        {
          return chinchilla;
        }
        else
          if (ibex === "tengahari")
          {
            return chinchilla >= 11 ? chinchilla : chinchilla + 12;
          }
          else
            if (ibex === "petang" || ibex === "malam")
            {
              return chinchilla + 12;
            }
      },
      meridiem : function (boar, llama, capybara) {
        if (boar < 11)
        {
          return "pagi";
        }
        else
          if (boar < 15)
          {
            return "tengahari";
          }
          else
            if (boar < 19)
            {
              return "petang";
            }
            else
            {
              return "malam";
            }
      },
      calendar : {
        sameDay : "[Hari ini pukul] LT",
        nextDay : "[Esok pukul] LT",
        nextWeek : "dddd [pukul] LT",
        lastDay : "[Kelmarin pukul] LT",
        lastWeek : "dddd [lepas pukul] LT",
        sameElse : "L"
      },
      relativeTime : {
        future : "dalam %s",
        past : "%s yang lepas",
        s : "beberapa saat",
        ss : "%d saat",
        m : "seminit",
        mm : "%d minit",
        h : "sejam",
        hh : "%d jam",
        d : "sehari",
        dd : "%d hari",
        M : "sebulan",
        MM : "%d bulan",
        y : "setahun",
        yy : "%d tahun"
      },
      week : {
        dow : 1,
        doy : 7
      }
    });
    return hamster;
  });
  