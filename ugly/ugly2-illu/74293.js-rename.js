import moment from "../moment";export default moment.defineLocale("zh-tw", { months: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"], monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], weekdays: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"], weekdaysShort: ["\u9031\u65E5", "\u9031\u4E00", "\u9031\u4E8C", "\u9031\u4E09", "\u9031\u56DB", "\u9031\u4E94", "\u9031\u516D"], weekdaysMin: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function (e, _) {
    if (e === 12) {
      e = 0;
    }if (_ === "\u51CC\u6668" || _ === "\u65E9\u4E0A" || _ === "\u4E0A\u5348") {
      return e;
    } else if (_ === "\u4E2D\u5348") {
      return e >= 11 ? e : e + 12;
    } else if (_ === "\u4E0B\u5348" || _ === "\u665A\u4E0A") {
      return e + 12;
    }
  }, meridiem: function (e, _, r) {
    const t = e * 100 + _;
    if (t < 600) {
      return "\u51CC\u6668";
    } else if (t < 900) {
      return "\u65E9\u4E0A";
    } else if (t < 1130) {
      return "\u4E0A\u5348";
    } else if (t < 1230) {
      return "\u4E2D\u5348";
    } else if (t < 1800) {
      return "\u4E0B\u5348";
    } else {
      return "\u665A\u4E0A";
    }
  }, calendar: { sameDay: "[\u4ECA\u5929] LT", nextDay: "[\u660E\u5929] LT", nextWeek: "[\u4E0B]dddd LT", lastDay: "[\u6628\u5929] LT", lastWeek: "[\u4E0A]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function (e, _) {
    switch (_) {case "d":case "D":case "DDD":
        return e + "\u65E5";case "M":
        return e + "\u6708";case "w":case "W":
        return e + "\u9031";default:
        return e;}
  }, relativeTime: { future: "%s\u5F8C", past: "%s\u524D", s: "\u5E7E\u79D2", ss: "%d \u79D2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5C0F\u6642", hh: "%d \u5C0F\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500B\u6708", MM: "%d \u500B\u6708", y: "1 \u5E74", yy: "%d \u5E74" } });
