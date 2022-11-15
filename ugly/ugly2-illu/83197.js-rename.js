"use strict";
angular.module("ngLocale", [], ["$provide", function (e) {
  const r = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function E(e) {
    e = e + "";const M = e.indexOf(".");
    return M == -1 ? 0 : e.length - M - 1;
  }function i(e, M) {
    var a = M;
    if (undefined === a) {
      a = Math.min(E(e), 3);
    }const n = Math.pow(10, a);
    const r = (e * n | 0) % n;
    return { v: a, f: r };
  }e.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: ["\u0627\u064E\u062A\u06BE\u0648\u0627\u0631", "\u0698\u0654\u0646\u065B\u062F\u0631\u0655\u0631\u0648\u0627\u0631", "\u0628\u0648\u065A\u0645\u0648\u0627\u0631", "\u0628\u0648\u062F\u0648\u0627\u0631", "\u0628\u0631\u065B\u066E\u06EA\u0633\u0648\u0627\u0631", "\u062C\u064F\u0645\u06C1", "\u0628\u0679\u0648\u0627\u0631"], ERANAMES: ["\u0642\u0628\u0655\u0644 \u0645\u0633\u06CC\u0656\u062D", "\u0639\u06CC\u0656\u0633\u0648\u06CC \u0633\u0646\u06C1\u0655"], ERAS: ["\u0628\u06CC \u0633\u06CC", "\u0627\u06D2 \u0688\u06CC"], FIRSTDAYOFWEEK: 6, MONTH: ["\u062C\u0646\u0624\u0631\u06CC", "\u0641\u0631\u0624\u0631\u06CC", "\u0645\u0627\u0631\u0655\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC\u0654", "\u062C\u0648\u0657\u0646", "\u062C\u0648\u0657\u0644\u0627\u06CC\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0657\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], SHORTDAY: ["\u0622\u062A\u06BE\u0648\u0627\u0631", "\u0698\u0654\u0646\u065B\u062F\u0655\u0631\u0648\u0627\u0631", "\u0628\u0648\u065A\u0645\u0648\u0627\u0631", "\u0628\u0648\u062F\u0648\u0627\u0631", "\u0628\u0631\u065B\u066E\u06EA\u0633\u0648\u0627\u0631", "\u062C\u064F\u0645\u06C1", "\u0628\u0679\u0648\u0627\u0631"], SHORTMONTH: ["\u062C\u0646\u0624\u0631\u06CC", "\u0641\u0631\u0624\u0631\u06CC", "\u0645\u0627\u0631\u0655\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC\u0654", "\u062C\u0648\u0657\u0646", "\u062C\u0648\u0657\u0644\u0627\u06CC\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0657\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], STANDALONEMONTH: ["\u062C\u0646\u0624\u0631\u06CC", "\u0641\u0631\u0624\u0631\u06CC", "\u0645\u0627\u0631\u0655\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC\u0654", "\u062C\u0648\u0657\u0646", "\u062C\u0648\u0657\u0644\u0627\u06CC\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0657\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], WEEKENDRANGE: [6, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", short: "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "\u20B9", DECIMAL_SEP: "\u066B", GROUP_SEP: "\u066C", PATTERNS: [{ gSize: 2, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 2, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4\xA0", negSuf: "", posPre: "\xA4\xA0", posSuf: "" }] }, id: "ks", localeID: "ks", pluralCat: function (e, M) {
      const a = e | 0;
      const n = i(e, M);
      if (a == 1 && n.v == 0) {
        return r.ONE;
      }return r.OTHER;
    } });
}]);
