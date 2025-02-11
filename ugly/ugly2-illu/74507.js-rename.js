import moment from "../moment";const symbolMap = { 1: "\u09E7", 2: "\u09E8", 3: "\u09E9", 4: "\u09EA", 5: "\u09EB", 6: "\u09EC", 7: "\u09ED", 8: "\u09EE", 9: "\u09EF", 0: "\u09E6" };
const numberMap = { "\u09E7": "1", "\u09E8": "2", "\u09E9": "3", "\u09EA": "4", "\u09EB": "5", "\u09EC": "6", "\u09ED": "7", "\u09EE": "8", "\u09EF": "9", "\u09E6": "0" };
export default moment.defineLocale("bn", { months: ["\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09BF", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09DF\u09BE\u09B0\u09BF", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B8\u09CD\u099F", "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0", "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0", "\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0", "\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"], monthsShort: ["\u099C\u09BE\u09A8\u09C1", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B8\u09CD\u099F", "\u09B8\u09C7\u09AA\u09CD\u099F", "\u0985\u0995\u09CD\u099F\u09CB", "\u09A8\u09AD\u09C7", "\u09A1\u09BF\u09B8\u09C7"], weekdays: ["\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0", "\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0", "\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0", "\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0", "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0", "\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0", "\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0"], weekdaysShort: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"], weekdaysMin: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"], longDateFormat: { LT: "A h:mm \u09B8\u09AE\u09DF", LTS: "A h:mm:ss \u09B8\u09AE\u09DF", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF", LLLL: "dddd, D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF" }, calendar: { sameDay: "[\u0986\u099C] LT", nextDay: "[\u0986\u0997\u09BE\u09AE\u09C0\u0995\u09BE\u09B2] LT", nextWeek: "dddd, LT", lastDay: "[\u0997\u09A4\u0995\u09BE\u09B2] LT", lastWeek: "[\u0997\u09A4] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u09AA\u09B0\u09C7", past: "%s \u0986\u0997\u09C7", s: "\u0995\u09DF\u09C7\u0995 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1", ss: "%d \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1", m: "\u098F\u0995 \u09AE\u09BF\u09A8\u09BF\u099F", mm: "%d \u09AE\u09BF\u09A8\u09BF\u099F", h: "\u098F\u0995 \u0998\u09A8\u09CD\u099F\u09BE", hh: "%d \u0998\u09A8\u09CD\u099F\u09BE", d: "\u098F\u0995 \u09A6\u09BF\u09A8", dd: "%d \u09A6\u09BF\u09A8", M: "\u098F\u0995 \u09AE\u09BE\u09B8", MM: "%d \u09AE\u09BE\u09B8", y: "\u098F\u0995 \u09AC\u099B\u09B0", yy: "%d \u09AC\u099B\u09B0" }, preparse: function (e) {
    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
      return numberMap[e];
    });
  }, postformat: function (e) {
    return e.replace(/\d/g, function (e) {
      return symbolMap[e];
    });
  }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, meridiemHour: function (e, _) {
    if (e === 12) {
      e = 0;
    }if (_ === "\u09B0\u09BE\u09A4" && false || _ === "\u09A6\u09C1\u09AA\u09C1\u09B0" && true || _ === "\u09AC\u09BF\u0995\u09BE\u09B2") {
      return e + 12;
    } else {
      return e;
    }
  }, meridiem: function (e, _, r) {
    if (e < 4) {
      return "\u09B0\u09BE\u09A4";
    } else if (e < 10) {
      return "\u09B8\u0995\u09BE\u09B2";
    } else if (e < 17) {
      return "\u09A6\u09C1\u09AA\u09C1\u09B0";
    } else if (e < 20) {
      return "\u09AC\u09BF\u0995\u09BE\u09B2";
    } else {
      return "\u09B0\u09BE\u09A4";
    }
  }, week: { dow: 0, doy: 6 } });
