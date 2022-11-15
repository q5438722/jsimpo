"use strict";
angular.module("ngLocale", [], ["$provide", function (e) {
  const i = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  e.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ERANAMES: ["avant J\xE9sus-Christ", "apr\xE8s J\xE9sus-Christ"], ERAS: ["av. J.-C.", "ap. J.-C."], FIRSTDAYOFWEEK: 0, MONTH: ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"], SHORTDAY: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], SHORTMONTH: ["janv.", "f\xE9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xFBt", "sept.", "oct.", "nov.", "d\xE9c."], STANDALONEMONTH: ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"], WEEKENDRANGE: [5, 6], fullDate: "EEEE d MMMM y", longDate: "d MMMM y", medium: "d MMM y HH:mm:ss", mediumDate: "d MMM y", mediumTime: "HH:mm:ss", short: "dd/MM/y HH:mm", shortDate: "dd/MM/y", shortTime: "HH:mm" }, NUMBER_FORMATS: { CURRENCY_SYM: "CFA", DECIMAL_SEP: ",", GROUP_SEP: "\xA0", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 0, minFrac: 0, minInt: 1, negPre: "-", negSuf: "\xA0\xA4", posPre: "", posSuf: "\xA0\xA4" }] }, id: "fr-ci", localeID: "fr_CI", pluralCat: function (e, r) {
      const a = e | 0;
      if (a == 0 || a == 1) {
        return i.ONE;
      }return i.OTHER;
    } });
}]);
