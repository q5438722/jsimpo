"use strict";
angular.module("ngLocale", [], ["$provide", function (e) {
  const t = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function o(e) {
    e = e + "";const r = e.indexOf(".");
    return r == -1 ? 0 : e.length - r - 1;
  }function u(e, r) {
    var a = r;
    if (undefined === a) {
      a = Math.min(o(e), 3);
    }const n = Math.pow(10, a);
    const t = (e * n | 0) % n;
    return { v: a, f: t };
  }e.value("$locale", { DATETIME_FORMATS: { AMPMS: ["pre podne", "po podne"], DAY: ["nedelja", "ponedeljak", "utorak", "sreda", "\u010Detvrtak", "petak", "subota"], ERANAMES: ["pre nove ere", "nove ere"], ERAS: ["p. n. e.", "n. e."], FIRSTDAYOFWEEK: 0, MONTH: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], SHORTDAY: ["ned", "pon", "uto", "sre", "\u010Det", "pet", "sub"], SHORTMONTH: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], STANDALONEMONTH: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], WEEKENDRANGE: [5, 6], fullDate: "EEEE, dd. MMMM y.", longDate: "dd. MMMM y.", medium: "dd.MM.y. HH:mm:ss", mediumDate: "dd.MM.y.", mediumTime: "HH:mm:ss", short: "d.M.yy. HH:mm", shortDate: "d.M.yy.", shortTime: "HH:mm" }, NUMBER_FORMATS: { CURRENCY_SYM: "din", DECIMAL_SEP: ",", GROUP_SEP: ".", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 0, minFrac: 0, minInt: 1, negPre: "-", negSuf: "\xA0\xA4", posPre: "", posSuf: "\xA0\xA4" }] }, id: "sr-latn-rs", localeID: "sr_Latn_RS", pluralCat: function (e, r) {
      const a = e | 0;
      const n = u(e, r);
      if (n.v == 0 && a % 10 == 1 && a % 100 != 11 || n.f % 10 == 1 && n.f % 100 != 11) {
        return t.ONE;
      }if (n.v == 0 && a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14) || n.f % 10 >= 2 && n.f % 10 <= 4 && (n.f % 100 < 12 || n.f % 100 > 14)) {
        return t.FEW;
      }return t.OTHER;
    } });
}]);
