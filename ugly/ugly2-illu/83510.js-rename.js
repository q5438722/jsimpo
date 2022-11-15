"use strict";
angular.module("ngLocale", [], ["$provide", function (e) {
  const r = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  e.value("$locale", { DATETIME_FORMATS: { AMPMS: ["da manh\xE3", "da tarde"], DAY: ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"], ERANAMES: ["antes de Cristo", "depois de Cristo"], ERAS: ["a.C.", "d.C."], FIRSTDAYOFWEEK: 0, MONTH: ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"], SHORTDAY: ["domingo", "segunda", "ter\xE7a", "quarta", "quinta", "sexta", "s\xE1bado"], SHORTMONTH: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], STANDALONEMONTH: ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"], WEEKENDRANGE: [5, 6], fullDate: "EEEE, d 'de' MMMM 'de' y", longDate: "d 'de' MMMM 'de' y", medium: "dd/MM/y HH:mm:ss", mediumDate: "dd/MM/y", mediumTime: "HH:mm:ss", short: "dd/MM/yy HH:mm", shortDate: "dd/MM/yy", shortTime: "HH:mm" }, NUMBER_FORMATS: { CURRENCY_SYM: "Db", DECIMAL_SEP: ",", GROUP_SEP: "\xA0", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 0, minFrac: 0, minInt: 1, negPre: "-", negSuf: "\xA0\xA4", posPre: "", posSuf: "\xA0\xA4" }] }, id: "pt-st", localeID: "pt_ST", pluralCat: function (e, a) {
      const o = e | 0;
      if (o >= 0 && o <= 1) {
        return r.ONE;
      }return r.OTHER;
    } });
}]);
