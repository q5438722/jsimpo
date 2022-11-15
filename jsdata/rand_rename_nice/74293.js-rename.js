'use strict';
import moment from "../moment";
export default moment.defineLocale("zh-tw", {
  months : "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
  monthsShort : "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
  weekdays : "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
  weekdaysShort : "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
  weekdaysMin : "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
  longDateFormat : {
    LT : "HH:mm",
    LTS : "HH:mm:ss",
    L : "YYYY/MM/DD",
    LL : "YYYY\u5e74M\u6708D\u65e5",
    LLL : "YYYY\u5e74M\u6708D\u65e5 HH:mm",
    LLLL : "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
    l : "YYYY/M/D",
    ll : "YYYY\u5e74M\u6708D\u65e5",
    lll : "YYYY\u5e74M\u6708D\u65e5 HH:mm",
    llll : "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
  },
  meridiemParse : /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
  meridiemHour : function(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "\u51cc\u6668" || meridiem === "\u65e9\u4e0a" || meridiem === "\u4e0a\u5348") {
      return hour;
    } else {
      if (meridiem === "\u4e2d\u5348") {
        return hour >= 11 ? hour : hour + 12;
      } else {
        if (meridiem === "\u4e0b\u5348" || meridiem === "\u665a\u4e0a") {
          return hour + 12;
        }
      }
    }
  },
  meridiem : function(hour, minute, isLower) {
    var hm = hour * 100 + minute;
    if (hm < 600) {
      return "\u51cc\u6668";
    } else {
      if (hm < 900) {
        return "\u65e9\u4e0a";
      } else {
        if (hm < 1130) {
          return "\u4e0a\u5348";
        } else {
          if (hm < 1230) {
            return "\u4e2d\u5348";
          } else {
            if (hm < 1800) {
              return "\u4e0b\u5348";
            } else {
              return "\u665a\u4e0a";
            }
          }
        }
      }
    }
  },
  calendar : {
    sameDay : "[\u4eca\u5929] LT",
    nextDay : "[\u660e\u5929] LT",
    nextWeek : "[\u4e0b]dddd LT",
    lastDay : "[\u6628\u5929] LT",
    lastWeek : "[\u4e0a]dddd LT",
    sameElse : "L"
  },
  dayOfMonthOrdinalParse : /\d{1,2}(\u65e5|\u6708|\u9031)/,
  ordinal : function(number, period) {
    switch(period) {
      case "d":
      case "D":
      case "DDD":
        return number + "\u65e5";
      case "M":
        return number + "\u6708";
      case "w":
      case "W":
        return number + "\u9031";
      default:
        return number;
    }
  },
  relativeTime : {
    future : "%s\u5f8c",
    past : "%s\u524d",
    s : "\u5e7e\u79d2",
    ss : "%d \u79d2",
    m : "1 \u5206\u9418",
    mm : "%d \u5206\u9418",
    h : "1 \u5c0f\u6642",
    hh : "%d \u5c0f\u6642",
    d : "1 \u5929",
    dd : "%d \u5929",
    M : "1 \u500b\u6708",
    MM : "%d \u500b\u6708",
    y : "1 \u5e74",
    yy : "%d \u5e74"
  }
});

