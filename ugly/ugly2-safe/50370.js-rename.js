  (function (prairie_dog, mantis) {
    typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? mantis(require("../moment")) : typeof define === "function" && define.amd ? define(["../moment", ], mantis) : mantis(prairie_dog.moment);
  })(this, function (raccoon) {
  "use strict";
    var hamster; // n
    var chinchilla; // a
    var ibex; // o
    var boar; // s
    var llama; // r
    
      {
      hamster = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
      chinchilla = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
      ibex = [new RegExp("^ene", "i"), new RegExp("^feb", "i"), new RegExp("^mar", "i"), new RegExp("^abr", "i"), new RegExp("^may", "i"), new RegExp("^jun", "i"), new RegExp("^jul", "i"), new RegExp("^ago", "i"), new RegExp("^sep", "i"), new RegExp("^oct", "i"), new RegExp("^nov", "i"), new RegExp("^dic", "i"), ];
      boar = new RegExp("^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\\.?|feb\\.?|mar\\.?|abr\\.?|may\\.?|jun\\.?|jul\\.?|ago\\.?|sep\\.?|oct\\.?|nov\\.?|dic\\.?)", 
      "i");
    }
    llama = raccoon.defineLocale("es-mx", {
      months : "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
      monthsShort : function (capybara, mink) {
        if (! capybara)
        {
          return hamster;
        }
        else
          if (new RegExp("-MMM-", "").test(mink))
          {
            return chinchilla[capybara.month()];
          }
          else
          {
            return hamster[capybara.month()];
          }
      },
      monthsRegex : boar,
      monthsShortRegex : boar,
      monthsStrictRegex : new RegExp("^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)", 
      "i"),
      monthsShortStrictRegex : new RegExp("^(ene\\.?|feb\\.?|mar\\.?|abr\\.?|may\\.?|jun\\.?|jul\\.?|ago\\.?|sep\\.?|oct\\.?|nov\\.?|dic\\.?)", 
      "i"),
      monthsParse : ibex,
      longMonthsParse : ibex,
      shortMonthsParse : ibex,
      weekdays : "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
      weekdaysShort : "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
      weekdaysMin : "do_lu_ma_mi_ju_vi_sá".split("_"),
      weekdaysParseExact : true,
      longDateFormat : {
        LT : "H:mm",
        LTS : "H:mm:ss",
        L : "DD/MM/YYYY",
        LL : "D [de] MMMM [de] YYYY",
        LLL : "D [de] MMMM [de] YYYY H:mm",
        LLLL : "dddd, D [de] MMMM [de] YYYY H:mm"
      },
      calendar : {
        sameDay : function () {
          return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        nextDay : function () {
          return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        nextWeek : function () {
          return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        lastDay : function () {
          return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        lastWeek : function () {
          return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
        },
        sameElse : "L"
      },
      relativeTime : {
        future : "en %s",
        past : "hace %s",
        s : "unos segundos",
        ss : "%d segundos",
        m : "un minuto",
        mm : "%d minutos",
        h : "una hora",
        hh : "%d horas",
        d : "un día",
        dd : "%d días",
        w : "una semana",
        ww : "%d semanas",
        M : "un mes",
        MM : "%d meses",
        y : "un año",
        yy : "%d años"
      },
      dayOfMonthOrdinalParse : new RegExp("\\d{1,2}º", ""),
      ordinal : "%dº",
      week : {
        dow : 0,
        doy : 4
      },
      invalidDate : "Fecha inválida"
    });
    return llama;
  });
  