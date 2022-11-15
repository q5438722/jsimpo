(function (e, a) {
  typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? a(require("../moment")) : typeof define === "function" && define.amd ? define(["../moment"], a) : a(e.moment);
})(this, function (e) {
  "use strict";
  const a = e.defineLocale("ms-my", { months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"], monthsShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogs", "Sep", "Okt", "Nov", "Dis"], weekdays: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"], weekdaysShort: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], weekdaysMin: ["Ah", "Is", "Sl", "Rb", "Km", "Jm", "Sb"], longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function (e, a) {
      if (e === 12) {
        e = 0;
      }if (a === "pagi") {
        return e;
      } else if (a === "tengahari") {
        return e >= 11 ? e : e + 12;
      } else if (a === "petang" || a === "malam") {
        return e + 12;
      }
    }, meridiem: function (e, a, i) {
      if (e < 11) {
        return "pagi";
      } else if (e < 15) {
        return "tengahari";
      } else if (e < 19) {
        return "petang";
      } else {
        return "malam";
      }
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
  return a;
});
