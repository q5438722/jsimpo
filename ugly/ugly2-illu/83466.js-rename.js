"use strict";
angular.module("ngLocale", [], ["$provide", function (e) {
  const t = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  e.value("$locale", { DATETIME_FORMATS: { AMPMS: ["e paradites", "e pasdites"], DAY: ["e diel", "e h\xEBn\xEB", "e mart\xEB", "e m\xEBrkur\xEB", "e enjte", "e premte", "e shtun\xEB"], ERANAMES: ["para Krishtit", "mbas Krishtit"], ERAS: ["p.K.", "mb.K."], FIRSTDAYOFWEEK: 0, MONTH: ["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "n\xEBntor", "dhjetor"], SHORTDAY: ["Die", "H\xEBn", "Mar", "M\xEBr", "Enj", "Pre", "Sht"], SHORTMONTH: ["jan", "shk", "mar", "pri", "maj", "qer", "kor", "gsh", "sht", "tet", "n\xEBn", "dhj"], STANDALONEMONTH: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xEBntor", "Dhjetor"], WEEKENDRANGE: [5, 6], fullDate: "EEEE, d MMMM y", longDate: "d MMMM y", medium: "d MMM y h:mm:ss a", mediumDate: "d MMM y", mediumTime: "h:mm:ss a", short: "d.M.yy h:mm a", shortDate: "d.M.yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "Lek", DECIMAL_SEP: ",", GROUP_SEP: "\xA0", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 0, minFrac: 0, minInt: 1, negPre: "-", negSuf: "\xA0\xA4", posPre: "", posSuf: "\xA0\xA4" }] }, id: "sq-al", localeID: "sq_AL", pluralCat: function (e, r) {
      if (e == 1) {
        return t.ONE;
      }return t.OTHER;
    } });
}]);
