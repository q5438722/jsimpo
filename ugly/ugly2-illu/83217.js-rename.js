"use strict";
angular.module("ngLocale", [], ["$provide", function (a) {
  const e = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function n(a) {
    a = a + "";const i = a.indexOf(".");
    return i == -1 ? 0 : a.length - i - 1;
  }function s(a, i) {
    var d = i;
    if (undefined === d) {
      d = Math.min(n(a), 3);
    }const o = Math.pow(10, d);
    const e = (a * o | 0) % o;
    return { v: d, f: e };
  }a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["sn.", "gn."], DAY: ["Axad", "Isniin", "Talaado", "Arbaco", "Khamiis", "Jimco", "Sabti"], ERANAMES: ["CK", "CD"], ERAS: ["CK", "CD"], FIRSTDAYOFWEEK: 6, MONTH: ["Bisha Koobaad", "Bisha Labaad", "Bisha Saddexaad", "Bisha Afraad", "Bisha Shanaad", "Bisha Lixaad", "Bisha Todobaad", "Bisha Sideedaad", "Bisha Sagaalaad", "Bisha Tobnaad", "Bisha Kow iyo Tobnaad", "Bisha Laba iyo Tobnaad"], SHORTDAY: ["Axd", "Isn", "Tal", "Arb", "Kha", "Jim", "Sab"], SHORTMONTH: ["Kob", "Lab", "Sad", "Afr", "Sha", "Lix", "Tod", "Sid", "Sag", "Tob", "KIT", "LIT"], STANDALONEMONTH: ["Bisha Koobaad", "Bisha Labaad", "Bisha Saddexaad", "Bisha Afraad", "Bisha Shanaad", "Bisha Lixaad", "Bisha Todobaad", "Bisha Sideedaad", "Bisha Sagaalaad", "Bisha Tobnaad", "Bisha Kow iyo Tobnaad", "Bisha Laba iyo Tobnaad"], WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM dd, y", longDate: "dd MMMM y", medium: "dd-MMM-y h:mm:ss a", mediumDate: "dd-MMM-y", mediumTime: "h:mm:ss a", short: "dd/MM/yy h:mm a", shortDate: "dd/MM/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "Birr", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "so-et", localeID: "so_ET", pluralCat: function (a, i) {
      const d = a | 0;
      const o = s(a, i);
      if (d == 1 && o.v == 0) {
        return e.ONE;
      }return e.OTHER;
    } });
}]);
