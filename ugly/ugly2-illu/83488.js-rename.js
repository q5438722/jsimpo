"use strict";
angular.module("ngLocale", [], ["$provide", function (n) {
  const h = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function r(n) {
    n = n + "";const a = n.indexOf(".");
    return a == -1 ? 0 : n.length - a - 1;
  }function t(n, a) {
    var i = a;
    if (undefined === i) {
      i = Math.min(r(n), 3);
    }const e = Math.pow(10, i);
    const h = (n * e | 0) % e;
    return { v: i, f: h };
  }n.value("$locale", { DATETIME_FORMATS: { AMPMS: ["m", "f"], DAY: ["DiD\xF2mhnaich", "DiLuain", "DiM\xE0irt", "DiCiadain", "DiarDaoin", "DihAoine", "DiSathairne"], ERANAMES: ["Ro Chr\xECosta", "An d\xE8idh Chr\xECosta"], ERAS: ["RC", "AD"], FIRSTDAYOFWEEK: 0, MONTH: ["dhen Fhaoilleach", "dhen Ghearran", "dhen Mh\xE0rt", "dhen Ghiblean", "dhen Ch\xE8itean", "dhen \xD2gmhios", "dhen Iuchar", "dhen L\xF9nastal", "dhen t-Sultain", "dhen D\xE0mhair", "dhen t-Samhain", "dhen D\xF9bhlachd"], SHORTDAY: ["DiD", "DiL", "DiM", "DiC", "Dia", "Dih", "DiS"], SHORTMONTH: ["Faoi", "Gearr", "M\xE0rt", "Gibl", "C\xE8it", "\xD2gmh", "Iuch", "L\xF9na", "Sult", "D\xE0mh", "Samh", "D\xF9bh"], STANDALONEMONTH: ["Am Faoilleach", "An Gearran", "Am M\xE0rt", "An Giblean", "An C\xE8itean", "An t-\xD2gmhios", "An t-Iuchar", "An L\xF9nastal", "An t-Sultain", "An D\xE0mhair", "An t-Samhain", "An D\xF9bhlachd"], WEEKENDRANGE: [5, 6], fullDate: "EEEE, d'mh' MMMM y", longDate: "d'mh' MMMM y", medium: "d MMM y HH:mm:ss", mediumDate: "d MMM y", mediumTime: "HH:mm:ss", short: "dd/MM/y HH:mm", shortDate: "dd/MM/y", shortTime: "HH:mm" }, NUMBER_FORMATS: { CURRENCY_SYM: "\xA3", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "gd", localeID: "gd", pluralCat: function (n, a) {
      const i = n | 0;
      const e = t(n, a);
      if (i == 1 && e.v == 0) {
        return h.ONE;
      }return h.OTHER;
    } });
}]);
