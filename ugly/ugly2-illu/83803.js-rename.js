"use strict";
angular.module("ngLocale", [], ["$provide", function (e) {
  const i = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function n(e) {
    e = e + "";const o = e.indexOf(".");
    return o == -1 ? 0 : e.length - o - 1;
  }function t(e, o) {
    var r = o;
    if (undefined === r) {
      r = Math.min(n(e), 3);
    }const a = Math.pow(10, r);
    const i = (e * a | 0) % a;
    return { v: r, f: i };
  }e.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"], ERANAMES: ["avanti Cristo", "dopo Cristo"], ERAS: ["a.C.", "d.C."], FIRSTDAYOFWEEK: 0, MONTH: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"], SHORTDAY: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], SHORTMONTH: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], STANDALONEMONTH: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"], WEEKENDRANGE: [5, 6], fullDate: "EEEE d MMMM y", longDate: "d MMMM y", medium: "dd MMM y HH:mm:ss", mediumDate: "dd MMM y", mediumTime: "HH:mm:ss", short: "dd/MM/yy HH:mm", shortDate: "dd/MM/yy", shortTime: "HH:mm" }, NUMBER_FORMATS: { CURRENCY_SYM: "\u20AC", DECIMAL_SEP: ",", GROUP_SEP: ".", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-", negSuf: "\xA0\xA4", posPre: "", posSuf: "\xA0\xA4" }] }, id: "it-it", localeID: "it_IT", pluralCat: function (e, o) {
      const r = e | 0;
      const a = t(e, o);
      if (r == 1 && a.v == 0) {
        return i.ONE;
      }return i.OTHER;
    } });
}]);
