"use strict";
angular.module("ngLocale", [], ["$provide", function (e) {
  const s = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  e.value("$locale", { DATETIME_FORMATS: { AMPMS: ["de.", "du."], DAY: ["vas\xE1rnap", "h\xE9tf\u0151", "kedd", "szerda", "cs\xFCt\xF6rt\xF6k", "p\xE9ntek", "szombat"], ERANAMES: ["id\u0151sz\xE1m\xEDt\xE1sunk el\u0151tt", "id\u0151sz\xE1m\xEDt\xE1sunk szerint"], ERAS: ["i. e.", "i. sz."], FIRSTDAYOFWEEK: 0, MONTH: ["janu\xE1r", "febru\xE1r", "m\xE1rcius", "\xE1prilis", "m\xE1jus", "j\xFAnius", "j\xFAlius", "augusztus", "szeptember", "okt\xF3ber", "november", "december"], SHORTDAY: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], SHORTMONTH: ["jan.", "febr.", "m\xE1rc.", "\xE1pr.", "m\xE1j.", "j\xFAn.", "j\xFAl.", "aug.", "szept.", "okt.", "nov.", "dec."], STANDALONEMONTH: ["janu\xE1r", "febru\xE1r", "m\xE1rcius", "\xE1prilis", "m\xE1jus", "j\xFAnius", "j\xFAlius", "augusztus", "szeptember", "okt\xF3ber", "november", "december"], WEEKENDRANGE: [5, 6], fullDate: "y. MMMM d., EEEE", longDate: "y. MMMM d.", medium: "y. MMM d. H:mm:ss", mediumDate: "y. MMM d.", mediumTime: "H:mm:ss", short: "y. MM. dd. H:mm", shortDate: "y. MM. dd.", shortTime: "H:mm" }, NUMBER_FORMATS: { CURRENCY_SYM: "Ft", DECIMAL_SEP: ",", GROUP_SEP: "\xA0", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-", negSuf: "\xA0\xA4", posPre: "", posSuf: "\xA0\xA4" }] }, id: "hu", localeID: "hu", pluralCat: function (e, r) {
      if (e == 1) {
        return s.ONE;
      }return s.OTHER;
    } });
}]);
