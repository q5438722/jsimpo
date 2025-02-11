"use strict";
angular.module("ngLocale", [], ["$provide", function (e) {
  const u = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function M(e) {
    e = e + "";const r = e.indexOf(".");
    return r == -1 ? 0 : e.length - r - 1;
  }function t(e, r) {
    var a = r;
    if (undefined === a) {
      a = Math.min(M(e), 3);
    }const n = Math.pow(10, a);
    const u = (e * n | 0) % n;
    return { v: a, f: u };
  }e.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 0, MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], WEEKENDRANGE: [5, 6], fullDate: "EEEE, d MMMM y", longDate: "d MMMM y", medium: "d MMM y h:mm:ss a", mediumDate: "d MMM y", mediumTime: "h:mm:ss a", short: "dd/MM/y h:mm a", shortDate: "dd/MM/y", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "en-fm", localeID: "en_FM", pluralCat: function (e, r) {
      const a = e | 0;
      const n = t(e, r);
      if (a == 1 && n.v == 0) {
        return u.ONE;
      }return u.OTHER;
    } });
}]);
