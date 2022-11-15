"use strict";
angular.module("ngLocale", [], ["$provide", function (a) {
  const n = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function e(a) {
    a = a + "";const i = a.indexOf(".");
    return i == -1 ? 0 : a.length - i - 1;
  }function M(a, i) {
    var u = i;
    if (undefined === u) {
      u = Math.min(e(a), 3);
    }const r = Math.pow(10, u);
    const n = (a * r | 0) % r;
    return { v: u, f: n };
  }a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: ["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Jumma\u02BCa", "Asabar"], ERANAMES: ["Kafin haihuwar annab", "Bayan haihuwar annab"], ERAS: ["KHAI", "BHAI"], FIRSTDAYOFWEEK: 0, MONTH: ["Janairu", "Faburairu", "Maris", "Afirilu", "Mayu", "Yuni", "Yuli", "Agusta", "Satumba", "Oktoba", "Nuwamba", "Disamba"], SHORTDAY: ["Lah", "Lit", "Tal", "Lar", "Alh", "Jum", "Asa"], SHORTMONTH: ["Jan", "Fab", "Mar", "Afi", "May", "Yun", "Yul", "Agu", "Sat", "Okt", "Nuw", "Dis"], STANDALONEMONTH: ["Janairu", "Faburairu", "Maris", "Afirilu", "Mayu", "Yuni", "Yuli", "Agusta", "Satumba", "Oktoba", "Nuwamba", "Disamba"], WEEKENDRANGE: [5, 6], fullDate: "EEEE, d MMMM, y", longDate: "d MMMM, y", medium: "d MMM, y HH:mm:ss", mediumDate: "d MMM, y", mediumTime: "HH:mm:ss", short: "d/M/yy HH:mm", shortDate: "d/M/yy", shortTime: "HH:mm" }, NUMBER_FORMATS: { CURRENCY_SYM: "\u20A6", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4\xA0", negSuf: "", posPre: "\xA4\xA0", posSuf: "" }] }, id: "ha", localeID: "ha", pluralCat: function (a, i) {
      const u = a | 0;
      const r = M(a, i);
      if (u == 1 && r.v == 0) {
        return n.ONE;
      }return n.OTHER;
    } });
}]);
