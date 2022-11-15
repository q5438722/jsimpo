(function (e, d) {
  typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? d(require("../moment")) : typeof define === "function" && define.amd ? define(["../moment"], d) : d(e.moment);
})(this, function (e) {
  "use strict";
  const d = e.defineLocale("sv", { months: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"], monthsShort: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], weekdays: ["s\xF6ndag", "m\xE5ndag", "tisdag", "onsdag", "torsdag", "fredag", "l\xF6rdag"], weekdaysShort: ["s\xF6n", "m\xE5n", "tis", "ons", "tor", "fre", "l\xF6r"], weekdaysMin: ["s\xF6", "m\xE5", "ti", "on", "to", "fr", "l\xF6"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\xE5r] LT", nextWeek: "[P\xE5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "f\xF6r %s sedan", s: "n\xE5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\xE5nad", MM: "%d m\xE5nader", y: "ett \xE5r", yy: "%d \xE5r" }, dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/, ordinal: function (e) {
      const d = e % 10;
      const n = ~~(e % 100 / 10) === 1 ? ":e" : d === 1 ? ":a" : d === 2 ? ":a" : d === 3 ? ":e" : ":e";
      return e + n;
    }, week: { dow: 1, doy: 4 } });
  return d;
});
