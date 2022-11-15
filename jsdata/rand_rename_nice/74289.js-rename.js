'use strict';
import moment from "../moment";
function plural(value, replacer) {
  var pseudoNames = value.split("_");
  return replacer % 10 === 1 && replacer % 100 !== 11 ? pseudoNames[0] : replacer % 10 >= 2 && replacer % 10 <= 4 && (replacer % 100 < 10 || replacer % 100 >= 20) ? pseudoNames[1] : pseudoNames[2];
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
  var format = {
    ss : withoutSuffix ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
    mm : withoutSuffix ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",
    hh : withoutSuffix ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
    dd : "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",
    MM : "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",
    yy : "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"
  };
  if (key === "m") {
    return withoutSuffix ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443";
  } else {
    if (key === "h") {
      return withoutSuffix ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443";
    } else {
      return number + " " + plural(format[key], +number);
    }
  }
}
export default moment.defineLocale("be", {
  months : {
    format : "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"),
    standalone : "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_")
  },
  monthsShort : "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),
  weekdays : {
    format : "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),
    standalone : "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
    isFormat : /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
  },
  weekdaysShort : "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
  weekdaysMin : "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
  longDateFormat : {
    LT : "HH:mm",
    LTS : "HH:mm:ss",
    L : "DD.MM.YYYY",
    LL : "D MMMM YYYY \u0433.",
    LLL : "D MMMM YYYY \u0433., HH:mm",
    LLLL : "dddd, D MMMM YYYY \u0433., HH:mm"
  },
  calendar : {
    sameDay : "[\u0421\u0451\u043d\u043d\u044f \u045e] LT",
    nextDay : "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",
    lastDay : "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",
    nextWeek : function() {
      return "[\u0423] dddd [\u045e] LT";
    },
    lastWeek : function() {
      switch(this.day()) {
        case 0:
        case 3:
        case 5:
        case 6:
          return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";
        case 1:
        case 2:
        case 4:
          return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT";
      }
    },
    sameElse : "L"
  },
  relativeTime : {
    future : "\u043f\u0440\u0430\u0437 %s",
    past : "%s \u0442\u0430\u043c\u0443",
    s : "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",
    m : relativeTimeWithPlural,
    mm : relativeTimeWithPlural,
    h : relativeTimeWithPlural,
    hh : relativeTimeWithPlural,
    d : "\u0434\u0437\u0435\u043d\u044c",
    dd : relativeTimeWithPlural,
    M : "\u043c\u0435\u0441\u044f\u0446",
    MM : relativeTimeWithPlural,
    y : "\u0433\u043e\u0434",
    yy : relativeTimeWithPlural
  },
  meridiemParse : /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
  isPM : function(token) {
    return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(token);
  },
  meridiem : function(minute, isLower, hour) {
    if (minute < 4) {
      return "\u043d\u043e\u0447\u044b";
    } else {
      if (minute < 12) {
        return "\u0440\u0430\u043d\u0456\u0446\u044b";
      } else {
        if (minute < 17) {
          return "\u0434\u043d\u044f";
        } else {
          return "\u0432\u0435\u0447\u0430\u0440\u0430";
        }
      }
    }
  },
  dayOfMonthOrdinalParse : /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
  ordinal : function(number, period) {
    switch(period) {
      case "M":
      case "d":
      case "DDD":
      case "w":
      case "W":
        return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + "-\u0456" : number + "-\u044b";
      case "D":
        return number + "-\u0433\u0430";
      default:
        return number;
    }
  },
  week : {
    dow : 1,
    doy : 7
  }
});

