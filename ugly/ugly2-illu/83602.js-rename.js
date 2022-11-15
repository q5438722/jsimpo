"use strict";
angular.module("ngLocale", [], ["$provide", function (n) {
  const e = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function i(n) {
    n = n + "";const a = n.indexOf(".");
    return a == -1 ? 0 : n.length - a - 1;
  }function r(n, a) {
    var g = a;
    if (undefined === g) {
      g = Math.min(i(n), 3);
    }const m = Math.pow(10, g);
    const e = (n * m | 0) % m;
    return { v: g, f: e };
  }n.value("$locale", { DATETIME_FORMATS: { AMPMS: ["k\xEDk\xEDr\xEDg", "ng\u0259g\xF3g\u0259le"], DAY: ["s\u0254\u0301nd\u0254", "m\u0254\u0301ndi", "s\u0254\u0301nd\u0254 m\u0259l\xFA m\u0259\u0301b\u025B\u030C", "s\u0254\u0301nd\u0254 m\u0259l\xFA m\u0259\u0301l\u025B\u0301", "s\u0254\u0301nd\u0254 m\u0259l\xFA m\u0259\u0301nyi", "f\xFAlad\xE9", "s\xE9rad\xE9"], ERANAMES: ["os\xFAs\xFAa Y\xE9sus kiri", "\xE1mvus Y\xE9sus Kir\xEDs"], ERAS: ["oyk", "ayk"], FIRSTDAYOFWEEK: 0, MONTH: ["ng\u0254n os\xFA", "ng\u0254n b\u025B\u030C", "ng\u0254n l\xE1la", "ng\u0254n nyina", "ng\u0254n t\xE1na", "ng\u0254n sam\u0259na", "ng\u0254n zamgb\xE1la", "ng\u0254n mwom", "ng\u0254n ebul\xFA", "ng\u0254n aw\xF3m", "ng\u0254n aw\xF3m ai dzi\xE1", "ng\u0254n aw\xF3m ai b\u025B\u030C"], SHORTDAY: ["s\u0254\u0301n", "m\u0254\u0301n", "smb", "sml", "smn", "f\xFAl", "s\xE9r"], SHORTMONTH: ["ngo", "ngb", "ngl", "ngn", "ngt", "ngs", "ngz", "ngm", "nge", "nga", "ngad", "ngab"], STANDALONEMONTH: ["ng\u0254n os\xFA", "ng\u0254n b\u025B\u030C", "ng\u0254n l\xE1la", "ng\u0254n nyina", "ng\u0254n t\xE1na", "ng\u0254n sam\u0259na", "ng\u0254n zamgb\xE1la", "ng\u0254n mwom", "ng\u0254n ebul\xFA", "ng\u0254n aw\xF3m", "ng\u0254n aw\xF3m ai dzi\xE1", "ng\u0254n aw\xF3m ai b\u025B\u030C"], WEEKENDRANGE: [5, 6], fullDate: "EEEE d MMMM y", longDate: "d MMMM y", medium: "d MMM y HH:mm:ss", mediumDate: "d MMM y", mediumTime: "HH:mm:ss", short: "d/M/y HH:mm", shortDate: "d/M/y", shortTime: "HH:mm" }, NUMBER_FORMATS: { CURRENCY_SYM: "FCFA", DECIMAL_SEP: ",", GROUP_SEP: "\xA0", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 0, minFrac: 0, minInt: 1, negPre: "-", negSuf: "\xA0\xA4", posPre: "", posSuf: "\xA0\xA4" }] }, id: "ewo-cm", localeID: "ewo_CM", pluralCat: function (n, a) {
      const g = n | 0;
      const m = r(n, a);
      if (g == 1 && m.v == 0) {
        return e.ONE;
      }return e.OTHER;
    } });
}]);
