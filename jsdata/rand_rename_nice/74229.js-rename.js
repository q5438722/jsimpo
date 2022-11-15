'use strict';
import moment from "../moment";
function processRelativeTime(isFuture, withoutSuffix, key, optModifiers) {
  var format = {
    s : ["m\u00f5ne sekundi", "m\u00f5ni sekund", "paar sekundit"],
    ss : [isFuture + "sekundi", isFuture + "sekundit"],
    m : ["\u00fche minuti", "\u00fcks minut"],
    mm : [isFuture + " minuti", isFuture + " minutit"],
    h : ["\u00fche tunni", "tund aega", "\u00fcks tund"],
    hh : [isFuture + " tunni", isFuture + " tundi"],
    d : ["\u00fche p\u00e4eva", "\u00fcks p\u00e4ev"],
    M : ["kuu aja", "kuu aega", "\u00fcks kuu"],
    MM : [isFuture + " kuu", isFuture + " kuud"],
    y : ["\u00fche aasta", "aasta", "\u00fcks aasta"],
    yy : [isFuture + " aasta", isFuture + " aastat"]
  };
  if (withoutSuffix) {
    return format[key][2] ? format[key][2] : format[key][1];
  }
  return optModifiers ? format[key][0] : format[key][1];
}
export default moment.defineLocale("et", {
  months : "jaanuar_veebruar_m\u00e4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
  monthsShort : "jaan_veebr_m\u00e4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
  weekdays : "p\u00fchap\u00e4ev_esmasp\u00e4ev_teisip\u00e4ev_kolmap\u00e4ev_neljap\u00e4ev_reede_laup\u00e4ev".split("_"),
  weekdaysShort : "P_E_T_K_N_R_L".split("_"),
  weekdaysMin : "P_E_T_K_N_R_L".split("_"),
  longDateFormat : {
    LT : "H:mm",
    LTS : "H:mm:ss",
    L : "DD.MM.YYYY",
    LL : "D. MMMM YYYY",
    LLL : "D. MMMM YYYY H:mm",
    LLLL : "dddd, D. MMMM YYYY H:mm"
  },
  calendar : {
    sameDay : "[T\u00e4na,] LT",
    nextDay : "[Homme,] LT",
    nextWeek : "[J\u00e4rgmine] dddd LT",
    lastDay : "[Eile,] LT",
    lastWeek : "[Eelmine] dddd LT",
    sameElse : "L"
  },
  relativeTime : {
    future : "%s p\u00e4rast",
    past : "%s tagasi",
    s : processRelativeTime,
    ss : processRelativeTime,
    m : processRelativeTime,
    mm : processRelativeTime,
    h : processRelativeTime,
    hh : processRelativeTime,
    d : processRelativeTime,
    dd : "%d p\u00e4eva",
    M : processRelativeTime,
    MM : processRelativeTime,
    y : processRelativeTime,
    yy : processRelativeTime
  },
  dayOfMonthOrdinalParse : /\d{1,2}\./,
  ordinal : "%d.",
  week : {
    dow : 1,
    doy : 4
  }
});

