import { test } from "../qunit";import { localeModule } from "../qunit-locale";import moment from "../../moment";localeModule("cv");test("parse", function (m) {
  const e = ["\u043A\u04D1\u0440\u043B\u0430\u0447 \u043A\u04D1\u0440", "\u043D\u0430\u0440\u04D1\u0441 \u043D\u0430\u0440", "\u043F\u0443\u0448 \u043F\u0443\u0448", "\u0430\u043A\u0430 \u0430\u043A\u0430", "\u043C\u0430\u0439 \u043C\u0430\u0439", "\u04AB\u04D7\u0440\u0442\u043C\u0435 \u04AB\u04D7\u0440", "\u0443\u0442\u04D1 \u0443\u0442\u04D1", "\u04AB\u0443\u0440\u043B\u0430 \u04AB\u0443\u0440", "\u0430\u0432\u04D1\u043D \u0430\u0432\u043D", "\u044E\u043F\u0430 \u044E\u043F\u0430", "\u0447\u04F3\u043A \u0447\u04F3\u043A", "\u0440\u0430\u0448\u0442\u0430\u0432 \u0440\u0430\u0448"];
  var o;
  function a(e, o, a) {
    m.equal(moment(e, o).month(), a, e + " should be month " + (a + 1));
  }function t(e, o, a) {
    m.equal(moment(e, o, true).month(), a, e + " " + o + " should be strict month " + (a + 1));
  }for (o = 0; o < 12; o++) {
    e[o] = e[o].split(" ");a(e[o][0], "MMM", o);a(e[o][1], "MMM", o);a(e[o][0], "MMMM", o);a(e[o][1], "MMMM", o);a(e[o][0].toLocaleLowerCase(), "MMMM", o);a(e[o][1].toLocaleLowerCase(), "MMMM", o);a(e[o][0].toLocaleUpperCase(), "MMMM", o);a(e[o][1].toLocaleUpperCase(), "MMMM", o);t(e[o][1], "MMM", o);t(e[o][0], "MMMM", o);t(e[o][1].toLocaleLowerCase(), "MMM", o);t(e[o][1].toLocaleUpperCase(), "MMM", o);t(e[o][0].toLocaleLowerCase(), "MMMM", o);t(e[o][0].toLocaleUpperCase(), "MMMM", o);
  }
});test("format", function (e) {
  const o = [["dddd, MMMM Do YYYY, h:mm:ss a", "\u0432\u044B\u0440\u0441\u0430\u0440\u043D\u0438\u043A\u0443\u043D, \u043D\u0430\u0440\u04D1\u0441 14-\u043C\u04D7\u0448 2010, 3:25:50 pm"], ["ddd, hA", "\u0432\u044B\u0440, 3PM"], ["M Mo MM MMMM MMM", "2 2-\u043C\u04D7\u0448 02 \u043D\u0430\u0440\u04D1\u0441 \u043D\u0430\u0440"], ["YYYY YY", "2010 10"], ["D Do DD", "14 14-\u043C\u04D7\u0448 14"], ["d do dddd ddd dd", "0 0-\u043C\u04D7\u0448 \u0432\u044B\u0440\u0441\u0430\u0440\u043D\u0438\u043A\u0443\u043D \u0432\u044B\u0440 \u0432\u0440"], ["DDD DDDo DDDD", "45 45-\u043C\u04D7\u0448 045"], ["w wo ww", "7 7-\u043C\u04D7\u0448 07"], ["h hh", "3 03"], ["H HH", "15 15"], ["m mm", "25 25"], ["s ss", "50 50"], ["a A", "pm PM"], ["\u04AA\u0443\u043B\u04D1\u043D DDDo \u043A\u0443\u043D\u04D7", "\u04AA\u0443\u043B\u04D1\u043D 45-\u043C\u04D7\u0448 \u043A\u0443\u043D\u04D7"], ["LTS", "15:25:50"], ["L", "14-02-2010"], ["LL", "2010 \u04AB\u0443\u043B\u0445\u0438 \u043D\u0430\u0440\u04D1\u0441 \u0443\u0439\u04D1\u0445\u04D7\u043D 14-\u043C\u04D7\u0448\u04D7"], ["LLL", "2010 \u04AB\u0443\u043B\u0445\u0438 \u043D\u0430\u0440\u04D1\u0441 \u0443\u0439\u04D1\u0445\u04D7\u043D 14-\u043C\u04D7\u0448\u04D7, 15:25"], ["LLLL", "\u0432\u044B\u0440\u0441\u0430\u0440\u043D\u0438\u043A\u0443\u043D, 2010 \u04AB\u0443\u043B\u0445\u0438 \u043D\u0430\u0440\u04D1\u0441 \u0443\u0439\u04D1\u0445\u04D7\u043D 14-\u043C\u04D7\u0448\u04D7, 15:25"], ["l", "14-2-2010"], ["ll", "2010 \u04AB\u0443\u043B\u0445\u0438 \u043D\u0430\u0440 \u0443\u0439\u04D1\u0445\u04D7\u043D 14-\u043C\u04D7\u0448\u04D7"], ["lll", "2010 \u04AB\u0443\u043B\u0445\u0438 \u043D\u0430\u0440 \u0443\u0439\u04D1\u0445\u04D7\u043D 14-\u043C\u04D7\u0448\u04D7, 15:25"], ["llll", "\u0432\u044B\u0440, 2010 \u04AB\u0443\u043B\u0445\u0438 \u043D\u0430\u0440 \u0443\u0439\u04D1\u0445\u04D7\u043D 14-\u043C\u04D7\u0448\u04D7, 15:25"]];
  const a = moment(new Date(2010, 1, 14, 15, 25, 50, 125));
  var m;
  for (m = 0; m < o.length; m++) {
    e.equal(a.format(o[m][0]), o[m][1], o[m][0] + " ---> " + o[m][1]);
  }
});test("format ordinal", function (e) {
  e.equal(moment([2011, 0, 1]).format("DDDo"), "1-\u043C\u04D7\u0448", "1-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 2]).format("DDDo"), "2-\u043C\u04D7\u0448", "2-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 3]).format("DDDo"), "3-\u043C\u04D7\u0448", "3-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 4]).format("DDDo"), "4-\u043C\u04D7\u0448", "4-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 5]).format("DDDo"), "5-\u043C\u04D7\u0448", "5-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 6]).format("DDDo"), "6-\u043C\u04D7\u0448", "6-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 7]).format("DDDo"), "7-\u043C\u04D7\u0448", "7-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 8]).format("DDDo"), "8-\u043C\u04D7\u0448", "8-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 9]).format("DDDo"), "9-\u043C\u04D7\u0448", "9-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 10]).format("DDDo"), "10-\u043C\u04D7\u0448", "10-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 11]).format("DDDo"), "11-\u043C\u04D7\u0448", "11-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 12]).format("DDDo"), "12-\u043C\u04D7\u0448", "12-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 13]).format("DDDo"), "13-\u043C\u04D7\u0448", "13-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 14]).format("DDDo"), "14-\u043C\u04D7\u0448", "14-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 15]).format("DDDo"), "15-\u043C\u04D7\u0448", "15-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 16]).format("DDDo"), "16-\u043C\u04D7\u0448", "16-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 17]).format("DDDo"), "17-\u043C\u04D7\u0448", "17-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 18]).format("DDDo"), "18-\u043C\u04D7\u0448", "18-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 19]).format("DDDo"), "19-\u043C\u04D7\u0448", "19-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 20]).format("DDDo"), "20-\u043C\u04D7\u0448", "20-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 21]).format("DDDo"), "21-\u043C\u04D7\u0448", "21-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 22]).format("DDDo"), "22-\u043C\u04D7\u0448", "22-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 23]).format("DDDo"), "23-\u043C\u04D7\u0448", "23-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 24]).format("DDDo"), "24-\u043C\u04D7\u0448", "24-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 25]).format("DDDo"), "25-\u043C\u04D7\u0448", "25-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 26]).format("DDDo"), "26-\u043C\u04D7\u0448", "26-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 27]).format("DDDo"), "27-\u043C\u04D7\u0448", "27-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 28]).format("DDDo"), "28-\u043C\u04D7\u0448", "28-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 29]).format("DDDo"), "29-\u043C\u04D7\u0448", "29-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 30]).format("DDDo"), "30-\u043C\u04D7\u0448", "30-\u043C\u04D7\u0448");e.equal(moment([2011, 0, 31]).format("DDDo"), "31-\u043C\u04D7\u0448", "31-\u043C\u04D7\u0448");
});test("format month", function (e) {
  const o = ["\u043A\u04D1\u0440\u043B\u0430\u0447 \u043A\u04D1\u0440", "\u043D\u0430\u0440\u04D1\u0441 \u043D\u0430\u0440", "\u043F\u0443\u0448 \u043F\u0443\u0448", "\u0430\u043A\u0430 \u0430\u043A\u0430", "\u043C\u0430\u0439 \u043C\u0430\u0439", "\u04AB\u04D7\u0440\u0442\u043C\u0435 \u04AB\u04D7\u0440", "\u0443\u0442\u04D1 \u0443\u0442\u04D1", "\u04AB\u0443\u0440\u043B\u0430 \u04AB\u0443\u0440", "\u0430\u0432\u04D1\u043D \u0430\u0432\u043D", "\u044E\u043F\u0430 \u044E\u043F\u0430", "\u0447\u04F3\u043A \u0447\u04F3\u043A", "\u0440\u0430\u0448\u0442\u0430\u0432 \u0440\u0430\u0448"];
  var a;
  for (a = 0; a < o.length; a++) {
    e.equal(moment([2011, a, 1]).format("MMMM MMM"), o[a], o[a]);
  }
});test("format week", function (e) {
  const o = ["\u0432\u044B\u0440\u0441\u0430\u0440\u043D\u0438\u043A\u0443\u043D \u0432\u044B\u0440 \u0432\u0440", "\u0442\u0443\u043D\u0442\u0438\u043A\u0443\u043D \u0442\u0443\u043D \u0442\u043D", "\u044B\u0442\u043B\u0430\u0440\u0438\u043A\u0443\u043D \u044B\u0442\u043B \u044B\u0442", "\u044E\u043D\u043A\u0443\u043D \u044E\u043D \u044E\u043D", "\u043A\u04D7\u04AB\u043D\u0435\u0440\u043D\u0438\u043A\u0443\u043D \u043A\u04D7\u04AB \u043A\u04AB", "\u044D\u0440\u043D\u0435\u043A\u0443\u043D \u044D\u0440\u043D \u044D\u0440", "\u0448\u04D1\u043C\u0430\u0442\u043A\u0443\u043D \u0448\u04D1\u043C \u0448\u043C"];
  var a;
  for (a = 0; a < o.length; a++) {
    e.equal(moment([2011, 0, 2 + a]).format("dddd ddd dd"), o[a], o[a]);
  }
});test("from", function (e) {
  const o = moment([2007, 1, 28]);
  e.equal(o.from(moment([2007, 1, 28]).add({ s: 44 }), true), "\u043F\u04D7\u0440-\u0438\u043A \u04AB\u0435\u043A\u043A\u0443\u043D\u0442", "44 sekunder = a few seconds");e.equal(o.from(moment([2007, 1, 28]).add({ s: 45 }), true), "\u043F\u04D7\u0440 \u043C\u0438\u043D\u0443\u0442", "45 seconds = a minute");e.equal(o.from(moment([2007, 1, 28]).add({ s: 89 }), true), "\u043F\u04D7\u0440 \u043C\u0438\u043D\u0443\u0442", "89 seconds = a minute");e.equal(o.from(moment([2007, 1, 28]).add({ s: 90 }), true), "2 \u043C\u0438\u043D\u0443\u0442", "90 seconds = 2 minutes");e.equal(o.from(moment([2007, 1, 28]).add({ m: 44 }), true), "44 \u043C\u0438\u043D\u0443\u0442", "44 minutes = 44 minutes");e.equal(o.from(moment([2007, 1, 28]).add({ m: 45 }), true), "\u043F\u04D7\u0440 \u0441\u0435\u0445\u0435\u0442", "45 minutes = an hour");e.equal(o.from(moment([2007, 1, 28]).add({ m: 89 }), true), "\u043F\u04D7\u0440 \u0441\u0435\u0445\u0435\u0442", "89 minutes = an hour");e.equal(o.from(moment([2007, 1, 28]).add({ m: 90 }), true), "2 \u0441\u0435\u0445\u0435\u0442", "90 minutes = 2 hours");e.equal(o.from(moment([2007, 1, 28]).add({ h: 5 }), true), "5 \u0441\u0435\u0445\u0435\u0442", "5 hours = 5 hours");e.equal(o.from(moment([2007, 1, 28]).add({ h: 21 }), true), "21 \u0441\u0435\u0445\u0435\u0442", "21 hours = 21 hours");e.equal(o.from(moment([2007, 1, 28]).add({ h: 22 }), true), "\u043F\u04D7\u0440 \u043A\u0443\u043D", "22 hours = a day");e.equal(o.from(moment([2007, 1, 28]).add({ h: 35 }), true), "\u043F\u04D7\u0440 \u043A\u0443\u043D", "35 hours = a day");e.equal(o.from(moment([2007, 1, 28]).add({ h: 36 }), true), "2 \u043A\u0443\u043D", "36 hours = 2 days");e.equal(o.from(moment([2007, 1, 28]).add({ d: 1 }), true), "\u043F\u04D7\u0440 \u043A\u0443\u043D", "1 day = a day");e.equal(o.from(moment([2007, 1, 28]).add({ d: 5 }), true), "5 \u043A\u0443\u043D", "5 days = 5 days");e.equal(o.from(moment([2007, 1, 28]).add({ d: 25 }), true), "25 \u043A\u0443\u043D", "25 days = 25 days");e.equal(o.from(moment([2007, 1, 28]).add({ d: 26 }), true), "\u043F\u04D7\u0440 \u0443\u0439\u04D1\u0445", "26 days = a month");e.equal(o.from(moment([2007, 1, 28]).add({ d: 30 }), true), "\u043F\u04D7\u0440 \u0443\u0439\u04D1\u0445", "30 days = a month");e.equal(o.from(moment([2007, 1, 28]).add({ d: 43 }), true), "\u043F\u04D7\u0440 \u0443\u0439\u04D1\u0445", "43 days = a month");e.equal(o.from(moment([2007, 1, 28]).add({ d: 46 }), true), "2 \u0443\u0439\u04D1\u0445", "46 days = 2 months");e.equal(o.from(moment([2007, 1, 28]).add({ d: 74 }), true), "2 \u0443\u0439\u04D1\u0445", "75 days = 2 months");e.equal(o.from(moment([2007, 1, 28]).add({ d: 76 }), true), "3 \u0443\u0439\u04D1\u0445", "76 days = 3 months");e.equal(o.from(moment([2007, 1, 28]).add({ M: 1 }), true), "\u043F\u04D7\u0440 \u0443\u0439\u04D1\u0445", "1 month = a month");e.equal(o.from(moment([2007, 1, 28]).add({ M: 5 }), true), "5 \u0443\u0439\u04D1\u0445", "5 months = 5 months");e.equal(o.from(moment([2007, 1, 28]).add({ d: 345 }), true), "\u043F\u04D7\u0440 \u04AB\u0443\u043B", "345 days = a year");e.equal(o.from(moment([2007, 1, 28]).add({ d: 548 }), true), "2 \u04AB\u0443\u043B", "548 days = 2 years");e.equal(o.from(moment([2007, 1, 28]).add({ y: 1 }), true), "\u043F\u04D7\u0440 \u04AB\u0443\u043B", "1 year = a year");e.equal(o.from(moment([2007, 1, 28]).add({ y: 5 }), true), "5 \u04AB\u0443\u043B", "5 years = 5 years");
});test("suffix", function (e) {
  e.equal(moment(3e4).from(0), "\u043F\u04D7\u0440-\u0438\u043A \u04AB\u0435\u043A\u043A\u0443\u043D\u0442\u0440\u0430\u043D", "prefix");e.equal(moment(0).from(3e4), "\u043F\u04D7\u0440-\u0438\u043A \u04AB\u0435\u043A\u043A\u0443\u043D\u0442 \u043A\u0430\u044F\u043B\u043B\u0430", "suffix");
});test("now from now", function (e) {
  e.equal(moment().fromNow(), "\u043F\u04D7\u0440-\u0438\u043A \u04AB\u0435\u043A\u043A\u0443\u043D\u0442 \u043A\u0430\u044F\u043B\u043B\u0430", "now from now should display as in the past");
});test("fromNow", function (e) {
  e.equal(moment().add({ s: 30 }).fromNow(), "\u043F\u04D7\u0440-\u0438\u043A \u04AB\u0435\u043A\u043A\u0443\u043D\u0442\u0440\u0430\u043D", "in a few seconds");e.equal(moment().add({ d: 5 }).fromNow(), "5 \u043A\u0443\u043D\u0440\u0430\u043D", "in 5 days");e.equal(moment().add({ h: 2 }).fromNow(), "2 \u0441\u0435\u0445\u0435\u0442\u0440\u0435\u043D", "in 2 hours, the right suffix!");e.equal(moment().add({ y: 3 }).fromNow(), "3 \u04AB\u0443\u043B\u0442\u0430\u043D", "in 3 years, the right suffix!");
});test("calendar day", function (e) {
  const o = moment().hours(12).minutes(0).seconds(0);
  e.equal(moment(o).calendar(), "\u041F\u0430\u044F\u043D 12:00 \u0441\u0435\u0445\u0435\u0442\u0440\u0435", "today at the same time");e.equal(moment(o).add({ m: 25 }).calendar(), "\u041F\u0430\u044F\u043D 12:25 \u0441\u0435\u0445\u0435\u0442\u0440\u0435", "Now plus 25 min");e.equal(moment(o).add({ h: 1 }).calendar(), "\u041F\u0430\u044F\u043D 13:00 \u0441\u0435\u0445\u0435\u0442\u0440\u0435", "Now plus 1 hour");e.equal(moment(o).add({ d: 1 }).calendar(), "\u042B\u0440\u0430\u043D 12:00 \u0441\u0435\u0445\u0435\u0442\u0440\u0435", "tomorrow at the same time");e.equal(moment(o).subtract({ h: 1 }).calendar(), "\u041F\u0430\u044F\u043D 11:00 \u0441\u0435\u0445\u0435\u0442\u0440\u0435", "Now minus 1 hour");e.equal(moment(o).subtract({ d: 1 }).calendar(), "\u04D6\u043D\u0435\u0440 12:00 \u0441\u0435\u0445\u0435\u0442\u0440\u0435", "yesterday at the same time");
});test("calendar next week", function (e) {
  var o;
  var a;
  for (o = 2; o < 7; o++) {
    a = moment().add({ d: o });e.equal(a.calendar(), a.format("[\u04AA\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]"), "Today + " + o + " days current time");a.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(a.calendar(), a.format("[\u04AA\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]"), "Today + " + o + " days beginning of day");a.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(a.calendar(), a.format("[\u04AA\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]"), "Today + " + o + " days end of day");
  }
});test("calendar last week", function (e) {
  var o;
  var a;
  for (o = 2; o < 7; o++) {
    a = moment().subtract({ d: o });e.equal(a.calendar(), a.format("[\u0418\u0440\u0442\u043D\u04D7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]"), "Today - " + o + " days current time");a.hours(0).minutes(0).seconds(0).milliseconds(0);e.equal(a.calendar(), a.format("[\u0418\u0440\u0442\u043D\u04D7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]"), "Today - " + o + " days beginning of day");a.hours(23).minutes(59).seconds(59).milliseconds(999);e.equal(a.calendar(), a.format("[\u0418\u0440\u0442\u043D\u04D7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]"), "Today - " + o + " days end of day");
  }
});test("calendar all else", function (e) {
  var o = moment().subtract({ w: 1 });
  var a = moment().add({ w: 1 });
  e.equal(o.calendar(), o.format("L"), "1 week ago");e.equal(a.calendar(), a.format("L"), "in 1 week");o = moment().subtract({ w: 2 });a = moment().add({ w: 2 });e.equal(o.calendar(), o.format("L"), "2 weeks ago");e.equal(a.calendar(), a.format("L"), "in 2 weeks");
});test("weeks year starting sunday formatted", function (e) {
  e.equal(moment([2011, 11, 26]).format("w ww wo"), "1 01 1-\u043C\u04D7\u0448", "Dec 26 2011 should be week 1");e.equal(moment([2012, 0, 1]).format("w ww wo"), "1 01 1-\u043C\u04D7\u0448", "Jan  1 2012 should be week 1");e.equal(moment([2012, 0, 2]).format("w ww wo"), "2 02 2-\u043C\u04D7\u0448", "Jan  2 2012 should be week 2");e.equal(moment([2012, 0, 8]).format("w ww wo"), "2 02 2-\u043C\u04D7\u0448", "Jan  8 2012 should be week 2");e.equal(moment([2012, 0, 9]).format("w ww wo"), "3 03 3-\u043C\u04D7\u0448", "Jan  9 2012 should be week 3");
});