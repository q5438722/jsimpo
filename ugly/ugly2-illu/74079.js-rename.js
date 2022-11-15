(function (e, a) {
  typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? a(require("../moment")) : typeof define === "function" && define.amd ? define(["../moment"], a) : a(e.moment);
})(this, function (e) {
  "use strict";
  const a = e.defineLocale("en-nz", { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (e) {
      const a = e % 10;
      const t = ~~(e % 100 / 10) === 1 ? "th" : a === 1 ? "st" : a === 2 ? "nd" : a === 3 ? "rd" : "th";
      return e + t;
    }, week: { dow: 1, doy: 4 } });
  return a;
});
