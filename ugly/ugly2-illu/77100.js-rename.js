(function (n, e) {
  typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? e(require("../moment")) : typeof define === "function" && define.amd ? define(["../moment"], e) : e(n.moment);
})(this, function (n) {
  "use strict";
  const r = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-\xFCnc\xFC", 4: "-\xFCnc\xFC", 100: "-\xFCnc\xFC", 6: "-nc\u0131", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-\u0131nc\u0131", 90: "-\u0131nc\u0131" };
  const e = n.defineLocale("az", { months: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"], monthsShort: ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"], weekdays: ["Bazar", "Bazar ert\u0259si", "\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131", "\xC7\u0259r\u015F\u0259nb\u0259", "C\xFCm\u0259 ax\u015Fam\u0131", "C\xFCm\u0259", "\u015E\u0259nb\u0259"], weekdaysShort: ["Baz", "BzE", "\xC7Ax", "\xC7\u0259r", "CAx", "C\xFCm", "\u015E\u0259n"], weekdaysMin: ["Bz", "BE", "\xC7A", "\xC7\u0259", "CA", "C\xFC", "\u015E\u0259"], weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xFCn saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT", lastDay: "[d\xFCn\u0259n] LT", lastWeek: "[ke\xE7\u0259n h\u0259ft\u0259] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \u0259vv\u0259l", s: "birne\xE7\u0259 saniyy\u0259", m: "bir d\u0259qiq\u0259", mm: "%d d\u0259qiq\u0259", h: "bir saat", hh: "%d saat", d: "bir g\xFCn", dd: "%d g\xFCn", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function (n) {
      return (/^(gündüz|axşam)$/.test(n)
      );
    }, meridiem: function (n, e, a) {
      if (n < 4) {
        return "gec\u0259";
      } else if (n < 12) {
        return "s\u0259h\u0259r";
      } else if (n < 17) {
        return "g\xFCnd\xFCz";
      } else {
        return "ax\u015Fam";
      }
    }, ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function (n) {
      if (n === 0) {
        return n + "-\u0131nc\u0131";
      }const e = n % 10;
      const a = n % 100 - e;
      const i = n >= 100 ? 100 : null;
      return n + (r[e] || r[a] || r[i]);
    }, week: { dow: 1, doy: 7 } });
  return e;
});
